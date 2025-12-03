import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const TOCContainer = styled.nav`
	align-self: start;
	max-height: calc(100vh - 8rem);
	overflow-y: auto;
	padding: 1.5rem 1.5rem 1.5rem 0.5rem;
	background-color: ${getRgbaColor(COLORS.GRAY_303030, 0.8)};
	backdrop-filter: blur(10px);
	border: 1px solid ${getRgbaColor(COLORS.GRAY_60739F, 0.2)};
	border-radius: 1rem;
	box-shadow: 0 4px 6px ${getRgbaColor(COLORS.BLACK_0F1219, 0.1)};
`;

export const TOCList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const TOCItem = styled.li`
	margin-bottom: 0.5rem;
	padding-left: ${(props) => (props.depth - 1) * 1}rem;
`;

export const TOCLink = styled.a`
	display: block;
	font-size: 0.875rem;
	color: ${(props) =>
		props.isActive
			? COLORS.WHITE_FFFFFF
			: getRgbaColor(COLORS.WHITE_BFBFBF, 0.7)};
	text-decoration: none;
	transition: color 0.2s ease;
	line-height: 1.4;

	&:hover {
		color: ${COLORS.WHITE_BFBFBF};
	}
`;
