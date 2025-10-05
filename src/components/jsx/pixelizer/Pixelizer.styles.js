import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

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
	color: ${COLORS.WHITE_BFBFBF};
	font-size: 1.1rem;
	font-weight: 500;
	cursor: pointer;
	padding: 0.75em 2em;
	border: 2px solid ${COLORS.GRAY_383838};
	border-radius: 8px;
	background-color: ${COLORS.GRAY_474747};
	transition: all 0.2s ease;
	display: inline-block;
	text-align: center;
	min-width: 200px;

	&:hover {
		background-color: ${COLORS.GRAY_383838};
		border-color: ${COLORS.WHITE_BFBFBF};
	}

	&:focus-within {
		outline: 2px solid ${COLORS.WHITE_BFBFBF};
		outline-offset: 2px;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
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
	border: 2px solid ${COLORS.GRAY_383838};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

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

const BaseButton = styled.button`
	color: ${COLORS.WHITE_BFBFBF};
	padding: 0.75em 2em;
	border: none;
	border-radius: 8px;
	background-color: ${COLORS.GRAY_2D2D2D};
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	min-width: 140px;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover:not(:disabled) {
		background-color: ${COLORS.GRAY_222939};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active:not(:disabled) {
		background-color: ${COLORS.GRAY_383838};
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.GRAY_222939};
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 480px) {
		padding: 0.6em 1.5em;
		font-size: 0.9rem;
		min-width: 120px;
	}
`;

export const ProcessButton = styled(BaseButton)``;

export const OutputField = styled.textarea`
	background-color: ${COLORS.GRAY_2D2D2D};
	color: ${COLORS.WHITE_FFFFFF};
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
		border-color: ${COLORS.WHITE_BFBFBF};
		outline: 2px solid ${COLORS.WHITE_BFBFBF};
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
	font-size: 0.9rem;
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
		border: 2px solid ${COLORS.GRAY_383838};
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

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
	background-color: ${COLORS.GRAY_474747};
	border-radius: 8px;
	border: 1px solid ${COLORS.GRAY_383838};
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

export const ReductionLabel = styled.label`
	color: ${COLORS.WHITE_BFBFBF};
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
`;

export const ReductionSlider = styled.input`
	width: 100%;
	height: 6px;
	border-radius: 3px;
	background: ${COLORS.GRAY_383838};
	outline: none;
	cursor: pointer;

	&::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: ${COLORS.WHITE_BFBFBF};
		cursor: pointer;
		border: 2px solid ${COLORS.GRAY_383838};
		transition: all 0.2s ease;

		&:hover {
			background: ${COLORS.WHITE_FFFFFF};
			transform: scale(1.1);
		}
	}

	&::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: ${COLORS.WHITE_BFBFBF};
		cursor: pointer;
		border: 2px solid ${COLORS.GRAY_383838};
		transition: all 0.2s ease;

		&:hover {
			background: ${COLORS.WHITE_FFFFFF};
			transform: scale(1.1);
		}
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.WHITE_BFBFBF};
		outline-offset: 2px;
	}
`;

export const ProcessingModeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	padding: 1em;
	background-color: ${COLORS.GRAY_474747};
	border-radius: 8px;
	border: 1px solid ${COLORS.GRAY_383838};
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

export const ProcessingModeLabel = styled.label`
	color: ${COLORS.WHITE_BFBFBF};
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
`;

export const ProcessingModeSelect = styled.select`
	background-color: ${COLORS.GRAY_383838};
	color: ${COLORS.WHITE_BFBFBF};
	border: 2px solid ${COLORS.GRAY_383838};
	border-radius: 6px;
	padding: 0.5em 1em;
	font-size: 0.95rem;
	cursor: pointer;
	min-width: 200px;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${COLORS.WHITE_BFBFBF};
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.WHITE_BFBFBF};
		outline-offset: 2px;
		border-color: ${COLORS.WHITE_BFBFBF};
	}

	option {
		background-color: ${COLORS.GRAY_383838};
		color: ${COLORS.WHITE_BFBFBF};
	}
`;
