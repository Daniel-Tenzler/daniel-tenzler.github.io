import React from 'react';
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
} from './JourneySection.styles';
import { useIsMobile } from '@/hooks/useIsMobile';

export interface JourneySectionItem {
	id: string;
	title: string;
	description: string;
	date: string;
	type?: string;
	link?: string;
}

export interface JourneySectionProps {
	data: JourneySectionItem[] | null;
}

const JourneySection = ({
	data,
}: JourneySectionProps) => {
	const { isMobile } = useIsMobile();

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
								<TimelineMarker $type={item.type} />
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

JourneySection.defaultProps = {
	data: null,
};

export default JourneySection;
