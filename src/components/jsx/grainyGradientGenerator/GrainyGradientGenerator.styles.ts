import styled from '@emotion/styled';

export {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	ControlsGroup,
} from '../gradientGenerator/GradientGenerator.styles';

interface PreviewSurfaceProps {
	$background: string;
	$grain: string;
	$grainOpacity: number;
	$grainSize: number;
	$aspectRatio: number;
}

interface ExportFrameProps {
	$x: number;
	$y: number;
	$width: number;
	$height: number;
}

interface ControlCardProps {
	$accent: string;
}

export const HeaderActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 1rem;

	@media (max-width: 768px) {
		align-items: stretch;
		flex-direction: column;
	}
`;

export const HeaderCopy = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
`;

export const ResetButton = styled.button`
	padding: 0.75rem 1rem;
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 999px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.14), transparent),
		#101828;
	color: var(--color-text-emphasis);
	font-size: 0.88rem;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	cursor: pointer;
	box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease,
		transform 0.2s ease;

	&:hover {
		border-color: #22d3ee;
		box-shadow: 0 16px 42px rgba(34, 211, 238, 0.18);
		transform: translateY(-1px);
	}

	&:focus-visible {
		outline: 2px solid #22d3ee;
		outline-offset: 3px;
	}
`;

export const PreviewSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75em;
`;

export const PreviewSurface = styled.div<PreviewSurfaceProps>`
	position: relative;
	aspect-ratio: ${(props) => props.$aspectRatio};
	width: 100%;
	overflow: hidden;
	border: 1px solid var(--gray-474747);
	border-radius: 24px;
	background: ${(props) => props.$background};
	box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
	isolation: isolate;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		background-image: url('${(props) => props.$grain}');
		background-size: ${(props) => props.$grainSize}px
			${(props) => props.$grainSize}px;
		mix-blend-mode: overlay;
		opacity: ${(props) => props.$grainOpacity};
		pointer-events: none;
	}

	@media (max-width: 768px) {
		border-radius: 18px;
	}
`;

export const PreviewLabel = styled.div`
	position: absolute;
	right: 1.25rem;
	bottom: 1.25rem;
	z-index: 2;
	max-width: 18rem;
	padding: 0.8rem 1rem;
	border: 1px solid rgba(255, 255, 255, 0.22);
	border-radius: 16px;
	background: rgba(10, 12, 20, 0.48);
	color: rgba(255, 255, 255, 0.88);
	font-size: 0.9rem;
	line-height: 1.5;
	backdrop-filter: blur(14px);

	strong {
		display: block;
		margin-bottom: 0.25rem;
		color: #fff;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		right: 1rem;
		bottom: 1rem;
		left: 1rem;
		max-width: none;
	}
`;

export const ExportFrame = styled.div<ExportFrameProps>`
	position: absolute;
	left: ${(props) => props.$x}%;
	top: ${(props) => props.$y}%;
	z-index: 3;
	width: ${(props) => props.$width}%;
	height: ${(props) => props.$height}%;
	border: 2px solid #f8fafc;
	border-radius: 14px;
	box-shadow:
		0 0 0 999px rgba(2, 6, 23, 0.38),
		0 0 28px rgba(34, 211, 238, 0.38),
		inset 0 0 0 1px rgba(2, 6, 23, 0.55);
	pointer-events: none;

	&::before,
	&::after {
		content: '';
		position: absolute;
		inset: 33.333% 0 auto;
		border-top: 1px solid rgba(255, 255, 255, 0.36);
	}

	&::after {
		inset: 0 auto 0 33.333%;
		border-top: none;
		border-left: 1px solid rgba(255, 255, 255, 0.36);
	}
`;

export const ExportDock = styled.div`
	position: fixed;
	right: 1.25rem;
	bottom: 1.25rem;
	z-index: 30;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.75rem;
	width: min(390px, calc(100vw - 2rem));
	pointer-events: none;

	@media (max-width: 768px) {
		right: 1rem;
		bottom: 1rem;
		width: calc(100vw - 2rem);
	}
`;

export const ExportToggleButton = styled.button`
	pointer-events: auto;
	padding: 0.85rem 1.1rem;
	border: 1px solid rgba(20, 184, 166, 0.62);
	border-radius: 999px;
	background:
		linear-gradient(135deg, rgba(20, 184, 166, 0.42), transparent),
		#101828;
	color: var(--color-text-emphasis);
	font-size: 0.9rem;
	font-weight: 850;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	cursor: pointer;
	box-shadow:
		0 18px 52px rgba(0, 0, 0, 0.42),
		0 0 28px rgba(20, 184, 166, 0.18);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease,
		transform 0.2s ease;

	&:hover {
		border-color: #2dd4bf;
		box-shadow:
			0 22px 62px rgba(0, 0, 0, 0.48),
			0 0 38px rgba(20, 184, 166, 0.3);
		transform: translateY(-1px);
	}

	&:focus-visible {
		outline: 2px solid #2dd4bf;
		outline-offset: 3px;
	}
`;

export const ExportPanel = styled.aside`
	--control-accent: #14b8a6;
	--color-accent-brand: #14b8a6;

	pointer-events: auto;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 100%;
	max-height: calc(100vh - 7rem);
	overflow: auto;
	padding: 1.05em;
	border: 1px solid color-mix(in srgb, var(--control-accent) 48%, #474747);
	border-radius: 22px;
	background:
		linear-gradient(
			135deg,
			color-mix(in srgb, var(--control-accent) 18%, transparent),
			transparent 42%
		),
		rgba(31, 41, 55, 0.96);
	box-shadow:
		0 24px 80px rgba(0, 0, 0, 0.56),
		inset 0 1px 0 rgba(255, 255, 255, 0.06);
	backdrop-filter: blur(18px);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--control-accent), transparent 78%);
	}

	input[type='range'] {
		background: linear-gradient(
			90deg,
			var(--control-accent),
			var(--gray-222939)
		);
	}

	@media (max-width: 768px) {
		max-height: calc(100vh - 6.5rem);
	}
`;

export const ExportPanelHeader = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;
`;

export const ExportCloseButton = styled.button`
	flex: 0 0 auto;
	width: 2rem;
	height: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 999px;
	background: rgba(2, 6, 23, 0.28);
	color: var(--color-text-emphasis);
	font-size: 1.1rem;
	line-height: 1;
	cursor: pointer;
	transition:
		border-color 0.2s ease,
		background-color 0.2s ease;

	&:hover {
		border-color: #2dd4bf;
		background: rgba(20, 184, 166, 0.18);
	}

	&:focus-visible {
		outline: 2px solid #2dd4bf;
		outline-offset: 3px;
	}
`;

export const ControlsGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1em;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const ControlCard = styled.div<ControlCardProps>`
	--control-accent: ${(props) => props.$accent};
	--color-accent-brand: ${(props) => props.$accent};

	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1em;
	overflow: hidden;
	padding: 1.05em;
	border: 1px solid color-mix(in srgb, var(--control-accent) 30%, #474747);
	border-radius: 18px;
	background:
		linear-gradient(
			135deg,
			color-mix(in srgb, var(--control-accent) 6%, transparent),
			transparent 92%
		),
		var(--gray-383838);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

	input[type='range'] {
		background: linear-gradient(
			90deg,
			var(--control-accent),
			var(--gray-222939)
		);
	}

	input[type='text'],
	input[type='number'] {
		border-radius: 10px;
		border-color: color-mix(
			in srgb,
			var(--control-accent) 34%,
			var(--color-border-light)
		);
	}
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export const CardTitle = styled.h3`
	margin: 0;
	color: var(--color-text-emphasis);
	font-size: 1.05rem;
	font-weight: 750;
`;

export const CardDescription = styled.p`
	margin: 0;
	color: var(--color-text-muted);
	font-size: 0.86rem;
	line-height: 1.5;
`;

export const ExportFields = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 0.75rem;
`;

export const ExportField = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
	color: var(--color-text-primary);
	font-size: 0.82rem;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;

	input {
		width: 100%;
		box-sizing: border-box;
		padding: 0.7rem 0.75rem;
		border: 1px solid color-mix(
			in srgb,
			var(--control-accent) 34%,
			var(--color-border-light)
		);
		border-radius: 10px;
		background: var(--gray-2a2a2a);
		color: var(--color-text-emphasis);
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
	}

	input:focus {
		border-color: var(--control-accent);
		outline: none;
		box-shadow: 0 0 0 3px color-mix(
			in srgb,
			var(--control-accent) 18%,
			transparent
		);
	}
`;

export const DownloadButton = styled.button`
	padding: 0.85rem 1rem;
	border: 1px solid color-mix(in srgb, var(--control-accent) 55%, #ffffff);
	border-radius: 14px;
	background:
		linear-gradient(
			135deg,
			color-mix(in srgb, var(--control-accent) 34%, transparent),
			transparent
		),
		var(--gray-222939);
	color: var(--color-text-emphasis);
	font-size: 0.9rem;
	font-weight: 800;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	cursor: pointer;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease,
		transform 0.2s ease;

	&:hover {
		box-shadow: 0 16px 42px color-mix(
			in srgb,
			var(--control-accent) 22%,
			transparent
		);
		transform: translateY(-1px);
	}

	&:focus-visible {
		outline: 2px solid var(--control-accent);
		outline-offset: 3px;
	}
`;

export const CssOutputSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const CssOutputHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	@media (max-width: 480px) {
		align-items: stretch;
		flex-direction: column;
	}
`;

export const CssOutputLabel = styled.label`
	color: var(--color-text-emphasis);
	font-size: 0.9rem;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
`;

export const CopyCssButton = styled.button`
	padding: 0.55rem 0.85rem;
	border: 1px solid rgba(34, 211, 238, 0.42);
	border-radius: 999px;
	background: rgba(34, 211, 238, 0.12);
	color: var(--color-text-emphasis);
	font-size: 0.85rem;
	font-weight: 700;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease,
		transform 0.2s ease;

	&:hover:not(:disabled) {
		border-color: #22d3ee;
		background: rgba(34, 211, 238, 0.22);
		transform: translateY(-1px);
	}

	&:disabled {
		cursor: default;
		opacity: 0.75;
	}

	&:focus-visible {
		outline: 2px solid #22d3ee;
		outline-offset: 3px;
	}
`;

export const CssOutputField = styled.textarea`
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
	height: 320px;
	max-height: 520px;
	padding: 1rem;
	border: 1px solid rgba(34, 211, 238, 0.3);
	border-radius: 16px;
	background:
		linear-gradient(135deg, rgba(34, 211, 238, 0.08), transparent 36%),
		var(--gray-2d2d2d);
	color: var(--color-text-primary);
	font-family: 'Courier New', monospace;
	font-size: 0.88rem;
	line-height: 1.55;
	resize: vertical;
	white-space: pre;
	overflow: auto;
	overflow-wrap: normal;

	@media (max-width: 768px) {
		height: 260px;
		max-height: 420px;
	}

	&:focus {
		border-color: #22d3ee;
		outline: none;
		box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.14);
	}
`;

export const Writeup = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1.25em;
	border: 1px solid var(--gray-474747);
	border-radius: 12px;
	background-color: rgba(56, 56, 56, 0.72);
	color: var(--color-text-primary);
	line-height: 1.65;

	h3,
	h4,
	p,
	ol {
		margin: 0;
	}

	h3,
	h4 {
		color: var(--color-text-emphasis);
	}

	ol {
		padding-left: 1.25em;
	}

	li + li {
		margin-top: 0.5em;
	}

	code {
		padding: 0.1rem 0.3rem;
		border-radius: 4px;
		background-color: var(--gray-222939);
		color: var(--color-text-emphasis);
	}
`;
