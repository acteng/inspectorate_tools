import{s as Q,e as b,a as C,t as x,c as w,b as k,g as S,d as E,f,q as l,v as z,i as y,h as c,j as D,n as q,J as A,K as N,p as L}from"./scheduler.mGr_ZlpV.js";import{S as J,i as K}from"./index.rGMSHTnh.js";import{b as j}from"./paths.trvgUqpc.js";function U(r){let t;return{c(){t=x(" ")},l(e){t=E(e," ")},m(e,a){y(e,t,a)},p:q,d(e){e&&f(t)}}}function F(r){let t,e,a,o,d,n,g="Previous question",s;return{c(){t=b("div"),e=b("a"),a=A("svg"),o=A("path"),d=C(),n=b("span"),n.textContent=g,this.h()},l(i){t=w(i,"DIV",{class:!0});var _=k(t);e=w(_,"A",{class:!0,href:!0,rel:!0});var p=k(e);a=N(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var h=k(a);o=N(h,"path",{d:!0}),k(o).forEach(f),h.forEach(f),d=S(p),n=w(p,"SPAN",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-1gjmfjw"&&(n.textContent=g),p.forEach(f),_.forEach(f),this.h()},h(){l(o,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),l(a,"class","govuk-pagination__icon govuk-pagination__icon--prev"),l(a,"xmlns","http://www.w3.org/2000/svg"),l(a,"height","13"),l(a,"width","15"),l(a,"aria-hidden","true"),l(a,"focusable","false"),l(a,"viewBox","0 0 15 13"),l(n,"class","govuk-pagination__link-title"),l(e,"class","govuk-link govuk-pagination__link"),l(e,"href",s=j+"/"+r[2]+r[3](r[0]-1)),l(e,"rel","prev"),l(t,"class","govuk-pagination__prev")},m(i,_){y(i,t,_),c(t,e),c(e,a),c(a,o),c(e,d),c(e,n)},p(i,_){_&5&&s!==(s=j+"/"+i[2]+i[3](i[0]-1))&&l(e,"href",s)},d(i){i&&f(t)}}}function G(r){let t;return{c(){t=x(" ")},l(e){t=E(e," ")},m(e,a){y(e,t,a)},p:q,d(e){e&&f(t)}}}function H(r){let t,e,a,o="Next question",d,n,g,s;return{c(){t=b("div"),e=b("a"),a=b("span"),a.textContent=o,d=C(),n=A("svg"),g=A("path"),this.h()},l(i){t=w(i,"DIV",{class:!0});var _=k(t);e=w(_,"A",{class:!0,href:!0,rel:!0});var p=k(e);a=w(p,"SPAN",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-sqpc7c"&&(a.textContent=o),d=S(p),n=N(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var h=k(n);g=N(h,"path",{d:!0}),k(g).forEach(f),h.forEach(f),p.forEach(f),_.forEach(f),this.h()},h(){l(a,"class","govuk-pagination__link-title"),l(g,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),l(n,"class","govuk-pagination__icon govuk-pagination__icon--next"),l(n,"xmlns","http://www.w3.org/2000/svg"),l(n,"height","13"),l(n,"width","15"),l(n,"aria-hidden","true"),l(n,"focusable","false"),l(n,"viewBox","0 0 15 13"),l(e,"class","govuk-link govuk-pagination__link"),l(e,"href",s=j+"/"+r[2]+r[3](r[0]+1)),l(e,"rel","next"),l(t,"class","govuk-pagination__next")},m(i,_){y(i,t,_),c(t,e),c(e,a),c(e,d),c(e,n),c(n,g)},p(i,_){_&5&&s!==(s=j+"/"+i[2]+i[3](i[0]+1))&&l(e,"href",s)},d(i){i&&f(t)}}}function M(r){let t,e,a,o,d,n,g,s,i;function _(u,v){return u[0]!=1?F:U}let p=_(r),h=p(r);function B(u,v){return u[0]!=u[1]?H:G}let I=B(r),m=I(r);return{c(){t=b("nav"),h.c(),e=C(),a=b("ul"),o=b("li"),d=x("Question "),n=x(r[0]),g=x(" / "),s=x(r[1]),i=C(),m.c(),this.h()},l(u){t=w(u,"NAV",{class:!0,"aria-label":!0,style:!0});var v=k(t);h.l(v),e=S(v),a=w(v,"UL",{class:!0});var V=k(a);o=w(V,"LI",{class:!0});var P=k(o);d=E(P,"Question "),n=E(P,r[0]),g=E(P," / "),s=E(P,r[1]),P.forEach(f),V.forEach(f),i=S(v),m.l(v),v.forEach(f),this.h()},h(){l(o,"class","govuk-pagination__item"),l(a,"class","govuk-pagination__list"),l(t,"class","govuk-pagination"),l(t,"aria-label","Pagination"),z(t,"display","flex"),z(t,"justify-content","space-between")},m(u,v){y(u,t,v),h.m(t,null),c(t,e),c(t,a),c(a,o),c(o,d),c(o,n),c(o,g),c(o,s),c(t,i),m.m(t,null)},p(u,[v]){p===(p=_(u))&&h?h.p(u,v):(h.d(1),h=p(u),h&&(h.c(),h.m(t,e))),v&1&&D(n,u[0]),v&2&&D(s,u[1]),I===(I=B(u))&&m?m.p(u,v):(m.d(1),m=I(u),m&&(m.c(),m.m(t,null)))},i:q,o:q,d(u){u&&f(t),h.d(),m.d()}}}function O(r,t,e){let{idx:a}=t,{total:o}=t,{urlPath:d}=t,{startIdx:n=1}=t;function g(s){return(s+n-1).toString().padStart(2,"0")}return r.$$set=s=>{"idx"in s&&e(0,a=s.idx),"total"in s&&e(1,o=s.total),"urlPath"in s&&e(2,d=s.urlPath),"startIdx"in s&&e(4,n=s.startIdx)},[a,o,d,g,n]}class X extends J{constructor(t){super(),K(this,t,O,M,Q,{idx:0,total:1,urlPath:2,startIdx:4})}}export{X as P};
