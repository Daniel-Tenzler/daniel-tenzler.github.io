import React from 'react';
import PropTypes from 'prop-types';
import { useIsMobile } from 'src/hooks/useIsMobile';
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

const PortfolioPreviewContent = ({ projects }) => {
	const isMobile = useIsMobile();

	const handleCardClick = (id) => {
		window.location.href = `/portfolio/${id}`;
	};

	return (
		<Section>
			<Title>Featured Projects</Title>
			<Grid>
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						style={{ animationDelay: `${index * 0.1}s` }}
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
									srcSet={project.image.replace(
										/\.jpg$/i,
										'.webp'
									)}
									type="image/webp"
								/>
								<source
									srcSet={project.image}
									type="image/jpeg"
								/>
								<ProjectImage
									src={project.image}
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

PortfolioPreviewContent.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
			image: PropTypes.string.isRequired,
			githubUrl: PropTypes.string,
			liveUrl: PropTypes.string,
			featured: PropTypes.bool.isRequired,
			date: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default PortfolioPreviewContent;
