import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Article = styled.article `
	max-width: 4xl;
	margin: 0 auto;
`;

export const HeroImageContainer = styled.div `
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
`;

export const HeroImage = styled.img `
	width: 100%;
	max-width: 4xl;
	height: 400px;
	object-fit: cover;
	border-radius: 0.5rem;
	box-shadow:
		0 4px 6px ${getRgbaColor(COLORS.black, 0.1)},
		0 2px 4px ${getRgbaColor(COLORS.black, 0.06)};
`;

export const ContentContainer = styled.div `
  max-width: 85ch;
  margin: 0 auto;
  color: ${COLORS.white};

  h1 {
    color: ${COLORS.white};
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
  }

  h2 {
    color: ${COLORS.white};
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
  }

  h3 {
    color: ${COLORS.white};
    font-weight: 600;
    font-size: 1.25em;
    margin-top: 1.6em;
    margin-bottom: 0.6em;
    line-height: 1.6;
  }

  p {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }

  a {
    color: ${COLORS.white};
    text-decoration: underline;
    font-weight: 500;
  }

  strong {
    color: ${COLORS.white};
    font-weight: 600;
  }

  code {
    color: ${COLORS.white};
    font-weight: 600;
    font-size: 0.875em;
  }

  pre {
    color: ${getRgbaColor(COLORS.white)};
    background-color: ${getRgbaColor(COLORS.white)};
    overflow-x: auto;
    font-size: 0.875em;
    line-height: 1.7142857;
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
    border-radius: 0.375rem;
    padding: 0.8571429em 1.1428571em;
  }

  blockquote {
    font-weight: 500;
    font-style: italic;
    color: ${COLORS.white};
    border-left-width: 0.25rem;
    border-left-color: ${getRgbaColor(COLORS.white)};
    quotes: "\201C""\201D""\2018""\2019";
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding-left: 1em;
  }

  ul {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    list-style-type: disc;
    padding-left: 1.625em;
  }

  ol {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    list-style-type: decimal;
    padding-left: 1.625em;
  }

  li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  img {
    margin-top: 2em;
    margin-bottom: 2em;
    border-radius: 0.375rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  hr {
    margin-top: 3em;
    margin-bottom: 3em;
    border-color: ${getRgbaColor(COLORS.white)};
  }
`;