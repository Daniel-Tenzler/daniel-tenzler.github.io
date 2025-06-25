import React from 'react';
import PropTypes from 'prop-types';
import {
	StatsContainer,
	StatItem,
	StatValue,
	StatLabel,
	Title,
	Description,
} from './GitHubStats.styles';

export default function GitHubStats({ metadata, commitCount }) {
	return (
		<>
			<Title>Repository Statistics</Title>
			<Description>{metadata.description}</Description>
				<StatsContainer>
					{metadata.stars > 0 && (
						<StatItem>
							<StatValue>{metadata.stars}</StatValue>
							<StatLabel>Stars</StatLabel>
						</StatItem>
					)}
					{metadata.forks > 0 && (
						<StatItem>
							<StatValue>{metadata.forks}</StatValue>
							<StatLabel>Forks</StatLabel>
						</StatItem>
					)}
					{commitCount > 0 && (
						<StatItem>
							<StatValue>{commitCount}</StatValue>
							<StatLabel>Commits</StatLabel>
						</StatItem>
					)}
					<StatItem>
						<StatValue>
							{new Date(metadata.lastUpdated).toLocaleDateString()}
						</StatValue>
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
		lastUpdated: PropTypes.string.isRequired,
	}).isRequired,
	commitCount: PropTypes.number.isRequired,
};
