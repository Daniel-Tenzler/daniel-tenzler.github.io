import styled from '@emotion/styled';

export const Article = styled.article`
	max-width: 4xl;
	margin: 0 auto;
`;

export const HeroImageContainer = styled.div`
	margin-bottom: 32px;
	display: flex;
	justify-content: center;
`;

export const HeroImage = styled.img`
	width: 100%;
	max-width: 4xl;
	height: 400px;
	object-fit: cover;
	border-radius: 8px;
	box-shadow:
		0 4px 6px var(--black-0f1219-1a),
		0 2px 4px var(--black-0f1219-0f);
`;

export const ContentContainer = styled.div`
  max-width: 85ch;
  margin: 0 auto;
  color: var(--color-text-emphasis);
	padding-bottom: 200px;

  h1 {
    color: var(--color-text-emphasis);
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
  }

  h2 {
    color: var(--color-text-emphasis);
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
  }

  h3 {
    color: var(--color-text-emphasis);
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
    color: var(--color-text-emphasis);
    text-decoration: underline;
    font-weight: 500;
  }

  strong {
    color: var(--color-text-emphasis);
    font-weight: 600;
  }

  code {
    color: var(--color-text-emphasis);
    font-weight: 600;
    font-size: 0.875em;
  }

  pre {
    color: var(--color-text-emphasis);
    background-color: var(--black-0f1219-eb);
    overflow-x: auto;
    font-size: 0.875em;
    line-height: 1.7142857;
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
    border-radius: 6px;
    padding: 0.8571429em 1.1428571em;
  }

  blockquote {
    font-weight: 500;
    font-style: italic;
    color: var(--color-text-emphasis);
    border-left-width: 4px;
    border-left-color: var(--color-text-emphasis);
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
    border-radius: 6px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  hr {
    margin-top: 3em;
    margin-bottom: 3em;
    border-color: var(--color-text-emphasis);
  }
`;
