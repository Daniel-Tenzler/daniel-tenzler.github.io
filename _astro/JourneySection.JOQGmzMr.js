import{c as t,j as e}from"./emotion-styled-base.browser.esm.C2kzp7hc.js";import"./index.DatCARk7.js";import{P as i}from"./index.DgWbHfw7.js";import{g as n,C as r}from"./Colors.DM1_ZJM0.js";const p=[{title:"",description:"",date:"",type:"",link:null},{title:"",description:"",date:"",type:"",link:null},{title:"",description:"",date:"",type:"job",link:null}],d=t("section",{target:"eop34529"})({name:"1951220",styles:"margin:2rem auto;width:100%"}),c=t("div",{target:"eop34528"})(`overflow-x:auto;position:relative;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}background:radial-gradient(
		ellipse at center,
		`,n(r.white,.02),` 0%,
		`,n(r.white,.01)," 50% ",n(r.white,.001),`
			100%
	);backdrop-filter:blur(1px);border-radius:20px;`),x=t("div",{target:"eop34527"})({name:"b6hu71",styles:"display:inline-flex;position:relative;padding:20px 20px 40px 20px;gap:20px;min-width:100%"}),b=t("div",{target:"eop34526"})({name:"1tlb5wt",styles:`position:absolute;bottom:43px;left:0;height:4px;width:100%;background-color:#ddd;-webkit-mask-image:linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	);mask-image:linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	)`}),h=t("div",{target:"eop34525"})({name:"wi99q",styles:"display:flex;flex-direction:column;align-items:center;flex:0 0 250px;position:relative;width:200px;z-index:1"}),g=t("div",{target:"eop34524"})(`text-align:center;margin-bottom:30px;height:280px;width:90%;display:flex;flex-direction:column;padding:1rem;border-radius:12px;background:transparent;transition:all 0.3s ease-in-out;position:relative;z-index:1;&:hover{position:absolute;transform:scale(1.05);background:radial-gradient(
			ellipse at center,
			`,n(r.white,.1),` 0%,
			`,n(r.white,.03),` 50%,
			`,n(r.white,.01),` 100%
		);backdrop-filter:blur(5px);border:1px solid `,n(r.white,.1),";box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.37);}"),m=t("div",{target:"eop34523"})("position:absolute;bottom:-6px;width:15px;height:15px;border-radius:50%;background-color:",({type:a})=>a==="job"?"#3498db":"#9b59b6",";border:3px solid #fff;z-index:1;"),u=t("h3",{target:"eop34522"})({name:"131kin2",styles:"height:3.6em;margin:0 0 0.5rem 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;transition:all 0.3s ease-in-out;font-size:20px"}),f=t("p",{target:"eop34521"})({name:"1tefvy2",styles:"font-style:italic;color:#777;height:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 0 0.5rem 0;transition:all 0.3s ease-in-out;font-size:16px"}),w=t("p",{target:"eop34520"})({name:"s6ccu",styles:"height:6.5em;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;transition:all 0.3s ease-in-out;font-size:16px"}),l=({data:a})=>e.jsxs(d,{children:[e.jsx("h2",{children:"My Developer Journey"}),e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(b,{}),a.map((o,s)=>e.jsxs(h,{children:[e.jsxs(g,{children:[e.jsx(u,{children:o.title}),e.jsx(f,{children:o.date}),e.jsx(w,{children:o.description}),o.link&&e.jsx("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]}),e.jsx(m,{type:o.type})]},s))]})})]});l.propTypes={data:i.arrayOf(i.shape({title:i.string.isRequired,description:i.string.isRequired,date:i.string.isRequired,type:i.oneOf(["job","education"]).isRequired,link:i.string})).isRequired};l.defaultProps={data:p};export{l as default};
