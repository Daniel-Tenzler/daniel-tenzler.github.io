import fetch from 'node-fetch';

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'daniel-tenzler';
const REPO_NAME = 'daniel-tenzler.github.io';

/**
 * Fetches repository metadata from GitHub API
 * @returns {Promise<Object>} Repository metadata
 */
export async function getRepoMetadata() {
	try {
		const response = await fetch(
			`${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}`,
			{
				headers: {
					Accept: 'application/vnd.github.v3+json',
					Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status}`);
		}

		const data = await response.json();
		return {
			stars: data.stargazers_count,
			forks: data.forks_count,
			description: data.description,
			lastUpdated: data.updated_at,
		};
	} catch (error) {
		console.error('Error fetching repository metadata:', error);
		return null;
	}
}

/**
 * Fetches commit count from GitHub API
 * @returns {Promise<number>} Total number of commits
 */
export async function getCommitCount() {
	try {
		const response = await fetch(
			`${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=1`,
			{
				headers: {
					Accept: 'application/vnd.github.v3+json',
					Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status}`);
		}

		// Get the total count from the Link header
		const linkHeader = response.headers.get('Link');
		if (!linkHeader) {
			return 1; // If no Link header, assume at least 1 commit
		}

		const match = linkHeader.match(/page=(\d+)>; rel="last"/);
		return match ? parseInt(match[1], 10) : 1;
	} catch (error) {
		console.error('Error fetching commit count:', error);
		return null;
	}
}
/**
 * Fetches all public repositories for a given GitHub username
 * @param {string} username - GitHub username
 * @returns {Promise<Array|null>} Array of repository objects or null on error
 */
export async function fetchRepositories(username) {
	let page = 1;
	let allRepos = [];
	let result;

	try {
		do {
			const response = await fetch(
				`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
				{
					headers: {
						Accept: 'application/vnd.github.v3+json',
						Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
					},
				}
			);

			if (!response.ok) {
				const errorBody = await response.json().catch(() => ({}));
				console.log('GitHub API error:', response.status, errorBody);
				return null;
			}

			result = await response.json();
			allRepos = allRepos.concat(result);
			page++;
		} while (Array.isArray(result) && result.length === 100);

		return allRepos;
	} catch (error) {
		console.log('Error fetching repositories:', error);
		return null;
	}
}

/**
 * Processes repository data to get language statistics
 * @param {Array} repos - Array of repository objects
 * @returns {Object} Object containing language statistics
 */
export function getLanguageStats(repos) {
	if (repos === undefined || repos === null) return null;
	const stats = {
		total: repos.length,
		languages: {},
	};

	for (const repo of repos) {
		const lang = repo.language || 'Unknown';
		stats.languages[lang] = (stats.languages[lang] || 0) + 1;
	}

	return stats;
}

/**
 * Fetches repository metadata and statistics for a given GitHub username
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} Repository metadata and statistics
 */
export async function fetchRepositoryStats(username) {
	try {
		const response = await fetch(
			`https://api.github.com/users/${username}/repos?per_page=100`,
			{
				headers: {
					Accept: 'application/vnd.github.v3+json',
					Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
				},
			}
		);

		if (!response.ok) {
			console.error('GitHub API error:', response.status);
			return null;
		}

		const repos = await response.json();

		// Calculate total stars and forks
		const metadata = repos.reduce(
			(acc, repo) => ({
				stars: acc.stars + (repo.stargazers_count || 0),
				forks: acc.forks + (repo.forks_count || 0),
				description: repo.description || 'No description available',
				lastUpdated: repo.updated_at,
			}),
			{ stars: 0, forks: 0, description: '', lastUpdated: '' }
		);

		// Get commit count for the most active repository
		const commitCount = await getCommitCount(username, repos[0]);

		return {
			metadata,
			commitCount,
		};
	} catch (error) {
		console.error('Error fetching repository stats:', error);
		throw error;
	}
}
