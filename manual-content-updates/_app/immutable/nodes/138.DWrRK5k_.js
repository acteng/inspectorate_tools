import{s as f,e as p,a as u,c as m,m as d,g as _,i as l,n as g,f as c}from"../chunks/scheduler.BJ06nkRu.js";import{S as $,i as x,c as C,a as v,m as h,t as P,b,d as q}from"../chunks/index.Dmc4uC9p.js";import{Q as w}from"../chunks/Question.DUHpW2Du.js";function S(i){let e,o="Alignment of crossings with desire lines.",t,s,a="Mode: Walking / Wheeling";return{c(){e=p("p"),e.textContent=o,t=u(),s=p("p"),s.textContent=a},l(n){e=m(n,"P",{"data-svelte-h":!0}),d(e)!=="svelte-3r4stw"&&(e.textContent=o),t=_(n),s=m(n,"P",{"data-svelte-h":!0}),d(s)!=="svelte-1bs6336"&&(s.textContent=a)},m(n,r){l(n,e,r),l(n,t,r),l(n,s,r)},p:g,d(n){n&&(c(e),c(t),c(s))}}}function A(i){let e,o;return e=new w({props:{idx:12,label:"Pedestrian Crossing Locations",cases:[["2","<p>All crossings are located on desire lines, and all desire lines are provided for.</p>"],["1","<p>Some crossings are located on desire lines.</p>"],["0","<p>No crossings are located on desire lines.</p>"]],$$slots:{default:[S]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){h(e,t,s),o=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){q(e,t)}}}class y extends ${constructor(e){super(),x(this,e,null,A,f,{})}}export{y as component};
