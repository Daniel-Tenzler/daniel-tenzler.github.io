import React from 'react';
import PropTypes from 'prop-types';
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

export default function PortfolioGrid({ items }) {
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

PortfolioGrid.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			image: PropTypes.string,
			technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
			githubUrl: PropTypes.string,
			liveUrl: PropTypes.string,
		})
	).isRequired,
};
