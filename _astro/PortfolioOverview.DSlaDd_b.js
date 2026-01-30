import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as i}from"./index.DWZk6q9H.js";import{s as r}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as s,g as t}from"./Colors.DSKoPjbV.js";const o=r.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	padding: 0rem 1rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`,n=r.article`
	background: ${s.GRAY_292929};
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px ${t(s.GRAY_292929,.1)};
	overflow: hidden;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`,d=r.img`
	width: 100%;
	height: 12rem;
	object-fit: cover;
`,a=r.div`
	padding: 1.5rem;
	height: 18rem;
`,m=r.h2`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: ${s.WHITE_FFFFFF};

	a:hover & {
		color: ${s.WHITE_BFBFBF};
	}
`,l=r.p`
	color: ${s.GRAY_E5E9F0};
	margin-bottom: 1rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`,g=r.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`,p=r.span`
	padding: 0.25rem 0.75rem;
	background-color: ${t(s.BLACK_0F1219,.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${s.WHITE_BFBFBF};
`,c=r.a`
	text-decoration: none;
`;function h({items:i}){return e.jsx(o,{children:i.map(i=>e.jsx(c,{href:`/portfolio/${i.id}`,children:e.jsxs(n,{children:[i.image&&e.jsx(d,{src:i.image,alt:i.title,loading:"lazy"}),e.jsxs(a,{children:[e.jsx(m,{children:i.title}),e.jsx(l,{children:i.description}),e.jsxs(g,{children:[i.technologies.slice(0,3).map(i=>e.jsx(p,{children:i},i)),i.technologies.length>3&&e.jsxs(p,{children:["+",i.technologies.length-3," more"]})]})]})]})},i.id))})}h.propTypes={items:i.arrayOf(i.shape({id:i.string.isRequired,title:i.string.isRequired,description:i.string.isRequired,image:i.string,technologies:i.arrayOf(i.string).isRequired,githubUrl:i.string,liveUrl:i.string})).isRequired};const f=r.main`
	max-width: 90%;
	padding: 0;
`,x=r.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 2rem;
	margin-top: 0.5rem;
`,u=({items:i})=>e.jsxs(f,{children:[e.jsx(x,{children:"My Portfolio"}),e.jsx(h,{items:i})]});u.propTypes={items:i.arrayOf(i.shape({title:i.string.isRequired,description:i.string.isRequired,image:i.string.isRequired,link:i.string.isRequired,tags:i.arrayOf(i.string).isRequired})).isRequired};export{u as default};
