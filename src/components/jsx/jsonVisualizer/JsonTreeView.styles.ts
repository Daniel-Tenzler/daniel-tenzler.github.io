import styled from '@emotion/styled';

export const TreeContainer = styled.div`
	margin: 0.45em 0.6em;
	padding: 0.55em;
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	background: var(--gray-2d2d2d);
`;

export const TreeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.75em;
	margin-bottom: 0.5em;
`;

export const TreeTitle = styled.h4`
	margin: 0;
	font-size: 14px;
	color: var(--color-text-muted);
`;

export const TreeSearch = styled.input`
	flex: 1;
	min-width: 160px;
	background: var(--gray-383838);
	color: var(--color-text-emphasis);
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	padding: 0.35em 0.6em;
	font-size: 12px;
`;

export const TreeRows = styled.div`
	max-height: 260px;
	overflow: auto;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	font-size: 12px;
`;

export const TreeRow = styled.div<{ $depth: number }>`
	display: flex;
	align-items: center;
	gap: 0.35em;
	padding: 0.2em 0;
	padding-left: ${({ $depth }) => `${$depth * 0.85}em`};
`;

export const ToggleButton = styled.button`
	border: none;
	background: transparent;
	color: var(--color-text-muted);
	cursor: pointer;
	padding: 0;
	width: 1.25em;
`;

export const KeyText = styled.span`
	color: var(--color-text-emphasis);
`;

export const ValueText = styled.span`
	color: var(--color-text-muted);
	word-break: break-all;
`;

export const TypeBadge = styled.span`
	font-size: 10px;
	padding: 0.15em 0.4em;
	border-radius: 999px;
	border: 1px solid var(--gray-474747);
	color: var(--color-text-muted);
`;

export const CopyPathButton = styled.button`
	margin-left: auto;
	background: transparent;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	color: var(--color-text-muted);
	font-size: 10px;
	padding: 0.1em 0.45em;
	cursor: pointer;

	&:hover {
		border-color: var(--color-border-light);
		color: var(--color-text-emphasis);
	}
`;

export const EmptyTreeMessage = styled.div`
	padding: 0.4em 0;
	color: var(--color-text-muted);
	font-size: 12px;
`;
