export interface LatestPostData {
	title: string;
	description: string;
	pubDate: Date;
	slug: string;
	readTime: string;
	tags: string[];
}

export interface LatestPostsSectionProps {
	posts: LatestPostData[];
}
