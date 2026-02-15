import React from 'react';
import TagFilter from '@/components/jsx/blog/TagFilter/TagFilter';
import RssSubscription from '@/components/jsx/blog/RssSubscription/RssSubscription';
import {
	HeaderSection,
	Title,
	Description,
	HeaderContent,
} from './BlogHeader.styles';

export interface BlogHeaderProps {
	allTags: string[];
	selectedTags: string[];
	onTagSelect: (tags: string[]) => void;
	feedUrl: string;
}

const BlogHeader = ({
	allTags,
	selectedTags,
	onTagSelect,
	feedUrl,
}: BlogHeaderProps) => {
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

export default BlogHeader;
