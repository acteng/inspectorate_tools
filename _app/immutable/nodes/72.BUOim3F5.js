import{s as f,e as p,a as u,c as m,m as d,g as _,i as l,n as $,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as g,i as x,c as v,a as C,m as h,t as A,b as q,d as w}from"../chunks/index.Dmc4uC9p.js";import{Q as P}from"../chunks/Question.BUY0haol.js";function S(i){let e,o="Alignment of crossings with desire lines.",t,s,a="Mode: All Active Modes";return{c(){e=p("p"),e.textContent=o,t=u(),s=p("p"),s.textContent=a},l(n){e=m(n,"P",{"data-svelte-h":!0}),d(e)!=="svelte-3r4stw"&&(e.textContent=o),t=_(n),s=m(n,"P",{"data-svelte-h":!0}),d(s)!=="svelte-15taagu"&&(s.textContent=a)},m(n,r){l(n,e,r),l(n,t,r),l(n,s,r)},p:$,d(n){n&&(c(e),c(t),c(s))}}}function b(i){let e,o;return e=new P({props:{idx:19,label:"Crossing Locations",cases:[["2","<p>All crossings are located on desire lines, and all desire lines are provided for.</p>"],["1","<p>Some crossings are located on desire lines.</p>"],["0","<p>No crossings are located on desire lines.</p>"],["N/A",""]],$$slots:{default:[S]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,s){h(e,t,s),o=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){o||(A(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){w(e,t)}}}class y extends g{constructor(e){super(),x(this,e,null,b,f,{})}}export{y as component};
