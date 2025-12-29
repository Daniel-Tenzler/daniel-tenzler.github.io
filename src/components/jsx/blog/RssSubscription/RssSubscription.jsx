import React from 'react';
import PropTypes from 'prop-types';
import {
	StyledRssButton,
	StyledRssSubscriptionContainer,
} from './RssSubscription.styles';

const RssSubscription = ({ feedUrl }) => {
	return (
		<StyledRssSubscriptionContainer>
			<StyledRssButton
				href={feedUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				RSS
			</StyledRssButton>
		</StyledRssSubscriptionContainer>
	);
};

RssSubscription.propTypes = {
	feedUrl: PropTypes.string.isRequired,
};

export default RssSubscription;
