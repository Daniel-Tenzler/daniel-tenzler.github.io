export interface PortfolioItem {
	id: string;
	title: string;
	description: string;
	longDescription?: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	image?: string;
	featured: boolean;
	date?: string;
}

export interface PortfolioData {
	projects: PortfolioItem[];
}

export type PortfolioItems = PortfolioItem[];
