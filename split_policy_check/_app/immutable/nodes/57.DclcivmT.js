import{s as f,e as r,a as h,c as u,m,g as _,i as l,n as d,f as c}from"../chunks/scheduler.ytQcc2rf.js";import{S as g,i as $,c as b,a as x,m as v,t as C,b as y,d as w}from"../chunks/index.D9yYtTfk.js";import{Q as A}from"../chunks/Question.BMxEa4DN.js";function P(p){let e,n="Presence of steps.",t,s,o="Mode: All Active Modes";return{c(){e=r("p"),e.textContent=n,t=h(),s=r("p"),s.textContent=o},l(a){e=u(a,"P",{"data-svelte-h":!0}),m(e)!=="svelte-18y7ghz"&&(e.textContent=n),t=_(a),s=u(a,"P",{"data-svelte-h":!0}),m(s)!=="svelte-15taagu"&&(s.textContent=o)},m(a,i){l(a,e,i),l(a,t,i),l(a,s,i)},p:d,d(a){a&&(c(e),c(t),c(s))}}}function S(p){let e,n;return e=new A({props:{idx:2,label:"Steps",cases:[["2","<p>A step-free route is possible at all public access points and along the path.</p>"],["1","<p>A step-free route is possible at key public access points (e.g. interfaces with public highway) and along the path, but steps are present at other public access points.</p>"],["0","<p>Steps are unavoidable at key public access points (e.g. interfaces with public highway).</p><p>Or, there are unavoidable steps along the path.</p>"]],$$slots:{default:[P]},$$scope:{ctx:p}}}),{c(){b(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){v(e,t,s),n=!0},p(t,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}class Q extends g{constructor(e){super(),$(this,e,null,S,f,{})}}export{Q as component};
