import React from 'react';
import {
	MobileMenuButton,
	MenuIcon,
	SrOnly,
	MobileMenu,
	MobileNavLink,
} from './MobileMenu.styles';

export default class MobileMenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobileMenuOpen: false,
		};
	}

	toggleMobileMenu = () => {
		this.setState((prevState) => ({
			isMobileMenuOpen: !prevState.isMobileMenuOpen,
		}));
	};

	render() {
		const { isMobileMenuOpen } = this.state;

		return (
			<>
				<MobileMenuButton
					type="button"
					aria-controls="mobile-menu"
					aria-expanded={isMobileMenuOpen}
					onClick={this.toggleMobileMenu}
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
					<MobileNavLink href="/" onClick={this.toggleMobileMenu}>
						Home
					</MobileNavLink>
					<MobileNavLink href="/portfolio" onClick={this.toggleMobileMenu}>
						Portfolio
					</MobileNavLink>
					<MobileNavLink href="/blog" onClick={this.toggleMobileMenu}>
						Blog
					</MobileNavLink>
					{/* <MobileNavLink href="/contact" onClick={this.toggleMobileMenu}>
						Contact
					</MobileNavLink> */}
				</MobileMenu>
			</>
		);
	}
}
