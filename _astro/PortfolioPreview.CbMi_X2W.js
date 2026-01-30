import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as r}from"./index.DWZk6q9H.js";import{u as i}from"./useIsMobile._afhzKwG.js";import{s as o}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as t,g as s}from"./Colors.DSKoPjbV.js";const a=o.section`
	padding: 1rem 0;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
`,n=o.h2`
	margin-bottom: 2rem;
	color: ${t.GRAY_E5E9F0};
	margin-top: 0.5rem;
`,l=o.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	width: 100%;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`,d=o.div`
	background-color: ${s(t.GRAY_292929,.9)};
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 4px 6px ${s(t.GRAY_292929,.1)};
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		box-shadow: 0 10px 15px ${s(t.GRAY_292929,.2)};
		transform: scale(1.01);
	}
`,p=o.div`
	position: relative;
	height: 12rem;
`,m=o.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`,c=o.div`
	padding: 1.5rem;
`,g=o.h3`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
	color: ${t.WHITE_BFBFBF};
`,h=o.p`
	color: ${t.GRAY_E5E9F0};
	margin-bottom: 1rem;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
`,x=o.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 1rem;
`,b=o.span`
	padding: 0.25rem 0.75rem;
	background-color: ${s(t.BLACK_0F1219,.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${t.WHITE_BFBFBF};
`,u=o.div`
	display: flex;
	gap: 1rem;
`,f=o.a`
	color: ${t.WHITE_FFFFFF};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${t.GRAY_E5E9F0};
	}
`,j=({projects:r})=>{const o=i(),t=e=>{window.location.href=`/portfolio/${e}`};return e.jsxs(a,{children:[e.jsx(n,{children:"Featured Projects"}),e.jsx(l,{children:r.map((r,i)=>e.jsxs(d,{style:{animationDelay:.1*i+"s"},onClick:()=>t(r.id),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t(r.id))},tabIndex:0,role:"link","aria-label":`View ${r.title} project details`,children:[e.jsx(p,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:r.image.replace(/\.jpg$/i,".webp"),type:"image/webp"}),e.jsx("source",{srcSet:r.image,type:"image/jpeg"}),e.jsx(m,{src:r.image,alt:r.title,loading:0===i?"eager":"lazy",fetchPriority:0===i||!o&&i<3?"high":"auto"})]})}),e.jsxs(c,{children:[e.jsx(g,{children:r.title}),e.jsx(h,{children:r.description}),e.jsx(x,{children:r.technologies.map(r=>e.jsx(b,{children:r},r))}),e.jsxs(u,{children:[r.githubUrl&&e.jsx(f,{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),"aria-label":`${r.title} GitHub repository (opens in new tab)`,children:"GitHub ↗"}),r.liveUrl&&e.jsx(f,{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),"aria-label":`${r.title} live demo (opens in new tab)`,children:"Live Demo ↗"})]})]})]},r.id))})]})};j.propTypes={projects:r.arrayOf(r.shape({id:r.string.isRequired,title:r.string.isRequired,description:r.string.isRequired,technologies:r.arrayOf(r.string).isRequired,image:r.string.isRequired,githubUrl:r.string,liveUrl:r.string,featured:r.bool.isRequired,date:r.string.isRequired})).isRequired};export{j as default};
