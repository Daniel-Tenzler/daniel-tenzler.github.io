import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS } from '../../../consts/Colors';
import BlogPostCard from '../blog/BlogPostCard';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${COLORS.black};
`;

const PostsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ViewAllLink = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

const Link = styled.a`
  color: ${COLORS.accent};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${COLORS.accentDark};
  }
`;

export default function LatestPostsSection({ posts }) {
  return (
    <Section>
      <Title>Latest Posts</Title>
      <PostsGrid>
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            client:load
            title={post.title}
            description={post.description}
            pubDate={post.pubDate}
            heroImage={post.heroImage}
            slug={post.slug}
            readTime={post.readTime}
            tags={post.tags}
          />
        ))}
      </PostsGrid>
      <ViewAllLink>
        <Link href="/blog">
          View all posts →
        </Link>
      </ViewAllLink>
    </Section>
  );
}

LatestPostsSection.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pubDate: PropTypes.instanceOf(Date).isRequired,
      heroImage: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      readTime: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}; 