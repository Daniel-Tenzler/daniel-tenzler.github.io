import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const JourneyDetailsContainer = styled.div`
	height: calc(100vh - 350px);
	padding: 2rem;
`;

export const Title = styled.h1`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 700;
	margin-bottom: 0.5rem;

	@media (min-width: 768px) {
		font-size: 3rem;
		line-height: 1;
	}
`;

export const Date = styled.p`
	font-size: 1.125rem;
	line-height: 1.75rem;
	color: ${COLORS.offWhite};
	margin-bottom: 1.5rem;
`;

export const Details = styled.div`
	p {
		font-size: 1.125rem;
		line-height: 1.77;
	}
`;

export const BackButton = styled.a`
	display: inline-block;
	margin-top: 2rem;
	padding: 0.75rem 1.5rem;
	background-color: ${COLORS.accentDark};
	color: white;
	text-decoration: none;
	border-radius: 8px;
	font-weight: 600;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${COLORS.accent};
	}
`;
