import{s as re,l as pe,v as F,a as I,e as Q,t as j,g as y,c as H,b as R,f as b,d as T,r as Y,i as Z,h as u,j as ee,u as fe,m as le,o as de,w as z,k as ce}from"./scheduler.4RMNQxd3.js";import{S as he,i as ue,e as B,c as G,a as J,m as K,t as q,b as E,d as L}from"./index.NlNtvd0Y.js";import"./paths.DK5VnUC7.js";import{P as se,F as _e}from"./PrevNext.BZG6szKl.js";/* empty css                                            */import{P as ge}from"./Progress.RuFBtGUt.js";import{s as D}from"./data.C90H0faf.js";import{s as te}from"./colors.fBIiI7Ly.js";function me(s){let i,h,o,g,d,n,r,f,v,N=16+s[0]+"",C,$,S,t,V,l,M,O,U,W,A,m,k;i=new se({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),d=new ge({props:{currentIdx:s[0]}});const X=s[6].default,p=pe(X,s,s[5],null);function oe(e){s[7](e)}function ae(e){s[8](e)}function ie(e){s[9](e)}function ne(e){s[10](e)}let P={choices:s[3]};return s[2].pathCheck.existingScores[s[0]-1]!==void 0&&(P.existingValue=s[2].pathCheck.existingScores[s[0]-1]),s[2].pathCheck.proposedScores[s[0]-1]!==void 0&&(P.proposedValue=s[2].pathCheck.proposedScores[s[0]-1]),s[2].pathCheck.existingScoreNotes[s[0]-1]!==void 0&&(P.existingNotes=s[2].pathCheck.existingScoreNotes[s[0]-1]),s[2].pathCheck.proposedScoreNotes[s[0]-1]!==void 0&&(P.proposedNotes=s[2].pathCheck.proposedScoreNotes[s[0]-1]),l=new _e({props:P}),F.push(()=>B(l,"existingValue",oe)),F.push(()=>B(l,"proposedValue",ae)),F.push(()=>B(l,"existingNotes",ie)),F.push(()=>B(l,"proposedNotes",ne)),m=new se({props:{idx:s[0],total:30,startIdx:17,urlPath:"route_check/path_check/pa"}}),{c(){G(i.$$.fragment),h=I(),o=Q("div"),g=Q("div"),G(d.$$.fragment),n=I(),r=Q("div"),f=Q("h2"),v=j("PA"),C=j(N),$=j(": "),S=j(s[1]),t=I(),p&&p.c(),V=I(),G(l.$$.fragment),A=I(),G(m.$$.fragment),this.h()},l(e){J(i.$$.fragment,e),h=y(e),o=H(e,"DIV",{class:!0});var a=R(o);g=H(a,"DIV",{class:!0});var w=R(g);J(d.$$.fragment,w),w.forEach(b),n=y(a),r=H(a,"DIV",{class:!0});var _=R(r);f=H(_,"H2",{});var c=R(f);v=T(c,"PA"),C=T(c,N),$=T(c,": "),S=T(c,s[1]),c.forEach(b),t=y(_),p&&p.l(_),V=y(_),J(l.$$.fragment,_),_.forEach(b),a.forEach(b),A=y(e),J(m.$$.fragment,e),this.h()},h(){Y(g,"class","govuk-grid-column-one-third"),Y(r,"class","govuk-grid-column-two-thirds"),Y(o,"class","govuk-grid-row")},m(e,a){K(i,e,a),Z(e,h,a),Z(e,o,a),u(o,g),K(d,g,null),u(o,n),u(o,r),u(r,f),u(f,v),u(f,C),u(f,$),u(f,S),u(r,t),p&&p.m(r,null),u(r,V),K(l,r,null),Z(e,A,a),K(m,e,a),k=!0},p(e,[a]){const w={};a&1&&(w.idx=e[0]),i.$set(w);const _={};a&1&&(_.currentIdx=e[0]),d.$set(_),(!k||a&1)&&N!==(N=16+e[0]+"")&&ee(C,N),(!k||a&2)&&ee(S,e[1]),p&&p.p&&(!k||a&32)&&fe(p,X,e,e[5],k?de(X,e[5],a,null):le(e[5]),null);const c={};!M&&a&5&&(M=!0,c.existingValue=e[2].pathCheck.existingScores[e[0]-1],z(()=>M=!1)),!O&&a&5&&(O=!0,c.proposedValue=e[2].pathCheck.proposedScores[e[0]-1],z(()=>O=!1)),!U&&a&5&&(U=!0,c.existingNotes=e[2].pathCheck.existingScoreNotes[e[0]-1],z(()=>U=!1)),!W&&a&5&&(W=!0,c.proposedNotes=e[2].pathCheck.proposedScoreNotes[e[0]-1],z(()=>W=!1)),l.$set(c);const x={};a&1&&(x.idx=e[0]),m.$set(x)},i(e){k||(q(i.$$.fragment,e),q(d.$$.fragment,e),q(p,e),q(l.$$.fragment,e),q(m.$$.fragment,e),k=!0)},o(e){E(i.$$.fragment,e),E(d.$$.fragment,e),E(p,e),E(l.$$.fragment,e),E(m.$$.fragment,e),k=!1},d(e){e&&(b(h),b(o),b(A)),L(i,e),L(d),p&&p.d(e),L(l),L(m,e)}}}function ke(s,i,h){let o;ce(s,D,t=>h(2,o=t));let{$$slots:g={},$$scope:d}=i,{idx:n}=i,{label:r}=i,{cases:f}=i,v=f.map(([t,V])=>[t,V,te[t].background,te[t].font]);function N(t){s.$$.not_equal(o.pathCheck.existingScores[n-1],t)&&(o.pathCheck.existingScores[n-1]=t,D.set(o))}function C(t){s.$$.not_equal(o.pathCheck.proposedScores[n-1],t)&&(o.pathCheck.proposedScores[n-1]=t,D.set(o))}function $(t){s.$$.not_equal(o.pathCheck.existingScoreNotes[n-1],t)&&(o.pathCheck.existingScoreNotes[n-1]=t,D.set(o))}function S(t){s.$$.not_equal(o.pathCheck.proposedScoreNotes[n-1],t)&&(o.pathCheck.proposedScoreNotes[n-1]=t,D.set(o))}return s.$$set=t=>{"idx"in t&&h(0,n=t.idx),"label"in t&&h(1,r=t.label),"cases"in t&&h(4,f=t.cases),"$$scope"in t&&h(5,d=t.$$scope)},[n,r,o,v,f,d,g,N,C,$,S]}class we extends he{constructor(i){super(),ue(this,i,ke,me,re,{idx:0,label:1,cases:4})}}export{we as Q};
