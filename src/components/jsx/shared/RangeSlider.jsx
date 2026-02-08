import React from 'react';
import PropTypes from 'prop-types';
import {
	RangeSliderWrapper,
	SliderHeader,
	SliderLabel as StyledLabel,
	SliderControls,
	SliderInput,
	NumberInput,
	UnitDisplay,
} from './RangeSlider.styles';

const RangeSlider = ({
	label,
	value,
	min,
	max,
	step,
	unit,
	onChange,
	disabled = false,
}) => {
	const handleSliderChange = (e) => {
		onChange(parseFloat(e.target.value));
	};

	const handleNumberChange = (e) => {
		const newValue = parseFloat(e.target.value);
		if (!isNaN(newValue) && newValue >= min && newValue <= max) {
			onChange(newValue);
		}
	};

	const handleNumberBlur = (e) => {
		const newValue = parseFloat(e.target.value);
		if (isNaN(newValue) || newValue < min || newValue > max) {
			// Reset to current valid value on invalid input
			e.target.value = value;
		}
	};

	return (
		<RangeSliderWrapper>
			<SliderHeader>
				<StyledLabel htmlFor={`${label}-slider`}>{label}</StyledLabel>
			</SliderHeader>
			<SliderControls>
				<SliderInput
					id={`${label}-slider`}
					type="range"
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={handleSliderChange}
					disabled={disabled}
					aria-label={`${label} slider`}
				/>
				<NumberInput
					type="number"
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={handleNumberChange}
					onBlur={handleNumberBlur}
					disabled={disabled}
					aria-label={`${label} value`}
				/>
				<UnitDisplay>{unit}</UnitDisplay>
			</SliderControls>
		</RangeSliderWrapper>
	);
};

RangeSlider.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired,
	unit: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

export default RangeSlider;
