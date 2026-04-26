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

export interface JourneyTypeProps {
	$type?: string;
}
