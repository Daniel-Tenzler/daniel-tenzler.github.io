import styled from '@emotion/styled';

export const Section = styled.section`
	padding: var(--section-gap) 0;

	@media (max-width: 720px) {
		padding: 40px 0;
	}
`;

export const PostsGrid = styled.div`
	display: grid;
	gap: var(--grid-gap);
	grid-template-columns: 1fr;
	align-items: stretch;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
