export interface RangeSliderProps {
	label: string;
	value: number;
	min: number;
	max: number;
	step: number;
	unit: string;
	onChange: (v: number) => void;
	disabled?: boolean;
}
