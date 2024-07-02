import{s as d,e as c,a as m,c as f,m as u,g,i as l,n as h,f as p}from"../chunks/scheduler.BJ06nkRu.js";import{S as _,i as $,c as y,a as w,m as x,t as b,b as v,d as C}from"../chunks/index.Dmc4uC9p.js";import{Q as T}from"../chunks/Question.B6LOurGR.js";function P(r){let e,n="(How easy it is to get into the area as a pedestrian)",t,a,o=`A gateway for walking and wheeling is an intervention that enables safe and
    accessible access into an area for pedestrians. Typically, this will be a
    controlled crossing facility but it could also be another form of crossing,
    including bridges and underpasses.`;return{c(){e=c("p"),e.textContent=n,t=m(),a=c("p"),a.textContent=o},l(s){e=f(s,"P",{"data-svelte-h":!0}),u(e)!=="svelte-nehdgp"&&(e.textContent=n),t=g(s),a=f(s,"P",{"data-svelte-h":!0}),u(a)!=="svelte-1lkugd3"&&(a.textContent=o)},m(s,i){l(s,e,i),l(s,t,i),l(s,a,i)},p:h,d(s){s&&(p(e),p(t),p(a))}}}function k(r){let e,n;return e=new T({props:{idx:1,label:"Porosity - Walking and Wheeling",cases:[[4,"<p>The area is fully porous for pedestrians: More than one gateway per area side.</p>"],[3,"<p>The area is porous for pedestrians: One gateway per area side.</p>"],[2,"<p>The area is semi-porous for pedestrians: At least two gateways into the area.</p>"],[1,"<p>The area is partially porous for pedestrians: At least one gateway into the area.</p>"],[0,"<p>There are no gateways into the area</p>"]],$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){x(e,t,a),n=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}class S extends _{constructor(e){super(),$(this,e,null,k,d,{})}}export{S as component};
