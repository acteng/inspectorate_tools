import{s as Y,e as b,t as E,a as v,c as g,b as C,d as w,f as m,g as y,p as k,i as d,h,j as H,l as J,u as M,m as N,o as O,n as S,H as q,I as U,q as F}from"./scheduler.DGwhun8C.js";import{S as z,i as A,c as x,a as G,m as I,t as j,b as B,d as P}from"./index.B2vZYn3d.js";import{d as D}from"./download.C6h074W8.js";import{B as K}from"./ButtonGroup.kCbKs-s-.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.DtTunhhu.js";import{S as L}from"./SecondaryButton.zQkvdoBX.js";import{d as Q}from"./index.BXGTrpT6.js";function R(u){let e,o,a;return{c(){e=b("img"),a=E(`
    Export .json`),this.h()},l(r){e=g(r,"IMG",{src:!0,alt:!0,class:!0}),a=w(r,`
    Export .json`),this.h()},h(){U(e.src,o=D)||F(e,"src",o),F(e,"alt",""),F(e,"class","svelte-v2g1wg")},m(r,n){d(r,e,n),d(r,a,n)},p:S,d(r){r&&(m(e),m(a))}}}function T(u){let e,o,a;e=new L({props:{$$slots:{default:[R]},$$scope:{ctx:u}}}),e.$on("click",u[3]);const r=u[4].default,n=J(r,u,u[5],null);return{c(){x(e.$$.fragment),o=v(),n&&n.c()},l(t){G(e.$$.fragment,t),o=y(t),n&&n.l(t)},m(t,i){I(e,t,i),d(t,o,i),n&&n.m(t,i),a=!0},p(t,i){const c={};i&32&&(c.$$scope={dirty:i,ctx:t}),e.$set(c),n&&n.p&&(!a||i&32)&&M(n,r,t,t[5],a?O(r,t[5],i,null):N(t[5]),null)},i(t){a||(j(e.$$.fragment,t),j(n,t),a=!0)},o(t){B(e.$$.fragment,t),B(n,t),a=!1},d(t){t&&m(o),P(e,t),n&&n.d(t)}}}function V(u){let e,o,a,r,n,t,i="Export the file to send to someone else or use on another computer.",c,f,p;return f=new K({props:{$$slots:{default:[T]},$$scope:{ctx:u}}}),{c(){e=b("p"),o=b("b"),a=E("You are editing: "),r=E(u[2]),n=v(),t=b("p"),t.textContent=i,c=v(),x(f.$$.fragment)},l(s){e=g(s,"P",{});var l=C(e);o=g(l,"B",{});var $=C(o);a=w($,"You are editing: "),r=w($,u[2]),$.forEach(m),l.forEach(m),n=y(s),t=g(s,"P",{"data-svelte-h":!0}),k(t)!=="svelte-f3rxrb"&&(t.textContent=i),c=y(s),G(f.$$.fragment,s)},m(s,l){d(s,e,l),h(e,o),h(o,a),h(o,r),d(s,n,l),d(s,t,l),d(s,c,l),I(f,s,l),p=!0},p(s,[l]){(!p||l&4)&&H(r,s[2]);const $={};l&32&&($.$$scope={dirty:l,ctx:s}),f.$set($)},i(s){p||(j(f.$$.fragment,s),p=!0)},o(s){B(f.$$.fragment,s),p=!1},d(s){s&&(m(e),m(n),m(t),m(c)),P(f,s)}}}function W(u,e,o){let a,r=S,n=()=>(r(),r=q(l,_=>o(6,a=_)),l),t,i=S,c=()=>(i(),i=q(s,_=>o(2,t=_)),s);u.$$.on_destroy.push(()=>r()),u.$$.on_destroy.push(()=>i());let{$$slots:f={},$$scope:p}=e,{currentFile:s}=e;c();let{state:l}=e;n();function $(){Q(t+".json",JSON.stringify(a))}return u.$$set=_=>{"currentFile"in _&&c(o(0,s=_.currentFile)),"state"in _&&n(o(1,l=_.state)),"$$scope"in _&&o(5,p=_.$$scope)},[s,l,t,$,f,p]}class rt extends z{constructor(e){super(),A(this,e,W,V,Y,{currentFile:0,state:1})}}export{rt as E};
