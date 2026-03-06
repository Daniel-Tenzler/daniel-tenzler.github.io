import React from 'react';
import type { PortfolioOverviewProps } from './PortfolioOverview.types';
import PortfolioGrid from '@/components/jsx/portfolio/PortfolioGrid/PortfolioGrid';
import { StyledMain, StyledHeading } from './PortfolioOverview.styles';

const PortfolioOverview = ({ items }: PortfolioOverviewProps) => {
	return (
		<StyledMain>
			<StyledHeading>My Portfolio</StyledHeading>
			<PortfolioGrid items={items} />
		</StyledMain>
	);
};

export default PortfolioOverview;
