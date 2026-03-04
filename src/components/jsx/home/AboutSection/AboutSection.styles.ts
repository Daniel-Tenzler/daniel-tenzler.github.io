import styled from '@emotion/styled';

export const Section = styled.section`
	margin-bottom: 48px;
`;

export const Title = styled.h2`
	margin-bottom: 16px;
	color: var(--color-text-primary);
`;

export const Content = styled.div`
	background-color: var(--color-bg-tertiary);
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0 1px 2px var(--black-0f1219-0a);
`;

export const Paragraph = styled.p`
	color: var(--color-text-emphasis);
	margin-bottom: 16px;
	font-size: 16px;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledResumeButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 12px 24px;
	margin-top: 24px;
	background: var(--color-accent-brand);
	color: white;
	border-radius: 8px;
	font-weight: 600;
	font-size: 16px;
	text-decoration: none;
	transition: background 0.2s ease, transform 0.2s ease;
	cursor: pointer;

	&:hover {
		background: #1e3a8a;
		transform: translateY(-2px);
	}

	&:focus {
		outline: 2px solid #1e3a8a;
		outline-offset: 2px;
	}

	&:focus-visible {
		outline: 2px solid #1e3a8a;
		outline-offset: 2px;
	}

	&:active {
		transform: translateY(0);
	}

	/* Ensure focus ring remains visible in :active state */
	&:active:focus-visible {
		outline: 2px solid #1e3a8a;
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		padding: 10px 20px;
		font-size: 14px;
	}
`;
