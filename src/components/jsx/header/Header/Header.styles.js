import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: ${getRgbaColor(COLORS.semiSurfacePrimary, 0.8)};
	backdrop-filter: blur(4px);
	border-bottom: 1px solid ${getRgbaColor(COLORS.surfaceBlend1)};
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
	color: ${COLORS.white};
	text-decoration: none;

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: none;
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
	color: ${COLORS.grayLight};
	padding: 0.5rem 0.75rem;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.gray};
	}
`;

export const MobileMenuButton = styled.button`
	position: relative;
	overflow: hidden;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	color: ${COLORS.white};
	background-color: ${COLORS.outerSurfaceBackground};
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		color: ${COLORS.grayLight};
		background-color: ${getRgbaColor(COLORS.semiSurfacePrimary)};
	}

	@media (min-width: 640px) {
		display: none;
	}

	&::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
		width: 200%;
		height: 200%;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
		opacity: 0;
		pointer-events: none;
		transition: transform 0.6s ease-out, opacity 1s ease;
	}

	&:active::after {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
		transition: 0s;
	}
	
	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: none;
	}

	-webkit-tap-highlight-color: transparent;
`;


export const MenuIcon = styled.svg`
	height: 1.5rem;
	width: 1.5rem;
`;

export const MobileMenu = styled.div`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: ${getRgbaColor(COLORS.semiSurfacePrimary, 0.8)};
	backdrop-filter: blur(4px);
	z-index: 9999;
	border-bottom: 1px solid ${getRgbaColor(COLORS.surfaceBlend2)};
	padding: 1rem;
	box-shadow: 0 4px 6px -1px ${getRgbaColor(COLORS.black, 0.1)};

	@media (min-width: 640px) {
		display: none;
	}
`;

export const MobileNavLink = styled.a`
	display: block;
	color: ${COLORS.white};
	padding: 0.75rem 1rem;
	border-radius: 0.375rem;
	font-size: 0.875rem;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		color: ${COLORS.grayLight};
		background-color: ${getRgbaColor(COLORS.grayDark)};
	}
`;