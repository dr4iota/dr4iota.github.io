import{r as c,j as r,i as ke,P as Ce,d as A,z as me,E as Ne,g as Se,e as Ue,f as He,h as Xe,k as Ge,l as Ve,m as Ye,L as Be,n as xe,q as Je,o as We,p as Ke,t as Ze,v as Qe,w as et,M as ye,x as ve,y as be,A as we,B as tt,C as nt}from"./other-p-I2a2oX.js";import{C as rt,u as Re,V as oe,S as ot,B as at,a as st}from"./three-Cv4E1IyV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const ze=({label:o,options:e,selected:n,onChange:s,theme:t})=>{const a=c.useRef(null),[u,d]=c.useState({}),i=()=>{if(a.current){const l=a.current.getBoundingClientRect();d({top:`${l.bottom+4}px`,left:`${l.left}px`,width:`${l.width}px`})}};return r.jsxs(ke,{as:"div",className:"relative",children:[r.jsxs(Ce,{ref:a,onClick:i,className:A("flex justify-between items-center w-full rounded-md border shadow-sm px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",t==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"),children:[r.jsxs("span",{children:[o&&`${o}: `,r.jsx("strong",{children:n})]}),r.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}),r.jsx(me,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:r.jsx(Ne,{style:u,className:A("fixed z-50 mt-1 rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",t==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:r.jsx("div",{className:"py-1",children:e.map(l=>r.jsx(Se,{children:({focus:h})=>r.jsx("button",{onClick:()=>s(l.value),className:A("w-full text-left block px-4 py-2 text-base",h?t==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":t==="dark"?"text-gray-300":"text-gray-700"),children:l.name})},l.value))})})})]})},it=({client:o,slot:e,style:n={display:"block"},format:s="auto",responsive:t="true"})=>(c.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),r.jsx("ins",{className:"adsbygoogle",style:n,"data-ad-client":o,"data-ad-slot":e,"data-ad-format":s,"data-full-width-responsive":t})),Ie=c.createContext(void 0),lt=({children:o})=>{const[e,n]=c.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});c.useEffect(()=>{const a=window.document.documentElement;e==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[e]);const s=()=>{n(a=>a==="light"?"dark":"light")},t=c.useMemo(()=>({theme:e,toggleTheme:s}),[e]);return r.jsx(Ie.Provider,{value:t,children:o})},Z=()=>{const o=c.useContext(Ie);if(o===void 0)throw new Error("useTheme must be used within a ThemeProvider");return o},ue=o=>{if(o.startsWith("#")||o.startsWith("/"))return!1;try{return new URL(o,window.location.origin).hostname!==window.location.hostname}catch{return!1}},$e=({icon:o,options:e})=>{const{theme:n}=Z();return r.jsxs(ke,{as:"div",className:"relative inline-block text-left",children:[r.jsx("div",{children:r.jsx(Ce,{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o})}),r.jsx(me,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:r.jsx(Ne,{className:A("absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",n==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:r.jsx("div",{className:"py-1",children:e.map(s=>{const t=ue(s.href);return r.jsx(Se,{children:({focus:a})=>r.jsxs("a",{href:s.href,target:t?"_blank":"_self",rel:"noopener noreferrer",className:A("flex items-center justify-between px-4 py-2 text-base w-full",a?n==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":n==="dark"?"text-gray-300":"text-gray-700"),children:[r.jsxs("div",{className:"flex items-center",children:[s.icon&&r.jsx("span",{className:"mr-3 h-5 w-5",children:s.icon}),s.name]}),t&&r.jsx(Ue,{className:"h-4 w-4"})]})},s.key)})})})})]})},ct=({appName:o,help:e,config:n,showUserProfile:s})=>{const{theme:t,toggleTheme:a}=Z(),u=()=>{if(!e)return null;const i=r.jsx(Ve,{className:"h-8 w-8"});return typeof e=="string"?r.jsx("a",{href:e,target:ue(e)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:i}):Array.isArray(e)&&e.length>0?r.jsx($e,{icon:i,options:e}):null},d=()=>{if(!n)return null;const i=r.jsx(Ye,{className:"h-8 w-8"});return typeof n=="string"?r.jsx("a",{href:n,target:ue(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:i}):Array.isArray(n)&&n.length>0?r.jsx($e,{icon:i,options:n}):null};return r.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[r.jsx("h1",{className:"text-xl font-bold",children:o}),r.jsxs("nav",{className:"flex items-center space-x-2",children:[r.jsx("button",{onClick:a,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:t==="light"?r.jsx(He,{className:"h-8 w-8"}):r.jsx(Xe,{className:"h-8 w-8"})}),u(),d(),s&&r.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r.jsx(Ge,{className:"h-8 w-8"})})]})]})},dt=({children:o,adSenseConfig:e,...n})=>{const[s,t]=c.useState(!0),[a,u]=c.useState(!1),d=e?.client&&e?.slot;c.useEffect(()=>{const z=()=>{const y=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${y}px`)},g=()=>{t(window.innerHeight>=600),u(window.innerWidth>=1280),z()};return z(),g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]);const i=d?e?.height??90:0,l=d?e?.width??300:0,h=d&&a,m=r.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",children:[s&&r.jsx(ct,{...n}),r.jsx("main",{className:"flex-grow min-h-0 p-0 md:p-2",children:o})]});return d?r.jsxs("div",{className:"flex items-stretch flex-"+(h?"row":"col"),children:[r.jsx("div",{className:h?"h-screen":"w-screen",style:h?{width:`calc(100vw - ${l}px)`}:{height:`calc(100vh - ${i}px)`},children:m}),r.jsx("div",{style:h?{width:`${l}px`}:{height:`${i}px`},children:r.jsx(it,{client:e.client,slot:e.slot})})]}):r.jsx("div",{className:"w-screen h-screen",children:m})},ut=({isOpen:o,onClose:e,title:n,children:s,size:t="lg"})=>{const{theme:a}=Z(),u=d=>{switch(d){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return r.jsx(me,{appear:!0,show:o,as:c.Fragment,children:r.jsxs(Be,{as:"div",className:A("relative z-50",a),onClose:e,children:[r.jsx(xe,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),r.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:r.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:r.jsx(xe,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r.jsxs(Je,{className:A(u(t),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600"),children:[r.jsx(We,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),r.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r.jsx(Ke,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),r.jsx("div",{className:"mt-4 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},ht=({label:o,min:e,max:n,value:s,onChange:t,theme:a,valueLabel:u=l=>Math.round(l),posToVal:d=l=>e+(n-e)*l,valToPos:i=l=>(l-e)/(n-e)})=>{const l=c.useRef(null),h=c.useCallback(P=>{if(l.current){const $=l.current.getBoundingClientRect(),p=Math.max(0,Math.min(1,(P-$.left)/$.width));t(d(p))}},[t,d]),m=P=>{P.preventDefault(),h(P.clientX);const $=N=>{h(N.clientX)},p=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",p)},z=P=>{P.preventDefault(),P.touches.length>0&&h(P.touches[0].clientX);const $=N=>{N.touches.length>0&&h(N.touches[0].clientX)},p=()=>{document.removeEventListener("touchmove",$),document.removeEventListener("touchend",p)};document.addEventListener("touchmove",$),document.addEventListener("touchend",p)},g=i(s),y=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",C=g>.5,v=g>.25&&g<.5||g>.75;return r.jsx("div",{className:"w-full px-3",children:r.jsxs("div",{ref:l,onMouseDown:m,onTouchStart:z,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[r.jsx("div",{className:A("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),r.jsx("div",{className:A("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${g*100}%`}}),r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o&&r.jsx("span",{className:A("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":C?"text-white":"text-gray-800"),style:{...C?{left:"10px"}:{right:"10px"},textShadow:C?y:"none"},children:o}),r.jsx("span",{className:A("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":v?"text-white":"text-gray-800"),style:{...v?{right:`calc(${100-g*100}% + 14px)`}:{left:`calc(${g*100}% + 14px)`},textShadow:v?y:"none"},children:u(s)})]}),r.jsx("div",{className:A("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${g*100}% - 12px)`}})]})})},ft=36,_e=1e3,mt=10,K=(o,e,n,s,t,a,u)=>{if(n.length===0)return null;let d=null;const[i,l]=[s[0]-t/2,s[1]+a/2];for(let h=0;h<n.length;h++){const m=n[h],z=(m[0]-i)/t*u.width,g=(l-m[1])/a*u.height,y=Math.sqrt(Math.pow(o-z,2)+Math.pow(e-g,2));(d===null||y<d.distance)&&(d={index:h,distance:y})}return d&&d.distance<ft?d:null},pt=({zoom:o,setZoom:e,center:n,setCenter:s,viewWidth:t,viewHeight:a,aspect:u,baseViewSize:d=4,onShowInfo:i,controlPoints:l=[],initialControlPoints:h=[],onControlPointsChange:m,minControlPoints:z,maxControlPoints:g})=>{const[y,C]=c.useState(null),v=c.useRef(y);v.current=y;const[P,$]=c.useState(!1),p=c.useRef(null),N=c.useRef(null),x=c.useCallback(()=>{e(1),s([0,0])},[e,s]),S=c.useCallback(()=>{const b=v.current;if(!(!m||!b)){if(b.type==="point"){if(z===void 0||l.length<=z)return;const f=l.filter((_,T)=>T!==b.index);m(f)}else{if(g===void 0||l.length>=g)return;const f=[...l,b.coords];m(f)}C(null)}},[l,g,z,m]),E=c.useCallback((b,f,_)=>{const T=b-_.left,j=f-_.top,R=K(T,j,l,n,t,a,_);if(R)C({type:"point",index:R.index,flashing:!0});else{const w=n[0]-t/2+T/_.width*t,M=n[1]+a/2-j/_.height*a;C({type:"space",coords:[w,M],flashing:!0})}p.current=window.setTimeout(()=>{S(),p.current=null},_e)},[n,l,S,a,t]);return{controlHandlers:{...Ze({onPointerDown:({event:b})=>{const f=b.target.getBoundingClientRect();if(!f)return;const{clientX:_,clientY:T}=b,j=_-f.left,R=T-f.top,w=K(j,R,l,n,t,a,f);w?($(!0),C({type:"point",index:w.index,flashing:!1})):C(null),i&&(N.current={x:_,y:T},p.current=window.setTimeout(()=>{E(_,T,f)},_e))},onPointerUp:({event:b})=>{$(!1);const f=b.target.getBoundingClientRect();if(!f)return;const{clientX:_,clientY:T}=b,j=_-f.left,R=T-f.top,w=K(j,R,l,n,t,a,f);C(w?{type:"point",index:w.index,flashing:!1}:null),p.current&&(clearTimeout(p.current),p.current=null)},onPointerMove:({event:b})=>{if(P)return;const f=b.target.getBoundingClientRect();if(!f)return;const{clientX:_,clientY:T}=b;if(p.current&&N.current){const H=_-N.current.x,G=T-N.current.y;Math.sqrt(H*H+G*G)>mt&&(clearTimeout(p.current),p.current=null,C(null))}const j=_-f.left,R=T-f.top,w=K(j,R,l,n,t,a,f);if(C(w?{type:"point",index:w.index,flashing:!1}:H=>H?.type==="point"?null:H),!i)return;const M=_-f.left,I=T-f.top,q=n[0]+(M/f.width-.5)*t,U=n[1]+(.5-I/f.height)*a;i([q,U])},onDrag:({event:b,first:f,movement:[_,T],xy:[j,R],memo:w})=>{p.current&&(clearTimeout(p.current),p.current=null,C(I=>I?.type==="point"?{...I,flashing:!1}:null)),b.preventDefault();const M=b.target.getBoundingClientRect();if(M){if(f||!w){const I=j-M.left,q=R-M.top;if(m){const U=K(I,q,l,n,t,a,M);if(U)return{dragMode:"point",pointIndex:U.index}}return{dragMode:"canvas",startCenter:n}}if(w.dragMode==="point"){if(!m)return w;const I=j-M.left,q=R-M.top,U=n[0]-t/2+I/M.width*t,H=n[1]+a/2-q/M.height*a,G=[...l];return G[w.pointIndex]=[U,H],m(G),w}if(w.dragMode==="canvas"){const{startCenter:I}=w;if(!I)return w;const q=_/M.width*t,U=T/M.height*a;return s([I[0]-q,I[1]+U]),w}}},onPinch:({event:b,first:f,offset:[_]})=>{b.preventDefault(),f&&(p.current&&(clearTimeout(p.current),p.current=null),C(null)),e(_)},onWheel:({event:b,delta:[,f]})=>{if(f===0)return;const _=b.target.getBoundingClientRect();if(!_)return;const T=b.clientX-_.left,j=b.clientY-_.top,R=1.1,w=f<0?o*R:o/R;let M,I;u>=1?(I=d/w,M=I*u):(M=d/w,I=M/u);const q=T/_.width-.5,U=.5-j/_.height,H=n[0]+q*(t-M),G=n[1]+U*(a-I);e(w),s([H,G])},onDoubleClick:({event:b})=>{b.preventDefault();const f=b.target.getBoundingClientRect();if(!f)return;const _=b.clientX-f.left,T=b.clientY-f.top;if(m){const j=K(_,T,l,n,t,a,f);if(j&&h&&h[j.index]){const R=[...l];R[j.index]=h[j.index],m(R);return}}x()},onClick:({event:b})=>{if(!i)return;const f=b.currentTarget.getBoundingClientRect();if(!f)return;const{clientX:_,clientY:T}=b,j=_-f.left,R=T-f.top,w=n[0]+(j/f.width-.5)*t,M=n[1]+(.5-R/f.height)*a;i([w,M])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[o,0]}})(),style:{touchAction:"none"}},highlightedPoint:y}};function gt({canvasName:o="canvas",parameterName:e="control point"}={}){return`### Mouse Controls:

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
- **Reset ${e}:** Double-tap a ${e} to reset its position.`}const Pe=5e3,xt=500,Me=25,yt=({setAspect:o})=>{const{size:e}=Re();return c.useEffect(()=>{o(e.width>0&&e.height>0?e.width/e.height:1)},[e,o]),null},vt=({xRange:o,yRange:e,theme:n,worldToScreen:s,center:t,gridTooDense:a})=>{const u=c.useMemo(()=>{const i=[],[l,h]=o,[m,z]=e,g=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",y="0.8)",C="0.5)";for(let v=Math.ceil(l);v<=Math.floor(h);v++){const P=s([v,m]);if(!P)continue;const $=v===0;a&&!$||i.push(r.jsx("div",{className:"absolute",style:{left:P[0],top:0,width:1,height:"100%",backgroundColor:g+($?y:C),transform:$?"translateX(-50%)":void 0}},`v-${v}`))}for(let v=Math.ceil(m);v<=Math.floor(z);v++){const P=s([l,v]);if(!P)continue;const $=v===0;a&&!$||i.push(r.jsx("div",{className:"absolute",style:{left:0,top:P[1],width:"100%",height:1,backgroundColor:g+($?y:C),transform:$?"translateY(-50%)":void 0}},`h-${v}`))}return i},[o,e,n,s,a]),d=c.useMemo(()=>{const{pos:i}=he([0,0],t,o,e),l=s(i);if(!l)return null;const h=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return r.jsx("div",{className:"absolute",style:{left:l[0],top:l[1],width:12,height:12,borderRadius:"50%",backgroundColor:h,transform:"translate(-50%, -50%)"}})},[t,o,e,n,s]);return r.jsxs(r.Fragment,{children:[u,d]})},te={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},bt=o=>{if(typeof o=="number"){const e=Object.keys(te);return te[e[o%e.length]||"default"]}return typeof o=="string"&&te[o]?te[o]:te.default};function he(o,e,n,s){const[t,a]=o,[u,d]=n,[i,l]=s;if(t>=u&&t<=d&&a>=i&&a<=l)return{pos:o,clipped:!1};const[h,m]=e,z=t-h,g=a-m;let y=1/0;const C=1e-9;if(Math.abs(z)>C){const $=(u-h)/z,p=(d-h)/z;if($>0){const N=m+$*g;N>=i&&N<=l&&(y=Math.min(y,$))}if(p>0){const N=m+p*g;N>=i&&N<=l&&(y=Math.min(y,p))}}if(Math.abs(g)>C){const $=(i-m)/g,p=(l-m)/g;if($>0){const N=h+$*z;N>=u&&N<=d&&(y=Math.min(y,$))}if(p>0){const N=h+p*z;N>=u&&N<=d&&(y=Math.min(y,p))}}if(y!==1/0&&y>0)return{pos:[h+y*z,m+y*g],clipped:!0};const v=Math.max(u,Math.min(d,t)),P=Math.max(i,Math.min(l,a));return{pos:[v,P],clipped:!0}}const wt=({children:o,initialZoom:e=1,initialCenter:n=[0,0],baseViewSize:s=4,onInfoOverlay:t,onViewChange:a,className:u,gl:d,controlPoints:i=[],initialControlPoints:l=[],onControlPointsChange:h,controlPointGroups:m=[],minControlPoints:z,maxControlPoints:g,showGrid:y=!0,frameloop:C="always"})=>{const{theme:v}=Z(),[P,$]=c.useState(e),[p,N]=c.useState(n),[x,S]=c.useState(1),[E,ne]=c.useState(!1),[W,b]=c.useState(null),[f,_]=c.useState(0),T=c.useRef(null),j=c.useRef(null),R=c.useRef(null),[w,M]=c.useMemo(()=>{let k,F;return x>=1?(F=s/P,k=F*x):(k=s/P,F=k/x),[k,F]},[P,x,s]),I=c.useMemo(()=>({center:p,viewWidth:w,viewHeight:M,zoom:P}),[p,w,M,P]);c.useEffect(()=>{a&&a(I)},[I,a]);const q=c.useCallback(()=>{T.current&&clearTimeout(T.current),j.current&&clearTimeout(j.current),T.current=window.setTimeout(()=>{_(0),T.current=null},Pe),j.current=window.setTimeout(()=>{b(null),j.current=null},Pe+xt)},[]),U=c.useCallback(k=>{!t&&i.length===0&&!y||(T.current&&clearTimeout(T.current),j.current&&clearTimeout(j.current),k&&b(k),_(1),q())},[t,i.length,y,q]),H=c.useCallback(k=>{q(),h&&h(k)},[h,q]),{controlHandlers:G,highlightedPoint:V}=pt({zoom:P,setZoom:$,center:p,setCenter:N,viewWidth:w,viewHeight:M,aspect:x,baseViewSize:s,onShowInfo:U,controlPoints:i,initialControlPoints:l,onControlPointsChange:f>0?H:void 0,minControlPoints:z,maxControlPoints:g}),{style:Ee,...Le}=G,[B,J]=c.useMemo(()=>{const k=[p[0]-w/2,p[0]+w/2],F=[p[1]-M/2,p[1]+M/2];return[k,F]},[p,w,M]);c.useEffect(()=>()=>{T.current&&clearTimeout(T.current),j.current&&clearTimeout(j.current)},[]);const ee=c.useCallback(k=>{if(!R.current)return null;const{width:F,height:O}=R.current.getBoundingClientRect(),[L,D]=B,[X,Y]=J,ce=(k[0]-L)/w*F,re=(Y-k[1])/M*O;return[ce,re]},[B,J,w,M]),Oe=c.useMemo(()=>{if(!y)return null;let k=!1;if(R.current){const{width:F,height:O}=R.current.getBoundingClientRect(),L=F/w,D=O/M;(L<Me||D<Me)&&(k=!0)}return r.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:f},children:r.jsx(vt,{xRange:B,yRange:J,theme:v,worldToScreen:ee,center:p,gridTooDense:k})})},[y,f,B,J,v,ee,w,M,p]),De=c.useMemo(()=>{const k=L=>{const D=L?128:48,X=L?120:44;return{containerStyle:{width:D,height:D},highlightStyle:{width:X,height:X,borderWidth:L?46:8}}},F=i.map((L,D)=>{const{pos:X}=he(L,p,B,J),Y=ee(X);if(!Y)return null;const ce=bt(m[D]),re=V?.type==="point"&&V.index===D,ge=k(re&&V.flashing);return r.jsxs("div",{className:"absolute",style:{left:Y[0],top:Y[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...ge.containerStyle},children:[re&&r.jsx("div",{className:V.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...ge.highlightStyle}}),r.jsx("div",{className:"control-point-animating",style:{...ce,gridColumn:1,gridRow:1}})]},D)});let O=null;if(V?.type==="space"){const{pos:L}=he(V.coords,p,B,J),D=ee(L);if(D){const X=k(V.flashing);O=r.jsx("div",{className:"absolute",style:{left:D[0],top:D[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...X.containerStyle},children:r.jsx("div",{className:V.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...X.highlightStyle}})})}}return F.every(L=>L===null)&&!O?null:r.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:f},children:[F,O]})},[i,p,B,J,ee,m,f,V]),qe=c.useMemo(()=>{if(!W||E||!t)return null;const k=t(W,I);if(!k)return null;const F=typeof k=="string"?{"top-left":k}:k;return Object.keys(F).length===0?null:Object.entries(F).map(([O,L])=>{if(!L)return null;const D=L.trim().split(`
`);return r.jsx("div",{className:A("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":O==="top-left","top-0 right-0 text-right":O==="top-right","bottom-0 left-0":O==="bottom-left","bottom-0 right-0 text-right":O==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":O==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":O==="bottom-center"}),style:{opacity:f},children:r.jsx("div",{className:A("p-1 rounded-md text-xs font-mono space-y-1",v==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:D.map((X,Y)=>r.jsx("div",{children:X},Y))})},O)})},[W,E,t,v,f,I]);return r.jsxs("div",{ref:R,className:A("w-full h-full relative",u),style:Ee,...Le,onContextMenu:k=>k.preventDefault(),children:[r.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:r.jsxs(rt,{frameloop:C,gl:d,onCreated:({gl:k})=>{k.domElement.addEventListener("webglcontextlost",F=>{F.preventDefault(),ne(!0)},!1)},children:[r.jsx(yt,{setAspect:S}),o(I)]})}),E&&r.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[r.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),r.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),r.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),Oe,qe,De]})};function ae(o,e){const n=o<0?"-":"+",s=Math.abs(o),t=e-1;if(t<=0)return n;if(s===0)return n+"0.0".padEnd(t,"0").substring(0,t);const a=String(Math.trunc(s));if(a.length<=t){const u=t-a.length;if(u>1){let d=u-1,i=s.toFixed(d);if(i.split(".")[0].length>a.length&&(d-=i.split(".")[0].length-a.length,d>=0?i=s.toFixed(d):i=String(Math.round(s))),i.length<=t)return n+i}if(a.length<=t){let d=a;return d.length<t&&(d+=".".repeat(t-d.length)),n+d}}if(t>=3){for(let d=t-4;d>=0;d--){let i=s.toExponential(d).replace("e+","e");if(i.length<=t)return n+i}let u=s.toExponential(0).replace("e+","e");if(u.length<=t)return n+u}if(s>1)return n+".".repeat(t);{const u="0.0000";return u.length<=t?n+u:n+"0.0".padEnd(t,"0").substring(0,t)}}function se(o,e,n=7,s="i"){const t=ae(o,n),a=ae(e,n);return`${t}${a}${s}`}function Te(o,e,n=7,s=["(",", ",")"]){const t=ae(o,n),a=ae(e,n);return`${s[0]}${t}${s[1]}${a}${s[2]}`}function zt(o){return"min"in o&&"max"in o}class Ae{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class Q extends Ae{constructor(e,n,s,t,a){super(),this.name=e,this.description=n,this.math=s,this.shader=t;let u,d,i;typeof a=="number"?(i=a,u=1,d=2e3):(i=a.initial,u=a.min,d=a.max);const l=m=>{const z=Math.log(u),g=Math.log(d);return Math.exp(z+(g-z)*m)},h=m=>{if(m<=u)return 0;if(m>=d)return 1;const z=Math.log(u),g=Math.log(d);return(Math.log(m)-z)/(g-z)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:i,min:u,max:d,posToVal:l,valToPos:h}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(e){}getInitialControlPoints(){return[]}getCanvasOverlayString(e,n){}getControlPointValues(e){}getControlPointGroups(e){return[]}}class pe extends Q{constructor(e,n,s,t,a,u){super(e,n,s,t,a),this.controlPointInfo=u}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(e,n){if(e.length>0)return`${this.controlPointInfo.name} = ${se(...e[0])}`}getControlPointValues(e){if(e.length>0)return[{label:this.controlPointInfo.name,value:se(...e[0])}]}getControlPointUniforms(e){if(e.length>0)return{[this.controlPointInfo.uniformName]:e[0]}}getControlPointGroups(e){return[0]}}const $t=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,_t=`uniform int iterations;
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
`,de=16;function Pt(o){const e=[];for(let n=0;n<o;n++){const s=2*Math.PI*n/o;e.push([Math.cos(s),Math.sin(s)])}return e}class Mt extends Ae{constructor(){super(),this.name="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=$t,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Pt(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return _t}getCanvasOverlayString(e,n){return`p = ${e.length}`}getControlPointValues(e){return e.map((n,s)=>({label:`Root ${s+1}`,value:se(...n)}))}getControlPointUniforms(e){if(e.length>0&&e.length<=de){const n=e.flat(),s=new Array(de*2).fill(0);return n.forEach((t,a)=>s[a]=t),{num_roots:e.length,roots:s}}}getControlPointGroups(e){return Array(e.length).fill(0)}getControlPointMinMax(){return[2,de]}}const Tt=`The Mandelbrot set is one of the most famous fractals, known for its
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

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point. Higher values increase the detail and
  accuracy of the fractal's boundary but require more computation.

#### Complex Parameters
This fractal does not have any complex parameters that can be controlled
directly as control points. The complex number $c$ corresponds to each point
on the plane being tested.
`,jt=`uniform int iterations;

float eval(vec2 p) {
  vec2 z = vec2(0.0);
  int i;
  for (i = 0; i < iterations; i++) {
    float x = (z.x * z.x - z.y * z.y) + p.x;
    float y = (2.0 * z.x * z.y) + p.y;
    if ((x * x + y * y) > 4.0) break;
    z.x = x;
    z.y = y;
  }
  if (i == iterations) {
    return -1.0;
  }
  return log(float(i) + 1.0) * 0.15;
}
`,kt=new Q("Mandelbrot","The Mandelbrot set.",Tt,jt,200),Ct=`The Phoenix fractal is a variation of the Mandelbrot and Julia sets. The
iteration formula introduces a "memory" effect, as the next state depends on
the previous two states:
\`\`\`math
z_{n+1} = z_n^2 + c + P z_{n-1}
\`\`\`
In this implementation, we are generating a Mandelbrot-like set. The point $c$
is the coordinate on the complex plane being tested, while $P$ is a fixed
parameter that can be changed. The initial values are $z_0 = 0$ and
$z_{-1} = 0$.

For different values of the parameter $P$, we get different Phoenix sets.

### Parameters

#### GUI Parameters
- **Iterations**: This integer value determines the maximum number of times the
  formula is applied for each point.

#### Complex Parameters (Control Points)
- **P**: This is a fixed complex number that modifies the shape of the fractal.
  It can be moved around on the complex plane to explore different variations
  of the Phoenix set.
`,Nt=`uniform int iterations;
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
}
`,St=[0,0],Rt=new pe("Phoenix","Phoenix fractal set (Mandelbrot variant).",Ct,Nt,200,{name:"P",initialValue:St,uniformName:"phoenixP"}),It=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,Ft=[-.7,.27015],Et=new pe("Julia","Julia sets.",It,At,200,{name:"C",initialValue:Ft,uniformName:"juliaC"}),Lt=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,Ot=`uniform int iterations;
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
`,Dt=[-.85,-.6],qt=new pe("Lambda","Lambda fractal (logistic map).",Lt,Ot,200,{name:"Lambda",initialValue:Dt,uniformName:"lambda"}),Ut=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,Ht=`uniform int iterations;
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
`,Xt=new Q("Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",Ut,Ht,80),Gt=`This is another type of magnet fractal. The iteration is defined by:
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
`,Vt=`uniform int iterations;
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
`,Yt=new Q("Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",Gt,Vt,80),Bt=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,Jt=`uniform int iterations;

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
`,Wt=new Q("Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",Bt,Jt,80),Kt=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,Zt=`uniform int iterations;

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
`,Qt=new Q("Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Kt,Zt,200),Fe=[new Mt,kt,Rt,Et,qt,Xt,Yt,Wt,Qt];function je(o,e,n,s){return`vec3(${o}) + vec3(${e}) * cos(6.28318 * (vec3(${n}) * t + vec3(${s})))`}const fe={grayscale:"vec3(t)",cosmic:je("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:je("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function en(o){return fe[o]||fe.grayscale}const tn=Object.fromEntries(Object.keys(fe).map(o=>[o,o.charAt(0).toUpperCase()+o.slice(1)])),nn="cosmic",rn=`
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
`;function an(o,e,n){if(Array.isArray(n))if(n.length===2)o[e]={value:new oe(n[0],n[1])};else if(n.length===3)o[e]={value:new st(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const s=[];for(let t=0;t<n.length;t+=2)s.push(new oe(n[t],n[t+1]));o[e]={value:s}}else o[e]={value:n};else o[e]={value:n}}function sn(o,e,n){if(o.uniforms[e])if(Array.isArray(n))if(n.length===2)o.uniforms[e].value.fromArray(n);else if(n.length===3)o.uniforms[e].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const s=[];for(let t=0;t<n.length;t+=2)s.push(new oe(n[t],n[t+1]));o.uniforms[e].value=s}else o.uniforms[e].value=n;else o.uniforms[e].value=n}const ln=({fractal:o,center:e,viewWidth:n,viewHeight:s,parameters:t,controlPoints:a,colorScheme:u})=>{const d=Re(h=>h.invalidate),i=c.useMemo(()=>{const h={FRACTAL_SHADER:o.getShaderCode(),EVALUATE_COLOR:en(u)},m={center:{value:new oe(...e)},viewWidth:{value:n},viewHeight:{value:s}};o.getGuiParameters().forEach(g=>{m[g.name]={value:t[g.name]}});const z=o.getControlPointUniforms(a);if(z)for(const[g,y]of Object.entries(z))an(m,g,y);return new ot({uniforms:m,vertexShader:rn,fragmentShader:on.replace(/%(\w+)%/g,(g,y)=>String(h[y]))})},[o,u]);c.useEffect(()=>{i.uniforms.center.value.fromArray(e),i.uniforms.viewWidth.value=n,i.uniforms.viewHeight.value=s,o.getGuiParameters().forEach(m=>{i.uniforms[m.name].value=t[m.name]});const h=o.getControlPointUniforms(a);if(h)for(const[m,z]of Object.entries(h))sn(i,m,z);d()},[i,e,n,s,t,a,d,o]);const l=c.useMemo(()=>{const h=new at;return h.setDrawRange(0,3),h},[]);return r.jsx("mesh",{material:i,geometry:l})},ie=Fe;ie.find(o=>o.name==="Mandelbrot")||ie[0];const cn=({initialFractal:o,initialColorScheme:e,onFractalChange:n})=>{const{theme:s}=Z(),[t,a]=c.useState(o),[u,d]=c.useState(t.getInitialGuiParameters()),[i,l]=c.useState(t.getInitialControlPoints()),[h,m]=c.useState(e||nn);c.useEffect(()=>{const x=new URLSearchParams(window.location.search);x.set("type",t.name),x.set("colors",h),window.history.replaceState({},"",`${window.location.pathname}?${x}`)},[t,h]);const z=ie.map(x=>({name:x.name,value:x.name})),g=x=>{const S=ie.find(E=>E.name===x);S&&(a(S),n(S),d(S.getInitialGuiParameters()),l(S.getInitialControlPoints()),v(E=>E+1))},y=Object.entries(tn).map(([x,S])=>({name:S,value:x})),[C,v]=c.useState(0),P=t.getGuiParameters().map(x=>zt(x)?r.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:r.jsx(ht,{label:x.displayName,min:x.min,max:x.max,value:u[x.name],onChange:S=>d(E=>({...E,[x.name]:S})),theme:s,posToVal:x.posToVal,valToPos:x.valToPos})},x.name):null),$=t.getControlPointValues(i),[p,N]=t.getControlPointMinMax();return r.jsxs("div",{className:A("w-full h-full flex flex-col landscape:flex-row overflow-hidden",s==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[r.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[r.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("div",{className:"min-w-[140px] flex-1",children:r.jsx(ze,{options:z,selected:t.name,onChange:x=>g(x),theme:s})}),r.jsx("div",{className:"min-w-[140px] flex-1",children:r.jsx(ze,{label:"Colors",options:y,selected:y.find(x=>x.value===h)?.name,onChange:x=>m(x),theme:s})}),P,$&&$.length>0&&r.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:s==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:$.map(x=>r.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[r.jsx("p",{className:A("text-sm font-medium",s==="dark"?"text-gray-300":"text-gray-700"),children:x.label}),r.jsx("p",{className:A("text-base font-mono",s==="dark"?"text-gray-200":"text-gray-800"),children:x.value})]},x.label))})]})]}),r.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:r.jsx(wt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(x,S)=>{const E=["[",", ","]"],ne=Te(S.center[0]-S.viewWidth/2,S.center[0]+S.viewWidth/2,7,E),W=Te(S.center[1]-S.viewHeight/2,S.center[1]+S.viewHeight/2,7,E),b={"top-left":se(...x),"top-right":`Re: ${ne}
Im: ${W}`},f=t.getCanvasOverlayString(i,u);return f&&(b["bottom-center"]=f),b},controlPoints:i,initialControlPoints:t.getInitialControlPoints(),onControlPointsChange:l,controlPointGroups:t.getControlPointGroups(i),minControlPoints:p,maxControlPoints:N,gl:{powerPreference:"default",antialias:!1},children:({center:x,viewWidth:S,viewHeight:E})=>r.jsx(ln,{fractal:t,center:x,viewWidth:S,viewHeight:E,parameters:u,controlPoints:i,colorScheme:h})},C)})]})};var dn={client:"ca-pub-5400548434612970",slot:"5745481735"};const le=Fe,un=le.find(o=>o.name==="Mandelbrot")||le[0];function hn(){const o=new URLSearchParams(window.location.search),e=o.get("type")??o.get("name"),n=o.get("colors"),[s,t]=c.useState(null),[a,u]=c.useState(null),{theme:d}=Z(),i=le.find(v=>v.name===e)||un,[l,h]=c.useState(i),m=le.find(v=>v.name===a)||l,z=[{key:"controls",name:"Exploring the Fractal",href:"#controls",icon:r.jsx(Qe,{})},{key:"math",name:`About ${l.name} Fractal`,href:`#math?fractal=${l.name}`,icon:r.jsx(et,{})}];c.useEffect(()=>{const v=()=>{if(window.location.hash.startsWith("#math")){const $=new URLSearchParams(window.location.hash.split("?")[1]).get("fractal")??l.name;u($),t("math")}else window.location.hash.startsWith("#controls")?t("controls"):t(null)};return window.addEventListener("hashchange",v),v(),()=>{window.removeEventListener("hashchange",v)}},[l.name]);const g=()=>{t(null),u(null),window.location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)},y=()=>{if(s==="math"){const v=m;if(!v)return r.jsx("p",{children:"Fractal not found."});const P=`## ${v.name} Fractal

${v.math}`;return r.jsx(ye,{remarkPlugins:[be,we],rehypePlugins:[ve],children:P})}if(s==="controls"){const P=`
This application allows you to explore the intricate beauty of various fractals.
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

${gt({canvasName:"fractal view",parameterName:"complex parameter"})}`;return r.jsx(ye,{remarkPlugins:[be,we],rehypePlugins:[ve],children:P})}return null},C=()=>s==="math"?`About ${m.name} Fractal`:s==="controls"?"Exploring the Fractal":"";return r.jsxs(r.Fragment,{children:[r.jsx(dt,{appName:"Fantastic Fractals",help:z,adSenseConfig:dn,children:r.jsx(c.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(cn,{initialFractal:l,initialColorScheme:n??void 0,onFractalChange:h})})}),r.jsx(ut,{isOpen:s!==null,onClose:g,title:C(),size:"xl",children:r.jsx("div",{className:A("prose dark:prose-invert max-w-none",d==="dark"?"dark":""),children:y()})})]})}function fn(){return r.jsx(lt,{children:r.jsx(hn,{})})}tt.createRoot(document.getElementById("root")).render(r.jsx(nt.StrictMode,{children:r.jsx(fn,{})}));
