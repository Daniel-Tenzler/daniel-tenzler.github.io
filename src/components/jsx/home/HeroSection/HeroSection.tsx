import React from 'react';
import {
	Section,
	Grid,
	TextColumn,
	Name,
	NameAccessible,
	NameVisual,
	LetterSlot,
	SpaceSlot,
	TitleTop,
	TitleBottom,
	Subtitle,
	Description,
	ButtonContainer,
} from './HeroSection.styles';
import {
	PrimaryButtonAnchor,
	SecondaryButtonAnchor,
} from '@/components/jsx/ui/AnchorButtons.styles';

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
			<Grid>
				<TextColumn>
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
					<Subtitle>Software developer</Subtitle>
					<Description>
						I like turning random ideas into small
						projects — this site collects my work, notes, and
						experiments as I keep improving.
					</Description>
					<ButtonContainer>
						<PrimaryButtonAnchor href="/portfolio">
							View Projects
						</PrimaryButtonAnchor>
						<SecondaryButtonAnchor href="/blog">
							Read Blog
						</SecondaryButtonAnchor>
					</ButtonContainer>
				</TextColumn>
			</Grid>
		</Section>
	);
}
