import styled from '@emotion/styled';

export const StyledSection = styled.section`
	min-height: 60vh;
	display: flex;
	align-items: center;
	padding: 48px 16px;

	@media (min-width: 768px) {
		min-height: 70vh;
		padding: 64px 32px;
	}
`;

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
`;

export const StyledHeader = styled.header`
	text-align: center;
	margin-bottom: 48px;
`;

export const StyledTitle = styled.h1`
	font-size: clamp(32px, 5vw, 48px);
	font-weight: 700;
	margin-bottom: 16px;
	margin-top: 0;
	color: var(--color-text-emphasis);
	letter-spacing: -0.02em;
`;

export const StyledDescription = styled.p`
	font-size: clamp(16px, 2vw, 18px);
	line-height: 1.6;
	color: var(--color-text-primary);
	max-width: 560px;
	margin: 0 auto;
`;

export const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const StyledContactCard = styled.a`
	background-color: var(--color-bg-tertiary);
	border-radius: 16px;
	padding: 32px 24px;
	box-shadow: 0 4px 6px var(--gray-292929-1a);
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 180px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: var(--color-accent-brand);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
	}

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 16px var(--gray-292929-33);

		&::before {
			transform: scaleX(1);
		}
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 4px;
	}

	@media (min-width: 768px) {
		min-height: 200px;
		padding: 40px 32px;
	}
`;

export const StyledLabel = styled.span`
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-text-secondary);
	margin-bottom: 12px;
	display: block;
`;

export const StyledValue = styled.span`
	font-size: 18px;
	font-weight: 500;
	color: var(--color-text-emphasis);
	line-height: 1.4;
	word-break: break-word;
`;

export const StyledAction = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: var(--color-text-muted);
	display: inline-flex;
	align-items: center;
	gap: 4px;
	margin-top: auto;
	transition: color 0.3s ease;

	&::after {
		content: '';
		width: 16px;
		height: 1px;
		background: currentColor;
		transition: width 0.3s ease;
	}

	${StyledContactCard}:hover &::after {
		width: 24px;
	}
`;
