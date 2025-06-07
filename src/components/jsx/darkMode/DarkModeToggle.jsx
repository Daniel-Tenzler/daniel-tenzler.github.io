import { useDarkMode } from '../../../context/DarkModeContext';

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
