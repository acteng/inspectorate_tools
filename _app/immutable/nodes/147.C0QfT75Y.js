import{s as f,e as p,a as _,c,m as u,g as $,i as r,n as d,f as m}from"../chunks/scheduler.NGc5rx4B.js";import{S as x,i as g,c as h,a as C,m as v,t as b,b as P,d as q}from"../chunks/index.CXr-pTxM.js";import{Q as S}from"../chunks/Question.D92AUWBx.js";function w(l){let t,a="Distance between shelter points.",e,n,o="Mode: Walking / Wheeling";return{c(){t=p("p"),t.textContent=a,e=_(),n=p("p"),n.textContent=o},l(s){t=c(s,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1819my7"&&(t.textContent=a),e=$(s),n=c(s,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1bs6336"&&(n.textContent=o)},m(s,i){r(s,t,i),r(s,e,i),r(s,n,i)},p:d,d(s){s&&(m(t),m(e),m(n))}}}function y(l){let t,a;return t=new S({props:{idx:19,label:"Places to Shelter",cases:[["2","<p><50m.</p>"],["1","<p>50-150m.</p>"],["0","<p>>150m.</p>"]],$$slots:{default:[w]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){v(t,e,n),a=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}class D extends x{constructor(t){super(),g(this,t,null,y,f,{})}}export{D as component};
