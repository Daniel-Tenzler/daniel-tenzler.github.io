import styled from '@emotion/styled';
import { BasePrimaryButton } from 'src/components/jsx/ui/Button.styles';

export const Container = styled.div`
	width: 90%;
	max-width: 1600px;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
`;

export const FileInputLabel = styled.label`
	color: var(--color-text-muted);
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	padding: 0.75em 2em;
	border: 2px solid var(--gray-383838);
	border-radius: 8px;
	background-color: var(--gray-474747);
	transition: all 0.2s ease;
	display: inline-block;
	text-align: center;
	min-width: 200px;

	&:hover {
		background-color: var(--gray-383838);
		border-color: var(--color-text-muted);
	}

	&:focus-within {
		outline: 2px solid var(--color-text-muted);
		outline-offset: 2px;
	}

	@media (max-width: 480px) {
		font-size: 16px;
		padding: 0.6em 1.5em;
		min-width: 150px;
	}
`;

export const FileInput = styled.input`
	display: none;
`;

export const PreviewContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 100%;
	margin: 1em 0;
`;

export const ImagePreview = styled.img`
	max-width: 100%;
	max-height: 300px;
	border-radius: 8px;
	border: 2px solid var(--gray-383838);
	box-shadow: 0 4px 8px #00000033;

	@media (max-width: 768px) {
		max-height: 200px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5em;
	flex-wrap: wrap;

	@media (max-width: 480px) {
		gap: 1em;
	}
`;

export const ProcessButton = styled(BasePrimaryButton);

export const OutputField = styled.textarea`
	background-color: var(--gray-2d2d2d);
	color: var(--color-text-emphasis);
	padding: 0.75em;
	max-width: 90%;
	width: 900px;
	max-height: 60vh;
	height: 400px;
	margin: 0 auto;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: 2px solid transparent;
	border-radius: 8px;
	transition: border-color 0.2s ease;
	resize: vertical;
	line-height: 1.4;

	&:focus-visible {
		border-color: var(--color-text-muted);
		outline: 2px solid var(--color-text-muted);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.5em;
		height: 300px;
	}
`;

export const ErrorMessage = styled.div`
	color: #ff6b6b;
	background-color: rgba(255, 107, 107, 0.1);
	border: 1px solid rgba(255, 107, 107, 0.3);
	border-radius: 6px;
	padding: 0.75em 1em;
	margin: 0.5em auto;
	text-align: center;
	font-size: 14px;
	max-width: 90%;
`;

export const ImageComparisonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
	width: 100%;
	max-width: 1500px;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
	}
`;

export const CanvasContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;

	canvas {
		max-width: 100%;
		max-height: 300px;
		border-radius: 8px;
		border: 2px solid var(--gray-383838);
		box-shadow: 0 4px 8px #00000033;

		@media (max-width: 768px) {
			max-height: 200px;
		}
	}
`;

export const ReductionControls = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	padding: 1em;
	background-color: var(--gray-474747);
	border-radius: 8px;
	border: 1px solid var(--gray-383838);
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

export const ReductionLabel = styled.label`
	color: var(--color-text-muted);
	font-size: 16px;
	font-weight: 500;
	text-align: center;
`;

export const ReductionSlider = styled.input`
	width: 100%;
	height: 6px;
	border-radius: 3px;
	background: var(--gray-383838);
	outline: none;
	cursor: pointer;

	&::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--color-text-muted);
		cursor: pointer;
		border: 2px solid var(--gray-383838);
		transition: all 0.2s ease;

		&:hover {
			background: var(--color-text-emphasis);
			transform: scale(1.1);
		}
	}

	&::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--color-text-muted);
		cursor: pointer;
		border: 2px solid var(--gray-383838);
		transition: all 0.2s ease;

		&:hover {
			background: var(--color-text-emphasis);
			transform: scale(1.1);
		}
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-muted);
		outline-offset: 2px;
	}
`;

export const ProcessingModeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	padding: 1em;
	background-color: var(--gray-474747);
	border-radius: 8px;
	border: 1px solid var(--gray-383838);
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

export const ProcessingModeLabel = styled.label`
	color: var(--color-text-muted);
	font-size: 16px;
	font-weight: 500;
	text-align: center;
`;

export const ProcessingModeSelect = styled.select`
	background-color: var(--gray-383838);
	color: var(--color-text-muted);
	border: 2px solid var(--gray-383838);
	border-radius: 6px;
	padding: 0.5em 1em;
	font-size: 15px;
	cursor: pointer;
	min-width: 200px;
	transition: all 0.2s ease;

	&:hover {
		border-color: var(--color-text-muted);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-muted);
		outline-offset: 2px;
		border-color: var(--color-text-muted);
	}

	option {
		background-color: var(--gray-383838);
		color: var(--color-text-muted);
	}
`;

export const Header = styled.div`
	text-align: center;
	margin-bottom: 32px;

	h1 {
		color: var(--color-text-emphasis);
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 8px;
	}

	p {
		color: var(--color-text-muted);
		font-size: 18px;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 32px;
		}

		p {
			font-size: 16px;
			padding: 0 16px;
		}
	}
`;

export const ControlsSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	padding: 24px;
	background-color: var(--gray-474747);
	border-radius: 8px;
	border: 1px solid var(--gray-383838);
	max-width: 800px;
	margin: 0 auto;
	width: 100%;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

export const FileUploadZone = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	padding: 48px 32px;
	border: 2px dashed var(--gray-383838);
	border-radius: 8px;
	background-color: var(--gray-2d2d2d);
	cursor: pointer;
	transition: all 0.2s ease;
	min-height: 200px;

	&:hover {
		border-color: var(--color-text-muted);
		background-color: var(--gray-333847);
	}

	&.drag-over {
		border-color: #14b8a6;
		background-color: rgba(20, 184, 166, 0.1);
	}

	&.has-file {
		border-color: #14b8a6;
		background-color: var(--gray-474747);
		padding: 24px;
	}

	svg {
		width: 48px;
		height: 48px;
		color: var(--color-text-muted);
	}

	.upload-text {
		color: var(--color-text-muted);
		font-size: 16px;
		text-align: center;
	}

	&.has-file .upload-text {
		font-size: 14px;
		color: var(--color-text-emphasis);
	}

	@media (max-width: 768px) {
		padding: 32px 16px;
		min-height: 150px;
	}
`;

export const PixelSizeSlider = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	.slider-container {
		display: flex;
		align-items: center;
		gap: 16px;
		width: 100%;
	}

	slider {
		flex: 1;
		height: 6px;
		border-radius: 3px;
		background: var(--gray-383838);
		outline: none;
		cursor: pointer;

		&::-webkit-slider-thumb {
			appearance: none;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: #14b8a6;
			cursor: pointer;
			border: 2px solid var(--gray-383838);
			transition: all 0.2s ease;

			&:hover {
				background: #0d9488;
				transform: scale(1.1);
			}
		}

		&::-moz-range-thumb {
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: #14b8a6;
			cursor: pointer;
			border: 2px solid var(--gray-383838);
			transition: all 0.2s ease;

			&:hover {
				background: #0d9488;
				transform: scale(1.1);
			}
		}

		&:focus-visible {
			outline: 2px solid var(--color-text-muted);
			outline-offset: 2px;
		}
	}

	.size-value {
		background-color: var(--gray-383838);
		color: var(--color-text-emphasis);
		padding: 8px 16px;
		border-radius: 6px;
		font-size: 15px;
		font-weight: 500;
		min-width: 60px;
		text-align: center;
	}

	.slider-label {
		color: var(--color-text-muted);
		font-size: 15px;
		font-weight: 500;
		text-align: center;
	}
`;

export const ActionButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
`;

export const ComparisonSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	padding: 32px;
	background-color: var(--gray-474747);
	border-radius: 8px;
	border: 1px solid var(--gray-383838);
	margin-top: 32px;
	width: 100%;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	flex: 1;

	.image-wrapper {
		position: relative;
		width: 100%;
		max-width: 400px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid var(--gray-383838);
		box-shadow: 0 4px 8px #00000033;

		img {
			width: 100%;
			height: auto;
			display: block;
		}

		canvas {
			width: 100%;
			height: auto;
			display: block;
		}
	}

	.image-label {
		color: var(--color-text-muted);
		font-size: 15px;
		font-weight: 500;
		text-align: center;
		padding: 0 16px;
	}

	@media (max-width: 768px) {
		.image-wrapper {
			max-width: 100%;
		}
	}
`;

export const UploadHint = styled.span`
	font-size: 0.85em;
	opacity: 0.7;
`;

export const ProcessingMessage = styled.div`
	color: var(--color-text-muted);
	background-color: var(--gray-474747);
	border: 1px solid var(--gray-383838);
	border-radius: 6px;
	padding: 0.75em 1em;
	margin: 0.5em auto;
	text-align: center;
	font-size: 14px;
	max-width: 90%;
`;
