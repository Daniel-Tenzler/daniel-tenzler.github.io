export interface ColorInputProps {
	hex: string;
	opacity: number;
	onHexChange: (v: string) => void;
	onOpacityChange: (v: number) => void;
	label?: string;
	showPreview?: boolean;
}

export interface ColorPickerButtonProps {
	$color?: string;
}

export interface PreviewSwatchProps {
	$backgroundColor?: string;
}
