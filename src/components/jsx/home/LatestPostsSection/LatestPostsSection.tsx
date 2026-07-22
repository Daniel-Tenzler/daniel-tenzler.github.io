import React from 'react';
import BlogPostCard from '@/components/jsx/blog/BlogPostCard/BlogPostCard';
import SectionHeader from '@/components/jsx/ui/SectionHeader/SectionHeader';
import { Section, PostsGrid } from './LatestPostsSection.styles';
import type { LatestPostsSectionProps } from './LatestPostsSection.types';

export type { LatestPostData } from './LatestPostsSection.types';

export default function LatestPostsSection({ posts }: LatestPostsSectionProps) {
	return (
		<Section>
			<SectionHeader
				title="My Thoughts"
				viewAllHref="/blog"
				viewAllLabel="View all posts"
			/>
			<PostsGrid>
				{posts.map((post) => (
					<BlogPostCard
						key={post.slug}
						data-cursor-glow
						title={post.title}
						description={post.description}
						pubDate={post.pubDate}
						slug={post.slug}
						readTime={post.readTime}
						tags={post.tags}
					/>
				))}
			</PostsGrid>
		</Section>
	);
}
