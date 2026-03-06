export interface BlogPostData {
	id: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		heroImage?: string;
		readTime?: string;
		tags?: string[];
	};
}

export interface BlogContainerProps {
	posts: BlogPostData[];
	allTags: string[];
}
