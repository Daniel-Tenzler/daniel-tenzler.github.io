import styled from '@emotion/styled';

export const Section = styled.section`
	padding: var(--section-gap) 0;
	width: 100%;

	@media (max-width: 720px) {
		padding: 40px 0;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--grid-gap);
	width: 100%;
	align-items: stretch;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

interface ProjectCardProps {
	$animationDelay?: string;
}

export const ProjectCard = styled.div<ProjectCardProps>`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	overflow: hidden;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	box-shadow: var(--card-shadow);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;
	animation: fadeIn 0.6s ease-out backwards;
	animation-delay: ${(props) => props.$animationDelay || '0s'};

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	&:hover {
		border-color: var(--card-hover-border);
		box-shadow: var(--card-hover-shadow);
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 150px;
	flex-shrink: 0;
	overflow: hidden;
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: var(--card-padding);
`;

export const ContentBody = styled.div`
	flex: 1;
`;

export const ProjectTitle = styled.h3`
	margin: 0 0 8px;
	font-size: 18px;
	font-weight: 600;
	line-height: 1.3;
	color: var(--color-text-emphasis);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const Description = styled.p`
	margin: 0 0 16px;
	font-size: 14px;
	line-height: 1.5;
	color: var(--white-ffffff-b3);
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-bottom: 16px;
`;

export const TechTag = styled.span`
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
`;

export const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	margin-top: auto;
	padding-top: 4px;
`;

export const ExternalLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	min-height: 36px;
	font-size: 13px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-secondary);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;
