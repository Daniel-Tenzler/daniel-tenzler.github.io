import React, { useState, useEffect } from 'react';
import { ProgressBar, ProgressFill } from './ScrollProgressBar.styles';

export default function ScrollProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const calculateScrollProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setScrollProgress(Math.min(progress, 100));
		};

		// Calculate initial progress
		calculateScrollProgress();

		// Add scroll listener
		window.addEventListener('scroll', calculateScrollProgress, {
			passive: true,
		});

		return () => {
			window.removeEventListener('scroll', calculateScrollProgress);
		};
	}, []);

	return (
		<ProgressBar>
			<ProgressFill style={{ width: `${scrollProgress}%` }} />
		</ProgressBar>
	);
}
