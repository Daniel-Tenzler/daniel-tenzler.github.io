import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as r}from"./index.DWZk6q9H.js";import{s as i}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as o}from"./Colors.DSKoPjbV.js";const s=i.nav`
	aria-label: Breadcrumb navigation;
	padding: 0.75rem 0;
	margin-bottom: 1rem;
`,l=i.ol`
	display: flex;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	font-size: 0.875rem;
`,t=i.li`
	display: flex;
	align-items: center;

	&:not(:last-child)::after {
		content: '/';
		margin: 0 0.5rem;
		color: ${o.WHITE_BFBFBF};
	}
`,n=i.a`
	color: ${o.WHITE_BFBFBF};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${o.WHITE_BFBFBF};
	}

	&:focus-visible {
		outline: 2px solid ${o.BLUE_2337FF};
		outline-offset: 2px;
		border-radius: 0.25rem;
	}
`,a=i.span`
	color: ${o.GRAY_E5E9F0};
	font-weight: 500;
`,m=({items:r})=>e.jsx(s,{children:e.jsx(l,{children:r.map((i,o)=>o===r.length-1?e.jsx(t,{children:e.jsx(a,{children:i.label})},i.label):e.jsx(t,{children:e.jsx(n,{href:i.href,children:i.label})},i.label))})});m.propTypes={items:r.arrayOf(r.shape({label:r.string.isRequired,href:r.string})).isRequired};export{m as default};
