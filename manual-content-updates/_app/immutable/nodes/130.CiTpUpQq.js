import{s as f,e as p,a as d,c as m,m as u,g as _,i as r,n as b,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as $,i as g,c as h,a as y,m as v,t as x,b as C,d as w}from"../chunks/index.Dmc4uC9p.js";import{Q as k}from"../chunks/Question.DGwDLfXm.js";function A(l){let e,a="Interactions at bus stops.",t,s,o="Mode: Walking / Wheeling / Cycling";return{c(){e=p("p"),e.textContent=a,t=d(),s=p("p"),s.textContent=o},l(n){e=m(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1l89lsn"&&(e.textContent=a),t=_(n),s=m(n,"P",{"data-svelte-h":!0}),u(s)!=="svelte-galsl6"&&(s.textContent=o)},m(n,i){r(n,e,i),r(n,t,i),r(n,s,i)},p:b,d(n){n&&(c(e),c(t),c(s))}}}function q(l){let e,a;return e=new k({props:{idx:4,label:"Bus Stops",cases:[["2","<p>At bus stops, cyclists are protected from buses and traffic and interactions between pedestrians and cyclists are likely to be low-level.</p>"],["1","<p>At bus stops, cyclists are protected from buses and traffic, but there are likely to be medium-level interactions between pedestrians and cyclists.</p>"],["0","<p>At bus stops, cyclists regularly have to wait behind buses or overtake them in general traffic lanes.</p><p>Or, there are likely to be high-level interactions between pedestrians and cyclists.</p>"],["N/A",""]],$$slots:{default:[A]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){v(e,t,s),a=!0},p(t,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){w(e,t)}}}class W extends ${constructor(e){super(),g(this,e,null,q,f,{})}}export{W as component};
