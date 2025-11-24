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
	height: auto;

	${({ isFullscreen }) =>
		isFullscreen &&
		`
			width: auto;
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
	height: auto;

	${({ isFullscreen }) =>
		isFullscreen &&
		`
			width: auto;
		`}

	@media (max-width: 768px) {
		padding-left: 0;
		width: 100% !important;
	}
`;

export const SectionTitle = styled.h3`
	color: ${COLORS.WHITE_BFBFBF};
	font-size: 1.1rem;
	font-weight: 600;
	margin: 0;
	text-align: center;
	padding: 0.8em 0 0.4em 0;
	z-index: 1;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0.6em 0 0.3em 0;
	}
`;

export const ContentWrapper = styled('div', { shouldForwardProp: hideFullscreenProp })`
	display: flex;
	flex-direction: column;
	background-color: ${COLORS.GRAY_292929};
	border-radius: 8px;
	flex: 1;
	min-height: 0;
	overflow: hidden;
	border: 2px solid transparent;
	transition: border-color 0.2s ease;
	box-sizing: border-box;
	position: relative;

	&:focus-within {
		border-color: ${COLORS.GRAY_474747};
		outline: 1px solid ${COLORS.GRAY_474747};
		outline-offset: 2px;
	}
`;

export const InputField = styled('textarea', { shouldForwardProp: hideFullscreenProp })`
	background-color: transparent;
	color: ${COLORS.WHITE_FFFFFF};
	padding: 0.5em 1em 1em 1em;
	flex: 1;
	width: 100%;
	height: 100%;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: none;
	resize: none;
	line-height: 1.5;
	min-height: 0;
	outline: none;
	box-sizing: border-box;

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.5em 0.8em 0.8em 0.8em;
	}
`;

export const OutputField = styled('div', { shouldForwardProp: hideFullscreenProp })`
	background-color: transparent;
	color: ${COLORS.WHITE_FFFFFF};
	padding: 0.5em 1em 1em 1em;
	flex: 1;
	width: 100%;
	height: 100%;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: none;
	box-sizing: border-box;
	overflow-y: auto;
	line-height: 1.5;
	white-space: pre-wrap;
	word-wrap: break-word;
	min-height: 0;

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.5em 0.8em 0.8em 0.8em;
	}
`;

export const ErrorMessage = styled.div`
	background-color: rgba(220, 38, 38, 0.1);
	color: ${COLORS.RED_FCA5A5};
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid rgba(220, 38, 38, 0.3);
	font-size: 14px;
	line-height: 1.4;
`;

export const SuccessMessage = styled.div`
	background-color: rgba(34, 197, 94, 0.1);
	color: ${COLORS.GREEN_86EFAC};
	padding: 0.75em 1.5em;
	border-radius: 8px;
	border: 1px solid rgba(34, 197, 94, 0.3);
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

export const CopyButton = styled(FormatButton)`
	background-color: ${COLORS.GRAY_383838};
	color: ${COLORS.WHITE_BFBFBF};

	&:hover {
		background-color: ${COLORS.GRAY_222939};
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 1em;
	gap: 1em;
	background-color: transparent;
`;

export const MessagesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 1em;
	min-height: 3em;
	gap: 1em;
	background-color: transparent;
`;

export const Separator = styled('div', { shouldForwardProp: hideFullscreenProp })`
	width: 16px;
	flex: none;
	cursor: col-resize;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: stretch;
	position: relative;
	z-index: 10;
	margin: 0;

	&::after {
		content: '';
		width: 4px;
		height: 150px;
		background-color: ${COLORS.GRAY_474747};
		border-radius: 100px;
		transition: all 0.2s ease;
	}

	&:hover::after,
	&.dragging::after {
		background-color: ${COLORS.BLUE_2337FF};
		height: 364px;
		box-shadow: 2px 2px 12px rgba(35, 55, 255, 0.4);
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const SectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	min-height: 40px;
`;

export const FullscreenButton = styled.button`
	position: absolute;
	right: 1em;
	top: 50%;
	transform: translateY(-50%);
	background: ${COLORS.GRAY_303030};
	color: ${COLORS.WHITE_FFFFFF};
	border: 1px solid ${COLORS.GRAY_404040};
	border-radius: 8px;
	padding: 0.4em 0.9em;
	font-size: 0.85rem;
	cursor: pointer;
	transition: background 0.2s ease, border-color 0.2s ease;
	z-index: 2;

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
