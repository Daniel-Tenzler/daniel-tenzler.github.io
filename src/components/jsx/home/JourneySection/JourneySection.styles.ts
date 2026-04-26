import styled from '@emotion/styled';
import type { JourneyTypeProps } from './JourneySection.types';

export const Section = styled.section`
	margin: 56px auto;
	width: 100%;
`;

export const Eyebrow = styled.p`
	margin: 0 0 10px 0;
	color: var(--color-text-emphasis);
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.16em;
	text-transform: uppercase;
`;

export const Entry = styled.article`
	display: grid;
	grid-template-columns: 168px minmax(0, 1fr);
	gap: 20px;
	padding: 28px 0;
	border-top: 1px solid var(--white-bfbfbf);

	&:last-of-type {
		border-bottom: 1px solid var(--gray-999999);
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		gap: 14px;
		padding: 24px 0;
	}
`;

export const EntryMeta = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;

	@media (max-width: 700px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
	}
`;

export const YearRange = styled.p`
	margin: 0;
	color: var(--color-text-primary);
	font-size: clamp(18px, 2.4vw, 22px);
	font-weight: 700;
	letter-spacing: -0.035em;
	line-height: 1.1;
	padding-top: 10px;
`;

export const TypeLabel = styled.span<JourneyTypeProps>`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	color: var(--color-text-muted);
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;

	&::before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: ${(props) =>
			props.$type === 'job'
				? 'var(--color-accent-brand)'
				: 'var(--color-accent-brand-dark)'};
	}
`;

export const EntryContent = styled.div`
	display: grid;
	gap: 10px;
	justify-items: start;
`;

export const EntryTitle = styled.h3`
	max-width: 780px;
	margin: 0;
	color: var(--color-text-primary);
	font-size: clamp(20px, 2.8vw, 26px);
	font-weight: 500;
	letter-spacing: -0.04em;
	line-height: 1.1;
`;

export const Description = styled.p`
	max-width: 880px;
	margin: 0;
	color: var(--white-ffffff-e6);
	font-size: 16px;
	line-height: 1.4;
`;

export const StyledJourneyLink = styled.a`
	display: inline-flex;
	align-items: center;
	min-height: 40px;
	margin-top: 4px;
	color: var(--color-text-emphasis);
	font-size: 14px;
	font-weight: 700;
	text-decoration: none;
	text-underline-offset: 5px;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-primary);
		text-decoration: underline;
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 4px;
	}
`;
