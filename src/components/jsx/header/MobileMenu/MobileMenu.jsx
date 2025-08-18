import React, { useState } from 'react';
import {
	MobileMenuButton,
	MenuIcon,
	SrOnly,
	MobileMenu,
	MobileNavLink,
	NavlinkCard,
} from './MobileMenu.styles';
import { useIsMobile } from 'src/hooks/useIsMobile';

export default function MobileMenuComponent() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isMobile = useIsMobile(768);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev);
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
				<SrOnly>{isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}</SrOnly>
				<MenuIcon
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						className="top-bar"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16"
						style={{
							transform: isMobileMenuOpen
								? 'rotate(45deg) translateY(6px)'
								: 'none',
						}}
					/>
					<path
						className="middle-bar"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 12h16"
						style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
					/>
					<path
						className="bottom-bar"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 18h16"
						style={{
							transform: isMobileMenuOpen
								? 'rotate(-45deg) translateY(-6px)'
								: 'none',
						}}
					/>
				</MenuIcon>
			</MobileMenuButton>
			<MobileMenu isOpen={isMobileMenuOpen} id="mobile-menu">
				<MobileNavLink href="/" onClick={toggleMobileMenu}>
					<NavlinkCard>Home</NavlinkCard>
				</MobileNavLink>
				<MobileNavLink href="/portfolio" onClick={toggleMobileMenu}>
					<NavlinkCard>Portfolio</NavlinkCard>
				</MobileNavLink>
				<MobileNavLink href="/blog" onClick={toggleMobileMenu}>
					<NavlinkCard>Blog</NavlinkCard>
				</MobileNavLink>
				{/* <MobileNavLink href="/contact" onClick={toggleMobileMenu}>
				<NavlinkCard>
					Contact
					</NavlinkCard>
				</MobileNavLink> */}
			</MobileMenu>
		</>
	);
}
