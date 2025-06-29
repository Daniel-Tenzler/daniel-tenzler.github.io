import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

DarkModeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error('useDarkMode must be used within a DarkModeProvider');
	}
	return context;
}
