import styled from '@emotion/styled';

const HeaderSection = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #4B5563;
  margin-bottom: 2rem;
`;

const BlogHeader = () => {
  return (
    <HeaderSection>
      <Title>Blog</Title>
      <Description>
        Thoughts, tutorials, and insights about web development, software engineering, and technology.
      </Description>
    </HeaderSection>
  );
};

export default BlogHeader; 