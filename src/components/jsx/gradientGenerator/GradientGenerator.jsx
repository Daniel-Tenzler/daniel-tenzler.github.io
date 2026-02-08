import React, { useState, useMemo } from 'react';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	ControlsSection,
	TypeTabs,
	TypeTab,
	ColorStopsSection,
	ColorStopsHeader,
	ColorStopsList,
	ColorStopItem,
	ColorStopControls,
	AddStopButton,
	RemoveStopButton,
	ControlsGroup,
} from './GradientGenerator.styles';
import {
	ColorInput,
	RangeSlider,
	CodeOutput,
	PresetSelector,
} from 'src/components/jsx/shared';
import {
	generateGradientCSS,
	GRADIENT_TYPES,
	DEFAULT_GRADIENT_CONFIG,
	GRADIENT_PRESETS,
} from 'src/infrastructure/cssUtils';

const GradientGenerator = () => {
	const [gradient, setGradient] = useState(DEFAULT_GRADIENT_CONFIG);
	const [activePresetId, setActivePresetId] = useState(null);

	const gradientCSS = useMemo(() => {
		return generateGradientCSS(gradient);
	}, [gradient]);

	const handleTypeChange = (newType) => {
		setGradient((prev) => ({
			...prev,
			type: newType,
		}));
	};

	const handleLinearAngleChange = (angle) => {
		setGradient((prev) => ({
			...prev,
			linear: {
				...prev.linear,
				angle,
			},
		}));
	};

	const handleRadialShapeChange = (shape) => {
		setGradient((prev) => ({
			...prev,
			radial: {
				...prev.radial,
				shape,
			},
		}));
	};

	const handleRadialPositionChange = (posX) => {
		setGradient((prev) => ({
			...prev,
			radial: {
				...prev.radial,
				posX,
				posY: posX, // Keep X and Y synchronized for simplicity
			},
		}));
	};

	const handleConicAngleChange = (angle) => {
		setGradient((prev) => ({
			...prev,
			conic: {
				...prev.conic,
				angle,
			},
		}));
	};

	const handleConicPositionChange = (posX) => {
		setGradient((prev) => ({
			...prev,
			conic: {
				...prev.conic,
				posX,
				posY: posX, // Keep X and Y synchronized for simplicity
			},
		}));
	};

	const handleColorStopChange = (index, field, value) => {
		setGradient((prev) => {
			const newColorStops = [...prev.colorStops];
			newColorStops[index] = {
				...newColorStops[index],
				[field]: value,
			};
			return {
				...prev,
				colorStops: newColorStops,
			};
		});
	};

	const handleRemoveColorStop = (stopId) => {
		if (gradient.colorStops.length <= 2) return;

		setGradient((prev) => {
			const newColorStops = prev.colorStops.filter(
				(stop) => stop.id !== stopId
			);
			return {
				...prev,
				colorStops: newColorStops,
			};
		});
	};

	const handleAddColorStop = () => {
		if (gradient.colorStops.length >= 10) return;

		setGradient((prev) => {
			const newColorStops = [...prev.colorStops];
			// Calculate position between existing stops
			const sortedStops = [...newColorStops].sort(
				(a, b) => a.position - b.position
			);
			const lastStop = sortedStops[sortedStops.length - 1];
			const newPosition = Math.min(100, lastStop.position + 10);

			newColorStops.push({
				id: `stop-${Date.now()}-${Math.random().toString(36).substring(7)}`,
				color: '#888888',
				position: newPosition,
				opacity: 100,
			});

			return {
				...prev,
				colorStops: newColorStops,
			};
		});
	};

	const handlePresetSelect = (preset) => {
		setActivePresetId(preset.id);
		setGradient(preset.config);
	};

	const renderTypeSpecificControls = () => {
		switch (gradient.type) {
			case GRADIENT_TYPES.LINEAR:
				return (
					<ControlsGroup>
						<RangeSlider
							label="Angle"
							value={gradient.linear.angle}
							min={0}
							max={360}
							step={1}
							unit="deg"
							onChange={handleLinearAngleChange}
						/>
					</ControlsGroup>
				);

			case GRADIENT_TYPES.RADIAL:
				return (
					<>
						<ControlsGroup>
							<label htmlFor="radial-shape">Shape</label>
							<select
								id="radial-shape"
								value={gradient.radial.shape}
								onChange={(e) =>
									handleRadialShapeChange(e.target.value)
								}
								aria-label="Radial gradient shape"
							>
								<option value="circle">Circle</option>
								<option value="ellipse">Ellipse</option>
							</select>
						</ControlsGroup>
						<ControlsGroup>
							<RangeSlider
								label="Position"
								value={gradient.radial.posX}
								min={0}
								max={100}
								step={1}
								unit="%"
								onChange={handleRadialPositionChange}
							/>
						</ControlsGroup>
					</>
				);

			case GRADIENT_TYPES.CONIC:
				return (
					<>
						<ControlsGroup>
							<RangeSlider
								label="Angle"
								value={gradient.conic.angle}
								min={0}
								max={360}
								step={1}
								unit="deg"
								onChange={handleConicAngleChange}
							/>
						</ControlsGroup>
						<ControlsGroup>
							<RangeSlider
								label="Position"
								value={gradient.conic.posX}
								min={0}
								max={100}
								step={1}
								unit="%"
								onChange={handleConicPositionChange}
							/>
						</ControlsGroup>
					</>
				);

			default:
				return null;
		}
	};

	const presetsWithIds = GRADIENT_PRESETS.map((preset, index) => ({
		...preset,
		id: index,
		preview: generateGradientCSS(preset.config),
	}));

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>Gradient Generator</SectionTitle>
				</SectionHeader>

				{/* Type Selection */}
				<TypeTabs role="tablist" aria-label="Gradient type selection">
					<TypeTab
						active={gradient.type === GRADIENT_TYPES.LINEAR}
						onClick={() => handleTypeChange(GRADIENT_TYPES.LINEAR)}
						role="tab"
						aria-selected={gradient.type === GRADIENT_TYPES.LINEAR}
						type="button"
					>
						Linear
					</TypeTab>
					<TypeTab
						active={gradient.type === GRADIENT_TYPES.RADIAL}
						onClick={() => handleTypeChange(GRADIENT_TYPES.RADIAL)}
						role="tab"
						aria-selected={gradient.type === GRADIENT_TYPES.RADIAL}
						type="button"
					>
						Radial
					</TypeTab>
					<TypeTab
						active={gradient.type === GRADIENT_TYPES.CONIC}
						onClick={() => handleTypeChange(GRADIENT_TYPES.CONIC)}
						role="tab"
						aria-selected={gradient.type === GRADIENT_TYPES.CONIC}
						type="button"
					>
						Conic
					</TypeTab>
				</TypeTabs>

				{/* Controls */}
				<ControlsSection>
					{renderTypeSpecificControls()}
				</ControlsSection>

				{/* Color Stops */}
				<ColorStopsSection>
					<ColorStopsHeader>
						<h4>Color Stops</h4>
						<AddStopButton
							onClick={handleAddColorStop}
							disabled={gradient.colorStops.length >= 10}
							type="button"
							aria-label="Add color stop"
						>
							+ Add Stop
						</AddStopButton>
					</ColorStopsHeader>
					<ColorStopsList role="list" aria-label="Color stops list">
						{gradient.colorStops.map((stop, index) => (
							<ColorStopItem key={stop.id} role="listitem">
								<ColorStopControls>
									<ColorInput
										label={`Stop ${index + 1}`}
										hex={stop.color.replace('#', '')}
										opacity={stop.opacity}
										onHexChange={(value) =>
											handleColorStopChange(
												index,
												'color',
												`#${value}`
											)
										}
										onOpacityChange={(value) =>
											handleColorStopChange(
												index,
												'opacity',
												value
											)
										}
										showPreview={true}
									/>
									<RangeSlider
										label="Position"
										value={stop.position}
										min={0}
										max={100}
										step={1}
										unit="%"
										onChange={(value) =>
											handleColorStopChange(
												index,
												'position',
												value
											)
										}
									/>
									<RemoveStopButton
										onClick={() =>
											handleRemoveColorStop(stop.id)
										}
										disabled={
											gradient.colorStops.length <= 2
										}
										type="button"
										aria-label={`Remove color stop ${index + 1}`}
									>
										Remove
									</RemoveStopButton>
								</ColorStopControls>
							</ColorStopItem>
						))}
					</ColorStopsList>
				</ColorStopsSection>

				{/* Presets */}
				<PresetSelector
					presets={presetsWithIds}
					onSelect={handlePresetSelect}
					label="Presets"
					activePresetId={activePresetId}
				/>

				{/* CSS Output */}
				<CodeOutput
					code={`background: ${gradientCSS};`}
					language="CSS"
					label="CSS Output"
				/>
			</ContentWrapper>
		</Container>
	);
};

export default GradientGenerator;
