import{s as Te,r as oe,e as m,a as j,c as b,p as re,g as B,b as T,f as g,q as r,i as F,h as d,w as ne,B as qe,C as ue,t as _e,I as Le,J as fe,d as ve,K as He,D as W,v as C,z as de,j as ce,y as Se}from"./scheduler.B5FfXhnD.js";import{S as Ae,i as Ce,e as ge,c as he,a as pe,m as me,t as be,b as ke,d as Ve}from"./index.VeCIHQiF.js";import{e as Ne}from"./each.XauKQHIb.js";import"./index.DmPom1Lc.js";import{T as Ee}from"./TextArea.1KfPvtUk.js";import{v as Me}from"./v4.b0td5MfA.js";function Ie(a,l,t){const _=a.slice();return _[11]=l[t][0],_[12]=l[t][1],_[13]=l[t][2],_[14]=l[t][3],_[16]=t,_}function De(a){let l;return{c(){l=m("hr")},l(t){l=b(t,"HR",{})},m(t,_){F(t,l,_)},d(t){t&&g(l)}}}function we(a){let l,t,_,i,c,N,k=!1,M,D,p,V=a[11]+"",H,S,n,P,w,u,v,R,y=!1,z,q,e,f=a[11]+"",E,A,h,L,J,K=a[12]+"",G,U,X,Y,Z,x,I=a[16]!=a[4].length-1&&De();return X=ue(a[7][0]),Y=ue(a[7][1]),{c(){l=m("div"),t=m("div"),_=m("div"),i=m("input"),M=j(),D=m("label"),p=m("span"),H=_e(V),n=j(),P=m("div"),w=m("div"),u=m("input"),z=j(),q=m("label"),e=m("span"),E=_e(f),h=j(),L=m("div"),J=new Le(!1),G=j(),I&&I.c(),U=fe(),this.h()},l(s){l=b(s,"DIV",{class:!0});var o=T(l);t=b(o,"DIV",{class:!0});var $=T(t);_=b($,"DIV",{class:!0});var O=T(_);i=b(O,"INPUT",{class:!0,id:!0,type:!0}),M=B(O),D=b(O,"LABEL",{class:!0,for:!0});var ee=T(D);p=b(ee,"SPAN",{class:!0});var ae=T(p);H=ve(ae,V),ae.forEach(g),ee.forEach(g),O.forEach(g),$.forEach(g),n=B(o),P=b(o,"DIV",{class:!0});var le=T(P);w=b(le,"DIV",{class:!0});var Q=T(w);u=b(Q,"INPUT",{class:!0,id:!0,type:!0}),z=B(Q),q=b(Q,"LABEL",{class:!0,for:!0});var se=T(q);e=b(se,"SPAN",{class:!0});var te=T(e);E=ve(te,f),te.forEach(g),se.forEach(g),Q.forEach(g),le.forEach(g),h=B(o),L=b(o,"DIV",{class:!0,style:!0});var ie=T(L);J=He(ie,!1),ie.forEach(g),o.forEach(g),G=B(s),I&&I.l(s),U=fe(),this.h()},h(){r(i,"class","govuk-radios__input"),r(i,"id",c=a[5]+a[11]+"-existing"),r(i,"type","radio"),i.__value=N=a[11],W(i,i.__value),r(p,"class","govuk-tag"),C(p,"background",a[13]),C(p,"color",a[14]),r(D,"class","govuk-label govuk-radios__label"),r(D,"for",S=a[5]+a[11]+"-existing"),r(_,"class","govuk-radios__item"),r(t,"class","govuk-grid-column-one-quarter"),r(u,"class","govuk-radios__input"),r(u,"id",v=a[5]+a[11]+"-proposed"),r(u,"type","radio"),u.__value=R=a[11],W(u,u.__value),r(e,"class","govuk-tag"),C(e,"background",a[13]),C(e,"color",a[14]),r(q,"class","govuk-label govuk-radios__label"),r(q,"for",A=a[5]+a[11]+"-proposed"),r(w,"class","govuk-radios__item"),r(P,"class","govuk-grid-column-one-quarter"),J.a=null,r(L,"class","govuk-grid-column-one-half"),C(L,"border-left","5px solid "+a[13]),r(l,"class","govuk-grid-row"),X.p(u),Y.p(i)},m(s,o){F(s,l,o),d(l,t),d(t,_),d(_,i),i.checked=i.__value===a[0],d(_,M),d(_,D),d(D,p),d(p,H),d(l,n),d(l,P),d(P,w),d(w,u),u.checked=u.__value===a[1],d(w,z),d(w,q),d(q,e),d(e,E),d(l,h),d(l,L),J.m(K,L),F(s,G,o),I&&I.m(s,o),F(s,U,o),Z||(x=[de(i,"change",a[6]),de(u,"change",a[8])],Z=!0)},p(s,o){o&16&&c!==(c=s[5]+s[11]+"-existing")&&r(i,"id",c),o&16&&N!==(N=s[11])&&(i.__value=N,W(i,i.__value),k=!0),(k||o&17)&&(i.checked=i.__value===s[0]),o&16&&V!==(V=s[11]+"")&&ce(H,V),o&16&&C(p,"background",s[13]),o&16&&C(p,"color",s[14]),o&16&&S!==(S=s[5]+s[11]+"-existing")&&r(D,"for",S),o&16&&v!==(v=s[5]+s[11]+"-proposed")&&r(u,"id",v),o&16&&R!==(R=s[11])&&(u.__value=R,W(u,u.__value),y=!0),(y||o&18)&&(u.checked=u.__value===s[1]),o&16&&f!==(f=s[11]+"")&&ce(E,f),o&16&&C(e,"background",s[13]),o&16&&C(e,"color",s[14]),o&16&&A!==(A=s[5]+s[11]+"-proposed")&&r(q,"for",A),o&16&&K!==(K=s[12]+"")&&J.p(K),o&16&&C(L,"border-left","5px solid "+s[13]),s[16]!=s[4].length-1?I||(I=De(),I.c(),I.m(U.parentNode,U)):I&&(I.d(1),I=null)},d(s){s&&(g(l),g(G),g(U)),I&&I.d(s),X.r(),Y.r(),Z=!1,Se(x)}}}function Pe(a){let l,t='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for existing infrastructure</label></div> <div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for proposed infrastructure</label></div> <div class="govuk-grid-column-one-half"></div>',_,i,c,N,k,M,D,p,V,H,S,n,P="",w,u=Ne(a[4]),v=[];for(let e=0;e<u.length;e+=1)v[e]=we(Ie(a,u,e));function R(e){a[9](e)}let y={label:"Notes to justify given score for existing infrastructure",rows:8};a[2]!==void 0&&(y.value=a[2]),k=new Ee({props:y}),oe.push(()=>ge(k,"value",R));function z(e){a[10](e)}let q={label:"Notes to justify given score for proposed infrastructure",rows:8};return a[3]!==void 0&&(q.value=a[3]),V=new Ee({props:q}),oe.push(()=>ge(V,"value",z)),{c(){l=m("div"),l.innerHTML=t,_=j();for(let e=0;e<v.length;e+=1)v[e].c();i=j(),c=m("div"),N=m("div"),he(k.$$.fragment),D=j(),p=m("div"),he(V.$$.fragment),S=j(),n=m("div"),n.innerHTML=P,this.h()},l(e){l=b(e,"DIV",{class:!0,"data-svelte-h":!0}),re(l)!=="svelte-1h4t6o"&&(l.innerHTML=t),_=B(e);for(let h=0;h<v.length;h+=1)v[h].l(e);i=B(e),c=b(e,"DIV",{class:!0});var f=T(c);N=b(f,"DIV",{class:!0});var E=T(N);pe(k.$$.fragment,E),E.forEach(g),D=B(f),p=b(f,"DIV",{class:!0});var A=T(p);pe(V.$$.fragment,A),A.forEach(g),S=B(f),n=b(f,"DIV",{class:!0,"data-svelte-h":!0}),re(n)!=="svelte-1ynyi4l"&&(n.innerHTML=P),f.forEach(g),this.h()},h(){r(l,"class","govuk-grid-row"),r(N,"class","govuk-grid-column-one-quarter"),r(p,"class","govuk-grid-column-one-quarter"),r(n,"class","govuk-grid-column-one-half"),r(c,"class","govuk-grid-row")},m(e,f){F(e,l,f),F(e,_,f);for(let E=0;E<v.length;E+=1)v[E]&&v[E].m(e,f);F(e,i,f),F(e,c,f),d(c,N),me(k,N,null),d(c,D),d(c,p),me(V,p,null),d(c,S),d(c,n),w=!0},p(e,[f]){if(f&51){u=Ne(e[4]);let h;for(h=0;h<u.length;h+=1){const L=Ie(e,u,h);v[h]?v[h].p(L,f):(v[h]=we(L),v[h].c(),v[h].m(i.parentNode,i))}for(;h<v.length;h+=1)v[h].d(1);v.length=u.length}const E={};!M&&f&4&&(M=!0,E.value=e[2],ne(()=>M=!1)),k.$set(E);const A={};!H&&f&8&&(H=!0,A.value=e[3],ne(()=>H=!1)),V.$set(A)},i(e){w||(be(k.$$.fragment,e),be(V.$$.fragment,e),w=!0)},o(e){ke(k.$$.fragment,e),ke(V.$$.fragment,e),w=!1},d(e){e&&(g(l),g(_),g(i),g(c)),qe(v,e),Ve(k),Ve(V)}}}function je(a,l,t){let{choices:_}=l,{existingValue:i}=l,{proposedValue:c}=l,{existingNotes:N}=l,{proposedNotes:k}=l,M=Me();const D=[[],[]];function p(){i=this.__value,t(0,i)}function V(){c=this.__value,t(1,c)}function H(n){N=n,t(2,N)}function S(n){k=n,t(3,k)}return a.$$set=n=>{"choices"in n&&t(4,_=n.choices),"existingValue"in n&&t(0,i=n.existingValue),"proposedValue"in n&&t(1,c=n.proposedValue),"existingNotes"in n&&t(2,N=n.existingNotes),"proposedNotes"in n&&t(3,k=n.proposedNotes)},[i,c,N,k,_,M,p,D,V,H,S]}class Je extends Ae{constructor(l){super(),Ce(this,l,je,Pe,Te,{choices:4,existingValue:0,proposedValue:1,existingNotes:2,proposedNotes:3})}}export{Je as F};
