import React from 'react';
import PropTypes from 'prop-types';
import TagFilter from 'src/components/jsx/blog/TagFilter/TagFilter';
import RssSubscription from 'src/components/jsx/blog/RssSubscription/RssSubscription';
import {
	HeaderSection,
	Title,
	Description,
	HeaderContent,
} from './BlogHeader.styles';

const BlogHeader = ({ allTags, selectedTags, onTagSelect, feedUrl }) => {
	return (
		<HeaderSection>
			<HeaderContent>
				<div>
					<Title>Blog</Title>
					<Description>
						Thoughts, tutorials, and insights about web development,
						software engineering, and technology.
					</Description>
				</div>
				<RssSubscription feedUrl={feedUrl} />
			</HeaderContent>
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
	feedUrl: PropTypes.string.isRequired,
};

export default BlogHeader;
