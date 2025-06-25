import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const HeaderSection = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
	color: ${COLORS.grayLight};
`;

export const Description = styled.p`
	font-size: 1.25rem;
	color: ${COLORS.offWhite};
	margin-bottom: 2rem;
`;
