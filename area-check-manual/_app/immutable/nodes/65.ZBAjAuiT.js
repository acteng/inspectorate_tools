import{s as f,e as p,a as d,c as u,m,g as _,i as l,n as $,f as i}from"../chunks/scheduler.ScMV3vmV.js";import{S as x,i as g,c as v,a as h,m as C,t as S,b as q,d as b}from"../chunks/index.DbrWxxqn.js";import{Q as A}from"../chunks/Question.FLQtS7QU.js";function P(r){let e,n="Surface of shared use facilities.",t,a,o="Mode: All Active Modes";return{c(){e=p("p"),e.textContent=n,t=d(),a=p("p"),a.textContent=o},l(s){e=u(s,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1dqr0pv"&&(e.textContent=n),t=_(s),a=u(s,"P",{"data-svelte-h":!0}),m(a)!=="svelte-15taagu"&&(a.textContent=o)},m(s,c){l(s,e,c),l(s,t,c),l(s,a,c)},p:$,d(s){s&&(i(e),i(t),i(a))}}}function y(r){let e,n;return e=new A({props:{idx:10,label:"Shared Use Surface",cases:[["2","<p>Bound and porous surface (e.g. Flexipave).</p>"],["1","<p>Bound, sealed surface such as tarmac (including tar, spray and chip).</p>"],["0","<p>Unbound or unsealed surface.</p>"],["N/A",""]],$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,a){C(e,t,a),n=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}class U extends x{constructor(e){super(),g(this,e,null,y,f,{})}}export{U as component};
