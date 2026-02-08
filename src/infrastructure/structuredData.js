/**
 * Structured Data Utility Module
 * Provides helper functions for generating Schema.org structured data
 */

import { SITE_TITLE, SITE_DESCRIPTION } from 'src/consts/SiteData.js';

const AUTHOR_NAME = 'Daniel Tenzler';

/**
 * Converts a relative URL to an absolute URL
 * @param {string} url - The URL to convert
 * @param {string} baseUrl - The base URL to use for relative URLs
 * @returns {string} Absolute URL
 */
function toAbsoluteUrl(url, baseUrl) {
	if (!url) return url;
	return url.startsWith('http') ? url : new URL(url, baseUrl).href;
}

/**
 * Generates a Person schema for the homepage/author
 * @param {string} baseUrl - The base URL for the site
 * @param {Object} options - Person schema options
 * @param {string} [options.name] - Person's name
 * @param {string} [options.url] - Person's URL
 * @param {string} [options.jobTitle] - Person's job title
 * @param {string} [options.description] - Person's description
 * @param {string} [options.image] - Person's image URL
 * @param {string[]} [options.sameAs] - Array of social media URLs
 * @returns {Object} Schema.org Person object
 */
export function generatePersonSchema(baseUrl, options = {}) {
	const {
		name = AUTHOR_NAME,
		url = baseUrl,
		jobTitle = 'Full-Stack Web Developer',
		description = SITE_DESCRIPTION,
		image = undefined,
		sameAs = [],
	} = options;

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${url}#person`,
		name: name,
		url: url,
		jobTitle: jobTitle,
		description: description,
	};

	if (image) {
		personSchema.image = {
			'@type': 'ImageObject',
			url: toAbsoluteUrl(image, baseUrl),
		};
	}

	if (sameAs.length > 0) {
		personSchema.sameAs = sameAs;
	}

	return personSchema;
}

/**
 * Generates a BlogPosting schema for blog posts
 * @param {string} baseUrl - The base URL for the site
 * @param {Object} options - BlogPosting schema options
 * @param {string} options.headline - Blog post title (required)
 * @param {string} options.description - Blog post description (required)
 * @param {string} [options.image] - Blog post image URL
 * @param {Date|string} [options.datePublished] - Publication date
 * @param {Date|string} [options.dateModified] - Last modified date
 * @param {string} [options.url] - Blog post URL
 * @param {string} [options.author] - Author name
 * @param {string} [options.readTime] - Read time (e.g., "5 min read")
 * @param {string[]} [options.tags] - Blog post tags
 * @returns {Object|null} Schema.org BlogPosting object or null if validation fails
 */
export function generateBlogPostingSchema(baseUrl, options = {}) {
	const {
		headline,
		description,
		image,
		datePublished,
		dateModified,
		url,
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

	const blogPostingSchema = {
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
				url: toAbsoluteUrl('/icons/favicon.svg', baseUrl),
			},
		},
	};

	if (image) {
		blogPostingSchema.image = {
			'@type': 'ImageObject',
			url: toAbsoluteUrl(image, baseUrl),
		};
	}

	if (datePublished) {
		blogPostingSchema.datePublished = new Date(datePublished).toISOString();
	}

	if (dateModified) {
		blogPostingSchema.dateModified = new Date(dateModified).toISOString();
	}

	if (url) {
		blogPostingSchema.mainEntityOfPage = {
			'@type': 'WebPage',
			'@id': url,
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
 * @param {string} baseUrl - The base URL for the site
 * @param {Object} options - WebPage schema options
 * @param {string} options.name - Page name
 * @param {string} options.description - Page description
 * @param {string} options.url - Page URL
 * @param {Date|string} options.dateModified - Last modified date
 * @returns {Object} Schema.org WebPage object
 */
export function generateWebPageSchema(baseUrl, options = {}) {
	const {
		name = SITE_TITLE,
		description = SITE_DESCRIPTION,
		url = baseUrl,
		dateModified,
	} = options;

	const webPageSchema = {
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
 * @param {string} baseUrl - The base URL for the site
 * @param {Object} options - WebSite schema options
 * @param {string} options.name - Site name
 * @param {string} options.description - Site description
 * @param {string} options.url - Site URL
 * @returns {Object} Schema.org WebSite object
 */
export function generateWebSiteSchema(baseUrl, options = {}) {
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
				url: toAbsoluteUrl('/icons/favicon.svg', baseUrl),
			},
		},
	};
}

/**
 * Generates a BreadcrumbList schema
 * @param {Object[]} items - Array of breadcrumb items
 * @param {string} items[].name - Item name
 * @param {string} items[].url - Item URL
 * @returns {Object} Schema.org BreadcrumbList object
 */
export function generateBreadcrumbSchema(items) {
	const itemList = items.map((item, index) => ({
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
