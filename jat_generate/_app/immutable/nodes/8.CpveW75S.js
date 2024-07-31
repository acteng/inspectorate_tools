import{s as se,l as le,e as d,a as y,t as L,c as v,b as j,g as $,m as re,d as O,f as r,o as ne,p as D,q as P,i as u,h as p,w as oe,j as W,u as ie,r as fe,v as ue,k as Y,x as me}from"../chunks/scheduler.NGc5rx4B.js";import{S as pe,i as _e,c as X,a as Z,m as x,t as z,b as B,d as ee}from"../chunks/index.CXr-pTxM.js";import{g as ce}from"../chunks/globals.D0QH3NT1.js";import{c as he,s as te,f as ge}from"../chunks/data.C_0TZsja.js";import{b as de}from"../chunks/paths.By4F8VuA.js";import{g as ae}from"../chunks/index.CHOP3sPT.js";import{p as ye}from"../chunks/stores.BMOmaNWj.js";import{N as ve,a as $e,f as be}from"../chunks/folder.zqJTOhmI.js";const{window:ke}=ce;function we(s){let l,o,b,_,i,H="Manage files",w,f,a,m,C,S,c,q,F,I,k,E=ae(s[2].url.pathname)+"",M,V,A,R,U,h,g,G,K;c=new ve({props:{routeCheckType:s[1].summary.checkType}});const J=s[5].default,n=le(J,s,s[4],null);return h=new $e({props:{routeCheckType:s[1].summary.checkType}}),{c(){l=d("div"),o=d("img"),_=y(),i=d("a"),i.textContent=H,w=y(),f=d("span"),a=L("Editing file "),m=d("u"),C=L(s[0]),S=y(),X(c.$$.fragment),q=y(),F=d("hr"),I=y(),k=d("h1"),M=L(E),V=y(),n&&n.c(),A=y(),R=d("hr"),U=y(),X(h.$$.fragment),this.h()},l(e){l=v(e,"DIV",{});var t=j(l);o=v(t,"IMG",{src:!0,alt:!0,style:!0}),_=$(t),i=v(t,"A",{href:!0,"data-svelte-h":!0}),re(i)!=="svelte-1sbp2vy"&&(i.textContent=H),w=$(t),f=v(t,"SPAN",{class:!0,style:!0});var T=j(f);a=O(T,"Editing file "),m=v(T,"U",{});var N=j(m);C=O(N,s[0]),N.forEach(r),T.forEach(r),t.forEach(r),S=$(e),Z(c.$$.fragment,e),q=$(e),F=v(e,"HR",{}),I=$(e),k=v(e,"H1",{style:!0});var Q=j(k);M=O(Q,E),Q.forEach(r),V=$(e),n&&n.l(e),A=$(e),R=v(e,"HR",{}),U=$(e),Z(h.$$.fragment,e),this.h()},h(){ne(o.src,b=be)||D(o,"src",b),D(o,"alt","Manage files"),P(o,"vertical-align","middle"),D(i,"href",de+"/route_check/files"),D(f,"class","govuk-body"),P(f,"margin-left","8px"),P(k,"text-align","center")},m(e,t){u(e,l,t),p(l,o),p(l,_),p(l,i),p(l,w),p(l,f),p(f,a),p(f,m),p(m,C),u(e,S,t),x(c,e,t),u(e,q,t),u(e,F,t),u(e,I,t),u(e,k,t),p(k,M),u(e,V,t),n&&n.m(e,t),u(e,A,t),u(e,R,t),u(e,U,t),x(h,e,t),g=!0,G||(K=oe(ke,"storage",s[3]),G=!0)},p(e,[t]){(!g||t&1)&&W(C,e[0]);const T={};t&2&&(T.routeCheckType=e[1].summary.checkType),c.$set(T),(!g||t&4)&&E!==(E=ae(e[2].url.pathname)+"")&&W(M,E),n&&n.p&&(!g||t&16)&&ie(n,J,e,e[4],g?ue(J,e[4],t,null):fe(e[4]),null);const N={};t&2&&(N.routeCheckType=e[1].summary.checkType),h.$set(N)},i(e){g||(z(c.$$.fragment,e),z(n,e),z(h.$$.fragment,e),g=!0)},o(e){B(c.$$.fragment,e),B(n,e),B(h.$$.fragment,e),g=!1},d(e){e&&(r(l),r(S),r(q),r(F),r(I),r(k),r(V),r(A),r(R),r(U)),ee(c,e),n&&n.d(e),ee(h,e),G=!1,K()}}}function Ce(s,l,o){let b,_,i;Y(s,he,a=>o(0,b=a)),Y(s,te,a=>o(1,_=a)),Y(s,ye,a=>o(2,i=a));let{$$slots:H={},$$scope:w}=l;function f(a){let m=ge.key(b);if(m==a.key)if(a.newValue)try{console.log(`${m} changed in another tab; applying the data here`),me(te,_=JSON.parse(a.newValue),_)}catch(C){console.error(`${m} changed in another tab, but the new value is broken: ${C}`)}else window.alert(`You deleted ${b} from another tab. If you continue editing it here, it'll be saved again.`)}return s.$$set=a=>{"$$scope"in a&&o(4,w=a.$$scope)},[b,_,i,f,w,H]}class Me extends pe{constructor(l){super(),_e(this,l,Ce,we,se,{})}}export{Me as component};
