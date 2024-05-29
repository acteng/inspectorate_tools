import{s as M,e as k,t as v,a as P,b as y,f as C,h as b,d as h,c as S,i as d,j as m,y as x,n as T,x as L,k as N,o as E,g as G}from"./scheduler.Cns_Y-fU.js";import{e as D}from"./Geocoder.svelte_svelte_type_style_lang.MMiTdOl1.js";import{S as R,i as j}from"./index.B1sdSzhI.js";import{s as q}from"./index.D7QY7U-O.js";import{s as z}from"./data.CUS-6sO-.js";import{b as V}from"./paths.D_O5ISkb.js";function O(s,e,n){const t=s.slice();return t[7]=e[n],t[9]=n,t}function w(s){let e=s[7]+"",n;return{c(){n=v(e)},l(t){n=b(t,e)},m(t,i){d(t,n,i)},p:T,d(t){t&&h(n)}}}function B(s){let e,n=s[7]+"",t;return{c(){e=k("a"),t=v(n),this.h()},l(i){e=y(i,"A",{href:!0});var u=C(e);t=b(u,n),u.forEach(h),this.h()},h(){E(e,"href",V+"/area_check/scorecard/q"+K(s[9]))},m(i,u){d(i,e,u),m(e,t)},p:T,d(i){i&&h(e)}}}function F(s){let e,n="Incomplete";return{c(){e=k("strong"),e.textContent=n,this.h()},l(t){e=y(t,"STRONG",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1ad6z0a"&&(e.textContent=n),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red svelte-1ggokq0")},m(t,i){d(t,e,i)},d(t){t&&h(e)}}}function H(s){let e,n="Done";return{c(){e=k("strong"),e.textContent=n,this.h()},l(t){e=y(t,"STRONG",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1l7fnl6"&&(e.textContent=n),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green svelte-1ggokq0")},m(t,i){d(t,e,i)},d(t){t&&h(e)}}}function A(s){let e,n,t,i;function u(r,l){return r[0]-1!=r[9]?B:w}let g=u(s),c=g(s);function p(r,l){return r[3][r[9]]?H:F}let _=p(s),o=_(s);return{c(){e=k("li"),n=k("div"),c.c(),t=P(),o.c(),i=P(),this.h()},l(r){e=y(r,"LI",{});var l=C(e);n=y(l,"DIV",{class:!0});var f=C(n);c.l(f),t=S(f),o.l(f),f.forEach(h),i=S(l),l.forEach(h),this.h()},h(){E(n,"class","progress-list-item svelte-1ggokq0")},m(r,l){d(r,e,l),m(e,n),c.m(n,null),m(n,t),o.m(n,null),m(e,i)},p(r,l){g===(g=u(r))&&c?c.p(r,l):(c.d(1),c=g(r),c&&(c.c(),c.m(n,t))),_!==(_=p(r))&&(o.d(1),o=_(r),o&&(o.c(),o.m(n,null)))},d(r){r&&h(e),c.d(),o.d()}}}function J(s){let e,n,t,i,u,g,c,p,_,o=D(s[4]),r=[];for(let l=0;l<o.length;l+=1)r[l]=A(O(s,o,l));return{c(){e=k("p"),n=v("Total existing score: "),t=v(s[2]),i=P(),u=k("p"),g=v("Total proposed score: "),c=v(s[1]),p=P(),_=k("ol");for(let l=0;l<r.length;l+=1)r[l].c()},l(l){e=y(l,"P",{});var f=C(e);n=b(f,"Total existing score: "),t=b(f,s[2]),f.forEach(h),i=S(l),u=y(l,"P",{});var a=C(u);g=b(a,"Total proposed score: "),c=b(a,s[1]),a.forEach(h),p=S(l),_=y(l,"OL",{});var I=C(_);for(let W=0;W<r.length;W+=1)r[W].l(I);I.forEach(h)},m(l,f){d(l,e,f),m(e,n),m(e,t),d(l,i,f),d(l,u,f),m(u,g),m(u,c),d(l,p,f),d(l,_,f);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(_,null)},p(l,[f]){if(f&4&&x(t,l[2]),f&2&&x(c,l[1]),f&25){o=D(l[4]);let a;for(a=0;a<o.length;a+=1){const I=O(l,o,a);r[a]?r[a].p(I,f):(r[a]=A(I),r[a].c(),r[a].m(_,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=o.length}},i:T,o:T,d(l){l&&(h(e),h(i),h(u),h(p),h(_)),L(r,l)}}}function K(s){return(s+1).toString().padStart(2,"0")}function Q(s,e,n){let t,i,u,g;N(s,z,o=>n(5,g=o));let{currentIdx:c}=e,p=["Porosity - Walking and Wheeling","Porosity - Cycling","Crossings - Walking and Wheeling","Crossings - Cycling","Permeability - Walking and Wheeling","Permeability - Cycling","Mesh Density - Walking and Wheeling","Mesh Density - Cycling","Motorised Through-Traffic","Perimeter Treatment Design","Green Infrastructure Design","Other Internal Treatment Design","Engagement Practice"];function _(o){return Array.from(Array(p.length).keys()).map(r=>g.existingScores[r]!=""&&g.proposedScores[r]!="")}return s.$$set=o=>{"currentIdx"in o&&n(0,c=o.currentIdx)},s.$$.update=()=>{s.$$.dirty&32&&n(3,t=_()),s.$$.dirty&32&&n(2,i=q(g.existingScores.map(o=>parseInt(o||"0")))),s.$$.dirty&32&&n(1,u=q(g.proposedScores.map(o=>parseInt(o||"0"))))},[c,u,i,t,p,g]}class te extends R{constructor(e){super(),j(this,e,Q,J,M,{currentIdx:0})}}export{te as P};
