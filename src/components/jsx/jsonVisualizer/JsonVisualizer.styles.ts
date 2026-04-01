import styled from '@emotion/styled';
import type { WithFullscreenProp } from './JsonVisualizer.types';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

const hideFullscreenProp = (prop: string) => prop !== 'isFullscreen';

export const Container = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})<WithFullscreenProp>`
	width: 97%;
	max-width: 1920px;
	height: 100%;
	min-height: calc(100vh - 180px);
	margin: 0 auto;
	padding: 0.5em 0;
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
		gap: 0.75em;
		width: 98%;
	}
`;

export const InputSection = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})<WithFullscreenProp>`
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
})<WithFullscreenProp>`
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
	font-size: 18px;
	font-weight: 600;
	margin: 0;
	text-align: center;
	padding: 0.45em 0 0.2em 0;
	z-index: 1;

	@media (max-width: 768px) {
		font-size: 16px;
		padding: 0.6em 0 0.3em 0;
	}
`;

const BaseContentWrapper = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})<WithFullscreenProp>`
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
})<WithFullscreenProp>`
	background-color: transparent;
	color: var(--color-text-emphasis);
	padding: 0.4em 0.7em 0.7em 0.7em;
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
		padding: 0.4em 0.6em 0.6em 0.6em;
	}
`;

export const OutputField = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})<WithFullscreenProp>`
	background-color: transparent;
	color: var(--color-text-emphasis);
	padding: 0.4em 0.7em 0.7em 0.7em;
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
		padding: 0.4em 0.6em 0.6em 0.6em;
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

export const ErrorHint = styled.span`
	display: block;
	margin-top: 0.4em;
	font-size: 12px;
	opacity: 0.8;
	font-style: italic;
`;

export const SuccessMessage = styled.div`
	background-color: rgba(34, 197, 94, 0.1);
	color: var(--color-status-success);
	padding: 0.75em 1.5em;
	border-radius: 8px;
	border: 1px solid rgba(34, 197, 94, 0.3);
	font-size: 14px;
	line-height: 1.4;
`;

export const CopyButton = styled(BaseSmallButton)`
	background-color: var(--gray-383838);
`;

export const ImportButton = styled(BaseSmallButton)`
	background-color: var(--gray-383838);
`;

export const ToolbarButton = styled(BaseSmallButton)`
	background-color: var(--gray-383838);
	padding: 0.35em 0.7em;
	font-size: 12px;

	@media (max-width: 768px) {
		font-size: 11px;
		padding: 0.3em 0.5em;
	}
`;

export const ToolbarContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0.3em 0.6em;
	gap: 0.5em;
	border-top: 1px solid var(--gray-383838);
	background-color: transparent;
`;

export const ToolbarSeparator = styled.span`
	width: 1px;
	height: 20px;
	background-color: var(--gray-474747);
	flex: none;
`;

export const IndentSelect = styled.select`
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	padding: 0.35em 0.6em;
	font-size: 12px;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		background-color: var(--gray-404040);
		border-color: var(--color-border-light);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 11px;
		padding: 0.3em 0.5em;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	padding: 0.5em 1em;
	gap: 0.6em;
	background-color: transparent;
`;

export const MessagesContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.35em 0.6em;
	min-height: 2.5em;
	gap: 1em;
	background-color: transparent;
`;

export const Separator = styled('div', {
	shouldForwardProp: hideFullscreenProp,
})<WithFullscreenProp>`
	width: 16px;
	flex: none;
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
		width: 2px;
		height: 150px;
		background-color: var(--gray-474747);
		border-radius: 999px;
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
	font-size: 14px;
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
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;
