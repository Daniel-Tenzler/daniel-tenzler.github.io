import React from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from './ContentContainer.styles';

const ContentContainer = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};

ContentContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentContainer;