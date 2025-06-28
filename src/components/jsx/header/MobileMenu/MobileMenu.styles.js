import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const MobileMenuButton = styled.button`
	position: relative;
	overflow: hidden;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	color: ${COLORS.white};
	background-color: ${COLORS.outerSurfaceBackground};
	transition: all 0.2s ease;
	cursor: pointer;
	border: 2px solid transparent;

	&:hover {
		color: ${COLORS.grayLight};
		background-color: ${getRgbaColor(COLORS.semiSurfacePrimary)};
	}

	&[aria-expanded='true'] {
		color: ${COLORS.accent};
	}

	@media (min-width: 640px) {
		display: none;
	}

	&::before {
		content: '';
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		border-radius: 50%;
		border: 2px solid transparent;
		transition: all 0.3s ease-in-out;
		transform: scale(0.8);
		opacity: 0;
	}

	&[aria-expanded='true']::before {
		transform: scale(1);
		opacity: 1;
		border-color: ${COLORS.surfaceBlend1};
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
	transition:
		transform 0.3s ease-in-out,
		opacity 0.3s ease-in-out;
	color: ${COLORS.white};

	& .top-bar {
		transform-origin: center;
		transition: transform 0.3s ease-in-out;
	}

	& .middle-bar {
		transform-origin: center;
		transition: opacity 0.3s ease-in-out;
	}

	& .bottom-bar {
		transform-origin: center;
		transition: transform 0.3s ease-in-out;
	}
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
	color: ${COLORS.white};

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

export const SrOnly = styled.span`
	position: absolute !important;
	width: 1px !important;
	height: 1px !important;
	padding: 0 !important;
	margin: -1px !important;
	overflow: hidden !important;
	clip: rect(0, 0, 0, 0) !important;
	white-space: nowrap !important;
	border: 0 !important;
`;
