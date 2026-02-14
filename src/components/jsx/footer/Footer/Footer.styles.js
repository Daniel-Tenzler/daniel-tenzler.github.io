import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
	background-color: var(--color-border-light);
	border-top: 1px solid var(--gray-383838);
`;

export const FooterContainer = styled.div`
	max-width: 896px;
	margin: 0 auto;
	padding: 32px 16px;

	@media (min-width: 640px) {
		padding: 32px 24px;
	}

	@media (min-width: 1024px) {
		padding: 32px 32px;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 32px;
`;

export const FooterLinks = styled.div`
	display: flex;
	gap: 24px;
	background-color: var(--gray-383838);
	border-radius: 16px;
	padding: 3px 8px;
`;

export const FooterLink = styled.a`
	color: var(--color-text-primary);
	text-decoration: none;
	font-size: 14px;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-muted);
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

export const Copyright = styled.div`
	font-size: 14px;
	color: var(--color-text-primary);
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 24px;
`;

export const SocialLink = styled.a`
	color: var(--color-text-primary);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-muted);
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

export const SocialIcon = styled.svg`
	height: 24px;
	width: 24px;
	margin-left: 5px;
`;
