import { useState, useEffect } from 'react';

/**
 * @param {number} breakpoint - The breakpoint in pixels (default: 768)
 * @returns {boolean} - True if viewport is below breakpoint
 */
export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < breakpoint);
        }

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
}