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
import {
	getRepoMetadata,
	getCommitCount,
	fetchRepositories,
	getLanguageStats,
} from 'src/lib/github';

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

const getGitHubStats = async () => {
	const startTime = Date.now();

	try {
		const [metadata, commitCount, repos] = await Promise.all([
			getRepoMetadata().catch((err) => {
				console.warn('Repo metadata failed, using null:', err.message);
				return null;
			}),
			getCommitCount().catch((err) => {
				console.warn('Commit count failed, using null:', err.message);
				return null;
			}),
			fetchRepositories('daniel-tenzler').catch((err) => {
				console.warn(
					'Repository fetch failed, using null:',
					err.message
				);
				return null;
			}),
		]);

		const endTime = Date.now();
		console.log(
			`Parallel GitHub API calls completed in ${endTime - startTime}ms`
		);

		return {
			metadata,
			commitCount,
			languageStats: repos ? getLanguageStats(repos) : null,
		};
	} catch (error) {
		console.error('Unexpected error in GitHub API calls:', error);

		return {
			metadata: null,
			commitCount: null,
			languageStats: null,
		};
	}
};

export const getHomePageData = async () => {
	const [latestPosts, githubStats] = await Promise.all([
		getLatestPosts(),
		getGitHubStats(),
	]);

	return {
		latestPosts,
		aboutParagraphs: [
			"I'm a full-stack web developer focused on building fast, accessible, and user-friendly apps. This site is where I test out new web technologies when I have the time.",
		],
		featuredProjects: getFeaturedProjects(),
		journeyData,
		skillsData,
		skillCategories,
		personSchema: generatePersonSchema(SITE_URL, {
			jobTitle: 'Full-Stack Web Developer',
			description: SITE_DESCRIPTION,
			sameAs: ['https://github.com/daniel-tenzler'],
		}),
		...githubStats,
	};
};
