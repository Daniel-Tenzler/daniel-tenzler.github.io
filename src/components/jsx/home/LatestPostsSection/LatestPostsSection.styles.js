import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Section = styled.section `
	margin-bottom: 3rem;
`;

export const Title = styled.h2 `
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

export const PostsGrid = styled.div `
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ViewAllLink = styled.div `
	margin-top: 1rem;
	text-align: center;
`;

export const Link = styled.a `
	color: ${COLORS.white};
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.grayLight};
	}
`;