import{s as f,e as p,a as _,c as m,m as u,g as $,i as l,n as g,f as c}from"../chunks/scheduler.ScMV3vmV.js";import{S as d,i as h,c as v,a as x,m as C,t as y,b as P,d as q}from"../chunks/index.DbrWxxqn.js";import{Q as S}from"../chunks/Question.kXuRgVam.js";function b(i){let t,s="Consistency of provision for pedestrians and cyclists.",e,n,a="Mode: Walking / Wheeling / Cycling";return{c(){t=p("p"),t.textContent=s,e=_(),n=p("p"),n.textContent=a},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1a5hk8a"&&(t.textContent=s),e=$(o),n=m(o,"P",{"data-svelte-h":!0}),u(n)!=="svelte-galsl6"&&(n.textContent=a)},m(o,r){l(o,t,r),l(o,e,r),l(o,n,r)},p:g,d(o){o&&(c(t),c(e),c(n))}}}function k(i){let t,s;return t=new S({props:{idx:26,label:"Consistency of Route",cases:[["2","<p>Provision is consistent throughout the route.</p>"],["1","<p>Some changes of provision on the route.</p>"],["0","<p>Multiple changes of provision on the route.</p>"]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){C(t,e,n),s=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){P(t.$$.fragment,e),s=!1},d(e){q(t,e)}}}class w extends d{constructor(t){super(),h(this,t,null,k,f,{})}}export{w as component};
