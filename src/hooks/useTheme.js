/* eslint-disable no-undef */
import { useEffect } from 'react';

/**
 * Custom hook for managing theme via CSS variables on the html element.
 * This approach works across all Astro islands since CSS variables are global.
 *
 * Features:
 * - Defaults to system preference (prefers-color-scheme)
 * - Persists user choice to localStorage
 * - Listens for system preference changes (only if no manual choice)
 * - Dispatches 'themeChange' event for cross-component updates
 */
export const useTheme = () => {
	useEffect(() => {
		// Read from localStorage, otherwise use system preference
		const stored = localStorage.getItem('theme');
		if (stored) {
			document.documentElement.setAttribute('data-theme', stored);
			return;
		}

		// No stored preference - use system preference
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

		// Listen for system preference changes (only if user hasn't set preference)
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e) => {
			if (!localStorage.getItem('theme')) {
				document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
			}
		};
		mediaQuery.addEventListener('change', handleSystemChange);

		return () => mediaQuery.removeEventListener('change', handleSystemChange);
	}, []);

	/**
	 * Toggle between dark and light theme
	 * Updates the data-theme attribute and persists to localStorage
	 */
	const toggleTheme = () => {
		if (typeof document === 'undefined') return;
		const current = document.documentElement.getAttribute('data-theme') || 'dark';
		const next = current === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', next);
		localStorage.setItem('theme', next);
		window.dispatchEvent(new Event('themeChange'));
	};

	/**
	 * Get the current theme value
	 * @returns {'dark' | 'light'}
	 */
	const getTheme = () => {
		if (typeof document === 'undefined') return 'dark';
		return document.documentElement.getAttribute('data-theme') || 'dark';
	};

	return { toggleTheme, getTheme };
};
