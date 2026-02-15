import React, { useState, useEffect, useMemo } from 'react';
import yaml from 'js-yaml';
import InputOutput from 'src/components/jsx/tools/shared/InputOutput';
import CopyButton from 'src/components/jsx/tools/shared/CopyButton';
import ClearButton from 'src/components/jsx/tools/shared/ClearButton';
import {
	ControlsContainer,
	DirectionToggle,
	ToggleButton,
	OptionsContainer,
	OptionLabel,
	Select,
	Checkbox,
	ButtonsContainer,
} from './YamlConverter.styles';

type Direction = 'yamlToJson' | 'jsonToYaml';

const YamlConverter = () => {
	const [direction, setDirection] = useState<Direction>('yamlToJson');
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const [error, setError] = useState('');
	const [indent, setIndent] = useState(2);
	const [sortKeys, setSortKeys] = useState(false);
	const [copied, setCopied] = useState(false);

	const convert = useMemo(() => {
		return () => {
			if (!input.trim()) {
				setOutput('');
				setError('');
				return;
			}

			try {
				if (direction === 'yamlToJson') {
					const parsed = yaml.load(input, {
						schema: yaml.FAILSAFE_SCHEMA,
					});
					const json = JSON.stringify(
						parsed,
						null,
						indent === 2 ? 2 : 4
					);
					setOutput(json);
					setError('');
				} else {
					const parsed = JSON.parse(input);
					const yamlString = yaml.dump(parsed, {
						indent: indent === 2 ? 2 : 4,
						sortKeys: sortKeys,
						lineWidth: -1,
						noRefs: true,
					});
					setOutput(yamlString);
					setError('');
				}
			} catch (err) {
				const yamlError = err as { mark?: { line?: number }; message?: string };
				setError(
					`Error at line ${yamlError.mark?.line ? yamlError.mark.line + 1 : 'unknown'}: ${yamlError.message || 'Unknown error'}`
				);
				setOutput('');
			}
		};
	}, [input, direction, indent, sortKeys]);

	useEffect(() => {
		convert();
	}, [convert]);

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(e.target.value);
	};

	const handleDirectionChange = (newDirection: Direction) => {
		setDirection(newDirection);
		const currentOutput = output;
		setInput(currentOutput);
		setOutput('');
		setError('');
	};

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleClear = () => {
		setInput('');
		setOutput('');
		setError('');
	};

	const getLabels = () => {
		if (direction === 'yamlToJson') {
			return {
				inputLabel: 'YAML Input',
				outputLabel: 'JSON Output',
				inputPlaceholder: 'Enter YAML content here...',
			};
		}
		return {
			inputLabel: 'JSON Input',
			outputLabel: 'YAML Output',
			inputPlaceholder: 'Enter JSON content here...',
		};
	};

	const labels = getLabels();

	const controls = (
		<ControlsContainer>
			<DirectionToggle>
				<ToggleButton
					$active={direction === 'yamlToJson'}
					onClick={() => handleDirectionChange('yamlToJson')}
					type="button"
				>
					YAML to JSON
				</ToggleButton>
				<ToggleButton
					$active={direction === 'jsonToYaml'}
					onClick={() => handleDirectionChange('jsonToYaml')}
					type="button"
				>
					JSON to YAML
				</ToggleButton>
			</DirectionToggle>

			<OptionsContainer>
				<OptionLabel htmlFor="indent-select">
					Indent:
					<Select
						id="indent-select"
						value={indent}
						onChange={(e) => setIndent(Number(e.target.value))}
					>
						<option value={2}>2 spaces</option>
						<option value={4}>4 spaces</option>
					</Select>
				</OptionLabel>

				{direction === 'jsonToYaml' && (
					<OptionLabel>
						<Checkbox
							type="checkbox"
							checked={sortKeys}
							onChange={(e) => setSortKeys(e.target.checked)}
							id="sort-keys"
						/>
						Sort Keys
					</OptionLabel>
				)}
			</OptionsContainer>

			<ButtonsContainer>
				<CopyButton text={output} onCopy={handleCopy} copied={copied} />
				<ClearButton onClear={handleClear} />
			</ButtonsContainer>
		</ControlsContainer>
	);

	return (
		<InputOutput
			title="YAML Converter"
			inputValue={input}
			outputValue={output}
			inputLabel={labels.inputLabel}
			outputLabel={labels.outputLabel}
			onInputChange={handleInputChange}
			inputPlaceholder={labels.inputPlaceholder}
			outputPlaceholder="Output will appear here..."
			error={error}
		>
			{controls}
		</InputOutput>
	);
};

export default YamlConverter;
