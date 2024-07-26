import{s as h,e as p,a as f,c as u,m,g as b,i as c,n as d,f as l}from"../chunks/scheduler.ytQcc2rf.js";import{S as _,i as g,c as $,a as v,m as w,t as x,b as y,d as C}from"../chunks/index.D9yYtTfk.js";import{Q as P}from"../chunks/Question.vcwGLLuL.js";function q(r){let t,i="Presence and accessibility of barriers.",e,a,n="Mode: All Active Modes";return{c(){t=p("p"),t.textContent=i,e=f(),a=p("p"),a.textContent=n},l(s){t=u(s,"P",{"data-svelte-h":!0}),m(t)!=="svelte-1wwo0af"&&(t.textContent=i),e=b(s),a=u(s,"P",{"data-svelte-h":!0}),m(a)!=="svelte-15taagu"&&(a.textContent=n)},m(s,o){c(s,t,o),c(s,e,o),c(s,a,o)},p:d,d(s){s&&(l(t),l(e),l(a))}}}function A(r){let t,i;return t=new P({props:{idx:1,label:"Barriers",cases:[["2","<p>No public access points to the path have barriers that would inhibit legitimate users.</p>"],["1","<p>Key public access points (e.g. interfaces with public highway) do not have barriers, but other public access points have barriers that would inhibit legitimate users.</p>"],["0","<p>Key public access points (e.g. interfaces with public highway) to the path are restricted by barriers that would inhibit legitimate users.</p><p>Or, there are barriers along the path that inhibit legitimate users.</p>"]],$$slots:{default:[q]},$$scope:{ctx:r}}}),{c(){$(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,a){w(t,e,a),i=!0},p(e,[a]){const n={};a&1&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i(e){i||(x(t.$$.fragment,e),i=!0)},o(e){y(t.$$.fragment,e),i=!1},d(e){C(t,e)}}}class S extends _{constructor(t){super(),g(this,t,null,A,h,{})}}export{S as component};
