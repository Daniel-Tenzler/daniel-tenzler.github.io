import React, { useState, useEffect, useRef, useCallback } from 'react';
// @ts-expect-error -- prop-types ships no types; runtime-only import
import PropTypes from 'prop-types';
import type {
	JsonVisualizerProps,
	JsonErrorDetail,
} from './JsonVisualizer.types';
import type { IndentPreset, SimpleJsonSchema } from './jsonVisualizer.utils';
import {
	parseJson,
	formatJson,
	minifyJson,
	sortKeys,
	removeEmptyValues,
	resolveIndent,
	queryJson,
	validateJsonSchema,
	encodeSharePayload,
	decodeSharePayload,
} from './jsonVisualizer.utils';
import {
	Container,
	InputSection,
	OutputSection,
	SectionTitle,
	SectionHeader,
	InputContentWrapper,
	OutputContentWrapper,
	InputField,
	OutputField,
	Separator,
	ErrorMessage,
	ErrorHint,
	SuccessMessage,
	CopyButton,
	ImportButton,
	ButtonsContainer,
	MessagesContainer,
	FullscreenButton,
	ToolbarContainer,
	ToolbarButton,
	ToolbarSeparator,
	IndentSelect,
} from './JsonVisualizer.styles';
import JsonTreeView from './JsonTreeView';
import JsonQueryPanel from './JsonQueryPanel';
import JsonSchemaPanel from './JsonSchemaPanel';
import { PanelsGrid } from './JsonToolPanels.styles';

const DEBOUNCE_MS = 300;
const ACTION_MESSAGE_TIMEOUT = 2500;
const COPY_MESSAGE_TIMEOUT = 2000;

const DEFAULT_SCHEMA = `{
	"type": "object",
	"required": ["name"],
	"properties": {
		"name": { "type": "string" }
	}
}`;

/**
 * Extract line and column information from a JSON parse error message.
 * JavaScript engines typically report errors as "...at position N".
 */
function extractErrorDetail(rawError: string, input: string): JsonErrorDetail {
	const positionMatch = rawError.match(/at position (\d+)/);
	if (positionMatch) {
		const position = parseInt(positionMatch[1], 10);
		const upToPosition = input.substring(0, position);
		const lines = upToPosition.split('\n');
		const line = lines.length;
		const column = lines[lines.length - 1].length + 1;
		return { message: rawError, line, column };
	}
	return { message: rawError };
}

const JsonVisualizer = ({ initialValue = '' }: JsonVisualizerProps) => {
	const [inputValue, setInputValue] = useState(initialValue);
	const [outputValue, setOutputValue] = useState('');
	const [parsedValue, setParsedValue] = useState<unknown>(null);
	const [errorDetail, setErrorDetail] = useState<JsonErrorDetail | null>(
		null
	);
	const [success, setSuccess] = useState('');
	const [copySuccess, setCopySuccess] = useState('');
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [indentPreset, setIndentPreset] = useState<IndentPreset>('2spaces');
	const [treeSearch, setTreeSearch] = useState('');
	const [queryInput, setQueryInput] = useState('');
	const [queryOutput, setQueryOutput] = useState('');
	const [queryError, setQueryError] = useState('');
	const [schemaInput, setSchemaInput] = useState(DEFAULT_SCHEMA);
	const [schemaOutput, setSchemaOutput] = useState('');
	const isFirstRender = useRef(true);
	const indentRef = useRef<IndentPreset>('2spaces');
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const copyTimeoutRef = useRef<number | null>(null);
	const actionTimeoutRef = useRef<number | null>(null);
	const shortcutsEnabledRef = useRef(true);

	// Keep the indent ref in sync with state so performParse always uses
	// the latest value without needing to be recreated.
	useEffect(() => {
		indentRef.current = indentPreset;
	}, [indentPreset]);

	const performParse = useCallback((text: string) => {
		if (!text.trim()) {
			setOutputValue('');
			setParsedValue(null);
			setErrorDetail(null);
			setSuccess('');
			setQueryOutput('');
			setQueryError('');
			setSchemaOutput('');
			return;
		}

		const result = parseJson(text);
		if (result.ok) {
			const formatted = formatJson(
				result.value,
				resolveIndent(indentRef.current)
			);
			setParsedValue(result.value);
			setOutputValue(formatted);
			setErrorDetail(null);
			setSuccess('Valid JSON');
		} else {
			const detail = extractErrorDetail(result.error, text);
			setParsedValue(null);
			setOutputValue('');
			setErrorDetail(detail);
			setSuccess('');
			setQueryOutput('');
			setQueryError('');
			setSchemaOutput('');
		}
	}, []);

	// Debounced parsing on input change; immediate on first render
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			performParse(inputValue);
			return undefined;
		}

		const timer = setTimeout(() => {
			performParse(inputValue);
		}, DEBOUNCE_MS);

		return () => clearTimeout(timer);
	}, [inputValue, performParse]);

	// Re-initialize when the initialValue prop changes externally
	useEffect(() => {
		setInputValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}
		const url = new URL(window.location.href);
		const sharedData = url.searchParams.get('data');
		if (!sharedData) {
			return;
		}
		const decoded = decodeSharePayload(sharedData);
		if (decoded.ok && typeof decoded.value === 'string') {
			setInputValue(decoded.value);
			setSuccess('Loaded shared JSON from URL');
		}
	}, []);

	// Re-format immediately (no debounce) when indent preset changes
	useEffect(() => {
		performParse(inputValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indentPreset]);

	// Toolbar buttons are disabled when input is empty or contains invalid JSON
	const isJsonValid =
		inputValue.trim().length > 0 && !errorDetail && outputValue.length > 0;

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};

	const handleImportFromClipboard = async () => {
		try {
			const text = await navigator.clipboard.readText();
			setInputValue(text);
		} catch (err) {
			console.error('Failed to read clipboard: ', err);
			setErrorDetail({
				message:
					'Failed to read from clipboard. Please check permissions.',
			});
			setSuccess('');
		}
	};

	const handleCopyClick = async () => {
		if (!outputValue) return;

		try {
			await navigator.clipboard.writeText(outputValue);
			setCopySuccess('Copied!');
			if (copyTimeoutRef.current) {
				window.clearTimeout(copyTimeoutRef.current);
			}
			copyTimeoutRef.current = window.setTimeout(() => {
				setCopySuccess('');
			}, COPY_MESSAGE_TIMEOUT);
		} catch (err) {
			console.error('Failed to copy text: ', err);
			setCopySuccess('Failed to copy');
		}
	};

	const handleCopyEscaped = async () => {
		if (!outputValue) {
			return;
		}
		try {
			await navigator.clipboard.writeText(JSON.stringify(outputValue));
			setCopySuccess('Escaped JSON copied');
			if (copyTimeoutRef.current) {
				window.clearTimeout(copyTimeoutRef.current);
			}
			copyTimeoutRef.current = window.setTimeout(() => {
				setCopySuccess('');
			}, COPY_MESSAGE_TIMEOUT);
		} catch (err) {
			console.error('Failed to copy escaped string: ', err);
			setCopySuccess('Failed to copy escaped string');
		}
	};

	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				setInputValue(reader.result);
			}
		};
		reader.onerror = () => {
			setErrorDetail({
				message: 'Failed to read uploaded file.',
			});
		};
		reader.readAsText(file);
		event.target.value = '';
	};

	const handleDownload = () => {
		if (!outputValue || typeof window === 'undefined') {
			return;
		}
		const blob = new Blob([outputValue], { type: 'application/json' });
		const objectUrl = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = objectUrl;
		link.download = 'formatted.json';
		link.click();
		URL.revokeObjectURL(objectUrl);
	};

	const handleShareLink = async () => {
		if (!inputValue.trim() || typeof window === 'undefined') {
			return;
		}
		const encoded = encodeSharePayload(inputValue);
		const url = new URL(window.location.href);
		url.searchParams.set('data', encoded);
		window.history.replaceState({}, '', url.toString());
		try {
			await navigator.clipboard.writeText(url.toString());
			setCopySuccess('Share URL copied');
			if (copyTimeoutRef.current) {
				window.clearTimeout(copyTimeoutRef.current);
			}
			copyTimeoutRef.current = window.setTimeout(() => {
				setCopySuccess('');
			}, COPY_MESSAGE_TIMEOUT);
		} catch (error) {
			console.error('Failed to copy share URL: ', error);
			setCopySuccess('Share URL updated in browser');
		}
	};

	const toggleFullscreen = () => {
		setIsFullscreen((prev) => !prev);
	};

	const showActionStatus = (message: string) => {
		setSuccess(message);
		if (actionTimeoutRef.current) {
			window.clearTimeout(actionTimeoutRef.current);
		}
		actionTimeoutRef.current = window.setTimeout(() => {
			setSuccess('');
		}, ACTION_MESSAGE_TIMEOUT);
	};

	const handleFormat = () => {
		const result = parseJson(inputValue);
		if (result.ok) {
			const formatted = formatJson(
				result.value,
				resolveIndent(indentPreset)
			);
			setInputValue(formatted);
			showActionStatus('Formatted');
		}
	};

	const handleMinify = () => {
		const result = parseJson(inputValue);
		if (result.ok) {
			const minified = minifyJson(result.value);
			setInputValue(minified);
			showActionStatus('Minified');
		}
	};

	const handleSortKeys = () => {
		const result = parseJson(inputValue);
		if (result.ok) {
			const sorted = sortKeys(result.value);
			const formatted = formatJson(sorted, resolveIndent(indentPreset));
			setInputValue(formatted);
			showActionStatus('Keys sorted alphabetically');
		}
	};

	const handleRemoveEmpty = () => {
		const result = parseJson(inputValue);
		if (result.ok) {
			const cleaned = removeEmptyValues(result.value);
			const formatted = formatJson(cleaned, resolveIndent(indentPreset));
			setInputValue(formatted);
			showActionStatus('Empty values removed');
		}
	};

	const handleIndentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setIndentPreset(e.target.value as IndentPreset);
	};

	const handleRunQuery = () => {
		if (!queryInput.trim()) {
			setQueryOutput('');
			setQueryError('Provide a query path first.');
			return;
		}
		if (parsedValue === null || parsedValue === undefined) {
			setQueryOutput('');
			setQueryError('No valid JSON to query.');
			return;
		}
		const queryResult = queryJson(parsedValue, queryInput);
		if (queryResult.ok) {
			setQueryError('');
			setQueryOutput(
				formatJson(queryResult.value, resolveIndent(indentPreset))
			);
		} else {
			setQueryOutput('');
			setQueryError(queryResult.error);
		}
	};

	const handleValidateSchema = () => {
		if (parsedValue === null || parsedValue === undefined) {
			setSchemaOutput('No valid JSON payload to validate.');
			return;
		}
		const parsedSchemaResult = parseJson(schemaInput);
		if (!parsedSchemaResult.ok) {
			setSchemaOutput(`Invalid schema JSON: ${parsedSchemaResult.error}`);
			return;
		}
		const schema = parsedSchemaResult.value as SimpleJsonSchema;
		const validation = validateJsonSchema(parsedValue, schema);
		if (validation.valid) {
			setSchemaOutput('Schema validation passed.');
			return;
		}
		const messages = validation.errors
			.map((item) => `${item.path}: ${item.message}`)
			.join('\n');
		setSchemaOutput(`Schema validation failed:\n${messages}`);
	};

	const handleCopyPath = async (path: string) => {
		try {
			await navigator.clipboard.writeText(path);
			setCopySuccess(`Path copied: ${path}`);
			if (copyTimeoutRef.current) {
				window.clearTimeout(copyTimeoutRef.current);
			}
			copyTimeoutRef.current = window.setTimeout(() => {
				setCopySuccess('');
			}, COPY_MESSAGE_TIMEOUT);
		} catch (error) {
			console.error('Failed to copy path: ', error);
			setCopySuccess('Failed to copy path');
		}
	};

	useEffect(() => {
		if (!isFullscreen) {
			document.body.style.overflow = '';
			return undefined;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsFullscreen(false);
			}
		};
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isFullscreen]);

	useEffect(() => {
		const cleanup = () => {
			if (copyTimeoutRef.current) {
				window.clearTimeout(copyTimeoutRef.current);
			}
			if (actionTimeoutRef.current) {
				window.clearTimeout(actionTimeoutRef.current);
			}
		};
		return cleanup;
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}
		const runFormatShortcut = () => {
			const result = parseJson(inputValue);
			if (!result.ok) {
				return;
			}
			setInputValue(
				formatJson(result.value, resolveIndent(indentPreset))
			);
			showActionStatus('Formatted');
		};

		const runMinifyShortcut = () => {
			const result = parseJson(inputValue);
			if (!result.ok) {
				return;
			}
			setInputValue(minifyJson(result.value));
			showActionStatus('Minified');
		};

		const runCopyShortcut = async () => {
			if (!outputValue) {
				return;
			}
			try {
				await navigator.clipboard.writeText(outputValue);
				setCopySuccess('Copied!');
				if (copyTimeoutRef.current) {
					window.clearTimeout(copyTimeoutRef.current);
				}
				copyTimeoutRef.current = window.setTimeout(() => {
					setCopySuccess('');
				}, COPY_MESSAGE_TIMEOUT);
			} catch (error) {
				console.error('Failed to copy text: ', error);
				setCopySuccess('Failed to copy');
			}
		};

		const handleShortcut = (event: KeyboardEvent) => {
			if (!shortcutsEnabledRef.current) {
				return;
			}
			const isPrimary = event.metaKey || event.ctrlKey;
			if (!isPrimary) {
				return;
			}
			if (event.key === 'Enter') {
				event.preventDefault();
				runFormatShortcut();
			}
			if (event.key.toLowerCase() === 'm' && event.shiftKey) {
				event.preventDefault();
				runMinifyShortcut();
			}
			if (event.key.toLowerCase() === 'c' && event.shiftKey) {
				event.preventDefault();
				void runCopyShortcut();
			}
		};
		window.addEventListener('keydown', handleShortcut);
		return () => window.removeEventListener('keydown', handleShortcut);
	}, [inputValue, indentPreset, outputValue]);

	return (
		<Container isFullscreen={isFullscreen}>
			<InputSection isFullscreen={isFullscreen}>
				<InputContentWrapper isFullscreen={isFullscreen}>
					<SectionHeader>
						<SectionTitle>Input</SectionTitle>
					</SectionHeader>
					<ToolbarContainer
						role="toolbar"
						aria-label="JSON transform actions"
					>
						<ToolbarButton
							type="button"
							onClick={handleFormat}
							disabled={!isJsonValid}
							aria-label="Format JSON with indentation"
						>
							Format
						</ToolbarButton>
						<ToolbarButton
							type="button"
							onClick={handleMinify}
							disabled={!isJsonValid}
							aria-label="Minify JSON"
						>
							Minify
						</ToolbarButton>
						<ToolbarSeparator aria-hidden="true" />
						<ToolbarButton
							type="button"
							onClick={handleSortKeys}
							disabled={!isJsonValid}
							aria-label="Sort JSON keys alphabetically"
						>
							Sort Keys
						</ToolbarButton>
						<ToolbarButton
							type="button"
							onClick={handleRemoveEmpty}
							disabled={!isJsonValid}
							aria-label="Remove empty values from JSON"
						>
							Remove Empty
						</ToolbarButton>
						<ToolbarSeparator aria-hidden="true" />
						<IndentSelect
							value={indentPreset}
							onChange={handleIndentChange}
							aria-label="Indentation style"
						>
							<option value="2spaces">2 Spaces</option>
							<option value="4spaces">4 Spaces</option>
							<option value="tab">Tab</option>
						</IndentSelect>
					</ToolbarContainer>
					<InputField
						isFullscreen={isFullscreen}
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Paste or type JSON here..."
						spellCheck={false}
						aria-label="JSON input editor"
					/>
				</InputContentWrapper>
			</InputSection>

			<Separator isFullscreen={isFullscreen} />

			<OutputSection isFullscreen={isFullscreen}>
				<OutputContentWrapper isFullscreen={isFullscreen}>
					<SectionHeader>
						<SectionTitle>Output</SectionTitle>
						<FullscreenButton
							type="button"
							onClick={toggleFullscreen}
							aria-pressed={isFullscreen}
							aria-label={
								isFullscreen
									? 'Exit fullscreen'
									: 'Enter fullscreen'
							}
						>
							{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
						</FullscreenButton>
					</SectionHeader>
					<OutputField
						isFullscreen={isFullscreen}
						role="region"
						aria-live="polite"
						aria-label="Formatted JSON output"
					>
						{outputValue || 'Formatted JSON will appear here...'}
					</OutputField>
					<JsonTreeView
						data={parsedValue}
						searchTerm={treeSearch}
						onSearchChange={setTreeSearch}
						onCopyPath={handleCopyPath}
					/>
					<PanelsGrid>
						<JsonQueryPanel
							query={queryInput}
							onQueryChange={setQueryInput}
							onRunQuery={handleRunQuery}
							result={queryOutput}
							error={queryError}
							disabled={!isJsonValid}
						/>
						<JsonSchemaPanel
							schemaInput={schemaInput}
							onSchemaChange={setSchemaInput}
							onValidate={handleValidateSchema}
							result={schemaOutput}
							disabled={!isJsonValid}
						/>
					</PanelsGrid>
					<MessagesContainer>
						{errorDetail && (
							<ErrorMessage id="json-error" role="alert">
								{errorDetail.message}
								{errorDetail.line != null &&
									errorDetail.column != null && (
										<ErrorHint>
											Line {errorDetail.line}, Column{' '}
											{errorDetail.column}
										</ErrorHint>
									)}
							</ErrorMessage>
						)}
						{success && (
							<SuccessMessage id="json-success" role="status">
								{success}
							</SuccessMessage>
						)}
					</MessagesContainer>
					<ButtonsContainer>
						<input
							ref={fileInputRef}
							type="file"
							accept="application/json,.json,text/plain"
							onChange={handleUploadChange}
							style={{ display: 'none' }}
						/>
						<ImportButton
							type="button"
							onClick={handleUploadClick}
							aria-label="Upload JSON file"
						>
							Upload File
						</ImportButton>
						<ImportButton
							type="button"
							onClick={handleImportFromClipboard}
							aria-label="Import JSON from clipboard"
						>
							Import from Clipboard
						</ImportButton>
						<ImportButton
							type="button"
							onClick={handleDownload}
							disabled={!outputValue}
							aria-label="Download formatted JSON"
						>
							Download
						</ImportButton>
						<ImportButton
							type="button"
							onClick={handleShareLink}
							disabled={!inputValue.trim()}
							aria-label="Create share URL"
						>
							Share URL
						</ImportButton>
						<CopyButton
							type="button"
							onClick={handleCopyEscaped}
							disabled={!outputValue}
							aria-label="Copy escaped JSON string"
						>
							Copy Escaped
						</CopyButton>
						<CopyButton
							type="button"
							onClick={handleCopyClick}
							disabled={!outputValue}
							aria-label="Copy Output"
						>
							{copySuccess || 'Copy All'}
						</CopyButton>
					</ButtonsContainer>
				</OutputContentWrapper>
			</OutputSection>
		</Container>
	);
};

JsonVisualizer.propTypes = {
	initialValue: PropTypes.string,
};

export default JsonVisualizer;
