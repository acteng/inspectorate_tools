import{s as ie,n as Z,d as u,i as h,D as j,k as ae,K as oe,b as v,c as m,e as y,q as K,g as A,h as b,j as B,p as w,a as D,f as E,t as C,w as N,M as x,N as $,E as ee}from"./hklQk-fT.js";import{e as Q}from"./BrDnhTDH.js";import{S as fe,i as ce}from"./4RGf_tlt.js";import{b as z}from"./DhBaF9mu.js";import{s as ue}from"./Dvzm5Msn.js";import{s as G}from"./DaC397qr.js";import{s as _e}from"./Dl4p0PjW.js";function te(o,e,r){const l=o.slice();return l[11]=e[r],l}function le(o,e,r){const l=o.slice();return l[11]=e[r],l}function de(o){let e,r=Q(F(o[0])),l=[];for(let s=0;s<r.length;s+=1)l[s]=re(te(o,r,s));return{c(){e=b("ol");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=m(s,"OL",{start:!0});var n=y(e);for(let t=0;t<l.length;t+=1)l[t].l(n);n.forEach(u),this.h()},h(){w(e,"start",o[1])},m(s,n){h(s,e,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null)},p(s,n){if(n&111){r=Q(F(s[0]));let t;for(t=0;t<r.length;t+=1){const i=te(s,r,t);l[t]?l[t].p(i,n):(l[t]=re(i),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=r.length}n&2&&w(e,"start",s[1])},d(s){s&&u(e),oe(l,s)}}}function he(o){let e,r,l="<th>Metric</th> <th>Completed</th> <th>Existing</th> <th>Proposed</th>",s,n=Q(F(o[0])),t=[];for(let i=0;i<n.length;i+=1)t[i]=ne(le(o,n,i));return{c(){e=b("table"),r=b("tr"),r.innerHTML=l,s=B();for(let i=0;i<t.length;i+=1)t[i].c()},l(i){e=m(i,"TABLE",{});var f=y(e);r=m(f,"TR",{"data-svelte-h":!0}),K(r)!=="svelte-bdf5yo"&&(r.innerHTML=l),s=A(f);for(let a=0;a<t.length;a+=1)t[a].l(f);f.forEach(u)},m(i,f){h(i,e,f),v(e,r),v(e,s);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(i,f){if(f&123){n=Q(F(i[0]));let a;for(a=0;a<n.length;a+=1){const p=le(i,n,a);t[a]?t[a].p(p,f):(t[a]=ne(p),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(i){i&&u(e),oe(t,i)}}}function pe(o){let e,r,l,s;function n(_,k){return _[2]-1!=_[11].idx?ge:be}let t=n(o),i=t(o);function f(_,k){return _[5][_[11].idx]?ke:ve}let a=f(o),p=a(o);return{c(){e=b("li"),r=b("span"),i.c(),l=B(),p.c(),s=B(),this.h()},l(_){e=m(_,"LI",{style:!0,class:!0});var k=y(e);r=m(k,"SPAN",{class:!0});var S=y(r);i.l(S),l=A(S),p.l(S),S.forEach(u),s=A(k),k.forEach(u),this.h()},h(){w(r,"class","progress-list-item svelte-1vpw576"),N(e,"list-style-type","none"),w(e,"class","svelte-1vpw576"),ee(e,"current-li",o[2]-1==o[11].idx)},m(_,k){h(_,e,k),v(e,r),i.m(r,null),v(r,l),p.m(r,null),v(e,s)},p(_,k){t===(t=n(_))&&i?i.p(_,k):(i.d(1),i=t(_),i&&(i.c(),i.m(r,l))),a!==(a=f(_))&&(p.d(1),p=a(_),p&&(p.c(),p.m(r,null))),k&5&&ee(e,"current-li",_[2]-1==_[11].idx)},d(_){_&&u(e),i.d(),p.d()}}}function me(o){let e,r=o[11].label+"",l,s;return{c(){e=b("h3"),l=C(r),s=B(),this.h()},l(n){e=m(n,"H3",{class:!0});var t=y(e);l=E(t,r),s=A(t),t.forEach(u),this.h()},h(){w(e,"class","svelte-1vpw576")},m(n,t){h(n,e,t),v(e,l),v(e,s)},p(n,t){t&1&&r!==(r=n[11].label+"")&&D(l,r)},d(n){n&&u(e)}}}function be(o){let e=o[1]+o[11].idx+"",r,l,s=o[11].label+"",n;return{c(){r=C(e),l=C(". "),n=C(s)},l(t){r=E(t,e),l=E(t,". "),n=E(t,s)},m(t,i){h(t,r,i),h(t,l,i),h(t,n,i)},p(t,i){i&3&&e!==(e=t[1]+t[11].idx+"")&&D(r,e),i&1&&s!==(s=t[11].label+"")&&D(n,s)},d(t){t&&(u(r),u(l),u(n))}}}function ge(o){let e,r=o[1]+o[11].idx+"",l,s,n=o[11].label+"",t,i;return{c(){e=b("a"),l=C(r),s=C(". "),t=C(n),this.h()},l(f){e=m(f,"A",{href:!0,class:!0});var a=y(e);l=E(a,r),s=E(a,". "),t=E(a,n),a.forEach(u),this.h()},h(){w(e,"href",i=""+(z+o[3]+o[6](o[11].idx))),w(e,"class","govuk-link--no-underline hack-no-visited-state svelte-1vpw576")},m(f,a){h(f,e,a),v(e,l),v(e,s),v(e,t)},p(f,a){a&3&&r!==(r=f[1]+f[11].idx+"")&&D(l,r),a&1&&n!==(n=f[11].label+"")&&D(t,n),a&9&&i!==(i=""+(z+f[3]+f[6](f[11].idx)))&&w(e,"href",i)},d(f){f&&u(e)}}}function ve(o){let e,r="☒";return{c(){e=b("strong"),e.textContent=r,this.h()},l(l){e=m(l,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){w(e,"class","govuk-tag govuk-tag--red tag-row svelte-1vpw576")},m(l,s){h(l,e,s)},d(l){l&&u(e)}}}function ke(o){let e,r="☑";return{c(){e=b("strong"),e.textContent=r,this.h()},l(l){e=m(l,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){w(e,"class","govuk-tag govuk-tag--green tag-row svelte-1vpw576")},m(l,s){h(l,e,s)},d(l){l&&u(e)}}}function re(o){let e;function r(n,t){return n[11].kind=="section"?me:pe}let l=r(o),s=l(o);return{c(){s.c(),e=j()},l(n){s.l(n),e=j()},m(n,t){s.m(n,t),h(n,e,t)},p(n,t){l===(l=r(n))&&s?s.p(n,t):(s.d(1),s=l(n),s&&(s.c(),s.m(e.parentNode,e)))},d(n){n&&u(e),s.d(n)}}}function Se(o){let e,r,l=o[1]+o[11].idx+"",s,n,t=o[11].label+"",i,f,a,p,_,k,S,d,P=(o[4].existingScores[o[11].idx]||"&nbsp;")+"",L,R,T,H,O=(o[4].proposedScores[o[11].idx]||"&nbsp;")+"";function J(c,g){return c[5][c[11].idx]?Ee:we}let M=J(o),I=M(o);return{c(){e=b("td"),r=b("a"),s=C(l),n=C(". "),i=C(t),a=B(),p=b("td"),I.c(),_=B(),k=b("td"),S=b("span"),d=new $(!1),L=B(),R=b("td"),T=b("span"),H=new $(!1),this.h()},l(c){e=m(c,"TD",{});var g=y(e);r=m(g,"A",{href:!0});var q=y(r);s=E(q,l),n=E(q,". "),i=E(q,t),q.forEach(u),g.forEach(u),a=A(c),p=m(c,"TD",{});var U=y(p);I.l(U),U.forEach(u),_=A(c),k=m(c,"TD",{});var V=y(k);S=m(V,"SPAN",{class:!0});var W=y(S);d=x(W,!1),W.forEach(u),V.forEach(u),L=A(c),R=m(c,"TD",{});var X=y(R);T=m(X,"SPAN",{class:!0});var Y=y(T);H=x(Y,!1),Y.forEach(u),X.forEach(u),this.h()},h(){w(r,"href",f=""+(z+o[3]+o[6](o[11].idx))),d.a=null,w(S,"class","box svelte-1vpw576"),N(S,"background",G[o[4].existingScores[o[11].idx]].background),N(S,"color",G[o[4].existingScores[o[11].idx]].font),H.a=null,w(T,"class","box svelte-1vpw576"),N(T,"background",G[o[4].proposedScores[o[11].idx]].background),N(T,"color",G[o[4].proposedScores[o[11].idx]].font)},m(c,g){h(c,e,g),v(e,r),v(r,s),v(r,n),v(r,i),h(c,a,g),h(c,p,g),I.m(p,null),h(c,_,g),h(c,k,g),v(k,S),d.m(P,S),h(c,L,g),h(c,R,g),v(R,T),H.m(O,T)},p(c,g){g&3&&l!==(l=c[1]+c[11].idx+"")&&D(s,l),g&1&&t!==(t=c[11].label+"")&&D(i,t),g&9&&f!==(f=""+(z+c[3]+c[6](c[11].idx)))&&w(r,"href",f),M!==(M=J(c))&&(I.d(1),I=M(c),I&&(I.c(),I.m(p,null))),g&17&&P!==(P=(c[4].existingScores[c[11].idx]||"&nbsp;")+"")&&d.p(P),g&17&&N(S,"background",G[c[4].existingScores[c[11].idx]].background),g&17&&N(S,"color",G[c[4].existingScores[c[11].idx]].font),g&17&&O!==(O=(c[4].proposedScores[c[11].idx]||"&nbsp;")+"")&&H.p(O),g&17&&N(T,"background",G[c[4].proposedScores[c[11].idx]].background),g&17&&N(T,"color",G[c[4].proposedScores[c[11].idx]].font)},d(c){c&&(u(e),u(a),u(p),u(_),u(k),u(L),u(R)),I.d()}}}function ye(o){let e,r,l=o[11].label+"",s,n,t=o[11].notes&&se(o);return{c(){e=b("td"),r=b("b"),s=C(l),n=B(),t&&t.c(),this.h()},l(i){e=m(i,"TD",{colspan:!0});var f=y(e);r=m(f,"B",{});var a=y(r);s=E(a,l),a.forEach(u),n=A(f),t&&t.l(f),f.forEach(u),this.h()},h(){w(e,"colspan","4")},m(i,f){h(i,e,f),v(e,r),v(r,s),v(e,n),t&&t.m(e,null)},p(i,f){f&1&&l!==(l=i[11].label+"")&&D(s,l),i[11].notes?t?t.p(i,f):(t=se(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&u(e),t&&t.d()}}}function we(o){let e,r="☒";return{c(){e=b("strong"),e.textContent=r,this.h()},l(l){e=m(l,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){w(e,"class","govuk-tag govuk-tag--red tag-row svelte-1vpw576")},m(l,s){h(l,e,s)},d(l){l&&u(e)}}}function Ee(o){let e,r="☑";return{c(){e=b("strong"),e.textContent=r,this.h()},l(l){e=m(l,"STRONG",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){w(e,"class","govuk-tag govuk-tag--green tag-row svelte-1vpw576")},m(l,s){h(l,e,s)},d(l){l&&u(e)}}}function se(o){let e,r=o[11].notes+"",l;return{c(){e=b("p"),l=C(r)},l(s){e=m(s,"P",{});var n=y(e);l=E(n,r),n.forEach(u)},m(s,n){h(s,e,n),v(e,l)},p(s,n){n&1&&r!==(r=s[11].notes+"")&&D(l,r)},d(s){s&&u(e)}}}function ne(o){let e,r;function l(t,i){return t[11].kind=="section"?ye:Se}let s=l(o),n=s(o);return{c(){e=b("tr"),n.c(),r=B()},l(t){e=m(t,"TR",{});var i=y(e);n.l(i),r=A(i),i.forEach(u)},m(t,i){h(t,e,i),n.m(e,null),v(e,r)},p(t,i){s===(s=l(t))&&n?n.p(t,i):(n.d(1),n=s(t),n&&(n.c(),n.m(e,r)))},d(t){t&&u(e),n.d()}}}function Ce(o){let e;function r(n,t){return n[2]==-1?he:de}let l=r(o),s=l(o);return{c(){s.c(),e=j()},l(n){s.l(n),e=j()},m(n,t){s.m(n,t),h(n,e,t)},p(n,[t]){l===(l=r(n))&&s?s.p(n,t):(s.d(1),s=l(n),s&&(s.c(),s.m(e.parentNode,e)))},i:Z,o:Z,d(n){n&&u(e),s.d(n)}}}function F(o){let e=[],r=0;for(let l of o){e.push({kind:"section",label:l.section,notes:l.notes});for(let s of l.pages)e.push({kind:"page",idx:r,label:s}),r++}return e}function Te(o,e,r){let l,s,n;ae(o,_e,d=>r(8,n=d));let{sections:t}=e,{startIdx:i}=e,{currentIdx:f}=e,{scorecardKey:a}=e,{urlBase:p}=e,_=ue(t.map(d=>d.pages.length));function k(d){return(d+i).toString().padStart(2,"0")}function S(d){return Array.from(Array(_).keys()).map(P=>d.existingScores[P]!=""&&d.proposedScores[P]!="")}return o.$$set=d=>{"sections"in d&&r(0,t=d.sections),"startIdx"in d&&r(1,i=d.startIdx),"currentIdx"in d&&r(2,f=d.currentIdx),"scorecardKey"in d&&r(7,a=d.scorecardKey),"urlBase"in d&&r(3,p=d.urlBase)},o.$$.update=()=>{o.$$.dirty&384&&r(4,l=n[a]),o.$$.dirty&16&&r(5,s=S(l))},[t,i,f,p,l,s,k,a,n]}class Re extends fe{constructor(e){super(),ce(this,e,Te,Ce,ie,{sections:0,startIdx:1,currentIdx:2,scorecardKey:7,urlBase:3})}}export{Re as G};
