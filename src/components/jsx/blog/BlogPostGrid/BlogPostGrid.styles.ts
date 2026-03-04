import styled from '@emotion/styled';

export const GridSection = styled.section`
	display: grid;
	gap: 32px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0;
	transition:
		box-shadow 0.2s,
		transform 0.2s;
	&:hover {
		box-shadow: 0 4px 16px #0000001f;
		transform: scale(1.03);
	}
`;

export const NoPostsMessage = styled.p`
	text-align: center;
	color: var(--color-text-emphasis);
	font-size: 18px;
	margin: 32px 0;
`;
