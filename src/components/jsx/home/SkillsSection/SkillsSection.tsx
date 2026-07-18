import React from 'react';
import SectionHeader from '@/components/jsx/ui/SectionHeader/SectionHeader';
import {
	Section,
	Grid,
	CategoryCard,
	CategoryTitle,
	SkillsList,
	SkillBubble,
} from './SkillsSection.styles';
import type {
	Skill,
	SkillCategoryInfo,
	SkillCategories,
	SkillsSectionProps,
} from './SkillsSection.types';

export type { Skill, SkillCategoryInfo, SkillCategories, SkillsSectionProps };

const CATEGORY_ORDER = ['languages', 'frameworks', 'tools', 'testing'] as const;

export default function SkillsSection({
	skills,
	categories,
}: SkillsSectionProps) {
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

	return (
		<Section>
			<SectionHeader
				title="Toolbox"
				titleId="skills-heading"
			/>
			<Grid>
				{CATEGORY_ORDER.map((categoryKey) => {
					const category = categories[categoryKey];
					if (!category) return null;

					const categorySkills = groupedSkills[categoryKey] ?? [];

					return (
						<CategoryCard key={categoryKey}>
							<CategoryTitle $color={category.colorVar}>
								{category.label}
							</CategoryTitle>
							<SkillsList>
								{categorySkills.map((skill) => (
									<SkillBubble
										key={skill.name}
										$color={category.colorVar}
									>
										{skill.name}
									</SkillBubble>
								))}
							</SkillsList>
						</CategoryCard>
					);
				})}
			</Grid>
		</Section>
	);
}
