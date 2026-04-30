import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ColorInput, RangeSlider } from 'src/components/jsx/shared';
import {
	CardDescription,
	CardHeader,
	CardTitle,
	Container,
	ContentWrapper,
	ControlCard,
	ControlsGrid,
	CopyCssButton,
	CssOutputField,
	CssOutputHeader,
	CssOutputLabel,
	CssOutputSection,
	DownloadButton,
	ExportCloseButton,
	ExportDock,
	ExportField,
	ExportFields,
	ExportFrame,
	ExportPanel,
	ExportPanelHeader,
	ExportToggleButton,
	HeaderActions,
	HeaderCopy,
	PreviewLabel,
	PreviewSection,
	PreviewSurface,
	ResetButton,
	SectionHeader,
	SectionTitle,
	Writeup,
} from './GrainyGradientGenerator.styles';

const DEFAULT_CONFIG = {
	baseColor: '101828',
	baseOpacity: 100,
	primaryColor: '7c3aed',
	secondaryColor: '22d3ee',
	accentColor: 'f97316',
	primaryOpacity: 67,
	secondaryOpacity: 54,
	accentOpacity: 24,
	blur: 45,
	grainOpacity: 0.33,
	grainScale: 190,
	grainFrequency: 0.82,
};

const DEFAULT_EXPORT_CONFIG = {
	width: 1600,
	height: 900,
	zoom: 1.4,
	cropX: 50,
	cropY: 50,
};

const clamp = (value: number, min: number, max: number) => {
	return Math.min(max, Math.max(min, value));
};

const hexToRgb = (hex: string) => {
	const normalized = hex.replace('#', '');
	const value = parseInt(normalized, 16);

	if (Number.isNaN(value) || normalized.length !== 6) {
		return { r: 255, g: 255, b: 255 };
	}

	return {
		r: (value >> 16) & 255,
		g: (value >> 8) & 255,
		b: value & 255,
	};
};

const toRgba = (hex: string, opacity: number) => {
	const { r, g, b } = hexToRgb(hex);
	return `rgba(${r}, ${g}, ${b}, ${(opacity / 100).toFixed(2)})`;
};

const createNoiseDataUri = (frequency: number) => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="${frequency}" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
	return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const createBackground = (config: typeof DEFAULT_CONFIG) => {
	const base = toRgba(config.baseColor, config.baseOpacity);
	const primary = toRgba(config.primaryColor, config.primaryOpacity);
	const secondary = toRgba(config.secondaryColor, config.secondaryOpacity);
	const accent = toRgba(config.accentColor, config.accentOpacity);

	return [
		`radial-gradient(circle at 18% 22%, ${primary} 0, transparent ${config.blur}rem)`,
		`radial-gradient(circle at 82% 18%, ${secondary} 0, transparent ${Math.round(config.blur * 0.82)}rem)`,
		`radial-gradient(circle at 50% 88%, ${accent} 0, transparent ${Math.round(config.blur * 0.72)}rem)`,
		`linear-gradient(135deg, ${base} 0%, #020617 100%)`,
	].join(',\n\t');
};

const escapeHtml = (value: string) => {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
};

const loadImage = (src: string) => {
	return new Promise<HTMLImageElement>((resolve, reject) => {
		const image = new Image();
		image.onload = () => resolve(image);
		image.onerror = reject;
		image.src = src;
	});
};

const GrainyGradientGenerator = () => {
	const [config, setConfig] = useState(DEFAULT_CONFIG);
	const [exportConfig, setExportConfig] = useState(DEFAULT_EXPORT_CONFIG);
	const [isExportPanelOpen, setIsExportPanelOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const previewSurfaceRef = useRef<HTMLDivElement | null>(null);
	const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const background = useMemo(() => createBackground(config), [config]);
	const grain = useMemo(
		() => createNoiseDataUri(config.grainFrequency),
		[config.grainFrequency]
	);

	const cssOutput = `.grainy-gradient {
	position: relative;
	overflow: hidden;
	background:
	${background};
}

.grainy-gradient::before {
	content: '';
	position: absolute;
	inset: 0;
	pointer-events: none;
	background-image: url('${grain}');
	background-size: ${config.grainScale}px ${config.grainScale}px;
	mix-blend-mode: overlay;
	opacity: ${config.grainOpacity.toFixed(2)};
}`;

	const updateConfig = (
		key: keyof typeof DEFAULT_CONFIG,
		value: string | number
	) => {
		setConfig((current) => ({
			...current,
			[key]: value,
		}));
	};

	const resetConfig = () => {
		setConfig(DEFAULT_CONFIG);
		setExportConfig(DEFAULT_EXPORT_CONFIG);
	};

	const updateExportConfig = (
		key: keyof typeof DEFAULT_EXPORT_CONFIG,
		value: number
	) => {
		setExportConfig((current) => ({
			...current,
			[key]: value,
		}));
	};

	const updateExportNumber = (
		key: keyof typeof DEFAULT_EXPORT_CONFIG,
		value: string,
		min: number,
		max: number
	) => {
		const numericValue = parseFloat(value);

		if (Number.isNaN(numericValue)) return;

		updateExportConfig(key, clamp(numericValue, min, max));
	};

	const copyCss = () => {
		if (copied || typeof navigator === 'undefined' || !navigator.clipboard) {
			return;
		}

		navigator.clipboard.writeText(cssOutput).then(() => {
			setCopied(true);

			if (copyTimeoutRef.current) {
				clearTimeout(copyTimeoutRef.current);
			}

			copyTimeoutRef.current = setTimeout(() => {
				setCopied(false);
			}, 2000);
		});
	};

	const downloadImage = async () => {
		if (!previewSurfaceRef.current) return;

		const canvas = document.createElement('canvas');
		const width = Math.round(exportConfig.width);
		const height = Math.round(exportConfig.height);
		const previewRect = previewSurfaceRef.current.getBoundingClientRect();
		const previewWidth = Math.round(previewRect.width);
		const previewHeight = Math.round(previewRect.height);
		const frameWidth = (exportFrameWidth / 100) * previewWidth;
		const frameHeight = (exportFrameHeight / 100) * previewHeight;
		const frameX = (exportFrameX / 100) * previewWidth;
		const frameY = (exportFrameY / 100) * previewHeight;
		const context = canvas.getContext('2d');

		if (!context) return;

		canvas.width = width;
		canvas.height = height;

		const renderedPreview = await loadImage(
			`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
				<svg xmlns="http://www.w3.org/2000/svg" width="${previewWidth}" height="${previewHeight}" viewBox="0 0 ${previewWidth} ${previewHeight}">
					<foreignObject width="100%" height="100%">
						<div xmlns="http://www.w3.org/1999/xhtml" style="position:relative;width:${previewWidth}px;height:${previewHeight}px;overflow:hidden;background:${escapeHtml(background)};">
							<div style="position:absolute;inset:0;background-image:url('${grain}');background-size:${config.grainScale}px ${config.grainScale}px;mix-blend-mode:overlay;opacity:${config.grainOpacity};"></div>
						</div>
					</foreignObject>
				</svg>
			`)}`
		);

		context.drawImage(
			renderedPreview,
			frameX,
			frameY,
			frameWidth,
			frameHeight,
			0,
			0,
			width,
			height
		);

		const link = document.createElement('a');
		link.download = `grainy-gradient-${width}x${height}.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	};

	const exportAspectRatio = exportConfig.width / exportConfig.height;
	const exportFrameWidth = exportAspectRatio >= 1
		? 100 / exportConfig.zoom
		: (100 / exportConfig.zoom) * exportAspectRatio;
	const exportFrameHeight = exportAspectRatio >= 1
		? (100 / exportConfig.zoom) / exportAspectRatio
		: 100 / exportConfig.zoom;
	const exportFrameX = (exportConfig.cropX / 100) * (100 - exportFrameWidth);
	const exportFrameY = (exportConfig.cropY / 100) * (100 - exportFrameHeight);

	const toggleExportPanel = () => {
		setIsExportPanelOpen((isOpen) => !isOpen);
	};

	useEffect(() => {
		return () => {
			if (copyTimeoutRef.current) {
				clearTimeout(copyTimeoutRef.current);
			}
		};
	}, []);

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<HeaderActions>
						<HeaderCopy>
							<SectionTitle>Grainy Gradient Generator</SectionTitle>
						</HeaderCopy>
						<ResetButton onClick={resetConfig} type="button">
							Reset defaults
						</ResetButton>
					</HeaderActions>
				</SectionHeader>

				<PreviewSection aria-label="Grainy gradient preview">
					<PreviewSurface
						ref={previewSurfaceRef}
						$background={background}
						$grain={grain}
						$grainOpacity={config.grainOpacity}
						$grainSize={config.grainScale}
						$aspectRatio={exportAspectRatio}
					>
						{isExportPanelOpen && (
							<ExportFrame
								$x={exportFrameX}
								$y={exportFrameY}
								$width={exportFrameWidth}
								$height={exportFrameHeight}
								aria-hidden="true"
							/>
						)}
					</PreviewSurface>
				</PreviewSection>

				<ExportDock>
					{isExportPanelOpen && (
						<ExportPanel aria-label="PNG export settings">
							<ExportPanelHeader>
								<CardHeader>
									<CardTitle>PNG Export</CardTitle>
									<CardDescription>
										Choose the image size and which part of the gradient frame
										to download.
									</CardDescription>
								</CardHeader>
								<ExportCloseButton
									onClick={() => setIsExportPanelOpen(false)}
									type="button"
									aria-label="Close PNG export settings"
								>
									x
								</ExportCloseButton>
							</ExportPanelHeader>
							<ExportFields>
								<ExportField>
									Width
									<input
										type="number"
										min="320"
										max="4096"
										step="10"
										value={exportConfig.width}
										onChange={(event) =>
											updateExportNumber(
												'width',
												event.target.value,
												320,
												4096
											)
										}
									/>
								</ExportField>
								<ExportField>
									Height
									<input
										type="number"
										min="320"
										max="4096"
										step="10"
										value={exportConfig.height}
										onChange={(event) =>
											updateExportNumber(
												'height',
												event.target.value,
												320,
												4096
											)
										}
									/>
								</ExportField>
							</ExportFields>
							<RangeSlider
								label="Area zoom"
								value={exportConfig.zoom}
								min={1}
								max={3}
								step={0.05}
								unit="x"
								onChange={(value) => updateExportConfig('zoom', value)}
							/>
							<RangeSlider
								label="Area X"
								value={exportConfig.cropX}
								min={0}
								max={100}
								step={1}
								unit="%"
								onChange={(value) => updateExportConfig('cropX', value)}
							/>
							<RangeSlider
								label="Area Y"
								value={exportConfig.cropY}
								min={0}
								max={100}
								step={1}
								unit="%"
								onChange={(value) => updateExportConfig('cropY', value)}
							/>
							<DownloadButton onClick={downloadImage} type="button">
								Download PNG
							</DownloadButton>
						</ExportPanel>
					)}
					<ExportToggleButton
						onClick={toggleExportPanel}
						type="button"
						aria-expanded={isExportPanelOpen}
					>
						{isExportPanelOpen ? 'Hide Export' : 'Export PNG'}
					</ExportToggleButton>
				</ExportDock>

				<ControlsGrid>
					<ControlCard $accent="#38bdf8">
						<CardHeader>
							<CardTitle>1. Canvas</CardTitle>
							<CardDescription>
								Set the dark foundation everything blends into.
							</CardDescription>
						</CardHeader>
						<ColorInput
							label="Background color"
							hex={config.baseColor}
							opacity={config.baseOpacity}
							onHexChange={(value) => updateConfig('baseColor', value)}
							onOpacityChange={(value) =>
								updateConfig('baseOpacity', value)
							}
						/>
					</ControlCard>

					<ControlCard $accent="#a855f7">
						<CardHeader>
							<CardTitle>2. Color Glows</CardTitle>
							<CardDescription>
								Pick the diffused blobs that sit on top of the base.
							</CardDescription>
						</CardHeader>
						<ColorInput
							label="Upper-left glow"
							hex={config.primaryColor}
							opacity={config.primaryOpacity}
							onHexChange={(value) => updateConfig('primaryColor', value)}
							onOpacityChange={(value) =>
								updateConfig('primaryOpacity', value)
							}
						/>
						<ColorInput
							label="Upper-right glow"
							hex={config.secondaryColor}
							opacity={config.secondaryOpacity}
							onHexChange={(value) =>
								updateConfig('secondaryColor', value)
							}
							onOpacityChange={(value) =>
								updateConfig('secondaryOpacity', value)
							}
						/>
						<ColorInput
							label="Bottom accent glow"
							hex={config.accentColor}
							opacity={config.accentOpacity}
							onHexChange={(value) => updateConfig('accentColor', value)}
							onOpacityChange={(value) =>
								updateConfig('accentOpacity', value)
							}
						/>
					</ControlCard>

					<ControlCard $accent="#f97316">
						<CardHeader>
							<CardTitle>3. Softness and Grain</CardTitle>
							<CardDescription>
								Control how far the glows spread and how visible the texture
								becomes.
							</CardDescription>
						</CardHeader>
						<RangeSlider
							label="Glow spread"
							value={config.blur}
							min={12}
							max={64}
							step={1}
							unit="rem"
							onChange={(value) => updateConfig('blur', value)}
						/>
						<RangeSlider
							label="Grain opacity"
							value={config.grainOpacity}
							min={0}
							max={0.8}
							step={0.01}
							unit=""
							onChange={(value) => updateConfig('grainOpacity', value)}
						/>
						<RangeSlider
							label="Grain size"
							value={config.grainScale}
							min={80}
							max={320}
							step={10}
							unit="px"
							onChange={(value) => updateConfig('grainScale', value)}
						/>
						<RangeSlider
							label="Noise frequency"
							value={config.grainFrequency}
							min={0.2}
							max={1.2}
							step={0.01}
							unit=""
							onChange={(value) =>
								updateConfig('grainFrequency', value)
							}
						/>
					</ControlCard>
				</ControlsGrid>

				<CssOutputSection>
					<CssOutputHeader>
						<CssOutputLabel htmlFor="grainy-gradient-css">
							Generated CSS
						</CssOutputLabel>
						<CopyCssButton
							onClick={copyCss}
							disabled={copied}
							type="button"
						>
							{copied ? 'Copied!' : 'Copy CSS'}
						</CopyCssButton>
					</CssOutputHeader>
					<CssOutputField
						id="grainy-gradient-css"
						value={cssOutput}
						readOnly
						spellCheck={false}
						aria-label="Generated grainy gradient CSS"
					/>
				</CssOutputSection>
			</ContentWrapper>
		</Container>
	);
};

export default GrainyGradientGenerator;
