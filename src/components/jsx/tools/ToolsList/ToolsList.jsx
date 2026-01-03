import React from 'react';
import PropTypes from 'prop-types';
import {
	CategorySection,
	CategoryTitle,
	Container,
	Description,
	Title,
	ToolCard,
	ToolDescription,
	ToolIcon,
	ToolsGrid,
	ToolTitle,
} from './ToolsList.styles';

const ToolsList = ({ tools }) => {
	const toolsByCategory = tools.reduce((categories, tool) => {
		if (!categories[tool.category]) {
			categories[tool.category] = [];
		}
		categories[tool.category].push(tool);
		return categories;
	}, {});

	return (
		<Container>
			<Title>Tools</Title>
			<Description>
				A collection of useful web development and utility tools to help
				with your projects.
			</Description>

			{Object.entries(toolsByCategory).map(
				([category, categoryTools]) => (
					<CategorySection key={category}>
						<CategoryTitle>{category}</CategoryTitle>
						<ToolsGrid>
							{categoryTools.map((tool) => (
								<ToolCard key={tool.id} href={tool.path}>
									<ToolIcon>
										<img
											src={tool.icon}
											alt={`${tool.title} icon`}
											loading="lazy"
											decoding="async"
											width="48"
											height="48"
										/>
									</ToolIcon>
									<ToolTitle>{tool.title}</ToolTitle>
									<ToolDescription>
										{tool.description}
									</ToolDescription>
								</ToolCard>
							))}
						</ToolsGrid>
					</CategorySection>
				)
			)}
		</Container>
	);
};

ToolsList.propTypes = {
	tools: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default ToolsList;
