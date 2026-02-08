import React from 'react';
import PropTypes from 'prop-types';
import {
	PresetSelectorWrapper,
	PresetLabel,
	PresetGrid,
	PresetButton,
	PresetPreview,
} from './PresetSelector.styles';

const PresetSelector = ({ presets, onSelect, label, activePresetId }) => {
	const handlePresetClick = (preset) => {
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

PresetSelector.propTypes = {
	presets: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			name: PropTypes.string.isRequired,
			preview: PropTypes.string,
			// Additional properties will be passed through with the preset
		})
	).isRequired,
	onSelect: PropTypes.func.isRequired,
	label: PropTypes.string,
	activePresetId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PresetSelector;
