export interface BlogHeaderProps {
	allTags: string[];
	selectedTags: string[];
	onTagSelect: (tags: string[]) => void;
	feedUrl: string;
}
