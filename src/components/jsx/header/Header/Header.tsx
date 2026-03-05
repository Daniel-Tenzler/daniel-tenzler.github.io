import React from 'react';
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

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
	id?: string;
	[key: string]: unknown; // Allow Astro client directives
}

export default function Header({ id }: HeaderProps) {
	return (
		<StyledHeader id={id}>
			<Nav aria-label="Main navigation">
				<NavContainer>
					<MobileLeftSection>
						<Logo href="/">Daniel Tenzler</Logo>
						<DarkModeToggle client:visible />
					</MobileLeftSection>
					<NavLinks>
						<NavLink href="/">Home</NavLink>
						<NavLink href="/portfolio">Portfolio</NavLink>
						<NavLink href="/blog">Blog</NavLink>
						<NavLink href="/tools">Tools</NavLink>
						<NavLink href="/contact">Contact</NavLink>
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
