import{s as f,e as p,a as _,c as m,m as u,g as d,i as c,n as $,f as r}from"../chunks/scheduler.ytQcc2rf.js";import{S as g,i as y,c as h,a as v,m as C,t as x,b as w,d as b}from"../chunks/index.D9yYtTfk.js";import{Q as k}from"../chunks/Question.dH-vBBfF.js";function q(i){let t,o="Delay to cyclists on links.",e,s,a="Mode: Cycling";return{c(){t=p("p"),t.textContent=o,e=_(),s=p("p"),s.textContent=a},l(n){t=m(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-109o9i4"&&(t.textContent=o),e=d(n),s=m(n,"P",{"data-svelte-h":!0}),u(s)!=="svelte-1ektema"&&(s.textContent=a)},m(n,l){c(n,t,l),c(n,e,l),c(n,s,l)},p:$,d(n){n&&(r(t),r(e),r(s))}}}function P(i){let t,o;return t=new k({props:{idx:14,label:"Cyclist Delay on Links",cases:[["2","<p>Cyclists can always progress without being delayed by other vehicles.</p>"],["1","<p>Cyclists have some opportunities to pass slower moving vehicles (including other cyclists).</p>"],["0","<p>Cyclists have no opportunities to pass slower moving vehicles (including other cyclists).</p>"]],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,s){C(t,e,s),o=!0},p(e,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){o||(x(t.$$.fragment,e),o=!0)},o(e){w(t.$$.fragment,e),o=!1},d(e){b(t,e)}}}class L extends g{constructor(t){super(),y(this,t,null,P,f,{})}}export{L as component};
