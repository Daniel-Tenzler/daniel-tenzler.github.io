export interface TagFilterProps {
	allTags: string[];
	selectedTags: string[];
	onTagSelect: (tags: string[]) => void;
}

export interface TagButtonProps {
	active?: boolean;
}
