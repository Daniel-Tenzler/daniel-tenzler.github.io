import React, { useState, useEffect } from 'react';
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
} from './JsonVisualizer.styles';

const JsonVisualizer = ({ initialValue }) => {
	const [inputValue, setInputValue] = useState(initialValue || '');
	const [outputValue, setOutputValue] = useState('');
	const [isValidJson, setIsValidJson] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

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

	useEffect(() => {
		validateAndFormatJson(initialValue || '');
	}, [initialValue]);

	return (
		<Container>
			<InputSection>
				<SectionTitle>JSON Input</SectionTitle>
				<InputField
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Enter JSON data here..."
					aria-label="JSON input field"
					aria-invalid={!!error}
					aria-describedby={
						error ? 'json-error' : success ? 'json-success' : undefined
					}
				/>
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
			</InputSection>

			<OutputSection>
				<SectionTitle>Formatted Output</SectionTitle>
				<OutputField>
					{outputValue ||
						'Enter valid JSON in the input field to see formatted output...'}
				</OutputField>
				<FormatButton
					onClick={handleFormatClick}
					disabled={!isValidJson}
					aria-label="Format JSON"
				>
					Format JSON
				</FormatButton>
			</OutputSection>
		</Container>
	);
};

JsonVisualizer.propTypes = {
	initialValue: PropTypes.string,
};

export default JsonVisualizer;
