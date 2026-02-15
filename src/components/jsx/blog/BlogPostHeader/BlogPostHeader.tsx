import React from 'react';
import {
	HeaderContainer,
	MetaContainer,
	Title,
	TagsContainer,
	Tag,
	UpdateInfo,
} from './BlogPostHeader.styles';
import { formatDate } from '@/infrastructure/dateUtils';

export interface BlogPostHeaderProps {
	title: string;
	pubDate: Date;
	updatedDate?: Date;
	readTime?: string;
	author?: string;
	tags?: string[];
}

export default function BlogPostHeader({
	title,
	pubDate,
	updatedDate,
	readTime,
	author,
	tags,
}: BlogPostHeaderProps) {
	return (
		<HeaderContainer>
			<MetaContainer>
				<time dateTime={pubDate.toISOString()}>
					{formatDate(pubDate)}
				</time>
				{readTime && <span>• {readTime}</span>}
				{author && <span>• By {author}</span>}
			</MetaContainer>

			<Title>{title}</Title>

			{tags && tags.length > 0 && (
				<TagsContainer>
					{tags.map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</TagsContainer>
			)}

			{updatedDate && (
				<UpdateInfo>
					Last updated on {formatDate(updatedDate)}
				</UpdateInfo>
			)}
		</HeaderContainer>
	);
}
