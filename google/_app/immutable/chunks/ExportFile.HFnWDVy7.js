import{s as H,e as g,t as h,a as q,c as F,b as S,d as E,f as _,g as G,i as m,h as d,j as J,l as M,u as N,m as O,o as P,n as j,H as B,I as U,q as b}from"./scheduler.4ZNDCSWA.js";import{S as z,i as A,c as v,a as I,m as Y,t as w,b as y,d as k}from"./index.xRKM1n3P.js";import{B as D}from"./ButtonGroup.Ddi3jvIy.js";import"./index.V9h0-FkH.js";import{S as K}from"./SecondaryButton.yCPBUDia.js";import{d as L}from"./download.C6h074W8.js";import{d as Q}from"./index.Cqo7_HD0.js";function R(u){let e,r,a;return{c(){e=g("img"),a=h(`
    Export .json`),this.h()},l(o){e=F(o,"IMG",{src:!0,alt:!0,class:!0}),a=E(o,`
    Export .json`),this.h()},h(){U(e.src,r=L)||b(e,"src",r),b(e,"alt","Export .json"),b(e,"class","svelte-v2g1wg")},m(o,s){m(o,e,s),m(o,a,s)},p:j,d(o){o&&(_(e),_(a))}}}function T(u){let e,r,a;e=new K({props:{$$slots:{default:[R]},$$scope:{ctx:u}}}),e.$on("click",u[3]);const o=u[4].default,s=M(o,u,u[5],null);return{c(){v(e.$$.fragment),r=q(),s&&s.c()},l(t){I(e.$$.fragment,t),r=G(t),s&&s.l(t)},m(t,l){Y(e,t,l),m(t,r,l),s&&s.m(t,l),a=!0},p(t,l){const n={};l&32&&(n.$$scope={dirty:l,ctx:t}),e.$set(n),s&&s.p&&(!a||l&32)&&N(s,o,t,t[5],a?P(o,t[5],l,null):O(t[5]),null)},i(t){a||(w(e.$$.fragment,t),w(s,t),a=!0)},o(t){y(e.$$.fragment,t),y(s,t),a=!1},d(t){t&&_(r),k(e,t),s&&s.d(t)}}}function V(u){let e,r,a,o,s,t,l;return t=new D({props:{$$slots:{default:[T]},$$scope:{ctx:u}}}),{c(){e=g("p"),r=g("b"),a=h("You are editing: "),o=h(u[2]),s=q(),v(t.$$.fragment)},l(n){e=F(n,"P",{});var i=S(e);r=F(i,"B",{});var f=S(r);a=E(f,"You are editing: "),o=E(f,u[2]),f.forEach(_),i.forEach(_),s=G(n),I(t.$$.fragment,n)},m(n,i){m(n,e,i),d(e,r),d(r,a),d(r,o),m(n,s,i),Y(t,n,i),l=!0},p(n,[i]){(!l||i&4)&&J(o,n[2]);const f={};i&32&&(f.$$scope={dirty:i,ctx:n}),t.$set(f)},i(n){l||(w(t.$$.fragment,n),l=!0)},o(n){y(t.$$.fragment,n),l=!1},d(n){n&&(_(e),_(s)),k(t,n)}}}function W(u,e,r){let a,o=j,s=()=>(o(),o=B($,c=>r(6,a=c)),$),t,l=j,n=()=>(l(),l=B(p,c=>r(2,t=c)),p);u.$$.on_destroy.push(()=>o()),u.$$.on_destroy.push(()=>l());let{$$slots:i={},$$scope:f}=e,{currentFile:p}=e;n();let{state:$}=e;s();function C(){Q(t+".json",JSON.stringify(a))}return u.$$set=c=>{"currentFile"in c&&n(r(0,p=c.currentFile)),"state"in c&&s(r(1,$=c.state)),"$$scope"in c&&r(5,f=c.$$scope)},[p,$,t,C,i,f]}class rt extends z{constructor(e){super(),A(this,e,W,V,H,{currentFile:0,state:1})}}export{rt as E};
