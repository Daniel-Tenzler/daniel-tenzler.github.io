import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS, getRgbaColor } from '../../../consts/Colors';
import BlogPostHeader from './BlogPostHeader';
import BlogPostContent from './BlogPostContent';

const Article = styled.article`
	max-width: 4xl;
	margin: 0 auto;
`;

const HeroImageContainer = styled.div`
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
`;

const HeroImage = styled.img`
	width: 100%;
	max-width: 4xl;
	height: 400px;
	object-fit: cover;
	border-radius: 0.5rem;
	box-shadow:
		0 4px 6px ${getRgbaColor(COLORS.black, 0.1)},
		0 2px 4px ${getRgbaColor(COLORS.black, 0.06)};
`;

export default function BlogPost({
	title,
	pubDate,
	updatedDate,
	heroImage,
	readTime,
	tags,
	author,
	children,
}) {
	return (
		<Article>
			{heroImage && (
				<HeroImageContainer>
					<HeroImage src={heroImage} alt={title} width={1020} height={510} />
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

			<BlogPostContent>{children}</BlogPostContent>
		</Article>
	);
}

BlogPost.propTypes = {
	title: PropTypes.string.isRequired,
	pubDate: PropTypes.instanceOf(Date).isRequired,
	updatedDate: PropTypes.instanceOf(Date),
	heroImage: PropTypes.string,
	readTime: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	author: PropTypes.string,
	children: PropTypes.node.isRequired,
};
