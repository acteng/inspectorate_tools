import{s as X,l as Y,r as q,e as A,a as w,c as B,b as G,f as I,g as D,q as H,v as Z,i as x,h as u,u as ee,m as se,o as te,w as E,k as oe}from"./scheduler.DGwhun8C.js";import{S as ne,i as ae,e as F,c as Q,a as R,m as T,t as v,b as V,d as j}from"./index.B2vZYn3d.js";import"./index.D9tJh_nI.js";import"./index.BnJs9__S.js";import{F as ie}from"./FancyRadio.BPmsajif.js";import{P as K}from"./PrevNext.DV-3vN6k.js";import"./paths.Dte4jAfF.js";import"./entry.BfIEG6W3.js";import{P as re}from"./Progress.CJpOk31B.js";import{s as y}from"./data.C5Owyn4U.js";import{s as L}from"./colors.DaC397qr.js";function ce(s){let a,g,o,_,r,n,f,k,c,h,P,$,t,N,d,m;o=new re({props:{currentIdx:s[0]}}),n=new K({props:{idx:s[0],total:26,urlPath:"route_check/street_placemaking_check/sp"}});const z=s[5].default,l=Y(z,s,s[4],null);function M(e){s[6](e)}function O(e){s[7](e)}function U(e){s[8](e)}function W(e){s[9](e)}let C={choices:s[2]};return s[1].streetPlacemakingCheck.existingScores[s[0]-1]!==void 0&&(C.existingValue=s[1].streetPlacemakingCheck.existingScores[s[0]-1]),s[1].streetPlacemakingCheck.proposedScores[s[0]-1]!==void 0&&(C.proposedValue=s[1].streetPlacemakingCheck.proposedScores[s[0]-1]),s[1].streetPlacemakingCheck.existingScoreNotes[s[0]-1]!==void 0&&(C.existingNotes=s[1].streetPlacemakingCheck.existingScoreNotes[s[0]-1]),s[1].streetPlacemakingCheck.proposedScoreNotes[s[0]-1]!==void 0&&(C.proposedNotes=s[1].streetPlacemakingCheck.proposedScoreNotes[s[0]-1]),c=new ie({props:C}),q.push(()=>F(c,"existingValue",M)),q.push(()=>F(c,"proposedValue",O)),q.push(()=>F(c,"existingNotes",U)),q.push(()=>F(c,"proposedNotes",W)),d=new K({props:{idx:s[0],total:26,urlPath:"route_check/street_placemaking_check/sp"}}),{c(){a=A("div"),g=A("div"),Q(o.$$.fragment),_=w(),r=A("div"),Q(n.$$.fragment),f=w(),l&&l.c(),k=w(),Q(c.$$.fragment),N=w(),Q(d.$$.fragment),this.h()},l(e){a=B(e,"DIV",{class:!0,style:!0});var i=G(a);g=B(i,"DIV",{class:!0});var S=G(g);R(o.$$.fragment,S),S.forEach(I),_=D(i),r=B(i,"DIV",{class:!0});var p=G(r);R(n.$$.fragment,p),f=D(p),l&&l.l(p),k=D(p),R(c.$$.fragment,p),N=D(p),R(d.$$.fragment,p),p.forEach(I),i.forEach(I),this.h()},h(){H(g,"class","govuk-grid-column-one-quarter"),H(r,"class","govuk-grid-column-three-quarters"),H(a,"class","govuk-grid-row"),Z(a,"margin","1em")},m(e,i){x(e,a,i),u(a,g),T(o,g,null),u(a,_),u(a,r),T(n,r,null),u(r,f),l&&l.m(r,null),u(r,k),T(c,r,null),u(r,N),T(d,r,null),m=!0},p(e,[i]){const S={};i&1&&(S.currentIdx=e[0]),o.$set(S);const p={};i&1&&(p.idx=e[0]),n.$set(p),l&&l.p&&(!m||i&16)&&ee(l,z,e,e[4],m?te(z,e[4],i,null):se(e[4]),null);const b={};!h&&i&3&&(h=!0,b.existingValue=e[1].streetPlacemakingCheck.existingScores[e[0]-1],E(()=>h=!1)),!P&&i&3&&(P=!0,b.proposedValue=e[1].streetPlacemakingCheck.proposedScores[e[0]-1],E(()=>P=!1)),!$&&i&3&&($=!0,b.existingNotes=e[1].streetPlacemakingCheck.existingScoreNotes[e[0]-1],E(()=>$=!1)),!t&&i&3&&(t=!0,b.proposedNotes=e[1].streetPlacemakingCheck.proposedScoreNotes[e[0]-1],E(()=>t=!1)),c.$set(b);const J={};i&1&&(J.idx=e[0]),d.$set(J)},i(e){m||(v(o.$$.fragment,e),v(n.$$.fragment,e),v(l,e),v(c.$$.fragment,e),v(d.$$.fragment,e),m=!0)},o(e){V(o.$$.fragment,e),V(n.$$.fragment,e),V(l,e),V(c.$$.fragment,e),V(d.$$.fragment,e),m=!1},d(e){e&&I(a),j(o),j(n),l&&l.d(e),j(c),j(d)}}}function le(s,a,g){let o;oe(s,y,t=>g(1,o=t));let{$$slots:_={},$$scope:r}=a,{idx:n}=a,{cases:f}=a,k=f.map(([t,N])=>[t,N,L[t].background,L[t].font]);function c(t){s.$$.not_equal(o.streetPlacemakingCheck.existingScores[n-1],t)&&(o.streetPlacemakingCheck.existingScores[n-1]=t,y.set(o))}function h(t){s.$$.not_equal(o.streetPlacemakingCheck.proposedScores[n-1],t)&&(o.streetPlacemakingCheck.proposedScores[n-1]=t,y.set(o))}function P(t){s.$$.not_equal(o.streetPlacemakingCheck.existingScoreNotes[n-1],t)&&(o.streetPlacemakingCheck.existingScoreNotes[n-1]=t,y.set(o))}function $(t){s.$$.not_equal(o.streetPlacemakingCheck.proposedScoreNotes[n-1],t)&&(o.streetPlacemakingCheck.proposedScoreNotes[n-1]=t,y.set(o))}return s.$$set=t=>{"idx"in t&&g(0,n=t.idx),"cases"in t&&g(3,f=t.cases),"$$scope"in t&&g(4,r=t.$$scope)},[n,o,k,f,r,_,c,h,P,$]}class Ne extends ne{constructor(a){super(),ae(this,a,le,ce,X,{idx:0,cases:3})}}export{Ne as Q};
