import React from 'react';
import { Grid } from './PortfolioGrid.styles';
import Project from '../Project/Project';
import type { PortfolioItem } from 'src/data/portfolio/portfolio.types';

export interface PortfolioGridProps {
	items: PortfolioItem[];
}

const PortfolioGrid = ({
	items,
}: PortfolioGridProps) => {
	return (
		<Grid>
			{items.map((item, index) => (
				<Project
					key={item.id || index}
					item={{
						title: item.title,
						technologies: item.technologies || [],
						githubUrl: item.githubUrl,
						liveUrl: item.liveUrl || item.githubUrl,
						image: item.image,
						description: item.description,
					}}
				/>
			))}
		</Grid>
	);
};

export default PortfolioGrid;
