import{s as f,e as l,c as h,p as b,q as u,i as g,n as c,f as o,t as x,b as v,d as y,h as d,j as D}from"./scheduler.DGwhun8C.js";import{S as m,i as k}from"./index.B2vZYn3d.js";import"./index.BOyfGRnV.js";function S(n){let e,a=`<p class="govuk-phase-banner__content" style="margin-bottom: 0px"><strong class="govuk-tag govuk-phase-banner__content__tag">Alpha</strong> <span class="govuk-phase-banner__text">This is a new service. Contact <a href="mailto:dcarlino@turing.ac.uk">Dustin</a>
      and
      <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
      with any feedback.</span></p>`;return{c(){e=l("div"),e.innerHTML=a,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-174yg1f"&&(e.innerHTML=a),this.h()},h(){u(e,"class","govuk-phase-banner")},m(t,s){g(t,e,s)},p:c,i:c,o:c,d(t){t&&o(e)}}}class I extends m{constructor(e){super(),k(this,e,null,S,f,{})}}function w(n){let e,a,t,s;return{c(){e=l("div"),a=l("div"),t=l("b"),s=x(n[0]),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=v(e);a=h(i,"DIV",{class:!0});var p=v(a);t=h(p,"B",{});var _=v(t);s=y(_,n[0]),_.forEach(o),p.forEach(o),i.forEach(o),this.h()},h(){u(a,"class","govuk-width-container govuk-caption-xl"),u(e,"class","service-header svelte-1ox82h0")},m(r,i){g(r,e,i),d(e,a),d(a,t),d(t,s)},p(r,[i]){i&1&&D(s,r[0])},i:c,o:c,d(r){r&&o(e)}}}function A(n,e,a){let{service:t}=e;return n.$$set=s=>{"service"in s&&a(0,t=s.service)},[t]}class T extends m{constructor(e){super(),k(this,e,A,w,f,{service:0})}}export{I as A,T as S};
