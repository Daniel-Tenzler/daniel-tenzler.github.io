import React from 'react';
import BlogPostHeader from '@/components/jsx/blog/BlogPostHeader/BlogPostHeader';
import {
	Article,
	HeroImageContainer,
	HeroImage,
	ContentContainer as StyledContentContainer,
} from './BlogPost.styles';

export interface BlogPostProps {
	title: string;
	pubDate: Date;
	updatedDate?: Date;
	heroImage?: string;
	readTime?: string;
	tags?: string[];
	author?: string;
	children: React.ReactNode;
}

export default function BlogPost({
	title,
	pubDate,
	updatedDate,
	heroImage,
	readTime,
	tags,
	author,
	children,
}: BlogPostProps) {
	return (
		<Article>
			{heroImage && (
				<HeroImageContainer>
					<HeroImage
						src={heroImage}
						alt={title}
						width={1020}
						height={510}
					/>
				</HeroImageContainer>
			)}

			<BlogPostHeader
				title={title}
				pubDate={pubDate}
				updatedDate={updatedDate}
				readTime={readTime}
				author={author}
				tags={tags}
			/>

			<StyledContentContainer>{children}</StyledContentContainer>
		</Article>
	);
}
