import{s as Q,e as d,a as R,c as _,b as L,m as G,g as D,f as y,p as I,i as $,h as o,n as O,H as q,k as U,t as w,d as H,j as P}from"../chunks/scheduler.V-ByFQ7u.js";import{e as B}from"../chunks/each.BkLWSQYL.js";import{S as W,i as X}from"../chunks/index.Zcf2TLuh.js";import{s as Y}from"../chunks/data.BOjIKd7f.js";import{c as V}from"../chunks/lists.BjLF9z6B.js";function z(l,a,r){const s=l.slice();return s[1]=a[r],s[3]=r,s}function F(l,a,r){const s=l.slice();return s[4]=a[r][0],s[5]=a[r][1],s}function J(l){let a,r,s=l[4]+"",v,E,g,c=l[5]+"",u,b;return{c(){a=d("tr"),r=d("th"),v=w(s),E=R(),g=d("td"),u=w(c),b=R()},l(h){a=_(h,"TR",{});var m=L(a);r=_(m,"TH",{});var k=L(r);v=H(k,s),k.forEach(y),E=D(m),g=_(m,"TD",{});var A=L(g);u=H(A,c),A.forEach(y),b=D(m),m.forEach(y)},m(h,m){$(h,a,m),o(a,r),o(r,v),o(a,E),o(a,g),o(g,u),o(a,b)},p(h,m){m&1&&s!==(s=h[4]+"")&&P(v,s),m&1&&c!==(c=h[5]+"")&&P(u,c)},d(h){h&&y(a)}}}function K(l){let a,r,s=l[3]+1+"",v,E,g,c,u,b=l[0].ratings[l[3]]+"",h,m,k,A=l[0].appraiserComments[l[3]]+"",S,p,T,i=l[0].localGuidance[l[3]]+"",t,f;return{c(){a=d("tr"),r=d("td"),v=w(s),E=w(". "),g=w(l[1]),c=R(),u=d("td"),h=w(b),m=R(),k=d("td"),S=w(A),p=R(),T=d("td"),t=w(i),f=R()},l(e){a=_(e,"TR",{});var n=L(a);r=_(n,"TD",{});var C=L(r);v=H(C,s),E=H(C,". "),g=H(C,l[1]),C.forEach(y),c=D(n),u=_(n,"TD",{});var j=L(u);h=H(j,b),j.forEach(y),m=D(n),k=_(n,"TD",{});var M=L(k);S=H(M,A),M.forEach(y),p=D(n),T=_(n,"TD",{});var N=L(T);t=H(N,i),N.forEach(y),f=D(n),n.forEach(y)},m(e,n){$(e,a,n),o(a,r),o(r,v),o(r,E),o(r,g),o(a,c),o(a,u),o(u,h),o(a,m),o(a,k),o(k,S),o(a,p),o(a,T),o(T,t),o(a,f)},p(e,n){n&1&&b!==(b=e[0].ratings[e[3]]+"")&&P(h,b),n&1&&A!==(A=e[0].appraiserComments[e[3]]+"")&&P(S,A),n&1&&i!==(i=e[0].localGuidance[e[3]]+"")&&P(t,i)},d(e){e&&y(a)}}}function Z(l){let a,r,s,v="Application details",E,g,c,u,b="Assessment report",h,m,k="<th>Criterion</th> <th>Rating</th> <th>Appraiser Comments</th> <th>Relevant Policy &amp; Guidance</th>",A,S=B([["Site address",l[0].summary.siteAddress],["Local authority reference",l[0].summary.localAuthorityReference],["ATE reference",l[0].summary.ateReference],["Local planning authority",l[0].summary.localPlanningAuthority],["Local highway authority",l[0].summary.localHighwayAuthority],["Completed by",l[0].summary.completedBy],["Date",l[0].summary.date],["Application type",l[0].summary.applicationType],["Summary of proposal",l[0].summary.proposalSummary]]),p=[];for(let t=0;t<9;t+=1)p[t]=J(F(l,S,t));let T=B(V),i=[];for(let t=0;t<T.length;t+=1)i[t]=K(z(l,T,t));return{c(){a=d("div"),r=d("table"),s=d("caption"),s.textContent=v,E=R();for(let t=0;t<9;t+=1)p[t].c();g=R(),c=d("table"),u=d("caption"),u.textContent=b,h=R(),m=d("tr"),m.innerHTML=k,A=R();for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){a=_(t,"DIV",{class:!0});var f=L(a);r=_(f,"TABLE",{});var e=L(r);s=_(e,"CAPTION",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-jultim"&&(s.textContent=v),E=D(e);for(let C=0;C<9;C+=1)p[C].l(e);e.forEach(y),g=D(f),c=_(f,"TABLE",{});var n=L(c);u=_(n,"CAPTION",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-1cwmciy"&&(u.textContent=b),h=D(n),m=_(n,"TR",{"data-svelte-h":!0}),G(m)!=="svelte-sdtvlo"&&(m.innerHTML=k),A=D(n);for(let C=0;C<i.length;C+=1)i[C].l(n);n.forEach(y),f.forEach(y),this.h()},h(){I(s,"class","govuk-table__caption govuk-table__caption--m"),I(u,"class","govuk-table__caption govuk-table__caption--m"),I(a,"class","govuk-width-container")},m(t,f){$(t,a,f),o(a,r),o(r,s),o(r,E);for(let e=0;e<9;e+=1)p[e]&&p[e].m(r,null);o(a,g),o(a,c),o(c,u),o(c,h),o(c,m),o(c,A);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(c,null)},p(t,[f]){if(f&1){S=B([["Site address",t[0].summary.siteAddress],["Local authority reference",t[0].summary.localAuthorityReference],["ATE reference",t[0].summary.ateReference],["Local planning authority",t[0].summary.localPlanningAuthority],["Local highway authority",t[0].summary.localHighwayAuthority],["Completed by",t[0].summary.completedBy],["Date",t[0].summary.date],["Application type",t[0].summary.applicationType],["Summary of proposal",t[0].summary.proposalSummary]]);let e;for(e=0;e<9;e+=1){const n=F(t,S,e);p[e]?p[e].p(n,f):(p[e]=J(n),p[e].c(),p[e].m(r,null))}for(;e<9;e+=1)p[e].d(1)}if(f&1){T=B(V);let e;for(e=0;e<T.length;e+=1){const n=z(t,T,e);i[e]?i[e].p(n,f):(i[e]=K(n),i[e].c(),i[e].m(c,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=T.length}},i:O,o:O,d(t){t&&y(a),q(p,t),q(i,t)}}}function x(l,a,r){let s;return U(l,Y,v=>r(0,s=v)),[s]}class oe extends W{constructor(a){super(),X(this,a,x,Z,Q,{})}}export{oe as component};
