import{r as d,j as a,d as Re,i as Ue,P as Be,e as L,z as Ae,E as qe,g as Ge,f as Ve,h as We,k as Xe,l as Ye,m as Je,n as Ke,o as Ze,p as Qe,L as et,q as $e,t as tt,v as nt,w as at,x as _e,y as ot,A as rt,M as st,B as it,C as lt,D as ct,G as ht}from"./other-YTmW3IKV.js";import{C as dt,u as ut,V as he,S as ft,B as mt,a as pt}from"./three-BRVevKC_.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const Ie=d.createContext(void 0),gt=({children:e})=>{const[n,t]=d.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});d.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),c=i=>{localStorage.getItem("theme")||t(i.matches?"dark":"light")};return r.addEventListener("change",c),()=>{r.removeEventListener("change",c)}},[]),d.useEffect(()=>{const r=window.document.documentElement;n==="dark"?r.classList.add("dark"):r.classList.remove("dark")},[n]);const s=()=>{t(r=>{const c=r==="light"?"dark":"light";return localStorage.setItem("theme",c),c})},o=d.useMemo(()=>({theme:n,toggleTheme:s}),[n]);return a.jsx(Ie.Provider,{value:o,children:e})},ae=()=>{const e=d.useContext(Ie);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},ye=e=>{if(e.startsWith("#")||e.startsWith("/"))return!1;try{return new URL(e,window.location.origin).hostname!==window.location.hostname}catch{return!1}},ne=()=>new URLSearchParams(window.location.hash.substring(1)),me=(e,n=!1)=>{const t=ne();Object.entries(e).forEach(([o,r])=>{r==null?t.delete(o):t.set(o,r)});const s=t.toString();if(window.location.hash.substring(1)!==s){const o=window.location.href,r=`${window.location.pathname}${window.location.search}`,c=s?`${r}#${s}`:r;n?window.history.pushState(null,"",c):window.history.replaceState(null,"",c);try{const i=new HashChangeEvent("hashchange",{oldURL:o,newURL:c});window.dispatchEvent(i)}catch{window.dispatchEvent(new Event("hashchange"))}}},xt=()=>typeof window<"u"&&!!window?.__TAURI__,yt=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),vt=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},wt=()=>xt()&&yt(),bt=vt()?"xl":"md",pe={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-2.5 text-lg",item:"px-5 py-3 text-lg"}},Q=({label:e,options:n,selected:t,onChange:s,theme:o,size:r=bt,align:c="left",icon:i,showIconOnly:l,trigger:h,buttonClassName:y})=>{const v=d.useRef(null),[k,u]=d.useState({}),m=ae?.(),x=o??m?.theme??"light",P=()=>{if(v.current){const b=v.current.getBoundingClientRect(),E={top:`${b.bottom+4}px`,minWidth:`${b.width}px`};c==="left"?E.left=`${b.left}px`:E.right=`${window.innerWidth-b.right}px`,u(E)}},$=r==="sm"?"h-4 w-4":r==="md"||r==="lg"?"h-5 w-5":"h-6 w-6",p=n?.find(b=>b?.name===t)?.icon??i,M=(()=>{if(l&&i&&Re.isValidElement(i)){const b=i.props?.className;if(b&&(b.includes("h-")||b.includes("w-")))return b}return $})();return a.jsxs(Ue,{as:"div",className:"relative",children:[a.jsx(Be,{ref:v,onClick:P,className:L(h?y:l?["p-2 rounded-full focus:outline-none",x==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",pe[r].button,x==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:h||(l?a.jsx("span",{className:L(M,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:p}):a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"flex items-center truncate",children:[p&&a.jsx("span",{className:L($,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:p}),e&&`${e}: `,a.jsx("strong",{children:t})]}),a.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}))}),a.jsx(Ae,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:a.jsx(qe,{style:k,className:L("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":c==="left","origin-top-right":c==="right"},x==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:a.jsx("div",{className:"py-1",children:n.map((b,E)=>{const U=b.key??b.value??b.name??E,G=!!b.href,w=b.href?ye(b.href):!1;return a.jsx(Ge,{children:({focus:S})=>G?a.jsxs("a",{href:b.href,target:w?"_blank":"_self",rel:"noopener noreferrer",className:L("flex items-center justify-between w-full whitespace-nowrap",pe[r].item,S?x==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":x==="dark"?"text-gray-300":"text-gray-700"),children:[a.jsxs("div",{className:"flex items-center",children:[b.icon&&a.jsx("span",{className:"mr-3 h-5 w-5",children:b.icon}),b.name]}),w&&a.jsx(Ve,{className:"h-4 w-4"})]}):a.jsx("button",{onClick:()=>s&&s(b.value),className:L("w-full text-left block whitespace-nowrap",pe[r].item,S?x==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":x==="dark"?"text-gray-300":"text-gray-700"),children:a.jsxs("div",{className:"flex items-center",children:[b.icon&&a.jsx("span",{className:"mr-3 h-5 w-5",children:b.icon}),b.name]})})},U)})})})})]})},$t=({client:e,slot:n,style:t={display:"block"},format:s="auto",responsive:o="true"})=>(d.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.error("AdSense error:",r)}},[]),a.jsx("ins",{className:"adsbygoogle",style:t,"data-ad-client":e,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":o})),Ee=d.createContext(void 0),_t=({children:e,defaultLanguage:n="en",storageKey:t="language"})=>{const[s,o]=d.useState(()=>{if(typeof window<"u"){const l=localStorage.getItem(t);if(l==="en"||l==="zh")return l;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return n});d.useEffect(()=>{typeof window<"u"&&localStorage.setItem(t,s)},[s,t]);const r=l=>o(l),c=()=>o(l=>l==="en"?"zh":"en"),i=d.useMemo(()=>({language:s,setLanguage:r,toggleLanguage:c}),[s]);return a.jsx(Ee.Provider,{value:i,children:e})},zt=()=>{const e=d.useContext(Ee);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e},Tt=({appName:e,help:n,config:t,showUserProfile:s,renderToolbar:o,showLanguage:r,language:c,onLanguageChange:i,appIconUrl:l,showTitle:h=!0,toolbarWidthPx:y=0})=>{const{theme:v,toggleTheme:k}=ae(),{setLanguage:u}=zt(),m=()=>{if(!n)return null;const p=a.jsx(Ke,{className:"h-8 w-8"});if(typeof n=="string")return a.jsx("a",{href:n,target:ye(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:p});if(Array.isArray(n)&&n.length>0){const M=n.map(b=>({name:b.name,href:b.href,icon:b.icon}));return a.jsx(Q,{options:M,align:"right",icon:p,showIconOnly:!0})}return null},x=()=>{if(!t)return null;const p=a.jsx(Ze,{className:"h-8 w-8"});if(typeof t=="string")return a.jsx("a",{href:t,target:ye(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:p});if(Array.isArray(t)&&t.length>0){const M=t.map(b=>({name:b.name,href:b.href,icon:b.icon}));return a.jsx(Q,{options:M,align:"right",icon:p,showIconOnly:!0})}return null},P=p=>{i?.(p);try{u(p)}catch{}},$=typeof window<"u"&&ne().get("applink")||void 0,T=()=>r?a.jsx(Q,{options:[{name:"English",value:"en"},{name:"中文",value:"zh"}],align:"right",icon:a.jsx(Je,{className:"h-8 w-8"}),showIconOnly:!0,onChange:p=>P(p)}):null;return a.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex items-center border-b border-gray-200 dark:border-gray-700 gap-3",children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[l&&($?a.jsx("a",{href:$,className:"inline-block",title:$,children:a.jsx("img",{src:l,alt:"App icon",className:"h-12 w-12 rounded cursor-pointer hover:opacity-90"})}):a.jsx("img",{src:l,alt:"App icon",className:"h-12 w-12 rounded"})),h&&a.jsx("h1",{className:"text-xl font-bold truncate",children:e})]}),a.jsx("div",{className:"flex-1 min-w-0",children:typeof o=="function"?o(y):null}),a.jsxs("nav",{className:"flex items-center space-x-2",children:[a.jsx("button",{onClick:k,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:v==="light"?a.jsx(We,{className:"h-8 w-8"}):a.jsx(Xe,{className:"h-8 w-8"})}),T(),m(),x(),s&&a.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:a.jsx(Ye,{className:"h-8 w-8"})})]})]})},Mt=36,ze=1e3,jt=10,ee=(e,n,t,s,o,r,c)=>{if(t.length===0)return null;let i=null;const[l,h]=[s[0]-o/2,s[1]+r/2];for(let y=0;y<t.length;y++){const v=t[y],k=(v[0]-l)/o*c.width,u=(h-v[1])/r*c.height,m=Math.sqrt(Math.pow(e-k,2)+Math.pow(n-u,2));(i===null||m<i.distance)&&(i={index:y,distance:m})}return i&&i.distance<Mt?i:null},kt=({zoom:e,setZoom:n,center:t,setCenter:s,worldWidth:o,worldHeight:r,aspect:c,baseViewSize:i=4,onShowInfo:l,controlPoints:h=[],initialControlPoints:y=[],onControlPointsChange:v,minControlPoints:k,maxControlPoints:u})=>{const[m,x]=d.useState(null),P=d.useRef(m);P.current=m;const[$,T]=d.useState(!1),p=d.useRef(null),M=d.useRef(null),b=d.useCallback(()=>{n(1),s([0,0])},[n,s]),E=d.useCallback(()=>{const f=P.current;if(!(!v||!f)){if(f.type==="point"){if(k===void 0||h.length<=k)return;const g=h.filter((_,j)=>j!==f.index);v(g)}else{if(u===void 0||h.length>=u)return;const g=[...h,f.coords];v(g)}x(null)}},[h,u,k,v]),U=d.useCallback((f,g,_)=>{const j=f-_.left,C=g-_.top,N=ee(j,C,h,t,o,r,_);if(N)x({type:"point",index:N.index,flashing:!0});else{const z=t[0]-o/2+j/_.width*o,A=t[1]+r/2-C/_.height*r;x({type:"space",coords:[z,A],flashing:!0})}p.current=window.setTimeout(()=>{E(),p.current=null},ze)},[t,h,E,r,o]),G=Qe({onPointerDown:({event:f})=>{f.preventDefault();const g=f.target.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:j}=f,C=_-g.left,N=j-g.top,z=ee(C,N,h,t,o,r,g);z?(T(!0),x({type:"point",index:z.index,flashing:!1})):x(null),l&&(M.current={x:_,y:j},p.current=window.setTimeout(()=>{U(_,j,g)},ze))},onPointerUp:({event:f})=>{T(!1);const g=f.target.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:j}=f,C=_-g.left,N=j-g.top,z=ee(C,N,h,t,o,r,g);x(z?{type:"point",index:z.index,flashing:!1}:null),p.current&&(clearTimeout(p.current),p.current=null)},onPointerMove:({event:f})=>{if($)return;const g=f.target.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:j}=f;if(p.current&&M.current){const W=_-M.current.x,X=j-M.current.y;Math.sqrt(W*W+X*X)>jt&&(clearTimeout(p.current),p.current=null,x(null))}const C=_-g.left,N=j-g.top,z=ee(C,N,h,t,o,r,g);if(x(z?{type:"point",index:z.index,flashing:!1}:W=>W?.type==="point"?null:W),!l)return;const A=_-g.left,I=j-g.top,V=t[0]+(A/g.width-.5)*o,D=t[1]+(.5-I/g.height)*r;l([V,D])},onDrag:({event:f,first:g,movement:[_,j],xy:[C,N],memo:z})=>{p.current&&(clearTimeout(p.current),p.current=null,x(I=>I?.type==="point"?{...I,flashing:!1}:null)),f.preventDefault();const A=f.target.getBoundingClientRect();if(A){if(g||!z){const I=C-A.left,V=N-A.top;if(v){const D=ee(I,V,h,t,o,r,A);if(D)return{dragMode:"point",pointIndex:D.index}}return{dragMode:"canvas",startCenter:t}}if(z.dragMode==="point"){if(!v)return z;const I=C-A.left,V=N-A.top,D=t[0]-o/2+I/A.width*o,W=t[1]+r/2-V/A.height*r,X=[...h];return X[z.pointIndex]=[D,W],v(X),z}if(z.dragMode==="canvas"){const{startCenter:I}=z;if(!I)return z;const V=_/A.width*o,D=j/A.height*r;return s([I[0]-V,I[1]+D]),z}}},onPinch:({event:f,first:g,offset:[_]})=>{f.preventDefault(),g&&(p.current&&(clearTimeout(p.current),p.current=null),x(null)),n(_)},onWheel:({event:f,delta:[,g]})=>{if(g===0)return;const _=f.target.getBoundingClientRect();if(!_)return;const j=f.clientX-_.left,C=f.clientY-_.top,N=1.1,z=g<0?e*N:e/N;let A,I;c>=1?(I=i/z,A=I*c):(A=i/z,I=A/c);const V=j/_.width-.5,D=.5-C/_.height,W=t[0]+V*(o-A),X=t[1]+D*(r-I);n(z),s([W,X])},onDoubleClick:({event:f})=>{f.preventDefault();const g=f.target.getBoundingClientRect();if(!g)return;const _=f.clientX-g.left,j=f.clientY-g.top;if(v){const C=ee(_,j,h,t,o,r,g);if(C&&y&&y[C.index]){const N=[...h];N[C.index]=y[C.index],v(N);return}}b()},onClick:({event:f})=>{if(!l)return;const g=f.currentTarget.getBoundingClientRect();if(!g)return;const{clientX:_,clientY:j}=f,C=_-g.left,N=j-g.top,z=t[0]+(C/g.width-.5)*o,A=t[1]+(.5-N/g.height)*r;l([z,A])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[e,0]}}),w={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...G(),onContextMenu:f=>f.preventDefault(),style:w},highlightedPoint:m}},Ct=["primary","secondary","tertiary","signal","accent","neutral"],ge=Ct,Pt={primary:"circle",secondary:"square",tertiary:"diamond",signal:"triangle",accent:"pentagram",neutral:"dot"},Nt={circle:1,square:1,diamond:1,triangle:1,pentagram:1.2,dot:0,star:1.2,cross:1,plus:1,hexagon:1,pentagon:1},re=e=>e.map(n=>n.join(",")).join(" "),St=Math.sin(Math.PI/10)/Math.sin(7*Math.PI/10),Le=(e,n,t,s)=>{const o=[],r=n/2,c=r*s;for(let i=0;i<t*2;i++){const l=i*Math.PI/t-Math.PI/2,h=i%2===0?r:c;o.push([e[0]+h*Math.cos(l),e[1]+h*Math.sin(l)])}return re(o)},Rt=(e,n)=>Le(e,n,5,St),At=(e,n)=>{const t=n/2,s=[[e[0],e[1]-t],[e[0]+t,e[1]],[e[0],e[1]+t],[e[0]-t,e[1]]];return re(s)},It=(e,n)=>{const t=n/2,s=e[0],o=e[1],r=[[s,o+t],[s-t*Math.sqrt(3)/2,o-t/2],[s+t*Math.sqrt(3)/2,o-t/2]];return re(r)},Te=(e,n)=>{const t=n/2,s=n/5,[o,r]=e;return`M ${o-s},${r-t} L ${o+s},${r-t} L ${o+s},${r-s} L ${o+t},${r-s} L ${o+t},${r+s} L ${o+s},${r+s} L ${o+s},${r+t} L ${o-s},${r+t} L ${o-s},${r+s} L ${o-t},${r+s} L ${o-t},${r-s} L ${o-s},${r-s} Z`},Et=(e,n)=>{const t=n/2,s=[];for(let o=0;o<6;o++){const r=o*Math.PI/3;s.push([e[0]+t*Math.cos(r),e[1]+t*Math.sin(r)])}return re(s)},Lt=(e,n)=>{const t=n/2,s=[];for(let o=0;o<5;o++){const r=o*2*Math.PI/5-Math.PI/2;s.push([e[0]+t*Math.cos(r),e[1]+t*Math.sin(r)])}return re(s)},Ft={circle:(e,n)=>({tagName:"circle",cx:e[0],cy:e[1],r:n/2}),square:(e,n)=>({tagName:"rect",x:e[0]-n/2,y:e[1]-n/2,width:n,height:n}),diamond:(e,n)=>({tagName:"polygon",points:At(e,n)}),triangle:(e,n)=>({tagName:"polygon",points:It(e,n)}),pentagram:(e,n)=>({tagName:"polygon",points:Rt(e,n)}),dot:(e,n)=>({tagName:"circle",cx:e[0],cy:e[1],r:n/2}),star:(e,n)=>({tagName:"polygon",points:Le(e,n,6,.5)}),plus:(e,n)=>({tagName:"path",d:Te(e,n)}),cross:(e,n)=>({tagName:"path",d:Te(e,n),transform:`rotate(45, ${e[0]}, ${e[1]})`}),hexagon:(e,n)=>({tagName:"polygon",points:Et(e,n)}),pentagon:(e,n)=>({tagName:"polygon",points:Lt(e,n)})},Ot=e=>e in Ft,ce={cursor:"grab",boxShadow:"0 0 0 2px white, 0 0 0 4px black"},Z={cursor:"grab",filter:"drop-shadow(0 0 2px black) drop-shadow(0 0 1px white)"},Me={circle:e=>({...ce,width:e,height:e,borderRadius:"50%"}),square:e=>({...ce,width:e,height:e}),diamond:e=>({...ce,width:e,height:e,transform:"rotate(45deg)"}),triangle:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)"}),pentagram:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}),dot:e=>({...ce,width:e,height:e,borderRadius:"50%"}),star:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0%, 63% 25%, 88% 25%, 75% 50%, 88% 75%, 63% 75%, 50% 100%, 37% 75%, 12% 75%, 25% 50%, 12% 25%, 37% 25%)"}),plus:e=>({...Z,width:e,height:e,clipPath:"polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)"}),cross:e=>({...Z,width:e,height:e,clipPath:"polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)",transform:"rotate(45deg)"}),hexagon:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)"}),pentagon:e=>({...Z,width:e,height:e,clipPath:"polygon(50% 0, 95% 35%, 78% 90%, 22% 90%, 5% 35%)"})},Ht=(e,n=24)=>{let t;if(typeof e=="string"&&Ot(e))t=e;else{let c="primary";typeof e=="number"?c=ge[e%ge.length]||"primary":typeof e=="string"&&ge.includes(e)&&(c=e),t=Pt[c]}const s=Nt[t]??1,o=t==="dot"?8:n*s;return(Me[t]||Me.circle)(o)};function Dt(e="view",n="control point",t=!1,s=!1){let o=`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${e} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${e} to reset
  the pan and zoom to their original values.
`;return n&&(o+=`
Some visualizations may feature control points, each representing a
${n}. If not visible, hover over or single-click the ${e}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${n}:** Click and drag a control point to move it.
- **Reset ${n}:** Double-click a ${n} to reset its position.
`,t&&(o+=`- **Add ${n}:** Long-press on an empty area to add a new ${n}.
`),s&&(o+=`- **Remove ${n}:** Long-press on an existing ${n} to remove it.
`)),o+=`
### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${e} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${e} to reset the
  pan and zoom to their original or best-fit values.
`,n&&(o+=`
Some visualizations may feature control points, each representing a
${n}. If not visible, tap anywhere on the ${e} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${n}:** Drag a control point to move it.
- **Reset ${n}:** Double-tap a ${n} to reset its position.
`,t&&(o+=`- **Add ${n}:** Long-press on an empty area to add a new ${n}.
`),s&&(o+=`- **Remove ${n}:** Long-press on an existing ${n} to remove it.
`)),o}const je=5e3,Ut=500,ke=25,Bt=({xRange:e,yRange:n,theme:t,worldToScreen:s,center:o,gridTooDense:r})=>{const c=d.useMemo(()=>{const l=[],[h,y]=e,[v,k]=n,u=t==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",m="0.8)",x="0.5)";for(let P=Math.ceil(h);P<=Math.floor(y);P++){const $=s([P,v]);if(!$)continue;const T=P===0;r&&!T||l.push(a.jsx("div",{className:"absolute",style:{left:$[0],top:0,width:1,height:"100%",backgroundColor:u+(T?m:x),transform:T?"translateX(-50%)":void 0}},`v-${P}`))}for(let P=Math.ceil(v);P<=Math.floor(k);P++){const $=s([h,P]);if(!$)continue;const T=P===0;r&&!T||l.push(a.jsx("div",{className:"absolute",style:{left:0,top:$[1],width:"100%",height:1,backgroundColor:u+(T?m:x),transform:T?"translateY(-50%)":void 0}},`h-${P}`))}return l},[e,n,t,s,r]),i=d.useMemo(()=>{const{pos:l}=ve([0,0],o,e,n),h=s(l);if(!h)return null;const y=t==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return a.jsx("div",{className:"absolute",style:{left:h[0],top:h[1],width:12,height:12,borderRadius:"50%",backgroundColor:y,transform:"translate(-50%, -50%)"}})},[o,e,n,t,s]);return a.jsxs(a.Fragment,{children:[c,i]})};function ve(e,n,t,s){const[o,r]=e,[c,i]=t,[l,h]=s;if(o>=c&&o<=i&&r>=l&&r<=h)return{pos:e,clipped:!1};const[y,v]=n,k=o-y,u=r-v;let m=1/0;const x=1e-9;if(Math.abs(k)>x){const T=(c-y)/k,p=(i-y)/k;if(T>0){const M=v+T*u;M>=l&&M<=h&&(m=Math.min(m,T))}if(p>0){const M=v+p*u;M>=l&&M<=h&&(m=Math.min(m,p))}}if(Math.abs(u)>x){const T=(l-v)/u,p=(h-v)/u;if(T>0){const M=y+T*k;M>=c&&M<=i&&(m=Math.min(m,T))}if(p>0){const M=y+p*k;M>=c&&M<=i&&(m=Math.min(m,p))}}if(m!==1/0&&m>0)return{pos:[y+m*k,v+m*u],clipped:!0};const P=Math.max(c,Math.min(i,o)),$=Math.max(l,Math.min(h,r));return{pos:[P,$],clipped:!0}}const qt=({children:e,initialZoom:n=1,initialCenter:t=[0,0],baseViewSize:s=4,onInfoOverlay:o,onViewChange:r,className:c,controlPoints:i=[],initialControlPoints:l=[],onControlPointsChange:h,controlPointGroups:y=[],minControlPoints:v,maxControlPoints:k,showGridOverlay:u=!0})=>{const{theme:m}=ae(),[x,P]=d.useState(n),[$,T]=d.useState(t),[p,M]=d.useState(1),[b,E]=d.useState({pixelWidth:0,pixelHeight:0}),[U,G]=d.useState(null),[w,S]=d.useState(0),f=d.useRef(null),g=d.useRef(null),_=d.useRef(null);d.useEffect(()=>{const R=_.current;if(!R)return;const F=new ResizeObserver(B=>{for(let O of B){const{width:H,height:q}=O.contentRect;M(H>0&&q>0?H/q:1),E({pixelWidth:H,pixelHeight:q})}});return F.observe(R),()=>F.disconnect()},[]);const[j,C]=d.useMemo(()=>{let R,F;return p>=1?(F=s/x,R=F*p):(R=s/x,F=R/p),[R,F]},[x,p,s]),N=d.useMemo(()=>({center:$,worldWidth:j,worldHeight:C,zoom:x,...b}),[$,j,C,x,b]);d.useEffect(()=>{r&&r(N)},[N,r]);const z=d.useCallback(()=>{f.current&&clearTimeout(f.current),g.current&&clearTimeout(g.current),f.current=window.setTimeout(()=>{S(0),f.current=null},je),g.current=window.setTimeout(()=>{G(null),g.current=null},je+Ut)},[]),A=d.useCallback(R=>{!o&&i.length===0&&!u||(f.current&&clearTimeout(f.current),g.current&&clearTimeout(g.current),R&&G(R),S(1),z())},[o,i.length,u,z]),I=d.useCallback(R=>{z(),h&&h(R)},[h,z]),{controlHandlers:V,highlightedPoint:D}=kt({zoom:x,setZoom:P,center:$,setCenter:T,worldWidth:j,worldHeight:C,aspect:p,baseViewSize:s,onShowInfo:A,controlPoints:i,initialControlPoints:l,onControlPointsChange:w>0?I:void 0,minControlPoints:v,maxControlPoints:k}),{style:W,...X}=V,[J,K]=d.useMemo(()=>{const R=[$[0]-j/2,$[0]+j/2],F=[$[1]-C/2,$[1]+C/2];return[R,F]},[$,j,C]);d.useEffect(()=>()=>{f.current&&clearTimeout(f.current),g.current&&clearTimeout(g.current)},[]);const oe=d.useCallback(R=>{if(!_.current)return null;const{width:F,height:B}=_.current.getBoundingClientRect(),[O,H]=J,[q,Y]=K,ie=(R[0]-O)/j*F,le=(Y-R[1])/C*B;return[ie,le]},[J,K,j,C]),Oe=d.useMemo(()=>{if(!u)return null;let R=!1;if(_.current){const{pixelWidth:F,pixelHeight:B}=N,O=F/j,H=B/C;(O<ke||H<ke)&&(R=!0)}return a.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:w},children:a.jsx(Bt,{xRange:J,yRange:K,theme:m,worldToScreen:oe,center:$,gridTooDense:R})})},[u,w,J,K,m,oe,$,N,j,C]),He=d.useMemo(()=>{const R=O=>{const H=O?128:48,q=O?120:44;return{containerStyle:{width:H,height:H},highlightStyle:{width:q,height:q,borderWidth:O?46:8},highlightClass:O?"highlight-animated-flashing":"highlight-animated-normal"}},F=i.map((O,H)=>{const{pos:q}=ve(O,$,J,K),Y=oe(q);if(!Y)return null;const ie=Ht(y[H]),le=D?.type==="point"&&D.index===H,fe=R(le&&D.flashing);return a.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...fe.containerStyle},children:[le&&a.jsx("div",{className:fe.highlightClass,style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...fe.highlightStyle}}),a.jsx("div",{className:"control-point-animating",style:{...ie,gridColumn:1,gridRow:1}})]},H)});let B=null;if(D?.type==="space"){const{pos:O}=ve(D.coords,$,J,K),H=oe(O);if(H){const q=R(D.flashing);B=a.jsx("div",{className:"absolute",style:{left:H[0],top:H[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...q.containerStyle},children:a.jsx("div",{className:"highlight-animated-flashing",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...q.highlightStyle}})})}}return F.every(O=>O===null)&&!B?null:a.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:w},children:[F,B]})},[i,$,J,K,oe,y,w,D]),De=d.useMemo(()=>{if(!U||!o)return null;const R=o(U,N);if(!R)return null;const F=typeof R=="string"?{"top-left":R}:R;return Object.keys(F).length===0?null:Object.entries(F).map(([B,O])=>{if(!O)return null;const H=O.trim().split(`
`);return a.jsx("div",{className:L("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":B==="top-left","top-0 right-0 text-right":B==="top-right","bottom-0 left-0":B==="bottom-left","bottom-0 right-0 text-right":B==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":B==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":B==="bottom-center"}),style:{opacity:w},children:a.jsx("div",{className:L("p-1 rounded-md text-xs font-mono space-y-1",m==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:H.map((q,Y)=>a.jsx("div",{children:q},Y))})},B)})},[U,o,m,w,N]);return a.jsxs("div",{ref:_,className:L("w-full h-full relative",c,m==="dark"?"theme-dark":"theme-light"),style:W,...X,children:[a.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden",children:e(N)}),Oe,De,He]})},Gt=({children:e,adSenseConfig:n,...t})=>{const[s,o]=d.useState(!0),[r,c]=d.useState("medium"),[i,l]=d.useState(typeof window<"u"?window.innerWidth:0),[h,y]=d.useState(typeof window<"u"?window.visualViewport?.height??window.innerHeight:0),v=n?.client&&n?.slot,k=!!t.renderToolbar,u=wt();d.useEffect(()=>{const M=()=>{const U=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${U}px`)},b=()=>{o(k||(window.visualViewport?.height??window.innerHeight)>=600);const U=window.innerWidth,G=window.visualViewport?.height??window.innerHeight;l(U),y(G);const w=U<640,S=U>=1024;c(w?"narrow":S?"wide":"medium"),M()};b();const E=window.visualViewport??window;return E.addEventListener("resize",b),()=>{E.removeEventListener("resize",b)}},[]);const m=v?n?.height??90:0,x=v?n?.width??300:0,P=v&&r==="wide",$=r==="narrow"?!1:r==="wide"?!0:!k,T=()=>{const M=i,b=32,E=12,U=48,G=8,w=t.appIconUrl?32:0,S=220;let f=0;f+=1,t.showLanguage&&(f+=1);const g=t.help;(typeof g=="string"||Array.isArray(g)&&g.length>0)&&(f+=1);const _=t.config;(typeof _=="string"||Array.isArray(_)&&_.length>0)&&(f+=1),t.showUserProfile&&(f+=1);const j=f>0?f*U+(f-1)*G:0,C=$&&w>0?8:0,N=$?S:0,z=w+C+N,A=k?2*E:E,I=M-b-z-j-A;return Math.max(0,I)},p=a.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:u?{paddingTop:16,paddingBottom:12}:void 0,children:[s&&a.jsx(Tt,{...t,showTitle:$,toolbarWidthPx:k?T():0}),a.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:e})]});return v?a.jsxs("div",{className:"flex items-stretch flex-"+(P?"row":"col"),children:[a.jsx("div",{style:P?{width:`${Math.max(0,i-x)}px`,height:`${h}px`}:{width:`${i}px`,height:`${Math.max(0,h-m)}px`},children:p}),a.jsx("div",{style:P?{width:`${x}px`,height:`${h}px`}:{width:`${i}px`,height:`${m}px`},children:a.jsx($t,{client:n.client,slot:n.slot})})]}):a.jsx("div",{style:{width:`${i}px`,height:`${h}px`},children:p})},Vt=({isOpen:e,onClose:n,title:t,children:s,size:o="lg"})=>{const{theme:r}=ae(),c=i=>{switch(i){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return a.jsx(Ae,{appear:!0,show:e,as:d.Fragment,children:a.jsxs(et,{as:"div",className:L("relative z-50",r),onClose:n,children:[a.jsx($e,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),a.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:a.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:a.jsx($e,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a.jsxs(tt,{className:L(c(o),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[a.jsx(nt,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:t}),a.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:a.jsx(at,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),a.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},Wt=({label:e,min:n,max:t,value:s,onChange:o,theme:r,valueLabel:c=h=>Math.round(h),posToVal:i=h=>n+(t-n)*h,valToPos:l=h=>(h-n)/(t-n)})=>{const h=d.useRef(null),y=d.useCallback($=>{if(h.current){const T=h.current.getBoundingClientRect(),p=Math.max(0,Math.min(1,($-T.left)/T.width));o(i(p))}},[o,i]),v=$=>{$.preventDefault(),y($.clientX);const T=M=>{y(M.clientX)},p=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",p)},k=$=>{$.preventDefault(),$.touches.length>0&&y($.touches[0].clientX);const T=M=>{M.touches.length>0&&y(M.touches[0].clientX)},p=()=>{document.removeEventListener("touchmove",T),document.removeEventListener("touchend",p)};document.addEventListener("touchmove",T),document.addEventListener("touchend",p)},u=l(s),m=r==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",x=u>.5,P=u>.25&&u<.5||u>.75;return a.jsx("div",{className:"w-full px-3",children:a.jsxs("div",{ref:h,onMouseDown:v,onTouchStart:k,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[a.jsx("div",{className:L("w-full h-full rounded-full",r==="dark"?"bg-gray-700":"bg-gray-300")}),a.jsx("div",{className:L("absolute top-0 left-0 h-full rounded-full",r==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${u*100}%`}}),a.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e&&a.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-medium",r==="dark"?"text-gray-200":x?"text-white":"text-gray-800"),style:{...x?{left:"10px"}:{right:"10px"},textShadow:x?m:"none"},children:e}),a.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-mono",r==="dark"?"text-gray-200":P?"text-white":"text-gray-800"),style:{...P?{right:`calc(${100-u*100}% + 14px)`}:{left:`calc(${u*100}% + 14px)`},textShadow:P?m:"none"},children:c(s)})]}),a.jsx("div",{className:L("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",r==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${u*100}% - 12px)`}})]})})},Xt=({children:e,gl:n,frameloop:t="always",showGridOverlay:s,...o})=>{const[r,c]=d.useState(!1);return a.jsx(qt,{...o,showGridOverlay:s,children:i=>a.jsxs(a.Fragment,{children:[a.jsx(dt,{frameloop:t,gl:n,onCreated:({gl:l})=>{l.domElement.addEventListener("webglcontextlost",h=>{h.preventDefault(),c(!0)},!1)},children:e(i)}),r&&a.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[a.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),a.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),a.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]})]})})};function de(e,n){const t=e<0?"-":"+",s=Math.abs(e),o=n-1;if(o<=0)return t;if(s===0)return t+"0.0".padEnd(o,"0").substring(0,o);const r=String(Math.trunc(s));if(r.length<=o){const c=o-r.length;if(c>1){let i=c-1,l=s.toFixed(i);if(l.split(".")[0].length>r.length&&(i-=l.split(".")[0].length-r.length,i>=0?l=s.toFixed(i):l=String(Math.round(s))),l.length<=o)return t+l}if(r.length<=o){let i=r;return i.length<o&&(i+=".".repeat(o-i.length)),t+i}}if(o>=3){for(let i=o-4;i>=0;i--){let l=s.toExponential(i).replace("e+","e");if(l.length<=o)return t+l}let c=s.toExponential(0).replace("e+","e");if(c.length<=o)return t+c}if(s>1)return t+".".repeat(o);{const c="0.0000";return c.length<=o?t+c:t+"0.0".padEnd(o,"0").substring(0,o)}}function ue(e,n,t=7,s="i"){const o=de(e,t),r=de(n,t);return`${o}${r}${s}`}function Ce(e,n,t=7,s=["(",", ",")"]){const o=de(e,t),r=de(n,t);return`${s[0]}${o}${s[1]}${r}${s[2]}`}function Yt(e){return"min"in e&&"max"in e}class Fe{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class se extends Fe{constructor(n,t,s,o,r,c,i){super(),this.name=n,this.title=t,this.description=s,this.math=o,this.shader=r,this.iconUrl=i;let l,h,y;typeof c=="number"?(y=c,l=1,h=2e3):(y=c.initial,l=c.min,h=c.max);const v=u=>{const m=Math.log(l),x=Math.log(h);return Math.exp(m+(x-m)*u)},k=u=>{if(u<=l)return 0;if(u>=h)return 1;const m=Math.log(l),x=Math.log(h);return(Math.log(u)-m)/(x-m)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:y,min:l,max:h,posToVal:v,valToPos:k}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(n){}getInitialControlPoints(){return[]}getCanvasOverlayString(n,t){}getControlPointValues(n){}getControlPointGroups(n){return[]}}class be extends se{constructor(n,t,s,o,r,c,i,l){super(n,t,s,o,r,c,l),this.controlPointInfo=i}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(n,t){if(n.length>0)return`${this.controlPointInfo.name} = ${ue(...n[0])}`}getControlPointValues(n){if(n.length>0)return[{label:this.controlPointInfo.name,value:ue(...n[0])}]}getControlPointUniforms(n){if(n.length>0)return{[this.controlPointInfo.uniformName]:n[0]}}getControlPointGroups(n){return[0]}}const Jt=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,Zt=""+new URL("newton-B60RDm46.png",import.meta.url).href,xe=16;function Qt(e){const n=[];for(let t=0;t<e;t++){const s=2*Math.PI*t/e;n.push([Math.cos(s),Math.sin(s)])}return n}class en extends Fe{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=Jt,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Qt(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return Kt}getIcon(){return Zt}getCanvasOverlayString(n,t){return`p = ${n.length}`}getControlPointValues(n){return n.map((t,s)=>({label:`Root ${s+1}`,value:ue(...t)}))}getControlPointUniforms(n){if(n.length>0&&n.length<=xe){const t=n.flat(),s=new Array(xe*2).fill(0);return t.forEach((o,r)=>s[r]=o),{num_roots:n.length,roots:s}}}getControlPointGroups(n){return Array(n.length).fill(0)}getControlPointMinMax(){return[2,xe]}}const tn=""+new URL("mandelbrot-DLtBXckj.png",import.meta.url).href,nn=`### Mandelbrot set

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
`,jn=new se("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Tn,Mn,200),kn=[new en,rn,dn,pn,yn,bn,zn,jn];function Pe(e,n,t,s){return`vec3(${e}) + vec3(${n}) * cos(6.28318 * (vec3(${t}) * t + vec3(${s})))`}const we={grayscale:"vec3(t)",cosmic:Pe("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Pe("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function Cn(e){return we[e]||we.grayscale}const Ne=Object.fromEntries(Object.keys(we).map(e=>[e,e.charAt(0).toUpperCase()+e.slice(1)])),Se="cosmic",Pn=`
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
`;function Sn(e,n,t){if(Array.isArray(t))if(t.length===2)e[n]={value:new he(t[0],t[1])};else if(t.length===3)e[n]={value:new pt(t[0],t[1],t[2])};else if(t.length>=4&&t.length%2===0){const s=[];for(let o=0;o<t.length;o+=2)s.push(new he(t[o],t[o+1]));e[n]={value:s}}else e[n]={value:t};else e[n]={value:t}}function Rn(e,n,t){if(e.uniforms[n])if(Array.isArray(t))if(t.length===2)e.uniforms[n].value.fromArray(t);else if(t.length===3)e.uniforms[n].value.fromArray(t);else if(t.length>=4&&t.length%2===0){const s=[];for(let o=0;o<t.length;o+=2)s.push(new he(t[o],t[o+1]));e.uniforms[n].value=s}else e.uniforms[n].value=t;else e.uniforms[n].value=t}const An=({fractal:e,center:n,worldWidth:t,worldHeight:s,parameters:o,controlPoints:r,colorScheme:c})=>{const i=ut(y=>y.invalidate),l=d.useMemo(()=>{const y={FRACTAL_SHADER:e.getShaderCode(),EVALUATE_COLOR:Cn(c)},v={center:{value:new he(...n)},viewWidth:{value:t},viewHeight:{value:s}};e.getGuiParameters().forEach(u=>{v[u.name]={value:o[u.name]}});const k=e.getControlPointUniforms(r);if(k)for(const[u,m]of Object.entries(k))Sn(v,u,m);return new ft({uniforms:v,vertexShader:Pn,fragmentShader:Nn.replace(/%(\w+)%/g,(u,m)=>String(y[m]))})},[e,c]);d.useEffect(()=>{l.uniforms.center.value.fromArray(n),l.uniforms.viewWidth.value=t,l.uniforms.viewHeight.value=s,e.getGuiParameters().forEach(v=>{l.uniforms[v.name].value=o[v.name]});const y=e.getControlPointUniforms(r);if(y)for(const[v,k]of Object.entries(y))Rn(l,v,k);i()},[l,n,t,s,o,r,i,e]);const h=d.useMemo(()=>{const y=new mt;return y.setDrawRange(0,3),y},[]);return a.jsx("mesh",{material:l,geometry:h})},In=({fractal:e,colorScheme:n})=>{const{theme:t}=ae(),[s,o]=d.useState(e.getInitialGuiParameters()),[r,c]=d.useState(e.getInitialControlPoints());d.useEffect(()=>{o(e.getInitialGuiParameters()),c(e.getInitialControlPoints()),l(u=>u+1)},[e]);const[i,l]=d.useState(0),h=e.getGuiParameters().map(u=>Yt(u)?a.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:a.jsx(Wt,{label:u.displayName,min:u.min,max:u.max,value:s[u.name],onChange:m=>o(x=>({...x,[u.name]:m})),theme:t,posToVal:u.posToVal,valToPos:u.valToPos})},u.name):null),y=e.getControlPointValues(r),[v,k]=e.getControlPointMinMax();return a.jsxs("div",{className:L("w-full h-full flex flex-col landscape:flex-row overflow-hidden",t==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[a.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[a.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[h,y&&y.length>0&&a.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:t==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:y.map(u=>a.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[a.jsx("p",{className:L("text-sm font-medium",t==="dark"?"text-gray-300":"text-gray-700"),children:u.label}),a.jsx("p",{className:L("text-base font-mono",t==="dark"?"text-gray-200":"text-gray-800"),children:u.value})]},u.label))})]})]}),a.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:a.jsx(Xt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(u,m)=>{const x=["[",", ","]"],P=Ce(m.center[0]-m.worldWidth/2,m.center[0]+m.worldWidth/2,7,x),$=Ce(m.center[1]-m.worldHeight/2,m.center[1]+m.worldHeight/2,7,x),T={"top-left":ue(...u),"top-right":`Re: ${P}
Im: ${$}`},p=e.getCanvasOverlayString(r,s),M=e.title;return T["bottom-center"]=p?`${M} | ${p}`:M,T},controlPoints:r,initialControlPoints:e.getInitialControlPoints(),onControlPointsChange:c,controlPointGroups:e.getControlPointGroups(r),minControlPoints:v,maxControlPoints:k,gl:{powerPreference:"default",antialias:!1},children:(({center:u,worldWidth:m,worldHeight:x})=>a.jsx(An,{fractal:e,center:u,worldWidth:m,worldHeight:x,parameters:s,controlPoints:r,colorScheme:n}))},i)})]})},En=`This application allows you to explore the intricate beauty of various fractals.
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


`;var On={client:"ca-pub-5400548434612970",slot:"5745481735"};const te=kn;function Hn(){const{theme:e}=ae(),n=d.useCallback(()=>{const w=["newton","mandelbrot","julia"],S=te.filter(f=>w.includes(f.name));return S.length>0?S[Math.floor(Math.random()*S.length)]:te[0]},[]),t=d.useRef(null);t.current===null&&(t.current=n());const s=d.useCallback(()=>{const S=ne().get("type");return te.find(f=>f.name===S)||t.current},[t]),[o,r]=d.useState(s),[c,i]=d.useState(()=>ne().get("colors")||Se),[l,h]=d.useState(null),y=[{key:"math",name:`Math of ${o.title} Fractal`,icon:a.jsx(_e,{}),content:`## ${o.title} Fractal

${o.math}`},{key:"usage",name:"How to Explore Interactively",icon:a.jsx(ot,{}),content:`${En}

${Dt("fractal view","complex parameter",!0,!0)}`},{key:"essay",name:"A Short History of Fractals",icon:a.jsx(_e,{}),content:Fn},{key:"about",name:"About Fantastic Fractals",icon:a.jsx(rt,{}),content:Ln}];d.useEffect(()=>{const w=()=>{const S=ne(),f=S.get("type"),g=S.get("colors"),_=S.get("help"),j=te.find(N=>N.name===f)||t.current;r(j),i(g||Se),_&&["math","usage","essay","about"].includes(_)?h(_):h(null)};return window.addEventListener("hashchange",w),w(),()=>window.removeEventListener("hashchange",w)},[]);const v=w=>{me({type:w.name})},k=w=>{me({colors:w})},u=te.map(w=>({name:w.title,value:w.name,icon:w.getIcon()?a.jsx("img",{src:w.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0,invertInDark:!0})),m=Object.entries(Ne).map(([w,S])=>({name:S,value:w})),x=w=>{const S=te.find(f=>f.name===w)||o;r(S),v(S)},P=w=>{i(w),k(w)},$=()=>{me({help:null})},T=w=>{const S=ne();return S.set("help",w),w==="math"&&!S.has("type")&&S.set("type",o.name),`#${S.toString()}`},p=y.map(({key:w,name:S,icon:f})=>({key:w,name:S,href:T(w),icon:f})),M=()=>a.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),a.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),a.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),a.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),a.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),a.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),a.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),a.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),b=()=>a.jsxs("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",className:"h-full w-full","aria-hidden":!0,children:[a.jsx("rect",{x:"0",y:"0",width:"24",height:"24",rx:"4",fill:"white"}),a.jsxs("g",{fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",transform:"translate(12 12) scale(1.35) translate(-12 -12)",children:[a.jsx("path",{d:"M6 12c0-3.314 2.686-6 6-6 2.761 0 5 2.239 5 5 0 2.209-1.791 4-4 4-1.657 0-3-1.343-3-3 0-1.105.895-2 2-2 .552 0 1 .448 1 1"}),a.jsx("path",{d:"M7.5 12c0-2.485 2.015-4.5 4.5-4.5 2.071 0 3.75 1.679 3.75 3.75 0 1.795-1.455 3.25-3.25 3.25-1.316 0-2.375-1.059-2.375-2.375 0-.87.705-1.575 1.575-1.575.434 0 .8.366.8.8",opacity:"0.8"}),a.jsx("path",{d:"M16.5 6.5c1.4 0 2.5 1.1 2.5 2.5 0 1-.5 1.9-1.3 2.3"}),a.jsx("path",{d:"M7.5 17.5c-1.4 0-2.5-1.1-2.5-2.5 0-1 .5-1.9 1.3-2.3"}),a.jsx("path",{d:"M12 4.5c1 0 1.8.8 1.8 1.8 0 .9-.7 1.6-1.6 1.8"}),a.jsx("path",{d:"M12 19.5c-1 0-1.8-.8-1.8-1.8 0-.9.7-1.6 1.6-1.8"})]})]}),E=y.find(w=>w.key===l),U=()=>{if(!E)return null;const w=E.content;return a.jsx(st,{remarkPlugins:[lt,ct],rehypePlugins:[it],children:w})},G=()=>E?.name||"";return a.jsxs(a.Fragment,{children:[a.jsx(Gt,{appName:"Fantastic Fractals",appIconUrl:"app-icon.png",help:p,adSenseConfig:On,renderToolbar:w=>{const j=w<360,C=o.title,N=Ne[c]||"Colors";return a.jsx("div",{className:"flex items-center gap-3 min-w-0",children:j?a.jsxs(a.Fragment,{children:[a.jsx(Q,{options:u,selected:C,onChange:z=>x(z),icon:a.jsx("div",{className:"h-8 w-8",children:a.jsx(b,{})}),showIconOnly:!0}),a.jsx(Q,{options:m,selected:N,onChange:z=>P(z),icon:a.jsx("div",{className:"h-8 w-8",children:a.jsx(M,{})}),showIconOnly:!0})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:180},children:a.jsx(Q,{options:u,selected:C,onChange:z=>x(z),icon:a.jsx(b,{})})}),a.jsx("div",{style:{width:160},children:a.jsx(Q,{options:m,selected:N,onChange:z=>P(z),icon:a.jsx(M,{})})})]})})},children:a.jsx(d.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(In,{fractal:o,colorScheme:c},o.name+"|"+c)})}),a.jsx(Vt,{isOpen:l!==null,onClose:$,title:G(),size:"xl",children:a.jsx("div",{className:L("prose dark:prose-invert max-w-none",e==="dark"?"dark":""),children:U()})})]})}function Dn(){return a.jsx(gt,{children:a.jsx(_t,{children:a.jsx(Hn,{})})})}ht.createRoot(document.getElementById("root")).render(a.jsx(Re.StrictMode,{children:a.jsx(Dn,{})}));
