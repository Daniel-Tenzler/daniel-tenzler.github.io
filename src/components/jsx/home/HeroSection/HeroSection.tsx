import React from 'react';
import {
	Section,
	Name,
	Title,
	Tagline,
	Description,
	ButtonContainer,
	PrimaryButton,
	SecondaryButton,
	AccentLine,
	ContentWrapper,
} from './HeroSection.styles';

export default function HeroSection() {
	return (
		<Section>
			<ContentWrapper>
				<Name>Daniel Tenzler</Name>
				<Title>Software Developer</Title>
				<AccentLine />
				<Tagline>
					Building reliable web applications with modern technologies
				</Tagline>
				<Description>
					Designing and implementing responsive, performant web
					applications. Focused on full-stack development, with an
					emphasis on maintainable code, clear architecture, and
					practical user experience.
				</Description>
				<ButtonContainer>
					<PrimaryButton href="/portfolio">
						View Projects
					</PrimaryButton>
					<SecondaryButton href="/blog">Read Blog</SecondaryButton>
				</ButtonContainer>
			</ContentWrapper>
		</Section>
	);
}
