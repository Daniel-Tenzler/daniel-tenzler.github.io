import React from 'react';
import { Section, Title, Content, Paragraph } from './AboutSection.styles';

export interface AboutSectionProps {
	paragraphs: string[];
}

export default function AboutSection({
	paragraphs,
}: AboutSectionProps) {
	return (
		<Section>
			<Title>About Me</Title>
			<Content>
				{paragraphs.map((paragraph) => (
					<Paragraph key={paragraph}>{paragraph}</Paragraph>
				))}
			</Content>
		</Section>
	);
}
