import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	Title,
	Description,
	ButtonContainer,
	PrimaryButton,
	SecondaryButton,
} from './HeroSection.styles';

export default function HeroSection({ title, description }) {
	return (
		<Section>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<ButtonContainer>
				<PrimaryButton href="/portfolio">
					Personal Projects
				</PrimaryButton>
				<SecondaryButton href="/blog">Blogs</SecondaryButton>
			</ButtonContainer>
		</Section>
	);
}

HeroSection.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
