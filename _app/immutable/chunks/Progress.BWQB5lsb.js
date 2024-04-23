import{s as M,e as k,t as v,a as P,c as y,b as C,d as b,f as h,g as S,i as p,h as d,j as D,n as T,m as L,k as N,o as E,l as G}from"./scheduler.HrLheCwp.js";import{e as q}from"./each.CIC7OodG.js";import{S as R,i as j}from"./index.CBAPUw7C.js";import{s as x}from"./index.BOI6urGX.js";import{s as z}from"./data.DVP-vdo6.js";import{b as V}from"./paths.DrLL6ygJ.js";function O(s,e,n){const t=s.slice();return t[7]=e[n],t[9]=n,t}function w(s){let e=s[7]+"",n;return{c(){n=v(e)},l(t){n=b(t,e)},m(t,i){p(t,n,i)},p:T,d(t){t&&h(n)}}}function B(s){let e,n=s[7]+"",t;return{c(){e=k("a"),t=v(n),this.h()},l(i){e=y(i,"A",{href:!0});var u=C(e);t=b(u,n),u.forEach(h),this.h()},h(){E(e,"href",V+"/area_check/scorecard/q"+K(s[9]))},m(i,u){p(i,e,u),d(e,t)},p:T,d(i){i&&h(e)}}}function F(s){let e,n="Incomplete";return{c(){e=k("strong"),e.textContent=n,this.h()},l(t){e=y(t,"STRONG",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1ad6z0a"&&(e.textContent=n),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red svelte-1ggokq0")},m(t,i){p(t,e,i)},d(t){t&&h(e)}}}function H(s){let e,n="Done";return{c(){e=k("strong"),e.textContent=n,this.h()},l(t){e=y(t,"STRONG",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1l7fnl6"&&(e.textContent=n),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green svelte-1ggokq0")},m(t,i){p(t,e,i)},d(t){t&&h(e)}}}function A(s){let e,n,t,i;function u(r,l){return r[0]-1!=r[9]?B:w}let g=u(s),c=g(s);function m(r,l){return r[3][r[9]]?H:F}let _=m(s),o=_(s);return{c(){e=k("li"),n=k("div"),c.c(),t=P(),o.c(),i=P(),this.h()},l(r){e=y(r,"LI",{});var l=C(e);n=y(l,"DIV",{class:!0});var f=C(n);c.l(f),t=S(f),o.l(f),f.forEach(h),i=S(l),l.forEach(h),this.h()},h(){E(n,"class","progress-list-item svelte-1ggokq0")},m(r,l){p(r,e,l),d(e,n),c.m(n,null),d(n,t),o.m(n,null),d(e,i)},p(r,l){g===(g=u(r))&&c?c.p(r,l):(c.d(1),c=g(r),c&&(c.c(),c.m(n,t))),_!==(_=m(r))&&(o.d(1),o=_(r),o&&(o.c(),o.m(n,null)))},d(r){r&&h(e),c.d(),o.d()}}}function J(s){let e,n,t,i,u,g,c,m,_,o=q(s[4]),r=[];for(let l=0;l<o.length;l+=1)r[l]=A(O(s,o,l));return{c(){e=k("p"),n=v("Total existing score: "),t=v(s[2]),i=P(),u=k("p"),g=v("Total proposed score: "),c=v(s[1]),m=P(),_=k("ol");for(let l=0;l<r.length;l+=1)r[l].c()},l(l){e=y(l,"P",{});var f=C(e);n=b(f,"Total existing score: "),t=b(f,s[2]),f.forEach(h),i=S(l),u=y(l,"P",{});var a=C(u);g=b(a,"Total proposed score: "),c=b(a,s[1]),a.forEach(h),m=S(l),_=y(l,"OL",{});var I=C(_);for(let W=0;W<r.length;W+=1)r[W].l(I);I.forEach(h)},m(l,f){p(l,e,f),d(e,n),d(e,t),p(l,i,f),p(l,u,f),d(u,g),d(u,c),p(l,m,f),p(l,_,f);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(_,null)},p(l,[f]){if(f&4&&D(t,l[2]),f&2&&D(c,l[1]),f&25){o=q(l[4]);let a;for(a=0;a<o.length;a+=1){const I=O(l,o,a);r[a]?r[a].p(I,f):(r[a]=A(I),r[a].c(),r[a].m(_,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=o.length}},i:T,o:T,d(l){l&&(h(e),h(i),h(u),h(m),h(_)),L(r,l)}}}function K(s){return(s+1).toString().padStart(2,"0")}function Q(s,e,n){let t,i,u,g;N(s,z,o=>n(5,g=o));let{currentIdx:c}=e,m=["Porosity - Walking and Wheeling","Porosity - Cycling","Crossings - Walking and Wheeling","Crossings - Cycling","Permeability - Walking and Wheeling","Permeability - Cycling","Mesh Density - Walking and Wheeling","Mesh Density - Cycling","Motorised Through-Traffic","Perimeter Treatment Design","Green Infrastructure Design","Other Internal Treatment Design","Engagement Practice"];function _(o){return Array.from(Array(m.length).keys()).map(r=>g.existingScores[r]!=""&&g.proposedScores[r]!="")}return s.$$set=o=>{"currentIdx"in o&&n(0,c=o.currentIdx)},s.$$.update=()=>{s.$$.dirty&32&&n(3,t=_()),s.$$.dirty&32&&n(2,i=x(g.existingScores.map(o=>parseInt(o||"0")))),s.$$.dirty&32&&n(1,u=x(g.proposedScores.map(o=>parseInt(o||"0"))))},[c,u,i,t,m,g]}class te extends R{constructor(e){super(),j(this,e,Q,J,M,{currentIdx:0})}}export{te as P};
