import{j as t}from"./emotion-element-f0de968e.browser.esm.Bm6gAZbX.js";import"./index.DatCARk7.js";import{P as n}from"./index.DgWbHfw7.js";import{c as i}from"./emotion-styled-base.browser.esm.udlV9ZuP.js";import{g as o,C as e}from"./Colors.BcygG30f.js";import{k as d}from"./emotion-react.browser.esm.DrUSm7kX.js";import{u as c}from"./useIsMobile.CZSO_FhP.js";const x=d`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`,F=i("section",{target:"eop345213"})({name:"1951220",styles:"margin:2rem auto;width:100%"}),m=i("h2",{target:"eop345212"})({name:"19u40s1",styles:"margin:0.5rem auto;width:100%"}),g=i("div",{target:"eop345211"})(`overflow-y:auto;position:relative;scrollbar-width:none;-ms-overflow-style:none;padding:20px;display:flex;justify-content:center;max-height:700px;&::-webkit-scrollbar{display:none;}background:radial-gradient(
		ellipse at center,
		`,o(e.WHITE_FFFFFF,.02),` 0%,
		`,o(e.WHITE_FFFFFF,.01),` 50%
			`,o(e.WHITE_FFFFFF,.001),` 100%
	);border-radius:20px;`),b=i("div",{target:"eop345210"})(({$isMobile:r})=>({display:"flex",flexDirection:"column",position:"relative",alignItems:"flex-start","--line-x":"30px","--gutter":"30px","--marker-size":"15px",padding:"20px 20px 20px calc(var(--line-x) + var(--gutter))",gap:"40px",width:"100%",...r&&{"--line-x":"24px","--gutter":"24px",padding:"10px 10px 10px calc(var(--line-x) + var(--gutter))",gap:"24px"}}),""),u=i("div",{target:"eop34529"})("position:absolute;top:0;left:var(--line-x);width:4px;height:100%;background-color:",o(e.WHITE_FFFFFF,.7),`;-webkit-mask-image:linear-gradient(
		to bottom,
		transparent,
		black 10%,
		black 90%,
		transparent
	);mask-image:linear-gradient(
		to bottom,
		transparent,
		black 10%,
		black 90%,
		transparent
	);`),h=i("div",{target:"eop34528"})({name:"1jc2305",styles:"display:flex;flex-direction:row;align-items:flex-start;position:relative;z-index:1"}),f=i("div",{target:"eop34527"})("text-align:left;min-height:120px;width:100%;display:flex;flex-direction:column;padding:1rem 1rem 1rem 2rem;border-radius:24px;background:transparent;transition:all 0.3s ease-in-out;position:relative;z-index:1;align-items:flex-start;animation:",x,` 0.5s ease;margin:0;@media (min-width: 1001px){&:hover{transform:scale(1.01);background:radial-gradient(
				ellipse at center,
				`,o(e.WHITE_FFFFFF,.03),` 0%,
				`,o(e.WHITE_FFFFFF,.02),` 50%,
				`,o(e.WHITE_FFFFFF,.01),` 100%
			);backdrop-filter:blur(2px);box-shadow:2px 2px 2px 2px rgba(0, 0, 0, 0.01);}}`),k=i("div",{target:"eop34526"})("position:absolute;left:calc(2px + (-1 * var(--gutter)));top:50%;transform:translate(-50%, -50%);width:var(--marker-size);height:var(--marker-size);border-radius:50%;background-color:",({type:r})=>r==="job"?e.BLUE_2337FF:e.BLUE_000D8A,";border:3px solid ",e.WHITE_FFFFFF,";z-index:2;"),y=i("h3",{target:"eop34525"})({name:"133cwh8",styles:"margin:0 0 0.5rem 0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;transition:all 0.3s ease-in-out;font-size:18px"}),w=i("p",{target:"eop34524"})("font-style:italic;color:",e.WHITE_BFBFBF,";height:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 0 0.5rem 0;transition:all 0.3s ease-in-out;font-size:16px;"),v=i("p",{target:"eop34523"})({name:"1kocxab",styles:"margin:0;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;transition:all 0.3s ease-in-out;font-size:16px"}),T=i("a",{target:"eop34522"})("display:inline-block;color:",e.WHITE_F1F1F1,";font-size:15px;text-decoration:none;margin-top:10px;&:hover{color:",e.WHITE_BFBFBF,";-webkit-box-shadow:0px 0px 26px 7px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 26px 7px rgba(0, 0, 0, 0.1);}");e.WHITE_FFFFFF,o(e.WHITE_FFFFFF,.01),e.WHITE_BFBFBF;const l=({data:r})=>{const s=c(),p=Array.isArray(r)?r:[];return t.jsxs(F,{children:[t.jsx(m,{children:"Journey / Experience"}),t.jsx(g,{$isMobile:s,children:t.jsxs(b,{$isMobile:s,children:[t.jsx(u,{$isMobile:s}),p.map(a=>t.jsxs(h,{children:[t.jsx(k,{type:a.type}),t.jsxs(f,{children:[t.jsx(y,{children:a.title}),t.jsx(w,{children:a.date}),t.jsx(v,{children:a.description}),a.link&&t.jsx(T,{href:a.link,children:"Details"})]})]},a.id))]})})]})};l.propTypes={data:n.arrayOf(n.shape({id:n.string.isRequired,title:n.string.isRequired,description:n.string.isRequired,date:n.string.isRequired,type:n.oneOf(["job","education"]).isRequired,link:n.string})).isRequired};l.defaultProps={data:null};export{l as default};
