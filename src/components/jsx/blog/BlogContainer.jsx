import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BlogHeader from './BlogHeader';
import BlogPostGrid from './BlogPostGrid';

const Container = styled.div`
	max-width: 56rem;
	margin-left: auto;
	margin-right: auto;
`;

const BlogContainer = ({ posts, allTags }) => {
	const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
		// Get tags from URL on initial load
		if (typeof window !== 'undefined') {
			const searchParams = new window.URLSearchParams(window.location.search);
			const tagsFromUrl = searchParams.get('tags');
			if (tagsFromUrl) {
				setSelectedTags(tagsFromUrl.split(','));
			}
		}
	}, []);

	const handleTagSelect = (newTags) => {
		setSelectedTags(newTags);

		// Update URL with selected tags
		if (typeof window !== 'undefined') {
			const url = new window.URL(window.location);
			if (newTags.length > 0) {
				url.searchParams.set('tags', newTags.join(','));
			} else {
				url.searchParams.delete('tags');
			}
			window.history.replaceState({}, '', url);
		}
	};

	return (
		<Container>
			<BlogHeader
				allTags={allTags}
				selectedTags={selectedTags}
				onTagSelect={handleTagSelect}
			/>
			<BlogPostGrid posts={posts} selectedTags={selectedTags} />
		</Container>
	);
};

BlogContainer.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			data: PropTypes.shape({
				title: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				pubDate: PropTypes.instanceOf(Date).isRequired,
				heroImage: PropTypes.string,
				readTime: PropTypes.number,
				tags: PropTypes.arrayOf(PropTypes.string),
			}).isRequired,
		})
	).isRequired,
	allTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogContainer;
