import{s as g,e as u,a as $,c as f,m as d,g as x,i,n as C,f as p}from"../chunks/scheduler.V-ByFQ7u.js";import{S as v,i as b,c as S,a as h,m as P,t as k,b as q,d as y}from"../chunks/index.Zcf2TLuh.js";import{Q as A}from"../chunks/Question.BMyfCw7I.js";function Q(c){let t,a="Steepest gradient due to underlying terrain.",e,s,l=`(For gradients at ramps, dropped kerbs and cambers, see metrics SA14 and
    SA15).`,m,o,_="Mode: Walking / Wheeling / Cycling";return{c(){t=u("p"),t.textContent=a,e=$(),s=u("p"),s.textContent=l,m=$(),o=u("p"),o.textContent=_},l(n){t=f(n,"P",{"data-svelte-h":!0}),d(t)!=="svelte-556bs6"&&(t.textContent=a),e=x(n),s=f(n,"P",{"data-svelte-h":!0}),d(s)!=="svelte-jrkxsi"&&(s.textContent=l),m=x(n),o=f(n,"P",{"data-svelte-h":!0}),d(o)!=="svelte-galsl6"&&(o.textContent=_)},m(n,r){i(n,t,r),i(n,e,r),i(n,s,r),i(n,m,r),i(n,o,r)},p:C,d(n){n&&(p(t),p(e),p(s),p(m),p(o))}}}function W(c){let t,a;return t=new A({props:{idx:1,label:"Gradient",cases:[["2","<p><3%.</p>"],["1","<p>3-5%.</p>"],["0","<p>>5%.</p>"]],$$slots:{default:[Q]},$$scope:{ctx:c}}}),{c(){S(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,s){P(t,e,s),a=!0},p(e,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){q(t.$$.fragment,e),a=!1},d(e){y(t,e)}}}class G extends v{constructor(t){super(),b(this,t,null,W,g,{})}}export{G as component};
