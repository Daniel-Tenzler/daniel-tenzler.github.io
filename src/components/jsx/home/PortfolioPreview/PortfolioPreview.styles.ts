import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 16px 0;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
`;

export const Title = styled.h2`
	margin-bottom: 32px;
	color: var(--color-text-primary);
	margin-top: 8px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
	width: 100%;

	@media (min-width: 768px) {
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
	background-color: var(--gray-292929-e6);
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 4px 6px var(--gray-292929-1a);
	transition: all 0.3s ease;
	cursor: pointer;
	animation: fadeInUp 0.6s ease-out backwards;
	animation-delay: ${(props) => props.$animationDelay || '0s'};

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

	&:hover {
		box-shadow: 0 10px 15px var(--gray-292929-33);
		transform: scale(1.01);
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 192px;
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	padding: 24px;
`;

export const ProjectTitle = styled.h3`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 8px;
	color: var(--color-text-muted);
`;

export const Description = styled.p`
	color: var(--color-text-primary);
	margin-bottom: 16px;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 16px;
`;

export const TechTag = styled.span`
	padding: 4px 12px;
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 14px;
	color: var(--color-text-muted);
`;

export const Links = styled.div`
	display: flex;
	gap: 16px;
`;

export const Link = styled.a`
	color: var(--color-text-emphasis);
	text-decoration: none;
	transition: color 0.2s ease;
	/* Minimum touch target size (48x48px) for accessibility */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 48px;
	min-width: 48px;
	padding: 12px;

	&:hover {
		color: var(--color-text-primary);
	}
`;
