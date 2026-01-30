import React from 'react';
import PropTypes from 'prop-types';
import {
	TimelineContainer,
	TimelineWrapper,
	TimelineContentArea,
	TimelineLine,
	TimelineList,
	TimelineItem,
	TimelineMarker,
	TimelineContent,
	TimelineTitle,
	TimelineDate,
	TimelineDescription,
	StyledJourneyLink,
	Title,
} from './JourneySection.styles.js';
import { useIsMobile } from 'src/hooks/useIsMobile.js';

const JourneySection = ({ data }) => {
	const isMobile = useIsMobile();

	const items = Array.isArray(data) ? data : [];

	return (
		<TimelineContainer>
			<Title>Journey / Experience</Title>
			<TimelineWrapper $isMobile={isMobile}>
				<TimelineContentArea $isMobile={isMobile}>
					<TimelineLine $isMobile={isMobile} />
					<TimelineList aria-label="Career timeline">
						{items.map((item) => (
							<TimelineItem key={item.id + item.title}>
								<TimelineMarker type={item.type} />
								<TimelineContent>
									<TimelineTitle>{item.title}</TimelineTitle>
									<TimelineDate>{item.date}</TimelineDate>
									<TimelineDescription>
										{item.description}
									</TimelineDescription>
									{item.link && (
										<StyledJourneyLink href={item.link}>
											Details
										</StyledJourneyLink>
									)}
								</TimelineContent>
							</TimelineItem>
						))}
					</TimelineList>
				</TimelineContentArea>
			</TimelineWrapper>
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
