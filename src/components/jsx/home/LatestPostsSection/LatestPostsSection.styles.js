import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	margin-bottom: 2rem;
	color: ${COLORS.GRAY_E5E9F0};
`;

export const PostsGrid = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ViewAllLink = styled.div`
	margin-top: 1rem;
	text-align: center;
`;

export const Link = styled.a`
	color: ${COLORS.WHITE_FFFFFF};
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;
	text-underline-offset: 2px;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:hover {
		color: ${COLORS.GRAY_E5E9F0};
		text-decoration: underline;
	}

	&:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
		text-decoration: underline;
	}
`;
