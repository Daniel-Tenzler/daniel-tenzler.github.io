import React from 'react';
import type { RssSubscriptionProps } from './RssSubscription.types';
import { StyledRssButton } from './RssSubscription.styles';

const RssSubscription = ({ feedUrl }: RssSubscriptionProps) => {
	return (
		<StyledRssButton
			href={feedUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			RSS
		</StyledRssButton>
	);
};

export default RssSubscription;
