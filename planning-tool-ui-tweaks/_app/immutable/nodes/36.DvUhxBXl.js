import{s as W,e as d,a as R,c as _,b as L,p as I,g as D,f as y,q as $,i as j,h as n,n as U,K as F,k as X,t as w,d as P,j as O,v as H}from"../chunks/scheduler.DGwhun8C.js";import{e as G}from"../chunks/each.osbS1YKp.js";import{S as Y,i as Z}from"../chunks/index.B2vZYn3d.js";import{s as x}from"../chunks/data.C-MKmfIw.js";import{g as B,c as K}from"../chunks/lists.B0R2eaZ3.js";function V(l,a,r){const s=l.slice();return s[2]=a[r],s[4]=r,s}function z(l,a,r){const s=l.slice();return s[5]=a[r][0],s[6]=a[r][1],s}function J(l){let a,r,s=l[5]+"",v,E,g,u=l[6]+"",m,b;return{c(){a=d("tr"),r=d("th"),v=w(s),E=R(),g=d("td"),m=w(u),b=R()},l(h){a=_(h,"TR",{});var c=L(a);r=_(c,"TH",{});var k=L(r);v=P(k,s),k.forEach(y),E=D(c),g=_(c,"TD",{});var A=L(g);m=P(A,u),A.forEach(y),b=D(c),c.forEach(y)},m(h,c){j(h,a,c),n(a,r),n(r,v),n(a,E),n(a,g),n(g,m),n(a,b)},p(h,c){c&1&&s!==(s=h[5]+"")&&O(v,s),c&1&&u!==(u=h[6]+"")&&O(m,u)},d(h){h&&y(a)}}}function Q(l){let a,r,s=l[4]+1+"",v,E,g,u,m,b=l[0].ratings[l[4]]+"",h,c,k,A=l[0].appraiserComments[l[4]]+"",S,f,T,i=l[0].localGuidance[l[4]]+"",t,p;return{c(){a=d("tr"),r=d("td"),v=w(s),E=w(". "),g=w(l[2]),u=R(),m=d("td"),h=w(b),c=R(),k=d("td"),S=w(A),f=R(),T=d("td"),t=w(i),p=R(),this.h()},l(e){a=_(e,"TR",{});var o=L(a);r=_(o,"TD",{});var C=L(r);v=P(C,s),E=P(C,". "),g=P(C,l[2]),C.forEach(y),u=D(o),m=_(o,"TD",{});var q=L(m);h=P(q,b),q.forEach(y),c=D(o),k=_(o,"TD",{});var M=L(k);S=P(M,A),M.forEach(y),f=D(o),T=_(o,"TD",{});var N=L(T);t=P(N,i),N.forEach(y),p=D(o),o.forEach(y),this.h()},h(){H(r,"min-width","125px"),H(m,"background",B(l[0].ratings[l[4]])[2]),H(m,"color",B(l[0].ratings[l[4]])[3])},m(e,o){j(e,a,o),n(a,r),n(r,v),n(r,E),n(r,g),n(a,u),n(a,m),n(m,h),n(a,c),n(a,k),n(k,S),n(a,f),n(a,T),n(T,t),n(a,p)},p(e,o){o&1&&b!==(b=e[0].ratings[e[4]]+"")&&O(h,b),o&1&&H(m,"background",B(e[0].ratings[e[4]])[2]),o&1&&H(m,"color",B(e[0].ratings[e[4]])[3]),o&1&&A!==(A=e[0].appraiserComments[e[4]]+"")&&O(S,A),o&1&&i!==(i=e[0].localGuidance[e[4]]+"")&&O(t,i)},d(e){e&&y(a)}}}function ee(l){let a,r,s,v="Application details",E,g,u,m,b="Assessment report",h,c,k="<th>Criterion</th> <th>Rating</th> <th>Appraiser Comments</th> <th>Relevant Policy &amp; Guidance</th>",A,S=G([["Summary of proposal",l[0].summary.proposalSummary],["Application type",l[0].summary.applicationType],["Site address",l[0].summary.siteAddress],["Local planning authority",l[0].summary.localPlanningAuthority],["Local highway authority",l[0].summary.localHighwayAuthority],["Local authority reference (if available)",l[0].summary.localAuthorityReference],["ATE reference (if available)",l[0].summary.ateReference],["Completed by (User and Organisation)",l[0].summary.completedBy],["Date",l[0].summary.date]]),f=[];for(let t=0;t<9;t+=1)f[t]=J(z(l,S,t));let T=G(K),i=[];for(let t=0;t<T.length;t+=1)i[t]=Q(V(l,T,t));return{c(){a=d("div"),r=d("table"),s=d("caption"),s.textContent=v,E=R();for(let t=0;t<9;t+=1)f[t].c();g=R(),u=d("table"),m=d("caption"),m.textContent=b,h=R(),c=d("tr"),c.innerHTML=k,A=R();for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){a=_(t,"DIV",{class:!0});var p=L(a);r=_(p,"TABLE",{});var e=L(r);s=_(e,"CAPTION",{class:!0,"data-svelte-h":!0}),I(s)!=="svelte-jultim"&&(s.textContent=v),E=D(e);for(let C=0;C<9;C+=1)f[C].l(e);e.forEach(y),g=D(p),u=_(p,"TABLE",{});var o=L(u);m=_(o,"CAPTION",{class:!0,"data-svelte-h":!0}),I(m)!=="svelte-1cwmciy"&&(m.textContent=b),h=D(o),c=_(o,"TR",{"data-svelte-h":!0}),I(c)!=="svelte-sdtvlo"&&(c.innerHTML=k),A=D(o);for(let C=0;C<i.length;C+=1)i[C].l(o);o.forEach(y),p.forEach(y),this.h()},h(){$(s,"class","govuk-table__caption govuk-table__caption--m"),$(m,"class","govuk-table__caption govuk-table__caption--m"),$(a,"class","govuk-width-container")},m(t,p){j(t,a,p),n(a,r),n(r,s),n(r,E);for(let e=0;e<9;e+=1)f[e]&&f[e].m(r,null);n(a,g),n(a,u),n(u,m),n(u,h),n(u,c),n(u,A);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(u,null)},p(t,[p]){if(p&1){S=G([["Summary of proposal",t[0].summary.proposalSummary],["Application type",t[0].summary.applicationType],["Site address",t[0].summary.siteAddress],["Local planning authority",t[0].summary.localPlanningAuthority],["Local highway authority",t[0].summary.localHighwayAuthority],["Local authority reference (if available)",t[0].summary.localAuthorityReference],["ATE reference (if available)",t[0].summary.ateReference],["Completed by (User and Organisation)",t[0].summary.completedBy],["Date",t[0].summary.date]]);let e;for(e=0;e<9;e+=1){const o=z(t,S,e);f[e]?f[e].p(o,p):(f[e]=J(o),f[e].c(),f[e].m(r,null))}for(;e<9;e+=1)f[e].d(1)}if(p&1){T=G(K);let e;for(e=0;e<T.length;e+=1){const o=V(t,T,e);i[e]?i[e].p(o,p):(i[e]=Q(o),i[e].c(),i[e].m(u,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=T.length}},i:U,o:U,d(t){t&&y(a),F(f,t),F(i,t)}}}function te(l,a,r){let s;return X(l,x,v=>r(0,s=v)),s.ratings.map(B),[s]}class se extends Y{constructor(a){super(),Z(this,a,te,ee,W,{})}}export{se as component};
