// Define skill categories with their associated colors
export const skillCategories = {
	languages: {
		label: 'Languages',
		color: '#3B82F6', // Blue
	},
	frameworks: {
		label: 'Frameworks & Libraries',
		color: '#8B5CF6', // Purple
	},
	databases: {
		label: 'Databases',
		color: '#10B981', // Green
	},
	tools: {
		label: 'Tools & Platforms',
		color: '#F59E0B', // Amber
	},
	testing: {
		label: 'Testing',
		color: '#EF4444', // Red
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

	// // DB
	// { name: 'MySQL', category: 'databases' },

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
