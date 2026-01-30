import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import{r as o,R as r}from"./index.CxjelfC8.js";import{s as t}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{g as i,C as n}from"./Colors.DSKoPjbV.js";import{u as s}from"./useIsMobile._afhzKwG.js";const a=t.header`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: ${i(n.GRAY_303030,.8)};
	backdrop-filter: blur(4px);
	border-bottom: 1px solid ${i(n.GRAY_383838)};
`,l=t.nav`
	max-width: 56rem;
	margin: 0 auto;
	padding: 0 1rem;

	@media (min-width: 640px) {
		padding: 0 1.5rem;
	}

	@media (min-width: 1024px) {
		padding: 0 2rem;
	}
`,d=t.div`
	display: flex;
	justify-content: space-between;
	height: 4rem;
	align-items: center;
`,c=t.a`
	flex-shrink: 0;
	font-size: 1.25rem;
	font-weight: 700;
	color: ${n.WHITE_FFFFFF};
	text-decoration: none;

	&:focus {
		outline: 2px solid ${n.BLUE_2337FF};
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	&:focus-visible {
		outline: 2px solid ${n.BLUE_2337FF};
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	-webkit-tap-highlight-color: transparent;
`,p=t.div`
	display: none;
	margin-left: 1.5rem;
	gap: 2rem;

	@media (min-width: 640px) {
		display: flex;
	}
`,h=t.a`
	color: ${n.GRAY_E5E9F0};
	padding: 0.5rem 0.75rem;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${n.GRAY_60739F};
	}

	&:focus-visible {
		outline: 2px solid ${n.BLUE_2337FF};
		outline-offset: 2px;
	}
`,m=t.button`
	position: relative;
	overflow: hidden;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	color: ${n.WHITE_FFFFFF};
	background-color: ${n.GRAY_474747};
	transition: all 0.2s ease;
	cursor: pointer;
	border: 2px solid transparent;

	&:hover {
		color: ${n.GRAY_E5E9F0};
		background-color: ${i(n.GRAY_303030)};
	}

	&[aria-expanded='true'] {
		color: ${n.BLUE_2337FF};
	}

	@media (min-width: 640px) {
		display: none;
	}

	&::before {
		content: '';
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		border-radius: 50%;
		border: 2px solid transparent;
		transition: all 0.3s ease-in-out;
		transform: scale(0.8);
		opacity: 0;
	}

	&[aria-expanded='true']::before {
		transform: scale(1);
		opacity: 1;
		border-color: ${n.GRAY_383838};
	}

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: none;
	}

	-webkit-tap-highlight-color: transparent;
`,x=t.svg`
	height: 1.5rem;
	width: 1.5rem;
	transition:
		transform 0.3s ease-in-out,
		opacity 0.3s ease-in-out;
	color: ${n.WHITE_FFFFFF};

	& .top-bar {
		transform-origin: center;
		transition: transform 0.3s ease-in-out;
	}

	& .middle-bar {
		transform-origin: center;
		transition: opacity 0.3s ease-in-out;
	}

	& .bottom-bar {
		transform-origin: center;
		transition: transform 0.3s ease-in-out;
	}
`,u=t.div`
	display: ${e=>e.isOpen?"block":"none"};
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: ${i(n.GRAY_303030,.8)};
	backdrop-filter: blur(4px);
	z-index: 9999;
	border-bottom: 1px solid ${i(n.GRAY_404040)};
	padding: 1rem;
	box-shadow: 0 4px 6px -1px ${i(n.BLACK_0F1219,.1)};
	color: ${n.WHITE_FFFFFF};

	@media (min-width: 640px) {
		display: none;
	}
`,f=t.a`
	display: block;
	color: ${n.WHITE_FFFFFF};
	padding: 0.75rem 1rem;
	border-radius: 0.375rem;
	font-size: 1.1rem;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.2s ease;
	-webkit-tap-highlight-color: transparent; /* for removing the highlight */

	&:hover {
		color: ${n.GRAY_E5E9F0};
		background-color: ${i(n.GRAY_222939)};
	}
`,b=t.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${n.GRAY_292929};
	width: fit-content;
	padding: 0.6rem 1.5rem;
	border-radius: 99px;
	box-shadow: 2px 2px 4px ${n.GRAY_292929};
`,g=t.span`
position: absolute!important;
width: 1 px!important;
height: 1 px!important;
padding: 0!important;
margin: -1 px!important;
overflow: hidden!important;
clip: rect(0, 0, 0, 0) !important;
white - space: nowrap!important;
border: 0!important;
`;function F(){const[r,t]=o.useState(!1),i=()=>{t(e=>!e)};return s(768)?e.jsxs(e.Fragment,{children:[e.jsxs(m,{type:"button","aria-controls":"mobile-menu","aria-expanded":r,onClick:i,children:[e.jsx(g,{children:r?"Menü schließen":"Menü öffnen"}),e.jsxs(x,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:[e.jsx("path",{className:"top-bar",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16",style:{transform:r?"rotate(45deg) translateY(6px)":"none"}}),e.jsx("path",{className:"middle-bar",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 12h16",style:{opacity:r?0:1}}),e.jsx("path",{className:"bottom-bar",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 18h16",style:{transform:r?"rotate(-45deg) translateY(-6px)":"none"}})]})]}),e.jsxs(u,{isOpen:r,id:"mobile-menu",children:[e.jsx(f,{href:"/",onClick:i,children:e.jsx(b,{children:"Home"})}),e.jsx(f,{href:"/portfolio",onClick:i,children:e.jsx(b,{children:"Portfolio"})}),e.jsx(f,{href:"/blog",onClick:i,children:e.jsx(b,{children:"Blog"})}),e.jsx(f,{href:"/tools",onClick:i,children:e.jsx(b,{children:"Tools"})})]})]}):null}const w=t.div`
	position: relative;
	left: 0px;
	width: 100%;
	height: 4px;
	background-color: ${i(n.GRAY_303030,.8)};
	z-index: 1000;
	backdrop-filter: blur(10px);
`,j=t.div`
	height: 100%;
	background: linear-gradient(
		90deg,
		rgba(0, 0, 68, 1) 0%,
		rgba(0, 0, 150, 1) 50%,
		rgba(0, 0, 68, 1) 100%
	);
	transition: width 0.1s ease-out;
	box-shadow: 0 0 10px rgba(00, 00, 100, 0.5);
`;function k(){const[r,t]=o.useState(0);return o.useEffect(()=>{const e=()=>{const e=window.scrollY,o=document.documentElement.scrollHeight-window.innerHeight,r=o>0?e/o*100:0;t(Math.min(r,100))};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),e.jsx(w,{children:e.jsx(j,{style:{width:`${r}%`}})})}class v extends r.Component{render(){return e.jsxs(a,{children:[e.jsx(l,{"aria-label":"Main navigation",children:e.jsxs(d,{children:[e.jsx(c,{href:"/",children:"Daniel Tenzler"}),e.jsxs(p,{children:[e.jsx(h,{href:"/",children:"Home"}),e.jsx(h,{href:"/portfolio",children:"Portfolio"}),e.jsx(h,{href:"/blog",children:"Blog"}),e.jsx(h,{href:"/tools",children:"Tools"})]}),e.jsx(F,{})]})}),e.jsx(k,{"client:visible":!0})]})}}export{v as default};
