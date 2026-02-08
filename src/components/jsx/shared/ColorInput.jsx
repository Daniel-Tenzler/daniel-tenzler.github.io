import React from 'react';
import PropTypes from 'prop-types';
import {
	ColorInputWrapper,
	InputRow,
	HexInput,
	ColorPickerButton,
	OpacitySlider,
	SliderLabel,
	SliderValue,
	SliderInput,
	PreviewSwatch,
	Label,
} from './ColorInput.styles';
import { hexToRgb, isValidHex } from 'src/infrastructure/cssUtils';

const ColorInput = ({
	hex,
	opacity,
	onHexChange,
	onOpacityChange,
	label,
	showPreview = true,
}) => {
	const handleHexChange = (e) => {
		const value = e.target.value.replace(/[^0-9a-f]/gi, '').slice(0, 6);
		onHexChange(value);
	};

	const handleColorPickerChange = (e) => {
		const hex = e.target.value;
		onHexChange(hex.replace('#', ''));
	};

	const handleOpacityChange = (e) => {
		onOpacityChange(parseInt(e.target.value, 10));
	};

	const getRgbaPreview = () => {
		if (!isValidHex(hex)) return 'transparent';
		const rgb = hexToRgb(hex);
		if (!rgb) return 'transparent';
		return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity / 100})`;
	};

	const getButtonColor = () => {
		if (!isValidHex(hex)) return '#000000';
		return `#${hex}`;
	};

	return (
		<ColorInputWrapper>
			{label && <Label>{label}</Label>}
			<InputRow>
				<HexInput
					type="text"
					value={hex}
					onChange={handleHexChange}
					placeholder="000000"
					maxLength={6}
					aria-label={`${label || 'Color'} hex value`}
				/>
				<ColorPickerButton
					type="button"
					$color={getButtonColor()}
					aria-label={`${label || 'Color'} picker`}
				>
					<input
						type="color"
						value={getButtonColor()}
						onChange={handleColorPickerChange}
						aria-hidden="true"
					/>
				</ColorPickerButton>
			</InputRow>
			<OpacitySlider>
				<SliderLabel htmlFor={`${label}-opacity`}>
					Opacity
					<SliderValue>{opacity}%</SliderValue>
				</SliderLabel>
				<SliderInput
					id={`${label}-opacity`}
					type="range"
					min="0"
					max="100"
					value={opacity}
					onChange={handleOpacityChange}
					aria-label={`${label || 'Color'} opacity`}
				/>
			</OpacitySlider>
			{showPreview && (
				<PreviewSwatch
					$backgroundColor={getRgbaPreview()}
					aria-hidden="true"
				/>
			)}
		</ColorInputWrapper>
	);
};

ColorInput.propTypes = {
	hex: PropTypes.string.isRequired,
	opacity: PropTypes.number.isRequired,
	onHexChange: PropTypes.func.isRequired,
	onOpacityChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	showPreview: PropTypes.bool,
};

export default ColorInput;
