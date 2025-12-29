import React from 'react';
import PropTypes from 'prop-types';
import TagFilter from 'src/components/jsx/blog/TagFilter/TagFilter';
import { HeaderSection, Title, Description } from './BlogHeader.styles';

const BlogHeader = ({ allTags, selectedTags, onTagSelect }) => {
	return (
		<HeaderSection>
			<Title>Blog</Title>
			<Description>
				Thoughts, tutorials, and insights about web development,
				software engineering, and technology.
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
