import{s as x,D as U,i as T,n as P,f as h,k as ce,K as Ce,e as y,a as I,c as w,b,g as V,q as f,h as g,t as C,d as N,j as Q,E as me,v as X,O as ae,P as se,l as Ne,I as Pe,y as Ae,u as Ie,m as Ve,o as Se,H as de,V as Be}from"./scheduler.4ZNDCSWA.js";import{S as ee,i as te,g as ve,b as F,f as pe,t as q,c as j,a as G,m as J,d as K}from"./index.xRKM1n3P.js";import{g as De}from"./globals.D0QH3NT1.js";import{b as $}from"./paths.BaGmOa8A.js";import{g as Fe,a as qe,b as He,c as ke,d as Me}from"./index.D-ydCFi1.js";import{p as fe}from"./stores.BKse9Eyv.js";import{g as Le}from"./entry.D_dkPXI6.js";import{S as Oe,A as $e}from"./ServiceHeader.Bj6t406Z.js";import"./index.DnEm2jv3.js";import{e as ie}from"./each.DpHudclE.js";function be(s,e,l){const t=s.slice();return t[4]=e[l][0],t[5]=e[l][1],t}function ye(s,e,l){const t=s.slice();return t[8]=e[l][0],t[9]=e[l][1],t[10]=e[l][2],t[12]=l,t}function we(s){let e,l=ie(s[1]),t=[];for(let r=0;r<l.length;r+=1)t[r]=Ee(be(s,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},l(r){for(let n=0;n<t.length;n+=1)t[n].l(r);e=U()},m(r,n){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(r,n);T(r,e,n)},p(r,n){if(n&3){l=ie(r[1]);let a;for(a=0;a<l.length;a+=1){const i=be(r,l,a);t[a]?t[a].p(i,n):(t[a]=Ee(i),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(r){r&&h(e),Ce(t,r)}}}function ze(s){let e,l=s[4]+s[12]+1+"",t,r,n=s[9]+"",a;return{c(){e=y("span"),t=C(l),r=C(". "),a=C(n)},l(i){e=w(i,"SPAN",{});var o=b(e);t=N(o,l),r=N(o,". "),a=N(o,n),o.forEach(h)},m(i,o){T(i,e,o),g(e,t),g(e,r),g(e,a)},p(i,o){o&1&&n!==(n=i[9]+"")&&Q(a,n)},d(i){i&&h(e)}}}function Ye(s){let e,l=s[4]+s[12]+1+"",t,r,n=s[9]+"",a,i;return{c(){e=y("a"),t=C(l),r=C(". "),a=C(n),this.h()},l(o){e=w(o,"A",{href:!0,class:!0});var c=b(e);t=N(c,l),r=N(c,". "),a=N(c,n),c.forEach(h),this.h()},h(){f(e,"href",i=""+($+s[8])),f(e,"class","govuk-link--no-underline hack-no-visited-state svelte-k10yde"),me(e,"underline",s[10])},m(o,c){T(o,e,c),g(e,t),g(e,r),g(e,a)},p(o,c){c&1&&n!==(n=o[9]+"")&&Q(a,n),c&1&&i!==(i=""+($+o[8]))&&f(e,"href",i),c&3&&me(e,"underline",o[10])},d(o){o&&h(e)}}}function Te(s){let e;function l(n,a){return n[8]?Ye:ze}let t=l(s),r=t(s);return{c(){r.c(),e=U()},l(n){r.l(n),e=U()},m(n,a){r.m(n,a),T(n,e,a)},p(n,a){t===(t=l(n))&&r?r.p(n,a):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){n&&h(e),r.d(n)}}}function Ee(s){let e,l,t=ie(s[0].slice(s[4],s[5])),r=[];for(let n=0;n<t.length;n+=1)r[n]=Te(ye(s,t,n));return{c(){e=y("ol");for(let n=0;n<r.length;n+=1)r[n].c();l=I(),this.h()},l(n){e=w(n,"OL",{class:!0});var a=b(e);for(let i=0;i<r.length;i+=1)r[i].l(a);l=V(a),a.forEach(h),this.h()},h(){f(e,"class","svelte-k10yde")},m(n,a){T(n,e,a);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);g(e,l)},p(n,a){if(a&3){t=ie(n[0].slice(n[4],n[5]));let i;for(i=0;i<t.length;i+=1){const o=ye(n,t,i);r[i]?r[i].p(o,a):(r[i]=Te(o),r[i].c(),r[i].m(e,l))}for(;i<r.length;i+=1)r[i].d(1);r.length=t.length}},d(n){n&&h(e),Ce(r,n)}}}function Ze(s){let e,l=s[0]&&we(s);return{c(){l&&l.c(),e=U()},l(t){l&&l.l(t),e=U()},m(t,r){l&&l.m(t,r),T(t,e,r)},p(t,[r]){t[0]?l?l.p(t,r):(l=we(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:P,o:P,d(t){t&&h(e),l&&l.d(t)}}}function je(s,e,l){let t,r;ce(s,fe,i=>l(3,r=i));let{routeCheckType:n}=e,a=[[0,5],[5,9],[9,13]];return s.$$set=i=>{"routeCheckType"in i&&l(2,n=i.routeCheckType)},s.$$.update=()=>{s.$$.dirty&12&&l(0,t=Fe(r.url.pathname,n))},[t,a,n,r]}class Ge extends ee{constructor(e){super(),te(this,e,je,Ze,x,{routeCheckType:2})}}function Je(s){let e;return{c(){e=C(" ")},l(l){e=N(l," ")},m(l,t){T(l,e,t)},p:P,i:P,o:P,d(l){l&&h(e)}}}function Ke(s){let e,l;return e=new nt({props:{href:""+($+s[1][0]),label:s[1][1]}}),{c(){j(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const n={};r&2&&(n.href=""+($+t[1][0])),r&2&&(n.label=t[1][1]),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function Ue(s){let e;return{c(){e=C(" ")},l(l){e=N(l," ")},m(l,t){T(l,e,t)},p:P,i:P,o:P,d(l){l&&h(e)}}}function Qe(s){let e,l;return e=new tt({props:{href:""+($+s[0][0]),label:s[0][1]}}),{c(){j(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=""+($+t[0][0])),r&1&&(n.label=t[0][1]),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function Re(s){let e,l,t,r,n,a,i;const o=[Ke,Je],c=[];function p(_,k){return _[1]?0:1}l=p(s),t=c[l]=o[l](s);const E=[Qe,Ue],d=[];function S(_,k){return _[0]?0:1}return n=S(s),a=d[n]=E[n](s),{c(){e=y("div"),t.c(),r=I(),a.c(),this.h()},l(_){e=w(_,"DIV",{style:!0});var k=b(e);t.l(k),r=V(k),a.l(k),k.forEach(h),this.h()},h(){X(e,"display","flex"),X(e,"justify-content","space-between")},m(_,k){T(_,e,k),c[l].m(e,null),g(e,r),d[n].m(e,null),i=!0},p(_,[k]){let B=l;l=p(_),l===B?c[l].p(_,k):(ve(),F(c[B],1,1,()=>{c[B]=null}),pe(),t=c[l],t?t.p(_,k):(t=c[l]=o[l](_),t.c()),q(t,1),t.m(e,r));let H=n;n=S(_),n===H?d[n].p(_,k):(ve(),F(d[H],1,1,()=>{d[H]=null}),pe(),a=d[n],a?a.p(_,k):(a=d[n]=E[n](_),a.c()),q(a,1),a.m(e,null))},i(_){i||(q(t),q(a),i=!0)},o(_){F(t),F(a),i=!1},d(_){_&&h(e),c[l].d(),d[n].d()}}}function We(s,e,l){let t,r,n,a;ce(s,fe,o=>l(4,a=o));let{routeCheckType:i}=e;return s.$$set=o=>{"routeCheckType"in o&&l(2,i=o.routeCheckType)},s.$$.update=()=>{s.$$.dirty&16&&l(3,t=a.url.pathname),s.$$.dirty&12&&l(1,r=qe(t,i)),s.$$.dirty&12&&l(0,n=He(t,i))},[n,r,i,t,a]}class Xe extends ee{constructor(e){super(),te(this,e,We,Re,x,{routeCheckType:2})}}function xe(s){let e,l,t,r,n,a,i;return{c(){e=y("div"),l=y("a"),t=y("span"),r=C(s[1]),n=I(),a=ae("svg"),i=ae("path"),this.h()},l(o){e=w(o,"DIV",{class:!0});var c=b(e);l=w(c,"A",{class:!0,href:!0,rel:!0});var p=b(l);t=w(p,"SPAN",{class:!0});var E=b(t);r=N(E,s[1]),E.forEach(h),n=V(p),a=se(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var d=b(a);i=se(d,"path",{d:!0}),b(i).forEach(h),d.forEach(h),p.forEach(h),c.forEach(h),this.h()},h(){f(t,"class","govuk-pagination__link-title"),f(i,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),f(a,"class","govuk-pagination__icon govuk-pagination__icon--next"),f(a,"xmlns","http://www.w3.org/2000/svg"),f(a,"height","13"),f(a,"width","15"),f(a,"aria-hidden","true"),f(a,"focusable","false"),f(a,"viewBox","0 0 15 13"),f(l,"class","govuk-link govuk-pagination__link"),f(l,"href",s[0]),f(l,"rel","next"),f(e,"class","govuk-pagination__next")},m(o,c){T(o,e,c),g(e,l),g(l,t),g(t,r),g(l,n),g(l,a),g(a,i)},p(o,[c]){c&2&&Q(r,o[1]),c&1&&f(l,"href",o[0])},i:P,o:P,d(o){o&&h(e)}}}function et(s,e,l){let{href:t}=e,{label:r}=e;return s.$$set=n=>{"href"in n&&l(0,t=n.href),"label"in n&&l(1,r=n.label)},[t,r]}class tt extends ee{constructor(e){super(),te(this,e,et,xe,x,{href:0,label:1})}}function lt(s){let e,l,t,r,n,a,i;return{c(){e=y("div"),l=y("a"),t=ae("svg"),r=ae("path"),n=I(),a=y("span"),i=C(s[1]),this.h()},l(o){e=w(o,"DIV",{class:!0});var c=b(e);l=w(c,"A",{class:!0,href:!0,rel:!0});var p=b(l);t=se(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var E=b(t);r=se(E,"path",{d:!0}),b(r).forEach(h),E.forEach(h),n=V(p),a=w(p,"SPAN",{class:!0});var d=b(a);i=N(d,s[1]),d.forEach(h),p.forEach(h),c.forEach(h),this.h()},h(){f(r,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),f(t,"class","govuk-pagination__icon govuk-pagination__icon--prev"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"height","13"),f(t,"width","15"),f(t,"aria-hidden","true"),f(t,"focusable","false"),f(t,"viewBox","0 0 15 13"),f(a,"class","govuk-pagination__link-title"),f(l,"class","govuk-link govuk-pagination__link"),f(l,"href",s[0]),f(l,"rel","prev"),f(e,"class","govuk-pagination__prev")},m(o,c){T(o,e,c),g(e,l),g(l,t),g(t,r),g(l,n),g(l,a),g(a,i)},p(o,[c]){c&2&&Q(i,o[1]),c&1&&f(l,"href",o[0])},i:P,o:P,d(o){o&&h(e)}}}function rt(s,e,l){let{href:t}=e,{label:r}=e;return s.$$set=n=>{"href"in n&&l(0,t=n.href),"label"in n&&l(1,r=n.label)},[t,r]}class nt extends ee{constructor(e){super(),te(this,e,rt,lt,x,{href:0,label:1})}}const at="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h240l80%2080h320q33%200%2056.5%2023.5T880-640v400q0%2033-23.5%2056.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0%200v-480%20480Z'/%3e%3c/svg%3e",{window:st}=De;function it(s){let e,l,t,r,n,a,i,o,c,p,E,d,S,_,k,B,H,M,m,D,z,R=ke(s[6].url.pathname)+"",le,re,ne,Y,L,oe,he;e=new Oe({props:{service:s[3]}}),r=new $e({}),M=new Ge({props:{routeCheckType:s[4]}});const ue=s[10].default,A=Ne(ue,s,s[9],null);return Y=new Xe({props:{routeCheckType:s[4]}}),{c(){j(e.$$.fragment),l=I(),t=y("div"),j(r.$$.fragment),n=I(),a=y("div"),i=y("img"),c=I(),p=y("a"),E=C("Manage my schemes"),S=I(),_=y("span"),k=C("You are editing: "),B=C(s[5]),H=I(),j(M.$$.fragment),m=I(),D=y("div"),z=y("div"),le=C(R),re=I(),A&&A.c(),ne=I(),j(Y.$$.fragment),this.h()},l(u){G(e.$$.fragment,u),l=V(u),t=w(u,"DIV",{class:!0});var v=b(t);G(r.$$.fragment,v),n=V(v),a=w(v,"DIV",{style:!0});var O=b(a);i=w(O,"IMG",{src:!0,alt:!0,style:!0}),c=V(O),p=w(O,"A",{href:!0});var W=b(p);E=N(W,"Manage my schemes"),W.forEach(h),S=V(O),_=w(O,"SPAN",{class:!0,style:!0});var Z=b(_);k=N(Z,"You are editing: "),B=N(Z,s[5]),Z.forEach(h),O.forEach(h),H=V(v),G(M.$$.fragment,v),v.forEach(h),m=V(u),D=w(u,"DIV",{class:!0});var _e=b(D);z=w(_e,"DIV",{class:!0});var ge=b(z);le=N(ge,R),ge.forEach(h),_e.forEach(h),re=V(u),A&&A.l(u),ne=V(u),G(Y.$$.fragment,u),this.h()},h(){Pe(i.src,o=at)||f(i,"src",o),f(i,"alt","Manage my schemes"),X(i,"vertical-align","middle"),f(p,"href",d=$+"/"+s[2]),f(_,"class","govuk-body"),X(_,"margin-left","8px"),X(a,"margin-bottom","30px"),f(t,"class","govuk-width-container"),f(z,"class","govuk-heading-l"),f(D,"class","govuk-width-container")},m(u,v){J(e,u,v),T(u,l,v),T(u,t,v),J(r,t,null),g(t,n),g(t,a),g(a,i),g(a,c),g(a,p),g(p,E),g(a,S),g(a,_),g(_,k),g(_,B),g(t,H),J(M,t,null),T(u,m,v),T(u,D,v),g(D,z),g(z,le),T(u,re,v),A&&A.m(u,v),T(u,ne,v),J(Y,u,v),L=!0,oe||(he=Ae(st,"storage",s[7]),oe=!0)},p(u,[v]){const O={};v&8&&(O.service=u[3]),e.$set(O),(!L||v&4&&d!==(d=$+"/"+u[2]))&&f(p,"href",d),(!L||v&32)&&Q(B,u[5]);const W={};v&16&&(W.routeCheckType=u[4]),M.$set(W),(!L||v&64)&&R!==(R=ke(u[6].url.pathname)+"")&&Q(le,R),A&&A.p&&(!L||v&512)&&Ie(A,ue,u,u[9],L?Se(ue,u[9],v,null):Ve(u[9]),null);const Z={};v&16&&(Z.routeCheckType=u[4]),Y.$set(Z)},i(u){L||(q(e.$$.fragment,u),q(r.$$.fragment,u),q(M.$$.fragment,u),q(A,u),q(Y.$$.fragment,u),L=!0)},o(u){F(e.$$.fragment,u),F(r.$$.fragment,u),F(M.$$.fragment,u),F(A,u),F(Y.$$.fragment,u),L=!1},d(u){u&&(h(l),h(t),h(m),h(D),h(re),h(ne)),K(e,u),K(r),K(M),A&&A.d(u),K(Y,u),oe=!1,he()}}}function ot(s,e,l){let t,r=P,n=()=>(r(),r=de(S,m=>l(5,t=m)),S),a,i=P,o=()=>(i(),i=de(d,m=>l(11,a=m)),d),c;ce(s,fe,m=>l(6,c=m)),s.$$.on_destroy.push(()=>r()),s.$$.on_destroy.push(()=>i());let{$$slots:p={},$$scope:E}=e,{state:d}=e;o();let{currentFile:S}=e;n();let{files:_}=e,{tool:k}=e,{service:B}=e,{routeCheckType:H}=e;function M(m){let D=_.key(t);if(D==m.key)if(m.newValue)try{console.log(`${D} changed in another tab; applying the data here`),Be(d,a=JSON.parse(m.newValue),a)}catch(z){console.error(`${D} changed in another tab, but the new value is broken: ${z}`)}else window.alert(`You deleted ${t} from another tab. If you continue editing it here, it'll be saved again.`)}return s.$$set=m=>{"state"in m&&o(l(0,d=m.state)),"currentFile"in m&&n(l(1,S=m.currentFile)),"files"in m&&l(8,_=m.files),"tool"in m&&l(2,k=m.tool),"service"in m&&l(3,B=m.service),"routeCheckType"in m&&l(4,H=m.routeCheckType),"$$scope"in m&&l(9,E=m.$$scope)},s.$$.update=()=>{s.$$.dirty&100&&t==""&&Me(c.url.pathname)!=`/${k}`&&(console.log("On a content page without any file loaded; redirecting"),Le(`${$}/${k}`))},[d,S,k,B,H,t,c,M,_,E,p]}class kt extends ee{constructor(e){super(),te(this,e,ot,it,x,{state:0,currentFile:1,files:8,tool:2,service:3,routeCheckType:4})}}export{kt as T};
