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
	color: var(--color-text-emphasis);
	text-decoration: none;

	&:focus {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
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
	color: var(--color-text-primary);
	padding: 0.5rem 0.75rem;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

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
	gap: 0.75rem;
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
