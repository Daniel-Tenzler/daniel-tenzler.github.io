export interface ProjectItem {
	title: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	image?: string;
	description: string;
}

export interface ProjectProps {
	item: ProjectItem;
}
