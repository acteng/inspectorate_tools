import{s as f,e as p,a as d,c as m,m as u,g as _,i,n as $,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as g,i as h,c as x,a as b,m as C,t as v,b as y,d as k}from"../chunks/index.Dmc4uC9p.js";import{Q as q}from"../chunks/Question.wDS3zcA8.js";function M(l){let t,s="Type of cycling surface material.",e,n,o="Mode: Cycling";return{c(){t=p("p"),t.textContent=s,e=d(),n=p("p"),n.textContent=o},l(a){t=m(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-k8pfj2"&&(t.textContent=s),e=_(a),n=m(a,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1ektema"&&(n.textContent=o)},m(a,r){i(a,t,r),i(a,e,r),i(a,n,r)},p:$,d(a){a&&(c(t),c(e),c(n))}}}function P(l){let t,s;return t=new q({props:{idx:8,label:"Cycling Surface Material",cases:[["2","<p>Machine-laid asphalt or smooth and firm blocks undisturbed by turning vehicles.</p>"],["1","<p>Hand-laid asphalt or smooth blocks.</p>"],["0","<p>Unsurfaced/unbound or unstable blocks/sets.</p>"]],$$slots:{default:[M]},$$scope:{ctx:l}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,n){C(t,e,n),s=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}class w extends g{constructor(t){super(),h(this,t,null,P,f,{})}}export{w as component};
