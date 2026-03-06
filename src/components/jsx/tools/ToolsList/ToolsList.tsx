import React from 'react';
import type { Tool } from '@/data/tools/tools.types';
import type { ToolsListProps } from './ToolsList.types';
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

const ToolsList = ({ tools }: ToolsListProps) => {
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
