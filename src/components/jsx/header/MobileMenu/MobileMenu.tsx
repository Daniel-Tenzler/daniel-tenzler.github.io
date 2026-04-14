import React, { useState, useEffect, useRef, useCallback } from 'react';
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
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(false);
		buttonRef.current?.focus();
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	// Close on Escape key
	useEffect(() => {
		if (!isMobileMenuOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeMobileMenu();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isMobileMenuOpen, closeMobileMenu]);

	// Focus trap when menu is open
	useEffect(() => {
		if (!isMobileMenuOpen || !menuRef.current) return;

		const menu = menuRef.current;
		const focusableSelector =
			'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
		const focusableElements =
			menu.querySelectorAll<HTMLElement>(focusableSelector);
		const firstFocusable = focusableElements[0];
		const lastFocusable = focusableElements[focusableElements.length - 1];

		// Focus the first link when opening
		firstFocusable?.focus();

		const handleTabTrap = (e: KeyboardEvent) => {
			if (e.key !== 'Tab') return;

			if (e.shiftKey) {
				if (document.activeElement === firstFocusable) {
					e.preventDefault();
					lastFocusable?.focus();
				}
			} else {
				if (document.activeElement === lastFocusable) {
					e.preventDefault();
					firstFocusable?.focus();
				}
			}
		};

		menu.addEventListener('keydown', handleTabTrap);
		return () => menu.removeEventListener('keydown', handleTabTrap);
	}, [isMobileMenuOpen]);

	// Lock body scroll when menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMobileMenuOpen]);

	// Only render on mobile devices
	if (!isMobile) {
		return null;
	}

	return (
		<>
			<MobileMenuButton
				ref={buttonRef}
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
			<MobileMenu
				ref={menuRef}
				$isOpen={isMobileMenuOpen}
				id="mobile-menu"
				role="dialog"
				aria-label="Navigation menu"
				aria-hidden={!isMobileMenuOpen}
			>
				<MobileNavLink href="/" onClick={closeMobileMenu}>
					Home
				</MobileNavLink>
				<MobileNavLink href="/portfolio" onClick={closeMobileMenu}>
					Portfolio
				</MobileNavLink>
				<MobileNavLink href="/blog" onClick={closeMobileMenu}>
					Blog
				</MobileNavLink>
				<MobileNavLink href="/tools" onClick={closeMobileMenu}>
					Tools
				</MobileNavLink>
				<MobileNavLink href="/contact" onClick={closeMobileMenu}>
					Contact
				</MobileNavLink>
			</MobileMenu>
		</>
	);
}
