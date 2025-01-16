import{s as X,D as _e,i as T,n as C,f as c,k as oe,e as w,c as y,b as k,q as u,K as Te,a as I,g as N,h as m,t as H,d as L,j as U,E as ge,v as W,O as ne,P as ae,l as Ee,I as Ce,y as Pe,u as Ie,m as Ne,o as Ae,H as me,V as Ve}from"./scheduler.DGwhun8C.js";import{S as x,i as ee,g as ve,b as F,f as de,t as S,c as j,a as G,m as J,d as K}from"./index.B2vZYn3d.js";import{g as Be}from"./globals.D0QH3NT1.js";import{b as $}from"./paths.C8wqnciO.js";import{g as Fe,a as Se,b as qe,c as pe,d as De}from"./index.5ca6cCK0.js";import{p as ue}from"./stores.CsZJJSqd.js";import{g as He}from"./entry.D76FyFwv.js";import{S as Le,A as Me}from"./ServiceHeader.DY61so46.js";import"./index.zxIwAqHz.js";import{e as be}from"./each.osbS1YKp.js";function ke(s,t,r){const e=s.slice();return e[3]=t[r][0],e[4]=t[r][1],e[5]=t[r][2],e}function we(s){let t,r=be(s[0]),e=[];for(let n=0;n<r.length;n+=1)e[n]=ye(ke(s,r,n));return{c(){t=w("ol");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=y(n,"OL",{class:!0});var a=k(t);for(let l=0;l<e.length;l+=1)e[l].l(a);a.forEach(c),this.h()},h(){u(t,"class","svelte-gdvse7")},m(n,a){T(n,t,a);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(n,a){if(a&1){r=be(n[0]);let l;for(l=0;l<r.length;l+=1){const o=ke(n,r,l);e[l]?e[l].p(o,a):(e[l]=ye(o),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=r.length}},d(n){n&&c(t),Te(e,n)}}}function Oe(s){let t=s[4]+"",r;return{c(){r=H(t)},l(e){r=L(e,t)},m(e,n){T(e,r,n)},p(e,n){n&1&&t!==(t=e[4]+"")&&U(r,t)},d(e){e&&c(r)}}}function $e(s){let t,r=s[4]+"",e,n;return{c(){t=w("a"),e=H(r),this.h()},l(a){t=y(a,"A",{href:!0,class:!0});var l=k(t);e=L(l,r),l.forEach(c),this.h()},h(){u(t,"href",n=""+($+s[3])),u(t,"class","govuk-link--no-underline hack-no-visited-state svelte-gdvse7"),ge(t,"underline",s[5])},m(a,l){T(a,t,l),m(t,e)},p(a,l){l&1&&r!==(r=a[4]+"")&&U(e,r),l&1&&n!==(n=""+($+a[3]))&&u(t,"href",n),l&1&&ge(t,"underline",a[5])},d(a){a&&c(t)}}}function ye(s){let t,r;function e(l,o){return l[3]?$e:Oe}let n=e(s),a=n(s);return{c(){t=w("li"),a.c(),r=I(),this.h()},l(l){t=y(l,"LI",{class:!0});var o=k(t);a.l(o),r=N(o),o.forEach(c),this.h()},h(){u(t,"class","svelte-gdvse7")},m(l,o){T(l,t,o),a.m(t,null),m(t,r)},p(l,o){n===(n=e(l))&&a?a.p(l,o):(a.d(1),a=n(l),a&&(a.c(),a.m(t,r)))},d(l){l&&c(t),a.d()}}}function ze(s){let t,r=s[0]&&we(s);return{c(){r&&r.c(),t=_e()},l(e){r&&r.l(e),t=_e()},m(e,n){r&&r.m(e,n),T(e,t,n)},p(e,[n]){e[0]?r?r.p(e,n):(r=we(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i:C,o:C,d(e){e&&c(t),r&&r.d(e)}}}function Ye(s,t,r){let e,n;oe(s,ue,l=>r(2,n=l));let{routeCheckType:a}=t;return s.$$set=l=>{"routeCheckType"in l&&r(1,a=l.routeCheckType)},s.$$.update=()=>{s.$$.dirty&6&&r(0,e=Fe(n.url.pathname,a))},[e,a,n]}class Ze extends x{constructor(t){super(),ee(this,t,Ye,ze,X,{routeCheckType:1})}}function je(s){let t;return{c(){t=H(" ")},l(r){t=L(r," ")},m(r,e){T(r,t,e)},p:C,i:C,o:C,d(r){r&&c(t)}}}function Ge(s){let t,r;return t=new rt({props:{href:""+($+s[1][0]),label:s[1][1]}}),{c(){j(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){J(t,e,n),r=!0},p(e,n){const a={};n&2&&(a.href=""+($+e[1][0])),n&2&&(a.label=e[1][1]),t.$set(a)},i(e){r||(S(t.$$.fragment,e),r=!0)},o(e){F(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function Je(s){let t;return{c(){t=H(" ")},l(r){t=L(r," ")},m(r,e){T(r,t,e)},p:C,i:C,o:C,d(r){r&&c(t)}}}function Ke(s){let t,r;return t=new xe({props:{href:""+($+s[0][0]),label:s[0][1]}}),{c(){j(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,n){J(t,e,n),r=!0},p(e,n){const a={};n&1&&(a.href=""+($+e[0][0])),n&1&&(a.label=e[0][1]),t.$set(a)},i(e){r||(S(t.$$.fragment,e),r=!0)},o(e){F(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function Ue(s){let t,r,e,n,a,l,o;const _=[Ge,je],h=[];function p(f,b){return f[1]?0:1}r=p(s),e=h[r]=_[r](s);const E=[Ke,Je],v=[];function A(f,b){return f[0]?0:1}return a=A(s),l=v[a]=E[a](s),{c(){t=w("div"),e.c(),n=I(),l.c(),this.h()},l(f){t=y(f,"DIV",{style:!0});var b=k(t);e.l(b),n=N(b),l.l(b),b.forEach(c),this.h()},h(){W(t,"display","flex"),W(t,"justify-content","space-between")},m(f,b){T(f,t,b),h[r].m(t,null),m(t,n),v[a].m(t,null),o=!0},p(f,[b]){let V=r;r=p(f),r===V?h[r].p(f,b):(ve(),F(h[V],1,1,()=>{h[V]=null}),de(),e=h[r],e?e.p(f,b):(e=h[r]=_[r](f),e.c()),S(e,1),e.m(t,n));let q=a;a=A(f),a===q?v[a].p(f,b):(ve(),F(v[q],1,1,()=>{v[q]=null}),de(),l=v[a],l?l.p(f,b):(l=v[a]=E[a](f),l.c()),S(l,1),l.m(t,null))},i(f){o||(S(e),S(l),o=!0)},o(f){F(e),F(l),o=!1},d(f){f&&c(t),h[r].d(),v[a].d()}}}function Qe(s,t,r){let e,n,a,l;oe(s,ue,_=>r(4,l=_));let{routeCheckType:o}=t;return s.$$set=_=>{"routeCheckType"in _&&r(2,o=_.routeCheckType)},s.$$.update=()=>{s.$$.dirty&16&&r(3,e=l.url.pathname),s.$$.dirty&12&&r(1,n=Se(e,o)),s.$$.dirty&12&&r(0,a=qe(e,o))},[a,n,o,e,l]}class Re extends x{constructor(t){super(),ee(this,t,Qe,Ue,X,{routeCheckType:2})}}function We(s){let t,r,e,n,a,l,o;return{c(){t=w("div"),r=w("a"),e=w("span"),n=H(s[1]),a=I(),l=ne("svg"),o=ne("path"),this.h()},l(_){t=y(_,"DIV",{class:!0});var h=k(t);r=y(h,"A",{class:!0,href:!0,rel:!0});var p=k(r);e=y(p,"SPAN",{class:!0});var E=k(e);n=L(E,s[1]),E.forEach(c),a=N(p),l=ae(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var v=k(l);o=ae(v,"path",{d:!0}),k(o).forEach(c),v.forEach(c),p.forEach(c),h.forEach(c),this.h()},h(){u(e,"class","govuk-pagination__link-title"),u(o,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),u(l,"class","govuk-pagination__icon govuk-pagination__icon--next"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"height","13"),u(l,"width","15"),u(l,"aria-hidden","true"),u(l,"focusable","false"),u(l,"viewBox","0 0 15 13"),u(r,"class","govuk-link govuk-pagination__link"),u(r,"href",s[0]),u(r,"rel","next"),u(t,"class","govuk-pagination__next")},m(_,h){T(_,t,h),m(t,r),m(r,e),m(e,n),m(r,a),m(r,l),m(l,o)},p(_,[h]){h&2&&U(n,_[1]),h&1&&u(r,"href",_[0])},i:C,o:C,d(_){_&&c(t)}}}function Xe(s,t,r){let{href:e}=t,{label:n}=t;return s.$$set=a=>{"href"in a&&r(0,e=a.href),"label"in a&&r(1,n=a.label)},[e,n]}class xe extends x{constructor(t){super(),ee(this,t,Xe,We,X,{href:0,label:1})}}function et(s){let t,r,e,n,a,l,o;return{c(){t=w("div"),r=w("a"),e=ne("svg"),n=ne("path"),a=I(),l=w("span"),o=H(s[1]),this.h()},l(_){t=y(_,"DIV",{class:!0});var h=k(t);r=y(h,"A",{class:!0,href:!0,rel:!0});var p=k(r);e=ae(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var E=k(e);n=ae(E,"path",{d:!0}),k(n).forEach(c),E.forEach(c),a=N(p),l=y(p,"SPAN",{class:!0});var v=k(l);o=L(v,s[1]),v.forEach(c),p.forEach(c),h.forEach(c),this.h()},h(){u(n,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),u(e,"class","govuk-pagination__icon govuk-pagination__icon--prev"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"height","13"),u(e,"width","15"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"viewBox","0 0 15 13"),u(l,"class","govuk-pagination__link-title"),u(r,"class","govuk-link govuk-pagination__link"),u(r,"href",s[0]),u(r,"rel","prev"),u(t,"class","govuk-pagination__prev")},m(_,h){T(_,t,h),m(t,r),m(r,e),m(e,n),m(r,a),m(r,l),m(l,o)},p(_,[h]){h&2&&U(o,_[1]),h&1&&u(r,"href",_[0])},i:C,o:C,d(_){_&&c(t)}}}function tt(s,t,r){let{href:e}=t,{label:n}=t;return s.$$set=a=>{"href"in a&&r(0,e=a.href),"label"in a&&r(1,n=a.label)},[e,n]}class rt extends x{constructor(t){super(),ee(this,t,tt,et,X,{href:0,label:1})}}const lt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h240l80%2080h320q33%200%2056.5%2023.5T880-640v400q0%2033-23.5%2056.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0%200v-480%20480Z'/%3e%3c/svg%3e",{window:nt}=Be;function at(s){let t,r,e,n,a,l,o,_,h,p,E,v,A,f,b,V,q,D,g,B,Y,Q=pe(s[6].url.pathname)+"",te,re,le,z,M,se,ce;t=new Le({props:{service:s[3]}}),n=new Me({}),D=new Ze({props:{routeCheckType:s[4]}});const ie=s[10].default,P=Ee(ie,s,s[9],null);return z=new Re({props:{routeCheckType:s[4]}}),{c(){j(t.$$.fragment),r=I(),e=w("div"),j(n.$$.fragment),a=I(),l=w("div"),o=w("img"),h=I(),p=w("a"),E=H("Manage my schemes"),A=I(),f=w("span"),b=H("You are editing: "),V=H(s[5]),q=I(),j(D.$$.fragment),g=I(),B=w("div"),Y=w("h1"),te=H(Q),re=I(),P&&P.c(),le=I(),j(z.$$.fragment),this.h()},l(i){G(t.$$.fragment,i),r=N(i),e=y(i,"DIV",{class:!0});var d=k(e);G(n.$$.fragment,d),a=N(d),l=y(d,"DIV",{style:!0});var O=k(l);o=y(O,"IMG",{src:!0,alt:!0,style:!0}),h=N(O),p=y(O,"A",{href:!0});var R=k(p);E=L(R,"Manage my schemes"),R.forEach(c),A=N(O),f=y(O,"SPAN",{class:!0,style:!0});var Z=k(f);b=L(Z,"You are editing: "),V=L(Z,s[5]),Z.forEach(c),O.forEach(c),q=N(d),G(D.$$.fragment,d),d.forEach(c),g=N(i),B=y(i,"DIV",{class:!0});var fe=k(B);Y=y(fe,"H1",{});var he=k(Y);te=L(he,Q),he.forEach(c),fe.forEach(c),re=N(i),P&&P.l(i),le=N(i),G(z.$$.fragment,i),this.h()},h(){Ce(o.src,_=lt)||u(o,"src",_),u(o,"alt",""),W(o,"vertical-align","middle"),u(p,"href",v=$+"/"+s[2]),u(f,"class","govuk-body"),W(f,"margin-left","8px"),W(l,"margin-bottom","30px"),u(e,"class","govuk-width-container"),u(B,"class","govuk-width-container")},m(i,d){J(t,i,d),T(i,r,d),T(i,e,d),J(n,e,null),m(e,a),m(e,l),m(l,o),m(l,h),m(l,p),m(p,E),m(l,A),m(l,f),m(f,b),m(f,V),m(e,q),J(D,e,null),T(i,g,d),T(i,B,d),m(B,Y),m(Y,te),T(i,re,d),P&&P.m(i,d),T(i,le,d),J(z,i,d),M=!0,se||(ce=Pe(nt,"storage",s[7]),se=!0)},p(i,[d]){const O={};d&8&&(O.service=i[3]),t.$set(O),(!M||d&4&&v!==(v=$+"/"+i[2]))&&u(p,"href",v),(!M||d&32)&&U(V,i[5]);const R={};d&16&&(R.routeCheckType=i[4]),D.$set(R),(!M||d&64)&&Q!==(Q=pe(i[6].url.pathname)+"")&&U(te,Q),P&&P.p&&(!M||d&512)&&Ie(P,ie,i,i[9],M?Ae(ie,i[9],d,null):Ne(i[9]),null);const Z={};d&16&&(Z.routeCheckType=i[4]),z.$set(Z)},i(i){M||(S(t.$$.fragment,i),S(n.$$.fragment,i),S(D.$$.fragment,i),S(P,i),S(z.$$.fragment,i),M=!0)},o(i){F(t.$$.fragment,i),F(n.$$.fragment,i),F(D.$$.fragment,i),F(P,i),F(z.$$.fragment,i),M=!1},d(i){i&&(c(r),c(e),c(g),c(B),c(re),c(le)),K(t,i),K(n),K(D),P&&P.d(i),K(z,i),se=!1,ce()}}}function st(s,t,r){let e,n=C,a=()=>(n(),n=me(A,g=>r(5,e=g)),A),l,o=C,_=()=>(o(),o=me(v,g=>r(11,l=g)),v),h;oe(s,ue,g=>r(6,h=g)),s.$$.on_destroy.push(()=>n()),s.$$.on_destroy.push(()=>o());let{$$slots:p={},$$scope:E}=t,{state:v}=t;_();let{currentFile:A}=t;a();let{files:f}=t,{tool:b}=t,{service:V}=t,{routeCheckType:q}=t;function D(g){let B=f.key(e);if(B==g.key)if(g.newValue)try{console.log(`${B} changed in another tab; applying the data here`),Ve(v,l=JSON.parse(g.newValue),l)}catch(Y){console.error(`${B} changed in another tab, but the new value is broken: ${Y}`)}else window.alert(`You deleted ${e} from another tab. If you continue editing it here, it'll be saved again.`)}return s.$$set=g=>{"state"in g&&_(r(0,v=g.state)),"currentFile"in g&&a(r(1,A=g.currentFile)),"files"in g&&r(8,f=g.files),"tool"in g&&r(2,b=g.tool),"service"in g&&r(3,V=g.service),"routeCheckType"in g&&r(4,q=g.routeCheckType),"$$scope"in g&&r(9,E=g.$$scope)},s.$$.update=()=>{s.$$.dirty&100&&e==""&&De(h.url.pathname)!=`/${b}`&&(console.log("On a content page without any file loaded; redirecting"),He(`${$}/${b}`))},[v,A,b,V,q,e,h,D,f,E,p]}class dt extends x{constructor(t){super(),ee(this,t,st,at,X,{state:0,currentFile:1,files:8,tool:2,service:3,routeCheckType:4})}}export{dt as T};
