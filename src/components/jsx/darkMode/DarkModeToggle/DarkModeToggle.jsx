import React, { useEffect, useState } from 'react';
import { Switch, ToggleWrapper, SunIcon, MoonIcon } from './DarkModeToggle.styles';
import { useTheme } from 'src/hooks/useTheme';

const DarkModeToggle = () => {
	const { toggleTheme, getTheme } = useTheme();
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		// Set initial theme on mount
		setIsDark(getTheme() === 'dark');

		const handleThemeChange = () => setIsDark(getTheme() === 'dark');
		window.addEventListener('themeChange', handleThemeChange);
		return () => window.removeEventListener('themeChange', handleThemeChange);
	}, [getTheme]);

	return (
		<ToggleWrapper
			onClick={toggleTheme}
			aria-label="Toggle dark mode"
			type="button"
		>
			<SunIcon $visible={!isDark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="5" />
				<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
			</SunIcon>
			<Switch isDark={isDark} />
			<MoonIcon $visible={isDark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</MoonIcon>
		</ToggleWrapper>
	);
};

export default DarkModeToggle;
