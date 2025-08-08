import { useRef, useEffect } from 'react';

export const useScrollAnimation = (isMobile) => {
	const firstTrackRef = useRef(null);
	const secondTrackRef = useRef(null);
	const dragStateRef = useRef({
		isDragging: false,
		pointerId: null,
		startX: 0,
		baseOffsetX: 0,
		target: null,
	});
	const animationRef = useRef({ requestId: null, lastTimestamp: 0 });
	const positionRef = useRef({ first: 0, second: 0 });
	const mobileRef = useRef(false);

	const applyTransforms = () => {
		if (firstTrackRef.current) {
			firstTrackRef.current.style.transform = `translateX(${positionRef.current.first}px)`;
		}
		if (secondTrackRef.current) {
			secondTrackRef.current.style.transform = `translateX(${positionRef.current.second}px)`;
		}
	};

	const getTrackLoopWidth = (el) => {
		if (!el) return 1;
		return Math.max(1, el.scrollWidth / 2);
	};

	const normalizePosition = () => {
		const firstLoop = getTrackLoopWidth(firstTrackRef.current);
		let first = positionRef.current.first;
		// keep within [-firstLoop, 0]
		first = ((first % -firstLoop) + -firstLoop) % -firstLoop;
		positionRef.current.first = first;

		if (secondTrackRef.current) {
			const secondLoop = getTrackLoopWidth(secondTrackRef.current);
			let second = positionRef.current.second;
			second = ((second % -secondLoop) + -secondLoop) % -secondLoop;
			positionRef.current.second = second;
		}
	};

	const startAnimation = () => {
		if (animationRef.current.requestId != null) return;
		const step = (ts) => {
			if (!animationRef.current.lastTimestamp) {
				animationRef.current.lastTimestamp = ts;
			}
			const delta = ts - animationRef.current.lastTimestamp;
			animationRef.current.lastTimestamp = ts;

			const speed = 30; // px/sec
			const deltaPx = (delta / 1000) * speed;

			if (!dragStateRef.current.isDragging) {
				positionRef.current.first -= deltaPx;
				if (mobileRef.current && secondTrackRef.current) {
					positionRef.current.second += deltaPx; // reverse direction
				}
				normalizePosition();
				applyTransforms();
			}

			animationRef.current.requestId = window.requestAnimationFrame(step);
		};
		animationRef.current.requestId = window.requestAnimationFrame(step);
	};

	const stopAnimation = () => {
		if (animationRef.current.requestId != null) {
			window.cancelAnimationFrame(animationRef.current.requestId);
			animationRef.current.requestId = null;
		}
		animationRef.current.lastTimestamp = 0;
	};

	const handlePointerDown = (event, which) => {
		const target =
			which === 'first' ? firstTrackRef.current : secondTrackRef.current;
		if (!target) return;
		try {
			const pointerId = event.pointerId;
			event.preventDefault();
			target.setPointerCapture(pointerId);
			const currentX = event.clientX;
			target.style.cursor = 'grabbing';
			const baseOffsetX =
				which === 'first'
					? positionRef.current.first
					: positionRef.current.second;
			dragStateRef.current = {
				isDragging: true,
				pointerId,
				startX: currentX,
				baseOffsetX,
				target,
			};
		} catch {
			// no-op
		}
	};

	const handlePointerMove = (event) => {
		const state = dragStateRef.current;
		if (!state.isDragging || !state.target) return;
		try {
			const deltaX = event.clientX - state.startX;
			const nextX = state.baseOffsetX + deltaX;
			if (state.target === firstTrackRef.current) {
				positionRef.current.first = nextX;
			} else if (state.target === secondTrackRef.current) {
				positionRef.current.second = nextX;
			}
			applyTransforms();
		} catch {
			// no-op
		}
	};

	const endDrag = () => {
		const state = dragStateRef.current;
		if (!state.isDragging || !state.target) return;
		try {
			if (state.pointerId != null) {
				state.target.releasePointerCapture(state.pointerId);
			}
			state.target.style.cursor = '';
			normalizePosition();
			applyTransforms();
		} catch {
			// no-op
		} finally {
			dragStateRef.current = {
				isDragging: false,
				pointerId: null,
				startX: 0,
				baseOffsetX: 0,
				target: null,
			};
		}
	};

	useEffect(() => {
		mobileRef.current = isMobile;
		// optional: reset positions on layout change for visual consistency
		positionRef.current.first = 0;
		positionRef.current.second = 0;
		applyTransforms();
	}, [isMobile]);

	useEffect(() => {
		startAnimation();
		return () => {
			stopAnimation();
		};
		// startAnimation/stopAnimation are stable within this module scope
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		firstTrackRef,
		secondTrackRef,
		handlePointerDown,
		handlePointerMove,
		endDrag,
	};
};
