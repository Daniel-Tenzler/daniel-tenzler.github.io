import { useEffect } from 'react';
import type { Theme } from '@/types/global.types';

/**
 * Custom hook for managing theme via CSS variables on the html element.
 * This approach works across all Astro islands since CSS variables are global.
 *
 * Features:
 * - Defaults to system preference (prefers-color-scheme)
 * - Persists user choice to localStorage
 * - Listens for system preference changes (only if no manual choice)
 * - Dispatches 'themeChange' event for cross-component updates
 *
 * @returns {Object} Theme utilities
 * @returns {Theme} theme - Current theme value ('dark' | 'light')
 * @returns {Function} toggleTheme - Toggle between dark and light theme
 * @returns {Function} setTheme - Set theme to specific value
 * @returns {boolean} isDark - Whether current theme is dark
 */
export const useTheme = (): {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
	isDark: boolean;
} => {
	useEffect(() => {
		// Read from localStorage, otherwise use system preference
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored) {
			document.documentElement.setAttribute('data-theme', stored);
			return;
		}

		// No stored preference - use system preference
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		document.documentElement.setAttribute(
			'data-theme',
			prefersDark ? 'dark' : 'light'
		);

		// Listen for system preference changes (only if user hasn't set preference)
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem('theme')) {
				document.documentElement.setAttribute(
					'data-theme',
					e.matches ? 'dark' : 'light'
				);
			}
		};
		mediaQuery.addEventListener('change', handleSystemChange);

		return () =>
			mediaQuery.removeEventListener('change', handleSystemChange);
	}, []);

	/**
	 * Get the current theme value
	 * @returns {Theme} Current theme ('dark' | 'light')
	 */
	const getTheme = (): Theme => {
		if (typeof document === 'undefined') return 'dark';
		return (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';
	};

	/**
	 * Toggle between dark and light theme
	 * Updates the data-theme attribute and persists to localStorage
	 */
	const toggleTheme = (): void => {
		if (typeof document === 'undefined') return;
		const current = getTheme();
		const next: Theme = current === 'dark' ? 'light' : 'dark';
		setTheme(next);
	};

	/**
	 * Set theme to specific value
	 * Updates the data-theme attribute and persists to localStorage
	 * @param {Theme} theme - Theme to set ('dark' | 'light')
	 */
	const setTheme = (theme: Theme): void => {
		if (typeof document === 'undefined') return;
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
		window.dispatchEvent(new Event('themeChange'));
	};

	const theme = getTheme();
	const isDark = theme === 'dark';

	return { theme, toggleTheme, setTheme, isDark };
};
