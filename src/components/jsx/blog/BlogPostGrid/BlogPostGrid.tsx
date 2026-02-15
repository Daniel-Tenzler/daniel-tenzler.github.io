import React from 'react';
import BlogPostCard from '@/components/jsx/blog/BlogPostCard/BlogPostCard';
import HeroImage from '@/components/jsx/blog/HeroImage/HeroImage';
import {
	GridSection,
	PostWrapper,
	NoPostsMessage,
} from './BlogPostGrid.styles';

export interface BlogPostGridData {
	id: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		heroImage?: string;
		readTime?: string;
		tags?: string[];
	};
}

export interface BlogPostGridProps {
	posts: BlogPostGridData[];
	selectedTags: string[];
}

const BlogPostGrid = ({
	posts,
	selectedTags,
}: BlogPostGridProps) => {
	const filteredPosts =
		selectedTags.length > 0
			? posts.filter((post) =>
					selectedTags.every((tag) => post.data.tags?.includes(tag))
				)
			: posts;

	if (filteredPosts.length === 0) {
		return (
			<NoPostsMessage>
				No posts found with the selected tags.
			</NoPostsMessage>
		);
	}

	return (
		<GridSection>
			{filteredPosts.map((post) => (
				<PostWrapper key={post.id}>
					{post.data.heroImage && (
						<HeroImage
							client:visible
							src={post.data.heroImage}
							alt={post.data.title}
						/>
					)}
					<BlogPostCard
						client:visible
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

export default BlogPostGrid;
