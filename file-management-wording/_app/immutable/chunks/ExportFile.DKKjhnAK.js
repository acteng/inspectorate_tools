import{s as H,e as g,t as h,a as q,c as F,b as j,d as E,f as _,g as G,i as m,h as d,j as J,l as M,u as N,m as O,o as P,n as w,H as B,I as U,q as b}from"./scheduler.DGwhun8C.js";import{S as z,i as A,c as v,a as I,m as Y,t as y,b as S,d as k}from"./index.B2vZYn3d.js";import{B as D}from"./ButtonGroup.kCbKs-s-.js";import"./index.lMfk4s04.js";import{S as K}from"./SecondaryButton.zQkvdoBX.js";import{d as L}from"./download.C6h074W8.js";import{d as Q}from"./index.NUzYaQHC.js";function R(u){let e,r,o;return{c(){e=g("img"),o=h(`
    Export .json`),this.h()},l(a){e=F(a,"IMG",{src:!0,alt:!0,class:!0}),o=E(a,`
    Export .json`),this.h()},h(){U(e.src,r=L)||b(e,"src",r),b(e,"alt",""),b(e,"class","svelte-v2g1wg")},m(a,s){m(a,e,s),m(a,o,s)},p:w,d(a){a&&(_(e),_(o))}}}function T(u){let e,r,o;e=new K({props:{$$slots:{default:[R]},$$scope:{ctx:u}}}),e.$on("click",u[3]);const a=u[4].default,s=M(a,u,u[5],null);return{c(){v(e.$$.fragment),r=q(),s&&s.c()},l(t){I(e.$$.fragment,t),r=G(t),s&&s.l(t)},m(t,l){Y(e,t,l),m(t,r,l),s&&s.m(t,l),o=!0},p(t,l){const n={};l&32&&(n.$$scope={dirty:l,ctx:t}),e.$set(n),s&&s.p&&(!o||l&32)&&N(s,a,t,t[5],o?P(a,t[5],l,null):O(t[5]),null)},i(t){o||(y(e.$$.fragment,t),y(s,t),o=!0)},o(t){S(e.$$.fragment,t),S(s,t),o=!1},d(t){t&&_(r),k(e,t),s&&s.d(t)}}}function V(u){let e,r,o,a,s,t,l;return t=new D({props:{$$slots:{default:[T]},$$scope:{ctx:u}}}),{c(){e=g("p"),r=g("b"),o=h("You are editing: "),a=h(u[2]),s=q(),v(t.$$.fragment)},l(n){e=F(n,"P",{});var i=j(e);r=F(i,"B",{});var f=j(r);o=E(f,"You are editing: "),a=E(f,u[2]),f.forEach(_),i.forEach(_),s=G(n),I(t.$$.fragment,n)},m(n,i){m(n,e,i),d(e,r),d(r,o),d(r,a),m(n,s,i),Y(t,n,i),l=!0},p(n,[i]){(!l||i&4)&&J(a,n[2]);const f={};i&32&&(f.$$scope={dirty:i,ctx:n}),t.$set(f)},i(n){l||(y(t.$$.fragment,n),l=!0)},o(n){S(t.$$.fragment,n),l=!1},d(n){n&&(_(e),_(s)),k(t,n)}}}function W(u,e,r){let o,a=w,s=()=>(a(),a=B($,c=>r(6,o=c)),$),t,l=w,n=()=>(l(),l=B(p,c=>r(2,t=c)),p);u.$$.on_destroy.push(()=>a()),u.$$.on_destroy.push(()=>l());let{$$slots:i={},$$scope:f}=e,{currentFile:p}=e;n();let{state:$}=e;s();function C(){Q(t+".json",JSON.stringify(o))}return u.$$set=c=>{"currentFile"in c&&n(r(0,p=c.currentFile)),"state"in c&&s(r(1,$=c.state)),"$$scope"in c&&r(5,f=c.$$scope)},[p,$,t,C,i,f]}class rt extends z{constructor(e){super(),A(this,e,W,V,H,{currentFile:0,state:1})}}export{rt as E};
