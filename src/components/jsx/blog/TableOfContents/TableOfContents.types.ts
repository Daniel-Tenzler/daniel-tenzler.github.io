export interface Heading {
	depth: number;
	slug: string;
	text: string;
}

export interface TableOfContentsProps {
	headings?: Heading[];
}

export interface TOCItemProps {
	depth: number;
}

export interface TOCLinkProps {
	isActive: boolean;
}
