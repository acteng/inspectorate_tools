import{s as X,l as Y,d as T,K as z,u as Z,m as x,o as ee,i as V,b as r,p as M,c as b,e as R,g as L,q as U,h as A,j as D,k as te,a as q,f as H,t as P,w as G}from"./hklQk-fT.js";import{S as ae,i as le,t as oe,a as re}from"./4RGf_tlt.js";import{e as N}from"./BrDnhTDH.js";import{s as se}from"./DB72yXYm.js";import{c as F,g as ne}from"./BoRU6pxz.js";function K(l,a,s){const o=l.slice();o[3]=a[s],o[7]=s;const u=ne(o[0].ratings[o[7]]);return o[4]=u[0],o[5]=u[1],o}function J(l,a,s){const o=l.slice();return o[8]=a[s][0],o[9]=a[s][1],o}function Q(l){let a,s,o=l[8]+"",u,h,p,C=l[9]+"",_,f;return{c(){a=A("tr"),s=A("th"),u=P(o),h=D(),p=A("td"),_=P(C),f=D()},l(m){a=b(m,"TR",{});var v=R(a);s=b(v,"TH",{});var E=R(s);u=H(E,o),E.forEach(T),h=L(v),p=b(v,"TD",{});var g=R(p);_=H(g,C),g.forEach(T),f=L(v),v.forEach(T)},m(m,v){V(m,a,v),r(a,s),r(s,u),r(a,h),r(a,p),r(p,_),r(a,f)},p(m,v){v&1&&o!==(o=m[8]+"")&&q(u,o),v&1&&C!==(C=m[9]+"")&&q(_,C)},d(m){m&&T(a)}}}function W(l){let a,s,o=l[7]+1+"",u,h,p,C,_,f=l[0].ratings[l[7]]+"",m,v,E,g=l[0].appraiserComments[l[7]]+"",$,j,k,w=l[0].localGuidance[l[7]]+"",d,B;return{c(){a=A("tr"),s=A("td"),u=P(o),h=P(". "),p=P(l[3]),C=D(),_=A("td"),m=P(f),v=D(),E=A("td"),$=P(g),j=D(),k=A("td"),d=P(w),B=D(),this.h()},l(n){a=b(n,"TR",{});var i=R(a);s=b(i,"TD",{});var c=R(s);u=H(c,o),h=H(c,". "),p=H(c,l[3]),c.forEach(T),C=L(i),_=b(i,"TD",{});var e=R(_);m=H(e,f),e.forEach(T),v=L(i),E=b(i,"TD",{});var y=R(E);$=H(y,g),y.forEach(T),j=L(i),k=b(i,"TD",{});var t=R(k);d=H(t,w),t.forEach(T),B=L(i),i.forEach(T),this.h()},h(){G(s,"min-width","125px"),G(_,"background",l[4]),G(_,"color",l[5])},m(n,i){V(n,a,i),r(a,s),r(s,u),r(s,h),r(s,p),r(a,C),r(a,_),r(_,m),r(a,v),r(a,E),r(E,$),r(a,j),r(a,k),r(k,d),r(a,B)},p(n,i){i&1&&f!==(f=n[0].ratings[n[7]]+"")&&q(m,f),i&1&&G(_,"background",n[4]),i&1&&G(_,"color",n[5]),i&1&&g!==(g=n[0].appraiserComments[n[7]]+"")&&q($,g),i&1&&w!==(w=n[0].localGuidance[n[7]]+"")&&q(d,w)},d(n){n&&T(a)}}}function ie(l){let a,s,o,u,h,p="Application details",C,_,f,m,v="Assessment report",E,g,$="<th>Criterion</th> <th>Rating</th> <th>Appraiser Comments</th> <th>Relevant Policy &amp; Guidance</th>",j,k;const w=l[2].default,d=Y(w,l,l[1],null);let B=N([["Summary of proposal",l[0].summary.proposalSummary],["Application type",l[0].summary.applicationType],["Site address",l[0].summary.siteAddress],["Local planning authority",l[0].summary.localPlanningAuthority],["Local highway authority",l[0].summary.localHighwayAuthority],["Local authority reference (if available)",l[0].summary.localAuthorityReference],["ATE reference (if available)",l[0].summary.ateReference],["Completed by (User and Organisation)",l[0].summary.completedBy],["Date",l[0].summary.date]]),n=[];for(let e=0;e<9;e+=1)n[e]=Q(J(l,B,e));let i=N(F),c=[];for(let e=0;e<i.length;e+=1)c[e]=W(K(l,i,e));return{c(){a=A("div"),d&&d.c(),s=D(),o=A("div"),u=A("table"),h=A("caption"),h.textContent=p,C=D();for(let e=0;e<9;e+=1)n[e].c();_=D(),f=A("table"),m=A("caption"),m.textContent=v,E=D(),g=A("tr"),g.innerHTML=$,j=D();for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){a=b(e,"DIV",{class:!0});var y=R(a);d&&d.l(y),s=L(y),o=b(y,"DIV",{class:!0});var t=R(o);u=b(t,"TABLE",{});var S=R(u);h=b(S,"CAPTION",{class:!0,"data-svelte-h":!0}),U(h)!=="svelte-fk5lim"&&(h.textContent=p),C=L(S);for(let I=0;I<9;I+=1)n[I].l(S);S.forEach(T),_=L(t),f=b(t,"TABLE",{});var O=R(f);m=b(O,"CAPTION",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-1jovfca"&&(m.textContent=v),E=L(O),g=b(O,"TR",{"data-svelte-h":!0}),U(g)!=="svelte-1kj7lz0"&&(g.innerHTML=$),j=L(O);for(let I=0;I<c.length;I+=1)c[I].l(O);O.forEach(T),t.forEach(T),y.forEach(T),this.h()},h(){M(h,"class","govuk-table__caption govuk-table__caption--m"),M(m,"class","govuk-table__caption govuk-table__caption--m"),M(o,"class","report svelte-ljbpxd"),M(a,"class","govuk-width-container")},m(e,y){V(e,a,y),d&&d.m(a,null),r(a,s),r(a,o),r(o,u),r(u,h),r(u,C);for(let t=0;t<9;t+=1)n[t]&&n[t].m(u,null);r(o,_),r(o,f),r(f,m),r(f,E),r(f,g),r(f,j);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(f,null);k=!0},p(e,[y]){if(d&&d.p&&(!k||y&2)&&Z(d,w,e,e[1],k?ee(w,e[1],y,null):x(e[1]),null),y&1){B=N([["Summary of proposal",e[0].summary.proposalSummary],["Application type",e[0].summary.applicationType],["Site address",e[0].summary.siteAddress],["Local planning authority",e[0].summary.localPlanningAuthority],["Local highway authority",e[0].summary.localHighwayAuthority],["Local authority reference (if available)",e[0].summary.localAuthorityReference],["ATE reference (if available)",e[0].summary.ateReference],["Completed by (User and Organisation)",e[0].summary.completedBy],["Date",e[0].summary.date]]);let t;for(t=0;t<9;t+=1){const S=J(e,B,t);n[t]?n[t].p(S,y):(n[t]=Q(S),n[t].c(),n[t].m(u,null))}for(;t<9;t+=1)n[t].d(1)}if(y&1){i=N(F);let t;for(t=0;t<i.length;t+=1){const S=K(e,i,t);c[t]?c[t].p(S,y):(c[t]=W(S),c[t].c(),c[t].m(f,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=i.length}},i(e){k||(re(d,e),k=!0)},o(e){oe(d,e),k=!1},d(e){e&&T(a),d&&d.d(e),z(n,e),z(c,e)}}}function ue(l,a,s){let o;te(l,se,p=>s(0,o=p));let{$$slots:u={},$$scope:h}=a;return l.$$set=p=>{"$$scope"in p&&s(1,h=p.$$scope)},[o,h,u]}class de extends ae{constructor(a){super(),le(this,a,ue,ie,X,{})}}export{de as R};
