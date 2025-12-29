import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	Title,
	SkillsContainer,
	SkillsColumn,
	CategorySection,
	CategoryTitle,
	SkillsGrid,
	SkillBubble,
} from './SkillsSection.styles';

export default function SkillsSection({ skills, categories }) {
	// Group skills by category
	const groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {});

	// Convert to array for splitting
	const categoryEntries = Object.entries(groupedSkills);
	const midpoint = Math.ceil(categoryEntries.length / 2);
	const firstColumnCategories = categoryEntries.slice(0, midpoint);
	const secondColumnCategories = categoryEntries.slice(midpoint);

	const renderCategories = (categoriesArray) => {
		return categoriesArray.map(([categoryKey, categorySkills]) => {
			const category = categories[categoryKey];
			if (!category) return null;

			return (
				<CategorySection key={categoryKey}>
					<CategoryTitle $color={category.color}>
						{category.label}
					</CategoryTitle>
					<SkillsGrid>
						{categorySkills.map((skill) => (
							<SkillBubble
								key={skill.name}
								$color={category.color}
							>
								{skill.name}
							</SkillBubble>
						))}
					</SkillsGrid>
				</CategorySection>
			);
		});
	};

	return (
		<Section>
			<Title>Technologies & Skills</Title>
			<SkillsContainer>
				<SkillsColumn>
					{renderCategories(firstColumnCategories)}
				</SkillsColumn>
				<SkillsColumn>
					{renderCategories(secondColumnCategories)}
				</SkillsColumn>
			</SkillsContainer>
		</Section>
	);
}

SkillsSection.propTypes = {
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
		})
	).isRequired,
	categories: PropTypes.objectOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
		})
	).isRequired,
};
