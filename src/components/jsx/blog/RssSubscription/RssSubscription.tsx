import React from 'react';
import {
	StyledRssButton,
	StyledRssSubscriptionContainer,
} from './RssSubscription.styles';

export interface RssSubscriptionProps {
	feedUrl: string;
}

const RssSubscription = ({
	feedUrl,
}: RssSubscriptionProps) => {
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
