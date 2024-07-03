import{s as u,e as a,c as s,m as r,o as l,i as c,n as p,f as d}from"../chunks/scheduler.ScMV3vmV.js";import{S as m,i as f,c as g,a as v,m as _,t as y,b as $,d as w}from"../chunks/index.DbrWxxqn.js";import{Q as T}from"../chunks/Question.DKCAnIMz.js";function x(i){let t,n=`<p>Does the application appropriately forecast all day trips to, from and
      within the site by walking, wheeling and cycling?</p>`;return{c(){t=a("div"),t.innerHTML=n,this.h()},l(e){t=s(e,"DIV",{slot:!0,"data-svelte-h":!0}),r(t)!=="svelte-vyd3hv"&&(t.innerHTML=n),this.h()},h(){l(t,"slot","description")},m(e,o){c(e,t,o)},p,d(e){e&&d(t)}}}function L(i){let t,n=`<p>Source data is not representative of the proposed development, is
      out-of-date or is confined to commuting journeys only.</p> <p>Forecasted trip generation is limited to motor vehicle traffic or peak
      hours only.</p> <p>Future year forecasts do not realise the potential of the development to
      support a greater number of walking, wheeling and cycling journeys or do
      not align with the government’s vision in Gear Change (or any adopted
      local targets) that half of all journeys in towns and cities shall be
      walked, wheeled or cycled by 2030.</p>`;return{c(){t=a("div"),t.innerHTML=n,this.h()},l(e){t=s(e,"DIV",{slot:!0,"data-svelte-h":!0}),r(t)!=="svelte-1h6h68w"&&(t.innerHTML=n),this.h()},h(){l(t,"slot","shortfalls")},m(e,o){c(e,t,o)},p,d(e){e&&d(t)}}}function b(i){let t,n=`<ul><li>National Planning Policy Framework: 108, 114, 117</li> <li>Planning Policy Guidance: Travel Plans, Transport Assessments and
        Statements</li> <li>LTN 1/20: 14.3.6</li></ul>`;return{c(){t=a("div"),t.innerHTML=n,this.h()},l(e){t=s(e,"DIV",{slot:!0,"data-svelte-h":!0}),r(t)!=="svelte-1lzzn16"&&(t.innerHTML=n),this.h()},h(){l(t,"slot","guidance")},m(e,o){c(e,t,o)},p,d(e){e&&d(t)}}}function H(i){let t,n;return t=new T({props:{idx:1,label:"Trip generation and assignment",$$slots:{guidance:[b],shortfalls:[L],description:[x]},$$scope:{ctx:i}}}),{c(){g(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){_(t,e,o),n=!0},p(e,[o]){const h={};o&1&&(h.$$scope={dirty:o,ctx:e}),t.$set(h)},i(e){n||(y(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}class C extends m{constructor(t){super(),f(this,t,null,H,u,{})}}export{C as component};
