/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from 'src/consts/theme';
import PropTypes from 'prop-types';

const ThemeWrapper = ({ children }) => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		setIsDark(storedTheme === 'dark' || !storedTheme);
		console.log('Theme changed');
	}, []);

	// Listen for localStorage changes (cross-tab and in-tab)
	useEffect(() => {
		const handleStorage = (e) => {
			if (e.key === 'theme') {
				setIsDark(e.newValue === 'dark');
			}
			console.log('Theme changed');
		};
		window.addEventListener('storage', handleStorage);

		// In-tab: listen for custom event when localStorage is changed in this tab
		const handleThemeChange = () => {
			const storedTheme = localStorage.getItem('theme');
			setIsDark(storedTheme === 'dark');
			console.log('Theme changed');
		};
		window.addEventListener('themeChange', handleThemeChange);

		return () => {
			window.removeEventListener('storage', handleStorage);
			window.removeEventListener('themeChange', handleThemeChange);
		};
	}, []);

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

ThemeWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
