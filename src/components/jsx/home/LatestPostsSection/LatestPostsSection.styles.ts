import styled from '@emotion/styled';

export const Section = styled.section`
	margin-bottom: 48px;
`;

export const Title = styled.h2`
	margin-bottom: 32px;
	color: var(--color-text-primary);
`;

export const PostsGrid = styled.div`
	display: grid;
	gap: 32px;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ViewAllLink = styled.a`
	display: block;
	margin-top: 16px;
	text-align: center;
	color: var(--color-text-emphasis);
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;
	text-underline-offset: 2px;

	&:hover {
		color: var(--color-text-primary);
		text-decoration: underline;
	}

	&:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}
`;
