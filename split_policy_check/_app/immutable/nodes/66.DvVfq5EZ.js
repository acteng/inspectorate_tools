import{s as u,e as m,a as d,c,m as f,g,i as p,n as h,f as l}from"../chunks/scheduler.ytQcc2rf.js";import{S as _,i as $,c as x,a as v,m as w,t as C,b as T,d as P}from"../chunks/index.D9yYtTfk.js";import{Q as b}from"../chunks/Question.C0e6xEQQ.js";function k(i){let e,s="Type of walking/wheeling surface material.",t,a,o="Mode: Walking / Wheeling";return{c(){e=m("p"),e.textContent=s,t=d(),a=m("p"),a.textContent=o},l(n){e=c(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-nm97qk"&&(e.textContent=s),t=g(n),a=c(n,"P",{"data-svelte-h":!0}),f(a)!=="svelte-1bs6336"&&(a.textContent=o)},m(n,r){p(n,e,r),p(n,t,r),p(n,a,r)},p:h,d(n){n&&(l(e),l(t),l(a))}}}function q(i){let e,s;return e=new b({props:{idx:11,label:"Walking and Wheeling Surface",cases:[["2","<p>The surface is high-grip (i.e. PTV of 35 or higher).</p><p>If paved, the joints are mortared.</p>"],["1","<p>The surface is medium-grip (i.e. PTV of between 25 and 35).</p><p>If paved, the joints are 5mm or less.</p>"],["0","<p>The surface is low-grip (i.e. PTV of 25 or lower).</p><p>If paved, the joints are wider than 5mm.</p>"],["N/A",""]],$$slots:{default:[k]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){w(e,t,a),s=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}class S extends _{constructor(e){super(),$(this,e,null,q,u,{})}}export{S as component};
