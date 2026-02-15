import type {
	PortfolioItemSchema,
	SoftwareApplicationSchema,
	BlogPostData,
	CollectionPageSchema,
	ListItemSchema,
} from './structuredData.types';

/**
 * Generates SoftwareApplication schema for portfolio items
 * @param {PortfolioItemSchema} item - Portfolio item object
 * @param {string} baseUrl - Site base URL
 * @returns {SoftwareApplicationSchema} SoftwareApplication structured data
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
			name: 'Daniel Tenzler',
			url: baseUrl,
		},
		publisher: {
			'@type': 'Organization',
			name: 'Daniel Tenzler',
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
			schema.datePublished = new Date(parseInt(year, 10), parseInt(month, 10) - 1).toISOString();
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
 * @param {BlogPostData[]} posts - Array of blog post objects
 * @param {string} baseUrl - Site base URL
 * @returns {CollectionPageSchema} CollectionPage structured data
 */
export function generateBlogIndexSchema(
	posts: BlogPostData[],
	baseUrl: string
): CollectionPageSchema {
	const itemList: ListItemSchema[] = posts
		.slice(0, 10) // Limit to 10 most recent posts
		.map((post, index) => {
			const url = new URL(`/blog/${post.slug}`, baseUrl).href;
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
						name: post.data.author || 'Daniel Tenzler',
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
			name: 'Daniel Tenzler',
			url: baseUrl,
		},
		publisher: {
			'@type': 'Organization',
			name: 'Daniel Tenzler',
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

/**
 * Type exports
 */
export type {
	BlogPostData,
	CollectionPageSchema,
	JsonLdContext,
	ListItemSchema,
	PortfolioItemSchema,
	SoftwareApplicationSchema,
} from './structuredData.types';
