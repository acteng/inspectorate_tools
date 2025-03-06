import{s as de,l as ue,r as z,a as v,e as V,t as T,g as $,c as q,b as P,f as k,d as j,q as H,v as _e,i as U,h as u,j as te,u as ge,m as he,o as me,w as B,k as ke}from"./scheduler.B5FfXhnD.js";import{S as ye,i as Se,e as G,c as J,a as K,m as M,t as F,b as L,d as O}from"./index.VeCIHQiF.js";/* empty css                                                  */import"./index.B-vk3dUq.js";import{F as Ce}from"./FancyRadio.BopthQxS.js";import{P as oe}from"./PrevNext.BLI7QSkZ.js";import{b as ie}from"./paths.DoXz_a04.js";import"./entry.CgeZhoDd.js";import{P as be}from"./Progress.BGPD7hmy.js";import{s as Q}from"./data.OabvCoLT.js";import{s as ae}from"./colors.DaC397qr.js";import{d as re}from"./lists.Bn2sGx3F.js";function ne(s){let a,l,o,p;return{c(){a=V("p"),l=V("a"),o=T("Log this critical issue"),this.h()},l(n){a=q(n,"P",{});var r=P(a);l=q(r,"A",{href:!0});var f=P(l);o=j(f,"Log this critical issue"),f.forEach(k),r.forEach(k),this.h()},h(){H(l,"href",p=ie+"/route_check/problems_map?kind=critical&code="+re(s[0]))},m(n,r){U(n,a,r),u(a,l),u(l,o)},p(n,r){r&1&&p!==(p=ie+"/route_check/problems_map?kind=critical&code="+re(n[0]))&&H(l,"href",p)},d(n){n&&k(a)}}}function Ne(s){let a,l,o,p,n,r,f,_,w,C=s[0].toString().padStart(2,"0")+"",b,E,N,t,I,g,W,X,Y,Z,x,R,y,S;a=new oe({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),n=new be({props:{currentIdx:s[0]}});const ee=s[6].default,d=ue(ee,s,s[5],null);function fe(e){s[7](e)}function le(e){s[8](e)}function ce(e){s[9](e)}function pe(e){s[10](e)}let A={choices:s[3]};s[2].safetyCheck.existingScores[s[0]-1]!==void 0&&(A.existingValue=s[2].safetyCheck.existingScores[s[0]-1]),s[2].safetyCheck.proposedScores[s[0]-1]!==void 0&&(A.proposedValue=s[2].safetyCheck.proposedScores[s[0]-1]),s[2].safetyCheck.existingScoreNotes[s[0]-1]!==void 0&&(A.existingNotes=s[2].safetyCheck.existingScoreNotes[s[0]-1]),s[2].safetyCheck.proposedScoreNotes[s[0]-1]!==void 0&&(A.proposedNotes=s[2].safetyCheck.proposedScoreNotes[s[0]-1]),g=new Ce({props:A}),z.push(()=>G(g,"existingValue",fe)),z.push(()=>G(g,"proposedValue",le)),z.push(()=>G(g,"existingNotes",ce)),z.push(()=>G(g,"proposedNotes",pe));let c=(s[2].safetyCheck.existingScores[s[0]-1]=="C"||s[2].safetyCheck.proposedScores[s[0]-1]=="C")&&ne(s);return y=new oe({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),{c(){J(a.$$.fragment),l=v(),o=V("div"),p=V("div"),J(n.$$.fragment),r=v(),f=V("div"),_=V("h2"),w=T("SA"),b=T(C),E=T(": "),N=T(s[1]),t=v(),d&&d.c(),I=v(),J(g.$$.fragment),x=v(),c&&c.c(),R=v(),J(y.$$.fragment),this.h()},l(e){K(a.$$.fragment,e),l=$(e),o=q(e,"DIV",{class:!0,style:!0});var i=P(o);p=q(i,"DIV",{class:!0});var D=P(p);K(n.$$.fragment,D),D.forEach(k),r=$(i),f=q(i,"DIV",{class:!0});var h=P(f);_=q(h,"H2",{});var m=P(_);w=j(m,"SA"),b=j(m,C),E=j(m,": "),N=j(m,s[1]),m.forEach(k),t=$(h),d&&d.l(h),I=$(h),K(g.$$.fragment,h),x=$(h),c&&c.l(h),h.forEach(k),i.forEach(k),R=$(e),K(y.$$.fragment,e),this.h()},h(){H(p,"class","govuk-grid-column-one-quarter"),H(f,"class","govuk-grid-column-three-quarters"),H(o,"class","govuk-grid-row"),_e(o,"margin","1em")},m(e,i){M(a,e,i),U(e,l,i),U(e,o,i),u(o,p),M(n,p,null),u(o,r),u(o,f),u(f,_),u(_,w),u(_,b),u(_,E),u(_,N),u(f,t),d&&d.m(f,null),u(f,I),M(g,f,null),u(f,x),c&&c.m(f,null),U(e,R,i),M(y,e,i),S=!0},p(e,[i]){const D={};i&1&&(D.idx=e[0]),a.$set(D);const h={};i&1&&(h.currentIdx=e[0]),n.$set(h),(!S||i&1)&&C!==(C=e[0].toString().padStart(2,"0")+"")&&te(b,C),(!S||i&2)&&te(N,e[1]),d&&d.p&&(!S||i&32)&&ge(d,ee,e,e[5],S?me(ee,e[5],i,null):he(e[5]),null);const m={};!W&&i&5&&(W=!0,m.existingValue=e[2].safetyCheck.existingScores[e[0]-1],B(()=>W=!1)),!X&&i&5&&(X=!0,m.proposedValue=e[2].safetyCheck.proposedScores[e[0]-1],B(()=>X=!1)),!Y&&i&5&&(Y=!0,m.existingNotes=e[2].safetyCheck.existingScoreNotes[e[0]-1],B(()=>Y=!1)),!Z&&i&5&&(Z=!0,m.proposedNotes=e[2].safetyCheck.proposedScoreNotes[e[0]-1],B(()=>Z=!1)),g.$set(m),e[2].safetyCheck.existingScores[e[0]-1]=="C"||e[2].safetyCheck.proposedScores[e[0]-1]=="C"?c?c.p(e,i):(c=ne(e),c.c(),c.m(f,null)):c&&(c.d(1),c=null);const se={};i&1&&(se.idx=e[0]),y.$set(se)},i(e){S||(F(a.$$.fragment,e),F(n.$$.fragment,e),F(d,e),F(g.$$.fragment,e),F(y.$$.fragment,e),S=!0)},o(e){L(a.$$.fragment,e),L(n.$$.fragment,e),L(d,e),L(g.$$.fragment,e),L(y.$$.fragment,e),S=!1},d(e){e&&(k(l),k(o),k(R)),O(a,e),O(n),d&&d.d(e),O(g),c&&c.d(),O(y,e)}}}function ve(s,a,l){let o;ke(s,Q,t=>l(2,o=t));let{$$slots:p={},$$scope:n}=a,{idx:r}=a,{label:f}=a,{cases:_}=a,w=_.map(([t,I])=>[t,I,ae[t].background,ae[t].font]);function C(t){s.$$.not_equal(o.safetyCheck.existingScores[r-1],t)&&(o.safetyCheck.existingScores[r-1]=t,Q.set(o))}function b(t){s.$$.not_equal(o.safetyCheck.proposedScores[r-1],t)&&(o.safetyCheck.proposedScores[r-1]=t,Q.set(o))}function E(t){s.$$.not_equal(o.safetyCheck.existingScoreNotes[r-1],t)&&(o.safetyCheck.existingScoreNotes[r-1]=t,Q.set(o))}function N(t){s.$$.not_equal(o.safetyCheck.proposedScoreNotes[r-1],t)&&(o.safetyCheck.proposedScoreNotes[r-1]=t,Q.set(o))}return s.$$set=t=>{"idx"in t&&l(0,r=t.idx),"label"in t&&l(1,f=t.label),"cases"in t&&l(4,_=t.cases),"$$scope"in t&&l(5,n=t.$$scope)},[r,f,o,w,_,n,p,C,b,E,N]}class Te extends ye{constructor(a){super(),Se(this,a,ve,Ne,de,{idx:0,label:1,cases:4})}}export{Te as Q};
