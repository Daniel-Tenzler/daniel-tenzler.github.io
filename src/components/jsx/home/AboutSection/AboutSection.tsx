import React from 'react';
import {
	Section,
	CalloutCard,
	Monogram,
	Content,
	Title,
	Paragraph,
	ActionColumn,
} from './AboutSection.styles';
import { PrimaryButtonAnchor } from '@/components/jsx/ui/AnchorButtons.styles';
import type { AboutSectionProps } from './AboutSection.types';

export default function AboutSection({ paragraphs }: AboutSectionProps) {
	return (
		<Section>
			<CalloutCard>
				<Monogram aria-hidden="true">DT</Monogram>
				<Content>
					<Title>About Me</Title>
					{paragraphs.map((paragraph) => (
						<Paragraph key={paragraph}>{paragraph}</Paragraph>
					))}
				</Content>
				<ActionColumn>
					<PrimaryButtonAnchor
						href="/resume-daniel-tenzler.pdf"
						download
						aria-label="Download resume as PDF"
					>
						Download Resume
					</PrimaryButtonAnchor>
				</ActionColumn>
			</CalloutCard>
		</Section>
	);
}
