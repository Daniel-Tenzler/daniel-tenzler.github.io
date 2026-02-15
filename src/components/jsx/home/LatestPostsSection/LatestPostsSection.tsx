import React from 'react';
import BlogPostCard from '@/components/jsx/blog/BlogPostCard/BlogPostCard';
import {
	Section,
	Title,
	PostsGrid,
	ViewAllLink,
	Link,
} from './LatestPostsSection.styles';

export interface LatestPostData {
	title: string;
	description: string;
	pubDate: Date;
	slug: string;
	readTime: string;
	tags: string[];
}

export interface LatestPostsSectionProps {
	posts: LatestPostData[];
}

export default function LatestPostsSection({
	posts,
}: LatestPostsSectionProps) {
	return (
		<Section>
			<Title>Latest Posts</Title>
			<PostsGrid>
				{posts.map((post) => (
					<BlogPostCard
						key={post.slug}
						title={post.title}
						description={post.description}
						pubDate={post.pubDate}
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
