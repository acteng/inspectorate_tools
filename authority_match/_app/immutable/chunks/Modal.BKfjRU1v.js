import{s as H,l as Q,e as B,t as X,a as I,c as v,b,d as z,f as m,g as V,q as S,v as j,A as C,i as A,h as d,z as q,Q as F,j as G,u as J,m as K,o as L,y as N}from"./scheduler.B5FfXhnD.js";import{S as O,i as P,t as p,g as R,b as E,f as T,c as U,a as W,m as Y,d as Z}from"./index.VeCIHQiF.js";import"./index.DvXrhic5.js";import{S as $}from"./SecondaryButton.D6CH7aQ3.js";/* empty css                                                  */function M(n){let e,s;return e=new $({props:{$$slots:{default:[x]},$$scope:{ctx:n}}}),e.$on("click",n[5]),{c(){U(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,o){Y(e,l,o),s=!0},p(l,o){const f={};o&128&&(f.$$scope={dirty:o,ctx:l}),e.$set(f)},i(l){s||(p(e.$$.fragment,l),s=!0)},o(l){E(e.$$.fragment,l),s=!1},d(l){Z(e,l)}}}function x(n){let e;return{c(){e=X("X")},l(s){e=z(s,"X")},m(s,l){A(s,e,l)},d(s){s&&m(e)}}}function ee(n){let e,s,l,o,f,u,_,i,g,h,t=n[2]&&M(n);const w=n[4].default,c=Q(w,n,n[7],null);return{c(){e=B("div"),s=B("div"),l=B("div"),o=B("h1"),f=X(n[1]),u=I(),t&&t.c(),_=I(),c&&c.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=b(e);s=v(r,"DIV",{class:!0});var k=b(s);l=v(k,"DIV",{style:!0});var y=b(l);o=v(y,"H1",{class:!0});var D=b(o);f=z(D,n[1]),D.forEach(m),u=V(y),t&&t.l(y),y.forEach(m),_=V(k),c&&c.l(k),k.forEach(m),r.forEach(m),this.h()},h(){S(o,"class","govuk-heading-l"),j(l,"display","flex"),j(l,"justify-content","space-between"),S(s,"class","content centered-fullscreen svelte-1bl3d9w"),S(e,"class","background svelte-1bl3d9w"),C(e,"open",n[0]),C(e,"closed",!n[0])},m(a,r){A(a,e,r),d(e,s),d(s,l),d(l,o),d(o,f),d(l,u),t&&t.m(l,null),d(s,_),c&&c.m(s,null),i=!0,g||(h=[q(s,"click",F(te)),q(e,"click",n[6])],g=!0)},p(a,[r]){(!i||r&2)&&G(f,a[1]),a[2]?t?(t.p(a,r),r&4&&p(t,1)):(t=M(a),t.c(),p(t,1),t.m(l,null)):t&&(R(),E(t,1,1,()=>{t=null}),T()),c&&c.p&&(!i||r&128)&&J(c,w,a,a[7],i?L(w,a[7],r,null):K(a[7]),null),(!i||r&1)&&C(e,"open",a[0]),(!i||r&1)&&C(e,"closed",!a[0])},i(a){i||(p(t),p(c,a),i=!0)},o(a){E(t),E(c,a),i=!1},d(a){a&&m(e),t&&t.d(),c&&c.d(a),g=!1,N(h)}}}const te=()=>null;function se(n,e,s){let{$$slots:l={},$$scope:o}=e,{title:f}=e,{open:u=!1}=e,{displayEscapeButton:_=!0}=e,{canCloseByClickingBackground:i=!0}=e;const g=()=>s(0,u=!1),h=()=>{i&&s(0,u=!1)};return n.$$set=t=>{"title"in t&&s(1,f=t.title),"open"in t&&s(0,u=t.open),"displayEscapeButton"in t&&s(2,_=t.displayEscapeButton),"canCloseByClickingBackground"in t&&s(3,i=t.canCloseByClickingBackground),"$$scope"in t&&s(7,o=t.$$scope)},[u,f,_,i,l,g,h,o]}class ce extends O{constructor(e){super(),P(this,e,se,ee,H,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}export{ce as M};
