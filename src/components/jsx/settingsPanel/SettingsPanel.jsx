import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledPanel } from './SettingsPanel.styles';
import usePanelHover from './Hooks/usePanelHover';

const SettingsPanel = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);
	const panelRef = useRef(null);
	const timerRef = useRef(null);

	usePanelHover(panelRef, setIsHovered, timerRef, isHovered);

	return (
		<StyledPanel
			ref={panelRef}
			isHovered={isHovered}
			tabIndex={0}
			aria-label="Sliding panel"
		>
			{children}
		</StyledPanel>
	);
};

SettingsPanel.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SettingsPanel;
