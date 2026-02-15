export interface JourneyItem {
	id: string;
	title: string;
	description: string;
	date: string;
	type?: string;
	link?: string;
}

export type JourneyData = JourneyItem[];
