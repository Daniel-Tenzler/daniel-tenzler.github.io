import styled from '@emotion/styled';

// Main wrapper
export const StatsWrapper = styled.div`
	padding: 3rem 2rem;
	margin: 2rem auto;
	max-width: 900px;

	@media (max-width: 768px) {
		padding: 2rem 1rem;
	}
`;

// Placeholder for compatibility (no glow effect)
export const GlowEffect = styled.div`
	display: none;
`;

export const Title = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: var(--color-text-primary);
	text-align: center;
	margin-bottom: 0.75rem;
	letter-spacing: -0.02em;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const Description = styled.p`
	color: var(--color-text-muted);
	margin: 0 0 2rem 0;
	font-size: 1rem;
	line-height: 1.6;
	text-align: center;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 768px) {
		font-size: 0.9375rem;
	}
`;

// Stats container - clean solid background like other sections
export const StatsContainer = styled.div`
	padding: 2rem;
	background-color: var(--color-bg-tertiary);
	border-radius: 1rem;
	box-shadow: 0 1px 2px var(--black-0f1219-0a);
	margin: 0 auto;
	max-width: 700px;

	@media (max-width: 768px) {
		padding: 1.5rem 1rem;
	}
`;

// Grid layout for stat cards
export const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
`;

// Individual stat card - subtle hover like other sections
export const StatCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.25rem 1rem;
	background-color: var(--gray-383838);
	border-radius: 1rem;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: var(--gray-404040);
	}
`;

export const StatValue = styled.div`
	font-size: 1.75rem;
	font-weight: 700;
	color: var(--color-text-emphasis);
	line-height: 1.2;
	margin-bottom: 0.375rem;
	font-variant-numeric: tabular-nums;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const StatLabel = styled.div`
	font-size: 0.8125rem;
	color: var(--color-text-muted);
	text-transform: uppercase;
	letter-spacing: 0.08em;
	font-weight: 500;
`;

// Section divider
export const SectionDivider = styled.div`
	width: 60%;
	height: 1px;
	background: linear-gradient(
		90deg,
		transparent 0%,
		var(--white-ffffff-26) 50%,
		transparent 100%
	);
	margin: 3rem auto;
`;

// Language section
export const LanguageSection = styled.div`
	margin-top: 1rem;
`;

// Visual bar chart
export const LanguageBar = styled.div`
	display: flex;
	height: 32px;
	border-radius: 8px;
	overflow: hidden;
	background: var(--gray-2d2d2d-cc);
	border: 1px solid var(--white-ffffff-15);
	margin: 1.5rem auto;
	max-width: 700px;
	box-shadow: inset 0 2px 4px var(--black-0f1219-4d);

	@media (max-width: 768px) {
		height: 28px;
	}
`;

// Individual segment in the bar - language color from CSS variable
export const LanguageBarSegment = styled.div`
	width: ${(props) => props.$percentage}%;
	background-color: ${(props) =>
		props.$color ? `var(${props.$color})` : '#60739f'};
	transition: all 0.3s ease;
	position: relative;

	&:hover {
		filter: brightness(1.2);
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			180deg,
			var(--white-ffffff-26) 0%,
			transparent 50%
		);
		pointer-events: none;
	}

	&:not(:last-child) {
		border-right: 1px solid var(--black-0f1219-4d);
	}
`;

// Legend container
export const LanguageLegend = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.75rem;
	margin-top: 1.5rem;
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
`;

// Language badge (pill shape) - uses CSS variable for language color
export const LanguageBadge = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 0.875rem;
	background: ${({ $color }) =>
		$color
			? `color-mix(in srgb, var(${$color}) 10%, transparent)`
			: 'rgba(96, 115, 159, 0.1)'};
	border: 1.5px solid ${({ $color }) =>
		$color
			? `color-mix(in srgb, var(${$color}) 30%, transparent)`
			: 'rgba(96, 115, 159, 0.3)'};
	border-radius: 9999px;
	transition: border-color 0.2s ease;
	cursor: default;

	&:hover {
		border-color: ${({ $color }) =>
			$color
				? `color-mix(in srgb, var(${$color}) 60%, transparent)`
				: 'rgba(96, 115, 159, 0.6)'};
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: ${(props) =>
			props.$color ? `var(${props.$color})` : '#60739f'};
		flex-shrink: 0;
	}

	.name {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-text-emphasis);
	}
`;

// Count badge within language badge
export const LanguageCount = styled.span`
	font-size: 0.75rem;
	font-weight: 600;
	color: var(--color-text-muted);
	background: var(--gray-474747-cc);
	padding: 0.125rem 0.5rem;
	border-radius: 9999px;
	min-width: 1.5rem;
	text-align: center;
`;
