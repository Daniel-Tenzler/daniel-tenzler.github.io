import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	margin-bottom: 2rem;
	color: ${COLORS.GRAY_E5E9F0};
`;

export const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	background-color: ${COLORS.GRAY_292929};
	border-radius: 1rem;
	padding: 1.5rem;
	box-shadow: 0 4px 6px ${getRgbaColor(COLORS.BLACK_0F1219, 0.1)};

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
	padding: 1rem 0;

	&:first-of-type {
		padding-top: 0;
	}
`;

export const CategoryTitle = styled.h3`
	font-size: 1rem;
	font-weight: 600;
	margin: 0 0 1rem 0;
	color: ${({ $color }) => $color};
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&::before {
		content: '';
		width: 3px;
		height: 1rem;
		background-color: ${({ $color }) => $color};
		border-radius: 2px;
	}
`;

export const SkillsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export const SkillBubble = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0.4rem 0.875rem;
	background-color: ${({ $color }) => getRgbaColor($color, 0.1)};
	border: 1.5px solid ${({ $color }) => getRgbaColor($color, 0.3)};
	border-radius: 9999px;
	font-size: 0.8125rem;
	color: ${COLORS.WHITE_FFFFFF};
	font-weight: 500;
	transition: all 0.2s ease;
	cursor: default;

	&:hover {
		background-color: ${({ $color }) => getRgbaColor($color, 0.2)};
		border-color: ${({ $color }) => $color};
		transform: scale(1.05);
		box-shadow: 0 0 12px ${({ $color }) => getRgbaColor($color, 0.4)};
	}
`;
