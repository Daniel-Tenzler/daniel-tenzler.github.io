import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	OutputSection,
	SectionTitle,
	OutputField,
	ErrorMessage,
	SuccessMessage,
	CopyButton,
	ImportButton,
	ButtonsContainer,
	MessagesContainer,
	OutputContentWrapper,
	SectionHeader,
	FullscreenButton,
} from './JsonVisualizer.styles';

const JsonVisualizer = ({ initialValue }) => {
	const [outputValue, setOutputValue] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [isFading, setIsFading] = useState(false);
	const [copySuccess, setCopySuccess] = useState('');
	const [isFullscreen, setIsFullscreen] = useState(false);

	const validateAndFormatJson = (jsonString) => {
		if (!jsonString.trim()) {
			setOutputValue('');
			setError('');
			setSuccess('');
			return;
		}

		try {
			const parsed = JSON.parse(jsonString);
			const formatted = JSON.stringify(parsed, null, 2);
			setOutputValue(formatted);
			setError('');
			setSuccess('Valid JSON! Formatted and displayed.');
		} catch (e) {
			setOutputValue('');
			setError(`Invalid JSON: ${e.message}`);
			setSuccess('');
		}
	};

	const handleImportFromClipboard = async () => {
		try {
			// eslint-disable-next-line no-undef
			const text = await navigator.clipboard.readText();
			validateAndFormatJson(text);
		} catch (err) {
			console.error('Failed to read clipboard: ', err);
			setError(
				'Failed to read from clipboard. Please check permissions.'
			);
			setSuccess('');
		}
	};

	const handleCopyClick = async () => {
		if (!outputValue) return;

		try {
			// eslint-disable-next-line no-undef
			await navigator.clipboard.writeText(outputValue);
			setCopySuccess('Copied!');
			setTimeout(() => setCopySuccess(''), 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
			setCopySuccess('Failed to copy');
		}
	};

	const toggleFullscreen = () => {
		setIsFullscreen((prev) => !prev);
	};

	useEffect(() => {
		validateAndFormatJson(initialValue || '');
	}, [initialValue]);

	useEffect(() => {
		if (!success) {
			setIsFading(false);
			return undefined;
		}

		// Start fading after 3 seconds
		const fadeTimer = setTimeout(() => {
			setIsFading(true);
		}, 3000);

		// Clear message after 5 seconds total (3s visible + 2s fade)
		const clearTimer = setTimeout(() => {
			setSuccess('');
			setIsFading(false);
		}, 5000);

		return () => {
			clearTimeout(fadeTimer);
			clearTimeout(clearTimer);
		};
	}, [success]);

	useEffect(() => {
		if (!isFullscreen) {
			document.body.style.overflow = '';
			return undefined;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isFullscreen]);

	return (
		<Container isFullscreen={isFullscreen}>
			<OutputSection isFullscreen={isFullscreen}>
				<OutputContentWrapper isFullscreen={isFullscreen}>
					<SectionHeader>
						<SectionTitle>JSON Visualizer</SectionTitle>
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
					<OutputField isFullscreen={isFullscreen}>
						{outputValue ||
							'Click "Import from Clipboard" to paste and format JSON...'}
					</OutputField>
					<MessagesContainer>
						{error && (
							<ErrorMessage id="json-error" role="alert">
								{error}
							</ErrorMessage>
						)}
						{success && (
							<SuccessMessage
								id="json-success"
								role="status"
								fading={isFading}
							>
								{success}
							</SuccessMessage>
						)}
					</MessagesContainer>
					<ButtonsContainer>
						<ImportButton
							onClick={handleImportFromClipboard}
							aria-label="Import JSON from clipboard"
						>
							Import from Clipboard
						</ImportButton>
						<CopyButton
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
