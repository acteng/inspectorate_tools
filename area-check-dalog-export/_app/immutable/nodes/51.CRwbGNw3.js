import{s as ae,e as h,t as G,a as k,c as o,b as se,d as K,f as u,g as p,p as f,q as _,i as v,h as c,k as ie}from"../chunks/scheduler.mGr_ZlpV.js";import{S as ne,i as re,c as ce,b as he,m as oe,t as ue,a as fe,d as _e}from"../chunks/index.rGMSHTnh.js";/* empty css                                                    */import{E as me}from"../chunks/ExternalLink.D1vkit7Q.js";import{b as d}from"../chunks/paths.C_hSYRqP.js";import{s as ve}from"../chunks/data.CGxndGEV.js";function ke(L){let t;return{c(){t=G(`scheme review tool
  `)},l(i){t=K(i,`scheme review tool
  `)},m(i,s){v(i,t,s)},d(i){i&&u(t)}}}function pe(L){let t,i="<i>Street Check (disabled, because of the Route Check Type set in Summary)</i>",s,l,m=`<i>Street Placemaking Check (disabled, because of the Route Check Type set
        in Summary)</i>`;return{c(){t=h("li"),t.innerHTML=i,s=k(),l=h("li"),l.innerHTML=m,this.h()},l(e){t=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(t)!=="svelte-1ffbf6f"&&(t.innerHTML=i),s=p(e),l=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(l)!=="svelte-a335jf"&&(l.innerHTML=m),this.h()},h(){_(t,"class","svelte-13q6fbq"),_(l,"class","svelte-13q6fbq")},m(e,n){v(e,t,n),v(e,s,n),v(e,l,n)},d(e){e&&(u(t),u(s),u(l))}}}function Le(L){let t,i=`<a href="${d}/route_check/street_check">Street Check</a>`,s,l,m=`<a href="${d}/route_check/street_placemaking_check">Street Placemaking Check</a>`;return{c(){t=h("li"),t.innerHTML=i,s=k(),l=h("li"),l.innerHTML=m,this.h()},l(e){t=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(t)!=="svelte-qr5auz"&&(t.innerHTML=i),s=p(e),l=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(l)!=="svelte-7dzxwi"&&(l.innerHTML=m),this.h()},h(){_(t,"class","svelte-13q6fbq"),_(l,"class","svelte-13q6fbq")},m(e,n){v(e,t,n),v(e,s,n),v(e,l,n)},d(e){e&&(u(t),u(s),u(l))}}}function be(L){let t,i="<i>Path Check (disabled, because of the Route Check Type set in Summary)</i>",s,l,m=`<i>Path Placemaking Check (disabled, because of the Route Check Type set in
        Summary)</i>`;return{c(){t=h("li"),t.innerHTML=i,s=k(),l=h("li"),l.innerHTML=m,this.h()},l(e){t=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(t)!=="svelte-f9o5pb"&&(t.innerHTML=i),s=p(e),l=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(l)!=="svelte-g29raz"&&(l.innerHTML=m),this.h()},h(){_(t,"class","svelte-13q6fbq"),_(l,"class","svelte-13q6fbq")},m(e,n){v(e,t,n),v(e,s,n),v(e,l,n)},d(e){e&&(u(t),u(s),u(l))}}}function de(L){let t,i=`<a href="${d}/route_check/path_check">Path Check</a>`,s,l,m=`<a href="${d}/route_check/path_placemaking_check">Path Placemaking Check</a>`;return{c(){t=h("li"),t.innerHTML=i,s=k(),l=h("li"),l.innerHTML=m,this.h()},l(e){t=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(t)!=="svelte-1yrsyln"&&(t.innerHTML=i),s=p(e),l=o(e,"LI",{class:!0,"data-svelte-h":!0}),f(l)!=="svelte-89yh4a"&&(l.innerHTML=m),this.h()},h(){_(t,"class","svelte-13q6fbq"),_(l,"class","svelte-13q6fbq")},m(e,n){v(e,t,n),v(e,s,n),v(e,l,n)},d(e){e&&(u(t),u(s),u(l))}}}function Te(L){let t,i,s,l,m,e,n,N=`<a href="${d}/route_check/summary">Summary of Scheme</a>`,z,M,Q=`<a href="${d}/route_check/policy_check">Policy Check</a>`,A,H,U=`<a href="${d}/route_check/safety_check">Safety Check</a>`,j,y,V=`<a href="${d}/route_check/problems_map">Problems Mapping Page</a>`,D,S,P,C,W=`<a href="${d}/route_check/jat_check">JAT Check</a>`,F,$,X=`<a href="${d}/route_check/results_summary">Results Summary</a>`,J,x,Y=`<a href="${d}/route_check/results_analysis">Results Further Analysis</a>`,O,I,Z=`<a href="${d}/route_check/results_export">Results Export</a>`,B,g,ee=`<a href="${d}/route_check/dalog">Design Assistance Log</a>`,w;s=new me({props:{href:"https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools",$$slots:{default:[ke]},$$scope:{ctx:L}}});function te(r,b){return r[0].summary.checkType=="street"?Le:pe}let R=te(L),T=R(L);function le(r,b){return r[0].summary.checkType=="path"?de:be}let E=le(L),q=E(L);return{c(){t=h("p"),i=G("This is an experimental version of a "),ce(s.$$.fragment),l=G("."),m=k(),e=h("ol"),n=h("li"),n.innerHTML=N,z=k(),M=h("li"),M.innerHTML=Q,A=k(),H=h("li"),H.innerHTML=U,j=k(),y=h("li"),y.innerHTML=V,D=k(),T.c(),S=k(),q.c(),P=k(),C=h("li"),C.innerHTML=W,F=k(),$=h("li"),$.innerHTML=X,J=k(),x=h("li"),x.innerHTML=Y,O=k(),I=h("li"),I.innerHTML=Z,B=k(),g=h("li"),g.innerHTML=ee,this.h()},l(r){t=o(r,"P",{});var b=se(t);i=K(b,"This is an experimental version of a "),he(s.$$.fragment,b),l=K(b,"."),b.forEach(u),m=p(r),e=o(r,"OL",{});var a=se(e);n=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(n)!=="svelte-ukoito"&&(n.innerHTML=N),z=p(a),M=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(M)!=="svelte-1569dhf"&&(M.innerHTML=Q),A=p(a),H=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-cxa0x3"&&(H.innerHTML=U),j=p(a),y=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(y)!=="svelte-1ta0chs"&&(y.innerHTML=V),D=p(a),T.l(a),S=p(a),q.l(a),P=p(a),C=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(C)!=="svelte-1tlgs2z"&&(C.innerHTML=W),F=p(a),$=o(a,"LI",{class:!0,"data-svelte-h":!0}),f($)!=="svelte-1c185mb"&&($.innerHTML=X),J=p(a),x=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(x)!=="svelte-l5s7w9"&&(x.innerHTML=Y),O=p(a),I=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(I)!=="svelte-13e3k6x"&&(I.innerHTML=Z),B=p(a),g=o(a,"LI",{class:!0,"data-svelte-h":!0}),f(g)!=="svelte-155il71"&&(g.innerHTML=ee),a.forEach(u),this.h()},h(){_(n,"class","svelte-13q6fbq"),_(M,"class","svelte-13q6fbq"),_(H,"class","svelte-13q6fbq"),_(y,"class","svelte-13q6fbq"),_(C,"class","svelte-13q6fbq"),_($,"class","svelte-13q6fbq"),_(x,"class","svelte-13q6fbq"),_(I,"class","svelte-13q6fbq"),_(g,"class","svelte-13q6fbq")},m(r,b){v(r,t,b),c(t,i),oe(s,t,null),c(t,l),v(r,m,b),v(r,e,b),c(e,n),c(e,z),c(e,M),c(e,A),c(e,H),c(e,j),c(e,y),c(e,D),T.m(e,null),c(e,S),q.m(e,null),c(e,P),c(e,C),c(e,F),c(e,$),c(e,J),c(e,x),c(e,O),c(e,I),c(e,B),c(e,g),w=!0},p(r,[b]){const a={};b&2&&(a.$$scope={dirty:b,ctx:r}),s.$set(a),R!==(R=te(r))&&(T.d(1),T=R(r),T&&(T.c(),T.m(e,S))),E!==(E=le(r))&&(q.d(1),q=E(r),q&&(q.c(),q.m(e,P)))},i(r){w||(ue(s.$$.fragment,r),w=!0)},o(r){fe(s.$$.fragment,r),w=!1},d(r){r&&(u(t),u(m),u(e)),_e(s),T.d(),q.d()}}}function qe(L,t,i){let s;return ie(L,ve,l=>i(0,s=l)),[s]}class Ie extends ne{constructor(t){super(),re(this,t,qe,Te,ae,{})}}export{Ie as component};
