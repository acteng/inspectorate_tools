import{s as X,l as Y,r as q,e as A,a as w,c as B,b as G,f as I,g as D,q as H,v as Z,i as x,h as u,u as ee,m as ae,o as se,w as E,k as oe}from"./scheduler.DGwhun8C.js";import{S as te,i as ne,e as F,c as Q,a as R,m as T,t as v,b as V,d as j}from"./index.B2vZYn3d.js";import"./index.2XmQ0sD8.js";import"./index.kK6rdmBQ.js";import{F as ie}from"./FancyRadio.FqNUhEau.js";import{P as K}from"./PrevNext.BncEW5Q8.js";import"./paths.Bpw1pdvs.js";import"./entry.C-91A-ig.js";import{P as re}from"./Progress.YGkSu4a9.js";import{s as y}from"./data.Bo-JBPgk.js";import{s as L}from"./colors.DaC397qr.js";function pe(a){let n,l,o,h,r,t,f,_,p,k,P,$,s,N,d,m;o=new re({props:{currentIdx:a[0]}}),t=new K({props:{idx:a[0],total:19,urlPath:"route_check/path_placemaking_check/pp"}});const z=a[5].default,c=Y(z,a,a[4],null);function M(e){a[6](e)}function O(e){a[7](e)}function U(e){a[8](e)}function W(e){a[9](e)}let C={choices:a[2]};return a[1].pathPlacemakingCheck.existingScores[a[0]-1]!==void 0&&(C.existingValue=a[1].pathPlacemakingCheck.existingScores[a[0]-1]),a[1].pathPlacemakingCheck.proposedScores[a[0]-1]!==void 0&&(C.proposedValue=a[1].pathPlacemakingCheck.proposedScores[a[0]-1]),a[1].pathPlacemakingCheck.existingScoreNotes[a[0]-1]!==void 0&&(C.existingNotes=a[1].pathPlacemakingCheck.existingScoreNotes[a[0]-1]),a[1].pathPlacemakingCheck.proposedScoreNotes[a[0]-1]!==void 0&&(C.proposedNotes=a[1].pathPlacemakingCheck.proposedScoreNotes[a[0]-1]),p=new ie({props:C}),q.push(()=>F(p,"existingValue",M)),q.push(()=>F(p,"proposedValue",O)),q.push(()=>F(p,"existingNotes",U)),q.push(()=>F(p,"proposedNotes",W)),d=new K({props:{idx:a[0],total:19,urlPath:"route_check/path_placemaking_check/pp"}}),{c(){n=A("div"),l=A("div"),Q(o.$$.fragment),h=w(),r=A("div"),Q(t.$$.fragment),f=w(),c&&c.c(),_=w(),Q(p.$$.fragment),N=w(),Q(d.$$.fragment),this.h()},l(e){n=B(e,"DIV",{class:!0,style:!0});var i=G(n);l=B(i,"DIV",{class:!0});var S=G(l);R(o.$$.fragment,S),S.forEach(I),h=D(i),r=B(i,"DIV",{class:!0});var g=G(r);R(t.$$.fragment,g),f=D(g),c&&c.l(g),_=D(g),R(p.$$.fragment,g),N=D(g),R(d.$$.fragment,g),g.forEach(I),i.forEach(I),this.h()},h(){H(l,"class","govuk-grid-column-one-quarter"),H(r,"class","govuk-grid-column-three-quarters"),H(n,"class","govuk-grid-row"),Z(n,"margin","1em")},m(e,i){x(e,n,i),u(n,l),T(o,l,null),u(n,h),u(n,r),T(t,r,null),u(r,f),c&&c.m(r,null),u(r,_),T(p,r,null),u(r,N),T(d,r,null),m=!0},p(e,[i]){const S={};i&1&&(S.currentIdx=e[0]),o.$set(S);const g={};i&1&&(g.idx=e[0]),t.$set(g),c&&c.p&&(!m||i&16)&&ee(c,z,e,e[4],m?se(z,e[4],i,null):ae(e[4]),null);const b={};!k&&i&3&&(k=!0,b.existingValue=e[1].pathPlacemakingCheck.existingScores[e[0]-1],E(()=>k=!1)),!P&&i&3&&(P=!0,b.proposedValue=e[1].pathPlacemakingCheck.proposedScores[e[0]-1],E(()=>P=!1)),!$&&i&3&&($=!0,b.existingNotes=e[1].pathPlacemakingCheck.existingScoreNotes[e[0]-1],E(()=>$=!1)),!s&&i&3&&(s=!0,b.proposedNotes=e[1].pathPlacemakingCheck.proposedScoreNotes[e[0]-1],E(()=>s=!1)),p.$set(b);const J={};i&1&&(J.idx=e[0]),d.$set(J)},i(e){m||(v(o.$$.fragment,e),v(t.$$.fragment,e),v(c,e),v(p.$$.fragment,e),v(d.$$.fragment,e),m=!0)},o(e){V(o.$$.fragment,e),V(t.$$.fragment,e),V(c,e),V(p.$$.fragment,e),V(d.$$.fragment,e),m=!1},d(e){e&&I(n),j(o),j(t),c&&c.d(e),j(p),j(d)}}}function ce(a,n,l){let o;oe(a,y,s=>l(1,o=s));let{$$slots:h={},$$scope:r}=n,{idx:t}=n,{cases:f}=n,_=f.map(([s,N])=>[s,N,L[s].background,L[s].font]);function p(s){a.$$.not_equal(o.pathPlacemakingCheck.existingScores[t-1],s)&&(o.pathPlacemakingCheck.existingScores[t-1]=s,y.set(o))}function k(s){a.$$.not_equal(o.pathPlacemakingCheck.proposedScores[t-1],s)&&(o.pathPlacemakingCheck.proposedScores[t-1]=s,y.set(o))}function P(s){a.$$.not_equal(o.pathPlacemakingCheck.existingScoreNotes[t-1],s)&&(o.pathPlacemakingCheck.existingScoreNotes[t-1]=s,y.set(o))}function $(s){a.$$.not_equal(o.pathPlacemakingCheck.proposedScoreNotes[t-1],s)&&(o.pathPlacemakingCheck.proposedScoreNotes[t-1]=s,y.set(o))}return a.$$set=s=>{"idx"in s&&l(0,t=s.idx),"cases"in s&&l(3,f=s.cases),"$$scope"in s&&l(4,r=s.$$scope)},[t,o,_,f,r,h,p,k,P,$]}class Ne extends te{constructor(n){super(),ne(this,n,ce,pe,X,{idx:0,cases:3})}}export{Ne as Q};
