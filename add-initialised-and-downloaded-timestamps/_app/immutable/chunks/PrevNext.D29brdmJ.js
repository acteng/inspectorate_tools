import{s as O,e as y,a as A,t as E,c as I,b as m,g as N,d as P,f as v,q as l,v as U,i as B,h as u,j as S,n as C,O as V,P as j}from"./scheduler.DGwhun8C.js";import{S as G,i as H}from"./index.B2vZYn3d.js";import{b as z}from"./paths.DG91fYHJ.js";function J(i){let e;return{c(){e=E(" ")},l(t){e=P(t," ")},m(t,a){B(t,e,a)},p:C,d(t){t&&v(e)}}}function K(i){let e,t,a,r,d,h,o,g,s;return{c(){e=y("div"),t=y("a"),a=V("svg"),r=V("path"),d=A(),h=y("span"),o=E("Previous "),g=E(i[3]),this.h()},l(n){e=I(n,"DIV",{class:!0});var f=m(e);t=I(f,"A",{class:!0,href:!0,rel:!0});var k=m(t);a=j(k,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var b=m(a);r=j(b,"path",{d:!0}),m(r).forEach(v),b.forEach(v),d=N(k),h=I(k,"SPAN",{class:!0});var c=m(h);o=P(c,"Previous "),g=P(c,i[3]),c.forEach(v),k.forEach(v),f.forEach(v),this.h()},h(){l(r,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),l(a,"class","govuk-pagination__icon govuk-pagination__icon--prev"),l(a,"xmlns","http://www.w3.org/2000/svg"),l(a,"height","13"),l(a,"width","15"),l(a,"aria-hidden","true"),l(a,"focusable","false"),l(a,"viewBox","0 0 15 13"),l(h,"class","govuk-pagination__link-title"),l(t,"class","govuk-link govuk-pagination__link"),l(t,"href",s=z+"/"+i[2]+i[4](i[0]-1)),l(t,"rel","prev"),l(e,"class","govuk-pagination__prev")},m(n,f){B(n,e,f),u(e,t),u(t,a),u(a,r),u(t,d),u(t,h),u(h,o),u(h,g)},p(n,f){f&8&&S(g,n[3]),f&5&&s!==(s=z+"/"+n[2]+n[4](n[0]-1))&&l(t,"href",s)},d(n){n&&v(e)}}}function M(i){let e;return{c(){e=E(" ")},l(t){e=P(t," ")},m(t,a){B(t,e,a)},p:C,d(t){t&&v(e)}}}function Q(i){let e,t,a,r,d,h,o,g,s;return{c(){e=y("div"),t=y("a"),a=y("span"),r=E("Next "),d=E(i[3]),h=A(),o=V("svg"),g=V("path"),this.h()},l(n){e=I(n,"DIV",{class:!0});var f=m(e);t=I(f,"A",{class:!0,href:!0,rel:!0});var k=m(t);a=I(k,"SPAN",{class:!0});var b=m(a);r=P(b,"Next "),d=P(b,i[3]),b.forEach(v),h=N(k),o=j(k,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var c=m(o);g=j(c,"path",{d:!0}),m(g).forEach(v),c.forEach(v),k.forEach(v),f.forEach(v),this.h()},h(){l(a,"class","govuk-pagination__link-title"),l(g,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),l(o,"class","govuk-pagination__icon govuk-pagination__icon--next"),l(o,"xmlns","http://www.w3.org/2000/svg"),l(o,"height","13"),l(o,"width","15"),l(o,"aria-hidden","true"),l(o,"focusable","false"),l(o,"viewBox","0 0 15 13"),l(t,"class","govuk-link govuk-pagination__link"),l(t,"href",s=z+"/"+i[2]+i[4](i[0]+1)),l(t,"rel","next"),l(e,"class","govuk-pagination__next")},m(n,f){B(n,e,f),u(e,t),u(t,a),u(a,r),u(a,d),u(t,h),u(t,o),u(o,g)},p(n,f){f&8&&S(d,n[3]),f&5&&s!==(s=z+"/"+n[2]+n[4](n[0]+1))&&l(t,"href",s)},d(n){n&&v(e)}}}function R(i){let e,t,a,r,d=F(i[3])+"",h,o,g,s,n,f;function k(_,p){return _[0]!=1?K:J}let b=k(i),c=b(i);function D(_,p){return _[0]!=_[1]?Q:M}let T=D(i),w=T(i);return{c(){e=y("nav"),c.c(),t=A(),a=y("ul"),r=y("li"),h=E(d),o=A(),g=E(i[0]),s=E(" / "),n=E(i[1]),f=A(),w.c(),this.h()},l(_){e=I(_,"NAV",{class:!0,"aria-label":!0,style:!0});var p=m(e);c.l(p),t=N(p),a=I(p,"UL",{class:!0});var L=m(a);r=I(L,"LI",{class:!0});var q=m(r);h=P(q,d),o=N(q),g=P(q,i[0]),s=P(q," / "),n=P(q,i[1]),q.forEach(v),L.forEach(v),f=N(p),w.l(p),p.forEach(v),this.h()},h(){l(r,"class","govuk-pagination__item"),l(a,"class","govuk-pagination__list"),l(e,"class","govuk-pagination"),l(e,"aria-label","Pagination"),U(e,"display","flex"),U(e,"justify-content","space-between")},m(_,p){B(_,e,p),c.m(e,null),u(e,t),u(e,a),u(a,r),u(r,h),u(r,o),u(r,g),u(r,s),u(r,n),u(e,f),w.m(e,null)},p(_,[p]){b===(b=k(_))&&c?c.p(_,p):(c.d(1),c=b(_),c&&(c.c(),c.m(e,t))),p&8&&d!==(d=F(_[3])+"")&&S(h,d),p&1&&S(g,_[0]),p&2&&S(n,_[1]),T===(T=D(_))&&w?w.p(_,p):(w.d(1),w=T(_),w&&(w.c(),w.m(e,null)))},i:C,o:C,d(_){_&&v(e),c.d(),w.d()}}}function F(i){return i.charAt(0).toUpperCase()+i.slice(1)}function W(i,e,t){let{idx:a}=e,{total:r}=e,{urlPath:d}=e,{startIdx:h=1}=e,{questionType:o="metric"}=e;function g(s){return(s+h-1).toString().padStart(2,"0")}return i.$$set=s=>{"idx"in s&&t(0,a=s.idx),"total"in s&&t(1,r=s.total),"urlPath"in s&&t(2,d=s.urlPath),"startIdx"in s&&t(5,h=s.startIdx),"questionType"in s&&t(3,o=s.questionType)},[a,r,d,o,g,h]}class x extends G{constructor(e){super(),H(this,e,W,R,O,{idx:0,total:1,urlPath:2,startIdx:5,questionType:3})}}export{x as P};
