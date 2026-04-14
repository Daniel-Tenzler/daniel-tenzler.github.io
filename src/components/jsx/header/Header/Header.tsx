import React, { useState, useEffect } from 'react';
import {
	StyledHeader,
	Nav,
	NavContainer,
	Logo,
	NavLinks,
	NavLink,
	MobileLeftSection,
	DesktopDarkModeWrapper,
} from './Header.styles';
import MobileMenuComponent from '@/components/jsx/header/MobileMenu/MobileMenu';
import ScrollProgressBar from '@/components/jsx/ui/ScrollProgressBar/ScrollProgressBar';
import DarkModeToggle from '@/components/jsx/darkMode/DarkModeToggle/DarkModeToggle';
import type { HeaderProps } from './Header.types';

const NAV_ITEMS = [
	{ href: '/', label: 'Home' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/tools', label: 'Tools' },
	{ href: '/contact', label: 'Contact' },
] as const;

function useActivePath() {
	const [pathname, setPathname] = useState('');

	useEffect(() => {
		setPathname(window.location.pathname);
	}, []);

	return pathname;
}

export default function Header({ id }: HeaderProps) {
	const currentPath = useActivePath();

	const getIsActive = (href: string): boolean => {
		if (!currentPath) return false;
		if (href === '/') return currentPath === '/';
		return currentPath.startsWith(href);
	};

	return (
		<StyledHeader id={id}>
			<Nav aria-label="Main navigation">
				<NavContainer>
					<MobileLeftSection>
						<Logo href="/">Daniel Tenzler</Logo>
						<DarkModeToggle client:visible />
					</MobileLeftSection>
					<NavLinks>
						{NAV_ITEMS.map(({ href, label }) => (
							<NavLink
								key={href}
								href={href}
								$isActive={getIsActive(href)}
								aria-current={
									getIsActive(href) ? 'page' : undefined
								}
							>
								{label}
							</NavLink>
						))}
						<DesktopDarkModeWrapper>
							<DarkModeToggle client:visible />
						</DesktopDarkModeWrapper>
					</NavLinks>
					<MobileMenuComponent />
				</NavContainer>
			</Nav>
			<ScrollProgressBar client:visible />
		</StyledHeader>
	);
}
