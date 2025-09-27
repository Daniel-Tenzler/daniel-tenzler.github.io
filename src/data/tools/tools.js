export const tools = [
	{
		id: 'url-encoder',
		title: 'URL Encoder/Decoder',
		description:
			'Encode or decode URL strings for web development and data processing.',
		path: '/encode',
		icon: '/link.svg',
		category: 'Web Development',
	},
];

export const getToolsByCategory = () => {
	const categories = {};
	tools.forEach((tool) => {
		if (!categories[tool.category]) {
			categories[tool.category] = [];
		}
		categories[tool.category].push(tool);
	});
	return categories;
};
