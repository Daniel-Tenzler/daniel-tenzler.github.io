import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS } from '../../../consts/Colors';
import TagFilter from './TagFilter';

const HeaderSection = styled.section`
	margin-bottom: 3rem;
`;

const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
	color: ${COLORS.black};
`;

const Description = styled.p`
	font-size: 1.25rem;
	color: ${COLORS.gray};
	margin-bottom: 2rem;
`;

const BlogHeader = ({ allTags, selectedTags, onTagSelect }) => {
	return (
		<HeaderSection>
			<Title>Blog</Title>
			<Description>
				Thoughts, tutorials, and insights about web development, software
				engineering, and technology.
			</Description>
			<TagFilter
				allTags={allTags}
				selectedTags={selectedTags}
				onTagSelect={onTagSelect}
			/>
		</HeaderSection>
	);
};

BlogHeader.propTypes = {
	allTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	onTagSelect: PropTypes.func.isRequired,
};

export default BlogHeader;
