import{s as te,D as be,i as S,n as C,f as h,k as he,e as b,c as k,b as v,q as i,K as De,a as V,g as D,h as f,t as H,d as L,j as Q,E as ke,v as ee,O as le,P as se,l as Ne,I as Ae,y as Be,u as Fe,m as Se,o as qe,H as ye,V as He}from"./scheduler.DGwhun8C.js";import{S as re,i as ne,g as we,b as B,f as Ee,t as F,c as G,a as J,m as K,d as U}from"./index.B2vZYn3d.js";import{g as Le}from"./globals.D0QH3NT1.js";import{g as Me}from"./entry.C0GZivLU.js";import{b as $}from"./paths.3g3PeaLq.js";import{p as _e}from"./stores.nULFxwzx.js";import{g as Oe,a as $e,b as ze,c as Te,d as Ye}from"./SelectWithCustom.svelte_svelte_type_style_lang.Dd3SmKKg.js";import{S as Ze,A as je}from"./ServiceHeader.DcYE23Gj.js";import"./index.CzYMcq3r.js";import{e as Ce}from"./each.osbS1YKp.js";function Ie(s,e,r){const t=s.slice();return t[3]=e[r][0],t[4]=e[r][1],t[5]=e[r][2],t}function Pe(s){let e,r=Ce(s[0]),t=[];for(let a=0;a<r.length;a+=1)t[a]=Ve(Ie(s,r,a));return{c(){e=b("ol");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=k(a,"OL",{class:!0});var l=v(e);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(h),this.h()},h(){i(e,"class","svelte-gdvse7")},m(a,l){S(a,e,l);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(a,l){if(l&1){r=Ce(a[0]);let n;for(n=0;n<r.length;n+=1){const o=Ie(a,r,n);t[n]?t[n].p(o,l):(t[n]=Ve(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=r.length}},d(a){a&&h(e),De(t,a)}}}function Ge(s){let e=s[4]+"",r;return{c(){r=H(e)},l(t){r=L(t,e)},m(t,a){S(t,r,a)},p(t,a){a&1&&e!==(e=t[4]+"")&&Q(r,e)},d(t){t&&h(r)}}}function Je(s){let e,r=s[4]+"",t,a;return{c(){e=b("a"),t=H(r),this.h()},l(l){e=k(l,"A",{href:!0,class:!0});var n=v(e);t=L(n,r),n.forEach(h),this.h()},h(){i(e,"href",a=""+($+s[3])),i(e,"class","govuk-link--no-underline hack-no-visited-state svelte-gdvse7"),ke(e,"underline",s[5])},m(l,n){S(l,e,n),f(e,t)},p(l,n){n&1&&r!==(r=l[4]+"")&&Q(t,r),n&1&&a!==(a=""+($+l[3]))&&i(e,"href",a),n&1&&ke(e,"underline",l[5])},d(l){l&&h(e)}}}function Ve(s){let e,r;function t(n,o){return n[3]?Je:Ge}let a=t(s),l=a(s);return{c(){e=b("li"),l.c(),r=V(),this.h()},l(n){e=k(n,"LI",{class:!0});var o=v(e);l.l(o),r=D(o),o.forEach(h),this.h()},h(){i(e,"class","svelte-gdvse7")},m(n,o){S(n,e,o),l.m(e,null),f(e,r)},p(n,o){a===(a=t(n))&&l?l.p(n,o):(l.d(1),l=a(n),l&&(l.c(),l.m(e,r)))},d(n){n&&h(e),l.d()}}}function Ke(s){let e,r=s[0]&&Pe(s);return{c(){r&&r.c(),e=be()},l(t){r&&r.l(t),e=be()},m(t,a){r&&r.m(t,a),S(t,e,a)},p(t,[a]){t[0]?r?r.p(t,a):(r=Pe(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:C,o:C,d(t){t&&h(e),r&&r.d(t)}}}function Ue(s,e,r){let t,a;he(s,_e,n=>r(2,a=n));let{routeCheckType:l}=e;return s.$$set=n=>{"routeCheckType"in n&&r(1,l=n.routeCheckType)},s.$$.update=()=>{s.$$.dirty&6&&r(0,t=Oe(a.url.pathname,l))},[t,l,a]}class Qe extends re{constructor(e){super(),ne(this,e,Ue,Ke,te,{routeCheckType:1})}}function Re(s){let e;return{c(){e=H(" ")},l(r){e=L(r," ")},m(r,t){S(r,e,t)},p:C,i:C,o:C,d(r){r&&h(e)}}}function We(s){let e,r;return e=new ot({props:{href:""+($+s[1][0]),label:s[1][1]}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,a){K(e,t,a),r=!0},p(t,a){const l={};a&2&&(l.href=""+($+t[1][0])),a&2&&(l.label=t[1][1]),e.$set(l)},i(t){r||(F(e.$$.fragment,t),r=!0)},o(t){B(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Xe(s){let e;return{c(){e=H(" ")},l(r){e=L(r," ")},m(r,t){S(r,e,t)},p:C,i:C,o:C,d(r){r&&h(e)}}}function xe(s){let e,r;return e=new lt({props:{href:""+($+s[0][0]),label:s[0][1]}}),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,a){K(e,t,a),r=!0},p(t,a){const l={};a&1&&(l.href=""+($+t[0][0])),a&1&&(l.label=t[0][1]),e.$set(l)},i(t){r||(F(e.$$.fragment,t),r=!0)},o(t){B(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function et(s){let e,r,t,a,l,n,o;const u=[We,Re],c=[];function w(_,p){return _[1]?0:1}r=w(s),t=c[r]=u[r](s);const E=[xe,Xe],d=[];function N(_,p){return _[0]?0:1}return l=N(s),n=d[l]=E[l](s),{c(){e=b("div"),t.c(),a=V(),n.c(),this.h()},l(_){e=k(_,"DIV",{style:!0});var p=v(e);t.l(p),a=D(p),n.l(p),p.forEach(h),this.h()},h(){ee(e,"display","flex"),ee(e,"justify-content","space-between")},m(_,p){S(_,e,p),c[r].m(e,null),f(e,a),d[l].m(e,null),o=!0},p(_,[p]){let T=r;r=w(_),r===T?c[r].p(_,p):(we(),B(c[T],1,1,()=>{c[T]=null}),Ee(),t=c[r],t?t.p(_,p):(t=c[r]=u[r](_),t.c()),F(t,1),t.m(e,a));let q=l;l=N(_),l===q?d[l].p(_,p):(we(),B(d[q],1,1,()=>{d[q]=null}),Ee(),n=d[l],n?n.p(_,p):(n=d[l]=E[l](_),n.c()),F(n,1),n.m(e,null))},i(_){o||(F(t),F(n),o=!0)},o(_){B(t),B(n),o=!1},d(_){_&&h(e),c[r].d(),d[l].d()}}}function tt(s,e,r){let t,a,l,n;he(s,_e,u=>r(4,n=u));let{routeCheckType:o}=e;return s.$$set=u=>{"routeCheckType"in u&&r(2,o=u.routeCheckType)},s.$$.update=()=>{s.$$.dirty&16&&r(3,t=n.url.pathname),s.$$.dirty&12&&r(1,a=$e(t,o)),s.$$.dirty&12&&r(0,l=ze(t,o))},[l,a,o,t,n]}class rt extends re{constructor(e){super(),ne(this,e,tt,et,te,{routeCheckType:2})}}function nt(s){let e,r,t,a,l,n,o;return{c(){e=b("div"),r=b("a"),t=b("span"),a=H(s[1]),l=V(),n=le("svg"),o=le("path"),this.h()},l(u){e=k(u,"DIV",{class:!0});var c=v(e);r=k(c,"A",{class:!0,href:!0,rel:!0});var w=v(r);t=k(w,"SPAN",{class:!0});var E=v(t);a=L(E,s[1]),E.forEach(h),l=D(w),n=se(w,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var d=v(n);o=se(d,"path",{d:!0}),v(o).forEach(h),d.forEach(h),w.forEach(h),c.forEach(h),this.h()},h(){i(t,"class","govuk-pagination__link-title"),i(o,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),i(n,"class","govuk-pagination__icon govuk-pagination__icon--next"),i(n,"xmlns","http://www.w3.org/2000/svg"),i(n,"height","13"),i(n,"width","15"),i(n,"aria-hidden","true"),i(n,"focusable","false"),i(n,"viewBox","0 0 15 13"),i(r,"class","govuk-link govuk-pagination__link"),i(r,"href",s[0]),i(r,"rel","next"),i(e,"class","govuk-pagination__next")},m(u,c){S(u,e,c),f(e,r),f(r,t),f(t,a),f(r,l),f(r,n),f(n,o)},p(u,[c]){c&2&&Q(a,u[1]),c&1&&i(r,"href",u[0])},i:C,o:C,d(u){u&&h(e)}}}function at(s,e,r){let{href:t}=e,{label:a}=e;return s.$$set=l=>{"href"in l&&r(0,t=l.href),"label"in l&&r(1,a=l.label)},[t,a]}class lt extends re{constructor(e){super(),ne(this,e,at,nt,te,{href:0,label:1})}}function st(s){let e,r,t,a,l,n,o;return{c(){e=b("div"),r=b("a"),t=le("svg"),a=le("path"),l=V(),n=b("span"),o=H(s[1]),this.h()},l(u){e=k(u,"DIV",{class:!0});var c=v(e);r=k(c,"A",{class:!0,href:!0,rel:!0});var w=v(r);t=se(w,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var E=v(t);a=se(E,"path",{d:!0}),v(a).forEach(h),E.forEach(h),l=D(w),n=k(w,"SPAN",{class:!0});var d=v(n);o=L(d,s[1]),d.forEach(h),w.forEach(h),c.forEach(h),this.h()},h(){i(a,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),i(t,"class","govuk-pagination__icon govuk-pagination__icon--prev"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"height","13"),i(t,"width","15"),i(t,"aria-hidden","true"),i(t,"focusable","false"),i(t,"viewBox","0 0 15 13"),i(n,"class","govuk-pagination__link-title"),i(r,"class","govuk-link govuk-pagination__link"),i(r,"href",s[0]),i(r,"rel","prev"),i(e,"class","govuk-pagination__prev")},m(u,c){S(u,e,c),f(e,r),f(r,t),f(t,a),f(r,l),f(r,n),f(n,o)},p(u,[c]){c&2&&Q(o,u[1]),c&1&&i(r,"href",u[0])},i:C,o:C,d(u){u&&h(e)}}}function it(s,e,r){let{href:t}=e,{label:a}=e;return s.$$set=l=>{"href"in l&&r(0,t=l.href),"label"in l&&r(1,a=l.label)},[t,a]}class ot extends re{constructor(e){super(),ne(this,e,it,st,te,{href:0,label:1})}}const ut="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h240l80%2080h320q33%200%2056.5%2023.5T880-640v400q0%2033-23.5%2056.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0%200v-480%20480Z'/%3e%3c/svg%3e",{window:ct}=Le;function ft(s){let e,r,t,a,l,n,o,u,c,w,E,d,N,_,p,T,q,Y,m,P,R,Z,W,X=Te(s[6].url.pathname)+"",ae,ie,oe,j,z,M,ue,ge;a=new Ze({props:{service:s[3]}}),n=new je({}),P=new Qe({props:{routeCheckType:s[4]}});const ce=s[10].default,I=Ne(ce,s,s[9],null);return z=new rt({props:{routeCheckType:s[4]}}),{c(){e=b("div"),r=b("div"),t=b("div"),G(a.$$.fragment),l=V(),G(n.$$.fragment),o=V(),u=b("div"),c=b("img"),E=V(),d=b("a"),N=H("Manage my files"),p=V(),T=b("span"),q=H("You are editing: "),Y=H(s[5]),m=V(),G(P.$$.fragment),R=V(),Z=b("div"),W=b("h1"),ae=H(X),ie=V(),I&&I.c(),oe=V(),j=b("div"),G(z.$$.fragment),this.h()},l(g){e=k(g,"DIV",{class:!0});var y=v(e);r=k(y,"DIV",{class:!0});var x=v(r);t=k(x,"DIV",{class:!0});var A=v(t);J(a.$$.fragment,A),l=D(A),J(n.$$.fragment,A),o=D(A),u=k(A,"DIV",{style:!0});var O=v(u);c=k(O,"IMG",{src:!0,alt:!0,style:!0}),E=D(O),d=k(O,"A",{href:!0});var de=v(d);N=L(de,"Manage my files"),de.forEach(h),p=D(O),T=k(O,"SPAN",{class:!0,style:!0});var fe=v(T);q=L(fe,"You are editing: "),Y=L(fe,s[5]),fe.forEach(h),O.forEach(h),m=D(A),J(P.$$.fragment,A),A.forEach(h),x.forEach(h),R=D(y),Z=k(y,"DIV",{class:!0});var me=v(Z);W=k(me,"H1",{});var ve=v(W);ae=L(ve,X),ve.forEach(h),me.forEach(h),ie=D(y),I&&I.l(y),oe=D(y),j=k(y,"DIV",{class:!0});var pe=v(j);J(z.$$.fragment,pe),pe.forEach(h),y.forEach(h),this.h()},h(){Ae(c.src,w=ut)||i(c,"src",w),i(c,"alt",""),ee(c,"vertical-align","middle"),i(d,"href",_=$+"/"+s[2]),i(T,"class","govuk-body"),ee(T,"margin-left","8px"),ee(u,"margin-bottom","30px"),i(t,"class","do-not-print"),i(r,"class","govuk-width-container"),i(Z,"class","govuk-width-container do-not-print"),i(j,"class","do-not-print"),i(e,"class","tool-layout")},m(g,y){S(g,e,y),f(e,r),f(r,t),K(a,t,null),f(t,l),K(n,t,null),f(t,o),f(t,u),f(u,c),f(u,E),f(u,d),f(d,N),f(u,p),f(u,T),f(T,q),f(T,Y),f(t,m),K(P,t,null),f(e,R),f(e,Z),f(Z,W),f(W,ae),f(e,ie),I&&I.m(e,null),f(e,oe),f(e,j),K(z,j,null),M=!0,ue||(ge=Be(ct,"storage",s[7]),ue=!0)},p(g,[y]){const x={};y&8&&(x.service=g[3]),a.$set(x),(!M||y&4&&_!==(_=$+"/"+g[2]))&&i(d,"href",_),(!M||y&32)&&Q(Y,g[5]);const A={};y&16&&(A.routeCheckType=g[4]),P.$set(A),(!M||y&64)&&X!==(X=Te(g[6].url.pathname)+"")&&Q(ae,X),I&&I.p&&(!M||y&512)&&Fe(I,ce,g,g[9],M?qe(ce,g[9],y,null):Se(g[9]),null);const O={};y&16&&(O.routeCheckType=g[4]),z.$set(O)},i(g){M||(F(a.$$.fragment,g),F(n.$$.fragment,g),F(P.$$.fragment,g),F(I,g),F(z.$$.fragment,g),M=!0)},o(g){B(a.$$.fragment,g),B(n.$$.fragment,g),B(P.$$.fragment,g),B(I,g),B(z.$$.fragment,g),M=!1},d(g){g&&h(e),U(a),U(n),U(P),I&&I.d(g),U(z),ue=!1,ge()}}}function ht(s,e,r){let t,a=C,l=()=>(a(),a=ye(N,m=>r(5,t=m)),N),n,o=C,u=()=>(o(),o=ye(d,m=>r(11,n=m)),d),c;he(s,_e,m=>r(6,c=m)),s.$$.on_destroy.push(()=>a()),s.$$.on_destroy.push(()=>o());let{$$slots:w={},$$scope:E}=e,{state:d}=e;u();let{currentFile:N}=e;l();let{files:_}=e,{tool:p}=e,{service:T}=e,{routeCheckType:q}=e;function Y(m){let P=_.key(t);if(P==m.key)if(m.newValue)try{console.log(`${P} changed in another tab; applying the data here`),He(d,n=JSON.parse(m.newValue),n)}catch(R){console.error(`${P} changed in another tab, but the new value is broken: ${R}`)}else window.alert(`You deleted ${t} from another tab. If you continue editing it here, it'll be saved again.`)}return s.$$set=m=>{"state"in m&&u(r(0,d=m.state)),"currentFile"in m&&l(r(1,N=m.currentFile)),"files"in m&&r(8,_=m.files),"tool"in m&&r(2,p=m.tool),"service"in m&&r(3,T=m.service),"routeCheckType"in m&&r(4,q=m.routeCheckType),"$$scope"in m&&r(9,E=m.$$scope)},s.$$.update=()=>{s.$$.dirty&100&&t==""&&Ye(c.url.pathname)!=`/${p}`&&(console.log("On a content page without any file loaded; redirecting"),Me(`${$}/${p}`))},[d,N,p,T,q,t,c,Y,_,E,w]}class Et extends re{constructor(e){super(),ne(this,e,ht,ft,te,{state:0,currentFile:1,files:8,tool:2,service:3,routeCheckType:4})}}export{Et as T};
