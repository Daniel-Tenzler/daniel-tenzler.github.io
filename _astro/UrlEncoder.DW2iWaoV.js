import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import{r as o}from"./index.CxjelfC8.js";import{P as i}from"./index.DWZk6q9H.js";import{s as r}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as n}from"./Colors.DSKoPjbV.js";const t=r("div")`
	width: 90%;
	max-width: 1000px;
	height: 100%;
	min-height: calc(100vh - 246px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 768px) {
		width: 95%;
	}
`,d=r.h3`
	color: ${n.WHITE_BFBFBF};
	font-size: 1.1rem;
	font-weight: 600;
	margin: 0;
	text-align: center;
	padding: 0.8em 0 0.4em 0;
	z-index: 1;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0.6em 0 0.3em 0;
	}
`,a=r("div")`
	display: flex;
	flex-direction: column;
	background-color: ${n.GRAY_292929};
	border-radius: 8px;
	flex: 1;
	min-height: 0;
	overflow: hidden;
	border: 2px solid transparent;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
	box-sizing: border-box;
	position: relative;
`,s=r(a)`
	&:focus-within {
		border-color: ${n.GRAY_474747};
		outline: 1px solid ${n.GRAY_474747};
		outline-offset: 2px;
	}
`,l=r.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	min-height: 40px;
`,c=r("textarea")`
	background-color: transparent;
	color: ${n.WHITE_FFFFFF};
	padding: 0.5em 1em 1em 1em;
	flex: 1;
	width: 100%;
	height: 100%;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: none;
	resize: none;
	line-height: 1.5;
	min-height: 0;
	outline: none;
	box-sizing: border-box;

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.5em 0.8em 0.8em 0.8em;
	}
`,m=r.div`
	background-color: rgba(220, 38, 38, 0.1);
	color: ${n.RED_FCA5A5};
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid rgba(220, 38, 38, 0.3);
	font-size: 14px;
	line-height: 1.4;
`,p=r.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 1em;
	min-height: 3em;
	gap: 1em;
	background-color: transparent;
`,x=r.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 1em;
	gap: 1em;
	background-color: transparent;

	@media (max-width: 480px) {
		gap: 0.8em;
	}
`,h=r.button`
	background-color: ${n.GRAY_383838};
	color: ${n.WHITE_BFBFBF};
	padding: 0.75em 1.5em;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		background-color: ${n.GRAY_303030};
		box-shadow: 0px 0px 14px #1418208a;
	}

	&:active {
		background-color: ${n.GRAY_383838};
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid ${n.GRAY_222939};
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		padding: 0.6em 1.2em;
		font-size: 0.9rem;
	}
`,g=r(h)``,u=r(h)``,b=({initialValue:i})=>{const[r,n]=o.useState(i||""),[a,h]=o.useState("");return e.jsx(t,{children:e.jsxs(s,{children:[e.jsx(l,{children:e.jsx(d,{children:"URL Encoder/Decoder"})}),e.jsx(c,{value:r,onChange:e=>{n(e.target.value),a&&h("")},placeholder:"Enter text to encode or decode...","aria-label":"URL text to encode or decode","aria-invalid":!!a,"aria-describedby":a?"url-encoder-error":void 0}),e.jsx(p,{children:a&&e.jsx(m,{id:"url-encoder-error",role:"alert",children:a})}),e.jsxs(x,{children:[e.jsx(g,{onClick:()=>{try{h(""),n(decodeURIComponent(r))}catch(e){h("Invalid encoded string")}},"aria-label":"Decode URL",children:"Decode"}),e.jsx(u,{onClick:()=>{h(""),n(encodeURIComponent(r))},"aria-label":"Encode URL",children:"Encode"})]})]})})};b.propTypes={initialValue:i.string};export{b as default};
