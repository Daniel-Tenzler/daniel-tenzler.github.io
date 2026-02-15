import React from 'react';
import {
	StatsContainer,
	StatsGrid,
	StatCard,
	StatValue,
	StatLabel,
	Title,
	Description,
	LanguageSection,
	LanguageBar,
	LanguageBarSegment,
	LanguageLegend,
	LanguageBadge,
	LanguageCount,
	SectionDivider,
	StatsWrapper,
	GlowEffect,
} from './GitHubStats.styles';

// Mapping of language names to CSS variable names
const LANGUAGE_CSS_VARS: Record<string, string> = {
	JavaScript: '--lang-javascript',
	TypeScript: '--lang-typescript',
	Lua: '--lang-lua',
	Kotlin: '--lang-kotlin',
	Java: '--lang-java',
	Python: '--lang-python',
	'C++': '--lang-cpp',
	'C#': '--lang-csharp',
	Go: '--lang-go',
	Rust: '--lang-rust',
	HTML: '--lang-html',
	CSS: '--lang-css',
	Shell: '--lang-shell',
	Ruby: '--lang-ruby',
	PHP: '--lang-php',
	Swift: '--lang-swift',
	Dart: '--lang-dart',
};

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

export default function GitHubStats({
	metadata,
	commitCount,
	languageStats,
}: GitHubStatsProps) {
	// Calculate total for percentage
	const totalLanguages = languageStats
		? Object.values(languageStats.languages).reduce(
				(sum, count) => sum + count,
				0
			)
		: 0;

	// Sort languages by count (descending)
	const sortedLanguages = languageStats
		? Object.entries(languageStats.languages).sort((a, b) => b[1] - a[1])
		: [];

	return (
		<StatsWrapper>
			<GlowEffect />
			<Title>Repository Statistics</Title>
			<Description>{metadata.description}</Description>

			<StatsContainer>
				<StatsGrid>
					{metadata.stars > 0 && (
						<StatCard>
							<StatValue>{metadata.stars}</StatValue>
							<StatLabel>Stars</StatLabel>
						</StatCard>
					)}
					{metadata.forks > 0 && (
						<StatCard>
							<StatValue>{metadata.forks}</StatValue>
							<StatLabel>Forks</StatLabel>
						</StatCard>
					)}
					{commitCount > 0 && (
						<StatCard>
							<StatValue>{commitCount}</StatValue>
							<StatLabel>Commits</StatLabel>
						</StatCard>
					)}
					<StatCard>
						<StatValue>
							{
								new Date(metadata.lastUpdated)
									.toISOString()
									.split('T')[0]
							}
						</StatValue>
						<StatLabel>Last Updated</StatLabel>
					</StatCard>
				</StatsGrid>
			</StatsContainer>

			{languageStats && sortedLanguages.length > 0 && (
				<>
					<SectionDivider />
					<LanguageSection>
						<Description>
							Language Distribution Across All Repositories
						</Description>

						{/* Visual bar chart */}
						<LanguageBar>
							{sortedLanguages.map(([lang, count]) => {
								const percentage =
									(count / totalLanguages) * 100;
								const cssVar = LANGUAGE_CSS_VARS[lang] || undefined;
								return (
									<LanguageBarSegment
										key={lang}
										$percentage={percentage}
										$color={cssVar}
										title={`${lang}: ${count} repos (${percentage.toFixed(
											1
										)}%)`}
									/>
								);
							})}
						</LanguageBar>

						{/* Legend with badges */}
						<LanguageLegend>
							{sortedLanguages.map(([lang, count]) => {
								const cssVar = LANGUAGE_CSS_VARS[lang] || undefined;
								return (
									<LanguageBadge key={lang} $color={cssVar}>
										<span className="dot" />
										<span className="name">{lang}</span>
										<LanguageCount>{count}</LanguageCount>
									</LanguageBadge>
								);
							})}
						</LanguageLegend>
					</LanguageSection>
				</>
			)}
		</StatsWrapper>
	);
}
