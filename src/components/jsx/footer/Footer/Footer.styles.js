import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
	background-color: var(--color-border-light);
	border-top: 1px solid var(--gray-383838);
`;

export const FooterContainer = styled.div`
	max-width: 56rem;
	margin: 0 auto;
	padding: 2rem 1rem;

	@media (min-width: 640px) {
		padding: 2rem 1.5rem;
	}

	@media (min-width: 1024px) {
		padding: 2rem 2rem;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

export const FooterLinks = styled.div`
	display: flex;
	gap: 1.5rem;
	background-color: var(--gray-383838);
	border-radius: 1rem;
	padding: 0.2rem 0.5rem;
`;

export const FooterLink = styled.a`
	color: var(--color-text-primary);
	text-decoration: none;
	font-size: 0.875rem;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-muted);
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
		border-radius: 0.25rem;
	}
`;

export const Copyright = styled.div`
	font-size: 0.875rem;
	color: var(--color-text-primary);
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 1.5rem;
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
		border-radius: 0.25rem;
	}
`;

export const SocialIcon = styled.svg`
	height: 1.5rem;
	width: 1.5rem;
	margin-left: 5px;
`;
