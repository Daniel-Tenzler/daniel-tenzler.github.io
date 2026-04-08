import styled from '@emotion/styled';
import type { TagButtonProps } from './TagFilter.types';

export const FilterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 32px;
`;

export const TagButton = styled.button<TagButtonProps>`
	padding: 8px 16px;
	border: 1px solid var(--black-0f1219);
	border-radius: 999px;
	background: ${(props) =>
		props.active
			? 'var(--color-accent-brand-dark)'
			: 'var(--black-0f1219)'};
	color: var(--color-text-emphasis);
	font-size: 14px;
	cursor: pointer;
	transition:
		background 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		background: ${(props) =>
			props.active
				? 'var(--color-accent-brand-dark)'
				: 'var(--color-border-light)'};
		border-color: ${(props) =>
			props.active
				? 'var(--color-accent-brand-dark)'
				: 'var(--color-border-light)'};
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;
