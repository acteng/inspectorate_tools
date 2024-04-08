import{s as M,e as d,c as g,b as y,f as c,i as p,n as v,p as N,l as O,a as b,d as C,q as x,j as k,t as E,k as D,h as S,g as F}from"./scheduler.BHcsbfKa.js";import{e as P}from"./Breadcrumbs.Bgmk6ck2.js";import{S as V,i as q}from"./index.CiegshHD.js";import{s as w}from"./data.DO1-XQVs.js";import{b as R}from"./paths.Bxd5YBwR.js";function I(a,t,n){const e=a.slice();return e[5]=t[n],e[7]=n,e}function T(a){let t=a[5]+"",n;return{c(){n=E(t)},l(e){n=D(e,t)},m(e,r){p(e,n,r)},p:v,d(e){e&&c(n)}}}function W(a){let t,n=a[5]+"",e;return{c(){t=d("a"),e=E(n),this.h()},l(r){t=g(r,"A",{href:!0});var i=y(t);e=D(i,n),i.forEach(c),this.h()},h(){S(t,"href",R+"/route_check/street_placemaking_check/sp"+B(a[7]))},m(r,i){p(r,t,i),k(t,e)},p:v,d(r){r&&c(t)}}}function j(a){let t,n="Incomplete";return{c(){t=d("strong"),t.textContent=n,this.h()},l(e){t=g(e,"STRONG",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1ad6z0a"&&(t.textContent=n),this.h()},h(){S(t,"class","govuk-tag govuk-tag--red")},m(e,r){p(e,t,r)},d(e){e&&c(t)}}}function G(a){let t,n="Done";return{c(){t=d("strong"),t.textContent=n,this.h()},l(e){t=g(e,"STRONG",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1l7fnl6"&&(t.textContent=n),this.h()},h(){S(t,"class","govuk-tag govuk-tag--green")},m(e,r){p(e,t,r)},d(e){e&&c(t)}}}function A(a){let t,n,e,r;function i(o,f){return o[0]-L!=o[7]?W:T}let l=i(a),s=l(a);function h(o,f){return o[1][o[7]]?G:j}let _=h(a),u=_(a);return{c(){t=d("li"),n=d("div"),s.c(),e=b(),u.c(),r=b(),this.h()},l(o){t=g(o,"LI",{});var f=y(t);n=g(f,"DIV",{style:!0});var m=y(n);s.l(m),e=C(m),u.l(m),m.forEach(c),r=C(f),f.forEach(c),this.h()},h(){x(n,"display","flex"),x(n,"justify-content","space-between")},m(o,f){p(o,t,f),k(t,n),s.m(n,null),k(n,e),u.m(n,null),k(t,r)},p(o,f){l===(l=i(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(n,e))),_!==(_=h(o))&&(u.d(1),u=_(o),u&&(u.c(),u.m(n,null)))},d(o){o&&c(t),s.d(),u.d()}}}function z(a){let t,n=P(a[2]),e=[];for(let r=0;r<n.length;r+=1)e[r]=A(I(a,n,r));return{c(){t=d("ol");for(let r=0;r<e.length;r+=1)e[r].c()},l(r){t=g(r,"OL",{});var i=y(t);for(let l=0;l<e.length;l+=1)e[l].l(i);i.forEach(c)},m(r,i){p(r,t,i);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(r,[i]){if(i&7){n=P(r[2]);let l;for(l=0;l<n.length;l+=1){const s=I(r,n,l);e[l]?e[l].p(s,i):(e[l]=A(s),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=n.length}},i:v,o:v,d(r){r&&c(t),N(e,r)}}}let L=1;function B(a){return(a+L).toString().padStart(2,"0")}function U(a,t,n){let e,r;O(a,w,h=>n(3,r=h));let{currentIdx:i}=t,l=["Street Engagement for Children","Social Space","Diversity of Activities","Surveillance and Activity","Forward Visibility and Escape Routes","Visibility of Others","Maintenance and Upkeep","Street Network Layout","Place and Movement","Impact of Street Design on Behaviour","Enforcement of Loading and Parking","Street Clutter","Consistency of Materials and Street Furniture","Visual Interest","Cultural Significance","Street Features that Support Walking, Wheeling and Cycling","Drainage and Water","Trees","Planting","Ancillary Features to Support Fauna","Sustainable Materials","Air Pollution - Exposure","Air Pollution - Proximity","Noise Pollution","Light Pollution","Sunlight"];function s(h){return Array.from(Array(l.length).keys()).map(_=>r.streetPlacemakingCheck.existingScores[_]!=""&&r.streetPlacemakingCheck.proposedScores[_]!="")}return a.$$set=h=>{"currentIdx"in h&&n(0,i=h.currentIdx)},a.$$.update=()=>{a.$$.dirty&8&&n(1,e=s())},[i,e,l,r]}class Y extends V{constructor(t){super(),q(this,t,U,z,M,{currentIdx:0})}}export{Y as P};
