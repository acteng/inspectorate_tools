import{s as g,e as u,a as $,c as f,p as _,g as x,i as r,n as C,f as p}from"../chunks/scheduler.DGwhun8C.js";import{S as v,i as S,c as h,a as y,m as P,t as b,b as k,d as q}from"../chunks/index.B2vZYn3d.js";import{Q as A}from"../chunks/Question.C5PVm7PF.js";function Q(m){let t,a="Description: Steepest gradient due to underlying terrain.",e,s,i=`(For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).`,c,o,d="Mode: Walking / Wheeling / Cycling";return{c(){t=u("p"),t.textContent=a,e=$(),s=u("p"),s.textContent=i,c=$(),o=u("p"),o.textContent=d},l(n){t=f(n,"P",{"data-svelte-h":!0}),_(t)!=="svelte-a73eye"&&(t.textContent=a),e=x(n),s=f(n,"P",{"data-svelte-h":!0}),_(s)!=="svelte-jrkxsi"&&(s.textContent=i),c=x(n),o=f(n,"P",{"data-svelte-h":!0}),_(o)!=="svelte-galsl6"&&(o.textContent=d)},m(n,l){r(n,t,l),r(n,e,l),r(n,s,l),r(n,c,l),r(n,o,l)},p:C,d(n){n&&(p(t),p(e),p(s),p(c),p(o))}}}function W(m){let t,a;return t=new A({props:{idx:1,cases:[["2","<p>&lt;3%.</p>"],["1","<p>3-5%.</p>"],["0","<p>&gt;5%.</p>"]],$$slots:{default:[Q]},$$scope:{ctx:m}}}),{c(){h(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){P(t,e,s),a=!0},p(e,[s]){const i={};s&1&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}class F extends v{constructor(t){super(),S(this,t,null,W,g,{})}}export{F as component};
