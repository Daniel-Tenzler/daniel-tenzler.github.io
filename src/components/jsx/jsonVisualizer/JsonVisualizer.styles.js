import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const hideFullscreenProp = (prop) => prop !== 'isFullscreen';

const fadeOut = keyframes`
	0% {
		opacity: 1;
	}
	70% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

export const Container = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})`
	width: 90%;
	max-width: 1600px;
	height: 100%;
	min-height: calc(100vh - 246px);
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
			background-color: var(--black-1a1a1a);
			z-index: 1000;
			flex-direction: row;
			justify-content: stretch;
			gap: 0;
			width: 100%;
			max-width: 100%;
		`}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1.5em;
		width: 95%;
	}
`;

export const InputSection = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})`
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
			border-radius: 0;
		`}

	@media (max-width: 768px) {
		padding-right: 0;
		width: 100% !important;
	}
`;

export const OutputSection = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})`
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
			border-radius: 0;
		`}

	@media (max-width: 768px) {
		padding-left: 0;
		width: 100% !important;
	}
`;

export const SectionTitle = styled.h3`
	color: var(--color-text-muted);
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

const BaseContentWrapper = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})`
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

	${({ isFullscreen }) =>
		isFullscreen &&
		`
			border-radius: 0;
			border: none;
		`}
`;

export const InputContentWrapper = styled(BaseContentWrapper)`
	&:focus-within {
		${({ isFullscreen }) =>
			isFullscreen
				? `background-color: var(--gray-2d2d2d);`
				: `
					border-color: var(--gray-474747);
					outline: 1px solid var(--gray-474747);
					outline-offset: 2px;
				`}
	}
`;

export const OutputContentWrapper = styled(BaseContentWrapper)`
	/* No focus events for output section */
`;

export const InputField = styled('textarea', {
	shouldForwardProp: hideFullscreenProp,
})`
	background-color: transparent;
	color: var(--color-text-emphasis);
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

export const OutputField = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})`
	background-color: transparent;
	color: var(--color-text-emphasis);
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
	color: var(--color-status-error);
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid rgba(220, 38, 38, 0.3);
	font-size: 14px;
	line-height: 1.4;
`;

export const SuccessMessage = styled.div`
	background-color: rgba(34, 197, 94, 0.1);
	color: var(--color-status-success);
	padding: 0.75em 1.5em;
	border-radius: 8px;
	border: 1px solid rgba(34, 197, 94, 0.3);
	font-size: 14px;
	line-height: 1.4;
	${({ fading }) =>
		fading &&
		`
			animation: ${fadeOut} 2s ease-out forwards;
		`}
`;

export const FormatButton = styled.button`
	background-color: var(--gray-383838);
	color: var(--color-text-muted);
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
		background-color: var(--color-border-light);
		box-shadow: 0px 0px 14px #1418208a;
	}

	&:active {
		background-color: var(--gray-383838);
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
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

export const CopyButton = styled(FormatButton)``;

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

export const Separator = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})`
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
		background-color: var(--gray-474747);
		border-radius: 100px;
		transition: all 0.2s ease;
	}

	&:hover::after,
	&.dragging::after {
		background-color: var(--color-accent-brand);
		height: 364px;
		box-shadow: 2px 2px 12px #2337ff66;
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
	background: var(--color-border-light);
	color: var(--color-text-emphasis);
	border: 1px solid var(--gray-404040);
	border-radius: 8px;
	padding: 0.4em 0.9em;
	font-size: 0.85rem;
	cursor: pointer;
	transition:
		background 0.2s ease,
		border-color 0.2s ease;
	z-index: 2;

	&:hover {
		background: var(--gray-404040);
		border-color: var(--gray-474747);
	}

	&:active {
		background: var(--gray-383838);
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}
`;
