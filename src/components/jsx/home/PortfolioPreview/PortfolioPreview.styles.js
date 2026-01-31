import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 1rem 0;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
`;

export const Title = styled.h2`
	margin-bottom: 2rem;
	color: var(--color-text-primary);
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
	background-color: var(--gray-292929-e6);
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 4px 6px var(--gray-292929-1a);
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		box-shadow: 0 10px 15px var(--gray-292929-33);
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
	color: var(--color-text-muted);
`;

export const Description = styled.p`
	color: var(--color-text-primary);
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
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 0.875rem;
	color: var(--color-text-muted);
`;

export const Links = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Link = styled.a`
	color: var(--color-text-emphasis);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-primary);
	}
`;
