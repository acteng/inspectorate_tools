import{s as tt,v as et,e as i,a as v,t as R,c,b as g,p as V,g as b,d as q,f,r as W,i as at,h as t,j as w,w as st,k as nt}from"../chunks/scheduler.BBS-fkhU.js";import{S as ot,i as rt,e as lt,c as it,a as ct,m as ut,t as dt,b as pt,d as _t}from"../chunks/index.B8H3ypVf.js";import{s as X}from"../chunks/data.CCTZJ1PZ.js";import{s as Y}from"../chunks/index.DCyIebKp.js";import{T as ft}from"../chunks/TextArea.Ck6ITb4v.js";function mt(a){let s,l,S="Traffic Mitigation Check Results",C,o,m=a[0].trafficMitigationCheck.notes+"",r,H,u,h,z="Area Scorecard Results",L,T,F="<th>Existing Area Score</th> <th>Proposed Area Score</th> <th>Uplift</th>",j,d,$,P,y,x,D,B,A,N=a[1]-a[2]+"",I,O,p,U,_;function Z(e){a[3](e)}let G={label:"Comments on Area Scorecard"};return a[0].resultsNotes!==void 0&&(G.value=a[0].resultsNotes),p=new ft({props:G}),et.push(()=>lt(p,"value",Z)),{c(){s=i("div"),l=i("h2"),l.textContent=S,C=v(),o=i("p"),r=R(m),H=v(),u=i("table"),h=i("caption"),h.textContent=z,L=v(),T=i("tr"),T.innerHTML=F,j=v(),d=i("tr"),$=i("td"),P=R(a[2]),y=v(),x=i("td"),D=R(a[1]),B=v(),A=i("td"),I=R(N),O=v(),it(p.$$.fragment),this.h()},l(e){s=c(e,"DIV",{class:!0});var n=g(s);l=c(n,"H2",{"data-svelte-h":!0}),V(l)!=="svelte-anx0ls"&&(l.textContent=S),C=b(n),o=c(n,"P",{});var M=g(o);r=q(M,m),M.forEach(f),H=b(n),u=c(n,"TABLE",{});var E=g(u);h=c(E,"CAPTION",{class:!0,"data-svelte-h":!0}),V(h)!=="svelte-n1427n"&&(h.textContent=z),L=b(E),T=c(E,"TR",{"data-svelte-h":!0}),V(T)!=="svelte-18seq6c"&&(T.innerHTML=F),j=b(E),d=c(E,"TR",{});var k=g(d);$=c(k,"TD",{});var J=g($);P=q(J,a[2]),J.forEach(f),y=b(k),x=c(k,"TD",{});var K=g(x);D=q(K,a[1]),K.forEach(f),B=b(k),A=c(k,"TD",{});var Q=g(A);I=q(Q,N),Q.forEach(f),k.forEach(f),E.forEach(f),O=b(n),ct(p.$$.fragment,n),n.forEach(f),this.h()},h(){W(h,"class","govuk-table__caption govuk-table__caption--m"),W(s,"class","govuk-width-container")},m(e,n){at(e,s,n),t(s,l),t(s,C),t(s,o),t(o,r),t(s,H),t(s,u),t(u,h),t(u,L),t(u,T),t(u,j),t(u,d),t(d,$),t($,P),t(d,y),t(d,x),t(x,D),t(d,B),t(d,A),t(A,I),t(s,O),ut(p,s,null),_=!0},p(e,[n]){(!_||n&1)&&m!==(m=e[0].trafficMitigationCheck.notes+"")&&w(r,m),(!_||n&4)&&w(P,e[2]),(!_||n&2)&&w(D,e[1]),(!_||n&6)&&N!==(N=e[1]-e[2]+"")&&w(I,N);const M={};!U&&n&1&&(U=!0,M.value=e[0].resultsNotes,st(()=>U=!1)),p.$set(M)},i(e){_||(dt(p.$$.fragment,e),_=!0)},o(e){pt(p.$$.fragment,e),_=!1},d(e){e&&f(s),_t(p)}}}function ht(a,s,l){let S,C,o;nt(a,X,r=>l(0,o=r));function m(r){a.$$.not_equal(o.resultsNotes,r)&&(o.resultsNotes=r,X.set(o))}return a.$$.update=()=>{a.$$.dirty&1&&l(2,S=Y(o.existingScores.map(r=>parseInt(r||"0")))),a.$$.dirty&1&&l(1,C=Y(o.proposedScores.map(r=>parseInt(r||"0"))))},[o,C,S,m]}class Et extends ot{constructor(s){super(),rt(this,s,ht,mt,tt,{})}}export{Et as component};
