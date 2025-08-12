import{r as l,j as e,d as Ne,i as Be,P as He,e as L,z as Re,E as qe,g as Ge,f as Xe,h as Ve,k as We,l as Ye,m as Je,n as Ke,o as Ze,L as Qe,p as ze,q as et,t as tt,v as nt,w as rt,x as ot,y as at,A as st,M as ue,B as he,C as fe,D as me,G as it}from"./other-DeAWH2A7.js";import{C as lt,u as Ae,V as ie,S as ct,B as dt,a as ut}from"./three-BhzMe45D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Se=l.createContext(void 0),ht=({children:r})=>{const[t,n]=l.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});l.useEffect(()=>{const a=window.document.documentElement;t==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[t]);const s=()=>{n(a=>a==="light"?"dark":"light")},o=l.useMemo(()=>({theme:t,toggleTheme:s}),[t]);return e.jsx(Se.Provider,{value:o,children:r})},te=()=>{const r=l.useContext(Se);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r},ye=r=>{if(r.startsWith("#")||r.startsWith("/"))return!1;try{return new URL(r,window.location.origin).hostname!==window.location.hostname}catch{return!1}},oe=()=>new URLSearchParams(window.location.hash.substring(1)),pe=r=>{const t=oe();Object.entries(r).forEach(([s,o])=>{o==null?t.delete(s):t.set(s,o)});const n=t.toString();window.location.hash.substring(1)!==n&&(window.location.hash=n)},ft=()=>typeof window<"u"&&!!window?.__TAURI__,mt=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),pt=()=>{if(typeof navigator>"u")return!1;const r=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(r))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},gt=()=>ft()&&mt(),xt=pt()?"xl":"md",ge={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-2.5 text-lg",item:"px-5 py-3 text-lg"}},Z=({label:r,options:t,selected:n,onChange:s,theme:o,size:a=xt,align:m="left",icon:f,showIconOnly:i,trigger:c,buttonClassName:p})=>{const v=l.useRef(null),[M,d]=l.useState({}),u=te?.(),y=o??u?.theme??"light",P=()=>{if(v.current){const $=v.current.getBoundingClientRect(),D={top:`${$.bottom+4}px`,minWidth:`${$.width}px`};m==="left"?D.left=`${$.left}px`:D.right=`${window.innerWidth-$.right}px`,d(D)}},j=a==="sm"?"h-4 w-4":a==="md"||a==="lg"?"h-5 w-5":"h-6 w-6",h=t?.find($=>$?.name===n)?.icon??f,z=(()=>{if(i&&f&&Ne.isValidElement(f)){const $=f.props?.className;if($&&($.includes("h-")||$.includes("w-")))return $}return j})();return e.jsxs(Be,{as:"div",className:"relative",children:[e.jsx(He,{ref:v,onClick:P,className:L(c?p:i?["p-2 rounded-full focus:outline-none",y==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",ge[a].button,y==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:c||(i?e.jsx("span",{className:L(z,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:h}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex items-center truncate",children:[h&&e.jsx("span",{className:L(j,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:h}),r&&`${r}: `,e.jsx("strong",{children:n})]}),e.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}))}),e.jsx(Re,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(qe,{style:M,className:L("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":m==="left","origin-top-right":m==="right"},y==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:e.jsx("div",{className:"py-1",children:t.map(($,D)=>{const w=$.key??$.value??$.name??D,R=!!$.href,A=$.href?ye($.href):!1;return e.jsx(Ge,{children:({focus:q})=>R?e.jsxs("a",{href:$.href,target:A?"_blank":"_self",rel:"noopener noreferrer",className:L("flex items-center justify-between w-full whitespace-nowrap",ge[a].item,q?y==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":y==="dark"?"text-gray-300":"text-gray-700"),children:[e.jsxs("div",{className:"flex items-center",children:[$.icon&&e.jsx("span",{className:"mr-3 h-5 w-5",children:$.icon}),$.name]}),A&&e.jsx(Xe,{className:"h-4 w-4"})]}):e.jsx("button",{onClick:()=>s&&s($.value),className:L("w-full text-left block whitespace-nowrap",ge[a].item,q?y==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":y==="dark"?"text-gray-300":"text-gray-700"),children:e.jsxs("div",{className:"flex items-center",children:[$.icon&&e.jsx("span",{className:"mr-3 h-5 w-5",children:$.icon}),$.name]})})},w)})})})})]})},yt=({client:r,slot:t,style:n={display:"block"},format:s="auto",responsive:o="true"})=>(l.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),e.jsx("ins",{className:"adsbygoogle",style:n,"data-ad-client":r,"data-ad-slot":t,"data-ad-format":s,"data-full-width-responsive":o})),Ie=l.createContext(void 0),vt=({children:r,defaultLanguage:t="en",storageKey:n="language"})=>{const[s,o]=l.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem(n);if(i==="en"||i==="zh")return i;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return t});l.useEffect(()=>{typeof window<"u"&&localStorage.setItem(n,s)},[s,n]);const a=i=>o(i),m=()=>o(i=>i==="en"?"zh":"en"),f=l.useMemo(()=>({language:s,setLanguage:a,toggleLanguage:m}),[s]);return e.jsx(Ie.Provider,{value:f,children:r})},bt=()=>{const r=l.useContext(Ie);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r},wt=({appName:r,help:t,config:n,showUserProfile:s,renderToolbar:o,showLanguage:a,language:m,onLanguageChange:f,appIconUrl:i,showTitle:c=!0,toolbarWidthPx:p=0})=>{const{theme:v,toggleTheme:M}=te(),{setLanguage:d}=bt(),u=()=>{if(!t)return null;const b=e.jsx(Ke,{className:"h-8 w-8"});if(typeof t=="string")return e.jsx("a",{href:t,target:ye(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:b});if(Array.isArray(t)&&t.length>0){const h=t.map(z=>({name:z.name,href:z.href,icon:z.icon}));return e.jsx(Z,{options:h,align:"right",icon:b,showIconOnly:!0})}return null},y=()=>{if(!n)return null;const b=e.jsx(Ze,{className:"h-8 w-8"});if(typeof n=="string")return e.jsx("a",{href:n,target:ye(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:b});if(Array.isArray(n)&&n.length>0){const h=n.map(z=>({name:z.name,href:z.href,icon:z.icon}));return e.jsx(Z,{options:h,align:"right",icon:b,showIconOnly:!0})}return null},P=b=>{f?.(b);try{d(b)}catch{}},j=()=>a?e.jsx(Z,{options:[{name:"English",value:"en"},{name:"中文",value:"zh"}],align:"right",icon:e.jsx(Je,{className:"h-8 w-8"}),showIconOnly:!0,onChange:b=>P(b)}):null;return e.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex items-center border-b border-gray-200 dark:border-gray-700 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[i&&e.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded"}),c&&e.jsx("h1",{className:"text-xl font-bold truncate",children:r})]}),e.jsx("div",{className:"flex-1 min-w-0",children:typeof o=="function"?o(p):null}),e.jsxs("nav",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:M,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:v==="light"?e.jsx(Ve,{className:"h-8 w-8"}):e.jsx(We,{className:"h-8 w-8"})}),j(),u(),y(),s&&e.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(Ye,{className:"h-8 w-8"})})]})]})},_t=({children:r,adSenseConfig:t,...n})=>{const[s,o]=l.useState(!0),[a,m]=l.useState("medium"),[f,i]=l.useState(typeof window<"u"?window.innerWidth:0),c=t?.client&&t?.slot,p=!!n.renderToolbar,v=gt();l.useEffect(()=>{const b=()=>{const $=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${$}px`)},h=()=>{o(p||(window.visualViewport?.height??window.innerHeight)>=600);const $=window.innerWidth;i($);const D=$<640,w=$>=1280;m(D?"narrow":w?"wide":"medium"),b()};h();const z=window.visualViewport??window;return z.addEventListener("resize",h),()=>{z.removeEventListener("resize",h)}},[]);const M=c?t?.height??90:0,d=c?t?.width??300:0,u=c&&a==="wide",y=a==="narrow"?!1:a==="wide"?!0:!p,P=()=>{const b=f,h=32,z=12,$=48,D=8,w=n.appIconUrl?32:0,R=220;let A=0;A+=1,n.showLanguage&&(A+=1);const q=n.help;(typeof q=="string"||Array.isArray(q)&&q.length>0)&&(A+=1);const g=n.config;(typeof g=="string"||Array.isArray(g)&&g.length>0)&&(A+=1),n.showUserProfile&&(A+=1);const x=A>0?A*$+(A-1)*D:0,_=y&&w>0?8:0,C=y?R:0,k=w+_+C,N=p?2*z:z,T=b-h-k-x-N;return Math.max(0,T)},j=e.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:v?{paddingTop:16,paddingBottom:12}:void 0,children:[s&&e.jsx(wt,{...n,showTitle:y,toolbarWidthPx:p?P():0}),e.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:r})]});return c?e.jsxs("div",{className:"flex items-stretch flex-"+(u?"row":"col"),children:[e.jsx("div",{className:u?"h-screen":"w-screen",style:u?{width:`calc(100vw - ${d}px)`}:{height:`calc(100vh - ${M}px)`},children:j}),e.jsx("div",{style:u?{width:`${d}px`}:{height:`${M}px`},children:e.jsx(yt,{client:t.client,slot:t.slot})})]}):e.jsx("div",{className:"w-screen h-screen",children:j})},zt=({isOpen:r,onClose:t,title:n,children:s,size:o="lg"})=>{const{theme:a}=te(),m=f=>{switch(f){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return e.jsx(Re,{appear:!0,show:r,as:l.Fragment,children:e.jsxs(Qe,{as:"div",className:L("relative z-50",a),onClose:t,children:[e.jsx(ze,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:e.jsx(ze,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(et,{className:L(m(o),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[e.jsx(tt,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),e.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(nt,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),e.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},$t=({label:r,min:t,max:n,value:s,onChange:o,theme:a,valueLabel:m=c=>Math.round(c),posToVal:f=c=>t+(n-t)*c,valToPos:i=c=>(c-t)/(n-t)})=>{const c=l.useRef(null),p=l.useCallback(j=>{if(c.current){const b=c.current.getBoundingClientRect(),h=Math.max(0,Math.min(1,(j-b.left)/b.width));o(f(h))}},[o,f]),v=j=>{j.preventDefault(),p(j.clientX);const b=z=>{p(z.clientX)},h=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",h)},M=j=>{j.preventDefault(),j.touches.length>0&&p(j.touches[0].clientX);const b=z=>{z.touches.length>0&&p(z.touches[0].clientX)},h=()=>{document.removeEventListener("touchmove",b),document.removeEventListener("touchend",h)};document.addEventListener("touchmove",b),document.addEventListener("touchend",h)},d=i(s),u=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",y=d>.5,P=d>.25&&d<.5||d>.75;return e.jsx("div",{className:"w-full px-3",children:e.jsxs("div",{ref:c,onMouseDown:v,onTouchStart:M,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[e.jsx("div",{className:L("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),e.jsx("div",{className:L("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${d*100}%`}}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r&&e.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":y?"text-white":"text-gray-800"),style:{...y?{left:"10px"}:{right:"10px"},textShadow:y?u:"none"},children:r}),e.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":P?"text-white":"text-gray-800"),style:{...P?{right:`calc(${100-d*100}% + 14px)`}:{left:`calc(${d*100}% + 14px)`},textShadow:P?u:"none"},children:m(s)})]}),e.jsx("div",{className:L("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${d*100}% - 12px)`}})]})})},jt=36,$e=1e3,Tt=10,Q=(r,t,n,s,o,a,m)=>{if(n.length===0)return null;let f=null;const[i,c]=[s[0]-o/2,s[1]+a/2];for(let p=0;p<n.length;p++){const v=n[p],M=(v[0]-i)/o*m.width,d=(c-v[1])/a*m.height,u=Math.sqrt(Math.pow(r-M,2)+Math.pow(t-d,2));(f===null||u<f.distance)&&(f={index:p,distance:u})}return f&&f.distance<jt?f:null},Mt=({zoom:r,setZoom:t,center:n,setCenter:s,viewWidth:o,viewHeight:a,aspect:m,baseViewSize:f=4,onShowInfo:i,controlPoints:c=[],initialControlPoints:p=[],onControlPointsChange:v,minControlPoints:M,maxControlPoints:d})=>{const[u,y]=l.useState(null),P=l.useRef(u);P.current=u;const[j,b]=l.useState(!1),h=l.useRef(null),z=l.useRef(null),$=l.useCallback(()=>{t(1),s([0,0])},[t,s]),D=l.useCallback(()=>{const g=P.current;if(!(!v||!g)){if(g.type==="point"){if(M===void 0||c.length<=M)return;const x=c.filter((_,C)=>C!==g.index);v(x)}else{if(d===void 0||c.length>=d)return;const x=[...c,g.coords];v(x)}y(null)}},[c,d,M,v]),w=l.useCallback((g,x,_)=>{const C=g-_.left,k=x-_.top,N=Q(C,k,c,n,o,a,_);if(N)y({type:"point",index:N.index,flashing:!0});else{const T=n[0]-o/2+C/_.width*o,S=n[1]+a/2-k/_.height*a;y({type:"space",coords:[T,S],flashing:!0})}h.current=window.setTimeout(()=>{D(),h.current=null},$e)},[n,c,D,a,o]),R=rt({onPointerDown:({event:g})=>{g.preventDefault();const x=g.target.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:C}=g,k=_-x.left,N=C-x.top,T=Q(k,N,c,n,o,a,x);T?(b(!0),y({type:"point",index:T.index,flashing:!1})):y(null),i&&(z.current={x:_,y:C},h.current=window.setTimeout(()=>{w(_,C,x)},$e))},onPointerUp:({event:g})=>{b(!1);const x=g.target.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:C}=g,k=_-x.left,N=C-x.top,T=Q(k,N,c,n,o,a,x);y(T?{type:"point",index:T.index,flashing:!1}:null),h.current&&(clearTimeout(h.current),h.current=null)},onPointerMove:({event:g})=>{if(j)return;const x=g.target.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:C}=g;if(h.current&&z.current){const V=_-z.current.x,O=C-z.current.y;Math.sqrt(V*V+O*O)>Tt&&(clearTimeout(h.current),h.current=null,y(null))}const k=_-x.left,N=C-x.top,T=Q(k,N,c,n,o,a,x);if(y(T?{type:"point",index:T.index,flashing:!1}:V=>V?.type==="point"?null:V),!i)return;const S=_-x.left,E=C-x.top,X=n[0]+(S/x.width-.5)*o,G=n[1]+(.5-E/x.height)*a;i([X,G])},onDrag:({event:g,first:x,movement:[_,C],xy:[k,N],memo:T})=>{h.current&&(clearTimeout(h.current),h.current=null,y(E=>E?.type==="point"?{...E,flashing:!1}:null)),g.preventDefault();const S=g.target.getBoundingClientRect();if(S){if(x||!T){const E=k-S.left,X=N-S.top;if(v){const G=Q(E,X,c,n,o,a,S);if(G)return{dragMode:"point",pointIndex:G.index}}return{dragMode:"canvas",startCenter:n}}if(T.dragMode==="point"){if(!v)return T;const E=k-S.left,X=N-S.top,G=n[0]-o/2+E/S.width*o,V=n[1]+a/2-X/S.height*a,O=[...c];return O[T.pointIndex]=[G,V],v(O),T}if(T.dragMode==="canvas"){const{startCenter:E}=T;if(!E)return T;const X=_/S.width*o,G=C/S.height*a;return s([E[0]-X,E[1]+G]),T}}},onPinch:({event:g,first:x,offset:[_]})=>{g.preventDefault(),x&&(h.current&&(clearTimeout(h.current),h.current=null),y(null)),t(_)},onWheel:({event:g,delta:[,x]})=>{if(x===0)return;const _=g.target.getBoundingClientRect();if(!_)return;const C=g.clientX-_.left,k=g.clientY-_.top,N=1.1,T=x<0?r*N:r/N;let S,E;m>=1?(E=f/T,S=E*m):(S=f/T,E=S/m);const X=C/_.width-.5,G=.5-k/_.height,V=n[0]+X*(o-S),O=n[1]+G*(a-E);t(T),s([V,O])},onDoubleClick:({event:g})=>{g.preventDefault();const x=g.target.getBoundingClientRect();if(!x)return;const _=g.clientX-x.left,C=g.clientY-x.top;if(v){const k=Q(_,C,c,n,o,a,x);if(k&&p&&p[k.index]){const N=[...c];N[k.index]=p[k.index],v(N);return}}$()},onClick:({event:g})=>{if(!i)return;const x=g.currentTarget.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:C}=g,k=_-x.left,N=C-x.top,T=n[0]+(k/x.width-.5)*o,S=n[1]+(.5-N/x.height)*a;i([T,S])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[r,0]}}),A={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...R(),onContextMenu:g=>g.preventDefault(),style:A},highlightedPoint:u}};function Ct({canvasName:r="canvas",parameterName:t="control point"}={}){return`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${r} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${r} to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${t}. If not visible, hover over or single-click the ${r}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${t}:** Click and drag a control point to move it.
- **Add ${t}:** Long-press on an empty area to add a new ${t}.
- **Remove ${t}:** Long-press on an existing ${t} to remove it.
- **Reset ${t}:** Double-click a ${t} to reset its position.

### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${r} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${r} to reset the
  pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${t}. If not visible, tap anywhere on the ${r} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${t}:** Drag a control point to move it.
- **Add ${t}:** Long-press on an empty area to add a new ${t}.
- **Remove ${t}:** Long-press on an existing ${t} to remove it.
- **Reset ${t}:** Double-tap a ${t} to reset its position.`}const je=5e3,kt=500,Te=25,Pt=({setAspect:r})=>{const{size:t}=Ae();return l.useEffect(()=>{r(t.width>0&&t.height>0?t.width/t.height:1)},[t,r]),null},Nt=({xRange:r,yRange:t,theme:n,worldToScreen:s,center:o,gridTooDense:a})=>{const m=l.useMemo(()=>{const i=[],[c,p]=r,[v,M]=t,d=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",u="0.8)",y="0.5)";for(let P=Math.ceil(c);P<=Math.floor(p);P++){const j=s([P,v]);if(!j)continue;const b=P===0;a&&!b||i.push(e.jsx("div",{className:"absolute",style:{left:j[0],top:0,width:1,height:"100%",backgroundColor:d+(b?u:y),transform:b?"translateX(-50%)":void 0}},`v-${P}`))}for(let P=Math.ceil(v);P<=Math.floor(M);P++){const j=s([c,P]);if(!j)continue;const b=P===0;a&&!b||i.push(e.jsx("div",{className:"absolute",style:{left:0,top:j[1],width:"100%",height:1,backgroundColor:d+(b?u:y),transform:b?"translateY(-50%)":void 0}},`h-${P}`))}return i},[r,t,n,s,a]),f=l.useMemo(()=>{const{pos:i}=ve([0,0],o,r,t),c=s(i);if(!c)return null;const p=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return e.jsx("div",{className:"absolute",style:{left:c[0],top:c[1],width:12,height:12,borderRadius:"50%",backgroundColor:p,transform:"translate(-50%, -50%)"}})},[o,r,t,n,s]);return e.jsxs(e.Fragment,{children:[m,f]})},re={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},Rt=r=>{if(typeof r=="number"){const t=Object.keys(re);return re[t[r%t.length]||"default"]}return typeof r=="string"&&re[r]?re[r]:re.default};function ve(r,t,n,s){const[o,a]=r,[m,f]=n,[i,c]=s;if(o>=m&&o<=f&&a>=i&&a<=c)return{pos:r,clipped:!1};const[p,v]=t,M=o-p,d=a-v;let u=1/0;const y=1e-9;if(Math.abs(M)>y){const b=(m-p)/M,h=(f-p)/M;if(b>0){const z=v+b*d;z>=i&&z<=c&&(u=Math.min(u,b))}if(h>0){const z=v+h*d;z>=i&&z<=c&&(u=Math.min(u,h))}}if(Math.abs(d)>y){const b=(i-v)/d,h=(c-v)/d;if(b>0){const z=p+b*M;z>=m&&z<=f&&(u=Math.min(u,b))}if(h>0){const z=p+h*M;z>=m&&z<=f&&(u=Math.min(u,h))}}if(u!==1/0&&u>0)return{pos:[p+u*M,v+u*d],clipped:!0};const P=Math.max(m,Math.min(f,o)),j=Math.max(i,Math.min(c,a));return{pos:[P,j],clipped:!0}}const At=({children:r,initialZoom:t=1,initialCenter:n=[0,0],baseViewSize:s=4,onInfoOverlay:o,onViewChange:a,className:m,gl:f,controlPoints:i=[],initialControlPoints:c=[],onControlPointsChange:p,controlPointGroups:v=[],minControlPoints:M,maxControlPoints:d,showGrid:u=!0,frameloop:y="always"})=>{const{theme:P}=te(),[j,b]=l.useState(t),[h,z]=l.useState(n),[$,D]=l.useState(1),[w,R]=l.useState(!1),[A,q]=l.useState(null),[g,x]=l.useState(0),_=l.useRef(null),C=l.useRef(null),k=l.useRef(null),[N,T]=l.useMemo(()=>{let I,F;return $>=1?(F=s/j,I=F*$):(I=s/j,F=I/$),[I,F]},[j,$,s]),S=l.useMemo(()=>({center:h,viewWidth:N,viewHeight:T,zoom:j}),[h,N,T,j]);l.useEffect(()=>{a&&a(S)},[S,a]);const E=l.useCallback(()=>{_.current&&clearTimeout(_.current),C.current&&clearTimeout(C.current),_.current=window.setTimeout(()=>{x(0),_.current=null},je),C.current=window.setTimeout(()=>{q(null),C.current=null},je+kt)},[]),X=l.useCallback(I=>{!o&&i.length===0&&!u||(_.current&&clearTimeout(_.current),C.current&&clearTimeout(C.current),I&&q(I),x(1),E())},[o,i.length,u,E]),G=l.useCallback(I=>{E(),p&&p(I)},[p,E]),{controlHandlers:V,highlightedPoint:O}=Mt({zoom:j,setZoom:b,center:h,setCenter:z,viewWidth:N,viewHeight:T,aspect:$,baseViewSize:s,onShowInfo:X,controlPoints:i,initialControlPoints:c,onControlPointsChange:g>0?G:void 0,minControlPoints:M,maxControlPoints:d}),{style:Le,...Fe}=V,[J,K]=l.useMemo(()=>{const I=[h[0]-N/2,h[0]+N/2],F=[h[1]-T/2,h[1]+T/2];return[I,F]},[h,N,T]);l.useEffect(()=>()=>{_.current&&clearTimeout(_.current),C.current&&clearTimeout(C.current)},[]);const ne=l.useCallback(I=>{if(!k.current)return null;const{width:F,height:B}=k.current.getBoundingClientRect(),[U,H]=J,[W,Y]=K,de=(I[0]-U)/N*F,se=(Y-I[1])/T*B;return[de,se]},[J,K,N,T]),Oe=l.useMemo(()=>{if(!u)return null;let I=!1;if(k.current){const{width:F,height:B}=k.current.getBoundingClientRect(),U=F/N,H=B/T;(U<Te||H<Te)&&(I=!0)}return e.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:g},children:e.jsx(Nt,{xRange:J,yRange:K,theme:P,worldToScreen:ne,center:h,gridTooDense:I})})},[u,g,J,K,P,ne,N,T,h]),De=l.useMemo(()=>{const I=U=>{const H=U?128:48,W=U?120:44;return{containerStyle:{width:H,height:H},highlightStyle:{width:W,height:W,borderWidth:U?46:8}}},F=i.map((U,H)=>{const{pos:W}=ve(U,h,J,K),Y=ne(W);if(!Y)return null;const de=Rt(v[H]),se=O?.type==="point"&&O.index===H,_e=I(se&&O.flashing);return e.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",..._e.containerStyle},children:[se&&e.jsx("div",{className:O.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",..._e.highlightStyle}}),e.jsx("div",{className:"control-point-animating",style:{...de,gridColumn:1,gridRow:1}})]},H)});let B=null;if(O?.type==="space"){const{pos:U}=ve(O.coords,h,J,K),H=ne(U);if(H){const W=I(O.flashing);B=e.jsx("div",{className:"absolute",style:{left:H[0],top:H[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...W.containerStyle},children:e.jsx("div",{className:O.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...W.highlightStyle}})})}}return F.every(U=>U===null)&&!B?null:e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:g},children:[F,B]})},[i,h,J,K,ne,v,g,O]),Ue=l.useMemo(()=>{if(!A||w||!o)return null;const I=o(A,S);if(!I)return null;const F=typeof I=="string"?{"top-left":I}:I;return Object.keys(F).length===0?null:Object.entries(F).map(([B,U])=>{if(!U)return null;const H=U.trim().split(`
`);return e.jsx("div",{className:L("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":B==="top-left","top-0 right-0 text-right":B==="top-right","bottom-0 left-0":B==="bottom-left","bottom-0 right-0 text-right":B==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":B==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":B==="bottom-center"}),style:{opacity:g},children:e.jsx("div",{className:L("p-1 rounded-md text-xs font-mono space-y-1",P==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:H.map((W,Y)=>e.jsx("div",{children:W},Y))})},B)})},[A,w,o,P,g,S]);return e.jsxs("div",{ref:k,className:L("w-full h-full relative",m),style:Le,...Fe,children:[e.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:e.jsxs(lt,{frameloop:y,gl:f,onCreated:({gl:I})=>{I.domElement.addEventListener("webglcontextlost",F=>{F.preventDefault(),R(!0)},!1)},children:[e.jsx(Pt,{setAspect:D}),r(S)]})}),w&&e.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[e.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),e.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),Oe,Ue,De]})};function le(r,t){const n=r<0?"-":"+",s=Math.abs(r),o=t-1;if(o<=0)return n;if(s===0)return n+"0.0".padEnd(o,"0").substring(0,o);const a=String(Math.trunc(s));if(a.length<=o){const m=o-a.length;if(m>1){let f=m-1,i=s.toFixed(f);if(i.split(".")[0].length>a.length&&(f-=i.split(".")[0].length-a.length,f>=0?i=s.toFixed(f):i=String(Math.round(s))),i.length<=o)return n+i}if(a.length<=o){let f=a;return f.length<o&&(f+=".".repeat(o-f.length)),n+f}}if(o>=3){for(let f=o-4;f>=0;f--){let i=s.toExponential(f).replace("e+","e");if(i.length<=o)return n+i}let m=s.toExponential(0).replace("e+","e");if(m.length<=o)return n+m}if(s>1)return n+".".repeat(o);{const m="0.0000";return m.length<=o?n+m:n+"0.0".padEnd(o,"0").substring(0,o)}}function ce(r,t,n=7,s="i"){const o=le(r,n),a=le(t,n);return`${o}${a}${s}`}function Me(r,t,n=7,s=["(",", ",")"]){const o=le(r,n),a=le(t,n);return`${s[0]}${o}${s[1]}${a}${s[2]}`}function St(r){return"min"in r&&"max"in r}class Ee{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class ae extends Ee{constructor(t,n,s,o,a,m,f){super(),this.name=t,this.title=n,this.description=s,this.math=o,this.shader=a,this.iconUrl=f;let i,c,p;typeof m=="number"?(p=m,i=1,c=2e3):(p=m.initial,i=m.min,c=m.max);const v=d=>{const u=Math.log(i),y=Math.log(c);return Math.exp(u+(y-u)*d)},M=d=>{if(d<=i)return 0;if(d>=c)return 1;const u=Math.log(i),y=Math.log(c);return(Math.log(d)-u)/(y-u)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:p,min:i,max:c,posToVal:v,valToPos:M}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(t){}getInitialControlPoints(){return[]}getCanvasOverlayString(t,n){}getControlPointValues(t){}getControlPointGroups(t){return[]}}class we extends ae{constructor(t,n,s,o,a,m,f,i){super(t,n,s,o,a,m,i),this.controlPointInfo=f}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(t,n){if(t.length>0)return`${this.controlPointInfo.name} = ${ce(...t[0])}`}getControlPointValues(t){if(t.length>0)return[{label:this.controlPointInfo.name,value:ce(...t[0])}]}getControlPointUniforms(t){if(t.length>0)return{[this.controlPointInfo.uniformName]:t[0]}}getControlPointGroups(t){return[0]}}const It=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,Et=`uniform int iterations;
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
`,Lt=""+new URL("newton-B60RDm46.png",import.meta.url).href,xe=16;function Ft(r){const t=[];for(let n=0;n<r;n++){const s=2*Math.PI*n/r;t.push([Math.cos(s),Math.sin(s)])}return t}class Ot extends Ee{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=It,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Ft(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return Et}getIcon(){return Lt}getCanvasOverlayString(t,n){return`p = ${t.length}`}getControlPointValues(t){return t.map((n,s)=>({label:`Root ${s+1}`,value:ce(...n)}))}getControlPointUniforms(t){if(t.length>0&&t.length<=xe){const n=t.flat(),s=new Array(xe*2).fill(0);return n.forEach((o,a)=>s[a]=o),{num_roots:t.length,roots:s}}}getControlPointGroups(t){return Array(t.length).fill(0)}getControlPointMinMax(){return[2,xe]}}const Dt=""+new URL("mandelbrot-DLtBXckj.png",import.meta.url).href,Ut=`### Mandelbrot set

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
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,Bt=`uniform int iterations;
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
}`,Ht=[0,0],qt=new we("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",Ut,Bt,200,{name:"P",initialValue:Ht,uniformName:"phoenixP"},Dt),Gt=""+new URL("julia-BPDBAcPP.png",import.meta.url).href,Xt=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,Vt=`uniform int iterations;
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
`,Wt=[-.7,.27015],Yt=new we("julia","Julia","Julia sets.",Xt,Vt,200,{name:"C",initialValue:Wt,uniformName:"juliaC"},Gt),Jt=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,Kt=`uniform int iterations;
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
`,Zt=[-.85,-.6],Qt=new we("lambda","Lambda","Lambda fractal (logistic map).",Jt,Kt,200,{name:"Lambda",initialValue:Zt,uniformName:"lambda"}),en=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,tn=`uniform int iterations;
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
`,nn=new ae("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",en,tn,80),rn=`This is another type of magnet fractal. The iteration is defined by:
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
`,on=`uniform int iterations;
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
`,an=new ae("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",rn,on,80),sn=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,ln=`uniform int iterations;

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
`,cn=new ae("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",sn,ln,80),dn=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,un=`uniform int iterations;

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
`,hn=new ae("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",dn,un,200),fn=[new Ot,qt,Yt,Qt,nn,an,cn,hn];function Ce(r,t,n,s){return`vec3(${r}) + vec3(${t}) * cos(6.28318 * (vec3(${n}) * t + vec3(${s})))`}const be={grayscale:"vec3(t)",cosmic:Ce("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Ce("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function mn(r){return be[r]||be.grayscale}const ke=Object.fromEntries(Object.keys(be).map(r=>[r,r.charAt(0).toUpperCase()+r.slice(1)])),Pe="cosmic",pn=`
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
`,gn=`
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
`;function xn(r,t,n){if(Array.isArray(n))if(n.length===2)r[t]={value:new ie(n[0],n[1])};else if(n.length===3)r[t]={value:new ut(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const s=[];for(let o=0;o<n.length;o+=2)s.push(new ie(n[o],n[o+1]));r[t]={value:s}}else r[t]={value:n};else r[t]={value:n}}function yn(r,t,n){if(r.uniforms[t])if(Array.isArray(n))if(n.length===2)r.uniforms[t].value.fromArray(n);else if(n.length===3)r.uniforms[t].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const s=[];for(let o=0;o<n.length;o+=2)s.push(new ie(n[o],n[o+1]));r.uniforms[t].value=s}else r.uniforms[t].value=n;else r.uniforms[t].value=n}const vn=({fractal:r,center:t,viewWidth:n,viewHeight:s,parameters:o,controlPoints:a,colorScheme:m})=>{const f=Ae(p=>p.invalidate),i=l.useMemo(()=>{const p={FRACTAL_SHADER:r.getShaderCode(),EVALUATE_COLOR:mn(m)},v={center:{value:new ie(...t)},viewWidth:{value:n},viewHeight:{value:s}};r.getGuiParameters().forEach(d=>{v[d.name]={value:o[d.name]}});const M=r.getControlPointUniforms(a);if(M)for(const[d,u]of Object.entries(M))xn(v,d,u);return new ct({uniforms:v,vertexShader:pn,fragmentShader:gn.replace(/%(\w+)%/g,(d,u)=>String(p[u]))})},[r,m]);l.useEffect(()=>{i.uniforms.center.value.fromArray(t),i.uniforms.viewWidth.value=n,i.uniforms.viewHeight.value=s,r.getGuiParameters().forEach(v=>{i.uniforms[v.name].value=o[v.name]});const p=r.getControlPointUniforms(a);if(p)for(const[v,M]of Object.entries(p))yn(i,v,M);f()},[i,t,n,s,o,a,f,r]);const c=l.useMemo(()=>{const p=new dt;return p.setDrawRange(0,3),p},[]);return e.jsx("mesh",{material:i,geometry:c})},bn=({fractal:r,colorScheme:t})=>{const{theme:n}=te(),[s,o]=l.useState(r.getInitialGuiParameters()),[a,m]=l.useState(r.getInitialControlPoints());l.useEffect(()=>{o(r.getInitialGuiParameters()),m(r.getInitialControlPoints()),i(d=>d+1)},[r]);const[f,i]=l.useState(0),c=r.getGuiParameters().map(d=>St(d)?e.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:e.jsx($t,{label:d.displayName,min:d.min,max:d.max,value:s[d.name],onChange:u=>o(y=>({...y,[d.name]:u})),theme:n,posToVal:d.posToVal,valToPos:d.valToPos})},d.name):null),p=r.getControlPointValues(a),[v,M]=r.getControlPointMinMax();return e.jsxs("div",{className:L("w-full h-full flex flex-col landscape:flex-row overflow-hidden",n==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[e.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[e.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c,p&&p.length>0&&e.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:n==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:p.map(d=>e.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[e.jsx("p",{className:L("text-sm font-medium",n==="dark"?"text-gray-300":"text-gray-700"),children:d.label}),e.jsx("p",{className:L("text-base font-mono",n==="dark"?"text-gray-200":"text-gray-800"),children:d.value})]},d.label))})]})]}),e.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:e.jsx(At,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(d,u)=>{const y=["[",", ","]"],P=Me(u.center[0]-u.viewWidth/2,u.center[0]+u.viewWidth/2,7,y),j=Me(u.center[1]-u.viewHeight/2,u.center[1]+u.viewHeight/2,7,y),b={"top-left":ce(...d),"top-right":`Re: ${P}
Im: ${j}`},h=r.getCanvasOverlayString(a,s),z=r.title;return b["bottom-center"]=h?`${z} | ${h}`:z,b},controlPoints:a,initialControlPoints:r.getInitialControlPoints(),onControlPointsChange:m,controlPointGroups:r.getControlPointGroups(a),minControlPoints:v,maxControlPoints:M,gl:{powerPreference:"default",antialias:!1},children:({center:d,viewWidth:u,viewHeight:y})=>e.jsx(vn,{fractal:r,center:d,viewWidth:u,viewHeight:y,parameters:s,controlPoints:a,colorScheme:t})},f)})]})},wn=`This application allows you to explore the intricate beauty of various fractals.
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
`,_n=`## Fantastic Fractals — an interactive fractal explorer

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
`;var zn={client:"ca-pub-5400548434612970",slot:"5745481735"};const ee=fn;function $n(){const{theme:r}=te(),t=l.useCallback(()=>{const w=["newton","mandelbrot","julia"],R=ee.filter(A=>w.includes(A.name));return R.length>0?R[Math.floor(Math.random()*R.length)]:ee[0]},[]),n=l.useRef(null);n.current===null&&(n.current=t());const s=l.useCallback(()=>{const R=oe().get("type");return ee.find(A=>A.name===R)||n.current},[n]),[o,a]=l.useState(s),[m,f]=l.useState(()=>oe().get("colors")||Pe),[i,c]=l.useState(null);l.useEffect(()=>{const w=()=>{const R=oe(),A=R.get("type"),q=R.get("colors"),g=R.get("help"),x=ee.find(_=>_.name===A)||n.current;a(x),f(q||Pe),c(g==="math"?"math":g==="controls"?"controls":g==="about"?"about":null)};return window.addEventListener("hashchange",w),w(),()=>window.removeEventListener("hashchange",w)},[]);const p=w=>{pe({type:w.name})},v=w=>{pe({colors:w})},M=ee.map(w=>({name:w.title,value:w.name,icon:w.getIcon()?e.jsx("img",{src:w.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0,invertInDark:!0})),d=Object.entries(ke).map(([w,R])=>({name:R,value:w})),u=w=>{const R=ee.find(A=>A.name===w)||o;a(R),p(R)},y=w=>{f(w),v(w)},P=()=>{pe({help:null})},j=w=>{const R=oe();return R.set("help",w),w==="math"&&!R.has("type")&&R.set("type",o.name),`#${R.toString()}`},b=[{key:"controls",name:"Exploring the Fractal",href:j("controls"),icon:e.jsx(ot,{})},{key:"math",name:`Math of ${o.title} Fractal`,href:j("math"),icon:e.jsx(at,{})},{key:"about",name:"About",href:j("about"),icon:e.jsx(st,{})}],h=()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),e.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),e.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),e.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),e.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),e.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),e.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),z=()=>e.jsxs("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",className:"h-full w-full","aria-hidden":!0,children:[e.jsx("rect",{x:"0",y:"0",width:"24",height:"24",rx:"4",fill:"white"}),e.jsxs("g",{fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",transform:"translate(12 12) scale(1.35) translate(-12 -12)",children:[e.jsx("path",{d:"M6 12c0-3.314 2.686-6 6-6 2.761 0 5 2.239 5 5 0 2.209-1.791 4-4 4-1.657 0-3-1.343-3-3 0-1.105.895-2 2-2 .552 0 1 .448 1 1"}),e.jsx("path",{d:"M7.5 12c0-2.485 2.015-4.5 4.5-4.5 2.071 0 3.75 1.679 3.75 3.75 0 1.795-1.455 3.25-3.25 3.25-1.316 0-2.375-1.059-2.375-2.375 0-.87.705-1.575 1.575-1.575.434 0 .8.366.8.8",opacity:"0.8"}),e.jsx("path",{d:"M16.5 6.5c1.4 0 2.5 1.1 2.5 2.5 0 1-.5 1.9-1.3 2.3"}),e.jsx("path",{d:"M7.5 17.5c-1.4 0-2.5-1.1-2.5-2.5 0-1 .5-1.9 1.3-2.3"}),e.jsx("path",{d:"M12 4.5c1 0 1.8.8 1.8 1.8 0 .9-.7 1.6-1.6 1.8"}),e.jsx("path",{d:"M12 19.5c-1 0-1.8-.8-1.8-1.8 0-.9.7-1.6 1.6-1.8"})]})]}),$=()=>{if(i==="math"){const w=`## ${o.title} Fractal

${o.math}`;return e.jsx(ue,{remarkPlugins:[fe,me],rehypePlugins:[he],children:w})}if(i==="controls"){const w=Ct({canvasName:"fractal view",parameterName:"complex parameter"}),R=`${wn}

${w}`;return e.jsx(ue,{remarkPlugins:[fe,me],rehypePlugins:[he],children:R})}if(i==="about"){const w=_n;return e.jsx(ue,{remarkPlugins:[fe,me],rehypePlugins:[he],children:w})}return null},D=()=>i==="math"?`Math of ${o.title} Fractal`:i==="controls"?"Exploring the Fractal":i==="about"?"About":"";return e.jsxs(e.Fragment,{children:[e.jsx(_t,{appName:"Fantastic Fractals",appIconUrl:"app-icon.png",help:b,adSenseConfig:zn,renderToolbar:w=>{const x=w<360,_=o.title,C=ke[m]||"Colors";return e.jsx("div",{className:"flex items-center gap-3 min-w-0",children:x?e.jsxs(e.Fragment,{children:[e.jsx(Z,{options:M,selected:_,onChange:k=>u(k),icon:e.jsx("div",{className:"h-8 w-8",children:e.jsx(z,{})}),showIconOnly:!0}),e.jsx(Z,{options:d,selected:C,onChange:k=>y(k),icon:e.jsx("div",{className:"h-8 w-8",children:e.jsx(h,{})}),showIconOnly:!0})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:180},children:e.jsx(Z,{options:M,selected:_,onChange:k=>u(k),icon:e.jsx(z,{})})}),e.jsx("div",{style:{width:160},children:e.jsx(Z,{options:d,selected:C,onChange:k=>y(k),icon:e.jsx(h,{})})})]})})},children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(bn,{fractal:o,colorScheme:m},o.name+"|"+m)})}),e.jsx(zt,{isOpen:i!==null,onClose:P,title:D(),size:"xl",children:e.jsx("div",{className:L("prose dark:prose-invert max-w-none",r==="dark"?"dark":""),children:$()})})]})}function jn(){return e.jsx(ht,{children:e.jsx(vt,{children:e.jsx($n,{})})})}it.createRoot(document.getElementById("root")).render(e.jsx(Ne.StrictMode,{children:e.jsx(jn,{})}));
