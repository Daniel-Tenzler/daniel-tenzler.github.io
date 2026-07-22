import React from 'react';
import { Wrapper, Title, ViewAllLink } from './SectionHeader.styles';
import type { SectionHeaderProps } from './SectionHeader.types';

export default function SectionHeader({
	title,
	titleId,
	viewAllHref,
	viewAllLabel = 'View all',
	as = 'h2',
}: SectionHeaderProps) {
	return (
		<Wrapper>
			<Title as={as} id={titleId}>
				{title}
			</Title>
			{viewAllHref && (
				<ViewAllLink href={viewAllHref}>{viewAllLabel} →</ViewAllLink>
			)}
		</Wrapper>
	);
}
