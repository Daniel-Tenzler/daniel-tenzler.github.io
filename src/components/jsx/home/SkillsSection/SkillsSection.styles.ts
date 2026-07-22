import styled from '@emotion/styled';
import type {
	CategoryTitleProps,
	SkillBubbleProps,
} from './SkillsSection.types';

export const Section = styled.section`
	padding: var(--section-gap) 0;

	@media (max-width: 720px) {
		padding: 40px 0;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--grid-gap);
	align-items: start;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const CategoryCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	padding: var(--card-padding);
	box-shadow: var(--card-shadow);
`;

export const CategoryTitle = styled.h3<CategoryTitleProps>`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0;
	font-size: 15px;
	font-weight: 700;
	color: var(--color-text-emphasis);

	&::before {
		content: '';
		width: 4px;
		height: 16px;
		border-radius: 2px;
		background-color: ${({ $color }) => `var(${$color})`};
		box-shadow: 0 0 8px
			${({ $color }) => `color-mix(in srgb, var(${$color}) 50%, transparent)`};
	}
`;

export const SkillsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

export const SkillBubble = styled.span<SkillBubbleProps>`
	display: inline-flex;
	align-items: center;
	height: var(--chip-height);
	padding: 0 10px;
	border-radius: var(--chip-radius);
	font-size: 0.75rem;
	font-weight: 500;
	color: var(--color-text-muted);
	background: var(--chip-bg);
	border: 1px solid var(--chip-border);
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
	cursor: default;

	&:hover {
		background-color: ${({ $color }) =>
			`color-mix(in srgb, var(${$color}) 12%, transparent)`};
		border-color: ${({ $color }) =>
			`color-mix(in srgb, var(${$color}) 40%, transparent)`};
	}
`;
