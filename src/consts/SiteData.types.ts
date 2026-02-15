export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface NavigationItem {
	label: string;
	href: string;
	external?: boolean;
}

export interface SiteMetadata {
	title: string;
	description: string;
	url: string;
	author: string;
	image?: string;
}

export interface SiteData {
	metadata: SiteMetadata;
	navigation: NavigationItem[];
	socialLinks: SocialLink[];
	copyright: string;
}
