import React from 'react';
import {
	StyledNotFoundContainer,
	StyledErrorCode,
	StyledErrorTitle,
	StyledErrorDescription,
	StyledActions,
	StyledPrimaryLink,
	StyledSecondaryLink,
} from './NotFoundPage.styles';

const NotFoundPage = () => {
	return (
		<StyledNotFoundContainer role="main" aria-labelledby="error-title">
			<StyledErrorCode role="img" aria-label="Error code: 404">
				404
			</StyledErrorCode>
			<StyledErrorTitle id="error-title">Page Not Found</StyledErrorTitle>
			<StyledErrorDescription>
				Sorry, the page you&apos;re looking for doesn&apos;t exist or
				has been moved. You can try searching above, or choose from the
				options below to get back on track.
			</StyledErrorDescription>
			<StyledActions aria-label="Navigation options">
				<StyledPrimaryLink href="/" aria-label="Navigate to home page">
					Go Home
				</StyledPrimaryLink>
				<StyledSecondaryLink
					href="/blog"
					aria-label="Browse the blog posts"
				>
					Browse Blog
				</StyledSecondaryLink>
				<StyledSecondaryLink
					href="/portfolio"
					aria-label="View portfolio projects"
				>
					View Portfolio
				</StyledSecondaryLink>
			</StyledActions>
		</StyledNotFoundContainer>
	);
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
