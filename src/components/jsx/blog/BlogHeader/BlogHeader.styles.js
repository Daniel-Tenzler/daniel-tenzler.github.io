import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const HeaderSection = styled.section`
	margin-bottom: 3rem;
`;

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 2rem;
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
	color: ${COLORS.GRAY_E5E9F0};
	margin-top: 0.5rem;
`;

export const Description = styled.p`
	font-size: 1.25rem;
	color: ${COLORS.WHITE_BFBFBF};
	margin-bottom: 0;
`;
