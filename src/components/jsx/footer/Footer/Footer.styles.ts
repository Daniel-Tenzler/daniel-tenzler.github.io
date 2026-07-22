import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
	background-color: var(--color-bg-primary);
	border-top: 1px solid var(--divider);
	padding: 40px 0 56px;
`;

export const FooterContainer = styled.div`
	max-width: var(--content-max-width);
	margin: 0 auto;
	padding: 0 var(--content-padding-x);

	@media (max-width: 640px) {
		padding: 0 20px;
	}
`;

export const FooterTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
	flex-wrap: wrap;
	margin-bottom: 20px;
`;

export const FooterBrand = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Logo = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: var(--color-text-emphasis);
`;

export const Tagline = styled.span`
	font-size: 13px;
	color: var(--color-text-secondary);
`;

export const FooterNav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

export const FooterNavLink = styled.a`
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-muted);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-emphasis);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

export const FooterBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	flex-wrap: wrap;
`;

export const LegalRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 20px;
`;

export const Copyright = styled.span`
	font-size: 13px;
	color: var(--color-text-secondary);
`;

export const FooterLinks = styled.div`
	display: flex;
	gap: 16px;
`;

export const FooterLink = styled.a`
	font-size: 13px;
	color: var(--color-text-secondary);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-muted);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 16px;
`;

export const SocialLink = styled.a`
	display: inline-flex;
	color: var(--color-text-secondary);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-emphasis);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

export const SocialIcon = styled.svg`
	height: 20px;
	width: 20px;
`;
