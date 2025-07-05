import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	TimelineContainer,
	TimelineWrapper,
	TimelineScrollArea,
	TimelineLine,
	TimelineItem,
	TimelineMarker,
	TimelineContent,
	TimelineTitle,
	TimelineDate,
	TimelineDescription,
	StyledJourneyLink,
	ArrowNavWrapper,
	ArrowButton,
} from './JourneySection.styles.js';
import { useIsMobile } from './useIsMobile.js';

const JourneySection = ({ data }) => {
	const [startIndex, setStartIndex] = useState(0);
	let itemsToShow = 2;
	const canGoBack = startIndex > 0;
	const canGoForward = startIndex + itemsToShow < data.length;

	const isMobile = useIsMobile();
	if (isMobile) itemsToShow = 1;

	const handleBack = () => {
		if (canGoBack) setStartIndex(startIndex - itemsToShow);
	};

	const handleForward = () => {
		if (canGoForward) setStartIndex(startIndex + itemsToShow);
	};

	return (
		<TimelineContainer>
			<h2>My Developer Journey</h2>
			<TimelineWrapper $isMobile={isMobile}>
				<TimelineScrollArea $isMobile={isMobile}>
					<TimelineLine $isMobile={isMobile} />
					{data.slice(startIndex, startIndex + itemsToShow).map((item) => (
						<TimelineItem key={item.id}>
							<TimelineContent>
								<TimelineTitle>{item.title}</TimelineTitle>
								<TimelineDate>{item.date}</TimelineDate>
								<TimelineDescription>{item.description}</TimelineDescription>
								{item.link && (
									<StyledJourneyLink href={item.link}>
										Details
									</StyledJourneyLink>
								)}
							</TimelineContent>
							<TimelineMarker type={item.type} />
						</TimelineItem>
					))}
				</TimelineScrollArea>
			</TimelineWrapper>
			{data.length > 2 && (
				<ArrowNavWrapper>
					<ArrowButton
						onClick={handleBack}
						disabled={!canGoBack}
						aria-label="Previous"
					>
						&larr;
					</ArrowButton>
					<ArrowButton
						onClick={handleForward}
						disabled={!canGoForward}
						aria-label="Next"
					>
						&rarr;
					</ArrowButton>
				</ArrowNavWrapper>
			)}
		</TimelineContainer>
	);
};

JourneySection.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			type: PropTypes.oneOf(['job', 'education']).isRequired,
			link: PropTypes.string,
		})
	).isRequired,
};

JourneySection.defaultProps = {
	data: null,
};

export default JourneySection;
