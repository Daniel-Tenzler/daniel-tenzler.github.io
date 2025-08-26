import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const TimelineContainer = styled.section`
	margin: 2rem auto;
	width: 100%;
`;

export const Title = styled.h2`
	margin: 0.5rem auto;
	width: 100%;
`;

export const TimelineWrapper = styled.div`
	overflow-y: auto;
	position: relative;
	scrollbar-width: none;
	-ms-overflow-style: none;
	padding: 20px;
	display: flex;
	justify-content: center;
	max-height: 700px;

	&::-webkit-scrollbar {
		display: none;
	}

	background: radial-gradient(
		ellipse at center,
		${getRgbaColor(COLORS.WHITE_FFFFFF, 0.02)} 0%,
		${getRgbaColor(COLORS.WHITE_FFFFFF, 0.01)} 50%
			${getRgbaColor(COLORS.WHITE_FFFFFF, 0.001)} 100%
	);
	/* backdrop-filter: blur(1px); */
	border-radius: 20px;
`;

export const TimelineScrollArea = styled.div(({ $isMobile }) => ({
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	alignItems: 'flex-start',
	// shared x-position for line and markers
	['--line-x']: '30px',
	['--gutter']: '30px',
	['--marker-size']: '15px',
	padding: '20px 20px 20px calc(var(--line-x) + var(--gutter))',
	gap: '40px',
	width: '100%',

	...($isMobile && {
		['--line-x']: '24px',
		['--gutter']: '24px',
		padding: '10px 10px 10px calc(var(--line-x) + var(--gutter))',
		gap: '24px',
	}),
}));

export const TimelineLine = styled.div`
	position: absolute;
	top: 0;
	left: var(--line-x);
	width: 4px;
	height: 100%;
	background-color: ${getRgbaColor(COLORS.WHITE_FFFFFF, 0.7)};

	-webkit-mask-image: linear-gradient(
		to bottom,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
	mask-image: linear-gradient(
		to bottom,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
`;

export const TimelineItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	position: relative;
	z-index: 1;
`;

export const TimelineContent = styled.div`
	text-align: left;
	min-height: 120px;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem 1rem 1rem 2rem;
	border-radius: 12px;
	background: transparent;
	transition: all 0.3s ease-in-out;
	position: relative;
	z-index: 1;
	align-items: flex-start;
	animation: ${fadeIn} 0.5s ease;
	margin: 0;

	@media (min-width: 1001px) {
		&:hover {
			transform: scale(1.01);
			background: radial-gradient(
				ellipse at center,
				${getRgbaColor(COLORS.WHITE_FFFFFF, 0.05)} 0%,
				${getRgbaColor(COLORS.WHITE_FFFFFF, 0.02)} 50%,
				${getRgbaColor(COLORS.WHITE_FFFFFF, 0.01)} 100%
			);
			/* backdrop-filter: blur(3px); */
			box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
		}
	}
`;

export const TimelineMarker = styled.div`
	position: absolute;
	left: calc(2px + (-1 * var(--gutter)));
	top: 50%;
	transform: translate(-50%, -50%);
	width: var(--marker-size);
	height: var(--marker-size);
	border-radius: 50%;
	background-color: ${({ type }) =>
		type === 'job' ? COLORS.BLUE_2337FF : COLORS.BLUE_000D8A};
	border: 3px solid ${COLORS.WHITE_FFFFFF};
	z-index: 2;
`;

export const TimelineTitle = styled.h3`
	margin: 0 0 0.5rem 0;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 18px;
`;

export const TimelineDate = styled.p`
	font-style: italic;
	color: ${COLORS.WHITE_BFBFBF};
	height: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin: 0 0 0.5rem 0;
	transition: all 0.3s ease-in-out;
	font-size: 16px;
`;

export const TimelineDescription = styled.p`
	margin: 0;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 16px;
`;

export const StyledJourneyLink = styled.a`
	display: inline-block;
	color: ${COLORS.WHITE_F1F1F1};
	font-size: 15px;
	text-decoration: none;
	margin-top: 10px;
	&:hover {
		color: ${COLORS.WHITE_BFBFBF};
		-webkit-box-shadow: 0px 0px 26px 7px rgba(0, 0, 0, 0.1);
		box-shadow: 0px 0px 26px 7px rgba(0, 0, 0, 0.1);
	}
`;

export const ArrowNavWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 1rem;
`;

export const ArrowButton = styled.button`
	background: none;
	border: none;
	color: ${COLORS.WHITE_FFFFFF};
	font-size: 2rem;
	cursor: pointer;
	padding: 0.5rem 1.2rem;
	border-radius: 50%;
	transition:
		background 0.2s,
		color 0.2s,
		opacity 0.2s;
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
	-webkit-tap-highlight-color: transparent;
	&:hover {
		background: ${getRgbaColor(COLORS.WHITE_FFFFFF, 0.01)};
		color: ${COLORS.WHITE_BFBFBF};
	}
`;
