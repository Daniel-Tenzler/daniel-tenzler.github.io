import React from 'react';
import PropTypes from 'prop-types';
import {
	JourneyDetailsContainer,
	Title,
	Date,
	Details,
	BackButton,
} from './JourneyDetailsPageContent.styles';

const JourneyDetailsPageContent = ({ item, children }) => {
	return (
		<JourneyDetailsContainer>
			<Title>{item.title}</Title>
			<Date>{item.date}</Date>
			<Details>{children}</Details>
			<BackButton href="/">Back to Home</BackButton>
		</JourneyDetailsContainer>
	);
};

JourneyDetailsPageContent.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
	}).isRequired,
	children: PropTypes.node.isRequired,
};

export default JourneyDetailsPageContent;
