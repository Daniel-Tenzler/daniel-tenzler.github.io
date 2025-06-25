import React from 'react';
import PropTypes from 'prop-types';
import PortfolioGrid from 'src/components/jsx/portfolio/PortfolioGrid/PortfolioGrid';
import { StyledMain, StyledHeading } from './PortfolioOverview.styles';

const PortfolioOverview = ({ items }) => {
	return (
		<StyledMain>
			<StyledHeading>My Portfolio</StyledHeading>
			<PortfolioGrid items={items} />
		</StyledMain>
	);
};

PortfolioOverview.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			tags: PropTypes.arrayOf(PropTypes.string).isRequired,
		})
	).isRequired,
};

export default PortfolioOverview;
