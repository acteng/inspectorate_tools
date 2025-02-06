import{s as De,e as E,a as w,D as me,c as P,p as le,g as q,q as b,i as Z,n as he,f as k,K as He,L as Se,t as ve,b as L,d as be,J as $e,v as B,h as f,y as Me,j as ke,l as te,r as ae,u as ne,m as se,o as oe,w as ie,k as Qe}from"./scheduler.4ZNDCSWA.js";import{S as Ve,i as Ge,e as re,c as U,a as W,m as F,t as H,b as S,d as X}from"./index.xRKM1n3P.js";import"./index.CmrLa3mv.js";import"./index.CjoGG7mH.js";import{T as Ce}from"./TextArea.D51jEcY5.js";import{P as we}from"./PrevNext.C0Nx98FL.js";import"./paths.B1dD350t.js";import"./entry.CMrWREye.js";import{e as qe}from"./each.DpHudclE.js";import{v as Re}from"./v4.b0td5MfA.js";import{P as je}from"./Progress.CHoUVMrK.js";import{s as x}from"./data.B8GVquOe.js";function Ee(e,a,u){const n=e.slice();return n[5]=a[u][0],n[6]=a[u][1],n[7]=a[u][2],n[8]=a[u][3],n}function Pe(e){let a,u,n,i,o,s,l=!1,d,r,h,c=e[5]+"",M,C,R,G,$,N=e[6]+"",Q,T,j,z,A;return j=Se(e[4][0]),{c(){a=E("div"),u=E("div"),n=E("div"),i=E("input"),d=w(),r=E("label"),h=E("span"),M=ve(c),R=w(),G=E("div"),$=E("p"),Q=ve(N),T=w(),this.h()},l(g){a=P(g,"DIV",{class:!0});var p=L(a);u=P(p,"DIV",{class:!0});var J=L(u);n=P(J,"DIV",{class:!0});var y=L(n);i=P(y,"INPUT",{class:!0,id:!0,type:!0}),d=q(y),r=P(y,"LABEL",{class:!0,for:!0});var I=L(r);h=P(I,"SPAN",{class:!0});var K=L(h);M=be(K,c),K.forEach(k),I.forEach(k),y.forEach(k),J.forEach(k),R=q(p),G=P(p,"DIV",{class:!0,style:!0});var v=L(G);$=P(v,"P",{});var O=L($);Q=be(O,N),O.forEach(k),v.forEach(k),T=q(p),p.forEach(k),this.h()},h(){b(i,"class","govuk-radios__input"),b(i,"id",o=e[2]+e[5]),b(i,"type","radio"),i.__value=s=e[5],$e(i,i.__value),b(h,"class","govuk-tag"),B(h,"background",e[7]),B(h,"color",e[8]),b(r,"class","govuk-label govuk-radios__label"),b(r,"for",C=e[2]+e[5]),b(n,"class","govuk-radios__item"),b(u,"class","govuk-grid-column-one-quarter"),b(G,"class","govuk-grid-column-three-quarters"),B(G,"border-left","5px solid "+e[7]),b(a,"class","govuk-grid-row"),j.p(i)},m(g,p){Z(g,a,p),f(a,u),f(u,n),f(n,i),i.checked=i.__value===e[0],f(n,d),f(n,r),f(r,h),f(h,M),f(a,R),f(a,G),f(G,$),f($,Q),f(a,T),z||(A=Me(i,"change",e[3]),z=!0)},p(g,p){p&2&&o!==(o=g[2]+g[5])&&b(i,"id",o),p&2&&s!==(s=g[5])&&(i.__value=s,$e(i,i.__value),l=!0),(l||p&3)&&(i.checked=i.__value===g[0]),p&2&&c!==(c=g[5]+"")&&ke(M,c),p&2&&B(h,"background",g[7]),p&2&&B(h,"color",g[8]),p&2&&C!==(C=g[2]+g[5])&&b(r,"for",C),p&2&&N!==(N=g[6]+"")&&ke(Q,N),p&2&&B(G,"border-left","5px solid "+g[7])},d(g){g&&k(a),j.r(),z=!1,A()}}}function ze(e){let a,u='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Rating</label></div> <div class="govuk-grid-column-three-quarters"></div>',n,i,o=qe(e[1]),s=[];for(let l=0;l<o.length;l+=1)s[l]=Pe(Ee(e,o,l));return{c(){a=E("div"),a.innerHTML=u,n=w();for(let l=0;l<s.length;l+=1)s[l].c();i=me(),this.h()},l(l){a=P(l,"DIV",{class:!0,"data-svelte-h":!0}),le(a)!=="svelte-187dx1y"&&(a.innerHTML=u),n=q(l);for(let d=0;d<s.length;d+=1)s[d].l(l);i=me(),this.h()},h(){b(a,"class","govuk-grid-row")},m(l,d){Z(l,a,d),Z(l,n,d);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(l,d);Z(l,i,d)},p(l,[d]){if(d&7){o=qe(l[1]);let r;for(r=0;r<o.length;r+=1){const h=Ee(l,o,r);s[r]?s[r].p(h,d):(s[r]=Pe(h),s[r].c(),s[r].m(i.parentNode,i))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},i:he,o:he,d(l){l&&(k(a),k(n),k(i)),He(s,l)}}}function Be(e,a,u){let{choices:n}=a,{value:i}=a,o=Re();const s=[[]];function l(){i=this.__value,u(0,i)}return e.$$set=d=>{"choices"in d&&u(1,n=d.choices),"value"in d&&u(0,i=d.value)},[i,n,o,l,s]}class Je extends Ve{constructor(a){super(),Ge(this,a,Be,ze,De,{choices:1,value:0})}}const Ke=e=>({}),Te=e=>({}),Oe=e=>({}),ye=e=>({}),Ue=e=>({}),Ie=e=>({});function We(e){let a,u,n,i,o,s,l,d,r,h="Common Shortfalls",c,M,C,R,G,$,N,Q,T,j,z,A,g="Policy & Guidance",p,J,y,I;n=new je({props:{currentIdx:e[0]}}),s=new we({props:{idx:e[0],total:10,urlPath:"planning/scorecard/q"}});const K=e[4].description,v=te(K,e,e[3],Ie),O=e[4].shortfalls,D=te(O,e,e[3],ye);function Le(t){e[5](t)}let ue={choices:e[2]};e[1].ratings[e[0]-1]!==void 0&&(ue.value=e[1].ratings[e[0]-1]),C=new Je({props:ue}),ae.push(()=>re(C,"value",Le));function Ne(t){e[6](t)}let de={label:"Appraiser Comments"};e[1].appraiserComments[e[0]-1]!==void 0&&(de.value=e[1].appraiserComments[e[0]-1]),$=new Ce({props:de}),ae.push(()=>re($,"value",Ne));function Ae(t){e[7](t)}let fe={label:"Local Policy & Guidance"};e[1].localGuidance[e[0]-1]!==void 0&&(fe.value=e[1].localGuidance[e[0]-1]),T=new Ce({props:fe}),ae.push(()=>re(T,"value",Ae));const ee=e[4].guidance,V=te(ee,e,e[3],Te);return y=new we({props:{idx:e[0],total:10,urlPath:"planning/scorecard/q"}}),{c(){a=E("div"),u=E("div"),U(n.$$.fragment),i=w(),o=E("div"),U(s.$$.fragment),l=w(),v&&v.c(),d=w(),r=E("h3"),r.textContent=h,c=w(),D&&D.c(),M=w(),U(C.$$.fragment),G=w(),U($.$$.fragment),Q=w(),U(T.$$.fragment),z=w(),A=E("h3"),A.textContent=g,p=w(),V&&V.c(),J=w(),U(y.$$.fragment),this.h()},l(t){a=P(t,"DIV",{class:!0,style:!0});var m=L(a);u=P(m,"DIV",{class:!0});var Y=L(u);W(n.$$.fragment,Y),Y.forEach(k),i=q(m),o=P(m,"DIV",{class:!0});var _=L(o);W(s.$$.fragment,_),l=q(_),v&&v.l(_),d=q(_),r=P(_,"H3",{"data-svelte-h":!0}),le(r)!=="svelte-vyxnwn"&&(r.textContent=h),c=q(_),D&&D.l(_),M=q(_),W(C.$$.fragment,_),G=q(_),W($.$$.fragment,_),Q=q(_),W(T.$$.fragment,_),z=q(_),A=P(_,"H3",{"data-svelte-h":!0}),le(A)!=="svelte-19zeagg"&&(A.textContent=g),p=q(_),V&&V.l(_),J=q(_),W(y.$$.fragment,_),_.forEach(k),m.forEach(k),this.h()},h(){b(u,"class","govuk-grid-column-one-quarter"),b(o,"class","govuk-grid-column-three-quarters"),b(a,"class","govuk-grid-row"),B(a,"margin","1em")},m(t,m){Z(t,a,m),f(a,u),F(n,u,null),f(a,i),f(a,o),F(s,o,null),f(o,l),v&&v.m(o,null),f(o,d),f(o,r),f(o,c),D&&D.m(o,null),f(o,M),F(C,o,null),f(o,G),F($,o,null),f(o,Q),F(T,o,null),f(o,z),f(o,A),f(o,p),V&&V.m(o,null),f(o,J),F(y,o,null),I=!0},p(t,[m]){const Y={};m&1&&(Y.currentIdx=t[0]),n.$set(Y);const _={};m&1&&(_.idx=t[0]),s.$set(_),v&&v.p&&(!I||m&8)&&ne(v,K,t,t[3],I?oe(K,t[3],m,Ue):se(t[3]),Ie),D&&D.p&&(!I||m&8)&&ne(D,O,t,t[3],I?oe(O,t[3],m,Oe):se(t[3]),ye);const ce={};!R&&m&3&&(R=!0,ce.value=t[1].ratings[t[0]-1],ie(()=>R=!1)),C.$set(ce);const _e={};!N&&m&3&&(N=!0,_e.value=t[1].appraiserComments[t[0]-1],ie(()=>N=!1)),$.$set(_e);const pe={};!j&&m&3&&(j=!0,pe.value=t[1].localGuidance[t[0]-1],ie(()=>j=!1)),T.$set(pe),V&&V.p&&(!I||m&8)&&ne(V,ee,t,t[3],I?oe(ee,t[3],m,Ke):se(t[3]),Te);const ge={};m&1&&(ge.idx=t[0]),y.$set(ge)},i(t){I||(H(n.$$.fragment,t),H(s.$$.fragment,t),H(v,t),H(D,t),H(C.$$.fragment,t),H($.$$.fragment,t),H(T.$$.fragment,t),H(V,t),H(y.$$.fragment,t),I=!0)},o(t){S(n.$$.fragment,t),S(s.$$.fragment,t),S(v,t),S(D,t),S(C.$$.fragment,t),S($.$$.fragment,t),S(T.$$.fragment,t),S(V,t),S(y.$$.fragment,t),I=!1},d(t){t&&k(a),X(n),X(s),v&&v.d(t),D&&D.d(t),X(C),X($),X(T),V&&V.d(t),X(y)}}}function Fe(e,a,u){let n;Qe(e,x,c=>u(1,n=c));let{$$slots:i={},$$scope:o}=a,{idx:s}=a,l=[["Exemplar","The proposal exceeds the standards in policy and guidance and represents an example of best practice.","#00b050","white"],["Pass","The proposal meets standards in policy and guidance. Where there are shortfalls, these are minor and do not affect the overall position.","#99cc00","black"],["Condition / Obligation to make acceptable","The proposal does not adhere to standards in policy and guidance; however a planning condition/obligation can address any shortfalls.","#ffc000","black"],["Concern","The proposal does not adhere to standards in policy and guidance and more detail is needed to inform the assessment of the proposal. This may include reasonable amendments, improvements to infrastructure and/or additional information.","#ff5050","black"],["Critical issue","The proposal represents a significant departure from standards in policy and guidance. Either comprehensive amendments or the delivery of new infrastructure would be required; or it is unlikely that the deficiency can be addressed.","#ff0000","white"],["Not applicable","This criterion is not a material consideration.","grey","white"]];function d(c){e.$$.not_equal(n.ratings[s-1],c)&&(n.ratings[s-1]=c,x.set(n))}function r(c){e.$$.not_equal(n.appraiserComments[s-1],c)&&(n.appraiserComments[s-1]=c,x.set(n))}function h(c){e.$$.not_equal(n.localGuidance[s-1],c)&&(n.localGuidance[s-1]=c,x.set(n))}return e.$$set=c=>{"idx"in c&&u(0,s=c.idx),"$$scope"in c&&u(3,o=c.$$scope)},[s,n,l,o,i,d,r,h]}class lt extends Ve{constructor(a){super(),Ge(this,a,Fe,We,De,{idx:0})}}export{lt as Q};
