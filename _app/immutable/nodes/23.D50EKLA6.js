import{s as be,k as me,e as k,a as h,b as g,g as L,c as d,f as X,d as f,i as _,l as re,t as B,h as Y,K as ge,j as y,y as xe}from"../chunks/scheduler.8Pqdtq9W.js";import{S as Le,i as we,c as E,a as N,m as D,t as F,b as O,d as A,g as Me,f as He}from"../chunks/index.KrNxZzBh.js";import{e as ve,u as Se,o as Ie,B as Pe}from"../chunks/Geocoder.svelte_svelte_type_style_lang.CI-sE9Bk.js";import{E as Re}from"../chunks/ExternalLink.DchCAz0l.js";import{b as q}from"../chunks/paths.C5Jm3klG.js";import{s as ie,c as ue,g as ae,n as Fe,e as Oe,l as Ee}from"../chunks/data.DidLf-AL.js";import{C as Te}from"../chunks/CollapsibleCard.COCSlxIK.js";import{S as se}from"../chunks/SecondaryButton.CctJSiA9.js";import{T as Ne}from"../chunks/TextArea.CjICvxNC.js";function Ce(u,e,n){const t=u.slice();return t[12]=e[n],t}function De(u){let e;return{c(){e=B("New file")},l(n){e=Y(n,"New file")},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function Ae(u){let e=u[12].slice(u[0].length)+"",n;return{c(){n=B(e)},l(t){n=Y(t,e)},m(t,l){_(t,n,l)},p(t,l){l&3&&e!==(e=t[12].slice(t[0].length)+"")&&xe(n,e)},d(t){t&&f(n)}}}function Je(u){let e;return{c(){e=B("Rename")},l(n){e=Y(n,"Rename")},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function je(u){let e;return{c(){e=B("Delete")},l(n){e=Y(n,"Delete")},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function ye(u,e){let n,t,l,c,r,$,v,w,i;function S(){return e[9](e[12])}l=new se({props:{disabled:e[3]==e[12],$$slots:{default:[Ae]},$$scope:{ctx:e}}}),l.$on("click",S);function R(){return e[10](e[12])}r=new se({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}}),r.$on("click",R);function I(){return e[11](e[12])}return v=new se({props:{$$slots:{default:[je]},$$scope:{ctx:e}}}),v.$on("click",I),{key:u,first:null,c(){n=k("li"),t=k("span"),E(l.$$.fragment),c=h(),E(r.$$.fragment),$=h(),E(v.$$.fragment),w=h(),this.h()},l(p){n=g(p,"LI",{});var s=X(n);t=g(s,"SPAN",{style:!0});var b=X(t);N(l.$$.fragment,b),c=d(b),N(r.$$.fragment,b),$=d(b),N(v.$$.fragment,b),b.forEach(f),w=d(s),s.forEach(f),this.h()},h(){ge(t,"display","flex"),ge(t,"justify-content","space-between"),this.first=n},m(p,s){_(p,n,s),y(n,t),D(l,t,null),y(t,c),D(r,t,null),y(t,$),D(v,t,null),y(n,w),i=!0},p(p,s){e=p;const b={};s&10&&(b.disabled=e[3]==e[12]),s&32771&&(b.$$scope={dirty:s,ctx:e}),l.$set(b);const M={};s&32768&&(M.$$scope={dirty:s,ctx:e}),r.$set(M);const H={};s&32768&&(H.$$scope={dirty:s,ctx:e}),v.$set(H)},i(p){i||(F(l.$$.fragment,p),F(r.$$.fragment,p),F(v.$$.fragment,p),i=!0)},o(p){O(l.$$.fragment,p),O(r.$$.fragment,p),O(v.$$.fragment,p),i=!1},d(p){p&&f(n),A(l),A(r),A(v)}}}function qe(u){let e,n;return e=new Ne({props:{label:"JSON",value:JSON.stringify(u[2],null,"  "),rows:10}}),{c(){E(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){D(e,t,l),n=!0},p(t,l){const c={};l&4&&(c.value=JSON.stringify(t[2],null,"  ")),e.$set(c)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function ze(u){let e,n="TODO: Export file, make a copy, load from file...",t,l,c,r,$="Load a saved file:",v,w,i=[],S=new Map,R,I,p,s,b=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later.`,M,H,z;l=new se({props:{$$slots:{default:[De]},$$scope:{ctx:u}}}),l.$on("click",u[8]);let P=ve(u[1]);const W=a=>a[12];for(let a=0;a<P.length;a+=1){let o=Ce(u,P,a),T=W(o);S.set(T,i[a]=ye(T,o))}return H=new Te({props:{label:"Debug",$$slots:{default:[qe]},$$scope:{ctx:u}}}),{c(){e=k("p"),e.textContent=n,t=h(),E(l.$$.fragment),c=h(),r=k("p"),r.textContent=$,v=h(),w=k("ul");for(let a=0;a<i.length;a+=1)i[a].c();R=h(),I=k("hr"),p=h(),s=k("p"),s.textContent=b,M=h(),E(H.$$.fragment)},l(a){e=g(a,"P",{"data-svelte-h":!0}),L(e)!=="svelte-920an8"&&(e.textContent=n),t=d(a),N(l.$$.fragment,a),c=d(a),r=g(a,"P",{"data-svelte-h":!0}),L(r)!=="svelte-1xydj1w"&&(r.textContent=$),v=d(a),w=g(a,"UL",{});var o=X(w);for(let T=0;T<i.length;T+=1)i[T].l(o);o.forEach(f),R=d(a),I=g(a,"HR",{}),p=d(a),s=g(a,"P",{"data-svelte-h":!0}),L(s)!=="svelte-zqinpp"&&(s.textContent=b),M=d(a),N(H.$$.fragment,a)},m(a,o){_(a,e,o),_(a,t,o),D(l,a,o),_(a,c,o),_(a,r,o),_(a,v,o),_(a,w,o);for(let T=0;T<i.length;T+=1)i[T]&&i[T].m(w,null);_(a,R,o),_(a,I,o),_(a,p,o),_(a,s,o),_(a,M,o),D(H,a,o),z=!0},p(a,o){const T={};o&32768&&(T.$$scope={dirty:o,ctx:a}),l.$set(T),o&187&&(P=ve(a[1]),Me(),i=Se(i,o,W,1,a,P,S,w,Ie,ye,null,Ce),He());const K={};o&32772&&(K.$$scope={dirty:o,ctx:a}),H.$set(K)},i(a){if(!z){F(l.$$.fragment,a);for(let o=0;o<P.length;o+=1)F(i[o]);F(H.$$.fragment,a),z=!0}},o(a){O(l.$$.fragment,a);for(let o=0;o<i.length;o+=1)O(i[o]);O(H.$$.fragment,a),z=!1},d(a){a&&(f(e),f(t),f(c),f(r),f(v),f(w),f(R),f(I),f(p),f(s),f(M)),A(l,a);for(let o=0;o<i.length;o+=1)i[o].d();A(H,a)}}}function Be(u){let e,n;return e=new Te({props:{label:"Files",open:!0,$$slots:{default:[ze]},$$scope:{ctx:u}}}),{c(){E(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){D(e,t,l),n=!0},p(t,[l]){const c={};l&32783&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(F(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Ye(u,e,n){let t,l;me(u,ie,s=>n(2,t=s)),me(u,ue,s=>n(3,l=s));let{prefix:c}=e,r=ae();function $(s){if(l==s){window.alert("TODO: Can't delete current file yet");return}window.confirm(`Really delete file ${s.slice(c.length)}? You can't undo this.`)&&(window.localStorage.removeItem(s),n(1,r=ae()))}function v(s){if(l==s){window.alert("TODO: Can't rename current file yet");return}let b=window.prompt(`Rename file ${s.slice(c.length)} to what?`,s.slice(c.length));if(b){let M=window.localStorage.getItem(s);window.localStorage.setItem(`${c}${b}`,M),window.localStorage.removeItem(s),n(1,r=ae())}}function w(){re(ue,l=Fe(),l),re(ie,t=Oe(),t),window.localStorage.setItem(l,JSON.stringify(t)),n(1,r=ae())}function i(s){try{let b=Ee(s);re(ue,l=s,l),re(ie,t=b,t)}catch(b){window.alert(`Couldn't load ${s}: ${b}`)}}const S=()=>w(),R=s=>i(s),I=s=>v(s),p=s=>$(s);return u.$$set=s=>{"prefix"in s&&n(0,c=s.prefix)},[c,r,t,l,$,v,w,i,S,R,I,p]}class Ke extends Le{constructor(e){super(),we(this,e,Ye,Be,be,{prefix:0})}}function Ue(u){let e;return{c(){e=B(`scheme review tool
  `)},l(n){e=Y(n,`scheme review tool
  `)},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function Ge(u){let e,n="<i>Street Check (disabled, because of the Route Check Type set in Summary</i>",t,l,c=`<i>Street Placemaking Check (disabled, because of the Route Check Type set
        in Summary</i>`;return{c(){e=k("li"),e.innerHTML=n,t=h(),l=k("li"),l.innerHTML=c},l(r){e=g(r,"LI",{"data-svelte-h":!0}),L(e)!=="svelte-gxw4ae"&&(e.innerHTML=n),t=d(r),l=g(r,"LI",{"data-svelte-h":!0}),L(l)!=="svelte-is2acy"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function Qe(u){let e,n=`<a href="${q}/route_check/street_check">Street Check</a>`,t,l,c=`<a href="${q}/route_check/street_placemaking_check">Street Placemaking Check</a>`;return{c(){e=k("li"),e.innerHTML=n,t=h(),l=k("li"),l.innerHTML=c},l(r){e=g(r,"LI",{"data-svelte-h":!0}),L(e)!=="svelte-qr5auz"&&(e.innerHTML=n),t=d(r),l=g(r,"LI",{"data-svelte-h":!0}),L(l)!=="svelte-7dzxwi"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function Ve(u){let e,n="<i>Path Check (disabled, because of the Route Check Type set in Summary</i>",t,l,c=`<i>Path Placemaking Check (disabled, because of the Route Check Type set in
        Summary</i>`;return{c(){e=k("li"),e.innerHTML=n,t=h(),l=k("li"),l.innerHTML=c},l(r){e=g(r,"LI",{"data-svelte-h":!0}),L(e)!=="svelte-luysfy"&&(e.innerHTML=n),t=d(r),l=g(r,"LI",{"data-svelte-h":!0}),L(l)!=="svelte-1sart1a"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function We(u){let e,n=`<a href="${q}/route_check/path_check">Path Check</a>`,t,l,c=`<a href="${q}/route_check/path_placemaking_check">Path Placemaking Check</a>`;return{c(){e=k("li"),e.innerHTML=n,t=h(),l=k("li"),l.innerHTML=c},l(r){e=g(r,"LI",{"data-svelte-h":!0}),L(e)!=="svelte-1yrsyln"&&(e.innerHTML=n),t=d(r),l=g(r,"LI",{"data-svelte-h":!0}),L(l)!=="svelte-89yh4a"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function Xe(u){let e,n,t,l,c,r,$,v,w,i,S,R=`<a href="${q}/route_check/summary">Summary of Scheme</a>`,I,p,s=`<a href="${q}/route_check/policy_check">Policy Check</a>`,b,M,H=`<a href="${q}/route_check/policy_conflict_log">Policy Conflict Log</a>`,z,P,W=`<a href="${q}/route_check/safety_check">Safety Check</a>`,a,o,T=`<a href="${q}/route_check/critical_issues_log">Critical Issues Log</a>`,K,Z,ee,U,_e="JAT Check",oe,G,$e="Results Summary",ce,Q,pe="Results Further Analysis",fe,V,he="Results Export",te;e=new Pe({props:{links:[["Tools","/"]],current:"Route check tool"}}),c=new Re({props:{href:"https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools",$$slots:{default:[Ue]},$$scope:{ctx:u}}}),v=new Ke({props:{prefix:"route-check/"}});function de(m,x){return m[0].summary.checkType=="street"?Qe:Ge}let le=de(u),J=le(u);function ke(m,x){return m[0].summary.checkType=="path"?We:Ve}let ne=ke(u),j=ne(u);return{c(){E(e.$$.fragment),n=h(),t=k("p"),l=B("This is an experimental version of a "),E(c.$$.fragment),r=B("."),$=h(),E(v.$$.fragment),w=h(),i=k("ol"),S=k("li"),S.innerHTML=R,I=h(),p=k("li"),p.innerHTML=s,b=h(),M=k("li"),M.innerHTML=H,z=h(),P=k("li"),P.innerHTML=W,a=h(),o=k("li"),o.innerHTML=T,K=h(),J.c(),Z=h(),j.c(),ee=h(),U=k("li"),U.textContent=_e,oe=h(),G=k("li"),G.textContent=$e,ce=h(),Q=k("li"),Q.textContent=pe,fe=h(),V=k("li"),V.textContent=he},l(m){N(e.$$.fragment,m),n=d(m),t=g(m,"P",{});var x=X(t);l=Y(x,"This is an experimental version of a "),N(c.$$.fragment,x),r=Y(x,"."),x.forEach(f),$=d(m),N(v.$$.fragment,m),w=d(m),i=g(m,"OL",{});var C=X(i);S=g(C,"LI",{"data-svelte-h":!0}),L(S)!=="svelte-ukoito"&&(S.innerHTML=R),I=d(C),p=g(C,"LI",{"data-svelte-h":!0}),L(p)!=="svelte-1569dhf"&&(p.innerHTML=s),b=d(C),M=g(C,"LI",{"data-svelte-h":!0}),L(M)!=="svelte-8hn04u"&&(M.innerHTML=H),z=d(C),P=g(C,"LI",{"data-svelte-h":!0}),L(P)!=="svelte-cxa0x3"&&(P.innerHTML=W),a=d(C),o=g(C,"LI",{"data-svelte-h":!0}),L(o)!=="svelte-6aehbs"&&(o.innerHTML=T),K=d(C),J.l(C),Z=d(C),j.l(C),ee=d(C),U=g(C,"LI",{"data-svelte-h":!0}),L(U)!=="svelte-1dooms7"&&(U.textContent=_e),oe=d(C),G=g(C,"LI",{"data-svelte-h":!0}),L(G)!=="svelte-128hs1o"&&(G.textContent=$e),ce=d(C),Q=g(C,"LI",{"data-svelte-h":!0}),L(Q)!=="svelte-ep2hdy"&&(Q.textContent=pe),fe=d(C),V=g(C,"LI",{"data-svelte-h":!0}),L(V)!=="svelte-1v81g90"&&(V.textContent=he),C.forEach(f)},m(m,x){D(e,m,x),_(m,n,x),_(m,t,x),y(t,l),D(c,t,null),y(t,r),_(m,$,x),D(v,m,x),_(m,w,x),_(m,i,x),y(i,S),y(i,I),y(i,p),y(i,b),y(i,M),y(i,z),y(i,P),y(i,a),y(i,o),y(i,K),J.m(i,null),y(i,Z),j.m(i,null),y(i,ee),y(i,U),y(i,oe),y(i,G),y(i,ce),y(i,Q),y(i,fe),y(i,V),te=!0},p(m,[x]){const C={};x&2&&(C.$$scope={dirty:x,ctx:m}),c.$set(C),le!==(le=de(m))&&(J.d(1),J=le(m),J&&(J.c(),J.m(i,Z))),ne!==(ne=ke(m))&&(j.d(1),j=ne(m),j&&(j.c(),j.m(i,ee)))},i(m){te||(F(e.$$.fragment,m),F(c.$$.fragment,m),F(v.$$.fragment,m),te=!0)},o(m){O(e.$$.fragment,m),O(c.$$.fragment,m),O(v.$$.fragment,m),te=!1},d(m){m&&(f(n),f(t),f($),f(w),f(i)),A(e,m),A(c),A(v,m),J.d(),j.d()}}}function Ze(u,e,n){let t;return me(u,ie,l=>n(0,t=l)),[t]}class ct extends Le{constructor(e){super(),we(this,e,Ze,Xe,be,{})}}export{ct as component};
