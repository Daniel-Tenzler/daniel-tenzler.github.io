// Theme constants are now managed via CSS variables in MainLayout.astro
// This file is kept for backwards compatibility but the exports are deprecated.
//
// The new approach uses CSS variables on the html element:
// - :root defines dark mode (default)
// - [data-theme="light"] defines light mode
//
// Use the useTheme hook to toggle themes:
// import { useTheme } from 'src/hooks/useTheme';
// const { toggleTheme, getTheme } = useTheme();

import type { ThemeColors, ThemeMode } from './theme.types';

export const lightTheme: ThemeColors = {
	background: '#ffffff',
	text: '#222222',
};

export const darkTheme: ThemeColors = {
	background: '#181818',
	text: '#f5f5f5',
};

// @deprecated Use CSS variables via useTheme hook instead
export const THEME_MODES = {
	DARK: 'dark',
	LIGHT: 'light',
} as const;

export type ThemeModeValue = ThemeMode;
