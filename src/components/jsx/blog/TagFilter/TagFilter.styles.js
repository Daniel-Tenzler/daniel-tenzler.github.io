import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const FilterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 2rem;
`;

export const TagButton = styled.button`
	padding: 0.5rem 1rem;
	border: 1px solid ${getRgbaColor(COLORS.BLACK_0F1219)};
	border-radius: 9999px;
	background: ${(props) =>
		props.active ? COLORS.BLUE_000D8A : COLORS.BLACK_0F1219};
	color: ${(props) =>
		props.active ? COLORS.WHITE_FFFFFF : COLORS.WHITE_FFFFFF};
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${(props) =>
			props.active ? COLORS.BLUE_000D8A : getRgbaColor(COLORS.GRAY_303030)};
		border-color: ${(props) =>
			props.active ? COLORS.BLUE_000D8A : getRgbaColor(COLORS.GRAY_303030)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.BLACK_0F1219, 0.2)};
	}
`;
