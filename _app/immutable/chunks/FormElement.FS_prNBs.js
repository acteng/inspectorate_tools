import{s as v,l as U,e as h,t as D,a as I,c as y,b,d as E,f as _,g as S,o as c,i as V,h as g,j as R,u as k,p as w,q as j}from"./scheduler.DYUcsWQI.js";import{S as q,i as A,t as F,a as L}from"./index.ADnkt-Ju.js";let m;const B=new Uint8Array(16);function C(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(B)}const a=[];for(let t=0;t<256;++t)a.push((t+256).toString(16).slice(1));function H(t,e=0){return a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]}const T=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:T};function K(t,e,s){if(f.randomUUID&&!e&&!t)return f.randomUUID();t=t||{};const i=t.random||(t.rng||C)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){s=s||0;for(let o=0;o<16;++o)e[s+o]=i[o];return e}return H(i)}function x(t){let e,s,i,o,u;const d=t[3].default,n=U(d,t,t[2],null);return{c(){e=h("div"),s=h("label"),i=D(t[0]),o=I(),n&&n.c(),this.h()},l(l){e=y(l,"DIV",{class:!0});var r=b(e);s=y(r,"LABEL",{class:!0,for:!0});var p=b(s);i=E(p,t[0]),p.forEach(_),o=S(r),n&&n.l(r),r.forEach(_),this.h()},h(){c(s,"class","govuk-label govuk-label--s"),c(s,"for",t[1]),c(e,"class","govuk-form-group")},m(l,r){V(l,e,r),g(e,s),g(s,i),g(e,o),n&&n.m(e,null),u=!0},p(l,[r]){(!u||r&1)&&R(i,l[0]),(!u||r&2)&&c(s,"for",l[1]),n&&n.p&&(!u||r&4)&&k(n,d,l,l[2],u?j(d,l[2],r,null):w(l[2]),null)},i(l){u||(F(n,l),u=!0)},o(l){L(n,l),u=!1},d(l){l&&_(e),n&&n.d(l)}}}function z(t,e,s){let{$$slots:i={},$$scope:o}=e,{label:u}=e,{id:d}=e;return t.$$set=n=>{"label"in n&&s(0,u=n.label),"id"in n&&s(1,d=n.id),"$$scope"in n&&s(2,o=n.$$scope)},[u,d,o,i]}class M extends q{constructor(e){super(),A(this,e,z,x,v,{label:0,id:1})}}export{M as F,K as v};
