import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	InputSection,
	OutputSection,
	SectionTitle,
	InputField,
	OutputField,
	ErrorMessage,
	SuccessMessage,
	FormatButton,
	CopyButton,
	ButtonsContainer,
	MessagesContainer,
	InputContentWrapper,
	OutputContentWrapper,
	Separator,
	SectionHeader,
	FullscreenButton,
} from './JsonVisualizer.styles';

const JsonVisualizer = ({ initialValue }) => {
	const [inputValue, setInputValue] = useState(initialValue || '');
	const [outputValue, setOutputValue] = useState('');
	const [isValidJson, setIsValidJson] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [copySuccess, setCopySuccess] = useState('');
	const [dividerPosition, setDividerPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const containerRef = useRef(null);
	const MIN_WIDTH_PERCENT = 20;
	const MAX_WIDTH_PERCENT = 80;

	const validateAndFormatJson = (jsonString) => {
		if (!jsonString.trim()) {
			setOutputValue('');
			setIsValidJson(false);
			setError('');
			setSuccess('');
			return;
		}

		try {
			const parsed = JSON.parse(jsonString);
			const formatted = JSON.stringify(parsed, null, 2);
			setOutputValue(formatted);
			setIsValidJson(true);
			setError('');
			setSuccess('Valid JSON! Formatted and displayed.');
		} catch (e) {
			setOutputValue('');
			setIsValidJson(false);
			setError(`Invalid JSON: ${e.message}`);
			setSuccess('');
		}
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
		validateAndFormatJson(value);
	};

	const handleFormatClick = () => {
		if (isValidJson && outputValue) {
			setInputValue(outputValue);
			validateAndFormatJson(outputValue);
		}
	};

	const handleCopyClick = async () => {
		if (!outputValue) return;

		try {
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

	const handleDrag = useCallback(
		(clientX) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const relativeX = clientX - rect.left;
			const newPosition = (relativeX / rect.width) * 100;
			const clampedPosition = Math.min(
				MAX_WIDTH_PERCENT,
				Math.max(MIN_WIDTH_PERCENT, newPosition),
			);
			setDividerPosition(clampedPosition);
		},
		[MAX_WIDTH_PERCENT, MIN_WIDTH_PERCENT],
	);

	const handleMouseDown = (event) => {
		event.preventDefault();
		setIsDragging(true);
		handleDrag(event.clientX);
	};

	useEffect(() => {
		if (!isDragging) {
			document.body.style.userSelect = '';
			return undefined;
		}

		const handleMouseMove = (event) => {
			handleDrag(event.clientX);
		};

		const handleMouseUp = () => {
			setIsDragging(false);
		};

		document.body.style.userSelect = 'none';
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.body.style.userSelect = '';
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [handleDrag, isDragging]);

	useEffect(() => {
		validateAndFormatJson(initialValue || '');
	}, [initialValue]);

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

	const inputSectionStyle = isFullscreen
		? { flexBasis: `${dividerPosition}%`, height: '100%' }
		: { flexBasis: `${dividerPosition}%` };

	const outputSectionStyle = isFullscreen
		? { flexBasis: `${100 - dividerPosition}%`, height: '100%' }
		: { flexBasis: `${100 - dividerPosition}%` };

	return (
		<Container ref={containerRef} isFullscreen={isFullscreen}>
			<InputSection
				isFullscreen={isFullscreen}
				style={inputSectionStyle}
			>
				<InputContentWrapper isFullscreen={isFullscreen}>
					<SectionHeader>
						<SectionTitle>JSON Input</SectionTitle>
					</SectionHeader>
					<InputField
						isFullscreen={isFullscreen}
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Enter JSON data here..."
						aria-label="JSON input field"
						aria-invalid={!!error}
						aria-describedby={
							error ? 'json-error' : success ? 'json-success' : undefined
						}
					/>
					<MessagesContainer>
						{error && (
							<ErrorMessage id="json-error" role="alert">
								{error}
							</ErrorMessage>
						)}
						{success && (
							<SuccessMessage id="json-success" role="status">
								{success}
							</SuccessMessage>
						)}
					</MessagesContainer>
				</InputContentWrapper>
			</InputSection>

			<Separator
				onMouseDown={handleMouseDown}
				role="separator"
				aria-orientation="vertical"
				aria-label="Resize panels"
				aria-valuemin={MIN_WIDTH_PERCENT}
				aria-valuemax={MAX_WIDTH_PERCENT}
				aria-valuenow={dividerPosition}
				className={isDragging ? 'dragging' : ''}
				isFullscreen={isFullscreen}
			/>

			<OutputSection
				isFullscreen={isFullscreen}
				style={outputSectionStyle}
			>
				<OutputContentWrapper isFullscreen={isFullscreen}>
					<SectionHeader>
						<SectionTitle>Formatted Output</SectionTitle>
						<FullscreenButton
							type="button"
							onClick={toggleFullscreen}
							aria-pressed={isFullscreen}
							aria-label={
								isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'
							}
						>
							{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
						</FullscreenButton>
					</SectionHeader>
					<OutputField isFullscreen={isFullscreen}>
						{outputValue ||
							'Enter valid JSON in the input field to see formatted output...'}
					</OutputField>
					<ButtonsContainer>
						<FormatButton
							onClick={handleFormatClick}
							disabled={!isValidJson}
							aria-label="Format JSON"
						>
							Format JSON
						</FormatButton>
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
