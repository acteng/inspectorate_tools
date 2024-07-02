import{s as L,e as m,c as g,b as p,f as u,i as h,n as w,q as P,k as j,D as y,a as E,g as G,r as v,h as k,t as I,d as S,x,j as C,p as D}from"./scheduler.BBS-fkhU.js";import{e as B}from"./each.D79A5KlB.js";import{S as Q,i as V}from"./index.B8H3ypVf.js";import{s as z}from"./data.C8r5AdwZ.js";import{b as K}from"./paths.D1zI5sW5.js";import{s as F}from"./index.BF19RC_L.js";import{c as O}from"./colors.CYEpEtTL.js";function q(o,e,r){const t=o.slice();return t[10]=e[r],t}function H(o){let e,r,t,l;function s(c,d){return c[2]-c[1]!=c[10].idx?U:M}let n=s(o),i=n(o);function f(c,d){return c[4][c[10].idx]?X:W}let b=f(o),_=b(o);return{c(){e=m("li"),r=m("div"),i.c(),t=E(),_.c(),l=E(),this.h()},l(c){e=g(c,"LI",{});var d=p(e);r=g(d,"DIV",{class:!0});var a=p(r);i.l(a),t=G(a),_.l(a),a.forEach(u),l=G(d),d.forEach(u),this.h()},h(){v(r,"class","progress-list-item svelte-1aa8b8k")},m(c,d){h(c,e,d),k(e,r),i.m(r,null),k(r,t),_.m(r,null),k(e,l)},p(c,d){n===(n=s(c))&&i?i.p(c,d):(i.d(1),i=n(c),i&&(i.c(),i.m(r,t))),b!==(b=f(c))&&(_.d(1),_=b(c),_&&(_.c(),_.m(r,null)))},d(c){c&&u(e),i.d(),_.d()}}}function J(o){let e,r=o[10].label+"",t,l,s,n=o[10].notes&&A(o);return{c(){e=m("strong"),t=I(r),l=E(),n&&n.c(),s=y(),this.h()},l(i){e=g(i,"STRONG",{class:!0});var f=p(e);t=S(f,r),f.forEach(u),l=G(i),n&&n.l(i),s=y(),this.h()},h(){v(e,"class","govuk-tag"),x(e,"color",O.green.font),x(e,"background",O.green.background),x(e,"width","100%")},m(i,f){h(i,e,f),k(e,t),h(i,l,f),n&&n.m(i,f),h(i,s,f)},p(i,f){f&1&&r!==(r=i[10].label+"")&&C(t,r),i[10].notes?n?n.p(i,f):(n=A(i),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null)},d(i){i&&(u(e),u(l),u(s)),n&&n.d(i)}}}function M(o){let e=o[10].label+"",r;return{c(){r=I(e)},l(t){r=S(t,e)},m(t,l){h(t,r,l)},p(t,l){l&1&&e!==(e=t[10].label+"")&&C(r,e)},d(t){t&&u(r)}}}function U(o){let e,r=o[10].label+"",t,l;return{c(){e=m("a"),t=I(r),this.h()},l(s){e=g(s,"A",{href:!0});var n=p(e);t=S(n,r),n.forEach(u),this.h()},h(){v(e,"href",l=""+(K+o[3]+o[5](o[10].idx)))},m(s,n){h(s,e,n),k(e,t)},p(s,n){n&1&&r!==(r=s[10].label+"")&&C(t,r),n&9&&l!==(l=""+(K+s[3]+s[5](s[10].idx)))&&v(e,"href",l)},d(s){s&&u(e)}}}function W(o){let e,r="☒";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){v(e,"class","govuk-tag govuk-tag--red tag-row svelte-1aa8b8k")},m(t,l){h(t,e,l)},d(t){t&&u(e)}}}function X(o){let e,r="☑";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1wxgh7q"&&(e.textContent=r),this.h()},h(){v(e,"class","govuk-tag govuk-tag--green tag-row svelte-1aa8b8k")},m(t,l){h(t,e,l)},d(t){t&&u(e)}}}function A(o){let e,r=o[10].notes+"",t;return{c(){e=m("p"),t=I(r)},l(l){e=g(l,"P",{});var s=p(e);t=S(s,r),s.forEach(u)},m(l,s){h(l,e,s),k(e,t)},p(l,s){s&1&&r!==(r=l[10].notes+"")&&C(t,r)},d(l){l&&u(e)}}}function R(o){let e;function r(s,n){return s[10].kind=="section"?J:H}let t=r(o),l=t(o);return{c(){l.c(),e=y()},l(s){l.l(s),e=y()},m(s,n){l.m(s,n),h(s,e,n)},p(s,n){t===(t=r(s))&&l?l.p(s,n):(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},d(s){s&&u(e),l.d(s)}}}function Y(o){let e,r=B(T(o[0])),t=[];for(let l=0;l<r.length;l+=1)t[l]=R(q(o,r,l));return{c(){e=m("ol");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=g(l,"OL",{});var s=p(e);for(let n=0;n<t.length;n+=1)t[n].l(s);s.forEach(u)},m(l,s){h(l,e,s);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(l,[s]){if(s&63){r=B(T(l[0]));let n;for(n=0;n<r.length;n+=1){const i=q(l,r,n);t[n]?t[n].p(i,s):(t[n]=R(i),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=r.length}},i:w,o:w,d(l){l&&u(e),P(t,l)}}}function T(o){let e=[],r=0;for(let t of o){e.push({kind:"section",label:t.section,notes:t.notes});for(let l of t.pages)e.push({kind:"page",idx:r,label:l}),r++}return e}function Z(o,e,r){let t,l;j(o,z,a=>r(7,l=a));let{sections:s}=e,{startIdx:n}=e,{currentIdx:i}=e,{scorecardKey:f}=e,{urlBase:b}=e,_=F(s.map(a=>a.pages.length));function c(a){return(a+n).toString().padStart(2,"0")}function d(a){return Array.from(Array(_).keys()).map(N=>l[f].existingScores[N]!=""&&l[f].proposedScores[N]!="")}return o.$$set=a=>{"sections"in a&&r(0,s=a.sections),"startIdx"in a&&r(1,n=a.startIdx),"currentIdx"in a&&r(2,i=a.currentIdx),"scorecardKey"in a&&r(6,f=a.scorecardKey),"urlBase"in a&&r(3,b=a.urlBase)},o.$$.update=()=>{o.$$.dirty&128&&r(4,t=d())},[s,n,i,b,t,c,f,l]}class oe extends Q{constructor(e){super(),V(this,e,Z,Y,L,{sections:0,startIdx:1,currentIdx:2,scorecardKey:6,urlBase:3})}}export{oe as G};
