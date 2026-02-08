import styled from '@emotion/styled';

export const CodeOutputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;
`;

export const CodeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CodeLabel = styled.label`
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--color-text-secondary);
`;

export const CopyButton = styled.button`
	padding: 0.4rem 0.8rem;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-size: 0.85rem;
	cursor: pointer;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	gap: 0.4rem;

	&:hover:not(:disabled) {
		background-color: var(--gray-383838);
		border-color: var(--color-accent-brand);
	}

	&:active:not(:disabled) {
		transform: scale(0.98);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}

	&.copied {
		background-color: var(--green-86efac);
		color: var(--gray-2a2a2a);
		border-color: var(--green-86efac);
	}
`;

export const CodeBlock = styled.pre`
	display: flex;
	align-items: center;
	padding: 1rem;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-family: 'Courier New', monospace;
	font-size: 0.85rem;
	line-height: 1.5;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: pre-wrap;
	word-break: break-all;
	min-height: 60px;
	max-height: 200px;
`;

export const CopyIcon = styled.svg`
	width: 16px;
	height: 16px;
`;
