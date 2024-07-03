import{s as ie,E as j,i as b,n as Z,f,k as ae,e as m,c as g,b as y,p as E,G as se,a as w,m as L,g as q,h as k,t as G,d as A,q as C,j as B,I as x,J as $}from"./scheduler.ytQcc2rf.js";import{e as J}from"./each.2RvRdhFj.js";import{S as fe,i as ce}from"./index.D9yYtTfk.js";import{s as ue}from"./data.bD18yRHJ.js";import{b as Q}from"./paths.Bq_VU9fg.js";import{s as _e}from"./index.CE0Ape4o.js";import{c as ee,s as N}from"./colors.DaC397qr.js";function te(s,e,r){const t=s.slice();return t[11]=e[r],t}function le(s,e,r){const t=s.slice();return t[11]=e[r],t}function de(s){let e,r=J(V(s[0])),t=[];for(let n=0;n<r.length;n+=1)t[n]=re(te(s,r,n));return{c(){e=m("ol");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=g(n,"OL",{start:!0});var o=y(e);for(let l=0;l<t.length;l+=1)t[l].l(o);o.forEach(f),this.h()},h(){E(e,"start",s[1])},m(n,o){b(n,e,o);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(n,o){if(o&111){r=J(V(n[0]));let l;for(l=0;l<r.length;l+=1){const i=te(n,r,l);t[l]?t[l].p(i,o):(t[l]=re(i),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}o&2&&E(e,"start",n[1])},d(n){n&&f(e),se(t,n)}}}function he(s){let e,r,t="<th>Metric</th> <th>Completed</th> <th>Existing</th> <th>Proposed</th>",n,o=J(V(s[0])),l=[];for(let i=0;i<o.length;i+=1)l[i]=oe(le(s,o,i));return{c(){e=m("table"),r=m("tr"),r.innerHTML=t,n=w();for(let i=0;i<l.length;i+=1)l[i].c()},l(i){e=g(i,"TABLE",{});var u=y(e);r=g(u,"TR",{"data-svelte-h":!0}),L(r)!=="svelte-bdf5yo"&&(r.innerHTML=t),n=q(u);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(f)},m(i,u){b(i,e,u),k(e,r),k(e,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null)},p(i,u){if(u&123){o=J(V(i[0]));let c;for(c=0;c<o.length;c+=1){const h=le(i,o,c);l[c]?l[c].p(h,u):(l[c]=oe(h),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=o.length}},d(i){i&&f(e),se(l,i)}}}function be(s){let e,r,t,n;function o(_,v){return _[2]-_[1]!=_[11].idx?pe:ge}let l=o(s),i=l(s);function u(_,v){return _[5][_[11].idx]?ve:ke}let c=u(s),h=c(s);return{c(){e=m("li"),r=m("div"),i.c(),t=w(),h.c(),n=w(),this.h()},l(_){e=g(_,"LI",{});var v=y(e);r=g(v,"DIV",{class:!0});var S=y(r);i.l(S),t=q(S),h.l(S),S.forEach(f),n=q(v),v.forEach(f),this.h()},h(){E(r,"class","progress-list-item svelte-rbqaiv")},m(_,v){b(_,e,v),k(e,r),i.m(r,null),k(r,t),h.m(r,null),k(e,n)},p(_,v){l===(l=o(_))&&i?i.p(_,v):(i.d(1),i=l(_),i&&(i.c(),i.m(r,t))),c!==(c=u(_))&&(h.d(1),h=c(_),h&&(h.c(),h.m(r,null)))},d(_){_&&f(e),i.d(),h.d()}}}function me(s){let e,r=s[11].label+"",t,n;return{c(){e=m("strong"),t=G(r),n=w(),this.h()},l(o){e=g(o,"STRONG",{class:!0});var l=y(e);t=A(l,r),n=q(l),l.forEach(f),this.h()},h(){E(e,"class","govuk-tag"),C(e,"color",ee.green.font),C(e,"background",ee.green.background),C(e,"width","100%")},m(o,l){b(o,e,l),k(e,t),k(e,n)},p(o,l){l&1&&r!==(r=o[11].label+"")&&B(t,r)},d(o){o&&f(e)}}}function ge(s){let e=s[11].label+"",r;return{c(){r=G(e)},l(t){r=A(t,e)},m(t,n){b(t,r,n)},p(t,n){n&1&&e!==(e=t[11].label+"")&&B(r,e)},d(t){t&&f(r)}}}function pe(s){let e,r=s[11].label+"",t,n;return{c(){e=m("a"),t=G(r),this.h()},l(o){e=g(o,"A",{href:!0});var l=y(e);t=A(l,r),l.forEach(f),this.h()},h(){E(e,"href",n=""+(Q+s[3]+s[6](s[11].idx)))},m(o,l){b(o,e,l),k(e,t)},p(o,l){l&1&&r!==(r=o[11].label+"")&&B(t,r),l&9&&n!==(n=""+(Q+o[3]+o[6](o[11].idx)))&&E(e,"href",n)},d(o){o&&f(e)}}}function ke(s){let e,r="☒";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red tag-row svelte-rbqaiv")},m(t,n){b(t,e,n)},d(t){t&&f(e)}}}function ve(s){let e,r="☑";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green tag-row svelte-rbqaiv")},m(t,n){b(t,e,n)},d(t){t&&f(e)}}}function re(s){let e;function r(o,l){return o[11].kind=="section"?me:be}let t=r(s),n=t(s);return{c(){n.c(),e=j()},l(o){n.l(o),e=j()},m(o,l){n.m(o,l),b(o,e,l)},p(o,l){t===(t=r(o))&&n?n.p(o,l):(n.d(1),n=t(o),n&&(n.c(),n.m(e.parentNode,e)))},d(o){o&&f(e),n.d(o)}}}function Se(s){let e,r,t=s[1]+s[11].idx+"",n,o,l=s[11].label+"",i,u,c,h,_,v,S,d,R=(s[4].existingScores[s[11].idx]||"&nbsp;")+"",P,D,T,O,H=(s[4].proposedScores[s[11].idx]||"&nbsp;")+"";function z(a,p){return a[5][a[11].idx]?Ce:Ee}let K=z(s),I=K(s);return{c(){e=m("td"),r=m("a"),n=G(t),o=G(". "),i=G(l),c=w(),h=m("td"),I.c(),_=w(),v=m("td"),S=m("span"),d=new x(!1),P=w(),D=m("td"),T=m("span"),O=new x(!1),this.h()},l(a){e=g(a,"TD",{});var p=y(e);r=g(p,"A",{href:!0});var M=y(r);n=A(M,t),o=A(M,". "),i=A(M,l),M.forEach(f),p.forEach(f),c=q(a),h=g(a,"TD",{});var F=y(h);I.l(F),F.forEach(f),_=q(a),v=g(a,"TD",{});var U=y(v);S=g(U,"SPAN",{class:!0});var W=y(S);d=$(W,!1),W.forEach(f),U.forEach(f),P=q(a),D=g(a,"TD",{});var X=y(D);T=g(X,"SPAN",{class:!0});var Y=y(T);O=$(Y,!1),Y.forEach(f),X.forEach(f),this.h()},h(){E(r,"href",u=""+(Q+s[3]+s[6](s[11].idx))),d.a=null,E(S,"class","box svelte-rbqaiv"),C(S,"background",N[s[4].existingScores[s[11].idx]].background),C(S,"color",N[s[4].existingScores[s[11].idx]].font),O.a=null,E(T,"class","box svelte-rbqaiv"),C(T,"background",N[s[4].proposedScores[s[11].idx]].background),C(T,"color",N[s[4].proposedScores[s[11].idx]].font)},m(a,p){b(a,e,p),k(e,r),k(r,n),k(r,o),k(r,i),b(a,c,p),b(a,h,p),I.m(h,null),b(a,_,p),b(a,v,p),k(v,S),d.m(R,S),b(a,P,p),b(a,D,p),k(D,T),O.m(H,T)},p(a,p){p&3&&t!==(t=a[1]+a[11].idx+"")&&B(n,t),p&1&&l!==(l=a[11].label+"")&&B(i,l),p&9&&u!==(u=""+(Q+a[3]+a[6](a[11].idx)))&&E(r,"href",u),K!==(K=z(a))&&(I.d(1),I=K(a),I&&(I.c(),I.m(h,null))),p&17&&R!==(R=(a[4].existingScores[a[11].idx]||"&nbsp;")+"")&&d.p(R),p&17&&C(S,"background",N[a[4].existingScores[a[11].idx]].background),p&17&&C(S,"color",N[a[4].existingScores[a[11].idx]].font),p&17&&H!==(H=(a[4].proposedScores[a[11].idx]||"&nbsp;")+"")&&O.p(H),p&17&&C(T,"background",N[a[4].proposedScores[a[11].idx]].background),p&17&&C(T,"color",N[a[4].proposedScores[a[11].idx]].font)},d(a){a&&(f(e),f(c),f(h),f(_),f(v),f(P),f(D)),I.d()}}}function ye(s){let e,r,t=s[11].label+"",n,o,l=s[11].notes&&ne(s);return{c(){e=m("td"),r=m("b"),n=G(t),o=w(),l&&l.c(),this.h()},l(i){e=g(i,"TD",{colspan:!0});var u=y(e);r=g(u,"B",{});var c=y(r);n=A(c,t),c.forEach(f),o=q(u),l&&l.l(u),u.forEach(f),this.h()},h(){E(e,"colspan","4")},m(i,u){b(i,e,u),k(e,r),k(r,n),k(e,o),l&&l.m(e,null)},p(i,u){u&1&&t!==(t=i[11].label+"")&&B(n,t),i[11].notes?l?l.p(i,u):(l=ne(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&f(e),l&&l.d()}}}function Ee(s){let e,r="☒";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1v6fn9x"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--red tag-row svelte-rbqaiv")},m(t,n){b(t,e,n)},d(t){t&&f(e)}}}function Ce(s){let e,r="☑";return{c(){e=m("strong"),e.textContent=r,this.h()},l(t){e=g(t,"STRONG",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-wmt1eo"&&(e.textContent=r),this.h()},h(){E(e,"class","govuk-tag govuk-tag--green tag-row svelte-rbqaiv")},m(t,n){b(t,e,n)},d(t){t&&f(e)}}}function ne(s){let e,r=s[11].notes+"",t;return{c(){e=m("p"),t=G(r)},l(n){e=g(n,"P",{});var o=y(e);t=A(o,r),o.forEach(f)},m(n,o){b(n,e,o),k(e,t)},p(n,o){o&1&&r!==(r=n[11].notes+"")&&B(t,r)},d(n){n&&f(e)}}}function oe(s){let e,r;function t(l,i){return l[11].kind=="section"?ye:Se}let n=t(s),o=n(s);return{c(){e=m("tr"),o.c(),r=w()},l(l){e=g(l,"TR",{});var i=y(e);o.l(i),r=q(i),i.forEach(f)},m(l,i){b(l,e,i),o.m(e,null),k(e,r)},p(l,i){n===(n=t(l))&&o?o.p(l,i):(o.d(1),o=n(l),o&&(o.c(),o.m(e,r)))},d(l){l&&f(e),o.d()}}}function Te(s){let e;function r(o,l){return o[2]==-1?he:de}let t=r(s),n=t(s);return{c(){n.c(),e=j()},l(o){n.l(o),e=j()},m(o,l){n.m(o,l),b(o,e,l)},p(o,[l]){t===(t=r(o))&&n?n.p(o,l):(n.d(1),n=t(o),n&&(n.c(),n.m(e.parentNode,e)))},i:Z,o:Z,d(o){o&&f(e),n.d(o)}}}function V(s){let e=[],r=0;for(let t of s){e.push({kind:"section",label:t.section,notes:t.notes});for(let n of t.pages)e.push({kind:"page",idx:r,label:n}),r++}return e}function Ie(s,e,r){let t,n,o;ae(s,ue,d=>r(8,o=d));let{sections:l}=e,{startIdx:i}=e,{currentIdx:u}=e,{scorecardKey:c}=e,{urlBase:h}=e,_=_e(l.map(d=>d.pages.length));function v(d){return(d+i).toString().padStart(2,"0")}function S(d){return Array.from(Array(_).keys()).map(R=>d.existingScores[R]!=""&&d.proposedScores[R]!="")}return s.$$set=d=>{"sections"in d&&r(0,l=d.sections),"startIdx"in d&&r(1,i=d.startIdx),"currentIdx"in d&&r(2,u=d.currentIdx),"scorecardKey"in d&&r(7,c=d.scorecardKey),"urlBase"in d&&r(3,h=d.urlBase)},s.$$.update=()=>{s.$$.dirty&384&&r(4,t=o[c]),s.$$.dirty&16&&r(5,n=S(t))},[l,i,u,h,t,n,v,c,o]}class De extends fe{constructor(e){super(),ce(this,e,Ie,Te,ie,{sections:0,startIdx:1,currentIdx:2,scorecardKey:7,urlBase:3})}}export{De as G};
