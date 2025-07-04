import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledPanel } from './SettingsPanel.styles';

const AUTO_CLOSE_DELAY = 5000; // 5 seconds

const SettingsPanel = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);
	const panelRef = useRef(null);
	const timerRef = useRef(null);

	// Use native mouseenter/mouseleave to avoid bubbling issues
	useEffect(() => {
		const node = panelRef.current;
		if (!node) return;

		const handleEnter = () => {
			setIsHovered(true);
			if (timerRef.current) clearTimeout(timerRef.current);
		};
		const handleLeave = () => {
			setIsHovered(false);
		};

		node.addEventListener('mouseenter', handleEnter);
		node.addEventListener('mouseleave', handleLeave);

		return () => {
			node.removeEventListener('mouseenter', handleEnter);
			node.removeEventListener('mouseleave', handleLeave);
		};
	}, []);

	// Detect touch/click outside panel on mobile/desktop
	useEffect(() => {
		const handlePointerDown = (e) => {
			if (panelRef.current && !panelRef.current.contains(e.target)) {
				setIsHovered(false);
			}
		};

		if (isHovered) {
			document.addEventListener('touchstart', handlePointerDown, {
				passive: true,
			});
			document.addEventListener('mousedown', handlePointerDown);
		} else {
			document.removeEventListener('touchstart', handlePointerDown);
			document.removeEventListener('mousedown', handlePointerDown);
		}
		return () => {
			document.removeEventListener('touchstart', handlePointerDown);
			document.removeEventListener('mousedown', handlePointerDown);
		};
	}, [isHovered]);

	// Auto-close after 5s if not hovered/focused
	useEffect(() => {
		if (isHovered) {
			if (timerRef.current) clearTimeout(timerRef.current);
		} else {
			timerRef.current = setTimeout(() => {
				setIsHovered(false);
			}, AUTO_CLOSE_DELAY);
		}
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [isHovered]);

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
