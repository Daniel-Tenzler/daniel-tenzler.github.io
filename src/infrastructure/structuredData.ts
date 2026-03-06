/**
 * Structured Data Utility Module
 * Provides helper functions for generating Schema.org structured data
 */

import { SITE_TITLE, SITE_DESCRIPTION } from 'src/consts/SiteData';

const AUTHOR_NAME = 'Daniel Tenzler';

// ============================================================================
// Type Definitions
// ============================================================================

/**
 * Base Schema.org JSON-LD context interface
 */
export interface JsonLdContext {
	'@context'?: string;
	'@type': string;
	[key: string]: unknown;
}

/**
 * Schema.org Person type
 */
export interface PersonSchema extends JsonLdContext {
	'@type': 'Person';
	'@id'?: string;
	name: string;
	url?: string;
	jobTitle?: string;
	description?: string;
	image?: ImageObjectSchema;
	sameAs?: string[];
}

/**
 * Schema.org ImageObject type
 */
export interface ImageObjectSchema {
	'@context'?: string;
	'@type': 'ImageObject';
	url: string;
}

/**
 * Schema.org Organization type
 */
export interface OrganizationSchema extends JsonLdContext {
	'@type': 'Organization';
	'@id'?: string;
	name: string;
	logo?: ImageObjectSchema;
}

/**
 * Schema.org WebPage type
 */
export interface WebPageSchema extends JsonLdContext {
	'@type': 'WebPage';
	name: string;
	description: string;
	url: string;
	inLanguage?: string;
	dateModified?: string;
}

/**
 * Schema.org WebSite type
 */
export interface WebSiteSchema extends JsonLdContext {
	'@type': 'WebSite';
	name: string;
	description?: string;
	url: string;
	publisher?: OrganizationSchema;
}

/**
 * Schema.org BlogPosting type
 */
export interface BlogPostingSchema extends JsonLdContext {
	'@type': 'BlogPosting';
	headline: string;
	description: string;
	author: PersonSchema | OrganizationSchema | BlogAuthor;
	publisher?: OrganizationSchema;
	image?: ImageObjectSchema;
	datePublished?: string;
	dateModified?: string;
	mainEntityOfPage?: WebPageSchema | WebPageReference;
	wordCount?: number;
	keywords?: string;
	articleSection?: string;
}

/**
 * Simplified author type for BlogPosting
 */
export interface BlogAuthor {
	'@type': 'Person' | 'Organization';
	'@id'?: string;
	name: string;
	url?: string;
}

/**
 * Simplified WebPage reference type
 */
export interface WebPageReference {
	'@type': 'WebPage';
	'@id'?: string;
}

/**
 * Schema.org ListItem type (for breadcrumbs)
 */
export interface ListItemSchema {
	'@type': 'ListItem';
	position: number;
	name: string;
	item: string;
}

/**
 * Schema.org BreadcrumbList type
 */
export interface BreadcrumbListSchema extends JsonLdContext {
	'@type': 'BreadcrumbList';
	itemListElement: ListItemSchema[];
}

/**
 * Union type for all Schema.org types
 */
export type SchemaOrg =
	| PersonSchema
	| ImageObjectSchema
	| OrganizationSchema
	| WebPageSchema
	| WebSiteSchema
	| BlogPostingSchema
	| BreadcrumbListSchema
	| BlogAuthor
	| WebPageReference
	| SoftwareApplicationSchema
	| CollectionPageSchema;

/**
 * Portfolio item for SoftwareApplication schema generation
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
 * ListItem schema for blog index (complex item type)
 */
export interface BlogIndexListItemSchema {
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
		itemListElement: BlogIndexListItemSchema[];
		itemListOrder: string;
		numberOfItems: number;
	};
	inLanguage: string;
}

/**
 * Options for generating Person schema
 */
export interface PersonSchemaOptions {
	name?: string;
	url?: string;
	jobTitle?: string;
	description?: string;
	image?: string;
	sameAs?: string[];
}

/**
 * Options for generating BlogPosting schema
 */
export interface BlogPostingSchemaOptions {
	headline?: string;
	description?: string;
	image?: string;
	datePublished?: Date | string;
	dateModified?: Date | string;
	url?: string;
	author?: string;
	readTime?: string;
	tags?: string[];
}

/**
 * Options for generating WebPage schema
 */
export interface WebPageSchemaOptions {
	name?: string;
	description?: string;
	url?: string;
	dateModified?: Date | string;
}

/**
 * Options for generating WebSite schema
 */
export interface WebSiteSchemaOptions {
	name?: string;
	description?: string;
	url?: string;
}

/**
 * Breadcrumb item structure
 */
export interface BreadcrumbItem {
	name: string;
	url: string;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Converts a relative URL to an absolute URL
 * @param url - The URL to convert
 * @param baseUrl - The base URL to use for relative URLs
 * @returns Absolute URL
 */
function toAbsoluteUrl(
	url: string | undefined,
	baseUrl: string
): string | undefined {
	if (!url) return url;
	return url.startsWith('http') ? url : new URL(url, baseUrl).href;
}

// ============================================================================
// Schema Generation Functions
// ============================================================================

/**
 * Generates a Person schema for the homepage/author
 * @param baseUrl - The base URL for the site
 * @param options - Person schema options
 * @returns Schema.org Person object
 */
export function generatePersonSchema(
	baseUrl: string,
	options: PersonSchemaOptions = {}
): PersonSchema {
	const {
		name = AUTHOR_NAME,
		url = baseUrl,
		jobTitle = 'Full-Stack Web Developer',
		description = SITE_DESCRIPTION,
		image: imageUrl,
		sameAs = [],
	} = options;

	const personSchema: PersonSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${url}#person`,
		name: name,
		url: url,
		jobTitle: jobTitle,
		description: description,
	};

	if (imageUrl) {
		const absoluteUrl = toAbsoluteUrl(imageUrl, baseUrl);
		if (absoluteUrl) {
			personSchema.image = {
				'@type': 'ImageObject',
				url: absoluteUrl,
			};
		}
	}

	if (sameAs.length > 0) {
		personSchema.sameAs = sameAs;
	}

	return personSchema;
}

/**
 * Generates a BlogPosting schema for blog posts
 * @param baseUrl - The base URL for the site
 * @param options - BlogPosting schema options
 * @returns Schema.org BlogPosting object or null if validation fails
 */
export function generateBlogPostingSchema(
	baseUrl: string,
	options: BlogPostingSchemaOptions = {}
): BlogPostingSchema | null {
	const {
		headline,
		description,
		image: imageUrl,
		datePublished,
		dateModified,
		url: postUrl,
		author = AUTHOR_NAME,
		readTime,
		tags = [],
	} = options;

	// Validate required fields
	if (!headline) {
		console.warn(
			'generateBlogPostingSchema: Missing required field "headline". Returning null.'
		);
		return null;
	}

	if (!description) {
		console.warn(
			'generateBlogPostingSchema: Missing required field "description". Returning null.'
		);
		return null;
	}

	const blogPostingSchema: BlogPostingSchema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: headline,
		description: description,
		author: {
			'@type': 'Person',
			'@id': `${baseUrl}#person`,
			name: author,
			url: baseUrl,
		},
		publisher: {
			'@type': 'Organization',
			'@id': `${baseUrl}#org`,
			name: AUTHOR_NAME,
			logo: {
				'@type': 'ImageObject',
				url:
					toAbsoluteUrl('/icons/favicon.svg', baseUrl) ??
					'/icons/favicon.svg',
			},
		},
	};

	if (imageUrl) {
		const absoluteUrl = toAbsoluteUrl(imageUrl, baseUrl);
		if (absoluteUrl) {
			blogPostingSchema.image = {
				'@type': 'ImageObject',
				url: absoluteUrl,
			};
		}
	}

	if (datePublished) {
		blogPostingSchema.datePublished = new Date(datePublished).toISOString();
	}

	if (dateModified) {
		blogPostingSchema.dateModified = new Date(dateModified).toISOString();
	}

	if (postUrl) {
		blogPostingSchema.mainEntityOfPage = {
			'@type': 'WebPage',
			'@id': postUrl,
		};
	}

	if (readTime) {
		// Extract numeric value from readTime string (e.g., "5 min read" -> 5)
		const numericReadTime = parseInt(
			String(readTime).replace(/\D/g, ''),
			10
		);
		if (!isNaN(numericReadTime)) {
			blogPostingSchema.wordCount = numericReadTime * 200; // Approximate 200 words per minute
		}
	}

	if (tags.length > 0) {
		blogPostingSchema.keywords = tags.join(', ');
		blogPostingSchema.articleSection = tags[0] || 'Blog';
	}

	return blogPostingSchema;
}

/**
 * Generates a WebPage schema
 * @param baseUrl - The base URL for the site
 * @param options - WebPage schema options
 * @returns Schema.org WebPage object
 */
export function generateWebPageSchema(
	baseUrl: string,
	options: WebPageSchemaOptions = {}
): WebPageSchema {
	const {
		name = SITE_TITLE,
		description = SITE_DESCRIPTION,
		url = baseUrl,
		dateModified,
	} = options;

	const webPageSchema: WebPageSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: name,
		description: description,
		url: url,
		inLanguage: 'en-US',
	};

	if (dateModified) {
		webPageSchema.dateModified = new Date(dateModified).toISOString();
	}

	return webPageSchema;
}

/**
 * Generates a WebSite schema
 * @param baseUrl - The base URL for the site
 * @param options - WebSite schema options
 * @returns Schema.org WebSite object
 */
export function generateWebSiteSchema(
	baseUrl: string,
	options: WebSiteSchemaOptions = {}
): WebSiteSchema {
	const {
		name = SITE_TITLE,
		description = SITE_DESCRIPTION,
		url = baseUrl,
	} = options;

	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: name,
		description: description,
		url: url,
		publisher: {
			'@type': 'Organization',
			name: AUTHOR_NAME,
			logo: {
				'@type': 'ImageObject',
				url:
					toAbsoluteUrl('/icons/favicon.svg', baseUrl) ??
					'/icons/favicon.svg',
			},
		},
	};
}

/**
 * Generates a BreadcrumbList schema
 * @param items - Array of breadcrumb items
 * @returns Schema.org BreadcrumbList object
 */
export function generateBreadcrumbSchema(
	items: BreadcrumbItem[]
): BreadcrumbListSchema {
	const itemList: ListItemSchema[] = items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: item.url,
	}));

	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: itemList,
	};
}

/**
 * Generates SoftwareApplication schema for portfolio items
 * @param item - Portfolio item object
 * @param baseUrl - Site base URL
 * @returns SoftwareApplication structured data
 */
export function generatePortfolioItemSchema(
	item: PortfolioItemSchema,
	baseUrl: string
): SoftwareApplicationSchema {
	const schema: SoftwareApplicationSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: item.title,
		description: item.description,
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
		author: {
			'@type': 'Person',
			name: AUTHOR_NAME,
			url: baseUrl,
		},
		publisher: {
			'@type': 'Organization',
			name: AUTHOR_NAME,
			url: baseUrl,
		},
		inLanguage: 'en-US',
	};

	// Add technologies as keywords if available
	if (item.technologies && item.technologies.length > 0) {
		schema.keywords = item.technologies.join(', ');
	}

	// Add application URL (GitHub or live URL)
	if (item.liveUrl) {
		schema.url = item.liveUrl;
	} else if (item.githubUrl) {
		schema.url = item.githubUrl;
	}

	// Add download/screenshot URL
	if (item.image) {
		schema.screenshot = item.image.startsWith('http')
			? item.image
			: item.image.startsWith('/')
				? new URL(item.image, baseUrl).href
				: item.image;
	}

	// Add release date if available
	if (item.date) {
		// Parse dates like "2025-05" or "2024-06"
		const [year, month] = item.date.split('-');
		if (year && month) {
			schema.datePublished = new Date(
				parseInt(year, 10),
				parseInt(month, 10) - 1
			).toISOString();
		}
	}

	// Add source code repository
	if (item.githubUrl) {
		schema.sourceCode = {
			'@type': 'SoftwareSourceCode',
			codeRepository: item.githubUrl,
		};
	}

	return schema;
}

/**
 * Generates CollectionPage schema with ItemList for blog index
 * @param posts - Array of blog post objects
 * @param baseUrl - Site base URL
 * @returns CollectionPage structured data
 */
export function generateBlogIndexSchema(
	posts: import('astro:content').CollectionEntry<'blog'>[],
	baseUrl: string
): CollectionPageSchema {
	const itemList: BlogIndexListItemSchema[] = posts
		.slice(0, 10) // Limit to 10 most recent posts
		.map((post, index) => {
			const url = new URL(`/blog/${post.id}`, baseUrl).href;
			return {
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'BlogPosting',
					headline: post.data.title,
					description: post.data.description,
					url: url,
					datePublished: new Date(post.data.pubDate).toISOString(),
					author: {
						'@type': 'Person',
						name: post.data.author || AUTHOR_NAME,
					},
					image: post.data.heroImage
						? post.data.heroImage.startsWith('http')
							? post.data.heroImage
							: new URL(post.data.heroImage, baseUrl).href
						: undefined,
				},
			};
		});

	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Blog - Daniel Tenzler',
		description:
			'Blog posts about web development, software engineering, and programming',
		url: new URL('/blog', baseUrl).href,
		author: {
			'@type': 'Person',
			name: AUTHOR_NAME,
			url: baseUrl,
		},
		publisher: {
			'@type': 'Organization',
			name: AUTHOR_NAME,
			logo: {
				'@type': 'ImageObject',
				url: new URL('/icons/favicon.svg', baseUrl).href,
			},
		},
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: itemList,
			itemListOrder: 'https://schema.org/ItemListOrderDescending',
			numberOfItems: itemList.length,
		},
		inLanguage: 'en-US',
	};
}
