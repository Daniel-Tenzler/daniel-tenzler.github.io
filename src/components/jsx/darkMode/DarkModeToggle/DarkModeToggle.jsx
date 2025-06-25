import { useDarkMode } from 'src/context/DarkModeContext.jsx';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDarkMode();

	return (
		<button onClick={() => setDarkMode(!darkMode)}>
			Switch to {darkMode ? 'Light' : 'Dark'} Mode
		</button>
	);
}
