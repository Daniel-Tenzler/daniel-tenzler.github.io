import React from 'react';
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
} from './JourneySection.styles.js';

const JourneySection = ({ data }) => {
	return (
		<TimelineContainer>
			<h2>My Developer Journey</h2>
			<TimelineWrapper>
				<TimelineScrollArea>
					<TimelineLine />
					{data.map((item) => (
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
