import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

export {
	Container,
	SectionTitle,
	ContentWrapper,
	SectionHeader,
	ErrorMessage,
} from '../tools/shared/ToolPageLayout.styles';

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
	font-size: 15px;
	font-family:
		ui-monospace, 'SFMono-Regular', Menlo, Monaco, Consolas,
		'Liberation Mono', 'Courier New', monospace;
	line-height: 1.5;
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
		font-size: 14px;
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
		border-radius: 8px;
	}

	@media (max-width: 480px) {
		width: 100%;
		height: 45px;
	}
`;

interface ColorPreviewProps {
	$backgroundColor?: string;
}

export const ColorPreview = styled.div<ColorPreviewProps>`
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

interface FormatCardProps {
	$isActive?: boolean;
}

export const FormatCard = styled.div<FormatCardProps>`
	background-color: var(--gray-383838);
	border: 1px solid
		${(props) =>
			props.$isActive
				? 'var(--color-border-light)'
				: 'var(--gray-474747)'};
	border-radius: 8px;
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		border-color: var(--color-border-light);
	}

	&:focus-visible {
		outline: 2px solid var(--color-border-light);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		padding: 0.8em;
	}
`;

export const FormatLabel = styled.div`
	font-size: 13px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	text-transform: uppercase;
	letter-spacing: 0.05em;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const FormatValue = styled.div`
	font-size: 15px;
	font-family:
		ui-monospace, 'SFMono-Regular', Menlo, Monaco, Consolas,
		'Liberation Mono', 'Courier New', monospace;
	color: var(--color-text-emphasis);
	word-break: break-all;
	line-height: 1.6;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const CopyButton = styled(BaseSmallButton)`
	align-self: flex-start;
	margin-top: auto;
`;
