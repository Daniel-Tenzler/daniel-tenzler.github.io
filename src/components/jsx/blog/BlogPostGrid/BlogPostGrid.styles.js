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
	gap: 0.5rem;
`;

export const NoPostsMessage = styled.p`
	text-align: center;
	color: ${COLORS.white};
	font-size: 1.125rem;
	margin: 2rem 0;
`;
