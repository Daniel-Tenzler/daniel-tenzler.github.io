export interface JourneySectionItem {
	id: string;
	title: string;
	description: string;
	date: string;
	type?: string;
	link?: string;
}

export interface JourneySectionProps {
	data: JourneySectionItem[] | null;
}

export interface TimelineWrapperProps {
	$isMobile?: boolean;
}

export interface TimelineContentAreaProps {
	$isMobile?: boolean;
}

export interface TimelineLineProps {
	$isMobile?: boolean;
}

export interface TimelineMarkerProps {
	$type?: string;
}
