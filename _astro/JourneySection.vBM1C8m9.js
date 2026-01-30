import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import"./index.CxjelfC8.js";import{P as i}from"./index.DWZk6q9H.js";import{s as r}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{g as t,C as a}from"./Colors.DSKoPjbV.js";import{k as o}from"./emotion-react.browser.esm.BQs4DQVg.js";import{u as s}from"./useIsMobile._afhzKwG.js";const n=o`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`,l=r.section`
	margin: 2rem auto;
	width: 100%;
`,p=r.ol`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 40px;
`,d=r.h2`
	margin: 0.5rem auto;
	width: 100%;
`,x=r.div`
	position: relative;
	padding: 20px;
	display: flex;
	justify-content: center;

	background: radial-gradient(
		ellipse at center,
		${t(a.WHITE_FFFFFF,.02)} 0%,
		${t(a.WHITE_FFFFFF,.01)} 50%
			${t(a.WHITE_FFFFFF,.001)} 100%
	);
	border-radius: 1rem;
`,m=r.div(({$isMobile:e})=>({display:"flex",flexDirection:"column",position:"relative",alignItems:"flex-start","--line-x":"30px","--gutter":"30px","--marker-size":"15px",padding:"20px 20px 20px calc(var(--line-x) + var(--gutter))",gap:"40px",width:"100%",...e&&{"--line-x":"24px","--gutter":"24px",padding:"10px 10px 10px calc(var(--line-x) + var(--gutter))",gap:"24px"}})),c=r.div`
	position: absolute;
	top: 0;
	left: var(--line-x);
	width: 4px;
	height: 100%;
	background-color: ${t(a.WHITE_FFFFFF,.7)};

	-webkit-mask-image: linear-gradient(
		to bottom,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
	mask-image: linear-gradient(
		to bottom,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
`,F=r.li`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	position: relative;
	z-index: 1;
`,b=r.div`
	text-align: left;
	min-height: 120px;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem 1rem 1rem 2rem;
	border-radius: 1rem;
	background: transparent;
	transition: all 0.3s ease-in-out;
	position: relative;
	z-index: 1;
	align-items: flex-start;
	animation: ${n} 0.5s ease;
	margin: 0;

	@media (min-width: 1001px) {
		&:hover {
			transform: scale(1.01);
			background: radial-gradient(
				ellipse at center,
				${t(a.WHITE_FFFFFF,.03)} 0%,
				${t(a.WHITE_FFFFFF,.02)} 50%,
				${t(a.WHITE_FFFFFF,.01)} 100%
			);
			backdrop-filter: blur(2px);
			box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.01);
		}
	}
`,g=r.div`
	position: absolute;
	left: calc(2px + (-1 * var(--gutter)));
	top: 50%;
	transform: translate(-50%, -50%);
	width: var(--marker-size);
	height: var(--marker-size);
	border-radius: 50%;
	background-color: ${({type:e})=>"job"===e?a.BLUE_2337FF:a.BLUE_000D8A};
	border: 3px solid ${a.WHITE_FFFFFF};
	z-index: 2;
`,f=r.h3`
	margin: 0 0 0.5rem 0;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 18px;
`,u=r.p`
	font-style: italic;
	color: ${a.WHITE_BFBFBF};
	height: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin: 0 0 0.5rem 0;
	transition: all 0.3s ease-in-out;
	font-size: 16px;
`,h=r.p`
	margin: 0;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 16px;
`,w=r.a`
	display: inline-block;
	color: ${a.WHITE_F1F1F1};
	font-size: 15px;
	text-decoration: none;
	margin-top: 10px;
	&:hover {
		color: ${a.WHITE_BFBFBF};
		-webkit-box-shadow: 0px 0px 26px 7px rgba(0, 0, 0, 0.1);
		box-shadow: 0px 0px 26px 7px rgba(0, 0, 0, 0.1);
	}
`,k=({data:i})=>{const r=s(),t=Array.isArray(i)?i:[];return e.jsxs(l,{children:[e.jsx(d,{children:"Journey / Experience"}),e.jsx(x,{$isMobile:r,children:e.jsxs(m,{$isMobile:r,children:[e.jsx(c,{$isMobile:r}),e.jsx(p,{"aria-label":"Career timeline",children:t.map(i=>e.jsxs(F,{children:[e.jsx(g,{type:i.type}),e.jsxs(b,{children:[e.jsx(f,{children:i.title}),e.jsx(u,{children:i.date}),e.jsx(h,{children:i.description}),i.link&&e.jsx(w,{href:i.link,children:"Details"})]})]},i.id+i.title))})]})})]})};k.propTypes={data:i.arrayOf(i.shape({id:i.string.isRequired,title:i.string.isRequired,description:i.string.isRequired,date:i.string.isRequired,type:i.oneOf(["job","education"]).isRequired,link:i.string})).isRequired},k.defaultProps={data:null};export{k as default};
