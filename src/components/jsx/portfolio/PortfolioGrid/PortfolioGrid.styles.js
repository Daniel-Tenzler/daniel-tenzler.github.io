import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Card = styled.article`
	background: ${COLORS.cardSurfaceBackground};
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px ${getRgbaColor(COLORS.cardSurfaceBackground, 0.1)};
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
`;

export const CardTitle = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: ${COLORS.white};

	a:hover & {
		color: ${COLORS.offWhite};
	}
`;

export const CardDescription = styled.p`
	color: ${COLORS.grayLight};
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
	background-color: ${getRgbaColor(COLORS.black, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;
