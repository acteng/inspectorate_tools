import{s as u,e as p,a as _,c as m,m as f,g,i as l,n as v,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as $,i as h,c as d,a as x,m as C,t as D,b as y,d as q}from"../chunks/index.Dmc4uC9p.js";import{Q as P}from"../chunks/Question.DTLHOEq-.js";function b(i){let t,s="Deviation of cycle route against straight line or shortest alternative.",e,a,o="Mode: Cycling";return{c(){t=p("p"),t.textContent=s,e=_(),a=p("p"),a.textContent=o},l(n){t=m(n,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1r6uswo"&&(t.textContent=s),e=g(n),a=m(n,"P",{"data-svelte-h":!0}),f(a)!=="svelte-1ektema"&&(a.textContent=o)},m(n,r){l(n,t,r),l(n,e,r),l(n,a,r)},p:v,d(n){n&&(c(t),c(e),c(a))}}}function w(i){let t,s;return t=new P({props:{idx:11,label:"Deviation of Cycle Route",cases:[["2","<p>Deviation factor against straight line or shortest alternative less than 1.2.</p>"],["1","<p>Deviation factor against straight line or shortest alternative 1.2-1.4.</p>"],["0","<p>Deviation factor against straight line or shortest alternative greater than 1.4.</p>"]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){d(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){s||(D(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){q(t,e)}}}class M extends ${constructor(t){super(),h(this,t,null,w,u,{})}}export{M as component};
