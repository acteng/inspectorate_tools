import{s as X,l as Y,e as b,a as L,c as A,b as R,g as D,p as U,f as T,q as M,i as V,h as r,u as Z,m as x,o as ee,K as z,k as te,t as H,d as P,j as q,v as G}from"./scheduler.DGwhun8C.js";import{S as ae,i as le,t as oe,b as re}from"./index.B2vZYn3d.js";import{e as N}from"./each.osbS1YKp.js";import{s as se}from"./data.DIs5_uZl.js";import{c as F,g as ne}from"./lists.BoRU6pxz.js";function K(l,a,s){const o=l.slice();o[3]=a[s],o[7]=s;const u=ne(o[0].ratings[o[7]]);return o[4]=u[0],o[5]=u[1],o}function J(l,a,s){const o=l.slice();return o[8]=a[s][0],o[9]=a[s][1],o}function Q(l){let a,s,o=l[8]+"",u,h,p,C=l[9]+"",_,f;return{c(){a=b("tr"),s=b("th"),u=H(o),h=L(),p=b("td"),_=H(C),f=L()},l(m){a=A(m,"TR",{});var v=R(a);s=A(v,"TH",{});var E=R(s);u=P(E,o),E.forEach(T),h=D(v),p=A(v,"TD",{});var g=R(p);_=P(g,C),g.forEach(T),f=D(v),v.forEach(T)},m(m,v){V(m,a,v),r(a,s),r(s,u),r(a,h),r(a,p),r(p,_),r(a,f)},p(m,v){v&1&&o!==(o=m[8]+"")&&q(u,o),v&1&&C!==(C=m[9]+"")&&q(_,C)},d(m){m&&T(a)}}}function W(l){let a,s,o=l[7]+1+"",u,h,p,C,_,f=l[0].ratings[l[7]]+"",m,v,E,g=l[0].appraiserComments[l[7]]+"",$,j,k,w=l[0].localGuidance[l[7]]+"",d,B;return{c(){a=b("tr"),s=b("td"),u=H(o),h=H(". "),p=H(l[3]),C=L(),_=b("td"),m=H(f),v=L(),E=b("td"),$=H(g),j=L(),k=b("td"),d=H(w),B=L(),this.h()},l(n){a=A(n,"TR",{});var i=R(a);s=A(i,"TD",{});var c=R(s);u=P(c,o),h=P(c,". "),p=P(c,l[3]),c.forEach(T),C=D(i),_=A(i,"TD",{});var e=R(_);m=P(e,f),e.forEach(T),v=D(i),E=A(i,"TD",{});var y=R(E);$=P(y,g),y.forEach(T),j=D(i),k=A(i,"TD",{});var t=R(k);d=P(t,w),t.forEach(T),B=D(i),i.forEach(T),this.h()},h(){G(s,"min-width","125px"),G(_,"background",l[4]),G(_,"color",l[5])},m(n,i){V(n,a,i),r(a,s),r(s,u),r(s,h),r(s,p),r(a,C),r(a,_),r(_,m),r(a,v),r(a,E),r(E,$),r(a,j),r(a,k),r(k,d),r(a,B)},p(n,i){i&1&&f!==(f=n[0].ratings[n[7]]+"")&&q(m,f),i&1&&G(_,"background",n[4]),i&1&&G(_,"color",n[5]),i&1&&g!==(g=n[0].appraiserComments[n[7]]+"")&&q($,g),i&1&&w!==(w=n[0].localGuidance[n[7]]+"")&&q(d,w)},d(n){n&&T(a)}}}function ie(l){let a,s,o,u,h,p="Application details",C,_,f,m,v="Assessment report",E,g,$="<th>Criterion</th> <th>Rating</th> <th>Appraiser Comments</th> <th>Relevant Policy &amp; Guidance</th>",j,k;const w=l[2].default,d=Y(w,l,l[1],null);let B=N([["Summary of proposal",l[0].summary.proposalSummary],["Application type",l[0].summary.applicationType],["Site address",l[0].summary.siteAddress],["Local planning authority",l[0].summary.localPlanningAuthority],["Local highway authority",l[0].summary.localHighwayAuthority],["Local authority reference (if available)",l[0].summary.localAuthorityReference],["ATE reference (if available)",l[0].summary.ateReference],["Completed by (User and Organisation)",l[0].summary.completedBy],["Date",l[0].summary.date]]),n=[];for(let e=0;e<9;e+=1)n[e]=Q(J(l,B,e));let i=N(F),c=[];for(let e=0;e<i.length;e+=1)c[e]=W(K(l,i,e));return{c(){a=b("div"),d&&d.c(),s=L(),o=b("div"),u=b("table"),h=b("caption"),h.textContent=p,C=L();for(let e=0;e<9;e+=1)n[e].c();_=L(),f=b("table"),m=b("caption"),m.textContent=v,E=L(),g=b("tr"),g.innerHTML=$,j=L();for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){a=A(e,"DIV",{class:!0});var y=R(a);d&&d.l(y),s=D(y),o=A(y,"DIV",{class:!0});var t=R(o);u=A(t,"TABLE",{});var S=R(u);h=A(S,"CAPTION",{class:!0,"data-svelte-h":!0}),U(h)!=="svelte-fk5lim"&&(h.textContent=p),C=D(S);for(let I=0;I<9;I+=1)n[I].l(S);S.forEach(T),_=D(t),f=A(t,"TABLE",{});var O=R(f);m=A(O,"CAPTION",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-1jovfca"&&(m.textContent=v),E=D(O),g=A(O,"TR",{"data-svelte-h":!0}),U(g)!=="svelte-1kj7lz0"&&(g.innerHTML=$),j=D(O);for(let I=0;I<c.length;I+=1)c[I].l(O);O.forEach(T),t.forEach(T),y.forEach(T),this.h()},h(){M(h,"class","govuk-table__caption govuk-table__caption--m"),M(m,"class","govuk-table__caption govuk-table__caption--m"),M(o,"class","report svelte-ljbpxd"),M(a,"class","govuk-width-container")},m(e,y){V(e,a,y),d&&d.m(a,null),r(a,s),r(a,o),r(o,u),r(u,h),r(u,C);for(let t=0;t<9;t+=1)n[t]&&n[t].m(u,null);r(o,_),r(o,f),r(f,m),r(f,E),r(f,g),r(f,j);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(f,null);k=!0},p(e,[y]){if(d&&d.p&&(!k||y&2)&&Z(d,w,e,e[1],k?ee(w,e[1],y,null):x(e[1]),null),y&1){B=N([["Summary of proposal",e[0].summary.proposalSummary],["Application type",e[0].summary.applicationType],["Site address",e[0].summary.siteAddress],["Local planning authority",e[0].summary.localPlanningAuthority],["Local highway authority",e[0].summary.localHighwayAuthority],["Local authority reference (if available)",e[0].summary.localAuthorityReference],["ATE reference (if available)",e[0].summary.ateReference],["Completed by (User and Organisation)",e[0].summary.completedBy],["Date",e[0].summary.date]]);let t;for(t=0;t<9;t+=1){const S=J(e,B,t);n[t]?n[t].p(S,y):(n[t]=Q(S),n[t].c(),n[t].m(u,null))}for(;t<9;t+=1)n[t].d(1)}if(y&1){i=N(F);let t;for(t=0;t<i.length;t+=1){const S=K(e,i,t);c[t]?c[t].p(S,y):(c[t]=W(S),c[t].c(),c[t].m(f,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=i.length}},i(e){k||(oe(d,e),k=!0)},o(e){re(d,e),k=!1},d(e){e&&T(a),d&&d.d(e),z(n,e),z(c,e)}}}function ue(l,a,s){let o;te(l,se,p=>s(0,o=p));let{$$slots:u={},$$scope:h}=a;return l.$$set=p=>{"$$scope"in p&&s(1,h=p.$$scope)},[o,h,u]}class de extends ae{constructor(a){super(),le(this,a,ue,ie,X,{})}}export{de as R};
