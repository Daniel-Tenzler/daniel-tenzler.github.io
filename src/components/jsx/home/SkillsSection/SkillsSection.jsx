import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	Title,
	SkillsGrid,
	BubblesContainer,
	SkillBubble,
} from './SkillsSection.styles';

export default function SkillsSection({ skills }) {
	const allSkills = Object.values(skills).flat();

	return (
		<Section>
			<Title>Technologies & Skills</Title>
			<SkillsGrid>
				<BubblesContainer>
					{allSkills.map((skill) => (
						<SkillBubble key={skill}>{skill}</SkillBubble>
					))}
				</BubblesContainer>
			</SkillsGrid>
		</Section>
	);
}

SkillsSection.propTypes = {
	skills: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
