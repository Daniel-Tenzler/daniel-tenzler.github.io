import React from 'react';
import { StyledMain } from './ContentContainer.styles';
import type { ContentContainerProps } from './ContentContainer.types';

const ContentContainer = ({ children }: ContentContainerProps) => {
	return <StyledMain>{children}</StyledMain>;
};

export default ContentContainer;
