import{s as De,v as ve,e as k,a as A,c as b,p as X,g as H,b as I,f as h,r as t,i as j,h as v,w as _e,q as Ae,N as fe,t as Q,O as He,d as U,P as Se,C as W,x as C,z as de,j as Y,B as Me,n as ge,Q as Z,R as y}from"./scheduler.4RMNQxd3.js";import{S as Te,i as qe,e as ce,c as he,a as pe,m as me,t as ke,b as be,d as Ee}from"./index.NlNtvd0Y.js";import{e as we}from"./each.Cd-2MsLE.js";import{T as Ve}from"./TextArea.EnHXp-jQ.js";import{v as Be}from"./FormElement.gzwtJumV.js";import{b as x}from"./paths.DK5VnUC7.js";function Ie(l,e,a){const s=l.slice();return s[11]=e[a][0],s[12]=e[a][1],s[13]=e[a][2],s[14]=e[a][3],s[16]=a,s}function Ne(l){let e,a,s,i,f,o,g=!1,d,_,n,u=l[11]+"",c,w,p,D,q,m,P,z,F=!1,R,S,r,N=l[11]+"",T,M,L,B,O,G=l[12]+"",$,ee,ae,te;return $=fe(l[7][0]),ee=fe(l[7][1]),{c(){e=k("div"),a=k("div"),s=k("div"),i=k("input"),d=A(),_=k("label"),n=k("span"),c=Q(u),p=A(),D=k("div"),q=k("div"),m=k("input"),R=A(),S=k("label"),r=k("span"),T=Q(N),L=A(),B=k("div"),O=new He(!1),this.h()},l(E){e=b(E,"DIV",{class:!0});var V=I(e);a=b(V,"DIV",{class:!0});var le=I(a);s=b(le,"DIV",{class:!0});var J=I(s);i=b(J,"INPUT",{class:!0,id:!0,type:!0}),d=H(J),_=b(J,"LABEL",{class:!0,for:!0});var se=I(_);n=b(se,"SPAN",{class:!0});var ie=I(n);c=U(ie,u),ie.forEach(h),se.forEach(h),J.forEach(h),le.forEach(h),p=H(V),D=b(V,"DIV",{class:!0});var ne=I(D);q=b(ne,"DIV",{class:!0});var K=I(q);m=b(K,"INPUT",{class:!0,id:!0,type:!0}),R=H(K),S=b(K,"LABEL",{class:!0,for:!0});var re=I(S);r=b(re,"SPAN",{class:!0});var oe=I(r);T=U(oe,N),oe.forEach(h),re.forEach(h),K.forEach(h),ne.forEach(h),L=H(V),B=b(V,"DIV",{class:!0});var ue=I(B);O=Se(ue,!1),ue.forEach(h),V.forEach(h),this.h()},h(){t(i,"class","govuk-radios__input"),t(i,"id",f=l[5]+l[11]+"-existing"),t(i,"type","radio"),i.__value=o=l[11],W(i,i.__value),t(n,"class","govuk-tag"),C(n,"background",l[13]),C(n,"color",l[14]),t(_,"class","govuk-label govuk-radios__label"),t(_,"for",w=l[5]+l[11]+"-existing"),t(s,"class","govuk-radios__item"),t(a,"class","govuk-grid-column-one-quarter"),t(m,"class","govuk-radios__input"),t(m,"id",P=l[5]+l[11]+"-proposed"),t(m,"type","radio"),m.__value=z=l[11],W(m,m.__value),t(r,"class","govuk-tag"),C(r,"background",l[13]),C(r,"color",l[14]),t(S,"class","govuk-label govuk-radios__label"),t(S,"for",M=l[5]+l[11]+"-proposed"),t(q,"class","govuk-radios__item"),t(D,"class","govuk-grid-column-one-quarter"),O.a=null,t(B,"class","govuk-grid-column-one-half"),t(e,"class","govuk-grid-row"),$.p(m),ee.p(i)},m(E,V){j(E,e,V),v(e,a),v(a,s),v(s,i),i.checked=i.__value===l[0],v(s,d),v(s,_),v(_,n),v(n,c),v(e,p),v(e,D),v(D,q),v(q,m),m.checked=m.__value===l[1],v(q,R),v(q,S),v(S,r),v(r,T),v(e,L),v(e,B),O.m(G,B),ae||(te=[de(i,"change",l[6]),de(m,"change",l[8])],ae=!0)},p(E,V){V&16&&f!==(f=E[5]+E[11]+"-existing")&&t(i,"id",f),V&16&&o!==(o=E[11])&&(i.__value=o,W(i,i.__value),g=!0),(g||V&17)&&(i.checked=i.__value===E[0]),V&16&&u!==(u=E[11]+"")&&Y(c,u),V&16&&C(n,"background",E[13]),V&16&&C(n,"color",E[14]),V&16&&w!==(w=E[5]+E[11]+"-existing")&&t(_,"for",w),V&16&&P!==(P=E[5]+E[11]+"-proposed")&&t(m,"id",P),V&16&&z!==(z=E[11])&&(m.__value=z,W(m,m.__value),F=!0),(F||V&18)&&(m.checked=m.__value===E[1]),V&16&&N!==(N=E[11]+"")&&Y(T,N),V&16&&C(r,"background",E[13]),V&16&&C(r,"color",E[14]),V&16&&M!==(M=E[5]+E[11]+"-proposed")&&t(S,"for",M),V&16&&G!==(G=E[12]+"")&&O.p(G)},d(E){E&&h(e),$.r(),ee.r(),ae=!1,Me(te)}}}function Ce(l){let e,a='<div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for existing infrastructure</label></div> <div class="govuk-grid-column-one-quarter"><label class="govuk-label govuk-label--s">Score for proposed infrastructure</label></div> <div class="govuk-grid-column-one-half"></div>',s,i,f,o,g,d,_,n,u,c,w,p,D="",q,m=we(l[4]),P=[];for(let r=0;r<m.length;r+=1)P[r]=Ne(Ie(l,m,r));function z(r){l[9](r)}let F={label:"Notes to justify given score for existing infrastructure"};l[2]!==void 0&&(F.value=l[2]),g=new Ve({props:F}),ve.push(()=>ce(g,"value",z));function R(r){l[10](r)}let S={label:"Notes to justify given score for proposed infrastructure"};return l[3]!==void 0&&(S.value=l[3]),u=new Ve({props:S}),ve.push(()=>ce(u,"value",R)),{c(){e=k("div"),e.innerHTML=a,s=A();for(let r=0;r<P.length;r+=1)P[r].c();i=A(),f=k("div"),o=k("div"),he(g.$$.fragment),_=A(),n=k("div"),he(u.$$.fragment),w=A(),p=k("div"),p.innerHTML=D,this.h()},l(r){e=b(r,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-1h4t6o"&&(e.innerHTML=a),s=H(r);for(let L=0;L<P.length;L+=1)P[L].l(r);i=H(r),f=b(r,"DIV",{class:!0});var N=I(f);o=b(N,"DIV",{class:!0});var T=I(o);pe(g.$$.fragment,T),T.forEach(h),_=H(N),n=b(N,"DIV",{class:!0});var M=I(n);pe(u.$$.fragment,M),M.forEach(h),w=H(N),p=b(N,"DIV",{class:!0,"data-svelte-h":!0}),X(p)!=="svelte-1ynyi4l"&&(p.innerHTML=D),N.forEach(h),this.h()},h(){t(e,"class","govuk-grid-row"),t(o,"class","govuk-grid-column-one-quarter"),t(n,"class","govuk-grid-column-one-quarter"),t(p,"class","govuk-grid-column-one-half"),t(f,"class","govuk-grid-row")},m(r,N){j(r,e,N),j(r,s,N);for(let T=0;T<P.length;T+=1)P[T]&&P[T].m(r,N);j(r,i,N),j(r,f,N),v(f,o),me(g,o,null),v(f,_),v(f,n),me(u,n,null),v(f,w),v(f,p),q=!0},p(r,[N]){if(N&51){m=we(r[4]);let L;for(L=0;L<m.length;L+=1){const B=Ie(r,m,L);P[L]?P[L].p(B,N):(P[L]=Ne(B),P[L].c(),P[L].m(i.parentNode,i))}for(;L<P.length;L+=1)P[L].d(1);P.length=m.length}const T={};!d&&N&4&&(d=!0,T.value=r[2],_e(()=>d=!1)),g.$set(T);const M={};!c&&N&8&&(c=!0,M.value=r[3],_e(()=>c=!1)),u.$set(M)},i(r){q||(ke(g.$$.fragment,r),ke(u.$$.fragment,r),q=!0)},o(r){be(g.$$.fragment,r),be(u.$$.fragment,r),q=!1},d(r){r&&(h(e),h(s),h(i),h(f)),Ae(P,r),Ee(g),Ee(u)}}}function je(l,e,a){let{choices:s}=e,{existingValue:i}=e,{proposedValue:f}=e,{existingNotes:o}=e,{proposedNotes:g}=e,d=Be();const _=[[],[]];function n(){i=this.__value,a(0,i)}function u(){f=this.__value,a(1,f)}function c(p){o=p,a(2,o)}function w(p){g=p,a(3,g)}return l.$$set=p=>{"choices"in p&&a(4,s=p.choices),"existingValue"in p&&a(0,i=p.existingValue),"proposedValue"in p&&a(1,f=p.proposedValue),"existingNotes"in p&&a(2,o=p.existingNotes),"proposedNotes"in p&&a(3,g=p.proposedNotes)},[i,f,o,g,s,d,n,_,u,c,w]}class Ke extends Te{constructor(e){super(),qe(this,e,je,Ce,De,{choices:4,existingValue:0,proposedValue:1,existingNotes:2,proposedNotes:3})}}function Pe(l){let e,a,s,i,f,o,g=`Previous
          <span class="govuk-visually-hidden">question</span>`,d;return{c(){e=k("div"),a=k("a"),s=Z("svg"),i=Z("path"),f=A(),o=k("span"),o.innerHTML=g,this.h()},l(_){e=b(_,"DIV",{class:!0});var n=I(e);a=b(n,"A",{class:!0,href:!0,rel:!0});var u=I(a);s=y(u,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var c=I(s);i=y(c,"path",{d:!0}),I(i).forEach(h),c.forEach(h),f=H(u),o=b(u,"SPAN",{class:!0,"data-svelte-h":!0}),X(o)!=="svelte-1l4lnnb"&&(o.innerHTML=g),u.forEach(h),n.forEach(h),this.h()},h(){t(i,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),t(s,"class","govuk-pagination__icon govuk-pagination__icon--prev"),t(s,"xmlns","http://www.w3.org/2000/svg"),t(s,"height","13"),t(s,"width","15"),t(s,"aria-hidden","true"),t(s,"focusable","false"),t(s,"viewBox","0 0 15 13"),t(o,"class","govuk-pagination__link-title"),t(a,"class","govuk-link govuk-pagination__link"),t(a,"href",d=x+"/"+l[2]+l[3](l[0]-1)),t(a,"rel","prev"),t(e,"class","govuk-pagination__prev")},m(_,n){j(_,e,n),v(e,a),v(a,s),v(s,i),v(a,f),v(a,o)},p(_,n){n&5&&d!==(d=x+"/"+_[2]+_[3](_[0]-1))&&t(a,"href",d)},d(_){_&&h(e)}}}function Le(l){let e,a,s,i=`Next
          <span class="govuk-visually-hidden">question</span>`,f,o,g,d;return{c(){e=k("div"),a=k("a"),s=k("span"),s.innerHTML=i,f=A(),o=Z("svg"),g=Z("path"),this.h()},l(_){e=b(_,"DIV",{class:!0});var n=I(e);a=b(n,"A",{class:!0,href:!0,rel:!0});var u=I(a);s=b(u,"SPAN",{class:!0,"data-svelte-h":!0}),X(s)!=="svelte-a8skt7"&&(s.innerHTML=i),f=H(u),o=y(u,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var c=I(o);g=y(c,"path",{d:!0}),I(g).forEach(h),c.forEach(h),u.forEach(h),n.forEach(h),this.h()},h(){t(s,"class","govuk-pagination__link-title"),t(g,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),t(o,"class","govuk-pagination__icon govuk-pagination__icon--next"),t(o,"xmlns","http://www.w3.org/2000/svg"),t(o,"height","13"),t(o,"width","15"),t(o,"aria-hidden","true"),t(o,"focusable","false"),t(o,"viewBox","0 0 15 13"),t(a,"class","govuk-link govuk-pagination__link"),t(a,"href",d=x+"/"+l[2]+l[3](l[0]+1)),t(a,"rel","next"),t(e,"class","govuk-pagination__next")},m(_,n){j(_,e,n),v(e,a),v(a,s),v(a,f),v(a,o),v(o,g)},p(_,n){n&5&&d!==(d=x+"/"+_[2]+_[3](_[0]+1))&&t(a,"href",d)},d(_){_&&h(e)}}}function ze(l){let e,a,s,i,f,o,g,d,_,n=l[0]!=1&&Pe(l),u=l[0]!=l[1]&&Le(l);return{c(){e=k("nav"),n&&n.c(),a=A(),s=k("ul"),i=k("li"),f=Q("Question "),o=Q(l[0]),g=Q(" / "),d=Q(l[1]),_=A(),u&&u.c(),this.h()},l(c){e=b(c,"NAV",{class:!0,"aria-label":!0});var w=I(e);n&&n.l(w),a=H(w),s=b(w,"UL",{class:!0});var p=I(s);i=b(p,"LI",{class:!0});var D=I(i);f=U(D,"Question "),o=U(D,l[0]),g=U(D," / "),d=U(D,l[1]),D.forEach(h),p.forEach(h),_=H(w),u&&u.l(w),w.forEach(h),this.h()},h(){t(i,"class","govuk-pagination__item"),t(s,"class","govuk-pagination__list"),t(e,"class","govuk-pagination"),t(e,"aria-label","Pagination")},m(c,w){j(c,e,w),n&&n.m(e,null),v(e,a),v(e,s),v(s,i),v(i,f),v(i,o),v(i,g),v(i,d),v(e,_),u&&u.m(e,null)},p(c,[w]){c[0]!=1?n?n.p(c,w):(n=Pe(c),n.c(),n.m(e,a)):n&&(n.d(1),n=null),w&1&&Y(o,c[0]),w&2&&Y(d,c[1]),c[0]!=c[1]?u?u.p(c,w):(u=Le(c),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:ge,o:ge,d(c){c&&h(e),n&&n.d(),u&&u.d()}}}function Qe(l,e,a){let{idx:s}=e,{total:i}=e,{urlPath:f}=e,{startIdx:o=1}=e;function g(d){return(d+o-1).toString().padStart(2,"0")}return l.$$set=d=>{"idx"in d&&a(0,s=d.idx),"total"in d&&a(1,i=d.total),"urlPath"in d&&a(2,f=d.urlPath),"startIdx"in d&&a(4,o=d.startIdx)},[s,i,f,g,o]}class We extends Te{constructor(e){super(),qe(this,e,Qe,ze,De,{idx:0,total:1,urlPath:2,startIdx:4})}}export{Ke as F,We as P};
