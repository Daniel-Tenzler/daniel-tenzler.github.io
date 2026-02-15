import React, { useRef, useState } from 'react';
import { StyledPanel } from './SettingsPanel.styles';
import usePanelHover from './Hooks/usePanelHover';

export interface SettingsPanelProps {
	children: React.ReactNode;
}

const SettingsPanel = ({
	children,
}: SettingsPanelProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const panelRef = useRef<HTMLDivElement | null>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

export default SettingsPanel;
