import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title, Content, Paragraph } from './AboutSection.styles';

export default function AboutSection({ paragraphs }) {
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

AboutSection.propTypes = {
	paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
