import React from 'react';
import {
	JourneyDetailsContainer,
	Title,
	Date,
	Details,
	BackButton,
} from './JourneyDetailsPageContent.styles';

export interface JourneyDetailsPageContentProps {
	item: {
		title: string;
		date: string;
	};
	children: React.ReactNode;
}

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
