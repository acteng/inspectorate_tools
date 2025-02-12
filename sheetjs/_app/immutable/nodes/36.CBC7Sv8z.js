import{s as j,e as f,c as u,p as M,q as S,i as h,n as N,f as i,a as F,b as w,g as H,h as d,t as q,d as C}from"../chunks/scheduler.DGwhun8C.js";import{S as G,i as V,c as x,a as y,m as L,t as P,b as T,d as b}from"../chunks/index.B2vZYn3d.js";import"../chunks/index.BrRVCXyG.js";import"../chunks/SelectWithCustom.svelte_svelte_type_style_lang.BbWCP8Dy.js";import{E as I}from"../chunks/ExternalLink.C3Nx3-Hy.js";import"../chunks/paths.DVazDyvj.js";import"../chunks/entry.CgbVon97.js";import{Q as A}from"../chunks/Question.CkGiFufr.js";function Q(o){let e,t=`<h2>Does the application appropriately forecast all day trips to, from and
      within the site by walking, wheeling and cycling?</h2>`;return{c(){e=f("div"),e.innerHTML=t,this.h()},l(n){e=u(n,"DIV",{slot:!0,"data-svelte-h":!0}),M(e)!=="svelte-1dfc0vn"&&(e.innerHTML=t),this.h()},h(){S(e,"slot","description")},m(n,a){h(n,e,a)},p:N,d(n){n&&i(e)}}}function U(o){let e,t=`<p>Source data is not representative of the proposed development, is
      out-of-date or is confined to commuting journeys only.</p> <p>Forecasted trip generation is limited to motor vehicle traffic or peak
      hours only.</p> <p>Future year forecasts do not realise the potential of the development to
      support a greater number of walking, wheeling and cycling journeys or do
      not align with the government’s vision in Gear Change (or any adopted
      local targets) that half of all journeys in towns and cities shall be
      walked, wheeled or cycled by 2030.</p>`;return{c(){e=f("div"),e.innerHTML=t,this.h()},l(n){e=u(n,"DIV",{slot:!0,"data-svelte-h":!0}),M(e)!=="svelte-1h6h68w"&&(e.innerHTML=t),this.h()},h(){S(e,"slot","shortfalls")},m(n,a){h(n,e,a)},p:N,d(n){n&&i(e)}}}function z(o){let e;return{c(){e=q("National Planning Policy Framework: 108, 114, 117")},l(t){e=C(t,"National Planning Policy Framework: 108, 114, 117")},m(t,n){h(t,e,n)},d(t){t&&i(e)}}}function B(o){let e;return{c(){e=q(`Planning Practice Guidance: Travel Plans, Transport Assessments and
          Statements`)},l(t){e=C(t,`Planning Practice Guidance: Travel Plans, Transport Assessments and
          Statements`)},m(t,n){h(t,e,n)},d(t){t&&i(e)}}}function J(o){let e;return{c(){e=q("LTN 1/20: 14.3.6")},l(t){e=C(t,"LTN 1/20: 14.3.6")},m(t,n){h(t,e,n)},d(t){t&&i(e)}}}function K(o){let e,t,n,a,m,$,c,E,g,p,k;return a=new I({props:{href:"https://www.gov.uk/government/publications/national-planning-policy-framework--2",$$slots:{default:[z]},$$scope:{ctx:o}}}),c=new I({props:{href:"https://www.gov.uk/guidance/travel-plans-transport-assessments-and-statements",$$slots:{default:[B]},$$scope:{ctx:o}}}),p=new I({props:{href:"https://www.gov.uk/government/publications/cycle-infrastructure-design-ltn-120",$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){e=f("div"),t=f("ul"),n=f("li"),x(a.$$.fragment),m=F(),$=f("li"),x(c.$$.fragment),E=F(),g=f("li"),x(p.$$.fragment),this.h()},l(s){e=u(s,"DIV",{slot:!0});var r=w(e);t=u(r,"UL",{});var l=w(t);n=u(l,"LI",{});var _=w(n);y(a.$$.fragment,_),_.forEach(i),m=H(l),$=u(l,"LI",{});var v=w($);y(c.$$.fragment,v),v.forEach(i),E=H(l),g=u(l,"LI",{});var D=w(g);y(p.$$.fragment,D),D.forEach(i),l.forEach(i),r.forEach(i),this.h()},h(){S(e,"slot","guidance")},m(s,r){h(s,e,r),d(e,t),d(t,n),L(a,n,null),d(t,m),d(t,$),L(c,$,null),d(t,E),d(t,g),L(p,g,null),k=!0},p(s,r){const l={};r&1&&(l.$$scope={dirty:r,ctx:s}),a.$set(l);const _={};r&1&&(_.$$scope={dirty:r,ctx:s}),c.$set(_);const v={};r&1&&(v.$$scope={dirty:r,ctx:s}),p.$set(v)},i(s){k||(P(a.$$.fragment,s),P(c.$$.fragment,s),P(p.$$.fragment,s),k=!0)},o(s){T(a.$$.fragment,s),T(c.$$.fragment,s),T(p.$$.fragment,s),k=!1},d(s){s&&i(e),b(a),b(c),b(p)}}}function O(o){let e,t;return e=new A({props:{idx:1,$$slots:{guidance:[K],shortfalls:[U],description:[Q]},$$scope:{ctx:o}}}),{c(){x(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,a){L(e,n,a),t=!0},p(n,[a]){const m={};a&1&&(m.$$scope={dirty:a,ctx:n}),e.$set(m)},i(n){t||(P(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){b(e,n)}}}class ae extends G{constructor(e){super(),V(this,e,null,O,j,{})}}export{ae as component};
