import React from 'react';
import SectionHeader from '@/components/jsx/ui/SectionHeader/SectionHeader';
import {
	Section,
	Timeline,
	Entry,
	EntryMeta,
	EntryContent,
	EntryTitle,
	Description,
	TypeLabel,
	YearRange,
	StyledJourneyLink,
} from './JourneySection.styles';
import type { JourneySectionProps } from './JourneySection.types';

export type { JourneySectionItem } from './JourneySection.types';

const JourneySection = ({ data }: JourneySectionProps) => {
	const items = Array.isArray(data) ? data : [];

	return (
		<Section aria-labelledby="journey-heading">
			<SectionHeader title="Journey" titleId="journey-heading" />

			<Timeline>
				{items.map((item) => (
					<Entry key={item.id + item.title}>
						<EntryMeta>
							<YearRange>{item.date}</YearRange>
							<TypeLabel $type={item.type}>
								{item.type === 'job' ? 'Work' : 'Education'}
							</TypeLabel>
						</EntryMeta>

						<EntryContent data-cursor-glow>
							<EntryTitle>{item.title}</EntryTitle>
							<Description>{item.description}</Description>
							{item.link && (
								<StyledJourneyLink href={item.link}>
									Details →
								</StyledJourneyLink>
							)}
						</EntryContent>
					</Entry>
				))}
			</Timeline>
		</Section>
	);
};

JourneySection.defaultProps = {
	data: null,
};

export default JourneySection;
