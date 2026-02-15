import React from 'react';
import {
	PresetSelectorWrapper,
	PresetLabel,
	PresetGrid,
	PresetButton,
	PresetPreview,
} from './PresetSelector.styles';

export interface Preset {
	id: string | number;
	name: string;
	preview?: string;
	[key: string]: unknown; // Allow additional properties
}

export interface PresetSelectorProps {
	presets: Preset[];
	onSelect: (preset: Preset) => void;
	label?: string;
	activePresetId?: string | number;
}

const PresetSelector = ({
	presets,
	onSelect,
	label,
	activePresetId,
}: PresetSelectorProps) => {
	const handlePresetClick = (preset: Preset) => {
		onSelect(preset);
	};

	return (
		<PresetSelectorWrapper>
			{label && <PresetLabel>{label}</PresetLabel>}
			<PresetGrid
				role="group"
				aria-label={`${label || 'Preset'} options`}
			>
				{presets.map((preset) => (
					<PresetButton
						key={preset.id}
						onClick={() => handlePresetClick(preset)}
						className={activePresetId === preset.id ? 'active' : ''}
						type="button"
						aria-pressed={activePresetId === preset.id}
						aria-label={`Select ${preset.name} preset`}
					>
						{preset.preview && (
							<PresetPreview
								$preview={preset.preview}
								aria-hidden="true"
							/>
						)}
						{preset.name}
					</PresetButton>
				))}
			</PresetGrid>
		</PresetSelectorWrapper>
	);
};

export default PresetSelector;
