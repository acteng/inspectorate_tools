import{s as x,J as me,i as T,n as C,f as h,k as ue,e as w,c as y,b as k,q as f,B as Te,t as M,a as N,d as H,g as V,h as m,j as X,v as W,L as ne,M as se,l as Ce,Y as Pe,z as Ie,u as Ne,m as Ve,o as Ae,ab as ve,V as Be}from"./scheduler.B5FfXhnD.js";import{S as ee,i as te,g as de,b as F,f as pe,t as S,c as U,a as Y,m as $,d as G}from"./index.VeCIHQiF.js";import{g as Fe}from"./globals.D0QH3NT1.js";import{b as z}from"./paths.D4qccJYz.js";import{g as Se,a as qe,b as De,c as be,d as Le}from"./index.DmPom1Lc.js";import{p as fe}from"./stores.Cd-JbSDn.js";import{g as Me}from"./entry.BR6rOwML.js";import{S as He,A as ze}from"./ServiceHeader.DYohSgCe.js";/* empty css                                                  */import{e as ke}from"./each.XauKQHIb.js";function we(n,r,t){const e=n.slice();return e[3]=r[t],e}function ye(n){let r,t=ke(n[0]),e=[];for(let a=0;a<t.length;a+=1)e[a]=Ee(we(n,t,a));return{c(){r=w("ol");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){r=y(a,"OL",{class:!0});var s=k(r);for(let l=0;l<e.length;l+=1)e[l].l(s);s.forEach(h),this.h()},h(){f(r,"class","svelte-7lelu8")},m(a,s){T(a,r,s);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(r,null)},p(a,s){if(s&1){t=ke(a[0]);let l;for(l=0;l<t.length;l+=1){const o=we(a,t,l);e[l]?e[l].p(o,s):(e[l]=Ee(o),e[l].c(),e[l].m(r,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=t.length}},d(a){a&&h(r),Te(e,a)}}}function Ee(n){let r,t,e=n[3][1]+"",a,s,l;return{c(){r=w("li"),t=w("a"),a=M(e),l=N(),this.h()},l(o){r=y(o,"LI",{class:!0});var u=k(r);t=y(u,"A",{href:!0});var c=k(t);a=H(c,e),c.forEach(h),l=V(u),u.forEach(h),this.h()},h(){f(t,"href",s=""+(z+n[3][0])),f(r,"class","svelte-7lelu8")},m(o,u){T(o,r,u),m(r,t),m(t,a),m(r,l)},p(o,u){u&1&&e!==(e=o[3][1]+"")&&X(a,e),u&1&&s!==(s=""+(z+o[3][0]))&&f(t,"href",s)},d(o){o&&h(r)}}}function Oe(n){let r,t=n[0]&&ye(n);return{c(){t&&t.c(),r=me()},l(e){t&&t.l(e),r=me()},m(e,a){t&&t.m(e,a),T(e,r,a)},p(e,[a]){e[0]?t?t.p(e,a):(t=ye(e),t.c(),t.m(r.parentNode,r)):t&&(t.d(1),t=null)},i:C,o:C,d(e){e&&h(r),t&&t.d(e)}}}function Ze(n,r,t){let e,a;ue(n,fe,l=>t(2,a=l));let{routeCheckType:s}=r;return n.$$set=l=>{"routeCheckType"in l&&t(1,s=l.routeCheckType)},n.$$.update=()=>{n.$$.dirty&6&&t(0,e=Se(a.url.pathname,s))},[e,s,a]}class je extends ee{constructor(r){super(),te(this,r,Ze,Oe,x,{routeCheckType:1})}}function Je(n){let r;return{c(){r=M(" ")},l(t){r=H(t," ")},m(t,e){T(t,r,e)},p:C,i:C,o:C,d(t){t&&h(r)}}}function Ue(n){let r,t;return r=new tt({props:{href:""+(z+n[1][0]),label:n[1][1]}}),{c(){U(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,a){$(r,e,a),t=!0},p(e,a){const s={};a&2&&(s.href=""+(z+e[1][0])),a&2&&(s.label=e[1][1]),r.$set(s)},i(e){t||(S(r.$$.fragment,e),t=!0)},o(e){F(r.$$.fragment,e),t=!1},d(e){G(r,e)}}}function Ye(n){let r;return{c(){r=M(" ")},l(t){r=H(t," ")},m(t,e){T(t,r,e)},p:C,i:C,o:C,d(t){t&&h(r)}}}function $e(n){let r,t;return r=new Xe({props:{href:""+(z+n[0][0]),label:n[0][1]}}),{c(){U(r.$$.fragment)},l(e){Y(r.$$.fragment,e)},m(e,a){$(r,e,a),t=!0},p(e,a){const s={};a&1&&(s.href=""+(z+e[0][0])),a&1&&(s.label=e[0][1]),r.$set(s)},i(e){t||(S(r.$$.fragment,e),t=!0)},o(e){F(r.$$.fragment,e),t=!1},d(e){G(r,e)}}}function Ge(n){let r,t,e,a,s,l,o;const u=[Ue,Je],c=[];function p(_,b){return _[1]?0:1}t=p(n),e=c[t]=u[t](n);const E=[$e,Ye],v=[];function A(_,b){return _[0]?0:1}return s=A(n),l=v[s]=E[s](n),{c(){r=w("div"),e.c(),a=N(),l.c(),this.h()},l(_){r=y(_,"DIV",{style:!0});var b=k(r);e.l(b),a=V(b),l.l(b),b.forEach(h),this.h()},h(){W(r,"display","flex"),W(r,"justify-content","space-between")},m(_,b){T(_,r,b),c[t].m(r,null),m(r,a),v[s].m(r,null),o=!0},p(_,[b]){let I=t;t=p(_),t===I?c[t].p(_,b):(de(),F(c[I],1,1,()=>{c[I]=null}),pe(),e=c[t],e?e.p(_,b):(e=c[t]=u[t](_),e.c()),S(e,1),e.m(r,a));let B=s;s=A(_),s===B?v[s].p(_,b):(de(),F(v[B],1,1,()=>{v[B]=null}),pe(),l=v[s],l?l.p(_,b):(l=v[s]=E[s](_),l.c()),S(l,1),l.m(r,null))},i(_){o||(S(e),S(l),o=!0)},o(_){F(e),F(l),o=!1},d(_){_&&h(r),c[t].d(),v[s].d()}}}function Ke(n,r,t){let e,a,s,l;ue(n,fe,u=>t(4,l=u));let{routeCheckType:o}=r;return n.$$set=u=>{"routeCheckType"in u&&t(2,o=u.routeCheckType)},n.$$.update=()=>{n.$$.dirty&16&&t(3,e=l.url.pathname),n.$$.dirty&12&&t(1,a=qe(e,o)),n.$$.dirty&12&&t(0,s=De(e,o))},[s,a,o,e,l]}class Qe extends ee{constructor(r){super(),te(this,r,Ke,Ge,x,{routeCheckType:2})}}function Re(n){let r,t,e,a,s,l,o;return{c(){r=w("div"),t=w("a"),e=w("span"),a=M(n[1]),s=N(),l=ne("svg"),o=ne("path"),this.h()},l(u){r=y(u,"DIV",{class:!0});var c=k(r);t=y(c,"A",{class:!0,href:!0,rel:!0});var p=k(t);e=y(p,"SPAN",{class:!0});var E=k(e);a=H(E,n[1]),E.forEach(h),s=V(p),l=se(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var v=k(l);o=se(v,"path",{d:!0}),k(o).forEach(h),v.forEach(h),p.forEach(h),c.forEach(h),this.h()},h(){f(e,"class","govuk-pagination__link-title"),f(o,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),f(l,"class","govuk-pagination__icon govuk-pagination__icon--next"),f(l,"xmlns","http://www.w3.org/2000/svg"),f(l,"height","13"),f(l,"width","15"),f(l,"aria-hidden","true"),f(l,"focusable","false"),f(l,"viewBox","0 0 15 13"),f(t,"class","govuk-link govuk-pagination__link"),f(t,"href",n[0]),f(t,"rel","next"),f(r,"class","govuk-pagination__next")},m(u,c){T(u,r,c),m(r,t),m(t,e),m(e,a),m(t,s),m(t,l),m(l,o)},p(u,[c]){c&2&&X(a,u[1]),c&1&&f(t,"href",u[0])},i:C,o:C,d(u){u&&h(r)}}}function We(n,r,t){let{href:e}=r,{label:a}=r;return n.$$set=s=>{"href"in s&&t(0,e=s.href),"label"in s&&t(1,a=s.label)},[e,a]}class Xe extends ee{constructor(r){super(),te(this,r,We,Re,x,{href:0,label:1})}}function xe(n){let r,t,e,a,s,l,o;return{c(){r=w("div"),t=w("a"),e=ne("svg"),a=ne("path"),s=N(),l=w("span"),o=M(n[1]),this.h()},l(u){r=y(u,"DIV",{class:!0});var c=k(r);t=y(c,"A",{class:!0,href:!0,rel:!0});var p=k(t);e=se(p,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var E=k(e);a=se(E,"path",{d:!0}),k(a).forEach(h),E.forEach(h),s=V(p),l=y(p,"SPAN",{class:!0});var v=k(l);o=H(v,n[1]),v.forEach(h),p.forEach(h),c.forEach(h),this.h()},h(){f(a,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),f(e,"class","govuk-pagination__icon govuk-pagination__icon--prev"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"height","13"),f(e,"width","15"),f(e,"aria-hidden","true"),f(e,"focusable","false"),f(e,"viewBox","0 0 15 13"),f(l,"class","govuk-pagination__link-title"),f(t,"class","govuk-link govuk-pagination__link"),f(t,"href",n[0]),f(t,"rel","prev"),f(r,"class","govuk-pagination__prev")},m(u,c){T(u,r,c),m(r,t),m(t,e),m(e,a),m(t,s),m(t,l),m(l,o)},p(u,[c]){c&2&&X(o,u[1]),c&1&&f(t,"href",u[0])},i:C,o:C,d(u){u&&h(r)}}}function et(n,r,t){let{href:e}=r,{label:a}=r;return n.$$set=s=>{"href"in s&&t(0,e=s.href),"label"in s&&t(1,a=s.label)},[e,a]}class tt extends ee{constructor(r){super(),te(this,r,et,xe,x,{href:0,label:1})}}const rt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h240l80%2080h320q33%200%2056.5%2023.5T880-640v400q0%2033-23.5%2056.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0%200v-480%20480Z'/%3e%3c/svg%3e",{window:lt}=Fe;function at(n){let r,t,e,a,s,l,o,u,c,p,E,v,A,_,b,I,B,K,g,O,q,j,Q=be(n[6].url.pathname)+"",re,le,ae,Z,D,ie,ce;r=new He({props:{service:n[3]}}),a=new ze({}),g=new je({props:{routeCheckType:n[4]}});const oe=n[10].default,P=Ce(oe,n,n[9],null);return Z=new Qe({props:{routeCheckType:n[4]}}),{c(){U(r.$$.fragment),t=N(),e=w("div"),U(a.$$.fragment),s=N(),l=w("div"),o=w("img"),c=N(),p=w("a"),E=M("Manage files"),A=N(),_=w("span"),b=M("Editing file "),I=w("u"),B=M(n[5]),K=N(),U(g.$$.fragment),O=N(),q=w("div"),j=w("div"),re=M(Q),le=N(),P&&P.c(),ae=N(),U(Z.$$.fragment),this.h()},l(i){Y(r.$$.fragment,i),t=V(i),e=y(i,"DIV",{class:!0});var d=k(e);Y(a.$$.fragment,d),s=V(d),l=y(d,"DIV",{style:!0});var L=k(l);o=y(L,"IMG",{src:!0,alt:!0,style:!0}),c=V(L),p=y(L,"A",{href:!0});var R=k(p);E=H(R,"Manage files"),R.forEach(h),A=V(L),_=y(L,"SPAN",{class:!0,style:!0});var J=k(_);b=H(J,"Editing file "),I=y(J,"U",{});var he=k(I);B=H(he,n[5]),he.forEach(h),J.forEach(h),L.forEach(h),K=V(d),Y(g.$$.fragment,d),d.forEach(h),O=V(i),q=y(i,"DIV",{class:!0});var _e=k(q);j=y(_e,"DIV",{class:!0});var ge=k(j);re=H(ge,Q),ge.forEach(h),_e.forEach(h),le=V(i),P&&P.l(i),ae=V(i),Y(Z.$$.fragment,i),this.h()},h(){Pe(o.src,u=rt)||f(o,"src",u),f(o,"alt","Manage files"),W(o,"vertical-align","middle"),f(p,"href",v=z+"/"+n[2]),f(_,"class","govuk-body"),W(_,"margin-left","8px"),W(l,"margin-bottom","30px"),f(e,"class","govuk-width-container"),f(j,"class","govuk-heading-l"),f(q,"class","govuk-width-container")},m(i,d){$(r,i,d),T(i,t,d),T(i,e,d),$(a,e,null),m(e,s),m(e,l),m(l,o),m(l,c),m(l,p),m(p,E),m(l,A),m(l,_),m(_,b),m(_,I),m(I,B),m(e,K),$(g,e,null),T(i,O,d),T(i,q,d),m(q,j),m(j,re),T(i,le,d),P&&P.m(i,d),T(i,ae,d),$(Z,i,d),D=!0,ie||(ce=Ie(lt,"storage",n[7]),ie=!0)},p(i,[d]){const L={};d&8&&(L.service=i[3]),r.$set(L),(!D||d&4&&v!==(v=z+"/"+i[2]))&&f(p,"href",v),(!D||d&32)&&X(B,i[5]);const R={};d&16&&(R.routeCheckType=i[4]),g.$set(R),(!D||d&64)&&Q!==(Q=be(i[6].url.pathname)+"")&&X(re,Q),P&&P.p&&(!D||d&512)&&Ne(P,oe,i,i[9],D?Ae(oe,i[9],d,null):Ve(i[9]),null);const J={};d&16&&(J.routeCheckType=i[4]),Z.$set(J)},i(i){D||(S(r.$$.fragment,i),S(a.$$.fragment,i),S(g.$$.fragment,i),S(P,i),S(Z.$$.fragment,i),D=!0)},o(i){F(r.$$.fragment,i),F(a.$$.fragment,i),F(g.$$.fragment,i),F(P,i),F(Z.$$.fragment,i),D=!1},d(i){i&&(h(t),h(e),h(O),h(q),h(le),h(ae)),G(r,i),G(a),G(g),P&&P.d(i),G(Z,i),ie=!1,ce()}}}function nt(n,r,t){let e,a=C,s=()=>(a(),a=ve(A,g=>t(5,e=g)),A),l,o=C,u=()=>(o(),o=ve(v,g=>t(11,l=g)),v),c;ue(n,fe,g=>t(6,c=g)),n.$$.on_destroy.push(()=>a()),n.$$.on_destroy.push(()=>o());let{$$slots:p={},$$scope:E}=r,{state:v}=r;u();let{currentFile:A}=r;s();let{files:_}=r,{tool:b}=r,{service:I}=r,{routeCheckType:B}=r;function K(g){let O=_.key(e);if(O==g.key)if(g.newValue)try{console.log(`${O} changed in another tab; applying the data here`),Be(v,l=JSON.parse(g.newValue),l)}catch(q){console.error(`${O} changed in another tab, but the new value is broken: ${q}`)}else window.alert(`You deleted ${e} from another tab. If you continue editing it here, it'll be saved again.`)}return n.$$set=g=>{"state"in g&&u(t(0,v=g.state)),"currentFile"in g&&s(t(1,A=g.currentFile)),"files"in g&&t(8,_=g.files),"tool"in g&&t(2,b=g.tool),"service"in g&&t(3,I=g.service),"routeCheckType"in g&&t(4,B=g.routeCheckType),"$$scope"in g&&t(9,E=g.$$scope)},n.$$.update=()=>{n.$$.dirty&100&&e==""&&Le(c.url.pathname)!=`/${b}`&&(console.log("On a content page without any file loaded; redirecting"),Me(`${z}/${b}`))},[v,A,b,I,B,e,c,K,_,E,p]}class vt extends ee{constructor(r){super(),te(this,r,nt,at,x,{state:0,currentFile:1,files:8,tool:2,service:3,routeCheckType:4})}}export{vt as T};
