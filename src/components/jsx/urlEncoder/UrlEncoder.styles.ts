import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

export const Container = styled('div')`
	width: 90%;
	max-width: 1000px;
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

const BaseContentWrapper = styled('div')`
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
`;

export const ContentWrapper = styled(BaseContentWrapper)`
	&:focus-within {
		border-color: var(--gray-474747);
		outline: 1px solid var(--gray-474747);
		outline-offset: 2px;
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

const editorTextStyles = `
	padding: 0.5em 1em 1em 1em;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	line-height: 1.5;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
	box-sizing: border-box;

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.5em 0.8em 0.8em 0.8em;
	}
`;

export const EditorWrapper = styled('div')`
	position: relative;
	flex: 1;
	min-height: 0;
	width: 100%;

	@media (max-width: 768px) {
		height: 300px;
	}
`;

export const HighlightLayer = styled('div')`
	${editorTextStyles}
	position: absolute;
	inset: 0;
	z-index: 0;
	overflow: hidden;
	scrollbar-gutter: stable;
	scrollbar-width: thin;
	pointer-events: none;
	color: var(--color-text-emphasis);
`;

export const HighlightedDomain = styled('mark')`
	background-color: var(--blue-2337ff-4d);
	color: var(--color-text-emphasis);
	border-radius: 0.2em;
	box-shadow: 0 0 0 1px var(--blue-2337ff-99);
`;

export const InputField = styled('textarea')`
	${editorTextStyles}
	position: relative;
	z-index: 1;
	background-color: transparent;
	color: transparent;
	caret-color: var(--color-text-emphasis);
	width: 100%;
	height: 100%;
	border: none;
	resize: none;
	min-height: 0;
	outline: none;
	overflow: auto;
	scrollbar-color: var(--gray-474747) var(--gray-292929);
	scrollbar-gutter: stable;
	scrollbar-width: thin;

	&::placeholder {
		color: var(--gray-989898);
	}

	&::selection {
		background-color: var(--blue-2337ff-66);
		color: transparent;
	}

	&::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	&::-webkit-scrollbar-track {
		background: var(--gray-292929);
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background: var(--gray-474747);
		border-radius: 4px;

		&:hover {
			background: var(--gray-404040);
		}
	}

	@media (max-width: 768px) {
		height: 100%;
	}
`;

export const ErrorMessage = styled.div`
	background-color: #dc26261a;
	color: var(--color-status-error);
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid #dc26264d;
	font-size: 14px;
	line-height: 1.4;
`;

export const MessagesContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 1em;
	min-height: 3em;
	gap: 1em;
	background-color: transparent;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 1em;
	gap: 1em;
	background-color: transparent;

	@media (max-width: 480px) {
		gap: 0.8em;
	}
`;

export const DecodeButton = styled(BaseSmallButton)``;

export const EncodeButton = styled(BaseSmallButton)``;
