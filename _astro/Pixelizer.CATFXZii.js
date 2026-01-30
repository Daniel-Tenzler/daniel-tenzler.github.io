import{j as e}from"./emotion-element-f0de968e.browser.esm.mznZwknT.js";import{r}from"./index.CxjelfC8.js";import{s as t}from"./emotion-styled.browser.esm.ckLy0KKp.js";import{C as o}from"./Colors.DSKoPjbV.js";const i=t.div`
	width: 90%;
	max-width: 1600px;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
`,a=t.label`
	color: ${o.WHITE_BFBFBF};
	font-size: 1.1rem;
	font-weight: 500;
	cursor: pointer;
	padding: 0.75em 2em;
	border: 2px solid ${o.GRAY_383838};
	border-radius: 8px;
	background-color: ${o.GRAY_474747};
	transition: all 0.2s ease;
	display: inline-block;
	text-align: center;
	min-width: 200px;

	&:hover {
		background-color: ${o.GRAY_383838};
		border-color: ${o.WHITE_BFBFBF};
	}

	&:focus-within {
		outline: 2px solid ${o.WHITE_BFBFBF};
		outline-offset: 2px;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
		padding: 0.6em 1.5em;
		min-width: 150px;
	}
`,s=t.input`
	display: none;
`,n=t.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 100%;
	margin: 1em 0;
`,l=t.img`
	max-width: 100%;
	max-height: 300px;
	border-radius: 8px;
	border: 2px solid ${o.GRAY_383838};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

	@media (max-width: 768px) {
		max-height: 200px;
	}
`,d=t.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5em;
	flex-wrap: wrap;

	@media (max-width: 480px) {
		gap: 1em;
	}
`,c=t(t.button`
	color: ${o.WHITE_BFBFBF};
	padding: 0.75em 2em;
	border: none;
	border-radius: 8px;
	background-color: ${o.GRAY_2D2D2D};
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	min-width: 140px;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover:not(:disabled) {
		background-color: ${o.GRAY_222939};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active:not(:disabled) {
		background-color: ${o.GRAY_383838};
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid ${o.GRAY_222939};
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 480px) {
		padding: 0.6em 1.5em;
		font-size: 0.9rem;
		min-width: 120px;
	}
`)``;t.textarea`
	background-color: ${o.GRAY_2D2D2D};
	color: ${o.WHITE_FFFFFF};
	padding: 0.75em;
	max-width: 90%;
	width: 900px;
	max-height: 60vh;
	height: 400px;
	margin: 0 auto;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: 2px solid transparent;
	border-radius: 8px;
	transition: border-color 0.2s ease;
	resize: vertical;
	line-height: 1.4;

	&:focus-visible {
		border-color: ${o.WHITE_BFBFBF};
		outline: 2px solid ${o.WHITE_BFBFBF};
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.5em;
		height: 300px;
	}
`;const m=t.div`
	color: #ff6b6b;
	background-color: rgba(255, 107, 107, 0.1);
	border: 1px solid rgba(255, 107, 107, 0.3);
	border-radius: 6px;
	padding: 0.75em 1em;
	margin: 0.5em auto;
	text-align: center;
	font-size: 0.9rem;
	max-width: 90%;
`,h=t.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
	width: 100%;
	max-width: 1500px;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
	}
`,g=t.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;

	canvas {
		max-width: 100%;
		max-height: 300px;
		border-radius: 8px;
		border: 2px solid ${o.GRAY_383838};
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

		@media (max-width: 768px) {
			max-height: 200px;
		}
	}
`,x=t.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	padding: 1em;
	background-color: ${o.GRAY_474747};
	border-radius: 8px;
	border: 1px solid ${o.GRAY_383838};
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`,p=t.label`
	color: ${o.WHITE_BFBFBF};
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
`,u=t.input`
	width: 100%;
	height: 6px;
	border-radius: 3px;
	background: ${o.GRAY_383838};
	outline: none;
	cursor: pointer;

	&::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: ${o.WHITE_BFBFBF};
		cursor: pointer;
		border: 2px solid ${o.GRAY_383838};
		transition: all 0.2s ease;

		&:hover {
			background: ${o.WHITE_FFFFFF};
			transform: scale(1.1);
		}
	}

	&::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: ${o.WHITE_BFBFBF};
		cursor: pointer;
		border: 2px solid ${o.GRAY_383838};
		transition: all 0.2s ease;

		&:hover {
			background: ${o.WHITE_FFFFFF};
			transform: scale(1.1);
		}
	}

	&:focus-visible {
		outline: 2px solid ${o.WHITE_BFBFBF};
		outline-offset: 2px;
	}
`,f=t.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	padding: 1em;
	background-color: ${o.GRAY_474747};
	border-radius: 8px;
	border: 1px solid ${o.GRAY_383838};
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`,b=t.label`
	color: ${o.WHITE_BFBFBF};
	font-size: 1rem;
	font-weight: 500;
	text-align: center;
`,F=t.select`
	background-color: ${o.GRAY_383838};
	color: ${o.WHITE_BFBFBF};
	border: 2px solid ${o.GRAY_383838};
	border-radius: 6px;
	padding: 0.5em 1em;
	font-size: 0.95rem;
	cursor: pointer;
	min-width: 200px;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${o.WHITE_BFBFBF};
	}

	&:focus-visible {
		outline: 2px solid ${o.WHITE_BFBFBF};
		outline-offset: 2px;
		border-color: ${o.WHITE_BFBFBF};
	}

	option {
		background-color: ${o.GRAY_383838};
		color: ${o.WHITE_BFBFBF};
	}
`,w=()=>{const{selectedFile:t,imagePreview:o,rgbMatrix:w,error:B,isProcessing:v,smoothingFactor:I,smoothedMatrix:$,processingMode:_,fileInputRef:R,canvasRef:j,setSelectedFile:y,setImagePreview:M,setRgbMatrix:S,setIsProcessing:A,setSmoothingFactor:E,setSmoothedMatrix:G,setProcessingMode:k,clearAll:T,setErrorState:W,clearError:Y}=(()=>{const[e,t]=r.useState(null),[o,i]=r.useState(null),[a,s]=r.useState(""),[n,l]=r.useState(""),[d,c]=r.useState(!1),[m,h]=r.useState(2),[g,x]=r.useState(null),[p,u]=r.useState("smooth"),f=r.useRef(null),b=r.useRef(null);return{selectedFile:e,imagePreview:o,rgbMatrix:a,error:n,isProcessing:d,smoothingFactor:m,smoothedMatrix:g,processingMode:p,fileInputRef:f,canvasRef:b,setSelectedFile:t,setImagePreview:i,setRgbMatrix:s,setIsProcessing:c,setSmoothingFactor:h,setSmoothedMatrix:x,setProcessingMode:u,clearAll:()=>{t(null),i(null),s(""),x(null),l(""),f.current&&(f.current.value=""),b.current&&b.current.getContext("2d").clearRect(0,0,b.current.width,b.current.height)},setErrorState:e=>{l(e)},clearError:()=>{l("")}}})(),{processImage:H,renderSmoothedImage:P,smoothMatrix:C,spreadMatrix:z}=(()=>{const e=e=>{const r=document.createElement("canvas"),t=r.getContext("2d");r.width=e.width,r.height=e.height,t.drawImage(e,0,0);const{data:o,width:i,height:a}=t.getImageData(0,0,r.width,r.height),s=[];for(let n=0;n<a;n++){const e=[];for(let r=0;r<i;r++){const t=4*(n*i+r),a=o[t],s=o[t+1],l=o[t+2];e.push([a,s,l])}s.push(e)}return s},r=(e,r)=>{const t=[],o=e.length,i=e[0].length;for(let a=0;a<o;a++){const s=[];for(let t=0;t<i;t++){const n=Math.max(0,t-r),l=Math.min(i-1,t+r),d=Math.max(0,a-r),c=Math.min(o-1,a+r);let m=0,h=0,g=0,x=0;for(let r=d;r<=c;r++)for(let t=n;t<=l;t++){const[o,i,a]=e[r][t];m+=o,h+=i,g+=a,x++}s.push([Math.round(m/x),Math.round(h/x),Math.round(g/x)])}t.push(s)}return t},t=(e,r=1)=>{const t=e.length,o=e[0].length,i=Array.from({length:t},()=>Array.from({length:o},()=>[0,0,0])),a=Array.from({length:t},()=>Array.from({length:o},()=>!1));for(let s=0;s<t;s+=r)for(let n=0;n<o;n+=r){const[l,d,c]=e[s][n],m=Math.max(0,n-r),h=Math.min(o-1,n+r),g=Math.max(0,s-r),x=Math.min(t-1,s+r);for(let e=g;e<=x;e++)for(let r=m;r<=h;r++)a[e][r]||(i[e][r]=[l,d,c],a[e][r]=!0)}return i};return{imageToRGBMatrix:e,smoothMatrix:r,spreadMatrix:t,renderSmoothedImage:(e,r)=>{if(!e||!r.current)return;const t=r.current.getContext("2d"),o=e.length,i=e[0].length;r.current.width=i,r.current.height=o;const a=t.createImageData(i,o),s=a.data;let n=0;for(let l=0;l<o;l++)for(let r=0;r<i;r++){const[t,o,i]=e[l][r];s[n++]=t,s[n++]=o,s[n++]=i,s[n++]=255}t.putImageData(a,0,0)},processImage:async(o,i,a="smooth")=>new Promise((s,n)=>{const l=new Image;l.onload=()=>{try{const o=e(l),n="spread"===a?t(o,i):r(o,i),d=JSON.stringify(o,null,2);s({matrix:o,matrixString:d,processed:n})}catch(o){n(o)}},l.onerror=()=>{n(new Error("Error loading image"))},l.src=o})}})();r.useEffect(()=>{$&&j.current&&P($,j)},[$,P,j]);return e.jsxs(i,{children:[e.jsx(a,{htmlFor:"image-upload",children:"Choose Image File"}),e.jsx(s,{id:"image-upload",type:"file",accept:"image/*",onChange:e=>{const r=e.target.files[0];if(!r)return;if(!r.type.startsWith("image/"))return void W("Please select a valid image file");Y(),y(r),S(""),G(null);const t=new FileReader;t.onload=e=>{M(e.target.result)},t.readAsDataURL(r)},ref:R,"aria-label":"Upload image file"}),e.jsxs(f,{children:[e.jsx(b,{htmlFor:"processing-mode",children:"Processing Mode"}),e.jsxs(F,{id:"processing-mode",value:_,onChange:e=>{const r=e.target.value;if(k(r),w)try{const e=JSON.parse(w),t="spread"===r?z(e,I):C(e,I);G(t)}catch(t){}},"aria-label":"Select processing mode",children:[e.jsx("option",{value:"smooth",children:"Smooth Matrix"}),e.jsx("option",{value:"spread",children:"Spread Matrix"})]})]}),o&&e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx("h3",{children:"Original Image"}),e.jsx(l,{src:o,alt:"Image preview","aria-label":"Image preview",loading:"lazy"})]}),$&&e.jsxs(n,{children:[e.jsxs("h3",{children:["spread"===_?"Spread":"Smoothed"," ","Image (Radius: ",I,")"]}),e.jsx(g,{children:e.jsx("canvas",{ref:j,"aria-label":("spread"===_?"Spread":"Smoothed")+" image canvas"})})]})]}),B&&e.jsx(m,{role:"alert","aria-live":"polite",children:B}),$&&e.jsxs(x,{children:[e.jsxs(p,{htmlFor:"smoothing-slider",children:["spread"===_?"Spread":"Smoothing"," ","Radius: ",I]}),e.jsx(u,{id:"smoothing-slider",type:"range",min:"1",max:"10",value:I,onChange:e=>{const r=parseInt(e.target.value);if(E(r),w)try{const e=JSON.parse(w),t="spread"===_?z(e,r):C(e,r);G(t)}catch(t){}},"aria-label":`Adjust ${"spread"===_?"spread":"smoothing"} radius`})]}),e.jsxs(d,{children:[e.jsx(c,{onClick:async()=>{if(t){A(!0),Y();try{const{matrixString:e,processed:r}=await H(o,I,_);S(e),G(r)}catch(e){W("Error processing image. Please try again.")}finally{A(!1)}}else W("Please select an image file first")},disabled:!t||v,"aria-label":"Process image to RGB matrix",children:v?"Processing...":"Process Image"}),e.jsx(c,{onClick:T,disabled:!t&&!w,"aria-label":"Clear all data",children:"Clear"})]})]})};export{w as default};
