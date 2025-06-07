import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Paragraph = styled.p`
  color: rgb(var(--gray));
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function AboutSection({ paragraphs }) {
  return (
    <Section>
      <Title>About Me</Title>
      <Content>
        {paragraphs.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </Content>
    </Section>
  );
}

AboutSection.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
}; 