import{r as d,j as o,d as Ee,i as Ve,P as Ge,e as L,z as Le,E as We,g as Xe,f as Ye,h as Je,k as Ke,l as Ze,m as Qe,n as et,o as tt,p as nt,L as ot,q as je,t as rt,v as at,w as st,x as it,y as lt,A as ct,M as me,B as pe,C as ge,D as xe,G as ht}from"./other-CR04kSd_.js";import{C as dt,u as ut,V as he,S as ft,B as mt,a as pt}from"./three-BAYWCrVo.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Fe=d.createContext(void 0),gt=({children:e})=>{const[n,t]=d.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});d.useEffect(()=>{if(typeof window>"u")return;const a=window.matchMedia("(prefers-color-scheme: dark)"),c=l=>{localStorage.getItem("theme")||t(l.matches?"dark":"light")};return a.addEventListener("change",c),()=>{a.removeEventListener("change",c)}},[]),d.useEffect(()=>{const a=window.document.documentElement;n==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[n]);const s=()=>{t(a=>{const c=a==="light"?"dark":"light";return localStorage.setItem("theme",c),c})},r=d.useMemo(()=>({theme:n,toggleTheme:s}),[n]);return o.jsx(Fe.Provider,{value:r,children:e})},oe=()=>{const e=d.useContext(Fe);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},$e=e=>{if(e.startsWith("#")||e.startsWith("/"))return!1;try{return new URL(e,window.location.origin).hostname!==window.location.hostname}catch{return!1}},ne=()=>new URLSearchParams(window.location.hash.substring(1)),ye=(e,n=!1)=>{const t=ne();Object.entries(e).forEach(([r,a])=>{a==null?t.delete(r):t.set(r,a)});const s=t.toString();if(window.location.hash.substring(1)!==s){const r=window.location.href,a=`${window.location.pathname}${window.location.search}`,c=s?`${a}#${s}`:a;n?window.history.pushState(null,"",c):window.history.replaceState(null,"",c);try{const l=new HashChangeEvent("hashchange",{oldURL:r,newURL:c});window.dispatchEvent(l)}catch{window.dispatchEvent(new Event("hashchange"))}}},xt=()=>typeof window<"u"&&!!window?.__TAURI__,yt=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),vt=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},bt=()=>xt()&&yt(),wt=vt()?"xl":"md",ve={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-2.5 text-lg",item:"px-5 py-3 text-lg"}},Q=({label:e,options:n,selected:t,onChange:s,theme:r,size:a=wt,align:c="left",icon:l,showIconOnly:i,trigger:h,buttonClassName:y})=>{const v=d.useRef(null),[M,u]=d.useState({}),f=oe?.(),x=r??f?.theme??"light",k=()=>{if(v.current){const $=v.current.getBoundingClientRect(),U={top:`${$.bottom+4}px`,minWidth:`${$.width}px`};c==="left"?U.left=`${$.left}px`:U.right=`${window.innerWidth-$.right}px`,u(U)}},b=a==="sm"?"h-4 w-4":a==="md"||a==="lg"?"h-5 w-5":"h-6 w-6",m=n?.find($=>$?.name===t)?.icon??l,T=(()=>{if(i&&l&&Ee.isValidElement(l)){const $=l.props?.className;if($&&($.includes("h-")||$.includes("w-")))return $}return b})();return o.jsxs(Ve,{as:"div",className:"relative",children:[o.jsx(Ge,{ref:v,onClick:k,className:L(h?y:i?["p-2 rounded-full focus:outline-none",x==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",ve[a].button,x==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:h||(i?o.jsx("span",{className:L(T,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:m}):o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"flex items-center truncate",children:[m&&o.jsx("span",{className:L(b,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:m}),e&&`${e}: `,o.jsx("strong",{children:t})]}),o.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}))}),o.jsx(Le,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:o.jsx(We,{style:M,className:L("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":c==="left","origin-top-right":c==="right"},x==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:o.jsx("div",{className:"py-1",children:n.map(($,U)=>{const w=$.key??$.value??$.name??U,C=!!$.href,A=$.href?$e($.href):!1;return o.jsx(Xe,{children:({focus:V})=>C?o.jsxs("a",{href:$.href,target:A?"_blank":"_self",rel:"noopener noreferrer",className:L("flex items-center justify-between w-full whitespace-nowrap",ve[a].item,V?x==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":x==="dark"?"text-gray-300":"text-gray-700"),children:[o.jsxs("div",{className:"flex items-center",children:[$.icon&&o.jsx("span",{className:"mr-3 h-5 w-5",children:$.icon}),$.name]}),A&&o.jsx(Ye,{className:"h-4 w-4"})]}):o.jsx("button",{onClick:()=>s&&s($.value),className:L("w-full text-left block whitespace-nowrap",ve[a].item,V?x==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":x==="dark"?"text-gray-300":"text-gray-700"),children:o.jsxs("div",{className:"flex items-center",children:[$.icon&&o.jsx("span",{className:"mr-3 h-5 w-5",children:$.icon}),$.name]})})},w)})})})})]})},$t=({client:e,slot:n,style:t={display:"block"},format:s="auto",responsive:r="true"})=>(d.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),o.jsx("ins",{className:"adsbygoogle",style:t,"data-ad-client":e,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":r})),Oe=d.createContext(void 0),_t=({children:e,defaultLanguage:n="en",storageKey:t="language"})=>{const[s,r]=d.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem(t);if(i==="en"||i==="zh")return i;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return n});d.useEffect(()=>{typeof window<"u"&&localStorage.setItem(t,s)},[s,t]);const a=i=>r(i),c=()=>r(i=>i==="en"?"zh":"en"),l=d.useMemo(()=>({language:s,setLanguage:a,toggleLanguage:c}),[s]);return o.jsx(Oe.Provider,{value:l,children:e})},zt=()=>{const e=d.useContext(Oe);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},Mt=({appName:e,help:n,config:t,showUserProfile:s,renderToolbar:r,showLanguage:a,language:c,onLanguageChange:l,appIconUrl:i,showTitle:h=!0,toolbarWidthPx:y=0})=>{const{theme:v,toggleTheme:M}=oe(),{setLanguage:u}=zt(),f=()=>{if(!n)return null;const m=o.jsx(et,{className:"h-8 w-8"});if(typeof n=="string")return o.jsx("a",{href:n,target:$e(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:m});if(Array.isArray(n)&&n.length>0){const T=n.map($=>({name:$.name,href:$.href,icon:$.icon}));return o.jsx(Q,{options:T,align:"right",icon:m,showIconOnly:!0})}return null},x=()=>{if(!t)return null;const m=o.jsx(tt,{className:"h-8 w-8"});if(typeof t=="string")return o.jsx("a",{href:t,target:$e(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:m});if(Array.isArray(t)&&t.length>0){const T=t.map($=>({name:$.name,href:$.href,icon:$.icon}));return o.jsx(Q,{options:T,align:"right",icon:m,showIconOnly:!0})}return null},k=m=>{l?.(m);try{u(m)}catch{}},b=typeof window<"u"&&ne().get("applink")||void 0,j=()=>a?o.jsx(Q,{options:[{name:"English",value:"en"},{name:"中文",value:"zh"}],align:"right",icon:o.jsx(Qe,{className:"h-8 w-8"}),showIconOnly:!0,onChange:m=>k(m)}):null;return o.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex items-center border-b border-gray-200 dark:border-gray-700 gap-3",children:[o.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[i&&(b?o.jsx("a",{href:b,className:"inline-block",title:b,children:o.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded cursor-pointer hover:opacity-90"})}):o.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded"})),h&&o.jsx("h1",{className:"text-xl font-bold truncate",children:e})]}),o.jsx("div",{className:"flex-1 min-w-0",children:typeof r=="function"?r(y):null}),o.jsxs("nav",{className:"flex items-center space-x-2",children:[o.jsx("button",{onClick:M,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:v==="light"?o.jsx(Je,{className:"h-8 w-8"}):o.jsx(Ke,{className:"h-8 w-8"})}),j(),f(),x(),s&&o.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o.jsx(Ze,{className:"h-8 w-8"})})]})]})},jt=36,Te=1e3,Tt=10,ee=(e,n,t,s,r,a,c)=>{if(t.length===0)return null;let l=null;const[i,h]=[s[0]-r/2,s[1]+a/2];for(let y=0;y<t.length;y++){const v=t[y],M=(v[0]-i)/r*c.width,u=(h-v[1])/a*c.height,f=Math.sqrt(Math.pow(e-M,2)+Math.pow(n-u,2));(l===null||f<l.distance)&&(l={index:y,distance:f})}return l&&l.distance<jt?l:null},Pt=({zoom:e,setZoom:n,center:t,setCenter:s,worldWidth:r,worldHeight:a,aspect:c,baseViewSize:l=4,onShowInfo:i,controlPoints:h=[],initialControlPoints:y=[],onControlPointsChange:v,minControlPoints:M,maxControlPoints:u})=>{const[f,x]=d.useState(null),k=d.useRef(f);k.current=f;const[b,j]=d.useState(!1),m=d.useRef(null),T=d.useRef(null),$=d.useCallback(()=>{n(1),s([0,0])},[n,s]),U=d.useCallback(()=>{const p=k.current;if(!(!v||!p)){if(p.type==="point"){if(M===void 0||h.length<=M)return;const g=h.filter((_,P)=>P!==p.index);v(g)}else{if(u===void 0||h.length>=u)return;const g=[...h,p.coords];v(g)}x(null)}},[h,u,M,v]),w=d.useCallback((p,g,_)=>{const P=p-_.left,z=g-_.top,R=ee(P,z,h,t,r,a,_);if(R)x({type:"point",index:R.index,flashing:!0});else{const N=t[0]-r/2+P/_.width*r,I=t[1]+a/2-z/_.height*a;x({type:"space",coords:[N,I],flashing:!0})}m.current=window.setTimeout(()=>{U(),m.current=null},Te)},[t,h,U,a,r]),C=nt({onPointerDown:({event:p})=>{p.preventDefault();const g=p.target.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:P}=p,z=_-g.left,R=P-g.top,N=ee(z,R,h,t,r,a,g);N?(j(!0),x({type:"point",index:N.index,flashing:!1})):x(null),i&&(T.current={x:_,y:P},m.current=window.setTimeout(()=>{w(_,P,g)},Te))},onPointerUp:({event:p})=>{j(!1);const g=p.target.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:P}=p,z=_-g.left,R=P-g.top,N=ee(z,R,h,t,r,a,g);x(N?{type:"point",index:N.index,flashing:!1}:null),m.current&&(clearTimeout(m.current),m.current=null)},onPointerMove:({event:p})=>{if(b)return;const g=p.target.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:P}=p;if(m.current&&T.current){const W=_-T.current.x,X=P-T.current.y;Math.sqrt(W*W+X*X)>Tt&&(clearTimeout(m.current),m.current=null,x(null))}const z=_-g.left,R=P-g.top,N=ee(z,R,h,t,r,a,g);if(x(N?{type:"point",index:N.index,flashing:!1}:W=>W?.type==="point"?null:W),!i)return;const I=_-g.left,E=P-g.top,G=t[0]+(I/g.width-.5)*r,H=t[1]+(.5-E/g.height)*a;i([G,H])},onDrag:({event:p,first:g,movement:[_,P],xy:[z,R],memo:N})=>{m.current&&(clearTimeout(m.current),m.current=null,x(E=>E?.type==="point"?{...E,flashing:!1}:null)),p.preventDefault();const I=p.target.getBoundingClientRect();if(I){if(g||!N){const E=z-I.left,G=R-I.top;if(v){const H=ee(E,G,h,t,r,a,I);if(H)return{dragMode:"point",pointIndex:H.index}}return{dragMode:"canvas",startCenter:t}}if(N.dragMode==="point"){if(!v)return N;const E=z-I.left,G=R-I.top,H=t[0]-r/2+E/I.width*r,W=t[1]+a/2-G/I.height*a,X=[...h];return X[N.pointIndex]=[H,W],v(X),N}if(N.dragMode==="canvas"){const{startCenter:E}=N;if(!E)return N;const G=_/I.width*r,H=P/I.height*a;return s([E[0]-G,E[1]+H]),N}}},onPinch:({event:p,first:g,offset:[_]})=>{p.preventDefault(),g&&(m.current&&(clearTimeout(m.current),m.current=null),x(null)),n(_)},onWheel:({event:p,delta:[,g]})=>{if(g===0)return;const _=p.target.getBoundingClientRect();if(!_)return;const P=p.clientX-_.left,z=p.clientY-_.top,R=1.1,N=g<0?e*R:e/R;let I,E;c>=1?(E=l/N,I=E*c):(I=l/N,E=I/c);const G=P/_.width-.5,H=.5-z/_.height,W=t[0]+G*(r-I),X=t[1]+H*(a-E);n(N),s([W,X])},onDoubleClick:({event:p})=>{p.preventDefault();const g=p.target.getBoundingClientRect();if(!g)return;const _=p.clientX-g.left,P=p.clientY-g.top;if(v){const z=ee(_,P,h,t,r,a,g);if(z&&y&&y[z.index]){const R=[...h];R[z.index]=y[z.index],v(R);return}}$()},onClick:({event:p})=>{if(!i)return;const g=p.currentTarget.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:P}=p,z=_-g.left,R=P-g.top,N=t[0]+(z/g.width-.5)*r,I=t[1]+(.5-R/g.height)*a;i([N,I])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[e,0]}}),A={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...C(),onContextMenu:p=>p.preventDefault(),style:A},highlightedPoint:f}},kt=["primary","secondary","tertiary","signal","accent","neutral"],be=kt,Ct={primary:"circle",secondary:"square",tertiary:"diamond",signal:"triangle",accent:"pentagram",neutral:"dot"},Nt={circle:1,square:1,diamond:1,triangle:1,pentagram:1.2,dot:0,star:1.2,cross:1,plus:1,hexagon:1,pentagon:1},ae=e=>e.map(n=>n.join(",")).join(" "),Rt=Math.sin(Math.PI/10)/Math.sin(7*Math.PI/10),De=(e,n,t,s)=>{const r=[],a=n/2,c=a*s;for(let l=0;l<t*2;l++){const i=l*Math.PI/t-Math.PI/2,h=l%2===0?a:c;r.push([e[0]+h*Math.cos(i),e[1]+h*Math.sin(i)])}return ae(r)},St=(e,n)=>De(e,n,5,Rt),At=(e,n)=>{const t=n/2,s=[[e[0],e[1]-t],[e[0]+t,e[1]],[e[0],e[1]+t],[e[0]-t,e[1]]];return ae(s)},It=(e,n)=>{const t=n/2,s=e[0],r=e[1],a=[[s,r+t],[s-t*Math.sqrt(3)/2,r-t/2],[s+t*Math.sqrt(3)/2,r-t/2]];return ae(a)},Pe=(e,n)=>{const t=n/2,s=n/5,[r,a]=e;return`M ${r-s},${a-t} L ${r+s},${a-t} L ${r+s},${a-s} L ${r+t},${a-s} L ${r+t},${a+s} L ${r+s},${a+s} L ${r+s},${a+t} L ${r-s},${a+t} L ${r-s},${a+s} L ${r-t},${a+s} L ${r-t},${a-s} L ${r-s},${a-s} Z`},Et=(e,n)=>{const t=n/2,s=[];for(let r=0;r<6;r++){const a=r*Math.PI/3;s.push([e[0]+t*Math.cos(a),e[1]+t*Math.sin(a)])}return ae(s)},Lt=(e,n)=>{const t=n/2,s=[];for(let r=0;r<5;r++){const a=r*2*Math.PI/5-Math.PI/2;s.push([e[0]+t*Math.cos(a),e[1]+t*Math.sin(a)])}return ae(s)},Ft={circle:(e,n)=>({tagName:"circle",cx:e[0],cy:e[1],r:n/2}),square:(e,n)=>({tagName:"rect",x:e[0]-n/2,y:e[1]-n/2,width:n,height:n}),diamond:(e,n)=>({tagName:"polygon",points:At(e,n)}),triangle:(e,n)=>({tagName:"polygon",points:It(e,n)}),pentagram:(e,n)=>({tagName:"polygon",points:St(e,n)}),dot:(e,n)=>({tagName:"circle",cx:e[0],cy:e[1],r:n/2}),star:(e,n)=>({tagName:"polygon",points:De(e,n,6,.5)}),plus:(e,n)=>({tagName:"path",d:Pe(e,n)}),cross:(e,n)=>({tagName:"path",d:Pe(e,n),transform:`rotate(45, ${e[0]}, ${e[1]})`}),hexagon:(e,n)=>({tagName:"polygon",points:Et(e,n)}),pentagon:(e,n)=>({tagName:"polygon",points:Lt(e,n)})},Ot=e=>e in Ft,ce={cursor:"grab",boxShadow:"0 0 0 2px white, 0 0 0 4px black"},Z={cursor:"grab",filter:"drop-shadow(0 0 2px black) drop-shadow(0 0 1px white)"},ke={circle:e=>({...ce,width:e,height:e,borderRadius:"50%"}),square:e=>({...ce,width:e,height:e}),diamond:e=>({...ce,width:e,height:e,transform:"rotate(45deg)"}),triangle:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)"}),pentagram:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}),dot:e=>({...ce,width:e,height:e,borderRadius:"50%"}),star:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0%, 63% 25%, 88% 25%, 75% 50%, 88% 75%, 63% 75%, 50% 100%, 37% 75%, 12% 75%, 25% 50%, 12% 25%, 37% 25%)"}),plus:e=>({...Z,width:e,height:e,clipPath:"polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)"}),cross:e=>({...Z,width:e,height:e,clipPath:"polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)",transform:"rotate(45deg)"}),hexagon:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"}),pentagon:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0, 95% 35%, 78% 90%, 22% 90%, 5% 35%)"})},Dt=(e,n=24)=>{let t;if(typeof e=="string"&&Ot(e))t=e;else{let c="primary";typeof e=="number"?c=be[e%be.length]||"primary":typeof e=="string"&&be.includes(e)&&(c=e),t=Ct[c]}const s=Nt[t]??1,r=t==="dot"?8:n*s;return(ke[t]||ke.circle)(r)};function Ut(e="view",n="control point",t=!1,s=!1){let r=`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${e} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${e} to reset
  the pan and zoom to their original values.
`;return n&&(r+=`
Some visualizations may feature control points, each representing a
${n}. If not visible, hover over or single-click the ${e}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${n}:** Click and drag a control point to move it.
- **Reset ${n}:** Double-click a ${n} to reset its position.
`,t&&(r+=`- **Add ${n}:** Long-press on an empty area to add a new ${n}.
`),s&&(r+=`- **Remove ${n}:** Long-press on an existing ${n} to remove it.
`)),r+=`
### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${e} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${e} to reset the
  pan and zoom to their original or best-fit values.
`,n&&(r+=`
Some visualizations may feature control points, each representing a
${n}. If not visible, tap anywhere on the ${e} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${n}:** Drag a control point to move it.
- **Reset ${n}:** Double-tap a ${n} to reset its position.
`,t&&(r+=`- **Add ${n}:** Long-press on an empty area to add a new ${n}.
`),s&&(r+=`- **Remove ${n}:** Long-press on an existing ${n} to remove it.
`)),r}const Ce=5e3,Ht=500,Ne=25,qt=({xRange:e,yRange:n,theme:t,worldToScreen:s,center:r,gridTooDense:a})=>{const c=d.useMemo(()=>{const i=[],[h,y]=e,[v,M]=n,u=t==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",f="0.8)",x="0.5)";for(let k=Math.ceil(h);k<=Math.floor(y);k++){const b=s([k,v]);if(!b)continue;const j=k===0;a&&!j||i.push(o.jsx("div",{className:"absolute",style:{left:b[0],top:0,width:1,height:"100%",backgroundColor:u+(j?f:x),transform:j?"translateX(-50%)":void 0}},`v-${k}`))}for(let k=Math.ceil(v);k<=Math.floor(M);k++){const b=s([h,k]);if(!b)continue;const j=k===0;a&&!j||i.push(o.jsx("div",{className:"absolute",style:{left:0,top:b[1],width:"100%",height:1,backgroundColor:u+(j?f:x),transform:j?"translateY(-50%)":void 0}},`h-${k}`))}return i},[e,n,t,s,a]),l=d.useMemo(()=>{const{pos:i}=_e([0,0],r,e,n),h=s(i);if(!h)return null;const y=t==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return o.jsx("div",{className:"absolute",style:{left:h[0],top:h[1],width:12,height:12,borderRadius:"50%",backgroundColor:y,transform:"translate(-50%, -50%)"}})},[r,e,n,t,s]);return o.jsxs(o.Fragment,{children:[c,l]})};function _e(e,n,t,s){const[r,a]=e,[c,l]=t,[i,h]=s;if(r>=c&&r<=l&&a>=i&&a<=h)return{pos:e,clipped:!1};const[y,v]=n,M=r-y,u=a-v;let f=1/0;const x=1e-9;if(Math.abs(M)>x){const j=(c-y)/M,m=(l-y)/M;if(j>0){const T=v+j*u;T>=i&&T<=h&&(f=Math.min(f,j))}if(m>0){const T=v+m*u;T>=i&&T<=h&&(f=Math.min(f,m))}}if(Math.abs(u)>x){const j=(i-v)/u,m=(h-v)/u;if(j>0){const T=y+j*M;T>=c&&T<=l&&(f=Math.min(f,j))}if(m>0){const T=y+m*M;T>=c&&T<=l&&(f=Math.min(f,m))}}if(f!==1/0&&f>0)return{pos:[y+f*M,v+f*u],clipped:!0};const k=Math.max(c,Math.min(l,r)),b=Math.max(i,Math.min(h,a));return{pos:[k,b],clipped:!0}}const Bt=({children:e,initialZoom:n=1,initialCenter:t=[0,0],baseViewSize:s=4,onInfoOverlay:r,onViewChange:a,className:c,controlPoints:l=[],initialControlPoints:i=[],onControlPointsChange:h,controlPointGroups:y=[],minControlPoints:v,maxControlPoints:M,showGridOverlay:u=!0})=>{const{theme:f}=oe(),[x,k]=d.useState(n),[b,j]=d.useState(t),[m,T]=d.useState(1),[$,U]=d.useState({pixelWidth:0,pixelHeight:0}),[w,C]=d.useState(null),[A,V]=d.useState(0),p=d.useRef(null),g=d.useRef(null),_=d.useRef(null);d.useEffect(()=>{const S=_.current;if(!S)return;const F=new ResizeObserver(q=>{for(let O of q){const{width:D,height:B}=O.contentRect;T(D>0&&B>0?D/B:1),U({pixelWidth:D,pixelHeight:B})}});return F.observe(S),()=>F.disconnect()},[]);const[P,z]=d.useMemo(()=>{let S,F;return m>=1?(F=s/x,S=F*m):(S=s/x,F=S/m),[S,F]},[x,m,s]),R=d.useMemo(()=>({center:b,worldWidth:P,worldHeight:z,zoom:x,...$}),[b,P,z,x,$]);d.useEffect(()=>{a&&a(R)},[R,a]);const N=d.useCallback(()=>{p.current&&clearTimeout(p.current),g.current&&clearTimeout(g.current),p.current=window.setTimeout(()=>{V(0),p.current=null},Ce),g.current=window.setTimeout(()=>{C(null),g.current=null},Ce+Ht)},[]),I=d.useCallback(S=>{!r&&l.length===0&&!u||(p.current&&clearTimeout(p.current),g.current&&clearTimeout(g.current),S&&C(S),V(1),N())},[r,l.length,u,N]),E=d.useCallback(S=>{N(),h&&h(S)},[h,N]),{controlHandlers:G,highlightedPoint:H}=Pt({zoom:x,setZoom:k,center:b,setCenter:j,worldWidth:P,worldHeight:z,aspect:m,baseViewSize:s,onShowInfo:I,controlPoints:l,initialControlPoints:i,onControlPointsChange:A>0?E:void 0,minControlPoints:v,maxControlPoints:M}),{style:W,...X}=G,[J,K]=d.useMemo(()=>{const S=[b[0]-P/2,b[0]+P/2],F=[b[1]-z/2,b[1]+z/2];return[S,F]},[b,P,z]);d.useEffect(()=>()=>{p.current&&clearTimeout(p.current),g.current&&clearTimeout(g.current)},[]);const re=d.useCallback(S=>{if(!_.current)return null;const{width:F,height:q}=_.current.getBoundingClientRect(),[O,D]=J,[B,Y]=K,ie=(S[0]-O)/P*F,le=(Y-S[1])/z*q;return[ie,le]},[J,K,P,z]),He=d.useMemo(()=>{if(!u)return null;let S=!1;if(_.current){const{pixelWidth:F,pixelHeight:q}=R,O=F/P,D=q/z;(O<Ne||D<Ne)&&(S=!0)}return o.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:A},children:o.jsx(qt,{xRange:J,yRange:K,theme:f,worldToScreen:re,center:b,gridTooDense:S})})},[u,A,J,K,f,re,b,R,P,z]),qe=d.useMemo(()=>{const S=O=>{const D=O?128:48,B=O?120:44;return{containerStyle:{width:D,height:D},highlightStyle:{width:B,height:B,borderWidth:O?46:8},highlightClass:O?"highlight-animated-flashing":"highlight-animated-normal"}},F=l.map((O,D)=>{const{pos:B}=_e(O,b,J,K),Y=re(B);if(!Y)return null;const ie=Dt(y[D]),le=H?.type==="point"&&H.index===D,fe=S(le&&H.flashing);return o.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...fe.containerStyle},children:[le&&o.jsx("div",{className:fe.highlightClass,style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...fe.highlightStyle}}),o.jsx("div",{className:"control-point-animating",style:{...ie,gridColumn:1,gridRow:1}})]},D)});let q=null;if(H?.type==="space"){const{pos:O}=_e(H.coords,b,J,K),D=re(O);if(D){const B=S(H.flashing);q=o.jsx("div",{className:"absolute",style:{left:D[0],top:D[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...B.containerStyle},children:o.jsx("div",{className:"highlight-animated-flashing",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...B.highlightStyle}})})}}return F.every(O=>O===null)&&!q?null:o.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:A},children:[F,q]})},[l,b,J,K,re,y,A,H]),Be=d.useMemo(()=>{if(!w||!r)return null;const S=r(w,R);if(!S)return null;const F=typeof S=="string"?{"top-left":S}:S;return Object.keys(F).length===0?null:Object.entries(F).map(([q,O])=>{if(!O)return null;const D=O.trim().split(`
`);return o.jsx("div",{className:L("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":q==="top-left","top-0 right-0 text-right":q==="top-right","bottom-0 left-0":q==="bottom-left","bottom-0 right-0 text-right":q==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":q==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":q==="bottom-center"}),style:{opacity:A},children:o.jsx("div",{className:L("p-1 rounded-md text-xs font-mono space-y-1",f==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:D.map((B,Y)=>o.jsx("div",{children:B},Y))})},q)})},[w,r,f,A,R]);return o.jsxs("div",{ref:_,className:L("w-full h-full relative",c,f==="dark"?"theme-dark":"theme-light"),style:W,...X,children:[o.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden",children:e(R)}),He,Be,qe]})},Vt=({children:e,adSenseConfig:n,...t})=>{const[s,r]=d.useState(!0),[a,c]=d.useState("medium"),[l,i]=d.useState(typeof window<"u"?window.innerWidth:0),[h,y]=d.useState(typeof window<"u"?window.visualViewport?.height??window.innerHeight:0),v=n?.client&&n?.slot,M=!!t.renderToolbar,u=bt();d.useEffect(()=>{const T=()=>{const w=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${w}px`)},$=()=>{r(M||(window.visualViewport?.height??window.innerHeight)>=600);const w=window.innerWidth,C=window.visualViewport?.height??window.innerHeight;i(w),y(C);const A=w<640,V=w>=1024;c(A?"narrow":V?"wide":"medium"),T()};$();const U=window.visualViewport??window;return U.addEventListener("resize",$),()=>{U.removeEventListener("resize",$)}},[]);const f=v?n?.height??90:0,x=v?n?.width??300:0,k=v&&a==="wide",b=a==="narrow"?!1:a==="wide"?!0:!M,j=()=>{const T=l,$=32,U=12,w=48,C=8,A=t.appIconUrl?32:0,V=220;let p=0;p+=1,t.showLanguage&&(p+=1);const g=t.help;(typeof g=="string"||Array.isArray(g)&&g.length>0)&&(p+=1);const _=t.config;(typeof _=="string"||Array.isArray(_)&&_.length>0)&&(p+=1),t.showUserProfile&&(p+=1);const P=p>0?p*w+(p-1)*C:0,z=b&&A>0?8:0,R=b?V:0,N=A+z+R,I=M?2*U:U,E=T-$-N-P-I;return Math.max(0,E)},m=o.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:u?{paddingTop:16,paddingBottom:12}:void 0,children:[s&&o.jsx(Mt,{...t,showTitle:b,toolbarWidthPx:M?j():0}),o.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:e})]});return v?o.jsxs("div",{className:"flex items-stretch flex-"+(k?"row":"col"),children:[o.jsx("div",{style:k?{width:`${Math.max(0,l-x)}px`,height:`${h}px`}:{width:`${l}px`,height:`${Math.max(0,h-f)}px`},children:m}),o.jsx("div",{style:k?{width:`${x}px`,height:`${h}px`}:{width:`${l}px`,height:`${f}px`},children:o.jsx($t,{client:n.client,slot:n.slot})})]}):o.jsx("div",{style:{width:`${l}px`,height:`${h}px`},children:m})},Gt=({isOpen:e,onClose:n,title:t,children:s,size:r="lg"})=>{const{theme:a}=oe(),c=l=>{switch(l){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return o.jsx(Le,{appear:!0,show:e,as:d.Fragment,children:o.jsxs(ot,{as:"div",className:L("relative z-50",a),onClose:n,children:[o.jsx(je,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),o.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:o.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:o.jsx(je,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:o.jsxs(rt,{className:L(c(r),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[o.jsx(at,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:t}),o.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o.jsx(st,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),o.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},Wt=({label:e,min:n,max:t,value:s,onChange:r,theme:a,valueLabel:c=h=>Math.round(h),posToVal:l=h=>n+(t-n)*h,valToPos:i=h=>(h-n)/(t-n)})=>{const h=d.useRef(null),y=d.useCallback(b=>{if(h.current){const j=h.current.getBoundingClientRect(),m=Math.max(0,Math.min(1,(b-j.left)/j.width));r(l(m))}},[r,l]),v=b=>{b.preventDefault(),y(b.clientX);const j=T=>{y(T.clientX)},m=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",m)},M=b=>{b.preventDefault(),b.touches.length>0&&y(b.touches[0].clientX);const j=T=>{T.touches.length>0&&y(T.touches[0].clientX)},m=()=>{document.removeEventListener("touchmove",j),document.removeEventListener("touchend",m)};document.addEventListener("touchmove",j),document.addEventListener("touchend",m)},u=i(s),f=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",x=u>.5,k=u>.25&&u<.5||u>.75;return o.jsx("div",{className:"w-full px-3",children:o.jsxs("div",{ref:h,onMouseDown:v,onTouchStart:M,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[o.jsx("div",{className:L("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),o.jsx("div",{className:L("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${u*100}%`}}),o.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e&&o.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":x?"text-white":"text-gray-800"),style:{...x?{left:"10px"}:{right:"10px"},textShadow:x?f:"none"},children:e}),o.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":k?"text-white":"text-gray-800"),style:{...k?{right:`calc(${100-u*100}% + 14px)`}:{left:`calc(${u*100}% + 14px)`},textShadow:k?f:"none"},children:c(s)})]}),o.jsx("div",{className:L("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${u*100}% - 12px)`}})]})})},Xt=({children:e,gl:n,frameloop:t="always",showGridOverlay:s,...r})=>{const[a,c]=d.useState(!1);return o.jsx(Bt,{...r,showGridOverlay:s,children:l=>o.jsxs(o.Fragment,{children:[o.jsx(dt,{frameloop:t,gl:n,onCreated:({gl:i})=>{i.domElement.addEventListener("webglcontextlost",h=>{h.preventDefault(),c(!0)},!1)},children:e(l)}),a&&o.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[o.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),o.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),o.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]})]})})};function de(e,n){const t=e<0?"-":"+",s=Math.abs(e),r=n-1;if(r<=0)return t;if(s===0)return t+"0.0".padEnd(r,"0").substring(0,r);const a=String(Math.trunc(s));if(a.length<=r){const c=r-a.length;if(c>1){let l=c-1,i=s.toFixed(l);if(i.split(".")[0].length>a.length&&(l-=i.split(".")[0].length-a.length,l>=0?i=s.toFixed(l):i=String(Math.round(s))),i.length<=r)return t+i}if(a.length<=r){let l=a;return l.length<r&&(l+=".".repeat(r-l.length)),t+l}}if(r>=3){for(let l=r-4;l>=0;l--){let i=s.toExponential(l).replace("e+","e");if(i.length<=r)return t+i}let c=s.toExponential(0).replace("e+","e");if(c.length<=r)return t+c}if(s>1)return t+".".repeat(r);{const c="0.0000";return c.length<=r?t+c:t+"0.0".padEnd(r,"0").substring(0,r)}}function ue(e,n,t=7,s="i"){const r=de(e,t),a=de(n,t);return`${r}${a}${s}`}function Re(e,n,t=7,s=["(",", ",")"]){const r=de(e,t),a=de(n,t);return`${s[0]}${r}${s[1]}${a}${s[2]}`}function Yt(e){return"min"in e&&"max"in e}class Ue{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class se extends Ue{constructor(n,t,s,r,a,c,l){super(),this.name=n,this.title=t,this.description=s,this.math=r,this.shader=a,this.iconUrl=l;let i,h,y;typeof c=="number"?(y=c,i=1,h=2e3):(y=c.initial,i=c.min,h=c.max);const v=u=>{const f=Math.log(i),x=Math.log(h);return Math.exp(f+(x-f)*u)},M=u=>{if(u<=i)return 0;if(u>=h)return 1;const f=Math.log(i),x=Math.log(h);return(Math.log(u)-f)/(x-f)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:y,min:i,max:h,posToVal:v,valToPos:M}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(n){}getInitialControlPoints(){return[]}getCanvasOverlayString(n,t){}getControlPointValues(n){}getControlPointGroups(n){return[]}}class Me extends se{constructor(n,t,s,r,a,c,l,i){super(n,t,s,r,a,c,i),this.controlPointInfo=l}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(n,t){if(n.length>0)return`${this.controlPointInfo.name} = ${ue(...n[0])}`}getControlPointValues(n){if(n.length>0)return[{label:this.controlPointInfo.name,value:ue(...n[0])}]}getControlPointUniforms(n){if(n.length>0)return{[this.controlPointInfo.uniformName]:n[0]}}getControlPointGroups(n){return[0]}}const Jt=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,Zt=""+new URL("newton-B60RDm46.png",import.meta.url).href,we=16;function Qt(e){const n=[];for(let t=0;t<e;t++){const s=2*Math.PI*t/e;n.push([Math.cos(s),Math.sin(s)])}return n}class en extends Ue{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=Jt,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Qt(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return Kt}getIcon(){return Zt}getCanvasOverlayString(n,t){return`p = ${n.length}`}getControlPointValues(n){return n.map((t,s)=>({label:`Root ${s+1}`,value:ue(...t)}))}getControlPointUniforms(n){if(n.length>0&&n.length<=we){const t=n.flat(),s=new Array(we*2).fill(0);return t.forEach((r,a)=>s[a]=r),{num_roots:n.length,roots:s}}}getControlPointGroups(n){return Array(n.length).fill(0)}getControlPointMinMax(){return[2,we]}}const tn=""+new URL("mandelbrot-DLtBXckj.png",import.meta.url).href,nn=`### Mandelbrot set

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
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,on=`uniform int iterations;
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
}`,rn=[0,0],an=new Me("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",nn,on,200,{name:"P",initialValue:rn,uniformName:"phoenixP"},tn),sn=""+new URL("julia-BPDBAcPP.png",import.meta.url).href,ln=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,hn=[-.7,.27015],dn=new Me("julia","Julia","Julia sets.",ln,cn,200,{name:"C",initialValue:hn,uniformName:"juliaC"},sn),un=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,mn=[-.85,-.6],pn=new Me("lambda","Lambda","Lambda fractal (logistic map).",un,fn,200,{name:"Lambda",initialValue:mn,uniformName:"lambda"}),gn=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,bn=`uniform int iterations;
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
`,wn=new se("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",vn,bn,80),$n=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,zn=new se("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",$n,_n,80),Mn=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,jn=`uniform int iterations;

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
`,Tn=new se("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Mn,jn,200),Pn=[new en,an,dn,pn,yn,wn,zn,Tn];function Se(e,n,t,s){return`vec3(${e}) + vec3(${n}) * cos(6.28318 * (vec3(${t}) * t + vec3(${s})))`}const ze={grayscale:"vec3(t)",cosmic:Se("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Se("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function kn(e){return ze[e]||ze.grayscale}const Ae=Object.fromEntries(Object.keys(ze).map(e=>[e,e.charAt(0).toUpperCase()+e.slice(1)])),Ie="cosmic",Cn=`
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
`,Nn=`
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
`;function Rn(e,n,t){if(Array.isArray(t))if(t.length===2)e[n]={value:new he(t[0],t[1])};else if(t.length===3)e[n]={value:new pt(t[0],t[1],t[2])};else if(t.length>=4&&t.length%2===0){const s=[];for(let r=0;r<t.length;r+=2)s.push(new he(t[r],t[r+1]));e[n]={value:s}}else e[n]={value:t};else e[n]={value:t}}function Sn(e,n,t){if(e.uniforms[n])if(Array.isArray(t))if(t.length===2)e.uniforms[n].value.fromArray(t);else if(t.length===3)e.uniforms[n].value.fromArray(t);else if(t.length>=4&&t.length%2===0){const s=[];for(let r=0;r<t.length;r+=2)s.push(new he(t[r],t[r+1]));e.uniforms[n].value=s}else e.uniforms[n].value=t;else e.uniforms[n].value=t}const An=({fractal:e,center:n,worldWidth:t,worldHeight:s,parameters:r,controlPoints:a,colorScheme:c})=>{const l=ut(y=>y.invalidate),i=d.useMemo(()=>{const y={FRACTAL_SHADER:e.getShaderCode(),EVALUATE_COLOR:kn(c)},v={center:{value:new he(...n)},viewWidth:{value:t},viewHeight:{value:s}};e.getGuiParameters().forEach(u=>{v[u.name]={value:r[u.name]}});const M=e.getControlPointUniforms(a);if(M)for(const[u,f]of Object.entries(M))Rn(v,u,f);return new ft({uniforms:v,vertexShader:Cn,fragmentShader:Nn.replace(/%(\w+)%/g,(u,f)=>String(y[f]))})},[e,c]);d.useEffect(()=>{i.uniforms.center.value.fromArray(n),i.uniforms.viewWidth.value=t,i.uniforms.viewHeight.value=s,e.getGuiParameters().forEach(v=>{i.uniforms[v.name].value=r[v.name]});const y=e.getControlPointUniforms(a);if(y)for(const[v,M]of Object.entries(y))Sn(i,v,M);l()},[i,n,t,s,r,a,l,e]);const h=d.useMemo(()=>{const y=new mt;return y.setDrawRange(0,3),y},[]);return o.jsx("mesh",{material:i,geometry:h})},In=({fractal:e,colorScheme:n})=>{const{theme:t}=oe(),[s,r]=d.useState(e.getInitialGuiParameters()),[a,c]=d.useState(e.getInitialControlPoints());d.useEffect(()=>{r(e.getInitialGuiParameters()),c(e.getInitialControlPoints()),i(u=>u+1)},[e]);const[l,i]=d.useState(0),h=e.getGuiParameters().map(u=>Yt(u)?o.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:o.jsx(Wt,{label:u.displayName,min:u.min,max:u.max,value:s[u.name],onChange:f=>r(x=>({...x,[u.name]:f})),theme:t,posToVal:u.posToVal,valToPos:u.valToPos})},u.name):null),y=e.getControlPointValues(a),[v,M]=e.getControlPointMinMax();return o.jsxs("div",{className:L("w-full h-full flex flex-col landscape:flex-row overflow-hidden",t==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[o.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[o.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[h,y&&y.length>0&&o.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:t==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:y.map(u=>o.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[o.jsx("p",{className:L("text-sm font-medium",t==="dark"?"text-gray-300":"text-gray-700"),children:u.label}),o.jsx("p",{className:L("text-base font-mono",t==="dark"?"text-gray-200":"text-gray-800"),children:u.value})]},u.label))})]})]}),o.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:o.jsx(Xt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(u,f)=>{const x=["[",", ","]"],k=Re(f.center[0]-f.worldWidth/2,f.center[0]+f.worldWidth/2,7,x),b=Re(f.center[1]-f.worldHeight/2,f.center[1]+f.worldHeight/2,7,x),j={"top-left":ue(...u),"top-right":`Re: ${k}
Im: ${b}`},m=e.getCanvasOverlayString(a,s),T=e.title;return j["bottom-center"]=m?`${T} | ${m}`:T,j},controlPoints:a,initialControlPoints:e.getInitialControlPoints(),onControlPointsChange:c,controlPointGroups:e.getControlPointGroups(a),minControlPoints:v,maxControlPoints:M,gl:{powerPreference:"default",antialias:!1},children:({center:u,worldWidth:f,worldHeight:x})=>o.jsx(An,{fractal:e,center:u,worldWidth:f,worldHeight:x,parameters:s,controlPoints:a,colorScheme:n})},l)})]})},En=`This application allows you to explore the intricate beauty of various fractals.
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
`,Ln=`## Fantastic Fractals — an interactive fractal explorer

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
`;var Fn={client:"ca-pub-5400548434612970",slot:"5745481735"};const te=Pn;function On(){const{theme:e}=oe(),n=d.useCallback(()=>{const w=["newton","mandelbrot","julia"],C=te.filter(A=>w.includes(A.name));return C.length>0?C[Math.floor(Math.random()*C.length)]:te[0]},[]),t=d.useRef(null);t.current===null&&(t.current=n());const s=d.useCallback(()=>{const C=ne().get("type");return te.find(A=>A.name===C)||t.current},[t]),[r,a]=d.useState(s),[c,l]=d.useState(()=>ne().get("colors")||Ie),[i,h]=d.useState(null);d.useEffect(()=>{const w=()=>{const C=ne(),A=C.get("type"),V=C.get("colors"),p=C.get("help"),g=te.find(_=>_.name===A)||t.current;a(g),l(V||Ie),h(p==="math"?"math":p==="controls"?"controls":p==="about"?"about":null)};return window.addEventListener("hashchange",w),w(),()=>window.removeEventListener("hashchange",w)},[]);const y=w=>{ye({type:w.name})},v=w=>{ye({colors:w})},M=te.map(w=>({name:w.title,value:w.name,icon:w.getIcon()?o.jsx("img",{src:w.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0,invertInDark:!0})),u=Object.entries(Ae).map(([w,C])=>({name:C,value:w})),f=w=>{const C=te.find(A=>A.name===w)||r;a(C),y(C)},x=w=>{l(w),v(w)},k=()=>{ye({help:null})},b=w=>{const C=ne();return C.set("help",w),w==="math"&&!C.has("type")&&C.set("type",r.name),`#${C.toString()}`},j=[{key:"controls",name:"Exploring the Fractal",href:b("controls"),icon:o.jsx(it,{})},{key:"math",name:`Math of ${r.title} Fractal`,href:b("math"),icon:o.jsx(lt,{})},{key:"about",name:"About Fantastic Fractals",href:b("about"),icon:o.jsx(ct,{})}],m=()=>o.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),o.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),o.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),o.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),o.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),o.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),o.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),o.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),T=()=>o.jsxs("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",className:"h-full w-full","aria-hidden":!0,children:[o.jsx("rect",{x:"0",y:"0",width:"24",height:"24",rx:"4",fill:"white"}),o.jsxs("g",{fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",transform:"translate(12 12) scale(1.35) translate(-12 -12)",children:[o.jsx("path",{d:"M6 12c0-3.314 2.686-6 6-6 2.761 0 5 2.239 5 5 0 2.209-1.791 4-4 4-1.657 0-3-1.343-3-3 0-1.105.895-2 2-2 .552 0 1 .448 1 1"}),o.jsx("path",{d:"M7.5 12c0-2.485 2.015-4.5 4.5-4.5 2.071 0 3.75 1.679 3.75 3.75 0 1.795-1.455 3.25-3.25 3.25-1.316 0-2.375-1.059-2.375-2.375 0-.87.705-1.575 1.575-1.575.434 0 .8.366.8.8",opacity:"0.8"}),o.jsx("path",{d:"M16.5 6.5c1.4 0 2.5 1.1 2.5 2.5 0 1-.5 1.9-1.3 2.3"}),o.jsx("path",{d:"M7.5 17.5c-1.4 0-2.5-1.1-2.5-2.5 0-1 .5-1.9 1.3-2.3"}),o.jsx("path",{d:"M12 4.5c1 0 1.8.8 1.8 1.8 0 .9-.7 1.6-1.6 1.8"}),o.jsx("path",{d:"M12 19.5c-1 0-1.8-.8-1.8-1.8 0-.9.7-1.6 1.6-1.8"})]})]}),$=()=>{if(i==="math"){const w=`## ${r.title} Fractal

${r.math}`;return o.jsx(me,{remarkPlugins:[ge,xe],rehypePlugins:[pe],children:w})}if(i==="controls"){const w=Ut("fractal view","complex parameter",!0,!0),C=`${En}

${w}`;return o.jsx(me,{remarkPlugins:[ge,xe],rehypePlugins:[pe],children:C})}if(i==="about"){const w=Ln;return o.jsx(me,{remarkPlugins:[ge,xe],rehypePlugins:[pe],children:w})}return null},U=()=>i==="math"?`Math of ${r.title} Fractal`:i==="controls"?"Exploring the Fractal":i==="about"?"About Fantastic Fractals":"";return o.jsxs(o.Fragment,{children:[o.jsx(Vt,{appName:"Fantastic Fractals",appIconUrl:"app-icon.png",help:j,adSenseConfig:Fn,renderToolbar:w=>{const g=w<360,_=r.title,P=Ae[c]||"Colors";return o.jsx("div",{className:"flex items-center gap-3 min-w-0",children:g?o.jsxs(o.Fragment,{children:[o.jsx(Q,{options:M,selected:_,onChange:z=>f(z),icon:o.jsx("div",{className:"h-8 w-8",children:o.jsx(T,{})}),showIconOnly:!0}),o.jsx(Q,{options:u,selected:P,onChange:z=>x(z),icon:o.jsx("div",{className:"h-8 w-8",children:o.jsx(m,{})}),showIconOnly:!0})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:180},children:o.jsx(Q,{options:M,selected:_,onChange:z=>f(z),icon:o.jsx(T,{})})}),o.jsx("div",{style:{width:160},children:o.jsx(Q,{options:u,selected:P,onChange:z=>x(z),icon:o.jsx(m,{})})})]})})},children:o.jsx(d.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(In,{fractal:r,colorScheme:c},r.name+"|"+c)})}),o.jsx(Gt,{isOpen:i!==null,onClose:k,title:U(),size:"xl",children:o.jsx("div",{className:L("prose dark:prose-invert max-w-none",e==="dark"?"dark":""),children:$()})})]})}function Dn(){return o.jsx(gt,{children:o.jsx(_t,{children:o.jsx(On,{})})})}ht.createRoot(document.getElementById("root")).render(o.jsx(Ee.StrictMode,{children:o.jsx(Dn,{})}));
