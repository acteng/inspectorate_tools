import{s as De,v as ve,e as b,a as A,c as w,p as X,g as H,b as I,f as h,r as t,i as j,h as v,w as _e,q as Ae,J as fe,t as U,K as He,d as F,L as Se,C as W,x as C,z as de,j as Y,B as Me,n as ge,M as Z,N as y}from"./scheduler.BBS-fkhU.js";import{S as Te,i as qe,e as ce,c as he,a as pe,m as me,t as ke,b as be,d as we}from"./index.B8H3ypVf.js";import{e as Ee}from"./each.D79A5KlB.js";import{T as Ve}from"./TextArea.Ck6ITb4v.js";import{v as Be}from"./FormElement.Cy4womqK.js";import{b as x}from"./paths.BCXlpMR9.js";function Ie(a,e,l){const s=a.slice();return s[11]=e[l][0],s[12]=e[l][1],s[13]=e[l][2],s[14]=e[l][3],s[16]=l,s}function Ne(a){let e,l,s,i,f,o,g=!1,d,_,n,u=a[11]+"",c,V,p,D,q,m,L,z,Q=!1,J,S,r,N=a[11]+"",T,B,P,M,K,R=a[12]+"",$,ee,ae,le;return $=fe(a[7][0]),ee=fe(a[7][1]),{c(){e=b("div"),l=b("div"),s=b("div"),i=b("input"),d=A(),_=b("label"),n=b("span"),c=U(u),p=A(),D=b("div"),q=b("div"),m=b("input"),J=A(),S=b("label"),r=b("span"),T=U(N),P=A(),M=b("div"),K=new He(!1),this.h()},l(k){e=w(k,"DIV",{class:!0});var E=I(e);l=w(E,"DIV",{class:!0});var te=I(l);s=w(te,"DIV",{class:!0});var G=I(s);i=w(G,"INPUT",{class:!0,id:!0,type:!0}),d=H(G),_=w(G,"LABEL",{class:!0,for:!0});var se=I(_);n=w(se,"SPAN",{class:!0});var ie=I(n);c=F(ie,u),ie.forEach(h),se.forEach(h),G.forEach(h),te.forEach(h),p=H(E),D=w(E,"DIV",{class:!0});var ne=I(D);q=w(ne,"DIV",{class:!0});var O=I(q);m=w(O,"INPUT",{class:!0,id:!0,type:!0}),J=H(O),S=w(O,"LABEL",{class:!0,for:!0});var re=I(S);r=w(re,"SPAN",{class:!0});var oe=I(r);T=F(oe,N),oe.forEach(h),re.forEach(h),O.forEach(h),ne.forEach(h),P=H(E),M=w(E,"DIV",{class:!0,style:!0});var ue=I(M);K=Se(ue,!1),ue.forEach(h),E.forEach(h),this.h()},h(){t(i,"class","govuk-radios__input"),t(i,"id",f=a[5]+a[11]+"-existing"),t(i,"type","radio"),i.__value=o=a[11],W(i,i.__value),t(n,"class","govuk-tag"),C(n,"background",a[13]),C(n,"color",a[14]),t(_,"class","govuk-label govuk-radios__label"),t(_,"for",V=a[5]+a[11]+"-existing"),t(s,"class","govuk-radios__item"),t(l,"class","govuk-grid-column-one-quarter"),t(m,"class","govuk-radios__input"),t(m,"id",L=a[5]+a[11]+"-proposed"),t(m,"type","radio"),m.__value=z=a[11],W(m,m.__value),t(r,"class","govuk-tag"),C(r,"background",a[13]),C(r,"color",a[14]),t(S,"class","govuk-label govuk-radios__label"),t(S,"for",B=a[5]+a[11]+"-proposed"),t(q,"class","govuk-radios__item"),t(D,"class","govuk-grid-column-one-quarter"),K.a=null,t(M,"class","govuk-grid-column-one-half"),C(M,"border-left","5px solid "+a[13]),t(e,"class","govuk-grid-row"),$.p(m),ee.p(i)},m(k,E){j(k,e,E),v(e,l),v(l,s),v(s,i),i.checked=i.__value===a[0],v(s,d),v(s,_),v(_,n),v(n,c),v(e,p),v(e,D),v(D,q),v(q,m),m.checked=m.__value===a[1],v(q,J),v(q,S),v(S,r),v(r,T),v(e,P),v(e,M),K.m(R,M),ae||(le=[de(i,"change",a[6]),de(m,"change",a[8])],ae=!0)},p(k,E){E&16&&f!==(f=k[5]+k[11]+"-existing")&&t(i,"id",f),E&16&&o!==(o=k[11])&&(i.__value=o,W(i,i.__value),g=!0),(g||E&17)&&(i.checked=i.__value===k[0]),E&16&&u!==(u=k[11]+"")&&Y(c,u),E&16&&C(n,"background",k[13]),E&16&&C(n,"color",k[14]),E&16&&V!==(V=k[5]+k[11]+"-existing")&&t(_,"for",V),E&16&&L!==(L=k[5]+k[11]+"-proposed")&&t(m,"id",L),E&16&&z!==(z=k[11])&&(m.__value=z,W(m,m.__value),Q=!0),(Q||E&18)&&(m.checked=m.__value===k[1]),E&16&&N!==(N=k[11]+"")&&Y(T,N),E&16&&C(r,"background",k[13]),E&16&&C(r,"color",k[14]),E&16&&B!==(B=k[5]+k[11]+"-proposed")&&t(S,"for",B),E&16&&R!==(R=k[12]+"")&&K.p(R),E&16&&C(M,"border-left","5px solid "+k[13])},d(k){k&&h(e),$.r(),ee.r(),ae=!1,Me(le)}}}function Ce(a){let e,l='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for existing infrastructure</label></div> <div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for proposed infrastructure</label></div> <div class="govuk-grid-column-one-half"></div>',s,i,f,o,g,d,_,n,u,c,V,p,D="",q,m=Ee(a[4]),L=[];for(let r=0;r<m.length;r+=1)L[r]=Ne(Ie(a,m,r));function z(r){a[9](r)}let Q={label:"Notes to justify given score for existing infrastructure",rows:8};a[2]!==void 0&&(Q.value=a[2]),g=new Ve({props:Q}),ve.push(()=>ce(g,"value",z));function J(r){a[10](r)}let S={label:"Notes to justify given score for proposed infrastructure",rows:8};return a[3]!==void 0&&(S.value=a[3]),u=new Ve({props:S}),ve.push(()=>ce(u,"value",J)),{c(){e=b("div"),e.innerHTML=l,s=A();for(let r=0;r<L.length;r+=1)L[r].c();i=A(),f=b("div"),o=b("div"),he(g.$$.fragment),_=A(),n=b("div"),he(u.$$.fragment),V=A(),p=b("div"),p.innerHTML=D,this.h()},l(r){e=w(r,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-1h4t6o"&&(e.innerHTML=l),s=H(r);for(let P=0;P<L.length;P+=1)L[P].l(r);i=H(r),f=w(r,"DIV",{class:!0});var N=I(f);o=w(N,"DIV",{class:!0});var T=I(o);pe(g.$$.fragment,T),T.forEach(h),_=H(N),n=w(N,"DIV",{class:!0});var B=I(n);pe(u.$$.fragment,B),B.forEach(h),V=H(N),p=w(N,"DIV",{class:!0,"data-svelte-h":!0}),X(p)!=="svelte-1ynyi4l"&&(p.innerHTML=D),N.forEach(h),this.h()},h(){t(e,"class","govuk-grid-row"),t(o,"class","govuk-grid-column-one-quarter"),t(n,"class","govuk-grid-column-one-quarter"),t(p,"class","govuk-grid-column-one-half"),t(f,"class","govuk-grid-row")},m(r,N){j(r,e,N),j(r,s,N);for(let T=0;T<L.length;T+=1)L[T]&&L[T].m(r,N);j(r,i,N),j(r,f,N),v(f,o),me(g,o,null),v(f,_),v(f,n),me(u,n,null),v(f,V),v(f,p),q=!0},p(r,[N]){if(N&51){m=Ee(r[4]);let P;for(P=0;P<m.length;P+=1){const M=Ie(r,m,P);L[P]?L[P].p(M,N):(L[P]=Ne(M),L[P].c(),L[P].m(i.parentNode,i))}for(;P<L.length;P+=1)L[P].d(1);L.length=m.length}const T={};!d&&N&4&&(d=!0,T.value=r[2],_e(()=>d=!1)),g.$set(T);const B={};!c&&N&8&&(c=!0,B.value=r[3],_e(()=>c=!1)),u.$set(B)},i(r){q||(ke(g.$$.fragment,r),ke(u.$$.fragment,r),q=!0)},o(r){be(g.$$.fragment,r),be(u.$$.fragment,r),q=!1},d(r){r&&(h(e),h(s),h(i),h(f)),Ae(L,r),we(g),we(u)}}}function je(a,e,l){let{choices:s}=e,{existingValue:i}=e,{proposedValue:f}=e,{existingNotes:o}=e,{proposedNotes:g}=e,d=Be();const _=[[],[]];function n(){i=this.__value,l(0,i)}function u(){f=this.__value,l(1,f)}function c(p){o=p,l(2,o)}function V(p){g=p,l(3,g)}return a.$$set=p=>{"choices"in p&&l(4,s=p.choices),"existingValue"in p&&l(0,i=p.existingValue),"proposedValue"in p&&l(1,f=p.proposedValue),"existingNotes"in p&&l(2,o=p.existingNotes),"proposedNotes"in p&&l(3,g=p.proposedNotes)},[i,f,o,g,s,d,n,_,u,c,V]}class Oe extends Te{constructor(e){super(),qe(this,e,je,Ce,De,{choices:4,existingValue:0,proposedValue:1,existingNotes:2,proposedNotes:3})}}function Le(a){let e,l,s,i,f,o,g=`Previous
          <span class="govuk-visually-hidden">question</span>`,d;return{c(){e=b("div"),l=b("a"),s=Z("svg"),i=Z("path"),f=A(),o=b("span"),o.innerHTML=g,this.h()},l(_){e=w(_,"DIV",{class:!0});var n=I(e);l=w(n,"A",{class:!0,href:!0,rel:!0});var u=I(l);s=y(u,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var c=I(s);i=y(c,"path",{d:!0}),I(i).forEach(h),c.forEach(h),f=H(u),o=w(u,"SPAN",{class:!0,"data-svelte-h":!0}),X(o)!=="svelte-1l4lnnb"&&(o.innerHTML=g),u.forEach(h),n.forEach(h),this.h()},h(){t(i,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),t(s,"class","govuk-pagination__icon govuk-pagination__icon--prev"),t(s,"xmlns","http://www.w3.org/2000/svg"),t(s,"height","13"),t(s,"width","15"),t(s,"aria-hidden","true"),t(s,"focusable","false"),t(s,"viewBox","0 0 15 13"),t(o,"class","govuk-pagination__link-title"),t(l,"class","govuk-link govuk-pagination__link"),t(l,"href",d=x+"/"+a[2]+a[3](a[0]-1)),t(l,"rel","prev"),t(e,"class","govuk-pagination__prev")},m(_,n){j(_,e,n),v(e,l),v(l,s),v(s,i),v(l,f),v(l,o)},p(_,n){n&5&&d!==(d=x+"/"+_[2]+_[3](_[0]-1))&&t(l,"href",d)},d(_){_&&h(e)}}}function Pe(a){let e,l,s,i=`Next
          <span class="govuk-visually-hidden">question</span>`,f,o,g,d;return{c(){e=b("div"),l=b("a"),s=b("span"),s.innerHTML=i,f=A(),o=Z("svg"),g=Z("path"),this.h()},l(_){e=w(_,"DIV",{class:!0});var n=I(e);l=w(n,"A",{class:!0,href:!0,rel:!0});var u=I(l);s=w(u,"SPAN",{class:!0,"data-svelte-h":!0}),X(s)!=="svelte-a8skt7"&&(s.innerHTML=i),f=H(u),o=y(u,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var c=I(o);g=y(c,"path",{d:!0}),I(g).forEach(h),c.forEach(h),u.forEach(h),n.forEach(h),this.h()},h(){t(s,"class","govuk-pagination__link-title"),t(g,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),t(o,"class","govuk-pagination__icon govuk-pagination__icon--next"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"height","13"),t(o,"width","15"),t(o,"aria-hidden","true"),t(o,"focusable","false"),t(o,"viewBox","0 0 15 13"),t(l,"class","govuk-link govuk-pagination__link"),t(l,"href",d=x+"/"+a[2]+a[3](a[0]+1)),t(l,"rel","next"),t(e,"class","govuk-pagination__next")},m(_,n){j(_,e,n),v(e,l),v(l,s),v(l,f),v(l,o),v(o,g)},p(_,n){n&5&&d!==(d=x+"/"+_[2]+_[3](_[0]+1))&&t(l,"href",d)},d(_){_&&h(e)}}}function ze(a){let e,l,s,i,f,o,g,d,_,n=a[0]!=1&&Le(a),u=a[0]!=a[1]&&Pe(a);return{c(){e=b("nav"),n&&n.c(),l=A(),s=b("ul"),i=b("li"),f=U("Question "),o=U(a[0]),g=U(" / "),d=U(a[1]),_=A(),u&&u.c(),this.h()},l(c){e=w(c,"NAV",{class:!0,"aria-label":!0});var V=I(e);n&&n.l(V),l=H(V),s=w(V,"UL",{class:!0});var p=I(s);i=w(p,"LI",{class:!0});var D=I(i);f=F(D,"Question "),o=F(D,a[0]),g=F(D," / "),d=F(D,a[1]),D.forEach(h),p.forEach(h),_=H(V),u&&u.l(V),V.forEach(h),this.h()},h(){t(i,"class","govuk-pagination__item"),t(s,"class","govuk-pagination__list"),t(e,"class","govuk-pagination"),t(e,"aria-label","Pagination")},m(c,V){j(c,e,V),n&&n.m(e,null),v(e,l),v(e,s),v(s,i),v(i,f),v(i,o),v(i,g),v(i,d),v(e,_),u&&u.m(e,null)},p(c,[V]){c[0]!=1?n?n.p(c,V):(n=Le(c),n.c(),n.m(e,l)):n&&(n.d(1),n=null),V&1&&Y(o,c[0]),V&2&&Y(d,c[1]),c[0]!=c[1]?u?u.p(c,V):(u=Pe(c),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:ge,o:ge,d(c){c&&h(e),n&&n.d(),u&&u.d()}}}function Ue(a,e,l){let{idx:s}=e,{total:i}=e,{urlPath:f}=e,{startIdx:o=1}=e;function g(d){return(d+o-1).toString().padStart(2,"0")}return a.$$set=d=>{"idx"in d&&l(0,s=d.idx),"total"in d&&l(1,i=d.total),"urlPath"in d&&l(2,f=d.urlPath),"startIdx"in d&&l(4,o=d.startIdx)},[s,i,f,g,o]}class We extends Te{constructor(e){super(),qe(this,e,Ue,ze,De,{idx:0,total:1,urlPath:2,startIdx:4})}}export{Oe as F,We as P};
