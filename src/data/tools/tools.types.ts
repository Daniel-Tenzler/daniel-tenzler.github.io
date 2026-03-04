export interface Tool {
	id: string;
	title: string;
	description: string;
	path: string;
	icon: string;
	category: string;
}

export type ToolsData = Tool[];
