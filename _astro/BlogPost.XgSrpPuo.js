import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as t}from"./index.DWZk6q9H.js";import{s as r}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as i,g as o}from"./Colors.DSKoPjbV.js";import{f as a}from"./dateUtils.PKV0hxRo.js";const n=r.header`
	margin-bottom: 2rem;
	text-align: center;
`,m=r.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 0.875rem;
	color: ${i.WHITE_BFBFBF};
	margin-bottom: 1rem;
`,s=r.h1`
	font-size: 2rem;
	font-weight: 800;
	color: ${i.GRAY_E5E9F0};
	margin-bottom: 1rem;
	line-height: 1.1;
`,d=r.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	justify-content: center;
	margin-bottom: 1.5rem;
`,l=r.span`
	padding: 0.25rem 0.75rem;
	background-color: ${o(i.BLACK_0F1219,.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${i.WHITE_BFBFBF};
`,F=r.div`
	font-size: 0.875rem;
	color: ${i.WHITE_FFFFFF};
	font-style: italic;
`;function g({title:t,pubDate:r,updatedDate:i,readTime:o,author:g,tags:p}){return e.jsxs(n,{children:[e.jsxs(m,{children:[e.jsx("time",{dateTime:r.toISOString(),children:a(r)}),o&&e.jsxs("span",{children:["• ",o]}),g&&e.jsxs("span",{children:["• By ",g]})]}),e.jsx(s,{children:t}),p&&p.length>0&&e.jsx(d,{children:p.map(t=>e.jsx(l,{children:t},t))}),i&&e.jsxs(F,{children:["Last updated on ",a(i)]})]})}g.propTypes={title:t.string.isRequired,pubDate:t.instanceOf(Date).isRequired,updatedDate:t.instanceOf(Date),readTime:t.string,author:t.string,tags:t.arrayOf(t.string)};const p=r.article`
	max-width: 4xl;
	margin: 0 auto;
`,c=r.div`
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
`,h=r.img`
	width: 100%;
	max-width: 4xl;
	height: 400px;
	object-fit: cover;
	border-radius: 0.5rem;
	box-shadow:
		0 4px 6px ${o(i.BLACK_0F1219,.1)},
		0 2px 4px ${o(i.BLACK_0F1219,.06)};
`,f=r.div`
  max-width: 85ch; 
  margin: 0 auto;
  color: ${i.WHITE_FFFFFF};
	padding-bottom: 200px;

  h1 {
    color: ${i.WHITE_FFFFFF};
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
  }

  h2 {
    color: ${i.WHITE_FFFFFF};
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
  }

  h3 {
    color: ${i.WHITE_FFFFFF};
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
    color: ${i.WHITE_FFFFFF};
    text-decoration: underline;
    font-weight: 500;
  }

  strong {
    color: ${i.WHITE_FFFFFF};
    font-weight: 600;
  }

  code {
    color: ${i.WHITE_FFFFFF};
    font-weight: 600;
    font-size: 0.875em;
  }

  pre {
    color: ${o(i.WHITE_FFFFFF)};
    background-color: ${o(i.BLACK_0F1219,.92)};
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
    color: ${i.WHITE_FFFFFF};
    border-left-width: 0.25rem;
    border-left-color: ${o(i.WHITE_FFFFFF)};
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
    border-color: ${o(i.WHITE_FFFFFF)};
  }
`;function u({title:t,pubDate:r,updatedDate:i,heroImage:o,readTime:a,tags:n,author:m,children:s}){return e.jsxs(p,{children:[o&&e.jsx(c,{children:e.jsx(h,{src:o,alt:t,width:1020,height:510})}),e.jsx(g,{title:t,pubDate:r,updatedDate:i,readTime:a,author:m,tags:n}),e.jsx(f,{children:s})]})}u.propTypes={title:t.string.isRequired,pubDate:t.instanceOf(Date).isRequired,updatedDate:t.instanceOf(Date),heroImage:t.string,readTime:t.string,tags:t.arrayOf(t.string),author:t.string,children:t.node.isRequired};export{u as default};
