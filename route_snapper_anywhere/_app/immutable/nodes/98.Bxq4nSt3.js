import{s as g,e as u,a as $,b as d,g as f,c as x,i,n as C,d as p}from"../chunks/scheduler.Cns_Y-fU.js";import{S as v,i as b,c as S,a as h,m as P,t as k,b as q,d as y}from"../chunks/index.B1sdSzhI.js";import{Q as A}from"../chunks/Question.KUJqPZro.js";function Q(m){let t,a="Steepest gradient due to underlying terrain.",e,s,l=`(For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).`,c,o,_="Mode: Walking / Wheeling / Cycling";return{c(){t=u("p"),t.textContent=a,e=$(),s=u("p"),s.textContent=l,c=$(),o=u("p"),o.textContent=_},l(n){t=d(n,"P",{"data-svelte-h":!0}),f(t)!=="svelte-556bs6"&&(t.textContent=a),e=x(n),s=d(n,"P",{"data-svelte-h":!0}),f(s)!=="svelte-jrkxsi"&&(s.textContent=l),c=x(n),o=d(n,"P",{"data-svelte-h":!0}),f(o)!=="svelte-galsl6"&&(o.textContent=_)},m(n,r){i(n,t,r),i(n,e,r),i(n,s,r),i(n,c,r),i(n,o,r)},p:C,d(n){n&&(p(t),p(e),p(s),p(c),p(o))}}}function W(m){let t,a;return t=new A({props:{idx:1,label:"Gradient",cases:[["2","<p><3%.</p>"],["1","<p>3-5%.</p>"],["0","<p>>5%.</p>"]],$$slots:{default:[Q]},$$scope:{ctx:m}}}),{c(){S(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,s){P(t,e,s),a=!0},p(e,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){y(t,e)}}}class G extends v{constructor(t){super(),b(this,t,null,W,g,{})}}export{G as component};
