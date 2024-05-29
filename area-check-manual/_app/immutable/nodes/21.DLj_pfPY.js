import{s as r,e as i,c as m,m as c,i as h,n as l,f}from"../chunks/scheduler.DH2GUgXz.js";import{S as d,i as p,c as u,b as g,m as _,t as $,a as v,d as y}from"../chunks/index.BHUn3u8Z.js";import{Q as x}from"../chunks/Question.DWhsFR0M.js";function b(n){let e,a=`(How tight or loose the pedestrian network is. This is measured by the
    average distance between streets that have suitable pedestrian facilities as
    defined in the permability metric above).`;return{c(){e=i("p"),e.textContent=a},l(t){e=m(t,"P",{"data-svelte-h":!0}),c(e)!=="svelte-w722oe"&&(e.textContent=a)},m(t,s){h(t,e,s)},p:l,d(t){t&&f(e)}}}function w(n){let e,a;return e=new x({props:{idx:8,label:"Mesh Density - Cycling",cases:[[4,"The area has an average mesh density of 250m"],[3,"The area has an average mesh density of 251-400m"],[2,"The area has an average mesh density of 401-800"],[1,"The area has an average mesh density of 801-1400m"],[0,"The area has an average mesh density which exceeds 1400m."]],$$slots:{default:[b]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){_(e,t,s),a=!0},p(t,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){y(e,t)}}}class P extends d{constructor(e){super(),p(this,e,null,w,r,{})}}export{P as component};
