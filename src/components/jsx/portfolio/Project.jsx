import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Article = styled.article`
  max-width: 56rem;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const TechList = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  margin-bottom: 2rem;
`;

const Description = styled.div`
  & p {
    font-size: 1.125rem;
    line-height: 1.75;
  }
`;

const Project = ({ item }) => {
    return (
        <Container>
            <Article>
                <Header>
                    <Title>{item.title}</Title>
                    <TechList>
                        {item.technologies.map((tech) => (
                            <TechTag key={tech}>{tech}</TechTag>
                        ))}
                    </TechList>
                    <LinkContainer>
                        {item.githubUrl && (
                            <StyledLink
                                href={item.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </StyledLink>
                        )}
                        {item.liveUrl && (
                            <StyledLink
                                href={item.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </StyledLink>
                        )}
                    </LinkContainer>
                </Header>

                {item.image && (
                    <ProjectImage
                        src={item.image}
                        alt={item.title}
                    />
                )}

                <Description>
                    <p>{item.description}</p>
                </Description>
            </Article>
        </Container>
    );
};

Project.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        githubUrl: PropTypes.string,
        liveUrl: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Project; 