import{s as C,u as A,e as h,t as W,a as j,c as b,b as g,k as q,f as d,d as z,h as _,i as D,j as m,o as J,v as I,w as T,x as w,I as k,J as E,z as K,K as S,D as L}from"./scheduler.B4aGvyXo.js";import{S as B,i as M,t as N,b as U}from"./index.DunYOQMF.js";function O(o,t){const n={},i={},r={$$scope:1};let f=o.length;for(;f--;){const e=o[f],l=t[f];if(l){for(const u in e)u in l||(i[u]=1);for(const u in l)r[u]||(n[u]=l[u],r[u]=1);o[f]=l}else for(const u in e)r[u]=1}for(const e in i)e in n||(n[e]=void 0);return n}function P(o){let t,n,i,r,f,e,l;const u=o[3].default,s=A(u,o,o[2],null);return{c(){t=h("details"),n=h("summary"),i=h("span"),r=W(o[0]),f=j(),e=h("div"),s&&s.c(),this.h()},l(a){t=b(a,"DETAILS",{class:!0,"data-module":!0});var c=g(t);n=b(c,"SUMMARY",{class:!0});var v=g(n);i=b(v,"SPAN",{class:!0});var p=g(i);r=q(p,o[0]),p.forEach(d),v.forEach(d),f=z(c),e=b(c,"DIV",{class:!0});var y=g(e);s&&s.l(y),y.forEach(d),c.forEach(d),this.h()},h(){_(i,"class","govuk-details__summary-text"),_(n,"class","govuk-details__summary"),_(e,"class","govuk-details__text"),t.open=o[1],_(t,"class","govuk-details"),_(t,"data-module","govuk-details")},m(a,c){D(a,t,c),m(t,n),m(n,i),m(i,r),m(t,f),m(t,e),s&&s.m(e,null),l=!0},p(a,[c]){(!l||c&1)&&J(r,a[0]),s&&s.p&&(!l||c&4)&&I(s,u,a,a[2],l?w(u,a[2],c,null):T(a[2]),null),(!l||c&2)&&(t.open=a[1])},i(a){l||(N(s,a),l=!0)},o(a){U(s,a),l=!1},d(a){a&&d(t),s&&s.d(a)}}}function R(o,t,n){let{$$slots:i={},$$scope:r}=t,{label:f}=t,{open:e=!1}=t;return o.$$set=l=>{"label"in l&&n(0,f=l.label),"open"in l&&n(1,e=l.open),"$$scope"in l&&n(2,r=l.$$scope)},[f,e,r,i]}class H extends B{constructor(t){super(),M(this,t,R,P,C,{label:0,open:1})}}function V(o){let t,n,i,r;const f=o[2].default,e=A(f,o,o[1],null);let l=[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},o[0]],u={};for(let s=0;s<l.length;s+=1)u=k(u,l[s]);return{c(){t=h("button"),e&&e.c(),this.h()},l(s){t=b(s,"BUTTON",{type:!0,class:!0,"data-module":!0});var a=g(t);e&&e.l(a),a.forEach(d),this.h()},h(){E(t,u)},m(s,a){D(s,t,a),e&&e.m(t,null),t.autofocus&&t.focus(),n=!0,i||(r=K(t,"click",o[3]),i=!0)},p(s,[a]){e&&e.p&&(!n||a&2)&&I(e,f,s,s[1],n?w(f,s[1],a,null):T(s[1]),null),E(t,u=O(l,[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},a&1&&s[0]]))},i(s){n||(N(e,s),n=!0)},o(s){U(e,s),n=!1},d(s){s&&d(t),e&&e.d(s),i=!1,r()}}}function Y(o,t,n){let{$$slots:i={},$$scope:r}=t;function f(e){L.call(this,o,e)}return o.$$set=e=>{n(0,t=k(k({},t),S(e))),"$$scope"in e&&n(1,r=e.$$scope)},t=S(t),[t,r,i,f]}class Q extends B{constructor(t){super(),M(this,t,Y,V,C,{})}}export{H as C,Q as W,O as g};
