import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const Section = styled.section`
	margin-bottom: 3rem;
`;

const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${COLORS.grayLight};
`;

const Content = styled.div`
	background-color: ${COLORS.cardSurfaceBackground};
	padding: 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 1px 2px ${getRgbaColor(COLORS.black, 0.05)};
`;

const Paragraph = styled.p`
	color: ${COLORS.white};
	margin-bottom: 1rem;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

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
