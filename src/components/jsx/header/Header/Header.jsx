import React from 'react';
import {
	StyledHeader,
	Nav,
	NavContainer,
	Logo,
	NavLinks,
	NavLink,
} from './Header.styles';
import MobileMenuComponent from '../MobileMenu/MobileMenu';
import ScrollProgressBar from '../../ui/ScrollProgressBar/ScrollProgressBar';

export default class Header extends React.Component {
	render() {
		return (
			<StyledHeader>
				<Nav>
					<NavContainer>
						<Logo href="/">Daniel Tenzler</Logo>
						<NavLinks>
							<NavLink href="/">Home</NavLink>
							<NavLink href="/portfolio">Portfolio</NavLink>
							<NavLink href="/blog">Blog</NavLink>
							<NavLink href="/tools">Tools</NavLink>
						</NavLinks>
						<MobileMenuComponent />
					</NavContainer>
				</Nav>
				<ScrollProgressBar client:visible />
			</StyledHeader>
		);
	}
}
