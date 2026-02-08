export const tools = [
	{
		id: 'url-encoder',
		title: 'URL Encoder/Decoder',
		description:
			'Encode or decode URL strings for web development and data processing.',
		path: '/encode',
		icon: '/icons/link.svg',
		category: 'Web Development',
	},
	{
		id: 'json-visualizer',
		title: 'JSON Visualizer',
		description:
			'Validate, format, and visualize JSON data with syntax highlighting.',
		path: '/json-visualizer',
		icon: '/icons/link.svg',
		category: 'Web Development',
	},
	{
		id: 'pixelizer',
		title: 'Pixelizer',
		description:
			'Convert images to RGB matrix data and apply smoothing effects for image processing.',
		path: '/pixelizer',
		icon: '/icons/link.svg',
		category: 'Image Processing',
	},
	{
		id: 'color-converter',
		title: 'Color Converter',
		description:
			'Convert between HEX, RGB, HSL, HSV, HWB, and CMYK color formats.',
		path: '/color-converter',
		icon: '/icons/link.svg',
		category: 'Color & Design',
	},
	{
		id: 'box-shadow-generator',
		title: 'Box Shadow Generator',
		description:
			'Generate CSS box shadows with visual preview, multiple layers, and presets.',
		path: '/box-shadow-generator',
		icon: '/icons/link.svg',
		category: 'Color & Design',
	},
	{
		id: 'gradient-generator',
		title: 'Gradient Generator',
		description:
			'Create beautiful CSS gradients with linear, radial, and conic options.',
		path: '/gradient-generator',
		icon: '/icons/link.svg',
		category: 'Color & Design',
	},
	{
		id: 'diff-checker',
		title: 'Diff Checker',
		description:
			'Compare two texts and visualize differences line by line.',
		path: '/diff-checker',
		icon: '/icons/link.svg',
		category: 'Developer Utilities',
	},
	{
		id: 'csv-to-json',
		title: 'CSV to JSON',
		description:
			'Convert CSV data to JSON format with delimiter detection.',
		path: '/csv-to-json',
		icon: '/icons/link.svg',
		category: 'Developer Utilities',
	},
	{
		id: 'yaml-converter',
		title: 'YAML Converter',
		description: 'Convert between YAML and JSON formats bidirectionally.',
		path: '/yaml-converter',
		icon: '/icons/link.svg',
		category: 'Developer Utilities',
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
