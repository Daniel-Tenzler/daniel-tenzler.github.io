import React from 'react';
import {
	StyledHeader,
	Nav,
	NavContainer,
	Logo,
	NavLinks,
	NavLink,
	MobileMenuButton,
	MenuIcon,
	MobileMenu,
	MobileNavLink,
} from './Header.styles';

export default class Header extends React.Component {
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
			<StyledHeader>
				<Nav>
					<NavContainer>
						<Logo href="/">Daniel Tenzler</Logo>
						<NavLinks>
							<NavLink href="/">Home</NavLink>
							<NavLink href="/portfolio">Portfolio</NavLink>
							<NavLink href="/blog">Blog</NavLink>
							{/* <NavLink href="/contact">Contact</NavLink> */}
						</NavLinks>
						<MobileMenuButton
							type="button"
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
							onClick={this.toggleMobileMenu}
						>
							<span className="sr-only">
								{isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
							</span>
							<MenuIcon
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={
										isMobileMenuOpen
											? 'M6 18L18 6M6 6l12 12'
											: 'M4 6h16M4 12h16M4 18h16'
									}
								/>
							</MenuIcon>
						</MobileMenuButton>
					</NavContainer>
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
				</Nav>
			</StyledHeader>
		);
	}
}
