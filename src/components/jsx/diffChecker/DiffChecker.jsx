import React, { useState } from 'react';
import { diffLines, diffWords, diffChars } from 'diff';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	ControlsContainer,
	DiffModeToggle,
	ToggleButton,
	OptionLabel,
	Checkbox,
	CompareButton,
	ButtonRow,
	InputContainer,
	InputColumn,
	ColumnHeader,
	ColumnTitle,
	LineNumber,
	Textarea,
	ResultContainer,
	ResultHeader,
	ResultContent,
	Line,
	Addition,
	Deletion,
	NoChange,
	ErrorMessage,
} from './DiffChecker.styles';

const DiffChecker = () => {
	const [originalText, setOriginalText] = useState('');
	const [modifiedText, setModifiedText] = useState('');
	const [diffMode, setDiffMode] = useState('lines'); // 'lines', 'words', 'chars'
	const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
	const [diffResult, setDiffResult] = useState(null);
	const [error, setError] = useState('');

	const handleCompare = () => {
		if (!originalText.trim() || !modifiedText.trim()) {
			setError('Please enter text in both fields to compare.');
			setDiffResult(null);
			return;
		}

		try {
			let original = originalText;
			let modified = modifiedText;

			if (ignoreWhitespace) {
				original = original.replace(/\s+/g, ' ').trim();
				modified = modified.replace(/\s+/g, ' ').trim();
			}

			let diff;
			if (diffMode === 'lines') {
				diff = diffLines(original, modified);
			} else if (diffMode === 'words') {
				diff = diffWords(original, modified);
			} else {
				diff = diffChars(original, modified);
			}

			setDiffResult(diff);
			setError('');
		} catch (err) {
			setError(`Error: ${err.message}`);
			setDiffResult(null);
		}
	};

	const handleClear = () => {
		setOriginalText('');
		setModifiedText('');
		setDiffResult(null);
		setError('');
	};

	const renderDiffResult = () => {
		if (!diffResult || diffResult.length === 0) {
			return <div>No differences found.</div>;
		}

		let lineNumber = 1;
		let lineIdCounter = 0;

		return diffResult.map((part) => {
			const lines = part.value.split('\n');
			const lastLineIndex = lines.length - 1;

			const renderedLines = lines.map((line, lineIndex) => {
				if (lineIndex === lastLineIndex && line === '') {
					return null; // Skip empty line at the end
				}

				let LineComponent = NoChange;

				if (part.added) {
					LineComponent = Addition;
				} else if (part.removed) {
					LineComponent = Deletion;
				}

				const lineElement = (
					<Line key={`diff-line-${lineIdCounter++}`}>
						<LineNumber>{lineNumber}</LineNumber>
						<LineComponent>{line}</LineComponent>
					</Line>
				);

				if (!part.removed) {
					lineNumber++;
				}

				return lineElement;
			});

			return renderedLines;
		});
	};

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>Diff Checker</SectionTitle>
				</SectionHeader>

				<ControlsContainer>
					<DiffModeToggle>
						<ToggleButton
							active={diffMode === 'lines'}
							onClick={() => setDiffMode('lines')}
							type="button"
						>
							Line Diff
						</ToggleButton>
						<ToggleButton
							active={diffMode === 'words'}
							onClick={() => setDiffMode('words')}
							type="button"
						>
							Word Diff
						</ToggleButton>
						<ToggleButton
							active={diffMode === 'chars'}
							onClick={() => setDiffMode('chars')}
							type="button"
						>
							Char Diff
						</ToggleButton>
					</DiffModeToggle>

					<OptionLabel>
						<Checkbox
							type="checkbox"
							checked={ignoreWhitespace}
							onChange={(e) =>
								setIgnoreWhitespace(e.target.checked)
							}
							id="ignore-whitespace"
						/>
						Ignore Whitespace
					</OptionLabel>
				</ControlsContainer>

				{error && <ErrorMessage role="alert">{error}</ErrorMessage>}

				<InputContainer>
					<InputColumn>
						<ColumnHeader>
							<ColumnTitle>Original Text</ColumnTitle>
						</ColumnHeader>
						<Textarea
							value={originalText}
							onChange={(e) => setOriginalText(e.target.value)}
							placeholder="Enter original text here..."
							aria-label="Original text input"
							spellCheck={false}
						/>
					</InputColumn>

					<InputColumn>
						<ColumnHeader>
							<ColumnTitle>Modified Text</ColumnTitle>
						</ColumnHeader>
						<Textarea
							value={modifiedText}
							onChange={(e) => setModifiedText(e.target.value)}
							placeholder="Enter modified text here..."
							aria-label="Modified text input"
							spellCheck={false}
						/>
					</InputColumn>
				</InputContainer>

				<ButtonRow>
					<CompareButton onClick={handleCompare} type="button">
						Compare
					</CompareButton>
					<button onClick={handleClear} type="button">
						Clear
					</button>
				</ButtonRow>

				{diffResult && (
					<ResultContainer>
						<ResultHeader>Diff Result</ResultHeader>
						<ResultContent>{renderDiffResult()}</ResultContent>
					</ResultContainer>
				)}
			</ContentWrapper>
		</Container>
	);
};

export default DiffChecker;
