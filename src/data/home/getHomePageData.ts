import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { SITE_DESCRIPTION, SITE_URL } from 'src/consts/SiteData';
import portfolioData from 'src/data/portfolio/portfolio.json';
import { journeyData } from 'src/data/journey/journey';
import { skillsData, skillCategories } from 'src/data/skills/skills';
import {
	prepareResponsiveImageData,
	PORTFOLIO_IMAGE_WIDTHS,
	PORTFOLIO_IMAGE_SIZES,
} from 'src/infrastructure/imageUtils';
import { generatePersonSchema } from 'src/infrastructure/structuredData';

const getLatestPosts = async () => {
	return (await getCollection('blog'))
		.sort(
			(a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) =>
				b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
		)
		.slice(0, 2)
		.map((post: CollectionEntry<'blog'>) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: new Date(post.data.pubDate),
			heroImage: post.data.heroImage ?? undefined,
			slug: post.id,
			readTime: post.data.readTime ?? '',
			tags: post.data.tags ?? [],
		}));
};

const getFeaturedProjects = () => {
	return portfolioData.projects
		.filter((project) => project.featured)
		.map((project) => ({
			...project,
			responsiveImage: prepareResponsiveImageData(
				project.image,
				PORTFOLIO_IMAGE_WIDTHS,
				PORTFOLIO_IMAGE_SIZES
			),
		}));
};

export const getHomePageData = async () => {
	const latestPosts = await getLatestPosts();

	return {
		latestPosts,
		aboutParagraphs: [
			"I'm a software developer interested in building fast, accessible, and understandable web applications. This site is where I collect projects, notes, and experiments while I keep learning by building.",
		],
		featuredProjects: getFeaturedProjects(),
		journeyData,
		skillsData,
		skillCategories,
		personSchema: generatePersonSchema(SITE_URL, {
			jobTitle: 'Software Developer',
			description: SITE_DESCRIPTION,
			sameAs: ['https://github.com/daniel-tenzler'],
		}),
	};
};
