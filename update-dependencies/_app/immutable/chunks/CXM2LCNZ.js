import{s as A,l as K,r as Q,d as b,u as U,m as X,o as Y,v as x,i as I,b as k,w as M,c as O,q as L,g as y,e as z,h as V,j as E,T as ee,f as Z,t as H}from"./hklQk-fT.js";import{S as te,i as oe,e as ne,d as F,t as w,a as g,g as re,f as ae,m as D,c as N,b as T}from"./4RGf_tlt.js";import{M as se,b as le}from"./CWoLs9aG.js";import{E as ie}from"./Cbq5WR3j.js";import{F as fe}from"./B686ZwLv.js";import"./DNOoCnSc.js";import{S as me}from"./DA7LY1yu.js";import{W as pe}from"./Ds1ziPsG.js";import{C as ue}from"./DZ8kM53C.js";function P(a){let t,n,r,s;return t=new pe({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),t.$on("click",a[3]),r=new me({props:{$$slots:{default:[$e]},$$scope:{ctx:a}}}),r.$on("click",a[7]),{c(){T(t.$$.fragment),n=E(),T(r.$$.fragment)},l(e){N(t.$$.fragment,e),n=y(e),N(r.$$.fragment,e)},m(e,l){D(t,e,l),I(e,n,l),D(r,e,l),s=!0},p(e,l){const h={};l&512&&(h.$$scope={dirty:l,ctx:e}),t.$set(h);const v={};l&512&&(v.$$scope={dirty:l,ctx:e}),r.$set(v)},i(e){s||(g(t.$$.fragment,e),g(r.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),w(r.$$.fragment,e),s=!1},d(e){e&&b(n),F(t,e),F(r,e)}}}function ce(a){let t;return{c(){t=H("Clear map")},l(n){t=Z(n,"Clear map")},m(n,r){I(n,t,r)},d(n){n&&b(t)}}}function $e(a){let t;return{c(){t=H("Zoom to fit")},l(n){t=Z(n,"Zoom to fit")},m(n,r){I(n,t,r)},d(n){n&&b(t)}}}function _e(a){let t,n;return t=new ue({props:{gj:a[0],show:!0}}),{c(){T(t.$$.fragment)},l(r){N(t.$$.fragment,r)},m(r,s){D(t,r,s),n=!0},p(r,s){const e={};s&1&&(e.gj=r[0]),t.$set(e)},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),n=!1},d(r){F(t,r)}}}function ge(a){let t,n="Network Map",r,s,e,l,h=`Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.`,v,d,C,$,B,p,J,_,m,W,S;d=new fe({props:{label:"Import from GeoJSON file",onLoad:a[4]}}),$=new ie({props:{errorMessage:a[2]}});let i=a[0].features.length>0&&P(a);const q=a[6].default,u=K(q,a,a[9],null);function R(o){a[8](o)}let G={$$slots:{default:[_e]},$$scope:{ctx:a}};return a[1]!==void 0&&(G.map=a[1]),m=new se({props:G}),Q.push(()=>ne(m,"map",R)),{c(){t=V("h2"),t.textContent=n,r=E(),s=V("div"),e=V("div"),l=V("p"),l.textContent=h,v=E(),T(d.$$.fragment),C=E(),T($.$$.fragment),B=E(),i&&i.c(),p=E(),u&&u.c(),J=E(),_=V("div"),T(m.$$.fragment),this.h()},l(o){t=O(o,"H2",{"data-svelte-h":!0}),L(t)!=="svelte-1fkh1ci"&&(t.textContent=n),r=y(o),s=O(o,"DIV",{style:!0});var f=z(s);e=O(f,"DIV",{style:!0});var c=z(e);l=O(c,"P",{"data-svelte-h":!0}),L(l)!=="svelte-1r7hkzo"&&(l.textContent=h),v=y(c),N(d.$$.fragment,c),C=y(c),N($.$$.fragment,c),B=y(c),i&&i.l(c),p=y(c),u&&u.l(c),c.forEach(b),J=y(f),_=O(f,"DIV",{style:!0});var j=z(_);N(m.$$.fragment,j),j.forEach(b),f.forEach(b),this.h()},h(){M(e,"width","30%"),M(e,"overflow-y","scroll"),M(e,"padding","10px"),M(e,"border","1px solid black"),M(_,"position","relative"),M(_,"width","70%"),M(s,"display","flex"),M(s,"height","80vh")},m(o,f){I(o,t,f),I(o,r,f),I(o,s,f),k(s,e),k(e,l),k(e,v),D(d,e,null),k(e,C),D($,e,null),k(e,B),i&&i.m(e,null),k(e,p),u&&u.m(e,null),k(s,J),k(s,_),D(m,_,null),S=!0},p(o,[f]){const c={};f&4&&(c.errorMessage=o[2]),$.$set(c),o[0].features.length>0?i?(i.p(o,f),f&1&&g(i,1)):(i=P(o),i.c(),g(i,1),i.m(e,p)):i&&(re(),w(i,1,1,()=>{i=null}),ae()),u&&u.p&&(!S||f&512)&&U(u,q,o,o[9],S?Y(q,o[9],f,null):X(o[9]),null);const j={};f&513&&(j.$$scope={dirty:f,ctx:o}),!W&&f&2&&(W=!0,j.map=o[1],x(()=>W=!1)),m.$set(j)},i(o){S||(g(d.$$.fragment,o),g($.$$.fragment,o),g(i),g(u,o),g(m.$$.fragment,o),S=!0)},o(o){w(d.$$.fragment,o),w($.$$.fragment,o),w(i),w(u,o),w(m.$$.fragment,o),S=!1},d(o){o&&(b(t),b(r),b(s)),F(d),F($),i&&i.d(),u&&u.d(o),F(m)}}}function he(a,t,n){let{$$slots:r={},$$scope:s}=t,{gj:e}=t,l,h="";ee(()=>{C(!1)});function v(){window.confirm("Do you really want to erase the map data?")&&n(0,e={type:"FeatureCollection",features:[]})}function d(p,J){var _;n(2,h="");try{let m=JSON.parse(J);if(m.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((_=m.origin)!=null&&_.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(m.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");n(0,e=m),C(!0)}catch(m){n(2,h=`Error importing ${p}: ${m}`)}}function C(p){e.features.length>0&&l.fitBounds(le(e),{padding:20,animate:p})}const $=()=>C(!0);function B(p){l=p,n(1,l)}return a.$$set=p=>{"gj"in p&&n(0,e=p.gj),"$$scope"in p&&n(9,s=p.$$scope)},[e,l,h,v,d,C,r,$,B,s]}class Se extends te{constructor(t){super(),oe(this,t,he,ge,A,{gj:0})}}export{Se as C};
