import styled from '@emotion/styled';
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

export const TimelineList = styled.ol`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const Title = styled.h2`
	margin: 0.5rem auto;
	width: 100%;
`;

export const TimelineWrapper = styled.div`
	position: relative;
	padding: 20px;
	display: flex;
	justify-content: center;

	background: radial-gradient(
		ellipse at center,
		var(--white-ffffff-03) 0%,
		var(--white-ffffff-02) 50%,
			var(--white-ffffff-01) 100%
	);
	border-radius: 1rem;
`;

export const TimelineContentArea = styled.div(({ $isMobile }) => ({
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
	background-color: var(--white-ffffff-b3);

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

export const TimelineItem = styled.li`
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
	border-radius: 1rem;
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
				var(--white-ffffff-03) 0%,
				var(--white-ffffff-02) 50%,
				var(--white-ffffff-01) 100%
			);
			backdrop-filter: blur(2px);
			box-shadow: 2px 2px 2px 2px #00000003;
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
		type === 'job'
			? 'var(--color-accent-brand)'
			: 'var(--color-accent-brand-dark)'};
	border: 3px solid var(--color-text-emphasis);
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
	color: var(--color-text-muted);
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
	color: var(--color-text-subtle);
	font-size: 15px;
	text-decoration: none;
	margin-top: 10px;
	&:hover {
		color: var(--color-text-muted);
		-webkit-box-shadow: 0px 0px 26px 7px #0000001a;
		box-shadow: 0px 0px 26px 7px #0000001a;
	}
`;
