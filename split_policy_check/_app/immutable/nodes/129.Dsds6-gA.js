import{s as u,e as m,a as d,c as p,m as f,g as _,i as c,n as $,f as l}from"../chunks/scheduler.ytQcc2rf.js";import{S as g,i as v,c as x,a as h,m as C,t as b,b as k,d as y}from"../chunks/index.D9yYtTfk.js";import{Q as P}from"../chunks/Question.BnpA6f4u.js";function q(r){let t,o="Effective width next to tram line on a straight run or a curve",e,n,s="Mode: Cycling";return{c(){t=m("p"),t.textContent=o,e=d(),n=m("p"),n.textContent=s},l(a){t=p(a,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1515gzv"&&(t.textContent=o),e=_(a),n=p(a,"P",{"data-svelte-h":!0}),f(n)!=="svelte-1ektema"&&(n.textContent=s)},m(a,i){c(a,t,i),c(a,e,i),c(a,n,i)},p:$,d(a){a&&(l(t),l(e),l(n))}}}function w(r){let t,o;return t=new P({props:{idx:12,label:"Effective Width next to Tram Lines",cases:[["2","<p>Physical protection is provided for cyclists.</p>"],["1","<p>>2.4m from tramline edge to kerb.</p>"],["0","<p>2.4m from tramline edge to kerb.</p>"],["C","<p><2.4m from tramline edge to kerb on a straight run.</p><p>Insufficient clearance on a curve.</p>"],["N/A",""]],$$slots:{default:[q]},$$scope:{ctx:r}}}),{c(){x(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){C(t,e,n),o=!0},p(e,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){y(t,e)}}}class z extends g{constructor(t){super(),v(this,t,null,w,u,{})}}export{z as component};
