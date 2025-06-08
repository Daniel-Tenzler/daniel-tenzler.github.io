import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StatsContainer = styled.div`
  display: flex;
  gap: 4rem;
  padding: 1.5rem;
  background-color: rgba(160, 160, 160, 0.45);
  border-radius: 8px;
  margin: 1rem 0;
  justify-content: space-between;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text-primary);
`;

const StatLabel = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

export default function GitHubStats({ metadata, commitCount }) {
  return (
    <>
      <Headline>Repository Statistics</Headline>
      <StatsContainer>
        {metadata.stars > 0 && <StatItem>
          <StatValue>{metadata.stars}</StatValue>
          <StatLabel>Stars</StatLabel>
        </StatItem>}
        {metadata.forks > 0 &&<StatItem>
          <StatValue>{metadata.forks}</StatValue>
          <StatLabel>Forks</StatLabel>
        </StatItem>}
        {commitCount > 0 && <StatItem>
          <StatValue>{commitCount}</StatValue>
          <StatLabel>Commits</StatLabel>
        </StatItem>}
        <StatItem>
          <StatValue>{new Date(metadata.lastUpdated).toLocaleDateString()}</StatValue>
          <StatLabel>Last Updated</StatLabel>
        </StatItem>
      </StatsContainer>
    </>
  );
}

GitHubStats.propTypes = {
  metadata: PropTypes.shape({
    stars: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired
  }).isRequired,
  commitCount: PropTypes.number.isRequired
}; 