import React from 'react';
import PropTypes from 'prop-types';
import BlogPostCard from 'src/components/jsx/blog/BlogPostCard/BlogPostCard';
import HeroImage from 'src/components/jsx/blog/HeroImage/HeroImage';
import {
	GridSection,
	PostWrapper,
	NoPostsMessage,
} from './BlogPostGrid.styles';

const BlogPostGrid = ({ posts, selectedTags }) => {
	const filteredPosts =
		selectedTags.length > 0
			? posts.filter((post) =>
					selectedTags.every((tag) => post.data.tags?.includes(tag))
				)
			: posts;

	if (filteredPosts.length === 0) {
		return (
			<NoPostsMessage>No posts found with the selected tags.</NoPostsMessage>
		);
	}

	return (
		<GridSection>
			{filteredPosts.map((post) => (
				<PostWrapper key={post.id}>
					{post.data.heroImage && (
						<HeroImage
							client:load
							src={post.data.heroImage}
							alt={post.data.title}
						/>
					)}
					<BlogPostCard
						client:load
						title={post.data.title}
						description={post.data.description}
						pubDate={post.data.pubDate}
						slug={post.id}
						readTime={post.data.readTime}
						tags={post.data.tags}
						noTopBorderRadius={true}
					/>
				</PostWrapper>
			))}
		</GridSection>
	);
};

BlogPostGrid.propTypes = {
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
	selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogPostGrid;
