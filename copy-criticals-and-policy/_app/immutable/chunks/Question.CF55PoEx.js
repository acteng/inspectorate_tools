import{s as ce,l as pe,w as A,a as v,e as L,t as F,g as $,c as T,b as M,f as S,d as Q,p as ee,q as de,i as O,h as m,j as te,u as ue,r as _e,v as ge,x as z,k as me,m as he}from"./scheduler.ytQcc2rf.js";import{S as ke,i as ye,e as R,c as B,a as G,m as J,t as E,b as D,d as K}from"./index.D9yYtTfk.js";/* empty css                                            */import{F as Se}from"./FancyRadio.ZsiaxMt7.js";import{P as oe}from"./PrevNext.CUYNZBlF.js";import{P as Ce}from"./Progress.B66JuGf_.js";import{s as H}from"./data.DCrDyEzp.js";import{s as ae}from"./colors.DaC397qr.js";import{b as be}from"./paths.BtsaMWd7.js";function ie(s){let a,l=`<a href="${be}/route_check/problems_map">Log this critical issue</a>`;return{c(){a=L("p"),a.innerHTML=l},l(t){a=T(t,"P",{"data-svelte-h":!0}),he(a)!=="svelte-1rzesjh"&&(a.innerHTML=l)},m(t,h){O(t,a,h)},d(t){t&&S(a)}}}function Ne(s){let a,l,t,h,u,f,n,p,V,C=s[0].toString().padStart(2,"0")+"",b,q,N,o,P,d,U,W,X,Y,Z,j,k,y;a=new oe({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),u=new Ce({props:{currentIdx:s[0]}});const x=s[6].default,c=pe(x,s,s[5],null);function ne(e){s[7](e)}function re(e){s[8](e)}function fe(e){s[9](e)}function le(e){s[10](e)}let w={choices:s[3]};s[2].safetyCheck.existingScores[s[0]-1]!==void 0&&(w.existingValue=s[2].safetyCheck.existingScores[s[0]-1]),s[2].safetyCheck.proposedScores[s[0]-1]!==void 0&&(w.proposedValue=s[2].safetyCheck.proposedScores[s[0]-1]),s[2].safetyCheck.existingScoreNotes[s[0]-1]!==void 0&&(w.existingNotes=s[2].safetyCheck.existingScoreNotes[s[0]-1]),s[2].safetyCheck.proposedScoreNotes[s[0]-1]!==void 0&&(w.proposedNotes=s[2].safetyCheck.proposedScoreNotes[s[0]-1]),d=new Se({props:w}),A.push(()=>R(d,"existingValue",ne)),A.push(()=>R(d,"proposedValue",re)),A.push(()=>R(d,"existingNotes",fe)),A.push(()=>R(d,"proposedNotes",le));let r=(s[2].safetyCheck.existingScores[s[0]-1]=="C"||s[2].safetyCheck.proposedScores[s[0]-1]=="C")&&ie();return k=new oe({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),{c(){B(a.$$.fragment),l=v(),t=L("div"),h=L("div"),B(u.$$.fragment),f=v(),n=L("div"),p=L("h2"),V=F("SA"),b=F(C),q=F(": "),N=F(s[1]),o=v(),c&&c.c(),P=v(),B(d.$$.fragment),Z=v(),r&&r.c(),j=v(),B(k.$$.fragment),this.h()},l(e){G(a.$$.fragment,e),l=$(e),t=T(e,"DIV",{class:!0,style:!0});var i=M(t);h=T(i,"DIV",{class:!0});var I=M(h);G(u.$$.fragment,I),I.forEach(S),f=$(i),n=T(i,"DIV",{class:!0});var _=M(n);p=T(_,"H2",{});var g=M(p);V=Q(g,"SA"),b=Q(g,C),q=Q(g,": "),N=Q(g,s[1]),g.forEach(S),o=$(_),c&&c.l(_),P=$(_),G(d.$$.fragment,_),Z=$(_),r&&r.l(_),_.forEach(S),i.forEach(S),j=$(e),G(k.$$.fragment,e),this.h()},h(){ee(h,"class","govuk-grid-column-one-quarter"),ee(n,"class","govuk-grid-column-three-quarters"),ee(t,"class","govuk-grid-row"),de(t,"margin","1em")},m(e,i){J(a,e,i),O(e,l,i),O(e,t,i),m(t,h),J(u,h,null),m(t,f),m(t,n),m(n,p),m(p,V),m(p,b),m(p,q),m(p,N),m(n,o),c&&c.m(n,null),m(n,P),J(d,n,null),m(n,Z),r&&r.m(n,null),O(e,j,i),J(k,e,i),y=!0},p(e,[i]){const I={};i&1&&(I.idx=e[0]),a.$set(I);const _={};i&1&&(_.currentIdx=e[0]),u.$set(_),(!y||i&1)&&C!==(C=e[0].toString().padStart(2,"0")+"")&&te(b,C),(!y||i&2)&&te(N,e[1]),c&&c.p&&(!y||i&32)&&ue(c,x,e,e[5],y?ge(x,e[5],i,null):_e(e[5]),null);const g={};!U&&i&5&&(U=!0,g.existingValue=e[2].safetyCheck.existingScores[e[0]-1],z(()=>U=!1)),!W&&i&5&&(W=!0,g.proposedValue=e[2].safetyCheck.proposedScores[e[0]-1],z(()=>W=!1)),!X&&i&5&&(X=!0,g.existingNotes=e[2].safetyCheck.existingScoreNotes[e[0]-1],z(()=>X=!1)),!Y&&i&5&&(Y=!0,g.proposedNotes=e[2].safetyCheck.proposedScoreNotes[e[0]-1],z(()=>Y=!1)),d.$set(g),e[2].safetyCheck.existingScores[e[0]-1]=="C"||e[2].safetyCheck.proposedScores[e[0]-1]=="C"?r||(r=ie(),r.c(),r.m(n,null)):r&&(r.d(1),r=null);const se={};i&1&&(se.idx=e[0]),k.$set(se)},i(e){y||(E(a.$$.fragment,e),E(u.$$.fragment,e),E(c,e),E(d.$$.fragment,e),E(k.$$.fragment,e),y=!0)},o(e){D(a.$$.fragment,e),D(u.$$.fragment,e),D(c,e),D(d.$$.fragment,e),D(k.$$.fragment,e),y=!1},d(e){e&&(S(l),S(t),S(j)),K(a,e),K(u),c&&c.d(e),K(d),r&&r.d(),K(k,e)}}}function ve(s,a,l){let t;me(s,H,o=>l(2,t=o));let{$$slots:h={},$$scope:u}=a,{idx:f}=a,{label:n}=a,{cases:p}=a,V=p.map(([o,P])=>[o,P,ae[o].background,ae[o].font]);function C(o){s.$$.not_equal(t.safetyCheck.existingScores[f-1],o)&&(t.safetyCheck.existingScores[f-1]=o,H.set(t))}function b(o){s.$$.not_equal(t.safetyCheck.proposedScores[f-1],o)&&(t.safetyCheck.proposedScores[f-1]=o,H.set(t))}function q(o){s.$$.not_equal(t.safetyCheck.existingScoreNotes[f-1],o)&&(t.safetyCheck.existingScoreNotes[f-1]=o,H.set(t))}function N(o){s.$$.not_equal(t.safetyCheck.proposedScoreNotes[f-1],o)&&(t.safetyCheck.proposedScoreNotes[f-1]=o,H.set(t))}return s.$$set=o=>{"idx"in o&&l(0,f=o.idx),"label"in o&&l(1,n=o.label),"cases"in o&&l(4,p=o.cases),"$$scope"in o&&l(5,u=o.$$scope)},[f,n,t,V,p,u,h,C,b,q,N]}class Le extends ke{constructor(a){super(),ye(this,a,ve,Ne,ce,{idx:0,label:1,cases:4})}}export{Le as Q};
