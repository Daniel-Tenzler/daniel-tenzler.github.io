import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

export const Content = styled.div`
	background-color: ${COLORS.cardSurfaceBackground};
	padding: 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.black, 0.05)};
`;

export const Paragraph = styled.p`
	color: ${COLORS.white};
	margin-bottom: 1rem;
	font-size: 16px;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;
