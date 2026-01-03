import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: ${getRgbaColor(COLORS.GRAY_303030, 0.8)};
	backdrop-filter: blur(4px);
	border-bottom: 1px solid ${getRgbaColor(COLORS.GRAY_383838)};
`;

export const Nav = styled.nav`
	max-width: 56rem;
	margin: 0 auto;
	padding: 0 1rem;

	@media (min-width: 640px) {
		padding: 0 1.5rem;
	}

	@media (min-width: 1024px) {
		padding: 0 2rem;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 4rem;
	align-items: center;
`;

export const Logo = styled.a`
	flex-shrink: 0;
	font-size: 1.25rem;
	font-weight: 700;
	color: ${COLORS.WHITE_FFFFFF};
	text-decoration: none;

	&:focus {
		outline: 2px solid ${COLORS.BLUE_2337FF};
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.BLUE_2337FF};
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	-webkit-tap-highlight-color: transparent;
`;

export const NavLinks = styled.div`
	display: none;
	margin-left: 1.5rem;
	gap: 2rem;

	@media (min-width: 640px) {
		display: flex;
	}
`;

export const NavLink = styled.a`
	color: ${COLORS.GRAY_E5E9F0};
	padding: 0.5rem 0.75rem;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.GRAY_60739F};
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.BLUE_2337FF};
		outline-offset: 2px;
	}
`;
