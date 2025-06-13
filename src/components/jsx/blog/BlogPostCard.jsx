import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const Card = styled.a`
	display: block;
	background: ${COLORS.white};
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 1px 3px ${getRgbaColor(COLORS.black, 0.1)};
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;

	&:hover {
		box-shadow: 0 4px 6px ${getRgbaColor(COLORS.black, 0.1)};
		transform: translateY(-2px);
	}
`;

const Content = styled.div`
	padding: 1.5rem;
`;

const Title = styled.h3`
	margin: 0 0 0.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	color: ${COLORS.black};
	transition: color 0.2s ease;

	${Card}:hover & {
		color: ${COLORS.accent};
	}
`;

const Description = styled.p`
	margin: 0 0 1rem;
	font-size: 0.875rem;
	color: ${COLORS.gray};
`;

const Meta = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 0.875rem;
	color: ${COLORS.gray};
`;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: 0.75rem;
`;

const Tag = styled.span`
	padding: 0.25rem 0.75rem;
	background: ${getRgbaColor(COLORS.grayLight)};
	color: ${COLORS.black};
	border-radius: 9999px;
	font-size: 0.75rem;
`;

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
}) {
	return (
		<Card href={`/blog/${slug}/`}>
			<Content>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Meta>
					<time dateTime={pubDate.toISOString()}>{formatDate(pubDate)}</time>
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
};
