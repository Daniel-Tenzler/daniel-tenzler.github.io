import styled from '@emotion/styled';
import type { CopyButtonProps } from './CodeOutput.types';

export const CodeOutputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
`;

export const CodeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CodeLabel = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-secondary);
`;

export const CopyButton = styled.button<CopyButtonProps>`
	padding: 6px 13px;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: ${(props) =>
		props.$copied ? 'var(--color-status-success)' : 'var(--gray-2d2d2d)'};
	color: ${(props) =>
		props.$copied ? 'var(--gray-2d2d2d)' : 'var(--color-text-primary)'};
	border-color: ${(props) =>
		props.$copied
			? 'var(--color-status-success)'
			: 'var(--color-border-light)'};
	font-size: 14px;
	cursor: pointer;
	transition:
		background-color 0.2s,
		border-color 0.2s,
		color 0.2s,
		transform 0.1s;
	display: flex;
	align-items: center;
	gap: 6px;

	&:hover:not(:disabled) {
		background-color: ${(props) =>
			props.$copied
				? 'var(--color-status-success)'
				: 'var(--gray-383838)'};
		border-color: ${(props) =>
			props.$copied
				? 'var(--color-status-success)'
				: 'var(--color-accent-brand)'};
	}

	&:active:not(:disabled) {
		transform: scale(0.98);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;

export const CodeBlock = styled.pre`
	display: flex;
	align-items: center;
	padding: 16px;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2d2d2d);
	color: var(--color-text-primary);
	font-family: 'Courier New', monospace;
	font-size: 14px;
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
