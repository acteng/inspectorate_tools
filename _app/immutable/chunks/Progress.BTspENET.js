import{s as A,e as k,t as v,a as I,c as y,b as C,d as b,f as h,g as P,i as m,h as d,j as W,n as S,H as G,k as M,p as T,m as z}from"./scheduler.V-ByFQ7u.js";import{e as D}from"./each.BkLWSQYL.js";import{S as L,i as N}from"./index.Zcf2TLuh.js";import{s as q}from"./index.DCp-j_UU.js";import{s as R}from"./data.BQ5H0ZX3.js";import{b as j}from"./paths.PcJn8E00.js";function O(s,e,n){const t=s.slice();return t[7]=e[n],t[9]=n,t}function H(s){let e=s[7]+"",n;return{c(){n=v(e)},l(t){n=b(t,e)},m(t,i){m(t,n,i)},p:S,d(t){t&&h(n)}}}function V(s){let e,n=s[7]+"",t;return{c(){e=k("a"),t=v(n),this.h()},l(i){e=y(i,"A",{href:!0});var u=C(e);t=b(u,n),u.forEach(h),this.h()},h(){T(e,"href",j+"/area_check/scorecard/q"+K(s[9]))},m(i,u){m(i,e,u),d(e,t)},p:S,d(i){i&&h(e)}}}function B(s){let e,n="☒";return{c(){e=k("strong"),e.textContent=n,this.h()},l(t){e=y(t,"STRONG",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1v6fn9x"&&(e.textContent=n),this.h()},h(){T(e,"class","govuk-tag govuk-tag--red tag-row svelte-1xz7p00")},m(t,i){m(t,e,i)},d(t){t&&h(e)}}}function F(s){let e,n="☑";return{c(){e=k("strong"),e.textContent=n,this.h()},l(t){e=y(t,"STRONG",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1wxgh7q"&&(e.textContent=n),this.h()},h(){T(e,"class","govuk-tag govuk-tag--green tag-row svelte-1xz7p00")},m(t,i){m(t,e,i)},d(t){t&&h(e)}}}function w(s){let e,n,t,i;function u(r,l){return r[0]-1!=r[9]?V:H}let _=u(s),c=_(s);function p(r,l){return r[3][r[9]]?F:B}let g=p(s),o=g(s);return{c(){e=k("li"),n=k("div"),c.c(),t=I(),o.c(),i=I(),this.h()},l(r){e=y(r,"LI",{});var l=C(e);n=y(l,"DIV",{class:!0});var f=C(n);c.l(f),t=P(f),o.l(f),f.forEach(h),i=P(l),l.forEach(h),this.h()},h(){T(n,"class","progress-list-item svelte-1xz7p00")},m(r,l){m(r,e,l),d(e,n),c.m(n,null),d(n,t),o.m(n,null),d(e,i)},p(r,l){_===(_=u(r))&&c?c.p(r,l):(c.d(1),c=_(r),c&&(c.c(),c.m(n,t))),g!==(g=p(r))&&(o.d(1),o=g(r),o&&(o.c(),o.m(n,null)))},d(r){r&&h(e),c.d(),o.d()}}}function J(s){let e,n,t,i,u,_,c,p,g,o=D(s[4]),r=[];for(let l=0;l<o.length;l+=1)r[l]=w(O(s,o,l));return{c(){e=k("p"),n=v("Total existing score: "),t=v(s[2]),i=I(),u=k("p"),_=v("Total proposed score: "),c=v(s[1]),p=I(),g=k("ol");for(let l=0;l<r.length;l+=1)r[l].c()},l(l){e=y(l,"P",{});var f=C(e);n=b(f,"Total existing score: "),t=b(f,s[2]),f.forEach(h),i=P(l),u=y(l,"P",{});var a=C(u);_=b(a,"Total proposed score: "),c=b(a,s[1]),a.forEach(h),p=P(l),g=y(l,"OL",{});var x=C(g);for(let E=0;E<r.length;E+=1)r[E].l(x);x.forEach(h)},m(l,f){m(l,e,f),d(e,n),d(e,t),m(l,i,f),m(l,u,f),d(u,_),d(u,c),m(l,p,f),m(l,g,f);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(g,null)},p(l,[f]){if(f&4&&W(t,l[2]),f&2&&W(c,l[1]),f&25){o=D(l[4]);let a;for(a=0;a<o.length;a+=1){const x=O(l,o,a);r[a]?r[a].p(x,f):(r[a]=w(x),r[a].c(),r[a].m(g,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=o.length}},i:S,o:S,d(l){l&&(h(e),h(i),h(u),h(p),h(g)),G(r,l)}}}function K(s){return(s+1).toString().padStart(2,"0")}function Q(s,e,n){let t,i,u,_;M(s,R,o=>n(5,_=o));let{currentIdx:c}=e,p=["Porosity - Walking and Wheeling","Porosity - Cycling","Crossings - Walking and Wheeling","Crossings - Cycling","Permeability - Walking and Wheeling","Permeability - Cycling","Mesh Density - Walking and Wheeling","Mesh Density - Cycling","Motorised Through-Traffic","Perimeter Treatment Design","Green Infrastructure Design","Other Internal Treatment Design","Engagement Practice"];function g(o){return Array.from(Array(p.length).keys()).map(r=>_.existingScores[r]!=""&&_.proposedScores[r]!="")}return s.$$set=o=>{"currentIdx"in o&&n(0,c=o.currentIdx)},s.$$.update=()=>{s.$$.dirty&32&&n(3,t=g()),s.$$.dirty&32&&n(2,i=q(_.existingScores.map(o=>parseInt(o||"0")))),s.$$.dirty&32&&n(1,u=q(_.proposedScores.map(o=>parseInt(o||"0"))))},[c,u,i,t,p,_]}class te extends L{constructor(e){super(),N(this,e,Q,J,A,{currentIdx:0})}}export{te as P};
