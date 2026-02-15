export type SkillCategory = 'languages' | 'frameworks' | 'tools' | 'testing';

export interface Skill {
	name: string;
	category: SkillCategory;
}

export interface SkillCategoryInfo {
	label: string;
	colorVar: string;
}

export interface SkillCategories {
	[key: string]: SkillCategoryInfo;
}

export type SkillsData = Skill[];
