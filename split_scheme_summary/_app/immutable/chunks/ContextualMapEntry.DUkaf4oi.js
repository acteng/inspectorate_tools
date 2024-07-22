import{s as A,l as K,r as Q,e as P,a as y,c as T,p as L,g as E,b as z,f as b,v as k,i as I,h as M,u as U,m as X,o as Y,w as x,P as ee,t as q,d as H}from"./scheduler.D5Jpr0Om.js";import{S as te,i as ne,e as oe,c as F,b as D,m as N,t as g,g as ae,a as w,f as re,d as B}from"./index.B1PmXhrv.js";import{M as se,b as le,C as ie}from"./index.CbXYZPUV.js";import{E as fe}from"./ErrorMessage._1S-yeVT.js";import{F as me}from"./FileInput.DoKXVAL0.js";import{S as pe}from"./SecondaryButton.DIebqnsD.js";/* empty css                                            */import{W as ue}from"./WarningButton.BnNOfABf.js";function Z(r){let t,o,a,s;return t=new ue({props:{$$slots:{default:[ce]},$$scope:{ctx:r}}}),t.$on("click",r[3]),a=new pe({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),a.$on("click",r[7]),{c(){F(t.$$.fragment),o=y(),F(a.$$.fragment)},l(e){D(t.$$.fragment,e),o=E(e),D(a.$$.fragment,e)},m(e,l){N(t,e,l),I(e,o,l),N(a,e,l),s=!0},p(e,l){const h={};l&512&&(h.$$scope={dirty:l,ctx:e}),t.$set(h);const v={};l&512&&(v.$$scope={dirty:l,ctx:e}),a.$set(v)},i(e){s||(g(t.$$.fragment,e),g(a.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),w(a.$$.fragment,e),s=!1},d(e){e&&b(o),B(t,e),B(a,e)}}}function ce(r){let t;return{c(){t=q("Clear map")},l(o){t=H(o,"Clear map")},m(o,a){I(o,t,a)},d(o){o&&b(t)}}}function $e(r){let t;return{c(){t=q("Zoom to fit")},l(o){t=H(o,"Zoom to fit")},m(o,a){I(o,t,a)},d(o){o&&b(t)}}}function _e(r){let t,o;return t=new ie({props:{gj:r[0],show:!0}}),{c(){F(t.$$.fragment)},l(a){D(t.$$.fragment,a)},m(a,s){N(t,a,s),o=!0},p(a,s){const e={};s&1&&(e.gj=a[0]),t.$set(e)},i(a){o||(g(t.$$.fragment,a),o=!0)},o(a){w(t.$$.fragment,a),o=!1},d(a){B(t,a)}}}function ge(r){let t,o="Network Map",a,s,e,l,h=`Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.`,v,d,C,$,J,p,O,_,m,V,S;d=new me({props:{label:"Import from GeoJSON file",onLoad:r[4]}}),$=new fe({props:{errorMessage:r[2]}});let i=r[0].features.length>0&&Z(r);const W=r[6].default,u=K(W,r,r[9],null);function R(n){r[8](n)}let G={$$slots:{default:[_e]},$$scope:{ctx:r}};return r[1]!==void 0&&(G.map=r[1]),m=new se({props:G}),Q.push(()=>oe(m,"map",R)),{c(){t=P("h2"),t.textContent=o,a=y(),s=P("div"),e=P("div"),l=P("p"),l.textContent=h,v=y(),F(d.$$.fragment),C=y(),F($.$$.fragment),J=y(),i&&i.c(),p=y(),u&&u.c(),O=y(),_=P("div"),F(m.$$.fragment),this.h()},l(n){t=T(n,"H2",{"data-svelte-h":!0}),L(t)!=="svelte-1fkh1ci"&&(t.textContent=o),a=E(n),s=T(n,"DIV",{style:!0});var f=z(s);e=T(f,"DIV",{style:!0});var c=z(e);l=T(c,"P",{"data-svelte-h":!0}),L(l)!=="svelte-1r7hkzo"&&(l.textContent=h),v=E(c),D(d.$$.fragment,c),C=E(c),D($.$$.fragment,c),J=E(c),i&&i.l(c),p=E(c),u&&u.l(c),c.forEach(b),O=E(f),_=T(f,"DIV",{style:!0});var j=z(_);D(m.$$.fragment,j),j.forEach(b),f.forEach(b),this.h()},h(){k(e,"width","30%"),k(e,"overflow-y","scroll"),k(e,"padding","10px"),k(e,"border","1px solid black"),k(_,"position","relative"),k(_,"width","70%"),k(s,"display","flex"),k(s,"height","80vh")},m(n,f){I(n,t,f),I(n,a,f),I(n,s,f),M(s,e),M(e,l),M(e,v),N(d,e,null),M(e,C),N($,e,null),M(e,J),i&&i.m(e,null),M(e,p),u&&u.m(e,null),M(s,O),M(s,_),N(m,_,null),S=!0},p(n,[f]){const c={};f&4&&(c.errorMessage=n[2]),$.$set(c),n[0].features.length>0?i?(i.p(n,f),f&1&&g(i,1)):(i=Z(n),i.c(),g(i,1),i.m(e,p)):i&&(ae(),w(i,1,1,()=>{i=null}),re()),u&&u.p&&(!S||f&512)&&U(u,W,n,n[9],S?Y(W,n[9],f,null):X(n[9]),null);const j={};f&513&&(j.$$scope={dirty:f,ctx:n}),!V&&f&2&&(V=!0,j.map=n[1],x(()=>V=!1)),m.$set(j)},i(n){S||(g(d.$$.fragment,n),g($.$$.fragment,n),g(i),g(u,n),g(m.$$.fragment,n),S=!0)},o(n){w(d.$$.fragment,n),w($.$$.fragment,n),w(i),w(u,n),w(m.$$.fragment,n),S=!1},d(n){n&&(b(t),b(a),b(s)),B(d),B($),i&&i.d(),u&&u.d(n),B(m)}}}function he(r,t,o){let{$$slots:a={},$$scope:s}=t,{gj:e}=t,l,h="";ee(()=>{C(!1)});function v(){window.confirm("Do you really want to erase the map data?")&&o(0,e={type:"FeatureCollection",features:[]})}function d(p,O){var _;o(2,h="");try{let m=JSON.parse(O);if(m.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((_=m.origin)!=null&&_.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(m.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");o(0,e=m),C(!0)}catch(m){o(2,h=`Error importing ${p}: ${m}`)}}function C(p){e.features.length>0&&l.fitBounds(le(e),{padding:20,animate:p})}const $=()=>C(!0);function J(p){l=p,o(1,l)}return r.$$set=p=>{"gj"in p&&o(0,e=p.gj),"$$scope"in p&&o(9,s=p.$$scope)},[e,l,h,v,d,C,a,$,J,s]}class Ee extends te{constructor(t){super(),ne(this,t,he,ge,A,{gj:0})}}export{Ee as C};
