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

export const TimelineWrapper = styled.div`
	overflow-x: auto;
	position: relative;
	scrollbar-width: none;
	-ms-overflow-style: none;
	padding: 0 20px;

	&::-webkit-scrollbar {
		display: none;
	}

	background: radial-gradient(
		ellipse at center,
		${getRgbaColor(COLORS.white, 0.02)} 0%,
		${getRgbaColor(COLORS.white, 0.01)} 50% ${getRgbaColor(COLORS.white, 0.001)}
			100%
	);
	backdrop-filter: blur(1px);
	border-radius: 20px;
`;

export const TimelineScrollArea = styled.div(({ $isMobile }) => ({
	display: 'inline-flex',
	position: 'relative',
	justifyContent: 'center',
	padding: '20px 20px 40px 20px',
	gap: '120px',
	minWidth: '100%',

	...($isMobile && {
		minWidth: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%',
		gap: '20px',
	}),
}));

export const TimelineLine = styled.div`
	position: absolute;
	bottom: 43px;
	left: 0;
	height: 4px;
	width: ${({ $isMobile }) => ($isMobile ? '100%' : '96%')};
	background-color: ${getRgbaColor(COLORS.white, 0.7)};

	-webkit-mask-image: linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
	mask-image: linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
`;

export const TimelineItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 0 0 500px;
	position: relative;
	width: 200px;
	z-index: 1;

	@media (max-width: 1000px) {
		flex: 0 0 250px;
		width: auto;
	}
`;

export const TimelineContent = styled.div`
	text-align: center;
	min-height: 200px;
	width: 90%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 12px;
	background: transparent;
	transition: all 0.3s ease-in-out;
	position: relative;
	z-index: 1;
	align-items: center;
	animation: ${fadeIn} 0.5s ease;
	margin: 0 3rem;
	margin-bottom: 30px;

	@media (min-width: 1001px) {
		&:hover {
			position: absolute;
			transform: scale(1.02);
			background: radial-gradient(
				ellipse at center,
				${getRgbaColor(COLORS.white, 0.05)} 0%,
				${getRgbaColor(COLORS.white, 0.02)} 50%,
				${getRgbaColor(COLORS.white, 0.01)} 100%
			);
			backdrop-filter: blur(3px);
			box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
		}
	}
`;

export const TimelineMarker = styled.div`
	position: absolute;
	bottom: -6px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${({ type }) =>
		type === 'job' ? COLORS.accent : COLORS.accentDark};
	border: 3px solid ${COLORS.white};
	z-index: 1;
`;

export const TimelineTitle = styled.h3`
	height: 3.6em;
	margin: 0 0 0.5rem 0;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 20px;
`;

export const TimelineDate = styled.p`
	font-style: italic;
	color: ${COLORS.offWhite};
	height: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin: 0 0 0.5rem 0;
	transition: all 0.3s ease-in-out;
	font-size: 16px;
`;

export const TimelineDescription = styled.p`
	height: 6.5em;
	width: 300px;
	margin: 0;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 16px;

	@media (max-width: 720px) {
		width: 250px;
	}
`;

export const StyledJourneyLink = styled.a`
	display: inline-block;
	color: ${COLORS.white};
	text-decoration: none;
	margin-top: 10px;
	&:hover {
		color: ${COLORS.offWhite};
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
	color: ${COLORS.white};
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
		background: ${getRgbaColor(COLORS.white, 0.01)};
		color: ${COLORS.offWhite};
	}
`;
