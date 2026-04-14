import styled from '@emotion/styled';

export const MobileMenuButton = styled.button`
	position: relative;
	overflow: hidden;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	color: var(--color-text-emphasis);
	background-color: var(--gray-474747);
	transition: background-color 0.2s ease;
	cursor: pointer;
	border: 2px solid transparent;

	&:hover {
		color: var(--color-text-primary);
		background-color: var(--gray-303030);
	}

	&[aria-expanded='true'] {
		color: var(--color-accent-brand);
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
		transition:
			transform 0.3s ease-in-out,
			opacity 0.3s ease-in-out,
			border-color 0.3s ease-in-out;
		transform: scale(0.8);
		opacity: 0;
	}

	&[aria-expanded='true']::before {
		transform: scale(1);
		opacity: 1;
		border-color: var(--gray-383838);
	}

	-webkit-tap-highlight-color: transparent;
`;

interface MenuIconProps {
	$isMenuOpen?: boolean;
}

export const MenuIcon = styled.svg<MenuIconProps>`
	height: 24px;
	width: 24px;
	transition:
		transform 0.3s ease-in-out,
		opacity 0.3s ease-in-out;
	color: var(--color-text-emphasis);
`;

interface MenuIconBarProps {
	$isMenuOpen?: boolean;
}

export const MenuIconTopBar = styled.path<MenuIconBarProps>`
	transform-origin: center;
	transform: ${(props) =>
		props.$isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'};
	transition: transform 0.3s ease-in-out;
`;

export const MenuIconMiddleBar = styled.path<MenuIconBarProps>`
	transform-origin: center;
	opacity: ${(props) => (props.$isMenuOpen ? 0 : 1)};
	transition: opacity 0.3s ease-in-out;
`;

export const MenuIconBottomBar = styled.path<MenuIconBarProps>`
	transform-origin: center;
	transform: ${(props) =>
		props.$isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'};
	transition: transform 0.3s ease-in-out;
`;

interface MobileMenuProps {
	$isOpen?: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: var(--gray-303030-cc);
	backdrop-filter: blur(8px);
	z-index: 9999;
	border-bottom: 1px solid var(--gray-404040-cc);
	padding: 16px;
	box-shadow: 0 4px 6px -1px var(--black-0f1219-1a);
	color: var(--color-text-emphasis);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-height: ${(props) => (props.$isOpen ? '400px' : '0')};
	opacity: ${(props) => (props.$isOpen ? 1 : 0)};
	visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
	pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
	padding-top: ${(props) => (props.$isOpen ? '16px' : '0')};
	padding-bottom: ${(props) => (props.$isOpen ? '16px' : '0')};
	transition:
		visibility 0s ${(props) => (props.$isOpen ? '0s' : '0.25s')},
		max-height 0.25s ease-out,
		opacity 0.2s ease-out,
		padding-top 0.25s ease-out,
		padding-bottom 0.25s ease-out;

	@media (min-width: 640px) {
		display: none;
	}
`;

export const MobileNavLink = styled.a`
	display: inline-flex;
	align-items: center;
	color: var(--color-text-emphasis);
	padding: 10px 24px;
	border-radius: 999px;
	background-color: var(--color-bg-tertiary);
	font-size: 18px;
	font-weight: 500;
	text-decoration: none;
	box-shadow: 2px 2px 4px var(--gray-292929);
	transition:
		color 0.2s ease,
		background-color 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	/* Minimum touch target size (48px height) for accessibility */
	min-height: 48px;

	&:hover {
		color: var(--color-text-primary);
		background-color: var(--gray-222939);
	}
`;
