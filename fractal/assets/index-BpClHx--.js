import{r as c,j as r,i as Re,P as Ie,d as F,z as ge,E as Fe,g as Ae,e as Ge,f as Ye,h as Be,k as Je,l as We,m as Ke,L as Ze,n as ve,q as Qe,o as et,p as tt,t as nt,v as rt,w as ot,M as be,x as we,y as ze,A as $e,B as at,C as st}from"./other-p-I2a2oX.js";import{C as it,u as Ee,V as se,S as lt,B as ct,a as dt}from"./three-Cv4E1IyV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const _e={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-3 text-lg",item:"px-5 py-2.5 text-lg"}},Me=({label:o,options:e,selected:n,onChange:s,theme:t,size:a="md",align:u="left"})=>{const l=c.useRef(null),[i,d]=c.useState({}),p=()=>{if(l.current){const h=l.current.getBoundingClientRect(),b={top:`${h.bottom+4}px`,minWidth:`${h.width}px`};u==="left"?b.left=`${h.left}px`:b.right=`${window.innerWidth-h.right}px`,d(b)}};return r.jsxs(Re,{as:"div",className:"relative",children:[r.jsxs(Ie,{ref:l,onClick:p,className:F("flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",_e[a].button,t==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"),children:[r.jsxs("span",{className:"truncate",children:[o&&`${o}: `,r.jsx("strong",{children:n})]}),r.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}),r.jsx(ge,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:r.jsx(Fe,{style:i,className:F("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":u==="left","origin-top-right":u==="right"},t==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:r.jsx("div",{className:"py-1",children:e.map(h=>r.jsx(Ae,{children:({focus:b})=>r.jsx("button",{onClick:()=>s(h.value),className:F("w-full text-left block whitespace-nowrap",_e[a].item,b?t==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":t==="dark"?"text-gray-300":"text-gray-700"),children:h.name})},h.value))})})})]})},ut=({client:o,slot:e,style:n={display:"block"},format:s="auto",responsive:t="true"})=>(c.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),r.jsx("ins",{className:"adsbygoogle",style:n,"data-ad-client":o,"data-ad-slot":e,"data-ad-format":s,"data-full-width-responsive":t})),Le=c.createContext(void 0),ht=({children:o})=>{const[e,n]=c.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});c.useEffect(()=>{const a=window.document.documentElement;e==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[e]);const s=()=>{n(a=>a==="light"?"dark":"light")},t=c.useMemo(()=>({theme:e,toggleTheme:s}),[e]);return r.jsx(Le.Provider,{value:t,children:o})},Q=()=>{const o=c.useContext(Le);if(o===void 0)throw new Error("useTheme must be used within a ThemeProvider");return o},he=o=>{if(o.startsWith("#")||o.startsWith("/"))return!1;try{return new URL(o,window.location.origin).hostname!==window.location.hostname}catch{return!1}},ne=()=>new URLSearchParams(window.location.hash.substring(1)),de=o=>{const e=ne();Object.entries(o).forEach(([s,t])=>{t==null?e.delete(s):e.set(s,t)});const n=e.toString();window.location.hash.substring(1)!==n&&(window.location.hash=n)},Pe=({icon:o,options:e,align:n="left"})=>{const{theme:s}=Q();return r.jsxs(Re,{as:"div",className:"relative inline-block text-left",children:[r.jsx("div",{children:r.jsx(Ie,{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o})}),r.jsx(ge,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:r.jsx(Fe,{className:F("absolute z-50 mt-2 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"right-0 origin-top-right":n==="right","left-0 origin-top-left":n==="left"},s==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:r.jsx("div",{className:"py-1",children:e.map(t=>{const a=he(t.href);return r.jsx(Ae,{children:({focus:u})=>r.jsxs("a",{href:t.href,target:a?"_blank":"_self",rel:"noopener noreferrer",className:F("flex items-center justify-between px-4 py-2 text-base w-full whitespace-nowrap",u?s==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":s==="dark"?"text-gray-300":"text-gray-700"),children:[r.jsxs("div",{className:"flex items-center",children:[t.icon&&r.jsx("span",{className:"mr-3 h-5 w-5",children:t.icon}),t.name]}),a&&r.jsx(Ge,{className:"h-4 w-4"})]})},t.key)})})})})]})},ft=({appName:o,help:e,config:n,showUserProfile:s})=>{const{theme:t,toggleTheme:a}=Q(),u=()=>{if(!e)return null;const i=r.jsx(We,{className:"h-8 w-8"});return typeof e=="string"?r.jsx("a",{href:e,target:he(e)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:i}):Array.isArray(e)&&e.length>0?r.jsx(Pe,{icon:i,options:e,align:"right"}):null},l=()=>{if(!n)return null;const i=r.jsx(Ke,{className:"h-8 w-8"});return typeof n=="string"?r.jsx("a",{href:n,target:he(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:i}):Array.isArray(n)&&n.length>0?r.jsx(Pe,{icon:i,options:n,align:"right"}):null};return r.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[r.jsx("h1",{className:"text-xl font-bold",children:o}),r.jsxs("nav",{className:"flex items-center space-x-2",children:[r.jsx("button",{onClick:a,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:t==="light"?r.jsx(Ye,{className:"h-8 w-8"}):r.jsx(Be,{className:"h-8 w-8"})}),u(),l(),s&&r.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r.jsx(Je,{className:"h-8 w-8"})})]})]})},mt=({children:o,adSenseConfig:e,...n})=>{const[s,t]=c.useState(!0),[a,u]=c.useState(!1),l=e?.client&&e?.slot;c.useEffect(()=>{const b=()=>{const T=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${T}px`)},x=()=>{t((window.visualViewport?.height??window.innerHeight)>=600),u(window.innerWidth>=1280),b()};x();const y=window.visualViewport??window;return y.addEventListener("resize",x),()=>{y.removeEventListener("resize",x)}},[]);const i=l?e?.height??90:0,d=l?e?.width??300:0,p=l&&a,h=r.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",children:[s&&r.jsx(ft,{...n}),r.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:o})]});return l?r.jsxs("div",{className:"flex items-stretch flex-"+(p?"row":"col"),children:[r.jsx("div",{className:p?"h-screen":"w-screen",style:p?{width:`calc(100vw - ${d}px)`}:{height:`calc(100vh - ${i}px)`},children:h}),r.jsx("div",{style:p?{width:`${d}px`}:{height:`${i}px`},children:r.jsx(ut,{client:e.client,slot:e.slot})})]}):r.jsx("div",{className:"w-screen h-screen",children:h})},pt=({isOpen:o,onClose:e,title:n,children:s,size:t="lg"})=>{const{theme:a}=Q(),u=l=>{switch(l){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return r.jsx(ge,{appear:!0,show:o,as:c.Fragment,children:r.jsxs(Ze,{as:"div",className:F("relative z-50",a),onClose:e,children:[r.jsx(ve,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),r.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:r.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:r.jsx(ve,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r.jsxs(Qe,{className:F(u(t),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[r.jsx(et,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),r.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r.jsx(tt,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),r.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},gt=({label:o,min:e,max:n,value:s,onChange:t,theme:a,valueLabel:u=d=>Math.round(d),posToVal:l=d=>e+(n-e)*d,valToPos:i=d=>(d-e)/(n-e)})=>{const d=c.useRef(null),p=c.useCallback(v=>{if(d.current){const g=d.current.getBoundingClientRect(),f=Math.max(0,Math.min(1,(v-g.left)/g.width));t(l(f))}},[t,l]),h=v=>{v.preventDefault(),p(v.clientX);const g=C=>{p(C.clientX)},f=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",f)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",f)},b=v=>{v.preventDefault(),v.touches.length>0&&p(v.touches[0].clientX);const g=C=>{C.touches.length>0&&p(C.touches[0].clientX)},f=()=>{document.removeEventListener("touchmove",g),document.removeEventListener("touchend",f)};document.addEventListener("touchmove",g),document.addEventListener("touchend",f)},x=i(s),y=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",T=x>.5,j=x>.25&&x<.5||x>.75;return r.jsx("div",{className:"w-full px-3",children:r.jsxs("div",{ref:d,onMouseDown:h,onTouchStart:b,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[r.jsx("div",{className:F("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),r.jsx("div",{className:F("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${x*100}%`}}),r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o&&r.jsx("span",{className:F("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":T?"text-white":"text-gray-800"),style:{...T?{left:"10px"}:{right:"10px"},textShadow:T?y:"none"},children:o}),r.jsx("span",{className:F("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":j?"text-white":"text-gray-800"),style:{...j?{right:`calc(${100-x*100}% + 14px)`}:{left:`calc(${x*100}% + 14px)`},textShadow:j?y:"none"},children:u(s)})]}),r.jsx("div",{className:F("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${x*100}% - 12px)`}})]})})},xt=36,je=1e3,yt=10,Z=(o,e,n,s,t,a,u)=>{if(n.length===0)return null;let l=null;const[i,d]=[s[0]-t/2,s[1]+a/2];for(let p=0;p<n.length;p++){const h=n[p],b=(h[0]-i)/t*u.width,x=(d-h[1])/a*u.height,y=Math.sqrt(Math.pow(o-b,2)+Math.pow(e-x,2));(l===null||y<l.distance)&&(l={index:p,distance:y})}return l&&l.distance<xt?l:null},vt=({zoom:o,setZoom:e,center:n,setCenter:s,viewWidth:t,viewHeight:a,aspect:u,baseViewSize:l=4,onShowInfo:i,controlPoints:d=[],initialControlPoints:p=[],onControlPointsChange:h,minControlPoints:b,maxControlPoints:x})=>{const[y,T]=c.useState(null),j=c.useRef(y);j.current=y;const[v,g]=c.useState(!1),f=c.useRef(null),C=c.useRef(null),U=c.useCallback(()=>{e(1),s([0,0])},[e,s]),B=c.useCallback(()=>{const z=j.current;if(!(!h||!z)){if(z.type==="point"){if(b===void 0||d.length<=b)return;const m=d.filter((_,M)=>M!==z.index);h(m)}else{if(x===void 0||d.length>=x)return;const m=[...d,z.coords];h(m)}T(null)}},[d,x,b,h]),w=c.useCallback((z,m,_)=>{const M=z-_.left,k=m-_.top,N=Z(M,k,d,n,t,a,_);if(N)T({type:"point",index:N.index,flashing:!0});else{const $=n[0]-t/2+M/_.width*t,P=n[1]+a/2-k/_.height*a;T({type:"space",coords:[$,P],flashing:!0})}f.current=window.setTimeout(()=>{B(),f.current=null},je)},[n,d,B,a,t]);return{controlHandlers:{...nt({onPointerDown:({event:z})=>{const m=z.target.getBoundingClientRect();if(!m)return;const{clientX:_,clientY:M}=z,k=_-m.left,N=M-m.top,$=Z(k,N,d,n,t,a,m);$?(g(!0),T({type:"point",index:$.index,flashing:!1})):T(null),i&&(C.current={x:_,y:M},f.current=window.setTimeout(()=>{w(_,M,m)},je))},onPointerUp:({event:z})=>{g(!1);const m=z.target.getBoundingClientRect();if(!m)return;const{clientX:_,clientY:M}=z,k=_-m.left,N=M-m.top,$=Z(k,N,d,n,t,a,m);T($?{type:"point",index:$.index,flashing:!1}:null),f.current&&(clearTimeout(f.current),f.current=null)},onPointerMove:({event:z})=>{if(v)return;const m=z.target.getBoundingClientRect();if(!m)return;const{clientX:_,clientY:M}=z;if(f.current&&C.current){const V=_-C.current.x,G=M-C.current.y;Math.sqrt(V*V+G*G)>yt&&(clearTimeout(f.current),f.current=null,T(null))}const k=_-m.left,N=M-m.top,$=Z(k,N,d,n,t,a,m);if(T($?{type:"point",index:$.index,flashing:!1}:V=>V?.type==="point"?null:V),!i)return;const P=_-m.left,I=M-m.top,q=n[0]+(P/m.width-.5)*t,H=n[1]+(.5-I/m.height)*a;i([q,H])},onDrag:({event:z,first:m,movement:[_,M],xy:[k,N],memo:$})=>{f.current&&(clearTimeout(f.current),f.current=null,T(I=>I?.type==="point"?{...I,flashing:!1}:null)),z.preventDefault();const P=z.target.getBoundingClientRect();if(P){if(m||!$){const I=k-P.left,q=N-P.top;if(h){const H=Z(I,q,d,n,t,a,P);if(H)return{dragMode:"point",pointIndex:H.index}}return{dragMode:"canvas",startCenter:n}}if($.dragMode==="point"){if(!h)return $;const I=k-P.left,q=N-P.top,H=n[0]-t/2+I/P.width*t,V=n[1]+a/2-q/P.height*a,G=[...d];return G[$.pointIndex]=[H,V],h(G),$}if($.dragMode==="canvas"){const{startCenter:I}=$;if(!I)return $;const q=_/P.width*t,H=M/P.height*a;return s([I[0]-q,I[1]+H]),$}}},onPinch:({event:z,first:m,offset:[_]})=>{z.preventDefault(),m&&(f.current&&(clearTimeout(f.current),f.current=null),T(null)),e(_)},onWheel:({event:z,delta:[,m]})=>{if(m===0)return;const _=z.target.getBoundingClientRect();if(!_)return;const M=z.clientX-_.left,k=z.clientY-_.top,N=1.1,$=m<0?o*N:o/N;let P,I;u>=1?(I=l/$,P=I*u):(P=l/$,I=P/u);const q=M/_.width-.5,H=.5-k/_.height,V=n[0]+q*(t-P),G=n[1]+H*(a-I);e($),s([V,G])},onDoubleClick:({event:z})=>{z.preventDefault();const m=z.target.getBoundingClientRect();if(!m)return;const _=z.clientX-m.left,M=z.clientY-m.top;if(h){const k=Z(_,M,d,n,t,a,m);if(k&&p&&p[k.index]){const N=[...d];N[k.index]=p[k.index],h(N);return}}U()},onClick:({event:z})=>{if(!i)return;const m=z.currentTarget.getBoundingClientRect();if(!m)return;const{clientX:_,clientY:M}=z,k=_-m.left,N=M-m.top,$=n[0]+(k/m.width-.5)*t,P=n[1]+(.5-N/m.height)*a;i([$,P])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[o,0]}})(),style:{touchAction:"none"}},highlightedPoint:y}};function bt({canvasName:o="canvas",parameterName:e="control point"}={}){return`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${o} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${o} to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${e}. If not visible, hover over or single-click the ${o}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${e}:** Click and drag a control point to move it.
- **Add ${e}:** Long-press on an empty area to add a new ${e}.
- **Remove ${e}:** Long-press on an existing ${e} to remove it.
- **Reset ${e}:** Double-click a ${e} to reset its position.

### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${o} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${o} to reset the
  pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${e}. If not visible, tap anywhere on the ${o} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${e}:** Drag a control point to move it.
- **Add ${e}:** Long-press on an empty area to add a new ${e}.
- **Remove ${e}:** Long-press on an existing ${e} to remove it.
- **Reset ${e}:** Double-tap a ${e} to reset its position.`}const Te=5e3,wt=500,Ce=25,zt=({setAspect:o})=>{const{size:e}=Ee();return c.useEffect(()=>{o(e.width>0&&e.height>0?e.width/e.height:1)},[e,o]),null},$t=({xRange:o,yRange:e,theme:n,worldToScreen:s,center:t,gridTooDense:a})=>{const u=c.useMemo(()=>{const i=[],[d,p]=o,[h,b]=e,x=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",y="0.8)",T="0.5)";for(let j=Math.ceil(d);j<=Math.floor(p);j++){const v=s([j,h]);if(!v)continue;const g=j===0;a&&!g||i.push(r.jsx("div",{className:"absolute",style:{left:v[0],top:0,width:1,height:"100%",backgroundColor:x+(g?y:T),transform:g?"translateX(-50%)":void 0}},`v-${j}`))}for(let j=Math.ceil(h);j<=Math.floor(b);j++){const v=s([d,j]);if(!v)continue;const g=j===0;a&&!g||i.push(r.jsx("div",{className:"absolute",style:{left:0,top:v[1],width:"100%",height:1,backgroundColor:x+(g?y:T),transform:g?"translateY(-50%)":void 0}},`h-${j}`))}return i},[o,e,n,s,a]),l=c.useMemo(()=>{const{pos:i}=fe([0,0],t,o,e),d=s(i);if(!d)return null;const p=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return r.jsx("div",{className:"absolute",style:{left:d[0],top:d[1],width:12,height:12,borderRadius:"50%",backgroundColor:p,transform:"translate(-50%, -50%)"}})},[t,o,e,n,s]);return r.jsxs(r.Fragment,{children:[u,l]})},te={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},_t=o=>{if(typeof o=="number"){const e=Object.keys(te);return te[e[o%e.length]||"default"]}return typeof o=="string"&&te[o]?te[o]:te.default};function fe(o,e,n,s){const[t,a]=o,[u,l]=n,[i,d]=s;if(t>=u&&t<=l&&a>=i&&a<=d)return{pos:o,clipped:!1};const[p,h]=e,b=t-p,x=a-h;let y=1/0;const T=1e-9;if(Math.abs(b)>T){const g=(u-p)/b,f=(l-p)/b;if(g>0){const C=h+g*x;C>=i&&C<=d&&(y=Math.min(y,g))}if(f>0){const C=h+f*x;C>=i&&C<=d&&(y=Math.min(y,f))}}if(Math.abs(x)>T){const g=(i-h)/x,f=(d-h)/x;if(g>0){const C=p+g*b;C>=u&&C<=l&&(y=Math.min(y,g))}if(f>0){const C=p+f*b;C>=u&&C<=l&&(y=Math.min(y,f))}}if(y!==1/0&&y>0)return{pos:[p+y*b,h+y*x],clipped:!0};const j=Math.max(u,Math.min(l,t)),v=Math.max(i,Math.min(d,a));return{pos:[j,v],clipped:!0}}const Mt=({children:o,initialZoom:e=1,initialCenter:n=[0,0],baseViewSize:s=4,onInfoOverlay:t,onViewChange:a,className:u,gl:l,controlPoints:i=[],initialControlPoints:d=[],onControlPointsChange:p,controlPointGroups:h=[],minControlPoints:b,maxControlPoints:x,showGrid:y=!0,frameloop:T="always"})=>{const{theme:j}=Q(),[v,g]=c.useState(e),[f,C]=c.useState(n),[U,B]=c.useState(1),[w,R]=c.useState(!1),[L,z]=c.useState(null),[m,_]=c.useState(0),M=c.useRef(null),k=c.useRef(null),N=c.useRef(null),[$,P]=c.useMemo(()=>{let S,A;return U>=1?(A=s/v,S=A*U):(S=s/v,A=S/U),[S,A]},[v,U,s]),I=c.useMemo(()=>({center:f,viewWidth:$,viewHeight:P,zoom:v}),[f,$,P,v]);c.useEffect(()=>{a&&a(I)},[I,a]);const q=c.useCallback(()=>{M.current&&clearTimeout(M.current),k.current&&clearTimeout(k.current),M.current=window.setTimeout(()=>{_(0),M.current=null},Te),k.current=window.setTimeout(()=>{z(null),k.current=null},Te+wt)},[]),H=c.useCallback(S=>{!t&&i.length===0&&!y||(M.current&&clearTimeout(M.current),k.current&&clearTimeout(k.current),S&&z(S),_(1),q())},[t,i.length,y,q]),V=c.useCallback(S=>{q(),p&&p(S)},[p,q]),{controlHandlers:G,highlightedPoint:Y}=vt({zoom:v,setZoom:g,center:f,setCenter:C,viewWidth:$,viewHeight:P,aspect:U,baseViewSize:s,onShowInfo:H,controlPoints:i,initialControlPoints:d,onControlPointsChange:m>0?V:void 0,minControlPoints:b,maxControlPoints:x}),{style:qe,...Ue}=G,[W,K]=c.useMemo(()=>{const S=[f[0]-$/2,f[0]+$/2],A=[f[1]-P/2,f[1]+P/2];return[S,A]},[f,$,P]);c.useEffect(()=>()=>{M.current&&clearTimeout(M.current),k.current&&clearTimeout(k.current)},[]);const ee=c.useCallback(S=>{if(!N.current)return null;const{width:A,height:O}=N.current.getBoundingClientRect(),[E,D]=W,[X,J]=K,ce=(S[0]-E)/$*A,oe=(J-S[1])/P*O;return[ce,oe]},[W,K,$,P]),He=c.useMemo(()=>{if(!y)return null;let S=!1;if(N.current){const{width:A,height:O}=N.current.getBoundingClientRect(),E=A/$,D=O/P;(E<Ce||D<Ce)&&(S=!0)}return r.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:m},children:r.jsx($t,{xRange:W,yRange:K,theme:j,worldToScreen:ee,center:f,gridTooDense:S})})},[y,m,W,K,j,ee,$,P,f]),Ve=c.useMemo(()=>{const S=E=>{const D=E?128:48,X=E?120:44;return{containerStyle:{width:D,height:D},highlightStyle:{width:X,height:X,borderWidth:E?46:8}}},A=i.map((E,D)=>{const{pos:X}=fe(E,f,W,K),J=ee(X);if(!J)return null;const ce=_t(h[D]),oe=Y?.type==="point"&&Y.index===D,ye=S(oe&&Y.flashing);return r.jsxs("div",{className:"absolute",style:{left:J[0],top:J[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...ye.containerStyle},children:[oe&&r.jsx("div",{className:Y.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...ye.highlightStyle}}),r.jsx("div",{className:"control-point-animating",style:{...ce,gridColumn:1,gridRow:1}})]},D)});let O=null;if(Y?.type==="space"){const{pos:E}=fe(Y.coords,f,W,K),D=ee(E);if(D){const X=S(Y.flashing);O=r.jsx("div",{className:"absolute",style:{left:D[0],top:D[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...X.containerStyle},children:r.jsx("div",{className:Y.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...X.highlightStyle}})})}}return A.every(E=>E===null)&&!O?null:r.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:m},children:[A,O]})},[i,f,W,K,ee,h,m,Y]),Xe=c.useMemo(()=>{if(!L||w||!t)return null;const S=t(L,I);if(!S)return null;const A=typeof S=="string"?{"top-left":S}:S;return Object.keys(A).length===0?null:Object.entries(A).map(([O,E])=>{if(!E)return null;const D=E.trim().split(`
`);return r.jsx("div",{className:F("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":O==="top-left","top-0 right-0 text-right":O==="top-right","bottom-0 left-0":O==="bottom-left","bottom-0 right-0 text-right":O==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":O==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":O==="bottom-center"}),style:{opacity:m},children:r.jsx("div",{className:F("p-1 rounded-md text-xs font-mono space-y-1",j==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:D.map((X,J)=>r.jsx("div",{children:X},J))})},O)})},[L,w,t,j,m,I]);return r.jsxs("div",{ref:N,className:F("w-full h-full relative",u),style:qe,...Ue,onContextMenu:S=>S.preventDefault(),children:[r.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:r.jsxs(it,{frameloop:T,gl:l,onCreated:({gl:S})=>{S.domElement.addEventListener("webglcontextlost",A=>{A.preventDefault(),R(!0)},!1)},children:[r.jsx(zt,{setAspect:B}),o(I)]})}),w&&r.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[r.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),r.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),r.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),He,Xe,Ve]})};function ie(o,e){const n=o<0?"-":"+",s=Math.abs(o),t=e-1;if(t<=0)return n;if(s===0)return n+"0.0".padEnd(t,"0").substring(0,t);const a=String(Math.trunc(s));if(a.length<=t){const u=t-a.length;if(u>1){let l=u-1,i=s.toFixed(l);if(i.split(".")[0].length>a.length&&(l-=i.split(".")[0].length-a.length,l>=0?i=s.toFixed(l):i=String(Math.round(s))),i.length<=t)return n+i}if(a.length<=t){let l=a;return l.length<t&&(l+=".".repeat(t-l.length)),n+l}}if(t>=3){for(let l=t-4;l>=0;l--){let i=s.toExponential(l).replace("e+","e");if(i.length<=t)return n+i}let u=s.toExponential(0).replace("e+","e");if(u.length<=t)return n+u}if(s>1)return n+".".repeat(t);{const u="0.0000";return u.length<=t?n+u:n+"0.0".padEnd(t,"0").substring(0,t)}}function le(o,e,n=7,s="i"){const t=ie(o,n),a=ie(e,n);return`${t}${a}${s}`}function ke(o,e,n=7,s=["(",", ",")"]){const t=ie(o,n),a=ie(e,n);return`${s[0]}${t}${s[1]}${a}${s[2]}`}function Pt(o){return"min"in o&&"max"in o}class Oe{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class re extends Oe{constructor(e,n,s,t,a,u){super(),this.name=e,this.title=n,this.description=s,this.math=t,this.shader=a;let l,i,d;typeof u=="number"?(d=u,l=1,i=2e3):(d=u.initial,l=u.min,i=u.max);const p=b=>{const x=Math.log(l),y=Math.log(i);return Math.exp(x+(y-x)*b)},h=b=>{if(b<=l)return 0;if(b>=i)return 1;const x=Math.log(l),y=Math.log(i);return(Math.log(b)-x)/(y-x)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:d,min:l,max:i,posToVal:p,valToPos:h}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(e){}getInitialControlPoints(){return[]}getCanvasOverlayString(e,n){}getControlPointValues(e){}getControlPointGroups(e){return[]}}class xe extends re{constructor(e,n,s,t,a,u,l){super(e,n,s,t,a,u),this.controlPointInfo=l}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(e,n){if(e.length>0)return`${this.controlPointInfo.name} = ${le(...e[0])}`}getControlPointValues(e){if(e.length>0)return[{label:this.controlPointInfo.name,value:le(...e[0])}]}getControlPointUniforms(e){if(e.length>0)return{[this.controlPointInfo.uniformName]:e[0]}}getControlPointGroups(e){return[0]}}const jt=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,Tt=`uniform int iterations;
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
`,ue=16;function Ct(o){const e=[];for(let n=0;n<o;n++){const s=2*Math.PI*n/o;e.push([Math.cos(s),Math.sin(s)])}return e}class kt extends Oe{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=jt,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Ct(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return Tt}getCanvasOverlayString(e,n){return`p = ${e.length}`}getControlPointValues(e){return e.map((n,s)=>({label:`Root ${s+1}`,value:le(...n)}))}getControlPointUniforms(e){if(e.length>0&&e.length<=ue){const n=e.flat(),s=new Array(ue*2).fill(0);return n.forEach((t,a)=>s[a]=t),{num_roots:e.length,roots:s}}}getControlPointGroups(e){return Array(e.length).fill(0)}getControlPointMinMax(){return[2,ue]}}const St=`### Mandelbrot set

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
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,Nt=`uniform int iterations;
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
}`,Rt=[0,0],It=new xe("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",St,Nt,200,{name:"P",initialValue:Rt,uniformName:"phoenixP"}),Ft=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,At=`uniform int iterations;
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
`,Et=[-.7,.27015],Lt=new xe("julia","Julia","Julia sets.",Ft,At,200,{name:"C",initialValue:Et,uniformName:"juliaC"}),Ot=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,Dt=`uniform int iterations;
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
`,qt=[-.85,-.6],Ut=new xe("lambda","Lambda","Lambda fractal (logistic map).",Ot,Dt,200,{name:"Lambda",initialValue:qt,uniformName:"lambda"}),Ht=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,Vt=`uniform int iterations;
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
`,Xt=new re("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",Ht,Vt,80),Gt=`This is another type of magnet fractal. The iteration is defined by:
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
`,Yt=`uniform int iterations;
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
`,Bt=new re("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",Gt,Yt,80),Jt=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,Wt=`uniform int iterations;

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
`,Kt=new re("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",Jt,Wt,80),Zt=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,Qt=`uniform int iterations;

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
`,en=new re("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Zt,Qt,200),De=[new kt,It,Lt,Ut,Xt,Bt,Kt,en];function Se(o,e,n,s){return`vec3(${o}) + vec3(${e}) * cos(6.28318 * (vec3(${n}) * t + vec3(${s})))`}const me={grayscale:"vec3(t)",cosmic:Se("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Se("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function tn(o){return me[o]||me.grayscale}const nn=Object.fromEntries(Object.keys(me).map(o=>[o,o.charAt(0).toUpperCase()+o.slice(1)])),pe="cosmic",rn=`
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
`,on=`
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
`;function an(o,e,n){if(Array.isArray(n))if(n.length===2)o[e]={value:new se(n[0],n[1])};else if(n.length===3)o[e]={value:new dt(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const s=[];for(let t=0;t<n.length;t+=2)s.push(new se(n[t],n[t+1]));o[e]={value:s}}else o[e]={value:n};else o[e]={value:n}}function sn(o,e,n){if(o.uniforms[e])if(Array.isArray(n))if(n.length===2)o.uniforms[e].value.fromArray(n);else if(n.length===3)o.uniforms[e].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const s=[];for(let t=0;t<n.length;t+=2)s.push(new se(n[t],n[t+1]));o.uniforms[e].value=s}else o.uniforms[e].value=n;else o.uniforms[e].value=n}const ln=({fractal:o,center:e,viewWidth:n,viewHeight:s,parameters:t,controlPoints:a,colorScheme:u})=>{const l=Ee(p=>p.invalidate),i=c.useMemo(()=>{const p={FRACTAL_SHADER:o.getShaderCode(),EVALUATE_COLOR:tn(u)},h={center:{value:new se(...e)},viewWidth:{value:n},viewHeight:{value:s}};o.getGuiParameters().forEach(x=>{h[x.name]={value:t[x.name]}});const b=o.getControlPointUniforms(a);if(b)for(const[x,y]of Object.entries(b))an(h,x,y);return new lt({uniforms:h,vertexShader:rn,fragmentShader:on.replace(/%(\w+)%/g,(x,y)=>String(p[y]))})},[o,u]);c.useEffect(()=>{i.uniforms.center.value.fromArray(e),i.uniforms.viewWidth.value=n,i.uniforms.viewHeight.value=s,o.getGuiParameters().forEach(h=>{i.uniforms[h.name].value=t[h.name]});const p=o.getControlPointUniforms(a);if(p)for(const[h,b]of Object.entries(p))sn(i,h,b);l()},[i,e,n,s,t,a,l,o]);const d=c.useMemo(()=>{const p=new ct;return p.setDrawRange(0,3),p},[]);return r.jsx("mesh",{material:i,geometry:d})},Ne=De,cn=({initialFractal:o,initialColorScheme:e,onFractalChange:n,onColorSchemeChange:s})=>{const{theme:t}=Q(),[a,u]=c.useState(o),[l,i]=c.useState(a.getInitialGuiParameters()),[d,p]=c.useState(a.getInitialControlPoints()),[h,b]=c.useState(e||pe),x=Ne.map(w=>({name:w.title,value:w.name})),y=w=>{const R=Ne.find(L=>L.name===w);R&&(u(R),n(R),i(R.getInitialGuiParameters()),p(R.getInitialControlPoints()),g(L=>L+1))},T=w=>{b(w),s(w)},j=Object.entries(nn).map(([w,R])=>({name:R,value:w})),[v,g]=c.useState(0),f=a.getGuiParameters().map(w=>Pt(w)?r.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:r.jsx(gt,{label:w.displayName,min:w.min,max:w.max,value:l[w.name],onChange:R=>i(L=>({...L,[w.name]:R})),theme:t,posToVal:w.posToVal,valToPos:w.valToPos})},w.name):null),C=a.getControlPointValues(d),[U,B]=a.getControlPointMinMax();return r.jsxs("div",{className:F("w-full h-full flex flex-col landscape:flex-row overflow-hidden",t==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[r.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[r.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("div",{className:"min-w-[140px] flex-1",children:r.jsx(Me,{options:x,selected:a.title,onChange:w=>y(w),theme:t})}),r.jsx("div",{className:"min-w-[140px] flex-1",children:r.jsx(Me,{label:"Colors",options:j,selected:j.find(w=>w.value===h)?.name,onChange:w=>T(w),theme:t})}),f,C&&C.length>0&&r.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:t==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:C.map(w=>r.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[r.jsx("p",{className:F("text-sm font-medium",t==="dark"?"text-gray-300":"text-gray-700"),children:w.label}),r.jsx("p",{className:F("text-base font-mono",t==="dark"?"text-gray-200":"text-gray-800"),children:w.value})]},w.label))})]})]}),r.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:r.jsx(Mt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(w,R)=>{const L=["[",", ","]"],z=ke(R.center[0]-R.viewWidth/2,R.center[0]+R.viewWidth/2,7,L),m=ke(R.center[1]-R.viewHeight/2,R.center[1]+R.viewHeight/2,7,L),_={"top-left":le(...w),"top-right":`Re: ${z}
Im: ${m}`},M=a.getCanvasOverlayString(d,l);return M&&(_["bottom-center"]=M),_},controlPoints:d,initialControlPoints:a.getInitialControlPoints(),onControlPointsChange:p,controlPointGroups:a.getControlPointGroups(d),minControlPoints:U,maxControlPoints:B,gl:{powerPreference:"default",antialias:!1},children:({center:w,viewWidth:R,viewHeight:L})=>r.jsx(ln,{fractal:a,center:w,viewWidth:R,viewHeight:L,parameters:l,controlPoints:d,colorScheme:h})},v)})]})},dn=`This application allows you to explore the intricate beauty of various fractals.
You can interact with the fractals in two main ways: by manipulating the view on
the main fractal view and by adjusting parameters in the control panel.

### Control Panel

The control panel, located on the left (or top on phones in portrait mode),
provides the following options:

- **Fractal Type:** A dropdown menu to select the type of fractal to display.
  Each fractal has its own unique mathematical formula and appearance.
- **Colors:** A dropdown menu to change the color scheme used to render the
  fractal. Different color schemes can highlight different aspects of the
  fractal's structure.
- **Parameters:** Some fractals have additional parameters that can be adjusted
  with sliders. These parameters can dramatically change the fractal's shape.
- **Complex Parameters:** Some fractals are defined by one or more complex
  numbers, which are displayed in the control panel. You can modify these
  parameters by interacting with the control points on the fractal view.
`;var un={client:"ca-pub-5400548434612970",slot:"5745481735"};const ae=De;function hn(){const{theme:o}=Q(),e=c.useCallback(()=>{const v=["newton","mandelbrot","julia"],g=ae.filter(f=>v.includes(f.name));return g.length>0?g[Math.floor(Math.random()*g.length)]:ae[0]},[]),n=c.useRef(null);n.current===null&&(n.current=e());const s=c.useCallback(()=>{const g=ne().get("type");return ae.find(f=>f.name===g)||n.current},[n]),[t,a]=c.useState(s),[u,l]=c.useState(()=>ne().get("colors")||pe),[i,d]=c.useState(null);c.useEffect(()=>{const v=()=>{const g=ne(),f=g.get("type"),C=g.get("colors"),U=g.get("help"),B=ae.find(w=>w.name===f)||n.current;a(B),l(C||pe),d(U==="math"?"math":U==="controls"?"controls":null)};return window.addEventListener("hashchange",v),v(),()=>window.removeEventListener("hashchange",v)},[]);const p=v=>{de({type:v.name})},h=v=>{de({colors:v})},b=()=>{de({help:null})},x=v=>{const g=ne();return g.set("help",v),v==="math"&&!g.has("type")&&g.set("type",t.name),`#${g.toString()}`},y=[{key:"controls",name:"Exploring the Fractal",href:x("controls"),icon:r.jsx(rt,{})},{key:"math",name:`About ${t.title} Fractal`,href:x("math"),icon:r.jsx(ot,{})}],T=()=>{if(i==="math"){const v=`## ${t.title} Fractal

${t.math}`;return r.jsx(be,{remarkPlugins:[ze,$e],rehypePlugins:[we],children:v})}if(i==="controls"){const v=bt({canvasName:"fractal view",parameterName:"complex parameter"}),g=`${dn}

${v}`;return r.jsx(be,{remarkPlugins:[ze,$e],rehypePlugins:[we],children:g})}return null},j=()=>i==="math"?`About ${t.title} Fractal`:i==="controls"?"Exploring the Fractal":"";return r.jsxs(r.Fragment,{children:[r.jsx(mt,{appName:"Fantastic Fractals",help:y,adSenseConfig:un,children:r.jsx(c.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(cn,{initialFractal:t,initialColorScheme:u,onFractalChange:p,onColorSchemeChange:h},t.name)})}),r.jsx(pt,{isOpen:i!==null,onClose:b,title:j(),size:"xl",children:r.jsx("div",{className:F("prose dark:prose-invert max-w-none",o==="dark"?"dark":""),children:T()})})]})}function fn(){return r.jsx(ht,{children:r.jsx(hn,{})})}at.createRoot(document.getElementById("root")).render(r.jsx(st.StrictMode,{children:r.jsx(fn,{})}));
