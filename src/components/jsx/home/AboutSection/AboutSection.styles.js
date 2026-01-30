import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	color: ${COLORS.GRAY_E5E9F0};
`;

export const Content = styled.div`
	background-color: ${COLORS.GRAY_292929};
	padding: 1.5rem;
	border-radius: 1rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.BLACK_0F1219, 0.05)};
`;

export const Paragraph = styled.p`
	color: ${COLORS.WHITE_FFFFFF};
	margin-bottom: 1rem;
	font-size: 16px;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;
