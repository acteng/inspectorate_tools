import{s as m,w as u,x as f}from"./scheduler.ytQcc2rf.js";import{S as c,i as _,e as d,c as g,a as b,m as v,t as S,b as p,d as h}from"./index.D9yYtTfk.js";import{R as Y}from"./Radio.BwqxTJTI.js";/* empty css                                            */import{p as k}from"./index.DC5zCmXD.js";function w(l){let n,i,t;function o(e){l[3](e)}let s={legend:l[1],choices:k(["Yes","No"]),inlineSmall:l[2]};return l[0]!==void 0&&(s.value=l[0]),n=new Y({props:s}),u.push(()=>d(n,"value",o)),{c(){g(n.$$.fragment)},l(e){b(n.$$.fragment,e)},m(e,a){v(n,e,a),t=!0},p(e,[a]){const r={};a&2&&(r.legend=e[1]),a&4&&(r.inlineSmall=e[2]),!i&&a&1&&(i=!0,r.value=e[0],f(()=>i=!1)),n.$set(r)},i(e){t||(S(n.$$.fragment,e),t=!0)},o(e){p(n.$$.fragment,e),t=!1},d(e){h(n,e)}}}function N(l,n,i){let{label:t}=n,{value:o}=n,{inlineSmall:s=!1}=n;function e(a){o=a,i(0,o)}return l.$$set=a=>{"label"in a&&i(1,t=a.label),"value"in a&&i(0,o=a.value),"inlineSmall"in a&&i(2,s=a.inlineSmall)},[o,t,s,e]}class A extends c{constructor(n){super(),_(this,n,N,w,m,{label:1,value:0,inlineSmall:2})}}export{A as Y};
