import{s as b,e as _,c as p,q as f,i as h,y as g,f as y,r as F}from"./scheduler.DGwhun8C.js";import{S as L,i as I,c as k,a as q,m as w,t as C,b as S,d as E}from"./index.B2vZYn3d.js";import{F as N}from"./FormElement.Cd26lsYY.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.DvoqQyhS.js";import{v as P}from"./v4.D8aEg3BZ.js";function T(i){let e,a,t;return{c(){e=_("input"),this.h()},l(n){e=p(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){e.disabled=i[1],f(e,"class","govuk-file-upload"),f(e,"id",i[4]),f(e,"type","file")},m(n,l){h(n,e,l),i[6](e),a||(t=g(e,"change",i[3]),a=!0)},p(n,l){l&2&&(e.disabled=n[1])},d(n){n&&y(e),i[6](null),a=!1,t()}}}function U(i){let e,a;return e=new N({props:{label:i[0],id:i[4],$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){w(e,t,n),a=!0},p(t,[n]){const l={};n&1&&(l.label=t[0]),n&134&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){E(e,t)}}}function j(i,e,a){let{label:t}=e,{onLoad:n}=e,{disabled:l=!1}=e,o;async function r(s){let d=o.files[0].name,c=await o.files[0].text();n(d,c)}let m=P();function u(s){F[s?"unshift":"push"](()=>{o=s,a(2,o)})}return i.$$set=s=>{"label"in s&&a(0,t=s.label),"onLoad"in s&&a(5,n=s.onLoad),"disabled"in s&&a(1,l=s.disabled)},[t,l,o,r,m,n,u]}class G extends L{constructor(e){super(),I(this,e,j,U,b,{label:0,onLoad:5,disabled:1})}}export{G as F};
