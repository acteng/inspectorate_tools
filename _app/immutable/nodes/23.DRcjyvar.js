import{s as we,l as $e,e as p,a as g,c as d,g as x,d as v,b as X,f,i as _,m as ae,t as U,k as V,q as Ce,j as m,o as He,h as Se}from"../chunks/scheduler.BVvIvQw5.js";import{S as Te,i as xe,c as O,a as E,m as N,t as R,b as F,d as D,g as Ie,f as Pe}from"../chunks/index.r9TCaEV_.js";import{e as be,u as Re,o as Fe,B as Oe}from"../chunks/Geocoder.svelte_svelte_type_style_lang.CyyXuYfi.js";import{E as Ee}from"../chunks/ExternalLink.CA28p2qT.js";import{b as B}from"../chunks/paths.BT1d4cm_.js";import{s as se,c as _e,g as ie,n as Ne,e as De,l as qe}from"../chunks/data.CDrv4zpQ.js";import{C as Me}from"../chunks/CollapsibleCard.U28_USgy.js";import{S as oe}from"../chunks/SecondaryButton.BBk0PeoV.js";import{T as Ae}from"../chunks/TextArea.CTmuNzGK.js";function ye(o,e,n){const t=o.slice();return t[12]=e[n],t}function Je(o){let e;return{c(){e=U("New file")},l(n){e=V(n,"New file")},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function je(o){let e=o[12].slice(o[0].length)+"",n;return{c(){n=U(e)},l(t){n=V(t,e)},m(t,l){_(t,n,l)},p(t,l){l&3&&e!==(e=t[12].slice(t[0].length)+"")&&He(n,e)},d(t){t&&f(n)}}}function Be(o){let e;return{c(){e=U("Rename")},l(n){e=V(n,"Rename")},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function ze(o){let e;return{c(){e=U("Delete")},l(n){e=V(n,"Delete")},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function Le(o,e){let n,t,l,c,r,$,w,y,h;function u(){return e[9](e[12])}l=new oe({props:{disabled:e[3]==e[12],$$slots:{default:[je]},$$scope:{ctx:e}}}),l.$on("click",u);function H(){return e[10](e[12])}r=new oe({props:{$$slots:{default:[Be]},$$scope:{ctx:e}}}),r.$on("click",H);function P(){return e[11](e[12])}return w=new oe({props:{$$slots:{default:[ze]},$$scope:{ctx:e}}}),w.$on("click",P),{key:o,first:null,c(){n=p("li"),t=p("span"),O(l.$$.fragment),c=g(),O(r.$$.fragment),$=g(),O(w.$$.fragment),y=g(),this.h()},l(k){n=d(k,"LI",{});var i=X(n);t=d(i,"SPAN",{style:!0});var C=X(t);E(l.$$.fragment,C),c=v(C),E(r.$$.fragment,C),$=v(C),E(w.$$.fragment,C),C.forEach(f),y=v(i),i.forEach(f),this.h()},h(){Ce(t,"display","flex"),Ce(t,"justify-content","space-between"),this.first=n},m(k,i){_(k,n,i),m(n,t),N(l,t,null),m(t,c),N(r,t,null),m(t,$),N(w,t,null),m(n,y),h=!0},p(k,i){e=k;const C={};i&10&&(C.disabled=e[3]==e[12]),i&32771&&(C.$$scope={dirty:i,ctx:e}),l.$set(C);const I={};i&32768&&(I.$$scope={dirty:i,ctx:e}),r.$set(I);const M={};i&32768&&(M.$$scope={dirty:i,ctx:e}),w.$set(M)},i(k){h||(R(l.$$.fragment,k),R(r.$$.fragment,k),R(w.$$.fragment,k),h=!0)},o(k){F(l.$$.fragment,k),F(r.$$.fragment,k),F(w.$$.fragment,k),h=!1},d(k){k&&f(n),D(l),D(r),D(w)}}}function Ye(o){let e,n;return e=new Ae({props:{label:"JSON",value:JSON.stringify(o[2],null,"  "),rows:10}}),{c(){O(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const c={};l&4&&(c.value=JSON.stringify(t[2],null,"  ")),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ue(o){let e,n="TODO: Export file, make a copy, load from file...",t,l,c,r,$="Load a saved file:",w,y,h=[],u=new Map,H,P,k,i,C=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later.`,I,M,z;l=new oe({props:{$$slots:{default:[Je]},$$scope:{ctx:o}}}),l.$on("click",o[8]);let q=be(o[1]);const A=a=>a[12];for(let a=0;a<q.length;a+=1){let s=ye(o,q,a),T=A(s);u.set(T,h[a]=Le(T,s))}return M=new Me({props:{label:"Debug",$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){e=p("p"),e.textContent=n,t=g(),O(l.$$.fragment),c=g(),r=p("p"),r.textContent=$,w=g(),y=p("ul");for(let a=0;a<h.length;a+=1)h[a].c();H=g(),P=p("hr"),k=g(),i=p("p"),i.textContent=C,I=g(),O(M.$$.fragment)},l(a){e=d(a,"P",{"data-svelte-h":!0}),x(e)!=="svelte-920an8"&&(e.textContent=n),t=v(a),E(l.$$.fragment,a),c=v(a),r=d(a,"P",{"data-svelte-h":!0}),x(r)!=="svelte-1xydj1w"&&(r.textContent=$),w=v(a),y=d(a,"UL",{});var s=X(y);for(let T=0;T<h.length;T+=1)h[T].l(s);s.forEach(f),H=v(a),P=d(a,"HR",{}),k=v(a),i=d(a,"P",{"data-svelte-h":!0}),x(i)!=="svelte-zqinpp"&&(i.textContent=C),I=v(a),E(M.$$.fragment,a)},m(a,s){_(a,e,s),_(a,t,s),N(l,a,s),_(a,c,s),_(a,r,s),_(a,w,s),_(a,y,s);for(let T=0;T<h.length;T+=1)h[T]&&h[T].m(y,null);_(a,H,s),_(a,P,s),_(a,k,s),_(a,i,s),_(a,I,s),N(M,a,s),z=!0},p(a,s){const T={};s&32768&&(T.$$scope={dirty:s,ctx:a}),l.$set(T),s&187&&(q=be(a[1]),Ie(),h=Re(h,s,A,1,a,q,u,y,Fe,Le,null,ye),Pe());const Z={};s&32772&&(Z.$$scope={dirty:s,ctx:a}),M.$set(Z)},i(a){if(!z){R(l.$$.fragment,a);for(let s=0;s<q.length;s+=1)R(h[s]);R(M.$$.fragment,a),z=!0}},o(a){F(l.$$.fragment,a);for(let s=0;s<h.length;s+=1)F(h[s]);F(M.$$.fragment,a),z=!1},d(a){a&&(f(e),f(t),f(c),f(r),f(w),f(y),f(H),f(P),f(k),f(i),f(I)),D(l,a);for(let s=0;s<h.length;s+=1)h[s].d();D(M,a)}}}function Ve(o){let e,n;return e=new Me({props:{label:"Files",open:!0,$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){O(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,[l]){const c={};l&32783&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ge(o,e,n){let t,l;$e(o,se,i=>n(2,t=i)),$e(o,_e,i=>n(3,l=i));let{prefix:c}=e,r=ie();function $(i){if(l==i){window.alert("TODO: Can't delete current file yet");return}window.confirm(`Really delete file ${i.slice(c.length)}? You can't undo this.`)&&(window.localStorage.removeItem(i),n(1,r=ie()))}function w(i){if(l==i){window.alert("TODO: Can't rename current file yet");return}let C=window.prompt(`Rename file ${i.slice(c.length)} to what?`,i.slice(c.length));if(C){let I=window.localStorage.getItem(i);window.localStorage.setItem(`${c}${C}`,I),window.localStorage.removeItem(i),n(1,r=ie())}}function y(){ae(_e,l=Ne(),l),ae(se,t=De(),t),window.localStorage.setItem(l,JSON.stringify(t)),n(1,r=ie())}function h(i){try{let C=qe(i);ae(_e,l=i,l),ae(se,t=C,t)}catch(C){window.alert(`Couldn't load ${i}: ${C}`)}}const u=()=>y(),H=i=>h(i),P=i=>w(i),k=i=>$(i);return o.$$set=i=>{"prefix"in i&&n(0,c=i.prefix)},[c,r,t,l,$,w,y,h,u,H,P,k]}class Ke extends Te{constructor(e){super(),xe(this,e,Ge,Ve,we,{prefix:0})}}function Qe(o){let e;return{c(){e=U(`scheme review tool
    `)},l(n){e=V(n,`scheme review tool
    `)},m(n,t){_(n,e,t)},d(n){n&&f(e)}}}function We(o){let e,n="<i>Street Check (disabled, because of the Route Check Type set in Summary</i>",t,l,c=`<i>Street Placemaking Check (disabled, because of the Route Check Type
          set in Summary</i>`;return{c(){e=p("li"),e.innerHTML=n,t=g(),l=p("li"),l.innerHTML=c},l(r){e=d(r,"LI",{"data-svelte-h":!0}),x(e)!=="svelte-177rigm"&&(e.innerHTML=n),t=v(r),l=d(r,"LI",{"data-svelte-h":!0}),x(l)!=="svelte-fkqj1y"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function Xe(o){let e,n=`<a href="${B}/route_check/street_check">Street Check</a>`,t,l,c=`<a href="${B}/route_check/street_placemaking_check">Street Placemaking Check</a>`;return{c(){e=p("li"),e.innerHTML=n,t=g(),l=p("li"),l.innerHTML=c},l(r){e=d(r,"LI",{"data-svelte-h":!0}),x(e)!=="svelte-qr5auz"&&(e.innerHTML=n),t=v(r),l=d(r,"LI",{"data-svelte-h":!0}),x(l)!=="svelte-116k6le"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function Ze(o){let e,n="<i>Path Check (disabled, because of the Route Check Type set in Summary</i>",t,l,c=`<i>Path Placemaking Check (disabled, because of the Route Check Type set
          in Summary</i>`;return{c(){e=p("li"),e.innerHTML=n,t=g(),l=p("li"),l.innerHTML=c},l(r){e=d(r,"LI",{"data-svelte-h":!0}),x(e)!=="svelte-1qcyf3y"&&(e.innerHTML=n),t=v(r),l=d(r,"LI",{"data-svelte-h":!0}),x(l)!=="svelte-12nesn6"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function et(o){let e,n=`<a href="${B}/route_check/path_check">Path Check</a>`,t,l,c=`<a href="${B}/route_check/path_placemaking_check">Path Placemaking Check</a>`;return{c(){e=p("li"),e.innerHTML=n,t=g(),l=p("li"),l.innerHTML=c},l(r){e=d(r,"LI",{"data-svelte-h":!0}),x(e)!=="svelte-1yrsyln"&&(e.innerHTML=n),t=v(r),l=d(r,"LI",{"data-svelte-h":!0}),x(l)!=="svelte-17pw8oa"&&(l.innerHTML=c)},m(r,$){_(r,e,$),_(r,t,$),_(r,l,$)},d(r){r&&(f(e),f(t),f(l))}}}function tt(o){let e,n,t,l,c,r,$,w,y,h,u,H,P=`<a href="${B}/route_check/summary">Summary of Scheme</a>`,k,i,C=`<a href="${B}/route_check/policy_check">Policy Check</a>`,I,M,z=`<a href="${B}/route_check/policy_conflict_log">Policy Conflict Log</a>`,q,A,a=`<a href="${B}/route_check/safety_check">Safety Check</a>`,s,T,Z=`<a href="${B}/route_check/critical_issues_log">Critical Issues Log</a>`,ce,ee,te,G,he="JAT Check",fe,K,pe="Results Summary",ue,Q,de="Results Further Analysis",me,W,ke="Results Export",le;n=new Oe({props:{links:[["Tools","/"]],current:"Route check tool"}}),r=new Ee({props:{href:"https://www.gov.uk/government/publications/active-travel-england-scheme-review-tools",$$slots:{default:[Qe]},$$scope:{ctx:o}}}),y=new Ke({props:{prefix:"route-check/"}});function ge(b,S){return b[0].summary.checkType=="street"?Xe:We}let ne=ge(o),J=ne(o);function ve(b,S){return b[0].summary.checkType=="path"?et:Ze}let re=ve(o),j=re(o);return{c(){e=p("div"),O(n.$$.fragment),t=g(),l=p("p"),c=U("This is an experimental version of a "),O(r.$$.fragment),$=U("."),w=g(),O(y.$$.fragment),h=g(),u=p("ol"),H=p("li"),H.innerHTML=P,k=g(),i=p("li"),i.innerHTML=C,I=g(),M=p("li"),M.innerHTML=z,q=g(),A=p("li"),A.innerHTML=a,s=g(),T=p("li"),T.innerHTML=Z,ce=g(),J.c(),ee=g(),j.c(),te=g(),G=p("li"),G.textContent=he,fe=g(),K=p("li"),K.textContent=pe,ue=g(),Q=p("li"),Q.textContent=de,me=g(),W=p("li"),W.textContent=ke,this.h()},l(b){e=d(b,"DIV",{class:!0});var S=X(e);E(n.$$.fragment,S),t=v(S),l=d(S,"P",{});var Y=X(l);c=V(Y,"This is an experimental version of a "),E(r.$$.fragment,Y),$=V(Y,"."),Y.forEach(f),w=v(S),E(y.$$.fragment,S),h=v(S),u=d(S,"OL",{});var L=X(u);H=d(L,"LI",{"data-svelte-h":!0}),x(H)!=="svelte-ukoito"&&(H.innerHTML=P),k=v(L),i=d(L,"LI",{"data-svelte-h":!0}),x(i)!=="svelte-1569dhf"&&(i.innerHTML=C),I=v(L),M=d(L,"LI",{"data-svelte-h":!0}),x(M)!=="svelte-fibege"&&(M.innerHTML=z),q=v(L),A=d(L,"LI",{"data-svelte-h":!0}),x(A)!=="svelte-cxa0x3"&&(A.innerHTML=a),s=v(L),T=d(L,"LI",{"data-svelte-h":!0}),x(T)!=="svelte-1tbpk54"&&(T.innerHTML=Z),ce=v(L),J.l(L),ee=v(L),j.l(L),te=v(L),G=d(L,"LI",{"data-svelte-h":!0}),x(G)!=="svelte-1dooms7"&&(G.textContent=he),fe=v(L),K=d(L,"LI",{"data-svelte-h":!0}),x(K)!=="svelte-128hs1o"&&(K.textContent=pe),ue=v(L),Q=d(L,"LI",{"data-svelte-h":!0}),x(Q)!=="svelte-ep2hdy"&&(Q.textContent=de),me=v(L),W=d(L,"LI",{"data-svelte-h":!0}),x(W)!=="svelte-1v81g90"&&(W.textContent=ke),L.forEach(f),S.forEach(f),this.h()},h(){Se(e,"class","govuk-prose")},m(b,S){_(b,e,S),N(n,e,null),m(e,t),m(e,l),m(l,c),N(r,l,null),m(l,$),m(e,w),N(y,e,null),m(e,h),m(e,u),m(u,H),m(u,k),m(u,i),m(u,I),m(u,M),m(u,q),m(u,A),m(u,s),m(u,T),m(u,ce),J.m(u,null),m(u,ee),j.m(u,null),m(u,te),m(u,G),m(u,fe),m(u,K),m(u,ue),m(u,Q),m(u,me),m(u,W),le=!0},p(b,[S]){const Y={};S&2&&(Y.$$scope={dirty:S,ctx:b}),r.$set(Y),ne!==(ne=ge(b))&&(J.d(1),J=ne(b),J&&(J.c(),J.m(u,ee))),re!==(re=ve(b))&&(j.d(1),j=re(b),j&&(j.c(),j.m(u,te)))},i(b){le||(R(n.$$.fragment,b),R(r.$$.fragment,b),R(y.$$.fragment,b),le=!0)},o(b){F(n.$$.fragment,b),F(r.$$.fragment,b),F(y.$$.fragment,b),le=!1},d(b){b&&f(e),D(n),D(r),D(y),J.d(),j.d()}}}function lt(o,e,n){let t;return $e(o,se,l=>n(0,t=l)),[t]}class mt extends Te{constructor(e){super(),xe(this,e,lt,tt,we,{})}}export{mt as component};
