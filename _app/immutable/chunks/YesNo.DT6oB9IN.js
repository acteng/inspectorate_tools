import{s as m,r as u,w as f}from"./scheduler.DGwhun8C.js";import{S as c,i as _,e as b,c as d,a as g,m as v,t as S,b as p,d as h}from"./index.B2vZYn3d.js";import{p as Y}from"./index.C9j8l9vb.js";import{R as k}from"./Radio.Bo91HaMu.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.Cw8tPJS8.js";function w(l){let a,i,t;function o(e){l[3](e)}let s={label:l[1],choices:Y(["Yes","No"]),inlineSmall:l[2]};return l[0]!==void 0&&(s.value=l[0]),a=new k({props:s}),u.push(()=>b(a,"value",o)),{c(){d(a.$$.fragment)},l(e){g(a.$$.fragment,e)},m(e,n){v(a,e,n),t=!0},p(e,[n]){const r={};n&2&&(r.label=e[1]),n&4&&(r.inlineSmall=e[2]),!i&&n&1&&(i=!0,r.value=e[0],f(()=>i=!1)),a.$set(r)},i(e){t||(S(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function N(l,a,i){let{label:t}=a,{value:o}=a,{inlineSmall:s=!1}=a;function e(n){o=n,i(0,o)}return l.$$set=n=>{"label"in n&&i(1,t=n.label),"value"in n&&i(0,o=n.value),"inlineSmall"in n&&i(2,s=n.inlineSmall)},[o,t,s,e]}class A extends c{constructor(a){super(),_(this,a,N,w,m,{label:1,value:0,inlineSmall:2})}}export{A as Y};
