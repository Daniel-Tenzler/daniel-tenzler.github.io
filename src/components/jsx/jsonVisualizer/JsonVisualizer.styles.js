import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

const hideFullscreenProp = (prop) => prop !== 'isFullscreen';

export const Container = styled('div', { shouldForwardProp: hideFullscreenProp })`
	width: 90%;
	max-width: 1600px;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	gap: 0;
	align-items: stretch;
	position: relative;

	${({ isFullscreen }) =>
		isFullscreen &&
		`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			min-height: 100vh;
			padding: 0;
			margin: 0;
			background-color: ${COLORS.BLACK_0F1219};
			z-index: 1000;
			flex-direction: row;
			justify-content: stretch;
			gap: 0;
		`}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1.5em;
		width: 95%;
	}
`;

export const InputSection = styled('div', { shouldForwardProp: hideFullscreenProp })`
	flex: 1;
	padding-right: ${({ isFullscreen }) => (isFullscreen ? 0 : '0.5em')};
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	min-height: 0;

	${({ isFullscreen }) =>
		isFullscreen &&
		`
			width: auto;
			height: 100%;
		`}

	@media (max-width: 768px) {
		padding-right: 0;
		width: 100% !important;
	}
`;

export const OutputSection = styled('div', { shouldForwardProp: hideFullscreenProp })`
	flex: 1;
	padding-left: ${({ isFullscreen }) => (isFullscreen ? 0 : '0.5em')};
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	min-height: 0;

	${({ isFullscreen }) =>
		isFullscreen &&
		`
			width: auto;
			height: 100%;
		`}

	@media (max-width: 768px) {
		padding-left: 0;
		width: 100% !important;
	}
`;

export const SectionTitle = styled.h3`
	color: ${COLORS.WHITE_BFBFBF};
	font-size: 1.2rem;
	font-weight: 600;
	margin: 0 0 1em 0;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 1.1rem;
		margin-bottom: 0.8em;
	}
`;

export const InputField = styled('textarea', { shouldForwardProp: hideFullscreenProp })`
	background-color: ${COLORS.GRAY_292929};
	color: ${COLORS.WHITE_FFFFFF};
	padding: 1em;
	height: ${({ isFullscreen }) => (isFullscreen ? '100%' : '500px')};
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: 2px solid transparent;
	border-radius: 8px;
	transition: border-color 0.2s ease;
	resize: ${({ isFullscreen }) => (isFullscreen ? 'none' : 'vertical')};
	line-height: 1.5;
	flex: ${({ isFullscreen }) => (isFullscreen ? 1 : 'unset')};
	min-height: 0;

	&:focus-visible {
		border-color: ${COLORS.GRAY_474747};
		outline: 1px solid ${COLORS.GRAY_474747};
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.8em;
	}
`;

export const OutputField = styled('div', { shouldForwardProp: hideFullscreenProp })`
	background-color: ${COLORS.GRAY_292929};
	color: ${COLORS.WHITE_FFFFFF};
	padding: 1em;
	height: ${({ isFullscreen }) => (isFullscreen ? '100%' : '500px')};
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: 2px solid transparent;
	border-radius: 8px;
	overflow-y: auto;
	line-height: 1.5;
	white-space: pre-wrap;
	word-wrap: break-word;
	flex: ${({ isFullscreen }) => (isFullscreen ? 1 : 'unset')};
	min-height: 0;

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.8em;
	}
`;

export const ErrorMessage = styled.div`
	background-color: rgba(220, 38, 38, 0.1);
	color: ${COLORS.RED_FCA5A5};
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid rgba(220, 38, 38, 0.3);
	margin-top: 1em;
	font-size: 14px;
	line-height: 1.4;
`;

export const SuccessMessage = styled.div`
	background-color: rgba(34, 197, 94, 0.1);
	color: ${COLORS.GREEN_86EFAC};
	padding: 0.75em 1.5em;
	border-radius: 8px;
	border: 1px solid rgba(34, 197, 94, 0.3);
	margin-top: 1em;
	font-size: 14px;
	line-height: 1.4;
`;

export const FormatButton = styled.button`
	background-color: ${COLORS.GRAY_383838};
	color: ${COLORS.WHITE_BFBFBF};
	padding: 0.75em 1.5em;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	margin-top: 1em;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		background-color: ${COLORS.GRAY_222939};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active {
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

	@media (max-width: 768px) {
		padding: 0.6em 1.2em;
		font-size: 0.9rem;
	}
`;

export const Separator = styled('div', { shouldForwardProp: hideFullscreenProp })`
	width: 10px;
	flex: none;
	cursor: col-resize;
	background: linear-gradient(
		to bottom,
		${COLORS.GRAY_474747},
		${COLORS.GRAY_383838}
	);
	border-radius: 6px;
	align-self: stretch;
	position: relative;
	transition: background 0.2s ease;
	margin: ${({ isFullscreen }) => (isFullscreen ? '0' : '60px 0')};

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 2px;
		height: 60%;
		background: linear-gradient(
			to bottom,
			${COLORS.BLUE_00004A},
			${COLORS.BLUE_000D8A}
		);
		border-radius: 100px;
	}

	&.dragging {
		background: ${COLORS.GRAY_474747};
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const OutputHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	margin-bottom: 1em;

	h3 {
		margin: 0;
		text-align: left;
	}
`;

export const FullscreenButton = styled.button`
	background: ${COLORS.GRAY_303030};
	color: ${COLORS.WHITE_FFFFFF};
	border: 1px solid ${COLORS.GRAY_404040};
	border-radius: 8px;
	padding: 0.4em 0.9em;
	font-size: 0.85rem;
	cursor: pointer;
	transition: background 0.2s ease, border-color 0.2s ease;

	&:hover {
		background: ${COLORS.GRAY_404040};
		border-color: ${COLORS.GRAY_474747};
	}

	&:active {
		background: ${COLORS.GRAY_383838};
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.BLUE_2337FF};
		outline-offset: 2px;
	}
`;
