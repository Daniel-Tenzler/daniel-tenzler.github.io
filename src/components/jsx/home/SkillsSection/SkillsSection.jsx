import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	Title,
	SkillsContainer,
	SkillsTrack,
	SkillBubble,
} from './SkillsSection.styles';

export default function SkillsSection({ skills }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 600);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const allSkills = Object.values(skills).flat();
	const duplicatedSkills = [...allSkills, ...allSkills];

	const half = Math.ceil(allSkills.length / 2);
	const firstHalf = allSkills.slice(0, half);
	const secondHalf = allSkills.slice(half);

	const duplicatedFirstHalf = [...firstHalf, ...firstHalf];
	const duplicatedSecondHalf = [...secondHalf, ...secondHalf];

	return (
		<Section>
			<Title>Technologies & Skills</Title>
			<SkillsContainer>
				<SkillsTrack>
					{(isMobile ? duplicatedFirstHalf : duplicatedSkills).map(
						(skill, index) => (
							<SkillBubble key={index}>{skill}</SkillBubble>
						)
					)}
				</SkillsTrack>
				{isMobile && (
					<SkillsTrack reverse>
						{duplicatedSecondHalf.map((skill, index) => (
							<SkillBubble key={index}>{skill}</SkillBubble>
						))}
					</SkillsTrack>
				)}
			</SkillsContainer>
		</Section>
	);
}

SkillsSection.propTypes = {
	skills: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
