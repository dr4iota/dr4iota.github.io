import{r as d,j as o,i as Be,P as qe,d as L,z as Ie,E as Ge,g as Ve,e as We,f as Xe,h as Ye,k as Je,l as Ke,m as $e,n as _e,o as Ze,L as Qe,p as ze,q as et,t as tt,v as nt,w as Te,x as at,y as ot,M as rt,A as st,B as it,C as lt,D as ct,G as ht}from"./other-DP2tpXaD.js";import{C as dt,u as ut,V as he,S as ft,B as mt,a as pt}from"./three-C5rzz8Tl.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Ee=d.createContext(void 0),gt=({children:e})=>{const[n,t]=d.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});d.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),l=c=>{localStorage.getItem("theme")||t(c.matches?"dark":"light")};return r.addEventListener("change",l),()=>{r.removeEventListener("change",l)}},[]),d.useEffect(()=>{const r=window.document.documentElement;n==="dark"?r.classList.add("dark"):r.classList.remove("dark")},[n]);const s=()=>{t(r=>{const l=r==="light"?"dark":"light";return localStorage.setItem("theme",l),l})},a=d.useMemo(()=>({theme:n,toggleTheme:s}),[n]);return o.jsx(Ee.Provider,{value:a,children:e})},ne=()=>{const e=d.useContext(Ee);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},ye=e=>{if(e.startsWith("#")||e.startsWith("/"))return!1;try{return new URL(e,window.location.origin).hostname!==window.location.hostname}catch{return!1}},te=()=>new URLSearchParams(window.location.hash.substring(1)),me=(e,n=!1)=>{const t=te();Object.entries(e).forEach(([a,r])=>{r==null?t.delete(a):t.set(a,r)});const s=t.toString();if(window.location.hash.substring(1)!==s){const a=window.location.href,r=`${window.location.pathname}${window.location.search}`,l=s?`${r}#${s}`:r;n?window.history.pushState(null,"",l):window.history.replaceState(null,"",l);try{const c=new HashChangeEvent("hashchange",{oldURL:a,newURL:l});window.dispatchEvent(c)}catch{window.dispatchEvent(new Event("hashchange"))}}},xt=()=>typeof window<"u"&&!!window?.__TAURI__,yt=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),vt=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},wt=()=>xt()&&yt(),bt=vt()?"xl":"md",pe={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-2.5 text-lg",item:"px-5 py-3 text-lg"}},oe=({label:e,options:n,selected:t,onChange:s,theme:a,size:r=bt,align:l="left",icon:c,showIconOnly:i,width:h,iconOnlySize:g,trigger:v,buttonClassName:M})=>{const u=d.useRef(null),[p,b]=d.useState({}),P=ne?.(),y=a??P?.theme??"light",z=()=>{if(u.current){const j=u.current.getBoundingClientRect(),I={top:`${j.bottom+4}px`,minWidth:`${j.width}px`};l==="left"?I.left=`${j.left}px`:I.right=`${window.innerWidth-j.right}px`,b(I)}},x=r==="sm"?"h-4 w-4":r==="md"||r==="lg"?"h-5 w-5":"h-6 w-6",B=n?.find(j=>j?.name===t)?.icon??c;return o.jsxs(Be,{as:"div",className:"relative",style:!i&&h?{width:`${h}px`}:void 0,children:[o.jsx(qe,{ref:u,onClick:z,className:L(v?M:i?["p-2 rounded-full focus:outline-none",y==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",pe[r].button,y==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:v||(i?o.jsx("span",{className:L(!g&&x,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),style:g?{width:`${g}px`,height:`${g}px`}:void 0,children:B}):o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"flex items-center truncate",children:[B&&o.jsx("span",{className:L(x,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:B}),e&&`${e}: `,o.jsx("strong",{children:t})]}),o.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}))}),o.jsx(Ie,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:o.jsx(Ge,{style:p,className:L("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":l==="left","origin-top-right":l==="right"},y==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:o.jsx("div",{className:"py-1",children:n.map((j,I)=>{if(j===null)return o.jsx("div",{className:"my-1 h-px bg-gray-200 dark:bg-gray-700"},`divider-${I}`);const G=j.key??j.value??j.name??I,w=!!j.href,S=j.href?ye(j.href):!1;return o.jsx(Ve,{disabled:j.disabled,children:({focus:f,disabled:m})=>w&&!m?o.jsxs("a",{href:j.href,target:S?"_blank":"_self",rel:"noopener noreferrer",className:L("flex items-center justify-between w-full whitespace-nowrap",pe[r].item,f?y==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":y==="dark"?"text-gray-300":"text-gray-700"),children:[o.jsxs("div",{className:"flex items-center",children:[j.icon&&o.jsx("span",{className:"mr-3 h-5 w-5",children:j.icon}),j.name]}),S&&o.jsx(We,{className:"h-4 w-4"})]}):o.jsx("button",{onClick:()=>s&&s(j.value),disabled:m,className:L("w-full text-left block whitespace-nowrap",pe[r].item,m?y==="dark"?"text-gray-500":"text-gray-400":f?y==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":y==="dark"?"text-gray-300":"text-gray-700",m&&"cursor-not-allowed"),children:o.jsxs("div",{className:"flex items-center",children:[j.icon&&o.jsx("span",{className:"mr-3 h-5 w-5",children:j.icon}),j.name]})})},G)})})})})]})},$t=({client:e,slot:n,style:t={display:"block"},format:s="auto",responsive:a="true"})=>(d.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.error("AdSense error:",r)}},[]),o.jsx("ins",{className:"adsbygoogle",style:t,"data-ad-client":e,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":a})),Le=d.createContext(void 0),_t=({children:e,defaultLanguage:n="en",storageKey:t="language"})=>{const[s,a]=d.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem(t);if(i==="en"||i==="zh")return i;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return n});d.useEffect(()=>{typeof window<"u"&&localStorage.setItem(t,s)},[s,t]);const r=i=>a(i),l=()=>a(i=>i==="en"?"zh":"en"),c=d.useMemo(()=>({language:s,setLanguage:r,toggleLanguage:l}),[s]);return o.jsx(Le.Provider,{value:c,children:e})},zt=()=>{const e=d.useContext(Le);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},Tt=({appName:e,help:n,config:t,showUserProfile:s,renderToolbar:a,showLanguage:r,language:l,onLanguageChange:c,appIconUrl:i,showTitle:h=!0,toolbarWidthPx:g=0})=>{const{theme:v,toggleTheme:M}=ne(),{setLanguage:u}=zt(),p=()=>{if(!n)return null;if(typeof n=="string")return o.jsx("a",{href:n,target:ye(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o.jsx($e,{className:"h-8 w-8"})});if(Array.isArray(n)&&n.length>0){const x=n.map(_=>({name:_.name,href:_.href,icon:_.icon}));return o.jsx(oe,{options:x,align:"right",icon:o.jsx($e,{}),showIconOnly:!0,iconOnlySize:32})}return null},b=()=>{if(!t)return null;if(typeof t=="string")return o.jsx("a",{href:t,target:ye(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o.jsx(_e,{className:"h-8 w-8"})});if(Array.isArray(t)&&t.length>0){const x=t.map(_=>({name:_.name,href:_.href,icon:_.icon}));return o.jsx(oe,{options:x,align:"right",icon:o.jsx(_e,{}),showIconOnly:!0,iconOnlySize:32})}return null},P=x=>{c?.(x);try{u(x)}catch{}},y=typeof window<"u"&&te().get("applink")||void 0,z=()=>r?o.jsx(oe,{options:[{name:"English",value:"en"},{name:"中文",value:"zh"}],align:"right",icon:o.jsx(Ke,{}),showIconOnly:!0,iconOnlySize:32,onChange:x=>P(x)}):null;return o.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex items-center border-b border-gray-200 dark:border-gray-700 gap-3",children:[o.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[i&&(y?o.jsx("a",{href:y,className:"inline-block",title:y,children:o.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded cursor-pointer hover:opacity-90"})}):o.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded"})),h&&o.jsx("h1",{className:"text-xl font-bold truncate",children:e})]}),o.jsx("div",{className:"flex-1 min-w-0",children:typeof a=="function"?a(g):null}),o.jsxs("nav",{className:"flex items-center space-x-2",children:[o.jsx("button",{onClick:M,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:v==="light"?o.jsx(Xe,{className:"h-8 w-8"}):o.jsx(Ye,{className:"h-8 w-8"})}),z(),p(),b(),s&&o.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o.jsx(Je,{className:"h-8 w-8"})})]})]})},Mt=36,Me=1e3,jt=10,Q=(e,n,t,s,a,r,l)=>{if(t.length===0)return null;let c=null;const[i,h]=[s[0]-a/2,s[1]+r/2];for(let g=0;g<t.length;g++){const v=t[g],M=(v[0]-i)/a*l.width,u=(h-v[1])/r*l.height,p=Math.sqrt(Math.pow(e-M,2)+Math.pow(n-u,2));(c===null||p<c.distance)&&(c={index:g,distance:p})}return c&&c.distance<Mt?c:null},kt=({zoom:e,setZoom:n,center:t,setCenter:s,worldWidth:a,worldHeight:r,aspect:l,baseViewSize:c=4,onShowInfo:i,controlPoints:h=[],initialControlPoints:g=[],onControlPointsChange:v,minControlPoints:M,maxControlPoints:u})=>{const[p,b]=d.useState(null),P=d.useRef(p);P.current=p;const[y,z]=d.useState(!1),x=d.useRef(null),_=d.useRef(null),B=d.useCallback(()=>{n(1),s([0,0])},[n,s]),j=d.useCallback(()=>{const f=P.current;if(!(!v||!f)){if(f.type==="point"){if(M===void 0||h.length<=M)return;const m=h.filter(($,T)=>T!==f.index);v(m)}else{if(u===void 0||h.length>=u)return;const m=[...h,f.coords];v(m)}b(null)}},[h,u,M,v]),I=d.useCallback((f,m,$)=>{const T=f-$.left,C=m-$.top,N=Q(T,C,h,t,a,r,$);if(N)b({type:"point",index:N.index,flashing:!0});else{const k=t[0]-a/2+T/$.width*a,A=t[1]+r/2-C/$.height*r;b({type:"space",coords:[k,A],flashing:!0})}x.current=window.setTimeout(()=>{j(),x.current=null},Me)},[t,h,j,r,a]),G=Ze({onPointerDown:({event:f})=>{f.preventDefault();const m=f.target.getBoundingClientRect();if(!m)return;const{clientX:$,clientY:T}=f,C=$-m.left,N=T-m.top,k=Q(C,N,h,t,a,r,m);k?(z(!0),b({type:"point",index:k.index,flashing:!1})):b(null),i&&(_.current={x:$,y:T},x.current=window.setTimeout(()=>{I($,T,m)},Me))},onPointerUp:({event:f})=>{z(!1);const m=f.target.getBoundingClientRect();if(!m)return;const{clientX:$,clientY:T}=f,C=$-m.left,N=T-m.top,k=Q(C,N,h,t,a,r,m);b(k?{type:"point",index:k.index,flashing:!1}:null),x.current&&(clearTimeout(x.current),x.current=null)},onPointerMove:({event:f})=>{if(y)return;const m=f.target.getBoundingClientRect();if(!m)return;const{clientX:$,clientY:T}=f;if(x.current&&_.current){const W=$-_.current.x,X=T-_.current.y;Math.sqrt(W*W+X*X)>jt&&(clearTimeout(x.current),x.current=null,b(null))}const C=$-m.left,N=T-m.top,k=Q(C,N,h,t,a,r,m);if(b(k?{type:"point",index:k.index,flashing:!1}:W=>W?.type==="point"?null:W),!i)return;const A=$-m.left,E=T-m.top,V=t[0]+(A/m.width-.5)*a,D=t[1]+(.5-E/m.height)*r;i([V,D])},onDrag:({event:f,first:m,movement:[$,T],xy:[C,N],memo:k})=>{x.current&&(clearTimeout(x.current),x.current=null,b(E=>E?.type==="point"?{...E,flashing:!1}:null)),f.preventDefault();const A=f.target.getBoundingClientRect();if(A){if(m||!k){const E=C-A.left,V=N-A.top;if(v){const D=Q(E,V,h,t,a,r,A);if(D)return{dragMode:"point",pointIndex:D.index}}return{dragMode:"canvas",startCenter:t}}if(k.dragMode==="point"){if(!v)return k;const E=C-A.left,V=N-A.top,D=t[0]-a/2+E/A.width*a,W=t[1]+r/2-V/A.height*r,X=[...h];return X[k.pointIndex]=[D,W],v(X),k}if(k.dragMode==="canvas"){const{startCenter:E}=k;if(!E)return k;const V=$/A.width*a,D=T/A.height*r;return s([E[0]-V,E[1]+D]),k}}},onPinch:({event:f,first:m,offset:[$]})=>{f.preventDefault(),m&&(x.current&&(clearTimeout(x.current),x.current=null),b(null)),n($)},onWheel:({event:f,delta:[,m]})=>{if(m===0)return;const $=f.target.getBoundingClientRect();if(!$)return;const T=f.clientX-$.left,C=f.clientY-$.top,N=1.1,k=m<0?e*N:e/N;let A,E;l>=1?(E=c/k,A=E*l):(A=c/k,E=A/l);const V=T/$.width-.5,D=.5-C/$.height,W=t[0]+V*(a-A),X=t[1]+D*(r-E);n(k),s([W,X])},onDoubleClick:({event:f})=>{f.preventDefault();const m=f.target.getBoundingClientRect();if(!m)return;const $=f.clientX-m.left,T=f.clientY-m.top;if(v){const C=Q($,T,h,t,a,r,m);if(C&&g&&g[C.index]){const N=[...h];N[C.index]=g[C.index],v(N);return}}B()},onClick:({event:f})=>{if(!i)return;const m=f.currentTarget.getBoundingClientRect();if(!m)return;const{clientX:$,clientY:T}=f,C=$-m.left,N=T-m.top,k=t[0]+(C/m.width-.5)*a,A=t[1]+(.5-N/m.height)*r;i([k,A])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[e,0]}}),w={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...G(),onContextMenu:f=>f.preventDefault(),style:w},highlightedPoint:p}},Ct=["primary","secondary","tertiary","signal","accent","neutral"],ge=Ct,Pt={primary:"circle",secondary:"square",tertiary:"diamond",signal:"triangle",accent:"pentagram",neutral:"dot"},St={circle:1,square:1,diamond:1,triangle:1,pentagram:1.2,dot:0,star:1.2,cross:1,plus:1,hexagon:1,pentagon:1},re=e=>e.map(n=>n.join(",")).join(" "),Nt=Math.sin(Math.PI/10)/Math.sin(7*Math.PI/10),Fe=(e,n,t,s)=>{const a=[],r=n/2,l=r*s;for(let c=0;c<t*2;c++){const i=c*Math.PI/t-Math.PI/2,h=c%2===0?r:l;a.push([e[0]+h*Math.cos(i),e[1]+h*Math.sin(i)])}return re(a)},Rt=(e,n)=>Fe(e,n,5,Nt),At=(e,n)=>{const t=n/2,s=[[e[0],e[1]-t],[e[0]+t,e[1]],[e[0],e[1]+t],[e[0]-t,e[1]]];return re(s)},It=(e,n)=>{const t=n/2,s=e[0],a=e[1],r=[[s,a+t],[s-t*Math.sqrt(3)/2,a-t/2],[s+t*Math.sqrt(3)/2,a-t/2]];return re(r)},je=(e,n)=>{const t=n/2,s=n/5,[a,r]=e;return`M ${a-s},${r-t} L ${a+s},${r-t} L ${a+s},${r-s} L ${a+t},${r-s} L ${a+t},${r+s} L ${a+s},${r+s} L ${a+s},${r+t} L ${a-s},${r+t} L ${a-s},${r+s} L ${a-t},${r+s} L ${a-t},${r-s} L ${a-s},${r-s} Z`},Et=(e,n)=>{const t=n/2,s=[];for(let a=0;a<6;a++){const r=a*Math.PI/3;s.push([e[0]+t*Math.cos(r),e[1]+t*Math.sin(r)])}return re(s)},Lt=(e,n)=>{const t=n/2,s=[];for(let a=0;a<5;a++){const r=a*2*Math.PI/5-Math.PI/2;s.push([e[0]+t*Math.cos(r),e[1]+t*Math.sin(r)])}return re(s)},Ft={circle:(e,n)=>({tagName:"circle",cx:e[0],cy:e[1],r:n/2}),square:(e,n)=>({tagName:"rect",x:e[0]-n/2,y:e[1]-n/2,width:n,height:n}),diamond:(e,n)=>({tagName:"polygon",points:At(e,n)}),triangle:(e,n)=>({tagName:"polygon",points:It(e,n)}),pentagram:(e,n)=>({tagName:"polygon",points:Rt(e,n)}),dot:(e,n)=>({tagName:"circle",cx:e[0],cy:e[1],r:n/2}),star:(e,n)=>({tagName:"polygon",points:Fe(e,n,6,.5)}),plus:(e,n)=>({tagName:"path",d:je(e,n)}),cross:(e,n)=>({tagName:"path",d:je(e,n),transform:`rotate(45, ${e[0]}, ${e[1]})`}),hexagon:(e,n)=>({tagName:"polygon",points:Et(e,n)}),pentagon:(e,n)=>({tagName:"polygon",points:Lt(e,n)})},Ot=e=>e in Ft,ce={cursor:"grab",boxShadow:"0 0 0 2px white, 0 0 0 4px black"},Z={cursor:"grab",filter:"drop-shadow(0 0 2px black) drop-shadow(0 0 1px white)"},ke={circle:e=>({...ce,width:e,height:e,borderRadius:"50%"}),square:e=>({...ce,width:e,height:e}),diamond:e=>({...ce,width:e,height:e,transform:"rotate(45deg)"}),triangle:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)"}),pentagram:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}),dot:e=>({...ce,width:e,height:e,borderRadius:"50%"}),star:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0%, 63% 25%, 88% 25%, 75% 50%, 88% 75%, 63% 75%, 50% 100%, 37% 75%, 12% 75%, 25% 50%, 12% 25%, 37% 25%)"}),plus:e=>({...Z,width:e,height:e,clipPath:"polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)"}),cross:e=>({...Z,width:e,height:e,clipPath:"polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)",transform:"rotate(45deg)"}),hexagon:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"}),pentagon:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0, 95% 35%, 78% 90%, 22% 90%, 5% 35%)"})},Ht=(e,n=24)=>{let t;if(typeof e=="string"&&Ot(e))t=e;else{let l="primary";typeof e=="number"?l=ge[e%ge.length]||"primary":typeof e=="string"&&ge.includes(e)&&(l=e),t=Pt[l]}const s=St[t]??1,a=t==="dot"?8:n*s;return(ke[t]||ke.circle)(a)};function Dt(e="view",n="control point",t=!1,s=!1){let a=`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${e} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${e} to reset
  the pan and zoom to their original values.
`;return n&&(a+=`
Some visualizations may feature control points, each representing a
${n}. If not visible, hover over or single-click the ${e}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${n}:** Click and drag a control point to move it.
- **Reset ${n}:** Double-click a ${n} to reset its position.
`,t&&(a+=`- **Add ${n}:** Long-press on an empty area to add a new ${n}.
`),s&&(a+=`- **Remove ${n}:** Long-press on an existing ${n} to remove it.
`)),a+=`
### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${e} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${e} to reset the
  pan and zoom to their original or best-fit values.
`,n&&(a+=`
Some visualizations may feature control points, each representing a
${n}. If not visible, tap anywhere on the ${e} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${n}:** Drag a control point to move it.
- **Reset ${n}:** Double-tap a ${n} to reset its position.
`,t&&(a+=`- **Add ${n}:** Long-press on an empty area to add a new ${n}.
`),s&&(a+=`- **Remove ${n}:** Long-press on an existing ${n} to remove it.
`)),a}const Ce=5e3,Ut=500,Pe=25,Bt=({xRange:e,yRange:n,theme:t,worldToScreen:s,center:a,gridTooDense:r})=>{const l=d.useMemo(()=>{const i=[],[h,g]=e,[v,M]=n,u=t==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",p="0.8)",b="0.5)";for(let P=Math.ceil(h);P<=Math.floor(g);P++){const y=s([P,v]);if(!y)continue;const z=P===0;r&&!z||i.push(o.jsx("div",{className:"absolute",style:{left:y[0],top:0,width:1,height:"100%",backgroundColor:u+(z?p:b),transform:z?"translateX(-50%)":void 0}},`v-${P}`))}for(let P=Math.ceil(v);P<=Math.floor(M);P++){const y=s([h,P]);if(!y)continue;const z=P===0;r&&!z||i.push(o.jsx("div",{className:"absolute",style:{left:0,top:y[1],width:"100%",height:1,backgroundColor:u+(z?p:b),transform:z?"translateY(-50%)":void 0}},`h-${P}`))}return i},[e,n,t,s,r]),c=d.useMemo(()=>{const{pos:i}=ve([0,0],a,e,n),h=s(i);if(!h)return null;const g=t==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return o.jsx("div",{className:"absolute",style:{left:h[0],top:h[1],width:12,height:12,borderRadius:"50%",backgroundColor:g,transform:"translate(-50%, -50%)"}})},[a,e,n,t,s]);return o.jsxs(o.Fragment,{children:[l,c]})};function ve(e,n,t,s){const[a,r]=e,[l,c]=t,[i,h]=s;if(a>=l&&a<=c&&r>=i&&r<=h)return{pos:e,clipped:!1};const[g,v]=n,M=a-g,u=r-v;let p=1/0;const b=1e-9;if(Math.abs(M)>b){const z=(l-g)/M,x=(c-g)/M;if(z>0){const _=v+z*u;_>=i&&_<=h&&(p=Math.min(p,z))}if(x>0){const _=v+x*u;_>=i&&_<=h&&(p=Math.min(p,x))}}if(Math.abs(u)>b){const z=(i-v)/u,x=(h-v)/u;if(z>0){const _=g+z*M;_>=l&&_<=c&&(p=Math.min(p,z))}if(x>0){const _=g+x*M;_>=l&&_<=c&&(p=Math.min(p,x))}}if(p!==1/0&&p>0)return{pos:[g+p*M,v+p*u],clipped:!0};const P=Math.max(l,Math.min(c,a)),y=Math.max(i,Math.min(h,r));return{pos:[P,y],clipped:!0}}const qt=({children:e,initialZoom:n=1,initialCenter:t=[0,0],baseViewSize:s=4,onInfoOverlay:a,onViewChange:r,className:l,controlPoints:c=[],initialControlPoints:i=[],onControlPointsChange:h,controlPointGroups:g=[],minControlPoints:v,maxControlPoints:M,showGridOverlay:u=!0})=>{const{theme:p}=ne(),[b,P]=d.useState(n),[y,z]=d.useState(t),[x,_]=d.useState(1),[B,j]=d.useState({pixelWidth:0,pixelHeight:0}),[I,G]=d.useState(null),[w,S]=d.useState(0),f=d.useRef(null),m=d.useRef(null),$=d.useRef(null);d.useEffect(()=>{const R=$.current;if(!R)return;const F=new ResizeObserver(U=>{for(let O of U){const{width:H,height:q}=O.contentRect;_(H>0&&q>0?H/q:1),j({pixelWidth:H,pixelHeight:q})}});return F.observe(R),()=>F.disconnect()},[]);const[T,C]=d.useMemo(()=>{let R,F;return x>=1?(F=s/b,R=F*x):(R=s/b,F=R/x),[R,F]},[b,x,s]),N=d.useMemo(()=>({center:y,worldWidth:T,worldHeight:C,zoom:b,...B}),[y,T,C,b,B]);d.useEffect(()=>{r&&r(N)},[N,r]);const k=d.useCallback(()=>{f.current&&clearTimeout(f.current),m.current&&clearTimeout(m.current),f.current=window.setTimeout(()=>{S(0),f.current=null},Ce),m.current=window.setTimeout(()=>{G(null),m.current=null},Ce+Ut)},[]),A=d.useCallback(R=>{!a&&c.length===0&&!u||(f.current&&clearTimeout(f.current),m.current&&clearTimeout(m.current),R&&G(R),S(1),k())},[a,c.length,u,k]),E=d.useCallback(R=>{k(),h&&h(R)},[h,k]),{controlHandlers:V,highlightedPoint:D}=kt({zoom:b,setZoom:P,center:y,setCenter:z,worldWidth:T,worldHeight:C,aspect:x,baseViewSize:s,onShowInfo:A,controlPoints:c,initialControlPoints:i,onControlPointsChange:w>0?E:void 0,minControlPoints:v,maxControlPoints:M}),{style:W,...X}=V,[J,K]=d.useMemo(()=>{const R=[y[0]-T/2,y[0]+T/2],F=[y[1]-C/2,y[1]+C/2];return[R,F]},[y,T,C]);d.useEffect(()=>()=>{f.current&&clearTimeout(f.current),m.current&&clearTimeout(m.current)},[]);const ae=d.useCallback(R=>{if(!$.current)return null;const{width:F,height:U}=$.current.getBoundingClientRect(),[O,H]=J,[q,Y]=K,ie=(R[0]-O)/T*F,le=(Y-R[1])/C*U;return[ie,le]},[J,K,T,C]),He=d.useMemo(()=>{if(!u)return null;let R=!1;if($.current){const{pixelWidth:F,pixelHeight:U}=N,O=F/T,H=U/C;(O<Pe||H<Pe)&&(R=!0)}return o.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:w},children:o.jsx(Bt,{xRange:J,yRange:K,theme:p,worldToScreen:ae,center:y,gridTooDense:R})})},[u,w,J,K,p,ae,y,N,T,C]),De=d.useMemo(()=>{const R=O=>{const H=O?128:48,q=O?120:44;return{containerStyle:{width:H,height:H},highlightStyle:{width:q,height:q,borderWidth:O?46:8},highlightClass:O?"highlight-animated-flashing":"highlight-animated-normal"}},F=c.map((O,H)=>{const{pos:q}=ve(O,y,J,K),Y=ae(q);if(!Y)return null;const ie=Ht(g[H]),le=D?.type==="point"&&D.index===H,fe=R(le&&D.flashing);return o.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...fe.containerStyle},children:[le&&o.jsx("div",{className:fe.highlightClass,style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...fe.highlightStyle}}),o.jsx("div",{className:"control-point-animating",style:{...ie,gridColumn:1,gridRow:1}})]},H)});let U=null;if(D?.type==="space"){const{pos:O}=ve(D.coords,y,J,K),H=ae(O);if(H){const q=R(D.flashing);U=o.jsx("div",{className:"absolute",style:{left:H[0],top:H[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...q.containerStyle},children:o.jsx("div",{className:"highlight-animated-flashing",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...q.highlightStyle}})})}}return F.every(O=>O===null)&&!U?null:o.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:w},children:[F,U]})},[c,y,J,K,ae,g,w,D]),Ue=d.useMemo(()=>{if(!I||!a)return null;const R=a(I,N);if(!R)return null;const F=typeof R=="string"?{"top-left":R}:R;return Object.keys(F).length===0?null:Object.entries(F).map(([U,O])=>{if(!O)return null;const H=O.trim().split(`
`);return o.jsx("div",{className:L("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":U==="top-left","top-0 right-0 text-right":U==="top-right","bottom-0 left-0":U==="bottom-left","bottom-0 right-0 text-right":U==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":U==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":U==="bottom-center"}),style:{opacity:w},children:o.jsx("div",{className:L("p-1 rounded-md text-xs font-mono space-y-1",p==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:H.map((q,Y)=>o.jsx("div",{children:q},Y))})},U)})},[I,a,p,w,N]);return o.jsxs("div",{ref:$,className:L("w-full h-full relative",l,p==="dark"?"theme-dark":"theme-light"),style:W,...X,children:[o.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden",children:e(N)}),He,Ue,De]})},Gt=({children:e,adSenseConfig:n,...t})=>{const[s,a]=d.useState(!0),[r,l]=d.useState("medium"),[c,i]=d.useState(typeof window<"u"?window.innerWidth:0),[h,g]=d.useState(typeof window<"u"?window.visualViewport?.height??window.innerHeight:0),v=n?.client&&n?.slot,M=!!t.renderToolbar,u=wt();d.useEffect(()=>{const _=()=>{const I=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${I}px`)},B=()=>{a(M||(window.visualViewport?.height??window.innerHeight)>=600);const I=window.innerWidth,G=window.visualViewport?.height??window.innerHeight;i(I),g(G);const w=I<640,S=I>=1024;l(w?"narrow":S?"wide":"medium"),_()};B();const j=window.visualViewport??window;return j.addEventListener("resize",B),()=>{j.removeEventListener("resize",B)}},[]);const p=v?n?.height??90:0,b=v?n?.width??300:0,P=v&&r==="wide",y=r==="narrow"?!1:r==="wide"?!0:!M,z=()=>{const _=c,B=32,j=12,I=48,G=8,w=t.appIconUrl?32:0,S=220;let f=0;f+=1,t.showLanguage&&(f+=1);const m=t.help;(typeof m=="string"||Array.isArray(m)&&m.length>0)&&(f+=1);const $=t.config;(typeof $=="string"||Array.isArray($)&&$.length>0)&&(f+=1),t.showUserProfile&&(f+=1);const T=f>0?f*I+(f-1)*G:0,C=y&&w>0?8:0,N=y?S:0,k=w+C+N,A=M?2*j:j,E=_-B-k-T-A;return Math.max(0,E)},x=o.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:u?{paddingTop:16,paddingBottom:12}:void 0,children:[s&&o.jsx(Tt,{...t,showTitle:y,toolbarWidthPx:M?z():0}),o.jsx("main",{className:"flex-grow min-h-0 p-0",children:e})]});return v?o.jsxs("div",{className:"flex items-stretch flex-"+(P?"row":"col"),children:[o.jsx("div",{style:P?{width:`${Math.max(0,c-b)}px`,height:`${h}px`}:{width:`${c}px`,height:`${Math.max(0,h-p)}px`},children:x}),o.jsx("div",{style:P?{width:`${b}px`,height:`${h}px`}:{width:`${c}px`,height:`${p}px`},children:o.jsx($t,{client:n.client,slot:n.slot})})]}):o.jsx("div",{style:{width:`${c}px`,height:`${h}px`},children:x})},Vt=({isOpen:e,onClose:n,title:t,children:s,size:a="lg"})=>{const{theme:r}=ne(),l=c=>{switch(c){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return o.jsx(Ie,{appear:!0,show:e,as:d.Fragment,children:o.jsxs(Qe,{as:"div",className:L("relative z-50",r),onClose:n,children:[o.jsx(ze,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),o.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:o.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:o.jsx(ze,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:o.jsxs(et,{className:L(l(a),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[o.jsx(tt,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:t}),o.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o.jsx(nt,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),o.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},Wt=({label:e,min:n,max:t,value:s,onChange:a,theme:r,valueLabel:l=h=>Math.round(h),posToVal:c=h=>n+(t-n)*h,valToPos:i=h=>(h-n)/(t-n)})=>{const h=d.useRef(null),g=d.useCallback(y=>{if(h.current){const z=h.current.getBoundingClientRect(),x=Math.max(0,Math.min(1,(y-z.left)/z.width));a(c(x))}},[a,c]),v=y=>{y.preventDefault(),g(y.clientX);const z=_=>{g(_.clientX)},x=()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",x)},M=y=>{y.preventDefault(),y.touches.length>0&&g(y.touches[0].clientX);const z=_=>{_.touches.length>0&&g(_.touches[0].clientX)},x=()=>{document.removeEventListener("touchmove",z),document.removeEventListener("touchend",x)};document.addEventListener("touchmove",z),document.addEventListener("touchend",x)},u=i(s),p=r==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",b=u>.5,P=u>.25&&u<.5||u>.75;return o.jsx("div",{className:"w-full px-3",children:o.jsxs("div",{ref:h,onMouseDown:v,onTouchStart:M,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[o.jsx("div",{className:L("w-full h-full rounded-full",r==="dark"?"bg-gray-700":"bg-gray-300")}),o.jsx("div",{className:L("absolute top-0 left-0 h-full rounded-full",r==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${u*100}%`}}),o.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e&&o.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-medium",r==="dark"?"text-gray-200":b?"text-white":"text-gray-800"),style:{...b?{left:"10px"}:{right:"10px"},textShadow:b?p:"none"},children:e}),o.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-mono",r==="dark"?"text-gray-200":P?"text-white":"text-gray-800"),style:{...P?{right:`calc(${100-u*100}% + 14px)`}:{left:`calc(${u*100}% + 14px)`},textShadow:P?p:"none"},children:l(s)})]}),o.jsx("div",{className:L("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",r==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${u*100}% - 12px)`}})]})})},Xt=({children:e,gl:n,frameloop:t="always",showGridOverlay:s,...a})=>{const[r,l]=d.useState(!1);return o.jsx(qt,{...a,showGridOverlay:s,children:c=>o.jsxs(o.Fragment,{children:[o.jsx(dt,{frameloop:t,gl:n,onCreated:({gl:i})=>{i.domElement.addEventListener("webglcontextlost",h=>{h.preventDefault(),l(!0)},!1)},children:e(c)}),r&&o.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[o.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),o.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),o.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]})]})})};function de(e,n){const t=e<0?"-":"+",s=Math.abs(e),a=n-1;if(a<=0)return t;if(s===0)return t+"0.0".padEnd(a,"0").substring(0,a);const r=String(Math.trunc(s));if(r.length<=a){const l=a-r.length;if(l>1){let c=l-1,i=s.toFixed(c);if(i.split(".")[0].length>r.length&&(c-=i.split(".")[0].length-r.length,c>=0?i=s.toFixed(c):i=String(Math.round(s))),i.length<=a)return t+i}if(r.length<=a){let c=r;return c.length<a&&(c+=".".repeat(a-c.length)),t+c}}if(a>=3){for(let c=a-4;c>=0;c--){let i=s.toExponential(c).replace("e+","e");if(i.length<=a)return t+i}let l=s.toExponential(0).replace("e+","e");if(l.length<=a)return t+l}if(s>1)return t+".".repeat(a);{const l="0.0000";return l.length<=a?t+l:t+"0.0".padEnd(a,"0").substring(0,a)}}function ue(e,n,t=7,s="i"){const a=de(e,t),r=de(n,t);return`${a}${r}${s}`}function Se(e,n,t=7,s=["(",", ",")"]){const a=de(e,t),r=de(n,t);return`${s[0]}${a}${s[1]}${r}${s[2]}`}function Yt(e){return"min"in e&&"max"in e}class Oe{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class se extends Oe{constructor(n,t,s,a,r,l,c){super(),this.name=n,this.title=t,this.description=s,this.math=a,this.shader=r,this.iconUrl=c;let i,h,g;typeof l=="number"?(g=l,i=1,h=2e3):(g=l.initial,i=l.min,h=l.max);const v=u=>{const p=Math.log(i),b=Math.log(h);return Math.exp(p+(b-p)*u)},M=u=>{if(u<=i)return 0;if(u>=h)return 1;const p=Math.log(i),b=Math.log(h);return(Math.log(u)-p)/(b-p)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:g,min:i,max:h,posToVal:v,valToPos:M}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(n){}getInitialControlPoints(){return[]}getCanvasOverlayString(n,t){}getControlPointValues(n){}getControlPointGroups(n){return[]}}class be extends se{constructor(n,t,s,a,r,l,c,i){super(n,t,s,a,r,l,i),this.controlPointInfo=c}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(n,t){if(n.length>0)return`${this.controlPointInfo.name} = ${ue(...n[0])}`}getControlPointValues(n){if(n.length>0)return[{label:this.controlPointInfo.name,value:ue(...n[0])}]}getControlPointUniforms(n){if(n.length>0)return{[this.controlPointInfo.uniformName]:n[0]}}getControlPointGroups(n){return[0]}}const Jt=`The Newton fractal is generated by applying Newton's method, a numerical
algorithm for finding the roots (or zeroes) of a function, to a polynomial in
the complex plane.

Newton's method is an iterative process. To find a root of a function $p(z)$,
we start with an initial guess $z_0$ and repeatedly apply the formula:
\`\`\`math
z_{n+1} = z_n - \\frac{p(z_n)}{p'(z_n)}
\`\`\`
where $p'(z)$ is the derivative of $p(z)$. For a starting point $z_0$, this
sequence will hopefully converge to one of the roots of the polynomial.

In the context of complex numbers, a polynomial can be defined by its roots
$r_1, r_2, ..., r_k$. For such a polynomial, the Newton's method formula can
be expressed without needing to compute the derivative directly:
\`\`\`math
z_{n+1} = z_n - \\frac{1}{\\sum_{i=1}^k \\frac{1}{z_n - r_i}}
\`\`\`
This is the formula used to generate this fractal.

The complex plane is colored based on which root each starting point $z_0$
converges to. The boundaries between these regions of convergence are fractal,
creating intricate and beautiful patterns. Points that converge to the same
root are typically given the same color, with the shade determined by how
quickly they converge.

To know more, check the
[fantastic short video](https://www.youtube.com/watch?v=LOulCFdVOGY)
and its [full version](https://www.youtube.com/watch?v=-RdOwhmqP5s)
made by 3Blue1Brown.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters (Control Points)
- **Roots**: These are the roots of the polynomial $p(z)$. You can add,
  remove, and drag these points on the complex plane. The number and position
  of the roots completely change the structure of the fractal. The fractal is
  generated for a polynomial with these specified roots.
`,Kt=`uniform int iterations;
uniform int num_roots;
uniform vec2 roots[16];

vec2 cmul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
  float d = dot(b, b);
  if (d < 1e-8) return vec2(1e6, 1e6);
  return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

float eval(vec2 p) {
  vec2 z = p;
  for (int i = 0; i < iterations; i++) {
    // Check for convergence to a root before the update
    for (int k = 0; k < num_roots; k++) {
        if (distance(z, roots[k]) < 1e-4) {
            return (float(k) + 0.5) / float(num_roots) + float(i) / float(iterations) * 0.1;
        }
    }

    // Generalized Newton's method for a polynomial defined by its roots:
    // z_{n+1} = z_n - 1.0 / sum(1.0 / (z_n - root_k))
    vec2 sum_inv_dist = vec2(0.0, 0.0);
    for (int k = 0; k < num_roots; k++) {
        vec2 dist_vec = z - roots[k];
        sum_inv_dist += cdiv(vec2(1.0, 0.0), dist_vec);
    }

    // Avoid division by zero if z is far from all roots
    if (dot(sum_inv_dist, sum_inv_dist) < 1e-8) break;

    vec2 term = cdiv(vec2(1.0, 0.0), sum_inv_dist);
    z = z - term;
  }

  // Color points that did not converge based on the closest root
  float min_dist = 1e6;
  int closest_root_idx = -1;
  for (int k = 0; k < num_roots; k++) {
      float d = distance(z, roots[k]);
      if (d < min_dist) {
          min_dist = d;
          closest_root_idx = k;
      }
  }
  if (closest_root_idx != -1) {
       return (float(closest_root_idx) + 0.5) / float(num_roots) + 0.05 * log(min_dist * 10.0 + 1.0);
  }

  return -1.0;
}
`,Zt=""+new URL("newton-B60RDm46.png",import.meta.url).href,xe=16;function Qt(e){const n=[];for(let t=0;t<e;t++){const s=2*Math.PI*t/e;n.push([Math.cos(s),Math.sin(s)])}return n}class en extends Oe{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=Jt,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Qt(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return Kt}getIcon(){return Zt}getCanvasOverlayString(n,t){return`p = ${n.length}`}getControlPointValues(n){return n.map((t,s)=>({label:`Root ${s+1}`,value:ue(...t)}))}getControlPointUniforms(n){if(n.length>0&&n.length<=xe){const t=n.flat(),s=new Array(xe*2).fill(0);return t.forEach((a,r)=>s[r]=a),{num_roots:n.length,roots:s}}}getControlPointGroups(n){return Array(n.length).fill(0)}getControlPointMinMax(){return[2,xe]}}const tn=""+new URL("mandelbrot-DLtBXckj.png",import.meta.url).href,nn=`### Mandelbrot set

The Mandelbrot set is one of the most famous fractals, known for its
intricate boundary. It is a set of complex numbers, which are numbers that can
be written in the form $a + bi$, where $a$ and $b$ are real numbers and $i$ is
the imaginary unit, with the property that $i^2 = -1$.

The set is defined by a simple iterative formula. For each complex number $c$,
we generate a sequence of complex numbers $z_0, z_1, z_2, ...$ starting with
$z_0 = 0$. Each next number in the sequence is calculated using the previous
one:
\`\`\`math
z_{n+1} = z_n^2 + c
\`\`\`
If this sequence remains "bounded" (meaning the numbers in the sequence do not
escape to infinity), then the complex number $c$ is part of the Mandelbrot
set. In practice, we check if the magnitude of $z_n$ (its distance from the
origin, $|z_n|$) exceeds a certain value, typically 2. If it stays within
this boundary after many iterations, we consider $c$ to be in the set.

The colors in the visualization of the fractal usually represent how quickly
the sequence for a given $c$ escapes to infinity. Points inside the set are
often colored black.

#### Phoenix Fractal
The Phoenix fractal is a variation of the Mandelbrot set. The
iteration formula introduces a "memory" effect, as the next state depends on
the previous two states:
\`\`\`math
z_{n+1} = z_n^2 + c + P z_{n-1}
\`\`\`
In this implementation, we are generating a Mandelbrot-like set. The point $c$
is the coordinate on the complex plane being tested, while $P$ is a fixed
parameter that can be changed. The initial values are $z_0 = 0$ and
$z_{-1} = 0$. When $P=0$, this is the standard Mandelbrot set.

For different values of the parameter $P$, we get different Phoenix sets.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point. Higher values increase the detail and
  accuracy of the fractal's boundary but require more computation.

#### Complex Parameters (Control Points)
- **P**: This is a fixed complex number that modifies the shape of the fractal.
  It can be moved around on the complex plane to explore different variations
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,an=`uniform int iterations;
uniform vec2 phoenixP;

float eval(vec2 p) {
  vec2 z = vec2(0.0);
  vec2 z_prev = vec2(0.0);
  int i;
  for (i = 0; i < iterations; i++) {
    vec2 z_sq = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y);

    vec2 p_mul_z_prev = vec2(
        phoenixP.x * z_prev.x - phoenixP.y * z_prev.y,
        phoenixP.x * z_prev.y + phoenixP.y * z_prev.x
    );

    vec2 z_next = z_sq + p + p_mul_z_prev;

    if (dot(z_next, z_next) > 4.0) break;

    z_prev = z;
    z = z_next;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}`,on=[0,0],rn=new be("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",nn,an,200,{name:"P",initialValue:on,uniformName:"phoenixP"},tn),sn=""+new URL("julia-BPDBAcPP.png",import.meta.url).href,ln=`The Julia set is a fractal that is closely related to the Mandelbrot set.
Like the Mandelbrot set, it is generated by iterating a simple formula on
complex numbers.

The iteration formula for a Julia set is:
\`\`\`math
z_{n+1} = z_n^2 + c
\`\`\`
Unlike the Mandelbrot set, where the initial $z_0$ is always 0 and $c$ varies
over the plane, for a Julia set, $c$ is a *fixed* complex number. The initial
value $z_0$ is the point on the complex plane being tested (i.e., the
coordinate of each pixel).

If the sequence of $z_n$ for a given $z_0$ remains bounded (does not escape to
infinity), then $z_0$ is part of the Julia set for that specific $c$.
Different values of $c$ produce vastly different Julia sets. Some are
connected, while others are disconnected dust-like structures.

The Mandelbrot set can be thought of as a "map" of all possible Julia sets.
If the value of $c$ is chosen from within the Mandelbrot set, the
corresponding Julia set will be connected. If $c$ is outside the Mandelbrot
set, the Julia set will be a disconnected set of points.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point. Higher values increase the detail and
  accuracy of the fractal.

#### Complex Parameters (Control Points)
- **C**: This is a fixed complex number that defines the specific Julia set to
  be rendered. It can be moved around on the complex plane to explore
  different Julia sets. It corresponds to $c$ in the iteration formula.
`,cn=`uniform int iterations;
uniform vec2 juliaC;

float eval(vec2 p) {
  vec2 z = p;
  int i;
  for (i = 0; i < iterations; i++) {
    float x = (z.x * z.x - z.y * z.y) + juliaC.x;
    float y = (2.0 * z.x * z.y) + juliaC.y;
    if ((x * x + y * y) > 4.0) break;
    z.x = x;
    z.y = y;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,hn=[-.7,.27015],dn=new be("julia","Julia","Julia sets.",ln,cn,200,{name:"C",initialValue:hn,uniformName:"juliaC"},sn),un=`The Lambda fractal is generated from the logistic map, a classic example of how
chaotic behavior can arise from a simple non-linear equation. The iteration
formula is:
\`\`\`math
z_{n+1} = \\lambda z_n (1 - z_n)
\`\`\`
This fractal is the Julia set for the quadratic map $f(z) = \\lambda z (1-z)$.
The parameter $\\lambda$ is a fixed complex number, and the initial value $z_0$
is the point on the complex plane being tested.

For more information on the general principles of Julia sets, see the
description of the Julia set.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters (Control Points)
- **Lambda**: This is a fixed complex number, $\\lambda$, that defines the
  specific shape of the fractal. It can be moved around on the complex plane
  to explore different variations.
`,fn=`uniform int iterations;
uniform vec2 lambda;

vec2 cmul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

float eval(vec2 p) {
  vec2 z = p;
  int i;
  for (i = 0; i < iterations; i++) {
    vec2 one_minus_z = vec2(1.0 - z.x, -z.y);
    z = cmul(lambda, cmul(z, one_minus_z));

    if (dot(z, z) > 4.0) break;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,mn=[-.85,-.6],pn=new be("lambda","Lambda","Lambda fractal (logistic map).",un,fn,200,{name:"Lambda",initialValue:mn,uniformName:"lambda"}),gn=`This is a type of magnet fractal, known for its intricate, magnetic-like
patterns. It is a Mandelbrot-like fractal, where the set of points $c$ is
determined based on whether the sequence remains bounded.

The iteration formula is:
\`\`\`math
z_{n+1} = \\left( \\frac{z_n^2 - 1}{2z_n + c} \\right)^2
\`\`\`
with $z_0 = 0$, and $c$ being the point on the complex plane under test.

For more information on the general principles of this type of fractal, see the
description of the Mandelbrot set.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters
This fractal does not have any complex parameters that can be controlled
directly as control points. The complex number $c$ corresponds to each point
on the plane being tested.
`,xn=`uniform int iterations;
vec2 cdiv(vec2 a, vec2 b) {
  float d = dot(b, b);
  if (d < 1e-6) return vec2(1e6, 1e6);
  return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

vec2 csq(vec2 a) {
  return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y);
}
float eval(vec2 p) {
  vec2 z = vec2(0.0);
  int i;
  for (i = 0; i < iterations; i++) {
    vec2 z_sq = csq(z);
    vec2 num = vec2(z_sq.x - 1.0, z_sq.y);
    vec2 den = vec2(2.0 * z.x + p.x, 2.0 * z.y + p.y);

    vec2 v = cdiv(num, den);
    z = csq(v);

    if (dot(z, z) > 100.0) break;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,yn=new se("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",gn,xn,80),vn=`This is another type of magnet fractal. The iteration is defined by:
\`\`\`math
z_{n+1} = z_n - \\frac{(z_n^2 - 1)^2}{4z_n^3 + 4z_n^2c}
\`\`\`
This variation produces different but equally complex and beautiful patterns
compared to Type 1. In this implementation, the point $c$ in the formula is
the same as the initial point $z_0$, which is the coordinate of the point on
the complex plane being tested.

This type of fractal, where the parameter $c$ is the same as the starting
point $z_0$, is sometimes called a "Multibrot" type set.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters
This fractal does not have any complex parameters that can be controlled
directly as control points. The complex number $c$ corresponds to each point
on the plane being tested.
`,wn=`uniform int iterations;
vec2 cmul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
  float d = dot(b, b);
  if (d < 1e-6) return vec2(1e6, 1e6);
  return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

vec2 csq(vec2 a) {
  return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y);
}
float eval(vec2 p) {
  vec2 z = p; // z_0 = p to avoid division by zero at z=0
  int i;
  for (i = 0; i < iterations; i++) {
    vec2 z_sq = csq(z);
    vec2 z_sq_minus_1 = vec2(z_sq.x - 1.0, z_sq.y);
    vec2 num = csq(z_sq_minus_1);

    vec2 z_cubed = cmul(z_sq, z);
    vec2 term1 = cmul(vec2(4.0, 0.0), z_cubed);
    vec2 term2 = cmul(vec2(4.0, 0.0), cmul(z_sq, p));
    vec2 den = vec2(term1.x + term2.x, term1.y + term2.y);

    vec2 v = cdiv(num, den);
    z = vec2(z.x - v.x, z.y - v.y);

    if (dot(z, z) > 100.0) break;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,bn=new se("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",vn,wn,80),$n=`The Nova fractal is a variation of the Newton's method fractal. The iteration
formula is:
\`\`\`math
z_{n+1} = z_n - \\frac{z_n^3 - 1}{3z_n^2} + c
\`\`\`
where $c$ is a point in the complex plane, and $z_0$ is a fixed starting
value (in this case $z_0 = 1$). This formula is derived from Newton's method
for finding the roots of the polynomial $p(z) = z^3 - 1$, but with an extra
term $c$ added in each step.

This creates a Mandelbrot-like fractal. The set of points $c$ for which the
sequence remains bounded forms the Nova fractal. For more information on the
general principles, see the descriptions of the Mandelbrot and Newton
fractals.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters
This fractal does not have any complex parameters that can be controlled
directly as control points. The complex number $c$ corresponds to each point
on the plane being tested.
`,_n=`uniform int iterations;

vec2 cmul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
  float d = dot(b, b);
  if (d < 1e-6) return vec2(1e6, 1e6);
  return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

vec2 csq(vec2 a) {
  return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y);
}

float eval(vec2 p) {
  vec2 z = vec2(1.0, 0.0);
  int i;
  for (i = 0; i < iterations; i++) {
    vec2 z_sq = csq(z);
    vec2 z_cubed = cmul(z, z_sq);
    vec2 num = vec2(z_cubed.x - 1.0, z_cubed.y);
    vec2 den = cmul(vec2(3.0, 0.0), z_sq);
    vec2 term = cdiv(num, den);

    z = vec2(z.x - term.x, z.y - term.y) + p;

    if (dot(z, z) > 100.0) break;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,zn=new se("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",$n,_n,80),Tn=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
formula is very similar, but with a key difference:
\`\`\`math
 z_{n+1} = (|\\Re(z_n)| + i|\\Im(z_n)|)^2 + c
\`\`\`
where $z_0 = 0$ and $c$ is the point on the complex plane being tested. Before
squaring the complex number $z_n$ in each iteration, the absolute values of
its real and imaginary parts are taken. This simple change creates a
dramatically different fractal shape, which often resembles a ship on fire.

For more information on the general principles of this type of fractal, see the
description of the Mandelbrot set.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters
This fractal does not have any complex parameters that can be controlled
directly as control points. The complex number $c$ corresponds to each point
on the plane being tested.
`,Mn=`uniform int iterations;

float eval(vec2 p) {
  vec2 z = vec2(0.0);
  int i;
  for (i = 0; i < iterations; i++) {
    vec2 z_abs = abs(z);
    float x = z_abs.x * z_abs.x - z_abs.y * z_abs.y + p.x;
    float y = 2.0 * z_abs.x * z_abs.y + p.y;

    if ((x * x + y * y) > 4.0) break;
    z.x = x;
    z.y = y;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,jn=new se("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Tn,Mn,200),kn=[new en,rn,dn,pn,yn,bn,zn,jn];function Ne(e,n,t,s){return`vec3(${e}) + vec3(${n}) * cos(6.28318 * (vec3(${t}) * t + vec3(${s})))`}const we={grayscale:"vec3(t)",cosmic:Ne("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Ne("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function Cn(e){return we[e]||we.grayscale}const Re=Object.fromEntries(Object.keys(we).map(e=>[e,e.charAt(0).toUpperCase()+e.slice(1)])),Ae="cosmic",Pn=`
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
`,Sn=`
varying vec2 vUv;
uniform vec2 center;
uniform float viewWidth;
uniform float viewHeight;

%FRACTAL_SHADER%

vec3 colorPalette(float t) {
  return %EVALUATE_COLOR%;
}

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
`;function Nn(e,n,t){if(Array.isArray(t))if(t.length===2)e[n]={value:new he(t[0],t[1])};else if(t.length===3)e[n]={value:new pt(t[0],t[1],t[2])};else if(t.length>=4&&t.length%2===0){const s=[];for(let a=0;a<t.length;a+=2)s.push(new he(t[a],t[a+1]));e[n]={value:s}}else e[n]={value:t};else e[n]={value:t}}function Rn(e,n,t){if(e.uniforms[n])if(Array.isArray(t))if(t.length===2)e.uniforms[n].value.fromArray(t);else if(t.length===3)e.uniforms[n].value.fromArray(t);else if(t.length>=4&&t.length%2===0){const s=[];for(let a=0;a<t.length;a+=2)s.push(new he(t[a],t[a+1]));e.uniforms[n].value=s}else e.uniforms[n].value=t;else e.uniforms[n].value=t}const An=({fractal:e,center:n,worldWidth:t,worldHeight:s,parameters:a,controlPoints:r,colorScheme:l})=>{const c=ut(g=>g.invalidate),i=d.useMemo(()=>{const g={FRACTAL_SHADER:e.getShaderCode(),EVALUATE_COLOR:Cn(l)},v={center:{value:new he(...n)},viewWidth:{value:t},viewHeight:{value:s}};e.getGuiParameters().forEach(u=>{v[u.name]={value:a[u.name]}});const M=e.getControlPointUniforms(r);if(M)for(const[u,p]of Object.entries(M))Nn(v,u,p);return new ft({uniforms:v,vertexShader:Pn,fragmentShader:Sn.replace(/%(\w+)%/g,(u,p)=>String(g[p]))})},[e,l]);d.useEffect(()=>{i.uniforms.center.value.fromArray(n),i.uniforms.viewWidth.value=t,i.uniforms.viewHeight.value=s,e.getGuiParameters().forEach(v=>{i.uniforms[v.name].value=a[v.name]});const g=e.getControlPointUniforms(r);if(g)for(const[v,M]of Object.entries(g))Rn(i,v,M);c()},[i,n,t,s,a,r,c,e]);const h=d.useMemo(()=>{const g=new mt;return g.setDrawRange(0,3),g},[]);return o.jsx("mesh",{material:i,geometry:h})},In=({fractal:e,colorScheme:n})=>{const{theme:t}=ne(),[s,a]=d.useState(e.getInitialGuiParameters()),[r,l]=d.useState(e.getInitialControlPoints());d.useEffect(()=>{a(e.getInitialGuiParameters()),l(e.getInitialControlPoints()),i(u=>u+1)},[e]);const[c,i]=d.useState(0),h=e.getGuiParameters().map(u=>Yt(u)?o.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:o.jsx(Wt,{label:u.displayName,min:u.min,max:u.max,value:s[u.name],onChange:p=>a(b=>({...b,[u.name]:p})),theme:t,posToVal:u.posToVal,valToPos:u.valToPos})},u.name):null),g=e.getControlPointValues(r),[v,M]=e.getControlPointMinMax();return o.jsxs("div",{className:L("w-full h-full flex flex-col landscape:flex-row overflow-hidden",t==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[o.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[o.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[h,g&&g.length>0&&o.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:t==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:g.map(u=>o.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[o.jsx("p",{className:L("text-sm font-medium",t==="dark"?"text-gray-300":"text-gray-700"),children:u.label}),o.jsx("p",{className:L("text-base font-mono",t==="dark"?"text-gray-200":"text-gray-800"),children:u.value})]},u.label))})]})]}),o.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:o.jsx(Xt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(u,p)=>{const b=["[",", ","]"],P=Se(p.center[0]-p.worldWidth/2,p.center[0]+p.worldWidth/2,7,b),y=Se(p.center[1]-p.worldHeight/2,p.center[1]+p.worldHeight/2,7,b),z={"top-left":ue(...u),"top-right":`Re: ${P}
Im: ${y}`},x=e.getCanvasOverlayString(r,s),_=e.title;return z["bottom-center"]=x?`${_} | ${x}`:_,z},controlPoints:r,initialControlPoints:e.getInitialControlPoints(),onControlPointsChange:l,controlPointGroups:e.getControlPointGroups(r),minControlPoints:v,maxControlPoints:M,gl:{powerPreference:"default",antialias:!1},children:(({center:u,worldWidth:p,worldHeight:b})=>o.jsx(An,{fractal:e,center:u,worldWidth:p,worldHeight:b,parameters:s,controlPoints:r,colorScheme:n}))},c)})]})},En=`This application allows you to explore the intricate beauty of various fractals.
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
A few fractals even let you add or remove complex paraemters.
`,Ln=`## Fantastic Fractals — An Interactive Fractal Explorer

Fantastic Fractals lets you dive into the mesmerizing world of complex dynamics and mathematical art right in your browser. Switch instantly between classic and modern fractals—like Mandelbrot, Julia, and Newton—and explore them in real time with fluid pan and zoom. As you navigate, the app overlays precise complex coordinates and live view ranges, helping you connect visual patterns to their underlying math.

### What you can explore

- **Multiple fractal families**: Start with Mandelbrot, Julia, and Newton (and more varieties as they’re added), each with distinct visual structure and mathematical character.
- **Rich color schemes**: Pick from curated color palettes to reveal detail, shading, and structure in new ways.
- **Real-time interaction**: Navigate smoothly; every movement updates a helpful overlay that includes current complex coordinates and view extents.

### Intuitive controls that invite experimentation

- **Parameter sliders**: Tune fractal-specific parameters with responsive sliders designed for fine-grained control (including non-linear scaling where appropriate).
- **Complex parameters via control points**: For fractals defined by complex constants, drag control points directly on the canvas to shape the set dynamically. Double‑click a control point to reset it.
- **Context-aware layout**: On larger screens, controls sit to the left of the canvas; on phones in portrait mode, they adapt to the top—always within easy reach.

### Helpful, math-aware guidance

 - **Inline math and documentation**: Learn the theory behind each fractal with clear, readable math. Toggle a “Math” help modal tailored to the current fractal, or open a “Controls” guide for tips on interaction.
- **Live info overlay**: See exact complex coordinates under the cursor, plus real and imaginary ranges of the current view, alongside a concise status line for the active fractal.

### A focused, polished UI

- **Streamlined toolbar**: The header features compact drop-downs for fractal type and color scheme—icon-only when space is tight, descriptive when there’s room.
- **Dark mode support**: Enjoy a thoughtfully styled dark theme for comfortable exploration day or night.
 - **Share with a link**: It’s easy to share exactly what you’re viewing.

### Built for performance and portability

 - **High-performance rendering**: Real-time visualization ensures responsive exploration even at deep zoom levels.
 - **Fast and responsive**: Quick to load with smooth interaction.
 - **Desktop and mobile**: Ready for desktop and mobile builds, bringing the same experience beyond the browser.

### Who it’s for

- **Curious explorers**: Anyone captivated by visual complexity and emergent patterns.
- **Students and educators**: A hands-on way to connect complex numbers, iterative systems, and geometry with compelling visuals.
- **Math and art enthusiasts**: A canvas for creative rendering and mathematical experimentation.

Whether you’re zooming into a Mandelbrot filament, reshaping a Julia set via a complex control point, or studying Newton basins with precise parameter control, Fantastic Fractals makes the deep structure of mathematics both approachable and beautiful.
`,Fn=`## A Short History of Fractals

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


`;var On={client:"ca-pub-5400548434612970",slot:"5745481735"};const ee=kn;function Hn(){const{theme:e}=ne(),n=d.useCallback(()=>{const w=["newton","mandelbrot","julia"],S=ee.filter(f=>w.includes(f.name));return S.length>0?S[Math.floor(Math.random()*S.length)]:ee[0]},[]),t=d.useRef(null);t.current===null&&(t.current=n());const s=d.useCallback(()=>{const S=te().get("type");return ee.find(f=>f.name===S)||t.current},[t]),[a,r]=d.useState(s),[l,c]=d.useState(()=>te().get("colors")||Ae),[i,h]=d.useState(null),g=[{key:"math",name:`Math of ${a.title} Fractal`,icon:o.jsx(Te,{}),content:`## ${a.title} Fractal

${a.math}`},{key:"usage",name:"How to Explore Interactively",icon:o.jsx(at,{}),content:`${En}

${Dt("fractal view","complex parameter",!0,!0)}`},{key:"essay",name:"A Short History of Fractals",icon:o.jsx(Te,{}),content:Fn},{key:"about",name:"About Fantastic Fractals",icon:o.jsx(ot,{}),content:Ln}];d.useEffect(()=>{const w=()=>{const S=te(),f=S.get("type"),m=S.get("colors"),$=S.get("help"),T=ee.find(N=>N.name===f)||t.current;r(T),c(m||Ae),$&&["math","usage","essay","about"].includes($)?h($):h(null)};return window.addEventListener("hashchange",w),w(),()=>window.removeEventListener("hashchange",w)},[]);const v=w=>{me({type:w.name})},M=w=>{me({colors:w})},u=ee.map(w=>({name:w.title,value:w.name,icon:w.getIcon()?o.jsx("img",{src:w.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0,invertInDark:!0})),p=Object.entries(Re).map(([w,S])=>({name:S,value:w})),b=w=>{const S=ee.find(f=>f.name===w)||a;r(S),v(S)},P=w=>{c(w),M(w)},y=()=>{me({help:null})},z=w=>{const S=te();return S.set("help",w),w==="math"&&!S.has("type")&&S.set("type",a.name),`#${S.toString()}`},x=g.map(({key:w,name:S,icon:f})=>({key:w,name:S,href:z(w),icon:f})),_=()=>o.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),o.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),o.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),o.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),o.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),o.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),o.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),o.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),B=()=>o.jsxs("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",className:"h-full w-full","aria-hidden":!0,children:[o.jsx("rect",{x:"0",y:"0",width:"24",height:"24",rx:"4",fill:"white"}),o.jsxs("g",{fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",transform:"translate(12 12) scale(1.35) translate(-12 -12)",children:[o.jsx("path",{d:"M6 12c0-3.314 2.686-6 6-6 2.761 0 5 2.239 5 5 0 2.209-1.791 4-4 4-1.657 0-3-1.343-3-3 0-1.105.895-2 2-2 .552 0 1 .448 1 1"}),o.jsx("path",{d:"M7.5 12c0-2.485 2.015-4.5 4.5-4.5 2.071 0 3.75 1.679 3.75 3.75 0 1.795-1.455 3.25-3.25 3.25-1.316 0-2.375-1.059-2.375-2.375 0-.87.705-1.575 1.575-1.575.434 0 .8.366.8.8",opacity:"0.8"}),o.jsx("path",{d:"M16.5 6.5c1.4 0 2.5 1.1 2.5 2.5 0 1-.5 1.9-1.3 2.3"}),o.jsx("path",{d:"M7.5 17.5c-1.4 0-2.5-1.1-2.5-2.5 0-1 .5-1.9 1.3-2.3"}),o.jsx("path",{d:"M12 4.5c1 0 1.8.8 1.8 1.8 0 .9-.7 1.6-1.6 1.8"}),o.jsx("path",{d:"M12 19.5c-1 0-1.8-.8-1.8-1.8 0-.9.7-1.6 1.6-1.8"})]})]}),j=g.find(w=>w.key===i),I=()=>{if(!j)return null;const w=j.content;return o.jsx(rt,{remarkPlugins:[it,lt],rehypePlugins:[st],children:w})},G=()=>j?.name||"";return o.jsxs(o.Fragment,{children:[o.jsx(Gt,{appName:"Fantastic Fractals",appIconUrl:"app-icon.png",help:x,adSenseConfig:On,renderToolbar:w=>{const T=w<360,C=a.title,N=Re[l]||"Colors";return o.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[o.jsx(oe,{options:u,selected:C,onChange:k=>b(k),icon:o.jsx(B,{}),showIconOnly:T,width:180,iconOnlySize:32}),o.jsx(oe,{options:p,selected:N,onChange:k=>P(k),icon:o.jsx(_,{}),showIconOnly:T,width:160,iconOnlySize:32})]})},children:o.jsx(d.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(In,{fractal:a,colorScheme:l},a.name+"|"+l)})}),o.jsx(Vt,{isOpen:i!==null,onClose:y,title:G(),size:"xl",children:o.jsx("div",{className:L("prose dark:prose-invert max-w-none",e==="dark"?"dark":""),children:I()})})]})}function Dn(){return o.jsx(gt,{children:o.jsx(_t,{children:o.jsx(Hn,{})})})}ct.createRoot(document.getElementById("root")).render(o.jsx(ht.StrictMode,{children:o.jsx(Dn,{})}));
