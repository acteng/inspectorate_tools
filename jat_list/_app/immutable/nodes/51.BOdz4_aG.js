import{s as f,e as c,a as _,c as p,p as u,g as d,i as m,n as $,f as r}from"../chunks/scheduler.BBS-fkhU.js";import{S as g,i as x,c as v,a as C,m as h,t as M,b as w,d as q}from"../chunks/index.B8H3ypVf.js";import{Q as y}from"../chunks/Question.Bl8si3xK.js";function A(i){let t,a="Delay to path users at signal crossings.",e,s,o="Mode: All Active Modes";return{c(){t=c("p"),t.textContent=a,e=_(),s=c("p"),s.textContent=o},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-s4vcpf"&&(t.textContent=a),e=d(n),s=p(n,"P",{"data-svelte-h":!0}),u(s)!=="svelte-15taagu"&&(s.textContent=o)},m(n,l){m(n,t,l),m(n,e,l),m(n,s,l)},p:$,d(n){n&&(r(t),r(e),r(s))}}}function P(i){let t,a;return t=new y({props:{idx:20,label:"Delay at Crossings",cases:[["2","<p>Maximum waiting time up to 40 seconds.</p>"],["1","<p>Maximum waiting time 40-60 seconds.</p>"],["0","<p>Maximum waiting time over 60 seconds.</p>"],["N/A",""]],$$slots:{default:[A]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,s){h(t,e,s),a=!0},p(e,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){a||(M(t.$$.fragment,e),a=!0)},o(e){w(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}class S extends g{constructor(t){super(),x(this,t,null,P,f,{})}}export{S as component};
