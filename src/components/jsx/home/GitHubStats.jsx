import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const StatsContainer = styled.div`
	display: flex;
	gap: 4rem;
	padding: 1.5rem;
	background-color: ${getRgbaColor(COLORS.grayLight, 0.45)};
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
	color: ${COLORS.black};
`;

const StatLabel = styled.span`
	font-size: 0.875rem;
	color: ${COLORS.gray};
`;

const Headline = styled.h2`
	font-size: 1.5rem;
	color: ${COLORS.black};
	margin-bottom: 1rem;
	text-align: center;
`;

const Description = styled.p`
	color: ${COLORS.gray};
	text-align: center;
	margin: 1rem 0;
	font-size: 1rem;
	line-height: 1.5;
`;

const RepositoryInfo = styled.div`
	background-color: ${getRgbaColor(COLORS.grayLight, 0.25)};
	border-radius: 8px;
	padding: 1rem;
	margin: 1rem 0;
`;

export default function GitHubStats({ metadata, commitCount }) {
	return (
		<>
			<Headline>Repository Statistics</Headline>
			<Description>{metadata.description}</Description>
			<RepositoryInfo>
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
			</RepositoryInfo>
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
