import React, { useState, useEffect } from 'react';
import BlogHeader from '@/components/jsx/blog/BlogHeader/BlogHeader';
import BlogPostGrid from '@/components/jsx/blog/BlogPostGrid/BlogPostGrid';
import { Container } from './BlogContainer.styles';

export interface BlogPostData {
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

export interface BlogContainerProps {
	posts: BlogPostData[];
	allTags: string[];
}

const BlogContainer = ({
	posts,
	allTags,
}: BlogContainerProps) => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	useEffect(() => {
		// Get tags from URL on initial load
		if (typeof window !== 'undefined') {
			const searchParams = new URLSearchParams(window.location.search);
			const tagsFromUrl = searchParams.get('tags');
			if (tagsFromUrl) {
				setSelectedTags(tagsFromUrl.split(','));
			}
		}
	}, []);

	const handleTagSelect = (newTags: string[]) => {
		setSelectedTags(newTags);

		// Update URL with selected tags
		if (typeof window !== 'undefined') {
			const url = new URL(window.location.href);
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
				feedUrl="/rss.xml"
			/>
			<BlogPostGrid posts={posts} selectedTags={selectedTags} />
		</Container>
	);
};

export default BlogContainer;
