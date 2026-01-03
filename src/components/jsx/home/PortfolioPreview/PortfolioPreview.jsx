import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const PortfolioPreview = ({ projects }) => {
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsLargeScreen(window.innerWidth >= 1000);
		}
	}, []);

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
									loading="lazy"
									{...(isLargeScreen
										? { fetchPriority: 'high' }
										: {})}
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
									>
										GitHub - {project.title}
									</Link>
								)}
								{project.liveUrl && (
									<Link
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
									>
										Live Demo - {project.title}
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

PortfolioPreview.propTypes = {
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

export default PortfolioPreview;
