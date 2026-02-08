import styled from '@emotion/styled';

export const PresetSelectorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;
`;

export const PresetLabel = styled.label`
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--color-text-secondary);
`;

export const PresetGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	gap: 0.5rem;
	width: 100%;
`;

export const PresetButton = styled.button`
	padding: 0.75rem 0.5rem;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-size: 0.85rem;
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

export const PresetPreview = styled.div`
	width: 100%;
	height: 40px;
	border-radius: 3px;
	margin-bottom: 0.4rem;
	background: ${(props) => props.$preview};
	border: 1px solid var(--color-border-light);
`;
