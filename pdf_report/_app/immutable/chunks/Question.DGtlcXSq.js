import{s as W,l as X,r as I,e as z,a as w,c as A,b as B,f as P,g as D,q as G,v as Y,i as Z,h as g,u as ee,m as se,o as te,w as E,k as oe}from"./scheduler.DGwhun8C.js";import{S as ne,i as ae,e as F,c as Q,a as x,m as R,t as V,b as y,d as T}from"./index.B2vZYn3d.js";import"./index.zxIwAqHz.js";import"./index.5ca6cCK0.js";import{F as ie}from"./FancyRadio.NoP93FS3.js";import{P as J}from"./PrevNext.DNE8IEUf.js";import"./paths.C8wqnciO.js";import"./entry.D76FyFwv.js";import{P as re}from"./Progress.CFWmnL3j.js";import{s as q}from"./data.oI-BDk8i.js";import{s as K}from"./colors.DaC397qr.js";function pe(s){let a,d,o,_,r,n,h,m,p,k,$,N,t,C,u,l;o=new re({props:{currentIdx:s[0]}}),n=new J({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}});const j=s[5].default,c=X(j,s,s[4],null);function L(e){s[6](e)}function M(e){s[7](e)}function O(e){s[8](e)}function U(e){s[9](e)}let S={choices:s[2]};return s[1].pathCheck.existingScores[s[0]-1]!==void 0&&(S.existingValue=s[1].pathCheck.existingScores[s[0]-1]),s[1].pathCheck.proposedScores[s[0]-1]!==void 0&&(S.proposedValue=s[1].pathCheck.proposedScores[s[0]-1]),s[1].pathCheck.existingScoreNotes[s[0]-1]!==void 0&&(S.existingNotes=s[1].pathCheck.existingScoreNotes[s[0]-1]),s[1].pathCheck.proposedScoreNotes[s[0]-1]!==void 0&&(S.proposedNotes=s[1].pathCheck.proposedScoreNotes[s[0]-1]),p=new ie({props:S}),I.push(()=>F(p,"existingValue",L)),I.push(()=>F(p,"proposedValue",M)),I.push(()=>F(p,"existingNotes",O)),I.push(()=>F(p,"proposedNotes",U)),u=new J({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),{c(){a=z("div"),d=z("div"),Q(o.$$.fragment),_=w(),r=z("div"),Q(n.$$.fragment),h=w(),c&&c.c(),m=w(),Q(p.$$.fragment),C=w(),Q(u.$$.fragment),this.h()},l(e){a=A(e,"DIV",{class:!0,style:!0});var i=B(a);d=A(i,"DIV",{class:!0});var b=B(d);x(o.$$.fragment,b),b.forEach(P),_=D(i),r=A(i,"DIV",{class:!0});var f=B(r);x(n.$$.fragment,f),h=D(f),c&&c.l(f),m=D(f),x(p.$$.fragment,f),C=D(f),x(u.$$.fragment,f),f.forEach(P),i.forEach(P),this.h()},h(){G(d,"class","govuk-grid-column-one-quarter"),G(r,"class","govuk-grid-column-three-quarters"),G(a,"class","govuk-grid-row"),Y(a,"margin","1em")},m(e,i){Z(e,a,i),g(a,d),R(o,d,null),g(a,_),g(a,r),R(n,r,null),g(r,h),c&&c.m(r,null),g(r,m),R(p,r,null),g(r,C),R(u,r,null),l=!0},p(e,[i]){const b={};i&1&&(b.currentIdx=e[0]),o.$set(b);const f={};i&1&&(f.idx=e[0]),n.$set(f),c&&c.p&&(!l||i&16)&&ee(c,j,e,e[4],l?te(j,e[4],i,null):se(e[4]),null);const v={};!k&&i&3&&(k=!0,v.existingValue=e[1].pathCheck.existingScores[e[0]-1],E(()=>k=!1)),!$&&i&3&&($=!0,v.proposedValue=e[1].pathCheck.proposedScores[e[0]-1],E(()=>$=!1)),!N&&i&3&&(N=!0,v.existingNotes=e[1].pathCheck.existingScoreNotes[e[0]-1],E(()=>N=!1)),!t&&i&3&&(t=!0,v.proposedNotes=e[1].pathCheck.proposedScoreNotes[e[0]-1],E(()=>t=!1)),p.$set(v);const H={};i&1&&(H.idx=e[0]),u.$set(H)},i(e){l||(V(o.$$.fragment,e),V(n.$$.fragment,e),V(c,e),V(p.$$.fragment,e),V(u.$$.fragment,e),l=!0)},o(e){y(o.$$.fragment,e),y(n.$$.fragment,e),y(c,e),y(p.$$.fragment,e),y(u.$$.fragment,e),l=!1},d(e){e&&P(a),T(o),T(n),c&&c.d(e),T(p),T(u)}}}function ce(s,a,d){let o;oe(s,q,t=>d(1,o=t));let{$$slots:_={},$$scope:r}=a,{idx:n}=a,{cases:h}=a,m=h.map(([t,C])=>[t,C,K[t].background,K[t].font]);function p(t){s.$$.not_equal(o.pathCheck.existingScores[n-1],t)&&(o.pathCheck.existingScores[n-1]=t,q.set(o))}function k(t){s.$$.not_equal(o.pathCheck.proposedScores[n-1],t)&&(o.pathCheck.proposedScores[n-1]=t,q.set(o))}function $(t){s.$$.not_equal(o.pathCheck.existingScoreNotes[n-1],t)&&(o.pathCheck.existingScoreNotes[n-1]=t,q.set(o))}function N(t){s.$$.not_equal(o.pathCheck.proposedScoreNotes[n-1],t)&&(o.pathCheck.proposedScoreNotes[n-1]=t,q.set(o))}return s.$$set=t=>{"idx"in t&&d(0,n=t.idx),"cases"in t&&d(3,h=t.cases),"$$scope"in t&&d(4,r=t.$$scope)},[n,o,m,h,r,_,p,k,$,N]}class Ce extends ne{constructor(a){super(),ae(this,a,ce,pe,W,{idx:0,cases:3})}}export{Ce as Q};
