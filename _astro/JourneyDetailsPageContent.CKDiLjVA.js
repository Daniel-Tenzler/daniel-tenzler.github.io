import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as i}from"./index.DWZk6q9H.js";import{s as r}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as o}from"./Colors.DSKoPjbV.js";const t=r.div`
	min-height: calc(100vh - 350px);
	padding: 2rem;
`,n=r.h1`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 700;
	margin-bottom: 0.5rem;

	@media (min-width: 768px) {
		font-size: 3rem;
		line-height: 1;
	}
`,s=r.p`
	font-size: 1.125rem;
	line-height: 1.75rem;
	color: ${o.WHITE_BFBFBF};
	margin-bottom: 1.5rem;
`,m=r.div`
	p {
		font-size: 1.125rem;
		line-height: 1.77;
	}
`,d=r.a`
	display: inline-block;
	margin-top: 2rem;
	padding: 0.75rem 1.5rem;
	background-color: ${o.BLUE_000D8A};
	color: white;
	text-decoration: none;
	border-radius: 8px;
	font-weight: 600;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${o.BLUE_2337FF};
	}
`,a=({item:i,children:r})=>e.jsxs(t,{children:[e.jsx(n,{children:i.title}),e.jsx(s,{children:i.date}),e.jsx(m,{children:r}),e.jsx(d,{href:"/",children:"Back to Home"})]});a.propTypes={item:i.shape({title:i.string.isRequired,date:i.string.isRequired}).isRequired,children:i.node.isRequired};export{a as default};
