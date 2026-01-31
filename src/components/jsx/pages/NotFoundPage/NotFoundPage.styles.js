import styled from '@emotion/styled';

export const StyledNotFoundContainer = styled.section`
	text-align: center;
	padding: 4rem 2rem;
	max-width: 600px;
	margin: 0 auto;
`;

export const StyledErrorCode = styled.div`
	font-size: 8rem;
	font-weight: bold;
	color: var(--color-accent-brand);
	margin-bottom: 1rem;
	text-shadow: 0 0 20px var(--blue-2337ff-4d);

	@media (min-width: 768px) {
		font-size: 10rem;
	}
`;

export const StyledErrorTitle = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: var(--color-text-subtle);
`;

export const StyledErrorDescription = styled.p`
	font-size: 1.2rem;
	margin-bottom: 2rem;
	color: var(--color-text-secondary);
	line-height: 1.6;
`;

export const StyledActions = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const StyledNavLink = styled.a`
	padding: 0.75rem 2rem;
	border-radius: 8px;
	text-decoration: none;
	font-weight: 500;
	transition: all 0.3s ease;
	border: 2px solid transparent;
	min-width: 200px;
	display: inline-block;
	text-align: center;

	@media (min-width: 768px) {
		min-width: 150px;
	}
`;

export const StyledPrimaryLink = styled(StyledNavLink)`
	background-color: var(--color-accent-brand);
	color: var(--color-text-emphasis);

	&:hover {
		background-color: var(--color-accent-brand-dark);
		box-shadow: 0 2px 4px var(--blue-2337ff-99);
	}
`;

export const StyledSecondaryLink = styled(StyledNavLink)`
	background-color: transparent;
	color: var(--color-text-subtle);
	border-color: var(--color-text-secondary);

	&:hover {
		border-color: var(--color-accent-brand-dark);
		color: var(--color-text-muted);
		background-color: var(--blue-000d8a-1a);
	}
`;
