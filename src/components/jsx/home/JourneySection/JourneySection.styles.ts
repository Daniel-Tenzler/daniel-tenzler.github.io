import styled from '@emotion/styled';
import type { JourneyTypeProps } from './JourneySection.types';

export const Section = styled.section`
	padding: var(--section-gap) 0;

	@media (max-width: 720px) {
		padding: 40px 0;
	}
`;

export const Timeline = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Entry = styled.article`
	display: grid;
	grid-template-columns: 160px minmax(0, 1fr);
	gap: 24px;
	align-items: start;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		gap: 10px;
	}
`;

export const EntryMeta = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	padding-top: 6px;

	@media (max-width: 700px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
		padding-top: 0;
	}
`;

export const YearRange = styled.p`
	margin: 0;
	color: var(--color-text-secondary);
	font-size: 14px;
	font-weight: 600;
	line-height: 1.2;
`;

export const TypeLabel = styled.span<JourneyTypeProps>`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 3px 10px;
	border-radius: var(--chip-radius);
	font-size: 0.7rem;
	font-weight: 600;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: var(--color-text-muted);
	background: var(--chip-bg);
	border: 1px solid var(--chip-border);

	&::before {
		content: '';
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: ${(props) =>
			props.$type === 'job'
				? 'var(--color-accent-brand)'
				: 'var(--color-text-secondary)'};
	}
`;

export const EntryContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	padding: var(--card-padding);
	box-shadow: var(--card-shadow);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		border-color: var(--card-hover-border);
	}
`;

export const EntryTitle = styled.h3`
	margin: 0;
	max-width: 100%;
	font-size: 17px;
	font-weight: 600;
	line-height: 1.35;
	color: var(--color-text-emphasis);
`;

export const Description = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 1.5;
	color: var(--white-ffffff-b3);
`;

export const StyledJourneyLink = styled.a`
	display: inline-flex;
	align-items: center;
	align-self: flex-start;
	gap: 4px;
	margin-top: 2px;
	font-size: 13px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	text-decoration: none;
	transition:
		color 0.2s ease,
		gap 0.2s ease;

	&:hover {
		color: var(--color-text-secondary);
		gap: 8px;
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;
