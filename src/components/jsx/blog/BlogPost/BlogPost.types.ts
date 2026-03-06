import React from 'react';

export interface BlogPostProps {
	title: string;
	pubDate: Date;
	updatedDate?: Date;
	heroImage?: string;
	readTime?: string;
	tags?: string[];
	author?: string;
	children: React.ReactNode;
}
