import React from 'react';
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
import type {
	Skill,
	SkillCategoryInfo,
	SkillCategories,
	SkillsSectionProps,
} from './SkillsSection.types';

export type { Skill, SkillCategoryInfo, SkillCategories, SkillsSectionProps };

export default function SkillsSection({
	skills,
	categories,
}: SkillsSectionProps) {
	// Group skills by category
	const groupedSkills = skills.reduce<Record<string, Skill[]>>(
		(acc, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		},
		{}
	);

	// Convert to array for splitting
	const categoryEntries = Object.entries(groupedSkills);
	const midpoint = Math.ceil(categoryEntries.length / 2);
	const firstColumnCategories = categoryEntries.slice(0, midpoint);
	const secondColumnCategories = categoryEntries.slice(midpoint);

	const renderCategories = (categoriesArray: Array<[string, Skill[]]>) => {
		return categoriesArray.map(([categoryKey, categorySkills]) => {
			const category = categories[categoryKey];
			if (!category) return null;

			return (
				<CategorySection key={categoryKey}>
					<CategoryTitle $color={category.colorVar}>
						{category.label}
					</CategoryTitle>
					<SkillsGrid>
						{categorySkills.map((skill) => (
							<SkillBubble
								key={skill.name}
								$color={category.colorVar}
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
