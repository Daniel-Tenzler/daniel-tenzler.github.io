export interface ProjectImageData {
	jpeg: {
		src: string;
		srcset: string;
	};
	webp: {
		src: string;
		srcset: string;
	};
	sizes: string;
}

export interface ProjectData {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	responsiveImage: ProjectImageData;
	githubUrl?: string;
	liveUrl?: string;
}

export interface PortfolioPreviewContentProps {
	projects: ProjectData[];
}
