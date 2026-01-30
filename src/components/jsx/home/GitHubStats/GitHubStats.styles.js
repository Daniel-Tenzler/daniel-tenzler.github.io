import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

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
	color: ${COLORS.GRAY_E5E9F0};
	text-align: center;
	margin-bottom: 0.75rem;
	letter-spacing: -0.02em;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const Description = styled.p`
	color: ${COLORS.WHITE_BFBFBF};
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
	background-color: ${COLORS.GRAY_292929};
	border-radius: 1rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.BLACK_0F1219, 0.05)};
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
	background-color: ${COLORS.GRAY_383838};
	border-radius: 1rem;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${COLORS.GRAY_404040};
	}
`;

export const StatValue = styled.div`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${COLORS.WHITE_FFFFFF};
	line-height: 1.2;
	margin-bottom: 0.375rem;
	font-variant-numeric: tabular-nums;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const StatLabel = styled.div`
	font-size: 0.8125rem;
	color: ${COLORS.WHITE_BFBFBF};
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
		${getRgbaColor(COLORS.WHITE_FFFFFF, 0.15)} 50%,
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
	background: ${getRgbaColor(COLORS.GRAY_2D2D2D, 0.8)};
	border: 1px solid ${getRgbaColor(COLORS.WHITE_FFFFFF, 0.08)};
	margin: 1.5rem auto;
	max-width: 700px;
	box-shadow: inset 0 2px 4px ${getRgbaColor(COLORS.BLACK_0F1219, 0.3)};

	@media (max-width: 768px) {
		height: 28px;
	}
`;

// Individual segment in the bar
export const LanguageBarSegment = styled.div`
	width: ${(props) => props.$percentage}%;
	background-color: ${(props) => props.$color};
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
			${getRgbaColor(COLORS.WHITE_FFFFFF, 0.15)} 0%,
			transparent 50%
		);
		pointer-events: none;
	}

	&:not(:last-child) {
		border-right: 1px solid ${getRgbaColor(COLORS.BLACK_0F1219, 0.3)};
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

// Language badge (pill shape) - subtle hover
export const LanguageBadge = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 0.875rem;
	background: ${(props) => getRgbaColor(props.$color, 0.1)};
	border: 1.5px solid ${(props) => getRgbaColor(props.$color, 0.3)};
	border-radius: 9999px;
	transition: border-color 0.2s ease;
	cursor: default;

	&:hover {
		border-color: ${(props) => getRgbaColor(props.$color, 0.6)};
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: ${(props) => props.$color};
		flex-shrink: 0;
	}

	.name {
		font-size: 0.8125rem;
		font-weight: 500;
		color: ${COLORS.WHITE_FFFFFF};
	}
`;

// Count badge within language badge
export const LanguageCount = styled.span`
	font-size: 0.75rem;
	font-weight: 600;
	color: ${COLORS.WHITE_BFBFBF};
	background: ${getRgbaColor(COLORS.GRAY_474747, 0.8)};
	padding: 0.125rem 0.5rem;
	border-radius: 9999px;
	min-width: 1.5rem;
	text-align: center;
`;
