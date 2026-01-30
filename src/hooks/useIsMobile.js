import { useState, useEffect } from 'react';

/**
 * @param {number} breakpoint - The breakpoint in pixels (default: 768)
 * @returns {boolean} - True if viewport is below breakpoint
 */
export function useIsMobile(breakpoint = 768) {
	// Start with null to avoid hydration mismatch
	const [isMobile, setIsMobile] = useState(null);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth < breakpoint);
		}

		// Set initial value only on client
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoint]);

	// Return false during SSR, actual value on client
	return isMobile ?? false;
}
