import React from 'react';
import {
	Section,
	Title,
	Content,
	Paragraph,
	StyledResumeButton,
} from './AboutSection.styles';
import type { AboutSectionProps } from './AboutSection.types';

export default function AboutSection({ paragraphs }: AboutSectionProps) {
	return (
		<Section>
			<Title>About Me</Title>
			<Content>
				{paragraphs.map((paragraph) => (
					<Paragraph key={paragraph}>{paragraph}</Paragraph>
				))}
				<StyledResumeButton
					href="/resume-daniel-tenzler.pdf"
					download
					aria-label="Download resume as PDF"
				>
					Download Resume
				</StyledResumeButton>
			</Content>
		</Section>
	);
}
