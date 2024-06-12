import{s as re,l as fe,v as F,a as w,e as Q,t as j,g as P,c as H,b as R,f as S,d as T,o as Y,x as le,i as Z,h as _,j as ee,u as pe,p as ce,q as de,w as z,k as ue}from"./scheduler.rCJaVg9o.js";import{S as _e,i as ge,e as B,c as G,a as J,m as K,t as I,b as E,d as L}from"./index.DtFfUPyX.js";/* empty css                                                 */import{F as me}from"./FancyRadio.C9CtXbq3.js";/* empty css                                                       */import{P as se}from"./PrevNext.2urakust.js";import{P as he}from"./Progress.BXxQ9m7D.js";import{s as D}from"./data.DpCYY79n.js";import{s as te}from"./colors.CYEpEtTL.js";function ke(s){let i,u,o,m,c,n,r,l,C,y=s[0].toString().padStart(2,"0")+"",N,v,b,t,$,p,M,O,U,W,A,h,k;i=new se({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),c=new he({props:{currentIdx:s[0]}});const X=s[6].default,f=fe(X,s,s[5],null);function oe(e){s[7](e)}function ae(e){s[8](e)}function ie(e){s[9](e)}function ne(e){s[10](e)}let V={choices:s[3]};return s[2].safetyCheck.existingScores[s[0]-1]!==void 0&&(V.existingValue=s[2].safetyCheck.existingScores[s[0]-1]),s[2].safetyCheck.proposedScores[s[0]-1]!==void 0&&(V.proposedValue=s[2].safetyCheck.proposedScores[s[0]-1]),s[2].safetyCheck.existingScoreNotes[s[0]-1]!==void 0&&(V.existingNotes=s[2].safetyCheck.existingScoreNotes[s[0]-1]),s[2].safetyCheck.proposedScoreNotes[s[0]-1]!==void 0&&(V.proposedNotes=s[2].safetyCheck.proposedScoreNotes[s[0]-1]),p=new me({props:V}),F.push(()=>B(p,"existingValue",oe)),F.push(()=>B(p,"proposedValue",ae)),F.push(()=>B(p,"existingNotes",ie)),F.push(()=>B(p,"proposedNotes",ne)),h=new se({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),{c(){G(i.$$.fragment),u=w(),o=Q("div"),m=Q("div"),G(c.$$.fragment),n=w(),r=Q("div"),l=Q("h2"),C=j("SA"),N=j(y),v=j(": "),b=j(s[1]),t=w(),f&&f.c(),$=w(),G(p.$$.fragment),A=w(),G(h.$$.fragment),this.h()},l(e){J(i.$$.fragment,e),u=P(e),o=H(e,"DIV",{class:!0,style:!0});var a=R(o);m=H(a,"DIV",{class:!0});var q=R(m);J(c.$$.fragment,q),q.forEach(S),n=P(a),r=H(a,"DIV",{class:!0});var g=R(r);l=H(g,"H2",{});var d=R(l);C=T(d,"SA"),N=T(d,y),v=T(d,": "),b=T(d,s[1]),d.forEach(S),t=P(g),f&&f.l(g),$=P(g),J(p.$$.fragment,g),g.forEach(S),a.forEach(S),A=P(e),J(h.$$.fragment,e),this.h()},h(){Y(m,"class","govuk-grid-column-one-quarter"),Y(r,"class","govuk-grid-column-three-quarters"),Y(o,"class","govuk-grid-row"),le(o,"margin","1em")},m(e,a){K(i,e,a),Z(e,u,a),Z(e,o,a),_(o,m),K(c,m,null),_(o,n),_(o,r),_(r,l),_(l,C),_(l,N),_(l,v),_(l,b),_(r,t),f&&f.m(r,null),_(r,$),K(p,r,null),Z(e,A,a),K(h,e,a),k=!0},p(e,[a]){const q={};a&1&&(q.idx=e[0]),i.$set(q);const g={};a&1&&(g.currentIdx=e[0]),c.$set(g),(!k||a&1)&&y!==(y=e[0].toString().padStart(2,"0")+"")&&ee(N,y),(!k||a&2)&&ee(b,e[1]),f&&f.p&&(!k||a&32)&&pe(f,X,e,e[5],k?de(X,e[5],a,null):ce(e[5]),null);const d={};!M&&a&5&&(M=!0,d.existingValue=e[2].safetyCheck.existingScores[e[0]-1],z(()=>M=!1)),!O&&a&5&&(O=!0,d.proposedValue=e[2].safetyCheck.proposedScores[e[0]-1],z(()=>O=!1)),!U&&a&5&&(U=!0,d.existingNotes=e[2].safetyCheck.existingScoreNotes[e[0]-1],z(()=>U=!1)),!W&&a&5&&(W=!0,d.proposedNotes=e[2].safetyCheck.proposedScoreNotes[e[0]-1],z(()=>W=!1)),p.$set(d);const x={};a&1&&(x.idx=e[0]),h.$set(x)},i(e){k||(I(i.$$.fragment,e),I(c.$$.fragment,e),I(f,e),I(p.$$.fragment,e),I(h.$$.fragment,e),k=!0)},o(e){E(i.$$.fragment,e),E(c.$$.fragment,e),E(f,e),E(p.$$.fragment,e),E(h.$$.fragment,e),k=!1},d(e){e&&(S(u),S(o),S(A)),L(i,e),L(c),f&&f.d(e),L(p),L(h,e)}}}function ye(s,i,u){let o;ue(s,D,t=>u(2,o=t));let{$$slots:m={},$$scope:c}=i,{idx:n}=i,{label:r}=i,{cases:l}=i,C=l.map(([t,$])=>[t,$,te[t].background,te[t].font]);function y(t){s.$$.not_equal(o.safetyCheck.existingScores[n-1],t)&&(o.safetyCheck.existingScores[n-1]=t,D.set(o))}function N(t){s.$$.not_equal(o.safetyCheck.proposedScores[n-1],t)&&(o.safetyCheck.proposedScores[n-1]=t,D.set(o))}function v(t){s.$$.not_equal(o.safetyCheck.existingScoreNotes[n-1],t)&&(o.safetyCheck.existingScoreNotes[n-1]=t,D.set(o))}function b(t){s.$$.not_equal(o.safetyCheck.proposedScoreNotes[n-1],t)&&(o.safetyCheck.proposedScoreNotes[n-1]=t,D.set(o))}return s.$$set=t=>{"idx"in t&&u(0,n=t.idx),"label"in t&&u(1,r=t.label),"cases"in t&&u(4,l=t.cases),"$$scope"in t&&u(5,c=t.$$scope)},[n,r,o,C,l,c,m,y,N,v,b]}class Pe extends _e{constructor(i){super(),ge(this,i,ye,ke,re,{idx:0,label:1,cases:4})}}export{Pe as Q};
