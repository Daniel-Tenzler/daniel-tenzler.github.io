import React from 'react';
import PropTypes from 'prop-types';
import BlogPostCard from 'src/components/jsx/blog/BlogPostCard/BlogPostCard';
import {
	Section,
	Title,
	PostsGrid,
	ViewAllLink,
	Link,
} from './LatestPostsSection.styles';

export default function LatestPostsSection({ posts }) {
	return (
		<Section>
			<Title>Latest Posts</Title>
			<PostsGrid>
				{posts.map((post) => (
					<BlogPostCard
						key={post.slug}
						client:visible
						title={post.title}
						description={post.description}
						pubDate={post.pubDate}
						heroImage={post.heroImage}
						slug={post.slug}
						readTime={post.readTime}
						tags={post.tags}
					/>
				))}
			</PostsGrid>
			<ViewAllLink>
				<Link href="/blog">View all posts →</Link>
			</ViewAllLink>
		</Section>
	);
}

LatestPostsSection.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			pubDate: PropTypes.instanceOf(Date).isRequired,
			heroImage: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
			readTime: PropTypes.number.isRequired,
			tags: PropTypes.arrayOf(PropTypes.string).isRequired,
		})
	).isRequired,
};
