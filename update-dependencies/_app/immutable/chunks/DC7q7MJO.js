import{s as b,d as _,i as p,y as h,p as r,c as g,h as y,r as F}from"./hklQk-fT.js";import{S as L,i as I,d as k,t as w,a as C,m as S,c as q,b as E}from"./4RGf_tlt.js";import{F as N}from"./pCwRaQzy.js";import"./IrKgt0OQ.js";import{v as P}from"./CtRu48qb.js";function T(i){let e,a,t;return{c(){e=y("input"),this.h()},l(n){e=g(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){e.disabled=i[1],r(e,"class","govuk-file-upload"),r(e,"id",i[4]),r(e,"type","file")},m(n,l){p(n,e,l),i[6](e),a||(t=h(e,"change",i[3]),a=!0)},p(n,l){l&2&&(e.disabled=n[1])},d(n){n&&_(e),i[6](null),a=!1,t()}}}function U(i){let e,a;return e=new N({props:{label:i[0],id:i[4],$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){E(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){S(e,t,n),a=!0},p(t,[n]){const l={};n&1&&(l.label=t[0]),n&134&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){k(e,t)}}}function j(i,e,a){let{label:t}=e,{onLoad:n}=e,{disabled:l=!1}=e,o;async function f(s){let d=o.files[0].name,c=await o.files[0].text();n(d,c)}let m=P();function u(s){F[s?"unshift":"push"](()=>{o=s,a(2,o)})}return i.$$set=s=>{"label"in s&&a(0,t=s.label),"onLoad"in s&&a(5,n=s.onLoad),"disabled"in s&&a(1,l=s.disabled)},[t,l,o,f,m,n,u]}class G extends L{constructor(e){super(),I(this,e,j,U,b,{label:0,onLoad:5,disabled:1})}}export{G as F};
