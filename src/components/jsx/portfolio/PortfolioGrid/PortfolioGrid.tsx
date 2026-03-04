import React from 'react';
import { useIsMobile } from 'src/hooks/useIsMobile';
import {
	Grid,
	Card,
	CardImage,
	CardContent,
	CardTitle,
	CardDescription,
	TechContainer,
	StyledLinkArea,
	TechTag,
} from './PortfolioGrid.styles';
import type { PortfolioItem } from 'src/data/portfolio/portfolio.types';

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
	const isMobile = useIsMobile();

	return (
		<Grid>
			{items.map((item, index) => {
				// First image on mobile: eager load with high priority
				// All others: lazy load
				const isFirstOnMobile = isMobile && index === 0;
				const loadingAttr = isFirstOnMobile ? 'eager' : 'lazy';
				const fetchPriorityAttr = isFirstOnMobile ? 'high' : undefined;

				return (
					<StyledLinkArea
						key={item.id}
						href={`/portfolio/${item.id}`}
					>
						<Card>
							{item.image && (
								<CardImage
									src={item.image}
									alt={item.title}
									loading={loadingAttr}
									fetchPriority={fetchPriorityAttr}
								/>
							)}
							<CardContent>
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>
									{item.description}
								</CardDescription>
								<TechContainer>
									{item.technologies
										.slice(0, 3)
										.map((tech) => (
											<TechTag key={tech}>{tech}</TechTag>
										))}
									{item.technologies.length > 3 && (
										<TechTag>
											+{item.technologies.length - 3} more
										</TechTag>
									)}
								</TechContainer>
							</CardContent>
						</Card>
					</StyledLinkArea>
				);
			})}
		</Grid>
	);
}
