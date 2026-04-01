export interface JsonVisualizerProps {
	initialValue?: string;
}

export interface WithFullscreenProp {
	isFullscreen?: boolean;
}

export interface JsonErrorDetail {
	message: string;
	line?: number;
	column?: number;
}
