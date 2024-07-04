import{s as P,e as d,c as m,b as k,f as c,i as g,n as b,r as T,k as w,a as x,g as C,o as y,h as v,t as q,d as E,m as O}from"./scheduler.ScMV3vmV.js";import{e as I}from"./each.DgxkLI6f.js";import{S as z,i as G}from"./index.DbrWxxqn.js";import{s as L}from"./data.r_cqGWBO.js";import{b as N}from"./paths.DfAqpyzN.js";function S(a,e,r){const t=a.slice();return t[5]=e[r],t[7]=r,t}function R(a){let e=a[5]+"",r;return{c(){r=q(e)},l(t){r=E(t,e)},m(t,n){g(t,r,n)},p:b,d(t){t&&c(r)}}}function D(a){let e,r=a[5]+"",t;return{c(){e=d("a"),t=q(r),this.h()},l(n){e=m(n,"A",{href:!0});var s=k(e);t=E(s,r),s.forEach(c),this.h()},h(){y(e,"href",N+"/planning/scorecard/q"+F(a[7]))},m(n,s){g(n,e,s),v(e,t)},p:b,d(n){n&&c(e)}}}function V(a){let e,r="☒";return{c(){e=d("strong"),e.textContent=r,this.h()},l(t){e=m(t,"STRONG",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){y(e,"class","govuk-tag govuk-tag--red tag-row svelte-1xz7p00")},m(t,n){g(t,e,n)},d(t){t&&c(e)}}}function j(a){let e,r="☑";return{c(){e=d("strong"),e.textContent=r,this.h()},l(t){e=m(t,"STRONG",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1wxgh7q"&&(e.textContent=r),this.h()},h(){y(e,"class","govuk-tag govuk-tag--green tag-row svelte-1xz7p00")},m(t,n){g(t,e,n)},d(t){t&&c(e)}}}function A(a){let e,r,t,n;function s(i,f){return i[0]-1!=i[7]?D:R}let l=s(a),o=l(a);function _(i,f){return i[1][i[7]]?j:V}let h=_(a),u=h(a);return{c(){e=d("li"),r=d("div"),o.c(),t=x(),u.c(),n=x(),this.h()},l(i){e=m(i,"LI",{});var f=k(e);r=m(f,"DIV",{class:!0});var p=k(r);o.l(p),t=C(p),u.l(p),p.forEach(c),n=C(f),f.forEach(c),this.h()},h(){y(r,"class","progress-list-item svelte-1xz7p00")},m(i,f){g(i,e,f),v(e,r),o.m(r,null),v(r,t),u.m(r,null),v(e,n)},p(i,f){l===(l=s(i))&&o?o.p(i,f):(o.d(1),o=l(i),o&&(o.c(),o.m(r,t))),h!==(h=_(i))&&(u.d(1),u=h(i),u&&(u.c(),u.m(r,null)))},d(i){i&&c(e),o.d(),u.d()}}}function B(a){let e,r=I(a[2]),t=[];for(let n=0;n<r.length;n+=1)t[n]=A(S(a,r,n));return{c(){e=d("ol");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){e=m(n,"OL",{});var s=k(e);for(let l=0;l<t.length;l+=1)t[l].l(s);s.forEach(c)},m(n,s){g(n,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(n,[s]){if(s&7){r=I(n[2]);let l;for(l=0;l<r.length;l+=1){const o=S(n,r,l);t[l]?t[l].p(o,s):(t[l]=A(o),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},i:b,o:b,d(n){n&&c(e),T(t,n)}}}function F(a){return(a+1).toString().padStart(2,"0")}function H(a,e,r){let t,n;w(a,L,_=>r(3,n=_));let{currentIdx:s}=e,l=["Trip generation and assignment","Active travel route audit","Pedestrian access to local amenities","Cycling accessibility","Access to public transport","Off-site transport infrastructure","Site permeability","Placemaking","Cycle parking and trip-end facilities","Travel planning"];function o(_){return Array.from(Array(l.length).keys()).map(h=>n.ratings[h]!="")}return a.$$set=_=>{"currentIdx"in _&&r(0,s=_.currentIdx)},a.$$.update=()=>{a.$$.dirty&8&&r(1,t=o())},[s,t,l,n]}class W extends z{constructor(e){super(),G(this,e,H,B,P,{currentIdx:0})}}export{W as P};
