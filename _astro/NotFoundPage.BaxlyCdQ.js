import{j as o}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{s as e}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as r,g as i}from"./Colors.DSKoPjbV.js";const t=e.section`
	text-align: center;
	padding: 4rem 2rem;
	max-width: 600px;
	margin: 0 auto;
`,a=e.div`
	font-size: 8rem;
	font-weight: bold;
	color: ${r.BLUE_2337FF};
	margin-bottom: 1rem;
	text-shadow: 0 0 20px ${i(r.BLUE_2337FF,.3)};

	@media (min-width: 768px) {
		font-size: 10rem;
	}
`,n=e.h1`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: ${r.WHITE_F1F1F1};
`,l=e.p`
	font-size: 1.2rem;
	margin-bottom: 2rem;
	color: ${r.GRAY_60739F};
	line-height: 1.6;
`,s=e.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
`,d=e.a`
	padding: 0.75rem 2rem;
	border-radius: 8px;
	text-decoration: none;
	font-weight: 500;
	transition: all 0.3s ease;
	border: 2px solid transparent;
	min-width: 200px;
	display: inline-block;
	text-align: center;

	@media (min-width: 768px) {
		min-width: 150px;
	}
`,m=e(d)`
	background-color: ${r.BLUE_2337FF};
	color: ${r.WHITE_FFFFFF};

	&:hover {
		background-color: ${r.BLUE_000D8A};
		box-shadow: 0 2px 4px ${i(r.BLUE_2337FF,.6)};
	}
`,c=e(d)`
	background-color: transparent;
	color: ${r.WHITE_F1F1F1};
	border-color: ${r.GRAY_60739F};

	&:hover {
		border-color: ${r.BLUE_000D8A};
		color: ${r.WHITE_BFBFBF};
		background-color: ${i(r.BLUE_000D8A,.1)};
	}
`,p=()=>o.jsxs(t,{role:"main","aria-labelledby":"error-title",children:[o.jsx(a,{role:"img","aria-label":"Error code: 404",children:"404"}),o.jsx(n,{id:"error-title",children:"Page Not Found"}),o.jsx(l,{children:"Sorry, the page you're looking for doesn't exist or has been moved. You can try searching above, or choose from the options below to get back on track."}),o.jsxs(s,{"aria-label":"Navigation options",children:[o.jsx(m,{href:"/","aria-label":"Navigate to home page",children:"Go Home"}),o.jsx(c,{href:"/blog","aria-label":"Browse the blog posts",children:"Browse Blog"}),o.jsx(c,{href:"/portfolio","aria-label":"View portfolio projects",children:"View Portfolio"})]})]});export{p as default};
