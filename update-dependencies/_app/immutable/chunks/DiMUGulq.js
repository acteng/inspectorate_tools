import{s as W,l as X,r as I,d as w,u as Y,m as Z,o as ee,v as P,i as se,b as g,p as z,w as te,c as A,e as B,g as D,h as G,j as E,k as oe}from"./hklQk-fT.js";import{S as ne,i as ae,e as F,d as Q,t as V,a as y,m as j,c as x,b as R}from"./4RGf_tlt.js";import"./C02n2mos.js";import"./CcA_S8Rz.js";import{F as ie}from"./DKKy3DCA.js";import{P as J}from"./BPtjBs_Z.js";import"./DK2Dq0AZ.js";import"./BTimzf-K.js";import{s as K}from"./DaC397qr.js";import{s as q}from"./BcQC0waz.js";import{P as re}from"./DSk72LTn.js";function pe(s){let a,d,o,_,r,n,h,m,p,k,$,N,t,C,u,l;o=new re({props:{currentIdx:s[0]}}),n=new J({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}});const T=s[5].default,c=X(T,s,s[4],null);function L(e){s[6](e)}function M(e){s[7](e)}function O(e){s[8](e)}function U(e){s[9](e)}let S={choices:s[2]};return s[1].pathCheck.existingScores[s[0]-1]!==void 0&&(S.existingValue=s[1].pathCheck.existingScores[s[0]-1]),s[1].pathCheck.proposedScores[s[0]-1]!==void 0&&(S.proposedValue=s[1].pathCheck.proposedScores[s[0]-1]),s[1].pathCheck.existingScoreNotes[s[0]-1]!==void 0&&(S.existingNotes=s[1].pathCheck.existingScoreNotes[s[0]-1]),s[1].pathCheck.proposedScoreNotes[s[0]-1]!==void 0&&(S.proposedNotes=s[1].pathCheck.proposedScoreNotes[s[0]-1]),p=new ie({props:S}),I.push(()=>F(p,"existingValue",L)),I.push(()=>F(p,"proposedValue",M)),I.push(()=>F(p,"existingNotes",O)),I.push(()=>F(p,"proposedNotes",U)),u=new J({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),{c(){a=G("div"),d=G("div"),R(o.$$.fragment),_=E(),r=G("div"),R(n.$$.fragment),h=E(),c&&c.c(),m=E(),R(p.$$.fragment),C=E(),R(u.$$.fragment),this.h()},l(e){a=A(e,"DIV",{class:!0,style:!0});var i=B(a);d=A(i,"DIV",{class:!0});var b=B(d);x(o.$$.fragment,b),b.forEach(w),_=D(i),r=A(i,"DIV",{class:!0});var f=B(r);x(n.$$.fragment,f),h=D(f),c&&c.l(f),m=D(f),x(p.$$.fragment,f),C=D(f),x(u.$$.fragment,f),f.forEach(w),i.forEach(w),this.h()},h(){z(d,"class","govuk-grid-column-one-quarter"),z(r,"class","govuk-grid-column-three-quarters"),z(a,"class","govuk-grid-row"),te(a,"margin","1em")},m(e,i){se(e,a,i),g(a,d),j(o,d,null),g(a,_),g(a,r),j(n,r,null),g(r,h),c&&c.m(r,null),g(r,m),j(p,r,null),g(r,C),j(u,r,null),l=!0},p(e,[i]){const b={};i&1&&(b.currentIdx=e[0]),o.$set(b);const f={};i&1&&(f.idx=e[0]),n.$set(f),c&&c.p&&(!l||i&16)&&Y(c,T,e,e[4],l?ee(T,e[4],i,null):Z(e[4]),null);const v={};!k&&i&3&&(k=!0,v.existingValue=e[1].pathCheck.existingScores[e[0]-1],P(()=>k=!1)),!$&&i&3&&($=!0,v.proposedValue=e[1].pathCheck.proposedScores[e[0]-1],P(()=>$=!1)),!N&&i&3&&(N=!0,v.existingNotes=e[1].pathCheck.existingScoreNotes[e[0]-1],P(()=>N=!1)),!t&&i&3&&(t=!0,v.proposedNotes=e[1].pathCheck.proposedScoreNotes[e[0]-1],P(()=>t=!1)),p.$set(v);const H={};i&1&&(H.idx=e[0]),u.$set(H)},i(e){l||(y(o.$$.fragment,e),y(n.$$.fragment,e),y(c,e),y(p.$$.fragment,e),y(u.$$.fragment,e),l=!0)},o(e){V(o.$$.fragment,e),V(n.$$.fragment,e),V(c,e),V(p.$$.fragment,e),V(u.$$.fragment,e),l=!1},d(e){e&&w(a),Q(o),Q(n),c&&c.d(e),Q(p),Q(u)}}}function ce(s,a,d){let o;oe(s,q,t=>d(1,o=t));let{$$slots:_={},$$scope:r}=a,{idx:n}=a,{cases:h}=a,m=h.map(([t,C])=>[t,C,K[t].background,K[t].font]);function p(t){s.$$.not_equal(o.pathCheck.existingScores[n-1],t)&&(o.pathCheck.existingScores[n-1]=t,q.set(o))}function k(t){s.$$.not_equal(o.pathCheck.proposedScores[n-1],t)&&(o.pathCheck.proposedScores[n-1]=t,q.set(o))}function $(t){s.$$.not_equal(o.pathCheck.existingScoreNotes[n-1],t)&&(o.pathCheck.existingScoreNotes[n-1]=t,q.set(o))}function N(t){s.$$.not_equal(o.pathCheck.proposedScoreNotes[n-1],t)&&(o.pathCheck.proposedScoreNotes[n-1]=t,q.set(o))}return s.$$set=t=>{"idx"in t&&d(0,n=t.idx),"cases"in t&&d(3,h=t.cases),"$$scope"in t&&d(4,r=t.$$scope)},[n,o,m,h,r,_,p,k,$,N]}class Ce extends ne{constructor(a){super(),ae(this,a,ce,pe,W,{idx:0,cases:3})}}export{Ce as Q};
