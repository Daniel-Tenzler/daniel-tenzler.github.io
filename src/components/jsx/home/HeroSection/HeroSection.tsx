import React from 'react';
import {
	Section,
	Name,
	NameAccessible,
	NameVisual,
	LetterSlot,
	SpaceSlot,
	TitleTop,
	TitleBottom,
	Title,
	Tagline,
	Description,
	ButtonContainer,
	PrimaryButton,
	SecondaryButton,
	AccentLine,
	ContentWrapper,
} from './HeroSection.styles';

const HERO_NAME = 'Daniel Tenzler';
const HERO_NAME_CHARS = Array.from(HERO_NAME);
const HERO_NAME_TOKENS = (() => {
	const counts: Record<string, number> = {};

	return HERO_NAME_CHARS.map((char) => {
		counts[char] = (counts[char] ?? 0) + 1;

		return {
			char,
			key: `${char}-${counts[char]}`,
		};
	});
})();
const LETTER_WIDTHS: Record<string, string> = {
	D: '0.76em',
	a: '0.56em',
	e: '0.55em',
	i: '0.26em',
	l: '0.28em',
	n: '0.58em',
	r: '0.40em',
	T: '0.63em',
	z: '0.50em',
};

export default function HeroSection() {
	return (
		<Section>
			<ContentWrapper>
				<Name aria-label={HERO_NAME}>
					<NameAccessible>{HERO_NAME}</NameAccessible>
					<NameVisual aria-hidden="true">
						{HERO_NAME_TOKENS.map(({ char, key }) => {
							if (char === ' ') {
								return <SpaceSlot key={key}>&nbsp;</SpaceSlot>;
							}

							return (
								<LetterSlot
									key={key}
									$width={LETTER_WIDTHS[char] ?? '0.56em'}
								>
									<TitleTop>{char}</TitleTop>
									<TitleBottom>{char}</TitleBottom>
								</LetterSlot>
							);
						})}
					</NameVisual>
				</Name>
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
