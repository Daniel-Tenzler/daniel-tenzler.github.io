import type { Theme } from '@/types/global.types';

export interface UseThemeReturn {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
	isDark: boolean;
}

export interface UseIsMobileReturn {
	isMobile: boolean;
	breakpoint: number;
}
