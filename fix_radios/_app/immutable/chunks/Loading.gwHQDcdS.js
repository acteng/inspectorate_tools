import{s as S,D as E,i as D,n as b,f as l,e as f,a as y,t as I,c as h,b as _,g as V,d as q,q as v,h as d,j as L}from"./scheduler.mGr_ZlpV.js";import{S as R,i as j}from"./index.rGMSHTnh.js";/* empty css                                            */function k(i){let a,e,s,t,r,c,m;return{c(){a=f("div"),e=f("div"),s=f("progress"),t=y(),r=f("div"),c=f("h3"),m=I(i[0]),this.h()},l(o){a=h(o,"DIV",{class:!0});var n=_(a);e=h(n,"DIV",{class:!0});var p=_(e);s=h(p,"PROGRESS",{}),_(s).forEach(l),t=V(p),r=h(p,"DIV",{class:!0});var u=_(r);c=h(u,"H3",{});var g=_(c);m=q(g,i[0]),g.forEach(l),u.forEach(l),p.forEach(l),n.forEach(l),this.h()},h(){v(r,"class","govuk-prose"),v(e,"class","inner svelte-ho9d42"),v(a,"class","outer svelte-ho9d42")},m(o,n){D(o,a,n),d(a,e),d(e,s),d(e,t),d(e,r),d(r,c),d(c,m)},p(o,n){n&1&&L(m,o[0])},d(o){o&&l(a)}}}function C(i){let a,e=i[0]&&k(i);return{c(){e&&e.c(),a=E()},l(s){e&&e.l(s),a=E()},m(s,t){e&&e.m(s,t),D(s,a,t)},p(s,[t]){s[0]?e?e.p(s,t):(e=k(s),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:b,o:b,d(s){s&&l(a),e&&e.d(s)}}}function G(i,a,e){let{loading:s}=a;return i.$$set=t=>{"loading"in t&&e(0,s=t.loading)},[s]}class P extends R{constructor(a){super(),j(this,a,G,C,S,{loading:0})}}export{P as L};
