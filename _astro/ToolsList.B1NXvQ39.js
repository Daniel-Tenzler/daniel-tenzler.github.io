import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as i}from"./index.DWZk6q9H.js";import{s as r}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as t,g as o}from"./Colors.DSKoPjbV.js";const n=r.div`
	max-width: 56rem;
	min-height: 71dvh;
	margin: 2rem auto;

	@media (max-width: 640px) {
		padding: 0rem 1rem;
	}
`,s=r.h1`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${t.WHITE_FFFFFF};
	margin-bottom: 0.5rem;
	text-align: center;
	margin: 0;
	@media (min-width: 640px) {
		font-size: 3rem;
	}
`,m=r.p`
	font-size: 1.125rem;
	color: ${t.GRAY_E5E9F0};
	text-align: center;
	margin-bottom: 3rem;
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
`,a=r.div`
	margin-bottom: 2rem;
`,d=r.h2`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${t.WHITE_FFFFFF};
	margin-bottom: 1rem;
	border-bottom: 2px solid ${o(t.GRAY_383838)};
	padding-bottom: 0.5rem;
`,l=r.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`,c=r.a`
	display: block;
	background-color: ${o(t.GRAY_2D2D2D)};
	border: 1px solid ${o(t.GRAY_383838)};
	border-radius: 0.75rem;
	padding: 1.5rem;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background-color: ${o(t.GRAY_303030)};
		border-color: ${o(t.WHITE_BFBFBF,.2)};
		transform: translateY(-1px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 2px solid ${t.GRAY_60739F};
		outline-offset: 2px;
	}
`,g=r.div`
	max-width: 2rem;
	max-height: 2rem;
	margin-bottom: 0%.5;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${t.WHITE_FFFFFF};

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		color: ${t.WHITE_FFFFFF};
	}
`,h=r.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: ${t.WHITE_FFFFFF};
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
`,p=r.p`
	font-size: 0.875rem;
	color: ${t.GRAY_E5E9F0};
	line-height: 1.5;
`,F=({tools:i})=>{const r=i.reduce((e,i)=>(e[i.category]||(e[i.category]=[]),e[i.category].push(i),e),{});return e.jsxs(n,{children:[e.jsx(s,{children:"Tools"}),e.jsx(m,{children:"A collection of useful web development and utility tools to help with your projects."}),Object.entries(r).map(([i,r])=>e.jsxs(a,{children:[e.jsx(d,{children:i}),e.jsx(l,{children:r.map(i=>e.jsxs(c,{href:i.path,children:[e.jsx(g,{children:e.jsx("img",{src:i.icon,alt:`${i.title} icon`,loading:"lazy",decoding:"async",width:"48",height:"48"})}),e.jsx(h,{children:i.title}),e.jsx(p,{children:i.description})]},i.id))})]},i))]})};F.propTypes={tools:i.arrayOf(i.shape({id:i.string.isRequired,title:i.string.isRequired,description:i.string.isRequired,path:i.string.isRequired,icon:i.string.isRequired,category:i.string.isRequired})).isRequired};export{F as default};
