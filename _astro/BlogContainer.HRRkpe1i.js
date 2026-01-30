import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import{r}from"./index.CxjelfC8.js";import{P as i}from"./index.DWZk6q9H.js";import{s}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{g as t,C as a}from"./Colors.DSKoPjbV.js";import{f as o}from"./dateUtils.PKV0hxRo.js";const n=s.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 2rem;
`,d=s.button`
	padding: 0.5rem 1rem;
	border: 1px solid ${t(a.BLACK_0F1219)};
	border-radius: 9999px;
	background: ${e=>e.active?a.BLUE_000D8A:a.BLACK_0F1219};
	color: ${e=>(e.active,a.WHITE_FFFFFF)};
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${e=>e.active?a.BLUE_000D8A:t(a.GRAY_303030)};
		border-color: ${e=>e.active?a.BLUE_000D8A:t(a.GRAY_303030)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${t(a.BLACK_0F1219,.2)};
	}
`,l=({allTags:r,selectedTags:i,onTagSelect:s})=>e.jsx(n,{children:r.map(r=>e.jsx(d,{active:i.includes(r),onClick:()=>(e=>{i.includes(e)?s(i.filter(r=>r!==e)):s([...i,e])})(r),"aria-pressed":i.includes(r),children:r},r))});l.propTypes={allTags:i.arrayOf(i.string).isRequired,selectedTags:i.arrayOf(i.string).isRequired,onTagSelect:i.func.isRequired};const c=s.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
`,p=s.a`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 12px;
	background-color: ${a.BLUE_00004A};
	color: ${a.WHITE_FFFFFF};
	border-radius: 4px;
	text-decoration: none;
	font-weight: 500;
	font-size: 12px;
	transition: all 0.2s ease;
	border: none;
	cursor: pointer;
	margin-bottom: 1rem;
	text-decoration: none;

	&:hover {
		background-color: ${a.BLUE_000D8A};
	}

	&:active {
		transform: translateY(0);
	}
`;s.svg`
	width: 14px;
	height: 14px;
	fill: currentColor;
`;const g=({feedUrl:r})=>e.jsx(c,{children:e.jsx(p,{href:r,target:"_blank",rel:"noopener noreferrer",children:"RSS"})});g.propTypes={feedUrl:i.string.isRequired};const m=s.section`
	margin-bottom: 3rem;
`,u=s.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 2rem;
`,f=s.h1`
	font-size: 2.25rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
	color: ${a.GRAY_E5E9F0};
	margin-top: 0.5rem;
`,h=s.p`
	font-size: 1.25rem;
	color: ${a.WHITE_BFBFBF};
	margin-bottom: 0;
`,x=({allTags:r,selectedTags:i,onTagSelect:s,feedUrl:t})=>e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsxs("div",{children:[e.jsx(f,{children:"Blog"}),e.jsx(h,{children:"Thoughts, tutorials, and insights about web development, software engineering, and technology."})]}),e.jsx(g,{feedUrl:t})]}),e.jsx(l,{allTags:r,selectedTags:i,onTagSelect:s})]});x.propTypes={allTags:i.arrayOf(i.string).isRequired,selectedTags:i.arrayOf(i.string).isRequired,onTagSelect:i.func.isRequired,feedUrl:i.string.isRequired};const T=s.a`
	display: block;
	background: ${a.GRAY_292929};
	border-radius: ${({$noTopBorderRadius:e})=>e?"0 0.5rem 0.5rem 0.5rem":"0.5rem"};
	overflow: hidden;
	box-shadow: 0 1px 3px ${t(a.GRAY_292929,.1)};
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;

	&:hover {
		box-shadow: 0 8px 8px ${t(a.GRAY_292929,.5)};
	}
`,b=s.div`
	padding: 1.5rem;
`,R=s.h3`
	margin: 0 0 0.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	color: ${a.GRAY_E5E9F0};
	transition: color 0.2s ease;

	${T}:hover & {
		color: ${a.WHITE_BFBFBF};
	}
`,j=s.p`
	margin: 0 0 1rem;
	font-size: 0.875rem;
	color: ${a.GRAY_E5E9F0};
`,w=s.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 0.875rem;
	color: ${a.WHITE_BFBFBF};
`,F=s.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: 0.75rem;
`,y=s.span`
	padding: 0.25rem 0.75rem;
	background-color: ${t(a.BLACK_0F1219,.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${a.WHITE_BFBFBF};
`;function v({title:r,description:i,pubDate:s,slug:t,readTime:a,tags:n,noTopBorderRadius:d}){return e.jsx(T,{href:`/blog/${t}/`,$noTopBorderRadius:d,children:e.jsxs(b,{children:[e.jsx(R,{children:r}),e.jsx(j,{children:i}),e.jsxs(w,{children:[e.jsx("time",{dateTime:s.toISOString(),children:o(s)}),a&&e.jsxs("span",{children:["• ",a]})]}),n&&n.length>0&&e.jsx(F,{children:n.map(r=>e.jsx(y,{children:r},r))})]})})}v.propTypes={title:i.string.isRequired,description:i.string.isRequired,pubDate:i.instanceOf(Date).isRequired,slug:i.string.isRequired,readTime:i.string,tags:i.arrayOf(i.string),noTopBorderRadius:i.bool},v.defaultProps={noTopBorderRadius:!1};const q=s.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%; /* 16:9 aspect ratio */
	overflow: hidden;
	border-radius: 0.5rem 0.5rem 0 0;
`,B=s.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;function $({src:r,alt:i}){return e.jsx(q,{children:e.jsx(B,{src:r,alt:i,loading:"lazy"})})}$.propTypes={src:i.string.isRequired,alt:i.string.isRequired};const _=s.section`
	display: grid;
	gap: 2rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`,E=s.div`
	display: flex;
	flex-direction: column;
	gap: 0;
	transition:
		box-shadow 0.2s,
		transform 0.2s;
	&:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		transform: translateY(-4px) scale(1.01);
	}
`,A=s.p`
	text-align: center;
	color: ${a.WHITE_FFFFFF};
	font-size: 1.125rem;
	margin: 2rem 0;
`,O=({posts:r,selectedTags:i})=>{const s=i.length>0?r.filter(e=>i.every(r=>e.data.tags?.includes(r))):r;return 0===s.length?e.jsx(A,{children:"No posts found with the selected tags."}):e.jsx(_,{children:s.map(r=>e.jsxs(E,{children:[r.data.heroImage&&e.jsx($,{"client:visible":!0,src:r.data.heroImage,alt:r.data.title}),e.jsx(v,{"client:visible":!0,title:r.data.title,description:r.data.description,pubDate:r.data.pubDate,slug:r.id,readTime:r.data.readTime,tags:r.data.tags,noTopBorderRadius:!0})]},r.id))})};O.propTypes={posts:i.arrayOf(i.shape({id:i.string.isRequired,data:i.shape({title:i.string.isRequired,description:i.string.isRequired,pubDate:i.instanceOf(Date).isRequired,heroImage:i.string,readTime:i.number,tags:i.arrayOf(i.string)}).isRequired})).isRequired,selectedTags:i.arrayOf(i.string).isRequired};const U=s.div`
	margin: 1rem auto;
`,D=({posts:i,allTags:s})=>{const[t,a]=r.useState([]);r.useEffect(()=>{if("undefined"!=typeof window){const e=new window.URLSearchParams(window.location.search).get("tags");e&&a(e.split(","))}},[]);return e.jsxs(U,{children:[e.jsx(x,{allTags:s,selectedTags:t,onTagSelect:e=>{if(a(e),"undefined"!=typeof window){const r=new window.URL(window.location);e.length>0?r.searchParams.set("tags",e.join(",")):r.searchParams.delete("tags"),window.history.replaceState({},"",r)}},feedUrl:"/rss.xml"}),e.jsx(O,{posts:i,selectedTags:t})]})};D.propTypes={posts:i.arrayOf(i.shape({id:i.string.isRequired,data:i.shape({title:i.string.isRequired,description:i.string.isRequired,pubDate:i.instanceOf(Date).isRequired,heroImage:i.string,readTime:i.number,tags:i.arrayOf(i.string)}).isRequired})).isRequired,allTags:i.arrayOf(i.string).isRequired};export{D as default};
