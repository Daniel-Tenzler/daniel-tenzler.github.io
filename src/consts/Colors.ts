import type { ColorConstants, GetRgbaColorFunction, HexToRgbFunction } from './Colors.types';

// Utility: Convert hex to RGB string (e.g. "#ffffff" → "255, 255, 255")
export const hexToRgb: HexToRgbFunction = (hex) => {
	if (!hex || typeof hex !== 'string') return '';
	const cleaned = hex.replace('#', '');
	const bigint = parseInt(cleaned, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return `${r}, ${g}, ${b}`;
};

// Utility: Get rgba string from hex color
export const getRgbaColor: GetRgbaColorFunction = (hex, opacity = 1) =>
	`rgba(${hexToRgb(hex)}, ${opacity})`;

export const COLORS: ColorConstants = {
	BLUE_2337FF: '#2337ff',
	BLUE_000D8A: '#000d8a',
	BLUE_00004A: '#00004a',
	BLACK_1A1A1A: '#1a1a1a',
	BLACK_0F1219: '#0f1219',
	WHITE_FFFFFF: '#ffffff',
	WHITE_BFBFBF: '#BFBFBF',
	WHITE_F1F1F1: '#F1F1F1',
	GREEN_86EFAC: '#86efac',
	RED_FCA5A5: '#fca5a5',
	GRAY_60739F: '#60739f',
	GRAY_E5E9F0: '#e5e9f0',
	GRAY_222939: '#222939',
	GRAY_292929: '#292929',
	GRAY_2D2D2D: '#2D2D2D',
	GRAY_303030: '#303030',
	GRAY_383838: '#383838',
	GRAY_404040: '#404040',
	GRAY_474747: '#474747',
};
