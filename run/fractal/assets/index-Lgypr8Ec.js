import{r as c,j as o,c as bt,R as vt}from"./react-vendor-DRzGi0Wa.js";import{h as He,u as We,S as T,C as wt,M as yt,f as J,d as Te,g as Ie,n as Ae,r as Ne,i as xt,a as pe,b as Je,I as _t,c as Fe,D as ge,m as Ct,e as $t,P as St,j as Pt,k as Mt,l as jt,o as Le,p as Et,q as kt,s as Tt,E as It,t as At,v as Nt,w as Ft}from"./driota-WAYHSxbQ.js";import"./katex-x2rSTILB.js";import{c as E}from"./other-DVfbo4r4.js";import{_ as Lt,a as Rt,b as Ot,c as Dt,d as Gt,e as Bt,f as zt,g as Vt,h as qt,i as Ut,j as Ht,k as Wt,l as Jt,m as Zt,n as Kt,o as Yt,p as Xt,q as Qt,r as en,s as tn,t as nn,u as on,v as an}from"./app-data-DI7MBLKA.js";import{R as rn,S as sn,T as ln,U as cn}from"./icons-n5J87uw0.js";import{u as hn,V as H,S as mn,B as un,a as we}from"./three-D8I2aph4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();class $e{}class K extends $e{constructor(e){super();const{pacing:n,color0:a,color1:s}=e;this.alpha=n,this.b=a,this.a=[s[0]-a[0],s[1]-a[1],s[2]-a[2]]}evaluate(e){const n=this.a[0]*Math.pow(e,this.alpha[0])+this.b[0],a=this.a[1]*Math.pow(e,this.alpha[1])+this.b[1],s=this.a[2]*Math.pow(e,this.alpha[2])+this.b[2];return[n,a,s]}toGlslFragment(e="colorPalette"){const n=v=>v.toPrecision(4),a=(v,g)=>v===1?g:v===0?"1.0":v===-1?`(1.0 / ${g})`:`pow(${g}, ${n(v)})`,r=`${n(this.a[0])} * ${a(this.alpha[0],"t")} + ${n(this.b[0])}`,i=`${n(this.a[1])} * ${a(this.alpha[1],"t")} + ${n(this.b[1])}`,p=`${n(this.a[2])} * ${a(this.alpha[2],"t")} + ${n(this.b[2])}`,m=`    return vec3(${r}, ${i}, ${p});`;return`vec3 ${e}(float t) {
${m}
}`}}class z extends $e{constructor(e){super();const{pacing:n,frequency:a,color1:s,color2:r,phase:i}=e;this.alpha=n,this.nu=a,this.phase=i,this.base=[(s[0]+r[0])/2,(s[1]+r[1])/2,(s[2]+r[2])/2],this.scale=[(r[0]-s[0])/2,(r[1]-s[1])/2,(r[2]-s[2])/2]}evaluate(e){const n=Math.pow(e,this.alpha),a=this.base[0]+this.scale[0]*Math.cos(2*Math.PI*(this.nu[0]*n+this.phase[0])),s=this.base[1]+this.scale[1]*Math.cos(2*Math.PI*(this.nu[1]*n+this.phase[1])),r=this.base[2]+this.scale[2]*Math.cos(2*Math.PI*(this.nu[2]*n+this.phase[2]));return[a,s,r]}toGlslFragment(e="colorPalette"){const n=m=>`vec3(${m.map(v=>v.toPrecision(4)).join(", ")})`,a=m=>m.toPrecision(4),s=(m,v)=>m===1?v:m===0?"1.0":m===-1?`(1.0 / ${v})`:`pow(${v}, ${a(m)})`,i=[];i.push(`    vec3 base = ${n(this.base)};`),i.push(`    vec3 scale = ${n(this.scale)};`),i.push(`    vec3 nu = ${n(this.nu)};`),i.push(`    vec3 phase = ${n(this.phase)};`);const p=s(this.alpha,"t");return i.push(`    return base + scale * cos(6.28318 * (nu * ${p} + phase));`),`vec3 ${e}(float t) {
${i.join(`
`)}
}`}}class Se extends $e{constructor(e){super(),this.alpha=e.pacing??1,this.beta=e.damping??0,this.nu=e.frequency??1,this.c0=e.color0,this.c1=e.color1,this.c2=e.color2,this.c_odot=[(this.c0[0]+this.c2[0])/2,(this.c0[1]+this.c2[1])/2,(this.c0[2]+this.c2[2])/2];const n=[this.c0[0]-this.c_odot[0],this.c0[1]-this.c_odot[1],this.c0[2]-this.c_odot[2]],a=[this.c1[0]-this.c_odot[0],this.c1[1]-this.c_odot[1],this.c1[2]-this.c_odot[2]],s=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],r=n[0]**2+n[1]**2+n[2]**2,i=a[0]**2+a[1]**2+a[2]**2,p=.5*Math.atan2(2*s,i-r);this.phi=p/(2*Math.PI);const m=Math.cos(p),v=Math.sin(p);this.A=[n[0]*m-a[0]*v,n[1]*m-a[1]*v,n[2]*m-a[2]*v],this.B=[n[0]*v+a[0]*m,n[1]*v+a[1]*m,n[2]*v+a[2]*m]}f(e){return Math.pow(e,this.alpha)}evaluate(e){const n=this.f(e),a=2*Math.PI*(this.nu*n+this.phi),s=Math.cos(a),r=Math.sin(a),i=Math.exp(-this.beta*n),p=this.c_odot[0]+i*(this.A[0]*s+this.B[0]*r),m=this.c_odot[1]+i*(this.A[1]*s+this.B[1]*r),v=this.c_odot[2]+i*(this.A[2]*s+this.B[2]*r);return[p,m,v]}toGlslFragment(e="colorPalette"){const n=p=>`vec3(${p.map(m=>m.toPrecision(4)).join(", ")})`,a=p=>p.toPrecision(4),s=(p,m)=>p===1?m:p===0?"1.0":p===-1?`(1.0 / ${m})`:`pow(${m}, ${a(p)})`,i=[];return i.push(`    vec3 c_odot = ${n(this.c_odot)};`),i.push(`    vec3 A = ${n(this.A)};`),i.push(`    vec3 B = ${n(this.B)};`),i.push(`    float ft = ${s(this.alpha,"t")};`),i.push(`    float damp = exp(-${a(this.beta)} * ft);`),i.push(`    float angle = 6.28318 * (${a(this.nu)} * ft + ${a(this.phi)});`),i.push("    return c_odot + damp * (A * cos(angle) + B * sin(angle));"),`vec3 ${e}(float t) {
${i.join(`
`)}
}`}}const ue={cosmic:new z({pacing:1,frequency:[1,1,1],color1:[0,0,0],color2:[1,1,1],phase:[.33,.67,0]}),mirage:new z({pacing:1,frequency:[1,1,1],color1:[0,0,0],color2:[1,1,1],phase:[0,.33,.67]}),nebula:new z({pacing:1,frequency:[.9,.9,.9],color1:[.6,.5,.4],color2:[1,1.1,1.2],phase:[.1,.2,.3]}),grayscale:new K({pacing:[1,1,1],color0:[0,0,0],color1:[1,1,1]}),monochrome:new K({pacing:[1,2,3],color0:[0,0,0],color1:[1,1,1]}),aurora:new z({pacing:1,frequency:[1.2,.8,1],color1:[0,.1,.2],color2:[.3,1,.5],phase:[0,.15,.6]}),fire:new z({pacing:.8,frequency:[.7,.7,.7],color1:[0,0,0],color2:[1,.8,.2],phase:[0,.1,.25]}),ocean:new z({pacing:1,frequency:[1,1,.8],color1:[0,.05,.15],color2:[.2,.7,1],phase:[.5,.4,.2]}),sunset:new Se({pacing:1,damping:.3,frequency:1,color0:[.9,.2,.1],color1:[1,.6,0],color2:[.3,0,.5]}),emerald:new K({pacing:[1.5,.8,1.2],color0:[0,.05,.02],color1:[.2,.9,.4]})},dn=t=>t.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),Re=Object.fromEntries(Object.keys(ue).map(t=>[t,dn(t)])),Ze=["cosmic","mirage","nebula","grayscale","monochrome"],pn=Object.keys(ue).filter(t=>!Ze.includes(t)),ye="cosmic",q=t=>{const e=He(t);return e?[e.r/255,e.g/255,e.b/255]:[0,0,0]},he="fractal-custom-color-schemes",Ke=8,Oe=50,De=1;function Ye(t){const e=t.trim();return e.length<De?`Scheme name must be at least ${De} character long.`:e.length>Oe?`Scheme name must be no more than ${Oe} characters long.`:/[<>:"/\\|?*]/.test(e)?"Scheme name contains invalid characters.":null}function W(){try{const t=localStorage.getItem(he);if(!t)return[];const e=JSON.parse(t);if(!Array.isArray(e))return console.warn("Invalid custom color schemes data format in localStorage. Resetting."),localStorage.removeItem(he),[];const n=e.filter(a=>typeof a=="object"&&a!==null&&typeof a.name=="string"&&typeof a.type=="string"&&["Linear","Cosine","Elliptic"].includes(a.type)&&typeof a.params=="object"&&a.params!==null);return n.length!==e.length&&console.warn("Some custom color schemes had invalid structure and were removed."),n}catch(t){console.error("Error reading custom color schemes from localStorage:",t);try{localStorage.removeItem(he)}catch(e){console.error("Failed to clear corrupted localStorage data:",e)}return[]}}function gn(t,e,n){const a=Ye(t);if(a)return{success:!1,schemes:W(),error:{message:a,code:"VALIDATION_ERROR"}};const s=W(),r={name:t.trim(),type:e,params:n},i=s.findIndex(p=>p.name===r.name);i!==-1?s[i]=r:(s.push(r),s.length>Ke&&s.shift());try{return localStorage.setItem(he,JSON.stringify(s)),{success:!0,schemes:s}}catch(p){const m=p;let v="Failed to save color scheme.",g="UNKNOWN";return m.name==="QuotaExceededError"?(v="Storage quota exceeded. Please delete some color schemes and try again.",g="QUOTA_EXCEEDED"):p instanceof SyntaxError&&(v="Failed to serialize color scheme data.",g="PARSE_ERROR"),console.error("Error saving custom color schemes to localStorage:",p),{success:!1,schemes:W(),error:{message:v,code:g}}}}function fn(t){switch(t.type){case"Linear":{const e=t.params;return new K({pacing:e.pacing,color0:q(e.colors[0]),color1:q(e.colors[1])})}case"Cosine":{const e=t.params;return new z({pacing:e.pacing,frequency:e.frequency,phase:e.phase,color1:q(e.colors[0]),color2:q(e.colors[1])})}case"Elliptic":{const e=t.params;return new Se({pacing:e.pacing,damping:e.damping,frequency:e.frequency,color0:q(e.colors[0]),color1:q(e.colors[1]),color2:q(e.colors[2])})}}}const ce={BASE_VIEW_SIZE:4,MIN_ZOOM:.1,MAX_ZOOM:1e6,ZOOM_WARNING_THRESHOLD:5e5},bn={COLOR_PICKER_HEIGHT:150},vn=({className:t})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:t,children:[o.jsx("path",{d:"M12 2 A 10 10 0 0 1 20.66 7 L 12 12 Z",fill:"#ff0000"}),o.jsx("path",{d:"M20.66 7 A 10 10 0 0 1 20.66 17 L 12 12 Z",fill:"#c0c000"}),o.jsx("path",{d:"M20.66 17 A 10 10 0 0 1 12 22 L 12 12 Z",fill:"#00c000"}),o.jsx("path",{d:"M12 22 A 10 10 0 0 1 3.34 17 L 12 12 Z",fill:"#00c0c0"}),o.jsx("path",{d:"M3.34 17 A 10 10 0 0 1 3.34 7 L 12 12 Z",fill:"#0000ff"}),o.jsx("path",{d:"M3.34 7 A 10 10 0 0 1 12 2 L 12 12 Z",fill:"#ff00ff"})]}),wn=({className:t})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 7.5l-5.25-5.25H5.25a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V7.5z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 18.75h-6a.75.75 0 010-1.5h6a.75.75 0 010 1.5z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h4.5l3.75 3.75v2.25z"})]}),U=t=>{const e=He(t);return e?[e.r/255,e.g/255,e.b/255]:[0,0,0]},Xe=384,yn=Xe-24,xn=({onChange:t,onSave:e,isMinimized:n,onToggle:a,colorSchemePrefix:s="ColorScheme_"})=>{const{theme:r}=We(),[i,p]=c.useState("Linear"),[m,v]=c.useState(0),[g,w]=c.useState(!1),S=c.useRef(null);c.useEffect(()=>{const h=S.current;if(!h||n)return;const u=new ResizeObserver(D=>{D[0]&&v(D[0].contentRect.width)});return u.observe(h),()=>u.disconnect()},[n]),c.useEffect(()=>{g?m>0&&m<yn&&w(!1):m>=Xe&&w(!0)},[m,g]);const[y,P]=c.useState(!1),[A,L]=c.useState(""),[N,f]=c.useState(null),[_,C]=c.useState({pacing:[1,1,1],colors:["#ff0000","#00ff00"]}),[$,F]=c.useState({pacing:1,frequency:[1,1,1],phase:[0,.15,.2],colors:["#00ff00","#0000ff"]}),[k,Z]=c.useState({pacing:1,damping:0,frequency:1,colors:["#ff0000","#00ff00","#0000ff"]});c.useEffect(()=>{let h;i==="Linear"?h=new K({pacing:_.pacing,color0:U(_.colors[0]),color1:U(_.colors[1])}):i==="Cosine"?h=new z({pacing:$.pacing,frequency:$.frequency,phase:$.phase,color1:U($.colors[0]),color2:U($.colors[1])}):h=new Se({pacing:k.pacing,damping:k.damping,frequency:k.frequency,color0:U(k.colors[0]),color1:U(k.colors[1]),color2:U(k.colors[2])}),t(h)},[i,_,$,k,t]);const{colors:O,labels:se,onColorChange:R}=c.useMemo(()=>i==="Linear"?{colors:_.colors,labels:"01",onColorChange:h=>C(u=>({...u,colors:[h[0]??"#000000",h[1]??"#ffffff"]}))}:i==="Cosine"?{colors:$.colors,labels:"12",onColorChange:h=>F(u=>({...u,colors:[h[0]??"#000000",h[1]??"#ffffff"]}))}:{colors:k.colors,labels:"012",onColorChange:h=>Z(u=>({...u,colors:[h[0]??"#000000",h[1]??"#ffffff",h[2]??"#ff0000"]}))},[i,_.colors,$.colors,k.colors]),ie=h=>g?h.slice(0,1):m===0?h:m<240?h.charAt(0):m<320?h.slice(0,3):h,V=()=>{const h=W(),u=new Set(h.map(I=>I.name));let D="";for(let I=1;I<=Ke+1;I++){const G=`${s}${I}`;if(!u.has(G)){D=G;break}}L(D),f(null),P(!0)},X=()=>{const h=A.trim();if(!h){f("Scheme name cannot be empty.");return}const u=Ye(h);if(u){f(u);return}const I=gn(h,i,{Linear:_,Cosine:$,Elliptic:k}[i]);I.success?(e(),P(!1),L(""),f(null)):f(I.error?.message||"Failed to save color scheme.")};if(n)return o.jsx("button",{onClick:a,className:E("p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",r==="dark"?"bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-gray-800":"bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-indigo-600 focus:ring-offset-white"),"aria-label":"Open color scheme configurator",children:o.jsx(vn,{className:"w-6 h-6"})});const Q=o.jsxs("div",{className:E("flex justify-between items-center",!g&&"px-4 pt-4"),children:[o.jsx("div",{className:"flex gap-1 p-1 rounded-md",style:{backgroundColor:r==="dark"?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.05)"},children:["Linear","Cosine","Elliptic"].map(h=>o.jsx("button",{onClick:()=>p(h),className:E("px-3 py-1 text-sm font-medium rounded",i===h?r==="dark"?"bg-indigo-500 text-white":"bg-indigo-600 text-white":r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),children:ie(h)},h))}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:V,className:E("p-1 rounded-full",r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),"aria-label":"Save color scheme",children:o.jsx(wn,{className:"h-6 w-6"})}),o.jsx("button",{onClick:a,className:E("p-1 rounded-full",r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),"aria-label":"Close color scheme configurator",children:o.jsx(rn,{className:"h-6 w-6"})})]})]}),ee=o.jsxs("div",{className:"flex flex-col gap-4",children:[i==="Linear"&&o.jsxs(o.Fragment,{children:[o.jsx(T,{label:"Pacing R",min:0,max:4,value:_.pacing[0],onChange:h=>C(u=>({...u,pacing:[h,u.pacing[1],u.pacing[2]]})),theme:r,precision:2}),o.jsx(T,{label:"Pacing G",min:0,max:4,value:_.pacing[1],onChange:h=>C(u=>({...u,pacing:[u.pacing[0],h,u.pacing[2]]})),theme:r,precision:2}),o.jsx(T,{label:"Pacing B",min:0,max:4,value:_.pacing[2],onChange:h=>C(u=>({...u,pacing:[u.pacing[0],u.pacing[1],h]})),theme:r,precision:2})]}),i==="Cosine"&&o.jsxs(o.Fragment,{children:[o.jsx(T,{label:"Pacing",min:0,max:4,value:$.pacing,onChange:h=>F(u=>({...u,pacing:h})),theme:r,precision:2}),o.jsx(T,{label:"Freq R",min:0,max:5,value:$.frequency[0],onChange:h=>F(u=>({...u,frequency:[h,u.frequency[1],u.frequency[2]]})),theme:r,precision:2}),o.jsx(T,{label:"Freq G",min:0,max:5,value:$.frequency[1],onChange:h=>F(u=>({...u,frequency:[u.frequency[0],h,u.frequency[2]]})),theme:r,precision:2}),o.jsx(T,{label:"Freq B",min:0,max:5,value:$.frequency[2],onChange:h=>F(u=>({...u,frequency:[u.frequency[0],u.frequency[1],h]})),theme:r,precision:2}),o.jsx(T,{label:"Phase R",min:0,max:1,value:$.phase[0],onChange:h=>F(u=>({...u,phase:[h,u.phase[1],u.phase[2]]})),theme:r,precision:2}),o.jsx(T,{label:"Phase G",min:0,max:1,value:$.phase[1],onChange:h=>F(u=>({...u,phase:[u.phase[0],h,u.phase[2]]})),theme:r,precision:2}),o.jsx(T,{label:"Phase B",min:0,max:1,value:$.phase[2],onChange:h=>F(u=>({...u,phase:[u.phase[0],u.phase[1],h]})),theme:r,precision:2})]}),i==="Elliptic"&&o.jsxs(o.Fragment,{children:[o.jsx(T,{label:"Pacing",min:0,max:4,value:k.pacing,onChange:h=>Z(u=>({...u,pacing:h})),theme:r,precision:2}),o.jsx(T,{label:"Damping",min:0,max:5,value:k.damping,onChange:h=>Z(u=>({...u,damping:h})),theme:r,precision:2}),o.jsx(T,{label:"Frequency",min:0,max:5,value:k.frequency,onChange:h=>Z(u=>({...u,frequency:h})),theme:r,precision:2})]})]}),te=o.jsx("div",{className:E({"pt-3 px-4 pb-4":!g,"pt-3 px-2":g}),children:o.jsx(wt,{initialColors:O,onChange:R,labels:se,height:bn.COLOR_PICKER_HEIGHT})});return o.jsxs("div",{ref:S,className:E("rounded-lg shadow-lg flex w-full",g?"flex-row gap-2 p-2":"flex-col gap-4",r==="dark"?"bg-gray-800 text-gray-200":"bg-white text-gray-800"),children:[g?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"w-1/2",children:ee}),o.jsxs("div",{className:"flex w-1/2 flex-col gap-2",children:[Q,te]})]}):o.jsxs(o.Fragment,{children:[Q,ee,te]}),o.jsx(yt,{isOpen:y,onClose:()=>{P(!1),f(null)},size:"sm",title:"Save Color Scheme",children:o.jsxs("div",{className:"flex flex-col gap-4 p-1",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"schemeName",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Scheme Name"}),o.jsx("input",{type:"text",id:"schemeName",value:A,onChange:h=>{L(h.target.value),f(null)},onKeyDown:h=>{h.key==="Enter"&&X()},className:E("mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",N?"border-red-300 dark:border-red-600":"border-gray-300 dark:border-gray-600"),"aria-invalid":!!N,"aria-describedby":N?"schemeNameError":void 0}),N&&o.jsx("p",{id:"schemeNameError",className:"mt-1 text-sm text-red-600 dark:text-red-400",role:"alert",children:N})]}),o.jsxs("div",{className:"flex justify-end gap-2",children:[o.jsx("button",{type:"button",onClick:()=>P(!1),className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600",children:"Cancel"}),o.jsx("button",{type:"button",onClick:X,disabled:!A.trim(),className:"px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"Save"})]})]})})]})},xe=2,Qe=7,et=xe+Qe-1,_n=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"];function _e(t){return _n[t]??`_${t}`}function tt(t){const e=new Array(Qe*2).fill(0);return t.flat().forEach((n,a)=>{a<e.length&&(e[a]=n)}),e}function Y(t={}){const e=t.min??1,n=t.max??2e3,a=t.initial??200,s=t.logScale??!0,r={name:"iterations",displayName:"Iterations",summary:"More iterations, more detail",description:"More iterations reveal finer detail but take longer to render.",type:"int",defaultValue:a,min:e,max:n};if(s){const i=Math.log(e),p=Math.log(n);r.posToVal=m=>Math.exp(i+(p-i)*m),r.valToPos=m=>m<=e?0:m>=n?1:(Math.log(m)-i)/(p-i)}return r}function nt(t={}){return{name:"slowdown",displayName:"Slowdown",summary:"Finer handle dragging",description:"Slows handle dragging for precise tuning: at N×, the handle moves 1/N as far as the cursor. 1× tracks the cursor exactly.",type:"float",defaultValue:1,min:1,max:t.max??20}}function ot(t){return{name:"degree",displayName:"Degree n",summary:"Polynomial degree (2 to 8)",description:t,type:"int",defaultValue:xe,min:xe,max:et,step:1}}function me(t){return"min"in t&&"max"in t}function Ce(t,e){let n=e;return me(t)&&(n=Math.max(t.min,Math.min(t.max,n))),t.type==="int"&&(n=Math.round(n)),n}class ae{constructor(){this.controlPointNoun="parameter"}getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}getDynamicParameterBounds(e,n){return{min:e.min,max:e.max}}adjustControlPointsForParameterChange(e,n,a){}}class re extends ae{constructor(e,n,a,s,r,i,p,m){super(),this.name=e,this.title=n,this.description=a,this.math=s,this.shader=r,this.iconUrl=p,this.slowdown=m,this.iterations=Y(typeof i=="number"?{initial:i}:i)}getGuiParameters(){return this.slowdown?[this.slowdown,this.iterations]:[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){const e={iterations:this.iterations.defaultValue};return this.slowdown&&(e[this.slowdown.name]=this.slowdown.defaultValue),e}getControlPointUniforms(e){}getInitialControlPoints(e){return[]}getCanvasOverlayString(e,n){}getControlPointValues(e){}getControlPointGroups(e){return[]}}class Pe extends re{constructor(e,n,a,s,r,i,p,m,v){super(e,n,a,s,r,i,m,v),this.controlPointInfo=p}getInitialControlPoints(e){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(e,n){if(e.length>0)return`${this.controlPointInfo.name} = ${J(...e[0])}`}getControlPointValues(e){if(e.length>0)return[{label:this.controlPointInfo.name,value:J(...e[0])}]}getControlPointUniforms(e){if(e.length>0)return{[this.controlPointInfo.uniformName]:e[0]}}getControlPointGroups(e){return[0]}}const Ge="random-vite-asset-key-19982",[Cn,$n]=await Promise.all([Te(Object.assign({"./ColorScheme.md":Wt,"./burningShip.md":Ht,"./julia-high.md":Ut,"./julia.md":qt,"./lambda.md":Vt,"./magnet1.md":zt,"./magnet2.md":Bt,"./mandelbrot-high.md":Gt,"./mandelbrot.md":Dt,"./newton.md":Ot,"./nova.md":Rt,"./tricorn.md":Lt}),Ge,"./",".md"),Te(Object.assign({"./burningShip.glsl":an,"./julia-high.glsl":on,"./julia.glsl":nn,"./lambda.glsl":tn,"./magnet1.glsl":en,"./magnet2.glsl":Qt,"./mandelbrot-high.glsl":Xt,"./mandelbrot.glsl":Yt,"./newton.glsl":Kt,"./nova.glsl":Zt,"./tricorn.glsl":Jt}),Ge,"./",".glsl")]);function M(t,e){const a=(e==="md"?Cn:$n)[t];if(a==null)throw new Error(`fractal-web: missing asset ${t}.${e}`);return a}const Sn="/run/fractal/assets/newton-BbLU7mRa.webp",fe=16;function Pn(t){const e=[];for(let n=0;n<t;n++){const a=2*Math.PI*n/t;e.push([Math.cos(a),Math.sin(a)])}return e}class Mn extends ae{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=M("newton","md"),this.controlPointNoun="root",this.iterations=Y({min:1,max:200,initial:50,logScale:!1})}getInitialControlPoints(){return Pn(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return M("newton","glsl")}getIcon(){return Sn}getCanvasOverlayString(e,n){return`p = ${e.length}`}getControlPointValues(e){return e.map((n,a)=>({label:`Root ${a+1}`,value:J(...n)}))}getControlPointUniforms(e){if(e.length>0&&e.length<=fe){const n=e.flat(),a=new Array(fe*2).fill(0);return n.forEach((s,r)=>a[r]=s),{num_roots:e.length,roots:a}}}getControlPointGroups(e){return Array(e.length).fill(0)}getControlPointMinMax(){return[2,fe]}}const jn=new Mn,at="/run/fractal/assets/mandelbrot-TUZbnVaK.webp",En=[0,0],kn=new Pe("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",M("mandelbrot","md"),M("mandelbrot","glsl"),200,{name:"P",initialValue:En,uniformName:"phoenixP"},at);function be(t,e){return t<e?t:t+1}function Be(t){return t===0?[.5,0]:[0,0]}class Tn extends ae{constructor(){super(),this.name="mandelbrot-high",this.title="Mandelbrot (high-order)",this.description="High-order Mandelbrot sets for monic polynomials.",this.math=M("mandelbrot-high","md"),this.controlPointNoun="coefficient",this.iterations=Y(),this.degree=ot("Polynomial degree n. Exposes n - 1 control points; n = 2 with c at P_0 is the classic Mandelbrot set."),this.cIndex={name:"cIndex",displayName:"c at P_k",summary:"Where pixel c enters",description:"Chooses which polynomial slot P_k receives the pixel coordinate c. The range follows degree n; k = 0 with n = 2 is the classic Mandelbrot set.",type:"int",defaultValue:0,min:0,max:et-1,step:1}}getGuiParameters(){return[this.degree,this.cIndex,this.iterations]}getDynamicParameterBounds(e,n){if(e.name==="cIndex"){const a=n.degree??this.degree.defaultValue;return{min:e.min,max:Math.max(e.min,a-1)}}return{min:e.min,max:e.max}}getShaderCode(){return M("mandelbrot-high","glsl")}getIcon(){return at}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue,degree:this.degree.defaultValue,cIndex:this.cIndex.defaultValue}}getInitialControlPoints(e){const n=this.resolveDegree(e),a=this.resolveCIndex(e,n),s=[];for(let r=0;r<n-1;r++)s.push(Be(be(r,a)));return s}adjustControlPointsForParameterChange(e,n,a){const s=this.resolveDegree(n),r=this.resolveDegree(a),i=this.resolveCIndex(n,s),p=this.resolveCIndex(a,r);if(s===r&&i===p)return;const m=new Map;e.forEach((g,w)=>{const S=be(w,i);S<s&&m.set(S,g)});const v=[];for(let g=0;g<r;g++)g!==p&&v.push(m.get(g)??Be(g));return v}getControlPointUniforms(e,n){const a=this.resolveCIndex(n);return{coeffs:tt(e),cIndex:a}}getCanvasOverlayString(e,n){const a=this.resolveDegree(n),s=this.resolveCIndex(n,a);return`n = ${a}, c at P${_e(s)}`}getControlPointValues(e,n){if(e.length===0)return;const a=this.resolveDegree(n),s=this.resolveCIndex(n,a);return e.map((r,i)=>({label:`P${_e(be(i,s))}`,value:J(...r)}))}getControlPointGroups(e){return e.map(()=>0)}resolveDegree(e){return e?.degree??this.degree.defaultValue}resolveCIndex(e,n=this.resolveDegree(e)){const a=e?.cIndex??this.cIndex.defaultValue;return Math.max(0,Math.min(a,n-1))}}const In=new Tn,rt="/run/fractal/assets/julia-DKqnm9TD.webp",An=[-.7,.27015],Nn=new Pe("julia","Julia","Julia sets.",M("julia","md"),M("julia","glsl"),200,{name:"C",initialValue:An,uniformName:"juliaC"},rt,nt()),ze=[-.7,.27015];function Fn(t){return`C${_e(t)}`}function Ln(t){const e=Math.max(0,t-1),n=[];for(let a=0;a<e;a++)n.push(a===0?[ze[0],ze[1]]:[0,0]);return n}class Rn extends ae{constructor(){super(),this.name="julia-high",this.title="Julia (high-order)",this.description="High-order Julia sets for monic depressed polynomials.",this.math=M("julia-high","md"),this.controlPointNoun="coefficient",this.iterations=Y(),this.slowdown=nt(),this.degree=ot("Polynomial degree n. Exposes n - 1 coefficients C_0..C_{n-2}; n = 2 is the classic Julia set, with C_0 the classic constant c.")}getGuiParameters(){return[this.degree,this.slowdown,this.iterations]}getShaderCode(){return M("julia-high","glsl")}getIcon(){return rt}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue,degree:this.degree.defaultValue,slowdown:this.slowdown.defaultValue}}getInitialControlPoints(e){return Ln(this.resolveDegree(e))}getControlPointUniforms(e){return{coeffs:tt(e)}}getCanvasOverlayString(e,n){return`n = ${this.resolveDegree(n)}`}getControlPointValues(e){if(e.length!==0)return e.map((n,a)=>({label:Fn(a),value:J(...n)}))}getControlPointGroups(e){return e.map(()=>0)}resolveDegree(e){return e?.degree??this.degree.defaultValue}}const On=new Rn,Dn=[-.85,-.6],Gn=new Pe("lambda","Lambda","Lambda fractal (logistic map).",M("lambda","md"),M("lambda","glsl"),200,{name:"Lambda",initialValue:Dn,uniformName:"lambda"}),Bn=new re("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",M("magnet1","md"),M("magnet1","glsl"),80),zn=new re("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",M("magnet2","md"),M("magnet2","glsl"),80),Vn=new re("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",M("nova","md"),M("nova","glsl"),80),qn=new re("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",M("burningShip","md"),M("burningShip","glsl"),200);class Un extends ae{constructor(){super(...arguments),this.name="tricorn",this.title="Tricorn/Multicorn",this.description="z_n+1 = conj(z_n)^d + c",this.math=M("tricorn","md"),this.iterations=Y(),this.power={name:"power",displayName:"Exponent d",summary:"Higher d adds arms",description:"Exponent d in conj(z)^d + c; higher values add more symmetry arms.",type:"int",defaultValue:2,min:2,max:8}}getGuiParameters(){return[this.iterations,this.power]}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue,power:this.power.defaultValue}}getShaderCode(){return M("tricorn","glsl")}getIcon(){}getInitialControlPoints(){return[]}getControlPointUniforms(){}getCanvasOverlayString(){}getControlPointValues(){}getControlPointGroups(){return[]}}const Hn=new Un,Wn=Object.fromEntries([jn,kn,In,Nn,On,Gn,Bn,zn,Vn,qn,Hn].map(t=>[t.name,t]));class oe extends Error{constructor(e,n,a){super(e),this.shaderType=n,this.glslError=a,this.name="ShaderCompilationError"}}const Jn=`
  varying vec2 vUv;
  void main() {
    // A single triangle that covers the whole screen in clip space.
    const vec3 vertices[3] = vec3[](
      vec3(-1.0, -1.0, 0.0),
      vec3( 3.0, -1.0, 0.0),
      vec3(-1.0,  3.0, 0.0)
    );
    gl_Position = vec4(vertices[gl_VertexID], 1.0);
    // Map clip space to uv space
    vUv = gl_Position.xy * 0.5 + 0.5;
  }
`,Zn=`
varying vec2 vUv;
uniform vec2 center;
uniform float viewWidth;
uniform float viewHeight;

%FRACTAL_SHADER%

%EVALUATE_COLOR%

void main() {
  vec2 st = vUv - 0.5;
  vec2 z = vec2(st.x * viewWidth + center.x, st.y * viewHeight + center.y);
  float t = eval(z);

  if (t < 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  } else {
    gl_FragColor = vec4(colorPalette(t), 1.0);
  }
}
`;function Kn(t,e){const n=e.program;if(!n)return;const a=n.program;if(!a)return;if(!t.getProgramParameter(a,t.LINK_STATUS)){const i=t.getProgramInfoLog(a);throw new oe("Failed to link shader program. The fractal or color scheme may contain incompatible GLSL code.","program",i||void 0)}const r=n.diagnostics;if(r&&!r.runnable){const i=r.fragmentShader?.log,p=r.vertexShader?.log;throw i?new oe("Fragment shader compilation failed. The fractal formula or color scheme contains invalid GLSL code.","fragment",i):p?new oe("Vertex shader compilation failed.","vertex",p):new oe("Shader compilation failed. Please check the fractal or color scheme configuration.","program")}}function st(t){if(Array.isArray(t)){if(t.length===2)return new H(t[0],t[1]);if(t.length===3)return new we(t[0],t[1],t[2]);if(t.length>=4&&t.length%2===0){const e=[];for(let n=0;n<t.length;n+=2)e.push(new H(t[n],t[n+1]));return e}}return t}function Yn(t,e,n){t[e]={value:st(n)}}function Xn(t,e,n){if(!t.uniforms[e])return;const a=t.uniforms[e],s=st(n);Array.isArray(s)&&s.length>0&&s[0]instanceof H?a.value=s:(s instanceof H||s instanceof we)&&(a.value instanceof H||a.value instanceof we)?a.value.fromArray(Array.isArray(n)?n:[n]):a.value=s}const Qn=({fractal:t,center:e,worldWidth:n,worldHeight:a,parameters:s,controlPoints:r,colorSchemeGlsl:i})=>{const{invalidate:p,gl:m}=hn(S=>({invalidate:S.invalidate,gl:S.gl})),v=c.useMemo(()=>{const S={FRACTAL_SHADER:t.getShaderCode(),EVALUATE_COLOR:i};return Zn.replace(/%(\w+)%/g,(y,P)=>String(S[P]))},[t,i]),g=c.useMemo(()=>{const S={center:{value:new H(0,0)},viewWidth:{value:1},viewHeight:{value:1}};t.getGuiParameters().forEach(A=>{S[A.name]={value:0}});const y=t.getInitialControlPoints(),P=t.getControlPointUniforms(y);if(P)for(const[A,L]of Object.entries(P))Yn(S,A,L);return new mn({uniforms:S,vertexShader:Jn,fragmentShader:v})},[t,v]);c.useEffect(()=>()=>{g.dispose()},[g]),c.useEffect(()=>{if(!g)return;const y=requestAnimationFrame(()=>{try{Kn(m.getContext(),g)}catch(P){throw P instanceof oe&&(console.error(`Shader error (${P.shaderType}):`,P.message),P.glslError&&console.error("GLSL Error:",P.glslError)),P}});return()=>cancelAnimationFrame(y)},[g,m]),c.useEffect(()=>{if(!g)return;g.uniforms.center?.value instanceof H&&g.uniforms.center.value.fromArray(e),g.uniforms.viewWidth.value=n,g.uniforms.viewHeight.value=a,t.getGuiParameters().forEach(y=>{g.uniforms[y.name]&&(g.uniforms[y.name].value=Ce(y,s[y.name]))});const S=t.getControlPointUniforms(r,s);if(S)for(const[y,P]of Object.entries(S))Xn(g,y,P);p()},[g,e,n,a,s,r,p,t]);const w=c.useMemo(()=>{const S=new un;return S.setDrawRange(0,3),S},[]);return c.useEffect(()=>()=>{w.dispose()},[w]),o.jsx("mesh",{material:g,geometry:w})},Ve=Ct(7),qe=$t(7),eo={top:0,right:0,bottom:0,left:0},to=({fractal:t,colorScheme:e,activeCustomScheme:n,onCustomSchemeSave:a,safeInset:s=eo})=>{const{theme:r}=We(),[i,p]=c.useState(()=>typeof window<"u"&&window.matchMedia("(orientation: landscape)").matches);c.useEffect(()=>{const l=window.matchMedia("(orientation: landscape)"),d=()=>p(l.matches);return l.addEventListener("change",d),()=>l.removeEventListener("change",d)},[]);const m=i?16:8,v={paddingTop:m,paddingRight:i?m:Math.max(m,s.right),paddingBottom:i?Math.max(m,s.bottom):m,paddingLeft:Math.max(m,s.left),scrollPaddingBottom:i?Math.max(m,s.bottom):0},g={top:0,right:s.right,bottom:s.bottom,left:i?0:s.left},[w,S]=c.useState(()=>{const l=t.getInitialGuiParameters(),d=Ie(),b={...l};for(const x of t.getGuiParameters())if(me(x)){const j=Ae.parse(d.get(`p_${x.name}`));j!==void 0&&(b[x.name]=Ce(x,j))}return b}),[y,P]=c.useState(()=>{const l=t.getInitialControlPoints(w),d=Ne("cp",qe);if(!d)return l;const[b,x]=t.getControlPointMinMax();return!(b!==void 0||x!==void 0)&&d.length!==l.length||b!==void 0&&d.length<b||x!==void 0&&d.length>x?l:d}),[A,L]=c.useState(()=>new K({pacing:[1,1,1],color0:[0,0,0],color1:[1,1,1]})),[N,f]=c.useState(!0),[_,C]=c.useState(1),[$,F]=c.useState(!1),[k,Z]=c.useState(0),[O,se]=c.useState(null),R=c.useRef(null),ie=c.useRef(0),V=!xt(),X=c.useRef(null),Q=pe({debounceMs:ge}),ee=pe({debounceMs:ge}),te=pe({debounceMs:ge}),h=c.useMemo(()=>Ne("view",Ve),[]),u=c.useCallback(l=>{C(l.zoom),Q({view:Ve.format(l)})},[Q]),D=_>=ce.ZOOM_WARNING_THRESHOLD,I=1500,G=c.useCallback((l,d,b)=>{se({text:l,position:d,expiresAt:Date.now()+b}),R.current!=null&&window.clearTimeout(R.current),R.current=window.setTimeout(()=>{R.current=null,se(null)},b)},[]),lt=c.useCallback((l,d,b)=>{const x=(j,B)=>t.getControlPointValues(B,w)?.[j]?.label??`Point ${j+1}`;if(l==="insert"){const j=[...y,b];ie.current=Date.now(),G(`Inserted ${x(j.length-1,j)}`,b,I)}else if(l==="delete"&&d!=null)G(`Removed ${x(d,y)}`,b,I);else if(l==="init-modify"&&d!=null){if(Date.now()-ie.current<800)return!1;G(`Changing ${x(d,y)}`,b,I)}else if(l==="done-modify"&&d!=null){const j=J(b[0],b[1]);G(`Changed ${x(d,y)} to ${j}`,b,I)}return!1},[y,t,G,w]),ct=c.useMemo(()=>{const[l,d]=t.getControlPointMinMax(),b=l!==void 0||d!==void 0,x=t.controlPointNoun;return b?`Drag a handle to change a ${x}
Long-press a handle to remove a ${x}
Long-press empty space to add a ${x}
Double-tap to reset handles and view`:`Drag the handle to change ${t.getControlPointValues(y,w)?.[0]?.label??x}
Double-tap to reset handles and view`},[t,y,w]);c.useEffect(()=>()=>{R.current!=null&&(window.clearTimeout(R.current),R.current=null)},[]);const Me=c.useRef(t);c.useEffect(()=>{if(Me.current===t)return;Me.current=t;const l=t.getInitialGuiParameters();S(l),P(t.getInitialControlPoints(l)),Z(x=>x+1);const d={view:null,cp:null};Ie().forEach((x,j)=>{j.startsWith("p_")&&(d[j]=null)}),Je(d)},[t]);const le=c.useRef(w),je=c.useRef(t);c.useEffect(()=>{if(je.current!==t){je.current=t,le.current=w;return}if(le.current===w)return;const l=le.current;le.current=w,P(d=>{const b=t.adjustControlPointsForParameterChange(d,l,w);if(b)return b;const x=t.getInitialControlPoints(w);return d.length===x.length?d:d.length<x.length?[...d,...x.slice(d.length)]:d.slice(0,x.length)})},[w,t]),c.useEffect(()=>{const l={},d=t.getInitialGuiParameters();for(const b of t.getGuiParameters())me(b)&&(l[`p_${b.name}`]=w[b.name]!==d[b.name]?Ae.format(w[b.name]):null);ee(l)},[w,t,ee]),c.useEffect(()=>{const l=t.getInitialControlPoints(w),d=y.length===l.length&&y.every((b,x)=>b[0]===l[x][0]&&b[1]===l[x][1]);te({cp:d?null:qe.format(y)})},[y,w,t,te]);const ht=c.useCallback(()=>{if(!V)return;const l=X.current;l&&(document.fullscreenElement?document.exitFullscreen().catch(()=>{}):l.requestFullscreen().catch(()=>{}))},[V]);c.useEffect(()=>{if(!V)return;const l=()=>F(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",l),()=>document.removeEventListener("fullscreenchange",l)},[V]),c.useEffect(()=>{f(e!=="custom")},[e]);const mt=t.getGuiParameters().map(l=>{if(me(l)){const d=t.getDynamicParameterBounds(l,w),b=w[l.name],x=Math.max(d.min,Math.min(d.max,b));return o.jsxs("div",{className:"min-w-[150px] flex-[2_1_0]",title:l.description,children:[o.jsx(T,{label:l.displayName,min:d.min,max:d.max,value:x,onChange:j=>S(B=>({...B,[l.name]:Ce(l,j)})),theme:r,posToVal:l.posToVal,valToPos:l.valToPos,helpText:l.description??l.summary,helpTextClassName:"tall-landscape:hidden"}),(l.summary||l.description)&&o.jsxs("div",{className:E("px-3 mt-0.5 text-[10px] leading-tight",r==="dark"?"text-gray-400":"text-gray-500"),children:[o.jsx("p",{className:"tall-landscape:hidden line-clamp-1",children:l.summary??l.description}),o.jsx("p",{className:"hidden tall-landscape:block",children:l.description??l.summary})]})]},l.name)}return null}),ut=w.slowdown>0?1/w.slowdown:1,de=t.getControlPointValues(y,w),[dt,pt]=t.getControlPointMinMax(),gt=c.useMemo(()=>e==="custom"?A.toGlslFragment():n?n.toGlslFragment():ue[e]?.toGlslFragment()??ue[ye].toGlslFragment(),[e,A,n]),ft=c.useMemo(()=>{const l=t.getInitialControlPoints(w),d=t.getControlPointValues(l,w);return l.map((b,x)=>({position:b,key:x,label:d?.[x]?.label}))},[t,w]);return o.jsxs("div",{className:E("w-full h-full flex flex-col landscape:flex-row overflow-hidden",r==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[o.jsxs("div",{className:"flex-shrink-0 landscape:w-64 lg:w-72 overflow-y-auto overflow-x-hidden",style:v,children:[o.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),o.jsxs("div",{className:"flex flex-wrap items-center gap-x-2 gap-y-1",children:[mt,e==="custom"&&o.jsx("div",{className:E(!N&&"w-full my-2"),children:o.jsx(xn,{onChange:L,onSave:a,isMinimized:N,onToggle:()=>f(l=>!l)})}),de&&de.length>0&&o.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:r==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:de.map(l=>o.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[o.jsx("p",{className:E("text-sm font-medium",r==="dark"?"text-gray-300":"text-gray-700"),children:l.label}),o.jsx("p",{className:E("text-base font-mono",r==="dark"?"text-gray-200":"text-gray-800"),children:l.value})]},l.label))})]})]}),o.jsxs("div",{ref:X,className:E("flex-grow flex items-center justify-center relative",$&&(r==="dark"?"bg-gray-900":"bg-gray-100")),style:{minWidth:0,minHeight:0},children:[o.jsx(_t,{viewParams:{baseViewSize:ce.BASE_VIEW_SIZE,minZoom:ce.MIN_ZOOM,maxZoom:ce.MAX_ZOOM,initialView:h},onViewChange:u,frameloop:"demand",onInfoOverlay:(l,d)=>{const b={centerWidth:7,radiusWidth:5,smallDelimiter:"ē"},x=Fe(d.center[0],d.worldWidth/2,b),j=Fe(d.center[1],d.worldHeight/2,b),B=[{align:"SE",content:`X:${x}
Y:${j}`}];l&&B.unshift({align:"SW",content:J(...l)});const Ee=t.getCanvasOverlayString(y,w),ke=t.title;return B.push({align:"NC",content:Ee?`${ke} | ${Ee}`:ke}),O&&Date.now()<O.expiresAt&&B.push(O.position==="MC"?{align:"MC",content:O.text}:{ref:O.position,content:O.text}),B},controlPoints:y,onControlPointsChange:P,onControlEvent:lt,tapHintMessage:ct,controlPointParams:{controlPoints:ft,min:dt,max:pt,showGrid:!0,dragFactor:ut},safeInset:g,gl:{powerPreference:"default",antialias:!1},children:(({center:l,worldWidth:d,worldHeight:b})=>o.jsx(Qn,{fractal:t,center:l,worldWidth:d,worldHeight:b,parameters:w,controlPoints:y,colorSchemeGlsl:gt}))},k),D&&o.jsxs("div",{className:E("absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 rounded-lg text-sm",r==="dark"?"bg-amber-900/90 text-amber-100":"bg-amber-100/90 text-amber-900"),title:"At extreme zoom levels, visual artifacts may appear due to floating-point precision limits",children:[o.jsx(sn,{className:"w-5 h-5 flex-shrink-0"}),o.jsx("span",{children:"High zoom - precision artifacts may appear"})]}),V&&o.jsx("button",{onClick:ht,className:E("absolute top-2 right-2 p-1.5 rounded-md opacity-60 hover:opacity-100 transition-opacity",r==="dark"?"bg-gray-800/80 text-gray-200 hover:bg-gray-700/90":"bg-white/80 text-gray-700 hover:bg-white/95"),title:$?"Exit fullscreen":"Fullscreen","aria-label":$?"Exit fullscreen":"Enter fullscreen",children:$?o.jsx(ln,{className:"w-5 h-5"}):o.jsx(cn,{className:"w-5 h-5"})})]})]})},no=[{name:"mandelbrot",title:"Mandelbrot/Phoenix",page:"src/core/mandelbrot.md"},{name:"mandelbrot-high",title:"Mandelbrot (high-order)",page:"src/core/mandelbrot-high.md"},{name:"julia",title:"Julia",page:"src/core/julia.md"},{name:"julia-high",title:"Julia (high-order)",page:"src/core/julia-high.md"},{name:"newton",title:"Newton",page:"src/core/newton.md"},{name:"lambda",title:"Lambda",page:"src/core/lambda.md"},{name:"magnet1",title:"Magnet 1",page:"src/core/magnet1.md"},{name:"magnet2",title:"Magnet 2",page:"src/core/magnet2.md"},{name:"nova",title:"Nova",page:"src/core/nova.md"},{name:"burningShip",title:"Burning Ship",page:"src/core/burningShip.md"},{name:"tricorn",title:"Tricorn/Multicorn",page:"src/core/tricorn.md"}],oo={items:no},ao={APP_ACCENT:{light:"#7c3aed",dark:"#a78bfa",frame:"#6d28d9"},APP_HELP_TOPICS:[{label:"How to Explore Interactively",content:`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the fractal view to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the fractal view to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
complex parameter. If not visible, hover over or single-click the fractal view
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move complex parameter:** Click and drag a control point to move it.
- **Reset complex parameter:** Double-click a complex parameter to reset its position.
- **Add complex parameter:** Long-press on an empty area to add a new complex parameter.
- **Remove complex parameter:** Long-press on an existing complex parameter to remove it.

### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the fractal view to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the fractal view to reset the
  pan and zoom to their original or best-fit values.

Some visualizations may feature control points, each representing a
complex parameter. If not visible, tap anywhere on the fractal view to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move complex parameter:** Drag a control point to move it.
- **Reset complex parameter:** Double-tap a complex parameter to reset its position.
- **Add complex parameter:** Long-press on an empty area to add a new complex parameter.
- **Remove complex parameter:** Long-press on an existing complex parameter to remove it.

This application allows you to explore the intricate beauty of various fractals.
You can interact with the fractals in two main ways: by manipulating the view on
the main fractal view and by adjusting parameters in the control panel.

### Header Navigation Bar

The fractal type and color scheme can be changed using the dropdown menus in the
header navigation bar.

### Control Panel

The control panel, located on the left (or top on phones in portrait mode),
provides the following options:

- **Parameters:** Some fractals have additional parameters that can be adjusted
  with sliders. These parameters can dramatically change the fractal's shape.
- **Complex Parameters:** Some fractals are defined by one or more complex
  numbers, which are displayed in the control panel. You can modify these
  parameters by interacting with the control points on the fractal view.

### Interacting with the Fractal View

You can use mouse or touch screen to pan, zoom, and reset the fractal view.
Some fractals have complex parameters that are shown as control points in
the fractal view. You can change those parameters by moving them around.
A few fractals even let you add or remove complex parameters.

### Fullscreen

Click the fullscreen button (top-right of the canvas) to enter fullscreen
mode for a distraction-free view. Press Escape or click the button again
to exit.

### Sharing

Your current view—including fractal type, zoom, center, parameters, and
color scheme—is saved in the URL. Copy and share the link to let others
see exactly what you see.
`,key:"usage"},null,{},{label:"Math of Color Schemes",content:`## The Art and Science of Fractal Coloring

### Introduction

Fractals are mathematical objects of infinite detail and complexity. Visualizing a fractal involves creating a two-dimensional image from its abstract mathematical definition. This process typically uses an iterative calculation for each point, represented by its coordinates $(x, y)$ or as a complex number $z = x + iy$. The result of this calculation for each point is a scalar value, $t = t(x, y)$, which we then use to determine a color. Our creative task is to transform this numerical value $t$ into a visually appealing color.

For many well-known fractals, like the Mandelbrot set, the iterative calculation determines whether a point belongs to the set or "escapes" to infinity.
-   If the point does not escape (meaning it is inside the set after a maximum number of iterations), we can assign it a special color. This is often black, representing a "black hole" from which no point can escape.
-   If the point escapes, we record the number of iterations it takes to do so. This number, often processed through a logarithmic function for better visual distribution, becomes the value $t$.

The core of fractal coloring is defining a function that maps the continuous value $t$ to a color in a color space, typically RGB (Red, Green, Blue). This document explores several mathematical models for creating these color schemes, from simple linear gradients to elegant, periodic paths in 3D color space.

### A General Concept: The Pacing Function

All our coloring models share a common concept: a **pacing function**. This function transforms the raw fractal value $t$ into a new parameter, let's call it $\\tau$, which then drives the color generation. This mechanism allows us to control the speed and "feel" of the color transitions.

The most common pacing function is a power function:
\`\`\`math
\\tau = t^\\alpha
\`\`\`
where the **Pacing Exponent**, $\\alpha$, adjusts the gradient's feel:
-   $\\alpha = 1$: Linear pacing, creating a uniform gradient.
-   $\\alpha < 1$: Colors change quickly for small values of $t$ and then slow down.
-   $\\alpha > 1$: Colors change slowly at first for small $t$ and then accelerate.

To create more complex and rich color schemes, we can apply this pacing function independently to each of the R, G, and B channels. This is achieved by using a vector of exponents $\\bm{\\alpha} = (\\alpha_R, \\alpha_G, \\alpha_G)$, which produces a vector of paced values $\\bm{\\tau} = (t^{\\alpha_R}, t^{\\alpha_G}, t^{\\alpha_B})$. Some models use a scalar $\\alpha$, while others use a vector $\\bm{\\alpha}$ for more fine-grained control. Note that in this essay, we use bold letters for 3D vectors.

### Color Scheme Models

We employ several models to generate colors. The simplest models apply a function to each color channel independently, while more sophisticated models create colors that follow a continuous path in 3D RGB space.

#### Linear Model

This is the most straightforward model, creating a linear gradient between two colors. The color for each channel is calculated independently, allowing for different transition speeds for red, green, and blue.

The formula for the final color uses vector notation. All operations are performed component-wise:
\`\`\`math
\\bm{\\chi}(t) = \\bm{A} t^{\\bm{\\alpha}} + \\bm{B}
\`\`\`
-   $t^{\\bm{\\alpha}}$ is a shorthand for the vector $(t^{\\alpha_R}, t^{\\alpha_G}, t^{\\alpha_B})$.
-   The pacing exponent $\\bm{\\alpha} = (\\alpha_R, \\alpha_G, \\alpha_B)$ is a vector, allowing different pacing for each color channel.
-   $\\bm{A}$ (scale) and $\\bm{B}$ (base) are 3D vectors representing RGB colors.

To make configuration intuitive, we define the scheme using two endpoint colors:
-   $\\bm{C}_0$: The color at $t=0$.
-   $\\bm{C}_1$: The color at $t=1$.

The parameters $\\bm{A}$ and $\\bm{B}$ are then derived as follows:
-   At $t=0$, the formula gives $\\bm{C}_0 = \\bm{B}$ (assuming positive exponents). Thus, $\\bm{B} = \\bm{C}_0$.
-   At $t=1$, we have $\\bm{C}_1 = \\bm{A} + \\bm{B}$. Thus, $\\bm{A} = \\bm{C}_1 - \\bm{B} = \\bm{C}_1 - \\bm{C}_0$.

##### Intuitive Explanation

Think of this as mixing two paint colors. You pick a starting color ($\\bm{C}_0$) and an ending color ($\\bm{C}_1$), and the computer generates a smooth gradient between them. The vector exponent $\\bm{\\alpha}$ is a fun twist: it lets you control how the red, green, and blue components transition independently, creating a more dynamic gradient than a simple linear blend.

#### Cosine Model

This model generates smooth, periodic color waves using the cosine function.

The underlying formula is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + \\bm{S} \\cos(2\\pi (\\bm{\\nu} t^\\alpha + \\bm{\\phi}))
\`\`\`
where:
-   $\\bm{C}_\\odot$ (center) and $\\bm{S}$ (scale/amplitude) are 3D RGB vectors.
-   $\\bm{\\nu}$ (frequency) and $\\bm{\\phi}$ (phase, with each component varying between 0 and 1) are also 3D RGB vectors.
-   The \`cos\` function is applied component-wise.
-   In this model, the pacing exponent $\\alpha$ is a scalar.

For easier use with color pickers, we configure the scheme by defining two colors that bound the wave:
-   $\\bm{C}_1$: The color at the trough of the wave (when the cosine component for each channel is -1).
-   $\\bm{C}_2$: The color at the peak of the wave (when the cosine component for each channel is 1).

The center ($\\bm{C}_\\odot$) and scale ($\\bm{S}$) vectors are then derived from these two colors:
-   $\\bm{C}_1 = \\bm{C}_\\odot - \\bm{S}$
-   $\\bm{C}_2 = \\bm{C}_\\odot + \\bm{S}$

Solving this system gives:
-   $\\bm{C}_\\odot = (\\bm{C}_1 + \\bm{C}_2) / 2$
-   $\\bm{S} = (\\bm{C}_2 - \\bm{C}_1) / 2$

This method is excellent for creating vibrant, pulsating color schemes.

##### Intuitive Explanation: Color Waves and Lissajous Curves

Imagine color that pulses in waves, like ripples on a pond. The cosine model uses the \`cos()\` function to create smooth, repeating cycles of color. The interesting part is that we have three waves—Red, Green, and Blue—each with its own frequency (from $\\bm{\\nu}$) and phase (from $\\bm{\\phi}$).

When you combine these three independent waves, the final color follows a complex 3D path through color space. This path is a **Lissajous curve**. Our Cosine model generates a 3D Lissajous curve in the world of colors, which is why it can produce such rich and intricate patterns.

![Lissajous Curve](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lissajous_curve_3by4.svg/250px-Lissajous_curve_3by4.svg.png)

You can learn more about Lissajous curves on [Wikipedia](https://en.wikipedia.org/wiki/Lissajous_curve).

#### Elliptical Model

This model creates a sophisticated color scheme by making the colors travel along an elliptical path in 3D RGB space. In this model, the pacing exponent $\\alpha$ is a scalar.

The general parametric equation for an ellipse in 3D space is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + \\bm{A} \\cos(2\\pi(t + \\phi)) + \\bm{B} \\sin(2\\pi(t + \\phi))
\`\`\`
Here, $\\bm{\\chi}(t)$ is the color for a given value $t$. $\\bm{C}_\\odot$ is the center of the ellipse in color space. The vectors $\\bm{A}$ and $\\bm{B}$ define the shape and orientation of the ellipse. $\\phi$ is a phase angle that determines the starting point on the ellipse.

##### Our Strategy: An Ellipse from Three Colors

Defining a 3D ellipse from scratch requires several parameters. To simplify configuration, we derive the entire ellipse from just **three** user-chosen colors, placed at strategic points along the path:
-   $\\bm{C}_0$: The color at $t=0$.
-   $\\bm{C}_1$: The color at $t=1/4$.
-   $\\bm{C}_2$: The color at $t=1/2$.

The period of the color cycle is 1. The crucial constraint is that the center of our ellipse, $\\bm{C}_\\odot$, is the midpoint of the line segment connecting $\\bm{C}_0$ and $\\bm{C}_2$:
\`\`\`math
\\bm{C}_\\odot = \\frac{\\bm{C}_0 + \\bm{C}_2}{2}
\`\`\`
This constraint simplifies the problem enough to define a unique ellipse from the three chosen points.

##### Deriving the Color Formula

By using our three points and the midpoint constraint, we can solve for the unknown parameters. Let $\\bm{C}'_0 = \\bm{C}_0 - \\bm{C}_\\odot$ and $\\bm{C}'_1 = \\bm{C}_1 - \\bm{C}_\\odot$.

First, we find the starting angle $\\theta_0 = 2\\pi \\phi$ of the ellipse:
\`\`\`math
\\theta_0 = \\frac{1}{2} \\operatorname{atan2}\\left(2 (\\bm{C}'_0 \\cdot \\bm{C}'_1), |\\bm{C}'_1|^2 - |\\bm{C}'_0|^2\\right)
\`\`\`
The phase shift is then $\\phi = \\theta_0 / (2\\pi)$.

Next, we solve for the ellipse axes vectors, $\\bm{A}$ and $\\bm{B}$:
\`\`\`math
\\begin{align}
\\bm{A} = \\bm{C}'_0 \\cos\\theta_0 - \\bm{C}'_1 \\sin\\theta_0 \\
\\bm{B} = \\bm{C}'_0 \\sin\\theta_0 + \\bm{C}'_1 \\cos\\theta_0
\\end{align}
\`\`\`
Note that the Elliptical model can be seen as a special case of the Cosine model where all channels have the same frequency, forcing the Lissajous curve into a simple ellipse. However, configuring it with three points on the ellipse is often more intuitive.

##### Intuitive Explanation: The 3-Color Trick

Defining a 3D ellipse can be complicated. Asking a user to pick all the required parameters would be confusing! So, we use a clever trick. We only ask for **three colors** and arrange them at special positions: the start, the quarter-way point, and the halfway point of the color cycle. By also enforcing that the ellipse's center is the midpoint between the first and third colors, we can construct a unique and beautiful color path.

#### Advanced Elliptic with Damping

We can introduce more parameters for even greater control, allowing for spirals and other dynamic effects. The final, complete formula is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + e^{-\\beta t} \\left( \\bm{A} \\cos(2\\pi (\\nu t^\\alpha + \\phi)) + \\bm{B} \\sin(2\\pi (\\nu t^\\alpha + \\phi)) \\right)
\`\`\`
where
-   The pacing exponent $\\alpha$ is a scalar;
-   The parameter $\\nu$ is the frequency and $\\phi$ is the phase, both of which are scalars;
-   The parameter $\\beta$ is the **Damping Factor**, which creates an exponential decay effect.

A non-zero damping factor will create a spiral trajectory in the RGB color space.
-   If $\\beta > 0$, the ellipse shrinks as $t$ increases, causing the colors to spiral inwards towards the center color $\\bm{C}_\\odot$. This can create a sense of depth.
-   If $\\beta < 0$, the ellipse expands, with colors spiraling outwards.
-   If $\\beta = 0$, there is no damping, and the colors remain on the original ellipse path.

By playing with these parameters, you can generate an enormous variety of beautiful and complex color schemes for your fractals.
`,key:"colorscheme",icon:"book"},null,{label:"A Short History of Fractals",content:`## A Short History of Fractals

Have you ever looked at a snowflake up close, or noticed how a fern’s leaves look like tiny versions of the whole plant? That repeating, “pattern inside a pattern” idea is what fractals are all about.

### Early Clues

Long before anyone had the word *fractal*, mathematicians were stumbling onto strange shapes that didn’t fit the neat rules of geometry. In the 1800s, people like **Georg Cantor**, **Helge von Koch**, and **Giuseppe Peano** started drawing odd curves and sets. These shapes were puzzling because they were jagged, infinitely detailed, or didn’t seem to follow the normal rules of lines, squares, and circles. At the time, most mathematicians thought of them as “monsters” or curiosities rather than something useful.

* **Cantor Set (1883):** Imagine starting with a line, cutting out the middle third, and then doing the same to every piece left, over and over. What remains is tiny dust-like points.
* **Koch Snowflake (1904):** Start with a triangle, keep adding little triangles to each side again and again, and you’ll get a snowflake-like shape with an infinitely long edge!

### The Word “Fractal”

It wasn’t until the 1970s that these wild shapes got their modern name. A mathematician named **Benoît Mandelbrot** studied these “monsters” and realized they were more than curiosities. He called them **fractals**, from the Latin word *fractus*, meaning “broken” or “irregular.”

Mandelbrot showed that fractals appear everywhere in nature: the branching of trees, the outlines of mountains, the swirls of clouds, even in your own blood vessels. Instead of being useless, fractals turned out to be one of the best ways to describe the messy, rough patterns of the real world.

### Computers Make Them Beautiful

Before computers, drawing fractals by hand was almost impossible, since they repeat patterns over and over. But with computer graphics, Mandelbrot and others could “zoom in” endlessly and see the shapes blossom into stunning, colorful designs. The most famous of these is the **Mandelbrot Set**—a shape so rich that even today, people are still discovering new details when they zoom in.

### Usefulness of Fractals

Fractals aren’t just pretty pictures. Scientists use them to understand things like coastlines, lightning, galaxy clusters, and even the stock market. Engineers use fractal ideas in antennas and image compression. Artists use them to make mesmerizing digital art.

### Last Words...

Fractals show us that the world isn’t always smooth and simple. Nature likes to repeat itself in surprising, beautiful ways, and fractals help us see that order inside the chaos.
`,key:"essay"},{label:"About Fantastic Fractals",content:`## Iotic Fractal — An Fantastic Interactive Fractal Explorer

Iotic Fractal lets you dive into the mesmerizing world of complex dynamics and mathematical art. Switch instantly between classic and modern fractals—like Mandelbrot, Julia, and Newton—and explore them in real time with fluid pan and zoom. As you navigate, the app overlays precise complex coordinates and live view ranges, helping you connect visual patterns to their underlying math.

### What you can explore

- **Multiple fractal families**: Start with Mandelbrot, Julia, and Newton (and more varieties as they’re added), each with distinct visual structure and mathematical character.
- **Rich & Customizable Color Schemes**: Pick from curated color palettes, or design and save your own to reveal detail and structure in new ways.
- **Real-time interaction**: Navigate smoothly; every movement updates a helpful overlay that includes current complex coordinates and view extents.

### Intuitive controls that invite experimentation

- **Parameter sliders**: Tune fractal-specific parameters with responsive sliders designed for fine-grained control (including non-linear scaling where appropriate).
- **Complex parameters via control points**: For fractals defined by complex constants, drag control points directly on the canvas to shape the set dynamically. Double‑click a control point to reset it.
- **Color Scheme Editor**: Create your own color schemes from scratch. Saved schemes are automatically added to the menu for easy access.
- **Context-aware layout**: On larger screens, controls sit to the left of the canvas; on phones in portrait mode, they adapt to the top—always within easy reach.

### Helpful, math-aware guidance

- **Inline math and documentation**: Learn the theory behind each fractal with clear, readable math. Toggle a “Math” help modal tailored to the current fractal, or open a “Controls” guide for tips on interaction.
- **Live info overlay**: See exact complex coordinates under the cursor, plus real and imaginary ranges of the current view, alongside a concise status line for the active fractal.

### A focused, polished UI

- **Streamlined toolbar**: The header features compact drop-downs for fractal type and color scheme—icon-only when space is tight, descriptive when there’s room.
- **Fullscreen mode**: Click the fullscreen button on the canvas to fill the screen for an immersive experience.
- **Dark mode support**: Enjoy a thoughtfully styled dark theme for comfortable exploration day or night.
- **Share with a link**: It’s easy to share exactly what you’re viewing—including your selected fractal, zoom level, and color scheme (even custom ones).

### Built for performance and portability

- **High-performance rendering**: Real-time visualization ensures responsive exploration even at deep zoom levels.
- **Fast and responsive**: Quick to load with smooth interaction.
- **Desktop and mobile**: Ready for desktop and mobile builds, bringing the same experience beyond the browser.

### Who it’s for

- **Curious explorers**: Anyone captivated by visual complexity and emergent patterns.
- **Students and educators**: A hands-on way to connect complex numbers, iterative systems, and geometry with compelling visuals.
- **Math and art enthusiasts**: A canvas for creative rendering and mathematical experimentation.

Whether you’re zooming into a Mandelbrot filament, reshaping a Julia set via a complex control point, or studying Newton basins with precise parameter control, Fantastic Fractals makes the deep structure of mathematics both approachable and beautiful.

### Features

- Explore classic fractals like Mandelbrot, Julia, and Newton.
- Pan and zoom smoothly with real-time rendering.
- Design, save, and use your own custom color schemes.
- Pick from a selection of beautiful curated color palettes.
- Shape fractals dynamically by dragging control points on the canvas.
- Tune fractal-specific parameters with draggable control points and responsive sliders.
- Learn the math behind each fractal with tailored documentation.
- See live complex coordinates and view ranges as you explore.
- Go fullscreen for an immersive, distraction-free view.
- Share your exact view, including zoom and colors, with a single link (web version).
- Enjoy a clean interface with light and dark modes.

### What's next

#### Short\\-term

- More hand-picked locations and compositions, with greater variety in structure, scale, and mood.
- Curated parameter and color presets designed for striking visual results.
- High-resolution image exports suitable for prints, posters, and large-format displays.
- Subtle continuous animations such as slow parameter oscillations, phase shifts, and breathing zooms.

#### Long\\-term

- Three-dimensional sculptural fractals with depth, rotation, and lighting.
- Cinematic rendering with enhanced shading and depth cues for atmospheric results.
- (Creative collections) Save, organize, and revisit visual series and explorations.
- A shared gallery of featured and user-created views.
`,key:"about"}],APP_ICON:"/run/fractal/images/app-icon-96.webp",APP_INFO:{appName:"fractal",appTitle:"Fantastic Fractals",appVersion:"0.3.3",appDescription:"Generate and explore Mandelbrot, Julia, and other fractals interactively.",appKeywords:"fractal, fractals, fractal generator, interactive fractal, Mandelbrot set, Julia set, Newton's algorithm, burning ship, complex numbers, mathematical art, mathematical games, puzzle games, visualization, mathematical recreation, problem solving",buildTime:"2026-06-06T22:47:31.993Z",buildDiff:"1",gitCommitHash:"e314aee9",gitCommitFull:"e314aee9b74372aa1f627a06ee2a5c2b8eebb81e",gitCommitTime:"2026-06-06T18:18:39-04:00",gitBranchName:"main"},APP_PUBLIC_BASE:"https://driota.xyz/run/fractal/",AUX_PANE_CONFIG:{local:!0},HOME_URL:"/",SITE_AUX_PANE:{sections:[{title:"Mobile",items:[{label:"Join for Preview",info:"Join Google Group to get Android apps from Google Play (preview release)",icon:"Android",href:"https://groups.google.com/g/driota"},{label:"Coming Soon",info:"We are waiting for a modern apple silicon to build",icon:"iOS",href:"https://driota.xyz/ios.html"}]},{title:"Fractals",icon:"GlobeAlt",href:"https://driota.xyz/fractal/",items:[{label:"Play Store",note:"↑Join↑",info:'Free app. Click "Join for Preview" above first — required for preview access.',icon:"GooglePlay",href:"https://play.google.com/store/apps/details?id=xyz.driota.fractal"},{label:"Amazon",icon:"ShoppingBag",href:"https://www.amazon.com/dp/B0FNGZB5TN"}]},{title:"Triangles",icon:"GlobeAlt",href:"https://driota.xyz/trikona/",items:[{label:"Play Store",note:"↑Join↑",info:'Paid app ($3.14). Click "Join for Preview" above first — required for preview access.',icon:"GooglePlay",href:"https://play.google.com/store/apps/details?id=xyz.driota.trikona"},{label:"Amazon",icon:"ShoppingBag",href:"https://www.amazon.com/dp/B0G1L2GJ98"}]},{title:"Support Us",items:[{label:"YouTube",icon:"YouTube",href:"https://www.youtube.com/@driota"},{label:"Instagram",icon:"Instagram",href:"https://www.instagram.com/driota.xyz/"},{label:"TikTok",icon:"TikTok",href:"https://www.tiktok.com/@driota.xyz"},{label:"Drop a Note",icon:"PencilSquare",href:"https://docs.google.com/forms/d/e/1FAIpQLScyC0R1nBUOIg7OLLurmSB886AVjqVJPUc8G_c-WMK-BYV9mg/viewform?usp=dialog"},{label:"Buy Me a Coffee",icon:"BuyMeACoffee",href:"https://www.buymeacoffee.com/driota"},{label:"Patreon",icon:"Patreon",href:"https://www.patreon.com/driota"}]}]},SITE_AUX_PANE_URL:void 0,SITE_COPYRIGHT:"© Doctor Iota",SITE_URL:"https://driota.xyz"},ne=oo.items.map(t=>{const e=Wn[t.name];if(!e)throw new Error(`manifest.json references unknown fractal: ${t.name}`);return e}),Ue="Fantastic Fractals",ro="Generate and explore Mandelbrot, Julia, and other fractals interactively.",so={main:["Tap to show the handles,","  then drag one to reshape","Pinch or scroll to zoom · drag to pan","Double-tap empty space to reset","Adjust sliders in the control panel"].join(`
`),side:"Switch fractals",gear:"Pick a color scheme",help:"Usage tips, the math, and essays"};function ve(){return o.jsxs(o.Fragment,{children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),o.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),o.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#eed322"}),o.jsx("stop",{offset:"100%",stopColor:"#d4b606"})]})]}),o.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),o.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),o.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),o.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]})}function io(){const t=c.useMemo(()=>o.jsx("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:o.jsx(ve,{})}),[]),e=c.useMemo(()=>o.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[o.jsx(ve,{}),o.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"white",fillOpacity:"0.5",stroke:"gray",strokeWidth:"0.5",strokeOpacity:"0.8"}),o.jsx("g",{transform:"translate(12, 12) scale(0.5)",opacity:"0.8",children:o.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"black",transform:"translate(-12, -12)"})})]}),[]),n=c.useMemo(()=>o.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[o.jsx(ve,{}),o.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"white",fillOpacity:"0.8",stroke:"gray",strokeWidth:"0.5",strokeOpacity:"0.8"}),o.jsx("g",{transform:"translate(12, 12) scale(0.5)",opacity:"0.8",children:o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"black",transform:"translate(-12, -12)"})})]}),[]),a=c.useCallback(()=>{const f=["newton","mandelbrot","julia"],_=ne.filter(C=>f.includes(C.name));return _.length>0?_[Math.floor(Math.random()*_.length)]:ne[0]},[]),[s]=c.useState(()=>a()),{currentFractal:r}=Pt(f=>({currentFractal:ne.find(_=>_.name===f.get("name"))||s})),i=Mt("colors",Ft)??ye;c.useEffect(()=>{const f=jt().get("name");f?ne.some(_=>_.name===f)||(console.warn(`Fractal "${f}" not found; falling back to "${s.name}"`),Le({name:s.name},!1)):Le({name:s.name},!1,!0)},[s]);const[p,m]=c.useState(()=>W()),[v,g]=c.useState(null),w=c.useCallback(()=>{const f=W();return m(f),f},[]);c.useEffect(()=>{if(i.startsWith("custom:")){const f=W();m(f);const _=i.substring(7),C=f.find($=>$.name===_);C?g(fn(C)):Je({colors:ye})}else g(null)},[i]);const S=c.useMemo(()=>[{key:"math",label:`Math of ${r.title} Fractal`,icon:"book",content:`## ${r.title} Fractal

${r.math}`}],[r.title,r.math]),y=c.useCallback((f,_)=>{const C=`?${new URLSearchParams({name:f}).toString()}`,$=`#${new URLSearchParams({colors:_}).toString()}`;return C+$},[]),P=c.useMemo(()=>ne.map(f=>({key:f.name,text:f.title,href:y(f.name,i),icon:f.getIcon()?o.jsx("img",{src:f.getIcon(),alt:`${f.title} fractal icon`,className:"h-full w-full object-contain",loading:"lazy",decoding:"async",width:"256",height:"256"}):void 0,isCurrent:r.name===f.name})),[i,r.name,y]),A=c.useMemo(()=>{const f=C=>({text:Re[C],href:y(r.name,C),icon:t}),_=[...Ze.map(f),{text:"More Schemes",href:null,icon:t},...pn.map(C=>({...f(C),isSubEntry:!0}))];return _.push({text:"Custom",href:null,icon:e}),p.forEach(C=>{_.push({text:C.name,href:y(r.name,`custom:${C.name}`),icon:n,isSubEntry:!0})}),_.push({key:"custom-new",text:"New…",href:y(r.name,"custom"),icon:e,isSubEntry:!0}),_},[p,t,e,n,r.name,y]),L=c.useMemo(()=>{const f=[...Object.entries(Re).map(([C,$])=>({label:$,value:C}))];p.forEach(C=>{f.push({label:C.name,value:`custom:${C.name}`})});const _=f.find(C=>C.value===i);return _?_.label:"Custom"},[i,p]),N=`${Ue}: ${r.title} in ${L}`;return Et(N,Ue),kt(r.description,ro),o.jsx(o.Fragment,{children:o.jsx(Tt,{...Nt(ao),title:N,share:!0,appTopic:"Fractals",extraTopics:S,sideMenu:P,gearMenu:A,guide:so,children:f=>o.jsx(It,{errorTitle:"Rendering Error",errorMessage:"There was a problem with the fractal rendering. This may be due to WebGL or shader compatibility issues with your browser or device.",errorKeywords:["shader","webgl","glsl"],showErrorDetails:!1,children:o.jsx(c.Suspense,{fallback:o.jsx(At,{}),children:o.jsx(to,{fractal:r,colorScheme:i,activeCustomScheme:v,onCustomSchemeSave:w,safeInset:f})})},r.name)})})}function lo(){return o.jsx(St,{children:o.jsx(io,{})})}const it=document.getElementById("root");if(!it)throw new Error("Root element not found");bt.createRoot(it).render(o.jsx(vt.StrictMode,{children:o.jsx(lo,{})}));
