import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section `
	margin-bottom: 3rem;
`;

export const Title = styled.h2 `
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

export const SkillsGrid = styled.div `
	background-color: ${COLORS.cardSurfaceBackground};
	padding: 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.black, 0.05)};
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const SkillCategory = styled.div ``;

export const CategoryTitle = styled.h3 `
	font-size: 1.125rem;
	font-weight: 600;
	color: ${COLORS.offWhite};
	margin-bottom: 1rem;
	border-bottom: 1px solid ${getRgbaColor(COLORS.white, 0.1)};
	padding-bottom: 0.5rem;
`;

export const BubblesContainer = styled.div `
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;

	@media (max-width: 600px) {
		gap: 0.5rem;
	}
`;

export const SkillBubble = styled.span `
	padding: 0.5rem 1rem;
	background-color: ${getRgbaColor(COLORS.black, 0.3)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.white};
	font-weight: 500;
	transition:
		transform 0.2s ease-in-out,
		background-color 0.2s ease-in-out;

	&:hover {
		transform: translateY(-2px);
		background-color: ${getRgbaColor(COLORS.black, 0.5)};
	}
`;