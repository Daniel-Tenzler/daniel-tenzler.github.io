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
	border: 1px solid ${getRgbaColor(COLORS.black)};
	border-radius: 9999px;
	background: ${(props) => (props.active ? COLORS.accentDark : COLORS.black)};
	color: ${(props) => (props.active ? COLORS.white : COLORS.white)};
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${(props) =>
			props.active
				? COLORS.accentDark
				: getRgbaColor(COLORS.semiSurfacePrimary)};
		border-color: ${(props) =>
			props.active
				? COLORS.accentDark
				: getRgbaColor(COLORS.semiSurfacePrimary)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.black, 0.2)};
	}
`;
