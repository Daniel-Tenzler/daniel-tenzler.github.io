import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	margin-bottom: 2rem;
	color: ${COLORS.GRAY_E5E9F0};
`;

export const SkillsContainer = styled.div`
	background-color: ${COLORS.GRAY_292929};
	border-radius: 0.5rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.BLACK_0F1219, 0.05)};
	overflow: hidden;
	padding: 1.5rem 0;
`;

export const SkillsTrack = styled.div`
	display: inline-block;
	white-space: nowrap;
	padding-top: ${({ reverse }) => (reverse ? '15px' : '0')};
	will-change: transform;
	cursor: grab;
	touch-action: pan-y;
`;

export const SkillBubble = styled.span`
	display: inline-block;
	padding: 0.5rem 1rem;
	margin: 0 0.5rem;
	background-color: ${getRgbaColor(COLORS.BLACK_0F1219, 0.3)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.WHITE_FFFFFF};
	font-weight: 500;
`;
