import type { RefObject } from 'react';

export interface DragState {
	isDragging: boolean;
	pointerId: number | null;
	startX: number;
	baseOffsetX: number;
	target: EventTarget | null;
}

export interface AnimationState {
	requestId: number | null;
	lastTimestamp: number;
}

export interface PositionState {
	first: number;
	second: number;
}

export interface UseScrollAnimationReturn {
	firstTrackRef: RefObject<HTMLDivElement | null>;
	secondTrackRef: RefObject<HTMLDivElement | null>;
	handlePointerDown: (e: React.PointerEvent, w: 'first' | 'second') => void;
	handlePointerMove: (e: React.PointerEvent) => void;
	endDrag: () => void;
}
