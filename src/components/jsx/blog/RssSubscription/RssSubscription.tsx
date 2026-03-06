import React from 'react';
import type { RssSubscriptionProps } from './RssSubscription.types';
import {
	StyledRssButton,
	StyledRssSubscriptionContainer,
} from './RssSubscription.styles';

const RssSubscription = ({ feedUrl }: RssSubscriptionProps) => {
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

export default RssSubscription;
