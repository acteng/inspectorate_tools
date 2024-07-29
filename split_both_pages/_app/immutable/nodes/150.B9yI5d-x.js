import{s as f,e as c,a as d,c as m,m as u,g,i as l,n as _,f as p}from"../chunks/scheduler.BwufR8Ly.js";import{S as $,i as h,c as v,a as x,m as C,t as b,b as w,d as P}from"../chunks/index.BYv68wXE.js";import{Q as S}from"../chunks/Question.CmVqzEcJ.js";function q(i){let t,a="Delay to pedestrians at standalone signal crossings.",e,s,o="Mode: Walking / Wheeling";return{c(){t=c("p"),t.textContent=a,e=d(),s=c("p"),s.textContent=o},l(n){t=m(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-d7s6il"&&(t.textContent=a),e=g(n),s=m(n,"P",{"data-svelte-h":!0}),u(s)!=="svelte-1bs6336"&&(s.textContent=o)},m(n,r){l(n,t,r),l(n,e,r),l(n,s,r)},p:_,d(n){n&&(p(t),p(e),p(s))}}}function y(i){let t,a;return t=new S({props:{idx:16,label:"Pedestrian Delay at Standalone Signal Crossings",cases:[["2","<p>Crossings rest on the green for pedestrians.</p><p>Or, the time between pressing the button and the invitation to cross has been minimised as much as is safe to do so.</p>"],["1","<p>After pressing the button, pedestrians must wait up to 10 seconds for an invitation to cross.</p>"],["0","<p>After pressing the button, pedestrians must wait over 10 seconds for an invitation to cross.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,s){C(t,e,s),a=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){w(t.$$.fragment,e),a=!1},d(e){P(t,e)}}}class W extends ${constructor(t){super(),h(this,t,null,y,f,{})}}export{W as component};
