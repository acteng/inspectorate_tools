import{s as g,n as C,d as r,i as p,c as u,q as f,g as $,h as d,j as x}from"../chunks/hklQk-fT.js";import{S as v,i as h,d as S,t as q,a as y,m as P,c as b,b as k}from"../chunks/4RGf_tlt.js";import{Q as j}from"../chunks/BRBgD5t_.js";function A(m){let t,a="Description: Steepest gradient due to underlying terrain.",e,s,i=`(For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).`,c,o,_="Mode: Walking / Wheeling / Cycling";return{c(){t=d("p"),t.textContent=a,e=x(),s=d("p"),s.textContent=i,c=x(),o=d("p"),o.textContent=_},l(n){t=u(n,"P",{"data-svelte-h":!0}),f(t)!=="svelte-a73eye"&&(t.textContent=a),e=$(n),s=u(n,"P",{"data-svelte-h":!0}),f(s)!=="svelte-jrkxsi"&&(s.textContent=i),c=$(n),o=u(n,"P",{"data-svelte-h":!0}),f(o)!=="svelte-galsl6"&&(o.textContent=_)},m(n,l){p(n,t,l),p(n,e,l),p(n,s,l),p(n,c,l),p(n,o,l)},p:C,d(n){n&&(r(t),r(e),r(s),r(c),r(o))}}}function Q(m){let t,a;return t=new j({props:{idx:1,cases:[["2","<p>&lt;3%.</p>"],["1","<p>3-5%.</p>"],["0","<p>&gt;5%.</p>"]],$$slots:{default:[A]},$$scope:{ctx:m}}}),{c(){k(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){P(t,e,s),a=!0},p(e,[s]){const i={};s&1&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){S(t,e)}}}class F extends v{constructor(t){super(),h(this,t,null,Q,g,{})}}export{F as component};
