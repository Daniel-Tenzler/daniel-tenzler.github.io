import React, { useState, useEffect } from 'react';
import {
	TOCContainer,
	TOCList,
	TOCItem,
	TOCLink,
} from './TableOfContents.styles';

export interface Heading {
	depth: number;
	slug: string;
	text: string;
}

export interface TableOfContentsProps {
	headings?: Heading[];
}

export default function TableOfContents({
	headings,
}: TableOfContentsProps) {
	const [activeId, setActiveId] = useState('');

	useEffect(() => {
		if (!headings) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: '0px 0px -80% 0px' }
		);

		headings.forEach((heading) => {
			const element = document.getElementById(heading.slug);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			if (!headings) return;
			headings.forEach((heading) => {
				const element = document.getElementById(heading.slug);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [headings]);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
		e.preventDefault();
		const element = document.getElementById(slug);
		if (element) {
			// Get element position and scroll with offset for sticky header
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - 80;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});

			// Update URL hash without jumping
			window.history.pushState('', '', `#${slug}`);
			setActiveId(slug);
		}
	};

	if (!headings || headings.length === 0) {
		return null;
	}

	return (
		<TOCContainer>
			<TOCList>
				{headings.map((heading) => (
					<TOCItem key={heading.slug} depth={heading.depth}>
						<TOCLink
							href={`#${heading.slug}`}
							isActive={activeId === heading.slug}
							onClick={(e) => handleClick(e, heading.slug)}
						>
							{heading.text}
						</TOCLink>
					</TOCItem>
				))}
			</TOCList>
		</TOCContainer>
	);
}
