import{s as oe,D as q,i as m,n as Y,f,k as ie,e as b,c as p,b as y,q as E,F as se,a as I,p as O,g as w,h as k,t as D,d as B,j as H,H as Z,I as $,v as N}from"./scheduler.mGr_ZlpV.js";import{e as j}from"./each.K9grjjo2.js";import{S as ae,i as fe}from"./index.rGMSHTnh.js";import{s as ce}from"./data.BqEKDRYs.js";import{b as F}from"./paths.BW612yva.js";import{s as ue}from"./index.CVg1xc7p.js";import{s as A}from"./colors.DaC397qr.js";function ee(o,e,r){const t=o.slice();return t[11]=e[r],t}function te(o,e,r){const t=o.slice();return t[11]=e[r],t}function _e(o){let e,r=j(Q(o[0])),t=[];for(let n=0;n<r.length;n+=1)t[n]=le(ee(o,r,n));return{c(){e=b("ol");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=p(n,"OL",{start:!0});var s=y(e);for(let l=0;l<t.length;l+=1)t[l].l(s);s.forEach(f),this.h()},h(){E(e,"start",o[1])},m(n,s){m(n,e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(n,s){if(s&111){r=j(Q(n[0]));let l;for(l=0;l<r.length;l+=1){const i=ee(n,r,l);t[l]?t[l].p(i,s):(t[l]=le(i),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}s&2&&E(e,"start",n[1])},d(n){n&&f(e),se(t,n)}}}function de(o){let e,r,t="<th>Metric</th> <th>Completed</th> <th>Existing</th> <th>Proposed</th>",n,s=j(Q(o[0])),l=[];for(let i=0;i<s.length;i+=1)l[i]=ne(te(o,s,i));return{c(){e=b("table"),r=b("tr"),r.innerHTML=t,n=I();for(let i=0;i<l.length;i+=1)l[i].c()},l(i){e=p(i,"TABLE",{});var u=y(e);r=p(u,"TR",{"data-svelte-h":!0}),O(r)!=="svelte-bdf5yo"&&(r.innerHTML=t),n=w(u);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(f)},m(i,u){m(i,e,u),k(e,r),k(e,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null)},p(i,u){if(u&123){s=j(Q(i[0]));let c;for(c=0;c<s.length;c+=1){const h=te(i,s,c);l[c]?l[c].p(h,u):(l[c]=ne(h),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}},d(i){i&&f(e),se(l,i)}}}function he(o){let e,r,t,n;function s(_,v){return _[2]-_[1]!=_[11].idx?pe:be}let l=s(o),i=l(o);function u(_,v){return _[5][_[11].idx]?ke:ge}let c=u(o),h=c(o);return{c(){e=b("li"),r=b("div"),i.c(),t=I(),h.c(),n=I(),this.h()},l(_){e=p(_,"LI",{class:!0});var v=y(e);r=p(v,"DIV",{class:!0});var S=y(r);i.l(S),t=w(S),h.l(S),S.forEach(f),n=w(v),v.forEach(f),this.h()},h(){E(r,"class","progress-list-item svelte-12xim47"),E(e,"class","svelte-12xim47")},m(_,v){m(_,e,v),k(e,r),i.m(r,null),k(r,t),h.m(r,null),k(e,n)},p(_,v){l===(l=s(_))&&i?i.p(_,v):(i.d(1),i=l(_),i&&(i.c(),i.m(r,t))),c!==(c=u(_))&&(h.d(1),h=c(_),h&&(h.c(),h.m(r,null)))},d(_){_&&f(e),i.d(),h.d()}}}function me(o){let e,r=o[11].label+"",t,n;return{c(){e=b("h3"),t=D(r),n=I(),this.h()},l(s){e=p(s,"H3",{class:!0});var l=y(e);t=B(l,r),n=w(l),l.forEach(f),this.h()},h(){E(e,"class","svelte-12xim47")},m(s,l){m(s,e,l),k(e,t),k(e,n)},p(s,l){l&1&&r!==(r=s[11].label+"")&&H(t,r)},d(s){s&&f(e)}}}function be(o){let e=o[11].label+"",r;return{c(){r=D(e)},l(t){r=B(t,e)},m(t,n){m(t,r,n)},p(t,n){n&1&&e!==(e=t[11].label+"")&&H(r,e)},d(t){t&&f(r)}}}function pe(o){let e,r=o[11].label+"",t,n;return{c(){e=b("a"),t=D(r),this.h()},l(s){e=p(s,"A",{href:!0});var l=y(e);t=B(l,r),l.forEach(f),this.h()},h(){E(e,"href",n=""+(F+o[3]+o[6](o[11].idx)))},m(s,l){m(s,e,l),k(e,t)},p(s,l){l&1&&r!==(r=s[11].label+"")&&H(t,r),l&9&&n!==(n=""+(F+s[3]+s[6](s[11].idx)))&&E(e,"href",n)},d(s){s&&f(e)}}}function ge(o){let e,r="☒";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red tag-row svelte-12xim47")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ke(o){let e,r="☑";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green tag-row svelte-12xim47")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function le(o){let e;function r(s,l){return s[11].kind=="section"?me:he}let t=r(o),n=t(o);return{c(){n.c(),e=q()},l(s){n.l(s),e=q()},m(s,l){n.m(s,l),m(s,e,l)},p(s,l){t===(t=r(s))&&n?n.p(s,l):(n.d(1),n=t(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){s&&f(e),n.d(s)}}}function ve(o){let e,r,t=o[1]+o[11].idx+"",n,s,l=o[11].label+"",i,u,c,h,_,v,S,d,G=(o[4].existingScores[o[11].idx]||"&nbsp;")+"",P,R,C,L,K=(o[4].proposedScores[o[11].idx]||"&nbsp;")+"";function V(a,g){return a[5][a[11].idx]?Ee:ye}let x=V(o),T=x(o);return{c(){e=b("td"),r=b("a"),n=D(t),s=D(". "),i=D(l),c=I(),h=b("td"),T.c(),_=I(),v=b("td"),S=b("span"),d=new Z(!1),P=I(),R=b("td"),C=b("span"),L=new Z(!1),this.h()},l(a){e=p(a,"TD",{});var g=y(e);r=p(g,"A",{href:!0});var M=y(r);n=B(M,t),s=B(M,". "),i=B(M,l),M.forEach(f),g.forEach(f),c=w(a),h=p(a,"TD",{});var z=y(h);T.l(z),z.forEach(f),_=w(a),v=p(a,"TD",{});var J=y(v);S=p(J,"SPAN",{class:!0});var U=y(S);d=$(U,!1),U.forEach(f),J.forEach(f),P=w(a),R=p(a,"TD",{});var W=y(R);C=p(W,"SPAN",{class:!0});var X=y(C);L=$(X,!1),X.forEach(f),W.forEach(f),this.h()},h(){E(r,"href",u=""+(F+o[3]+o[6](o[11].idx))),d.a=null,E(S,"class","box svelte-12xim47"),N(S,"background",A[o[4].existingScores[o[11].idx]].background),N(S,"color",A[o[4].existingScores[o[11].idx]].font),L.a=null,E(C,"class","box svelte-12xim47"),N(C,"background",A[o[4].proposedScores[o[11].idx]].background),N(C,"color",A[o[4].proposedScores[o[11].idx]].font)},m(a,g){m(a,e,g),k(e,r),k(r,n),k(r,s),k(r,i),m(a,c,g),m(a,h,g),T.m(h,null),m(a,_,g),m(a,v,g),k(v,S),d.m(G,S),m(a,P,g),m(a,R,g),k(R,C),L.m(K,C)},p(a,g){g&3&&t!==(t=a[1]+a[11].idx+"")&&H(n,t),g&1&&l!==(l=a[11].label+"")&&H(i,l),g&9&&u!==(u=""+(F+a[3]+a[6](a[11].idx)))&&E(r,"href",u),x!==(x=V(a))&&(T.d(1),T=x(a),T&&(T.c(),T.m(h,null))),g&17&&G!==(G=(a[4].existingScores[a[11].idx]||"&nbsp;")+"")&&d.p(G),g&17&&N(S,"background",A[a[4].existingScores[a[11].idx]].background),g&17&&N(S,"color",A[a[4].existingScores[a[11].idx]].font),g&17&&K!==(K=(a[4].proposedScores[a[11].idx]||"&nbsp;")+"")&&L.p(K),g&17&&N(C,"background",A[a[4].proposedScores[a[11].idx]].background),g&17&&N(C,"color",A[a[4].proposedScores[a[11].idx]].font)},d(a){a&&(f(e),f(c),f(h),f(_),f(v),f(P),f(R)),T.d()}}}function Se(o){let e,r,t=o[11].label+"",n,s,l=o[11].notes&&re(o);return{c(){e=b("td"),r=b("b"),n=D(t),s=I(),l&&l.c(),this.h()},l(i){e=p(i,"TD",{colspan:!0});var u=y(e);r=p(u,"B",{});var c=y(r);n=B(c,t),c.forEach(f),s=w(u),l&&l.l(u),u.forEach(f),this.h()},h(){E(e,"colspan","4")},m(i,u){m(i,e,u),k(e,r),k(r,n),k(e,s),l&&l.m(e,null)},p(i,u){u&1&&t!==(t=i[11].label+"")&&H(n,t),i[11].notes?l?l.p(i,u):(l=re(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&f(e),l&&l.d()}}}function ye(o){let e,r="☒";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red tag-row svelte-12xim47")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ee(o){let e,r="☑";return{c(){e=b("strong"),e.textContent=r,this.h()},l(t){e=p(t,"STRONG",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green tag-row svelte-12xim47")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function re(o){let e,r=o[11].notes+"",t;return{c(){e=b("p"),t=D(r)},l(n){e=p(n,"P",{});var s=y(e);t=B(s,r),s.forEach(f)},m(n,s){m(n,e,s),k(e,t)},p(n,s){s&1&&r!==(r=n[11].notes+"")&&H(t,r)},d(n){n&&f(e)}}}function ne(o){let e,r;function t(l,i){return l[11].kind=="section"?Se:ve}let n=t(o),s=n(o);return{c(){e=b("tr"),s.c(),r=I()},l(l){e=p(l,"TR",{});var i=y(e);s.l(i),r=w(i),i.forEach(f)},m(l,i){m(l,e,i),s.m(e,null),k(e,r)},p(l,i){n===(n=t(l))&&s?s.p(l,i):(s.d(1),s=n(l),s&&(s.c(),s.m(e,r)))},d(l){l&&f(e),s.d()}}}function Ce(o){let e;function r(s,l){return s[2]==-1?de:_e}let t=r(o),n=t(o);return{c(){n.c(),e=q()},l(s){n.l(s),e=q()},m(s,l){n.m(s,l),m(s,e,l)},p(s,[l]){t===(t=r(s))&&n?n.p(s,l):(n.d(1),n=t(s),n&&(n.c(),n.m(e.parentNode,e)))},i:Y,o:Y,d(s){s&&f(e),n.d(s)}}}function Q(o){let e=[],r=0;for(let t of o){e.push({kind:"section",label:t.section,notes:t.notes});for(let n of t.pages)e.push({kind:"page",idx:r,label:n}),r++}return e}function Te(o,e,r){let t,n,s;ie(o,ce,d=>r(8,s=d));let{sections:l}=e,{startIdx:i}=e,{currentIdx:u}=e,{scorecardKey:c}=e,{urlBase:h}=e,_=ue(l.map(d=>d.pages.length));function v(d){return(d+i).toString().padStart(2,"0")}function S(d){return Array.from(Array(_).keys()).map(G=>d.existingScores[G]!=""&&d.proposedScores[G]!="")}return o.$$set=d=>{"sections"in d&&r(0,l=d.sections),"startIdx"in d&&r(1,i=d.startIdx),"currentIdx"in d&&r(2,u=d.currentIdx),"scorecardKey"in d&&r(7,c=d.scorecardKey),"urlBase"in d&&r(3,h=d.urlBase)},o.$$.update=()=>{o.$$.dirty&384&&r(4,t=s[c]),o.$$.dirty&16&&r(5,n=S(t))},[l,i,u,h,t,n,v,c,s]}class He extends ae{constructor(e){super(),fe(this,e,Te,Ce,oe,{sections:0,startIdx:1,currentIdx:2,scorecardKey:7,urlBase:3})}}export{He as G};
