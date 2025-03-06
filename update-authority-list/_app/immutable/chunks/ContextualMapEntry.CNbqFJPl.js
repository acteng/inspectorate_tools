import{s as A,l as K,r as Q,e as O,a as y,c as V,p as P,g as E,b as G,f as b,v as k,i as I,h as M,u as U,m as X,o as Y,w as x,T as ee,t as q,d as H}from"./scheduler.DGwhun8C.js";import{S as te,i as oe,e as ne,c as F,a as D,m as N,t as g,g as re,b as w,f as ae,d as T}from"./index.B2vZYn3d.js";import{M as se,b as le}from"./index.S0onxthC.js";import{E as ie}from"./ErrorMessage.BvpF5yI9.js";import{F as fe}from"./FileInput.Dup3W01p.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.DWF5-jl-.js";import{S as me}from"./SecondaryButton.zQkvdoBX.js";import{W as pe}from"./WarningButton.B3j9Frnm.js";import{C as ue}from"./ContextualMap.C9oEVpc0.js";function Z(a){let t,n,r,s;return t=new pe({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),t.$on("click",a[3]),r=new me({props:{$$slots:{default:[$e]},$$scope:{ctx:a}}}),r.$on("click",a[7]),{c(){F(t.$$.fragment),n=y(),F(r.$$.fragment)},l(e){D(t.$$.fragment,e),n=E(e),D(r.$$.fragment,e)},m(e,l){N(t,e,l),I(e,n,l),N(r,e,l),s=!0},p(e,l){const h={};l&512&&(h.$$scope={dirty:l,ctx:e}),t.$set(h);const v={};l&512&&(v.$$scope={dirty:l,ctx:e}),r.$set(v)},i(e){s||(g(t.$$.fragment,e),g(r.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),w(r.$$.fragment,e),s=!1},d(e){e&&b(n),T(t,e),T(r,e)}}}function ce(a){let t;return{c(){t=q("Clear map")},l(n){t=H(n,"Clear map")},m(n,r){I(n,t,r)},d(n){n&&b(t)}}}function $e(a){let t;return{c(){t=q("Zoom to fit")},l(n){t=H(n,"Zoom to fit")},m(n,r){I(n,t,r)},d(n){n&&b(t)}}}function _e(a){let t,n;return t=new ue({props:{gj:a[0],show:!0}}),{c(){F(t.$$.fragment)},l(r){D(t.$$.fragment,r)},m(r,s){N(t,r,s),n=!0},p(r,s){const e={};s&1&&(e.gj=r[0]),t.$set(e)},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){w(t.$$.fragment,r),n=!1},d(r){T(t,r)}}}function ge(a){let t,n="Network Map",r,s,e,l,h=`Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.`,v,d,C,$,B,p,J,_,m,W,S;d=new fe({props:{label:"Import from GeoJSON file",onLoad:a[4]}}),$=new ie({props:{errorMessage:a[2]}});let i=a[0].features.length>0&&Z(a);const z=a[6].default,u=K(z,a,a[9],null);function R(o){a[8](o)}let L={$$slots:{default:[_e]},$$scope:{ctx:a}};return a[1]!==void 0&&(L.map=a[1]),m=new se({props:L}),Q.push(()=>ne(m,"map",R)),{c(){t=O("h2"),t.textContent=n,r=y(),s=O("div"),e=O("div"),l=O("p"),l.textContent=h,v=y(),F(d.$$.fragment),C=y(),F($.$$.fragment),B=y(),i&&i.c(),p=y(),u&&u.c(),J=y(),_=O("div"),F(m.$$.fragment),this.h()},l(o){t=V(o,"H2",{"data-svelte-h":!0}),P(t)!=="svelte-1fkh1ci"&&(t.textContent=n),r=E(o),s=V(o,"DIV",{style:!0});var f=G(s);e=V(f,"DIV",{style:!0});var c=G(e);l=V(c,"P",{"data-svelte-h":!0}),P(l)!=="svelte-1r7hkzo"&&(l.textContent=h),v=E(c),D(d.$$.fragment,c),C=E(c),D($.$$.fragment,c),B=E(c),i&&i.l(c),p=E(c),u&&u.l(c),c.forEach(b),J=E(f),_=V(f,"DIV",{style:!0});var j=G(_);D(m.$$.fragment,j),j.forEach(b),f.forEach(b),this.h()},h(){k(e,"width","30%"),k(e,"overflow-y","scroll"),k(e,"padding","10px"),k(e,"border","1px solid black"),k(_,"position","relative"),k(_,"width","70%"),k(s,"display","flex"),k(s,"height","80vh")},m(o,f){I(o,t,f),I(o,r,f),I(o,s,f),M(s,e),M(e,l),M(e,v),N(d,e,null),M(e,C),N($,e,null),M(e,B),i&&i.m(e,null),M(e,p),u&&u.m(e,null),M(s,J),M(s,_),N(m,_,null),S=!0},p(o,[f]){const c={};f&4&&(c.errorMessage=o[2]),$.$set(c),o[0].features.length>0?i?(i.p(o,f),f&1&&g(i,1)):(i=Z(o),i.c(),g(i,1),i.m(e,p)):i&&(re(),w(i,1,1,()=>{i=null}),ae()),u&&u.p&&(!S||f&512)&&U(u,z,o,o[9],S?Y(z,o[9],f,null):X(o[9]),null);const j={};f&513&&(j.$$scope={dirty:f,ctx:o}),!W&&f&2&&(W=!0,j.map=o[1],x(()=>W=!1)),m.$set(j)},i(o){S||(g(d.$$.fragment,o),g($.$$.fragment,o),g(i),g(u,o),g(m.$$.fragment,o),S=!0)},o(o){w(d.$$.fragment,o),w($.$$.fragment,o),w(i),w(u,o),w(m.$$.fragment,o),S=!1},d(o){o&&(b(t),b(r),b(s)),T(d),T($),i&&i.d(),u&&u.d(o),T(m)}}}function he(a,t,n){let{$$slots:r={},$$scope:s}=t,{gj:e}=t,l,h="";ee(()=>{C(!1)});function v(){window.confirm("Do you really want to erase the map data?")&&n(0,e={type:"FeatureCollection",features:[]})}function d(p,J){var _;n(2,h="");try{let m=JSON.parse(J);if(m.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((_=m.origin)!=null&&_.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(m.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");n(0,e=m),C(!0)}catch(m){n(2,h=`Error importing ${p}: ${m}`)}}function C(p){e.features.length>0&&l.fitBounds(le(e),{padding:20,animate:p})}const $=()=>C(!0);function B(p){l=p,n(1,l)}return a.$$set=p=>{"gj"in p&&n(0,e=p.gj),"$$scope"in p&&n(9,s=p.$$scope)},[e,l,h,v,d,C,r,$,B,s]}class Se extends te{constructor(t){super(),oe(this,t,he,ge,A,{gj:0})}}export{Se as C};
