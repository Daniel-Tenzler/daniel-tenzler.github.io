import { DarkModeProvider } from '../../../context/DarkModeContext.jsx';
import DarkModeToggle from './DarkModeToggle.jsx';
import StyledBox from './StyledBox.jsx';

export default function DarkModeApp() {
	return (
		<DarkModeProvider>
			<DarkModeToggle />
			<StyledBox>This box changes style based on dark mode.</StyledBox>
		</DarkModeProvider>
	);
}
