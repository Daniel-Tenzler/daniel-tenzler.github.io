import React from 'react';
import {
	PresetSelectorWrapper,
	PresetLabel,
	PresetGrid,
	PresetButton,
	PresetPreview,
} from './PresetSelector.styles';
import type {Preset, PresetSelectorProps} from './PresetSelector.types';

export type {Preset, PresetSelectorProps};

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
						$isActive={activePresetId === preset.id}
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
