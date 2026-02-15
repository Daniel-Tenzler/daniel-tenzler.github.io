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

export interface BlogPostCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	title: string;
	description: string;
	pubDate: Date;
	slug: string;
	readTime?: string;
	tags?: string[];
	noTopBorderRadius?: boolean;
	'client:load'?: boolean;
	'client:visible'?: boolean;
	'client:idle'?: boolean;
	'client:only'?: boolean;
}

// Extract standard HTML attributes from BlogPostCardProps
type StandardHTMLAttributes = Omit<
	BlogPostCardProps,
	'client:load' | 'client:visible' | 'client:idle' | 'client:only' | 'title' | 'description' | 'pubDate' | 'slug' | 'readTime' | 'tags' | 'noTopBorderRadius'
>;

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
		<Card href={`/blog/${slug}/`} $noTopBorderRadius={noTopBorderRadius} {...standardProps}>
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
