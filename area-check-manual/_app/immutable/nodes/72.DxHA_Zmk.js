import{s as u,e as p,a as g,c as m,m as f,g as _,i as l,n as h,f as c}from"../chunks/scheduler.ScMV3vmV.js";import{S as $,i as d,c as v,a as x,m as C,t as b,b as q,d as D}from"../chunks/index.DbrWxxqn.js";import{Q as P}from"../chunks/Question.4T29qzev.js";function A(o){let t,s="Extent to which the path deviates against the straight line.",e,a,i="Mode: All Active Modes";return{c(){t=p("p"),t.textContent=s,e=g(),a=p("p"),a.textContent=i},l(n){t=m(n,"P",{"data-svelte-h":!0}),f(t)!=="svelte-q4bbnj"&&(t.textContent=s),e=_(n),a=m(n,"P",{"data-svelte-h":!0}),f(a)!=="svelte-15taagu"&&(a.textContent=i)},m(n,r){l(n,t,r),l(n,e,r),l(n,a,r)},p:h,d(n){n&&(c(t),c(e),c(a))}}}function S(o){let t,s;return t=new P({props:{idx:17,label:"Deviation of Path Against Straight Line",cases:[["2","<p>Deviation factor against straight line less than 1.2.</p>"],["1","<p>Deviation factor against straight line 1.2-1.4.</p>"],["0","<p>Deviation factor against straight line greater than 1.4.</p>"]],$$slots:{default:[A]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,[a]){const i={};a&1&&(i.$$scope={dirty:a,ctx:e}),t.$set(i)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){q(t.$$.fragment,e),s=!1},d(e){D(t,e)}}}class j extends ${constructor(t){super(),d(this,t,null,S,u,{})}}export{j as component};
