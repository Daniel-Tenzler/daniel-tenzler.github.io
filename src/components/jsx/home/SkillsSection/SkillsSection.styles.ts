import styled from '@emotion/styled';

export const Section = styled.section`
	margin-bottom: 48px;
`;

export const Title = styled.h2`
	margin-bottom: 32px;
	color: var(--color-text-primary);
`;

export const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
	background-color: var(--color-bg-tertiary);
	border-radius: 16px;
	padding: 24px;
	box-shadow: 0 4px 6px var(--black-0f1219-1a);

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0;
	}
`;

export const SkillsColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CategorySection = styled.div`
	padding: 16px 0;

	&:first-of-type {
		padding-top: 0;
	}
`;

interface CategoryTitleProps {
	$color: string;
}

export const CategoryTitle = styled.h3<CategoryTitleProps>`
	font-size: 16px;
	font-weight: 600;
	margin: 0 0 16px 0;
	color: ${({ $color }) => `var(${$color})`};
	display: flex;
	align-items: center;
	gap: 8px;

	&::before {
		content: '';
		width: 3px;
		height: 16px;
		background-color: ${({ $color }) => `var(${$color})`};
		border-radius: 2px;
	}
`;

export const SkillsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

interface SkillBubbleProps {
	$color?: string;
}

export const SkillBubble = styled.span<SkillBubbleProps>`
	display: inline-flex;
	align-items: center;
	padding: 6px 14px;
	background-color: ${({ $color }) =>
		`color-mix(in srgb, var(${$color}) 10%, transparent)`};
	border: 1.5px solid
		${({ $color }) => `color-mix(in srgb, var(${$color}) 30%, transparent)`};
	border-radius: 9999px;
	font-size: 13px;
	color: var(--color-text-emphasis);
	font-weight: 500;
	transition: all 0.2s ease;
	cursor: default;

	&:hover {
		background-color: ${({ $color }) =>
			`color-mix(in srgb, var(${$color}) 20%, transparent)`};
		border-color: ${({ $color }) => `var(${$color})`};
		transform: scale(1.05);
		box-shadow: 0 0 12px
			${({ $color }) =>
				`color-mix(in srgb, var(${$color}) 40%, transparent)`};
	}
`;
