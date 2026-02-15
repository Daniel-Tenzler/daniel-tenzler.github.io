import type { SiteData } from './SiteData.types';

export const SITE_TITLE = "Daniel's Blog";
export const SITE_DESCRIPTION =
	"Hey, I'm Daniel. Welcome to my personal website. A lot of the content on this page is only for testing purposes.";
export const SITE_URL = 'https://daniel-tenzler.de';

export const siteData: SiteData = {
	metadata: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		author: 'Daniel',
	},
	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Portfolio', href: '/portfolio' },
		{ label: 'Contact', href: '/contact' },
	],
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/danieltenz',
			icon: 'github',
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com',
			icon: 'linkedin',
		},
	],
	copyright: `© ${new Date().getFullYear()} Daniel. All rights reserved.`,
};
