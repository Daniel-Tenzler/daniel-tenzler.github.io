import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import PortfolioGrid from './PortfolioGrid';

const StyledMain = styled.main`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;
`;

const StyledHeading = styled.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 2rem;
`;

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
