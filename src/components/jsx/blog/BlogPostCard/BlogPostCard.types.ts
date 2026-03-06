import type React from 'react';

export interface BlogPostCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	title: string;
	description: string;
	pubDate: Date;
	slug: string;
	readTime?: string;
	tags?: string[];
	noTopBorderRadius?: boolean;
	'client:load'?: boolean;
	'client:visible'?: boolean;
	'client:idle'?: boolean;
	'client:only'?: boolean;
}

// Extract standard HTML attributes from BlogPostCardProps
export type StandardHTMLAttributes = Omit<
	BlogPostCardProps,
	| 'client:load'
	| 'client:visible'
	| 'client:idle'
	| 'client:only'
	| 'title'
	| 'description'
	| 'pubDate'
	| 'slug'
	| 'readTime'
	| 'tags'
	| 'noTopBorderRadius'
>;

// Types for styled components
export interface CardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	$noTopBorderRadius?: boolean;
}
