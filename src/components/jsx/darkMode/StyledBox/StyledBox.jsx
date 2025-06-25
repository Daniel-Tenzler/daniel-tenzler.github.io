import React from 'react';
import PropTypes from 'prop-types';
import { useDarkMode } from 'src/context/DarkModeContext.jsx';
import { Box } from './StyledBox.styles';

export default function StyledBox({ children }) {
	const { darkMode } = useDarkMode();
	return <Box dark={darkMode}>{children}</Box>;
}

StyledBox.propTypes = {
	children: PropTypes.node.isRequired,
};
