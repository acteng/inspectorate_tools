import{s as W,l as X,r as I,d as C,u as Y,m as Z,o as x,v as D,i as ee,b as _,p as B,w as se,c as G,e as H,g as E,h as J,j as F,k as oe}from"./hklQk-fT.js";import{S as te,i as ne,e as Q,d as j,t as q,a as w,m as R,c as z,b as A}from"./4RGf_tlt.js";import"./C02n2mos.js";import"./CcA_S8Rz.js";import{F as ie}from"./DKKy3DCA.js";import{P as L}from"./BPtjBs_Z.js";import"./DK2Dq0AZ.js";import"./BTimzf-K.js";import{s as P}from"./0svSsz7d.js";import{P as re}from"./CmwYAI5_.js";function ae(s){let i,d,t,m,a,n,c,h,f,$,N,S,b,v,o,u;t=new re({props:{currentIdx:s[0]}}),n=new L({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}});const g=s[5].default,p=X(g,s,s[4],null);function M(e){s[6](e)}function O(e){s[7](e)}function T(e){s[8](e)}function U(e){s[9](e)}let V={choices:s[2]};return s[1].existingScores[s[0]-1]!==void 0&&(V.existingValue=s[1].existingScores[s[0]-1]),s[1].proposedScores[s[0]-1]!==void 0&&(V.proposedValue=s[1].proposedScores[s[0]-1]),s[1].existingScoreNotes[s[0]-1]!==void 0&&(V.existingNotes=s[1].existingScoreNotes[s[0]-1]),s[1].proposedScoreNotes[s[0]-1]!==void 0&&(V.proposedNotes=s[1].proposedScoreNotes[s[0]-1]),f=new ie({props:V}),I.push(()=>Q(f,"existingValue",M)),I.push(()=>Q(f,"proposedValue",O)),I.push(()=>Q(f,"existingNotes",T)),I.push(()=>Q(f,"proposedNotes",U)),o=new L({props:{idx:s[0],total:13,urlPath:"area_check/scorecard/q"}}),{c(){i=J("div"),d=J("div"),A(t.$$.fragment),m=F(),a=J("div"),A(n.$$.fragment),c=F(),p&&p.c(),h=F(),A(f.$$.fragment),v=F(),A(o.$$.fragment),this.h()},l(e){i=G(e,"DIV",{class:!0,style:!0});var r=H(i);d=G(r,"DIV",{class:!0});var k=H(d);z(t.$$.fragment,k),k.forEach(C),m=E(r),a=G(r,"DIV",{class:!0});var l=H(a);z(n.$$.fragment,l),c=E(l),p&&p.l(l),h=E(l),z(f.$$.fragment,l),v=E(l),z(o.$$.fragment,l),l.forEach(C),r.forEach(C),this.h()},h(){B(d,"class","govuk-grid-column-one-quarter"),B(a,"class","govuk-grid-column-three-quarters"),B(i,"class","govuk-grid-row"),se(i,"margin","1em")},m(e,r){ee(e,i,r),_(i,d),R(t,d,null),_(i,m),_(i,a),R(n,a,null),_(a,c),p&&p.m(a,null),_(a,h),R(f,a,null),_(a,v),R(o,a,null),u=!0},p(e,[r]){const k={};r&1&&(k.currentIdx=e[0]),t.$set(k);const l={};r&1&&(l.idx=e[0]),n.$set(l),p&&p.p&&(!u||r&16)&&Y(p,g,e,e[4],u?x(g,e[4],r,null):Z(e[4]),null);const y={};!$&&r&3&&($=!0,y.existingValue=e[1].existingScores[e[0]-1],D(()=>$=!1)),!N&&r&3&&(N=!0,y.proposedValue=e[1].proposedScores[e[0]-1],D(()=>N=!1)),!S&&r&3&&(S=!0,y.existingNotes=e[1].existingScoreNotes[e[0]-1],D(()=>S=!1)),!b&&r&3&&(b=!0,y.proposedNotes=e[1].proposedScoreNotes[e[0]-1],D(()=>b=!1)),f.$set(y);const K={};r&1&&(K.idx=e[0]),o.$set(K)},i(e){u||(w(t.$$.fragment,e),w(n.$$.fragment,e),w(p,e),w(f.$$.fragment,e),w(o.$$.fragment,e),u=!0)},o(e){q(t.$$.fragment,e),q(n.$$.fragment,e),q(p,e),q(f.$$.fragment,e),q(o.$$.fragment,e),u=!1},d(e){e&&C(i),j(t),j(n),p&&p.d(e),j(f),j(o)}}}function fe(s,i,d){let t;oe(s,P,o=>d(1,t=o));let{$$slots:m={},$$scope:a}=i,{idx:n}=i,{cases:c}=i,h=["#00b050","#99cc00","#ffc000","#ff5050","#ff0000"],f=["white","black","black","black","white"],$=c.map(([o,u],g)=>[o.toString(),u,h[g],f[g]]);function N(o){s.$$.not_equal(t.existingScores[n-1],o)&&(t.existingScores[n-1]=o,P.set(t))}function S(o){s.$$.not_equal(t.proposedScores[n-1],o)&&(t.proposedScores[n-1]=o,P.set(t))}function b(o){s.$$.not_equal(t.existingScoreNotes[n-1],o)&&(t.existingScoreNotes[n-1]=o,P.set(t))}function v(o){s.$$.not_equal(t.proposedScoreNotes[n-1],o)&&(t.proposedScoreNotes[n-1]=o,P.set(t))}return s.$$set=o=>{"idx"in o&&d(0,n=o.idx),"cases"in o&&d(3,c=o.cases),"$$scope"in o&&d(4,a=o.$$scope)},[n,t,$,c,a,m,N,S,b,v]}class Ne extends te{constructor(i){super(),ne(this,i,fe,ae,W,{idx:0,cases:3})}}export{Ne as Q};
