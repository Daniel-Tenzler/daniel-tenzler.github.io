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
	{
		id: 'json-visualizer',
		title: 'JSON Visualizer',
		description:
			'Validate, format, and visualize JSON data with syntax highlighting.',
		path: '/json-visualizer',
		icon: '/link.svg',
		category: 'Web Development',
	},
	{
		id: 'pixelizer',
		title: 'Pixelizer',
		description:
			'Convert images to RGB matrix data and apply smoothing effects for image processing.',
		path: '/pixelizer',
		icon: '/link.svg',
		category: 'Image Processing',
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
