import React from 'react';
import { StyledMain } from './ContentContainer.styles';

export interface ContentContainerProps {
	children: React.ReactNode;
}

const ContentContainer = ({
	children,
}: ContentContainerProps) => {
	return <StyledMain>{children}</StyledMain>;
};

export default ContentContainer;
