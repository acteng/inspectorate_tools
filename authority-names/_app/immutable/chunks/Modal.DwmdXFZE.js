import{s as H,l as T,e as w,t as X,a as I,c as B,b as C,d as F,f as g,g as V,v as j,q as E,E as S,i as G,h,y as q,F as z,j as A,u as J,m as K,o as L,x as N,G as O,r as P}from"./scheduler.DGwhun8C.js";import{S as Q,i as R,t as k,g as U,b as W,f as Y,c as Z,a as x,m as $,d as ee}from"./index.B2vZYn3d.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.C9mDaxC4.js";import{S as te}from"./SecondaryButton.zQkvdoBX.js";import"./authority_names.DNsKBQFn.js";function M(n){let t,l;return t=new te({props:{$$slots:{default:[le]},$$scope:{ctx:n}}}),t.$on("click",n[7]),{c(){Z(t.$$.fragment)},l(s){x(t.$$.fragment,s)},m(s,o){$(t,s,o),l=!0},p(s,o){const r={};o&1024&&(r.$$scope={dirty:o,ctx:s}),t.$set(r)},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){W(t.$$.fragment,s),l=!1},d(s){ee(t,s)}}}function le(n){let t;return{c(){t=X("X")},l(l){t=F(l,"X")},m(l,s){G(l,t,s)},d(l){l&&g(t)}}}function se(n){let t,l,s,o,r,d,m,_,c,u,y,a=n[2]&&M(n);const p=n[6].default,i=T(p,n,n[10],null);return{c(){t=w("div"),l=w("div"),s=w("div"),o=w("h1"),r=X(n[1]),d=I(),a&&a.c(),m=I(),i&&i.c(),this.h()},l(e){t=B(e,"DIV",{class:!0});var f=C(t);l=B(f,"DIV",{class:!0,style:!0});var v=C(l);s=B(v,"DIV",{style:!0});var b=C(s);o=B(b,"H1",{});var D=C(o);r=F(D,n[1]),D.forEach(g),d=V(b),a&&a.l(b),b.forEach(g),m=V(v),i&&i.l(v),v.forEach(g),f.forEach(g),this.h()},h(){j(s,"display","flex"),j(s,"justify-content","space-between"),E(l,"class","content centered-fullscreen svelte-1bl3d9w"),E(l,"style",_=n[4]?`width: ${n[4]}vw;`:""),E(t,"class","background svelte-1bl3d9w"),S(t,"open",n[0]),S(t,"closed",!n[0])},m(e,f){G(e,t,f),h(t,l),h(l,s),h(s,o),h(o,r),h(s,d),a&&a.m(s,null),h(l,m),i&&i.m(l,null),n[8](l),c=!0,u||(y=[q(l,"click",z(ne)),q(t,"click",n[9])],u=!0)},p(e,[f]){(!c||f&2)&&A(r,e[1]),e[2]?a?(a.p(e,f),f&4&&k(a,1)):(a=M(e),a.c(),k(a,1),a.m(s,null)):a&&(U(),W(a,1,1,()=>{a=null}),Y()),i&&i.p&&(!c||f&1024)&&J(i,p,e,e[10],c?L(p,e[10],f,null):K(e[10]),null),(!c||f&16&&_!==(_=e[4]?`width: ${e[4]}vw;`:""))&&E(l,"style",_),(!c||f&1)&&S(t,"open",e[0]),(!c||f&1)&&S(t,"closed",!e[0])},i(e){c||(k(a),k(i,e),c=!0)},o(e){W(a),W(i,e),c=!1},d(e){e&&g(t),a&&a.d(),i&&i.d(e),n[8](null),u=!1,N(y)}}}const ne=()=>null;function ae(n,t,l){let{$$slots:s={},$$scope:o}=t,{title:r}=t,{open:d=!1}=t,{displayEscapeButton:m=!0}=t,{canCloseByClickingBackground:_=!0}=t,{viewWidth:c=void 0}=t,u;async function y(e){e&&u&&(await O(),l(5,u.scrollTop=0,u))}const a=()=>l(0,d=!1);function p(e){P[e?"unshift":"push"](()=>{u=e,l(5,u)})}const i=()=>{_&&l(0,d=!1)};return n.$$set=e=>{"title"in e&&l(1,r=e.title),"open"in e&&l(0,d=e.open),"displayEscapeButton"in e&&l(2,m=e.displayEscapeButton),"canCloseByClickingBackground"in e&&l(3,_=e.canCloseByClickingBackground),"viewWidth"in e&&l(4,c=e.viewWidth),"$$scope"in e&&l(10,o=e.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&y(d)},[d,r,m,_,c,u,s,a,p,i,o]}class ue extends Q{constructor(t){super(),R(this,t,ae,se,H,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3,viewWidth:4})}}export{ue as M};
