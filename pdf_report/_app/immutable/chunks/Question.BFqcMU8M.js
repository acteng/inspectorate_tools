import{s as W,l as X,r as I,e as z,a as w,c as A,b as B,f as P,g as D,q as G,v as Y,i as Z,h as _,u as ee,m as se,o as te,w as E,k as oe}from"./scheduler.DGwhun8C.js";import{S as re,i as ne,e as F,c as Q,a as x,m as R,t as V,b as y,d as T}from"./index.B2vZYn3d.js";import"./index.CnVVk4TS.js";import"./index.D9tHC91W.js";import{F as ie}from"./FancyRadio.BIihCexb.js";import{P as J}from"./PrevNext.D_RD_olg.js";import"./paths.CFzvE1_4.js";import"./entry.Dt01YFwD.js";import{P as ae}from"./Progress.BaRsNrso.js";import{s as q}from"./data.ysPOLK2O.js";import{s as K}from"./colors.DaC397qr.js";function ce(s){let n,d,o,m,a,r,l,h,c,k,$,N,t,C,u,g;o=new ae({props:{currentIdx:s[0]}}),r=new J({props:{idx:s[0],total:26,startIdx:17,urlPath:"route_check/street_check/st"}});const j=s[5].default,p=X(j,s,s[4],null);function L(e){s[6](e)}function M(e){s[7](e)}function O(e){s[8](e)}function U(e){s[9](e)}let S={choices:s[2]};return s[1].streetCheck.existingScores[s[0]-1]!==void 0&&(S.existingValue=s[1].streetCheck.existingScores[s[0]-1]),s[1].streetCheck.proposedScores[s[0]-1]!==void 0&&(S.proposedValue=s[1].streetCheck.proposedScores[s[0]-1]),s[1].streetCheck.existingScoreNotes[s[0]-1]!==void 0&&(S.existingNotes=s[1].streetCheck.existingScoreNotes[s[0]-1]),s[1].streetCheck.proposedScoreNotes[s[0]-1]!==void 0&&(S.proposedNotes=s[1].streetCheck.proposedScoreNotes[s[0]-1]),c=new ie({props:S}),I.push(()=>F(c,"existingValue",L)),I.push(()=>F(c,"proposedValue",M)),I.push(()=>F(c,"existingNotes",O)),I.push(()=>F(c,"proposedNotes",U)),u=new J({props:{idx:s[0],total:26,startIdx:17,urlPath:"route_check/street_check/st"}}),{c(){n=z("div"),d=z("div"),Q(o.$$.fragment),m=w(),a=z("div"),Q(r.$$.fragment),l=w(),p&&p.c(),h=w(),Q(c.$$.fragment),C=w(),Q(u.$$.fragment),this.h()},l(e){n=A(e,"DIV",{class:!0,style:!0});var i=B(n);d=A(i,"DIV",{class:!0});var b=B(d);x(o.$$.fragment,b),b.forEach(P),m=D(i),a=A(i,"DIV",{class:!0});var f=B(a);x(r.$$.fragment,f),l=D(f),p&&p.l(f),h=D(f),x(c.$$.fragment,f),C=D(f),x(u.$$.fragment,f),f.forEach(P),i.forEach(P),this.h()},h(){G(d,"class","govuk-grid-column-one-quarter"),G(a,"class","govuk-grid-column-three-quarters"),G(n,"class","govuk-grid-row"),Y(n,"margin","1em")},m(e,i){Z(e,n,i),_(n,d),R(o,d,null),_(n,m),_(n,a),R(r,a,null),_(a,l),p&&p.m(a,null),_(a,h),R(c,a,null),_(a,C),R(u,a,null),g=!0},p(e,[i]){const b={};i&1&&(b.currentIdx=e[0]),o.$set(b);const f={};i&1&&(f.idx=e[0]),r.$set(f),p&&p.p&&(!g||i&16)&&ee(p,j,e,e[4],g?te(j,e[4],i,null):se(e[4]),null);const v={};!k&&i&3&&(k=!0,v.existingValue=e[1].streetCheck.existingScores[e[0]-1],E(()=>k=!1)),!$&&i&3&&($=!0,v.proposedValue=e[1].streetCheck.proposedScores[e[0]-1],E(()=>$=!1)),!N&&i&3&&(N=!0,v.existingNotes=e[1].streetCheck.existingScoreNotes[e[0]-1],E(()=>N=!1)),!t&&i&3&&(t=!0,v.proposedNotes=e[1].streetCheck.proposedScoreNotes[e[0]-1],E(()=>t=!1)),c.$set(v);const H={};i&1&&(H.idx=e[0]),u.$set(H)},i(e){g||(V(o.$$.fragment,e),V(r.$$.fragment,e),V(p,e),V(c.$$.fragment,e),V(u.$$.fragment,e),g=!0)},o(e){y(o.$$.fragment,e),y(r.$$.fragment,e),y(p,e),y(c.$$.fragment,e),y(u.$$.fragment,e),g=!1},d(e){e&&P(n),T(o),T(r),p&&p.d(e),T(c),T(u)}}}function pe(s,n,d){let o;oe(s,q,t=>d(1,o=t));let{$$slots:m={},$$scope:a}=n,{idx:r}=n,{cases:l}=n,h=l.map(([t,C])=>[t,C,K[t].background,K[t].font]);function c(t){s.$$.not_equal(o.streetCheck.existingScores[r-1],t)&&(o.streetCheck.existingScores[r-1]=t,q.set(o))}function k(t){s.$$.not_equal(o.streetCheck.proposedScores[r-1],t)&&(o.streetCheck.proposedScores[r-1]=t,q.set(o))}function $(t){s.$$.not_equal(o.streetCheck.existingScoreNotes[r-1],t)&&(o.streetCheck.existingScoreNotes[r-1]=t,q.set(o))}function N(t){s.$$.not_equal(o.streetCheck.proposedScoreNotes[r-1],t)&&(o.streetCheck.proposedScoreNotes[r-1]=t,q.set(o))}return s.$$set=t=>{"idx"in t&&d(0,r=t.idx),"cases"in t&&d(3,l=t.cases),"$$scope"in t&&d(4,a=t.$$scope)},[r,o,h,l,a,m,c,k,$,N]}class Ce extends re{constructor(n){super(),ne(this,n,pe,ce,W,{idx:0,cases:3})}}export{Ce as Q};
