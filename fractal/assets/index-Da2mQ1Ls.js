import{r as l,j as e,i as Ue,P as He,d as F,z as Ne,E as qe,g as Be,e as Ge,f as Xe,h as Ve,k as We,l as Ye,m as Je,n as Ke,L as Ze,o as ve,q as Qe,p as et,t as tt,v as nt,w as rt,x as ot,M as be,y as we,A as _e,B as ze,C as at,D as st}from"./other-CYtxd_cv.js";import{C as it,u as Re,V as ie,S as lt,B as ct,a as dt}from"./three-DQB0-Fsk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Se=l.createContext(void 0),ut=({children:o})=>{const[t,n]=l.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});l.useEffect(()=>{const a=window.document.documentElement;t==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[t]);const s=()=>{n(a=>a==="light"?"dark":"light")},r=l.useMemo(()=>({theme:t,toggleTheme:s}),[t]);return e.jsx(Se.Provider,{value:r,children:o})},te=()=>{const o=l.useContext(Se);if(o===void 0)throw new Error("useTheme must be used within a ThemeProvider");return o},me=o=>{if(o.startsWith("#")||o.startsWith("/"))return!1;try{return new URL(o,window.location.origin).hostname!==window.location.hostname}catch{return!1}},oe=()=>new URLSearchParams(window.location.hash.substring(1)),ue=o=>{const t=oe();Object.entries(o).forEach(([s,r])=>{r==null?t.delete(s):t.set(s,r)});const n=t.toString();window.location.hash.substring(1)!==n&&(window.location.hash=n)},he={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-3 text-lg",item:"px-5 py-2.5 text-lg"}},Z=({label:o,options:t,selected:n,onChange:s,theme:r,size:a="md",align:p="left",icon:h,showIconOnly:i,trigger:f,buttonClassName:g})=>{const y=l.useRef(null),[$,d]=l.useState({}),m=te?.(),b=r??m?.theme??"light",P=()=>{if(y.current){const c=y.current.getBoundingClientRect(),u={top:`${c.bottom+4}px`,minWidth:`${c.width}px`};p==="left"?u.left=`${c.left}px`:u.right=`${window.innerWidth-c.right}px`,d(u)}},T=a==="sm"?"h-4 w-4":a==="md"||a==="lg"?"h-5 w-5":"h-6 w-6";return e.jsxs(Ue,{as:"div",className:"relative",children:[e.jsx(He,{ref:y,onClick:P,className:F(f?g:i?["p-2 rounded-full focus:outline-none",b==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",he[a].button,b==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:f||(i?e.jsx(e.Fragment,{children:h}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex items-center truncate",children:[h&&e.jsx("span",{className:F(T,"mr-2 flex items-center justify-center"),children:h}),o&&`${o}: `,e.jsx("strong",{children:n})]}),e.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}))}),e.jsx(Ne,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(qe,{style:$,className:F("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":p==="left","origin-top-right":p==="right"},b==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:e.jsx("div",{className:"py-1",children:t.map((c,u)=>{const z=c.key??c.value??c.name??u,E=!!c.href,q=c.href?me(c.href):!1;return e.jsx(Be,{children:({focus:_})=>E?e.jsxs("a",{href:c.href,target:q?"_blank":"_self",rel:"noopener noreferrer",className:F("flex items-center justify-between w-full whitespace-nowrap",he[a].item,_?b==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":b==="dark"?"text-gray-300":"text-gray-700"),children:[e.jsxs("div",{className:"flex items-center",children:[c.icon&&e.jsx("span",{className:"mr-3 h-5 w-5",children:c.icon}),c.name]}),q&&e.jsx(Ge,{className:"h-4 w-4"})]}):e.jsx("button",{onClick:()=>s&&s(c.value),className:F("w-full text-left block whitespace-nowrap",he[a].item,_?b==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":b==="dark"?"text-gray-300":"text-gray-700"),children:e.jsxs("div",{className:"flex items-center",children:[c.icon&&e.jsx("span",{className:"mr-3 h-5 w-5",children:c.icon}),c.name]})})},z)})})})})]})},ht=({client:o,slot:t,style:n={display:"block"},format:s="auto",responsive:r="true"})=>(l.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),e.jsx("ins",{className:"adsbygoogle",style:n,"data-ad-client":o,"data-ad-slot":t,"data-ad-format":s,"data-full-width-responsive":r})),Ae=l.createContext(void 0),ft=({children:o,defaultLanguage:t="en",storageKey:n="language"})=>{const[s,r]=l.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem(n);if(i==="en"||i==="zh")return i;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return t});l.useEffect(()=>{typeof window<"u"&&localStorage.setItem(n,s)},[s,n]);const a=i=>r(i),p=()=>r(i=>i==="en"?"zh":"en"),h=l.useMemo(()=>({language:s,setLanguage:a,toggleLanguage:p}),[s]);return e.jsx(Ae.Provider,{value:h,children:o})},mt=()=>{const o=l.useContext(Ae);if(!o)throw new Error("useLanguage must be used within a LanguageProvider");return o},pt=({appName:o,help:t,config:n,showUserProfile:s,renderToolbar:r,showLanguage:a,language:p,onLanguageChange:h,appIconUrl:i,showTitle:f=!0,toolbarWidthPx:g=0})=>{const{theme:y,toggleTheme:$}=te(),{setLanguage:d}=mt(),m=()=>{if(!t)return null;const c=e.jsx(Je,{className:"h-8 w-8"});if(typeof t=="string")return e.jsx("a",{href:t,target:me(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:c});if(Array.isArray(t)&&t.length>0){const u=t.map(z=>({name:z.name,href:z.href,icon:z.icon}));return e.jsx(Z,{options:u,align:"right",size:"md",icon:c,showIconOnly:!0})}return null},b=()=>{if(!n)return null;const c=e.jsx(Ke,{className:"h-8 w-8"});if(typeof n=="string")return e.jsx("a",{href:n,target:me(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:c});if(Array.isArray(n)&&n.length>0){const u=n.map(z=>({name:z.name,href:z.href,icon:z.icon}));return e.jsx(Z,{options:u,align:"right",size:"md",icon:c,showIconOnly:!0})}return null},P=c=>{h?.(c);try{d(c)}catch{}},T=()=>a?e.jsx(Z,{options:[{name:"English",value:"en"},{name:"中文",value:"zh"}],align:"right",size:"md",icon:e.jsx(Ye,{className:"h-8 w-8"}),showIconOnly:!0,onChange:c=>P(c)}):null;return e.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex items-center border-b border-gray-200 dark:border-gray-700 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[i&&e.jsx("img",{src:i,alt:"App icon",className:"h-8 w-8 rounded",style:{opacity:y==="light"?.5:1}}),f&&e.jsx("h1",{className:"text-xl font-bold truncate",children:o})]}),e.jsx("div",{className:"flex-1 min-w-0",children:typeof r=="function"?r(g):null}),e.jsxs("nav",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:$,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:y==="light"?e.jsx(Xe,{className:"h-8 w-8"}):e.jsx(Ve,{className:"h-8 w-8"})}),T(),m(),b(),s&&e.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(We,{className:"h-8 w-8"})})]})]})},gt=({children:o,adSenseConfig:t,...n})=>{const[s,r]=l.useState(!0),[a,p]=l.useState("medium"),[h,i]=l.useState(typeof window<"u"?window.innerWidth:0),f=t?.client&&t?.slot,g=!!n.renderToolbar,y=window?.__TAURI__&&/android/i.test(navigator.userAgent);l.useEffect(()=>{const c=()=>{const E=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${E}px`)},u=()=>{r(g||(window.visualViewport?.height??window.innerHeight)>=600);const E=window.innerWidth;i(E);const q=E<640,_=E>=1280;p(q?"narrow":_?"wide":"medium"),c()};u();const z=window.visualViewport??window;return z.addEventListener("resize",u),()=>{z.removeEventListener("resize",u)}},[]);const $=f?t?.height??90:0,d=f?t?.width??300:0,m=f&&a==="wide",b=a==="narrow"?!1:a==="wide"?!0:!g,P=()=>{const c=h,u=32,z=12,E=48,q=8,_=n.appIconUrl?32:0,N=220;let A=0;A+=1,n.showLanguage&&(A+=1);const V=n.help;(typeof V=="string"||Array.isArray(V)&&V.length>0)&&(A+=1);const v=n.config;(typeof v=="string"||Array.isArray(v)&&v.length>0)&&(A+=1),n.showUserProfile&&(A+=1);const x=A>0?A*E+(A-1)*q:0,w=b&&_>0?8:0,C=b?N:0,M=_+w+C,k=g?2*z:z,j=c-u-M-x-k;return Math.max(0,j)},T=e.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:y?{paddingTop:16,paddingBottom:12}:void 0,children:[s&&e.jsx(pt,{...n,showTitle:b,toolbarWidthPx:g?P():0}),e.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:o})]});return f?e.jsxs("div",{className:"flex items-stretch flex-"+(m?"row":"col"),children:[e.jsx("div",{className:m?"h-screen":"w-screen",style:m?{width:`calc(100vw - ${d}px)`}:{height:`calc(100vh - ${$}px)`},children:T}),e.jsx("div",{style:m?{width:`${d}px`}:{height:`${$}px`},children:e.jsx(ht,{client:t.client,slot:t.slot})})]}):e.jsx("div",{className:"w-screen h-screen",children:T})},xt=({isOpen:o,onClose:t,title:n,children:s,size:r="lg"})=>{const{theme:a}=te(),p=h=>{switch(h){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return e.jsx(Ne,{appear:!0,show:o,as:l.Fragment,children:e.jsxs(Ze,{as:"div",className:F("relative z-50",a),onClose:t,children:[e.jsx(ve,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:e.jsx(ve,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(Qe,{className:F(p(r),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[e.jsx(et,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),e.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(tt,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),e.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},yt=({label:o,min:t,max:n,value:s,onChange:r,theme:a,valueLabel:p=f=>Math.round(f),posToVal:h=f=>t+(n-t)*f,valToPos:i=f=>(f-t)/(n-t)})=>{const f=l.useRef(null),g=l.useCallback(T=>{if(f.current){const c=f.current.getBoundingClientRect(),u=Math.max(0,Math.min(1,(T-c.left)/c.width));r(h(u))}},[r,h]),y=T=>{T.preventDefault(),g(T.clientX);const c=z=>{g(z.clientX)},u=()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",u)},$=T=>{T.preventDefault(),T.touches.length>0&&g(T.touches[0].clientX);const c=z=>{z.touches.length>0&&g(z.touches[0].clientX)},u=()=>{document.removeEventListener("touchmove",c),document.removeEventListener("touchend",u)};document.addEventListener("touchmove",c),document.addEventListener("touchend",u)},d=i(s),m=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",b=d>.5,P=d>.25&&d<.5||d>.75;return e.jsx("div",{className:"w-full px-3",children:e.jsxs("div",{ref:f,onMouseDown:y,onTouchStart:$,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[e.jsx("div",{className:F("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),e.jsx("div",{className:F("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${d*100}%`}}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o&&e.jsx("span",{className:F("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":b?"text-white":"text-gray-800"),style:{...b?{left:"10px"}:{right:"10px"},textShadow:b?m:"none"},children:o}),e.jsx("span",{className:F("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":P?"text-white":"text-gray-800"),style:{...P?{right:`calc(${100-d*100}% + 14px)`}:{left:`calc(${d*100}% + 14px)`},textShadow:P?m:"none"},children:p(s)})]}),e.jsx("div",{className:F("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${d*100}% - 12px)`}})]})})},vt=36,$e=1e3,bt=10,Q=(o,t,n,s,r,a,p)=>{if(n.length===0)return null;let h=null;const[i,f]=[s[0]-r/2,s[1]+a/2];for(let g=0;g<n.length;g++){const y=n[g],$=(y[0]-i)/r*p.width,d=(f-y[1])/a*p.height,m=Math.sqrt(Math.pow(o-$,2)+Math.pow(t-d,2));(h===null||m<h.distance)&&(h={index:g,distance:m})}return h&&h.distance<vt?h:null},wt=({zoom:o,setZoom:t,center:n,setCenter:s,viewWidth:r,viewHeight:a,aspect:p,baseViewSize:h=4,onShowInfo:i,controlPoints:f=[],initialControlPoints:g=[],onControlPointsChange:y,minControlPoints:$,maxControlPoints:d})=>{const[m,b]=l.useState(null),P=l.useRef(m);P.current=m;const[T,c]=l.useState(!1),u=l.useRef(null),z=l.useRef(null),E=l.useCallback(()=>{t(1),s([0,0])},[t,s]),q=l.useCallback(()=>{const v=P.current;if(!(!y||!v)){if(v.type==="point"){if($===void 0||f.length<=$)return;const x=f.filter((w,C)=>C!==v.index);y(x)}else{if(d===void 0||f.length>=d)return;const x=[...f,v.coords];y(x)}b(null)}},[f,d,$,y]),_=l.useCallback((v,x,w)=>{const C=v-w.left,M=x-w.top,k=Q(C,M,f,n,r,a,w);if(k)b({type:"point",index:k.index,flashing:!0});else{const j=n[0]-r/2+C/w.width*r,R=n[1]+a/2-M/w.height*a;b({type:"space",coords:[j,R],flashing:!0})}u.current=window.setTimeout(()=>{q(),u.current=null},$e)},[n,f,q,a,r]),N=nt({onPointerDown:({event:v})=>{v.preventDefault();const x=v.target.getBoundingClientRect();if(!x)return;const{clientX:w,clientY:C}=v,M=w-x.left,k=C-x.top,j=Q(M,k,f,n,r,a,x);j?(c(!0),b({type:"point",index:j.index,flashing:!1})):b(null),i&&(z.current={x:w,y:C},u.current=window.setTimeout(()=>{_(w,C,x)},$e))},onPointerUp:({event:v})=>{c(!1);const x=v.target.getBoundingClientRect();if(!x)return;const{clientX:w,clientY:C}=v,M=w-x.left,k=C-x.top,j=Q(M,k,f,n,r,a,x);b(j?{type:"point",index:j.index,flashing:!1}:null),u.current&&(clearTimeout(u.current),u.current=null)},onPointerMove:({event:v})=>{if(T)return;const x=v.target.getBoundingClientRect();if(!x)return;const{clientX:w,clientY:C}=v;if(u.current&&z.current){const X=w-z.current.x,O=C-z.current.y;Math.sqrt(X*X+O*O)>bt&&(clearTimeout(u.current),u.current=null,b(null))}const M=w-x.left,k=C-x.top,j=Q(M,k,f,n,r,a,x);if(b(j?{type:"point",index:j.index,flashing:!1}:X=>X?.type==="point"?null:X),!i)return;const R=w-x.left,I=C-x.top,G=n[0]+(R/x.width-.5)*r,B=n[1]+(.5-I/x.height)*a;i([G,B])},onDrag:({event:v,first:x,movement:[w,C],xy:[M,k],memo:j})=>{u.current&&(clearTimeout(u.current),u.current=null,b(I=>I?.type==="point"?{...I,flashing:!1}:null)),v.preventDefault();const R=v.target.getBoundingClientRect();if(R){if(x||!j){const I=M-R.left,G=k-R.top;if(y){const B=Q(I,G,f,n,r,a,R);if(B)return{dragMode:"point",pointIndex:B.index}}return{dragMode:"canvas",startCenter:n}}if(j.dragMode==="point"){if(!y)return j;const I=M-R.left,G=k-R.top,B=n[0]-r/2+I/R.width*r,X=n[1]+a/2-G/R.height*a,O=[...f];return O[j.pointIndex]=[B,X],y(O),j}if(j.dragMode==="canvas"){const{startCenter:I}=j;if(!I)return j;const G=w/R.width*r,B=C/R.height*a;return s([I[0]-G,I[1]+B]),j}}},onPinch:({event:v,first:x,offset:[w]})=>{v.preventDefault(),x&&(u.current&&(clearTimeout(u.current),u.current=null),b(null)),t(w)},onWheel:({event:v,delta:[,x]})=>{if(x===0)return;const w=v.target.getBoundingClientRect();if(!w)return;const C=v.clientX-w.left,M=v.clientY-w.top,k=1.1,j=x<0?o*k:o/k;let R,I;p>=1?(I=h/j,R=I*p):(R=h/j,I=R/p);const G=C/w.width-.5,B=.5-M/w.height,X=n[0]+G*(r-R),O=n[1]+B*(a-I);t(j),s([X,O])},onDoubleClick:({event:v})=>{v.preventDefault();const x=v.target.getBoundingClientRect();if(!x)return;const w=v.clientX-x.left,C=v.clientY-x.top;if(y){const M=Q(w,C,f,n,r,a,x);if(M&&g&&g[M.index]){const k=[...f];k[M.index]=g[M.index],y(k);return}}E()},onClick:({event:v})=>{if(!i)return;const x=v.currentTarget.getBoundingClientRect();if(!x)return;const{clientX:w,clientY:C}=v,M=w-x.left,k=C-x.top,j=n[0]+(M/x.width-.5)*r,R=n[1]+(.5-k/x.height)*a;i([j,R])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[o,0]}}),A={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...N(),onContextMenu:v=>v.preventDefault(),style:A},highlightedPoint:m}};function _t({canvasName:o="canvas",parameterName:t="control point"}={}){return`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${o} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${o} to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${t}. If not visible, hover over or single-click the ${o}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${t}:** Click and drag a control point to move it.
- **Add ${t}:** Long-press on an empty area to add a new ${t}.
- **Remove ${t}:** Long-press on an existing ${t} to remove it.
- **Reset ${t}:** Double-click a ${t} to reset its position.

### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${o} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${o} to reset the
  pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${t}. If not visible, tap anywhere on the ${o} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${t}:** Drag a control point to move it.
- **Add ${t}:** Long-press on an empty area to add a new ${t}.
- **Remove ${t}:** Long-press on an existing ${t} to remove it.
- **Reset ${t}:** Double-tap a ${t} to reset its position.`}const je=5e3,zt=500,Te=25,$t=({setAspect:o})=>{const{size:t}=Re();return l.useEffect(()=>{o(t.width>0&&t.height>0?t.width/t.height:1)},[t,o]),null},jt=({xRange:o,yRange:t,theme:n,worldToScreen:s,center:r,gridTooDense:a})=>{const p=l.useMemo(()=>{const i=[],[f,g]=o,[y,$]=t,d=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",m="0.8)",b="0.5)";for(let P=Math.ceil(f);P<=Math.floor(g);P++){const T=s([P,y]);if(!T)continue;const c=P===0;a&&!c||i.push(e.jsx("div",{className:"absolute",style:{left:T[0],top:0,width:1,height:"100%",backgroundColor:d+(c?m:b),transform:c?"translateX(-50%)":void 0}},`v-${P}`))}for(let P=Math.ceil(y);P<=Math.floor($);P++){const T=s([f,P]);if(!T)continue;const c=P===0;a&&!c||i.push(e.jsx("div",{className:"absolute",style:{left:0,top:T[1],width:"100%",height:1,backgroundColor:d+(c?m:b),transform:c?"translateY(-50%)":void 0}},`h-${P}`))}return i},[o,t,n,s,a]),h=l.useMemo(()=>{const{pos:i}=pe([0,0],r,o,t),f=s(i);if(!f)return null;const g=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return e.jsx("div",{className:"absolute",style:{left:f[0],top:f[1],width:12,height:12,borderRadius:"50%",backgroundColor:g,transform:"translate(-50%, -50%)"}})},[r,o,t,n,s]);return e.jsxs(e.Fragment,{children:[p,h]})},re={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},Tt=o=>{if(typeof o=="number"){const t=Object.keys(re);return re[t[o%t.length]||"default"]}return typeof o=="string"&&re[o]?re[o]:re.default};function pe(o,t,n,s){const[r,a]=o,[p,h]=n,[i,f]=s;if(r>=p&&r<=h&&a>=i&&a<=f)return{pos:o,clipped:!1};const[g,y]=t,$=r-g,d=a-y;let m=1/0;const b=1e-9;if(Math.abs($)>b){const c=(p-g)/$,u=(h-g)/$;if(c>0){const z=y+c*d;z>=i&&z<=f&&(m=Math.min(m,c))}if(u>0){const z=y+u*d;z>=i&&z<=f&&(m=Math.min(m,u))}}if(Math.abs(d)>b){const c=(i-y)/d,u=(f-y)/d;if(c>0){const z=g+c*$;z>=p&&z<=h&&(m=Math.min(m,c))}if(u>0){const z=g+u*$;z>=p&&z<=h&&(m=Math.min(m,u))}}if(m!==1/0&&m>0)return{pos:[g+m*$,y+m*d],clipped:!0};const P=Math.max(p,Math.min(h,r)),T=Math.max(i,Math.min(f,a));return{pos:[P,T],clipped:!0}}const Ct=({children:o,initialZoom:t=1,initialCenter:n=[0,0],baseViewSize:s=4,onInfoOverlay:r,onViewChange:a,className:p,gl:h,controlPoints:i=[],initialControlPoints:f=[],onControlPointsChange:g,controlPointGroups:y=[],minControlPoints:$,maxControlPoints:d,showGrid:m=!0,frameloop:b="always"})=>{const{theme:P}=te(),[T,c]=l.useState(t),[u,z]=l.useState(n),[E,q]=l.useState(1),[_,N]=l.useState(!1),[A,V]=l.useState(null),[v,x]=l.useState(0),w=l.useRef(null),C=l.useRef(null),M=l.useRef(null),[k,j]=l.useMemo(()=>{let S,L;return E>=1?(L=s/T,S=L*E):(S=s/T,L=S/E),[S,L]},[T,E,s]),R=l.useMemo(()=>({center:u,viewWidth:k,viewHeight:j,zoom:T}),[u,k,j,T]);l.useEffect(()=>{a&&a(R)},[R,a]);const I=l.useCallback(()=>{w.current&&clearTimeout(w.current),C.current&&clearTimeout(C.current),w.current=window.setTimeout(()=>{x(0),w.current=null},je),C.current=window.setTimeout(()=>{V(null),C.current=null},je+zt)},[]),G=l.useCallback(S=>{!r&&i.length===0&&!m||(w.current&&clearTimeout(w.current),C.current&&clearTimeout(C.current),S&&V(S),x(1),I())},[r,i.length,m,I]),B=l.useCallback(S=>{I(),g&&g(S)},[g,I]),{controlHandlers:X,highlightedPoint:O}=wt({zoom:T,setZoom:c,center:u,setCenter:z,viewWidth:k,viewHeight:j,aspect:E,baseViewSize:s,onShowInfo:G,controlPoints:i,initialControlPoints:f,onControlPointsChange:v>0?B:void 0,minControlPoints:$,maxControlPoints:d}),{style:Ee,...Fe}=X,[J,K]=l.useMemo(()=>{const S=[u[0]-k/2,u[0]+k/2],L=[u[1]-j/2,u[1]+j/2];return[S,L]},[u,k,j]);l.useEffect(()=>()=>{w.current&&clearTimeout(w.current),C.current&&clearTimeout(C.current)},[]);const ne=l.useCallback(S=>{if(!M.current)return null;const{width:L,height:U}=M.current.getBoundingClientRect(),[D,H]=J,[W,Y]=K,de=(S[0]-D)/k*L,se=(Y-S[1])/j*U;return[de,se]},[J,K,k,j]),Le=l.useMemo(()=>{if(!m)return null;let S=!1;if(M.current){const{width:L,height:U}=M.current.getBoundingClientRect(),D=L/k,H=U/j;(D<Te||H<Te)&&(S=!0)}return e.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:v},children:e.jsx(jt,{xRange:J,yRange:K,theme:P,worldToScreen:ne,center:u,gridTooDense:S})})},[m,v,J,K,P,ne,k,j,u]),Oe=l.useMemo(()=>{const S=D=>{const H=D?128:48,W=D?120:44;return{containerStyle:{width:H,height:H},highlightStyle:{width:W,height:W,borderWidth:D?46:8}}},L=i.map((D,H)=>{const{pos:W}=pe(D,u,J,K),Y=ne(W);if(!Y)return null;const de=Tt(y[H]),se=O?.type==="point"&&O.index===H,ye=S(se&&O.flashing);return e.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...ye.containerStyle},children:[se&&e.jsx("div",{className:O.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...ye.highlightStyle}}),e.jsx("div",{className:"control-point-animating",style:{...de,gridColumn:1,gridRow:1}})]},H)});let U=null;if(O?.type==="space"){const{pos:D}=pe(O.coords,u,J,K),H=ne(D);if(H){const W=S(O.flashing);U=e.jsx("div",{className:"absolute",style:{left:H[0],top:H[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...W.containerStyle},children:e.jsx("div",{className:O.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...W.highlightStyle}})})}}return L.every(D=>D===null)&&!U?null:e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:v},children:[L,U]})},[i,u,J,K,ne,y,v,O]),De=l.useMemo(()=>{if(!A||_||!r)return null;const S=r(A,R);if(!S)return null;const L=typeof S=="string"?{"top-left":S}:S;return Object.keys(L).length===0?null:Object.entries(L).map(([U,D])=>{if(!D)return null;const H=D.trim().split(`
`);return e.jsx("div",{className:F("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":U==="top-left","top-0 right-0 text-right":U==="top-right","bottom-0 left-0":U==="bottom-left","bottom-0 right-0 text-right":U==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":U==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":U==="bottom-center"}),style:{opacity:v},children:e.jsx("div",{className:F("p-1 rounded-md text-xs font-mono space-y-1",P==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:H.map((W,Y)=>e.jsx("div",{children:W},Y))})},U)})},[A,_,r,P,v,R]);return e.jsxs("div",{ref:M,className:F("w-full h-full relative",p),style:Ee,...Fe,children:[e.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:e.jsxs(it,{frameloop:b,gl:h,onCreated:({gl:S})=>{S.domElement.addEventListener("webglcontextlost",L=>{L.preventDefault(),N(!0)},!1)},children:[e.jsx($t,{setAspect:q}),o(R)]})}),_&&e.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[e.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),e.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),Le,De,Oe]})};function le(o,t){const n=o<0?"-":"+",s=Math.abs(o),r=t-1;if(r<=0)return n;if(s===0)return n+"0.0".padEnd(r,"0").substring(0,r);const a=String(Math.trunc(s));if(a.length<=r){const p=r-a.length;if(p>1){let h=p-1,i=s.toFixed(h);if(i.split(".")[0].length>a.length&&(h-=i.split(".")[0].length-a.length,h>=0?i=s.toFixed(h):i=String(Math.round(s))),i.length<=r)return n+i}if(a.length<=r){let h=a;return h.length<r&&(h+=".".repeat(r-h.length)),n+h}}if(r>=3){for(let h=r-4;h>=0;h--){let i=s.toExponential(h).replace("e+","e");if(i.length<=r)return n+i}let p=s.toExponential(0).replace("e+","e");if(p.length<=r)return n+p}if(s>1)return n+".".repeat(r);{const p="0.0000";return p.length<=r?n+p:n+"0.0".padEnd(r,"0").substring(0,r)}}function ce(o,t,n=7,s="i"){const r=le(o,n),a=le(t,n);return`${r}${a}${s}`}function Ce(o,t,n=7,s=["(",", ",")"]){const r=le(o,n),a=le(t,n);return`${s[0]}${r}${s[1]}${a}${s[2]}`}function Mt(o){return"min"in o&&"max"in o}class Ie{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class ae extends Ie{constructor(t,n,s,r,a,p){super(),this.name=t,this.title=n,this.description=s,this.math=r,this.shader=a;let h,i,f;typeof p=="number"?(f=p,h=1,i=2e3):(f=p.initial,h=p.min,i=p.max);const g=$=>{const d=Math.log(h),m=Math.log(i);return Math.exp(d+(m-d)*$)},y=$=>{if($<=h)return 0;if($>=i)return 1;const d=Math.log(h),m=Math.log(i);return(Math.log($)-d)/(m-d)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:f,min:h,max:i,posToVal:g,valToPos:y}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(t){}getInitialControlPoints(){return[]}getCanvasOverlayString(t,n){}getControlPointValues(t){}getControlPointGroups(t){return[]}}class xe extends ae{constructor(t,n,s,r,a,p,h){super(t,n,s,r,a,p),this.controlPointInfo=h}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(t,n){if(t.length>0)return`${this.controlPointInfo.name} = ${ce(...t[0])}`}getControlPointValues(t){if(t.length>0)return[{label:this.controlPointInfo.name,value:ce(...t[0])}]}getControlPointUniforms(t){if(t.length>0)return{[this.controlPointInfo.uniformName]:t[0]}}getControlPointGroups(t){return[0]}}const Pt=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,kt=`uniform int iterations;
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
`,fe=16;function Nt(o){const t=[];for(let n=0;n<o;n++){const s=2*Math.PI*n/o;t.push([Math.cos(s),Math.sin(s)])}return t}class Rt extends Ie{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=Pt,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Nt(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return kt}getCanvasOverlayString(t,n){return`p = ${t.length}`}getControlPointValues(t){return t.map((n,s)=>({label:`Root ${s+1}`,value:ce(...n)}))}getControlPointUniforms(t){if(t.length>0&&t.length<=fe){const n=t.flat(),s=new Array(fe*2).fill(0);return n.forEach((r,a)=>s[a]=r),{num_roots:t.length,roots:s}}}getControlPointGroups(t){return Array(t.length).fill(0)}getControlPointMinMax(){return[2,fe]}}const St=`### Mandelbrot set

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
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,At=`uniform int iterations;
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
}`,It=[0,0],Et=new xe("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",St,At,200,{name:"P",initialValue:It,uniformName:"phoenixP"}),Ft=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,Lt=`uniform int iterations;
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
`,Ot=[-.7,.27015],Dt=new xe("julia","Julia","Julia sets.",Ft,Lt,200,{name:"C",initialValue:Ot,uniformName:"juliaC"}),Ut=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,Ht=`uniform int iterations;
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
`,qt=[-.85,-.6],Bt=new xe("lambda","Lambda","Lambda fractal (logistic map).",Ut,Ht,200,{name:"Lambda",initialValue:qt,uniformName:"lambda"}),Gt=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,Xt=`uniform int iterations;
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
`,Vt=new ae("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",Gt,Xt,80),Wt=`This is another type of magnet fractal. The iteration is defined by:
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
`,Jt=new ae("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",Wt,Yt,80),Kt=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,Zt=`uniform int iterations;

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
`,Qt=new ae("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",Kt,Zt,80),en=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,tn=`uniform int iterations;

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
`,nn=new ae("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",en,tn,200),rn=[new Rt,Et,Dt,Bt,Vt,Jt,Qt,nn];function Me(o,t,n,s){return`vec3(${o}) + vec3(${t}) * cos(6.28318 * (vec3(${n}) * t + vec3(${s})))`}const ge={grayscale:"vec3(t)",cosmic:Me("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Me("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function on(o){return ge[o]||ge.grayscale}const Pe=Object.fromEntries(Object.keys(ge).map(o=>[o,o.charAt(0).toUpperCase()+o.slice(1)])),ke="cosmic",an=`
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
`,sn=`
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
`;function ln(o,t,n){if(Array.isArray(n))if(n.length===2)o[t]={value:new ie(n[0],n[1])};else if(n.length===3)o[t]={value:new dt(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const s=[];for(let r=0;r<n.length;r+=2)s.push(new ie(n[r],n[r+1]));o[t]={value:s}}else o[t]={value:n};else o[t]={value:n}}function cn(o,t,n){if(o.uniforms[t])if(Array.isArray(n))if(n.length===2)o.uniforms[t].value.fromArray(n);else if(n.length===3)o.uniforms[t].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const s=[];for(let r=0;r<n.length;r+=2)s.push(new ie(n[r],n[r+1]));o.uniforms[t].value=s}else o.uniforms[t].value=n;else o.uniforms[t].value=n}const dn=({fractal:o,center:t,viewWidth:n,viewHeight:s,parameters:r,controlPoints:a,colorScheme:p})=>{const h=Re(g=>g.invalidate),i=l.useMemo(()=>{const g={FRACTAL_SHADER:o.getShaderCode(),EVALUATE_COLOR:on(p)},y={center:{value:new ie(...t)},viewWidth:{value:n},viewHeight:{value:s}};o.getGuiParameters().forEach(d=>{y[d.name]={value:r[d.name]}});const $=o.getControlPointUniforms(a);if($)for(const[d,m]of Object.entries($))ln(y,d,m);return new lt({uniforms:y,vertexShader:an,fragmentShader:sn.replace(/%(\w+)%/g,(d,m)=>String(g[m]))})},[o,p]);l.useEffect(()=>{i.uniforms.center.value.fromArray(t),i.uniforms.viewWidth.value=n,i.uniforms.viewHeight.value=s,o.getGuiParameters().forEach(y=>{i.uniforms[y.name].value=r[y.name]});const g=o.getControlPointUniforms(a);if(g)for(const[y,$]of Object.entries(g))cn(i,y,$);h()},[i,t,n,s,r,a,h,o]);const f=l.useMemo(()=>{const g=new ct;return g.setDrawRange(0,3),g},[]);return e.jsx("mesh",{material:i,geometry:f})},un=({fractal:o,colorScheme:t})=>{const{theme:n}=te(),[s,r]=l.useState(o.getInitialGuiParameters()),[a,p]=l.useState(o.getInitialControlPoints());l.useEffect(()=>{r(o.getInitialGuiParameters()),p(o.getInitialControlPoints()),i(d=>d+1)},[o]);const[h,i]=l.useState(0),f=o.getGuiParameters().map(d=>Mt(d)?e.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:e.jsx(yt,{label:d.displayName,min:d.min,max:d.max,value:s[d.name],onChange:m=>r(b=>({...b,[d.name]:m})),theme:n,posToVal:d.posToVal,valToPos:d.valToPos})},d.name):null),g=o.getControlPointValues(a),[y,$]=o.getControlPointMinMax();return e.jsxs("div",{className:F("w-full h-full flex flex-col landscape:flex-row overflow-hidden",n==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[e.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[e.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[f,g&&g.length>0&&e.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:n==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:g.map(d=>e.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[e.jsx("p",{className:F("text-sm font-medium",n==="dark"?"text-gray-300":"text-gray-700"),children:d.label}),e.jsx("p",{className:F("text-base font-mono",n==="dark"?"text-gray-200":"text-gray-800"),children:d.value})]},d.label))})]})]}),e.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:e.jsx(Ct,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(d,m)=>{const b=["[",", ","]"],P=Ce(m.center[0]-m.viewWidth/2,m.center[0]+m.viewWidth/2,7,b),T=Ce(m.center[1]-m.viewHeight/2,m.center[1]+m.viewHeight/2,7,b),c={"top-left":ce(...d),"top-right":`Re: ${P}
Im: ${T}`},u=o.getCanvasOverlayString(a,s);return u&&(c["bottom-center"]=u),c},controlPoints:a,initialControlPoints:o.getInitialControlPoints(),onControlPointsChange:p,controlPointGroups:o.getControlPointGroups(a),minControlPoints:y,maxControlPoints:$,gl:{powerPreference:"default",antialias:!1},children:({center:d,viewWidth:m,viewHeight:b})=>e.jsx(dn,{fractal:o,center:d,viewWidth:m,viewHeight:b,parameters:s,controlPoints:a,colorScheme:t})},h)})]})},hn=`This application allows you to explore the intricate beauty of various fractals.
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
`;var fn={client:"ca-pub-5400548434612970",slot:"5745481735"};const ee=rn;function mn(){const{theme:o}=te(),t=l.useCallback(()=>{const _=["newton","mandelbrot","julia"],N=ee.filter(A=>_.includes(A.name));return N.length>0?N[Math.floor(Math.random()*N.length)]:ee[0]},[]),n=l.useRef(null);n.current===null&&(n.current=t());const s=l.useCallback(()=>{const N=oe().get("type");return ee.find(A=>A.name===N)||n.current},[n]),[r,a]=l.useState(s),[p,h]=l.useState(()=>oe().get("colors")||ke),[i,f]=l.useState(null);l.useEffect(()=>{const _=()=>{const N=oe(),A=N.get("type"),V=N.get("colors"),v=N.get("help"),x=ee.find(w=>w.name===A)||n.current;a(x),h(V||ke),f(v==="math"?"math":v==="controls"?"controls":null)};return window.addEventListener("hashchange",_),_(),()=>window.removeEventListener("hashchange",_)},[]);const g=_=>{ue({type:_.name})},y=_=>{ue({colors:_})},$=ee.map(_=>({name:_.title,value:_.name})),d=Object.entries(Pe).map(([_,N])=>({name:N,value:_})),m=_=>{const N=ee.find(A=>A.name===_)||r;a(N),g(N)},b=_=>{h(_),y(_)},P=()=>{ue({help:null})},T=_=>{const N=oe();return N.set("help",_),_==="math"&&!N.has("type")&&N.set("type",r.name),`#${N.toString()}`},c=[{key:"controls",name:"Exploring the Fractal",href:T("controls"),icon:e.jsx(rt,{})},{key:"math",name:`About ${r.title} Fractal`,href:T("math"),icon:e.jsx(ot,{})}],u=()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),e.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),e.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),e.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),e.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),e.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),e.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),z=()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"grad-spiral",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]})}),e.jsx("path",{d:"M6 12c0-3.314 2.686-6 6-6 2.761 0 5 2.239 5 5 0 2.209-1.791 4-4 4-1.657 0-3-1.343-3-3 0-1.105.895-2 2-2 .552 0 1 .448 1 1",fill:"none",stroke:"url(#grad-spiral)",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"#22d3ee"}),e.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"#a78bfa"}),e.jsx("circle",{cx:"11",cy:"9",r:"0.8",fill:"#34d399"})]}),E=()=>{if(i==="math"){const _=`## ${r.title} Fractal

${r.math}`;return e.jsx(be,{remarkPlugins:[_e,ze],rehypePlugins:[we],children:_})}if(i==="controls"){const _=_t({canvasName:"fractal view",parameterName:"complex parameter"}),N=`${hn}

${_}`;return e.jsx(be,{remarkPlugins:[_e,ze],rehypePlugins:[we],children:N})}return null},q=()=>i==="math"?`About ${r.title} Fractal`:i==="controls"?"Exploring the Fractal":"";return e.jsxs(e.Fragment,{children:[e.jsx(gt,{appName:"Fantastic Fractals",appIconUrl:"app-icon.png",help:c,adSenseConfig:fn,renderToolbar:_=>{const x=_<360,w=r.title,C=Pe[p]||"Colors";return e.jsx("div",{className:"flex items-center gap-3 min-w-0",children:x?e.jsxs(e.Fragment,{children:[e.jsx(Z,{options:$,selected:w,onChange:M=>m(M),icon:e.jsx("div",{className:"h-8 w-8",children:e.jsx(z,{})}),showIconOnly:!0}),e.jsx(Z,{options:d,selected:C,onChange:M=>b(M),icon:e.jsx("div",{className:"h-8 w-8",children:e.jsx(u,{})}),showIconOnly:!0})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:180},children:e.jsx(Z,{options:$,selected:w,onChange:M=>m(M),icon:e.jsx(z,{})})}),e.jsx("div",{style:{width:160},children:e.jsx(Z,{options:d,selected:C,onChange:M=>b(M),icon:e.jsx(u,{})})})]})})},children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(un,{fractal:r,colorScheme:p},r.name+"|"+p)})}),e.jsx(xt,{isOpen:i!==null,onClose:P,title:q(),size:"xl",children:e.jsx("div",{className:F("prose dark:prose-invert max-w-none",o==="dark"?"dark":""),children:E()})})]})}function pn(){return e.jsx(ut,{children:e.jsx(ft,{children:e.jsx(mn,{})})})}at.createRoot(document.getElementById("root")).render(e.jsx(st.StrictMode,{children:e.jsx(pn,{})}));
