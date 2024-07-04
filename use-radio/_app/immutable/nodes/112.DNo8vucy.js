import{s as u,e as p,a as f,c as m,p as d,g,i as c,n as _,f as l}from"../chunks/scheduler.mGr_ZlpV.js";import{S as y,i as $,c as x,b as h,m as v,t as C,a as w,d as P}from"../chunks/index.rGMSHTnh.js";import{Q as b}from"../chunks/Question.zXy2Tc-U.js";function j(i){let t,s=`Pedestrian and cyclist conflict with motor traffic at side roads/priority
    junctions`,e,n,o="Mode: Walking / Wheeling / Cycling";return{c(){t=p("p"),t.textContent=s,e=f(),n=p("p"),n.textContent=o},l(a){t=m(a,"P",{"data-svelte-h":!0}),d(t)!=="svelte-16z4xt2"&&(t.textContent=s),e=g(a),n=m(a,"P",{"data-svelte-h":!0}),d(n)!=="svelte-galsl6"&&(n.textContent=o)},m(a,r){c(a,t,r),c(a,e,r),c(a,n,r)},p:_,d(a){a&&(l(t),l(e),l(n))}}}function k(i){let t,s;return t=new b({props:{idx:1,label:"Conflict at Side Roads and Priority Junctions",cases:[["2","<p>Side roads/priority junctions have entry treatments that offer greater protection for  pedestrian and cycle movements (e.g. exit only, continuous footways, zebra/parallel crossings as appropriate to context).</p>"],["1","<p><2,500vpd cut across main walking, wheeling or cycling streams and side roads and priority junctions have entry treatments.</p>"],["0","<p><2,500vpd cut across main walking, wheeling or cycling streams, but side roads and priority junctions are untreated.</p>"],["C","<p>>2,500vpd cut across main walking, wheeling or cycling streams.</p>"],["N/A",""]],$$slots:{default:[j]},$$scope:{ctx:i}}}),{c(){x(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){v(t,e,n),s=!0},p(e,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(C(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}class Q extends y{constructor(t){super(),$(this,t,null,k,u,{})}}export{Q as component};
