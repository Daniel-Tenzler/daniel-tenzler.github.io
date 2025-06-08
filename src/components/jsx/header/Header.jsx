import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid #e5e7eb;
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
  color: #111827;
  text-decoration: none;
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
  color: #111827;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #4b5563;
  }
`;

const MobileMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: #9ca3af;
  
  &:hover {
    color: #6b7280;
    background-color: #f3f4f6;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

const MenuIcon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Nav>
          <NavContainer>
            <Logo href="/">
              Daniel Tenzler
            </Logo>
            <NavLinks>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </NavLinks>
            <MobileMenuButton
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </MenuIcon>
            </MobileMenuButton>
          </NavContainer>
        </Nav>
      </StyledHeader>
    );
  }
} 