export interface Preset {
	id: string | number;
	name: string;
	preview?: string;
	[key: string]: unknown; // Allow additional properties
}

export interface PresetSelectorProps {
	presets: Preset[];
	onSelect: (p: Preset) => void;
	label?: string;
	activePresetId?: string | number;
}

export interface PresetButtonProps {
	$isActive?: boolean;
}

export interface PresetPreviewProps {
	$preview: string;
}
