var bt=Array.isArray,qt=Array.from,Pt=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,nt=Object.getOwnPropertyDescriptors,Ft=Object.prototype,Lt=Array.prototype,tt=Object.getPrototypeOf;const Mt=()=>{};function Ht(n){return n()}function wn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,Tn=4,j=8,sn=16,A=32,J=64,D=128,G=256,p=512,k=1024,q=2048,b=4096,B=8192,rt=16384,mn=32768,et=65536,st=1<<18,An=1<<19,pn=Symbol("$state"),Yt=Symbol("legacy props"),jt=Symbol("");function gn(n){return n===this.v}function at(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function kn(n){return!at(n,this.v)}function lt(n){throw new Error("effect_in_teardown")}function ut(){throw new Error("effect_in_unowned_derived")}function ot(n){throw new Error("effect_orphan")}function it(){throw new Error("effect_update_depth_exceeded")}function Bt(){throw new Error("hydration_failed")}function Ut(n){throw new Error("props_invalid_value")}function Vt(){throw new Error("state_descriptors_fixed")}function Gt(){throw new Error("state_prototype_fixed")}function ft(){throw new Error("state_unsafe_local_read")}function _t(){throw new Error("state_unsafe_mutation")}let W=!1;function Kt(){W=!0}function an(n){return{f:0,v:n,reactions:null,equals:gn,version:0}}function $t(n){return In(an(n))}function ct(n,t=!1){var e;const r=an(n);return t||(r.equals=kn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Zt(n,t=!1){return In(ct(n,t))}function In(n){return o!==null&&o.f&y&&(m===null?St([n]):m.push(n)),n}function hn(n,t){return Sn(n,_n(()=>Qn(n))),t}function Sn(n,t){return o!==null&&fn()&&o.f&(y|sn)&&(m===null||!m.includes(n))&&_t(),vt(n,t)}function vt(n,t){return n.equals(t)||(n.v=t,n.version=$n(),Rn(n,k),fn()&&u!==null&&u.f&p&&!(u.f&A)&&(c!==null&&c.includes(n)?(T(u,k),X(u)):g===null?Rt([n]):g.push(n))),t}function Rn(n,t){var r=n.reactions;if(r!==null)for(var e=fn(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(T(l,t),i&(p|D)&&(i&y?Rn(l,q):X(l)))}}const zt=1,Jt=2,Wt=4,Xt=8,Qt=16,nr=1,tr=2,rr=4,er=8,sr=16,ar=1,lr=2,pt="[",ht="[!",dt="]",Dn={},ur=Symbol();function On(n){console.warn("hydration_mismatch")}let R=!1;function or(n){R=n}let w;function M(n){if(n===null)throw On(),Dn;return w=n}function ir(){return M(O(w))}function fr(n){if(R){if(O(w)!==null)throw On(),Dn;w=n}}function _r(n=1){if(R){for(var t=n,r=w;t--;)r=O(r);w=r}}function cr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===dt){if(n===0)return t;n-=1}else(r===pt||r===ht)&&(n+=1)}var e=O(t);t.remove(),t=e}}var dn,xn,Cn;function vr(){if(dn===void 0){dn=window;var n=Element.prototype,t=Node.prototype;xn=vn(t,"firstChild").get,Cn=vn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Q(n=""){return document.createTextNode(n)}function nn(n){return xn.call(n)}function O(n){return Cn.call(n)}function pr(n,t){if(!R)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(Q());else if(t&&r.nodeType!==3){var e=Q();return r==null||r.before(e),M(e),e}return M(r),r}function hr(n,t){if(!R){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function dr(n,t=1,r=!1){let e=R?w:n;for(var s;t--;)s=e,e=O(e);if(!R)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=Q();return e===null?s==null||s.after(l):e.before(l),M(l),l}return M(e),e}function Er(n){n.textContent=""}function Et(n){var t=y|k;u===null?t|=D:u.f|=An;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:gn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function yr(n){const t=Et(n);return t.equals=kn,t}function Nn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?ln(e):F(e)}}}function yt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function bn(n){var t,r=u;z(yt(n));try{Nn(n),t=Zn(n)}finally{z(r)}return t}function qn(n){var t=bn(n),r=(x||n.f&D)&&n.deps!==null?q:p;T(n,r),n.equals(t)||(n.v=t,n.version=$n())}function ln(n){Nn(n),Y(n,0),T(n,B),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Pn(n){u===null&&o===null&&ot(),o!==null&&o.f&D&&ut(),on&&lt()}function wt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&J)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|k,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{En(!0),U(l),l.f|=rt}catch(_){throw F(l),_}finally{En(i)}}else t!==null&&X(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&An)===0;if(!E&&!s&&e&&(a!==null&&wt(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function wr(n){const t=P(j,null,!1);return T(t,p),t.teardown=n,t}function Tr(n){Pn();var t=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Fn(n);return e}}function mr(n){return Pn(),un(n)}function Ar(n){const t=P(J,n,!0);return()=>{F(t)}}function Fn(n){return P(Tn,n,!1)}function gr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=un(()=>{n(),!e.ran&&(e.ran=!0,Sn(r.l.r2,!0),_n(t))})}function kr(){var n=f;un(()=>{if(Qn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,q),L(r)&&U(r),t.ran=!1}n.l.r2.v=!1}})}function un(n){return P(j,n,!0)}function Ir(n){return Tt(n)}function Tt(n,t=0){return P(j|sn|t,n,!0)}function Sr(n,t=!0){return P(j|A,n,!0,t)}function Ln(n){var t=n.teardown;if(t!==null){const r=on,e=o;yn(!0),Z(null);try{t.call(null)}finally{yn(r),Z(e)}}}function Mn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)ln(t[r])}}function Hn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function mt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&st)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}Hn(n,t&&!r),Mn(n),Y(n,0),T(n,B);var l=n.transitions;if(l!==null)for(const E of l)E.stop();Ln(n);var i=n.parent;i!==null&&i.first!==null&&Yn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Yn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Rr(n,t){var r=[];jn(n,r,!0),At(r,()=>{F(n),t&&t()})}function At(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function jn(n,t,r){if(!(n.f&b)){if(n.f^=b,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&mn)!==0||(e.f&A)!==0;jn(e,t,a?r:!1),e=s}}}function Dr(n){Bn(n,!0)}function Bn(n,t){if(n.f&b){L(n)&&U(n),n.f^=b;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&mn)!==0||(r.f&A)!==0;Bn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const gt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let K=!1,$=!1,tn=[],rn=[];function Un(){K=!1;const n=tn.slice();tn=[],wn(n)}function Vn(){$=!1;const n=rn.slice();rn=[],wn(n)}function Or(n){K||(K=!0,queueMicrotask(Un)),tn.push(n)}function xr(n){$||($=!0,gt(Vn)),rn.push(n)}function kt(){K&&Un(),$&&Vn()}const Gn=0,It=1;let V=Gn,H=!1,C=!1,on=!1;function En(n){C=n}function yn(n){on=n}let S=[],N=0;let o=null;function Z(n){o=n}let u=null;function z(n){u=n}let m=null;function St(n){m=n}let c=null,d=0,g=null;function Rt(n){g=n}let Kn=0,x=!1,I=null,f=null;function $n(){return++Kn}function fn(){return!W||f!==null&&f.l===null}function L(n){var l,i;var t=n.f;if(t&k)return!0;if(t&q){var r=n.deps,e=(t&D)!==0;if(r!==null){var s;if(t&G){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=G}for(s=0;s<r.length;s++){var a=r[s];if(L(a)&&qn(a),e&&u!==null&&!x&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function Dt(n,t,r){throw n}function Zn(n){var cn;var t=c,r=d,e=g,s=o,a=x,l=m,i=f,E=n.f;c=null,d=0,g=null,o=E&(A|J)?null:n,x=!C&&(E&D)!==0,m=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(Y(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!x)for(v=d;v<_.length;v++)((cn=_[v]).reactions??(cn.reactions=[])).push(n)}else _!==null&&d<_.length&&(Y(n,d),_.length=d);return h}finally{c=t,d=r,g=e,o=s,x=a,m=l,f=i}}function Ot(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,q),t.f&(D|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Ot(n,r[e])}function U(n){var t=n.f;if(!(t&B)){T(n,p);var r=u;u=n;try{t&sn?mt(n):Hn(n),Mn(n),Ln(n);var e=Zn(n);n.teardown=typeof e=="function"?e:null,n.version=Kn}catch(s){Dt(s)}finally{u=r}}}function zn(){N>1e3&&(N=0,it()),N++}function Jn(n){var t=n.length;if(t!==0){zn();var r=C;C=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];Wn(s,a),xt(a)}}finally{C=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(B|b))&&L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yn(e):e.fn=null))}}function Ct(){if(H=!1,N>1001)return;const n=S;S=[],Jn(n),H||(N=0)}function X(n){V===Gn&&(H||(H=!0,queueMicrotask(Ct)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(J|A)){if(!(r&p))return;t.f^=p}}S.push(t)}function Wn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&A)!==0,l=a&&(s&p)!==0;if(!l&&!(s&b))if(s&j){a?r.f^=p:L(r)&&U(r);var i=r.first;if(i!==null){r=i;continue}}else s&Tn&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),Wn(i,t)}function Xn(n){var t=V,r=S;try{zn();const s=[];V=It,S=s,H=!1,Jn(r);var e=n==null?void 0:n();return kt(),(S.length>0||s.length>0)&&Xn(),N=0,e}finally{V=t,S=r}}async function Cr(){await Promise.resolve(),Xn()}function Qn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&B){var e=bn(n);return ln(n),e}if(I!==null&&I.add(n),o!==null){m!==null&&m.includes(n)&&ft();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&A)&&g.includes(n)&&(T(u,k),X(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,L(a)&&qn(a)),n.v}function Nr(n){var t=I;I=new Set;var r=I,e;try{if(_n(n),t!==null)for(e of I)t.add(e)}finally{I=t}for(e of r)if(e.f&et)for(const s of e.deps||[])s.f&y||hn(s,null);else hn(e,null)}function _n(n){const t=o;try{return o=null,n()}finally{o=t}}const Nt=~(k|q|p);function T(n,t){n.f=n.f&Nt|t}function br(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:an(!1)})}function qr(n){const t=f;if(t!==null){const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];z(a.effect),Z(a.reaction),Fn(a.fn)}}finally{z(r),Z(e)}}f=t.p,t.m=!0}return{}}function Pr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(pn in n)en(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&pn in r&&en(r)}}}function en(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{en(n[e],t)}catch{}const r=tt(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{kn as $,Sr as A,Mt as B,F as C,Ft as D,mn as E,Lt as F,an as G,Vt as H,Sn as I,vn as J,Gt as K,tt as L,bt as M,Dr as N,Rr as O,ht as P,cr as Q,or as R,pn as S,ar as T,ur as U,Fn as V,un as W,Or as X,Ut as Y,et as Z,rr as _,qr as a,A as a0,J as a1,z as a2,nr as a3,W as a4,tr as a5,er as a6,Yt as a7,yr as a8,ct as a9,Xt as aA,Qt as aB,nt as aC,xr as aD,jt as aE,fn as aF,Zt as aG,gr as aH,kr as aI,_r as aJ,Nr as aK,at as aL,sr as aa,I as ab,Xn as ac,Pt as ad,Cr as ae,$t as af,Z as ag,o as ah,wr as ai,vr as aj,pt as ak,O as al,Dn as am,dt as an,On as ao,Bt as ap,Er as aq,qt as ar,Ar as as,b as at,zt as au,vt as av,Jt as aw,jn as ax,At as ay,Wt as az,Tr as b,pr as c,f as d,_n as e,hr as f,wn as g,Qn as h,Ht as i,Pr as j,Et as k,Kt as l,Q as m,nn as n,u as o,br as p,lr as q,fr as r,dr as s,Ir as t,mr as u,R as v,w,M as x,ir as y,Tt as z};
