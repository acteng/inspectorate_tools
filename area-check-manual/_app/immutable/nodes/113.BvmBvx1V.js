import{s as d,e as m,a as f,c as p,m as u,g,i as l,n as _,f as c}from"../chunks/scheduler.ScMV3vmV.js";import{S as $,i as v,c as h,a as x,m as C,t as b,b as y,d as w}from"../chunks/index.DbrWxxqn.js";import{Q as j}from"../chunks/Question.CdSR0rZs.js";function P(i){let t,o=`Pedestrian and cyclist conflict with motor traffic at roundabouts and
    signal-controlled junctions`,e,n,s="Mode: Walking / Wheeling / Cycling";return{c(){t=m("p"),t.textContent=o,e=f(),n=m("p"),n.textContent=s},l(a){t=p(a,"P",{"data-svelte-h":!0}),u(t)!=="svelte-dotgur"&&(t.textContent=o),e=g(a),n=p(a,"P",{"data-svelte-h":!0}),u(n)!=="svelte-galsl6"&&(n.textContent=s)},m(a,r){l(a,t,r),l(a,e,r),l(a,n,r)},p:_,d(a){a&&(c(t),c(e),c(n))}}}function q(i){let t,o;return t=new j({props:{idx:2,label:"Conflict at Roundabouts and Signal Junctions",cases:[["2","<p>All pedestrian and cyclist movements are separated from all motor traffic movements at roundabouts and/or signal controlled junctions.</p>"],["1","<p>The principal pedestrian and cyclist movements are separated from motor traffic movements at roundabouts and/or signal controlled junctions.</p>"],["0","<p>The principal pedestrian and/or cyclist movements are in conflict with motor traffic movements at roundabouts and/or signal controlled junctions.</p>"],["C","<p>>2,500vpd cut across main walking, wheeling or cycling streams.</p>"],["N/A",""]],$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){C(t,e,n),o=!0},p(e,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){o||(b(t.$$.fragment,e),o=!0)},o(e){y(t.$$.fragment,e),o=!1},d(e){w(t,e)}}}class Q extends ${constructor(t){super(),v(this,t,null,q,d,{})}}export{Q as component};
