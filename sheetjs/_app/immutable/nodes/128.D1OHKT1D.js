import{s as g,e as u,a as $,c as f,p as _,g as x,i as l,n as C,f as p}from"../chunks/scheduler.DGwhun8C.js";import{S as v,i as h,c as S,a as y,m as P,t as b,b as k,d as q}from"../chunks/index.B2vZYn3d.js";import{Q as A}from"../chunks/Question.BHOnWbbH.js";function M(m){let t,a="Description: Steepest gradient due to underlying terrain.",e,s,r=`(For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).`,c,o,d="Mode: Walking / Wheeling / Cycling";return{c(){t=u("p"),t.textContent=a,e=$(),s=u("p"),s.textContent=r,c=$(),o=u("p"),o.textContent=d},l(n){t=f(n,"P",{"data-svelte-h":!0}),_(t)!=="svelte-a73eye"&&(t.textContent=a),e=x(n),s=f(n,"P",{"data-svelte-h":!0}),_(s)!=="svelte-jrkxsi"&&(s.textContent=r),c=x(n),o=f(n,"P",{"data-svelte-h":!0}),_(o)!=="svelte-galsl6"&&(o.textContent=d)},m(n,i){l(n,t,i),l(n,e,i),l(n,s,i),l(n,c,i),l(n,o,i)},p:C,d(n){n&&(p(t),p(e),p(s),p(c),p(o))}}}function Q(m){let t,a;return t=new A({props:{idx:1,cases:[["2","<p>Less than 3%.</p>"],["1","<p>3-5%.</p>"],["0","<p>More than 5%.</p>"]],$$slots:{default:[M]},$$scope:{ctx:m}}}),{c(){S(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){P(t,e,s),a=!0},p(e,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}class D extends v{constructor(t){super(),h(this,t,null,Q,g,{})}}export{D as component};
