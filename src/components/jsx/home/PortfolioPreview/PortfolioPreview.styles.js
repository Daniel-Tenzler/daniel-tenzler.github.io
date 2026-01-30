import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	padding: 1rem 0;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
`;

export const Title = styled.h2`
	margin-bottom: 2rem;
	color: ${COLORS.GRAY_E5E9F0};
	margin-top: 0.5rem;
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
	background-color: ${getRgbaColor(COLORS.GRAY_292929, 0.9)};
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 4px 6px ${getRgbaColor(COLORS.GRAY_292929, 0.1)};
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		box-shadow: 0 10px 15px ${getRgbaColor(COLORS.GRAY_292929, 0.2)};
		transform: scale(1.01);
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
	color: ${COLORS.WHITE_BFBFBF};
`;

export const Description = styled.p`
	color: ${COLORS.GRAY_E5E9F0};
	margin-bottom: 1rem;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

export const TechTag = styled.span`
	padding: 0.25rem 0.75rem;
	background-color: ${getRgbaColor(COLORS.BLACK_0F1219, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.WHITE_BFBFBF};
`;

export const Links = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Link = styled.a`
	color: ${COLORS.WHITE_FFFFFF};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.GRAY_E5E9F0};
	}
`;
