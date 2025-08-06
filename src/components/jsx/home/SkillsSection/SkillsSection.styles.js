import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollReverse = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

export const SkillsContainer = styled.div`
	background-color: ${COLORS.cardSurfaceBackground};
	border-radius: 0.5rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.black, 0.05)};
	overflow: hidden;
	padding: 1.5rem 0;
`;

export const SkillsTrack = styled.div`
	display: inline-block;
	white-space: nowrap;
	animation: ${({ reverse }) => (reverse ? scrollReverse : scroll)} 60s linear
		infinite;
	padding-top: ${({ reverse }) => (reverse ? '15px' : '0')};
`;

export const SkillBubble = styled.span`
	display: inline-block;
	padding: 0.5rem 1rem;
	margin: 0 0.5rem;
	background-color: ${getRgbaColor(COLORS.black, 0.3)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.white};
	font-weight: 500;
`;
