export default {
	presets: ['@babel/preset-react'],
	plugins: [
		[
			'@emotion',
			{
				autoLabel: 'always',
				labelFormat: '[dirname]-[filename]',
				sourceMap: true,
			},
		],
	],
};
