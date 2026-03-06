export interface Skill {
	name: string;
	category: string;
}

export interface SkillCategoryInfo {
	label: string;
	colorVar: string;
}

export interface SkillCategories {
	[key: string]: SkillCategoryInfo;
}

export interface SkillsSectionProps {
	skills: Skill[];
	categories: SkillCategories;
}

export interface CategoryTitleProps {
	$color: string;
}

export interface SkillBubbleProps {
	$color?: string;
}
