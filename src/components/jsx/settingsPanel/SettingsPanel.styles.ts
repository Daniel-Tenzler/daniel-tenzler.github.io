import styled from '@emotion/styled';

const PANEL_WIDTH = 300;
const VISIBLE_PERCENT = 0.15;

interface StyledPanelProps {
	isHovered: boolean;
}

export const StyledPanel = styled.div<StyledPanelProps>`
	position: fixed;
	top: 120px;
	left: 0;
	width: ${PANEL_WIDTH}px;
	height: 120px;
	background: var(--color-border-light);
	color: var(--color-text-emphasis);
	box-shadow: 2px 4px 12px #00000026;
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
