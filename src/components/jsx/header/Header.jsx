import React from 'react';
import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: ${getRgbaColor(COLORS.semiSurfacePrimary, 0.8)};
	backdrop-filter: blur(4px);
	border-bottom: 1px solid ${getRgbaColor(COLORS.surfaceBlend1)};
`;

const Nav = styled.nav`
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

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 4rem;
	align-items: center;
`;

const Logo = styled.a`
	flex-shrink: 0;
	font-size: 1.25rem;
	font-weight: 700;
	color: ${COLORS.white};
	text-decoration: none;

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: none;
	}

	-webkit-tap-highlight-color: transparent;

`;

const NavLinks = styled.div`
	display: none;
	margin-left: 1.5rem;
	gap: 2rem;

	@media (min-width: 640px) {
		display: flex;
	}
`;

const NavLink = styled.a`
	color: ${COLORS.grayLight};
	padding: 0.5rem 0.75rem;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.gray};
	}
`;

const MobileMenuButton = styled.button`
	position: relative;
	overflow: hidden;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	color: ${COLORS.white};
	background-color: ${COLORS.outerSurfaceBackground};
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		color: ${COLORS.grayLight};
		background-color: ${getRgbaColor(COLORS.semiSurfacePrimary)};
	}

	@media (min-width: 640px) {
		display: none;
	}

	&::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
		width: 200%;
		height: 200%;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
		opacity: 0;
		pointer-events: none;
		transition: transform 0.6s ease-out, opacity 1s ease;
	}

	&:active::after {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
		transition: 0s;
	}
	
	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: none;
	}

	-webkit-tap-highlight-color: transparent;
`;


const MenuIcon = styled.svg`
	height: 1.5rem;
	width: 1.5rem;
`;

const MobileMenu = styled.div`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: ${getRgbaColor(COLORS.semiSurfacePrimary, 0.8)};
	backdrop-filter: blur(4px);
	z-index: 9999;
	border-bottom: 1px solid ${getRgbaColor(COLORS.surfaceBlend2)};
	padding: 1rem;
	box-shadow: 0 4px 6px -1px ${getRgbaColor(COLORS.black, 0.1)};

	@media (min-width: 640px) {
		display: none;
	}
`;

const MobileNavLink = styled.a`
	display: block;
	color: ${COLORS.white};
	padding: 0.75rem 1rem;
	border-radius: 0.375rem;
	font-size: 0.875rem;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		color: ${COLORS.grayLight};
		background-color: ${getRgbaColor(COLORS.grayDark)};
	}
`;

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
