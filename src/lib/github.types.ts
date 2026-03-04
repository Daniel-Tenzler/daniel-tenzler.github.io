/**
 * TypeScript types for GitHub API client
 */

/**
 * GitHub repository metadata response
 */
export interface GitHubRepoMetadata {
	stars: number;
	forks: number;
	description: string;
	lastUpdated: string;
}

/**
 * GitHub repository object from API
 */
export interface GitHubRepository {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	updated_at: string;
	private: boolean;
	fork: boolean;
	created_at: string;
	pushed_at: string;
	homepage: string | null;
	size: number;
}

/**
 * Language statistics object
 */
export interface LanguageStats {
	total: number;
	languages: Record<string, number>;
}

/**
 * Repository statistics response
 */
export interface GitHubRepositoryStats {
	metadata: {
		stars: number;
		forks: number;
		description: string;
		lastUpdated: string;
	};
	commitCount: number | null;
}

/**
 * Error response from GitHub API
 */
export interface GitHubApiError {
	message: string;
	documentation_url?: string;
	errors?: Array<{
		resource: string;
		field: string;
		code: string;
	}>;
}
