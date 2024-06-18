import{s as P,e as m,c as g,b as v,f as u,o as b,i as d,n as w,r as j,k as D,B as y,a as B,g as G,h as p,t as I,d as S,x as E,j as C,m as L}from"./scheduler.BJ06nkRu.js";import{e as x}from"./each.Bf3jp4ps.js";import{S as Q,i as V}from"./index.Dmc4uC9p.js";import{s as z}from"./data.iQm9BJ5C.js";import{b as K}from"./paths.DYcR498L.js";import{s as F}from"./index.Cz-82QvD.js";import{c as O}from"./colors.CYEpEtTL.js";function A(o,e,r){const t=o.slice();return t[10]=e[r],t}function H(o){let e,r,t,l;function n(c,h){return c[2]-c[1]!=c[10].idx?U:M}let s=n(o),a=s(o);function f(c,h){return c[4][c[10].idx]?X:W}let k=f(o),_=k(o);return{c(){e=m("li"),r=m("div"),a.c(),t=B(),_.c(),l=B(),this.h()},l(c){e=g(c,"LI",{});var h=v(e);r=g(h,"DIV",{class:!0});var i=v(r);a.l(i),t=G(i),_.l(i),i.forEach(u),l=G(h),h.forEach(u),this.h()},h(){b(r,"class","progress-list-item svelte-1aa8b8k")},m(c,h){d(c,e,h),p(e,r),a.m(r,null),p(r,t),_.m(r,null),p(e,l)},p(c,h){s===(s=n(c))&&a?a.p(c,h):(a.d(1),a=s(c),a&&(a.c(),a.m(r,t))),k!==(k=f(c))&&(_.d(1),_=k(c),_&&(_.c(),_.m(r,null)))},d(c){c&&u(e),a.d(),_.d()}}}function J(o){let e,r=o[10].label+"",t,l,n,s=o[10].notes&&R(o);return{c(){e=m("strong"),t=I(r),l=B(),s&&s.c(),n=y(),this.h()},l(a){e=g(a,"STRONG",{class:!0});var f=v(e);t=S(f,r),f.forEach(u),l=G(a),s&&s.l(a),n=y(),this.h()},h(){b(e,"class","govuk-tag"),E(e,"color",O.green.font),E(e,"background",O.green.background),E(e,"width","100%")},m(a,f){d(a,e,f),p(e,t),d(a,l,f),s&&s.m(a,f),d(a,n,f)},p(a,f){f&1&&r!==(r=a[10].label+"")&&C(t,r),a[10].notes?s?s.p(a,f):(s=R(a),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(a){a&&(u(e),u(l),u(n)),s&&s.d(a)}}}function M(o){let e=o[10].label+"",r;return{c(){r=I(e)},l(t){r=S(t,e)},m(t,l){d(t,r,l)},p(t,l){l&1&&e!==(e=t[10].label+"")&&C(r,e)},d(t){t&&u(r)}}}function U(o){let e,r=o[10].label+"",t,l;return{c(){e=m("a"),t=I(r),this.h()},l(n){e=g(n,"A",{href:!0});var s=v(e);t=S(s,r),s.forEach(u),this.h()},h(){b(e,"href",l=""+(K+o[3]+o[5](o[10].idx)))},m(n,s){d(n,e,s),p(e,t)},p(n,s){s&1&&r!==(r=n[10].label+"")&&C(t,r),s&9&&l!==(l=""+(K+n[3]+n[5](n[10].idx)))&&b(e,"href",l)},d(n){n&&u(e)}}}function W(o){let e,r="☒";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){b(e,"class","govuk-tag govuk-tag--red tag-row svelte-1aa8b8k")},m(t,l){d(t,e,l)},d(t){t&&u(e)}}}function X(o){let e,r="☑";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1wxgh7q"&&(e.textContent=r),this.h()},h(){b(e,"class","govuk-tag govuk-tag--green tag-row svelte-1aa8b8k")},m(t,l){d(t,e,l)},d(t){t&&u(e)}}}function R(o){let e,r=o[10].notes+"",t;return{c(){e=m("p"),t=I(r)},l(l){e=g(l,"P",{});var n=v(e);t=S(n,r),n.forEach(u)},m(l,n){d(l,e,n),p(e,t)},p(l,n){n&1&&r!==(r=l[10].notes+"")&&C(t,r)},d(l){l&&u(e)}}}function T(o){let e;function r(n,s){return n[10].kind=="section"?J:H}let t=r(o),l=t(o);return{c(){l.c(),e=y()},l(n){l.l(n),e=y()},m(n,s){l.m(n,s),d(n,e,s)},p(n,s){t===(t=r(n))&&l?l.p(n,s):(l.d(1),l=t(n),l&&(l.c(),l.m(e.parentNode,e)))},d(n){n&&u(e),l.d(n)}}}function Y(o){let e,r=x(q(o[0])),t=[];for(let l=0;l<r.length;l+=1)t[l]=T(A(o,r,l));return{c(){e=m("ol");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=g(l,"OL",{start:!0});var n=v(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(u),this.h()},h(){b(e,"start",o[1])},m(l,n){d(l,e,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[n]){if(n&63){r=x(q(l[0]));let s;for(s=0;s<r.length;s+=1){const a=A(l,r,s);t[s]?t[s].p(a,n):(t[s]=T(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}n&2&&b(e,"start",l[1])},i:w,o:w,d(l){l&&u(e),j(t,l)}}}function q(o){let e=[],r=0;for(let t of o){e.push({kind:"section",label:t.section,notes:t.notes});for(let l of t.pages)e.push({kind:"page",idx:r,label:l}),r++}return e}function Z(o,e,r){let t,l;D(o,z,i=>r(7,l=i));let{sections:n}=e,{startIdx:s}=e,{currentIdx:a}=e,{scorecardKey:f}=e,{urlBase:k}=e,_=F(n.map(i=>i.pages.length));function c(i){return(i+s).toString().padStart(2,"0")}function h(i){return Array.from(Array(_).keys()).map(N=>l[f].existingScores[N]!=""&&l[f].proposedScores[N]!="")}return o.$$set=i=>{"sections"in i&&r(0,n=i.sections),"startIdx"in i&&r(1,s=i.startIdx),"currentIdx"in i&&r(2,a=i.currentIdx),"scorecardKey"in i&&r(6,f=i.scorecardKey),"urlBase"in i&&r(3,k=i.urlBase)},o.$$.update=()=>{o.$$.dirty&128&&r(4,t=h())},[n,s,a,k,t,c,f,l]}class oe extends Q{constructor(e){super(),V(this,e,Z,Y,P,{sections:0,startIdx:1,currentIdx:2,scorecardKey:6,urlBase:3})}}export{oe as G};
