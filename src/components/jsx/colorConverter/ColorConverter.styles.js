import styled from '@emotion/styled';

export const Container = styled.div`
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
	gap: 1em;
	padding: 1em;

	&:focus-within {
		border-color: var(--gray-474747);
		outline: 1px solid var(--gray-474747);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		padding: 0.8em;
		gap: 0.8em;
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

export const InputSection = styled.div`
	display: flex;
	gap: 0.5em;
	align-items: center;

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 0.8em;
	}
`;

export const ColorInput = styled.input`
	flex: 1;
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	padding: 0.75em 1em;
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	outline: none;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&::placeholder {
		color: var(--color-text-primary);
	}

	&:focus {
		border-color: var(--color-border-light);
		box-shadow: 0 0 0 2px var(--gray-474747);
	}

	&[aria-invalid='true'] {
		border-color: var(--color-status-error);
	}

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.6em 0.8em;
	}
`;

export const ColorPickerButton = styled.input`
	width: 50px;
	height: 50px;
	min-width: 50px;
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	cursor: pointer;
	background-color: transparent;
	padding: 0;

	&::-webkit-color-swatch-wrapper {
		padding: 0;
	}

	&::-webkit-color-swatch {
		border: none;
		border-radius: 6px;
	}

	&::-moz-color-swatch {
		border: none;
		border-radius: 6px;
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 480px) {
		width: 100%;
		height: 45px;
	}
`;

export const ColorPreview = styled.div`
	width: 100%;
	height: 80px;
	border-radius: 8px;
	border: 1px solid var(--gray-474747);
	background-color: ${(props) => props.$backgroundColor || 'transparent'};
	transition: background-color 0.2s ease;

	@media (max-width: 480px) {
		height: 60px;
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
	text-align: center;

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.6em;
	}
`;

export const FormatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1em;
	width: 100%;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 0.8em;
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
		gap: 0.6em;
	}
`;

export const FormatCard = styled.div`
	background-color: var(--gray-383838);
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		border-color: var(--color-border-light);
	}

	@media (max-width: 768px) {
		padding: 0.8em;
	}
`;

export const FormatLabel = styled.div`
	font-size: 12px;
	font-weight: 600;
	color: var(--color-text-primary);
	text-transform: uppercase;
	letter-spacing: 0.05em;

	@media (max-width: 768px) {
		font-size: 11px;
	}
`;

export const FormatValue = styled.div`
	font-size: 13px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	color: var(--color-text-emphasis);
	word-break: break-all;
	line-height: 1.4;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

export const CopyButton = styled(BaseSmallButton)`
	align-self: flex-start;
	margin-top: auto;
`;
