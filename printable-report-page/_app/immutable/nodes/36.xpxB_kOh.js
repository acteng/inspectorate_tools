import{s as Y,e as v,a as P,c as g,b as L,p as M,g as R,f as b,q as K,i as V,h as o,K as z,k as Z,t as H,d as I,j as q}from"../chunks/scheduler.DGwhun8C.js";import{S as x,i as tt,c as et,a as at,m as lt,t as ot,b as nt,d as rt}from"../chunks/index.B2vZYn3d.js";import{e as O}from"../chunks/each.osbS1YKp.js";import{s as st}from"../chunks/data.D_ncqJQv.js";import{c as J}from"../chunks/lists.BjLF9z6B.js";import{D as it}from"../chunks/DefaultButton.Dnb4gInE.js";import"../chunks/index.CDVQ9b5Y.js";import{b as ct}from"../chunks/paths.TtYSMLEs.js";function Q(l,t,a){const r=l.slice();return r[2]=t[a],r[4]=a,r}function U(l,t,a){const r=l.slice();return r[5]=t[a][0],r[6]=t[a][1],r}function mt(l){let t;return{c(){t=H("Export to PDF")},l(a){t=I(a,"Export to PDF")},m(a,r){V(a,t,r)},d(a){a&&b(t)}}}function W(l){let t,a,r=l[5]+"",$,A,i,C=l[6]+"",c,f;return{c(){t=v("tr"),a=v("th"),$=H(r),A=P(),i=v("td"),c=H(C),f=P()},l(y){t=g(y,"TR",{});var p=L(t);a=g(p,"TH",{});var E=L(a);$=I(E,r),E.forEach(b),A=R(p),i=g(p,"TD",{});var m=L(i);c=I(m,C),m.forEach(b),f=R(p),p.forEach(b)},m(y,p){V(y,t,p),o(t,a),o(a,$),o(t,A),o(t,i),o(i,c),o(t,f)},p(y,p){p&1&&r!==(r=y[5]+"")&&q($,r),p&1&&C!==(C=y[6]+"")&&q(c,C)},d(y){y&&b(t)}}}function X(l){let t,a,r=l[4]+1+"",$,A,i,C,c,f=l[0].ratings[l[4]]+"",y,p,E,m=l[0].appraiserComments[l[4]]+"",D,j,S,k=l[0].localGuidance[l[4]]+"",F,G;return{c(){t=v("tr"),a=v("td"),$=H(r),A=H(". "),i=H(l[2]),C=P(),c=v("td"),y=H(f),p=P(),E=v("td"),D=H(m),j=P(),S=v("td"),F=H(k),G=P()},l(h){t=g(h,"TR",{});var u=L(t);a=g(u,"TD",{});var d=L(a);$=I(d,r),A=I(d,". "),i=I(d,l[2]),d.forEach(b),C=R(u),c=g(u,"TD",{});var B=L(c);y=I(B,f),B.forEach(b),p=R(u),E=g(u,"TD",{});var s=L(E);D=I(s,m),s.forEach(b),j=R(u),S=g(u,"TD",{});var e=L(S);F=I(e,k),e.forEach(b),G=R(u),u.forEach(b)},m(h,u){V(h,t,u),o(t,a),o(a,$),o(a,A),o(a,i),o(t,C),o(t,c),o(c,y),o(t,p),o(t,E),o(E,D),o(t,j),o(t,S),o(S,F),o(t,G)},p(h,u){u&1&&f!==(f=h[0].ratings[h[4]]+"")&&q(y,f),u&1&&m!==(m=h[0].appraiserComments[h[4]]+"")&&q(D,m),u&1&&k!==(k=h[0].localGuidance[h[4]]+"")&&q(F,k)},d(h){h&&b(t)}}}function ut(l){let t,a,r,$="The export to PDF button will open a new tab. Right-click the page and select 'Print'. Then you can export to PDF.",A,i,C,c,f,y="Application details",p,E,m,D,j="Assessment report",S,k,F="<th>Criterion</th> <th>Rating</th> <th>Appraiser Comments</th> <th>Relevant Policy &amp; Guidance</th>",G,h;i=new it({props:{$$slots:{default:[mt]},$$scope:{ctx:l}}}),i.$on("click",l[1]);let u=O([["Site address",l[0].summary.siteAddress],["Local authority reference",l[0].summary.localAuthorityReference],["ATE reference",l[0].summary.ateReference],["Local planning authority",l[0].summary.localPlanningAuthority],["Local highway authority",l[0].summary.localHighwayAuthority],["Completed by",l[0].summary.completedBy],["Date",l[0].summary.date],["Application type",l[0].summary.applicationType],["Summary of proposal",l[0].summary.proposalSummary]]),d=[];for(let e=0;e<9;e+=1)d[e]=W(U(l,u,e));let B=O(J),s=[];for(let e=0;e<B.length;e+=1)s[e]=X(Q(l,B,e));return{c(){t=v("div"),a=v("div"),r=v("p"),r.textContent=$,A=P(),et(i.$$.fragment),C=P(),c=v("table"),f=v("caption"),f.textContent=y,p=P();for(let e=0;e<9;e+=1)d[e].c();E=P(),m=v("table"),D=v("caption"),D.textContent=j,S=P(),k=v("tr"),k.innerHTML=F,G=P();for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=g(e,"DIV",{class:!0});var T=L(t);a=g(T,"DIV",{});var _=L(a);r=g(_,"P",{"data-svelte-h":!0}),M(r)!=="svelte-o29nru"&&(r.textContent=$),A=R(_),at(i.$$.fragment,_),_.forEach(b),C=R(T),c=g(T,"TABLE",{});var n=L(c);f=g(n,"CAPTION",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-jultim"&&(f.textContent=y),p=R(n);for(let N=0;N<9;N+=1)d[N].l(n);n.forEach(b),E=R(T),m=g(T,"TABLE",{});var w=L(m);D=g(w,"CAPTION",{class:!0,"data-svelte-h":!0}),M(D)!=="svelte-1cwmciy"&&(D.textContent=j),S=R(w),k=g(w,"TR",{"data-svelte-h":!0}),M(k)!=="svelte-sdtvlo"&&(k.innerHTML=F),G=R(w);for(let N=0;N<s.length;N+=1)s[N].l(w);w.forEach(b),T.forEach(b),this.h()},h(){K(f,"class","govuk-table__caption govuk-table__caption--m"),K(D,"class","govuk-table__caption govuk-table__caption--m"),K(t,"class","govuk-width-container")},m(e,T){V(e,t,T),o(t,a),o(a,r),o(a,A),lt(i,a,null),o(t,C),o(t,c),o(c,f),o(c,p);for(let _=0;_<9;_+=1)d[_]&&d[_].m(c,null);o(t,E),o(t,m),o(m,D),o(m,S),o(m,k),o(m,G);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(m,null);h=!0},p(e,[T]){const _={};if(T&512&&(_.$$scope={dirty:T,ctx:e}),i.$set(_),T&1){u=O([["Site address",e[0].summary.siteAddress],["Local authority reference",e[0].summary.localAuthorityReference],["ATE reference",e[0].summary.ateReference],["Local planning authority",e[0].summary.localPlanningAuthority],["Local highway authority",e[0].summary.localHighwayAuthority],["Completed by",e[0].summary.completedBy],["Date",e[0].summary.date],["Application type",e[0].summary.applicationType],["Summary of proposal",e[0].summary.proposalSummary]]);let n;for(n=0;n<9;n+=1){const w=U(e,u,n);d[n]?d[n].p(w,T):(d[n]=W(w),d[n].c(),d[n].m(c,null))}for(;n<9;n+=1)d[n].d(1)}if(T&1){B=O(J);let n;for(n=0;n<B.length;n+=1){const w=Q(e,B,n);s[n]?s[n].p(w,T):(s[n]=X(w),s[n].c(),s[n].m(m,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=B.length}},i(e){h||(ot(i.$$.fragment,e),h=!0)},o(e){nt(i.$$.fragment,e),h=!1},d(e){e&&b(t),rt(i),z(d,e),z(s,e)}}}function pt(l,t,a){let r;Z(l,st,A=>a(0,r=A));function $(){window.open(`${ct}/planning/report/printable`,"_blank").focus()}return[r,$]}class Tt extends x{constructor(t){super(),tt(this,t,pt,ut,Y,{})}}export{Tt as component};
