import React, { useState } from 'react';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	PreviewSection,
	PreviewBox,
	ControlsSection,
	LayersList,
	LayerItem,
	LayerHeader,
	LayerControls,
	ControlGroup,
	ControlLabel,
	ControlInput,
	ColorInputWrapper,
	ColorPicker,
	ColorHexInput,
	OpacitySlider,
	ToggleButton,
	AddLayerButton,
	RemoveLayerButton,
	OutputSection,
	OutputCode,
	CopyButton,
	PresetsSection,
	PresetsTitle,
	PresetsGrid,
	PresetButton,
} from './BoxShadowGenerator.styles';
import { useBoxShadowLayers } from './hooks/useBoxShadowLayers';

const BoxShadowGenerator = () => {
	const [copied, setCopied] = useState(false);
	const [objectColor, setObjectColor] = useState('#ffffff');
	const [backgroundColor, setBackgroundColor] = useState('#383838');

	const {
		layers,
		activeLayer,
		activeLayerIndex,
		boxShadowCSS,
		handleLayerChange,
		handleAddLayer,
		handleRemoveLayer,
		handleApplyPreset,
		handleSetActiveLayerIndex,
		MAX_LAYERS,
	} = useBoxShadowLayers();

	const handleCopy = async () => {
		try {
			await window.navigator.clipboard.writeText(
				`box-shadow: ${boxShadowCSS};`
			);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>Box Shadow Generator</SectionTitle>
				</SectionHeader>

				<PreviewSection $backgroundColor={backgroundColor}>
					<PreviewBox
						$boxShadow={boxShadowCSS}
						$backgroundColor={objectColor}
						aria-label="Box shadow preview"
					>
						Preview
					</PreviewBox>
				</PreviewSection>

				<PresetsSection>
					<PresetsTitle>Presets</PresetsTitle>
					<PresetsGrid>
						<PresetButton
							onClick={() => handleApplyPreset('subtle')}
						>
							Subtle
						</PresetButton>
						<PresetButton
							onClick={() => handleApplyPreset('raised')}
						>
							Raised
						</PresetButton>
						<PresetButton
							onClick={() => handleApplyPreset('floating')}
						>
							Floating
						</PresetButton>
						<PresetButton
							onClick={() => handleApplyPreset('inset')}
						>
							Inset
						</PresetButton>
					</PresetsGrid>
				</PresetsSection>

				<ControlsSection>
					<ControlGroup>
						<ControlLabel htmlFor="objectColor">
							Object Color
						</ControlLabel>
						<ColorInputWrapper>
							<ColorPicker
								id="objectColor"
								type="color"
								value={objectColor}
								onChange={(e) => setObjectColor(e.target.value)}
								aria-label="Preview object color"
							/>
							<ColorHexInput
								type="text"
								value={objectColor}
								onChange={(e) => setObjectColor(e.target.value)}
								aria-label="Object color hex value"
								spellCheck={false}
							/>
						</ColorInputWrapper>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel htmlFor="backgroundColor">
							Background Color
						</ControlLabel>
						<ColorInputWrapper>
							<ColorPicker
								id="backgroundColor"
								type="color"
								value={backgroundColor}
								onChange={(e) =>
									setBackgroundColor(e.target.value)
								}
								aria-label="Preview background color"
							/>
							<ColorHexInput
								type="text"
								value={backgroundColor}
								onChange={(e) =>
									setBackgroundColor(e.target.value)
								}
								aria-label="Background color hex value"
								spellCheck={false}
							/>
						</ColorInputWrapper>
					</ControlGroup>
				</ControlsSection>

				<ControlsSection>
					<LayersList>
						{layers.map((layer, index) => (
							<LayerItem
								key={layer.id}
								$active={index === activeLayerIndex}
								onClick={() => handleSetActiveLayerIndex(index)}
								aria-label={`Layer ${index + 1}`}
							>
								<LayerHeader>Layer {index + 1}</LayerHeader>
							</LayerItem>
						))}
					</LayersList>

					{layers.length < MAX_LAYERS && (
						<AddLayerButton
							onClick={handleAddLayer}
							aria-label="Add shadow layer"
						>
							+ Add Layer
						</AddLayerButton>
					)}
					{layers.length > 1 && (
						<RemoveLayerButton
							onClick={handleRemoveLayer}
							aria-label="Remove shadow layer"
						>
							- Remove Layer
						</RemoveLayerButton>
					)}
				</ControlsSection>

				<LayerControls>
					<ControlGroup>
						<ControlLabel htmlFor="offsetX">Offset X</ControlLabel>
						<ControlInput
							id="offsetX"
							type="number"
							value={activeLayer.offsetX}
							onChange={(e) =>
								handleLayerChange(
									'offsetX',
									Number(e.target.value)
								)
							}
							min="-100"
							max="100"
							aria-label="Horizontal offset"
						/>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel htmlFor="offsetY">Offset Y</ControlLabel>
						<ControlInput
							id="offsetY"
							type="number"
							value={activeLayer.offsetY}
							onChange={(e) =>
								handleLayerChange(
									'offsetY',
									Number(e.target.value)
								)
							}
							min="-100"
							max="100"
							aria-label="Vertical offset"
						/>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel htmlFor="blur">Blur</ControlLabel>
						<ControlInput
							id="blur"
							type="number"
							value={activeLayer.blur}
							onChange={(e) =>
								handleLayerChange(
									'blur',
									Number(e.target.value)
								)
							}
							min="0"
							max="100"
							aria-label="Blur radius"
						/>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel htmlFor="spread">Spread</ControlLabel>
						<ControlInput
							id="spread"
							type="number"
							value={activeLayer.spread}
							onChange={(e) =>
								handleLayerChange(
									'spread',
									Number(e.target.value)
								)
							}
							min="-100"
							max="100"
							aria-label="Spread radius"
						/>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel htmlFor="color">Color</ControlLabel>
						<ColorInputWrapper>
							<ColorPicker
								id="color"
								type="color"
								value={activeLayer.color}
								onChange={(e) =>
									handleLayerChange('color', e.target.value)
								}
								aria-label="Shadow color picker"
							/>
							<ColorHexInput
								type="text"
								value={activeLayer.color}
								onChange={(e) =>
									handleLayerChange('color', e.target.value)
								}
								aria-label="Shadow color hex value"
								spellCheck={false}
							/>
						</ColorInputWrapper>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel htmlFor="opacity">Opacity</ControlLabel>
						<OpacitySlider
							id="opacity"
							type="range"
							min="0"
							max="100"
							step="1"
							value={activeLayer.opacity}
							onChange={(e) =>
								handleLayerChange(
									'opacity',
									Number(e.target.value)
								)
							}
							aria-label="Shadow opacity"
						/>
					</ControlGroup>

					<ControlGroup>
						<ControlLabel>Inset</ControlLabel>
						<ToggleButton
							$active={activeLayer.inset}
							onClick={() =>
								handleLayerChange('inset', !activeLayer.inset)
							}
							aria-label="Toggle inset shadow"
							aria-pressed={activeLayer.inset}
						>
							{activeLayer.inset ? 'On' : 'Off'}
						</ToggleButton>
					</ControlGroup>
				</LayerControls>

				<OutputSection>
					<OutputCode
						readOnly
						value={`box-shadow: ${boxShadowCSS};`}
						aria-label="Generated CSS code"
					/>
					<CopyButton onClick={handleCopy} aria-label="Copy CSS code">
						{copied ? 'Copied!' : 'Copy CSS'}
					</CopyButton>
				</OutputSection>
			</ContentWrapper>
		</Container>
	);
};

export default BoxShadowGenerator;
