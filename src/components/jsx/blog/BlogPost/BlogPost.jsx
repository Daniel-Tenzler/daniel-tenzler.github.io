import React from 'react';
import PropTypes from 'prop-types';
import BlogPostHeader from 'src/components/jsx/blog/BlogPostHeader/BlogPostHeader';
import {
	Article,
	HeroImageContainer,
	HeroImage,
	ContentContainer,
} from './BlogPost.styles';

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

			<ContentContainer>{children}</ContentContainer>
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
