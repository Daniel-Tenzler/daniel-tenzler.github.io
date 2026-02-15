import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if viewport is below a breakpoint
 * @param breakpoint - The breakpoint in pixels (default: 768)
 * @returns Object with isMobile boolean and breakpoint number
 */
export const useIsMobile = (breakpoint: number = 768): {
	isMobile: boolean;
	breakpoint: number;
} => {
	// Start with null to avoid hydration mismatch
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

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
	return { isMobile: isMobile ?? false, breakpoint };
}
