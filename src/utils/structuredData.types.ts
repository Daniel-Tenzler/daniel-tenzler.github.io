/**
 * TypeScript types for utils/structuredData
 */

/**
 * Portfolio item for schema generation
 */
export interface PortfolioItemSchema {
	title: string;
	description: string;
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
	image?: string;
	date?: string;
}

/**
 * Blog post data for schema generation
 */
export interface BlogPostData {
	slug: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		heroImage?: string;
		author?: string;
	};
}

/**
 * JSON-LD Schema.org base context
 */
export interface JsonLdContext {
	'@context': string;
	'@type': string;
	[key: string]: unknown;
}

/**
 * SoftwareApplication schema for portfolio items
 */
export interface SoftwareApplicationSchema extends JsonLdContext {
	'@type': 'SoftwareApplication';
	name: string;
	description: string;
	applicationCategory: string;
	operatingSystem: string;
	offers: {
		'@type': string;
		price: string;
		priceCurrency: string;
	};
	author: {
		'@type': string;
		name: string;
		url: string;
	};
	publisher: {
		'@type': string;
		name: string;
		url: string;
	};
	inLanguage: string;
	keywords?: string;
	url?: string;
	screenshot?: string;
	datePublished?: string;
	sourceCode?: {
		'@type': string;
		codeRepository: string;
	};
}

/**
 * ListItem schema for blog index
 */
export interface ListItemSchema {
	'@type': 'ListItem';
	position: number;
	item: {
		'@type': 'BlogPosting';
		headline: string;
		description: string;
		url: string;
		datePublished: string;
		author: {
			'@type': 'Person';
			name: string;
		};
		image?: string;
	};
}

/**
 * CollectionPage schema for blog index
 */
export interface CollectionPageSchema extends JsonLdContext {
	'@type': 'CollectionPage';
	name: string;
	description: string;
	url: string;
	author: {
		'@type': 'Person';
		name: string;
		url: string;
	};
	publisher: {
		'@type': 'Organization';
		name: string;
		logo: {
			'@type': 'ImageObject';
			url: string;
		};
	};
	mainEntity: {
		'@type': 'ItemList';
		itemListElement: ListItemSchema[];
		itemListOrder: string;
		numberOfItems: number;
	};
	inLanguage: string;
}
