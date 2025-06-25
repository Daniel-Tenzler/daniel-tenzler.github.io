import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Article,
	Header,
	Title,
	TechList,
	TechTag,
	LinkContainer,
	StyledLink,
	ProjectImage,
	Description,
} from './Project.styles';

const Project = ({ item }) => {
	return (
		<Container>
			<Article>
				<Header>
					<Title>{item.title}</Title>
					<TechList>
						{item.technologies.map((tech) => (
							<TechTag key={tech}>{tech}</TechTag>
						))}
					</TechList>
					<LinkContainer>
						{item.githubUrl && (
							<StyledLink
								href={item.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								View on GitHub
							</StyledLink>
						)}
					</LinkContainer>
				</Header>

				{item.image && <ProjectImage src={item.image} alt={item.title} />}

				<Description>
					<p>{item.description}</p>
				</Description>
			</Article>
		</Container>
	);
};

Project.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
		githubUrl: PropTypes.string,
		liveUrl: PropTypes.string,
		image: PropTypes.string,
		description: PropTypes.string.isRequired,
	}).isRequired,
};

export default Project;
