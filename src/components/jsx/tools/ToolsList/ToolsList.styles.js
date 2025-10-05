import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Container = styled.div`
	max-width: 56rem;
	min-height: 71dvh;
	margin: 2rem auto;

	@media (max-width: 640px) {
		padding: 0rem 1rem;
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${COLORS.WHITE_FFFFFF};
	margin-bottom: 0.5rem;
	text-align: center;
	margin: 0;
	@media (min-width: 640px) {
		font-size: 3rem;
	}
`;

export const Description = styled.p`
	font-size: 1.125rem;
	color: ${COLORS.GRAY_E5E9F0};
	text-align: center;
	margin-bottom: 3rem;
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
`;

export const CategorySection = styled.div`
	margin-bottom: 2rem;
`;

export const CategoryTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${COLORS.WHITE_FFFFFF};
	margin-bottom: 1rem;
	border-bottom: 2px solid ${getRgbaColor(COLORS.GRAY_383838)};
	padding-bottom: 0.5rem;
`;

export const ToolsGrid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const ToolCard = styled.a`
	display: block;
	background-color: ${getRgbaColor(COLORS.GRAY_2D2D2D)};
	border: 1px solid ${getRgbaColor(COLORS.GRAY_383838)};
	border-radius: 0.75rem;
	padding: 1.5rem;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background-color: ${getRgbaColor(COLORS.GRAY_303030)};
		border-color: ${getRgbaColor(COLORS.WHITE_BFBFBF, 0.2)};
		transform: translateY(-1px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.GRAY_60739F};
		outline-offset: 2px;
	}
`;

export const ToolIcon = styled.div`
	max-width: 2rem;
	max-height: 2rem;
	margin-bottom: 0%.5;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.WHITE_FFFFFF};

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		color: ${COLORS.WHITE_FFFFFF};
	}
`;

export const ToolTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: ${COLORS.WHITE_FFFFFF};
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
`;

export const ToolDescription = styled.p`
	font-size: 0.875rem;
	color: ${COLORS.GRAY_E5E9F0};
	line-height: 1.5;
`;
