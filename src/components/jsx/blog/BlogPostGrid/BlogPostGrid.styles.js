import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const GridSection = styled.section`
	display: grid;
	gap: 2rem;

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
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		transform: translateY(-4px) scale(1.01);
	}
`;

export const NoPostsMessage = styled.p`
	text-align: center;
	color: ${COLORS.WHITE_FFFFFF};
	font-size: 1.125rem;
	margin: 2rem 0;
`;
