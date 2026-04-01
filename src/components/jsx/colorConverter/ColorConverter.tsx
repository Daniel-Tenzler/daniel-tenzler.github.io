import React, { useState, useEffect } from 'react';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	InputSection,
	ColorInput,
	ColorPickerButton,
	ColorPreview,
	FormatsGrid,
	FormatCard,
	FormatLabel,
	FormatValue,
	CopyButton,
	ErrorMessage,
} from './ColorConverter.styles';
import {
	parseColor,
	convertToAllFormats,
	validators,
} from 'src/infrastructure/colorUtils';

const FORMAT_ORDER = ['hex', 'rgb', 'hsl', 'hsv', 'hwb', 'cmyk'] as const;
type FormatKey = (typeof FORMAT_ORDER)[number];

const INPUT_PLACEHOLDERS: Record<FormatKey, string> = {
	hex: '#ff6b6b',
	rgb: 'rgb(255, 107, 107)',
	hsl: 'hsl(0, 100%, 70%)',
	hsv: 'hsv(0, 58%, 100%)',
	hwb: 'hwb(0, 42%, 0%)',
	cmyk: 'cmyk(0%, 58%, 58%, 0%)',
};

const ColorConverter = () => {
	const [inputState, setInputState] = useState<{
		input: string;
		sourceFormat: FormatKey;
	}>({
		input: '#ff6b6b',
		sourceFormat: 'hex',
	});
	const [formats, setFormats] = useState<ReturnType<
		typeof convertToAllFormats
	> | null>(null);
	const [error, setError] = useState('');
	const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

	const { input, sourceFormat } = inputState;

	useEffect(() => {
		if (!input.trim()) {
			setFormats(null);
			setError('');
			return;
		}

		const trimmedInput = input.trim().toLowerCase();
		const sourceValidator = validators[sourceFormat];

		if (!sourceValidator.test(trimmedInput)) {
			setError(
				`Invalid ${sourceFormat.toUpperCase()} format. Try ${INPUT_PLACEHOLDERS[sourceFormat]}.`
			);
			return;
		}

		const parsed = parseColor(trimmedInput);
		if (parsed) {
			setFormats(convertToAllFormats(parsed));
			setError('');
		} else {
			setError(
				'Invalid color format. Try HEX, RGB, HSL, HSV, HWB, or CMYK.'
			);
		}
	}, [input, sourceFormat]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputState((prev) => ({
			...prev,
			input: e.target.value,
		}));
	};

	const handleColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
		const hex = e.target.value;
		setInputState({
			input: hex,
			sourceFormat: 'hex',
		});
	};

	const handleFormatCardClick = (format: FormatKey) => {
		if (!formats) {
			return;
		}

		setInputState({
			input: formats[format],
			sourceFormat: format,
		});
		setError('');
	};

	const handleCopy = async (format: string, value: string) => {
		try {
			await window.navigator.clipboard.writeText(value);
			setCopiedFormat(format);
			setTimeout(() => setCopiedFormat(null), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	const formatEntries = formats
		? FORMAT_ORDER.map((key) => ({
				key,
				value: formats[key],
			}))
		: [];

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>Color Converter</SectionTitle>
				</SectionHeader>

				<InputSection>
					<ColorInput
						type="text"
						value={input}
						onChange={handleInputChange}
						placeholder={`Enter ${sourceFormat.toUpperCase()} (e.g., ${INPUT_PLACEHOLDERS[sourceFormat]})`}
						aria-label="Color input"
						aria-invalid={!!error}
						aria-describedby={error ? 'color-error' : undefined}
						spellCheck={false}
						autoComplete="off"
					/>
					<ColorPickerButton
						type="color"
						value={formats?.hex || '#000000'}
						onChange={handleColorPicker}
						aria-label="Pick a color"
					/>
				</InputSection>

				{error && (
					<ErrorMessage id="color-error" role="alert">
						{error}
					</ErrorMessage>
				)}

				{!error && formats && (
					<>
						<ColorPreview
							$backgroundColor={formats.rgb}
							aria-label="Color preview"
						/>

						<FormatsGrid>
							{formatEntries.map(({ key, value }) => (
								<FormatCard
									key={key}
									$isActive={sourceFormat === key}
									onClick={() => handleFormatCardClick(key)}
									onKeyDown={(e) => {
										if (
											e.key === 'Enter' ||
											e.key === ' '
										) {
											e.preventDefault();
											handleFormatCardClick(key);
										}
									}}
									tabIndex={0}
									role="button"
									aria-pressed={sourceFormat === key}
									aria-label={`Use ${key} as input format`}
								>
									<FormatLabel>
										{key.toUpperCase()}
										{sourceFormat === key ? ' (input)' : ''}
									</FormatLabel>
									<FormatValue>{value}</FormatValue>
									<CopyButton
										onClick={(e) => {
											e.stopPropagation();
											void handleCopy(key, value);
										}}
										aria-label={`Copy ${key} value: ${value}`}
									>
										{copiedFormat === key
											? 'Copied!'
											: 'Copy'}
									</CopyButton>
								</FormatCard>
							))}
						</FormatsGrid>
					</>
				)}
			</ContentWrapper>
		</Container>
	);
};

export default ColorConverter;
