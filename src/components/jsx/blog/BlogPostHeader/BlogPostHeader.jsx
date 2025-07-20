import React from 'react';
import PropTypes from 'prop-types';
import {
	HeaderContainer,
	MetaContainer,
	Title,
	TagsContainer,
	Tag,
	UpdateInfo,
} from './BlogPostHeader.styles';
import { formatDate } from 'src/infrastructure/dateUtils';

export default function BlogPostHeader({
	title,
	pubDate,
	updatedDate,
	readTime,
	author,
	tags,
}) {
	return (
		<HeaderContainer>
			<MetaContainer>
				<time dateTime={pubDate.toISOString()}>{formatDate(pubDate)}</time>
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
				<UpdateInfo>Last updated on {formatDate(updatedDate)}</UpdateInfo>
			)}
		</HeaderContainer>
	);
}

BlogPostHeader.propTypes = {
	title: PropTypes.string.isRequired,
	pubDate: PropTypes.instanceOf(Date).isRequired,
	updatedDate: PropTypes.instanceOf(Date),
	readTime: PropTypes.string,
	author: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
};
