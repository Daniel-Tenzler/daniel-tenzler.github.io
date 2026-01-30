import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as r}from"./index.DWZk6q9H.js";import{s as i}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{g as o,C as t}from"./Colors.DSKoPjbV.js";const n=i.main`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem 1rem;
`,s=i.article`
	max-width: 56rem;
	margin: 0 auto;
`,l=i.header`
	margin-bottom: 1rem;
`,a=i.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 1rem;
`,m=i.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
`,d=i.span`
	padding: 0.25rem 0.75rem;
	background-color: ${o(t.BLACK_0F1219,.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${t.WHITE_BFBFBF};
`,g=i.div`
	display: flex;
	gap: 1rem;
`,h=i.a`
	color: ${t.WHITE_FFFFFF};
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`,p=i.img`
	width: 100%;
	border-radius: 0.5rem;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	margin-bottom: 2rem;
`,x=i.div`
	& p {
		font-size: 1.125rem;
		line-height: 1.75;
	}
`,c=({item:r})=>e.jsx(n,{children:e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(a,{children:r.title}),e.jsx(m,{children:r.technologies.map(r=>e.jsx(d,{children:r},r))}),e.jsxs(g,{children:[r.liveUrl&&e.jsx(h,{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"}),r.githubUrl&&e.jsx(h,{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})]}),r.image&&e.jsx(p,{src:r.image,alt:r.title,loading:"lazy"}),e.jsx(x,{children:e.jsx("p",{children:r.description})}),e.jsxs(g,{children:[r.liveUrl&&e.jsx(h,{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"}),r.githubUrl&&e.jsx(h,{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})]})});c.propTypes={item:r.shape({title:r.string.isRequired,technologies:r.arrayOf(r.string).isRequired,githubUrl:r.string,liveUrl:r.string,image:r.string,description:r.string.isRequired}).isRequired};export{c as default};
