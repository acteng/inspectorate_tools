import{s as u,v as c,w as m}from"./scheduler.BJ06nkRu.js";import{S as f,i as _,e as p,c as b,a as v,m as g,t as d,b as h,d as S}from"./index.Dmc4uC9p.js";import{S as Y}from"./Select.Ceop3bia.js";/* empty css                                                       */import{p as k}from"./index.CR06Z_Hn.js";function w(a){let t,n,l;function s(e){a[2](e)}let o={label:a[1],emptyOption:!0,choices:k(["Yes","No"])};return a[0]!==void 0&&(o.value=a[0]),t=new Y({props:o}),c.push(()=>p(t,"value",s)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,i){g(t,e,i),l=!0},p(e,[i]){const r={};i&2&&(r.label=e[1]),!n&&i&1&&(n=!0,r.value=e[0],m(()=>n=!1)),t.$set(r)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){S(t,e)}}}function N(a,t,n){let{label:l}=t,{value:s}=t;function o(e){s=e,n(0,s)}return a.$$set=e=>{"label"in e&&n(1,l=e.label),"value"in e&&n(0,s=e.value)},[s,l,o]}class z extends f{constructor(t){super(),_(this,t,N,w,u,{label:1,value:0})}}export{z as Y};
