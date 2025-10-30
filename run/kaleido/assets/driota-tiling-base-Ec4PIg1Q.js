const X={re:0,im:0},R={re:1,im:0},nt={re:0,im:1};function m(t,e=0){return{re:t,im:e}}function v(t,e){return{re:t.re+e.re,im:t.im+e.im}}function A(t,e){return{re:t.re-e.re,im:t.im-e.im}}function It(t){return{re:-t.re,im:-t.im}}function p(t,e){return{re:t.re*e,im:t.im*e}}function E(t,e){return{re:t.re*e.re-t.im*e.im,im:t.re*e.im+t.im*e.re}}function S(t){return{re:t.re,im:-t.im}}function g(t){return t.re*t.re+t.im*t.im}function kt(t){return Math.hypot(t.re,t.im)}function W(t){return Math.atan2(t.im,t.re)}function xt(t){const e=g(t);return{re:t.re/e,im:-t.im/e}}function T(t,e){return E(t,xt(e))}function _(t,e){return{re:t*Math.cos(e),im:t*Math.sin(e)}}function yt(t,e){const n=Math.cos(e),r=Math.sin(e);return{re:t.re*n-t.im*r,im:t.re*r+t.im*n}}function Nt(t){return{re:Math.log(kt(t)),im:W(t)}}function rt(t){const e=Math.sinh(t.re),n=Math.cosh(t.re),r=Math.sin(t.im),a=Math.cos(t.im);return T({re:e*a,im:n*r},{re:n*a,im:e*r})}function at(t){return p(Nt(T(v(R,t),A(R,t))),.5)}const j=2*Math.PI,F=(1+Math.sqrt(5))/2,Pt=.5,B=Math.sqrt(3)/2,ot=Math.SQRT1_2,gt=1e-12,ve={pmm:{name:"pmm",orbifold:"*2222",title:"Rectangular kaleidoscope",lattice:"rectangular",wedgeNormals:[{x:1,y:0},{x:0,y:1}],domain:[{x:0,y:0},{x:.5,y:0},{x:.5,y:.5*F},{x:0,y:.5*F}]},p4m:{name:"p4m",orbifold:"*442",title:"Square kaleidoscope",lattice:"square",wedgeNormals:[{x:0,y:1},{x:ot,y:-ot}],domain:[{x:0,y:0},{x:.5,y:0},{x:.5,y:.5}]},p6m:{name:"p6m",orbifold:"*632",title:"Hexagonal kaleidoscope",lattice:"triangular",wedgeNormals:[{x:0,y:1},{x:Pt,y:-B}],domain:[{x:0,y:0},{x:.5,y:0},{x:.5,y:.5/Math.sqrt(3)}]}};function Y(t,e){return t==="square"?[{x:e,y:0},{x:0,y:e}]:t==="rectangular"?[{x:e,y:0},{x:0,y:e*F}]:[{x:e,y:0},{x:e/2,y:e*B}]}function z(t,e=1){if(t==="triangular")return e/Math.sqrt(3);const[n,r]=Y(t,e);return Math.hypot(n.x+r.x,n.y+r.y)/2}function we(t,e){const n=z("triangular",e),r=Math.PI/3,a=Math.atan2(t.y,t.x),o=Math.floor((a%j+j)%j/r),i=r/2+o*r,s={x:t.x-n*Math.cos(i),y:t.y-n*Math.sin(i)};return o%2===0?s:{x:-s.x,y:-s.y}}function qt(t,e,n){if(t==="square")return{x:e.x/n,y:e.y/n};if(t==="rectangular")return{x:e.x/n,y:e.y/(n*F)};const r=e.y/(n*B);return{x:e.x/n-r/2,y:r}}function Ot(t,e,n){const[r,a]=Y(t,n),o=qt(t,e,n),i=Math.round(o.x),s=Math.round(o.y),c=gt*n*n;let h={i,j:s,origin:{x:0,y:0}},l=Number.POSITIVE_INFINITY;for(let u=-1;u<=1;u+=1)for(let f=-1;f<=1;f+=1){const x=i+u,w=s+f,b={x:x*r.x+w*a.x,y:x*r.y+w*a.y},D=(e.x-b.x)**2+(e.y-b.y)**2;D<l-c&&(l=D,h={i:x,j:w,origin:b})}return h}function Ee(t){return t!=="triangular"}function Ae(t,e,n=1){const r=Ot(t.lattice,e,n);let a=e.x-r.origin.x,o=e.y-r.origin.y;const i={x:a,y:o};let s=0;const c=-gt*n;for(let h=0;h<8;h+=1){let l=!1;for(const u of t.wedgeNormals){const f=a*u.x+o*u.y;f<c&&(a-=2*f*u.x,o-=2*f*u.y,s+=1,l=!0)}if(!l)break}return{point:{x:a,y:o},cellPoint:i,parity:s%2,reflections:s,cell:{i:r.i,j:r.j}}}function $t(t,e=1){return t.domain.map(n=>({x:n.x*e,y:n.y*e}))}function $(t,e){return t.n.x*e.x+t.n.y*e.y-t.c}function Ft(t,e,n){const r=e.x-t.x,a=e.y-t.y,o=Math.hypot(r,a);let i={x:-a/o,y:r/o},s=i.x*t.x+i.y*t.y;return i.x*n.x+i.y*n.y-s<0&&(i={x:-i.x,y:-i.y},s=-s),{n:i,c:s}}function vt(t,e){return t.x*e.x+t.y*e.y-t.t*e.t}function wt(t){const e=g(t),n=1/(1-e);return{x:2*t.re*n,y:2*t.im*n,t:(1+e)*n}}function C(t,e){return Math.asinh(vt(wt(e),t))}function st(t,e=!0){const n=e?1:-1;return{x:-n*Math.sin(t),y:n*Math.cos(t),t:0}}function Et(t,e){const n=2*Math.atanh(e),r=Math.cosh(n);return{x:-Math.cos(t)*r,y:-Math.sin(t)*r,t:-Math.sinh(n)}}function it(t,e){if(t.shape===e)return t;if(t.shape==="square"){const n=Math.max(t.u,t.v),r=Math.min(t.u,t.v);return{shape:"simplex",b:[1-n,n-r,r]}}return{shape:"square",u:t.b[1]+t.b[2],v:t.b[2]}}function At(t){const e=[Math.max(t[0],0),Math.max(t[1],0),Math.max(t[2],0)],n=e[0]+e[1]+e[2];return n>0?{shape:"simplex",b:[e[0]/n,e[1]/n,e[2]/n]}:{shape:"simplex",b:[1,0,0]}}const Ut={pmm:[2,2,2,2],p4m:[4,2,4],p6m:[6,2,3]};function Ht(t,e=1,n){const r=$t(t,e),a=Ut[t.name];if(r.length===4){const l=r[1].x,u=r[2].y;return{shape:"square",orders:a,corners:r,walls:[],scales:[],toChart:f=>({shape:"square",u:f.x/l,v:f.y/u}),fromChart:f=>{const x=it(f,"square");return{x:x.u*l,y:x.v*u}}}}const o=r.map((l,u)=>({corner:l,order:a[u],i:u})).sort((l,u)=>u.order-l.order||l.i-u.i),i=n===void 0?o.findIndex(l=>l.i===0):o.findIndex(l=>l.order===n);if(i<0)throw new Error(`${t.name} has no corner of order ${n} to centre a tile on`);const s=o.map(l=>l.corner),c=s.map((l,u)=>Ft(s[(u+1)%3],s[(u+2)%3],l)),h=c.map((l,u)=>$(l,s[u]));return{shape:"simplex",orders:o.map(l=>l.order),tileCorner:i,corners:s,walls:c,scales:h,toChart:l=>At([$(c[0],l)/h[0],$(c[1],l)/h[1],$(c[2],l)/h[2]]),fromChart:l=>{const u=it(l,"simplex");return{x:u.b[0]*s[0].x+u.b[1]*s[1].x+u.b[2]*s[2].x,y:u.b[0]*s[0].y+u.b[1]*s[1].y+u.b[2]*s[2].y}}}}function jt(t){const e=Math.PI/t.p,r=[{corner:X,order:t.p,wall:Et(e,t.edgeDepth)},{corner:m(t.vertexDepth,0),order:t.q,wall:st(e,!1)},{corner:_(t.edgeDepth,e),order:2,wall:st(0,!0)}].map((s,c)=>({...s,i:c})).sort((s,c)=>c.order-s.order||s.i-c.i),a=r.findIndex(s=>s.i===0),o=r.map(s=>s.wall),i=r.map(s=>C(s.wall,s.corner));return{shape:"simplex",orders:r.map(s=>s.order),faceCorner:a,corners:r.map(s=>s.corner),walls:o,scales:i,toChart:s=>At([C(o[0],s)/i[0],C(o[1],s)/i[1],C(o[2],s)/i[2]])}}function U(t){let e=1,n=Math.sqrt(Math.max(0,1-t*t));for(let r=0;r<60&&!(Math.abs(e-n)<=1e-17*e);r+=1){const a=(e+n)/2;n=Math.sqrt(e*n),e=a}return Math.PI/(2*e)}function V(t,e){const n=[1],r=[Math.sqrt(Math.max(0,1-e*e))],a=[e];let o=0;for(;Math.abs(a[o])>1e-16&&o<24;)n.push((n[o]+r[o])/2),r.push(Math.sqrt(n[o]*r[o])),a.push((n[o]-r[o])/2),o+=1;const i=new Array(o+1);i[o]=2**o*n[o]*t;for(let l=o;l>0;l-=1){const u=a[l]/n[l]*Math.sin(i[l]);i[l-1]=(Math.asin(Math.min(1,Math.max(-1,u)))+i[l])/2}const s=Math.sin(i[0]),c=Math.cos(i[0]),h=Math.sqrt(Math.max(0,1-e*e*s*s));return{sn:s,cn:c,dn:h}}function _t(t,e){const n=Math.sqrt(Math.max(0,1-e*e)),{sn:r,cn:a,dn:o}=V(t.re,e),{sn:i,cn:s,dn:c}=V(t.im,n),h=s*s+e*e*r*r*i*i;return{sn:m(r*c/h,a*o*i*s/h),cn:m(a*s/h,-r*o*i*c/h),dn:m(o*s*c/h,-e*e*r*a*i/h)}}function Gt(t,e){return _t(t,e).sn}const Qt=(Math.SQRT2-1)**2,Wt=.4,zt=2.6;function Vt(t){let e=1e-12,n=1-1e-12;for(let r=0;r<200;r+=1){const a=(e+n)/2;if(U(Math.sqrt(Math.max(0,1-a*a)))/U(a)>t?e=a:n=a,n-e<1e-15)break}return(e+n)/2}function Tt(t){const e=Math.min(zt,Math.max(Wt,t)),n=e===1?Qt:Vt(2/e),r=Math.sqrt(Math.max(0,1-n*n)),a=U(n),o=U(r),i=V(o/2,r);return{aspect:e,k:n,quarterK:a,quarterKp:o,centerScale:i.sn/i.cn}}const ct=new Map;function J(t){const e=Math.round(t*1e3)/1e3,n=ct.get(e);if(n)return n;const r=Tt(e);return ct.set(e,r),r}const Z=Tt(1),Kt={a:R,b:X};function Xt(t){return g(t.a)-g(t.b)}function Bt(t,e){return T(v(E(t.a,e),t.b),v(E(S(t.b),e),S(t.a)))}function P(t,e){return{a:v(E(t.a,e.a),E(t.b,S(e.b))),b:v(E(t.a,e.b),E(t.b,S(e.a)))}}function bt(t){return{a:S(t.a),b:It(t.b)}}function Yt(t){const e=Xt(t);if(!(e>0))return Kt;const n=1/Math.sqrt(e);return{a:p(t.a,n),b:p(t.b,n)}}function G(t){return{a:_(1,t/2),b:X}}function N(t){const e=1/Math.sqrt(1-g(t));return{a:m(e),b:p(t,e)}}function _e(t,e){const n=bt(N(t));return P(N(t),P(N(Bt(n,e)),n))}function Jt(t,e){if(e<=0)return{kind:"diameter",angle:t+Math.PI/2};const n=e,r=1/e;return{kind:"circle",center:_((n+r)/2,t),radius:(r-n)/2}}function lt(t,e){if(t.kind==="diameter")return yt(S(e),2*t.angle);const n=A(e,t.center),r=t.radius*t.radius;return v(t.center,p(xt(S(n)),r))}function Zt(t,e){return t.kind==="diameter"?e.im*Math.cos(t.angle)-e.re*Math.sin(t.angle):Math.hypot(e.re-t.center.re,e.im-t.center.im)-t.radius}const Te=["poincare","klein","halfplane","hband","vband","square","rect"],ht=Math.PI/2;function be(t,e,n={}){switch(t){case"poincare":return e;case"klein":return p(e,2/(1+g(e)));case"halfplane":return K(T(v(R,e),A(R,e)));case"hband":return p(at(e),2);case"vband":return K(p(at(e),2));case"square":return dt(e,Z);case"rect":return dt(e,J(n.aspect??1))}}function Ce(t,e,n={}){switch(t){case"poincare":return e;case"klein":{const r=1-g(e),a=Math.sqrt(Math.max(r,0));return p(e,1/(1+a))}case"halfplane":return T(A(e,nt),v(e,nt));case"hband":return rt(p(e,.5));case"vband":return rt(p(K(e),-.5));case"square":return ut(e,Z);case"rect":return ut(e,J(n.aspect??1))}}function Me(t,e,n={}){switch(t){case"poincare":case"klein":return g(e)<1;case"halfplane":return e.im>0;case"hband":return Math.abs(e.im)<ht;case"vband":return Math.abs(e.re)<ht;case"square":return Math.abs(e.re)<1&&Math.abs(e.im)<1;case"rect":{const r=tt(J(n.aspect??1));return Math.abs(e.re)<r.re&&Math.abs(e.im)<r.im}}}function tt(t){return t.aspect>=1?m(t.aspect,1):m(1,1/t.aspect)}function K(t){return{re:-t.im,im:t.re}}function ut(t,e){const{k:n,quarterK:r,quarterKp:a,centerScale:o}=e,i=tt(e),s=m(t.re/i.re*r,(t.im/i.im+1)/2*a),c=Gt(s,n),h=m(0,o);return T(A(c,h),v(c,h))}function dt(t,e){const{k:n,quarterK:r,quarterKp:a,centerScale:o}=e,i=tt(e),s=E(m(0,o),T(v(R,t),A(R,t))),c=m(0,o);let h=m(0,a/2);const l=12;for(let u=1;u<=l;u+=1){const f=u/l,x=v(p(c,1-f),p(s,f));for(let w=0;w<24;w+=1){const{sn:b,cn:D,dn:H}=_t(h,n),I=A(b,x);if(g(I)<1e-30)break;const y=E(D,H);if(g(y)<1e-30)break;h=A(h,T(I,y))}}return m(h.re/r*i.re,(2*h.im/a-1)*i.im)}function te(t,e){const n=(t-2)*(e-2);return n>4?"hyperbolic":n===4?"euclidean":"spherical"}function ee(t,e){return te(t,e)==="hyperbolic"}function ft(t){return Math.tanh(t/2)}function Le(t,e){if(!Number.isInteger(t)||!Number.isInteger(e)||t<3||e<3)throw new Error(`{${t},${e}} is not a regular tiling: p and q must be whole numbers ≥ 3`);if(!ee(t,e))throw new Error(`{${t},${e}} is not a hyperbolic tiling: (p-2)(q-2) must exceed 4`);const n=Math.PI/t,r=Math.PI/e,a=Math.acosh(Math.cos(n)*Math.cos(r)/(Math.sin(n)*Math.sin(r))),o=Math.acosh(Math.cos(r)/Math.sin(n)),i=Math.acosh(Math.cos(n)/Math.sin(r)),s=ft(o);return{p:t,q:e,circumradius:a,inradius:o,halfEdge:i,vertexDepth:ft(a),edgeDepth:s,edgeMirror:Jt(n,s),wedgeMirror:{kind:"diameter",angle:n}}}function Re(t){const e=2*Math.PI/t.p,n=2*Math.PI/t.q,r=[];for(let a=0;a<t.p;a+=1){const o=a*e,i=N(_(t.edgeDepth,o+Math.PI/t.p));r.push(Q(i,G(Math.PI)));const s=N(_(t.vertexDepth,o));r.push(Q(s,G(n))),r.push(Q(s,G(-n)))}return r}function Q(t,e){return P(t,P(e,bt(t)))}function Se(t,e,n=64){let r=t,a=g(r.a);for(let o=0;o<n;o+=1){let i=!1;for(const s of e){const c=P(r,s),h=g(c.a);h<a*(1-1e-12)&&(r=c,a=h,i=!0)}if(!i)break}return Yt(r)}const Ct=64,mt=1e-12;function De(t){return t.q%2===0}function Ie(t,e,n=Ct){const r=Math.PI/t.p;let a=e,o=0,i=0,s=e;const c=()=>{s=a;const l=2*r,u=Math.floor(W(a)/l);u!==0&&(a=yt(a,-u*l)),W(a)>r+mt&&(a=lt(t.wedgeMirror,a),o+=1)};c();let h=!1;for(let l=0;l<n;l+=1){if(Zt(t.edgeMirror,a)>=-mt){h=!0;break}a=lt(t.edgeMirror,a),o+=1,i+=1,c()}return{point:a,facePoint:s,parity:o%2,reflections:o,faceSteps:i,converged:h}}function ke(t){return t.shape==="square"?{x:t.u,y:t.v}:{x:t.b[1],y:t.b[2]}}function Ne(t){if(!Number.isInteger(t)||t<=0)throw new Error(`motif raster size must be a positive integer, got ${t}`);return{size:t,data:new Uint8ClampedArray(t*t*4)}}function ne(t,e,n,r,a,o){const i=a-n,s=o-r,c=i*i+s*s;let h=0;c>0&&(h=Math.min(1,Math.max(0,((t-n)*i+(e-r)*s)/c)));const l=t-(n+h*i),u=e-(r+h*s);return l*l+u*u}function re(t,e,n){if(t.length===1)return Math.hypot(e-t[0].x,n-t[0].y);let r=Number.POSITIVE_INFINITY;for(let a=0;a+1<t.length;a+=1){const o=ne(e,n,t[a].x,t[a].y,t[a+1].x,t[a+1].y);o<r&&(r=o)}return Math.sqrt(r)}function ae(t,e,n,r,a,o){const i=t[e+3]/255,s=o+i*(1-o);if(s<=0){t[e]=0,t[e+1]=0,t[e+2]=0,t[e+3]=0;return}const c=i*(1-o)/s,h=o/s;t[e]=t[e]*c+n*255*h,t[e+1]=t[e+1]*c+r*255*h,t[e+2]=t[e+2]*c+a*255*h,t[e+3]=s*255}function oe(t,e){const{size:n,data:r}=t;for(let a=n-e.x1;a<n-e.x0;a+=1)if(!(a<0||a>=n))for(let o=n-e.y1;o<n-e.y0;o+=1){if(o<0||o>=n)continue;const i=n-1-a,s=n-1-o;if(i<0||i>=n||s<0||s>=n)continue;const c=(a*n+o)*4,h=(s*n+i)*4;r[c]=r[h],r[c+1]=r[h+1],r[c+2]=r[h+2],r[c+3]=r[h+3]}}function Pe(t,e,n="simplex"){if(e.points.length===0||e.opacity<=0)return null;const{size:r,data:a}=t,o=.5/r,i=e.width+o;let s=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(const y of e.points)s=Math.min(s,y.x),c=Math.min(c,y.y),h=Math.max(h,y.x),l=Math.max(l,y.y);const u=Math.max(0,Math.floor((s-i)*r)),f=Math.max(0,Math.floor((c-i)*r)),x=Math.min(r,Math.ceil((h+i)*r)+1),w=Math.min(r,Math.ceil((l+i)*r)+1);if(u>=x||f>=w)return null;const[b,D,H]=e.color;for(let y=f;y<w;y+=1){const Lt=(y+.5)/r;for(let O=u;O<x;O+=1){const Rt=(O+.5)/r,St=re(e.points,Rt,Lt),et=(i-St)/(2*o);if(et<=0)continue;const Dt=Math.min(1,et)*e.opacity;ae(a,(y*r+O)*4,b,D,H,Dt)}}const I={x0:u,y0:f,x1:x,y1:w};return n==="simplex"&&oe(t,I),I}const se=1,ie=4;function k(t){const e=10**ie;return Math.round(t*e)/e}const ce=new Set(["version","base","domain","sides","strokes","unknown"]);function qe(t,e,n={}){const{domain:r,sides:a,unknown:o}=n,i=e.map(c=>({points:c.points.map(h=>({x:k(h.x),y:k(h.y)})),width:k(c.width),color:c.color.map(k),opacity:k(c.opacity)})),s={version:se,base:t,...r==="tile"?{domain:r,...a?{sides:a}:{}}:{},strokes:i};return o&&Object.keys(o).length>0?{...s,unknown:o}:s}function L(t){return typeof t=="number"&&Number.isFinite(t)}function le(t){if(typeof t!="object"||t===null)return null;const{x:e,y:n}=t;return L(e)&&L(n)?{x:e,y:n}:null}function he(t){if(typeof t!="object"||t===null)return null;const{points:e,width:n,color:r,opacity:a}=t;if(!Array.isArray(e)||e.length===0||!L(n)||n<=0||!L(a)||!Array.isArray(r)||r.length!==3||!r.every(L))return null;const o=[];for(const i of e){const s=le(i);if(!s)return null;o.push(s)}return{points:o,width:n,opacity:a,color:[r[0],r[1],r[2]]}}function Oe(t){if(typeof t!="object"||t===null)return null;const e=t;if(!L(e.version)||e.version<1||typeof e.base!="string"||!Array.isArray(e.strokes))return null;const n=e.strokes.map(he).filter(s=>s!==null),r={};for(const[s,c]of Object.entries(e))ce.has(s)||(r[s]=c);typeof e.unknown=="object"&&e.unknown!==null&&Object.assign(r,e.unknown);const a=e.domain==="tile"?"tile":"triangle",o=L(e.sides)&&e.sides>=3?Math.round(e.sides):void 0,i={version:e.version,base:e.base,...a==="tile"?{domain:a,...o?{sides:o}:{}}:{},strokes:n};return Object.keys(r).length>0?{...i,unknown:r}:i}function ue(t){const{unknown:e,...n}=t;return{...e,...n}}function $e(t){return new TextEncoder().encode(JSON.stringify(ue(t))).length}const de=40;function fe(t,e){return{x:t.y*e.t-t.t*e.y,y:t.t*e.x-t.x*e.t,t:-(t.x*e.y-t.y*e.x)}}function me(t){const e=Math.sqrt(Math.abs(vt(t,t)));return{x:t.x/e,y:t.y/e,t:t.t/e}}function pe(t){const e=Math.PI/t.p,n=e/2,r=Et(e,t.edgeDepth);let a=0,o=1;for(let u=0;u<de;u+=1){const f=(a+o)/2;C(r,_(f,n))>0?a=f:o=f}const i=_((a+o)/2,n),s={x:0,y:1,t:0},c=me(fe(wt(i),s)),h=_(t.vertexDepth,0),l=C(c,h)>0?c:{x:-c.x,y:-c.y,t:-c.t};return{tiling:t,faceSides:2*t.p,vertexSides:t.q,point:i,cut:l}}function d(t){if(!Number.isFinite(t))throw new Error(`cannot emit non-finite GLSL float: ${t}`);const e=t.toPrecision(9);return/[.e]/.test(e)?e:`${e}.0`}function M(t,e){return`vec2(${d(t)}, ${d(e)})`}function q(t,e,n){return`vec3(${d(t)}, ${d(e)}, ${d(n)})`}const Mt=`
  h = max(h, 0.0);
  float sum = h.x + h.y + h.z;
  if (!(sum > 0.0)) return vec3(1.0, 0.0, 0.0);
  return h / sum;`,Fe=`
vec2 cMul(vec2 u, vec2 v) {
  return vec2(u.x * v.x - u.y * v.y, u.x * v.y + u.y * v.x);
}

vec2 cConj(vec2 u) { return vec2(u.x, -u.y); }

vec2 cInv(vec2 u) { return cConj(u) / dot(u, u); }

vec2 cDiv(vec2 u, vec2 v) { return cMul(u, cInv(v)); }

vec2 cRotate(vec2 u, float theta) {
  float c = cos(theta);
  float s = sin(theta);
  return vec2(u.x * c - u.y * s, u.x * s + u.y * c);
}

// Spelled out from exp() rather than the built-in sinh/cosh: those arrived
// with GLSL ES 3.00, and this library must compile in the ES 1.00 dialect
// three.js emits by default.
float hSinh(float x) { return 0.5 * (exp(x) - exp(-x)); }
float hCosh(float x) { return 0.5 * (exp(x) + exp(-x)); }

vec2 cTanh(vec2 u) {
  float sr = hSinh(u.x);
  float cr = hCosh(u.x);
  float si = sin(u.y);
  float ci = cos(u.y);
  return cDiv(vec2(sr * ci, cr * si), vec2(cr * ci, sr * si));
}

/** Reflection across the line through the origin at \`angle\`. */
vec2 reflectLine(vec2 z, float angle) {
  return cRotate(cConj(z), 2.0 * angle);
}
`;function Ue(t){switch(t){case"poincare":return`
bool inProjection(vec2 p) { return dot(p, p) < 1.0; }
vec2 toDisk(vec2 p) { return p; }
`;case"klein":return`
bool inProjection(vec2 p) { return dot(p, p) < 1.0; }
// Radial: tanh(d) ↦ tanh(d/2).
vec2 toDisk(vec2 p) { return p / (1.0 + sqrt(max(1.0 - dot(p, p), 0.0))); }
`;case"halfplane":return`
bool inProjection(vec2 p) { return p.y > 0.0; }
// Inverse Cayley.
vec2 toDisk(vec2 p) { return cDiv(p - vec2(0.0, 1.0), p + vec2(0.0, 1.0)); }
`;case"hband":return`
const float BAND_HALF_EXTENT = ${d(Math.PI/2)};
bool inProjection(vec2 p) { return abs(p.y) < BAND_HALF_EXTENT; }
vec2 toDisk(vec2 p) { return cTanh(0.5 * p); }
`;case"vband":return`
const float BAND_HALF_EXTENT = ${d(Math.PI/2)};
bool inProjection(vec2 p) { return abs(p.x) < BAND_HALF_EXTENT; }
vec2 toDisk(vec2 p) { return cTanh(0.5 * vec2(p.y, -p.x)); }
`;case"square":return pt(Z,xe);case"rect":return pt(null,ye)}}const xe=6,ye=8;function pt(t,e){const n=e-1;return`${t?`
const float SQ_QUARTER_K = ${d(t.quarterK)};
const float SQ_QUARTER_KP = ${d(t.quarterKp)};
const float SQ_MODULUS = ${d(t.k)};
const float SQ_MODULUS_COMPLEMENT = ${d(Math.sqrt(1-t.k*t.k))};
const float SQ_CENTER_SCALE = ${d(t.centerScale)};
const vec2 SQ_HALF_EXTENT = ${M(1,1)};
`:`
uniform float SQ_QUARTER_K;
uniform float SQ_QUARTER_KP;
uniform float SQ_MODULUS;
uniform float SQ_MODULUS_COMPLEMENT;
uniform float SQ_CENTER_SCALE;
uniform vec2 SQ_HALF_EXTENT;
`}
const float SQ_ASCENT_GAIN = ${d(2**n)};

bool inProjection(vec2 p) {
  return abs(p.x) < SQ_HALF_EXTENT.x && abs(p.y) < SQ_HALF_EXTENT.y;
}

/** Real Jacobi sn, cn, dn, packed as a vec3. */
vec3 jacobiReal(float u, float k) {
  float a[${e}];
  float c[${e}];
  a[0] = 1.0;
  c[0] = k;
  float b = sqrt(max(0.0, 1.0 - k * k));
  for (int i = 1; i < ${e}; ++i) {
    float previous = a[i - 1];
    a[i] = 0.5 * (previous + b);
    c[i] = 0.5 * (previous - b);
    b = sqrt(previous * b);
  }

  // At the top of the ladder the modulus has vanished and the amplitude is
  // linear; the descent walks it back down.
  float phi = SQ_ASCENT_GAIN * a[${n}] * u;
  for (int i = ${n}; i > 0; --i) {
    phi = 0.5 * (asin(clamp((c[i] / a[i]) * sin(phi), -1.0, 1.0)) + phi);
  }

  float sn = sin(phi);
  return vec3(sn, cos(phi), sqrt(max(0.0, 1.0 - k * k * sn * sn)));
}

/** Complex sn, from the real functions at k and k' (A&S 16.21). */
vec2 jacobiSn(vec2 w) {
  vec3 x = jacobiReal(w.x, SQ_MODULUS);
  vec3 y = jacobiReal(w.y, SQ_MODULUS_COMPLEMENT);
  float denominator = y.y * y.y
    + SQ_MODULUS * SQ_MODULUS * x.x * x.x * y.x * y.x;
  return vec2(x.x * y.z, x.y * x.z * y.x * y.y) / denominator;
}

vec2 toDisk(vec2 p) {
  // Stretch the window onto sn's rectangle [−K, K] × [0, K′]; the modulus already
  // matched those proportions to the window's aspect.
  vec2 w = vec2(
    (p.x / SQ_HALF_EXTENT.x) * SQ_QUARTER_K,
    ((p.y / SQ_HALF_EXTENT.y + 1.0) * 0.5) * SQ_QUARTER_KP);
  vec2 zeta = jacobiSn(w);
  // The dilation by the center's own sn value is a half-plane isometry, and it
  // is what puts the tiling's center at the window's center.
  vec2 center = vec2(0.0, SQ_CENTER_SCALE);
  return cDiv(zeta - center, zeta + center);
}
`}const He=`
vec2 diskApply(vec2 a, vec2 b, vec2 z) {
  return cDiv(cMul(a, z) + b, cMul(cConj(b), z) + cConj(a));
}
`;function je(t){const[e,n]=Y(t.lattice,1),r=e.x*n.y-e.y*n.x,a={c0:{x:n.y/r,y:-e.y/r},c1:{x:-n.x/r,y:e.x/r}},[o,i]=t.wedgeNormals;return`
const vec2 LATTICE_A1 = ${M(e.x,e.y)};
const vec2 LATTICE_A2 = ${M(n.x,n.y)};
const mat2 LATTICE_INV = mat2(
  ${d(a.c0.x)}, ${d(a.c0.y)},
  ${d(a.c1.x)}, ${d(a.c1.y)});
const vec2 WEDGE_N1 = ${M(o.x,o.y)};
const vec2 WEDGE_N2 = ${M(i.x,i.y)};
// Walls count as inside. Larger than the CPU's slack because float32
// rounding is coarser; both exist so a point sitting on a mirror settles
// instead of ping-ponging across it.
const float FOLD_EPS = 1.0e-5;

// Translate to the Voronoi cell of the nearest lattice point, then fold by
// the stabilizer's mirrors. The nine-way search is what makes the
// triangular lattice exact — rounding the fractional coordinates alone
// picks the wrong cell near the hexagon's corners.
/**
 * Two-colouring of the cells, or −1 where none exists.
 *
 * The same criterion as the hyperbolic case read through the lattice: (i + j)
 * alternates across every edge of a square or rectangular cell, while a hexagonal
 * cell's two diagonal neighbours leave it unchanged — which is the same fact as
 * {6,3} having an odd vertex degree.
 */
const float CELL_COLORS = ${t.lattice==="triangular"?"-1.0":"2.0"};

vec2 foldDomain(vec2 p, out float parity, out float cellColor, out vec2 facePoint) {
  vec2 frac = LATTICE_INV * (p / cellSize);
  vec2 base = floor(frac + 0.5);
  vec2 cellIndex = base;
  float tie = FOLD_EPS * cellSize * cellSize;
  float bestDist = 1.0e20;
  vec2 origin = vec2(0.0);
  for (int di = -1; di <= 1; ++di) {
    for (int dj = -1; dj <= 1; ++dj) {
      vec2 idx = base + vec2(float(di), float(dj));
      vec2 candidate = cellSize * (idx.x * LATTICE_A1 + idx.y * LATTICE_A2);
      float dist = dot(p - candidate, p - candidate);
      if (dist < bestDist - tie) {
        bestDist = dist;
        origin = candidate;
        cellIndex = idx;
      }
    }
  }

  vec2 z = p - origin;
  // The cell point, before the mirrors reduce it to one fundamental triangle.
  facePoint = z / cellSize;
  float wall = -FOLD_EPS * cellSize;
  float reflections = 0.0;
  for (int pass = 0; pass < 8; ++pass) {
    bool folded = false;
    float s1 = dot(z, WEDGE_N1);
    if (s1 < wall) {
      z -= 2.0 * s1 * WEDGE_N1;
      reflections += 1.0;
      folded = true;
    }
    float s2 = dot(z, WEDGE_N2);
    if (s2 < wall) {
      z -= 2.0 * s2 * WEDGE_N2;
      reflections += 1.0;
      folded = true;
    }
    if (!folded) break;
  }

  parity = mod(reflections, 2.0);
  // Double mod: GLSL's mod follows the sign of its second argument on some drivers and
  // of its first on others, and cellIndex goes negative.
  cellColor = CELL_COLORS < 0.0
    ? -1.0
    : mod(mod(cellIndex.x + cellIndex.y, 2.0) + 2.0, 2.0);
  return z;
}
`}function Ge(t,e){const n=Ht(t,1,e),r=e!==void 0&&e!==(t.lattice==="triangular"?6:4);if(n.shape==="square")return`
#define CHART_SQUARE 1

// The domain is a quarter of the cell, anchored at the lattice point, so dividing by its
// half-extents lands it on the unit square. \`z\` is unused, and a motif must not read it.
const vec2 CHART_HALF = ${M(n.corners[1].x,n.corners[2].y)};

vec3 chartCoord(vec2 q) {
  return vec3(q / CHART_HALF, 0.0);
}

/**
 * Distance to the tile's **own edge**, as against the mirrors that cut across it.
 *
 * Which weight that is depends on the tiling, not on the chart's ordering: corners
 * are ranked by descending symmetry order, so the face centre leads for {7,3} but
 * the *vertex* leads for its dual {3,7}. Reaching for the primary weight would
 * outline a mirror on half the tilings, so the index is baked in from the CPU chart,
 * which knows the roles.
 */
// The domain is a *quarter* of the cell, anchored at the lattice point — so u = 0 and
// v = 0 are the mirrors through the cell's centre and only u = 1 and v = 1 are the
// cell's own edges. Taking the minimum of all four, as this once did, outlined the
// interior mirrors too and drew a grid twice as fine as the tiling.
float tileEdge(vec3 chart) {
  return min(1.0 - chart.x, 1.0 - chart.y);
}

/**
 * How fast a chart weight changes per unit length, for the weight nearest a wall.
 *
 * This replaces \`fwidth\` for line drawing, and the reason is a real bug rather than
 * tidiness. Every chart weight is a *distance to a mirror*, so the fold turns it into a
 * V at each mirror — and \`fwidth\` is a finite difference across a 2x2 pixel quad, which
 * **cancels** when the V's apex falls mid-quad. Measured on \`p6m\`: as the quad grid
 * slides across a mirror, \`fwidth\` runs 1.5e-2 → 0 → 1.5e-2, so the line goes fat, then
 * vanishes, then fat again. Panning slides the grid, so every line in the app breathed
 * and dropped out — and since all lines sit exactly on folds, none of them escaped it.
 *
 * The weights are \`distance / scale\` with a unit-normal wall, so the gradient is simply
 * \`1 / scale\` — exact, constant, and immune to where the pixel grid happens to land. The
 * caller multiplies by the length a pixel spans, which it takes from a quantity that is
 * smooth in screen space.
 */
float wallGradient(vec3 chart) {
  float u = min(chart.x, 1.0 - chart.x) * CHART_HALF.x;
  float v = min(chart.y, 1.0 - chart.y) * CHART_HALF.y;
  return u <= v ? 1.0 / CHART_HALF.x : 1.0 / CHART_HALF.y;
}

float tileGradient() {
  return 1.0 / min(CHART_HALF.x, CHART_HALF.y);
}

/**
 * Tile coordinates as texture coordinates, for a drawing made on the whole tile
 * rather than on one fundamental triangle.
 *
 * The tile is centred on the origin of \`facePoint\`, so halving by its circumradius and
 * offsetting lands it in the unit square. Points outside the polygon are not in the
 * tile at all, so clipping needs no test — and there are no internal seams, which is
 * what keeps a stroke crossing an inner mirror continuous.
 */
const float FACE_RADIUS = ${d(z(t.lattice,1))};

vec2 faceUv(vec2 facePoint) {
  return facePoint / (2.0 * FACE_RADIUS) + 0.5;
}
`;const a=n.walls.map(i=>q(i.n.x,i.n.y,i.c)),o=n.scales;return`
#define CHART_SIMPLEX 1

// Each wall packs as (normal.xy, offset); the divisor is the corner-to-wall
// distance, so hᵢ = 1 at corner i and 0 along wall i.
const vec3 CHART_WALL0 = ${a[0]};
const vec3 CHART_WALL1 = ${a[1]};
const vec3 CHART_WALL2 = ${a[2]};
const vec3 CHART_SCALE = ${q(o[0],o[1],o[2])};

vec3 chartCoord(vec2 q) {
  vec3 h = vec3(
    dot(CHART_WALL0.xy, q) - CHART_WALL0.z,
    dot(CHART_WALL1.xy, q) - CHART_WALL1.z,
    dot(CHART_WALL2.xy, q) - CHART_WALL2.z) / CHART_SCALE;${Mt}
}

/**
 * Distance to the tile's **own edge**, as against the mirrors that cut across it.
 *
 * Which weight that is depends on the tiling, not on the chart's ordering: corners
 * are ranked by descending symmetry order, so the face centre leads for {7,3} but
 * the *vertex* leads for its dual {3,7}. Reaching for the primary weight would
 * outline a mirror on half the tilings, so the index is baked in from the CPU chart,
 * which knows the roles.
 */
float tileEdge(vec3 chart) {
  return chart[${n.tileCorner??0}];
}

/**
 * How fast a chart weight changes per unit length, for the weight nearest a wall.
 *
 * This replaces \`fwidth\` for line drawing, and the reason is a real bug rather than
 * tidiness. Every chart weight is a *distance to a mirror*, so the fold turns it into a
 * V at each mirror — and \`fwidth\` is a finite difference across a 2x2 pixel quad, which
 * **cancels** when the V's apex falls mid-quad. Measured on \`p6m\`: as the quad grid
 * slides across a mirror, \`fwidth\` runs 1.5e-2 → 0 → 1.5e-2, so the line goes fat, then
 * vanishes, then fat again. Panning slides the grid, so every line in the app breathed
 * and dropped out — and since all lines sit exactly on folds, none of them escaped it.
 *
 * The weights are \`distance / scale\` with a unit-normal wall, so the gradient is simply
 * \`1 / scale\` — exact, constant, and immune to where the pixel grid happens to land. The
 * caller multiplies by the length a pixel spans, which it takes from a quantity that is
 * smooth in screen space.
 */
float wallGradient(vec3 chart) {
  if (chart.x <= chart.y && chart.x <= chart.z) return 1.0 / CHART_SCALE.x;
  return chart.y <= chart.z ? 1.0 / CHART_SCALE.y : 1.0 / CHART_SCALE.z;
}

float tileGradient() {
  return 1.0 / CHART_SCALE[${n.tileCorner??0}];
}

/**
 * Tile coordinates as texture coordinates, for a drawing made on the whole tile
 * rather than on one fundamental triangle.
 *
 * The tile is centred on the origin of \`facePoint\`, so halving by its circumradius and
 * offsetting lands it in the unit square. Points outside the polygon are not in the
 * tile at all, so clipping needs no test — and there are no internal seams, which is
 * what keeps a stroke crossing an inner mirror continuous.
 */
const float FACE_RADIUS = ${d(z(t.lattice,1))};
${r?ge:`
vec2 faceUv(vec2 facePoint) {
  return facePoint / (2.0 * FACE_RADIUS) + 0.5;
}`}
`}const ge=`
const float FACE_TURN = ${d(Math.PI/3)};
const float FACE_TWO_PI = ${d(2*Math.PI)};

vec2 faceUv(vec2 facePoint) {
  float k = floor(mod(atan(facePoint.y, facePoint.x), FACE_TWO_PI) / FACE_TURN);
  float at = FACE_TURN * 0.5 + k * FACE_TURN;
  vec2 local = facePoint - FACE_RADIUS * vec2(cos(at), sin(at));
  if (mod(k, 2.0) >= 1.0) local = -local;
  return local / (2.0 * FACE_RADIUS) + 0.5;
}`;function Qe(t){const e=jt(t),n=e.walls.map(a=>q(a.x,a.y,a.t)),r=e.scales;return`
#define CHART_SIMPLEX 1

const vec3 CHART_WALL0 = ${n[0]};
const vec3 CHART_WALL1 = ${n[1]};
const vec3 CHART_WALL2 = ${n[2]};
const vec3 CHART_SCALE = ${q(r[0],r[1],r[2])};

/** Lift a disk point to the ⟨x,x⟩ = −1 sheet. */
vec3 hyperboloid(vec2 z) {
  float rho = dot(z, z);
  float s = 1.0 / (1.0 - rho);
  return vec3(2.0 * z * s, (1.0 + rho) * s);
}

float minkowskiDot(vec3 a, vec3 b) {
  return a.x * b.x + a.y * b.y - a.z * b.z;
}

float hAsinh(float x) { return log(x + sqrt(x * x + 1.0)); }

vec3 chartCoord(vec2 z) {
  vec3 x = hyperboloid(z);
  vec3 h = vec3(
    hAsinh(minkowskiDot(x, CHART_WALL0)),
    hAsinh(minkowskiDot(x, CHART_WALL1)),
    hAsinh(minkowskiDot(x, CHART_WALL2))) / CHART_SCALE;${Mt}
}

/**
 * Distance to the tile's **own edge**, as against the mirrors that cut across it.
 *
 * Which weight that is depends on the tiling, not on the chart's ordering: corners
 * are ranked by descending symmetry order, so the face centre leads for {7,3} but
 * the *vertex* leads for its dual {3,7}. Reaching for the primary weight would
 * outline a mirror on half the tilings, so the index is baked in from the CPU chart,
 * which knows the roles.
 */
float tileEdge(vec3 chart) {
  return chart[${e.faceCorner}];
}

/**
 * How fast a chart weight changes per unit length, for the weight nearest a wall.
 *
 * This replaces \`fwidth\` for line drawing, and the reason is a real bug rather than
 * tidiness. Every chart weight is a *distance to a mirror*, so the fold turns it into a
 * V at each mirror — and \`fwidth\` is a finite difference across a 2x2 pixel quad, which
 * **cancels** when the V's apex falls mid-quad. Measured on \`p6m\`: as the quad grid
 * slides across a mirror, \`fwidth\` runs 1.5e-2 → 0 → 1.5e-2, so the line goes fat, then
 * vanishes, then fat again. Panning slides the grid, so every line in the app breathed
 * and dropped out — and since all lines sit exactly on folds, none of them escaped it.
 *
 * The weights are \`distance / scale\` with a unit-normal wall, so the gradient is simply
 * \`1 / scale\` — exact, constant, and immune to where the pixel grid happens to land. The
 * caller multiplies by the length a pixel spans, which it takes from a quantity that is
 * smooth in screen space.
 */
float wallGradient(vec3 chart) {
  if (chart.x <= chart.y && chart.x <= chart.z) return 1.0 / CHART_SCALE.x;
  return chart.y <= chart.z ? 1.0 / CHART_SCALE.y : 1.0 / CHART_SCALE.z;
}

float tileGradient() {
  return 1.0 / CHART_SCALE[${e.faceCorner}];
}

/**
 * Tile coordinates as texture coordinates, for a drawing made on the whole tile
 * rather than on one fundamental triangle.
 *
 * The tile is centred on the origin of \`facePoint\`, so halving by its circumradius and
 * offsetting lands it in the unit square. Points outside the polygon are not in the
 * tile at all, so clipping needs no test — and there are no internal seams, which is
 * what keeps a stroke crossing an inner mirror continuous.
 */
const float FACE_RADIUS = ${d(t.vertexDepth)};

vec2 faceUv(vec2 facePoint) {
  return facePoint / (2.0 * FACE_RADIUS) + 0.5;
}
`}function We(t,e=Ct){const n=t.edgeMirror;if(n.kind!=="circle")throw new Error("a hyperbolic edge mirror is always a circle");const r=Math.PI/t.p;return`
const float FOLD_WEDGE = ${d(r)};
const float FOLD_TURN = ${d(2*r)};
const vec2 EDGE_CENTER = ${M(n.center.re,n.center.im)};
const float EDGE_RADIUS = ${d(n.radius)};
const float EDGE_RADIUS2 = ${d(n.radius*n.radius)};
// See the wallpaper fold: walls count as inside, with float32-sized slack.
const float FOLD_EPS = 1.0e-5;

/** Reduce into the wedge 0 ≤ arg z ≤ π/p about the face center. */
vec2 foldWedge(vec2 z, inout float reflections) {
  float k = floor(atan(z.y, z.x) / FOLD_TURN);
  if (k != 0.0) z = cRotate(z, -k * FOLD_TURN);
  if (atan(z.y, z.x) > FOLD_WEDGE + FOLD_EPS) {
    z = reflectLine(z, FOLD_WEDGE);
    reflections += 1.0;
  }
  return z;
}

/**
 * Two-colouring of the faces, or −1 where none exists.
 *
 * Baked per tiling: the faces around a vertex form a q-cycle, so the face graph is
 * bipartite exactly when q is even. For odd q a parity accumulated along the fold
 * would depend on the path and flicker as the viewer moved, which is worse than
 * absent — hence a value callers can test rather than a lie.
 */
const float CELL_COLORS = ${t.q%2===0?"2.0":"-1.0"};

vec2 foldDomain(vec2 z, out float parity, out float cellColor, out vec2 facePoint) {
  float reflections = 0.0;
  // Counted apart from the mirrors: a wedge fold moves within one face, an inversion
  // in the edge moves to the next, and only the second labels a face.
  float faceSteps = 0.0;
  // Recorded before every wedge reduction, so it ends up holding the point as it stood
  // in the face — the transforms after the last inversion are exactly the within-face
  // ones.
  facePoint = z;
  z = foldWedge(z, reflections);
  for (int step = 0; step < ${e}; ++step) {
    vec2 offset = z - EDGE_CENTER;
    if (length(offset) >= EDGE_RADIUS - FOLD_EPS) break;
    z = EDGE_CENTER + EDGE_RADIUS2 * offset / dot(offset, offset);
    reflections += 1.0;
    faceSteps += 1.0;
    facePoint = z;
    z = foldWedge(z, reflections);
  }
  parity = mod(reflections, 2.0);
  // −1 means no such colouring exists for this tiling, and a style must handle it
  // rather than pretend.
  cellColor = CELL_COLORS < 0.0 ? -1.0 : mod(faceSteps, 2.0);
  return z;
}
`}function ze(t){const e=pe(t),{cut:n}=e,r=Math.abs(C(n,{re:0,im:0}));return`
#define HAS_TRUNCATION 1

const vec3 TRUNCATED_CUT = ${q(n.x,n.y,n.t)};
const float TRUNCATED_SCALE = ${d(r)};

float truncatedCut(vec2 z) {
  return hAsinh(minkowskiDot(hyperboloid(z), TRUNCATED_CUT)) / TRUNCATED_SCALE;
}
`}const Ve=`
float truncatedCut(vec2 z) {
  return -1.0;
}
`;export{jt as A,ht as B,X as C,Kt as D,je as E,Ge as F,Fe as G,He as H,Ue as I,We as J,Qe as K,ze as L,Ne as M,Ve as N,Pe as O,Te as P,Oe as Q,$e as R,ue as S,qe as T,ve as W,bt as a,m as b,g as c,Bt as d,N as e,be as f,kt as g,W as h,Me as i,Yt as j,P as k,_e as l,G as m,J as n,Ae as o,z as p,we as q,ke as r,Ee as s,Ce as t,Ie as u,Se as v,Ht as w,De as x,Le as y,Re as z};
