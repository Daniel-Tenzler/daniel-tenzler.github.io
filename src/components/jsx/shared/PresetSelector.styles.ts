import styled from '@emotion/styled';
import type {PresetButtonProps, PresetPreviewProps} from './PresetSelector.types';

export const PresetSelectorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
`;

export const PresetLabel = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-secondary);
`;

export const PresetGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	gap: 8px;
	width: 100%;
`;

export const PresetButton = styled.button<PresetButtonProps>`
	padding: 12px 8px;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: ${(props) =>
		props.$isActive ? 'var(--color-accent-brand)' : 'var(--gray-2a2a2a)'};
	color: ${(props) =>
		props.$isActive ? 'var(--gray-2a2a2a)' : 'var(--color-text-primary)'};
	border-color: ${(props) =>
		props.$isActive ? 'var(--color-accent-brand)' : 'var(--color-border-light)'};
	font-size: 14px;
	font-weight: ${(props) => (props.$isActive ? '500' : '400')};
	cursor: pointer;
	transition: all 0.2s;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover:not(:disabled) {
		background-color: ${(props) =>
			props.$isActive ? 'var(--color-accent-brand)' : 'var(--gray-383838)'};
		border-color: ${(props) =>
			props.$isActive ? 'var(--color-accent-brand)' : 'var(--color-accent-brand)'};
		transform: scale(1.02);
	}

	&:active:not(:disabled) {
		transform: scale(1);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const PresetPreview = styled.div<PresetPreviewProps>`
	width: 100%;
	height: 40px;
	border-radius: 3px;
	margin-bottom: 6px;
	background: ${(props) => props.$preview};
	border: 1px solid var(--color-border-light);
`;
