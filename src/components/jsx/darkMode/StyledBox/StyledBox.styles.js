import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Box = styled.div`
	padding: 1rem;
	border-radius: 8px;
	background-color: ${(props) =>
		props.dark
			? getRgbaColor(COLORS.grayDark)
			: getRgbaColor(COLORS.grayLight)};
	color: ${(props) =>
		props.dark ? COLORS.white : getRgbaColor(COLORS.grayDark)};
	transition: all 0.3s ease;
`;
