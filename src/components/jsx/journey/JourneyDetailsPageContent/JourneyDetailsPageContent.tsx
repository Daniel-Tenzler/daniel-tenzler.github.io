import React from 'react';
import type { JourneyDetailsPageContentProps } from './JourneyDetailsPageContent.types';
import {
	JourneyDetailsContainer,
	Title,
	Date,
	Details,
	BackButton,
} from './JourneyDetailsPageContent.styles';

const JourneyDetailsPageContent = ({
	item,
	children,
}: JourneyDetailsPageContentProps) => {
	return (
		<JourneyDetailsContainer>
			<Title>{item.title}</Title>
			<Date>{item.date}</Date>
			<Details>{children}</Details>
			<BackButton href="/">Back to Home</BackButton>
		</JourneyDetailsContainer>
	);
};

export default JourneyDetailsPageContent;
