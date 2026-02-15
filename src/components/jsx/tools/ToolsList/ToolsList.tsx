import React from 'react';
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

export interface Tool {
	id: string;
	title: string;
	description: string;
	path: string;
	icon: string;
	category: string;
}

export interface ToolsListProps {
	tools: Tool[];
}

const ToolsList = ({
	tools,
}: ToolsListProps) => {
	const toolsByCategory = tools.reduce<Record<string, Tool[]>>(
		(categories, tool) => {
			if (!categories[tool.category]) {
				categories[tool.category] = [];
			}
			categories[tool.category].push(tool);
			return categories;
		},
		{}
	);

	return (
		<Container>
			<Title>Tools</Title>
			<Description>
				A collection of small & useful web development and utility tools
				to help with my projects.
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

export default ToolsList;
