import{s as C,e as p,a as P,t as b,c as k,b as m,g as I,d as E,f as g,o as a,i as N,h as v,j as B,n as H,E as L,F as S,m as q}from"./scheduler.BJ06nkRu.js";import{S as V,i as z}from"./index.Dmc4uC9p.js";import{b as A}from"./paths.DBAzMeEY.js";function M(f){let e,t,i,u,_,s,d=`Previous
          <span class="govuk-visually-hidden">question</span>`,r;return{c(){e=p("div"),t=p("a"),i=L("svg"),u=L("path"),_=P(),s=p("span"),s.innerHTML=d,this.h()},l(o){e=k(o,"DIV",{class:!0});var l=m(e);t=k(l,"A",{class:!0,href:!0,rel:!0});var n=m(t);i=S(n,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var h=m(i);u=S(h,"path",{d:!0}),m(u).forEach(g),h.forEach(g),_=I(n),s=k(n,"SPAN",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1l4lnnb"&&(s.innerHTML=d),n.forEach(g),l.forEach(g),this.h()},h(){a(u,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),a(i,"class","govuk-pagination__icon govuk-pagination__icon--prev"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(i,"height","13"),a(i,"width","15"),a(i,"aria-hidden","true"),a(i,"focusable","false"),a(i,"viewBox","0 0 15 13"),a(s,"class","govuk-pagination__link-title"),a(t,"class","govuk-link govuk-pagination__link"),a(t,"href",r=A+"/"+f[2]+f[3](f[0]-1)),a(t,"rel","prev"),a(e,"class","govuk-pagination__prev")},m(o,l){N(o,e,l),v(e,t),v(t,i),v(i,u),v(t,_),v(t,s)},p(o,l){l&5&&r!==(r=A+"/"+o[2]+o[3](o[0]-1))&&a(t,"href",r)},d(o){o&&g(e)}}}function T(f){let e,t,i,u=`Next
          <span class="govuk-visually-hidden">question</span>`,_,s,d,r;return{c(){e=p("div"),t=p("a"),i=p("span"),i.innerHTML=u,_=P(),s=L("svg"),d=L("path"),this.h()},l(o){e=k(o,"DIV",{class:!0});var l=m(e);t=k(l,"A",{class:!0,href:!0,rel:!0});var n=m(t);i=k(n,"SPAN",{class:!0,"data-svelte-h":!0}),q(i)!=="svelte-a8skt7"&&(i.innerHTML=u),_=I(n),s=S(n,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var h=m(s);d=S(h,"path",{d:!0}),m(d).forEach(g),h.forEach(g),n.forEach(g),l.forEach(g),this.h()},h(){a(i,"class","govuk-pagination__link-title"),a(d,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),a(s,"class","govuk-pagination__icon govuk-pagination__icon--next"),a(s,"xmlns","http://www.w3.org/2000/svg"),a(s,"height","13"),a(s,"width","15"),a(s,"aria-hidden","true"),a(s,"focusable","false"),a(s,"viewBox","0 0 15 13"),a(t,"class","govuk-link govuk-pagination__link"),a(t,"href",r=A+"/"+f[2]+f[3](f[0]+1)),a(t,"rel","next"),a(e,"class","govuk-pagination__next")},m(o,l){N(o,e,l),v(e,t),v(t,i),v(t,_),v(t,s),v(s,d)},p(o,l){l&5&&r!==(r=A+"/"+o[2]+o[3](o[0]+1))&&a(t,"href",r)},d(o){o&&g(e)}}}function D(f){let e,t,i,u,_,s,d,r,o,l=f[0]!=1&&M(f),n=f[0]!=f[1]&&T(f);return{c(){e=p("nav"),l&&l.c(),t=P(),i=p("ul"),u=p("li"),_=b("Question "),s=b(f[0]),d=b(" / "),r=b(f[1]),o=P(),n&&n.c(),this.h()},l(h){e=k(h,"NAV",{class:!0,"aria-label":!0});var c=m(e);l&&l.l(c),t=I(c),i=k(c,"UL",{class:!0});var x=m(i);u=k(x,"LI",{class:!0});var w=m(u);_=E(w,"Question "),s=E(w,f[0]),d=E(w," / "),r=E(w,f[1]),w.forEach(g),x.forEach(g),o=I(c),n&&n.l(c),c.forEach(g),this.h()},h(){a(u,"class","govuk-pagination__item"),a(i,"class","govuk-pagination__list"),a(e,"class","govuk-pagination"),a(e,"aria-label","Pagination")},m(h,c){N(h,e,c),l&&l.m(e,null),v(e,t),v(e,i),v(i,u),v(u,_),v(u,s),v(u,d),v(u,r),v(e,o),n&&n.m(e,null)},p(h,[c]){h[0]!=1?l?l.p(h,c):(l=M(h),l.c(),l.m(e,t)):l&&(l.d(1),l=null),c&1&&B(s,h[0]),c&2&&B(r,h[1]),h[0]!=h[1]?n?n.p(h,c):(n=T(h),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:H,o:H,d(h){h&&g(e),l&&l.d(),n&&n.d()}}}function Q(f,e,t){let{idx:i}=e,{total:u}=e,{urlPath:_}=e,{startIdx:s=1}=e;function d(r){return(r+s-1).toString().padStart(2,"0")}return f.$$set=r=>{"idx"in r&&t(0,i=r.idx),"total"in r&&t(1,u=r.total),"urlPath"in r&&t(2,_=r.urlPath),"startIdx"in r&&t(4,s=r.startIdx)},[i,u,_,d,s]}class U extends V{constructor(e){super(),z(this,e,Q,D,C,{idx:0,total:1,urlPath:2,startIdx:4})}}export{U as P};
