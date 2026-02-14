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
import { parseColor, convertToAllFormats } from 'src/infrastructure/colorUtils';

const ColorConverter = () => {
	const [input, setInput] = useState('#ff6b6b');
	const [formats, setFormats] = useState(null);
	const [error, setError] = useState('');
	const [copiedFormat, setCopiedFormat] = useState(null);

	// Parse input and convert to all formats
	useEffect(() => {
		if (!input.trim()) {
			setFormats(null);
			setError('');
			return;
		}

		const parsed = parseColor(input);
		if (parsed) {
			setFormats(convertToAllFormats(parsed));
			setError('');
		} else {
			setError(
				'Invalid color format. Try HEX, RGB, HSL, HSV, HWB, or CMYK.'
			);
		}
	}, [input]);

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleColorPicker = (e) => {
		const hex = e.target.value;
		setInput(hex);
	};

	const handleCopy = async (format, value) => {
		try {
			await window.navigator.clipboard.writeText(value);
			setCopiedFormat(format);
			setTimeout(() => setCopiedFormat(null), 2000);
		} catch {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = value;
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand('copy');
				setCopiedFormat(format);
				setTimeout(() => setCopiedFormat(null), 2000);
			} catch (fallbackErr) {
				console.error('Failed to copy:', fallbackErr);
			}
			document.body.removeChild(textArea);
		}
	};

	const formatEntries = formats
		? Object.entries(formats).map(([key, value]) => ({ key, value }))
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
						placeholder="Enter a color (e.g., #ff6b6b, rgb(255, 107, 107), hsl(0, 100%, 70%))"
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
								<FormatCard key={key}>
									<FormatLabel>
										{key.toUpperCase()}
									</FormatLabel>
									<FormatValue>{value}</FormatValue>
									<CopyButton
										onClick={() => handleCopy(key, value)}
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
