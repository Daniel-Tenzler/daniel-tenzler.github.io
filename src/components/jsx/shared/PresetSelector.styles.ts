import styled from '@emotion/styled';

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

export const PresetButton = styled.button`
	padding: 12px 8px;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover:not(:disabled) {
		background-color: var(--gray-383838);
		border-color: var(--color-accent-brand);
		transform: translateY(-1px);
	}

	&:active:not(:disabled) {
		transform: translateY(0);
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&.active {
		background-color: var(--color-accent-brand);
		color: var(--gray-2a2a2a);
		border-color: var(--color-accent-brand);
		font-weight: 500;
	}
`;

interface PresetPreviewProps {
	$preview: string;
}

export const PresetPreview = styled.div<PresetPreviewProps>`
	width: 100%;
	height: 40px;
	border-radius: 3px;
	margin-bottom: 6px;
	background: ${(props) => props.$preview};
	border: 1px solid var(--color-border-light);
`;
