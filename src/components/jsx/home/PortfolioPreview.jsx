import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const Section = styled.section`
	padding: 1rem 0;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
`;

const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

const Grid = styled.div`
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

const ProjectCard = styled.div`
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

const ImageContainer = styled.div`
	position: relative;
	height: 12rem;
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Content = styled.div`
	padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: ${COLORS.offWhite};
`;

const Description = styled.p`
	color: ${COLORS.grayLight};
	margin-bottom: 1rem;
`;

const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const TechTag = styled.span`
	padding: 0.25rem 0.75rem;
	background-color: ${getRgbaColor(COLORS.black, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;

const Links = styled.div`
	display: flex;
	gap: 1rem;
`;

const Link = styled.a`
	color: ${COLORS.white};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.grayLight};
	}
`;

const PortfolioPreview = ({ projects }) => {
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
							<ProjectImage src={project.image} alt={project.title} />
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
										GitHub
									</Link>
								)}
								{project.liveUrl && (
									<Link
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
									>
										Live Demo
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
