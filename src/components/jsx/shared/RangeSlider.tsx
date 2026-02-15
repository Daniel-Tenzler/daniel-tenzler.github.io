import React from 'react';
import {
	RangeSliderWrapper,
	SliderHeader,
	SliderLabel as StyledLabel,
	SliderControls,
	SliderInput,
	NumberInput,
	UnitDisplay,
} from './RangeSlider.styles';

export interface RangeSliderProps {
	label: string;
	value: number;
	min: number;
	max: number;
	step: number;
	unit: string;
	onChange: (value: number) => void;
	disabled?: boolean;
}

const RangeSlider = ({
	label,
	value,
	min,
	max,
	step,
	unit,
	onChange,
	disabled = false,
}: RangeSliderProps) => {
	const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(parseFloat(e.target.value));
	};

	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(e.target.value);
		if (!isNaN(newValue) && newValue >= min && newValue <= max) {
			onChange(newValue);
		}
	};

	const handleNumberBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const newValue = parseFloat(e.target.value);
		if (isNaN(newValue) || newValue < min || newValue > max) {
			// Reset to current valid value on invalid input
			e.target.value = value.toString();
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

export default RangeSlider;
