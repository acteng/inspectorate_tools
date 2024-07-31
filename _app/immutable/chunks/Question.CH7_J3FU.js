import{s as de,l as ue,y as R,a as v,e as V,t as T,g as $,c as q,b as P,f as k,d as j,p as z,q as _e,i as U,h as u,j as te,u as ge,r as he,v as me,z as B,k as ke}from"./scheduler.NGc5rx4B.js";import{S as ye,i as Se,e as G,c as J,a as K,m as M,t as F,b as L,d as O}from"./index.CXr-pTxM.js";/* empty css                                            */import{F as Ce}from"./FancyRadio.B9EOtInb.js";import{P as oe}from"./PrevNext.iKN9AByD.js";import{P as be}from"./Progress.xLXKgLKY.js";import{s as Q}from"./data.DI1gsQ5S.js";import{s as ie}from"./colors.DaC397qr.js";import{b as ae}from"./paths.CE5f-jVa.js";import{d as ne}from"./lists.BvURpO7c.js";function re(s){let a,l,o,p;return{c(){a=V("p"),l=V("a"),o=T("Log this critical issue"),this.h()},l(r){a=q(r,"P",{});var n=P(a);l=q(n,"A",{href:!0});var f=P(l);o=j(f,"Log this critical issue"),f.forEach(k),n.forEach(k),this.h()},h(){z(l,"href",p=ae+"/route_check/problems_map?kind=critical&code="+ne(s[0]))},m(r,n){U(r,a,n),u(a,l),u(l,o)},p(r,n){n&1&&p!==(p=ae+"/route_check/problems_map?kind=critical&code="+ne(r[0]))&&z(l,"href",p)},d(r){r&&k(a)}}}function Ne(s){let a,l,o,p,r,n,f,_,E,C=s[0].toString().padStart(2,"0")+"",b,w,N,t,I,g,W,X,Y,Z,x,H,y,S;a=new oe({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),r=new be({props:{currentIdx:s[0]}});const ee=s[6].default,d=ue(ee,s,s[5],null);function fe(e){s[7](e)}function le(e){s[8](e)}function ce(e){s[9](e)}function pe(e){s[10](e)}let A={choices:s[3]};s[2].safetyCheck.existingScores[s[0]-1]!==void 0&&(A.existingValue=s[2].safetyCheck.existingScores[s[0]-1]),s[2].safetyCheck.proposedScores[s[0]-1]!==void 0&&(A.proposedValue=s[2].safetyCheck.proposedScores[s[0]-1]),s[2].safetyCheck.existingScoreNotes[s[0]-1]!==void 0&&(A.existingNotes=s[2].safetyCheck.existingScoreNotes[s[0]-1]),s[2].safetyCheck.proposedScoreNotes[s[0]-1]!==void 0&&(A.proposedNotes=s[2].safetyCheck.proposedScoreNotes[s[0]-1]),g=new Ce({props:A}),R.push(()=>G(g,"existingValue",fe)),R.push(()=>G(g,"proposedValue",le)),R.push(()=>G(g,"existingNotes",ce)),R.push(()=>G(g,"proposedNotes",pe));let c=(s[2].safetyCheck.existingScores[s[0]-1]=="C"||s[2].safetyCheck.proposedScores[s[0]-1]=="C")&&re(s);return y=new oe({props:{idx:s[0],total:16,urlPath:"route_check/safety_check/sa"}}),{c(){J(a.$$.fragment),l=v(),o=V("div"),p=V("div"),J(r.$$.fragment),n=v(),f=V("div"),_=V("h2"),E=T("SA"),b=T(C),w=T(": "),N=T(s[1]),t=v(),d&&d.c(),I=v(),J(g.$$.fragment),x=v(),c&&c.c(),H=v(),J(y.$$.fragment),this.h()},l(e){K(a.$$.fragment,e),l=$(e),o=q(e,"DIV",{class:!0,style:!0});var i=P(o);p=q(i,"DIV",{class:!0});var D=P(p);K(r.$$.fragment,D),D.forEach(k),n=$(i),f=q(i,"DIV",{class:!0});var h=P(f);_=q(h,"H2",{});var m=P(_);E=j(m,"SA"),b=j(m,C),w=j(m,": "),N=j(m,s[1]),m.forEach(k),t=$(h),d&&d.l(h),I=$(h),K(g.$$.fragment,h),x=$(h),c&&c.l(h),h.forEach(k),i.forEach(k),H=$(e),K(y.$$.fragment,e),this.h()},h(){z(p,"class","govuk-grid-column-one-quarter"),z(f,"class","govuk-grid-column-three-quarters"),z(o,"class","govuk-grid-row"),_e(o,"margin","1em")},m(e,i){M(a,e,i),U(e,l,i),U(e,o,i),u(o,p),M(r,p,null),u(o,n),u(o,f),u(f,_),u(_,E),u(_,b),u(_,w),u(_,N),u(f,t),d&&d.m(f,null),u(f,I),M(g,f,null),u(f,x),c&&c.m(f,null),U(e,H,i),M(y,e,i),S=!0},p(e,[i]){const D={};i&1&&(D.idx=e[0]),a.$set(D);const h={};i&1&&(h.currentIdx=e[0]),r.$set(h),(!S||i&1)&&C!==(C=e[0].toString().padStart(2,"0")+"")&&te(b,C),(!S||i&2)&&te(N,e[1]),d&&d.p&&(!S||i&32)&&ge(d,ee,e,e[5],S?me(ee,e[5],i,null):he(e[5]),null);const m={};!W&&i&5&&(W=!0,m.existingValue=e[2].safetyCheck.existingScores[e[0]-1],B(()=>W=!1)),!X&&i&5&&(X=!0,m.proposedValue=e[2].safetyCheck.proposedScores[e[0]-1],B(()=>X=!1)),!Y&&i&5&&(Y=!0,m.existingNotes=e[2].safetyCheck.existingScoreNotes[e[0]-1],B(()=>Y=!1)),!Z&&i&5&&(Z=!0,m.proposedNotes=e[2].safetyCheck.proposedScoreNotes[e[0]-1],B(()=>Z=!1)),g.$set(m),e[2].safetyCheck.existingScores[e[0]-1]=="C"||e[2].safetyCheck.proposedScores[e[0]-1]=="C"?c?c.p(e,i):(c=re(e),c.c(),c.m(f,null)):c&&(c.d(1),c=null);const se={};i&1&&(se.idx=e[0]),y.$set(se)},i(e){S||(F(a.$$.fragment,e),F(r.$$.fragment,e),F(d,e),F(g.$$.fragment,e),F(y.$$.fragment,e),S=!0)},o(e){L(a.$$.fragment,e),L(r.$$.fragment,e),L(d,e),L(g.$$.fragment,e),L(y.$$.fragment,e),S=!1},d(e){e&&(k(l),k(o),k(H)),O(a,e),O(r),d&&d.d(e),O(g),c&&c.d(),O(y,e)}}}function ve(s,a,l){let o;ke(s,Q,t=>l(2,o=t));let{$$slots:p={},$$scope:r}=a,{idx:n}=a,{label:f}=a,{cases:_}=a,E=_.map(([t,I])=>[t,I,ie[t].background,ie[t].font]);function C(t){s.$$.not_equal(o.safetyCheck.existingScores[n-1],t)&&(o.safetyCheck.existingScores[n-1]=t,Q.set(o))}function b(t){s.$$.not_equal(o.safetyCheck.proposedScores[n-1],t)&&(o.safetyCheck.proposedScores[n-1]=t,Q.set(o))}function w(t){s.$$.not_equal(o.safetyCheck.existingScoreNotes[n-1],t)&&(o.safetyCheck.existingScoreNotes[n-1]=t,Q.set(o))}function N(t){s.$$.not_equal(o.safetyCheck.proposedScoreNotes[n-1],t)&&(o.safetyCheck.proposedScoreNotes[n-1]=t,Q.set(o))}return s.$$set=t=>{"idx"in t&&l(0,n=t.idx),"label"in t&&l(1,f=t.label),"cases"in t&&l(4,_=t.cases),"$$scope"in t&&l(5,r=t.$$scope)},[n,f,o,E,_,r,p,C,b,w,N]}class Le extends ye{constructor(a){super(),Se(this,a,ve,Ne,de,{idx:0,label:1,cases:4})}}export{Le as Q};
