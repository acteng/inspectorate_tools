import{s as H,l as T,e as B,t as X,a as I,c as C,b as E,d as F,f as g,g as V,q as k,v as j,E as S,i as G,h,y as q,F as z,j as A,u as J,m as K,o as L,x as N,G as O,r as P}from"./scheduler.4ZNDCSWA.js";import{S as Q,i as R,t as v,g as U,b as W,f as Y,c as Z,a as x,m as $,d as ee}from"./index.xRKM1n3P.js";import"./index.CHcBKxOI.js";import{S as te}from"./SecondaryButton.yCPBUDia.js";import"./index.DWy7mOIr.js";function M(n){let t,s;return t=new te({props:{$$slots:{default:[se]},$$scope:{ctx:n}}}),t.$on("click",n[7]),{c(){Z(t.$$.fragment)},l(l){x(t.$$.fragment,l)},m(l,o){$(t,l,o),s=!0},p(l,o){const u={};o&1024&&(u.$$scope={dirty:o,ctx:l}),t.$set(u)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){W(t.$$.fragment,l),s=!1},d(l){ee(t,l)}}}function se(n){let t;return{c(){t=X("X")},l(s){t=F(s,"X")},m(s,l){G(s,t,l)},d(s){s&&g(t)}}}function le(n){let t,s,l,o,u,d,m,_,c,r,y,a=n[2]&&M(n);const p=n[6].default,i=T(p,n,n[10],null);return{c(){t=B("div"),s=B("div"),l=B("div"),o=B("h1"),u=X(n[1]),d=I(),a&&a.c(),m=I(),i&&i.c(),this.h()},l(e){t=C(e,"DIV",{class:!0});var f=E(t);s=C(f,"DIV",{class:!0,style:!0});var b=E(s);l=C(b,"DIV",{style:!0});var w=E(l);o=C(w,"H1",{class:!0});var D=E(o);u=F(D,n[1]),D.forEach(g),d=V(w),a&&a.l(w),w.forEach(g),m=V(b),i&&i.l(b),b.forEach(g),f.forEach(g),this.h()},h(){k(o,"class","govuk-heading-l"),j(l,"display","flex"),j(l,"justify-content","space-between"),k(s,"class","content centered-fullscreen svelte-1bl3d9w"),k(s,"style",_=n[4]?`width: ${n[4]}vw;`:""),k(t,"class","background svelte-1bl3d9w"),S(t,"open",n[0]),S(t,"closed",!n[0])},m(e,f){G(e,t,f),h(t,s),h(s,l),h(l,o),h(o,u),h(l,d),a&&a.m(l,null),h(s,m),i&&i.m(s,null),n[8](s),c=!0,r||(y=[q(s,"click",z(ne)),q(t,"click",n[9])],r=!0)},p(e,[f]){(!c||f&2)&&A(u,e[1]),e[2]?a?(a.p(e,f),f&4&&v(a,1)):(a=M(e),a.c(),v(a,1),a.m(l,null)):a&&(U(),W(a,1,1,()=>{a=null}),Y()),i&&i.p&&(!c||f&1024)&&J(i,p,e,e[10],c?L(p,e[10],f,null):K(e[10]),null),(!c||f&16&&_!==(_=e[4]?`width: ${e[4]}vw;`:""))&&k(s,"style",_),(!c||f&1)&&S(t,"open",e[0]),(!c||f&1)&&S(t,"closed",!e[0])},i(e){c||(v(a),v(i,e),c=!0)},o(e){W(a),W(i,e),c=!1},d(e){e&&g(t),a&&a.d(),i&&i.d(e),n[8](null),r=!1,N(y)}}}const ne=()=>null;function ae(n,t,s){let{$$slots:l={},$$scope:o}=t,{title:u}=t,{open:d=!1}=t,{displayEscapeButton:m=!0}=t,{canCloseByClickingBackground:_=!0}=t,{viewWidth:c=void 0}=t,r;async function y(e){e&&r&&(await O(),s(5,r.scrollTop=0,r))}const a=()=>s(0,d=!1);function p(e){P[e?"unshift":"push"](()=>{r=e,s(5,r)})}const i=()=>{_&&s(0,d=!1)};return n.$$set=e=>{"title"in e&&s(1,u=e.title),"open"in e&&s(0,d=e.open),"displayEscapeButton"in e&&s(2,m=e.displayEscapeButton),"canCloseByClickingBackground"in e&&s(3,_=e.canCloseByClickingBackground),"viewWidth"in e&&s(4,c=e.viewWidth),"$$scope"in e&&s(10,o=e.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&y(d)},[d,u,m,_,c,r,l,a,p,i,o]}class re extends Q{constructor(t){super(),R(this,t,ae,le,H,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3,viewWidth:4})}}export{re as M};
