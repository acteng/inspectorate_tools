import{s as Q,e as _,a as R,c as y,b as L,p as G,g as D,f as v,q as I,i as $,h as s,n as N,K as U,k as W,t as w,d as P,j as B,v as H}from"../chunks/scheduler.DGwhun8C.js";import{e as O}from"../chunks/each.osbS1YKp.js";import{S as X,i as Y}from"../chunks/index.B2vZYn3d.js";import{s as Z}from"../chunks/data.YU2cPvii.js";import{g as x,c as F}from"../chunks/lists.BoRU6pxz.js";function K(l,a,o){const r=l.slice();r[1]=a[o],r[5]=o;const f=x(r[0].ratings[r[5]]);return r[2]=f[0],r[3]=f[1],r}function V(l,a,o){const r=l.slice();return r[6]=a[o][0],r[7]=a[o][1],r}function z(l){let a,o,r=l[6]+"",f,E,g,u=l[7]+"",c,b;return{c(){a=_("tr"),o=_("th"),f=w(r),E=R(),g=_("td"),c=w(u),b=R()},l(h){a=y(h,"TR",{});var m=L(a);o=y(m,"TH",{});var k=L(o);f=P(k,r),k.forEach(v),E=D(m),g=y(m,"TD",{});var A=L(g);c=P(A,u),A.forEach(v),b=D(m),m.forEach(v)},m(h,m){$(h,a,m),s(a,o),s(o,f),s(a,E),s(a,g),s(g,c),s(a,b)},p(h,m){m&1&&r!==(r=h[6]+"")&&B(f,r),m&1&&u!==(u=h[7]+"")&&B(c,u)},d(h){h&&v(a)}}}function J(l){let a,o,r=l[5]+1+"",f,E,g,u,c,b=l[0].ratings[l[5]]+"",h,m,k,A=l[0].appraiserComments[l[5]]+"",S,p,T,i=l[0].localGuidance[l[5]]+"",t,d;return{c(){a=_("tr"),o=_("td"),f=w(r),E=w(". "),g=w(l[1]),u=R(),c=_("td"),h=w(b),m=R(),k=_("td"),S=w(A),p=R(),T=_("td"),t=w(i),d=R(),this.h()},l(e){a=y(e,"TR",{});var n=L(a);o=y(n,"TD",{});var C=L(o);f=P(C,r),E=P(C,". "),g=P(C,l[1]),C.forEach(v),u=D(n),c=y(n,"TD",{});var j=L(c);h=P(j,b),j.forEach(v),m=D(n),k=y(n,"TD",{});var q=L(k);S=P(q,A),q.forEach(v),p=D(n),T=y(n,"TD",{});var M=L(T);t=P(M,i),M.forEach(v),d=D(n),n.forEach(v),this.h()},h(){H(o,"min-width","125px"),H(c,"background",l[2]),H(c,"color",l[3])},m(e,n){$(e,a,n),s(a,o),s(o,f),s(o,E),s(o,g),s(a,u),s(a,c),s(c,h),s(a,m),s(a,k),s(k,S),s(a,p),s(a,T),s(T,t),s(a,d)},p(e,n){n&1&&b!==(b=e[0].ratings[e[5]]+"")&&B(h,b),n&1&&H(c,"background",e[2]),n&1&&H(c,"color",e[3]),n&1&&A!==(A=e[0].appraiserComments[e[5]]+"")&&B(S,A),n&1&&i!==(i=e[0].localGuidance[e[5]]+"")&&B(t,i)},d(e){e&&v(a)}}}function ee(l){let a,o,r,f="Application details",E,g,u,c,b="Assessment report",h,m,k="<th>Criterion</th> <th>Rating</th> <th>Appraiser Comments</th> <th>Relevant Policy &amp; Guidance</th>",A,S=O([["Summary of proposal",l[0].summary.proposalSummary],["Application type",l[0].summary.applicationType],["Site address",l[0].summary.siteAddress],["Local planning authority",l[0].summary.localPlanningAuthority],["Local highway authority",l[0].summary.localHighwayAuthority],["Local authority reference (if available)",l[0].summary.localAuthorityReference],["ATE reference (if available)",l[0].summary.ateReference],["Completed by (User and Organisation)",l[0].summary.completedBy],["Date",l[0].summary.date]]),p=[];for(let t=0;t<9;t+=1)p[t]=z(V(l,S,t));let T=O(F),i=[];for(let t=0;t<T.length;t+=1)i[t]=J(K(l,T,t));return{c(){a=_("div"),o=_("table"),r=_("caption"),r.textContent=f,E=R();for(let t=0;t<9;t+=1)p[t].c();g=R(),u=_("table"),c=_("caption"),c.textContent=b,h=R(),m=_("tr"),m.innerHTML=k,A=R();for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){a=y(t,"DIV",{class:!0});var d=L(a);o=y(d,"TABLE",{});var e=L(o);r=y(e,"CAPTION",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-jultim"&&(r.textContent=f),E=D(e);for(let C=0;C<9;C+=1)p[C].l(e);e.forEach(v),g=D(d),u=y(d,"TABLE",{});var n=L(u);c=y(n,"CAPTION",{class:!0,"data-svelte-h":!0}),G(c)!=="svelte-1cwmciy"&&(c.textContent=b),h=D(n),m=y(n,"TR",{"data-svelte-h":!0}),G(m)!=="svelte-sdtvlo"&&(m.innerHTML=k),A=D(n);for(let C=0;C<i.length;C+=1)i[C].l(n);n.forEach(v),d.forEach(v),this.h()},h(){I(r,"class","govuk-table__caption govuk-table__caption--m"),I(c,"class","govuk-table__caption govuk-table__caption--m"),I(a,"class","govuk-width-container")},m(t,d){$(t,a,d),s(a,o),s(o,r),s(o,E);for(let e=0;e<9;e+=1)p[e]&&p[e].m(o,null);s(a,g),s(a,u),s(u,c),s(u,h),s(u,m),s(u,A);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(u,null)},p(t,[d]){if(d&1){S=O([["Summary of proposal",t[0].summary.proposalSummary],["Application type",t[0].summary.applicationType],["Site address",t[0].summary.siteAddress],["Local planning authority",t[0].summary.localPlanningAuthority],["Local highway authority",t[0].summary.localHighwayAuthority],["Local authority reference (if available)",t[0].summary.localAuthorityReference],["ATE reference (if available)",t[0].summary.ateReference],["Completed by (User and Organisation)",t[0].summary.completedBy],["Date",t[0].summary.date]]);let e;for(e=0;e<9;e+=1){const n=V(t,S,e);p[e]?p[e].p(n,d):(p[e]=z(n),p[e].c(),p[e].m(o,null))}for(;e<9;e+=1)p[e].d(1)}if(d&1){T=O(F);let e;for(e=0;e<T.length;e+=1){const n=K(t,T,e);i[e]?i[e].p(n,d):(i[e]=J(n),i[e].c(),i[e].m(u,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=T.length}},i:N,o:N,d(t){t&&v(a),U(p,t),U(i,t)}}}function te(l,a,o){let r;return W(l,Z,f=>o(0,r=f)),[r]}class se extends X{constructor(a){super(),Y(this,a,te,ee,Q,{})}}export{se as component};
