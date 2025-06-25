import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	padding: 1rem 0;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
`;

export const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	width: 100%;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const ProjectCard = styled.div`
	background-color: ${getRgbaColor(COLORS.cardSurfaceBackground, 0.9)};
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 4px 6px ${getRgbaColor(COLORS.cardSurfaceBackground, 0.1)};
	transition: all 0.3s ease;
	transform: translateY(20px);
	animation: fadeInUp 0.5s ease forwards;
	cursor: pointer;

	&:hover {
		box-shadow: 0 10px 15px ${getRgbaColor(COLORS.cardSurfaceBackground, 0.2)};
		transform: translateY(-5px);
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 12rem;
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: ${COLORS.offWhite};
`;

export const Description = styled.p`
	color: ${COLORS.grayLight};
	margin-bottom: 1rem;
`;

export const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

export const TechTag = styled.span`
	padding: 0.25rem 0.75rem;
	background-color: ${getRgbaColor(COLORS.black, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;

export const Links = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Link = styled.a`
	color: ${COLORS.white};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.grayLight};
	}
`;
