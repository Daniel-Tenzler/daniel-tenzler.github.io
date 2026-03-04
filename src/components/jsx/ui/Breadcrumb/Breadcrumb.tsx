import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@/consts/Colors';

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

const BreadcrumbContainer = styled.nav`
	aria-label: Breadcrumb navigation;
	padding: 12px 0;
	margin-bottom: 16px;
`;

const BreadcrumbList = styled.ol`
	display: flex;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	font-size: 14px;
`;

const StyledBreadcrumbItem = styled.li`
	display: flex;
	align-items: center;

	&:not(:last-child)::after {
		content: '/';
		margin: 0 8px;
		color: ${COLORS.WHITE_BFBFBF};
	}
`;

const BreadcrumbLink = styled.a`
	color: ${COLORS.WHITE_BFBFBF};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.WHITE_BFBFBF};
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.BLUE_2337FF};
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

const BreadcrumbCurrent = styled.span`
	color: ${COLORS.GRAY_E5E9F0};
	font-weight: 500;
`;

const Breadcrumb = ({ items }: BreadcrumbProps) => {
	const renderBreadcrumbItems = () => {
		return items.map((item, index) => {
			const isLast = index === items.length - 1;

			if (isLast) {
				return (
					<StyledBreadcrumbItem key={item.label}>
						<BreadcrumbCurrent>{item.label}</BreadcrumbCurrent>
					</StyledBreadcrumbItem>
				);
			}

			return (
				<StyledBreadcrumbItem key={item.label}>
					<BreadcrumbLink href={item.href}>
						{item.label}
					</BreadcrumbLink>
				</StyledBreadcrumbItem>
			);
		});
	};

	return (
		<BreadcrumbContainer>
			<BreadcrumbList>{renderBreadcrumbItems()}</BreadcrumbList>
		</BreadcrumbContainer>
	);
};

export default Breadcrumb;
