export interface GitHubMetadata {
	stars: number;
	forks: number;
	description: string;
	lastUpdated: string;
}

export interface LanguageStats {
	total: number;
	languages: Record<string, number>;
}

export interface GitHubStatsProps {
	metadata: GitHubMetadata;
	commitCount: number;
	languageStats?: LanguageStats;
}
