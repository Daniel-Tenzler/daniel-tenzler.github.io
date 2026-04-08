import React, { useState } from 'react';
import {
	MobileMenuButton,
	MenuIcon,
	MenuIconTopBar,
	MenuIconMiddleBar,
	MenuIconBottomBar,
	MobileMenu,
	MobileNavLink,
} from './MobileMenu.styles';
import { SrOnly } from '@/components/jsx/ui/SrOnly.styles';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function MobileMenuComponent() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { isMobile } = useIsMobile(768);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	// Only render on mobile devices
	if (!isMobile) {
		return null;
	}

	return (
		<>
			<MobileMenuButton
				type="button"
				aria-controls="mobile-menu"
				aria-expanded={isMobileMenuOpen}
				onClick={toggleMobileMenu}
			>
				<SrOnly>{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</SrOnly>
				<MenuIcon
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
					$isMenuOpen={isMobileMenuOpen}
				>
					<MenuIconTopBar
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16"
						$isMenuOpen={isMobileMenuOpen}
					/>
					<MenuIconMiddleBar
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 12h16"
						$isMenuOpen={isMobileMenuOpen}
					/>
					<MenuIconBottomBar
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 18h16"
						$isMenuOpen={isMobileMenuOpen}
					/>
				</MenuIcon>
			</MobileMenuButton>
			<MobileMenu $isOpen={isMobileMenuOpen} id="mobile-menu">
				<MobileNavLink href="/" onClick={toggleMobileMenu}>
					Home
				</MobileNavLink>
				<MobileNavLink href="/portfolio" onClick={toggleMobileMenu}>
					Portfolio
				</MobileNavLink>
				<MobileNavLink href="/blog" onClick={toggleMobileMenu}>
					Blog
				</MobileNavLink>
				<MobileNavLink href="/tools" onClick={toggleMobileMenu}>
					Tools
				</MobileNavLink>
				<MobileNavLink href="/contact" onClick={toggleMobileMenu}>
					Contact
				</MobileNavLink>
			</MobileMenu>
		</>
	);
}
