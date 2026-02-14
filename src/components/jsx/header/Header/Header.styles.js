import styled from '@emotion/styled';

export const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: var(--gray-303030-cc);
	backdrop-filter: blur(4px);
	border-bottom: 1px solid var(--gray-383838-cc);
`;

export const Nav = styled.nav`
	max-width: 896px;
	margin: 0 auto;
	padding: 0 16px;

	@media (min-width: 640px) {
		padding: 0 24px;
	}

	@media (min-width: 1024px) {
		padding: 0 32px;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 64px;
	align-items: center;
`;

export const Logo = styled.a`
	flex-shrink: 0;
	font-size: 20px;
	font-weight: 700;
	color: var(--color-text-emphasis);
	text-decoration: none;

	&:focus {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
		border-radius: 4px;
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
		border-radius: 4px;
	}

	-webkit-tap-highlight-color: transparent;
`;

export const NavLinks = styled.div`
	display: none;
	margin-left: 24px;
	gap: 32px;

	@media (min-width: 640px) {
		display: flex;
	}
`;

export const NavLink = styled.a`
	color: var(--color-text-primary);
	padding: 12px;
	border-radius: 6px;
	font-size: 16px;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;
	/* Minimum touch target size (48x48px) for accessibility */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 48px;

	&:hover {
		color: var(--color-text-secondary);
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}
`;

export const MobileLeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	flex-shrink: 0;

	@media (min-width: 640px) {
		/* Hide the mobile DarkModeToggle on desktop */
		& > button:last-child {
			display: none;
		}
	}
`;

export const DesktopDarkModeWrapper = styled.div`
	display: none;

	@media (min-width: 640px) {
		display: flex;
		align-items: center;
	}
`;
