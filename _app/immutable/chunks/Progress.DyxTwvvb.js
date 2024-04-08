import{s as j,e as y,t as b,a as P,c as k,b as C,k as v,f as h,d as S,i as g,j as m,o as x,n as T,p as L,l as N,q as D,h as W,g as M}from"./scheduler.BHcsbfKa.js";import{e as q}from"./Breadcrumbs.Bfo2NjFR.js";import{S as R,i as w}from"./index.CiegshHD.js";import{s as O}from"./index.D9BdLLMx.js";import{s as z}from"./data.CJZQ2UkA.js";import{b as V}from"./paths.DrXmch0T.js";function A(s,e,t){const r=s.slice();return r[7]=e[t],r[9]=t,r}function B(s){let e=s[7]+"",t;return{c(){t=b(e)},l(r){t=v(r,e)},m(r,i){g(r,t,i)},p:T,d(r){r&&h(t)}}}function F(s){let e,t=s[7]+"",r;return{c(){e=y("a"),r=b(t),this.h()},l(i){e=k(i,"A",{href:!0});var u=C(e);r=v(u,t),u.forEach(h),this.h()},h(){W(e,"href",V+"/area_check/scorecard/q"+Q(s[9]))},m(i,u){g(i,e,u),m(e,r)},p:T,d(i){i&&h(e)}}}function H(s){let e,t="Incomplete";return{c(){e=y("strong"),e.textContent=t,this.h()},l(r){e=k(r,"STRONG",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1ad6z0a"&&(e.textContent=t),this.h()},h(){W(e,"class","govuk-tag govuk-tag--red")},m(r,i){g(r,e,i)},d(r){r&&h(e)}}}function J(s){let e,t="Done";return{c(){e=y("strong"),e.textContent=t,this.h()},l(r){e=k(r,"STRONG",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1l7fnl6"&&(e.textContent=t),this.h()},h(){W(e,"class","govuk-tag govuk-tag--green")},m(r,i){g(r,e,i)},d(r){r&&h(e)}}}function G(s){let e,t,r,i;function u(n,l){return n[0]-1!=n[9]?F:B}let _=u(s),c=_(s);function d(n,l){return n[3][n[9]]?J:H}let p=d(s),o=p(s);return{c(){e=y("li"),t=y("div"),c.c(),r=P(),o.c(),i=P(),this.h()},l(n){e=k(n,"LI",{});var l=C(e);t=k(l,"DIV",{style:!0});var f=C(t);c.l(f),r=S(f),o.l(f),f.forEach(h),i=S(l),l.forEach(h),this.h()},h(){D(t,"display","flex"),D(t,"justify-content","space-between")},m(n,l){g(n,e,l),m(e,t),c.m(t,null),m(t,r),o.m(t,null),m(e,i)},p(n,l){_===(_=u(n))&&c?c.p(n,l):(c.d(1),c=_(n),c&&(c.c(),c.m(t,r))),p!==(p=d(n))&&(o.d(1),o=p(n),o&&(o.c(),o.m(t,null)))},d(n){n&&h(e),c.d(),o.d()}}}function K(s){let e,t,r,i,u,_,c,d,p,o=q(s[4]),n=[];for(let l=0;l<o.length;l+=1)n[l]=G(A(s,o,l));return{c(){e=y("p"),t=b("Total existing score: "),r=b(s[2]),i=P(),u=y("p"),_=b("Total proposed score: "),c=b(s[1]),d=P(),p=y("ol");for(let l=0;l<n.length;l+=1)n[l].c()},l(l){e=k(l,"P",{});var f=C(e);t=v(f,"Total existing score: "),r=v(f,s[2]),f.forEach(h),i=S(l),u=k(l,"P",{});var a=C(u);_=v(a,"Total proposed score: "),c=v(a,s[1]),a.forEach(h),d=S(l),p=k(l,"OL",{});var I=C(p);for(let E=0;E<n.length;E+=1)n[E].l(I);I.forEach(h)},m(l,f){g(l,e,f),m(e,t),m(e,r),g(l,i,f),g(l,u,f),m(u,_),m(u,c),g(l,d,f),g(l,p,f);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(p,null)},p(l,[f]){if(f&4&&x(r,l[2]),f&2&&x(c,l[1]),f&25){o=q(l[4]);let a;for(a=0;a<o.length;a+=1){const I=A(l,o,a);n[a]?n[a].p(I,f):(n[a]=G(I),n[a].c(),n[a].m(p,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=o.length}},i:T,o:T,d(l){l&&(h(e),h(i),h(u),h(d),h(p)),L(n,l)}}}function Q(s){return(s+1).toString().padStart(2,"0")}function U(s,e,t){let r,i,u,_;N(s,z,o=>t(5,_=o));let{currentIdx:c}=e,d=["Porosity - Walking and Wheeling","Porosity - Cycling","Crossings - Walking and Wheeling","Crossings - Cycling","Permeability - Walking and Wheeling","Permeability - Cycling","Mesh Density - Walking and Wheeling","Mesh Density - Cycling","Motorised Through-Traffic","Perimeter Treatment Design","Green Infrastructure Design","Other Internal Treatment Design","Engagement Practice"];function p(o){return Array.from(Array(d.length).keys()).map(n=>_.existingScores[n]!=""&&_.proposedScores[n]!="")}return s.$$set=o=>{"currentIdx"in o&&t(0,c=o.currentIdx)},s.$$.update=()=>{s.$$.dirty&32&&t(3,r=p()),s.$$.dirty&32&&t(2,i=O(_.existingScores.map(o=>parseInt(o||"0")))),s.$$.dirty&32&&t(1,u=O(_.proposedScores.map(o=>parseInt(o||"0"))))},[c,u,i,r,d,_]}class re extends R{constructor(e){super(),w(this,e,U,K,j,{currentIdx:0})}}export{re as P};
