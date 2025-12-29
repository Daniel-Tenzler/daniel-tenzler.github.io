import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	Content,
	Title,
	Description,
	Meta,
	Tags,
	Tag,
} from './BlogPostCard.styles';

const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

export default function BlogPostCard({
	title,
	description,
	pubDate,
	slug,
	readTime,
	tags,
	noTopBorderRadius,
}) {
	return (
		<Card href={`/blog/${slug}/`} $noTopBorderRadius={noTopBorderRadius}>
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

BlogPostCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	pubDate: PropTypes.instanceOf(Date).isRequired,
	slug: PropTypes.string.isRequired,
	readTime: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	noTopBorderRadius: PropTypes.bool,
};

BlogPostCard.defaultProps = {
	noTopBorderRadius: false,
};
