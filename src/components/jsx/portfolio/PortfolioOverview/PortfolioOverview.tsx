import React from 'react';
import type { PortfolioItem } from 'src/data/portfolio/portfolio.types';
import PortfolioGrid from '@/components/jsx/portfolio/PortfolioGrid/PortfolioGrid';
import { StyledMain, StyledHeading } from './PortfolioOverview.styles';

export interface PortfolioOverviewProps {
	items: PortfolioItem[];
}

const PortfolioOverview = ({
	items,
}: PortfolioOverviewProps) => {
	return (
		<StyledMain>
			<StyledHeading>My Portfolio</StyledHeading>
			<PortfolioGrid items={items} />
		</StyledMain>
	);
};

export default PortfolioOverview;
