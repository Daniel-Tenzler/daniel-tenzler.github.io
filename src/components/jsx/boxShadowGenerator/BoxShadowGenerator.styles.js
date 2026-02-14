import styled from '@emotion/styled';
import { BaseMediumButton, BaseToggleButton } from 'src/components/jsx/ui/Button.styles';

export const Container = styled.div`
	width: 90%;
	max-width: 1200px;
	height: 100%;
	min-height: calc(100vh - 246px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const SectionTitle = styled.h3`
	color: var(--color-text-emphasis);
	font-size: 18px;
	font-weight: 600;
	margin: 0;
	text-align: center;
	padding: 0.8em 0 0.4em 0;
	z-index: 1;

	@media (max-width: 768px) {
		font-size: 16px;
		padding: 0.6em 0 0.3em 0;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--gray-292929);
	border-radius: 8px;
	flex: 1;
	min-height: 0;
	overflow: hidden;
	border: 2px solid transparent;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
	box-sizing: border-box;
	position: relative;
	gap: 1.5em;
	padding: 1.5em;

	&:focus-within {
		border-color: var(--gray-474747);
		outline: 1px solid var(--gray-474747);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		padding: 1em;
		gap: 1em;
	}
`;

export const SectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	min-height: 40px;
`;

export const PreviewSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em;
	background-color: ${(props) => props.$backgroundColor || 'var(--gray-383838)'};
	border-radius: 8px;
	border: 1px solid var(--gray-474747);

	@media (max-width: 768px) {
		padding: 1.5em;
	}
`;

export const PreviewBox = styled.div`
	width: 150px;
	height: 150px;
	background-color: ${(props) => props.$backgroundColor || 'var(--color-text-emphasis)'};
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--gray-292929);
	font-weight: 600;
	box-shadow: ${(props) => props.$boxShadow || 'none'};
	transition: box-shadow 0.2s ease;

	@media (max-width: 768px) {
		width: 120px;
		height: 120px;
		font-size: 14px;
	}
`;

export const ControlsSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8em;
`;

export const LayersList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;

	@media (max-width: 480px) {
		justify-content: center;
	}
`;

export const LayerItem = styled(BaseToggleButton)`
	padding: 0.6em 1em;
`;

export const LayerHeader = styled.span`
	font-weight: 600;
`;

export const LayerControls = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1em;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0.8em;
	}
`;

export const ControlGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

export const ControlLabel = styled.label`
	font-size: 13px;
	font-weight: 500;
	color: var(--color-text-primary);

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const ControlInput = styled.input`
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	padding: 0.6em 0.8em;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	font-size: 14px;
	outline: none;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:focus {
		border-color: var(--color-border-light);
		box-shadow: 0 0 0 2px var(--gray-474747);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.5em 0.7em;
	}

	@media (max-width: 480px) {
		font-size: 12px;
	}
`;

export const ColorInputWrapper = styled.div`
	display: flex;
	gap: 0.5em;
	align-items: center;
`;

export const ColorPicker = styled.input`
	width: 50px;
	height: 40px;
	min-width: 50px;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	cursor: pointer;
	background-color: transparent;
	padding: 0;

	&::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	&::-webkit-color-swatch {
		border: none;
		border-radius: 4px;
	}

	&::-moz-color-swatch {
		border: none;
		border-radius: 4px;
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 480px) {
		width: 45px;
		height: 35px;
	}
`;

export const ColorHexInput = styled.input`
	flex: 1;
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	padding: 0.6em 0.8em;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	outline: none;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:focus {
		border-color: var(--color-border-light);
		box-shadow: 0 0 0 2px var(--gray-474747);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.5em 0.7em;
	}

	@media (max-width: 480px) {
		font-size: 12px;
	}
`;

export const OpacitySlider = styled.input`
	height: 6px;
	border-radius: 3px;
	background: var(--gray-474747);
	outline: none;
	-webkit-appearance: none;
	appearance: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-text-emphasis);
		cursor: pointer;
		transition: background-color 0.2s ease;

		&:hover {
			background: var(--color-border-light);
		}
	}

	&::-moz-range-thumb {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-text-emphasis);
		cursor: pointer;
		border: none;
		transition: background-color 0.2s ease;

		&:hover {
			background: var(--color-border-light);
		}
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}
`;

export const ToggleButton = styled(BaseToggleButton)`
	padding: 0.6em 1.2em;
	text-align: center;
`;

export const AddLayerButton = styled(BaseMediumButton);

export const RemoveLayerButton = styled(BaseMediumButton);

export const PresetsSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8em;
`;

export const PresetsTitle = styled.h4`
	font-size: 14px;
	font-weight: 600;
	color: var(--color-text-primary);
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 0.05em;

	@media (max-width: 768px) {
		font-size: 13px;
	}
`;

export const PresetsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;

	@media (max-width: 480px) {
		justify-content: center;
	}
`;

export const PresetButton = styled(BaseMediumButton)`
	flex: 1;
	min-width: 80px;
	text-align: center;
`;

export const OutputSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8em;
`;

export const OutputCode = styled.textarea`
	min-height: 60px;
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	padding: 0.8em;
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	font-size: 13px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	resize: vertical;
	outline: none;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;
	line-height: 1.4;

	&:focus {
		border-color: var(--color-border-light);
		box-shadow: 0 0 0 2px var(--gray-474747);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.6em;
		min-height: 50px;
	}
`;

export const CopyButton = styled(BaseMediumButton)`
	padding: 0.6em 1.2em;
	align-self: flex-start;
`;
