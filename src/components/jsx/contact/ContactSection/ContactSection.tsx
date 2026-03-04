import React from 'react';
import GridBackground from 'src/components/jsx/gridBackground/GridBackground/GridBackground';
import {
	StyledSection,
	StyledContainer,
	StyledHeader,
	StyledTitle,
	StyledDescription,
	StyledGrid,
	StyledContactCard,
	StyledLabel,
	StyledValue,
	StyledAction,
} from './ContactSection.styles';

const contactMethods = [
	{
		label: 'Email',
		value: 'kontakt@daniel-tenzler.de',
		href: 'mailto:kontakt@daniel-tenzler.de',
		ariaLabel: 'Send email to kontakt@daniel-tenzler.de',
		action: 'Send Message',
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/danieltenzler',
		href: 'https://linkedin.com/in/danieltenzler',
		ariaLabel: 'Visit LinkedIn profile (opens in new tab)',
		action: 'Connect',
		external: true,
	},
	{
		label: 'GitHub',
		value: 'github.com/daniel-tenzler',
		href: 'https://github.com/daniel-tenzler',
		ariaLabel: 'Visit GitHub profile (opens in new tab)',
		action: 'View Code',
		external: true,
	},
];

export default function ContactSection() {
	return (
		<StyledSection>
			<GridBackground />
			<StyledContainer>
				<StyledHeader>
					<StyledTitle>Get In Touch</StyledTitle>
					<StyledDescription>
						I&apos;m always open to discussing new projects,
						opportunities, or just having a chat about technology
						and design.
					</StyledDescription>
				</StyledHeader>

				<StyledGrid>
					{contactMethods.map((method) => (
						<StyledContactCard
							key={method.label}
							href={method.href}
							aria-label={method.ariaLabel}
							target={method.external ? '_blank' : undefined}
							rel={
								method.external
									? 'noopener noreferrer'
									: undefined
							}
						>
							<StyledLabel>{method.label}</StyledLabel>
							<StyledValue>{method.value}</StyledValue>
							<StyledAction>{method.action}</StyledAction>
						</StyledContactCard>
					))}
				</StyledGrid>
			</StyledContainer>
		</StyledSection>
	);
}
