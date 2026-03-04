import type { Theme } from '@/types/global.types';

export interface UseThemeReturn {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (t: Theme) => void;
	isDark: boolean;
}

export interface UseIsMobileReturn {
	isMobile: boolean;
	breakpoint: number;
}
