import{r as l,j as e,d as Ne,i as He,P as Be,e as L,z as Re,E as qe,g as Ge,f as Ve,h as Xe,k as We,l as Ye,m as Je,n as Ke,o as Ze,L as Qe,p as $e,q as et,t as tt,v as nt,w as ot,x as rt,y as at,A as st,M as he,B as ue,C as fe,D as me,G as it}from"./other-DeAWH2A7.js";import{C as lt,u as Ae,V as ie,S as ct,B as dt,a as ht}from"./three-BhzMe45D.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Se=l.createContext(void 0),ut=({children:r})=>{const[n,t]=l.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});l.useEffect(()=>{const a=window.document.documentElement;n==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[n]);const s=()=>{t(a=>a==="light"?"dark":"light")},o=l.useMemo(()=>({theme:n,toggleTheme:s}),[n]);return e.jsx(Se.Provider,{value:o,children:r})},ne=()=>{const r=l.useContext(Se);if(r===void 0)throw new Error("useTheme must be used within a ThemeProvider");return r},ye=r=>{if(r.startsWith("#")||r.startsWith("/"))return!1;try{return new URL(r,window.location.origin).hostname!==window.location.hostname}catch{return!1}},te=()=>new URLSearchParams(window.location.hash.substring(1)),pe=(r,n=!1)=>{const t=te();Object.entries(r).forEach(([o,a])=>{a==null?t.delete(o):t.set(o,a)});const s=t.toString();if(window.location.hash.substring(1)!==s){const o=window.location.href,a=`${window.location.pathname}${window.location.search}`,f=s?`${a}#${s}`:a;n?window.history.pushState(null,"",f):window.history.replaceState(null,"",f);try{const h=new HashChangeEvent("hashchange",{oldURL:o,newURL:f});window.dispatchEvent(h)}catch{window.dispatchEvent(new Event("hashchange"))}}},ft=()=>typeof window<"u"&&!!window?.__TAURI__,mt=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),pt=()=>{if(typeof navigator>"u")return!1;const r=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(r))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},gt=()=>ft()&&mt(),xt=pt()?"xl":"md",ge={sm:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs"},md:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm"},lg:{button:"px-4 py-2 text-base",item:"px-4 py-2 text-base"},xl:{button:"px-6 py-2.5 text-lg",item:"px-5 py-3 text-lg"}},Z=({label:r,options:n,selected:t,onChange:s,theme:o,size:a=xt,align:f="left",icon:h,showIconOnly:i,trigger:c,buttonClassName:g})=>{const y=l.useRef(null),[z,u]=l.useState({}),m=ne?.(),v=o??m?.theme??"light",C=()=>{if(y.current){const b=y.current.getBoundingClientRect(),F={top:`${b.bottom+4}px`,minWidth:`${b.width}px`};f==="left"?F.left=`${b.left}px`:F.right=`${window.innerWidth-b.right}px`,u(F)}},$=a==="sm"?"h-4 w-4":a==="md"||a==="lg"?"h-5 w-5":"h-6 w-6",d=n?.find(b=>b?.name===t)?.icon??h,T=(()=>{if(i&&h&&Ne.isValidElement(h)){const b=h.props?.className;if(b&&(b.includes("h-")||b.includes("w-")))return b}return $})();return e.jsxs(He,{as:"div",className:"relative",children:[e.jsx(Be,{ref:y,onClick:C,className:L(c?g:i?["p-2 rounded-full focus:outline-none",v==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",ge[a].button,v==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:c||(i?e.jsx("span",{className:L(T,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:d}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"flex items-center truncate",children:[d&&e.jsx("span",{className:L($,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:d}),r&&`${r}: `,e.jsx("strong",{children:t})]}),e.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}))}),e.jsx(Re,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(qe,{style:z,className:L("fixed z-50 mt-1 w-auto rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",{"origin-top-left":f==="left","origin-top-right":f==="right"},v==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:e.jsx("div",{className:"py-1",children:n.map((b,F)=>{const w=b.key??b.value??b.name??F,N=!!b.href,E=b.href?ye(b.href):!1;return e.jsx(Ge,{children:({focus:q})=>N?e.jsxs("a",{href:b.href,target:E?"_blank":"_self",rel:"noopener noreferrer",className:L("flex items-center justify-between w-full whitespace-nowrap",ge[a].item,q?v==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":v==="dark"?"text-gray-300":"text-gray-700"),children:[e.jsxs("div",{className:"flex items-center",children:[b.icon&&e.jsx("span",{className:"mr-3 h-5 w-5",children:b.icon}),b.name]}),E&&e.jsx(Ve,{className:"h-4 w-4"})]}):e.jsx("button",{onClick:()=>s&&s(b.value),className:L("w-full text-left block whitespace-nowrap",ge[a].item,q?v==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":v==="dark"?"text-gray-300":"text-gray-700"),children:e.jsxs("div",{className:"flex items-center",children:[b.icon&&e.jsx("span",{className:"mr-3 h-5 w-5",children:b.icon}),b.name]})})},w)})})})})]})},yt=({client:r,slot:n,style:t={display:"block"},format:s="auto",responsive:o="true"})=>(l.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),e.jsx("ins",{className:"adsbygoogle",style:t,"data-ad-client":r,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":o})),Ie=l.createContext(void 0),vt=({children:r,defaultLanguage:n="en",storageKey:t="language"})=>{const[s,o]=l.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem(t);if(i==="en"||i==="zh")return i;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return n});l.useEffect(()=>{typeof window<"u"&&localStorage.setItem(t,s)},[s,t]);const a=i=>o(i),f=()=>o(i=>i==="en"?"zh":"en"),h=l.useMemo(()=>({language:s,setLanguage:a,toggleLanguage:f}),[s]);return e.jsx(Ie.Provider,{value:h,children:r})},bt=()=>{const r=l.useContext(Ie);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r},wt=({appName:r,help:n,config:t,showUserProfile:s,renderToolbar:o,showLanguage:a,language:f,onLanguageChange:h,appIconUrl:i,showTitle:c=!0,toolbarWidthPx:g=0})=>{const{theme:y,toggleTheme:z}=ne(),{setLanguage:u}=bt(),m=()=>{if(!n)return null;const d=e.jsx(Ke,{className:"h-8 w-8"});if(typeof n=="string")return e.jsx("a",{href:n,target:ye(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:d});if(Array.isArray(n)&&n.length>0){const T=n.map(b=>({name:b.name,href:b.href,icon:b.icon}));return e.jsx(Z,{options:T,align:"right",icon:d,showIconOnly:!0})}return null},v=()=>{if(!t)return null;const d=e.jsx(Ze,{className:"h-8 w-8"});if(typeof t=="string")return e.jsx("a",{href:t,target:ye(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:d});if(Array.isArray(t)&&t.length>0){const T=t.map(b=>({name:b.name,href:b.href,icon:b.icon}));return e.jsx(Z,{options:T,align:"right",icon:d,showIconOnly:!0})}return null},C=d=>{h?.(d);try{u(d)}catch{}},$=typeof window<"u"&&te().get("applink")||void 0,j=()=>a?e.jsx(Z,{options:[{name:"English",value:"en"},{name:"中文",value:"zh"}],align:"right",icon:e.jsx(Je,{className:"h-8 w-8"}),showIconOnly:!0,onChange:d=>C(d)}):null;return e.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex items-center border-b border-gray-200 dark:border-gray-700 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[i&&($?e.jsx("a",{href:$,className:"inline-block",title:$,children:e.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded cursor-pointer hover:opacity-90"})}):e.jsx("img",{src:i,alt:"App icon",className:"h-12 w-12 rounded"})),c&&e.jsx("h1",{className:"text-xl font-bold truncate",children:r})]}),e.jsx("div",{className:"flex-1 min-w-0",children:typeof o=="function"?o(g):null}),e.jsxs("nav",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:z,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:y==="light"?e.jsx(Xe,{className:"h-8 w-8"}):e.jsx(We,{className:"h-8 w-8"})}),j(),m(),v(),s&&e.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(Ye,{className:"h-8 w-8"})})]})]})},_t=({children:r,adSenseConfig:n,...t})=>{const[s,o]=l.useState(!0),[a,f]=l.useState("medium"),[h,i]=l.useState(typeof window<"u"?window.innerWidth:0),[c,g]=l.useState(typeof window<"u"?window.visualViewport?.height??window.innerHeight:0),y=n?.client&&n?.slot,z=!!t.renderToolbar,u=gt();l.useEffect(()=>{const T=()=>{const w=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${w}px`)},b=()=>{o(z||(window.visualViewport?.height??window.innerHeight)>=600);const w=window.innerWidth,N=window.visualViewport?.height??window.innerHeight;i(w),g(N);const E=w<640,q=w>=1280;f(E?"narrow":q?"wide":"medium"),T()};b();const F=window.visualViewport??window;return F.addEventListener("resize",b),()=>{F.removeEventListener("resize",b)}},[]);const m=y?n?.height??90:0,v=y?n?.width??300:0,C=y&&a==="wide",$=a==="narrow"?!1:a==="wide"?!0:!z,j=()=>{const T=h,b=32,F=12,w=48,N=8,E=t.appIconUrl?32:0,q=220;let p=0;p+=1,t.showLanguage&&(p+=1);const x=t.help;(typeof x=="string"||Array.isArray(x)&&x.length>0)&&(p+=1);const _=t.config;(typeof _=="string"||Array.isArray(_)&&_.length>0)&&(p+=1),t.showUserProfile&&(p+=1);const k=p>0?p*w+(p-1)*N:0,P=$&&E>0?8:0,R=$?q:0,M=E+P+R,A=z?2*F:F,I=T-b-M-k-A;return Math.max(0,I)},d=e.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:u?{paddingTop:16,paddingBottom:12}:void 0,children:[s&&e.jsx(wt,{...t,showTitle:$,toolbarWidthPx:z?j():0}),e.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:r})]});return y?e.jsxs("div",{className:"flex items-stretch flex-"+(C?"row":"col"),children:[e.jsx("div",{style:C?{width:`${Math.max(0,h-v)}px`,height:`${c}px`}:{width:`${h}px`,height:`${Math.max(0,c-m)}px`},children:d}),e.jsx("div",{style:C?{width:`${v}px`,height:`${c}px`}:{width:`${h}px`,height:`${m}px`},children:e.jsx(yt,{client:n.client,slot:n.slot})})]}):e.jsx("div",{style:{width:`${h}px`,height:`${c}px`},children:d})},$t=({isOpen:r,onClose:n,title:t,children:s,size:o="lg"})=>{const{theme:a}=ne(),f=h=>{switch(h){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return e.jsx(Re,{appear:!0,show:r,as:l.Fragment,children:e.jsxs(Qe,{as:"div",className:L("relative z-50",a),onClose:n,children:[e.jsx($e,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:e.jsx($e,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(et,{className:L(f(o),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-y-hidden"),children:[e.jsx(tt,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:t}),e.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(nt,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),e.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},zt=({label:r,min:n,max:t,value:s,onChange:o,theme:a,valueLabel:f=c=>Math.round(c),posToVal:h=c=>n+(t-n)*c,valToPos:i=c=>(c-n)/(t-n)})=>{const c=l.useRef(null),g=l.useCallback($=>{if(c.current){const j=c.current.getBoundingClientRect(),d=Math.max(0,Math.min(1,($-j.left)/j.width));o(h(d))}},[o,h]),y=$=>{$.preventDefault(),g($.clientX);const j=T=>{g(T.clientX)},d=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",d)},z=$=>{$.preventDefault(),$.touches.length>0&&g($.touches[0].clientX);const j=T=>{T.touches.length>0&&g(T.touches[0].clientX)},d=()=>{document.removeEventListener("touchmove",j),document.removeEventListener("touchend",d)};document.addEventListener("touchmove",j),document.addEventListener("touchend",d)},u=i(s),m=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",v=u>.5,C=u>.25&&u<.5||u>.75;return e.jsx("div",{className:"w-full px-3",children:e.jsxs("div",{ref:c,onMouseDown:y,onTouchStart:z,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[e.jsx("div",{className:L("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),e.jsx("div",{className:L("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${u*100}%`}}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r&&e.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":v?"text-white":"text-gray-800"),style:{...v?{left:"10px"}:{right:"10px"},textShadow:v?m:"none"},children:r}),e.jsx("span",{className:L("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":C?"text-white":"text-gray-800"),style:{...C?{right:`calc(${100-u*100}% + 14px)`}:{left:`calc(${u*100}% + 14px)`},textShadow:C?m:"none"},children:f(s)})]}),e.jsx("div",{className:L("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${u*100}% - 12px)`}})]})})},jt=36,ze=1e3,Tt=10,Q=(r,n,t,s,o,a,f)=>{if(t.length===0)return null;let h=null;const[i,c]=[s[0]-o/2,s[1]+a/2];for(let g=0;g<t.length;g++){const y=t[g],z=(y[0]-i)/o*f.width,u=(c-y[1])/a*f.height,m=Math.sqrt(Math.pow(r-z,2)+Math.pow(n-u,2));(h===null||m<h.distance)&&(h={index:g,distance:m})}return h&&h.distance<jt?h:null},Mt=({zoom:r,setZoom:n,center:t,setCenter:s,viewWidth:o,viewHeight:a,aspect:f,baseViewSize:h=4,onShowInfo:i,controlPoints:c=[],initialControlPoints:g=[],onControlPointsChange:y,minControlPoints:z,maxControlPoints:u})=>{const[m,v]=l.useState(null),C=l.useRef(m);C.current=m;const[$,j]=l.useState(!1),d=l.useRef(null),T=l.useRef(null),b=l.useCallback(()=>{n(1),s([0,0])},[n,s]),F=l.useCallback(()=>{const p=C.current;if(!(!y||!p)){if(p.type==="point"){if(z===void 0||c.length<=z)return;const x=c.filter((_,k)=>k!==p.index);y(x)}else{if(u===void 0||c.length>=u)return;const x=[...c,p.coords];y(x)}v(null)}},[c,u,z,y]),w=l.useCallback((p,x,_)=>{const k=p-_.left,P=x-_.top,R=Q(k,P,c,t,o,a,_);if(R)v({type:"point",index:R.index,flashing:!0});else{const M=t[0]-o/2+k/_.width*o,A=t[1]+a/2-P/_.height*a;v({type:"space",coords:[M,A],flashing:!0})}d.current=window.setTimeout(()=>{F(),d.current=null},ze)},[t,c,F,a,o]),N=ot({onPointerDown:({event:p})=>{p.preventDefault();const x=p.target.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:k}=p,P=_-x.left,R=k-x.top,M=Q(P,R,c,t,o,a,x);M?(j(!0),v({type:"point",index:M.index,flashing:!1})):v(null),i&&(T.current={x:_,y:k},d.current=window.setTimeout(()=>{w(_,k,x)},ze))},onPointerUp:({event:p})=>{j(!1);const x=p.target.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:k}=p,P=_-x.left,R=k-x.top,M=Q(P,R,c,t,o,a,x);v(M?{type:"point",index:M.index,flashing:!1}:null),d.current&&(clearTimeout(d.current),d.current=null)},onPointerMove:({event:p})=>{if($)return;const x=p.target.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:k}=p;if(d.current&&T.current){const X=_-T.current.x,D=k-T.current.y;Math.sqrt(X*X+D*D)>Tt&&(clearTimeout(d.current),d.current=null,v(null))}const P=_-x.left,R=k-x.top,M=Q(P,R,c,t,o,a,x);if(v(M?{type:"point",index:M.index,flashing:!1}:X=>X?.type==="point"?null:X),!i)return;const A=_-x.left,I=k-x.top,V=t[0]+(A/x.width-.5)*o,G=t[1]+(.5-I/x.height)*a;i([V,G])},onDrag:({event:p,first:x,movement:[_,k],xy:[P,R],memo:M})=>{d.current&&(clearTimeout(d.current),d.current=null,v(I=>I?.type==="point"?{...I,flashing:!1}:null)),p.preventDefault();const A=p.target.getBoundingClientRect();if(A){if(x||!M){const I=P-A.left,V=R-A.top;if(y){const G=Q(I,V,c,t,o,a,A);if(G)return{dragMode:"point",pointIndex:G.index}}return{dragMode:"canvas",startCenter:t}}if(M.dragMode==="point"){if(!y)return M;const I=P-A.left,V=R-A.top,G=t[0]-o/2+I/A.width*o,X=t[1]+a/2-V/A.height*a,D=[...c];return D[M.pointIndex]=[G,X],y(D),M}if(M.dragMode==="canvas"){const{startCenter:I}=M;if(!I)return M;const V=_/A.width*o,G=k/A.height*a;return s([I[0]-V,I[1]+G]),M}}},onPinch:({event:p,first:x,offset:[_]})=>{p.preventDefault(),x&&(d.current&&(clearTimeout(d.current),d.current=null),v(null)),n(_)},onWheel:({event:p,delta:[,x]})=>{if(x===0)return;const _=p.target.getBoundingClientRect();if(!_)return;const k=p.clientX-_.left,P=p.clientY-_.top,R=1.1,M=x<0?r*R:r/R;let A,I;f>=1?(I=h/M,A=I*f):(A=h/M,I=A/f);const V=k/_.width-.5,G=.5-P/_.height,X=t[0]+V*(o-A),D=t[1]+G*(a-I);n(M),s([X,D])},onDoubleClick:({event:p})=>{p.preventDefault();const x=p.target.getBoundingClientRect();if(!x)return;const _=p.clientX-x.left,k=p.clientY-x.top;if(y){const P=Q(_,k,c,t,o,a,x);if(P&&g&&g[P.index]){const R=[...c];R[P.index]=g[P.index],y(R);return}}b()},onClick:({event:p})=>{if(!i)return;const x=p.currentTarget.getBoundingClientRect();if(!x)return;const{clientX:_,clientY:k}=p,P=_-x.left,R=k-x.top,M=t[0]+(P/x.width-.5)*o,A=t[1]+(.5-R/x.height)*a;i([M,A])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[r,0]}}),E={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...N(),onContextMenu:p=>p.preventDefault(),style:E},highlightedPoint:m}};function Ct({canvasName:r="canvas",parameterName:n="control point"}={}){return`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${r} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${r} to reset
  the pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${n}. If not visible, hover over or single-click the ${r}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${n}:** Click and drag a control point to move it.
- **Add ${n}:** Long-press on an empty area to add a new ${n}.
- **Remove ${n}:** Long-press on an existing ${n} to remove it.
- **Reset ${n}:** Double-click a ${n} to reset its position.

### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${r} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${r} to reset the
  pan and zoom to their original values.

Some visualizations may feature control points, each representing a
${n}. If not visible, tap anywhere on the ${r} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${n}:** Drag a control point to move it.
- **Add ${n}:** Long-press on an empty area to add a new ${n}.
- **Remove ${n}:** Long-press on an existing ${n} to remove it.
- **Reset ${n}:** Double-tap a ${n} to reset its position.`}const je=5e3,kt=500,Te=25,Pt=({setAspect:r})=>{const{size:n}=Ae();return l.useEffect(()=>{r(n.width>0&&n.height>0?n.width/n.height:1)},[n,r]),null},Nt=({xRange:r,yRange:n,theme:t,worldToScreen:s,center:o,gridTooDense:a})=>{const f=l.useMemo(()=>{const i=[],[c,g]=r,[y,z]=n,u=t==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",m="0.8)",v="0.5)";for(let C=Math.ceil(c);C<=Math.floor(g);C++){const $=s([C,y]);if(!$)continue;const j=C===0;a&&!j||i.push(e.jsx("div",{className:"absolute",style:{left:$[0],top:0,width:1,height:"100%",backgroundColor:u+(j?m:v),transform:j?"translateX(-50%)":void 0}},`v-${C}`))}for(let C=Math.ceil(y);C<=Math.floor(z);C++){const $=s([c,C]);if(!$)continue;const j=C===0;a&&!j||i.push(e.jsx("div",{className:"absolute",style:{left:0,top:$[1],width:"100%",height:1,backgroundColor:u+(j?m:v),transform:j?"translateY(-50%)":void 0}},`h-${C}`))}return i},[r,n,t,s,a]),h=l.useMemo(()=>{const{pos:i}=ve([0,0],o,r,n),c=s(i);if(!c)return null;const g=t==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return e.jsx("div",{className:"absolute",style:{left:c[0],top:c[1],width:12,height:12,borderRadius:"50%",backgroundColor:g,transform:"translate(-50%, -50%)"}})},[o,r,n,t,s]);return e.jsxs(e.Fragment,{children:[f,h]})},re={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},Rt=r=>{if(typeof r=="number"){const n=Object.keys(re);return re[n[r%n.length]||"default"]}return typeof r=="string"&&re[r]?re[r]:re.default};function ve(r,n,t,s){const[o,a]=r,[f,h]=t,[i,c]=s;if(o>=f&&o<=h&&a>=i&&a<=c)return{pos:r,clipped:!1};const[g,y]=n,z=o-g,u=a-y;let m=1/0;const v=1e-9;if(Math.abs(z)>v){const j=(f-g)/z,d=(h-g)/z;if(j>0){const T=y+j*u;T>=i&&T<=c&&(m=Math.min(m,j))}if(d>0){const T=y+d*u;T>=i&&T<=c&&(m=Math.min(m,d))}}if(Math.abs(u)>v){const j=(i-y)/u,d=(c-y)/u;if(j>0){const T=g+j*z;T>=f&&T<=h&&(m=Math.min(m,j))}if(d>0){const T=g+d*z;T>=f&&T<=h&&(m=Math.min(m,d))}}if(m!==1/0&&m>0)return{pos:[g+m*z,y+m*u],clipped:!0};const C=Math.max(f,Math.min(h,o)),$=Math.max(i,Math.min(c,a));return{pos:[C,$],clipped:!0}}const At=({children:r,initialZoom:n=1,initialCenter:t=[0,0],baseViewSize:s=4,onInfoOverlay:o,onViewChange:a,className:f,gl:h,controlPoints:i=[],initialControlPoints:c=[],onControlPointsChange:g,controlPointGroups:y=[],minControlPoints:z,maxControlPoints:u,showGrid:m=!0,frameloop:v="always"})=>{const{theme:C}=ne(),[$,j]=l.useState(n),[d,T]=l.useState(t),[b,F]=l.useState(1),[w,N]=l.useState(!1),[E,q]=l.useState(null),[p,x]=l.useState(0),_=l.useRef(null),k=l.useRef(null),P=l.useRef(null),[R,M]=l.useMemo(()=>{let S,O;return b>=1?(O=s/$,S=O*b):(S=s/$,O=S/b),[S,O]},[$,b,s]),A=l.useMemo(()=>({center:d,viewWidth:R,viewHeight:M,zoom:$}),[d,R,M,$]);l.useEffect(()=>{a&&a(A)},[A,a]);const I=l.useCallback(()=>{_.current&&clearTimeout(_.current),k.current&&clearTimeout(k.current),_.current=window.setTimeout(()=>{x(0),_.current=null},je),k.current=window.setTimeout(()=>{q(null),k.current=null},je+kt)},[]),V=l.useCallback(S=>{!o&&i.length===0&&!m||(_.current&&clearTimeout(_.current),k.current&&clearTimeout(k.current),S&&q(S),x(1),I())},[o,i.length,m,I]),G=l.useCallback(S=>{I(),g&&g(S)},[g,I]),{controlHandlers:X,highlightedPoint:D}=Mt({zoom:$,setZoom:j,center:d,setCenter:T,viewWidth:R,viewHeight:M,aspect:b,baseViewSize:s,onShowInfo:V,controlPoints:i,initialControlPoints:c,onControlPointsChange:p>0?G:void 0,minControlPoints:z,maxControlPoints:u}),{style:Le,...Fe}=X,[J,K]=l.useMemo(()=>{const S=[d[0]-R/2,d[0]+R/2],O=[d[1]-M/2,d[1]+M/2];return[S,O]},[d,R,M]);l.useEffect(()=>()=>{_.current&&clearTimeout(_.current),k.current&&clearTimeout(k.current)},[]);const oe=l.useCallback(S=>{if(!P.current)return null;const{width:O,height:H}=P.current.getBoundingClientRect(),[U,B]=J,[W,Y]=K,de=(S[0]-U)/R*O,se=(Y-S[1])/M*H;return[de,se]},[J,K,R,M]),Oe=l.useMemo(()=>{if(!m)return null;let S=!1;if(P.current){const{width:O,height:H}=P.current.getBoundingClientRect(),U=O/R,B=H/M;(U<Te||B<Te)&&(S=!0)}return e.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:p},children:e.jsx(Nt,{xRange:J,yRange:K,theme:C,worldToScreen:oe,center:d,gridTooDense:S})})},[m,p,J,K,C,oe,R,M,d]),De=l.useMemo(()=>{const S=U=>{const B=U?128:48,W=U?120:44;return{containerStyle:{width:B,height:B},highlightStyle:{width:W,height:W,borderWidth:U?46:8}}},O=i.map((U,B)=>{const{pos:W}=ve(U,d,J,K),Y=oe(W);if(!Y)return null;const de=Rt(y[B]),se=D?.type==="point"&&D.index===B,_e=S(se&&D.flashing);return e.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",..._e.containerStyle},children:[se&&e.jsx("div",{className:D.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",..._e.highlightStyle}}),e.jsx("div",{className:"control-point-animating",style:{...de,gridColumn:1,gridRow:1}})]},B)});let H=null;if(D?.type==="space"){const{pos:U}=ve(D.coords,d,J,K),B=oe(U);if(B){const W=S(D.flashing);H=e.jsx("div",{className:"absolute",style:{left:B[0],top:B[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...W.containerStyle},children:e.jsx("div",{className:D.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...W.highlightStyle}})})}}return O.every(U=>U===null)&&!H?null:e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:p},children:[O,H]})},[i,d,J,K,oe,y,p,D]),Ue=l.useMemo(()=>{if(!E||w||!o)return null;const S=o(E,A);if(!S)return null;const O=typeof S=="string"?{"top-left":S}:S;return Object.keys(O).length===0?null:Object.entries(O).map(([H,U])=>{if(!U)return null;const B=U.trim().split(`
`);return e.jsx("div",{className:L("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":H==="top-left","top-0 right-0 text-right":H==="top-right","bottom-0 left-0":H==="bottom-left","bottom-0 right-0 text-right":H==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":H==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":H==="bottom-center"}),style:{opacity:p},children:e.jsx("div",{className:L("p-1 rounded-md text-xs font-mono space-y-1",C==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:B.map((W,Y)=>e.jsx("div",{children:W},Y))})},H)})},[E,w,o,C,p,A]);return e.jsxs("div",{ref:P,className:L("w-full h-full relative",f),style:Le,...Fe,children:[e.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:e.jsxs(lt,{frameloop:v,gl:h,onCreated:({gl:S})=>{S.domElement.addEventListener("webglcontextlost",O=>{O.preventDefault(),N(!0)},!1)},children:[e.jsx(Pt,{setAspect:F}),r(A)]})}),w&&e.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[e.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),e.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),Oe,Ue,De]})};function le(r,n){const t=r<0?"-":"+",s=Math.abs(r),o=n-1;if(o<=0)return t;if(s===0)return t+"0.0".padEnd(o,"0").substring(0,o);const a=String(Math.trunc(s));if(a.length<=o){const f=o-a.length;if(f>1){let h=f-1,i=s.toFixed(h);if(i.split(".")[0].length>a.length&&(h-=i.split(".")[0].length-a.length,h>=0?i=s.toFixed(h):i=String(Math.round(s))),i.length<=o)return t+i}if(a.length<=o){let h=a;return h.length<o&&(h+=".".repeat(o-h.length)),t+h}}if(o>=3){for(let h=o-4;h>=0;h--){let i=s.toExponential(h).replace("e+","e");if(i.length<=o)return t+i}let f=s.toExponential(0).replace("e+","e");if(f.length<=o)return t+f}if(s>1)return t+".".repeat(o);{const f="0.0000";return f.length<=o?t+f:t+"0.0".padEnd(o,"0").substring(0,o)}}function ce(r,n,t=7,s="i"){const o=le(r,t),a=le(n,t);return`${o}${a}${s}`}function Me(r,n,t=7,s=["(",", ",")"]){const o=le(r,t),a=le(n,t);return`${s[0]}${o}${s[1]}${a}${s[2]}`}function St(r){return"min"in r&&"max"in r}class Ee{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class ae extends Ee{constructor(n,t,s,o,a,f,h){super(),this.name=n,this.title=t,this.description=s,this.math=o,this.shader=a,this.iconUrl=h;let i,c,g;typeof f=="number"?(g=f,i=1,c=2e3):(g=f.initial,i=f.min,c=f.max);const y=u=>{const m=Math.log(i),v=Math.log(c);return Math.exp(m+(v-m)*u)},z=u=>{if(u<=i)return 0;if(u>=c)return 1;const m=Math.log(i),v=Math.log(c);return(Math.log(u)-m)/(v-m)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:g,min:i,max:c,posToVal:y,valToPos:z}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(n){}getInitialControlPoints(){return[]}getCanvasOverlayString(n,t){}getControlPointValues(n){}getControlPointGroups(n){return[]}}class we extends ae{constructor(n,t,s,o,a,f,h,i){super(n,t,s,o,a,f,i),this.controlPointInfo=h}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(n,t){if(n.length>0)return`${this.controlPointInfo.name} = ${ce(...n[0])}`}getControlPointValues(n){if(n.length>0)return[{label:this.controlPointInfo.name,value:ce(...n[0])}]}getControlPointUniforms(n){if(n.length>0)return{[this.controlPointInfo.uniformName]:n[0]}}getControlPointGroups(n){return[0]}}const It=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,Lt=""+new URL("newton-B60RDm46.png",import.meta.url).href,xe=16;function Ft(r){const n=[];for(let t=0;t<r;t++){const s=2*Math.PI*t/r;n.push([Math.cos(s),Math.sin(s)])}return n}class Ot extends Ee{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=It,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Ft(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return Et}getIcon(){return Lt}getCanvasOverlayString(n,t){return`p = ${n.length}`}getControlPointValues(n){return n.map((t,s)=>({label:`Root ${s+1}`,value:ce(...t)}))}getControlPointUniforms(n){if(n.length>0&&n.length<=xe){const t=n.flat(),s=new Array(xe*2).fill(0);return t.forEach((o,a)=>s[a]=o),{num_roots:n.length,roots:s}}}getControlPointGroups(n){return Array(n.length).fill(0)}getControlPointMinMax(){return[2,xe]}}const Dt=""+new URL("mandelbrot-DLtBXckj.png",import.meta.url).href,Ut=`### Mandelbrot set

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
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,Ht=`uniform int iterations;
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
}`,Bt=[0,0],qt=new we("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",Ut,Ht,200,{name:"P",initialValue:Bt,uniformName:"phoenixP"},Dt),Gt=""+new URL("julia-BPDBAcPP.png",import.meta.url).href,Vt=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,Xt=`uniform int iterations;
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
`,Wt=[-.7,.27015],Yt=new we("julia","Julia","Julia sets.",Vt,Xt,200,{name:"C",initialValue:Wt,uniformName:"juliaC"},Gt),Jt=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,nn=new ae("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",en,tn,80),on=`This is another type of magnet fractal. The iteration is defined by:
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
`,rn=`uniform int iterations;
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
`,an=new ae("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",on,rn,80),sn=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,hn=`uniform int iterations;

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
`,un=new ae("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",dn,hn,200),fn=[new Ot,qt,Yt,Qt,nn,an,cn,un];function Ce(r,n,t,s){return`vec3(${r}) + vec3(${n}) * cos(6.28318 * (vec3(${t}) * t + vec3(${s})))`}const be={grayscale:"vec3(t)",cosmic:Ce("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:Ce("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function mn(r){return be[r]||be.grayscale}const ke=Object.fromEntries(Object.keys(be).map(r=>[r,r.charAt(0).toUpperCase()+r.slice(1)])),Pe="cosmic",pn=`
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
`;function xn(r,n,t){if(Array.isArray(t))if(t.length===2)r[n]={value:new ie(t[0],t[1])};else if(t.length===3)r[n]={value:new ht(t[0],t[1],t[2])};else if(t.length>=4&&t.length%2===0){const s=[];for(let o=0;o<t.length;o+=2)s.push(new ie(t[o],t[o+1]));r[n]={value:s}}else r[n]={value:t};else r[n]={value:t}}function yn(r,n,t){if(r.uniforms[n])if(Array.isArray(t))if(t.length===2)r.uniforms[n].value.fromArray(t);else if(t.length===3)r.uniforms[n].value.fromArray(t);else if(t.length>=4&&t.length%2===0){const s=[];for(let o=0;o<t.length;o+=2)s.push(new ie(t[o],t[o+1]));r.uniforms[n].value=s}else r.uniforms[n].value=t;else r.uniforms[n].value=t}const vn=({fractal:r,center:n,viewWidth:t,viewHeight:s,parameters:o,controlPoints:a,colorScheme:f})=>{const h=Ae(g=>g.invalidate),i=l.useMemo(()=>{const g={FRACTAL_SHADER:r.getShaderCode(),EVALUATE_COLOR:mn(f)},y={center:{value:new ie(...n)},viewWidth:{value:t},viewHeight:{value:s}};r.getGuiParameters().forEach(u=>{y[u.name]={value:o[u.name]}});const z=r.getControlPointUniforms(a);if(z)for(const[u,m]of Object.entries(z))xn(y,u,m);return new ct({uniforms:y,vertexShader:pn,fragmentShader:gn.replace(/%(\w+)%/g,(u,m)=>String(g[m]))})},[r,f]);l.useEffect(()=>{i.uniforms.center.value.fromArray(n),i.uniforms.viewWidth.value=t,i.uniforms.viewHeight.value=s,r.getGuiParameters().forEach(y=>{i.uniforms[y.name].value=o[y.name]});const g=r.getControlPointUniforms(a);if(g)for(const[y,z]of Object.entries(g))yn(i,y,z);h()},[i,n,t,s,o,a,h,r]);const c=l.useMemo(()=>{const g=new dt;return g.setDrawRange(0,3),g},[]);return e.jsx("mesh",{material:i,geometry:c})},bn=({fractal:r,colorScheme:n})=>{const{theme:t}=ne(),[s,o]=l.useState(r.getInitialGuiParameters()),[a,f]=l.useState(r.getInitialControlPoints());l.useEffect(()=>{o(r.getInitialGuiParameters()),f(r.getInitialControlPoints()),i(u=>u+1)},[r]);const[h,i]=l.useState(0),c=r.getGuiParameters().map(u=>St(u)?e.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:e.jsx(zt,{label:u.displayName,min:u.min,max:u.max,value:s[u.name],onChange:m=>o(v=>({...v,[u.name]:m})),theme:t,posToVal:u.posToVal,valToPos:u.valToPos})},u.name):null),g=r.getControlPointValues(a),[y,z]=r.getControlPointMinMax();return e.jsxs("div",{className:L("w-full h-full flex flex-col landscape:flex-row overflow-hidden",t==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[e.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[e.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c,g&&g.length>0&&e.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:t==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:g.map(u=>e.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[e.jsx("p",{className:L("text-sm font-medium",t==="dark"?"text-gray-300":"text-gray-700"),children:u.label}),e.jsx("p",{className:L("text-base font-mono",t==="dark"?"text-gray-200":"text-gray-800"),children:u.value})]},u.label))})]})]}),e.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:e.jsx(At,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(u,m)=>{const v=["[",", ","]"],C=Me(m.center[0]-m.viewWidth/2,m.center[0]+m.viewWidth/2,7,v),$=Me(m.center[1]-m.viewHeight/2,m.center[1]+m.viewHeight/2,7,v),j={"top-left":ce(...u),"top-right":`Re: ${C}
Im: ${$}`},d=r.getCanvasOverlayString(a,s),T=r.title;return j["bottom-center"]=d?`${T} | ${d}`:T,j},controlPoints:a,initialControlPoints:r.getInitialControlPoints(),onControlPointsChange:f,controlPointGroups:r.getControlPointGroups(a),minControlPoints:y,maxControlPoints:z,gl:{powerPreference:"default",antialias:!1},children:({center:u,viewWidth:m,viewHeight:v})=>e.jsx(vn,{fractal:r,center:u,viewWidth:m,viewHeight:v,parameters:s,controlPoints:a,colorScheme:n})},h)})]})},wn=`This application allows you to explore the intricate beauty of various fractals.
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
`;var $n={client:"ca-pub-5400548434612970",slot:"5745481735"};const ee=fn;function zn(){const{theme:r}=ne(),n=l.useCallback(()=>{const w=["newton","mandelbrot","julia"],N=ee.filter(E=>w.includes(E.name));return N.length>0?N[Math.floor(Math.random()*N.length)]:ee[0]},[]),t=l.useRef(null);t.current===null&&(t.current=n());const s=l.useCallback(()=>{const N=te().get("type");return ee.find(E=>E.name===N)||t.current},[t]),[o,a]=l.useState(s),[f,h]=l.useState(()=>te().get("colors")||Pe),[i,c]=l.useState(null);l.useEffect(()=>{const w=()=>{const N=te(),E=N.get("type"),q=N.get("colors"),p=N.get("help"),x=ee.find(_=>_.name===E)||t.current;a(x),h(q||Pe),c(p==="math"?"math":p==="controls"?"controls":p==="about"?"about":null)};return window.addEventListener("hashchange",w),w(),()=>window.removeEventListener("hashchange",w)},[]);const g=w=>{pe({type:w.name})},y=w=>{pe({colors:w})},z=ee.map(w=>({name:w.title,value:w.name,icon:w.getIcon()?e.jsx("img",{src:w.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0,invertInDark:!0})),u=Object.entries(ke).map(([w,N])=>({name:N,value:w})),m=w=>{const N=ee.find(E=>E.name===w)||o;a(N),g(N)},v=w=>{h(w),y(w)},C=()=>{pe({help:null})},$=w=>{const N=te();return N.set("help",w),w==="math"&&!N.has("type")&&N.set("type",o.name),`#${N.toString()}`},j=[{key:"controls",name:"Exploring the Fractal",href:$("controls"),icon:e.jsx(rt,{})},{key:"math",name:`Math of ${o.title} Fractal`,href:$("math"),icon:e.jsx(at,{})},{key:"about",name:"About",href:$("about"),icon:e.jsx(st,{})}],d=()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),e.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),e.jsx("stop",{offset:"100%",stopColor:"#06b6d4"})]})]}),e.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),e.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),e.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),e.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),T=()=>e.jsxs("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",className:"h-full w-full","aria-hidden":!0,children:[e.jsx("rect",{x:"0",y:"0",width:"24",height:"24",rx:"4",fill:"white"}),e.jsxs("g",{fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",transform:"translate(12 12) scale(1.35) translate(-12 -12)",children:[e.jsx("path",{d:"M6 12c0-3.314 2.686-6 6-6 2.761 0 5 2.239 5 5 0 2.209-1.791 4-4 4-1.657 0-3-1.343-3-3 0-1.105.895-2 2-2 .552 0 1 .448 1 1"}),e.jsx("path",{d:"M7.5 12c0-2.485 2.015-4.5 4.5-4.5 2.071 0 3.75 1.679 3.75 3.75 0 1.795-1.455 3.25-3.25 3.25-1.316 0-2.375-1.059-2.375-2.375 0-.87.705-1.575 1.575-1.575.434 0 .8.366.8.8",opacity:"0.8"}),e.jsx("path",{d:"M16.5 6.5c1.4 0 2.5 1.1 2.5 2.5 0 1-.5 1.9-1.3 2.3"}),e.jsx("path",{d:"M7.5 17.5c-1.4 0-2.5-1.1-2.5-2.5 0-1 .5-1.9 1.3-2.3"}),e.jsx("path",{d:"M12 4.5c1 0 1.8.8 1.8 1.8 0 .9-.7 1.6-1.6 1.8"}),e.jsx("path",{d:"M12 19.5c-1 0-1.8-.8-1.8-1.8 0-.9.7-1.6 1.6-1.8"})]})]}),b=()=>{if(i==="math"){const w=`## ${o.title} Fractal

${o.math}`;return e.jsx(he,{remarkPlugins:[fe,me],rehypePlugins:[ue],children:w})}if(i==="controls"){const w=Ct({canvasName:"fractal view",parameterName:"complex parameter"}),N=`${wn}

${w}`;return e.jsx(he,{remarkPlugins:[fe,me],rehypePlugins:[ue],children:N})}if(i==="about"){const w=_n;return e.jsx(he,{remarkPlugins:[fe,me],rehypePlugins:[ue],children:w})}return null},F=()=>i==="math"?`Math of ${o.title} Fractal`:i==="controls"?"Exploring the Fractal":i==="about"?"About":"";return e.jsxs(e.Fragment,{children:[e.jsx(_t,{appName:"Fantastic Fractals",appIconUrl:"app-icon.png",help:j,adSenseConfig:$n,renderToolbar:w=>{const x=w<360,_=o.title,k=ke[f]||"Colors";return e.jsx("div",{className:"flex items-center gap-3 min-w-0",children:x?e.jsxs(e.Fragment,{children:[e.jsx(Z,{options:z,selected:_,onChange:P=>m(P),icon:e.jsx("div",{className:"h-8 w-8",children:e.jsx(T,{})}),showIconOnly:!0}),e.jsx(Z,{options:u,selected:k,onChange:P=>v(P),icon:e.jsx("div",{className:"h-8 w-8",children:e.jsx(d,{})}),showIconOnly:!0})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:180},children:e.jsx(Z,{options:z,selected:_,onChange:P=>m(P),icon:e.jsx(T,{})})}),e.jsx("div",{style:{width:160},children:e.jsx(Z,{options:u,selected:k,onChange:P=>v(P),icon:e.jsx(d,{})})})]})})},children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(bn,{fractal:o,colorScheme:f},o.name+"|"+f)})}),e.jsx($t,{isOpen:i!==null,onClose:C,title:F(),size:"xl",children:e.jsx("div",{className:L("prose dark:prose-invert max-w-none",r==="dark"?"dark":""),children:b()})})]})}function jn(){return e.jsx(ut,{children:e.jsx(vt,{children:e.jsx(zn,{})})})}it.createRoot(document.getElementById("root")).render(e.jsx(Ne.StrictMode,{children:e.jsx(jn,{})}));
