import{s as b,e as _,c as p,o as f,i as h,z as g,f as F,r as L}from"./scheduler.DNnUYlgZ.js";import{S as y,i as I,c as k,a as w,m as C,t as S,b as q,d as z}from"./index.tVBxdTp3.js";import{F as E}from"./FormElement.DE2ZDpks.js";/* empty css                                                       */import{v as N}from"./v4.D8aEg3BZ.js";function P(i){let e,a,t;return{c(){e=_("input"),this.h()},l(n){e=p(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){e.disabled=i[1],f(e,"class","govuk-file-upload"),f(e,"id",i[4]),f(e,"type","file")},m(n,l){h(n,e,l),i[6](e),a||(t=g(e,"change",i[3]),a=!0)},p(n,l){l&2&&(e.disabled=n[1])},d(n){n&&F(e),i[6](null),a=!1,t()}}}function T(i){let e,a;return e=new E({props:{label:i[0],id:i[4],$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){C(e,t,n),a=!0},p(t,[n]){const l={};n&1&&(l.label=t[0]),n&134&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){q(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function U(i,e,a){let{label:t}=e,{onLoad:n}=e,{disabled:l=!1}=e,o;async function r(s){let d=o.files[0].name,c=await o.files[0].text();n(d,c)}let m=N();function u(s){L[s?"unshift":"push"](()=>{o=s,a(2,o)})}return i.$$set=s=>{"label"in s&&a(0,t=s.label),"onLoad"in s&&a(5,n=s.onLoad),"disabled"in s&&a(1,l=s.disabled)},[t,l,o,r,m,n,u]}class G extends y{constructor(e){super(),I(this,e,U,T,b,{label:0,onLoad:5,disabled:1})}}export{G as F};
