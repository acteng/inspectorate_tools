import{s as f,e as p,a as _,c as m,p as u,g as y,i as r,n as $,f as c}from"../chunks/scheduler.B5FfXhnD.js";import{S as d,i as g,c as h,a as x,m as v,t as C,b as D,d as j}from"../chunks/index.VeCIHQiF.js";import{Q as q}from"../chunks/Question.bEYediTy.js";function b(i){let t,a="Delay to cyclists at junctions.",e,s,o="Mode: Cycling";return{c(){t=p("p"),t.textContent=a,e=_(),s=p("p"),s.textContent=o},l(n){t=m(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-i8y7zg"&&(t.textContent=a),e=y(n),s=m(n,"P",{"data-svelte-h":!0}),u(s)!=="svelte-1ektema"&&(s.textContent=o)},m(n,l){r(n,t,l),r(n,e,l),r(n,s,l)},p:$,d(n){n&&(c(t),c(e),c(s))}}}function P(i){let t,a;return t=new q({props:{idx:13,label:"Cyclist Delay at Junctions",cases:[["2","<p>Delay is shorter than for motor vehicles or cyclists are not required to stop at junctions (e.g. bypass at signals).</p>"],["1","<p>Delay for cyclists at junctions is similar to delay for motor vehicles.</p>"],["0","<p>Delay for cyclists at junctions is greater than for motor vehicles.</p>"],["N/A",""]],$$slots:{default:[b]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,s){v(t,e,s),a=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){a||(C(t.$$.fragment,e),a=!0)},o(e){D(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}class w extends d{constructor(t){super(),g(this,t,null,P,f,{})}}export{w as component};
