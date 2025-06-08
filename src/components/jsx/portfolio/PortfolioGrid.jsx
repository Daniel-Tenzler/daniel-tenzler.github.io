import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  a:hover & {
    color: var(--accent);
  }
`;

const CardDescription = styled.p`
  color: #4B5563;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: #F3F4F6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #374151;
`;

export default function PortfolioGrid({ items }) {
  return (
    <Grid>
      {items.map((item) => (
        <a key={item.id} href={`/portfolio/${item.id}`}>
          <Card>
            {item.image && (
              <CardImage
                src={item.image}
                alt={item.title}
              />
            )}
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <TechContainer>
                {item.technologies.slice(0, 3).map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
                {item.technologies.length > 3 && (
                  <TechTag>+{item.technologies.length - 3} more</TechTag>
                )}
              </TechContainer>
            </CardContent>
          </Card>
        </a>
      ))}
    </Grid>
  );
}

PortfolioGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      githubUrl: PropTypes.string,
      liveUrl: PropTypes.string
    })
  ).isRequired
}; 