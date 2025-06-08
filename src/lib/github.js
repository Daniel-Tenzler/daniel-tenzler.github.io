import fetch from 'node-fetch';

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'danieltenz';
const REPO_NAME = 'danieltenz.github.io';

/**
 * Fetches repository metadata from GitHub API
 * @returns {Promise<Object>} Repository metadata
 */
export async function getRepoMetadata() {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${import.meta.env.GITHUB_TOKEN}`
                }
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
            lastUpdated: data.updated_at
        };
    } catch (error) {
        console.error('Error fetching repository metadata:', error);
        return {
            stars: 0,
            forks: 0,
            description: 'Error fetching repository data',
            lastUpdated: new Date().toISOString()
        };
    }
}

/**
 * Fetches commit count from GitHub API
 * @returns {Promise<number>} Total number of commits
 */
export async function getCommitCount() {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=1`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${import.meta.env.GITHUB_TOKEN}`
                }
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
        return 0;
    }
}