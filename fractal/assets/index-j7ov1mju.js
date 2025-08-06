import{r as u,j as n,i as Ce,P as Ne,d as R,z as me,E as Se,g as Re,e as He,f as Xe,h as Ge,k as Ve,l as Ye,m as Be,L as Je,n as xe,q as Ke,o as We,p as Ze,t as Qe,v as et,w as tt,M as ye,x as ve,y as be,A as we,B as nt,C as rt}from"./other-Y0QeraJG.js";import{C as ot,u as Ie,V as oe,S as at,B as st,a as it}from"./three-Bj4diIOQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const ze=({label:o,options:e,selected:t,onChange:s,theme:r})=>{const a=u.useRef(null),[f,c]=u.useState({}),h=()=>{if(a.current){const d=a.current.getBoundingClientRect();c({top:`${d.bottom+4}px`,left:`${d.left}px`,width:`${d.width}px`})}};return n.jsxs(Ce,{as:"div",className:"relative",children:[n.jsxs(Ne,{ref:a,onClick:h,className:R("flex justify-between items-center w-full rounded-md border shadow-sm px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",r==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"),children:[n.jsxs("span",{children:[o&&`${o}: `,n.jsx("strong",{children:t})]}),n.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}),n.jsx(me,{as:u.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:n.jsx(Se,{style:f,className:R("fixed z-50 mt-1 rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",r==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:n.jsx("div",{className:"py-1",children:e.map(d=>n.jsx(Re,{children:({focus:p})=>n.jsx("button",{onClick:()=>s(d.value),className:R("w-full text-left block px-4 py-2 text-base",p?r==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":r==="dark"?"text-gray-300":"text-gray-700"),children:d.name})},d.value))})})})]})},$e=({client:o,slot:e,style:t={display:"block",width:"100%"},format:s="auto",responsive:r="true"})=>(u.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(a){console.error("AdSense error:",a)}},[]),n.jsx("ins",{className:"adsbygoogle",style:t,"data-ad-client":o,"data-ad-slot":e,"data-ad-format":s,"data-full-width-responsive":r})),Fe=u.createContext(void 0),lt=({children:o})=>{const[e,t]=u.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});u.useEffect(()=>{const a=window.document.documentElement;e==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[e]);const s=()=>{t(a=>a==="light"?"dark":"light")},r=u.useMemo(()=>({theme:e,toggleTheme:s}),[e]);return n.jsx(Fe.Provider,{value:r,children:o})},Z=()=>{const o=u.useContext(Fe);if(o===void 0)throw new Error("useTheme must be used within a ThemeProvider");return o},ue=o=>{if(o.startsWith("#")||o.startsWith("/"))return!1;try{return new URL(o,window.location.origin).hostname!==window.location.hostname}catch{return!1}},_e=({icon:o,options:e})=>{const{theme:t}=Z();return n.jsxs(Ce,{as:"div",className:"relative inline-block text-left",children:[n.jsx("div",{children:n.jsx(Ne,{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o})}),n.jsx(me,{as:u.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:n.jsx(Se,{className:R("absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",t==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:n.jsx("div",{className:"py-1",children:e.map(s=>{const r=ue(s.href);return n.jsx(Re,{children:({focus:a})=>n.jsxs("a",{href:s.href,target:r?"_blank":"_self",rel:"noopener noreferrer",className:R("flex items-center justify-between px-4 py-2 text-base w-full",a?t==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":t==="dark"?"text-gray-300":"text-gray-700"),children:[n.jsxs("div",{className:"flex items-center",children:[s.icon&&n.jsx("span",{className:"mr-3 h-5 w-5",children:s.icon}),s.name]}),r&&n.jsx(He,{className:"h-4 w-4"})]})},s.key)})})})})]})},ct=({appName:o,help:e,config:t,showUserProfile:s})=>{const{theme:r,toggleTheme:a}=Z(),f=()=>{if(!e)return null;const h=n.jsx(Ye,{className:"h-8 w-8"});return typeof e=="string"?n.jsx("a",{href:e,target:ue(e)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:h}):Array.isArray(e)&&e.length>0?n.jsx(_e,{icon:h,options:e}):null},c=()=>{if(!t)return null;const h=n.jsx(Be,{className:"h-8 w-8"});return typeof t=="string"?n.jsx("a",{href:t,target:ue(t)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:h}):Array.isArray(t)&&t.length>0?n.jsx(_e,{icon:h,options:t}):null};return n.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-4 pb-1 px-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[n.jsx("h1",{className:"text-xl font-bold",children:o}),n.jsxs("nav",{className:"flex items-center space-x-2",children:[n.jsx("button",{onClick:a,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r==="light"?n.jsx(Xe,{className:"h-8 w-8"}):n.jsx(Ge,{className:"h-8 w-8"})}),f(),c(),s&&n.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:n.jsx(Ve,{className:"h-8 w-8"})})]})]})},dt=({children:o,...e})=>{const[t,s]=u.useState(!0);return u.useEffect(()=>{const r=()=>{const f=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${f}px`)},a=()=>{s(window.innerHeight>=600),r()};return r(),a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),n.jsxs("div",{className:"h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100",children:[t&&n.jsx(ct,{...e}),n.jsx("main",{className:"flex-grow p-0 md:p-2 min-h-0",children:n.jsx("div",{className:"w-full h-full",children:o})})]})},ut=({isOpen:o,onClose:e,title:t,children:s,size:r="lg"})=>{const{theme:a}=Z(),f=c=>{switch(c){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return n.jsx(me,{appear:!0,show:o,as:u.Fragment,children:n.jsxs(Je,{as:"div",className:R("relative z-50",a),onClose:e,children:[n.jsx(xe,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:n.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),n.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:n.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:n.jsx(xe,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:n.jsxs(Ke,{className:R(f(r),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600"),children:[n.jsx(We,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:t}),n.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:n.jsx(Ze,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),n.jsx("div",{className:"mt-4 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},ht=({label:o,min:e,max:t,value:s,onChange:r,theme:a,valueLabel:f=d=>Math.round(d),posToVal:c=d=>e+(t-e)*d,valToPos:h=d=>(d-e)/(t-e)})=>{const d=u.useRef(null),p=u.useCallback($=>{if(d.current){const _=d.current.getBoundingClientRect(),g=Math.max(0,Math.min(1,($-_.left)/_.width));r(c(g))}},[r,c]),m=$=>{$.preventDefault(),p($.clientX);const _=N=>{p(N.clientX)},g=()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",g)};document.addEventListener("mousemove",_),document.addEventListener("mouseup",g)},z=$=>{$.preventDefault(),$.touches.length>0&&p($.touches[0].clientX);const _=N=>{N.touches.length>0&&p(N.touches[0].clientX)},g=()=>{document.removeEventListener("touchmove",_),document.removeEventListener("touchend",g)};document.addEventListener("touchmove",_),document.addEventListener("touchend",g)},y=h(s),w=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",C=y>.5,v=y>.25&&y<.5||y>.75;return n.jsx("div",{className:"w-full px-3",children:n.jsxs("div",{ref:d,onMouseDown:m,onTouchStart:z,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[n.jsx("div",{className:R("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),n.jsx("div",{className:R("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${y*100}%`}}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o&&n.jsx("span",{className:R("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":C?"text-white":"text-gray-800"),style:{...C?{left:"10px"}:{right:"10px"},textShadow:C?w:"none"},children:o}),n.jsx("span",{className:R("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":v?"text-white":"text-gray-800"),style:{...v?{right:`calc(${100-y*100}% + 14px)`}:{left:`calc(${y*100}% + 14px)`},textShadow:v?w:"none"},children:f(s)})]}),n.jsx("div",{className:R("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${y*100}% - 12px)`}})]})})},ft=36,Pe=1e3,mt=10,W=(o,e,t,s,r,a,f)=>{if(t.length===0)return null;let c=null;const[h,d]=[s[0]-r/2,s[1]+a/2];for(let p=0;p<t.length;p++){const m=t[p],z=(m[0]-h)/r*f.width,y=(d-m[1])/a*f.height,w=Math.sqrt(Math.pow(o-z,2)+Math.pow(e-y,2));(c===null||w<c.distance)&&(c={index:p,distance:w})}return c&&c.distance<ft?c:null},pt=({zoom:o,setZoom:e,center:t,setCenter:s,viewWidth:r,viewHeight:a,aspect:f,baseViewSize:c=4,onShowInfo:h,controlPoints:d=[],initialControlPoints:p=[],onControlPointsChange:m,minControlPoints:z,maxControlPoints:y})=>{const[w,C]=u.useState(null),v=u.useRef(w);v.current=w;const[$,_]=u.useState(!1),g=u.useRef(null),N=u.useRef(null),D=u.useCallback(()=>{e(1),s([0,0])},[e,s]),J=u.useCallback(()=>{const l=v.current;if(!(!m||!l)){if(l.type==="point"){if(z===void 0||d.length<=z)return;const i=d.filter((x,P)=>P!==l.index);m(i)}else{if(y===void 0||d.length>=y)return;const i=[...d,l.coords];m(i)}C(null)}},[d,y,z,m]),V=u.useCallback((l,i,x)=>{const P=l-x.left,T=i-x.top,k=W(P,T,d,t,r,a,x);if(k)C({type:"point",index:k.index,flashing:!0});else{const b=t[0]-r/2+P/x.width*r,M=t[1]+a/2-T/x.height*a;C({type:"space",coords:[b,M],flashing:!0})}g.current=window.setTimeout(()=>{J(),g.current=null},Pe)},[t,d,J,a,r]);return{controlHandlers:{...Qe({onPointerDown:({event:l})=>{const i=l.target.getBoundingClientRect();if(!i)return;const{clientX:x,clientY:P}=l,T=x-i.left,k=P-i.top,b=W(T,k,d,t,r,a,i);b?(_(!0),C({type:"point",index:b.index,flashing:!1})):C(null),h&&(N.current={x,y:P},g.current=window.setTimeout(()=>{V(x,P,i)},Pe))},onPointerUp:({event:l})=>{_(!1);const i=l.target.getBoundingClientRect();if(!i)return;const{clientX:x,clientY:P}=l,T=x-i.left,k=P-i.top,b=W(T,k,d,t,r,a,i);C(b?{type:"point",index:b.index,flashing:!1}:null),g.current&&(clearTimeout(g.current),g.current=null)},onPointerMove:({event:l})=>{if($)return;const i=l.target.getBoundingClientRect();if(!i)return;const{clientX:x,clientY:P}=l;if(g.current&&N.current){const q=x-N.current.x,H=P-N.current.y;Math.sqrt(q*q+H*H)>mt&&(clearTimeout(g.current),g.current=null,C(null))}const T=x-i.left,k=P-i.top,b=W(T,k,d,t,r,a,i);if(C(b?{type:"point",index:b.index,flashing:!1}:q=>q?.type==="point"?null:q),!h)return;const M=x-i.left,S=P-i.top,L=t[0]+(M/i.width-.5)*r,O=t[1]+(.5-S/i.height)*a;h([L,O])},onDrag:({event:l,first:i,movement:[x,P],xy:[T,k],memo:b})=>{g.current&&(clearTimeout(g.current),g.current=null,C(S=>S?.type==="point"?{...S,flashing:!1}:null)),l.preventDefault();const M=l.target.getBoundingClientRect();if(M){if(i||!b){const S=T-M.left,L=k-M.top;if(m){const O=W(S,L,d,t,r,a,M);if(O)return{dragMode:"point",pointIndex:O.index}}return{dragMode:"canvas",startCenter:t}}if(b.dragMode==="point"){if(!m)return b;const S=T-M.left,L=k-M.top,O=t[0]-r/2+S/M.width*r,q=t[1]+a/2-L/M.height*a,H=[...d];return H[b.pointIndex]=[O,q],m(H),b}if(b.dragMode==="canvas"){const{startCenter:S}=b;if(!S)return b;const L=x/M.width*r,O=P/M.height*a;return s([S[0]-L,S[1]+O]),b}}},onPinch:({event:l,first:i,offset:[x]})=>{l.preventDefault(),i&&(g.current&&(clearTimeout(g.current),g.current=null),C(null)),e(x)},onWheel:({event:l,delta:[,i]})=>{if(i===0)return;const x=l.target.getBoundingClientRect();if(!x)return;const P=l.clientX-x.left,T=l.clientY-x.top,k=1.1,b=i<0?o*k:o/k;let M,S;f>=1?(S=c/b,M=S*f):(M=c/b,S=M/f);const L=P/x.width-.5,O=.5-T/x.height,q=t[0]+L*(r-M),H=t[1]+O*(a-S);e(b),s([q,H])},onDoubleClick:({event:l})=>{l.preventDefault();const i=l.target.getBoundingClientRect();if(!i)return;const x=l.clientX-i.left,P=l.clientY-i.top;if(m){const T=W(x,P,d,t,r,a,i);if(T&&p&&p[T.index]){const k=[...d];k[T.index]=p[T.index],m(k);return}}D()},onClick:({event:l})=>{if(!h)return;const i=l.currentTarget.getBoundingClientRect();if(!i)return;const{clientX:x,clientY:P}=l,T=x-i.left,k=P-i.top,b=t[0]+(T/i.width-.5)*r,M=t[1]+(.5-k/i.height)*a;h([b,M])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[o,0]}})(),style:{touchAction:"none"}},highlightedPoint:w}};function gt({canvasName:o="canvas",parameterName:e="control point"}={}){return`### Mouse Controls:

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
- **Reset ${e}:** Double-tap a ${e} to reset its position.`}const Me=5e3,xt=500,Te=25,yt=({setAspect:o})=>{const{size:e}=Ie();return u.useEffect(()=>{o(e.width>0&&e.height>0?e.width/e.height:1)},[e,o]),null},vt=({xRange:o,yRange:e,theme:t,worldToScreen:s,center:r,gridTooDense:a})=>{const f=u.useMemo(()=>{const h=[],[d,p]=o,[m,z]=e,y=t==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",w="0.8)",C="0.5)";for(let v=Math.ceil(d);v<=Math.floor(p);v++){const $=s([v,m]);if(!$)continue;const _=v===0;a&&!_||h.push(n.jsx("div",{className:"absolute",style:{left:$[0],top:0,width:1,height:"100%",backgroundColor:y+(_?w:C),transform:_?"translateX(-50%)":void 0}},`v-${v}`))}for(let v=Math.ceil(m);v<=Math.floor(z);v++){const $=s([d,v]);if(!$)continue;const _=v===0;a&&!_||h.push(n.jsx("div",{className:"absolute",style:{left:0,top:$[1],width:"100%",height:1,backgroundColor:y+(_?w:C),transform:_?"translateY(-50%)":void 0}},`h-${v}`))}return h},[o,e,t,s,a]),c=u.useMemo(()=>{const{pos:h}=he([0,0],r,o,e),d=s(h);if(!d)return null;const p=t==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return n.jsx("div",{className:"absolute",style:{left:d[0],top:d[1],width:12,height:12,borderRadius:"50%",backgroundColor:p,transform:"translate(-50%, -50%)"}})},[r,o,e,t,s]);return n.jsxs(n.Fragment,{children:[f,c]})},te={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},bt=o=>{if(typeof o=="number"){const e=Object.keys(te);return te[e[o%e.length]||"default"]}return typeof o=="string"&&te[o]?te[o]:te.default};function he(o,e,t,s){const[r,a]=o,[f,c]=t,[h,d]=s;if(r>=f&&r<=c&&a>=h&&a<=d)return{pos:o,clipped:!1};const[p,m]=e,z=r-p,y=a-m;let w=1/0;const C=1e-9;if(Math.abs(z)>C){const _=(f-p)/z,g=(c-p)/z;if(_>0){const N=m+_*y;N>=h&&N<=d&&(w=Math.min(w,_))}if(g>0){const N=m+g*y;N>=h&&N<=d&&(w=Math.min(w,g))}}if(Math.abs(y)>C){const _=(h-m)/y,g=(d-m)/y;if(_>0){const N=p+_*z;N>=f&&N<=c&&(w=Math.min(w,_))}if(g>0){const N=p+g*z;N>=f&&N<=c&&(w=Math.min(w,g))}}if(w!==1/0&&w>0)return{pos:[p+w*z,m+w*y],clipped:!0};const v=Math.max(f,Math.min(c,r)),$=Math.max(h,Math.min(d,a));return{pos:[v,$],clipped:!0}}const wt=({children:o,initialZoom:e=1,initialCenter:t=[0,0],baseViewSize:s=4,onInfoOverlay:r,onViewChange:a,className:f,gl:c,controlPoints:h=[],initialControlPoints:d=[],onControlPointsChange:p,controlPointGroups:m=[],minControlPoints:z,maxControlPoints:y,showGrid:w=!0,frameloop:C="always"})=>{const{theme:v}=Z(),[$,_]=u.useState(e),[g,N]=u.useState(t),[D,J]=u.useState(1),[V,ne]=u.useState(!1),[K,l]=u.useState(null),[i,x]=u.useState(0),P=u.useRef(null),T=u.useRef(null),k=u.useRef(null),[b,M]=u.useMemo(()=>{let j,I;return D>=1?(I=s/$,j=I*D):(j=s/$,I=j/D),[j,I]},[$,D,s]),S=u.useMemo(()=>({center:g,viewWidth:b,viewHeight:M,zoom:$}),[g,b,M,$]);u.useEffect(()=>{a&&a(S)},[S,a]);const L=u.useCallback(()=>{P.current&&clearTimeout(P.current),T.current&&clearTimeout(T.current),P.current=window.setTimeout(()=>{x(0),P.current=null},Me),T.current=window.setTimeout(()=>{l(null),T.current=null},Me+xt)},[]),O=u.useCallback(j=>{!r&&h.length===0&&!w||(P.current&&clearTimeout(P.current),T.current&&clearTimeout(T.current),j&&l(j),x(1),L())},[r,h.length,w,L]),q=u.useCallback(j=>{L(),p&&p(j)},[p,L]),{controlHandlers:H,highlightedPoint:X}=pt({zoom:$,setZoom:_,center:g,setCenter:N,viewWidth:b,viewHeight:M,aspect:D,baseViewSize:s,onShowInfo:O,controlPoints:h,initialControlPoints:d,onControlPointsChange:i>0?q:void 0,minControlPoints:z,maxControlPoints:y}),{style:Le,...Oe}=H,[Y,B]=u.useMemo(()=>{const j=[g[0]-b/2,g[0]+b/2],I=[g[1]-M/2,g[1]+M/2];return[j,I]},[g,b,M]);u.useEffect(()=>()=>{P.current&&clearTimeout(P.current),T.current&&clearTimeout(T.current)},[]);const ee=u.useCallback(j=>{if(!k.current)return null;const{width:I,height:A}=k.current.getBoundingClientRect(),[F,E]=Y,[U,G]=B,ce=(j[0]-F)/b*I,re=(G-j[1])/M*A;return[ce,re]},[Y,B,b,M]),De=u.useMemo(()=>{if(!w)return null;let j=!1;if(k.current){const{width:I,height:A}=k.current.getBoundingClientRect(),F=I/b,E=A/M;(F<Te||E<Te)&&(j=!0)}return n.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:i},children:n.jsx(vt,{xRange:Y,yRange:B,theme:v,worldToScreen:ee,center:g,gridTooDense:j})})},[w,i,Y,B,v,ee,b,M,g]),qe=u.useMemo(()=>{const j=F=>{const E=F?128:48,U=F?120:44;return{containerStyle:{width:E,height:E},highlightStyle:{width:U,height:U,borderWidth:F?46:8}}},I=h.map((F,E)=>{const{pos:U}=he(F,g,Y,B),G=ee(U);if(!G)return null;const ce=bt(m[E]),re=X?.type==="point"&&X.index===E,ge=j(re&&X.flashing);return n.jsxs("div",{className:"absolute",style:{left:G[0],top:G[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...ge.containerStyle},children:[re&&n.jsx("div",{className:X.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...ge.highlightStyle}}),n.jsx("div",{className:"control-point-animating",style:{...ce,gridColumn:1,gridRow:1}})]},E)});let A=null;if(X?.type==="space"){const{pos:F}=he(X.coords,g,Y,B),E=ee(F);if(E){const U=j(X.flashing);A=n.jsx("div",{className:"absolute",style:{left:E[0],top:E[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...U.containerStyle},children:n.jsx("div",{className:X.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...U.highlightStyle}})})}}return I.every(F=>F===null)&&!A?null:n.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:i},children:[I,A]})},[h,g,Y,B,ee,m,i,X]),Ue=u.useMemo(()=>{if(!K||V||!r)return null;const j=r(K,S);if(!j)return null;const I=typeof j=="string"?{"top-left":j}:j;return Object.keys(I).length===0?null:Object.entries(I).map(([A,F])=>{if(!F)return null;const E=F.trim().split(`
`);return n.jsx("div",{className:R("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":A==="top-left","top-0 right-0 text-right":A==="top-right","bottom-0 left-0":A==="bottom-left","bottom-0 right-0 text-right":A==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":A==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":A==="bottom-center"}),style:{opacity:i},children:n.jsx("div",{className:R("p-1 rounded-md text-xs font-mono space-y-1",v==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:E.map((U,G)=>n.jsx("div",{children:U},G))})},A)})},[K,V,r,v,i,S]);return n.jsxs("div",{ref:k,className:R("w-full h-full relative",f),style:Le,...Oe,onContextMenu:j=>j.preventDefault(),children:[n.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:n.jsxs(ot,{frameloop:C,gl:c,onCreated:({gl:j})=>{j.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),ne(!0)},!1)},children:[n.jsx(yt,{setAspect:J}),o(S)]})}),V&&n.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[n.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),n.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),n.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),De,Ue,qe]})};function ae(o,e){const t=o<0?"-":"+",s=Math.abs(o),r=e-1;if(r<=0)return t;if(s===0)return t+"0.0".padEnd(r,"0").substring(0,r);const a=String(Math.trunc(s));if(a.length<=r){const f=r-a.length;if(f>1){let c=f-1,h=s.toFixed(c);if(h.split(".")[0].length>a.length&&(c-=h.split(".")[0].length-a.length,c>=0?h=s.toFixed(c):h=String(Math.round(s))),h.length<=r)return t+h}if(a.length<=r){let c=a;return c.length<r&&(c+=".".repeat(r-c.length)),t+c}}if(r>=3){for(let c=r-4;c>=0;c--){let h=s.toExponential(c).replace("e+","e");if(h.length<=r)return t+h}let f=s.toExponential(0).replace("e+","e");if(f.length<=r)return t+f}if(s>1)return t+".".repeat(r);{const f="0.0000";return f.length<=r?t+f:t+"0.0".padEnd(r,"0").substring(0,r)}}function se(o,e,t=7,s="i"){const r=ae(o,t),a=ae(e,t);return`${r}${a}${s}`}function je(o,e,t=7,s=["(",", ",")"]){const r=ae(o,t),a=ae(e,t);return`${s[0]}${r}${s[1]}${a}${s[2]}`}function zt(o){return"min"in o&&"max"in o}class Ae{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class Q extends Ae{constructor(e,t,s,r,a){super(),this.name=e,this.description=t,this.math=s,this.shader=r;let f,c,h;typeof a=="number"?(h=a,f=1,c=2e3):(h=a.initial,f=a.min,c=a.max);const d=m=>{const z=Math.log(f),y=Math.log(c);return Math.exp(z+(y-z)*m)},p=m=>{if(m<=f)return 0;if(m>=c)return 1;const z=Math.log(f),y=Math.log(c);return(Math.log(m)-z)/(y-z)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:h,min:f,max:c,posToVal:d,valToPos:p}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(e){}getInitialControlPoints(){return[]}getCanvasOverlayString(e,t){}getControlPointValues(e){}getControlPointGroups(e){return[]}}class pe extends Q{constructor(e,t,s,r,a,f){super(e,t,s,r,a),this.controlPointInfo=f}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(e,t){if(e.length>0)return`${this.controlPointInfo.name} = ${se(...e[0])}`}getControlPointValues(e){if(e.length>0)return[{label:this.controlPointInfo.name,value:se(...e[0])}]}getControlPointUniforms(e){if(e.length>0)return{[this.controlPointInfo.uniformName]:e[0]}}getControlPointGroups(e){return[0]}}const $t=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,de=16;function Pt(o){const e=[];for(let t=0;t<o;t++){const s=2*Math.PI*t/o;e.push([Math.cos(s),Math.sin(s)])}return e}class Mt extends Ae{constructor(){super(),this.name="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=$t,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return Pt(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return _t}getCanvasOverlayString(e,t){return`p = ${e.length}`}getControlPointValues(e){return e.map((t,s)=>({label:`Root ${s+1}`,value:se(...t)}))}getControlPointUniforms(e){if(e.length>0&&e.length<=de){const t=e.flat(),s=new Array(de*2).fill(0);return t.forEach((r,a)=>s[a]=r),{num_roots:e.length,roots:s}}}getControlPointGroups(e){return Array(e.length).fill(0)}getControlPointMinMax(){return[2,de]}}const Tt=`The Mandelbrot set is one of the most famous fractals, known for its
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
`,Ft=`uniform int iterations;
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
`,At=[-.7,.27015],Et=new pe("Julia","Julia sets.",It,Ft,200,{name:"C",initialValue:At,uniformName:"juliaC"}),Lt=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,Kt=new Q("Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",Bt,Jt,80),Wt=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,Qt=new Q("Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Wt,Zt,200),Ee=[new Mt,kt,Rt,Et,qt,Xt,Yt,Kt,Qt];function ke(o,e,t,s){return`vec3(${o}) + vec3(${e}) * cos(6.28318 * (vec3(${t}) * t + vec3(${s})))`}const fe={grayscale:"vec3(t)",cosmic:ke("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:ke("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function en(o){return fe[o]||fe.grayscale}const tn=Object.fromEntries(Object.keys(fe).map(o=>[o,o.charAt(0).toUpperCase()+o.slice(1)])),nn="cosmic",rn=`
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
`;function an(o,e,t){if(Array.isArray(t))if(t.length===2)o[e]={value:new oe(t[0],t[1])};else if(t.length===3)o[e]={value:new it(t[0],t[1],t[2])};else if(t.length>=4&&t.length%2===0){const s=[];for(let r=0;r<t.length;r+=2)s.push(new oe(t[r],t[r+1]));o[e]={value:s}}else o[e]={value:t};else o[e]={value:t}}function sn(o,e,t){if(o.uniforms[e])if(Array.isArray(t))if(t.length===2)o.uniforms[e].value.fromArray(t);else if(t.length===3)o.uniforms[e].value.fromArray(t);else if(t.length>=4&&t.length%2===0){const s=[];for(let r=0;r<t.length;r+=2)s.push(new oe(t[r],t[r+1]));o.uniforms[e].value=s}else o.uniforms[e].value=t;else o.uniforms[e].value=t}const ln=({fractal:o,center:e,viewWidth:t,viewHeight:s,parameters:r,controlPoints:a,colorScheme:f})=>{const c=Ie(p=>p.invalidate),h=u.useMemo(()=>{const p={FRACTAL_SHADER:o.getShaderCode(),EVALUATE_COLOR:en(f)},m={center:{value:new oe(...e)},viewWidth:{value:t},viewHeight:{value:s}};o.getGuiParameters().forEach(y=>{m[y.name]={value:r[y.name]}});const z=o.getControlPointUniforms(a);if(z)for(const[y,w]of Object.entries(z))an(m,y,w);return new at({uniforms:m,vertexShader:rn,fragmentShader:on.replace(/%(\w+)%/g,(y,w)=>String(p[w]))})},[o,f]);u.useEffect(()=>{h.uniforms.center.value.fromArray(e),h.uniforms.viewWidth.value=t,h.uniforms.viewHeight.value=s,o.getGuiParameters().forEach(m=>{h.uniforms[m.name].value=r[m.name]});const p=o.getControlPointUniforms(a);if(p)for(const[m,z]of Object.entries(p))sn(h,m,z);c()},[h,e,t,s,r,a,c,o]);const d=u.useMemo(()=>{const p=new st;return p.setDrawRange(0,3),p},[]);return n.jsx("mesh",{material:h,geometry:d})},ie=Ee;ie.find(o=>o.name==="Mandelbrot")||ie[0];const cn=({initialFractal:o,initialColorScheme:e,onFractalChange:t})=>{const{theme:s}=Z(),r="ca-pub-5400548434612970",a="5745481735",f="5745481735",[c,h]=u.useState(o),[d,p]=u.useState(c.getInitialGuiParameters()),[m,z]=u.useState(c.getInitialControlPoints()),[y,w]=u.useState(e||nn);u.useEffect(()=>{const l=new URLSearchParams(window.location.search);l.set("type",c.name),l.set("colors",y),window.history.replaceState({},"",`${window.location.pathname}?${l}`)},[c,y]);const C=ie.map(l=>({name:l.name,value:l.name})),v=l=>{const i=ie.find(x=>x.name===l);i&&(h(i),t(i),p(i.getInitialGuiParameters()),z(i.getInitialControlPoints()),g(x=>x+1))},$=Object.entries(tn).map(([l,i])=>({name:i,value:l})),[_,g]=u.useState(0),N=c.getGuiParameters().map(l=>zt(l)?n.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:n.jsx(ht,{label:l.displayName,min:l.min,max:l.max,value:d[l.name],onChange:i=>p(x=>({...x,[l.name]:i})),theme:s,posToVal:l.posToVal,valToPos:l.valToPos})},l.name):null),D=c.getControlPointValues(m),[J,V]=c.getControlPointMinMax(),ne=n.jsx("div",{className:"w-full mt-2",children:n.jsx($e,{client:r,slot:a,style:{display:"block",width:"100%"}})}),K=n.jsx("div",{className:"w-full mt-2",children:n.jsx($e,{client:r,slot:f,style:{display:"block",width:"100%"}})});return n.jsxs("div",{className:R("w-full h-full flex flex-col landscape:flex-row overflow-hidden",s==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[n.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[n.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("div",{className:"min-w-[140px] flex-1",children:n.jsx(ze,{options:C,selected:c.name,onChange:l=>v(l),theme:s})}),n.jsx("div",{className:"min-w-[140px] flex-1",children:n.jsx(ze,{label:"Colors",options:$,selected:$.find(l=>l.value===y)?.name,onChange:l=>w(l),theme:s})}),N,D&&D.length>0&&n.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:s==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:D.map(l=>n.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[n.jsx("p",{className:R("text-sm font-medium",s==="dark"?"text-gray-300":"text-gray-700"),children:l.label}),n.jsx("p",{className:R("text-base font-mono",s==="dark"?"text-gray-200":"text-gray-800"),children:l.value})]},l.label))})]}),n.jsx("div",{className:"hidden landscape:block",children:ne})]}),n.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:n.jsx(wt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(l,i)=>{const x=["[",", ","]"],P=je(i.center[0]-i.viewWidth/2,i.center[0]+i.viewWidth/2,7,x),T=je(i.center[1]-i.viewHeight/2,i.center[1]+i.viewHeight/2,7,x),k={"top-left":se(...l),"top-right":`Re: ${P}
Im: ${T}`},b=c.getCanvasOverlayString(m,d);return b&&(k["bottom-center"]=b),k},controlPoints:m,initialControlPoints:c.getInitialControlPoints(),onControlPointsChange:z,controlPointGroups:c.getControlPointGroups(m),minControlPoints:J,maxControlPoints:V,gl:{powerPreference:"default",antialias:!1},children:({center:l,viewWidth:i,viewHeight:x})=>n.jsx(ln,{fractal:c,center:l,viewWidth:i,viewHeight:x,parameters:d,controlPoints:m,colorScheme:y})},_)}),n.jsx("div",{className:"block landscape:hidden",children:K})]})},le=Ee,dn=le.find(o=>o.name==="Mandelbrot")||le[0];function un(){const o=new URLSearchParams(window.location.search),e=o.get("type")??o.get("name"),t=o.get("colors"),[s,r]=u.useState(null),[a,f]=u.useState(null),{theme:c}=Z(),h=le.find(v=>v.name===e)||dn,[d,p]=u.useState(h),m=le.find(v=>v.name===a)||d,z=[{key:"controls",name:"Exploring the Fractal",href:"#controls",icon:n.jsx(et,{})},{key:"math",name:`About ${d.name} Fractal`,href:`#math?fractal=${d.name}`,icon:n.jsx(tt,{})}];u.useEffect(()=>{const v=()=>{if(window.location.hash.startsWith("#math")){const _=new URLSearchParams(window.location.hash.split("?")[1]).get("fractal")??d.name;f(_),r("math")}else window.location.hash.startsWith("#controls")?r("controls"):r(null)};return window.addEventListener("hashchange",v),v(),()=>{window.removeEventListener("hashchange",v)}},[d.name]);const y=()=>{r(null),f(null),window.location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)},w=()=>{if(s==="math"){const v=m;if(!v)return n.jsx("p",{children:"Fractal not found."});const $=`## ${v.name} Fractal

${v.math}`;return n.jsx(ye,{remarkPlugins:[be,we],rehypePlugins:[ve],children:$})}if(s==="controls"){const $=`
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

${gt({canvasName:"fractal view",parameterName:"complex parameter"})}`;return n.jsx(ye,{remarkPlugins:[be,we],rehypePlugins:[ve],children:$})}return null},C=()=>s==="math"?`About ${m.name} Fractal`:s==="controls"?"Exploring the Fractal":"";return n.jsxs(n.Fragment,{children:[n.jsx(dt,{appName:"Fantastic Fractals",help:z,children:n.jsx(u.Suspense,{fallback:n.jsx("div",{children:"Loading..."}),children:n.jsx(cn,{initialFractal:d,initialColorScheme:t??void 0,onFractalChange:p})})}),n.jsx(ut,{isOpen:s!==null,onClose:y,title:C(),size:"xl",children:n.jsx("div",{className:R("prose dark:prose-invert max-w-none",c==="dark"?"dark":""),children:w()})})]})}function hn(){return n.jsx(lt,{children:n.jsx(un,{})})}nt.createRoot(document.getElementById("root")).render(n.jsx(rt.StrictMode,{children:n.jsx(hn,{})}));
