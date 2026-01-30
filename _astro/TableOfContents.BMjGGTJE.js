import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import{r}from"./index.CxjelfC8.js";import{P as t}from"./index.DWZk6q9H.js";import{s as i}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{g as o,C as s}from"./Colors.DSKoPjbV.js";const n=i.nav`
	align-self: start;
	max-height: calc(100vh - 8rem);
	overflow-y: auto;
	padding: 1.5rem 1.5rem 1.5rem 0.5rem;
	background-color: ${o(s.GRAY_303030,.8)};
	backdrop-filter: blur(10px);
	border: 1px solid ${o(s.GRAY_60739F,.2)};
	border-radius: 1rem;
	box-shadow: 0 4px 6px ${o(s.BLACK_0F1219,.1)};

	@media (max-width: 768px) {
		align-self: stretch;
		max-height: 40vh;
		padding: 1rem;
		margin: 0 0 1rem 0;
		border-radius: 0.75rem;
	}

	@media (max-width: 480px) {
		max-height: 35vh;
		padding: 0.75rem;
		border-radius: 0.5rem;
	}
`,d=i.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`,a=i.li`
	margin-bottom: 0.5rem;
	padding-left: ${e=>1*(e.depth-1)}rem;

	@media (max-width: 768px) {
		margin-bottom: 0.35rem;
		padding-left: ${e=>.75*(e.depth-1)}rem;
	}
`,m=i.a`
	display: block;
	font-size: 0.875rem;
	color: ${e=>e.isActive?s.WHITE_FFFFFF:o(s.WHITE_BFBFBF,.7)};
	text-decoration: none;
	transition: color 0.2s ease;
	line-height: 1.4;

	&:hover {
		color: ${s.WHITE_BFBFBF};
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
		line-height: 1.3;
		padding: 0.25rem 0;
	}
`;function l({headings:t}){const[i,o]=r.useState("");r.useEffect(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&o(e.target.id)})},{rootMargin:"0px 0px -80% 0px"});return t.forEach(r=>{const t=document.getElementById(r.slug);t&&e.observe(t)}),()=>{t.forEach(r=>{const t=document.getElementById(r.slug);t&&e.unobserve(t)})}},[t]);return t&&0!==t.length?e.jsx(n,{children:e.jsx(d,{children:t.map(r=>e.jsx(a,{depth:r.depth,children:e.jsx(m,{href:`#${r.slug}`,isActive:i===r.slug,onClick:e=>((e,r)=>{e.preventDefault();const t=document.getElementById(r);if(t){const e=t.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:e,behavior:"smooth"}),window.history.pushState(null,null,`#${r}`),o(r)}})(e,r.slug),children:r.text})},r.slug))})}):null}l.propTypes={headings:t.arrayOf(t.shape({depth:t.number.isRequired,slug:t.string.isRequired,text:t.string.isRequired})).isRequired};export{l as default};
