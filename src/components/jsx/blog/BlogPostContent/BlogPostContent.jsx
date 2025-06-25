import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer } from './BlogPostContent.styles';

export default function BlogPostContent({ children }) {
	return <ContentContainer>{children}</ContentContainer>;
}

BlogPostContent.propTypes = {
	children: PropTypes.node.isRequired,
};
