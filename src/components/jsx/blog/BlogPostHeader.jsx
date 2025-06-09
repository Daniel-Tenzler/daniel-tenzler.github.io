import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const HeaderContainer = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${COLORS.gray};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: ${COLORS.black};
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${getRgbaColor(COLORS.grayLight)};
  color: ${COLORS.black};
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const UpdateInfo = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray};
  font-style: italic;
`;

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function BlogPostHeader({ 
  title, 
  pubDate, 
  updatedDate, 
  readTime, 
  author, 
  tags 
}) {
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

BlogPostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  pubDate: PropTypes.instanceOf(Date).isRequired,
  updatedDate: PropTypes.instanceOf(Date),
  readTime: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}; 