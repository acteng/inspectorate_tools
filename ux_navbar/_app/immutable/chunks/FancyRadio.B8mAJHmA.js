import{s as Le,r as oe,e as m,a as C,c as b,p as re,g as B,b as L,f as g,q as r,i as F,h as d,w as ne,K as Te,L as ue,t as _e,M as qe,D as fe,d as ve,N as He,J as W,v as M,y as de,j as ce,x as Se}from"./scheduler.4ZNDCSWA.js";import{S as Ae,i as Me,e as ge,c as he,a as pe,m as me,t as be,b as ke,d as Ve}from"./index.xRKM1n3P.js";import{e as Ne}from"./each.DpHudclE.js";import"./index.BUjnMBOD.js";import{T as Ee}from"./TextArea.niTvIY9m.js";import{v as Pe}from"./v4.b0td5MfA.js";function Ie(a,l,t){const _=a.slice();return _[11]=l[t][0],_[12]=l[t][1],_[13]=l[t][2],_[14]=l[t][3],_[16]=t,_}function De(a){let l;return{c(){l=m("hr")},l(t){l=b(t,"HR",{})},m(t,_){F(t,l,_)},d(t){t&&g(l)}}}function we(a){let l,t,_,i,c,N,k=!1,P,D,p,V=a[11]+"",H,S,n,j,w,u,v,R,y=!1,J,T,e,f=a[11]+"",E,A,h,q,K,z=a[12]+"",G,U,X,Y,Z,x,I=a[16]!=a[4].length-1&&De();return X=ue(a[7][0]),Y=ue(a[7][1]),{c(){l=m("div"),t=m("div"),_=m("div"),i=m("input"),P=C(),D=m("label"),p=m("span"),H=_e(V),n=C(),j=m("div"),w=m("div"),u=m("input"),J=C(),T=m("label"),e=m("span"),E=_e(f),h=C(),q=m("div"),K=new qe(!1),G=C(),I&&I.c(),U=fe(),this.h()},l(s){l=b(s,"DIV",{class:!0});var o=L(l);t=b(o,"DIV",{class:!0});var $=L(t);_=b($,"DIV",{class:!0});var O=L(_);i=b(O,"INPUT",{class:!0,id:!0,type:!0}),P=B(O),D=b(O,"LABEL",{class:!0,for:!0});var ee=L(D);p=b(ee,"SPAN",{class:!0});var ae=L(p);H=ve(ae,V),ae.forEach(g),ee.forEach(g),O.forEach(g),$.forEach(g),n=B(o),j=b(o,"DIV",{class:!0});var le=L(j);w=b(le,"DIV",{class:!0});var Q=L(w);u=b(Q,"INPUT",{class:!0,id:!0,type:!0}),J=B(Q),T=b(Q,"LABEL",{class:!0,for:!0});var se=L(T);e=b(se,"SPAN",{class:!0});var te=L(e);E=ve(te,f),te.forEach(g),se.forEach(g),Q.forEach(g),le.forEach(g),h=B(o),q=b(o,"DIV",{class:!0,style:!0});var ie=L(q);K=He(ie,!1),ie.forEach(g),o.forEach(g),G=B(s),I&&I.l(s),U=fe(),this.h()},h(){r(i,"class","govuk-radios__input"),r(i,"id",c=a[5]+a[11]+"-existing"),r(i,"type","radio"),i.__value=N=a[11],W(i,i.__value),r(p,"class","govuk-tag"),M(p,"background",a[13]),M(p,"color",a[14]),r(D,"class","govuk-label govuk-radios__label"),r(D,"for",S=a[5]+a[11]+"-existing"),r(_,"class","govuk-radios__item"),r(t,"class","govuk-grid-column-one-quarter"),r(u,"class","govuk-radios__input"),r(u,"id",v=a[5]+a[11]+"-proposed"),r(u,"type","radio"),u.__value=R=a[11],W(u,u.__value),r(e,"class","govuk-tag"),M(e,"background",a[13]),M(e,"color",a[14]),r(T,"class","govuk-label govuk-radios__label"),r(T,"for",A=a[5]+a[11]+"-proposed"),r(w,"class","govuk-radios__item"),r(j,"class","govuk-grid-column-one-quarter"),K.a=null,r(q,"class","govuk-grid-column-one-half"),M(q,"border-left","5px solid "+a[13]),r(l,"class","govuk-grid-row"),X.p(u),Y.p(i)},m(s,o){F(s,l,o),d(l,t),d(t,_),d(_,i),i.checked=i.__value===a[0],d(_,P),d(_,D),d(D,p),d(p,H),d(l,n),d(l,j),d(j,w),d(w,u),u.checked=u.__value===a[1],d(w,J),d(w,T),d(T,e),d(e,E),d(l,h),d(l,q),K.m(z,q),F(s,G,o),I&&I.m(s,o),F(s,U,o),Z||(x=[de(i,"change",a[6]),de(u,"change",a[8])],Z=!0)},p(s,o){o&16&&c!==(c=s[5]+s[11]+"-existing")&&r(i,"id",c),o&16&&N!==(N=s[11])&&(i.__value=N,W(i,i.__value),k=!0),(k||o&17)&&(i.checked=i.__value===s[0]),o&16&&V!==(V=s[11]+"")&&ce(H,V),o&16&&M(p,"background",s[13]),o&16&&M(p,"color",s[14]),o&16&&S!==(S=s[5]+s[11]+"-existing")&&r(D,"for",S),o&16&&v!==(v=s[5]+s[11]+"-proposed")&&r(u,"id",v),o&16&&R!==(R=s[11])&&(u.__value=R,W(u,u.__value),y=!0),(y||o&18)&&(u.checked=u.__value===s[1]),o&16&&f!==(f=s[11]+"")&&ce(E,f),o&16&&M(e,"background",s[13]),o&16&&M(e,"color",s[14]),o&16&&A!==(A=s[5]+s[11]+"-proposed")&&r(T,"for",A),o&16&&z!==(z=s[12]+"")&&K.p(z),o&16&&M(q,"border-left","5px solid "+s[13]),s[16]!=s[4].length-1?I||(I=De(),I.c(),I.m(U.parentNode,U)):I&&(I.d(1),I=null)},d(s){s&&(g(l),g(G),g(U)),I&&I.d(s),X.r(),Y.r(),Z=!1,Se(x)}}}function je(a){let l,t='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for existing infrastructure</label></div> <div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for proposed infrastructure</label></div> <div class="govuk-grid-column-one-half"></div>',_,i,c,N,k,P,D,p,V,H,S,n,j="",w,u=Ne(a[4]),v=[];for(let e=0;e<u.length;e+=1)v[e]=we(Ie(a,u,e));function R(e){a[9](e)}let y={label:"Notes to justify given score for existing infrastructure",rows:8};a[2]!==void 0&&(y.value=a[2]),k=new Ee({props:y}),oe.push(()=>ge(k,"value",R));function J(e){a[10](e)}let T={label:"Notes to justify given score for proposed infrastructure",rows:8};return a[3]!==void 0&&(T.value=a[3]),V=new Ee({props:T}),oe.push(()=>ge(V,"value",J)),{c(){l=m("div"),l.innerHTML=t,_=C();for(let e=0;e<v.length;e+=1)v[e].c();i=C(),c=m("div"),N=m("div"),he(k.$$.fragment),D=C(),p=m("div"),he(V.$$.fragment),S=C(),n=m("div"),n.innerHTML=j,this.h()},l(e){l=b(e,"DIV",{class:!0,"data-svelte-h":!0}),re(l)!=="svelte-1h4t6o"&&(l.innerHTML=t),_=B(e);for(let h=0;h<v.length;h+=1)v[h].l(e);i=B(e),c=b(e,"DIV",{class:!0});var f=L(c);N=b(f,"DIV",{class:!0});var E=L(N);pe(k.$$.fragment,E),E.forEach(g),D=B(f),p=b(f,"DIV",{class:!0});var A=L(p);pe(V.$$.fragment,A),A.forEach(g),S=B(f),n=b(f,"DIV",{class:!0,"data-svelte-h":!0}),re(n)!=="svelte-1ynyi4l"&&(n.innerHTML=j),f.forEach(g),this.h()},h(){r(l,"class","govuk-grid-row"),r(N,"class","govuk-grid-column-one-quarter"),r(p,"class","govuk-grid-column-one-quarter"),r(n,"class","govuk-grid-column-one-half"),r(c,"class","govuk-grid-row")},m(e,f){F(e,l,f),F(e,_,f);for(let E=0;E<v.length;E+=1)v[E]&&v[E].m(e,f);F(e,i,f),F(e,c,f),d(c,N),me(k,N,null),d(c,D),d(c,p),me(V,p,null),d(c,S),d(c,n),w=!0},p(e,[f]){if(f&51){u=Ne(e[4]);let h;for(h=0;h<u.length;h+=1){const q=Ie(e,u,h);v[h]?v[h].p(q,f):(v[h]=we(q),v[h].c(),v[h].m(i.parentNode,i))}for(;h<v.length;h+=1)v[h].d(1);v.length=u.length}const E={};!P&&f&4&&(P=!0,E.value=e[2],ne(()=>P=!1)),k.$set(E);const A={};!H&&f&8&&(H=!0,A.value=e[3],ne(()=>H=!1)),V.$set(A)},i(e){w||(be(k.$$.fragment,e),be(V.$$.fragment,e),w=!0)},o(e){ke(k.$$.fragment,e),ke(V.$$.fragment,e),w=!1},d(e){e&&(g(l),g(_),g(i),g(c)),Te(v,e),Ve(k),Ve(V)}}}function Ce(a,l,t){let{choices:_}=l,{existingValue:i}=l,{proposedValue:c}=l,{existingNotes:N}=l,{proposedNotes:k}=l,P=Pe();const D=[[],[]];function p(){i=this.__value,t(0,i)}function V(){c=this.__value,t(1,c)}function H(n){N=n,t(2,N)}function S(n){k=n,t(3,k)}return a.$$set=n=>{"choices"in n&&t(4,_=n.choices),"existingValue"in n&&t(0,i=n.existingValue),"proposedValue"in n&&t(1,c=n.proposedValue),"existingNotes"in n&&t(2,N=n.existingNotes),"proposedNotes"in n&&t(3,k=n.proposedNotes)},[i,c,N,k,_,P,p,D,V,H,S]}class Ke extends Ae{constructor(l){super(),Me(this,l,Ce,je,Le,{choices:4,existingValue:0,proposedValue:1,existingNotes:2,proposedNotes:3})}}export{Ke as F};
