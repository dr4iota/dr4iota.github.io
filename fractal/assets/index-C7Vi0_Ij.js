import{r as l,j as e,d as Ze,e as Z,l as Ot,f as Ht,K as $t,y as Dt,g as Bt,h as Wt,i as qt,k as Ut,m as Gt,n as Vt,o as Pe,p as rt,q as at,t as it,v as ct,w as lt,x as Xt,z as ht,A as Yt,B as Jt,C as Zt,D as Kt,O as dt,E as Qt,Q as en,G as Ct,H as tn,I as Ke,J as nn,L as ut,M as on,N as sn,P as rn,S as an,T as cn}from"./other-BG5ztU_u.js";import{C as ln,u as hn,V as Le,S as dn,B as un,a as fn}from"./three-CAEcyaVE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const _t=l.createContext(void 0),mn=({children:s})=>{const[t,n]=l.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});l.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),c=h=>{localStorage.getItem("theme")||n(h.matches?"dark":"light")};return r.addEventListener("change",c),()=>{r.removeEventListener("change",c)}},[]),l.useEffect(()=>{const r=window.document.documentElement;t==="dark"?r.classList.add("dark"):r.classList.remove("dark")},[t]);const o=()=>{n(r=>{const c=r==="light"?"dark":"light";return localStorage.setItem("theme",c),c})},i=l.useMemo(()=>({theme:t,toggleTheme:o}),[t]);return e.jsx(_t.Provider,{value:i,children:s})},fe=()=>{const s=l.useContext(_t);if(s===void 0)throw new Error("useTheme must be used within a ThemeProvider");return s},Oe=s=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},ft=({r:s,g:t,b:n})=>{s/=255,t/=255,n/=255;const o=Math.max(s,t,n),i=Math.min(s,t,n);let r=0,c=0,h=o;const a=o-i;if(c=o===0?0:a/o,o!==i){switch(o){case s:r=(t-n)/a+(t<n?6:0);break;case t:r=(n-s)/a+2;break;case n:r=(s-t)/a+4;break}r/=6}return{h:r,s:c,v:h}},ke=({h:s,s:t,v:n})=>{let o=0,i=0,r=0;const c=Math.floor(s*6),h=s*6-c,a=n*(1-t),p=n*(1-h*t),d=n*(1-(1-h)*t);switch(c%6){case 0:o=n,i=d,r=a;break;case 1:o=p,i=n,r=a;break;case 2:o=a,i=n,r=d;break;case 3:o=a,i=p,r=n;break;case 4:o=d,i=a,r=n;break;case 5:o=n,i=a,r=p;break}return{r:Math.round(o*255),g:Math.round(i*255),b:Math.round(r*255)}},ze=({r:s,g:t,b:n})=>"#"+((1<<24)+(s<<16)+(t<<8)+n).toString(16).slice(1),mt=s=>{const t=ke(s),n=t.r/255,o=t.g/255,i=t.b/255,r=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),c=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),h=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*r+.7152*c+.0722*h>.5?"#000000":"#FFFFFF"},pn=({initialColors:s,onChange:t,width:n="100%",height:o=200,labels:i})=>{const{theme:r}=fe(),[c,h]=l.useState(()=>s.map(f=>{const g=Oe(f);return g?ft(g):{h:0,s:1,v:1}})),[a,p]=l.useState(0),[d,z]=l.useState(null),[P,C]=l.useState([]),[k,A]=l.useState([]),[O,N]=l.useState(0),[E,I]=l.useState(0),R=l.useRef(null),_=l.useRef(null),w=l.useRef(null),W=l.useRef(null);l.useEffect(()=>{h(s.map(f=>{const g=Oe(f);return g?ft(g):{h:0,s:1,v:1}})),a>=s.length&&p(0)},[s,a]);const D=l.useMemo(()=>c[a]||{h:0,s:1,v:1},[c,a]),j=l.useCallback(()=>{const f=R.current;if(!f)return;const g=f.getContext("2d");if(!g)return;const{width:M,height:u}=f,m=c[d??a]||D,$=ze(ke({h:m.h,s:1,v:1}));g.clearRect(0,0,M,u);const T=g.createLinearGradient(0,0,M,0);T.addColorStop(0,"rgba(255,255,255,1)"),T.addColorStop(1,"rgba(255,255,255,0)");const G=g.createLinearGradient(0,0,0,u);G.addColorStop(0,"rgba(0,0,0,0)"),G.addColorStop(1,"rgba(0,0,0,1)"),g.fillStyle=$,g.fillRect(0,0,M,u),g.fillStyle=T,g.fillRect(0,0,M,u),g.fillStyle=G,g.fillRect(0,0,M,u)},[D,c,a,d]),F=l.useCallback(()=>{const f=_.current;if(!f)return;const g=f.getContext("2d");if(!g)return;const{width:M,height:u}=f;g.clearRect(0,0,M,u);const m=g.createLinearGradient(0,0,M,0);for(let $=0;$<=360;$+=60)m.addColorStop($/360,`hsl(${$}, 100%, 50%)`);g.fillStyle=m,g.fillRect(0,0,M,u)},[]),S=l.useCallback(()=>{j(),F()},[j,F]);l.useEffect(()=>{const f=w.current,g=W.current;if(f&&g){const M=new ResizeObserver(()=>{N(f.getBoundingClientRect().width),I(g.getBoundingClientRect().height)});return M.observe(f),N(f.getBoundingClientRect().width),I(g.getBoundingClientRect().height),()=>M.disconnect()}},[]),l.useEffect(()=>{const f=R.current,g=_.current;f&&g&&O>0&&E>0&&(f.width=O,f.height=E,g.width=O,g.height=48,S())},[O,E,S]),l.useEffect(()=>{S()},[D,S]);const H=(f,g)=>{const M=g??a,u=c[M];if(!u)return;const m={...u,...f};f.h!==void 0&&u.s===0&&(m.s=1);const $=[...c];$[M]=m,h($),t($.map(T=>ze(ke(T))))},L=(f,g,M)=>{if(!M)return[];const u=M.getBoundingClientRect(),m=[],T=40/2;return c.forEach((G,Y)=>{const ee=G.s*u.width,V=(1-G.v)*u.height;Math.abs(f-ee)<T&&Math.abs(g-V)<T&&m.push(Y)}),m.sort((G,Y)=>G-Y)},B=(f,g)=>{if(!g)return[];const M=g.getBoundingClientRect(),u=[],$=40/2;return c.forEach((T,G)=>{const Y=T.h*M.width;Math.abs(f-Y)<$&&u.push(G)}),u.sort((T,G)=>T-G)},q=Ze({onClick:({event:f})=>{const g=f.currentTarget.getBoundingClientRect(),M=f.clientX-g.left,u=f.clientY-g.top,m=L(M,u,R.current);if(m.length>0){const $=m.indexOf(a);if($!==-1){const T=($+1)%m.length;p(m[T])}else p(m[0])}else{if(!R.current)return;const T=Math.max(0,Math.min(1,M/g.width)),G=Math.max(0,Math.min(1,1-u/g.height));H({s:T,v:G},a)}},onDragStart:({event:f})=>{const g=f.currentTarget.getBoundingClientRect(),M=f.clientX-g.left,u=f.clientY-g.top,m=L(M,u,R.current),$=m.includes(a);let T=a;if(m.length>0&&!$)T=m[0],p(T);else if(m.length===0){if(!R.current)return;const Y=Math.max(0,Math.min(1,M/g.width)),ee=Math.max(0,Math.min(1,1-u/g.height));H({s:Y,v:ee},a)}z(T)},onDrag:({event:f,down:g})=>{if(f.preventDefault(),d===null||!g)return;const M=d,u=R.current;if(!u)return;const m=u.getBoundingClientRect(),$=f.clientX,T=f.clientY;if($>=m.left&&$<=m.right&&T>=m.top&&T<=m.bottom){const G=($-m.left)/m.width,Y=1-(T-m.top)/m.height;H({s:G,v:Y},M)}},onDragEnd:()=>{z(null)},onPointerMove:({event:f,dragging:g})=>{if(g)return;const M=f.currentTarget.getBoundingClientRect(),u=f.clientX-M.left,m=f.clientY-M.top,$=L(u,m,R.current);C($)},onPointerLeave:()=>{C([])}},{drag:{threshold:3,filterTaps:!0},eventOptions:{passive:!1}}),x=Ze({onClick:({event:f})=>{const g=f.currentTarget.getBoundingClientRect(),M=f.clientX-g.left,u=B(M,_.current);if(u.length>0){const m=u.indexOf(a);if(m!==-1){const $=(m+1)%u.length;p(u[$])}else p(u[0])}else{if(!_.current)return;const $=Math.max(0,Math.min(1,M/g.width));H({h:$},a)}},onDragStart:({event:f})=>{const g=f.currentTarget.getBoundingClientRect(),M=f.clientX-g.left,u=B(M,_.current),m=u.includes(a);let $=a;if(u.length>0&&!m)$=u[0],p($);else if(u.length===0){if(!_.current)return;const G=Math.max(0,Math.min(1,M/g.width));H({h:G},a)}z($)},onDrag:({event:f,down:g})=>{if(f.preventDefault(),d===null||!g)return;const M=d,u=_.current;if(!u)return;const m=u.getBoundingClientRect(),$=f.clientX;if($>=m.left&&$<=m.right){const T=($-m.left)/m.width;H({h:T},M)}},onDragEnd:()=>{z(null)},onPointerMove:({event:f,dragging:g})=>{if(g)return;const M=f.currentTarget.getBoundingClientRect(),u=f.clientX-M.left,m=B(u,_.current);A(m)},onPointerLeave:()=>{A([])}},{drag:{threshold:3,filterTaps:!0},eventOptions:{passive:!1}}),y=(f,g,M)=>{const u=f.s*O,m=(1-f.v)*E,$=g===a,T=g===d,G=i?.[g],Y=mt(f);let ee=Y;return M&&(ee=Y==="#FFFFFF"?"#FFFF00":"darkgoldenrod"),e.jsx("div",{className:Z("absolute rounded-full flex items-center justify-center font-bold",$||T?"w-10 h-10 -translate-x-5 -translate-y-5 border-2 text-xl":"w-6 h-6 -translate-x-3 -translate-y-3 border-2 text-sm"),style:{left:u,top:m,borderColor:ee,backgroundColor:ze(ke(f)),color:Y,userSelect:"none"},children:G},`plane-marker-${g}`)},v=(f,g,M)=>{const u=f.h*(_.current?.width??0),m=g===a,$=g===d,T=i?.[g],G=mt({h:f.h,s:1,v:1});let Y=G;return M&&(Y=G==="#FFFFFF"?"#FFFF00":"darkgoldenrod"),e.jsx("div",{className:Z("absolute top-0 rounded-full flex items-center justify-center font-bold",m||$?"h-10 w-10 -translate-x-5 translate-y-1 border-2 text-xl":"h-12 w-6 -translate-x-3 border-2 text-sm"),style:{left:u,borderColor:Y,backgroundColor:ze(ke({h:f.h,s:1,v:1})),color:G,userSelect:"none"},children:T},`hue-marker-${g}`)},b=(f,g,M)=>{const u=f.length;if(u===0)return[];let m=-1;if(g.length>0){const V=g.indexOf(a);if(V!==-1){const oe=(V+1)%g.length;m=g[oe]}else m=g[0]}const $=[];for(let V=1;V<u;V++)$.push((a+u-V)%u);const T=$.filter(V=>g.includes(V)&&V!==a);return[...$.filter(V=>!g.includes(V)),a,...T].filter(V=>V>=0&&V<u).map(V=>M(f[V],V,V===m))};return e.jsxs("div",{ref:w,style:{width:n},className:"flex flex-col gap-5",children:[e.jsxs("div",{ref:W,className:"relative cursor-pointer",style:{height:o,touchAction:"none"},...q(),children:[e.jsx("canvas",{ref:R}),b(c,P,y)]}),e.jsxs("div",{className:"relative cursor-pointer h-12",style:{touchAction:"none"},...x(),children:[e.jsx("canvas",{ref:_,height:48}),b(c,k,v)]})]})},et=s=>{if(s.startsWith("#")||s.startsWith("/"))return!1;try{return new URL(s,window.location.origin).hostname!==window.location.hostname}catch{return!1}},Ne=()=>new URLSearchParams(window.location.hash.substring(1)),gn=(s,t=!1)=>{const n=Ne();Object.entries(s).forEach(([i,r])=>{r==null?n.delete(i):n.set(i,r)});const o=n.toString();if(window.location.hash.substring(1)!==o){const i=window.location.href,r=`${window.location.pathname}${window.location.search}`,c=o?`${r}#${o}`:r;t?window.history.pushState(null,"",c):window.history.replaceState(null,"",c);try{const h=new HashChangeEvent("hashchange",{oldURL:i,newURL:c});window.dispatchEvent(h)}catch{window.dispatchEvent(new Event("hashchange"))}}},We=()=>typeof window<"u"&&!!window?.__TAURI__,xn=()=>typeof navigator<"u"&&/android/i.test(navigator.userAgent),tt=()=>{if(typeof navigator>"u")return!1;const s=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s))return!0;if(typeof window<"u"&&typeof window.matchMedia=="function")try{return window.matchMedia("(pointer: coarse), (max-width: 768px)").matches}catch{}return!1},bn=()=>We()&&tt(),yn=()=>We()&&xn(),vn=(s,t)=>!s||typeof s=="number"?t:s.key?s.key:typeof s.value=="string"||typeof s.value=="number"?s.value:typeof s.label=="string"?s.label:t,wn=tt()?"xl":"md",de={xs:{button:"px-2 py-1 text-xs",item:"px-3 py-1 text-xs",icon:"h-4 w-4",sub:"py-1"},sm:{button:"px-3 py-1.5 text-sm",item:"px-4 py-2 text-sm",icon:"h-5 w-5",sub:"py-1.5"},md:{button:"px-4 py-1.5 text-base",item:"px-4 py-2 text-base",icon:"h-6 w-6",sub:"py-1.5"},lg:{button:"px-5 py-2 text-base",item:"px-5 py-2 text-lg",icon:"h-7 w-7",sub:"py-2"},xl:{button:"px-6 py-2.5 text-lg",item:"px-6 py-3 text-xl",icon:"h-7 w-7",sub:"py-2.5"}};function pt(s){return typeof s=="object"&&!!s?.isSubEntry}function Tt(s){const t=[];let n=!0;for(const o of s)typeof o=="object"&&o?.isSubEntry?t.push(n):(n=!1,t.push(!1));return t}function $n(s,t,n){if(s==null||s[n])return Tt(t);const o=[];let i=!1;for(let r=0;r<t.length;++r){const c=t[r];typeof c=="object"&&c?.isSubEntry?o.push(i):r===n?(i=!0,o.push(!0)):(i=!1,o.push(!1))}return o}const kt=({value:s,defaultValue:t,onChange:n,options:o,placeholder:i,renderOption:r,renderValue:c,minContentWidth:h,contentWidth:a,maxContentHeight:p,className:d,menuClassName:z,theme:P,size:C=wn,align:k="left",iconMode:A="icon-text",mainIcon:O,buttonWidth:N,iconOnlySize:E})=>{const[I,R]=l.useState(t),_=l.useRef(null),[w,W]=l.useState({}),D=fe?.(),j=P??D?.theme??"light",F=s!==void 0?s:I,S=(u,m)=>{if(u.value===void 0&&u.href===void 0){m.preventDefault(),m.stopPropagation();return}s===void 0&&R(u.value),n?.(u.value)},H=()=>{if(_.current){const u=_.current.getBoundingClientRect(),m={top:`${u.bottom}px`};k==="left-side"?(m.left="0px",m.bottom="0px"):k==="right-side"?(m.right="0px",m.bottom="0px"):(m.minWidth=`${u.width}px`,k==="left"?m.left=`${u.left}px`:m.right=`${window.innerWidth-u.right}px`),W(m)}},L=o?.find(u=>u&&typeof u=="object"&&u.value===F&&!u.href),B=l.useMemo(()=>{switch(A){case"main-icon":return O;case"item-icon":case"icon-text":return L?.icon??O;case"text-only":default:return null}},[A,O,L?.icon]),q=L?.label??i,x=A==="main-icon"||A==="item-icon",y=o.some(u=>typeof u=="number"),v=k==="left-side"||k==="right-side",b=o.some(u=>pt(u)),[f,g]=l.useState(b?Tt(o):null),M=u=>{const{focus:m,disabled:$,selectable:T,className:G}=u;return Z(G,!a&&"whitespace-nowrap",de[C].item,$?j==="dark"?"text-gray-500":"text-gray-400":j==="dark"?"text-white":"text-gray-900",m&&!$&&T&&(j==="dark"?"bg-gray-700":"bg-gray-100"),($||!T)&&"cursor-not-allowed")};return e.jsxs(Ot,{as:"div",className:Z("relative",d),style:!x&&N?{width:`${N}px`}:void 0,children:[e.jsx(Ht,{ref:_,onClick:H,className:Z(x?["p-2 rounded-full focus:outline-none",j==="dark"?"hover:bg-gray-700":"hover:bg-gray-100"]:["flex justify-between items-center w-full rounded-md border shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",de[C].button,j==="dark"?"border-gray-700 bg-gray-800 text-white hover:bg-gray-700 focus:ring-offset-gray-900 focus:ring-indigo-500":"border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500"]),children:x?e.jsx("span",{className:Z(!E&&de[C].icon,"flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),style:E?{width:`${E}px`,height:`${E}px`}:void 0,children:B}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex items-center truncate",children:c?c(F,L):e.jsxs(e.Fragment,{children:[B&&e.jsx("span",{className:Z(de[C].icon,"mr-2 flex items-center justify-center","[&>img]:h-full [&>img]:w-full [&>img]:object-contain","[&>svg]:h-full [&>svg]:w-full"),children:B}),e.jsx("strong",{children:q})]})}),e.jsx("span",{className:"ml-2 text-xs",children:"▼"})]})}),e.jsx($t,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e.jsx(Dt,{style:{...w,minWidth:h?`${h}px`:w.minWidth,width:a?`${a}px`:void 0},className:Z("fixed z-50 mt-1 rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none",k!=="left-side"&&k!=="right-side"&&"w-auto",{"origin-top-left":k==="left"||k==="left-side","origin-top-right":k==="right"||k==="right-side"},j==="dark"?"bg-gray-800 ring-gray-400 border border-gray-600":"bg-white ring-black",z),children:e.jsx("div",{className:Z("py-1",{"h-full":v||y,"flex flex-col":y}),style:{maxHeight:!v&&p?`${p}px`:void 0,overflowY:"auto"},children:o.map((u,m)=>{if(u===null)return e.jsx("div",{className:"my-1 h-px bg-gray-200 dark:bg-gray-700"},`divider-${m}`);if(typeof u=="number")return e.jsx("div",{style:{flexGrow:u}},`spacer-${m}`);if(u?.isSubEntry&&!f?.[m])return null;const $=vn(u,m),T=!!u.href,G=u.href?et(u.href):!1,Y=u.href!==void 0||u.value!==void 0,ee=!!u.disabled;return e.jsx(Bt,{disabled:u.disabled||!Y,as:"div",children:({focus:V,disabled:oe})=>{const be=u?.isSubEntry?null:f?.[m],we=u.icon&&e.jsx("div",{className:de[C].icon,children:u.icon}),ie=b&&e.jsx("div",{children:be==null?e.jsx("div",{className:de[C].sub,children:e.jsx("div",{className:Z("mx-2",de[C].icon)})}):pt(o[m+1])&&e.jsx("button",{className:Z("h-full",de[C].sub),onClick:X=>{X.stopPropagation(),X.preventDefault(),g(Q=>$n(Q,o,m))},children:e.jsx("div",{className:Z("mx-2",de[C].icon,"border border-solid rounded-sm flex items-center justify-center",j==="dark"?"border-gray-600 hover:bg-gray-700":"border-gray-400 hover:bg-gray-100"),children:be?e.jsx(Wt,{}):e.jsx(qt,{})})})}),ue=r?r(u):e.jsxs("div",{className:"flex items-center gap-4",children:[we,e.jsxs("div",{className:"flex-1 w-full flex items-baseline",children:[u.label,G&&e.jsx(Ut,{className:"ml-3 h-4 w-4"})]})]}),K="flex w-full item-center justify-between",ne=M({focus:V,disabled:ee,selectable:Y,className:"flex items-center justify-between w-full"});return T&&!oe?e.jsxs("div",{className:K,children:[ie,e.jsx("a",{href:u.href,target:G?"_blank":"_self",rel:"noopener noreferrer",className:ne,children:ue})]}):Y&&!r&&typeof u.label=="string"?e.jsxs("div",{className:K,children:[ie,e.jsx("button",{onClick:X=>S(u,X),disabled:oe,className:ne,children:ue})]}):e.jsxs("div",{className:K,children:[ie,e.jsx("div",{onClick:Y?X=>S(u,X):void 0,className:ne,children:ue})]})}},$)})})})})]})};new TextEncoder;new TextDecoder;function Cn(s){const t=Array.from(s,o=>String.fromCodePoint(o)).join("");return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function He(s,t){const n=s<0?"-":"+",o=Math.abs(s),i=t-1;if(i<=0)return n;if(o===0)return n+"0.0".padEnd(i,"0").substring(0,i);const r=String(Math.trunc(o));if(r.length<=i){const c=i-r.length;if(c>1){let h=c-1,a=o.toFixed(h);if(a.split(".")[0].length>r.length&&(h-=a.split(".")[0].length-r.length,h>=0?a=o.toFixed(h):a=String(Math.round(o))),a.length<=i)return n+a}if(r.length<=i){let h=r;return h.length<i&&(h+=".".repeat(i-h.length)),n+h}}if(i>=3){for(let h=i-4;h>=0;h--){let a=o.toExponential(h).replace("e+","e");if(a.length<=i)return n+a}let c=o.toExponential(0).replace("e+","e");if(c.length<=i)return n+c}if(o>1)return n+".".repeat(i);{const c="0.0000";return c.length<=i?n+c:n+"0.0".padEnd(i,"0").substring(0,i)}}function De(s,t,n=7,o="i"){const i=He(s,n),r=He(t,n);return`${i}${r}${o}`}function gt(s,t,n=7,o=["(",", ",")"]){const i=He(s,n),r=He(t,n);return`${o[0]}${i}${o[1]}${r}${o[2]}`}const jt=l.createContext(void 0);function _n(s){return new Promise((t,n)=>{window.speechSynthesis.cancel(),setTimeout(()=>{window.speechSynthesis.speaking?(window.speechSynthesis.cancel(),setTimeout(()=>{console.log("[TTS SPEAKING]",s.text),window.speechSynthesis.speak(s)},100)):(console.log("[TTS SPEAKING]",s.text),window.speechSynthesis.speak(s))},100)})}const Tn=({children:s,defaultLanguage:t="en",storageKey:n="language",audioMap:o})=>{const i=l.useMemo(()=>o?o instanceof Map?o:new Map(Object.entries(o)):new Map,[o]),[r,c]=l.useState(()=>{if(typeof window<"u"){const D=localStorage.getItem(n);if(D==="en"||D==="zh")return D;if((navigator?.language?.toLowerCase()||"").startsWith("zh"))return"zh"}return t}),[h,a]=l.useState(!1),[p,d]=l.useState(!1),[z,P]=l.useState(!1),[C,k]=l.useState(null),[A,O]=l.useState(null),N=l.useRef(null),E=l.useRef(null);l.useEffect(()=>{typeof window<"u"&&localStorage.setItem(n,r)},[r,n]);const I=D=>c(D),R=()=>c(D=>D==="en"?"zh":"en"),_=l.useCallback(()=>{window?.speechSynthesis?.cancel(),E.current&&(E.current.pause(),E.current.src="",E.current=null),d(!1),P(!1),k(null),O(null),N.current=null},[]),w=l.useCallback((D,j)=>{h&&(k(D),O(j??D))},[h]);l.useEffect(()=>{const D=F=>{if(typeof window>"u"||!window.speechSynthesis){console.warn("SpeechSynthesis is not supported in this environment.");return}d(!0);const S=new SpeechSynthesisUtterance(F);S.lang=r==="en"?"en-US":"zh-CN",S.onend=()=>{d(!1),k(null),O(null)},S.onerror=H=>{d(!1),H.error!=="interrupted"&&(console.error("Speech error:",H),k(null),O(null))},_n(S)},j=F=>{P(!0),console.log("[Playing Audio]",F);const S=new Audio(F);E.current=S,S.onended=()=>{P(!1),k(null),O(null),E.current=null},S.onerror=H=>{console.error(`Error playing audio from ${F}.`,H),P(!1),E.current=null},S.play().catch(H=>{console.error("Audio playback failed.",H),P(!1),E.current=null})};if(h&&C&&A&&C!==N.current){let F=!1;return(async()=>{if(window.speechSynthesis&&window.speechSynthesis.cancel(),E.current&&(E.current.pause(),E.current.src="",E.current=null),await new Promise(H=>setTimeout(H,100)),!F){if(N.current=C,i.size===0){D(C);return}try{const L=new TextEncoder().encode(A),B=await crypto.subtle.digest("SHA-1",L);if(F)return;const q=Cn(new Uint8Array(B)),x=i.get(q);x?j(x):D(C)}catch{}}})(),()=>{F=!0}}},[h,C,A,r,i]),l.useEffect(()=>{(!h||!C)&&(p||z)&&_()},[h,C,p,z,_]);const W=l.useMemo(()=>({language:r,setLanguage:I,toggleLanguage:R,isAudioEnabled:h,setAudioEnabled:a,speak:w,isSpeaking:p||z,cancelSpeech:_}),[r,h,C,p,z]);return e.jsx(jt.Provider,{value:W,children:s})},kn=()=>{const s=l.useContext(jt);if(!s)throw new Error("useLanguage must be used within a LanguageProvider");return s};let Ge;const xt=(s,t,n="normal",o="sans-serif")=>{if(!s)return 0;const i=`${n} ${t}px ${o}`;if(typeof document>"u"||typeof window>"u"){const h=n==="bold"?.75:.6;return s.length*t*h}Ge||(Ge=document.createElement("canvas"));const r=Ge.getContext("2d");if(!r){const h=n==="bold"?.75:.6;return s.length*t*h}return r.font=i,r.measureText(s).width},Ie=(s,t,n,o,i)=>{const r=Array.isArray(s)&&s.length>0,c=typeof s=="string"&&s.length>0;if(!r&&!c&&!t)return null;if(i&&c&&!t)return e.jsx("a",{href:s,target:et(s)?"_blank":"_self",rel:"noopener noreferrer",className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",style:{padding:Ee},children:Pe.cloneElement(n,{style:{height:re,width:re}})});const h=r?s.map(C=>{if(!C)return null;const{key:k,text:A,href:O,icon:N,...E}=C;return{label:A,href:O??void 0,icon:N,disabled:O===null,...E}}):c?[{href:s,label:s,icon:n}]:[],{options:a=[],...p}=t??{};let d;const z=h.length>0,P=a.length>0;if(!z)d=a;else if(!P)d=h;else{const C=a.findIndex(k=>typeof k=="number");if(C===-1)d=[...a,null,...h];else{const k=a.slice(0,C),A=a[C],O=a.slice(C+1);d=[...k],k.length>0&&d.push(null),d.push(...h),A>0?d.push(A):O.length>0&&d.push(null),d.push(...O)}}return e.jsx(kt,{options:d,align:o,mainIcon:n,iconMode:"main-icon",iconOnlySize:re,...p})},Ve=20,jn=16,St=24,re=32,Mt=Math.max(St*2,re),_e=Mt,Ee=(Mt-re)/2,Xe=8,Ye=8,bt=4,Sn=({title:s,audio:t,appIconUrl:n,homeUrl:o,sideMenu:i,sideMenuConfig:r,helpMenu:c,helpMenuConfig:h,gearMenu:a,gearMenuConfig:p,userMenu:d,userMenuConfig:z,headerWidth:P,languages:C,renderTitle:k,askTitleWidth:A})=>{const{theme:O,toggleTheme:N}=fe(),{language:E,setLanguage:I,isAudioEnabled:R,setAudioEnabled:_}=kn(),[w,W]=l.useState(0),D=l.useRef(null),[j,F]=l.useState(!0),S=l.useRef(null),[H,L]=l.useState(),[B,q]=l.useState(!1);l.useEffect(()=>{C&&C.length>0&&!C.includes(E)&&I(C[0])},[E,C,I]),l.useEffect(()=>{const X=S.current;if(P||!X)return;const Q=new ResizeObserver(U=>{U[0]&&L(U[0].contentRect.width)});return Q.observe(X),()=>Q.disconnect()},[P]);const x=!!(c&&c.length>0||h),y=!!(a&&a.length>0||p),v=!!(d&&d.length>0||z),b=!!(C&&C.length>0),f=!!(Array.isArray(i)&&i.length>0||r),{unclampedTitleWidthNormal:g,unclampedTitleWidthCompact:M,boldTitleWidth:u,effectiveMinTitleWidth:m,singleLineNormalTitleWidth:$}=l.useMemo(()=>{const X=P??H;if(!X)return{unclampedTitleWidthNormal:0,unclampedTitleWidthCompact:0,boldTitleWidth:0,effectiveMinTitleWidth:0,singleLineNormalTitleWidth:0};let Q=0;f&&Q++,o&&Q++;let U=1;t&&U++,b&&U++,x&&U++,y&&U++,v&&U++;let J=1;x&&J++;const te=ve=>{const ce=Q*_e,qe=ve*_e+(ve>1?(ve-1)*bt:0);let me=2;f&&me++,o&&me++;const Ce=me>1?(me-1)*Ye:0,Ue=2*Xe;return X-Ue-ce-qe-Ce},se=te(U),le=te(J),he=typeof s=="string"?xt(s,Ve,"normal"):0,ye=A??he,$e=typeof s=="string"?xt(s,Ve,"bold"):0;return{unclampedTitleWidthNormal:se,unclampedTitleWidthCompact:le,boldTitleWidth:$e,effectiveMinTitleWidth:ye,singleLineNormalTitleWidth:he}},[P,H,f,o,t,b,x,y,v,s,A]),T=g<m;l.useEffect(()=>{if(!D.current)return;if(P??H){const U=T?M:g,J=$>U;B!==J&&q(J);let te=!0;J?te=!0:u>U&&(te=!1),j!==te&&F(te),W(Math.max(0,U))}},[P,H,T,j,B,g,M,u,m,$]);const G=()=>Ie(i,r,e.jsx(Vt,{}),"left-side"),Y=()=>Ie(c,h,e.jsx(Jt,{}),"right",!0),ee=()=>{const X=[];if(T){X.push(0),X.push({label:`Theme: ${O.charAt(0).toUpperCase()+O.slice(1)}`,value:"theme-toggle",icon:O==="light"?e.jsx(rt,{}):e.jsx(at,{})}),t&&X.push({label:"Audio: "+(R?"Enabled":"Disabled"),value:"audio-toggle",icon:R?e.jsx(it,{}):e.jsx(ct,{})}),C&&C.length>0&&(X.length>0&&X.push(null),C.forEach(te=>{X.push({label:te==="en"?"English":"中文",value:`lang-${te}`,icon:E===te?e.jsx(lt,{}):e.jsx("div",{})})}));const J=[];typeof d=="string"?J.push({label:"Account",href:d,icon:e.jsx(ht,{})}):Array.isArray(d)&&d.forEach(te=>{te&&J.push({...te,label:te.text,href:te.href??void 0})}),J.length>0&&(X.length>0&&X.push(null),X.push(...J))}const Q=p?.options?[...p.options]:[];return X.length>0&&(Q.length>0&&Q.push(null),Q.push(...X)),Ie(a,{...p,options:Q,onChange:J=>{J==="theme-toggle"?N():J==="audio-toggle"?_(!R):J.startsWith("lang-")?I(J.substring(5)):p?.onChange?.(J)}},e.jsx(Yt,{}),"right",!T)},V=()=>e.jsx("button",{onClick:N,className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",style:{padding:Ee},children:O==="light"?e.jsx(rt,{style:{height:re,width:re}}):e.jsx(at,{style:{height:re,width:re}})}),oe=()=>t?e.jsx("button",{onClick:()=>_(!R),className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",title:R?"Disable Audio":"Enable Audio",style:{padding:Ee},children:R?e.jsx(it,{style:{height:re,width:re}}):e.jsx(ct,{style:{height:re,width:re}})}):null,be=()=>Ie(d,z,e.jsx(ht,{}),"right",!0),we=()=>{if(!C||C.length===0)return null;const X=C.map(U=>({label:U==="en"?"English":"中文",value:U,icon:E===U?e.jsx(lt,{}):e.jsx("div",{})})),Q=U=>I(U);return e.jsx(kt,{options:X,align:"right",mainIcon:e.jsx(Xt,{}),iconMode:"main-icon",iconOnlySize:re,onChange:Q})},ie=typeof k=="function"?k(w):null,ue=ie??s,K=n&&!ie&&j&&g-_e-Ye>u,ne=T?y||t||b||v:y;return e.jsx("header",{ref:S,className:"bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center h-12",style:{paddingLeft:Xe,paddingRight:Xe},children:e.jsxs("div",{className:"flex-1 flex items-center",style:{gap:Ye},children:[G(),o&&e.jsx("a",{href:o,target:et(o)?"_blank":"_self",rel:"noopener noreferrer",className:"rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",title:"Home",style:{padding:Ee},children:e.jsx(Gt,{style:{height:re,width:re}})}),e.jsx("div",{className:"flex-1 flex justify-center items-center min-w-0 h-12 overflow-clip",ref:D,style:P?{width:`${w}px`}:{},children:typeof ue!="string"?e.jsx("div",{className:"inline-block w-full",children:ie}):e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[K&&e.jsx("img",{src:n,alt:"App icon",className:"block rounded",style:{height:_e,width:_e}}),e.jsx("h1",{className:`min-w-0 ${j?"font-bold":""} ${B?"text-wrap text-center line-clamp-2":"truncate"}`,style:{fontSize:B?jn:Ve,lineHeight:B?`${St}px`:"normal"},children:ue})]})}),e.jsxs("nav",{className:"flex items-center",style:{gap:bt},children:[(!T||!ne)&&V(),!T&&oe(),!T&&we(),ne&&ee(),Y(),!T&&be()]})]})})},zt={zoom:1,center:[0,0]},Mn=36,yt=1e3,zn=10,pe=(s,t,n,o,i,r,c,h)=>{let a=null;const[p,d]=[i[0]-r/2,i[1]+c/2];for(let z=0;z<n.length;z++){const P=n[z],C=(P[0]-p)/r*h.width,k=(d-P[1])/c*h.height,A=Math.sqrt(Math.pow(s-C,2)+Math.pow(t-k,2));(a===null||A<a.distance)&&(a={type:"control",index:z,distance:A})}for(let z=0;z<o.length;z++){const P=o[z],C=(P[0]-p)/r*h.width,k=(d-P[1])/c*h.height,A=Math.sqrt(Math.pow(s-C,2)+Math.pow(t-k,2));(a===null||A<a.distance)&&(a={type:"display",index:z,distance:A})}return a&&a.distance<Mn?a:null},In=({view:s,setZoomAndCenter:t,onShowInfo:n,controlPoints:o=[],onControlPointsChange:i,controlPointParams:r,onControlEvent:c})=>{const{zoom:h,center:a,worldWidth:p,worldHeight:d,aspect:z,baseViewSize:P=4,initialView:C=zt}=s,k=r?.controlPoints??[],A=r?.displayPoints??[],O=l.useCallback(v=>{if(!(!v||!r))return(v.type==="control"?r.controlPoints:r.displayPoints)?.[v.index]?.key},[r]),N=A.map(v=>v.position).filter(v=>!!v),E=k.map(v=>v.position).filter(v=>!!v),I=r?.min,R=r?.max,[_,w]=l.useState(null),W=l.useRef(_);W.current=_;const[D,j]=l.useState(!1),F=l.useRef(null),S=l.useRef(null),H=l.useCallback(v=>{if(v&&v.type==="control"&&E&&E[v.index]){const b=[...o];b[v.index]=E[v.index],i&&i(b)}else t(()=>C)},[t,C,o,i,E]),L=l.useCallback(()=>{const v=W.current;if(!(!i||!v)){if(v.mode==="delete"){if(I===void 0||o.length<=I)return;if(c?.("delete",v.index,o[v.index])){w(null);return}const b=o.filter((f,g)=>g!==v.index);i(b)}else if(v.mode==="insert"){if(R===void 0||o.length>=R)return;if(c?.("insert",void 0,v.coords)){w(null);return}const b=[...o,v.coords];i(b)}w(null)}},[o,R,I,i,c]),B=l.useCallback((v,b,f)=>{const g=v-f.left,M=b-f.top,u=pe(g,M,o,N,a,p,d,f);if(u&&u.type==="control"){if(I===void 0||I>=o.length)return;w({mode:"delete",index:u.index})}else{if(R===void 0||R<=o.length)return;const m=a[0]-p/2+g/f.width*p,$=a[1]+d/2-M/f.height*d;w({mode:"insert",coords:[m,$]})}F.current=window.setTimeout(()=>{L(),F.current=null},yt)},[a,o,N,L,d,p,I,R]),q=Ze({onPointerDown:({event:v})=>{v.preventDefault();const b=v.currentTarget.getBoundingClientRect();if(!b)return;const{clientX:f,clientY:g}=v,M=f-b.left,u=g-b.top,m=pe(M,u,o,N,a,p,d,b);m&&m.type==="control"?(j(!0),w({mode:"modify",index:m.index,coords:o[m.index]})):w(null),S.current={x:f,y:g},F.current=window.setTimeout(()=>{B(f,g,b)},yt)},onPointerUp:({event:v})=>{j(!1);const b=v.currentTarget.getBoundingClientRect();if(!b)return;const{clientX:f,clientY:g}=v,M=f-b.left,u=g-b.top,m=pe(M,u,o,N,a,p,d,b);m&&m.type==="control"?w({mode:"modify",index:m.index,coords:o[m.index]}):w(null),F.current&&(clearTimeout(F.current),F.current=null)},onPointerMove:({event:v})=>{if(D)return;const b=v.currentTarget.getBoundingClientRect();if(!b)return;const{clientX:f,clientY:g}=v;if(F.current&&S.current){const V=f-S.current.x,oe=g-S.current.y;Math.sqrt(V*V+oe*oe)>zn&&(clearTimeout(F.current),F.current=null,w(null))}const M=f-b.left,u=g-b.top,m=pe(M,u,o,N,a,p,d,b);if(m&&m.type==="control"?w({mode:"modify",index:m.index,coords:o[m.index]}):w(V=>V?.mode==="modify"?null:V),!n)return;const $=f-b.left,T=g-b.top,G=a[0]+($/b.width-.5)*p,Y=a[1]+(.5-T/b.height)*d,ee=m?{...m,method:"hover",key:O(m)}:{method:"hover"};n({coords:[G,Y],activePoint:ee})},onDrag:({event:v,first:b,movement:[f,g],xy:[M,u],memo:m})=>{F.current&&(clearTimeout(F.current),F.current=null,w(T=>T?.mode==="delete"?{mode:"modify",index:T.index,coords:o[T.index]}:null)),v.preventDefault();const $=v.currentTarget.getBoundingClientRect();if($){if(b||!m){const T=M-$.left,G=u-$.top;if(i){const Y=pe(T,G,o,N,a,p,d,$);if(Y&&Y.type==="control"){const ee=a[0]-p/2+T/$.width*p,V=a[1]+d/2-G/$.height*d;return c?.("init-modify",Y.index,[ee,V])?{dragMode:"none"}:{dragMode:"point",pointIndex:Y.index}}}return{dragMode:"canvas",startCenter:a}}if(m.dragMode==="point"){if(!i)return m;const T=M-$.left,G=u-$.top,Y=a[0]-p/2+T/$.width*p,ee=a[1]+d/2-G/$.height*d;if(c?.("modify",m.pointIndex,[Y,ee]))return m;const V=[...o];return V[m.pointIndex]=[Y,ee],w({mode:"modify",index:m.pointIndex,coords:[Y,ee]}),i(V),m}if(m.dragMode==="canvas"){const{startCenter:T}=m;if(!T)return m;const G=f/$.width*p,Y=g/$.height*d;return t(ee=>({...ee,center:[T[0]-G,T[1]+Y]})),m}}},onDragEnd:({event:v,memo:b})=>{if(b?.dragMode==="point"){const f=v.currentTarget.getBoundingClientRect();if(!f)return;const{clientX:g,clientY:M}=v,u=g-f.left,m=M-f.top,$=a[0]-p/2+u/f.width*p,T=a[1]+d/2-m/f.height*d;c?.("done-modify",b.pointIndex,[$,T])}},onPinch:({event:v,first:b,offset:[f]})=>{v.preventDefault(),b&&(F.current&&(clearTimeout(F.current),F.current=null),w(null)),t(g=>({...g,zoom:f}))},onWheel:({event:v,delta:[,b]})=>{if(b===0)return;const f=v.currentTarget.getBoundingClientRect();if(!f)return;const g=v.clientX-f.left,M=v.clientY-f.top,u=1.1,m=b<0?h*u:h/u;let $,T;z>=1?(T=P/m,$=T*z):($=P/m,T=$/z);const G=g/f.width-.5,Y=.5-M/f.height,ee=a[0]+G*(p-$),V=a[1]+Y*(d-T);t(()=>({zoom:m,center:[ee,V]}))},onDoubleClick:({event:v})=>{v.preventDefault();const b=v.currentTarget.getBoundingClientRect();if(!b)return;const f=v.clientX-b.left,g=v.clientY-b.top,M=pe(f,g,o,N,a,p,d,b),u=[a[0]-p/2+f/b.width*p,a[1]+d/2-g/b.height*d];if(!c?.("reset",M?.type==="control"?M.index:void 0,u))return H(M)},onClick:({event:v})=>{const b=v.currentTarget.getBoundingClientRect();if(!b)return;const{clientX:f,clientY:g}=v,M=f-b.left,u=g-b.top,m=a[0]+(M/b.width-.5)*p,$=a[1]+(.5-u/b.height)*d,T=pe(M,u,o,N,a,p,d,b);if(c?.("select",T?.type==="control"?T.index:void 0,[m,$]),!n)return;const G=T?{...T,method:"click",key:O(T)}:{method:"click"};n({coords:[m,$],activePoint:G})}},{eventOptions:{passive:!1},drag:{from:()=>[0,0],filterTaps:!0,threshold:10},pinch:{from:()=>[h,0]}}),x={touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent"};return{controlHandlers:{...q(),onContextMenu:v=>v.preventDefault(),style:x},pointToChange:_}},An=1e4,Nn=4e3;function En(s="view",t="control point",n=!1,o=!1){let i=`### Mouse Controls:

- **Pan:** Click and drag on an empty area of the ${s} to move the view.
- **Zoom:** Use the scroll wheel to zoom in and out.
- **Reset View:** Double-click on an empty area of the ${s} to reset
  the pan and zoom to their original values.
`;return t&&(i+=`
Some visualizations may feature control points, each representing a
${t}. If not visible, hover over or single-click the ${s}
to show them. A grid, axis, and other info may also appear. All these
elements will automatically hide after a few seconds of inactivity.

- **Move ${t}:** Click and drag a control point to move it.
- **Reset ${t}:** Double-click a ${t} to reset its position.
`,n&&(i+=`- **Add ${t}:** Long-press on an empty area to add a new ${t}.
`),o&&(i+=`- **Remove ${t}:** Long-press on an existing ${t} to remove it.
`)),i+=`
### Touch Controls:

- **Pan:** Drag with one finger on an empty area of the ${s} to move the
  view.
- **Zoom:** Pinch with two fingers to zoom in and out.
- **Reset View:** Double-tap on an empty area of the ${s} to reset the
  pan and zoom to their original or best-fit values.
`,t&&(i+=`
Some visualizations may feature control points, each representing a
${t}. If not visible, tap anywhere on the ${s} to show them.
A grid, axis, and other info may also appear. All these elements will
automatically hide after a few seconds of inactivity.

- **Move ${t}:** Drag a control point to move it.
- **Reset ${t}:** Double-tap a ${t} to reset its position.
`,n&&(i+=`- **Add ${t}:** Long-press on an empty area to add a new ${t}.
`),o&&(i+=`- **Remove ${t}:** Long-press on an existing ${t} to remove it.
`)),i}const Rn=500,vt=25,Fn=24,Pn=22,Ln=({xRange:s,yRange:t,theme:n,worldToScreen:o,center:i,gridTooDense:r})=>{const c=l.useMemo(()=>{const a=[],[p,d]=s,[z,P]=t,C=n==="dark"?"rgba(200, 200, 200,":"rgba(100, 100, 100,",k="0.8)",A="0.5)";for(let O=Math.ceil(p);O<=Math.floor(d);O++){const N=o([O,z]);if(!N)continue;const E=O===0;r&&!E||a.push(e.jsx("div",{className:"absolute",style:{left:N[0],top:0,width:1,height:"100%",backgroundColor:C+(E?k:A),transform:E?"translateX(-50%)":void 0}},`v-${O}`))}for(let O=Math.ceil(z);O<=Math.floor(P);O++){const N=o([p,O]);if(!N)continue;const E=O===0;r&&!E||a.push(e.jsx("div",{className:"absolute",style:{left:0,top:N[1],width:"100%",height:1,backgroundColor:C+(E?k:A),transform:E?"translateY(-50%)":void 0}},`h-${O}`))}return a},[s,t,n,o,r]),h=l.useMemo(()=>{const{pos:a}=Re([0,0],i,s,t),p=o(a);if(!p)return null;const d=n==="dark"?"rgba(200, 200, 200, 0.8)":"rgba(100, 100, 100, 0.8)";return e.jsx("div",{className:"absolute",style:{left:p[0],top:p[1],width:12,height:12,borderRadius:"50%",backgroundColor:d,transform:"translate(-50%, -50%)"}})},[i,s,t,n,o]);return e.jsxs(e.Fragment,{children:[c,h]})};function Re(s,t,n,o){const[i,r]=s,[c,h]=n,[a,p]=o;if(i>=c&&i<=h&&r>=a&&r<=p)return{pos:s,clipped:!1};const[d,z]=t,P=i-d,C=r-z;let k=1/0;const A=1e-9;if(Math.abs(P)>A){const E=(c-d)/P,I=(h-d)/P;if(E>0){const R=z+E*C;R>=a&&R<=p&&(k=Math.min(k,E))}if(I>0){const R=z+I*C;R>=a&&R<=p&&(k=Math.min(k,I))}}if(Math.abs(C)>A){const E=(a-z)/C,I=(p-z)/C;if(E>0){const R=d+E*P;R>=c&&R<=h&&(k=Math.min(k,E))}if(I>0){const R=d+I*P;R>=c&&R<=h&&(k=Math.min(k,I))}}if(k!==1/0&&k>0)return{pos:[d+k*P,z+k*C],clipped:!0};const O=Math.max(c,Math.min(h,i)),N=Math.max(a,Math.min(p,r));return{pos:[O,N],clipped:!0}}const On=["N","M","S"],Ae=["W","C","E"],Hn=({info:s,theme:t,infoBoxOpacity:n,showInfoOverlay:o,mouseCoords:i,activePoint:r,controlPoints:c,controlPointParams:h,worldToScreen:a,size:p})=>{const d={N:{W:[],C:[],E:[]},M:{W:[],C:[],E:[]},S:{W:[],C:[],E:[]}},z=s.map(j=>typeof j=="object"&&typeof j?.position=="string"?j.position:null).filter(j=>j!=null),P=z.some(j=>j.startsWith("N")),C=z.some(j=>j.startsWith("S")),k=.5+.1*((P?1:0)-(C?1:0)),A=o==="hidden"?0:o==="always"?1:n,O=Z("inline-block py-1 px-2 rounded-md iota-overlay-infobox",t==="dark"?"text-white":"text-black"),N=j=>{const F=j.trim();if(!F)return null;const S=F.split(`
`);return S.map((H,L)=>e.jsxs(Pe.Fragment,{children:[H,L<S.length-1?e.jsx("br",{}):null]},L))},E=(j,F)=>typeof j=="string"?e.jsx("div",{className:O,children:N(j)},F):e.jsx(Pe.Fragment,{children:j},F),I=l.useMemo(()=>{if(!r||r.index==null)return null;let j;return r.type==="control"&&c[r.index]?j=c[r.index]:r.type==="display"&&h?.displayPoints?.[r.index]?.position&&(j=h.displayPoints[r.index].position),j?a(j):null},[r,c,h,a]),R=[],_={focus:0,mouse:0},w=(j,F,S,H,L,B={})=>{const[q,x]=F,{pixelWidth:y,pixelHeight:v}=p,{fontSize:b,maxWidth:f=y*.6,xRadius:g=0,yRadius:M=0}=B,u=typeof S=="string",m=f>0?Math.min(Math.max(q,f/2),y-f/2):q,$=Fn+(L?H*Pn:0),T={opacity:A,position:"absolute",left:m,transform:"translateX(-50%)",maxWidth:f||void 0};x<v*k?T.top=x+$+M:T.bottom=v-x+$+M,u&&(T.overflow="hidden"),R.push(e.jsx("div",{style:T,className:"absolute m-1 pointer-events-none transition-opacity duration-500 ease-out z-3",children:u?e.jsx("div",{className:O,style:{fontSize:b},children:N(S)}):S},j))};s.forEach((j,F)=>{if(!j&&j!=="")return;if(typeof j=="string"){const x=I||i;if(!x)return;const y=I?"focus":"mouse",v=_[y];_[y]=v+1,w(`auto-${F}`,x,j,v,!0);return}const{position:S,content:H,fontSize:L,maxWidth:B}=j,q={fontSize:L,maxWidth:B};if(Array.isArray(S)){if(S.length!==2)return;const x=S,y=a(x)??x;w(`coord-${F}`,y,H,0,!1,q);return}if(typeof S=="object"&&S!==null){if("x"in S&&"y"in S&&Object.keys(S).length===2){const x=[S.x,S.y],y=a(x)??x;w(`coord-${F}`,y,H,0,!1,q);return}if("xMin"in S&&"xMax"in S&&"yMin"in S&&"yMax"in S&&Object.keys(S).length===4){const[x,y]=a([S.xMin,S.yMin])??[0,0],[v,b]=a([S.xMax,S.yMax])??[0,0];w(`coord-${F}`,[(x+v)*.5,(y+b)*.5],H,0,!1,{...q,xRadius:Math.abs((v-x)*.5),yRadius:Math.abs((b-y)*.5)});return}}if(S==="focus"){if(!I)return;w(`focus-${F}`,I,H,0,!1,q);return}if(S==="mouse"){if(!i)return;w(`mouse-${F}`,i,H,0,!1,q);return}if(typeof S=="string"&&S.length===2){const x=S.charAt(0),y=S.charAt(1);(x==="N"||x==="M"||x==="S")&&(y==="W"||y==="C"||y==="E")&&d[x][y].push({key:`row-${S}-${F}`,value:H})}});const W={W:"items-start text-left",C:"items-center text-center",E:"items-end text-right"},D=On.map(j=>{if(!Ae.map(y=>d[j][y]).some(y=>y.length>0))return null;const H=4,L={left:H,right:H,opacity:A};j==="N"?L.top=H:j==="S"?L.bottom=H:(L.top="50%",L.transform="translateY(-50%)");const B=Ae.filter(y=>d[j][y].length>0),q=d[j].C.length>0,x={W:"",C:"",E:""};return B.length===1?x[B[0]]="flex-1":B.length===2&&B.includes("W")&&B.includes("E")&&!q?(x.W="basis-1/2",x.E="basis-1/2",x.C="hidden"):q&&B.length>=2&&Ae.forEach(y=>{x[y]="basis-1/3"}),e.jsx("div",{style:L,className:"absolute pointer-events-none transition-opacity duration-500 ease-out z-3 px-2 py-1",children:e.jsx("div",{className:"flex w-full gap-3",children:Ae.map(y=>{const v=d[j][y],b=W[y],f=x[y]||(v.length>0?"flex-1":"hidden");return v.length===0?e.jsx("div",{className:Z("flex flex-col",b,f)},`col-${j}-${y}`):e.jsx("div",{className:Z("flex flex-col gap-2",b,f),children:v.map(g=>E(g.value,g.key))},`col-${j}-${y}`)})})},`row-${j}`)});return e.jsxs(e.Fragment,{children:[D,R]})},Dn=({children:s,viewParams:t,onInfoOverlay:n,onOverlayStatusChange:o,onViewChange:i,className:r,controlPoints:c=[],onControlPointsChange:h,controlPointParams:a,showInfoOverlay:p="active",showGridOverlay:d=!0,showInfoTimeout:z=An,pointClassNames:P,onControlEvent:C})=>{const{theme:k}=fe(),[A,O]=l.useState(()=>t?.initialView??zt),[N,E]=l.useState(1),[I,R]=l.useState({pixelWidth:0,pixelHeight:0}),[_,w]=l.useState(null),[W,D]=l.useState(0),j=l.useRef(null),F=l.useRef(null),[S,H]=l.useState(0),L=l.useRef(null),B=l.useRef(null),[q,x]=l.useState(null),y=l.useRef(),v=a?.timeout??Nn;l.useEffect(()=>{const K=B.current;if(!K)return;const ne=new ResizeObserver(X=>{for(let Q of X){const{width:U,height:J}=Q.contentRect;E(U>0&&J>0?U/J:1),R({pixelWidth:U,pixelHeight:J})}});return ne.observe(K),()=>ne.disconnect()},[]);const b=l.useMemo(()=>{const{zoom:K,center:ne}=A,X=t?.baseViewSize??4;let Q,U;return N>=1?(U=X/K,Q=U*N):(Q=X/K,U=Q/N),{...t,zoom:K,center:ne,...I,worldWidth:Q,worldHeight:U,aspect:N}},[A,N,I,t]);l.useEffect(()=>{const K={linear:ce=>ce,easeInOutQuad:ce=>ce<.5?2*ce*ce:1-Math.pow(-2*ce+2,2)/2},ne=t?.overrideView;if(!ne)return;const X=t?.duration??500,Q=t?.easing??"linear",U=K[Q]||K.linear,J=A.zoom,te=ne.zoom,se=A.center,le=ne.center,he=Math.log(J),ye=Math.log(te);let $e=null;const ve=ce=>{$e===null&&($e=ce);const qe=ce-$e,me=X>0?Math.min(qe/X,1):1,Ce=U(me),Ue=se[0]+(le[0]-se[0])*Ce,st=se[1]+(le[1]-se[1])*Ce,Pt=he+(ye-he)*Ce,Lt=Math.exp(Pt);O({zoom:Lt,center:[Ue,st]}),me<1&&(y.current=requestAnimationFrame(ve))};return y.current=requestAnimationFrame(ve),()=>{y.current&&cancelAnimationFrame(y.current)}},[t?.overrideView,t?.duration,t?.easing]),l.useEffect(()=>{i&&i(b)},[b,i]);const f=l.useCallback(()=>{L.current&&clearTimeout(L.current),L.current=window.setTimeout(()=>{o?.("infobox",!1),H(0),L.current=null},z)},[z,o]),g=l.useCallback(()=>{j.current&&clearTimeout(j.current),F.current&&clearTimeout(F.current),j.current=window.setTimeout(()=>{o?.("markers",!1),D(0),j.current=null},v),F.current=window.setTimeout(()=>{x(null),F.current=null},v+Rn)},[v,o]),M=l.useCallback(K=>{const ne=c.length>0||(a?.displayPoints?.length??0)>0;n&&(L.current&&clearTimeout(L.current),o?.("infobox",!0),H(1),f()),(ne||d)&&(j.current&&clearTimeout(j.current),F.current&&clearTimeout(F.current),K.coords&&w(K.coords),o?.("markers",!0),D(1),q?.method==="click"&&K.activePoint.method==="hover"||(K.activePoint.type?x(K.activePoint):x(null)),g())},[n,c.length,a,d,q,x,f,g,o]),u=l.useCallback(K=>{f(),g(),h&&h(K)},[h,g,f]),{controlHandlers:m,pointToChange:$}=In({view:b,setZoomAndCenter:O,onShowInfo:M,controlPoints:c,onControlPointsChange:W>0?u:void 0,controlPointParams:a,onControlEvent:C}),{style:T,...G}=m,Y=l.useMemo(()=>{const K=b.worldWidth!==0?b.worldWidth/b.pixelWidth:1,ne=b.worldHeight!==0?b.worldHeight/b.pixelHeight:1;return{...T,"--screen-to-world-x":String(K),"--screen-to-world-y":String(ne)}},[T,b.pixelWidth,b.worldWidth,b.pixelHeight,b.worldHeight]),[ee,V]=l.useMemo(()=>{const K=[b.center[0]-b.worldWidth/2,b.center[0]+b.worldWidth/2],ne=[b.center[1]-b.worldHeight/2,b.center[1]+b.worldHeight/2];return[K,ne]},[b.center,b.worldWidth,b.worldHeight]);l.useEffect(()=>()=>{j.current&&clearTimeout(j.current),L.current&&clearTimeout(L.current),F.current&&clearTimeout(F.current)},[]);const oe=l.useCallback(K=>{if(!B.current)return null;const{width:ne,height:X}=B.current.getBoundingClientRect(),[Q,U]=ee,[J,te]=V,se=(K[0]-Q)/b.worldWidth*ne,le=(te-K[1])/b.worldHeight*X;return[se,le]},[ee,V,b.worldWidth,b.worldHeight]),be=l.useMemo(()=>{if(!d)return null;let K=!1;if(B.current){const{pixelWidth:ne,pixelHeight:X,worldWidth:Q,worldHeight:U}=b,J=ne/Q,te=X/U;(J<vt||te<vt)&&(K=!0)}return e.jsx("div",{className:"absolute inset-0 pointer-events-none z-1",style:{transition:"opacity 0.5s ease-out",opacity:W},children:e.jsx(Ln,{xRange:ee,yRange:V,theme:k,worldToScreen:oe,center:b.center,gridTooDense:K})})},[d,W,ee,V,k,oe,b]),we=l.useMemo(()=>{const K=U=>{const J=P?.[U];return J!==void 0?J:"default-overlay-marker-"+U},ne=c.map((U,J)=>{const{pos:te}=Re(U,b.center,ee,V),se=oe(te);if(!se)return null;const le=q?.type==="control"&&q.index===J,ye=a?.controlPoints?.[J]?.className??K(le?"control-active":"control-normal");return ye?e.jsx("div",{"data-testid":"control-marker",className:Z(ye,"absolute"),style:{left:se[0],top:se[1],transform:"translate(-50%, -50%)"}},`control-${J}`):null}),X=(a?.displayPoints??[]).map((U,J)=>{if(!U.position)return null;const{pos:te}=Re(U.position,b.center,ee,V),se=oe(te);if(!se)return null;const le=q?.type==="display"&&q.index===J,he=U.className??K(le?"display-active":"display-normal");return he?e.jsx("div",{"data-testid":"display-marker",className:Z(he,"absolute"),style:{left:se[0],top:se[1],transform:"translate(-50%, -50%)"}},`display-${J}`):null});let Q=null;if($){const{pos:U}=Re($.mode!=="delete"?$.coords:c[$.index],b.center,ee,V),J=oe(U);if(J){const te=K($.mode+"-control");te&&(Q=e.jsx("div",{className:Z(te,"absolute"),"data-testid":"point-to-change-marker",style:{left:J[0],top:J[1],transform:"translate(-50%, -50%)"}}))}}return ne.every(U=>U===null)&&X.every(U=>U===null)&&!Q?null:e.jsxs("div",{"data-testid":"markers-overlay",className:"absolute inset-0 z-2",style:{transition:"opacity 0.5s ease-out",opacity:W},children:[ne,X,Q]})},[c,b.center,ee,V,oe,a,W,$,q,P]),ie=l.useMemo(()=>!_||!n?null:n(_,b,q?.key,q?.method)||null,[_,n,b,q]),ue=l.useMemo(()=>!ie||ie.length===0||I.pixelWidth===0||I.pixelHeight===0?null:e.jsx(Hn,{info:ie,theme:k,infoBoxOpacity:S,showInfoOverlay:p,mouseCoords:_,activePoint:q??void 0,controlPoints:c,controlPointParams:a,worldToScreen:oe,size:I}),[ie,k,S,p,_,q,c,a,oe,I]);return e.jsxs("div",{ref:B,className:Z("w-full h-full relative",r,k==="dark"?"theme-dark":"theme-light"),style:Y,...G,children:[e.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden",children:s(b,q)}),be,we,ue]})},Bn=({placeholderId:s,style:t={display:"block"}})=>(l.useEffect(()=>(ezstandalone.cmd.push(function(){ezstandalone.showAds(s)}),()=>{ezstandalone.cmd.push(function(){ezstandalone.destroyPlaceholders(s)})})),e.jsx("div",{id:`ezoic-pub-ad-placeholder-${s}`,style:t})),Wn=({client:s,slot:t,style:n={display:"block"},format:o="auto",responsive:i="true"})=>(l.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(r){console.error("AdSense error:",r)}},[]),e.jsx("ins",{className:"adsbygoogle",style:n,"data-ad-client":s,"data-ad-slot":t,"data-ad-format":o,"data-full-width-responsive":i})),qn=[{title:"Fantastic Fractals",items:[{text:"[Web]",href:"https://driota.xyz/fractal/"},{text:"[Windows x64 MSI]",href:"https://github.com/dr4iota/public/releases/download/fractal-0.2.0/IoticFractal_0.2.0_x64_en-US.msi"},{text:"[Android APK]",href:"https://github.com/dr4iota/public/releases/download/fractal-0.2.0/iotic-fractal-0.2.0.apk"},{text:"[Kindle Fire]",href:"https://www.amazon.com/Doctor-Iota-Fantastic-Fractals/dp/B0FNGZB5TN"}]},{title:"Triangular Geometry",items:[{text:"[Web]",href:"https://driota.xyz/trikona/"},{text:"[Windows x64 MSI]",href:"https://github.com/dr4iota/public/releases/download/trikona-0.2.0-beta/IoticFractal_0.2.0-beta_x64_en-US.msi"},{text:"[Android APK]",href:"https://github.com/dr4iota/public/releases/download/trikona-0.2.0-beta/iotic-trikona-0.2.0-beta.apk"}]},{title:"Support Us",items:[{text:"Buy Me a Coffee",href:"https://www.buymeacoffee.com/driota"},{text:"Patreon",href:"https://www.patreon.com/driota"},{text:"Contact me <dr.4.iota at gmail>",href:"https://driota.xyz"}]}],Un={sections:qn},Gn=({onSide:s,dataUrl:t})=>{const[n,o]=l.useState(Un);if(l.useEffect(()=>{t&&!bn()&&fetch(t).then(r=>r.json()).then(r=>o(r)).catch(r=>console.error("Failed to load ads from URL",r))},[t]),!n)return null;const i=(s?"p-4 flex flex-col space-y-4 h-full":"p-2 flex flex-row space-x-4 justify-around w-full")+" bg-blue-50 dark:bg-blue-950";return e.jsx("div",{className:i,children:n.sections.map((r,c)=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"font-bold text-sm mb-2 text-gray-700 dark:text-gray-300",children:r.title}),e.jsx("div",{className:s?"flex flex-col space-y-1":"flex flex-row flex-wrap gap-2",children:r.items.map((h,a)=>e.jsxs("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-blue-600 hover:underline dark:text-blue-400 flex items-center space-x-1",onClick:We()?p=>{p.preventDefault(),Zt(h.href).then(()=>console.log("[Open URL]:",h.href)).catch(d=>{console.error(`Failed to open URL ${h.href}`,d)})}:void 0,children:[h.icon,h.text&&e.jsx("span",{children:h.text})]},a))})]},c))})},It=({isOpen:s,onClose:t,title:n,children:o,size:i="lg"})=>{const{theme:r}=fe(),c=h=>{switch(h){case"sm":return"w-80 max-w-sm max-h-60";case"md":return"w-10/12 max-w-2xl max-h-[70vh]";case"lg":return"w-11/12 max-w-4xl max-h-[80vh]";case"xl":return"w-full max-w-6xl max-h-[90vh]";default:return"w-11/12 max-w-4xl max-h-[80vh]"}};return e.jsx($t,{appear:!0,show:s,as:l.Fragment,children:e.jsxs(Kt,{as:"div",className:Z("relative z-50",r),onClose:t,children:[e.jsx(dt,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-0 text-center",children:e.jsx(dt,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(Qt,{className:Z(c(i),"transform rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col border border-gray-200 dark:border-gray-600 overflow-hidden"),children:[e.jsx(en,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:n}),e.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",children:e.jsx(Ct,{className:"h-6 w-6 text-gray-900 dark:text-gray-100"})}),e.jsx("div",{className:"mt-4 flex-1 text-gray-900 dark:text-gray-100 overflow-y-auto -mr-6 pr-6",children:o})]})})})})]})})},Vn=200,Xn=.2,Yn=yn(),Jn=s=>{const{children:t,adsConfig:n,appInfo:o,appTopic:i,helpTopics:r,helpMenuConfig:c,...h}=s,{theme:a}=fe(),[p,d]=l.useState(null),z=l.useMemo(()=>(L,B)=>{const q=o?.title??o?.name??"Untitled",x={usage:e.jsx(nn,{}),essay:e.jsx(Ke,{}),about:e.jsx(tn,{})},y={usage:"How to Explore Interactively",essay:"A Short History of "+(i||q),about:"About "+q},v={about:`

---

### ${q} ${o?.version??"0.0.0"}


${o?.description??""}
${o?.keywords?"**Keywords**: *"+o.keywords+"*":""}

**Build**: ${o?.buildTime??""}
(${o?.commitHash}@${o?.commitTime??""})
${o?.localDiff?"["+o?.localDiff+"]":""}

**Platform**: ${window.navigator?.userAgent}
(${tt()?"mobile":"desktop"} ${We()?"app":"browser"})
`};return typeof B=="string"?{title:y[L]||L.charAt(0).toUpperCase()+L.slice(1),icon:x[L]||e.jsx(ut,{}),content:B+(v[L]||"")}:{icon:x[L]||e.jsx(ut,{}),...B,content:B.content+(v[L]||"")}},[o,i]),P=l.useCallback(L=>{if(L&&r){const B=r[L];B!=null&&typeof B!="number"&&d(z(L,B))}c?.onChange?.(L)},[z,c,r]),C=l.useMemo(()=>{if(!r)return;const L=c?.options?[...c.options]:[];L.push(0);for(const B in r){const q=r[B];if(q===null||typeof q=="number"){L.push(q);continue}if(!q)continue;const x=z(B,q);L.push({label:x.title,value:B,icon:x.icon})}return{options:L,onChange:P}},[r,c,P,z]),k=()=>d(null),[A,O]=l.useState(typeof window<"u"?window.innerWidth:0),[N,E]=l.useState(typeof window<"u"?window.visualViewport?.height??window.innerHeight:0),[I,R]=l.useState(!1);l.useEffect(()=>{const L=()=>{const x=(window.visualViewport?.height??window.innerHeight)*.01;document.documentElement.style.setProperty("--vh",`${x}px`)},B=()=>{const x=window.innerWidth,y=window.visualViewport?.height??window.innerHeight;O(x),E(y),x<768&&y>x?R(!1):x>=1024&&x>y&&R(!0),L()};B();const q=window.visualViewport??window;return q.addEventListener("resize",B),()=>{q.removeEventListener("resize",B)}},[]);const _=e.jsx(It,{isOpen:p!==null,onClose:k,title:p?.title||"",size:"xl",children:e.jsx("div",{className:Z("prose dark:prose-invert max-w-none",a==="dark"?"dark":""),children:p&&e.jsx(on,{remarkPlugins:[rn,an],rehypePlugins:[sn],children:p.content})})}),w=!!n,W=w?n?.width??Vn:0,D=I?A-W:A,j=e.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden",style:Yn?{paddingTop:32,paddingBottom:12}:void 0,children:[e.jsx(Sn,{...h,headerWidth:D,helpMenuConfig:C}),e.jsx("main",{className:"flex-grow min-h-0 p-0",children:t})]});if(!w)return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:`${A}px`,height:`${N}px`},children:j}),_]});let F;const S={},H={width:`${D}px`};if(I)S.width=`${W}px`,S.height=H.height=`${N}px`;else if(S.width=H.width=`${A}px`,n?.height)S.height=`${n.height}px`,H.height=`${N-n.height}px`;else{const L=N*Xn;S.maxHeight=`${L}px`,H.minHeight=`${N-L}px`,F="flex-1 h-full"}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-stretch flex-"+(I?"row":"col"),style:{width:`${A}px`,height:`${N}px`},children:[e.jsx("div",{style:H,className:F,children:j}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800",style:S,children:[n?.sense&&e.jsx(Wn,{client:n.sense.client,slot:n.sense.slot}),n?.ezoic&&e.jsx(Bn,{placeholderId:I?n.ezoic.rightPhId:n.ezoic.bottomPhId}),n?.local&&e.jsx(Gn,{onSide:I,dataUrl:n.local.dataUrl})]})]}),_]})},ae=({label:s,min:t,max:n,value:o,onChange:i,theme:r,precision:c=0,valueLabel:h,posToVal:a=d=>t+(n-t)*d,valToPos:p=d=>(d-t)/(n-t)})=>{const d=l.useRef(null),z=h??(I=>I.toFixed(c)),P=l.useCallback(I=>{if(d.current){const R=d.current.getBoundingClientRect(),_=Math.max(0,Math.min(1,(I-R.left)/R.width)),w=a(_),W=Math.pow(10,c),D=Math.round(w*W)/W;i(D)}},[i,a,c]),C=I=>{I.preventDefault(),P(I.clientX);const R=w=>{P(w.clientX)},_=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",_)},k=I=>{I.preventDefault(),I.touches.length>0&&P(I.touches[0].clientX);const R=w=>{w.touches.length>0&&P(w.touches[0].clientX)},_=()=>{document.removeEventListener("touchmove",R),document.removeEventListener("touchend",_)};document.addEventListener("touchmove",R),document.addEventListener("touchend",_)},A=p(o),O=r==="dark"?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(255, 255, 255, 0.2)",N=A>.5,E=A>.25&&A<.5||A>.75;return e.jsx("div",{className:"w-full px-3",children:e.jsxs("div",{ref:d,onMouseDown:C,onTouchStart:k,className:"relative w-full h-6 cursor-pointer",style:{touchAction:"none"},children:[e.jsx("div",{className:Z("w-full h-full rounded-full",r==="dark"?"bg-gray-700":"bg-gray-300")}),e.jsx("div",{className:Z("absolute top-0 left-0 h-full rounded-full",r==="dark"?"bg-indigo-500":"bg-indigo-600"),style:{width:`${A*100}%`}}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[s&&e.jsx("span",{className:Z("absolute top-1/2 -translate-y-1/2 text-xs font-medium",r==="dark"?"text-gray-200":N?"text-white":"text-gray-800"),style:{...N?{left:"10px"}:{right:"10px"},textShadow:N?O:"none"},children:s}),e.jsx("span",{className:Z("absolute top-1/2 -translate-y-1/2 text-xs font-mono",r==="dark"?"text-gray-200":E?"text-white":"text-gray-800"),style:{...E?{right:`calc(${100-A*100}% + 14px)`}:{left:`calc(${A*100}% + 14px)`},textShadow:E?O:"none"},children:z(o)})]}),e.jsx("div",{className:Z("absolute top-0 w-6 h-6 rounded-full shadow-md z-10",r==="dark"?"bg-sky-400":"bg-sky-500"),style:{left:`calc(${A*100}% - 12px)`}})]})})},Zn=({children:s,gl:t,frameloop:n="always",showGridOverlay:o,...i})=>{const[r,c]=l.useState(!1);return e.jsx(Dn,{...i,showGridOverlay:o,children:h=>e.jsxs(e.Fragment,{children:[e.jsx(ln,{frameloop:n,gl:t,onCreated:({gl:a})=>{a.domElement.addEventListener("webglcontextlost",p=>{p.preventDefault(),c(!0)},!1)},children:s(h)}),r&&e.jsxs("div",{className:"absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-9",children:[e.jsx("p",{className:"text-white text-2xl mb-4",children:"Graphics context lost"}),e.jsx("p",{className:"text-white text-lg mb-8",children:"This can happen on mobile devices. Please reload."}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Reload"})]})]})})};function Kn(s){return"min"in s&&"max"in s}class At{getMath(){return this.math}getControlPointMinMax(){return[void 0,void 0]}}class Me extends At{constructor(t,n,o,i,r,c,h){super(),this.name=t,this.title=n,this.description=o,this.math=i,this.shader=r,this.iconUrl=h;let a,p,d;typeof c=="number"?(d=c,a=1,p=2e3):(d=c.initial,a=c.min,p=c.max);const z=C=>{const k=Math.log(a),A=Math.log(p);return Math.exp(k+(A-k)*C)},P=C=>{if(C<=a)return 0;if(C>=p)return 1;const k=Math.log(a),A=Math.log(p);return(Math.log(C)-k)/(A-k)};this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:d,min:a,max:p,posToVal:z,valToPos:P}}getGuiParameters(){return[this.iterations]}getShaderCode(){return this.shader}getIcon(){return this.iconUrl}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getControlPointUniforms(t){}getInitialControlPoints(){return[]}getCanvasOverlayString(t,n){}getControlPointValues(t){}getControlPointGroups(t){return[]}}class nt extends Me{constructor(t,n,o,i,r,c,h,a){super(t,n,o,i,r,c,a),this.controlPointInfo=h}getInitialControlPoints(){return[this.controlPointInfo.initialValue]}getCanvasOverlayString(t,n){if(t.length>0)return`${this.controlPointInfo.name} = ${De(...t[0])}`}getControlPointValues(t){if(t.length>0)return[{label:this.controlPointInfo.name,value:De(...t[0])}]}getControlPointUniforms(t){if(t.length>0)return{[this.controlPointInfo.uniformName]:t[0]}}getControlPointGroups(t){return[0]}}const Qn=`The Newton fractal is generated by applying Newton's method, a numerical
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
`,to="/fractal/assets/newton-B60RDm46.png",Je=16;function no(s){const t=[];for(let n=0;n<s;n++){const o=2*Math.PI*n/s;t.push([Math.cos(o),Math.sin(o)])}return t}class oo extends At{constructor(){super(),this.name="newton",this.title="Newton",this.description="Newton's method for a polynomial defined by its roots.",this.math=Qn,this.iterations={name:"iterations",displayName:"Iterations",type:"int",defaultValue:50,min:1,max:200}}getInitialControlPoints(){return no(5)}getInitialGuiParameters(){return{iterations:this.iterations.defaultValue}}getGuiParameters(){return[this.iterations]}getShaderCode(){return eo}getIcon(){return to}getCanvasOverlayString(t,n){return`p = ${t.length}`}getControlPointValues(t){return t.map((n,o)=>({label:`Root ${o+1}`,value:De(...n)}))}getControlPointUniforms(t){if(t.length>0&&t.length<=Je){const n=t.flat(),o=new Array(Je*2).fill(0);return n.forEach((i,r)=>o[r]=i),{num_roots:t.length,roots:o}}}getControlPointGroups(t){return Array(t.length).fill(0)}getControlPointMinMax(){return[2,Je]}}const so="/fractal/assets/mandelbrot-DLtBXckj.png",ro=`### Mandelbrot set

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
`,ko=`uniform int iterations;

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
`,jo=new Me("nova","Nova","z_n+1 = z - (z^3 - 1)/(3z^2) + p",To,ko,80),So=`The Burning Ship fractal is a variation of the Mandelbrot set. The iteration
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
`,zo=new Me("burningShip","Burning Ship","z_n+1 = (|Re(z)| + i|Im(z)|)^2 + p",So,Mo,200);class ot{}class Se extends ot{constructor(t){super();const{pacing:n,color0:o,color1:i}=t;this.alpha=n,this.b=o,this.a=[i[0]-o[0],i[1]-o[1],i[2]-o[2]]}evaluate(t){const n=this.a[0]*Math.pow(t,this.alpha[0])+this.b[0],o=this.a[1]*Math.pow(t,this.alpha[1])+this.b[1],i=this.a[2]*Math.pow(t,this.alpha[2])+this.b[2];return[n,o,i]}toGlslFragment(t="colorPalette"){const n=p=>p.toPrecision(4),o=(p,d)=>p===1?d:p===0?"1.0":p===-1?`(1.0 / ${d})`:`pow(${d}, ${n(p)})`,r=`${n(this.a[0])} * ${o(this.alpha[0],"t")} + ${n(this.b[0])}`,c=`${n(this.a[1])} * ${o(this.alpha[1],"t")} + ${n(this.b[1])}`,h=`${n(this.a[2])} * ${o(this.alpha[2],"t")} + ${n(this.b[2])}`,a=`    return vec3(${r}, ${c}, ${h});`;return`vec3 ${t}(float t) {
${a}
}`}}class je extends ot{constructor(t){super();const{pacing:n,frequency:o,color1:i,color2:r,phase:c}=t;this.alpha=n,this.nu=o,this.phase=c,this.base=[(i[0]+r[0])/2,(i[1]+r[1])/2,(i[2]+r[2])/2],this.scale=[(r[0]-i[0])/2,(r[1]-i[1])/2,(r[2]-i[2])/2]}evaluate(t){const n=Math.pow(t,this.alpha),o=this.base[0]+this.scale[0]*Math.cos(2*Math.PI*(this.nu[0]*n+this.phase[0])),i=this.base[1]+this.scale[1]*Math.cos(2*Math.PI*(this.nu[1]*n+this.phase[1])),r=this.base[2]+this.scale[2]*Math.cos(2*Math.PI*(this.nu[2]*n+this.phase[2]));return[o,i,r]}toGlslFragment(t="colorPalette"){const n=a=>`vec3(${a.map(p=>p.toPrecision(4)).join(", ")})`,o=a=>a.toPrecision(4),i=(a,p)=>a===1?p:a===0?"1.0":a===-1?`(1.0 / ${p})`:`pow(${p}, ${o(a)})`,c=[];c.push(`    vec3 base = ${n(this.base)};`),c.push(`    vec3 scale = ${n(this.scale)};`),c.push(`    vec3 nu = ${n(this.nu)};`),c.push(`    vec3 phase = ${n(this.phase)};`);const h=i(this.alpha,"t");return c.push(`    return base + scale * cos(6.28318 * (nu * ${h} + phase));`),`vec3 ${t}(float t) {
${c.join(`
`)}
}`}}class Nt extends ot{constructor(t){super(),this.alpha=t.pacing??1,this.beta=t.damping??0,this.nu=t.frequency??1,this.c0=t.color0,this.c1=t.color1,this.c2=t.color2,this.c_odot=[(this.c0[0]+this.c2[0])/2,(this.c0[1]+this.c2[1])/2,(this.c0[2]+this.c2[2])/2];const n=[this.c0[0]-this.c_odot[0],this.c0[1]-this.c_odot[1],this.c0[2]-this.c_odot[2]],o=[this.c1[0]-this.c_odot[0],this.c1[1]-this.c_odot[1],this.c1[2]-this.c_odot[2]],i=n[0]*o[0]+n[1]*o[1]+n[2]*o[2],r=n[0]**2+n[1]**2+n[2]**2,c=o[0]**2+o[1]**2+o[2]**2,h=.5*Math.atan2(2*i,c-r);this.phi=h/(2*Math.PI);const a=Math.cos(h),p=Math.sin(h);this.A=[n[0]*a-o[0]*p,n[1]*a-o[1]*p,n[2]*a-o[2]*p],this.B=[n[0]*p+o[0]*a,n[1]*p+o[1]*a,n[2]*p+o[2]*a]}f(t){return Math.pow(t,this.alpha)}evaluate(t){const n=this.f(t),o=2*Math.PI*(this.nu*n+this.phi),i=Math.cos(o),r=Math.sin(o),c=Math.exp(-this.beta*n),h=this.c_odot[0]+c*(this.A[0]*i+this.B[0]*r),a=this.c_odot[1]+c*(this.A[1]*i+this.B[1]*r),p=this.c_odot[2]+c*(this.A[2]*i+this.B[2]*r);return[h,a,p]}toGlslFragment(t="colorPalette"){const n=h=>`vec3(${h.map(a=>a.toPrecision(4)).join(", ")})`,o=h=>h.toPrecision(4),i=(h,a)=>h===1?a:h===0?"1.0":h===-1?`(1.0 / ${a})`:`pow(${a}, ${o(h)})`,c=[];return c.push(`    vec3 c_odot = ${n(this.c_odot)};`),c.push(`    vec3 A = ${n(this.A)};`),c.push(`    vec3 B = ${n(this.B)};`),c.push(`    float ft = ${i(this.alpha,"t")};`),c.push(`    float damp = exp(-${o(this.beta)} * ft);`),c.push(`    float angle = 6.28318 * (${o(this.nu)} * ft + ${o(this.phi)});`),c.push("    return c_odot + damp * (A * cos(angle) + B * sin(angle));"),`vec3 ${t}(float t) {
${c.join(`
`)}
}`}}const Qe={cosmic:new je({pacing:1,frequency:[1,1,1],color1:[0,0,0],color2:[1,1,1],phase:[.33,.67,0]}),cosmic_old:new je({pacing:1,frequency:[1,1,1],color1:[0,0,0],color2:[1,1,1],phase:[0,.33,.67]}),nebula:new je({pacing:1,frequency:[.9,.9,.9],color1:[.6,.5,.4],color2:[1,1.1,1.2],phase:[.1,.2,.3]}),grayscale:new Se({pacing:[1,1,1],color0:[0,0,0],color1:[1,1,1]}),monochrome:new Se({pacing:[1,2,3],color0:[0,0,0],color1:[1,1,1]})},wt=Object.fromEntries(Object.keys(Qe).map(s=>[s,s.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")])),Fe="cosmic",ge=s=>{const t=Oe(s);return t?[t.r/255,t.g/255,t.b/255]:[0,0,0]},Et="fractal-custom-color-schemes",Rt=4;function Be(){try{const s=localStorage.getItem(Et);if(s){const t=JSON.parse(s);if(Array.isArray(t))return t}}catch(s){console.error("Error reading custom color schemes from localStorage:",s)}return[]}function Io(s,t,n){const o=Be(),i={name:s,type:t,params:n},r=o.findIndex(c=>c.name===s);r!==-1?o[r]=i:(o.push(i),o.length>Rt&&o.shift());try{localStorage.setItem(Et,JSON.stringify(o))}catch(c){console.error("Error saving custom color schemes to localStorage:",c)}return o}function Ao(s){switch(s.type){case"Linear":{const t=s.params;return new Se({pacing:t.pacing,color0:ge(t.colors[0]),color1:ge(t.colors[1])})}case"Cosine":{const t=s.params;return new je({pacing:t.pacing,frequency:t.frequency,phase:t.phase,color1:ge(t.colors[0]),color2:ge(t.colors[1])})}case"Elliptic":{const t=s.params;return new Nt({pacing:t.pacing,damping:t.damping,frequency:t.frequency,color0:ge(t.colors[0]),color1:ge(t.colors[1]),color2:ge(t.colors[2])})}}}const No=[new oo,co,mo,bo,wo,_o,jo,zo],Eo=({className:s})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:s,children:[e.jsx("path",{d:"M12 2 A 10 10 0 0 1 20.66 7 L 12 12 Z",fill:"#ff0000"}),e.jsx("path",{d:"M20.66 7 A 10 10 0 0 1 20.66 17 L 12 12 Z",fill:"#c0c000"}),e.jsx("path",{d:"M20.66 17 A 10 10 0 0 1 12 22 L 12 12 Z",fill:"#00c000"}),e.jsx("path",{d:"M12 22 A 10 10 0 0 1 3.34 17 L 12 12 Z",fill:"#00c0c0"}),e.jsx("path",{d:"M3.34 17 A 10 10 0 0 1 3.34 7 L 12 12 Z",fill:"#0000ff"}),e.jsx("path",{d:"M3.34 7 A 10 10 0 0 1 12 2 L 12 12 Z",fill:"#ff00ff"})]}),Ro=({className:s})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 7.5l-5.25-5.25H5.25a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V7.5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 18.75h-6a.75.75 0 010-1.5h6a.75.75 0 010 1.5z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h4.5l3.75 3.75v2.25z"})]}),xe=s=>{const t=Oe(s);return t?[t.r/255,t.g/255,t.b/255]:[0,0,0]},Ft=384,Fo=Ft-24,Po=({onChange:s,onSave:t,isMinimized:n,onToggle:o,colorSchemePrefix:i="ColorScheme_"})=>{const{theme:r}=fe(),[c,h]=l.useState("Linear"),[a,p]=l.useState(0),[d,z]=l.useState(!1),P=l.useRef(null);l.useEffect(()=>{const x=P.current;if(!x||n)return;const y=new ResizeObserver(v=>{v[0]&&p(v[0].contentRect.width)});return y.observe(x),()=>y.disconnect()},[n]),l.useEffect(()=>{d?a>0&&a<Fo&&z(!1):a>=Ft&&z(!0)},[a,d]);const[C,k]=l.useState(!1),[A,O]=l.useState(""),[N,E]=l.useState({pacing:[1,1,1],colors:["#ff0000","#00ff00"]}),[I,R]=l.useState({pacing:1,frequency:[1,1,1],phase:[0,.15,.2],colors:["#00ff00","#0000ff"]}),[_,w]=l.useState({pacing:1,damping:0,frequency:1,colors:["#ff0000","#00ff00","#0000ff"]});l.useEffect(()=>{let x;c==="Linear"?x=new Se({pacing:N.pacing,color0:xe(N.colors[0]),color1:xe(N.colors[1])}):c==="Cosine"?x=new je({pacing:I.pacing,frequency:I.frequency,phase:I.phase,color1:xe(I.colors[0]),color2:xe(I.colors[1])}):x=new Nt({pacing:_.pacing,damping:_.damping,frequency:_.frequency,color0:xe(_.colors[0]),color1:xe(_.colors[1]),color2:xe(_.colors[2])}),s(x)},[c,N,I,_,s]);const{colors:W,labels:D,onColorChange:j}=l.useMemo(()=>c==="Linear"?{colors:N.colors,labels:"01",onColorChange:x=>E(y=>({...y,colors:[x[0]??"#000000",x[1]??"#ffffff"]}))}:c==="Cosine"?{colors:I.colors,labels:"12",onColorChange:x=>R(y=>({...y,colors:[x[0]??"#000000",x[1]??"#ffffff"]}))}:{colors:_.colors,labels:"012",onColorChange:x=>w(y=>({...y,colors:[x[0]??"#000000",x[1]??"#ffffff",x[2]??"#ff0000"]}))},[c,N.colors,I.colors,_.colors]),F=x=>d?x.slice(0,1):a===0?x:a<240?x.charAt(0):a<320?x.slice(0,3):x,S=()=>{const x=Be(),y=new Set(x.map(b=>b.name));let v="";for(let b=1;b<=Rt+1;b++){const f=`${i}${b}`;if(!y.has(f)){v=f;break}}O(v),k(!0)},H=()=>{if(!A.trim())return;Io(A,c,{Linear:N,Cosine:I,Elliptic:_}[c]),t(),k(!1),O("")};if(n)return e.jsx("button",{onClick:o,className:Z("p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",r==="dark"?"bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-gray-800":"bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-indigo-600 focus:ring-offset-white"),"aria-label":"Open color scheme configurator",children:e.jsx(Eo,{className:"w-6 h-6"})});const L=e.jsxs("div",{className:Z("flex justify-between items-center",!d&&"px-4 pt-4"),children:[e.jsx("div",{className:"flex gap-1 p-1 rounded-md",style:{backgroundColor:r==="dark"?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.05)"},children:["Linear","Cosine","Elliptic"].map(x=>e.jsx("button",{onClick:()=>h(x),className:Z("px-3 py-1 text-sm font-medium rounded",c===x?r==="dark"?"bg-indigo-500 text-white":"bg-indigo-600 text-white":r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),children:F(x)},x))}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:S,className:Z("p-1 rounded-full",r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),"aria-label":"Save color scheme",children:e.jsx(Ro,{className:"h-6 w-6"})}),e.jsx("button",{onClick:o,className:Z("p-1 rounded-full",r==="dark"?"hover:bg-gray-700":"hover:bg-gray-200"),"aria-label":"Close color scheme configurator",children:e.jsx(Ct,{className:"h-6 w-6"})})]})]}),B=e.jsxs("div",{className:"flex flex-col gap-4",children:[c==="Linear"&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Pacing R",min:0,max:4,value:N.pacing[0],onChange:x=>E(y=>({...y,pacing:[x,y.pacing[1],y.pacing[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Pacing G",min:0,max:4,value:N.pacing[1],onChange:x=>E(y=>({...y,pacing:[y.pacing[0],x,y.pacing[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Pacing B",min:0,max:4,value:N.pacing[2],onChange:x=>E(y=>({...y,pacing:[y.pacing[0],y.pacing[1],x]})),theme:r,precision:2})]}),c==="Cosine"&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Pacing",min:0,max:4,value:I.pacing,onChange:x=>R(y=>({...y,pacing:x})),theme:r,precision:2}),e.jsx(ae,{label:"Freq R",min:0,max:5,value:I.frequency[0],onChange:x=>R(y=>({...y,frequency:[x,y.frequency[1],y.frequency[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Freq G",min:0,max:5,value:I.frequency[1],onChange:x=>R(y=>({...y,frequency:[y.frequency[0],x,y.frequency[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Freq B",min:0,max:5,value:I.frequency[2],onChange:x=>R(y=>({...y,frequency:[y.frequency[0],y.frequency[1],x]})),theme:r,precision:2}),e.jsx(ae,{label:"Phase R",min:0,max:1,value:I.phase[0],onChange:x=>R(y=>({...y,phase:[x,y.phase[1],y.phase[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Phase G",min:0,max:1,value:I.phase[1],onChange:x=>R(y=>({...y,phase:[y.phase[0],x,y.phase[2]]})),theme:r,precision:2}),e.jsx(ae,{label:"Phase B",min:0,max:1,value:I.phase[2],onChange:x=>R(y=>({...y,phase:[y.phase[0],y.phase[1],x]})),theme:r,precision:2})]}),c==="Elliptic"&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Pacing",min:0,max:4,value:_.pacing,onChange:x=>w(y=>({...y,pacing:x})),theme:r,precision:2}),e.jsx(ae,{label:"Damping",min:0,max:5,value:_.damping,onChange:x=>w(y=>({...y,damping:x})),theme:r,precision:2}),e.jsx(ae,{label:"Frequency",min:0,max:5,value:_.frequency,onChange:x=>w(y=>({...y,frequency:x})),theme:r,precision:2})]})]}),q=e.jsx("div",{className:Z({"pt-3 px-4 pb-4":!d,"pt-3 px-2":d}),children:e.jsx(pn,{initialColors:W,onChange:j,labels:D,height:150})});return e.jsxs("div",{ref:P,className:Z("rounded-lg shadow-lg flex w-full",d?"flex-row gap-2 p-2":"flex-col gap-4",r==="dark"?"bg-gray-800 text-gray-200":"bg-white text-gray-800"),children:[d?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-1/2",children:B}),e.jsxs("div",{className:"flex w-1/2 flex-col gap-2",children:[L,q]})]}):e.jsxs(e.Fragment,{children:[L,B,q]}),e.jsx(It,{isOpen:C,onClose:()=>k(!1),size:"sm",title:"Save Color Scheme",children:e.jsxs("div",{className:"flex flex-col gap-4 p-1",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"schemeName",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Scheme Name"}),e.jsx("input",{type:"text",id:"schemeName",value:A,onChange:x=>O(x.target.value),className:"mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>k(!1),className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600",children:"Cancel"}),e.jsx("button",{type:"button",onClick:H,disabled:!A.trim(),className:"px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"Save"})]})]})})]})},Lo=`
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
`;function Ho(s,t,n){if(Array.isArray(n))if(n.length===2)s[t]={value:new Le(n[0],n[1])};else if(n.length===3)s[t]={value:new fn(n[0],n[1],n[2])};else if(n.length>=4&&n.length%2===0){const o=[];for(let i=0;i<n.length;i+=2)o.push(new Le(n[i],n[i+1]));s[t]={value:o}}else s[t]={value:n};else s[t]={value:n}}function Do(s,t,n){if(s.uniforms[t])if(Array.isArray(n))if(n.length===2)s.uniforms[t].value.fromArray(n);else if(n.length===3)s.uniforms[t].value.fromArray(n);else if(n.length>=4&&n.length%2===0){const o=[];for(let i=0;i<n.length;i+=2)o.push(new Le(n[i],n[i+1]));s.uniforms[t].value=o}else s.uniforms[t].value=n;else s.uniforms[t].value=n}const Bo=({fractal:s,center:t,worldWidth:n,worldHeight:o,parameters:i,controlPoints:r,colorSchemeGlsl:c})=>{const h=hn(d=>d.invalidate),a=l.useMemo(()=>{const d={FRACTAL_SHADER:s.getShaderCode(),EVALUATE_COLOR:c},z={center:{value:new Le(...t)},viewWidth:{value:n},viewHeight:{value:o}};s.getGuiParameters().forEach(C=>{z[C.name]={value:i[C.name]}});const P=s.getControlPointUniforms(r);if(P)for(const[C,k]of Object.entries(P))Ho(z,C,k);return new dn({uniforms:z,vertexShader:Lo,fragmentShader:Oo.replace(/%(\w+)%/g,(C,k)=>String(d[k]))})},[s,c]);l.useEffect(()=>{a.uniforms.center.value.fromArray(t),a.uniforms.viewWidth.value=n,a.uniforms.viewHeight.value=o,s.getGuiParameters().forEach(z=>{a.uniforms[z.name].value=i[z.name]});const d=s.getControlPointUniforms(r);if(d)for(const[z,P]of Object.entries(d))Do(a,z,P);h()},[a,t,n,o,i,r,h,s]);const p=l.useMemo(()=>{const d=new un;return d.setDrawRange(0,3),d},[]);return e.jsx("mesh",{material:a,geometry:p})},Wo=({fractal:s,colorScheme:t,activeCustomScheme:n,onCustomSchemeSave:o})=>{const{theme:i}=fe(),[r,c]=l.useState(s.getInitialGuiParameters()),[h,a]=l.useState(s.getInitialControlPoints()),[p,d]=l.useState(()=>new Se({pacing:[1,1,1],color0:[0,0,0],color1:[1,1,1]})),[z,P]=l.useState(!0);l.useEffect(()=>{c(s.getInitialGuiParameters()),a(s.getInitialControlPoints()),k(_=>_+1)},[s]),l.useEffect(()=>{P(t!=="custom")},[t]);const[C,k]=l.useState(0),A=s.getGuiParameters().map(_=>Kn(_)?e.jsx("div",{className:"min-w-[150px] flex-[2_1_0] my-1",children:e.jsx(ae,{label:_.displayName,min:_.min,max:_.max,value:r[_.name],onChange:w=>c(W=>({...W,[_.name]:w})),theme:i,posToVal:_.posToVal,valToPos:_.valToPos})},_.name):null),O=s.getControlPointValues(h),[N,E]=s.getControlPointMinMax(),I=l.useMemo(()=>t==="custom"?p.toGlslFragment():n?n.toGlslFragment():Qe[t]?.toGlslFragment()??Qe[Fe].toGlslFragment(),[t,p,n]),R=l.useMemo(()=>{const _=s.getInitialControlPoints(),w=s.getControlPointGroups(_);return _.map((W,D)=>({position:W,group:w[D],key:D}))},[s]);return e.jsxs("div",{className:Z("w-full h-full flex flex-col landscape:flex-row overflow-hidden",i==="dark"?"bg-gray-900 text-white":"bg-gray-100 text-black"),children:[e.jsxs("div",{className:"flex-shrink-0 p-2 landscape:p-4 landscape:w-64 lg:w-72 overflow-y-auto overflow-x-hidden",children:[e.jsx("h2",{className:"hidden landscape:block text-lg font-bold w-full mb-2",children:"Controls"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A,t==="custom"&&e.jsx("div",{className:Z(!z&&"w-full my-2"),children:e.jsx(Po,{onChange:d,onSave:o,isMinimized:z,onToggle:()=>P(_=>!_)})}),O&&O.length>0&&e.jsx("div",{className:"w-full gap-0 py-2 rounded-md hidden landscape:flex landscape:flex-col",style:{backgroundColor:i==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"},title:"Drag the control point on the canvas to change. Double-click to reset.",children:O.map(_=>e.jsxs("div",{className:"w-full flex flex-wrap justify-between items-baseline gap-x-1",children:[e.jsx("p",{className:Z("text-sm font-medium",i==="dark"?"text-gray-300":"text-gray-700"),children:_.label}),e.jsx("p",{className:Z("text-base font-mono",i==="dark"?"text-gray-200":"text-gray-800"),children:_.value})]},_.label))})]})]}),e.jsx("div",{className:"flex-grow flex items-center justify-center pt-2.5 landscape:p-2 relative",style:{minWidth:0,minHeight:0},children:e.jsx(Zn,{viewParams:{baseViewSize:4},frameloop:"demand",onInfoOverlay:(_,w)=>{const W=["[",", ","]"],D=gt(w.center[0]-w.worldWidth/2,w.center[0]+w.worldWidth/2,7,W),j=gt(w.center[1]-w.worldHeight/2,w.center[1]+w.worldHeight/2,7,W),F=[{position:"NW",content:De(..._)},{position:"NE",content:`Re: ${D}
Im: ${j}`}],S=s.getCanvasOverlayString(h,r),H=s.title;return F.push({position:"SC",content:S?`${H} | ${S}`:H}),F},controlPoints:h,onControlPointsChange:a,controlPointParams:{controlPoints:R,min:N,max:E},gl:{powerPreference:"default",antialias:!1},children:(({center:_,worldWidth:w,worldHeight:W})=>e.jsx(Bo,{fractal:s,center:_,worldWidth:w,worldHeight:W,parameters:r,controlPoints:h,colorSchemeGlsl:I}))},C)})]})},qo=`This application allows you to explore the intricate beauty of various fractals.
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
`;var Xo={local:{dataUrl:"https://driota.xyz/local-ads.json"}},Yo={name:"fractal",title:"Fantastic Fractals",description:"Explore the beauty of fractals with this interactive generator. Create and explore Mandelbrot, Julia, Newton, and other fractal sets in real-time.",keywords:"fractal, fractals, fractal generator, interactive fractal, Mandelbrot set, Julia set, Newton's alogirthm, burning ship, complex numbers, mathematical art, mathematical games, puzzle games, visualization, mathematical recreation, problem solving",version:"0.2.0",buildTime:"2025-10-30T23:20:14.882Z",localDiff:1,commitHash:"35a53be6",commitTime:"2025-10-30T23:19:40.000Z"};const Te=No;function Jo(){const s=()=>e.jsxs(e.Fragment,{children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"grad-fractal-a",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),e.jsxs("linearGradient",{id:"grad-fractal-b",x1:"1",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#eed322"}),e.jsx("stop",{offset:"100%",stopColor:"#d4b606"})]})]}),e.jsx("rect",{x:"3",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-a)"}),e.jsx("rect",{x:"13",y:"3",width:"8",height:"8",rx:"2",fill:"url(#grad-fractal-b)"}),e.jsx("rect",{x:"3",y:"13",width:"8",height:"8",rx:"2",fill:"#34d399"}),e.jsx("rect",{x:"13",y:"13",width:"8",height:"8",rx:"2",fill:"#f472b6"})]}),t=l.useMemo(()=>e.jsx("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:e.jsx(s,{})}),[]),n=l.useMemo(()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsx(s,{}),e.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"white",fillOpacity:"0.5",stroke:"gray",strokeWidth:"0.5",strokeOpacity:"0.8"}),e.jsx("g",{transform:"translate(12, 12) scale(0.5)",opacity:"0.8",children:e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"black",transform:"translate(-12, -12)"})})]}),[]),o=l.useMemo(()=>e.jsxs("svg",{viewBox:"0 0 24 24",className:"h-full w-full","aria-hidden":!0,children:[e.jsx(s,{}),e.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"white",fillOpacity:"0.8",stroke:"gray",strokeWidth:"0.5",strokeOpacity:"0.8"}),e.jsx("g",{transform:"translate(12, 12) scale(0.5)",opacity:"0.8",children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"black",transform:"translate(-12, -12)"})})]}),[]),i=l.useCallback(()=>{const w=["newton","mandelbrot","julia"],W=Te.filter(D=>w.includes(D.name));return W.length>0?W[Math.floor(Math.random()*W.length)]:Te[0]},[]),r=l.useRef(null);r.current===null&&(r.current=i());const c=l.useCallback(()=>{const W=Ne().get("type");return Te.find(D=>D.name===W)||r.current},[r]),[h,a]=l.useState(c),[p,d]=l.useState(()=>Ne().get("colors")||Fe),[z,P]=l.useState([]),[C,k]=l.useState(null),A=l.useCallback(()=>{const w=Be();return P(w),w},[]);l.useEffect(()=>{A()},[A]);const O=l.useMemo(()=>({usage:`${qo}

${En("fractal view","complex parameter",!0,!0)}`,separator1:null,math:{title:`Math of ${h.title} Fractal`,icon:e.jsx(Ke,{}),content:`## ${h.title} Fractal

${h.math}`},colorscheme:{title:"Math of Color Schemes",icon:e.jsx(Ke,{}),content:Vo},separator2:null,essay:Go,about:Uo}),[h.title,h.math]);l.useEffect(()=>{const w=()=>{const W=Ne(),D=W.get("type"),j=W.get("colors"),F=Te.find(H=>H.name===D)||r.current;a(F);const S=j||Fe;if(d(S),S.startsWith("custom:")){const H=Be();P(H);const L=S.substring(7),B=H.find(q=>q.name===L);B?k(Ao(B)):gn({colors:Fe})}else k(null)};return window.addEventListener("hashchange",w),w(),()=>window.removeEventListener("hashchange",w)},[]);const N=l.useCallback((w,W)=>`#${new URLSearchParams({type:w,colors:W}).toString()}`,[]),E=Te.map(w=>({key:w.name,text:w.title,href:N(w.name,p),icon:w.getIcon()?e.jsx("img",{src:w.getIcon(),alt:"",className:"h-full w-full object-contain"}):void 0})),I=l.useMemo(()=>{const w=[...Object.entries(wt).map(([W,D])=>({text:D,href:N(h.name,W),icon:t}))];return z.length>0&&(w.push(null),z.forEach(W=>{const D=`custom:${W.name}`;w.push({text:W.name,href:N(h.name,D),icon:o})})),w.push(null),w.push({key:"custom",text:"Custom...",href:N(h.name,"custom"),icon:n}),w},[z,t,n,o,h.name,N]),R=l.useMemo(()=>{const w=[...Object.entries(wt).map(([D,j])=>({label:j,value:D}))];z.forEach(D=>{w.push({label:D.name,value:`custom:${D.name}`})});const W=w.find(D=>D.value===p);return W?W.label:"the making"},[p,z]),_=`Fantastic Fractals: ${h.title} in ${R}`;return e.jsx(e.Fragment,{children:e.jsx(Jn,{title:_,appIconUrl:"/images/app-icon.png",homeUrl:void 0,appInfo:Yo,appTopic:"Fractals",helpTopics:O,sideMenu:E,gearMenu:I,adsConfig:Xo,children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Wo,{fractal:h,colorScheme:p,activeCustomScheme:C,onCustomSchemeSave:A},h.name)})})})}function Zo(){return e.jsx(mn,{children:e.jsx(Tn,{children:e.jsx(Jo,{})})})}cn.createRoot(document.getElementById("root")).render(e.jsx(Pe.StrictMode,{children:e.jsx(Zo,{})}));
