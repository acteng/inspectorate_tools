import{s as r,e as i,c as m,p as c,i as h,n as l,f}from"../chunks/scheduler.BBS-fkhU.js";import{S as d,i as p,c as u,a as g,m as _,t as $,b as v,d as y}from"../chunks/index.B8H3ypVf.js";import{Q as x}from"../chunks/Question.CI3P61lo.js";function b(n){let e,a=`(How tight or loose the pedestrian network is. This is measured by the
    average distance between streets that have suitable pedestrian facilities as
    defined in the permability metric above).`;return{c(){e=i("p"),e.textContent=a},l(t){e=m(t,"P",{"data-svelte-h":!0}),c(e)!=="svelte-w722oe"&&(e.textContent=a)},m(t,s){h(t,e,s)},p:l,d(t){t&&f(e)}}}function w(n){let e,a;return e=new x({props:{idx:7,label:"Mesh Density - Walking and Wheeling",cases:[[4,"The area has an average mesh density of 100m"],[3,"The area has an average mesh density of 101-250m"],[2,"The area has an average mesh density of 251-400m"],[1,"The area has an average mesh density of 401-500m"],[0,"The area has an average mesh density which exceeds 500m."]],$$slots:{default:[b]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),a=!0},p(t,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){y(e,t)}}}class k extends d{constructor(e){super(),p(this,e,null,w,r,{})}}export{k as component};
