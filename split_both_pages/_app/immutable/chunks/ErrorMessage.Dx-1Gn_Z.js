import{s as v,E as f,i as h,n as d,f as c,e as m,a as g,t as k,c as _,b as E,m as M,g as b,d as x,p,h as o,j as y}from"./scheduler.BwufR8Ly.js";import{S as C,i as S}from"./index.BYv68wXE.js";function u(r){let t,e,s="Error:",a,l;return{c(){t=m("div"),e=m("span"),e.textContent=s,a=g(),l=k(r[0]),this.h()},l(n){t=_(n,"DIV",{class:!0});var i=E(t);e=_(i,"SPAN",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1gidx8i"&&(e.textContent=s),a=b(i),l=x(i,r[0]),i.forEach(c),this.h()},h(){p(e,"class","govuk-visually-hidden"),p(t,"class","govuk-error-message")},m(n,i){h(n,t,i),o(t,e),o(t,a),o(t,l)},p(n,i){i&1&&y(l,n[0])},d(n){n&&c(t)}}}function N(r){let t,e=r[0]&&u(r);return{c(){e&&e.c(),t=f()},l(s){e&&e.l(s),t=f()},m(s,a){e&&e.m(s,a),h(s,t,a)},p(s,[a]){s[0]?e?e.p(s,a):(e=u(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:d,o:d,d(s){s&&c(t),e&&e.d(s)}}}function j(r,t,e){let{errorMessage:s}=t;return r.$$set=a=>{"errorMessage"in a&&e(0,s=a.errorMessage)},[s]}class D extends C{constructor(t){super(),S(this,t,j,N,v,{errorMessage:0})}}export{D as E};
