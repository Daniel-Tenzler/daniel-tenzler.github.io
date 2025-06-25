import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const StatsContainer = styled.div`
	display: flex;
	gap: 4rem;
	padding: 1.5rem;
	background-color: ${getRgbaColor(COLORS.cardSurfaceBackground)};
	border-radius: 8px;
	margin: 1rem 0;
	justify-content: space-between;
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
	color: ${COLORS.white};
`;

export const StatLabel = styled.span`
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;

export const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: ${COLORS.grayLight};
`;

export const Description = styled.p`
	color: ${COLORS.offWhite};
	margin: 1rem 0;
	font-size: 1rem;
	line-height: 1.5;
`;
