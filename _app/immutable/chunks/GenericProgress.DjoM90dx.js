import{s as se,J as q,i as m,n as Z,f,k as ie,e as b,c as p,b as y,q as E,B as oe,a as T,p as K,g as I,h as k,t as A,d as B,j as G,I as x,K as $,v as z}from"./scheduler.Bxdx0f0B.js";import{e as j}from"./each.BdQ2bsat.js";import{S as ae,i as fe}from"./index.itOPPQ0R.js";import{s as ce}from"./data.BkS9zb_U.js";import{b as J}from"./paths.CAvvsiHE.js";import{s as ue}from"./index.Dt0PFTux.js";import{s as N}from"./colors.DaC397qr.js";function ee(s,e,r){const t=s.slice();return t[11]=e[r],t}function te(s,e,r){const t=s.slice();return t[11]=e[r],t}function _e(s){let e,r=j(Q(s[0])),t=[];for(let n=0;n<r.length;n+=1)t[n]=le(ee(s,r,n));return{c(){e=b("ol");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=p(n,"OL",{start:!0});var o=y(e);for(let l=0;l<t.length;l+=1)t[l].l(o);o.forEach(f),this.h()},h(){E(e,"start",s[1])},m(n,o){m(n,e,o);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(n,o){if(o&111){r=j(Q(n[0]));let l;for(l=0;l<r.length;l+=1){const i=ee(n,r,l);t[l]?t[l].p(i,o):(t[l]=le(i),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}o&2&&E(e,"start",n[1])},d(n){n&&f(e),oe(t,n)}}}function de(s){let e,r,t="<th>Metric</th> <th>Completed</th> <th>Existing</th> <th>Proposed</th>",n,o=j(Q(s[0])),l=[];for(let i=0;i<o.length;i+=1)l[i]=ne(te(s,o,i));return{c(){e=b("table"),r=b("tr"),r.innerHTML=t,n=T();for(let i=0;i<l.length;i+=1)l[i].c()},l(i){e=p(i,"TABLE",{});var u=y(e);r=p(u,"TR",{"data-svelte-h":!0}),K(r)!=="svelte-bdf5yo"&&(r.innerHTML=t),n=I(u);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(f)},m(i,u){m(i,e,u),k(e,r),k(e,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null)},p(i,u){if(u&123){o=j(Q(i[0]));let c;for(c=0;c<o.length;c+=1){const h=te(i,o,c);l[c]?l[c].p(h,u):(l[c]=ne(h),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=o.length}},d(i){i&&f(e),oe(l,i)}}}function he(s){let e,r,t,n;function o(_,v){return _[2]-_[1]!=_[11].idx?pe:be}let l=o(s),i=l(s);function u(_,v){return _[5][_[11].idx]?ke:ge}let c=u(s),h=c(s);return{c(){e=b("li"),r=b("div"),i.c(),t=T(),h.c(),n=T(),this.h()},l(_){e=p(_,"LI",{});var v=y(e);r=p(v,"DIV",{class:!0});var S=y(r);i.l(S),t=I(S),h.l(S),S.forEach(f),n=I(v),v.forEach(f),this.h()},h(){E(r,"class","progress-list-item svelte-10zlulw")},m(_,v){m(_,e,v),k(e,r),i.m(r,null),k(r,t),h.m(r,null),k(e,n)},p(_,v){l===(l=o(_))&&i?i.p(_,v):(i.d(1),i=l(_),i&&(i.c(),i.m(r,t))),c!==(c=u(_))&&(h.d(1),h=c(_),h&&(h.c(),h.m(r,null)))},d(_){_&&f(e),i.d(),h.d()}}}function me(s){let e,r=s[11].label+"",t,n;return{c(){e=b("h3"),t=A(r),n=T(),this.h()},l(o){e=p(o,"H3",{class:!0});var l=y(e);t=B(l,r),n=I(l),l.forEach(f),this.h()},h(){E(e,"class","svelte-10zlulw")},m(o,l){m(o,e,l),k(e,t),k(e,n)},p(o,l){l&1&&r!==(r=o[11].label+"")&&G(t,r)},d(o){o&&f(e)}}}function be(s){let e=s[11].label+"",r;return{c(){r=A(e)},l(t){r=B(t,e)},m(t,n){m(t,r,n)},p(t,n){n&1&&e!==(e=t[11].label+"")&&G(r,e)},d(t){t&&f(r)}}}function pe(s){let e,r=s[11].label+"",t,n;return{c(){e=b("a"),t=A(r),this.h()},l(o){e=p(o,"A",{href:!0});var l=y(e);t=B(l,r),l.forEach(f),this.h()},h(){E(e,"href",n=""+(J+s[3]+s[6](s[11].idx)))},m(o,l){m(o,e,l),k(e,t)},p(o,l){l&1&&r!==(r=o[11].label+"")&&G(t,r),l&9&&n!==(n=""+(J+o[3]+o[6](o[11].idx)))&&E(e,"href",n)},d(o){o&&f(e)}}}function ge(s){let e,r="☒";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red tag-row svelte-10zlulw")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ke(s){let e,r="☑";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green tag-row svelte-10zlulw")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function le(s){let e;function r(o,l){return o[11].kind=="section"?me:he}let t=r(s),n=t(s);return{c(){n.c(),e=q()},l(o){n.l(o),e=q()},m(o,l){n.m(o,l),m(o,e,l)},p(o,l){t===(t=r(o))&&n?n.p(o,l):(n.d(1),n=t(o),n&&(n.c(),n.m(e.parentNode,e)))},d(o){o&&f(e),n.d(o)}}}function ve(s){let e,r,t=s[1]+s[11].idx+"",n,o,l=s[11].label+"",i,u,c,h,_,v,S,d,D=(s[4].existingScores[s[11].idx]||"&nbsp;")+"",L,R,w,H,O=(s[4].proposedScores[s[11].idx]||"&nbsp;")+"";function V(a,g){return a[5][a[11].idx]?Ee:ye}let P=V(s),C=P(s);return{c(){e=b("td"),r=b("a"),n=A(t),o=A(". "),i=A(l),c=T(),h=b("td"),C.c(),_=T(),v=b("td"),S=b("span"),d=new x(!1),L=T(),R=b("td"),w=b("span"),H=new x(!1),this.h()},l(a){e=p(a,"TD",{});var g=y(e);r=p(g,"A",{href:!0});var M=y(r);n=B(M,t),o=B(M,". "),i=B(M,l),M.forEach(f),g.forEach(f),c=I(a),h=p(a,"TD",{});var F=y(h);C.l(F),F.forEach(f),_=I(a),v=p(a,"TD",{});var U=y(v);S=p(U,"SPAN",{class:!0});var W=y(S);d=$(W,!1),W.forEach(f),U.forEach(f),L=I(a),R=p(a,"TD",{});var X=y(R);w=p(X,"SPAN",{class:!0});var Y=y(w);H=$(Y,!1),Y.forEach(f),X.forEach(f),this.h()},h(){E(r,"href",u=""+(J+s[3]+s[6](s[11].idx))),d.a=null,E(S,"class","box svelte-10zlulw"),z(S,"background",N[s[4].existingScores[s[11].idx]].background),z(S,"color",N[s[4].existingScores[s[11].idx]].font),H.a=null,E(w,"class","box svelte-10zlulw"),z(w,"background",N[s[4].proposedScores[s[11].idx]].background),z(w,"color",N[s[4].proposedScores[s[11].idx]].font)},m(a,g){m(a,e,g),k(e,r),k(r,n),k(r,o),k(r,i),m(a,c,g),m(a,h,g),C.m(h,null),m(a,_,g),m(a,v,g),k(v,S),d.m(D,S),m(a,L,g),m(a,R,g),k(R,w),H.m(O,w)},p(a,g){g&3&&t!==(t=a[1]+a[11].idx+"")&&G(n,t),g&1&&l!==(l=a[11].label+"")&&G(i,l),g&9&&u!==(u=""+(J+a[3]+a[6](a[11].idx)))&&E(r,"href",u),P!==(P=V(a))&&(C.d(1),C=P(a),C&&(C.c(),C.m(h,null))),g&17&&D!==(D=(a[4].existingScores[a[11].idx]||"&nbsp;")+"")&&d.p(D),g&17&&z(S,"background",N[a[4].existingScores[a[11].idx]].background),g&17&&z(S,"color",N[a[4].existingScores[a[11].idx]].font),g&17&&O!==(O=(a[4].proposedScores[a[11].idx]||"&nbsp;")+"")&&H.p(O),g&17&&z(w,"background",N[a[4].proposedScores[a[11].idx]].background),g&17&&z(w,"color",N[a[4].proposedScores[a[11].idx]].font)},d(a){a&&(f(e),f(c),f(h),f(_),f(v),f(L),f(R)),C.d()}}}function Se(s){let e,r,t=s[11].label+"",n,o,l=s[11].notes&&re(s);return{c(){e=b("td"),r=b("b"),n=A(t),o=T(),l&&l.c(),this.h()},l(i){e=p(i,"TD",{colspan:!0});var u=y(e);r=p(u,"B",{});var c=y(r);n=B(c,t),c.forEach(f),o=I(u),l&&l.l(u),u.forEach(f),this.h()},h(){E(e,"colspan","4")},m(i,u){m(i,e,u),k(e,r),k(r,n),k(e,o),l&&l.m(e,null)},p(i,u){u&1&&t!==(t=i[11].label+"")&&G(n,t),i[11].notes?l?l.p(i,u):(l=re(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&f(e),l&&l.d()}}}function ye(s){let e,r="☒";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red tag-row svelte-10zlulw")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ee(s){let e,r="☑";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green tag-row svelte-10zlulw")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function re(s){let e,r=s[11].notes+"",t;return{c(){e=b("p"),t=A(r)},l(n){e=p(n,"P",{});var o=y(e);t=B(o,r),o.forEach(f)},m(n,o){m(n,e,o),k(e,t)},p(n,o){o&1&&r!==(r=n[11].notes+"")&&G(t,r)},d(n){n&&f(e)}}}function ne(s){let e,r;function t(l,i){return l[11].kind=="section"?Se:ve}let n=t(s),o=n(s);return{c(){e=b("tr"),o.c(),r=T()},l(l){e=p(l,"TR",{});var i=y(e);o.l(i),r=I(i),i.forEach(f)},m(l,i){m(l,e,i),o.m(e,null),k(e,r)},p(l,i){n===(n=t(l))&&o?o.p(l,i):(o.d(1),o=n(l),o&&(o.c(),o.m(e,r)))},d(l){l&&f(e),o.d()}}}function we(s){let e;function r(o,l){return o[2]==-1?de:_e}let t=r(s),n=t(s);return{c(){n.c(),e=q()},l(o){n.l(o),e=q()},m(o,l){n.m(o,l),m(o,e,l)},p(o,[l]){t===(t=r(o))&&n?n.p(o,l):(n.d(1),n=t(o),n&&(n.c(),n.m(e.parentNode,e)))},i:Z,o:Z,d(o){o&&f(e),n.d(o)}}}function Q(s){let e=[],r=0;for(let t of s){e.push({kind:"section",label:t.section,notes:t.notes});for(let n of t.pages)e.push({kind:"page",idx:r,label:n}),r++}return e}function Ce(s,e,r){let t,n,o;ie(s,ce,d=>r(8,o=d));let{sections:l}=e,{startIdx:i}=e,{currentIdx:u}=e,{scorecardKey:c}=e,{urlBase:h}=e,_=ue(l.map(d=>d.pages.length));function v(d){return(d+i).toString().padStart(2,"0")}function S(d){return Array.from(Array(_).keys()).map(D=>d.existingScores[D]!=""&&d.proposedScores[D]!="")}return s.$$set=d=>{"sections"in d&&r(0,l=d.sections),"startIdx"in d&&r(1,i=d.startIdx),"currentIdx"in d&&r(2,u=d.currentIdx),"scorecardKey"in d&&r(7,c=d.scorecardKey),"urlBase"in d&&r(3,h=d.urlBase)},s.$$.update=()=>{s.$$.dirty&384&&r(4,t=o[c]),s.$$.dirty&16&&r(5,n=S(t))},[l,i,u,h,t,n,v,c,o]}class Ge extends ae{constructor(e){super(),fe(this,e,Ce,we,se,{sections:0,startIdx:1,currentIdx:2,scorecardKey:7,urlBase:3})}}export{Ge as G};
