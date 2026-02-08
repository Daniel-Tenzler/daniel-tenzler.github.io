import React, { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import InputOutput from 'src/components/jsx/tools/shared/InputOutput';
import CopyButton from 'src/components/jsx/tools/shared/CopyButton';
import ClearButton from 'src/components/jsx/tools/shared/ClearButton';
import {
	ControlsContainer,
	OptionsContainer,
	OptionLabel,
	Select,
	Checkbox,
	ButtonsContainer,
	StatsContainer,
	StatItem,
	StatLabel,
	StatValue,
} from './CsvToJson.styles';

const DELIMITERS = [
	{ value: ',', label: 'Comma (,)' },
	{ value: ';', label: 'Semicolon (;)' },
	{ value: '\t', label: 'Tab' },
	{ value: '|', label: 'Pipe (|)' },
];

const CsvToJson = () => {
	const [csvInput, setCsvInput] = useState('');
	const [jsonOutput, setJsonOutput] = useState('');
	const [error, setError] = useState('');
	const [delimiter, setDelimiter] = useState(',');
	const [hasHeader, setHasHeader] = useState(true);
	const [copied, setCopied] = useState(false);
	const [rowCount, setRowCount] = useState(0);

	const convert = useMemo(() => {
		return () => {
			if (!csvInput.trim()) {
				setJsonOutput('');
				setError('');
				setRowCount(0);
				return;
			}

			try {
				const results = Papa.parse(csvInput, {
					delimiter: delimiter,
					header: hasHeader,
					skipEmptyLines: true,
					transformHeader: (header) => header.trim(),
				});

				if (results.errors && results.errors.length > 0) {
					const firstError = results.errors[0];
					setError(
						`Error at row ${firstError.row}: ${firstError.message}`
					);
					setJsonOutput('');
					setRowCount(0);
					return;
				}

				if (hasHeader) {
					setJsonOutput(JSON.stringify(results.data, null, 2));
					setRowCount(results.data.length);
				} else {
					// For no header, just output array of arrays
					setJsonOutput(JSON.stringify(results.data, null, 2));
					setRowCount(results.data.length);
				}
				setError('');
			} catch (err) {
				setError(`Error: ${err.message}`);
				setJsonOutput('');
				setRowCount(0);
			}
		};
	}, [csvInput, delimiter, hasHeader]);

	useEffect(() => {
		convert();
	}, [convert]);

	const handleInputChange = (e) => {
		setCsvInput(e.target.value);
	};

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleClear = () => {
		setCsvInput('');
		setJsonOutput('');
		setError('');
		setRowCount(0);
	};

	const controls = (
		<ControlsContainer>
			<OptionsContainer>
				<OptionLabel htmlFor="delimiter-select">
					Delimiter:
					<Select
						id="delimiter-select"
						value={delimiter}
						onChange={(e) => setDelimiter(e.target.value)}
					>
						{DELIMITERS.map((d) => (
							<option key={d.value} value={d.value}>
								{d.label}
							</option>
						))}
					</Select>
				</OptionLabel>

				<OptionLabel>
					<Checkbox
						type="checkbox"
						checked={hasHeader}
						onChange={(e) => setHasHeader(e.target.checked)}
						id="has-header"
					/>
					Has Header Row
				</OptionLabel>
			</OptionsContainer>

			{rowCount > 0 && (
				<StatsContainer>
					<StatItem>
						<StatLabel>Rows:</StatLabel>
						<StatValue>{rowCount}</StatValue>
					</StatItem>
				</StatsContainer>
			)}

			<ButtonsContainer>
				<CopyButton
					text={jsonOutput}
					onCopy={handleCopy}
					copied={copied}
				/>
				<ClearButton onClear={handleClear} />
			</ButtonsContainer>
		</ControlsContainer>
	);

	return (
		<InputOutput
			title="CSV to JSON Converter"
			inputValue={csvInput}
			outputValue={jsonOutput}
			inputLabel="CSV Input"
			outputLabel="JSON Output"
			onInputChange={handleInputChange}
			inputPlaceholder="Enter CSV data here...
Example:
name,age,city
John,30,New York
Jane,25,London"
			outputPlaceholder="JSON output will appear here..."
			error={error}
		>
			{controls}
		</InputOutput>
	);
};

export default CsvToJson;
