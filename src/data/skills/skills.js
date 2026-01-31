// Define skill categories with their associated CSS variable names
export const skillCategories = {
	languages: {
		label: 'Languages',
		colorVar: '--skill-languages',
	},
	frameworks: {
		label: 'Frameworks & Libraries',
		colorVar: '--skill-frameworks',
	},
	tools: {
		label: 'Tools & Platforms',
		colorVar: '--skill-tools',
	},
	testing: {
		label: 'Testing',
		colorVar: '--skill-testing',
	},
};

// Skills data as an array of objects
export const skillsData = [
	// Languages
	{ name: 'JS/TS', category: 'languages' },
	{ name: 'HTML/XML/JSON', category: 'languages' },
	{ name: 'CSS', category: 'languages' },
	{ name: 'SQL + DQL', category: 'languages' },
	{ name: 'Kotlin', category: 'languages' },
	{ name: 'Swift', category: 'languages' },
	{ name: 'Java', category: 'languages' },

	// Tools & Platforms
	{ name: 'Git', category: 'tools' },
	{ name: 'Docker', category: 'tools' },
	{ name: 'Figma', category: 'tools' },

	// Frameworks & Libraries
	{ name: 'React', category: 'frameworks' },
	{ name: 'Node.js', category: 'frameworks' },
	{ name: 'Symfony', category: 'frameworks' },
	{ name: 'Astro', category: 'frameworks' },
	{ name: 'Compose', category: 'frameworks' },
	{ name: 'Doctrine', category: 'frameworks' },
	{ name: 'MCP', category: 'frameworks' },
	{ name: 'Webpack', category: 'tools' },
	{ name: 'Vite', category: 'tools' },

	// Testing
	{ name: 'Jest', category: 'testing' },
	{ name: 'PHPUnit', category: 'testing' },
];
