import{s as X,l as Ie,e as T,a as N,t as q,c as C,b as y,g as B,d as H,f as g,Y as Ne,q as m,v as D,i as P,h as p,z as Be,j as R,u as Le,m as Ae,o as Ve,k as fe,n as $,ab as me,V as Fe,B as Ee,J as pe,L as re,M as ne}from"./scheduler.Bxdx0f0B.js";import{S as x,i as ee,c as U,a as Y,m as G,t as L,b as A,d as K,g as se,f as ae}from"./index.itOPPQ0R.js";import{g as qe}from"./globals.D0QH3NT1.js";import{b as F}from"./paths.JrwPxPVu.js";import{g as W,c as He,e as be,f as Te,h as Ce,i as Se}from"./index.BrLifWox.js";import{p as ce}from"./stores.Clph47WV.js";import{g as De}from"./entry.BKocn9gy.js";import{e as ie}from"./each.BdQ2bsat.js";const Me="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h240l80%2080h320q33%200%2056.5%2023.5T880-640v400q0%2033-23.5%2056.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0%200v-480%20480Z'/%3e%3c/svg%3e",{window:je}=qe;function ze(r){let e,l,t,n,s,a,i,o,f,_,d,w,k,I,V,E,M,u,c=W(r[5].url.pathname)+"",b,j,O,Z,le,J,z,oe,_e;I=new Xe({props:{routeCheckType:r[3]}});const ue=r[9].default,S=Ie(ue,r,r[8],null);return J=new st({props:{routeCheckType:r[3]}}),{c(){e=T("div"),l=T("img"),n=N(),s=T("a"),a=q("Manage files"),o=N(),f=T("span"),_=q("Editing file "),d=T("u"),w=q(r[4]),k=N(),U(I.$$.fragment),V=N(),E=T("hr"),M=N(),u=T("h1"),b=q(c),j=N(),S&&S.c(),O=N(),Z=T("hr"),le=N(),U(J.$$.fragment),this.h()},l(h){e=C(h,"DIV",{});var v=y(e);l=C(v,"IMG",{src:!0,alt:!0,style:!0}),n=B(v),s=C(v,"A",{href:!0});var te=y(s);a=H(te,"Manage files"),te.forEach(g),o=B(v),f=C(v,"SPAN",{class:!0,style:!0});var Q=y(f);_=H(Q,"Editing file "),d=C(Q,"U",{});var he=y(d);w=H(he,r[4]),he.forEach(g),Q.forEach(g),v.forEach(g),k=B(h),Y(I.$$.fragment,h),V=B(h),E=C(h,"HR",{}),M=B(h),u=C(h,"H1",{style:!0});var ge=y(u);b=H(ge,c),ge.forEach(g),j=B(h),S&&S.l(h),O=B(h),Z=C(h,"HR",{}),le=B(h),Y(J.$$.fragment,h),this.h()},h(){Ne(l.src,t=Me)||m(l,"src",t),m(l,"alt","Manage files"),D(l,"vertical-align","middle"),m(s,"href",i=F+"/"+r[2]),m(f,"class","govuk-body"),D(f,"margin-left","8px"),D(u,"text-align","center")},m(h,v){P(h,e,v),p(e,l),p(e,n),p(e,s),p(s,a),p(e,o),p(e,f),p(f,_),p(f,d),p(d,w),P(h,k,v),G(I,h,v),P(h,V,v),P(h,E,v),P(h,M,v),P(h,u,v),p(u,b),P(h,j,v),S&&S.m(h,v),P(h,O,v),P(h,Z,v),P(h,le,v),G(J,h,v),z=!0,oe||(_e=Be(je,"storage",r[6]),oe=!0)},p(h,[v]){(!z||v&4&&i!==(i=F+"/"+h[2]))&&m(s,"href",i),(!z||v&16)&&R(w,h[4]);const te={};v&8&&(te.routeCheckType=h[3]),I.$set(te),(!z||v&32)&&c!==(c=W(h[5].url.pathname)+"")&&R(b,c),S&&S.p&&(!z||v&256)&&Le(S,ue,h,h[8],z?Ve(ue,h[8],v,null):Ae(h[8]),null);const Q={};v&8&&(Q.routeCheckType=h[3]),J.$set(Q)},i(h){z||(L(I.$$.fragment,h),L(S,h),L(J.$$.fragment,h),z=!0)},o(h){A(I.$$.fragment,h),A(S,h),A(J.$$.fragment,h),z=!1},d(h){h&&(g(e),g(k),g(V),g(E),g(M),g(u),g(j),g(O),g(Z),g(le)),K(I,h),S&&S.d(h),K(J,h),oe=!1,_e()}}}function Oe(r,e,l){let t,n=$,s=()=>(n(),n=me(k,u=>l(4,t=u)),k),a,i=$,o=()=>(i(),i=me(w,u=>l(10,a=u)),w),f;fe(r,ce,u=>l(5,f=u)),r.$$.on_destroy.push(()=>n()),r.$$.on_destroy.push(()=>i());let{$$slots:_={},$$scope:d}=e,{state:w}=e;o();let{currentFile:k}=e;s();let{files:I}=e,{tool:V}=e,{routeCheckType:E}=e;function M(u){let c=I.key(t);if(c==u.key)if(u.newValue)try{console.log(`${c} changed in another tab; applying the data here`),Fe(w,a=JSON.parse(u.newValue),a)}catch(b){console.error(`${c} changed in another tab, but the new value is broken: ${b}`)}else window.alert(`You deleted ${t} from another tab. If you continue editing it here, it'll be saved again.`)}return r.$$set=u=>{"state"in u&&o(l(0,w=u.state)),"currentFile"in u&&s(l(1,k=u.currentFile)),"files"in u&&l(7,I=u.files),"tool"in u&&l(2,V=u.tool),"routeCheckType"in u&&l(3,E=u.routeCheckType),"$$scope"in u&&l(8,d=u.$$scope)},r.$$.update=()=>{r.$$.dirty&52&&t==""&&He(f.url.pathname)!=`/${V}`&&(console.log("On a content page without any file loaded; redirecting"),De(`${F}/${V}`))},[w,k,V,E,t,f,M,I,d,_]}class dt extends x{constructor(e){super(),ee(this,e,Oe,ze,X,{state:0,currentFile:1,files:7,tool:2,routeCheckType:3})}}function de(r,e,l){const t=r.slice();return t[2]=e[l][0],t[3]=e[l][1],t}function ve(r){let e,l,t=r[3]+"",n,s;return{c(){e=T("li"),l=T("a"),n=q(t),this.h()},l(a){e=C(a,"LI",{class:!0});var i=y(e);l=C(i,"A",{class:!0,href:!0});var o=y(l);n=H(o,t),o.forEach(g),i.forEach(g),this.h()},h(){m(l,"class","govuk-breadcrumbs__link"),m(l,"href",s=""+(F+r[2])),m(e,"class","govuk-breadcrumbs__list-item")},m(a,i){P(a,e,i),p(e,l),p(l,n)},p(a,i){i&1&&t!==(t=a[3]+"")&&R(n,t),i&1&&s!==(s=""+(F+a[2]))&&m(l,"href",s)},d(a){a&&g(e)}}}function Ze(r){let e,l,t,n,s,a=ie(r[0]),i=[];for(let o=0;o<a.length;o+=1)i[o]=ve(de(r,a,o));return{c(){e=T("div"),l=T("ol");for(let o=0;o<i.length;o+=1)i[o].c();t=N(),n=T("li"),s=q(r[1]),this.h()},l(o){e=C(o,"DIV",{class:!0});var f=y(e);l=C(f,"OL",{class:!0});var _=y(l);for(let w=0;w<i.length;w+=1)i[w].l(_);t=B(_),n=C(_,"LI",{class:!0});var d=y(n);s=H(d,r[1]),d.forEach(g),_.forEach(g),f.forEach(g),this.h()},h(){m(n,"class","govuk-breadcrumbs__list-item"),m(l,"class","govuk-breadcrumbs__list"),m(e,"class","govuk-breadcrumbs")},m(o,f){P(o,e,f),p(e,l);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(l,null);p(l,t),p(l,n),p(n,s)},p(o,[f]){if(f&1){a=ie(o[0]);let _;for(_=0;_<a.length;_+=1){const d=de(o,a,_);i[_]?i[_].p(d,f):(i[_]=ve(d),i[_].c(),i[_].m(l,t))}for(;_<i.length;_+=1)i[_].d(1);i.length=a.length}f&2&&R(s,o[1])},i:$,o:$,d(o){o&&g(e),Ee(i,o)}}}function Je(r,e,l){let{links:t}=e,{current:n}=e;return r.$$set=s=>{"links"in s&&l(0,t=s.links),"current"in s&&l(1,n=s.current)},[t,n]}class Re extends x{constructor(e){super(),ee(this,e,Je,Ze,X,{links:0,current:1})}}function ke(r,e,l){const t=r.slice();return t[6]=e[l],t}function Ue(r){let e;return{c(){e=q(" ")},l(l){e=H(l," ")},m(l,t){P(l,e,t)},p:$,i:$,o:$,d(l){l&&g(e)}}}function Ye(r){let e,l;return e=new $e({props:{href:""+(F+r[3][0]),label:r[3][1]}}),{c(){U(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){G(e,t,n),l=!0},p(t,n){const s={};n&8&&(s.href=""+(F+t[3][0])),n&8&&(s.label=t[3][1]),e.$set(s)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function Ge(r){let e;return{c(){e=q(" ")},l(l){e=H(l," ")},m(l,t){P(l,e,t)},p:$,i:$,o:$,d(l){l&&g(e)}}}function Ke(r){let e,l;return e=new Pe({props:{href:""+(F+r[2][0]),label:r[2][1]}}),{c(){U(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){G(e,t,n),l=!0},p(t,n){const s={};n&4&&(s.href=""+(F+t[2][0])),n&4&&(s.label=t[2][1]),e.$set(s)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function we(r){let e,l=ie(r[1]),t=[];for(let n=0;n<l.length;n+=1)t[n]=ye(ke(r,l,n));return{c(){e=T("ol");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=C(n,"OL",{style:!0});var s=y(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(g),this.h()},h(){D(e,"display","flex"),D(e,"justify-content","space-around"),D(e,"flex-direction","row"),D(e,"flex-wrap","wrap")},m(n,s){P(n,e,s);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(n,s){if(s&2){l=ie(n[1]);let a;for(a=0;a<l.length;a+=1){const i=ke(n,l,a);t[a]?t[a].p(i,s):(t[a]=ye(i),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(n){n&&g(e),Ee(t,n)}}}function ye(r){let e,l,t=r[6][1]+"",n,s,a;return{c(){e=T("li"),l=T("a"),n=q(t),a=N(),this.h()},l(i){e=C(i,"LI",{class:!0});var o=y(e);l=C(o,"A",{href:!0});var f=y(l);n=H(f,t),f.forEach(g),a=B(o),o.forEach(g),this.h()},h(){m(l,"href",s=""+(F+r[6][0])),m(e,"class","svelte-1jgkpl2")},m(i,o){P(i,e,o),p(e,l),p(l,n),p(e,a)},p(i,o){o&2&&t!==(t=i[6][1]+"")&&R(n,t),o&2&&s!==(s=""+(F+i[6][0]))&&m(l,"href",s)},d(i){i&&g(e)}}}function Qe(r){let e,l,t,n,s,a,i,o,f,_,d;const w=[Ye,Ue],k=[];function I(c,b){return c[3]?0:1}l=I(r),t=k[l]=w[l](r),s=new Re({props:{links:be(r[0]),current:W(r[0])}});const V=[Ke,Ge],E=[];function M(c,b){return c[2]?0:1}i=M(r),o=E[i]=V[i](r);let u=r[1]&&we(r);return{c(){e=T("div"),t.c(),n=N(),U(s.$$.fragment),a=N(),o.c(),f=N(),u&&u.c(),_=pe(),this.h()},l(c){e=C(c,"DIV",{style:!0});var b=y(e);t.l(b),n=B(b),Y(s.$$.fragment,b),a=B(b),o.l(b),b.forEach(g),f=B(c),u&&u.l(c),_=pe(),this.h()},h(){D(e,"display","flex"),D(e,"justify-content","space-between")},m(c,b){P(c,e,b),k[l].m(e,null),p(e,n),G(s,e,null),p(e,a),E[i].m(e,null),P(c,f,b),u&&u.m(c,b),P(c,_,b),d=!0},p(c,[b]){let j=l;l=I(c),l===j?k[l].p(c,b):(se(),A(k[j],1,1,()=>{k[j]=null}),ae(),t=k[l],t?t.p(c,b):(t=k[l]=w[l](c),t.c()),L(t,1),t.m(e,n));const O={};b&1&&(O.links=be(c[0])),b&1&&(O.current=W(c[0])),s.$set(O);let Z=i;i=M(c),i===Z?E[i].p(c,b):(se(),A(E[Z],1,1,()=>{E[Z]=null}),ae(),o=E[i],o?o.p(c,b):(o=E[i]=V[i](c),o.c()),L(o,1),o.m(e,null)),c[1]?u?u.p(c,b):(u=we(c),u.c(),u.m(_.parentNode,_)):u&&(u.d(1),u=null)},i(c){d||(L(t),L(s.$$.fragment,c),L(o),d=!0)},o(c){A(t),A(s.$$.fragment,c),A(o),d=!1},d(c){c&&(g(e),g(f),g(_)),k[l].d(),K(s),E[i].d(),u&&u.d(c)}}}function We(r,e,l){let t,n,s,a,i;fe(r,ce,f=>l(5,i=f));let{routeCheckType:o}=e;return r.$$set=f=>{"routeCheckType"in f&&l(4,o=f.routeCheckType)},r.$$.update=()=>{r.$$.dirty&32&&l(0,t=i.url.pathname),r.$$.dirty&17&&l(3,n=Te(t,o)),r.$$.dirty&17&&l(2,s=Ce(t,o)),r.$$.dirty&17&&l(1,a=Se(t,o))},[t,a,s,n,o,i]}class Xe extends x{constructor(e){super(),ee(this,e,We,Qe,X,{routeCheckType:4})}}function xe(r){let e;return{c(){e=q(" ")},l(l){e=H(l," ")},m(l,t){P(l,e,t)},p:$,i:$,o:$,d(l){l&&g(e)}}}function et(r){let e,l;return e=new $e({props:{href:""+(F+r[2][0]),label:r[2][1]}}),{c(){U(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){G(e,t,n),l=!0},p(t,n){const s={};n&4&&(s.href=""+(F+t[2][0])),n&4&&(s.label=t[2][1]),e.$set(s)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function tt(r){let e;return{c(){e=q(" ")},l(l){e=H(l," ")},m(l,t){P(l,e,t)},p:$,i:$,o:$,d(l){l&&g(e)}}}function lt(r){let e,l;return e=new Pe({props:{href:""+(F+r[1][0]),label:r[1][1]}}),{c(){U(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){G(e,t,n),l=!0},p(t,n){const s={};n&2&&(s.href=""+(F+t[1][0])),n&2&&(s.label=t[1][1]),e.$set(s)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function rt(r){let e,l,t,n,s,a=W(r[0])+"",i,o,f,_,d;const w=[et,xe],k=[];function I(u,c){return u[2]?0:1}l=I(r),t=k[l]=w[l](r);const V=[lt,tt],E=[];function M(u,c){return u[1]?0:1}return f=M(r),_=E[f]=V[f](r),{c(){e=T("div"),t.c(),n=N(),s=T("span"),i=q(a),o=N(),_.c(),this.h()},l(u){e=C(u,"DIV",{style:!0});var c=y(e);t.l(c),n=B(c),s=C(c,"SPAN",{class:!0,style:!0});var b=y(s);i=H(b,a),b.forEach(g),o=B(c),_.l(c),c.forEach(g),this.h()},h(){m(s,"class","govuk-body"),D(s,"display","flex"),D(s,"align-items","center"),D(e,"display","flex"),D(e,"justify-content","space-between")},m(u,c){P(u,e,c),k[l].m(e,null),p(e,n),p(e,s),p(s,i),p(e,o),E[f].m(e,null),d=!0},p(u,[c]){let b=l;l=I(u),l===b?k[l].p(u,c):(se(),A(k[b],1,1,()=>{k[b]=null}),ae(),t=k[l],t?t.p(u,c):(t=k[l]=w[l](u),t.c()),L(t,1),t.m(e,n)),(!d||c&1)&&a!==(a=W(u[0])+"")&&R(i,a);let j=f;f=M(u),f===j?E[f].p(u,c):(se(),A(E[j],1,1,()=>{E[j]=null}),ae(),_=E[f],_?_.p(u,c):(_=E[f]=V[f](u),_.c()),L(_,1),_.m(e,null))},i(u){d||(L(t),L(_),d=!0)},o(u){A(t),A(_),d=!1},d(u){u&&g(e),k[l].d(),E[f].d()}}}function nt(r,e,l){let t,n,s,a;fe(r,ce,o=>l(4,a=o));let{routeCheckType:i}=e;return r.$$set=o=>{"routeCheckType"in o&&l(3,i=o.routeCheckType)},r.$$.update=()=>{r.$$.dirty&16&&l(0,t=a.url.pathname),r.$$.dirty&9&&l(2,n=Te(t,i)),r.$$.dirty&9&&l(1,s=Ce(t,i))},[t,s,n,i,a]}class st extends x{constructor(e){super(),ee(this,e,nt,rt,X,{routeCheckType:3})}}function at(r){let e,l,t,n,s,a,i;return{c(){e=T("div"),l=T("a"),t=T("span"),n=q(r[1]),s=N(),a=re("svg"),i=re("path"),this.h()},l(o){e=C(o,"DIV",{class:!0});var f=y(e);l=C(f,"A",{class:!0,href:!0,rel:!0});var _=y(l);t=C(_,"SPAN",{class:!0});var d=y(t);n=H(d,r[1]),d.forEach(g),s=B(_),a=ne(_,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var w=y(a);i=ne(w,"path",{d:!0}),y(i).forEach(g),w.forEach(g),_.forEach(g),f.forEach(g),this.h()},h(){m(t,"class","govuk-pagination__link-title"),m(i,"d","m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"),m(a,"class","govuk-pagination__icon govuk-pagination__icon--next"),m(a,"xmlns","http://www.w3.org/2000/svg"),m(a,"height","13"),m(a,"width","15"),m(a,"aria-hidden","true"),m(a,"focusable","false"),m(a,"viewBox","0 0 15 13"),m(l,"class","govuk-link govuk-pagination__link"),m(l,"href",r[0]),m(l,"rel","next"),m(e,"class","govuk-pagination__next")},m(o,f){P(o,e,f),p(e,l),p(l,t),p(t,n),p(l,s),p(l,a),p(a,i)},p(o,[f]){f&2&&R(n,o[1]),f&1&&m(l,"href",o[0])},i:$,o:$,d(o){o&&g(e)}}}function it(r,e,l){let{href:t}=e,{label:n}=e;return r.$$set=s=>{"href"in s&&l(0,t=s.href),"label"in s&&l(1,n=s.label)},[t,n]}class Pe extends x{constructor(e){super(),ee(this,e,it,at,X,{href:0,label:1})}}function ot(r){let e,l,t,n,s,a,i;return{c(){e=T("div"),l=T("a"),t=re("svg"),n=re("path"),s=N(),a=T("span"),i=q(r[1]),this.h()},l(o){e=C(o,"DIV",{class:!0});var f=y(e);l=C(f,"A",{class:!0,href:!0,rel:!0});var _=y(l);t=ne(_,"svg",{class:!0,xmlns:!0,height:!0,width:!0,"aria-hidden":!0,focusable:!0,viewBox:!0});var d=y(t);n=ne(d,"path",{d:!0}),y(n).forEach(g),d.forEach(g),s=B(_),a=C(_,"SPAN",{class:!0});var w=y(a);i=H(w,r[1]),w.forEach(g),_.forEach(g),f.forEach(g),this.h()},h(){m(n,"d","m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"),m(t,"class","govuk-pagination__icon govuk-pagination__icon--prev"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"height","13"),m(t,"width","15"),m(t,"aria-hidden","true"),m(t,"focusable","false"),m(t,"viewBox","0 0 15 13"),m(a,"class","govuk-pagination__link-title"),m(l,"class","govuk-link govuk-pagination__link"),m(l,"href",r[0]),m(l,"rel","prev"),m(e,"class","govuk-pagination__prev")},m(o,f){P(o,e,f),p(e,l),p(l,t),p(t,n),p(l,s),p(l,a),p(a,i)},p(o,[f]){f&2&&R(i,o[1]),f&1&&m(l,"href",o[0])},i:$,o:$,d(o){o&&g(e)}}}function ut(r,e,l){let{href:t}=e,{label:n}=e;return r.$$set=s=>{"href"in s&&l(0,t=s.href),"label"in s&&l(1,n=s.label)},[t,n]}class $e extends x{constructor(e){super(),ee(this,e,ut,ot,X,{href:0,label:1})}}export{dt as T};
