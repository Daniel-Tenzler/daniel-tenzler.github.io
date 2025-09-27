import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const StatsContainer = styled.div`
	display: flex;
	gap: 3rem;
	padding: 1.5rem;
	background-color: ${getRgbaColor(COLORS.GRAY_292929)};
	border-radius: 8px;
	margin: 1.5rem auto;
	justify-content: space-between;
	width: fit-content;
	min-width: 500px;

	@media (max-width: 920px) {
		min-width: 0;
	}
`;

export const StatItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;

export const StatValue = styled.span`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${COLORS.WHITE_FFFFFF};
`;

export const StatLabel = styled.span`
	font-size: 0.875rem;
	color: ${COLORS.WHITE_BFBFBF};
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	color: ${COLORS.GRAY_E5E9F0};
	justify-self: center;
`;

export const Description = styled.p`
	color: ${COLORS.WHITE_BFBFBF};
	margin: 0rem 0 1rem 0;
	font-size: 1rem;
	line-height: 1.5;
	justify-self: center;
`;

export const LanguageList = styled('ul')`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	list-style: none;
	padding: 0;
	margin: 0 auto;
`;

export const LanguageListItem = styled('li')``;

export const LanguageStatsSection = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem auto;
	min-width: 800px;
	align-items: center;

	@media (max-width: 920px) {
		min-width: 0;
	}
`;
