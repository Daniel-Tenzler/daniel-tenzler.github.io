/* global IntersectionObserver */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	TOCContainer,
	TOCList,
	TOCItem,
	TOCLink,
} from './TableOfContents.styles';

export default function TableOfContents({ headings }) {
	const [activeId, setActiveId] = useState('');

	useEffect(() => {
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
			headings.forEach((heading) => {
				const element = document.getElementById(heading.slug);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [headings]);

	const handleClick = (e, slug) => {
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
			window.history.pushState(null, null, `#${slug}`);
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

TableOfContents.propTypes = {
	headings: PropTypes.arrayOf(
		PropTypes.shape({
			depth: PropTypes.number.isRequired,
			slug: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
};
