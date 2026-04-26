import React from 'react';
import {
	Description,
	Entry,
	EntryContent,
	EntryMeta,
	EntryTitle,
	Eyebrow,
	Section,
	StyledJourneyLink,
	TypeLabel,
	YearRange,
} from './JourneySection.styles';
import type { JourneySectionProps } from './JourneySection.types';

export type { JourneySectionItem } from './JourneySection.types';

const JourneySection = ({ data }: JourneySectionProps) => {
	const items = Array.isArray(data) ? data : [];

	return (
		<Section aria-labelledby="journey-heading">
			<Eyebrow>Journey</Eyebrow>

			{items.map((item) => (
				<Entry key={item.id + item.title}>
					<EntryMeta>
						<YearRange>{item.date}</YearRange>
						<TypeLabel $type={item.type}>
							{item.type === 'job' ? 'Work' : 'Education'}
						</TypeLabel>
					</EntryMeta>

					<EntryContent>
						<EntryTitle>{item.title}</EntryTitle>
						<Description>{item.description}</Description>
						{item.link && (
							<StyledJourneyLink href={item.link}>
								Details
							</StyledJourneyLink>
						)}
					</EntryContent>
				</Entry>
			))}
		</Section>
	);
};

JourneySection.defaultProps = {
	data: null,
};

export default JourneySection;
