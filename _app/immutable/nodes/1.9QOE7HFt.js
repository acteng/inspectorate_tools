import{s as S,e as _,t as f,b as x,c as d,f as g,j as h,d as l,h as j,i as m,k as v,z as $,n as E,l as k}from"../chunks/scheduler.CGD5Klry.js";import{S as q,i as y}from"../chunks/index.C9Pm0gl5.js";import{s as z}from"../chunks/entry.DQ9idH5u.js";const C=()=>{const s=z;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=f(r),n=x(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=j(e),i=d(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function w(s,t,r){let o;return k(s,H,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),y(this,t,w,P,S,{})}};export{F as component};
