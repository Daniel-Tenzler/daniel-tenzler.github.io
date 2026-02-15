import React from 'react';
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

export interface ProjectItem {
	title: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	image?: string;
	description: string;
}

export interface ProjectProps {
	item: ProjectItem;
}

const Project = ({
	item,
}: ProjectProps) => {
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
						{item.liveUrl && (
							<StyledLink
								href={item.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								Live Demo
							</StyledLink>
						)}
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

				{item.image && (
					<ProjectImage
						src={item.image}
						alt={item.title}
						fetchPriority="high"
					/>
				)}

				<Description>
					<p>{item.description}</p>
				</Description>
				<LinkContainer>
					{item.liveUrl && (
						<StyledLink
							href={item.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Live Demo
						</StyledLink>
					)}
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
			</Article>
		</Container>
	);
};

export default Project;
