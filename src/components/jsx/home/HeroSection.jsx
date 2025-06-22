import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const Section = styled.section`
	margin-bottom: 1rem;
`;

const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
`;

const Description = styled.p`
	font-size: 1.25rem;
	color: ${COLORS.grayLight};
	margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.75rem 1.5rem;
	border: 1px solid transparent;
	font-size: 1rem;
	font-weight: 500;
	border-radius: 0.375rem;
	color: ${COLORS.white};
	background-color: ${COLORS.accentDark};
	text-decoration: none;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${COLORS.accent};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${COLORS.accentDark};
	}
`;

const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.75rem 1.5rem;
	border: 1px solid ${getRgbaColor(COLORS.surfaceBlend1)};
	font-size: 1rem;
	font-weight: 500;
	border-radius: 0.375rem;
	color: ${COLORS.white};
	background-color: ${COLORS.cardSurfaceBackground};
	text-decoration: none;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${getRgbaColor(COLORS.semiSurfacePrimary)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${COLORS.semiSurfacePrimary};
	}
`;

export default function HeroSection({ title, description }) {
	return (
		<Section>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<ButtonContainer>
				<PrimaryButton href="/portfolio">Personal Projects</PrimaryButton>
				<SecondaryButton href="/blog">Blogs</SecondaryButton>
			</ButtonContainer>
		</Section>
	);
}

HeroSection.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
