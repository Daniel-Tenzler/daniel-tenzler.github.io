import styled from '@emotion/styled';

interface StyledHeaderProps {
	id?: string;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: var(--surface-header-bg);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid var(--surface-header-border);
`;

export const Nav = styled.nav`
	max-width: var(--content-max-width);
	margin: 0 auto;
	padding: 0 var(--content-padding-x);

	@media (max-width: 640px) {
		padding: 0 20px;
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
	font-size: 18px;
	font-weight: 700;
	color: var(--color-text-emphasis);
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	gap: 6px;

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}

	-webkit-tap-highlight-color: transparent;
`;

export const LogoDot = styled.span`
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: var(--color-accent-brand);
	box-shadow: 0 0 8px var(--blue-2337ff-66);
`;

export const NavLinks = styled.div`
	display: none;
	margin-left: 24px;
	gap: 28px;

	@media (min-width: 640px) {
		display: flex;
	}
`;

interface NavLinkProps {
	$isActive?: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
	position: relative;
	color: ${(props) =>
		props.$isActive
			? 'var(--color-text-emphasis)'
			: 'var(--color-text-muted)'};
	padding: 8px 0;
	border-radius: 6px;
	font-size: 15px;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 48px;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 6px;
		height: 2px;
		border-radius: 2px;
		background: var(--color-accent-brand);
		opacity: ${(props) => (props.$isActive ? 1 : 0)};
		transition: opacity 0.2s ease;
	}

	&:hover {
		color: var(--color-text-emphasis);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;

export const MobileLeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	flex-shrink: 0;

	@media (min-width: 640px) {
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
