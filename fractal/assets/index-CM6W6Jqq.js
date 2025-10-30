import{r as l,j as e,d as Ze,e as Z,l as Dt,f as Ht,K as Ct,y as Bt,g as Wt,h as qt,i as Ut,k as Gt,m as Vt,n as Xt,o as Fe,p as rt,q as at,t as it,v as ct,w as lt,x as Yt,z as ht,A as Jt,B as Zt,C as Kt,D as Qt,O as dt,E as en,Q as tn,G as _t,H as nn,I as Ke,J as on,L as ut,M as sn,N as rn,P as an,S as cn,T as ln}from"./other-BG5ztU_u.js";import{C as hn,u as dn,V as Le,S as un,B as fn,a as mn}from"./three-CAEcyaVE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Tt=l.createContext(void 0),pn=({children:s})=>{const[t,n]=l.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});l.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),c=h=>{localStorage.getItem("theme")||n(h.matches?"dark":"light")};return r.addEventListener("change",c),()=>{r.removeEventListener("change",c)}},[]),l.useEffect(()=>{const r=window.document.documentElement;t==="dark"?r.classList.add("dark"):r.classList.remove("dark")},[t]);const o=()=>{n(r=>{const c=r==="light"?"dark":"light";return localStorage.setItem("theme",c),c})},a=l.useMemo(()=>({theme:t,toggleTheme:o}),[t]);return e.jsx(Tt.Provider,{value:a,children:s})},fe=()=>{const s=l.useContext(Tt);if(s===void 0)throw new Error("useTheme must be used within a ThemeProvider");return s},Oe=s=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},ft=({r:s,g:t,b:n})=>{s/=255,t/=255,n/=255;const o=Math.max(s,t,n),a=Math.min(s,t,n);let r=0,c=0,h=o;const i=o-a;if(c=o===0?0:i/o,o!==a){switch(o){case s:r=(t-n)/i+(t<n?6:0);break;case t:r=(n-s)/i+2;break;case n:r=(s-t)/i+4;break}r/=6}return{h:r,s:c,v:h}},je=({h:s,s:t,v:n})=>{let o=0,a=0,r=0;const c=Math.floor(s*6),h=s*6-c,i=n*(1-t),g=n*(1-h*t),d=n*(1-(1-h)*t);switch(c%6){case 0:o=n,a=d,r=i;break;case 1:o=g,a=n,r=i;break;case 2:o=i,a=n,r=d;break;case 3:o=i,a=g,r=n;break;case 4:o=d,a=i,r=n;break;case 5:o=n,a=i,r=g;break}return{r:Math.round(o*255),g:Math.round(a*255),b:Math.round(r*255)}},ze=({r:s,g:t,b:n})=>"#"+((1<<24)+(s<<16)+(t<<8)+n).toString(16).slice(1),mt=s=>{const t=je(s),n=t.r/255,o=t.g/255,a=t.b/255,r=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),c=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),h=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4);return .2126*r+.7152*c+.0722*h>.5?"#000000":"#FFFFFF"},gn=({initialColors:s,onChange:t,width:n="100%",height:o=200,labels:a})=>{const{theme:r}=fe(),[c,h]=l.useState(()=>s.map(u=>{const m=Oe(u);return m?ft(m):{h:0,s:1,v:1}})),[i,g]=l.useState(0),[d,P]=l.useState(null),[F,w]=l.useState([]),[T,L]=l.useState([]),[I,E]=l.useState(0),[z,A]=l.useState(0),N=l.useRef(null),_=l.useRef(null),$=l.useRef(null),W=l.useRef(null);l.useEffect(()=>{h(s.map(u=>{const m=Oe(u);return m?ft(m):{h:0,s:1,v:1}})),i>=s.length&&g(0)},[s,i]);const H=l.useMemo(()=>c[i]||{h:0,s:1,v:1},[c,i]),k=l.useCallback(()=>{const u=N.current;if(!u)return;const m=u.getContext("2d");if(!m)return;const{width:S,height:f}=u,b=c[d??i]||H,C=ze(je({h:b.h,s:1,v:1}));m.clearRect(0,0,S,f);const j=m.createLinearGradient(0,0,S,0);j.addColorStop(0,"rgba(255,255,255,1)"),j.addColorStop(1,"rgba(255,255,255,0)");const G=m.createLinearGradient(0,0,0,f);G.addColorStop(0,"rgba(0,0,0,0)"),G.addColorStop(1,"rgba(0,0,0,1)"),m.fillStyle=C,m.fillRect(0,0,S,f),m.fillStyle=j,m.fillRect(0,0,S,f),m.fillStyle=G,m.fillRect(0,0,S,f)},[H,c,i,d]),R=l.useCallback(()=>{const u=_.current;if(!u)return;const m=u.getContext("2d");if(!m)return;const{width:S,height:f}=u;m.clearRect(0,0,S,f);const b=m.createLinearGradient(0,0,S,0);for(let C=0;C<=360;C+=60)b.addColorStop(C/360,`hsl(${C}, 100%, 50%)`);m.fillStyle=b,m.fillRect(0,0,S,f)},[]),M=l.useCallback(()=>{k(),R()},[k,R]);l.useEffect(()=>{const u=$.current,m=W.current;if(u&&m){const S=new ResizeObserver(()=>{E(u.getBoundingClientRect().width),A(m.getBoundingClientRect().height)});return S.observe(u),E(u.getBoundingClientRect().width),A(m.getBoundingClientRect().height),()=>S.disconnect()}},[]),l.useEffect(()=>{const u=N.current,m=_.current;u&&m&&I>0&&z>0&&(u.width=I,u.height=z,m.width=I,m.height=48,M())},[I,z,M]),l.useEffect(()=>{M()},[H,M]);const D=(u,m)=>{const S=m??i,f=c[S];if(!f)return;const b={...f,...u};u.h!==void 0&&f.s===0&&(b.s=1);const C=[...c];C[S]=b,h(C),t(C.map(j=>ze(je(j))))},U=(u,m,S)=>{if(!S)return[];const f=S.getBoundingClientRect(),b=[],j=40/2;return c.forEach((G,V)=>{const ee=G.s*f.width,Y=(1-G.v)*f.height;Math.abs(u-ee)<j&&Math.abs(m-Y)<j&&b.push(V)}),b.sort((G,V)=>G-V)},O=(u,m)=>{if(!m)return[];const S=m.getBoundingClientRect(),f=[],C=40/2;return c.forEach((j,G)=>{const V=j.h*S.width;Math.abs(u-V)<C&&f.push(G)}),f.sort((j,G)=>j-G)},B=Ze({onClick:({event:u})=>{const m=u.currentTarget.getBoundingClientRect(),S=u.clientX-m.left,f=u.clientY-m.top,b=U(S,f,N.current);if(b.length>0){const C=b.indexOf(i);if(C!==-1){const j=(C+1)%b.length;g(b[j])}else g(b[0])}else{if(!N.current)return;const j=Math.max(0,Math.min(1,S/m.width)),G=Math.max(0,Math.min(1,1-f/m.height));D({s:j,v:G},i)}},onDragStart:({event:u})=>{const m=u.currentTarget.getBoundingClientRect(),S=u.clientX-m.left,f=u.clientY-m.top,b=U(S,f,N.current),C=b.includes(i);let j=i;if(b.length>0&&!C)j=b[0],g(j);else if(b.length===0){if(!N.current)return;const V=Math.max(0,Math.min(1,S/m.width)),ee=Math.max(0,Math.min(1,1-f/m.height));D({s:V,v:ee},i)}P(j)},onDrag:({event:u,down:m})=>{if(u.preventDefault(),d===null||!m)return;const S=d,f=N.current;if(!f)return;const b=f.getBoundingClientRect(),C=u.clientX,j=u.clientY;if(C>=b.left&&C<=b.right&&j>=b.top&&j<=b.bottom){const G=(C-b.left)/b.width,V=1-(j-b.top)/b.height;D({s:G,v:V},S)}},onDragEnd:()=>{P(null)},onPointerMove:({event:u,dragging:m})=>{if(m)return;const S=u.currentTarget.getBoundingClientRect(),f=u.clientX-S.left,b=u.clientY-S.top,C=U(f,b,N.current);w(C)},onPointerLeave:()=>{w([])}},{drag:{threshold:3,filterTaps:!0},eventOptions:{passive:!1}}),p=Ze({onClick:({event:u})=>{const m=u.currentTarget.getBoundingClientRect(),S=u.clientX-m.left,f=O(S,_.current);if(f.length>0){const b=f.indexOf(i);if(b!==-1){const C=(b+1)%f.length;g(f[C])}else g(f[0])}else{if(!_.current)return;const C=Math.max(0,Math.min(1,S/m.width));D({h:C},i)}},onDragStart:({event:u})=>{const m=u.currentTarget.getBoundingClientRect(),S=u.clientX-m.left,f=O(S,_.current),b=f.includes(i);let C=i;if(f.length>0&&!b)C=f[0],g(C);else if(f.length===0){if(!_.current)return;const G=Math.max(0,Math.min(1,S/m.width));D({h:G},i)}P(C)},onDrag:({event:u,down:m})=>{if(u.preventDefault(),d===null||!m)return;const S=d,f=_.current;if(!f)return;const b=f.getBoundingClientRect(),C=u.clientX;if(C>=b.left&&C<=b.right){const j=(C-b.left)/b.width;D({h:j},S)}},onDragEnd:()=>{P(null)},onPointerMove:({event:u,dragging:m})=>{if(m)return;const S=u.currentTarget.getBoundingClientRect(),f=u.clientX-S.left,b=O(f,_.current);L(b)},onPointerLeave:()=>{L([])}},{drag:{threshold:3,filterTaps:!0},eventOptions:{passive:!1}}),x=(u,m,S)=>{const f=u.s*I,b=(1-u.v)*z,C=m===i,j=m===d,G=a?.[m],V=mt(u);let ee=V;return S&&(ee=V==="#FFFFFF"?"#FFFF00":"darkgoldenrod"),e.jsx("div",{className:Z("absolute rounded-full flex items-center justify-center font-bold",C||j?"w-10 h-10 -translate-x-5 -translate-y-5 border-2 text-xl":"w-6 h-6 -translate-x-3 -translate-y-3 border-2 text-sm"),style:{left:f,top:b,borderColor:ee,backgroundColor:ze(je(u)),color:V,userSelect:"none"},children:G},`plane-marker-${m}`)},v=(u,m,S)=>{const f=u.h*(_.current?.width??0),b=m===i,C=m===d,j=a?.[m],G=mt({h:u.h,s:1,v:1});let V=G;return S&&(V=G==="#FFFFFF"?"#FFFF00":"darkgoldenrod"),e.jsx("div",{className:Z("absolute top-0 rounded-full flex items-center justify-center font-bold",b||C?"h-10 w-10 -translate-x-5 translate-y-1 border-2 text-xl":"h-12 w-6 -translate-x-3 border-2 text-sm"),style:{left:f,borderColor:V,backgroundColor:ze(je({h:u.h,s:1,v:1})),color:G,userSelect:"none"},children:j},`hue-marker-${m}`)},y=(u,m,S)=>{const f=u.length;if(f===0)return[];let b=-1;if(m.length>0){const Y=m.indexOf(i);if(Y!==-1){const oe=(Y+1)%m.length;b=m[oe]}else b=m[0]}const C=[];for(let Y=1;Y<f;Y++)C.push((i+f-Y)%f);const j=C.filter(Y=>m.includes(Y)&&Y!==i);return[...C.filter(Y=>!m.includes(Y)),i,...j].filter(Y=>Y>=0&&Y<f).map(Y=>S(u[Y],Y,Y===b))};return e.jsxs("div",{ref:$,style:{width:n},className:"flex flex-col gap-5",children:[e.jsxs("div",{ref:W,className:"relative cursor-pointer",style:{height:o,touchAction:"none"},...B(),children:[e.jsx("canvas",{ref:N}),y(c,F,x)]}),e.jsxs("div",{className:"relative cursor-pointer h-12",style:{touchAction:"none"},...p(),children:[e.jsx("canvas",{ref:_,height:48}),y(c,T,v)]})]})},et=s=>{if(s.startsWith("#")||s.startsWith("/"))return!1;try{return new URL(s,window.location.origin).hostname!==window.location.hostname}catch{return!1}},Ne=()=>new URLSearchParams(window.location.hash.substring(1)),xn=(s,t=!1)=>{const n=Ne();Object.entries(s).forEach(([a,r])=>{r==null?n.delete(a):n.set(a,r)});const o=n.toString();if(window.location.hash.substring(1)!==o){const a=window.location.href,r=`${window.location.pathname}${window.location.search}`,c=o?`${r}#${o}`:r;t?window.history.pushState(null,"",c):window.history.replaceState(null,"",c);try{const h=new HashChangeEvent("hashchange",{oldURL:a,newURL:c});window.dispatchEvent(h)}catch{window.dispatchEvent(new Event("hashchange"))}}},We=()=>typeof window<"u"&&!!window?.__TAURI__,bn=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),tt=()=>{if(typeof navigator>"u")return!1;const s=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},yn=()=>We()&&tt(),vn=()=>We()&&bn(),wn=(s,t)=>!s||typeof s=="number"?t:s.key?s.key:typeof s.value=="string"||typeof s.value=="number"?s.value:typeof s.label=="string"?s.label:t,$n=tt()?"xl":"md",de={xs:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs",icon:"h-4 w-4",sub:"py-1"},sm:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm",icon:"h-5 w-5",sub:"py-1.5"},md:{button:"px-4 py-1.5 text-base",item:"px-4 py-2 text-base",icon:"h-6 w-6",sub:"py-1.5"},lg:{button:"px-5 py-2 text-base",item:"px-5 py-2 text-lg",icon:"h-7 w-7",sub:"py-2"},xl:{button:"px-6 py-2.5 text-lg",item:"px-6 py-3 text-xl",icon:"h-7 w-7",sub:"py-2.5"}};function pt(s){return typeof s=="object"&&!!s?.isSubEntry}function jt(s){const t=[];let n=!0;for(const o of s)typeof o=="object"&&o?.isSubEntry?t.push(n):(n=!1,t.push(!1));return t}function Cn(s,t,n){if(s==null||s[n])return jt(t);const o=[];let a=!1;for(let r=0;r<t.length;++r){const c=t[r];typeof c=="object"&&c?.isSubEntry?o.push(a):r===n?(a=!0,o.push(!0)):(a=!1,o.push(!1))}return o}const kt=({value:s,defaultValue:t,onChange:n,options:o,placeholder:a,renderOption:r,renderValue:c,minContentWidth:h,contentWidth:i,maxContentHeight:g,className:d,menuClassName:P,theme:F,size:w=$n,align:T="left",iconMode:L="icon-text",mainIcon:I,buttonWidth:E,iconOnlySize:z})=>{const[A,N]=l.useState(t),_=l.useRef(null),[$,W]=l.useState({}),H=fe?.(),k=F??H?.theme??"light",R=s!==void 0?s:A,M=(f,b)=>{if(f.value===void 0&&f.href===void 0){b.preventDefault(),b.stopPropagation();return}s===void 0&&N(f.value),n?.(f.value)},D=()=>{if(_.current){const f=_.current.getBoundingClientRect(),b={top:`${f.bottom}px`};T==="left-side"?(b.left="0px",b.bottom="0px"):T==="right-side"?(b.right="0px",b.bottom="0px"):(b.minWidth=`${f.width}px`,T==="left"?b.left=`${f.left}px`:b.right=`${window.innerWidth-f.right}px`),W(b)}},U=o?.find(f=>f&&typeof f=="object"&&f.value===R&&!f.href),O=l.useMemo(()=>{switch(L){case"main-icon":return I;case"item-icon":case"icon-text":return U?.icon??I;case"text-only":default:return null}},[L,I,U?.icon]),B=U?.label??a,p=L==="main-icon"||L==="item-icon",x=o.some(f=>typeof f=="number"),v=T==="left-side"||T==="right-side",y=o.some(f=>pt(f)),[u,m]=l.useState(y?jt(o):null),S=f=>{const{focus:b,disabled:C,selectable:j,className:G}=f;return Z(G,!i&&"whitespace-nowrap",de[w].item,C?k==="dark"?"text-gray-500":"text-gray-400":k==="dark"?"text-white":"text-gray-900",b&&!C&&j&&(k==="dark"?"bg-gray-700":"bg-gray-100"),(C||!j)&&"cursor-not-allowed")};return e.jsxs(Dt,{as:"div",className:Z("relative",d),style:!p&&E?{width:`${E}px`}:void 0,children:[e.jsx(Ht,{ref:_,onClick:D,className:Z(p?["p-2 rounded-full focus:outline-none",k==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",de[w].button,k==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:p?e.jsx("span",{className:Z(!z&&de[w].icon,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),style:z?{width:`${z}px`,height:`${z}px`}:void 0,children:O}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex items-center truncate",children:c?c(R,U):e.jsxs(e.Fragment,{children:[O&&e.jsx("span",{className:Z(de[w].icon,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:O}),e.jsx("strong",{children:B})]})}),e.jsx("span",{className:"ml-2 text-xs",children:"▼"})]})}),e.jsx(Ct,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(Bt,{style:{...$,minWidth:h?`${h}px`:$.minWidth,width:i?`${i}px`:void 0},className:Z("fixed z-50 mt-1 rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",T!=="left-side"&&T!=="right-side"&&"w-auto",{"origin-top-left":T==="left"||T==="left-side","origin-top-right":T==="right"||T==="right-side"},k==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black",P),children:e.jsx("div",{className:Z("py-1",{"h-full":v||x,"flex flex-col":x}),style:{maxHeight:!v&&g?`${g}px`:void 0,overflowY:"auto"},children:o.map((f,b)=>{if(f===null)return e.jsx("div",{className:"my-1 h-px bg-gray-200 dark:bg-gray-700"},`divider-${b}`);if(typeof f=="number")return e.jsx("div",{style:{flexGrow:f}},`spacer-${b}`);if(f?.isSubEntry&&!u?.[b])return null;const C=wn(f,b),j=!!f.href,G=f.href?et(f.href):!1,V=f.href!==void 0||f.value!==void 0,ee=!!f.disabled;return e.jsx(Wt,{disabled:f.disabled||!V,as:"div",children:({focus:Y,disabled:oe})=>{const xe=f?.isSubEntry?null:u?.[b],we=f.icon&&e.jsx("div",{className:de[w].icon,children:f.icon}),ie=y&&e.jsx("div",{children:xe==null?e.jsx("div",{className:de[w].sub,children:e.jsx("div",{className:Z("mx-2",de[w].icon)})}):pt(o[b+1])&&e.jsx("button",{className:Z("h-full",de[w].sub),onClick:X=>{X.stopPropagation(),X.preventDefault(),m(Q=>Cn(Q,o,b))},children:e.jsx("div",{className:Z("mx-2",de[w].icon,"border border-solid rounded-sm flex items-center justify-center",k==="dark"?"border-gray-600 hover:bg-gray-700":"border-gray-400 hover:bg-gray-100"),children:xe?e.jsx(qt,{}):e.jsx(Ut,{})})})}),ue=r?r(f):e.jsxs("div",{className:"flex items-center gap-4",children:[we,e.jsxs("div",{className:"flex-1 w-full flex items-baseline",children:[f.label,G&&e.jsx(Gt,{className:"ml-3 h-4 w-4"})]})]}),K="flex w-full items-center justify-between",ne=S({focus:Y,disabled:ee,selectable:V,className:"flex items-center justify-between w-full"});return j&&!oe?e.jsxs("div",{className:K,children:[ie,e.jsx("a",{href:f.href,target:G?"_blank":"_self",rel:"noopener noreferrer",className:ne,children:ue})]}):V&&!r&&typeof f.label=="string"?e.jsxs("div",{className:K,children:[ie,e.jsx("button",{onClick:X=>M(f,X),disabled:oe,className:ne,style:{textAlign:"left"},children:ue})]}):e.jsxs("div",{className:K,children:[ie,e.jsx("div",{onClick:V?X=>M(f,X):void 0,className:ne,children:ue})]})}},C)})})})})]})};new TextEncoder;new TextDecoder;function _n(s){const t=Array.from(s,o=>String.fromCodePoint(o)).join("");return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function De(s,t){const n=s<0?"-":"+",o=Math.abs(s),a=t-1;if(a<=0)return n;if(o===0)return n+"0.0".padEnd(a,"0").substring(0,a);const r=String(Math.trunc(o));if(r.length<=a){const c=a-r.length;if(c>1){let h=c-1,i=o.toFixed(h);if(i.split(".")[0].length>r.length&&(h-=i.split(".")[0].length-r.length,h>=0?i=o.toFixed(h):i=String(Math.round(o))),i.length<=a)return n+i}if(r.length<=a){let h=r;return h.length<a&&(h+=".".repeat(a-h.length)),n+h}}if(a>=3){for(let h=a-4;h>=0;h--){let i=o.toExponential(h).replace("e+","e");if(i.length<=a)return n+i}let c=o.toExponential(0).replace("e+","e");if(c.length<=a)return n+c}if(o>1)return n+".".repeat(a);{const c="0.0000";return c.length<=a?n+c:n+"0.0".padEnd(a,"0").substring(0,a)}}function He(s,t,n=7,o="i"){const a=De(s,n),r=De(t,n);return`${a}${r}${o}`}function gt(s,t,n=7,o=["(",", ",")"]){const a=De(s,n),r=De(t,n);return`${o[0]}${a}${o[1]}${r}${o[2]}`}const St=l.createContext(void 0);function Tn(s){return new Promise((t,n)=>{window.speechSynthesis.cancel(),setTimeout(()=>{window.speechSynthesis.speaking?(window.speechSynthesis.cancel(),setTimeout(()=>{console.log("[TTS SPEAKING]",s.text),window.speechSynthesis.speak(s)},100)):(console.log("[TTS SPEAKING]",s.text),window.speechSynthesis.speak(s))},100)})}const jn=({children:s,defaultLanguage:t="en",storageKey:n="language",audioMap:o})=>{const a=l.useMemo(()=>o?o instanceof Map?o:new Map(Object.entries(o)):new Map,[o]),[r,c]=l.useState(()=>{if(typeof window<"u"){const H=localStorage.getItem(n);if(H==="en"||H==="zh")return H;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return t}),[h,i]=l.useState(!1),[g,d]=l.useState(!1),[P,F]=l.useState(!1),[w,T]=l.useState(null),[L,I]=l.useState(null),E=l.useRef(null),z=l.useRef(null);l.useEffect(()=>{typeof window<"u"&&localStorage.setItem(n,r)},[r,n]);const A=H=>c(H),N=()=>c(H=>H==="en"?"zh":"en"),_=l.useCallback(()=>{window?.speechSynthesis?.cancel(),z.current&&(z.current.pause(),z.current.src="",z.current=null),d(!1),F(!1),T(null),I(null),E.current=null},[]),$=l.useCallback((H,k)=>{h&&(T(H),I(k??H))},[h]);l.useEffect(()=>{const H=R=>{if(typeof window>"u"||!window.speechSynthesis){console.warn("SpeechSynthesis is not supported in this environment.");return}d(!0);const M=new SpeechSynthesisUtterance(R);M.lang=r==="en"?"en-US":"zh-CN",M.onend=()=>{d(!1),T(null),I(null)},M.onerror=D=>{d(!1),D.error!=="interrupted"&&(console.error("Speech error:",D),T(null),I(null))},Tn(M)},k=R=>{F(!0),console.log("[Playing Audio]",R);const M=new Audio(R);z.current=M,M.onended=()=>{F(!1),T(null),I(null),z.current=null},M.onerror=D=>{console.error(`Error playing audio from ${R}.`,D),F(!1),z.current=null},M.play().catch(D=>{console.error("Audio playback failed.",D),F(!1),z.current=null})};if(h&&w&&L&&w!==E.current){let R=!1;return(async()=>{if(window.speechSynthesis&&window.speechSynthesis.cancel(),z.current&&(z.current.pause(),z.current.src="",z.current=null),await new Promise(D=>setTimeout(D,100)),!R){if(E.current=w,a.size===0){H(w);return}try{const U=new TextEncoder().encode(L),O=await crypto.subtle.digest("SHA-1",U);if(R)return;const B=_n(new Uint8Array(O)),p=a.get(B);p?k(p):H(w)}catch{}}})(),()=>{R=!0}}},[h,w,L,r,a]),l.useEffect(()=>{(!h||!w)&&(g||P)&&_()},[h,w,g,P,_]);const W=l.useMemo(()=>({language:r,setLanguage:A,toggleLanguage:N,isAudioEnabled:h,setAudioEnabled:i,speak:$,isSpeaking:g||P,cancelSpeech:_}),[r,h,w,g,P]);return e.jsx(St.Provider,{value:W,children:s})},kn=()=>{const s=l.useContext(St);if(!s)throw new Error("useLanguage must be used within a LanguageProvider");return s};let Ge;const xt=(s,t,n="normal",o="sans-serif")=>{if(!s)return 0;const a=`${n} ${t}px ${o}`;if(typeof document>"u"||typeof window>"u"){const h=n==="bold"?.75:.6;return s.length*t*h}Ge||(Ge=document.createElement("canvas"));const r=Ge.getContext("2d");if(!r){const h=n==="bold"?.75:.6;return s.length*t*h}return r.font=a,r.measureText(s).width},Ie=(s,t,n,o,a)=>{const r=Array.isArray(s)&&s.length>0,c=typeof s=="string"&&s.length>0;if(!r&&!c&&!t)return null;if(a&&c&&!t)return e.jsx("a",{href:s,target:et(s)?"_blank":"_self",rel:"noopener noreferrer",className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",style:{padding:Ee},children:Fe.cloneElement(n,{style:{height:re,width:re}})});const h=r?s.map(w=>{if(!w)return null;const{key:T,text:L,href:I,icon:E,...z}=w;return{label:L,href:I??void 0,icon:E,disabled:I===null,...z}}):c?[{href:s,label:s,icon:n}]:[],{options:i=[],...g}=t??{};let d;const P=h.length>0,F=i.length>0;if(!P)d=i;else if(!F)d=h;else{const w=i.findIndex(T=>typeof T=="number");if(w===-1)d=[...i,null,...h];else{const T=i.slice(0,w),L=i[w],I=i.slice(w+1);d=[...T],T.length>0&&d.push(null),d.push(...h),L>0?d.push(L):I.length>0&&d.push(null),d.push(...I)}}return e.jsx(kt,{options:d,align:o,mainIcon:n,iconMode:"main-icon",iconOnlySize:re,...g})},Ve=20,Sn=16,Mt=24,re=32,zt=Math.max(Mt*2,re),_e=zt,Ee=(zt-re)/2,Xe=8,Ye=8,bt=4,Mn=({title:s,audio:t,appIconUrl:n,homeUrl:o,sideMenu:a,sideMenuConfig:r,helpMenu:c,helpMenuConfig:h,gearMenu:i,gearMenuConfig:g,userMenu:d,userMenuConfig:P,headerWidth:F,languages:w,renderTitle:T,askTitleWidth:L})=>{const{theme:I,toggleTheme:E}=fe(),{language:z,setLanguage:A,isAudioEnabled:N,setAudioEnabled:_}=kn(),[$,W]=l.useState(0),H=l.useRef(null),[k,R]=l.useState(!0),M=l.useRef(null),[D,U]=l.useState(),[O,B]=l.useState(!1);l.useEffect(()=>{w&&w.length>0&&!w.includes(z)&&A(w[0])},[z,w,A]),l.useEffect(()=>{const X=M.current;if(F||!X)return;const Q=new ResizeObserver(q=>{q[0]&&U(q[0].contentRect.width)});return Q.observe(X),()=>Q.disconnect()},[F]);const p=!!(c&&c.length>0||h),x=!!(i&&i.length>0||g),v=!!(d&&d.length>0||P),y=!!(w&&w.length>0),u=!!(Array.isArray(a)&&a.length>0||r),{unclampedTitleWidthNormal:m,unclampedTitleWidthCompact:S,boldTitleWidth:f,effectiveMinTitleWidth:b,singleLineNormalTitleWidth:C}=l.useMemo(()=>{const X=F??D;if(!X)return{unclampedTitleWidthNormal:0,unclampedTitleWidthCompact:0,boldTitleWidth:0,effectiveMinTitleWidth:0,singleLineNormalTitleWidth:0};let Q=0;u&&Q++,o&&Q++;let q=1;t&&q++,y&&q++,p&&q++,x&&q++,v&&q++;let J=1;p&&J++;const te=ye=>{const ce=Q*_e,qe=ye*_e+(ye>1?(ye-1)*bt:0);let me=2;u&&me++,o&&me++;const Ce=me>1?(me-1)*Ye:0,Ue=2*Xe;return X-Ue-ce-qe-Ce},se=te(q),le=te(J),he=typeof s=="string"?xt(s,Ve,"normal"):0,be=L??he,$e=typeof s=="string"?xt(s,Ve,"bold"):0;return{unclampedTitleWidthNormal:se,unclampedTitleWidthCompact:le,boldTitleWidth:$e,effectiveMinTitleWidth:be,singleLineNormalTitleWidth:he}},[F,D,u,o,t,y,p,x,v,s,L]),j=m<b;l.useEffect(()=>{if(!H.current)return;if(F??D){const q=j?S:m,J=C>q;O!==J&&B(J);let te=!0;J?te=!0:f>q&&(te=!1),k!==te&&R(te),W(Math.max(0,q))}},[F,D,j,k,O,m,S,f,b,C]);const G=()=>Ie(a,r,e.jsx(Xt,{}),"left-side"),V=()=>Ie(c,h,e.jsx(Zt,{}),"right",!0),ee=()=>{const X=[];if(j){X.push(0),X.push({label:`Theme: ${I.charAt(0).toUpperCase()+I.slice(1)}`,value:"theme-toggle",icon:I==="light"?e.jsx(rt,{}):e.jsx(at,{})}),t&&X.push({label:"Audio: "+(N?"Enabled":"Disabled"),value:"audio-toggle",icon:N?e.jsx(it,{}):e.jsx(ct,{})}),w&&w.length>0&&(X.length>0&&X.push(null),w.forEach(te=>{X.push({label:te==="en"?"English":"中文",value:`lang-${te}`,icon:z===te?e.jsx(lt,{}):e.jsx("div",{})})}));const J=[];typeof d=="string"?J.push({label:"Account",href:d,icon:e.jsx(ht,{})}):Array.isArray(d)&&d.forEach(te=>{te&&J.push({...te,label:te.text,href:te.href??void 0})}),J.length>0&&(X.length>0&&X.push(null),X.push(...J))}const Q=g?.options?[...g.options]:[];return X.length>0&&(Q.length>0&&Q.push(null),Q.push(...X)),Ie(i,{...g,options:Q,onChange:J=>{J==="theme-toggle"?E():J==="audio-toggle"?_(!N):J.startsWith("lang-")?A(J.substring(5)):g?.onChange?.(J)}},e.jsx(Jt,{}),"right",!j)},Y=()=>e.jsx("button",{onClick:E,className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",style:{padding:Ee},children:I==="light"?e.jsx(rt,{style:{height:re,width:re}}):e.jsx(at,{style:{height:re,width:re}})}),oe=()=>t?e.jsx("button",{onClick:()=>_(!N),className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",title:N?"Disable Audio":"Enable Audio",style:{padding:Ee},children:N?e.jsx(it,{style:{height:re,width:re}}):e.jsx(ct,{style:{height:re,width:re}})}):null,xe=()=>Ie(d,P,e.jsx(ht,{}),"right",!0),we=()=>{if(!w||w.length===0)return null;const X=w.map(q=>({label:q==="en"?"English":"中文",value:q,icon:z===q?e.jsx(lt,{}):e.jsx("div",{})})),Q=q=>A(q);return e.jsx(kt,{options:X,align:"right",mainIcon:e.jsx(Yt,{}),iconMode:"main-icon",iconOnlySize:re,onChange:Q})},ie=typeof T=="function"?T($):null,ue=ie??s,K=n&&!ie&&k&&m-_e-Ye>f,ne=j?x||t||y||v:x;return e.jsx("header",{ref:M,className:"bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center h-12",style:{paddingLeft:Xe,paddingRight:Xe},children:e.jsxs("div",{className:"flex-1 flex items-center",style:{gap:Ye},children:[G(),o&&e.jsx("a",{href:o,target:et(o)?"_blank":"_self",rel:"noopener noreferrer",className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",title:"Home",style:{padding:Ee},children:e.jsx(Vt,{style:{height:re,width:re}})}),e.jsx("div",{className:"flex-1 flex justify-center items-center min-w-0 h-12 overflow-clip",ref:H,style:F?{width:`${$}px`}:{},children:typeof ue!="string"?e.jsx("div",{className:"inline-block w-full",children:ie}):e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[K&&e.jsx("img",{src:n,alt:"App icon",className:"block rounded",style:{height:_e,width:_e}}),e.jsx("h1",{className:`min-w-0 ${k?"font-bold":""} ${O?"text-wrap text-center line-clamp-2":"truncate"}`,style:{fontSize:O?Sn:Ve,lineHeight:O?`${Mt}px`:"normal"},children:ue})]})}),e.jsxs("nav",{className:"flex items-center",style:{gap:bt},children:[(!j||!ne)&&Y(),!j&&oe(),!j&&we(),ne&&ee(),V(),!j&&xe()]})]})})},It={zoom:1,center:[0,0]},zn=36,yt=1e3,In=10,ve=(s,t,n,o,a,r,c,h)=>{let i=null;const[g,d]=[a[0]-r/2,a[1]+c/2],P=a[0]-r/2+s/h.width*r,F=a[1]+c/2-t/h.height*c;for(let w=0;w<n.length;w++){const T=n[w],L=(T[0]-g)/r*h.width,I=(d-T[1])/c*h.height,E=Math.sqrt(Math.pow(s-L,2)+Math.pow(t-I,2));(i===null||E<i.distance)&&(i={type:"control",index:w,distance:E})}for(let w=0;w<o.length;w++){const T=o[w],L=(T[0]-g)/r*h.width,I=(d-T[1])/c*h.height,E=Math.sqrt(Math.pow(s-L,2)+Math.pow(t-I,2));(i===null||E<i.distance)&&(i={type:"display",index:w,distance:E})}return i&&i.distance<zn?{...i,position:[P,F]}:null},An=({view:s,setZoomAndCenter:t,onShowInfo:n,controlPoints:o=[],onControlPointsChange:a,controlPointParams:r,onControlEvent:c})=>{const{zoom:h,center:i,worldWidth:g,worldHeight:d,aspect:P,baseViewSize:F=2,initialView:w=It}=s,T=r?.controlPoints??[],L=r?.displayPoints??[],I=l.useCallback(v=>{if(!(!v||!r))return(v.type==="control"?r.controlPoints:r.displayPoints)?.[v.index]?.key},[r]),E=L.map(v=>v.position).filter(v=>!!v),z=T.map(v=>v.position).filter(v=>!!v),A=r?.min,N=r?.max,[_,$]=l.useState(null),W=l.useRef(_);W.current=_;const[H,k]=l.useState(!1),R=l.useRef(null),M=l.useRef(null),D=l.useCallback(v=>{if(v&&v.type==="control"&&z&&z[v.index]){const y=[...o];y[v.index]=z[v.index],a&&a(y)}else t(()=>w)},[t,w,o,a,z]),U=l.useCallback(()=>{const v=W.current;if(!(!a||!v)){if(v.mode==="delete"){if(A===void 0||o.length<=A)return;if(c?.("delete",v.index,o[v.index])){$(null);return}const y=o.filter((u,m)=>m!==v.index);a(y)}else if(v.mode==="insert"){if(N===void 0||o.length>=N)return;if(c?.("insert",void 0,v.coords)){$(null);return}const y=[...o,v.coords];a(y)}$(null)}},[o,N,A,a,c]),O=l.useCallback((v,y,u)=>{const m=v-u.left,S=y-u.top,f=ve(m,S,o,E,i,g,d,u);if(f&&f.type==="control"){if(A===void 0||A>=o.length)return;$({mode:"delete",index:f.index})}else{if(N===void 0||N<=o.length)return;const b=i[0]-g/2+m/u.width*g,C=i[1]+d/2-S/u.height*d;$({mode:"insert",coords:[b,C]})}R.current=window.setTimeout(()=>{U(),R.current=null},yt)},[i,o,E,U,d,g,A,N]),B=Ze({onPointerDown:({event:v})=>{v.preventDefault();const y=v.currentTarget.getBoundingClientRect();if(!y)return;const{clientX:u,clientY:m}=v,S=u-y.left,f=m-y.top,b=ve(S,f,o,E,i,g,d,y);b&&b.type==="control"?(k(!0),$({mode:"modify",index:b.index,coords:o[b.index]})):$(null),M.current={x:u,y:m},R.current=window.setTimeout(()=>{O(u,m,y)},yt)},onPointerUp:({event:v})=>{k(!1),v.currentTarget.getBoundingClientRect()&&($(null),R.current&&(clearTimeout(R.current),R.current=null))},onPointerMove:({event:v})=>{if(H)return;const y=v.currentTarget.getBoundingClientRect();if(!y)return;const{clientX:u,clientY:m}=v;if(R.current&&M.current){const Y=u-M.current.x,oe=m-M.current.y;Math.sqrt(Y*Y+oe*oe)>In&&(clearTimeout(R.current),R.current=null,$(null))}const S=u-y.left,f=m-y.top,b=ve(S,f,o,E,i,g,d,y);if(!n)return;const C=u-y.left,j=m-y.top,G=i[0]+(C/y.width-.5)*g,V=i[1]+(.5-j/y.height)*d,ee=b?{...b,method:"hover",key:I(b)}:{method:"hover"};n({coords:[G,V],activePoint:ee})},onDrag:({event:v,first:y,movement:[u,m],xy:[S,f],memo:b})=>{R.current&&(clearTimeout(R.current),R.current=null,$(j=>j?.mode==="delete"?{mode:"modify",index:j.index,coords:o[j.index]}:null)),v.preventDefault();const C=v.currentTarget.getBoundingClientRect();if(C){if(y||!b){const j=S-C.left,G=f-C.top;if(a){const V=ve(j,G,o,E,i,g,d,C);if(V&&V.type==="control")return c?.("init-modify",V.index,V.position)?{dragMode:"none"}:{dragMode:"point",pointIndex:V.index}}return{dragMode:"canvas",startCenter:i}}if(b.dragMode==="point"){if(!a)return b;const j=S-C.left,G=f-C.top,V=i[0]-g/2+j/C.width*g,ee=i[1]+d/2-G/C.height*d;if(c?.("modify",b.pointIndex,[V,ee]))return b;const Y=[...o];return Y[b.pointIndex]=[V,ee],$({mode:"modify",index:b.pointIndex,coords:[V,ee]}),a(Y),b}if(b.dragMode==="canvas"){const{startCenter:j}=b;if(!j)return b;const G=u/C.width*g,V=m/C.height*d;return t(ee=>({...ee,center:[j[0]-G,j[1]+V]})),b}}},onDragEnd:({event:v,memo:y})=>{if(y?.dragMode==="point"){const u=v.currentTarget.getBoundingClientRect();if(!u)return;const{clientX:m,clientY:S}=v,f=m-u.left,b=S-u.top,C=i[0]-g/2+f/u.width*g,j=i[1]+d/2-b/u.height*d;c?.("done-modify",y.pointIndex,[C,j])}},onPinch:({event:v,first:y,offset:[u]})=>{v.preventDefault(),y&&(R.current&&(clearTimeout(R.current),R.current=null),$(null)),t(m=>({...m,zoom:u}))},onWheel:({event:v,delta:[,y]})=>{if(y===0)return;const u=v.currentTarget.getBoundingClientRect();if(!u)return;const m=v.clientX-u.left,S=v.clientY-u.top,f=1.1,b=y<0?h*f:h/f;let C,j;P>=1?(j=F/b,C=j*P):(C=F/b,j=C/P);const G=m/u.width-.5,V=.5-S/u.height,ee=i[0]+G*(g-C),Y=i[1]+V*(d-j);t(()=>({zoom:b,center:[ee,Y]}))},onDoubleClick:({event:v})=>{v.preventDefault();const y=v.currentTarget.getBoundingClientRect();if(!y)return;const u=v.clientX-y.left,m=v.clientY-y.top,S=ve(u,m,o,E,i,g,d,y),f=[i[0]-g/2+u/y.width*g,i[1]+d/2-m/y.height*d];if(!c?.("reset",S?.type==="control"?S.index:void 0,f))return D(S)},onClick:({event:v})=>{const y=v.currentTarget.getBoundingClientRect();if(!y)return;const{clientX:u,clientY:m}=v,S=u-y.left,f=m-y.top,b=i[0]+(S/y.width-.5)*g,C=i[1]+(.5-f/y.height)*d,j=ve(S,f,o,E,i,g,d,y);if(c?.("select",j?.type==="control"?j.index:void 0,[b,C]),!n)return;const G=j?{...j,method:"click",key:I(j)}:{method:"click"};n({coords:[b,C],activePoint:G})}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[h,0]}}),p={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...B(),onContextMenu:v=>v.preventDefault(),style:p},pointToChange:_}},Nn=1e4,En=4e3;function Rn(s="view",t="control point",n=!1,o=!1){let a=`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${s} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${s} to reset
  the pan and zoom to their original values.
`;return t&&(a+=`
Some visualizations may feature control points, each representing a
${t}. If not visible, hover over or single-click the ${s}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${t}:** Click and drag a control point to move it.
- **Reset ${t}:** Double-click a ${t} to reset its position.
`,n&&(a+=`- **Add ${t}:** Long-press on an empty area to add a new ${t}.
`),o&&(a+=`- **Remove ${t}:** Long-press on an existing ${t} to remove it.
`)),a+=`
### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${s} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${s} to reset the
  pan and zoom to their original or best-fit values.
`,t&&(a+=`
Some visualizations may feature control points, each representing a
${t}. If not visible, tap anywhere on the ${s} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${t}:** Drag a control point to move it.
- **Reset ${t}:** Double-tap a ${t} to reset its position.
`,n&&(a+=`- **Add ${t}:** Long-press on an empty area to add a new ${t}.
`),o&&(a+=`- **Remove ${t}:** Long-press on an existing ${t} to remove it.
`)),a}const Pn=500,vt=25,Fn=32,Ln=22,On=({xRange:s,yRange:t,theme:n,worldToScreen:o,center:a,gridTooDense:r})=>{const c=l.useMemo(()=>{const i=[],[g,d]=s,[P,F]=t,w=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",T="0.8)",L="0.5)";for(let I=Math.ceil(g);I<=Math.floor(d);I++){const E=o([I,P]);if(!E)continue;const z=I===0;r&&!z||i.push(e.jsx("div",{className:"absolute",style:{left:E[0],top:0,width:1,height:"100%",backgroundColor:w+(z?T:L),transform:z?"translateX(-50%)":void 0}},`v-${I}`))}for(let I=Math.ceil(P);I<=Math.floor(F);I++){const E=o([g,I]);if(!E)continue;const z=I===0;r&&!z||i.push(e.jsx("div",{className:"absolute",style:{left:0,top:E[1],width:"100%",height:1,backgroundColor:w+(z?T:L),transform:z?"translateY(-50%)":void 0}},`h-${I}`))}return i},[s,t,n,o,r]),h=l.useMemo(()=>{const{pos:i}=Re([0,0],a,s,t),g=o(i);if(!g)return null;const d=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return e.jsx("div",{className:"absolute",style:{left:g[0],top:g[1],width:12,height:12,borderRadius:"50%",backgroundColor:d,transform:"translate(-50%, -50%)"}})},[a,s,t,n,o]);return e.jsxs(e.Fragment,{children:[c,h]})};function Re(s,t,n,o){const[a,r]=s,[c,h]=n,[i,g]=o;if(a>=c&&a<=h&&r>=i&&r<=g)return{pos:s,clipped:!1};const[d,P]=t,F=a-d,w=r-P;let T=1/0;const L=1e-9;if(Math.abs(F)>L){const z=(c-d)/F,A=(h-d)/F;if(z>0){const N=P+z*w;N>=i&&N<=g&&(T=Math.min(T,z))}if(A>0){const N=P+A*w;N>=i&&N<=g&&(T=Math.min(T,A))}}if(Math.abs(w)>L){const z=(i-P)/w,A=(g-P)/w;if(z>0){const N=d+z*F;N>=c&&N<=h&&(T=Math.min(T,z))}if(A>0){const N=d+A*F;N>=c&&N<=h&&(T=Math.min(T,A))}}if(T!==1/0&&T>0)return{pos:[d+T*F,P+T*w],clipped:!0};const I=Math.max(c,Math.min(h,a)),E=Math.max(i,Math.min(g,r));return{pos:[I,E],clipped:!0}}const Dn=["N","M","S"],Ae=["W","C","E"],Hn=({info:s,theme:t,infoBoxOpacity:n,showInfoOverlay:o,mouseCoords:a,activePoint:r,controlPoints:c,controlPointParams:h,worldToScreen:i,size:g})=>{const d={N:{W:[],C:[],E:[]},M:{W:[],C:[],E:[]},S:{W:[],C:[],E:[]}},P=s.map(k=>typeof k=="object"&&typeof k?.position=="string"?k.position:null).filter(k=>k!=null),F=P.some(k=>k.startsWith("N")),w=P.some(k=>k.startsWith("S")),T=.5+.1*((F?1:0)-(w?1:0)),L=o==="hidden"?0:o==="always"?1:n,I=Z("inline-block py-1 px-2 rounded-md iota-overlay-infobox",t==="dark"?"text-white":"text-black"),E=k=>{const R=k.trim();if(!R)return null;const M=R.split(`
`);return M.map((D,U)=>e.jsxs(Fe.Fragment,{children:[D,U<M.length-1?e.jsx("br",{}):null]},U))},z=(k,R)=>typeof k=="string"?e.jsx("div",{className:I,children:E(k)},R):e.jsx(Fe.Fragment,{children:k},R),A=l.useMemo(()=>{if(!r||r.index==null)return null;let k;return r.type==="control"&&c[r.index]?k=c[r.index]:r.type==="display"&&h?.displayPoints?.[r.index]?.position&&(k=h.displayPoints[r.index].position),k?i(k):null},[r,c,h,i]),N=[],_={focus:0,mouse:0},$=(k,R,M,D,U,O={})=>{const[B,p]=R,{pixelWidth:x,pixelHeight:v}=g,{fontSize:y,maxWidth:u=x*.6,xRadius:m=0,yRadius:S=0}=O,f=typeof M=="string",b=u>0?Math.min(Math.max(B,u/2),x-u/2):B,C=Fn+(U?D*Ln:0),j={opacity:L,position:"absolute",left:b,transform:"translateX(-50%)"};p<v*T?j.top=p+C+S:j.bottom=v-p+C+S,f&&(j.overflow="hidden",u&&(j.maxWidth=u)),N.push(e.jsx("div",{style:j,className:"absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-3",children:f?e.jsx("div",{className:I,style:{fontSize:y},children:E(M)}):M},k))};s.forEach((k,R)=>{if(!k&&k!=="")return;if(typeof k=="string"){const p=A||a;if(!p)return;const x=A?"focus":"mouse",v=_[x];_[x]=v+1,$(`auto-${R}`,p,k,v,!0);return}const{position:M,content:D,fontSize:U,maxWidth:O}=k,B={fontSize:U,maxWidth:O};if(Array.isArray(M)){if(M.length!==2)return;const p=M,x=i(p)??p;$(`coord-${R}`,x,D,0,!1,B);return}if(typeof M=="object"&&M!==null){if("x"in M&&"y"in M&&Object.keys(M).length===2){const p=[M.x,M.y],x=i(p)??p;$(`coord-${R}`,x,D,0,!1,B);return}if("xMin"in M&&"xMax"in M&&"yMin"in M&&"yMax"in M&&Object.keys(M).length===4){const[p,x]=i([M.xMin,M.yMin])??[0,0],[v,y]=i([M.xMax,M.yMax])??[0,0];$(`coord-${R}`,[(p+v)*.5,(x+y)*.5],D,0,!1,{...B,xRadius:Math.abs((v-p)*.5),yRadius:Math.abs((y-x)*.5)});return}}if(M==="focus"){if(!A)return;$(`focus-${R}`,A,D,0,!1,B);return}if(M==="mouse"){if(!a)return;$(`mouse-${R}`,a,D,0,!1,B);return}if(typeof M=="string"&&M.length===2){const p=M.charAt(0),x=M.charAt(1);(p==="N"||p==="M"||p==="S")&&(x==="W"||x==="C"||x==="E")&&d[p][x].push({key:`row-${M}-${R}`,value:D})}});const W={W:"items-start text-left",C:"items-center text-center",E:"items-end text-right"},H=Dn.map(k=>{if(!Ae.map(x=>d[k][x]).some(x=>x.length>0))return null;const D=4,U={left:D,right:D,opacity:L};k==="N"?U.top=D:k==="S"?U.bottom=D:(U.top="50%",U.transform="translateY(-50%)");const O=Ae.filter(x=>d[k][x].length>0),B=d[k].C.length>0,p={W:"",C:"",E:""};return O.length===1?p[O[0]]="flex-1":O.length===2&&O.includes("W")&&O.includes("E")&&!B?(p.W="basis-1/2",p.E="basis-1/2",p.C="hidden"):B&&O.length>=2&&Ae.forEach(x=>{p[x]="basis-1/3"}),e.jsx("div",{style:U,className:"absolute pointer-events-none transition-opacity duration-500 ease-out z-3 px-2 py-1",children:e.jsx("div",{className:"flex w-full gap-3",children:Ae.map(x=>{const v=d[k][x],y=W[x],u=p[x]||(v.length>0?"flex-1":"hidden");return v.length===0?e.jsx("div",{className:Z("flex flex-col",y,u)},`col-${k}-${x}`):e.jsx("div",{className:Z("flex flex-col gap-2",y,u),children:v.map(m=>z(m.value,m.key))},`col-${k}-${x}`)})})},`row-${k}`)});return e.jsxs(e.Fragment,{children:[H,N]})},Bn=({children:s,viewParams:t,onInfoOverlay:n,onOverlayStatusChange:o,onViewChange:a,className:r,controlPoints:c=[],onControlPointsChange:h,controlPointParams:i,showInfoOverlay:g="active",showGridOverlay:d=!0,showInfoTimeout:P=Nn,pointClassNames:F,onControlEvent:w})=>{const{theme:T}=fe(),[L,I]=l.useState(()=>t?.initialView??It),[E,z]=l.useState(1),[A,N]=l.useState({pixelWidth:0,pixelHeight:0}),[_,$]=l.useState(null),[W,H]=l.useState(0),k=l.useRef(null),R=l.useRef(null),[M,D]=l.useState(0),U=l.useRef(null),O=l.useRef(null),[B,p]=l.useState(null),x=l.useRef(),v=i?.timeout??En;l.useEffect(()=>{const K=O.current;if(!K)return;const ne=new ResizeObserver(X=>{for(let Q of X){const{width:q,height:J}=Q.contentRect;z(q>0&&J>0?q/J:1),N({pixelWidth:q,pixelHeight:J})}});return ne.observe(K),()=>ne.disconnect()},[]);const y=l.useMemo(()=>{const{zoom:K,center:ne}=L,X=t?.baseViewSize??4;let Q,q;return E>=1?(q=X/K,Q=q*E):(Q=X/K,q=Q/E),{...t,zoom:K,center:ne,...A,worldWidth:Q,worldHeight:q,aspect:E}},[L,E,A,t]);l.useEffect(()=>{const K={linear:ce=>ce,easeInOutQuad:ce=>ce<.5?2*ce*ce:1-Math.pow(-2*ce+2,2)/2},ne=t?.overrideView;if(!ne)return;const X=t?.duration??500,Q=t?.easing??"linear",q=K[Q]||K.linear,J=L.zoom,te=ne.zoom,se=L.center,le=ne.center,he=Math.log(J),be=Math.log(te);let $e=null;const ye=ce=>{$e===null&&($e=ce);const qe=ce-$e,me=X>0?Math.min(qe/X,1):1,Ce=q(me),Ue=se[0]+(le[0]-se[0])*Ce,st=se[1]+(le[1]-se[1])*Ce,Lt=he+(be-he)*Ce,Ot=Math.exp(Lt);I({zoom:Ot,center:[Ue,st]}),me<1&&(x.current=requestAnimationFrame(ye))};return x.current=requestAnimationFrame(ye),()=>{x.current&&cancelAnimationFrame(x.current)}},[t?.overrideView,t?.duration,t?.easing]),l.useEffect(()=>{a&&a(y)},[y,a]);const u=l.useCallback(()=>{U.current&&clearTimeout(U.current),U.current=window.setTimeout(()=>{o?.("infobox",!1),D(0),U.current=null},P)},[P,o]),m=l.useCallback(()=>{k.current&&clearTimeout(k.current),R.current&&clearTimeout(R.current),k.current=window.setTimeout(()=>{o?.("markers",!1),H(0),k.current=null},v),R.current=window.setTimeout(()=>{p(null),R.current=null},v+Pn)},[v,o]),S=l.useCallback(K=>{const ne=c.length>0||(i?.displayPoints?.length??0)>0;n&&(U.current&&clearTimeout(U.current),o?.("infobox",!0),D(1),u()),(ne||d)&&(k.current&&clearTimeout(k.current),R.current&&clearTimeout(R.current),K.coords&&$(K.coords),o?.("markers",!0),H(1),B?.method==="click"&&K.activePoint.method==="hover"||(K.activePoint.type?p(K.activePoint):p(null)),m())},[n,c.length,i,d,B,p,u,m,o]),f=l.useCallback(K=>{u(),m(),h&&h(K)},[h,m,u]),{controlHandlers:b,pointToChange:C}=An({view:y,setZoomAndCenter:I,onShowInfo:S,controlPoints:c,onControlPointsChange:W>0?f:void 0,controlPointParams:i,onControlEvent:w}),{style:j,...G}=b,V=l.useMemo(()=>{const K=y.worldWidth!==0?y.worldWidth/y.pixelWidth:1,ne=y.worldHeight!==0?y.worldHeight/y.pixelHeight:1;return{...j,"--screen-to-world-x":String(K),"--screen-to-world-y":String(ne)}},[j,y.pixelWidth,y.worldWidth,y.pixelHeight,y.worldHeight]),[ee,Y]=l.useMemo(()=>{const K=[y.center[0]-y.worldWidth/2,y.center[0]+y.worldWidth/2],ne=[y.center[1]-y.worldHeight/2,y.center[1]+y.worldHeight/2];return[K,ne]},[y.center,y.worldWidth,y.worldHeight]);l.useEffect(()=>()=>{k.current&&clearTimeout(k.current),U.current&&clearTimeout(U.current),R.current&&clearTimeout(R.current)},[]);const oe=l.useCallback(K=>{if(!O.current)return null;const{width:ne,height:X}=O.current.getBoundingClientRect(),[Q,q]=ee,[J,te]=Y,se=(K[0]-Q)/y.worldWidth*ne,le=(te-K[1])/y.worldHeight*X;return[se,le]},[ee,Y,y.worldWidth,y.worldHeight]),xe=l.useMemo(()=>{if(!d)return null;let K=!1;if(O.current){const{pixelWidth:ne,pixelHeight:X,worldWidth:Q,worldHeight:q}=y,J=ne/Q,te=X/q;(J<vt||te<vt)&&(K=!0)}return e.jsx("div",{className:"absolute inset-0 pointer-events-none z-1",style:{transition:"opacity 0.5s ease-out",opacity:W},children:e.jsx(On,{xRange:ee,yRange:Y,theme:T,worldToScreen:oe,center:y.center,gridTooDense:K})})},[d,W,ee,Y,T,oe,y]),we=l.useMemo(()=>{const K=q=>{const J=F?.[q];return J!==void 0?J:"default-overlay-marker-"+q},ne=c.map((q,J)=>{const{pos:te}=Re(q,y.center,ee,Y),se=oe(te);if(!se)return null;const le=B?.type==="control"&&B.index===J,be=i?.controlPoints?.[J]?.className??K(le?"control-active":"control-normal");return be?e.jsx("div",{"data-testid":"control-marker",className:Z(be,"absolute"),style:{left:se[0],top:se[1],transform:"translate(-50%, -50%)"}},`control-${J}`):null}),X=(i?.displayPoints??[]).map((q,J)=>{if(!q.position)return null;const{pos:te}=Re(q.position,y.center,ee,Y),se=oe(te);if(!se)return null;const le=B?.type==="display"&&B.index===J,he=q.className??K(le?"display-active":"display-normal");return he?e.jsx("div",{"data-testid":"display-marker",className:Z(he,"absolute"),style:{left:se[0],top:se[1],transform:"translate(-50%, -50%)"}},`display-${J}`):null});let Q=null;if(C){const{pos:q}=Re(C.mode!=="delete"?C.coords:c[C.index],y.center,ee,Y),J=oe(q);if(J){const te=K(C.mode+"-control");te&&(Q=e.jsx("div",{className:Z(te,"absolute"),"data-testid":"point-to-change-marker",style:{left:J[0],top:J[1],transform:"translate(-50%, -50%)"}}))}}return ne.every(q=>q===null)&&X.every(q=>q===null)&&!Q?null:e.jsxs("div",{"data-testid":"markers-overlay",className:"absolute inset-0 z-2",style:{transition:"opacity 0.5s ease-out",opacity:W},children:[ne,X,Q]})},[c,y.center,ee,Y,oe,i,W,C,B,F]),ie=l.useMemo(()=>!_||!n?null:n(_,y,B?.key,B?.method)||null,[_,n,y,B]),ue=l.useMemo(()=>!ie||ie.length===0||A.pixelWidth===0||A.pixelHeight===0?null:e.jsx(Hn,{info:ie,theme:T,infoBoxOpacity:M,showInfoOverlay:g,mouseCoords:_,activePoint:B??void 0,controlPoints:c,controlPointParams:i,worldToScreen:oe,size:A}),[ie,T,M,g,_,B,c,i,oe,A]);return e.jsxs("div",{ref:O,className:Z("w-full h-full relative",r,T==="dark"?"theme-dark":"theme-light"),style:V,...G,children:[e.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden",children:s(y,B)}),xe,we,ue]})},Wn=({placeholderId:s,style:t={display:"block"}})=>(l.useEffect(()=>(ezstandalone.cmd.push(function(){ezstandalone.showAds(s)}),()=>{ezstandalone.cmd.push(function(){ezstandalone.destroyPlaceholders(s)})})),e.jsx("div",{id:`ezoic-pub-ad-placeholder-${s}`,style:t})),qn=({client:s,slot:t,style:n={display:"block"},format:o="auto",responsive:a="true"})=>(l.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.error("AdSense error:",r)}},[]),e.jsx("ins",{className:"adsbygoogle",style:n,"data-ad-client":s,"data-ad-slot":t,"data-ad-format":o,"data-full-width-responsive":a})),Un=[{title:"Fantastic Fractals 0.2.0",items:[{text:"[Browser App]",href:"https://driota.xyz/fractal/"},{text:"[Binary Download]",href:"https://github.com/dr4iota/dr4iota.github.io/releases/tag/fractal-latest"},{text:"[Google Play]",href:"https://play.google.com/store/apps/details?id=xyz.driota.fractal"},{text:"[Amazon Store]",href:"https://www.amazon.com/Doctor-Iota-Fantastic-Fractals/dp/B0FNGZB5TN"}]},{title:"Triangular Geometry 0.1.0",items:[{text:"[Browser WebApp]",href:"https://driota.xyz/trikona/"},{text:"[Binary Download]",href:"https://github.com/dr4iota/dr4iota.github.io/releases/tag/trikona-latest"},{text:"[Google Play]",href:"https://play.google.com/store/apps/details?id=xyz.driota.trikona"}]},{title:"Support Us",items:[{text:"Buy Me a Coffee",href:"https://www.buymeacoffee.com/driota"},{text:"Patreon",href:"https://www.patreon.com/driota"},{text:"iOS and Mac OS Apps",href:"https://driota.xyz/ios.html"},{text:"Drop a Note",href:"https://docs.google.com/forms/d/e/1FAIpQLScyC0R1nBUOIg7OLLurmSB886AVjqVJPUc8G_c-WMK-BYV9mg/viewform?usp=dialog"}]}],Gn={sections:Un},wt=({onSide:s,dataUrl:t})=>{const[n,o]=l.useState(Gn);if(l.useEffect(()=>{t&&!yn()&&fetch(t).then(r=>r.json()).then(r=>o(r)).catch(r=>console.error("Failed to load ads from URL",r))},[t]),!n)return null;const a=(s?"p-4 flex flex-col space-y-4 h-full":"p-2 flex flex-row space-x-4 justify-around w-full")+" bg-blue-50 dark:bg-blue-950";return e.jsx("div",{className:a,children:n.sections.map((r,c)=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"font-bold text-sm mb-2 text-gray-700 dark:text-gray-300",children:r.title}),e.jsx("div",{className:s?"flex flex-col space-y-1":"flex flex-row flex-wrap gap-2",children:r.items.map((h,i)=>e.jsxs("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-blue-600 hover:underline dark:text-blue-400 flex items-center space-x-1",onClick:We()?g=>{g.preventDefault(),Kt(h.href).then(()=>console.log("[Open URL]:",h.href)).catch(d=>{console.error(`Failed to open URL ${h.href}`,d)})}:void 0,children:[h.icon,h.text&&e.jsx("span",{children:h.text})]},i))})]},c))})},At=({isOpen:s,onClose:t,title:n,children:o,size:a="lg"})=>{const{theme:r}=fe(),c=h=>{switch(h){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return e.jsx(Ct,{appear:!0,show:s,as:l.Fragment,children:e.jsxs(Qt,{as:"div",className:Z("relative z-50",r),onClose:t,children:[e.jsx(dt,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:e.jsx(dt,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(en,{className:Z(c(a),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-hidden"),children:[e.jsx(tn,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),e.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(_t,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),e.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto -mr-6 pr-6",children:o})]})})})})]})})},Vn=200,Xn=.2,Yn=vn(),Jn=s=>{const{children:t,adsConfig:n,appInfo:o,appTopic:a,helpTopics:r,helpMenuConfig:c,aboutDataUrl:h,...i}=s,{theme:g}=fe(),[d,P]=l.useState(null),F=l.useMemo(()=>(O,B)=>{const p=o?.title??o?.name??"Untitled",x={usage:e.jsx(on,{}),essay:e.jsx(Ke,{}),about:e.jsx(nn,{})},v={usage:"How to Explore Interactively",essay:"A Short History of "+(a||p),about:"About "+p},y={about:`

---

### ${p} ${o?.version??"0.0.0"}


${o?.description??""}
${o?.keywords?"**Keywords**: *"+o.keywords+"*":""}

**Build**: ${o?.buildTime??""}
(${o?.commitHash}@${o?.commitTime??""})
${o?.localDiff?"["+o?.localDiff+"]":""}

**Platform**: ${window.navigator?.userAgent}
(${tt()?"mobile":"desktop"} ${We()?"app":"browser"})
`};if(typeof B=="string"){const u=v[O]||O.charAt(0).toUpperCase()+O.slice(1);return{key:O,title:u,icon:x[O]||e.jsx(ut,{}),content:B+(y[O]||"")}}return{key:O,icon:x[O]||e.jsx(ut,{}),...B,content:B.content+(y[O]||"")}},[o,a]),w=l.useCallback(O=>{if(O&&r){const B=r[O];B!=null&&typeof B!="number"&&P(F(O,B))}c?.onChange?.(O)},[F,c,r]),T=l.useMemo(()=>{if(!r)return;const O=c?.options?[...c.options]:[];O.push(0);for(const B in r){const p=r[B];if(p===null||typeof p=="number"){O.push(p);continue}if(!p)continue;const x=F(B,p);O.push({label:x.title,value:B,icon:x.icon})}return{options:O,onChange:w}},[r,c,w,F]),L=()=>P(null),[I,E]=l.useState(typeof window<"u"?window.innerWidth:0),[z,A]=l.useState(typeof window<"u"?window.visualViewport?.height??window.innerHeight:0),[N,_]=l.useState(!1);l.useEffect(()=>{const O=()=>{const x=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${x}px`)},B=()=>{const x=window.innerWidth,v=window.visualViewport?.height??window.innerHeight;E(x),A(v),x<768&&v>x?_(!1):x>=1024&&x>v&&_(!0),O()};B();const p=window.visualViewport??window;return p.addEventListener("resize",B),()=>{p.removeEventListener("resize",B)}},[]);const $=!!n,W=e.jsx(At,{isOpen:d!==null,onClose:L,title:d?.title||"",size:"xl",children:e.jsx("div",{className:Z("prose dark:prose-invert max-w-none",g==="dark"?"dark":""),children:d&&e.jsxs(e.Fragment,{children:[e.jsx(sn,{remarkPlugins:[an,cn],rehypePlugins:[rn],children:d.content}),d.key==="about"&&e.jsx(wt,{onSide:!1,dataUrl:h})]})})}),H=$?n?.width??Vn:0,k=N?I-H:I,R=e.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:Yn?{paddingTop:32,paddingBottom:12}:void 0,children:[e.jsx(Mn,{...i,headerWidth:k,helpMenuConfig:T}),e.jsx("main",{className:"flex-grow min-h-0 p-0",children:t})]});if(!$)return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:`${I}px`,height:`${z}px`},children:R}),W]});let M;const D={},U={width:`${k}px`};if(N)D.width=`${H}px`,D.height=U.height=`${z}px`;else if(D.width=U.width=`${I}px`,n?.height)D.height=`${n.height}px`,U.height=`${z-n.height}px`;else{const O=z*Xn;D.maxHeight=`${O}px`,U.minHeight=`${z-O}px`,M="flex-1 h-full"}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-stretch flex-"+(N?"row":"col"),style:{width:`${I}px`,height:`${z}px`},children:[e.jsx("div",{style:U,className:M,children:R}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800",style:D,children:[n?.sense&&e.jsx(qn,{client:n.sense.client,slot:n.sense.slot}),n?.ezoic&&e.jsx(Wn,{placeholderId:N?n.ezoic.rightPhId:n.ezoic.bottomPhId}),n?.local&&e.jsx(wt,{onSide:N,dataUrl:n.local.dataUrl})]})]}),W]})},ae=({label:s,min:t,max:n,value:o,onChange:a,theme:r,precision:c=0,valueLabel:h,posToVal:i=d=>t+(n-t)*d,valToPos:g=d=>(d-t)/(n-t)})=>{const d=l.useRef(null),P=h??(A=>A.toFixed(c)),F=l.useCallback(A=>{if(d.current){const N=d.current.getBoundingClientRect(),_=Math.max(0,Math.min(1,(A-N.left)/N.width)),$=i(_),W=Math.pow(10,c),H=Math.round($*W)/W;a(H)}},[a,i,c]),w=A=>{A.preventDefault(),F(A.clientX);const N=$=>{F($.clientX)},_=()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",N),document.addEventListener("mouseup",_)},T=A=>{A.preventDefault(),A.touches.length>0&&F(A.touches[0].clientX);const N=$=>{$.touches.length>0&&F($.touches[0].clientX)},_=()=>{document.removeEventListener("touchmove",N),document.removeEventListener("touchend",_)};document.addEventListener("touchmove",N),document.addEventListener("touchend",_)},L=g(o),I=r==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",E=L>.5,z=L>.25&&L<.5||L>.75;return e.jsx("div",{className:"w-full px-3",children:e.jsxs("div",{ref:d,onMouseDown:w,onTouchStart:T,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[e.jsx("div",{className:Z("w-full h-full rounded-full",r==="dark"?"bg-gray-700":"bg-gray-300")}),e.jsx("div",{className:Z("absolute top-0 left-0 h-full rounded-full",r==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${L*100}%`}}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[s&&e.jsx("span",{className:Z("absolute top-1/2 -translate-y-1/2 text-xs font-medium",r==="dark"?"text-gray-200":E?"text-white":"text-gray-800"),style:{...E?{left:"10px"}:{right:"10px"},textShadow:E?I:"none"},children:s}),e.jsx("span",{className:Z("absolute top-1/2 -translate-y-1/2 text-xs font-mono",r==="dark"?"text-gray-200":z?"text-white":"text-gray-800"),style:{...z?{right:`calc(${100-L*100}% + 14px)`}:{left:`calc(${L*100}% + 14px)`},textShadow:z?I:"none"},children:P(o)})]}),e.jsx("div",{className:Z("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",r==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${L*100}% - 12px)`}})]})})},Zn=({children:s,gl:t,frameloop:n="always",showGridOverlay:o,...a})=>{const[r,c]=l.useState(!1);return e.jsx(Bn,{...a,showGridOverlay:o,children:h=>e.jsxs(e.Fragment,{children:[e.jsx(hn,{frameloop:n,gl:t,onCreated:({gl:i})=>{i.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),c(!0)},!1)},children:s(h)}),r&&e.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[e.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),e.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]})]})})};function Kn(s){return"min"in s&&"max"in s}class Nt{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class Me extends Nt{constructor(t,n,o,a,r,c,h){super(),this.name=t,this.title=n,this.description=o,this.math=a,this.shader=r,this.iconUrl=h;let i,g,d;typeof c=="number"?(d=c,i=1,g=2e3):(d=c.initial,i=c.min,g=c.max);const P=w=>{const T=Math.log(i),L=Math.log(g);return Math.exp(T+(L-T)*w)},F=w=>{if(w<=i)return 0;if(w>=g)return 1;const T=Math.log(i),L=Math.log(g);return(Math.log(w)-T)/(L-T)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:d,min:i,max:g,posToVal:P,valToPos:F}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(t){}getInitialControlPoints(){return[]}getCanvasOverlayString(t,n){}getControlPointValues(t){}getControlPointGroups(t){return[]}}class nt extends Me{constructor(t,n,o,a,r,c,h,i){super(t,n,o,a,r,c,i),this.controlPointInfo=h}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(t,n){if(t.length>0)return`${this.controlPointInfo.name} = ${He(...t[0])}`}getControlPointValues(t){if(t.length>0)return[{label:this.controlPointInfo.name,value:He(...t[0])}]}getControlPointUniforms(t){if(t.length>0)return{[this.controlPointInfo.uniformName]:t[0]}}getControlPointGroups(t){return[0]}}const Qn=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,eo=`uniform int iterations;
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
`,to="/fractal/assets/newton-B60RDm46.png",Je=16;function no(s){const t=[];for(let n=0;n<s;n++){const o=2*Math.PI*n/s;t.push([Math.cos(o),Math.sin(o)])}return t}class oo extends Nt{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=Qn,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return no(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return eo}getIcon(){return to}getCanvasOverlayString(t,n){return`p = ${t.length}`}getControlPointValues(t){return t.map((n,o)=>({label:`Root ${o+1}`,value:He(...n)}))}getControlPointUniforms(t){if(t.length>0&&t.length<=Je){const n=t.flat(),o=new Array(Je*2).fill(0);return n.forEach((a,r)=>o[r]=a),{num_roots:t.length,roots:o}}}getControlPointGroups(t){return Array(t.length).fill(0)}getControlPointMinMax(){return[2,Je]}}const so="/fractal/assets/mandelbrot-DLtBXckj.png",ro=`### Mandelbrot set

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
  of the Phoenix set. When P=(0,0), this generates the classic Mandelbrot set.`,ao=`uniform int iterations;
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
}`,io=[0,0],co=new nt("mandelbrot","Mandelbrot/Phoenix","Mandelbrot and Phoenix fractals.",ro,ao,200,{name:"P",initialValue:io,uniformName:"phoenixP"},so),lo="/fractal/assets/julia-BPDBAcPP.png",ho=`The Julia set is a fractal that is closely related to the Mandelbrot set.
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
`,uo=`uniform int iterations;
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
`,fo=[-.7,.27015],mo=new nt("julia","Julia","Julia sets.",ho,uo,200,{name:"C",initialValue:fo,uniformName:"juliaC"},lo),po=`The Lambda fractal is generated from the logistic map, a classic example of how
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
`,go=`uniform int iterations;
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
`,xo=[-.85,-.6],bo=new nt("lambda","Lambda","Lambda fractal (logistic map).",po,go,200,{name:"Lambda",initialValue:xo,uniformName:"lambda"}),yo=`This is a type of magnet fractal, known for its intricate, magnetic-like
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
`,vo=`uniform int iterations;
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
`,wo=new Me("magnet1","Magnet (Type 1)","z_n+1 = ((z^2 - 1)/(2z + c))^2",yo,vo,80),$o=`This is another type of magnet fractal. The iteration is defined by:
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
`,Co=`uniform int iterations;
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
`,_o=new Me("magnet2","Magnet (Type 2)","z_n+1 = z - (z^2 - 1)^2 / (4z^3 + 4z^2c)",$o,Co,80),To=`The Nova fractal is a variation of the Newton's method fractal. The iteration
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
`,jo=`uniform int iterations;

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
`,ko=new Me("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",To,jo,80),So=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,Mo=`uniform int iterations;

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
`,zo=new Me("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",So,Mo,200);class ot{}class Se extends ot{constructor(t){super();const{pacing:n,color0:o,color1:a}=t;this.alpha=n,this.b=o,this.a=[a[0]-o[0],a[1]-o[1],a[2]-o[2]]}evaluate(t){const n=this.a[0]*Math.pow(t,this.alpha[0])+this.b[0],o=this.a[1]*Math.pow(t,this.alpha[1])+this.b[1],a=this.a[2]*Math.pow(t,this.alpha[2])+this.b[2];return[n,o,a]}toGlslFragment(t="colorPalette"){const n=g=>g.toPrecision(4),o=(g,d)=>g===1?d:g===0?"1.0":g===-1?`(1.0 / ${d})`:`pow(${d}, ${n(g)})`,r=`${n(this.a[0])} * ${o(this.alpha[0],"t")} + ${n(this.b[0])}`,c=`${n(this.a[1])} * ${o(this.alpha[1],"t")} + ${n(this.b[1])}`,h=`${n(this.a[2])} * ${o(this.alpha[2],"t")} + ${n(this.b[2])}`,i=`    return vec3(${r}, ${c}, ${h});`;return`vec3 ${t}(float t) {
${i}
}`}}class ke extends ot{constructor(t){super();const{pacing:n,frequency:o,color1:a,color2:r,phase:c}=t;this.alpha=n,this.nu=o,this.phase=c,this.base=[(a[0]+r[0])/2,(a[1]+r[1])/2,(a[2]+r[2])/2],this.scale=[(r[0]-a[0])/2,(r[1]-a[1])/2,(r[2]-a[2])/2]}evaluate(t){const n=Math.pow(t,this.alpha),o=this.base[0]+this.scale[0]*Math.cos(2*Math.PI*(this.nu[0]*n+this.phase[0])),a=this.base[1]+this.scale[1]*Math.cos(2*Math.PI*(this.nu[1]*n+this.phase[1])),r=this.base[2]+this.scale[2]*Math.cos(2*Math.PI*(this.nu[2]*n+this.phase[2]));return[o,a,r]}toGlslFragment(t="colorPalette"){const n=i=>`vec3(${i.map(g=>g.toPrecision(4)).join(", ")})`,o=i=>i.toPrecision(4),a=(i,g)=>i===1?g:i===0?"1.0":i===-1?`(1.0 / ${g})`:`pow(${g}, ${o(i)})`,c=[];c.push(`    vec3 base = ${n(this.base)};`),c.push(`    vec3 scale = ${n(this.scale)};`),c.push(`    vec3 nu = ${n(this.nu)};`),c.push(`    vec3 phase = ${n(this.phase)};`);const h=a(this.alpha,"t");return c.push(`    return base + scale * cos(6.28318 * (nu * ${h} + phase));`),`vec3 ${t}(float t) {
${c.join(`
`)}
}`}}class Et extends ot{constructor(t){super(),this.alpha=t.pacing??1,this.beta=t.damping??0,this.nu=t.frequency??1,this.c0=t.color0,this.c1=t.color1,this.c2=t.color2,this.c_odot=[(this.c0[0]+this.c2[0])/2,(this.c0[1]+this.c2[1])/2,(this.c0[2]+this.c2[2])/2];const n=[this.c0[0]-this.c_odot[0],this.c0[1]-this.c_odot[1],this.c0[2]-this.c_odot[2]],o=[this.c1[0]-this.c_odot[0],this.c1[1]-this.c_odot[1],this.c1[2]-this.c_odot[2]],a=n[0]*o[0]+n[1]*o[1]+n[2]*o[2],r=n[0]**2+n[1]**2+n[2]**2,c=o[0]**2+o[1]**2+o[2]**2,h=.5*Math.atan2(2*a,c-r);this.phi=h/(2*Math.PI);const i=Math.cos(h),g=Math.sin(h);this.A=[n[0]*i-o[0]*g,n[1]*i-o[1]*g,n[2]*i-o[2]*g],this.B=[n[0]*g+o[0]*i,n[1]*g+o[1]*i,n[2]*g+o[2]*i]}f(t){return Math.pow(t,this.alpha)}evaluate(t){const n=this.f(t),o=2*Math.PI*(this.nu*n+this.phi),a=Math.cos(o),r=Math.sin(o),c=Math.exp(-this.beta*n),h=this.c_odot[0]+c*(this.A[0]*a+this.B[0]*r),i=this.c_odot[1]+c*(this.A[1]*a+this.B[1]*r),g=this.c_odot[2]+c*(this.A[2]*a+this.B[2]*r);return[h,i,g]}toGlslFragment(t="colorPalette"){const n=h=>`vec3(${h.map(i=>i.toPrecision(4)).join(", ")})`,o=h=>h.toPrecision(4),a=(h,i)=>h===1?i:h===0?"1.0":h===-1?`(1.0 / ${i})`:`pow(${i}, ${o(h)})`,c=[];return c.push(`    vec3 c_odot = ${n(this.c_odot)};`),c.push(`    vec3 A = ${n(this.A)};`),c.push(`    vec3 B = ${n(this.B)};`),c.push(`    float ft = ${a(this.alpha,"t")};`),c.push(`    float damp = exp(-${o(this.beta)} * ft);`),c.push(`    float angle = 6.28318 * (${o(this.nu)} * ft + ${o(this.phi)});`),c.push("    return c_odot + damp * (A * cos(angle) + B * sin(angle));"),`vec3 ${t}(float t) {
${c.join(`
`)}
}`}}const Qe={cosmic:new ke({pacing:1,frequency:[1,1,1],color1:[0,0,0],color2:[1,1,1],phase:[.33,.67,0]}),cosmic_old:new ke({pacing:1,frequency:[1,1,1],color1:[0,0,0],color2:[1,1,1],phase:[0,.33,.67]}),nebula:new ke({pacing:1,frequency:[.9,.9,.9],color1:[.6,.5,.4],color2:[1,1.1,1.2],phase:[.1,.2,.3]}),grayscale:new Se({pacing:[1,1,1],color0:[0,0,0],color1:[1,1,1]}),monochrome:new Se({pacing:[1,2,3],color0:[0,0,0],color1:[1,1,1]})},$t=Object.fromEntries(Object.keys(Qe).map(s=>[s,s.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")])),Pe="cosmic",pe=s=>{const t=Oe(s);return t?[t.r/255,t.g/255,t.b/255]:[0,0,0]},Rt="fractal-custom-color-schemes",Pt=4;function Be(){try{const s=localStorage.getItem(Rt);if(s){const t=JSON.parse(s);if(Array.isArray(t))return t}}catch(s){console.error("Error reading custom color schemes from localStorage:",s)}return[]}function Io(s,t,n){const o=Be(),a={name:s,type:t,params:n},r=o.findIndex(c=>c.name===s);r!==-1?o[r]=a:(o.push(a),o.length>Pt&&o.shift());try{localStorage.setItem(Rt,JSON.stringify(o))}catch(c){console.error("Error saving custom color schemes to localStorage:",c)}return o}function Ao(s){switch(s.type){case"Linear":{const t=s.params;return new Se({pacing:t.pacing,color0:pe(t.colors[0]),color1:pe(t.colors[1])})}case"Cosine":{const t=s.params;return new ke({pacing:t.pacing,frequency:t.frequency,phase:t.phase,color1:pe(t.colors[0]),color2:pe(t.colors[1])})}case"Elliptic":{const t=s.params;return new Et({pacing:t.pacing,damping:t.damping,frequency:t.frequency,color0:pe(t.colors[0]),color1:pe(t.colors[1]),color2:pe(t.colors[2])})}}}const No=[new oo,co,mo,bo,wo,_o,ko,zo],Eo=({className:s})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:s,children:[e.jsx("path",{d:"M12 2 A 10 10 0 0 1 20.66 7 L 12 12 Z",fill:"#ff0000"}),e.jsx("path",{d:"M20.66 7 A 10 10 0 0 1 20.66 17 L 12 12 Z",fill:"#c0c000"}),e.jsx("path",{d:"M20.66 17 A 10 10 0 0 1 12 22 L 12 12 Z",fill:"#00c000"}),e.jsx("path",{d:"M12 22 A 10 10 0 0 1 3.34 17 L 12 12 Z",fill:"#00c0c0"}),e.jsx("path",{d:"M3.34 17 A 10 10 0 0 1 3.34 7 L 12 12 Z",fill:"#0000ff"}),e.jsx("path",{d:"M3.34 7 A 10 10 0 0 1 12 2 L 12 12 Z",fill:"#ff00ff"})]}),Ro=({className:s})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 7.5l-5.25-5.25H5.25a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V7.5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 18.75h-6a.75.75 0 010-1.5h6a.75.75 0 010 1.5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h4.5l3.75 3.75v2.25z"})]}),ge=s=>{const t=Oe(s);return t?[t.r/255,t.g/255,t.b/255]:[0,0,0]},Ft=384,Po=Ft-24,Fo=({onChange:s,onSave:t,isMinimized:n,onToggle:o,colorSchemePrefix:a="ColorScheme_"})=>{const{theme:r}=fe(),[c,h]=l.useState("Linear"),[i,g]=l.useState(0),[d,P]=l.useState(!1),F=l.useRef(null);l.useEffect(()=>{const p=F.current;if(!p||n)return;const x=new ResizeObserver(v=>{v[0]&&g(v[0].contentRect.width)});return x.observe(p),()=>x.disconnect()},[n]),l.useEffect(()=>{d?i>0&&i<Po&&P(!1):i>=Ft&&P(!0)},[i,d]);const[w,T]=l.useState(!1),[L,I]=l.useState(""),[E,z]=l.useState({pacing:[1,1,1],colors:["#ff0000","#00ff00"]}),[A,N]=l.useState({pacing:1,frequency:[1,1,1],phase:[0,.15,.2],colors:["#00ff00","#0000ff"]}),[_,$]=l.useState({pacing:1,damping:0,frequency:1,colors:["#ff0000","#00ff00","#0000ff"]});l.useEffect(()=>{let p;c==="Linear"?p=new Se({pacing:E.pacing,color0:ge(E.colors[0]),color1:ge(E.colors[1])}):c==="Cosine"?p=new ke({pacing:A.pacing,frequency:A.frequency,phase:A.phase,color1:ge(A.colors[0]),color2:ge(A.colors[1])}):p=new Et({pacing:_.pacing,damping:_.damping,frequency:_.frequency,color0:ge(_.colors[0]),color1:ge(_.colors[1]),color2:ge(_.colors[2])}),s(p)},[c,E,A,_,s]);const{colors:W,labels:H,onColorChange:k}=l.useMemo(()=>c==="Linear"?{colors:E.colors,labels:"01",onColorChange:p=>z(x=>({...x,colors:[p[0]??"#000000",p[1]??"#ffffff"]}))}:c==="Cosine"?{colors:A.colors,labels:"12",onColorChange:p=>N(x=>({...x,colors:[p[0]??"#000000",p[1]??"#ffffff"]}))}:{colors:_.colors,labels:"012",onColorChange:p=>$(x=>({...x,colors:[p[0]??"#000000",p[1]??"#ffffff",p[2]??"#ff0000"]}))},[c,E.colors,A.colors,_.colors]),R=p=>d?p.slice(0,1):i===0?p:i<240?p.charAt(0):i<320?p.slice(0,3):p,M=()=>{const p=Be(),x=new Set(p.map(y=>y.name));let v="";for(let y=1;y<=Pt+1;y++){const u=`${a}${y}`;if(!x.has(u)){v=u;break}}I(v),T(!0)},D=()=>{if(!L.trim())return;Io(L,c,{Linear:E,Cosine:A,Elliptic:_}[c]),t(),T(!1),I("")};if(n)return e.jsx("button",{onClick:o,className:Z("p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",r==="dark"?"bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-gray-800":"bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-indigo-600 focus:ring-offset-white"),"aria-label":"Open color scheme configurator",children:e.jsx(Eo,{className:"w-6 h-6"})});const U=e.jsxs("div",{className:Z("flex justify-between items-center",!d&&"px-4 pt-4"),children:[e.jsx("div",{className:"flex gap-1 p-1 rounded-md",style:{backgroundColor:r==="dark"?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.05)"},children:["Linear","Cosine","Elliptic"].map(p=>e.jsx("button",{onClick:()=>h(p),className:Z("px-3 py-1 text-sm font-medium rounded",c===p?r==="dark"?"bg-indigo-500 text-white":"bg-indigo-600 text-white":r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),children:R(p)},p))}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:M,className:Z("p-1 rounded-full",r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),"aria-label":"Save color scheme",children:e.jsx(Ro,{className:"h-6 w-6"})}),e.jsx("button",{onClick:o,className:Z("p-1 rounded-full",r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),"aria-label":"Close color scheme configurator",children:e.jsx(_t,{className:"h-6 w-6"})})]})]}),O=e.jsxs("div",{className:"flex flex-col gap-4",children:[c==="Linear"&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Pacing R",min:0,max:4,value:E.pacing[0],onChange:p=>z(x=>({...x,pacing:[p,x.pacing[1],x.pacing[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Pacing G",min:0,max:4,value:E.pacing[1],onChange:p=>z(x=>({...x,pacing:[x.pacing[0],p,x.pacing[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Pacing B",min:0,max:4,value:E.pacing[2],onChange:p=>z(x=>({...x,pacing:[x.pacing[0],x.pacing[1],p]})),theme:r,precision:2})]}),c==="Cosine"&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Pacing",min:0,max:4,value:A.pacing,onChange:p=>N(x=>({...x,pacing:p})),theme:r,precision:2}),e.jsx(ae,{label:"Freq R",min:0,max:5,value:A.frequency[0],onChange:p=>N(x=>({...x,frequency:[p,x.frequency[1],x.frequency[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Freq G",min:0,max:5,value:A.frequency[1],onChange:p=>N(x=>({...x,frequency:[x.frequency[0],p,x.frequency[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Freq B",min:0,max:5,value:A.frequency[2],onChange:p=>N(x=>({...x,frequency:[x.frequency[0],x.frequency[1],p]})),theme:r,precision:2}),e.jsx(ae,{label:"Phase R",min:0,max:1,value:A.phase[0],onChange:p=>N(x=>({...x,phase:[p,x.phase[1],x.phase[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Phase G",min:0,max:1,value:A.phase[1],onChange:p=>N(x=>({...x,phase:[x.phase[0],p,x.phase[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Phase B",min:0,max:1,value:A.phase[2],onChange:p=>N(x=>({...x,phase:[x.phase[0],x.phase[1],p]})),theme:r,precision:2})]}),c==="Elliptic"&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Pacing",min:0,max:4,value:_.pacing,onChange:p=>$(x=>({...x,pacing:p})),theme:r,precision:2}),e.jsx(ae,{label:"Damping",min:0,max:5,value:_.damping,onChange:p=>$(x=>({...x,damping:p})),theme:r,precision:2}),e.jsx(ae,{label:"Frequency",min:0,max:5,value:_.frequency,onChange:p=>$(x=>({...x,frequency:p})),theme:r,precision:2})]})]}),B=e.jsx("div",{className:Z({"pt-3 px-4 pb-4":!d,"pt-3 px-2":d}),children:e.jsx(gn,{initialColors:W,onChange:k,labels:H,height:150})});return e.jsxs("div",{ref:F,className:Z("rounded-lg shadow-lg flex w-full",d?"flex-row gap-2 p-2":"flex-col gap-4",r==="dark"?"bg-gray-800 text-gray-200":"bg-white text-gray-800"),children:[d?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-1/2",children:O}),e.jsxs("div",{className:"flex w-1/2 flex-col gap-2",children:[U,B]})]}):e.jsxs(e.Fragment,{children:[U,O,B]}),e.jsx(At,{isOpen:w,onClose:()=>T(!1),size:"sm",title:"Save Color Scheme",children:e.jsxs("div",{className:"flex flex-col gap-4 p-1",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"schemeName",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Scheme Name"}),e.jsx("input",{type:"text",id:"schemeName",value:L,onChange:p=>I(p.target.value),className:"mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>T(!1),className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600",children:"Cancel"}),e.jsx("button",{type:"button",onClick:D,disabled:!L.trim(),className:"px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"Save"})]})]})})]})},Lo=`
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
`,Oo=`
varying vec2 vUv;
uniform vec2 center;
uniform float viewWidth;
uniform float viewHeight;

%FRACTAL_SHADER%

%EVALUATE_COLOR%

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
`;function Do(s,t,n){if(Array.isArray(n))if(n.length===2)s[t]={value:new Le(n[0],n[1])};else if(n.length===3)s[t]={value:new mn(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const o=[];for(let a=0;a<n.length;a+=2)o.push(new Le(n[a],n[a+1]));s[t]={value:o}}else s[t]={value:n};else s[t]={value:n}}function Ho(s,t,n){if(s.uniforms[t])if(Array.isArray(n))if(n.length===2)s.uniforms[t].value.fromArray(n);else if(n.length===3)s.uniforms[t].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const o=[];for(let a=0;a<n.length;a+=2)o.push(new Le(n[a],n[a+1]));s.uniforms[t].value=o}else s.uniforms[t].value=n;else s.uniforms[t].value=n}const Bo=({fractal:s,center:t,worldWidth:n,worldHeight:o,parameters:a,controlPoints:r,colorSchemeGlsl:c})=>{const h=dn(d=>d.invalidate),i=l.useMemo(()=>{const d={FRACTAL_SHADER:s.getShaderCode(),EVALUATE_COLOR:c},P={center:{value:new Le(...t)},viewWidth:{value:n},viewHeight:{value:o}};s.getGuiParameters().forEach(w=>{P[w.name]={value:a[w.name]}});const F=s.getControlPointUniforms(r);if(F)for(const[w,T]of Object.entries(F))Do(P,w,T);return new un({uniforms:P,vertexShader:Lo,fragmentShader:Oo.replace(/%(\w+)%/g,(w,T)=>String(d[T]))})},[s,c]);l.useEffect(()=>{i.uniforms.center.value.fromArray(t),i.uniforms.viewWidth.value=n,i.uniforms.viewHeight.value=o,s.getGuiParameters().forEach(P=>{i.uniforms[P.name].value=a[P.name]});const d=s.getControlPointUniforms(r);if(d)for(const[P,F]of Object.entries(d))Ho(i,P,F);h()},[i,t,n,o,a,r,h,s]);const g=l.useMemo(()=>{const d=new fn;return d.setDrawRange(0,3),d},[]);return e.jsx("mesh",{material:i,geometry:g})},Wo=({fractal:s,colorScheme:t,activeCustomScheme:n,onCustomSchemeSave:o})=>{const{theme:a}=fe(),[r,c]=l.useState(s.getInitialGuiParameters()),[h,i]=l.useState(s.getInitialControlPoints()),[g,d]=l.useState(()=>new Se({pacing:[1,1,1],color0:[0,0,0],color1:[1,1,1]})),[P,F]=l.useState(!0);l.useEffect(()=>{c(s.getInitialGuiParameters()),i(s.getInitialControlPoints()),T(_=>_+1)},[s]),l.useEffect(()=>{F(t!=="custom")},[t]);const[w,T]=l.useState(0),L=s.getGuiParameters().map(_=>Kn(_)?e.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:e.jsx(ae,{label:_.displayName,min:_.min,max:_.max,value:r[_.name],onChange:$=>c(W=>({...W,[_.name]:$})),theme:a,posToVal:_.posToVal,valToPos:_.valToPos})},_.name):null),I=s.getControlPointValues(h),[E,z]=s.getControlPointMinMax(),A=l.useMemo(()=>t==="custom"?g.toGlslFragment():n?n.toGlslFragment():Qe[t]?.toGlslFragment()??Qe[Pe].toGlslFragment(),[t,g,n]),N=l.useMemo(()=>{const _=s.getInitialControlPoints(),$=s.getControlPointGroups(_);return _.map((W,H)=>({position:W,group:$[H],key:H}))},[s]);return e.jsxs("div",{className:Z("w-full h-full flex flex-col landscape:flex-row overflow-hidden",a==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[e.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-64 lg:w-72 overflow-y-auto overflow-x-hidden",children:[e.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[L,t==="custom"&&e.jsx("div",{className:Z(!P&&"w-full my-2"),children:e.jsx(Fo,{onChange:d,onSave:o,isMinimized:P,onToggle:()=>F(_=>!_)})}),I&&I.length>0&&e.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:a==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:I.map(_=>e.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[e.jsx("p",{className:Z("text-sm font-medium",a==="dark"?"text-gray-300":"text-gray-700"),children:_.label}),e.jsx("p",{className:Z("text-base font-mono",a==="dark"?"text-gray-200":"text-gray-800"),children:_.value})]},_.label))})]})]}),e.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:e.jsx(Zn,{viewParams:{baseViewSize:4},frameloop:"demand",onInfoOverlay:(_,$)=>{const W=["[",", ","]"],H=gt($.center[0]-$.worldWidth/2,$.center[0]+$.worldWidth/2,7,W),k=gt($.center[1]-$.worldHeight/2,$.center[1]+$.worldHeight/2,7,W),R=[{position:"NW",content:He(..._)},{position:"NE",content:`Re: ${H}
Im: ${k}`}],M=s.getCanvasOverlayString(h,r),D=s.title;return R.push({position:"SC",content:M?`${D} | ${M}`:D}),R},controlPoints:h,onControlPointsChange:i,controlPointParams:{controlPoints:N,min:E,max:z},gl:{powerPreference:"default",antialias:!1},children:(({center:_,worldWidth:$,worldHeight:W})=>e.jsx(Bo,{fractal:s,center:_,worldWidth:$,worldHeight:W,parameters:r,controlPoints:h,colorSchemeGlsl:A}))},w)})]})},qo=`This application allows you to explore the intricate beauty of various fractals.
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
`,Uo=`## Fantastic Fractals — An Interactive Fractal Explorer

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
`,Go=`## A Short History of Fractals

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


`,Vo=`## The Art and Science of Fractal Coloring

### Introduction

Fractals are mathematical objects of infinite detail and complexity. Visualizing a fractal involves creating a two-dimensional image from its abstract mathematical definition. This process typically uses an iterative calculation for each point, represented by its coordinates $(x, y)$ or as a complex number $z = x + iy$. The result of this calculation for each point is a scalar value, $t = t(x, y)$, which we then use to determine a color. Our creative task is to transform this numerical value $t$ into a visually appealing color.

For many well-known fractals, like the Mandelbrot set, the iterative calculation determines whether a point belongs to the set or "escapes" to infinity.
-   If the point does not escape (meaning it is inside the set after a maximum number of iterations), we can assign it a special color. This is often black, representing a "black hole" from which no point can escape.
-   If the point escapes, we record the number of iterations it takes to do so. This number, often processed through a logarithmic function for better visual distribution, becomes the value $t$.

The core of fractal coloring is defining a function that maps the continuous value $t$ to a color in a color space, typically RGB (Red, Green, Blue). This document explores several mathematical models for creating these color schemes, from simple linear gradients to elegant, periodic paths in 3D color space.

### A General Concept: The Pacing Function

All our coloring models share a common concept: a **pacing function**. This function transforms the raw fractal value $t$ into a new parameter, let's call it $\\tau$, which then drives the color generation. This mechanism allows us to control the speed and "feel" of the color transitions.

The most common pacing function is a power function:
\`\`\`math
\\tau = t^\\alpha
\`\`\`
where the **Pacing Exponent**, $\\alpha$, adjusts the gradient's feel:
-   $\\alpha = 1$: Linear pacing, creating a uniform gradient.
-   $\\alpha < 1$: Colors change quickly for small values of $t$ and then slow down.
-   $\\alpha > 1$: Colors change slowly at first for small $t$ and then accelerate.

To create more complex and rich color schemes, we can apply this pacing function independently to each of the R, G, and B channels. This is achieved by using a vector of exponents $\\bm{\\alpha} = (\\alpha_R, \\alpha_G, \\alpha_G)$, which produces a vector of paced values $\\bm{\\tau} = (t^{\\alpha_R}, t^{\\alpha_G}, t^{\\alpha_B})$. Some models use a scalar $\\alpha$, while others use a vector $\\bm{\\alpha}$ for more fine-grained control. Note that in this essay, we use bold letters for 3D vectors.

### Color Scheme Models

We employ several models to generate colors. The simplest models apply a function to each color channel independently, while more sophisticated models create colors that follow a continuous path in 3D RGB space.

#### Linear Model

This is the most straightforward model, creating a linear gradient between two colors. The color for each channel is calculated independently, allowing for different transition speeds for red, green, and blue.

The formula for the final color uses vector notation. All operations are performed component-wise:
\`\`\`math
\\bm{\\chi}(t) = \\bm{A} t^{\\bm{\\alpha}} + \\bm{B}
\`\`\`
-   $t^{\\bm{\\alpha}}$ is a shorthand for the vector $(t^{\\alpha_R}, t^{\\alpha_G}, t^{\\alpha_B})$.
-   The pacing exponent $\\bm{\\alpha} = (\\alpha_R, \\alpha_G, \\alpha_B)$ is a vector, allowing different pacing for each color channel.
-   $\\bm{A}$ (scale) and $\\bm{B}$ (base) are 3D vectors representing RGB colors.

To make configuration intuitive, we define the scheme using two endpoint colors:
-   $\\bm{C}_0$: The color at $t=0$.
-   $\\bm{C}_1$: The color at $t=1$.

The parameters $\\bm{A}$ and $\\bm{B}$ are then derived as follows:
-   At $t=0$, the formula gives $\\bm{C}_0 = \\bm{B}$ (assuming positive exponents). Thus, $\\bm{B} = \\bm{C}_0$.
-   At $t=1$, we have $\\bm{C}_1 = \\bm{A} + \\bm{B}$. Thus, $\\bm{A} = \\bm{C}_1 - \\bm{B} = \\bm{C}_1 - \\bm{C}_0$.

##### Intuitive Explanation

Think of this as mixing two paint colors. You pick a starting color ($\\bm{C}_0$) and an ending color ($\\bm{C}_1$), and the computer generates a smooth gradient between them. The vector exponent $\\bm{\\alpha}$ is a fun twist: it lets you control how the red, green, and blue components transition independently, creating a more dynamic gradient than a simple linear blend.

#### Cosine Model

This model generates smooth, periodic color waves using the cosine function.

The underlying formula is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + \\bm{S} \\cos(2\\pi (\\bm{\\nu} t^\\alpha + \\bm{\\phi}))
\`\`\`
where:
-   $\\bm{C}_\\odot$ (center) and $\\bm{S}$ (scale/amplitude) are 3D RGB vectors.
-   $\\bm{\\nu}$ (frequency) and $\\bm{\\phi}$ (phase, with each component varying between 0 and 1) are also 3D RGB vectors.
-   The \`cos\` function is applied component-wise.
-   In this model, the pacing exponent $\\alpha$ is a scalar.

For easier use with color pickers, we configure the scheme by defining two colors that bound the wave:
-   $\\bm{C}_1$: The color at the trough of the wave (when the cosine component for each channel is -1).
-   $\\bm{C}_2$: The color at the peak of the wave (when the cosine component for each channel is 1).

The center ($\\bm{C}_\\odot$) and scale ($\\bm{S}$) vectors are then derived from these two colors:
-   $\\bm{C}_1 = \\bm{C}_\\odot - \\bm{S}$
-   $\\bm{C}_2 = \\bm{C}_\\odot + \\bm{S}$

Solving this system gives:
-   $\\bm{C}_\\odot = (\\bm{C}_1 + \\bm{C}_2) / 2$
-   $\\bm{S} = (\\bm{C}_2 - \\bm{C}_1) / 2$

This method is excellent for creating vibrant, pulsating color schemes.

##### Intuitive Explanation: Color Waves and Lissajous Curves

Imagine color that pulses in waves, like ripples on a pond. The cosine model uses the \`cos()\` function to create smooth, repeating cycles of color. The interesting part is that we have three waves—Red, Green, and Blue—each with its own frequency (from $\\bm{\\nu}$) and phase (from $\\bm{\\phi}$).

When you combine these three independent waves, the final color follows a complex 3D path through color space. This path is a **Lissajous curve**. Our Cosine model generates a 3D Lissajous curve in the world of colors, which is why it can produce such rich and intricate patterns.

![Lissajous Curve](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lissajous_curve_3by4.svg/250px-Lissajous_curve_3by4.svg.png)

You can learn more about Lissajous curves on [Wikipedia](https://en.wikipedia.org/wiki/Lissajous_curve).

#### Elliptical Model

This model creates a sophisticated color scheme by making the colors travel along an elliptical path in 3D RGB space. In this model, the pacing exponent $\\alpha$ is a scalar.

The general parametric equation for an ellipse in 3D space is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + \\bm{A} \\cos(2\\pi(t + \\phi)) + \\bm{B} \\sin(2\\pi(t + \\phi))
\`\`\`
Here, $\\bm{\\chi}(t)$ is the color for a given value $t$. $\\bm{C}_\\odot$ is the center of the ellipse in color space. The vectors $\\bm{A}$ and $\\bm{B}$ define the shape and orientation of the ellipse. $\\phi$ is a phase angle that determines the starting point on the ellipse.

##### Our Strategy: An Ellipse from Three Colors

Defining a 3D ellipse from scratch requires several parameters. To simplify configuration, we derive the entire ellipse from just **three** user-chosen colors, placed at strategic points along the path:
-   $\\bm{C}_0$: The color at $t=0$.
-   $\\bm{C}_1$: The color at $t=1/4$.
-   $\\bm{C}_2$: The color at $t=1/2$.

The period of the color cycle is 1. The crucial constraint is that the center of our ellipse, $\\bm{C}_\\odot$, is the midpoint of the line segment connecting $\\bm{C}_0$ and $\\bm{C}_2$:
\`\`\`math
\\bm{C}_\\odot = \\frac{\\bm{C}_0 + \\bm{C}_2}{2}
\`\`\`
This constraint simplifies the problem enough to define a unique ellipse from the three chosen points.

##### Deriving the Color Formula

By using our three points and the midpoint constraint, we can solve for the unknown parameters. Let $\\bm{C}'_0 = \\bm{C}_0 - \\bm{C}_\\odot$ and $\\bm{C}'_1 = \\bm{C}_1 - \\bm{C}_\\odot$.

First, we find the starting angle $\\theta_0 = 2\\pi \\phi$ of the ellipse:
\`\`\`math
\\theta_0 = \\frac{1}{2} \\operatorname{atan2}\\left(2 (\\bm{C}'_0 \\cdot \\bm{C}'_1), |\\bm{C}'_1|^2 - |\\bm{C}'_0|^2\\right)
\`\`\`
The phase shift is then $\\phi = \\theta_0 / (2\\pi)$.

Next, we solve for the ellipse axes vectors, $\\bm{A}$ and $\\bm{B}$:
\`\`\`math
\\begin{align}
\\bm{A} = \\bm{C}'_0 \\cos\\theta_0 - \\bm{C}'_1 \\sin\\theta_0 \\
\\bm{B} = \\bm{C}'_0 \\sin\\theta_0 + \\bm{C}'_1 \\cos\\theta_0
\\end{align}
\`\`\`
Note that the Elliptical model can be seen as a special case of the Cosine model where all channels have the same frequency, forcing the Lissajous curve into a simple ellipse. However, configuring it with three points on the ellipse is often more intuitive.

##### Intuitive Explanation: The 3-Color Trick

Defining a 3D ellipse can be complicated. Asking a user to pick all the required parameters would be confusing! So, we use a clever trick. We only ask for **three colors** and arrange them at special positions: the start, the quarter-way point, and the halfway point of the color cycle. By also enforcing that the ellipse's center is the midpoint between the first and third colors, we can construct a unique and beautiful color path.

#### Advanced Elliptic with Damping

We can introduce more parameters for even greater control, allowing for spirals and other dynamic effects. The final, complete formula is:
\`\`\`math
\\bm{\\chi}(t) = \\bm{C}_\\odot + e^{-\\beta t} \\left( \\bm{A} \\cos(2\\pi (\\nu t^\\alpha + \\phi)) + \\bm{B} \\sin(2\\pi (\\nu t^\\alpha + \\phi)) \\right)
\`\`\`
where
-   The pacing exponent $\\alpha$ is a scalar;
-   The parameter $\\nu$ is the frequency and $\\phi$ is the phase, both of which are scalars;
-   The parameter $\\beta$ is the **Damping Factor**, which creates an exponential decay effect.

A non-zero damping factor will create a spiral trajectory in the RGB color space.
-   If $\\beta > 0$, the ellipse shrinks as $t$ increases, causing the colors to spiral inwards towards the center color $\\bm{C}_\\odot$. This can create a sense of depth.
-   If $\\beta < 0$, the ellipse expands, with colors spiraling outwards.
-   If $\\beta = 0$, there is no damping, and the colors remain on the original ellipse path.

By playing with these parameters, you can generate an enormous variety of beautiful and complex color schemes for your fractals.
`;var Xo={local:{dataUrl:"https://driota.xyz/local-ads.json"}},Yo={name:"fractal",title:"Fantastic Fractals",description:"Explore the beauty of fractals with this interactive generator. Create and explore Mandelbrot, Julia, Newton, and other fractal sets in real-time.",keywords:"fractal, fractals, fractal generator, interactive fractal, Mandelbrot set, Julia set, Newton's alogirthm, burning ship, complex numbers, mathematical art, mathematical games, puzzle games, visualization, mathematical recreation, problem solving",version:"0.2.0",buildTime:"2025-11-09T18:30:02.167Z",localDiff:1,commitHash:"551b31f1",commitTime:"2025-11-09T17:42:39.000Z"};const Te=No;function Jo(){const s=()=>e.jsxs(e.Fragment,{children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),e.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#eed322"}),e.jsx("stop",{offset:"100%",stopColor:"#d4b606"})]})]}),e.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),e.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),e.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),e.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),t=l.useMemo(()=>e.jsx("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:e.jsx(s,{})}),[]),n=l.useMemo(()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsx(s,{}),e.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"white",fillOpacity:"0.5",stroke:"gray",strokeWidth:"0.5",strokeOpacity:"0.8"}),e.jsx("g",{transform:"translate(12, 12) scale(0.5)",opacity:"0.8",children:e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"black",transform:"translate(-12, -12)"})})]}),[]),o=l.useMemo(()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsx(s,{}),e.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"white",fillOpacity:"0.8",stroke:"gray",strokeWidth:"0.5",strokeOpacity:"0.8"}),e.jsx("g",{transform:"translate(12, 12) scale(0.5)",opacity:"0.8",children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"black",transform:"translate(-12, -12)"})})]}),[]),a=l.useCallback(()=>{const $=["newton","mandelbrot","julia"],W=Te.filter(H=>$.includes(H.name));return W.length>0?W[Math.floor(Math.random()*W.length)]:Te[0]},[]),r=l.useRef(null);r.current===null&&(r.current=a());const c=l.useCallback(()=>{const W=Ne().get("type");return Te.find(H=>H.name===W)||r.current},[r]),[h,i]=l.useState(c),[g,d]=l.useState(()=>Ne().get("colors")||Pe),[P,F]=l.useState([]),[w,T]=l.useState(null),L=l.useCallback(()=>{const $=Be();return F($),$},[]);l.useEffect(()=>{L()},[L]);const I=l.useMemo(()=>({usage:`${qo}

${Rn("fractal view","complex parameter",!0,!0)}`,separator1:null,math:{title:`Math of ${h.title} Fractal`,icon:e.jsx(Ke,{}),content:`## ${h.title} Fractal

${h.math}`},colorscheme:{title:"Math of Color Schemes",icon:e.jsx(Ke,{}),content:Vo},separator2:null,essay:Go,about:Uo}),[h.title,h.math]);l.useEffect(()=>{const $=()=>{const W=Ne(),H=W.get("type"),k=W.get("colors"),R=Te.find(D=>D.name===H)||r.current;i(R);const M=k||Pe;if(d(M),M.startsWith("custom:")){const D=Be();F(D);const U=M.substring(7),O=D.find(B=>B.name===U);O?T(Ao(O)):xn({colors:Pe})}else T(null)};return window.addEventListener("hashchange",$),$(),()=>window.removeEventListener("hashchange",$)},[]);const E=l.useCallback(($,W)=>`#${new URLSearchParams({type:$,colors:W}).toString()}`,[]),z=Te.map($=>({key:$.name,text:$.title,href:E($.name,g),icon:$.getIcon()?e.jsx("img",{src:$.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0})),A=l.useMemo(()=>{const $=[...Object.entries($t).map(([W,H])=>({text:H,href:E(h.name,W),icon:t}))];return P.length>0&&($.push(null),P.forEach(W=>{const H=`custom:${W.name}`;$.push({text:W.name,href:E(h.name,H),icon:o})})),$.push(null),$.push({key:"custom",text:"Custom...",href:E(h.name,"custom"),icon:n}),$},[P,t,n,o,h.name,E]),N=l.useMemo(()=>{const $=[...Object.entries($t).map(([H,k])=>({label:k,value:H}))];P.forEach(H=>{$.push({label:H.name,value:`custom:${H.name}`})});const W=$.find(H=>H.value===g);return W?W.label:"the making"},[g,P]),_=`Fantastic Fractals: ${h.title} in ${N}`;return e.jsx(e.Fragment,{children:e.jsx(Jn,{title:_,appIconUrl:"/fractal/images/app-icon.png",homeUrl:"/",appInfo:Yo,appTopic:"Fractals",helpTopics:I,sideMenu:z,gearMenu:A,adsConfig:Xo,aboutDataUrl:"https://driota.xyz/about-data.json",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Wo,{fractal:h,colorScheme:g,activeCustomScheme:w,onCustomSchemeSave:L},h.name)})})})}function Zo(){return e.jsx(pn,{children:e.jsx(jn,{children:e.jsx(Jo,{})})})}ln.createRoot(document.getElementById("root")).render(e.jsx(Fe.StrictMode,{children:e.jsx(Zo,{})}));
