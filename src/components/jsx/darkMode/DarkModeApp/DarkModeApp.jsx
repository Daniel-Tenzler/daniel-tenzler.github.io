import { DarkModeProvider } from 'src/context/DarkModeContext.jsx';
import DarkModeToggle from 'src/components/jsx/darkMode/DarkModeToggle/DarkModeToggle.jsx';
import StyledBox from 'src/components/jsx/darkMode/StyledBox/StyledBox.jsx';

export default function DarkModeApp() {
	return (
		<DarkModeProvider>
			<DarkModeToggle />
			<StyledBox>This box changes style based on dark mode.</StyledBox>
		</DarkModeProvider>
	);
}
