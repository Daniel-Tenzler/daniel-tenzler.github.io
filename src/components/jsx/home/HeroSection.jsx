import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: rgb(var(--gray));
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  color: white;
  background-color: var(--accent);
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--accent-dark);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgb(var(--gray-light));
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  color: rgb(var(--gray-dark));
  background-color: white;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(var(--gray-light));
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent);
  }
`;

export default function HeroSection({ title, description }) {
  return (
    <Section>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonContainer>
        <PrimaryButton href="/blog">
          Read My Blog
        </PrimaryButton>
        <SecondaryButton href="/contact">
          Get in Touch
        </SecondaryButton>
      </ButtonContainer>
    </Section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}; 