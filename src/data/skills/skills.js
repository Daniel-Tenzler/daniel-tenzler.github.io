// Define skill categories with their associated colors
export const skillCategories = {
	languages: {
		label: 'Languages',
		color: '#a3ff4c', // Brighter blue
	},
	frameworks: {
		label: 'Frameworks & Libraries',
		color: '#ff3af5', // Brighter purple
	},
	tools: {
		label: 'Tools & Platforms',
		color: '#f1ff26', // Brighter amber
	},
	testing: {
		label: 'Testing',
		color: '#ff5f5f', // Brighter red
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
