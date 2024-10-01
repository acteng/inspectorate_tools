import{s as M,e as b,a as C,t as x,c as w,b as k,g as S,d as E,f,q as l,v as z,i as y,h as c,j as D,n as A,O as N,P as B,p as L}from"./scheduler.4ZNDCSWA.js";import{S as O,i as U}from"./index.xRKM1n3P.js";import{b as V}from"./paths.BGvwqIoR.js";function F(r){let t;return{c(){t=x(" ")},l(e){t=E(e," ")},m(e,a){y(e,t,a)},p:A,d(e){e&&f(t)}}}function G(r){let t,e,a,o,d,i,g="Previous metric",s;return{c(){t=b("div"),e=b("a"),a=N("svg"),o=N("path"),d=C(),i=b("span"),i.textContent=g,this.h()},l(n){t=w(n,"DIV",{class:!0});var _=k(t);e=w(_,"A",{class:!0,href:!0,rel:!0});var m=k(e);a=B(m,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var h=k(a);o=B(h,"path",{d:!0}),k(o).forEach(f),h.forEach(f),d=S(m),i=w(m,"SPAN",{class:!0,"data-svelte-h":!0}),L(i)!=="svelte-1w3i1bs"&&(i.textContent=g),m.forEach(f),_.forEach(f),this.h()},h(){l(o,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),l(a,"class","govuk-pagination__icon govuk-pagination__icon--prev"),l(a,"xmlns","http://www.w3.org/2000/svg"),l(a,"height","13"),l(a,"width","15"),l(a,"aria-hidden","true"),l(a,"focusable","false"),l(a,"viewBox","0 0 15 13"),l(i,"class","govuk-pagination__link-title"),l(e,"class","govuk-link govuk-pagination__link"),l(e,"href",s=V+"/"+r[2]+r[3](r[0]-1)),l(e,"rel","prev"),l(t,"class","govuk-pagination__prev")},m(n,_){y(n,t,_),c(t,e),c(e,a),c(a,o),c(e,d),c(e,i)},p(n,_){_&5&&s!==(s=V+"/"+n[2]+n[3](n[0]-1))&&l(e,"href",s)},d(n){n&&f(t)}}}function H(r){let t;return{c(){t=x(" ")},l(e){t=E(e," ")},m(e,a){y(e,t,a)},p:A,d(e){e&&f(t)}}}function J(r){let t,e,a,o="Next metric",d,i,g,s;return{c(){t=b("div"),e=b("a"),a=b("span"),a.textContent=o,d=C(),i=N("svg"),g=N("path"),this.h()},l(n){t=w(n,"DIV",{class:!0});var _=k(t);e=w(_,"A",{class:!0,href:!0,rel:!0});var m=k(e);a=w(m,"SPAN",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-wm8yss"&&(a.textContent=o),d=S(m),i=B(m,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var h=k(i);g=B(h,"path",{d:!0}),k(g).forEach(f),h.forEach(f),m.forEach(f),_.forEach(f),this.h()},h(){l(a,"class","govuk-pagination__link-title"),l(g,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),l(i,"class","govuk-pagination__icon govuk-pagination__icon--next"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"height","13"),l(i,"width","15"),l(i,"aria-hidden","true"),l(i,"focusable","false"),l(i,"viewBox","0 0 15 13"),l(e,"class","govuk-link govuk-pagination__link"),l(e,"href",s=V+"/"+r[2]+r[3](r[0]+1)),l(e,"rel","next"),l(t,"class","govuk-pagination__next")},m(n,_){y(n,t,_),c(t,e),c(e,a),c(e,d),c(e,i),c(i,g)},p(n,_){_&5&&s!==(s=V+"/"+n[2]+n[3](n[0]+1))&&l(e,"href",s)},d(n){n&&f(t)}}}function K(r){let t,e,a,o,d,i,g,s,n;function _(u,v){return u[0]!=1?G:F}let m=_(r),h=m(r);function j(u,v){return u[0]!=u[1]?J:H}let I=j(r),p=I(r);return{c(){t=b("nav"),h.c(),e=C(),a=b("ul"),o=b("li"),d=x("Metric "),i=x(r[0]),g=x(" / "),s=x(r[1]),n=C(),p.c(),this.h()},l(u){t=w(u,"NAV",{class:!0,"aria-label":!0,style:!0});var v=k(t);h.l(v),e=S(v),a=w(v,"UL",{class:!0});var q=k(a);o=w(q,"LI",{class:!0});var P=k(o);d=E(P,"Metric "),i=E(P,r[0]),g=E(P," / "),s=E(P,r[1]),P.forEach(f),q.forEach(f),n=S(v),p.l(v),v.forEach(f),this.h()},h(){l(o,"class","govuk-pagination__item"),l(a,"class","govuk-pagination__list"),l(t,"class","govuk-pagination"),l(t,"aria-label","Pagination"),z(t,"display","flex"),z(t,"justify-content","space-between")},m(u,v){y(u,t,v),h.m(t,null),c(t,e),c(t,a),c(a,o),c(o,d),c(o,i),c(o,g),c(o,s),c(t,n),p.m(t,null)},p(u,[v]){m===(m=_(u))&&h?h.p(u,v):(h.d(1),h=m(u),h&&(h.c(),h.m(t,e))),v&1&&D(i,u[0]),v&2&&D(s,u[1]),I===(I=j(u))&&p?p.p(u,v):(p.d(1),p=I(u),p&&(p.c(),p.m(t,null)))},i:A,o:A,d(u){u&&f(t),h.d(),p.d()}}}function Q(r,t,e){let{idx:a}=t,{total:o}=t,{urlPath:d}=t,{startIdx:i=1}=t;function g(s){return(s+i-1).toString().padStart(2,"0")}return r.$$set=s=>{"idx"in s&&e(0,a=s.idx),"total"in s&&e(1,o=s.total),"urlPath"in s&&e(2,d=s.urlPath),"startIdx"in s&&e(4,i=s.startIdx)},[a,o,d,g,i]}class X extends O{constructor(t){super(),U(this,t,Q,K,M,{idx:0,total:1,urlPath:2,startIdx:4})}}export{X as P};
