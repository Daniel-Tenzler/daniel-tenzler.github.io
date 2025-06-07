import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import BlogPostCard from './BlogPostCard';
import HeroImage from './HeroImage';

const GridSection = styled.section`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BlogPostGrid = ({ posts }) => {
  return (
    <GridSection>
      {posts.map((post) => (
        <PostWrapper key={post.id}>
          {post.data.heroImage && (
            <div>
              <HeroImage client:load src={post.data.heroImage} alt={post.data.title} />
            </div>
          )}
          <BlogPostCard 
            client:load
            title={post.data.title}
            description={post.data.description}
            pubDate={post.data.pubDate}
            slug={post.id}
            readTime={post.data.readTime}
            tags={post.data.tags}
          />
        </PostWrapper>
      ))}
    </GridSection>
  );
};

BlogPostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        pubDate: PropTypes.instanceOf(Date).isRequired,
        heroImage: PropTypes.string,
        readTime: PropTypes.number,
        tags: PropTypes.arrayOf(PropTypes.string)
      }).isRequired
    })
  ).isRequired
};

export default BlogPostGrid; 