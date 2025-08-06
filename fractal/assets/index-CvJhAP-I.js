import{r as c,j as r,i as je,P as Ce,d as F,z as me,E as Ne,g as Re,e as Ue,f as He,h as Xe,k as Ge,l as Ye,m as Ve,L as Be,n as xe,q as Je,o as Ke,p as We,t as Ze,v as Qe,w as et,M as ye,x as ve,y as be,A as we,B as tt,C as nt}from"./other-Y0QeraJG.js";import{C as rt,u as Se,V as oe,S as ot,B as at,a as st}from"./three-Bj4diIOQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const ze=({label:o,options:e,selected:n,onChange:s,theme:t})=>{const a=c.useRef(null),[d,u]=c.useState({}),i=()=>{if(a.current){const l=a.current.getBoundingClientRect();u({top:`${l.bottom+4}px`,left:`${l.left}px`,width:`${l.width}px`})}};return r.jsxs(je,{as:"div",className:"relative",children:[r.jsxs(Ce,{ref:a,onClick:i,className:F("flex justify-between items-center w-full rounded-md border shadow-sm px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",t==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"),children:[r.jsxs("span",{children:[o&&`${o}: `,r.jsx("strong",{children:n})]}),r.jsx("span",{className:"ml-2 text-xs",children:"▼"})]}),r.jsx(me,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:r.jsx(Ne,{style:d,className:F("fixed z-50 mt-1 rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",t==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:r.jsx("div",{className:"py-1",children:e.map(l=>r.jsx(Re,{children:({focus:f})=>r.jsx("button",{onClick:()=>s(l.value),className:F("w-full text-left block px-4 py-2 text-sm",f?t==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":t==="dark"?"text-gray-300":"text-gray-700"),children:l.name})},l.value))})})})]})},Ie=c.createContext(void 0),it=({children:o})=>{const[e,n]=c.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");c.useEffect(()=>{const a=window.document.documentElement;e==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[e]);const s=()=>{n(a=>a==="light"?"dark":"light")},t=c.useMemo(()=>({theme:e,toggleTheme:s}),[e]);return r.jsx(Ie.Provider,{value:t,children:o})},Z=()=>{const o=c.useContext(Ie);if(o===void 0)throw new Error("useTheme must be used within a ThemeProvider");return o},ue=o=>{if(o.startsWith("#")||o.startsWith("/"))return!1;try{return new URL(o,window.location.origin).hostname!==window.location.hostname}catch{return!1}},$e=({icon:o,options:e})=>{const{theme:n}=Z();return r.jsxs(je,{as:"div",className:"relative inline-block text-left",children:[r.jsx("div",{children:r.jsx(Ce,{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:o})}),r.jsx(me,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:r.jsx(Ne,{className:F("absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",n==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black"),children:r.jsx("div",{className:"py-1",children:e.map(s=>{const t=ue(s.href);return r.jsx(Re,{children:({focus:a})=>r.jsxs("a",{href:s.href,target:t?"_blank":"_self",rel:"noopener noreferrer",className:F("flex items-center justify-between px-4 py-2 text-sm w-full",a?n==="dark"?"bg-gray-700 text-white":"bg-gray-100 text-gray-900":n==="dark"?"text-gray-300":"text-gray-700"),children:[r.jsxs("div",{className:"flex items-center",children:[s.icon&&r.jsx("span",{className:"mr-3 h-5 w-5",children:s.icon}),s.name]}),t&&r.jsx(Ue,{className:"h-4 w-4"})]})},s.key)})})})})]})},lt=({appName:o,help:e,config:n,showUserProfile:s})=>{const{theme:t,toggleTheme:a}=Z(),d=()=>{if(!e)return null;const i=r.jsx(Ye,{className:"h-6 w-6"});return typeof e=="string"?r.jsx("a",{href:e,target:ue(e)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:i}):Array.isArray(e)&&e.length>0?r.jsx($e,{icon:i,options:e}):null},u=()=>{if(!n)return null;const i=r.jsx(Ve,{className:"h-6 w-6"});return typeof n=="string"?r.jsx("a",{href:n,target:ue(n)?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:i}):Array.isArray(n)&&n.length>0?r.jsx($e,{icon:i,options:n}):null};return r.jsxs("header",{className:"bg-gray-100 dark:bg-gray-800 pt-6 pb-2 px-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700",children:[r.jsx("h1",{className:"text-xl font-bold",children:o}),r.jsxs("nav",{className:"flex items-center space-x-2",children:[r.jsx("button",{onClick:a,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:t==="light"?r.jsx(He,{className:"h-6 w-6"}):r.jsx(Xe,{className:"h-6 w-6"})}),d(),u(),s&&r.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r.jsx(Ge,{className:"h-6 w-6"})})]})]})},ct=({children:o,...e})=>{const[n,s]=c.useState(!0);return c.useEffect(()=>{const t=()=>{const d=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${d}px`)},a=()=>{s(window.innerHeight>=600),t()};return t(),a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),r.jsxs("div",{className:"h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100",children:[n&&r.jsx(lt,{...e}),r.jsx("main",{className:"flex-grow p-0 md:p-2 min-h-0",children:r.jsx("div",{className:"w-full h-full",children:o})})]})},dt=({isOpen:o,onClose:e,title:n,children:s,size:t="lg"})=>{const{theme:a}=Z(),d=u=>{switch(u){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return r.jsx(me,{appear:!0,show:o,as:c.Fragment,children:r.jsxs(Be,{as:"div",className:F("relative z-50",a),onClose:e,children:[r.jsx(xe,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),r.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:r.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:r.jsx(xe,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r.jsxs(Je,{className:F(d(t),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600"),children:[r.jsx(Ke,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),r.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:r.jsx(We,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),r.jsx("div",{className:"mt-4 text-gray-900 dark:text-gray-100 overflow-y-auto",children:s})]})})})})]})})},ut=({label:o,min:e,max:n,value:s,onChange:t,theme:a,valueLabel:d=l=>Math.round(l),posToVal:u=l=>e+(n-e)*l,valToPos:i=l=>(l-e)/(n-e)})=>{const l=c.useRef(null),f=c.useCallback(P=>{if(l.current){const z=l.current.getBoundingClientRect(),p=Math.max(0,Math.min(1,(P-z.left)/z.width));t(u(p))}},[t,u]),m=P=>{P.preventDefault(),f(P.clientX);const z=N=>{f(N.clientX)},p=()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",p)},$=P=>{P.preventDefault(),P.touches.length>0&&f(P.touches[0].clientX);const z=N=>{N.touches.length>0&&f(N.touches[0].clientX)},p=()=>{document.removeEventListener("touchmove",z),document.removeEventListener("touchend",p)};document.addEventListener("touchmove",z),document.addEventListener("touchend",p)},x=i(s),v=a==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",C=x>.5,y=x>.25&&x<.5||x>.75;return r.jsx("div",{className:"w-full px-3",children:r.jsxs("div",{ref:l,onMouseDown:m,onTouchStart:$,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[r.jsx("div",{className:F("w-full h-full rounded-full",a==="dark"?"bg-gray-700":"bg-gray-300")}),r.jsx("div",{className:F("absolute top-0 left-0 h-full rounded-full",a==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${x*100}%`}}),r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o&&r.jsx("span",{className:F("absolute top-1/2 -translate-y-1/2 text-xs font-medium",a==="dark"?"text-gray-200":C?"text-white":"text-gray-800"),style:{...C?{left:"10px"}:{right:"10px"},textShadow:C?v:"none"},children:o}),r.jsx("span",{className:F("absolute top-1/2 -translate-y-1/2 text-xs font-mono",a==="dark"?"text-gray-200":y?"text-white":"text-gray-800"),style:{...y?{right:`calc(${100-x*100}% + 14px)`}:{left:`calc(${x*100}% + 14px)`},textShadow:y?v:"none"},children:d(s)})]}),r.jsx("div",{className:F("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",a==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${x*100}% - 12px)`}})]})})},ht=36,_e=1e3,ft=10,W=(o,e,n,s,t,a,d)=>{if(n.length===0)return null;let u=null;const[i,l]=[s[0]-t/2,s[1]+a/2];for(let f=0;f<n.length;f++){const m=n[f],$=(m[0]-i)/t*d.width,x=(l-m[1])/a*d.height,v=Math.sqrt(Math.pow(o-$,2)+Math.pow(e-x,2));(u===null||v<u.distance)&&(u={index:f,distance:v})}return u&&u.distance<ht?u:null},mt=({zoom:o,setZoom:e,center:n,setCenter:s,viewWidth:t,viewHeight:a,aspect:d,baseViewSize:u=4,onShowInfo:i,controlPoints:l=[],initialControlPoints:f=[],onControlPointsChange:m,minControlPoints:$,maxControlPoints:x})=>{const[v,C]=c.useState(null),y=c.useRef(v);y.current=v;const[P,z]=c.useState(!1),p=c.useRef(null),N=c.useRef(null),g=c.useCallback(()=>{e(1),s([0,0])},[e,s]),R=c.useCallback(()=>{const b=y.current;if(!(!m||!b)){if(b.type==="point"){if($===void 0||l.length<=$)return;const h=l.filter((_,T)=>T!==b.index);m(h)}else{if(x===void 0||l.length>=x)return;const h=[...l,b.coords];m(h)}C(null)}},[l,x,$,m]),E=c.useCallback((b,h,_)=>{const T=b-_.left,k=h-_.top,S=W(T,k,l,n,t,a,_);if(S)C({type:"point",index:S.index,flashing:!0});else{const w=n[0]-t/2+T/_.width*t,M=n[1]+a/2-k/_.height*a;C({type:"space",coords:[w,M],flashing:!0})}p.current=window.setTimeout(()=>{R(),p.current=null},_e)},[n,l,R,a,t]);return{controlHandlers:{...Ze({onPointerDown:({event:b})=>{const h=b.target.getBoundingClientRect();if(!h)return;const{clientX:_,clientY:T}=b,k=_-h.left,S=T-h.top,w=W(k,S,l,n,t,a,h);w?(z(!0),C({type:"point",index:w.index,flashing:!1})):C(null),i&&(N.current={x:_,y:T},p.current=window.setTimeout(()=>{E(_,T,h)},_e))},onPointerUp:({event:b})=>{z(!1);const h=b.target.getBoundingClientRect();if(!h)return;const{clientX:_,clientY:T}=b,k=_-h.left,S=T-h.top,w=W(k,S,l,n,t,a,h);C(w?{type:"point",index:w.index,flashing:!1}:null),p.current&&(clearTimeout(p.current),p.current=null)},onPointerMove:({event:b})=>{if(P)return;const h=b.target.getBoundingClientRect();if(!h)return;const{clientX:_,clientY:T}=b;if(p.current&&N.current){const H=_-N.current.x,G=T-N.current.y;Math.sqrt(H*H+G*G)>ft&&(clearTimeout(p.current),p.current=null,C(null))}const k=_-h.left,S=T-h.top,w=W(k,S,l,n,t,a,h);if(C(w?{type:"point",index:w.index,flashing:!1}:H=>H?.type==="point"?null:H),!i)return;const M=_-h.left,I=T-h.top,q=n[0]+(M/h.width-.5)*t,U=n[1]+(.5-I/h.height)*a;i([q,U])},onDrag:({event:b,first:h,movement:[_,T],xy:[k,S],memo:w})=>{p.current&&(clearTimeout(p.current),p.current=null,C(I=>I?.type==="point"?{...I,flashing:!1}:null)),b.preventDefault();const M=b.target.getBoundingClientRect();if(M){if(h||!w){const I=k-M.left,q=S-M.top;if(m){const U=W(I,q,l,n,t,a,M);if(U)return{dragMode:"point",pointIndex:U.index}}return{dragMode:"canvas",startCenter:n}}if(w.dragMode==="point"){if(!m)return w;const I=k-M.left,q=S-M.top,U=n[0]-t/2+I/M.width*t,H=n[1]+a/2-q/M.height*a,G=[...l];return G[w.pointIndex]=[U,H],m(G),w}if(w.dragMode==="canvas"){const{startCenter:I}=w;if(!I)return w;const q=_/M.width*t,U=T/M.height*a;return s([I[0]-q,I[1]+U]),w}}},onPinch:({event:b,first:h,offset:[_]})=>{b.preventDefault(),h&&(p.current&&(clearTimeout(p.current),p.current=null),C(null)),e(_)},onWheel:({event:b,delta:[,h]})=>{if(h===0)return;const _=b.target.getBoundingClientRect();if(!_)return;const T=b.clientX-_.left,k=b.clientY-_.top,S=1.1,w=h<0?o*S:o/S;let M,I;d>=1?(I=u/w,M=I*d):(M=u/w,I=M/d);const q=T/_.width-.5,U=.5-k/_.height,H=n[0]+q*(t-M),G=n[1]+U*(a-I);e(w),s([H,G])},onDoubleClick:({event:b})=>{b.preventDefault();const h=b.target.getBoundingClientRect();if(!h)return;const _=b.clientX-h.left,T=b.clientY-h.top;if(m){const k=W(_,T,l,n,t,a,h);if(k&&f&&f[k.index]){const S=[...l];S[k.index]=f[k.index],m(S);return}}g()},onClick:({event:b})=>{if(!i)return;const h=b.currentTarget.getBoundingClientRect();if(!h)return;const{clientX:_,clientY:T}=b,k=_-h.left,S=T-h.top,w=n[0]+(k/h.width-.5)*t,M=n[1]+(.5-S/h.height)*a;i([w,M])}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[o,0]}})(),style:{touchAction:"none"}},highlightedPoint:v}};function pt({canvasName:o="canvas",parameterName:e="control point"}={}){return`### Mouse Controls:

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
- **Reset ${e}:** Double-tap a ${e} to reset its position.`}const Pe=5e3,gt=500,Me=25,xt=({setAspect:o})=>{const{size:e}=Se();return c.useEffect(()=>{o(e.width>0&&e.height>0?e.width/e.height:1)},[e,o]),null},yt=({xRange:o,yRange:e,theme:n,worldToScreen:s,center:t,gridTooDense:a})=>{const d=c.useMemo(()=>{const i=[],[l,f]=o,[m,$]=e,x=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",v="0.8)",C="0.5)";for(let y=Math.ceil(l);y<=Math.floor(f);y++){const P=s([y,m]);if(!P)continue;const z=y===0;a&&!z||i.push(r.jsx("div",{className:"absolute",style:{left:P[0],top:0,width:1,height:"100%",backgroundColor:x+(z?v:C),transform:z?"translateX(-50%)":void 0}},`v-${y}`))}for(let y=Math.ceil(m);y<=Math.floor($);y++){const P=s([l,y]);if(!P)continue;const z=y===0;a&&!z||i.push(r.jsx("div",{className:"absolute",style:{left:0,top:P[1],width:"100%",height:1,backgroundColor:x+(z?v:C),transform:z?"translateY(-50%)":void 0}},`h-${y}`))}return i},[o,e,n,s,a]),u=c.useMemo(()=>{const{pos:i}=he([0,0],t,o,e),l=s(i);if(!l)return null;const f=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return r.jsx("div",{className:"absolute",style:{left:l[0],top:l[1],width:12,height:12,borderRadius:"50%",backgroundColor:f,transform:"translate(-50%, -50%)"}})},[t,o,e,n,s]);return r.jsxs(r.Fragment,{children:[d,u]})},te={default:{width:24,height:24,borderRadius:"50%",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},square:{width:24,height:24,border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},diamond:{width:24,height:24,transform:"rotate(45deg)",border:"4px solid white",cursor:"grab",mixBlendMode:"difference"},triangle:{width:26,height:26,clipPath:"polygon(50% 15%, 100% 85%, 0% 85%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},plus:{width:26,height:26,clipPath:"polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"},star:{width:26,height:26,clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",cursor:"grab",filter:"drop-shadow(0 0 3px white)",mixBlendMode:"difference"}},vt=o=>{if(typeof o=="number"){const e=Object.keys(te);return te[e[o%e.length]||"default"]}return typeof o=="string"&&te[o]?te[o]:te.default};function he(o,e,n,s){const[t,a]=o,[d,u]=n,[i,l]=s;if(t>=d&&t<=u&&a>=i&&a<=l)return{pos:o,clipped:!1};const[f,m]=e,$=t-f,x=a-m;let v=1/0;const C=1e-9;if(Math.abs($)>C){const z=(d-f)/$,p=(u-f)/$;if(z>0){const N=m+z*x;N>=i&&N<=l&&(v=Math.min(v,z))}if(p>0){const N=m+p*x;N>=i&&N<=l&&(v=Math.min(v,p))}}if(Math.abs(x)>C){const z=(i-m)/x,p=(l-m)/x;if(z>0){const N=f+z*$;N>=d&&N<=u&&(v=Math.min(v,z))}if(p>0){const N=f+p*$;N>=d&&N<=u&&(v=Math.min(v,p))}}if(v!==1/0&&v>0)return{pos:[f+v*$,m+v*x],clipped:!0};const y=Math.max(d,Math.min(u,t)),P=Math.max(i,Math.min(l,a));return{pos:[y,P],clipped:!0}}const bt=({children:o,initialZoom:e=1,initialCenter:n=[0,0],baseViewSize:s=4,onInfoOverlay:t,onViewChange:a,className:d,gl:u,controlPoints:i=[],initialControlPoints:l=[],onControlPointsChange:f,controlPointGroups:m=[],minControlPoints:$,maxControlPoints:x,showGrid:v=!0,frameloop:C="always"})=>{const{theme:y}=Z(),[P,z]=c.useState(e),[p,N]=c.useState(n),[g,R]=c.useState(1),[E,ne]=c.useState(!1),[K,b]=c.useState(null),[h,_]=c.useState(0),T=c.useRef(null),k=c.useRef(null),S=c.useRef(null),[w,M]=c.useMemo(()=>{let j,A;return g>=1?(A=s/P,j=A*g):(j=s/P,A=j/g),[j,A]},[P,g,s]),I=c.useMemo(()=>({center:p,viewWidth:w,viewHeight:M,zoom:P}),[p,w,M,P]);c.useEffect(()=>{a&&a(I)},[I,a]);const q=c.useCallback(()=>{T.current&&clearTimeout(T.current),k.current&&clearTimeout(k.current),T.current=window.setTimeout(()=>{_(0),T.current=null},Pe),k.current=window.setTimeout(()=>{b(null),k.current=null},Pe+gt)},[]),U=c.useCallback(j=>{!t&&i.length===0&&!v||(T.current&&clearTimeout(T.current),k.current&&clearTimeout(k.current),j&&b(j),_(1),q())},[t,i.length,v,q]),H=c.useCallback(j=>{q(),f&&f(j)},[f,q]),{controlHandlers:G,highlightedPoint:Y}=mt({zoom:P,setZoom:z,center:p,setCenter:N,viewWidth:w,viewHeight:M,aspect:g,baseViewSize:s,onShowInfo:U,controlPoints:i,initialControlPoints:l,onControlPointsChange:h>0?H:void 0,minControlPoints:$,maxControlPoints:x}),{style:Ee,...Le}=G,[B,J]=c.useMemo(()=>{const j=[p[0]-w/2,p[0]+w/2],A=[p[1]-M/2,p[1]+M/2];return[j,A]},[p,w,M]);c.useEffect(()=>()=>{T.current&&clearTimeout(T.current),k.current&&clearTimeout(k.current)},[]);const ee=c.useCallback(j=>{if(!S.current)return null;const{width:A,height:O}=S.current.getBoundingClientRect(),[L,D]=B,[X,V]=J,ce=(j[0]-L)/w*A,re=(V-j[1])/M*O;return[ce,re]},[B,J,w,M]),Oe=c.useMemo(()=>{if(!v)return null;let j=!1;if(S.current){const{width:A,height:O}=S.current.getBoundingClientRect(),L=A/w,D=O/M;(L<Me||D<Me)&&(j=!0)}return r.jsx("div",{className:"absolute inset-0 pointer-events-none z-5",style:{transition:"opacity 0.5s ease-out",opacity:h},children:r.jsx(yt,{xRange:B,yRange:J,theme:y,worldToScreen:ee,center:p,gridTooDense:j})})},[v,h,B,J,y,ee,w,M,p]),De=c.useMemo(()=>{const j=L=>{const D=L?128:48,X=L?120:44;return{containerStyle:{width:D,height:D},highlightStyle:{width:X,height:X,borderWidth:L?46:8}}},A=i.map((L,D)=>{const{pos:X}=he(L,p,B,J),V=ee(X);if(!V)return null;const ce=vt(m[D]),re=Y?.type==="point"&&Y.index===D,ge=j(re&&Y.flashing);return r.jsxs("div",{className:"absolute",style:{left:V[0],top:V[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...ge.containerStyle},children:[re&&r.jsx("div",{className:Y.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...ge.highlightStyle}}),r.jsx("div",{className:"control-point-animating",style:{...ce,gridColumn:1,gridRow:1}})]},D)});let O=null;if(Y?.type==="space"){const{pos:L}=he(Y.coords,p,B,J),D=ee(L);if(D){const X=j(Y.flashing);O=r.jsx("div",{className:"absolute",style:{left:D[0],top:D[1],transform:"translate(-50%, -50%)",display:"grid",placeItems:"center",...X.containerStyle},children:r.jsx("div",{className:Y.flashing?"highlight-animated-flashing":"highlight-animated-normal",style:{gridColumn:1,gridRow:1,borderRadius:"50%",backgroundColor:"transparent",borderStyle:"solid",borderColor:"transparent",...X.highlightStyle}})})}}return A.every(L=>L===null)&&!O?null:r.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20",style:{transition:"opacity 0.5s ease-out",opacity:h},children:[A,O]})},[i,p,B,J,ee,m,h,Y]),qe=c.useMemo(()=>{if(!K||E||!t)return null;const j=t(K,I);if(!j)return null;const A=typeof j=="string"?{"top-left":j}:j;return Object.keys(A).length===0?null:Object.entries(A).map(([O,L])=>{if(!L)return null;const D=L.trim().split(`
`);return r.jsx("div",{className:F("absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-10",{"top-0 left-0":O==="top-left","top-0 right-0 text-right":O==="top-right","bottom-0 left-0":O==="bottom-left","bottom-0 right-0 text-right":O==="bottom-right","top-0 left-1/2 -translate-x-1/2 text-center":O==="top-center","bottom-0 left-1/2 -translate-x-1/2 text-center":O==="bottom-center"}),style:{opacity:h},children:r.jsx("div",{className:F("p-1 rounded-md text-xs font-mono space-y-1",y==="dark"?"bg-gray-800/50 text-white":"bg-white/50 text-black"),children:D.map((X,V)=>r.jsx("div",{children:X},V))})},O)})},[K,E,t,y,h,I]);return r.jsxs("div",{ref:S,className:F("w-full h-full relative",d),style:Ee,...Le,onContextMenu:j=>j.preventDefault(),children:[r.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden bg-black",children:r.jsxs(rt,{frameloop:C,gl:u,onCreated:({gl:j})=>{j.domElement.addEventListener("webglcontextlost",A=>{A.preventDefault(),ne(!0)},!1)},children:[r.jsx(xt,{setAspect:R}),o(I)]})}),E&&r.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[r.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),r.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),r.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]}),Oe,qe,De]})};function ae(o,e){const n=o<0?"-":"+",s=Math.abs(o),t=e-1;if(t<=0)return n;if(s===0)return n+"0.0".padEnd(t,"0").substring(0,t);const a=String(Math.trunc(s));if(a.length<=t){const d=t-a.length;if(d>1){let u=d-1,i=s.toFixed(u);if(i.split(".")[0].length>a.length&&(u-=i.split(".")[0].length-a.length,u>=0?i=s.toFixed(u):i=String(Math.round(s))),i.length<=t)return n+i}if(a.length<=t){let u=a;return u.length<t&&(u+=".".repeat(t-u.length)),n+u}}if(t>=3){for(let u=t-4;u>=0;u--){let i=s.toExponential(u).replace("e+","e");if(i.length<=t)return n+i}let d=s.toExponential(0).replace("e+","e");if(d.length<=t)return n+d}if(s>1)return n+".".repeat(t);{const d="0.0000";return d.length<=t?n+d:n+"0.0".padEnd(t,"0").substring(0,t)}}function se(o,e,n=7,s="i"){const t=ae(o,n),a=ae(e,n);return`${t}${a}${s}`}function Te(o,e,n=7,s=["(",", ",")"]){const t=ae(o,n),a=ae(e,n);return`${s[0]}${t}${s[1]}${a}${s[2]}`}function wt(o){return"min"in o&&"max"in o}class Fe{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class Q extends Fe{constructor(e,n,s,t,a){super(),this.name=e,this.description=n,this.math=s,this.shader=t;let d,u,i;typeof a=="number"?(i=a,d=1,u=2e3):(i=a.initial,d=a.min,u=a.max);const l=m=>{const $=Math.log(d),x=Math.log(u);return Math.exp($+(x-$)*m)},f=m=>{if(m<=d)return 0;if(m>=u)return 1;const $=Math.log(d),x=Math.log(u);return(Math.log(m)-$)/(x-$)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:i,min:d,max:u,posToVal:l,valToPos:f}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(e){}getInitialControlPoints(){return[]}getCanvasOverlayString(e,n){}getControlPointValues(e){}getControlPointGroups(e){return[]}}class pe extends Q{constructor(e,n,s,t,a,d){super(e,n,s,t,a),this.controlPointInfo=d}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(e,n){if(e.length>0)return`${this.controlPointInfo.name} = ${se(...e[0])}`}getControlPointValues(e){if(e.length>0)return[{label:this.controlPointInfo.name,value:se(...e[0])}]}getControlPointUniforms(e){if(e.length>0)return{[this.controlPointInfo.uniformName]:e[0]}}getControlPointGroups(e){return[0]}}const zt=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,$t=`uniform int iterations;
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
`,de=16;function _t(o){const e=[];for(let n=0;n<o;n++){const s=2*Math.PI*n/o;e.push([Math.cos(s),Math.sin(s)])}return e}class Pt extends Fe{constructor(){super(),this.name="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=zt,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return _t(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return $t}getCanvasOverlayString(e,n){return`p = ${e.length}`}getControlPointValues(e){return e.map((n,s)=>({label:`Root ${s+1}`,value:se(...n)}))}getControlPointUniforms(e){if(e.length>0&&e.length<=de){const n=e.flat(),s=new Array(de*2).fill(0);return n.forEach((t,a)=>s[a]=t),{num_roots:e.length,roots:s}}}getControlPointGroups(e){return Array(e.length).fill(0)}getControlPointMinMax(){return[2,de]}}const Mt=`The Mandelbrot set is one of the most famous fractals, known for its
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
`,Tt=`uniform int iterations;

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
`,kt=new Q("Mandelbrot","The Mandelbrot set.",Mt,Tt,200),jt=`The Phoenix fractal is a variation of the Mandelbrot and Julia sets. The
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
`,Ct=`uniform int iterations;
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
`,Nt=[0,0],Rt=new pe("Phoenix","Phoenix fractal set (Mandelbrot variant).",jt,Ct,200,{name:"P",initialValue:Nt,uniformName:"phoenixP"}),St=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,It=`uniform int iterations;
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
`,Ft=[-.7,.27015],At=new pe("Julia","Julia sets.",St,It,200,{name:"C",initialValue:Ft,uniformName:"juliaC"}),Et=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,Lt=`uniform int iterations;
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
`,Ot=[-.85,-.6],Dt=new pe("Lambda","Lambda fractal (logistic map).",Et,Lt,200,{name:"Lambda",initialValue:Ot,uniformName:"lambda"}),qt=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,Ut=`uniform int iterations;
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
`,Ht=new Q("Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",qt,Ut,80),Xt=`This is another type of magnet fractal. The iteration is defined by:
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
`,Gt=`uniform int iterations;
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
`,Yt=new Q("Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",Xt,Gt,80),Vt=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,Bt=`uniform int iterations;

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
`,Jt=new Q("Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",Vt,Bt,80),Kt=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,Wt=`uniform int iterations;

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
`,Zt=new Q("Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",Kt,Wt,200),Ae=[new Pt,kt,Rt,At,Dt,Ht,Yt,Jt,Zt];function ke(o,e,n,s){return`vec3(${o}) + vec3(${e}) * cos(6.28318 * (vec3(${n}) * t + vec3(${s})))`}const fe={grayscale:"vec3(t)",cosmic:ke("0.5, 0.5, 0.5","0.5, 0.5, 0.5","1.0, 1.0, 1.0","0.00, 0.33, 0.67"),nebula:ke("0.8, 0.8, 0.8","0.2, 0.3, 0.4","1.0, 0.9, 0.8","0.1, 0.2, 0.3"),monochrome:"vec3(t, t*t, t*t*t)"};function Qt(o){return fe[o]||fe.grayscale}const en=Object.fromEntries(Object.keys(fe).map(o=>[o,o.charAt(0).toUpperCase()+o.slice(1)])),tn="cosmic",nn=`
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
`,rn=`
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
`;function on(o,e,n){if(Array.isArray(n))if(n.length===2)o[e]={value:new oe(n[0],n[1])};else if(n.length===3)o[e]={value:new st(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const s=[];for(let t=0;t<n.length;t+=2)s.push(new oe(n[t],n[t+1]));o[e]={value:s}}else o[e]={value:n};else o[e]={value:n}}function an(o,e,n){if(o.uniforms[e])if(Array.isArray(n))if(n.length===2)o.uniforms[e].value.fromArray(n);else if(n.length===3)o.uniforms[e].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const s=[];for(let t=0;t<n.length;t+=2)s.push(new oe(n[t],n[t+1]));o.uniforms[e].value=s}else o.uniforms[e].value=n;else o.uniforms[e].value=n}const sn=({fractal:o,center:e,viewWidth:n,viewHeight:s,parameters:t,controlPoints:a,colorScheme:d})=>{const u=Se(f=>f.invalidate),i=c.useMemo(()=>{const f={FRACTAL_SHADER:o.getShaderCode(),EVALUATE_COLOR:Qt(d)},m={center:{value:new oe(...e)},viewWidth:{value:n},viewHeight:{value:s}};o.getGuiParameters().forEach(x=>{m[x.name]={value:t[x.name]}});const $=o.getControlPointUniforms(a);if($)for(const[x,v]of Object.entries($))on(m,x,v);return new ot({uniforms:m,vertexShader:nn,fragmentShader:rn.replace(/%(\w+)%/g,(x,v)=>String(f[v]))})},[o,d]);c.useEffect(()=>{i.uniforms.center.value.fromArray(e),i.uniforms.viewWidth.value=n,i.uniforms.viewHeight.value=s,o.getGuiParameters().forEach(m=>{i.uniforms[m.name].value=t[m.name]});const f=o.getControlPointUniforms(a);if(f)for(const[m,$]of Object.entries(f))an(i,m,$);u()},[i,e,n,s,t,a,u,o]);const l=c.useMemo(()=>{const f=new at;return f.setDrawRange(0,3),f},[]);return r.jsx("mesh",{material:i,geometry:l})},ie=Ae;ie.find(o=>o.name==="Mandelbrot")||ie[0];const ln=({initialFractal:o,initialColorScheme:e,onFractalChange:n})=>{const{theme:s}=Z(),[t,a]=c.useState(o),[d,u]=c.useState(t.getInitialGuiParameters()),[i,l]=c.useState(t.getInitialControlPoints()),[f,m]=c.useState(e||tn);c.useEffect(()=>{const g=new URLSearchParams(window.location.search);g.set("type",t.name),g.set("colors",f),window.history.replaceState({},"",`${window.location.pathname}?${g}`)},[t,f]);const $=ie.map(g=>({name:g.name,value:g.name})),x=g=>{const R=ie.find(E=>E.name===g);R&&(a(R),n(R),u(R.getInitialGuiParameters()),l(R.getInitialControlPoints()),y(E=>E+1))},v=Object.entries(en).map(([g,R])=>({name:R,value:g})),[C,y]=c.useState(0),P=t.getGuiParameters().map(g=>wt(g)?r.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:r.jsx(ut,{label:g.displayName,min:g.min,max:g.max,value:d[g.name],onChange:R=>u(E=>({...E,[g.name]:R})),theme:s,posToVal:g.posToVal,valToPos:g.valToPos})},g.name):null),z=t.getControlPointValues(i),[p,N]=t.getControlPointMinMax();return r.jsxs("div",{className:F("w-full h-full flex flex-col md:flex-row overflow-hidden",s==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[r.jsxs("div",{className:"flex-shrink-0 p-2 md:p-4 md:w-56 lg:w-64 overflow-y-auto overflow-x-hidden",children:[r.jsx("h2",{className:"hidden md:block text-lg font-bold w-full mb-2",children:"Controls"}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("div",{className:"min-w-[140px] flex-1",children:r.jsx(ze,{options:$,selected:t.name,onChange:g=>x(g),theme:s})}),r.jsx("div",{className:"min-w-[140px] flex-1",children:r.jsx(ze,{label:"Colors",options:v,selected:v.find(g=>g.value===f)?.name,onChange:g=>m(g),theme:s})}),P,z&&z.length>0&&r.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden md:flex md:flex-col",style:{backgroundColor:s==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:z.map(g=>r.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[r.jsx("p",{className:F("text-sm font-medium",s==="dark"?"text-gray-300":"text-gray-700"),children:g.label}),r.jsx("p",{className:F("text-base font-mono",s==="dark"?"text-gray-200":"text-gray-800"),children:g.value})]},g.label))})]})]}),r.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 md:p-2 relative",style:{minWidth:0,minHeight:0},children:r.jsx(bt,{baseViewSize:4,frameloop:"demand",onInfoOverlay:(g,R)=>{const E=["[",", ","]"],ne=Te(R.center[0]-R.viewWidth/2,R.center[0]+R.viewWidth/2,7,E),K=Te(R.center[1]-R.viewHeight/2,R.center[1]+R.viewHeight/2,7,E),b={"top-left":se(...g),"top-right":`Re: ${ne}
Im: ${K}`},h=t.getCanvasOverlayString(i,d);return h&&(b["bottom-center"]=h),b},controlPoints:i,initialControlPoints:t.getInitialControlPoints(),onControlPointsChange:l,controlPointGroups:t.getControlPointGroups(i),minControlPoints:p,maxControlPoints:N,gl:{powerPreference:"default",antialias:!1},children:({center:g,viewWidth:R,viewHeight:E})=>r.jsx(sn,{fractal:t,center:g,viewWidth:R,viewHeight:E,parameters:d,controlPoints:i,colorScheme:f})},C)})]})},le=Ae,cn=le.find(o=>o.name==="Mandelbrot")||le[0];function dn(){const o=new URLSearchParams(window.location.search),e=o.get("type")??o.get("name"),n=o.get("colors"),[s,t]=c.useState(null),[a,d]=c.useState(null),{theme:u}=Z(),i=le.find(y=>y.name===e)||cn,[l,f]=c.useState(i),m=le.find(y=>y.name===a)||l,$=[{key:"controls",name:"Exploring the Fractal",href:"#controls",icon:r.jsx(Qe,{})},{key:"math",name:`About ${l.name} Fractal`,href:`#math?fractal=${l.name}`,icon:r.jsx(et,{})}];c.useEffect(()=>{const y=()=>{if(window.location.hash.startsWith("#math")){const z=new URLSearchParams(window.location.hash.split("?")[1]).get("fractal")??l.name;d(z),t("math")}else window.location.hash.startsWith("#controls")?t("controls"):t(null)};return window.addEventListener("hashchange",y),y(),()=>{window.removeEventListener("hashchange",y)}},[l.name]);const x=()=>{t(null),d(null),window.location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)},v=()=>{if(s==="math"){const y=m;if(!y)return r.jsx("p",{children:"Fractal not found."});const P=`## ${y.name} Fractal

${y.math}`;return r.jsx(ye,{remarkPlugins:[be,we],rehypePlugins:[ve],children:P})}if(s==="controls"){const P=`
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

${pt({canvasName:"fractal view",parameterName:"complex parameter"})}`;return r.jsx(ye,{remarkPlugins:[be,we],rehypePlugins:[ve],children:P})}return null},C=()=>s==="math"?`About ${m.name} Fractal`:s==="controls"?"Exploring the Fractal":"";return r.jsxs(r.Fragment,{children:[r.jsx(ct,{appName:"Fantastic Fractals",help:$,children:r.jsx(c.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(ln,{initialFractal:l,initialColorScheme:n??void 0,onFractalChange:f})})}),r.jsx(dt,{isOpen:s!==null,onClose:x,title:C(),size:"xl",children:r.jsx("div",{className:F("prose dark:prose-invert max-w-none",u==="dark"?"dark":""),children:v()})})]})}function un(){return r.jsx(it,{children:r.jsx(dn,{})})}tt.createRoot(document.getElementById("root")).render(r.jsx(nt.StrictMode,{children:r.jsx(un,{})}));
