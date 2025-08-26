import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	padding: 0rem 1rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Card = styled.article`
	background: ${COLORS.GRAY_292929};
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px ${getRgbaColor(COLORS.GRAY_292929, 0.1)};
	overflow: hidden;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 12rem;
	object-fit: cover;
`;

export const CardContent = styled.div`
	padding: 1.5rem;
	height: 18rem;
`;

export const CardTitle = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: ${COLORS.WHITE_FFFFFF};

	a:hover & {
		color: ${COLORS.WHITE_BFBFBF};
	}
`;

export const CardDescription = styled.p`
	color: ${COLORS.GRAY_E5E9F0};
	margin-bottom: 1rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const TechContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export const TechTag = styled.span`
	padding: 0.25rem 0.75rem;
	background-color: ${getRgbaColor(COLORS.BLACK_0F1219, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.WHITE_BFBFBF};
`;

export const StyledLinkArea = styled.a`
	text-decoration: none;
`;
