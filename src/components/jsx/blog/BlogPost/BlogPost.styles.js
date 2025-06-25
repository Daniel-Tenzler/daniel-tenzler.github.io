import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Article = styled.article`
	max-width: 4xl;
	margin: 0 auto;
`;

export const HeroImageContainer = styled.div`
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
`;

export const HeroImage = styled.img`
	width: 100%;
	max-width: 4xl;
	height: 400px;
	object-fit: cover;
	border-radius: 0.5rem;
	box-shadow:
		0 4px 6px ${getRgbaColor(COLORS.black, 0.1)},
		0 2px 4px ${getRgbaColor(COLORS.black, 0.06)};
`;
