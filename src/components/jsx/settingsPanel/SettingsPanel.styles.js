import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

const PANEL_WIDTH = 300;
const VISIBLE_PERCENT = 0.15;

export const StyledPanel = styled.div`
	position: fixed;
	top: 120px;
	left: 0;
	width: ${PANEL_WIDTH}px;
	height: 120px;
	background: ${COLORS.GRAY_303030};
	color: ${COLORS.GRAY_303030};
	box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.15);
	border-radius: 0 8px 8px 0;
	z-index: 10000;
	transform: translateX(
		${(props) =>
			props.isHovered
				? '0'
				: `-${(1 - VISIBLE_PERCENT) * (PANEL_WIDTH + 40)}px`}
	);
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	display: flex;
	align-items: center;
	padding: 8px;
	cursor: pointer;

	outline: none;
	-webkit-tap-highlight-color: transparent;

	&:focus {
		outline: none;
	}

	/* Responsive: shrink on small screens */
	@media (max-width: 500px) {
		top: 90px;
		transform: translateX(
			${(props) =>
				props.isHovered
					? '0'
					: `-${(1 - VISIBLE_PERCENT) * (PANEL_WIDTH + 50)}px`}
		);
	}
`;
