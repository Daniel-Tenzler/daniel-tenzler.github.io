/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Switch, ToggleWrapper } from './DarkModeToggle.styles';

const DarkModeToggle = () => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setIsDark(storedTheme === 'dark');
		} else {
			setIsDark(true);
			localStorage.setItem('theme', 'dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = isDark ? 'light' : 'dark';
		setIsDark(!isDark);
		localStorage.setItem('theme', newTheme);
		window.dispatchEvent(new Event('themeChange'));
	};

	return (
		<ToggleWrapper
			onClick={toggleTheme}
			aria-label="Toggle dark mode"
			type="button"
		>
			<span role="img" aria-label="sun">
				☀️
			</span>
			<Switch isDark={isDark} />
			<span role="img" aria-label="moon">
				🌙
			</span>
		</ToggleWrapper>
	);
};

export default DarkModeToggle;
