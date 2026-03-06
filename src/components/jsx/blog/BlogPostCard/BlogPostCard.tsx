import React from 'react';
import { formatDate } from '@/infrastructure/dateUtils';
import {
	Card,
	Content,
	Title,
	Description,
	Meta,
	Tags,
	Tag,
} from './BlogPostCard.styles';
import type {
	StandardHTMLAttributes,
} from './BlogPostCard.types';
import type { BlogPostCardProps } from './BlogPostCard.types';

export type { BlogPostCardProps };

export default function BlogPostCard({
	title,
	description,
	pubDate,
	slug,
	readTime,
	tags,
	noTopBorderRadius = false,
	...props
}: BlogPostCardProps) {
	const standardProps: StandardHTMLAttributes = props;
	return (
		<Card
			href={`/blog/${slug}/`}
			$noTopBorderRadius={noTopBorderRadius}
			{...standardProps}
		>
			<Content>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Meta>
					<time dateTime={pubDate.toISOString()}>
						{formatDate(pubDate)}
					</time>
					{readTime && <span>• {readTime}</span>}
				</Meta>
				{tags && tags.length > 0 && (
					<Tags>
						{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</Tags>
				)}
			</Content>
		</Card>
	);
}
