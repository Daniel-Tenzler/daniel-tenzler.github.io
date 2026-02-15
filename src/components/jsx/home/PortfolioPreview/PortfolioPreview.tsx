import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import {
	Section,
	Title,
	Grid,
	ProjectCard,
	ImageContainer,
	ProjectImage,
	Content,
	ProjectTitle,
	Description,
	TechStack,
	TechTag,
	Links,
	Link,
} from './PortfolioPreview.styles';

export interface ProjectImage {
	jpeg: {
		src: string;
		srcset: string;
	};
	webp: {
		src: string;
		srcset: string;
	};
	sizes: string;
}

export interface ProjectData {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	responsiveImage: ProjectImage;
	githubUrl?: string;
	liveUrl?: string;
}

export interface PortfolioPreviewContentProps {
	projects: ProjectData[];
}

const PortfolioPreviewContent = ({
	projects,
}: PortfolioPreviewContentProps) => {
	const { isMobile } = useIsMobile();

	const handleCardClick = (id: string) => {
		window.location.href = `/portfolio/${id}`;
	};

	return (
		<Section>
			<Title>Featured Projects</Title>
			<Grid>
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						$animationDelay={`${index * 0.1}s`}
						onClick={() => handleCardClick(project.id)}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleCardClick(project.id);
							}
						}}
						tabIndex={0}
						role="link"
						aria-label={`View ${project.title} project details`}
					>
						<ImageContainer>
							<picture>
								<source
									srcSet={project.responsiveImage.webp.srcset}
									sizes={project.responsiveImage.sizes}
									type="image/webp"
								/>
								<source
									srcSet={project.responsiveImage.jpeg.srcset}
									sizes={project.responsiveImage.sizes}
									type="image/jpeg"
								/>
								<ProjectImage
									src={project.responsiveImage.jpeg.src}
									srcSet={project.responsiveImage.jpeg.srcset}
									sizes={project.responsiveImage.sizes}
									alt={project.title}
									loading={index === 0 ? 'eager' : 'lazy'}
									fetchPriority={
										index === 0
											? 'high'
											: !isMobile && index < 3
												? 'high'
												: 'auto'
									}
								/>
							</picture>
						</ImageContainer>
						<Content>
							<ProjectTitle>{project.title}</ProjectTitle>
							<Description>{project.description}</Description>
							<TechStack>
								{project.technologies.map((tech) => (
									<TechTag key={tech}>{tech}</TechTag>
								))}
							</TechStack>
							<Links>
								{project.githubUrl && (
									<Link
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										aria-label={`${project.title} GitHub repository (opens in new tab)`}
									>
										GitHub ↗
									</Link>
								)}
								{project.liveUrl && (
									<Link
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										aria-label={`${project.title} live demo (opens in new tab)`}
									>
										Live Demo ↗
									</Link>
								)}
							</Links>
						</Content>
					</ProjectCard>
				))}
			</Grid>
		</Section>
	);
};

export default PortfolioPreviewContent;
