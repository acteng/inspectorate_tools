import{s as Q,r as G,e as W,a as M,c as B,b as J,g as O,f as k,q as ae,A as Z,i as F,h as S,w as L,l as le,p as A,v as E,u as se,m as oe,o as re,R as ie,t as U,d as X}from"./scheduler.B5FfXhnD.js";import{S as Y,i as x,e as P,c as y,a as I,m as j,t as d,g as ee,b as v,f as te,d as V}from"./index.VeCIHQiF.js";import"./index.B-vk3dUq.js";import{S as fe}from"./Select.BRAQaOLQ.js";import{T as ue}from"./TextInput.qrDccq99.js";import{M as me,c as ce}from"./index.CjgSoCCq.js";import{E as pe}from"./ErrorMessage.DVpXqM0G.js";import{F as he}from"./FileInput.unW8H0rY.js";import{S as ge}from"./SecondaryButton.D6CH7aQ3.js";import{W as _e}from"./WarningButton.CAKjKYUQ.js";import{C as de}from"./ContextualMap.BJYWQ4HF.js";function H(l){let e,n,a;function u(s){l[10](s)}let t={label:"Enter a custom value"};return l[0]!==void 0&&(t.value=l[0]),e=new ue({props:t}),G.push(()=>P(e,"value",u)),{c(){y(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,p){j(e,s,p),a=!0},p(s,p){const o={};!n&&p&1&&(n=!0,o.value=s[0],L(()=>n=!1)),e.$set(o)},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){V(e,s)}}}function be(l){let e,n,a,u,t;function s(i){l[9](i)}let p={label:l[1],hint:l[2],choices:l[6],emptyOption:l[3],disabled:l[4]};l[5]!==void 0&&(p.value=l[5]),n=new fe({props:p}),G.push(()=>P(n,"value",s)),n.$on("change",l[7]);let o=l[5]=="other"&&H(l);return{c(){e=W("div"),y(n.$$.fragment),u=M(),o&&o.c(),this.h()},l(i){e=B(i,"DIV",{class:!0});var m=J(e);I(n.$$.fragment,m),u=O(m),o&&o.l(m),m.forEach(k),this.h()},h(){ae(e,"class","svelte-gtlbk6"),Z(e,"grouped",l[5]=="other")},m(i,m){F(i,e,m),j(n,e,null),S(e,u),o&&o.m(e,null),t=!0},p(i,[m]){const h={};m&2&&(h.label=i[1]),m&4&&(h.hint=i[2]),m&8&&(h.emptyOption=i[3]),m&16&&(h.disabled=i[4]),!a&&m&32&&(a=!0,h.value=i[5],L(()=>a=!1)),n.$set(h),i[5]=="other"?o?(o.p(i,m),m&32&&d(o,1)):(o=H(i),o.c(),d(o,1),o.m(e,null)):o&&(ee(),v(o,1,1,()=>{o=null}),te()),(!t||m&32)&&Z(e,"grouped",i[5]=="other")},i(i){t||(d(n.$$.fragment,i),d(o),t=!0)},o(i){v(n.$$.fragment,i),v(o),t=!1},d(i){i&&k(e),V(n),o&&o.d()}}}function $e(l,e,n){let{label:a}=e,{hint:u=""}=e,{choices:t}=e,{emptyOption:s=!1}=e,{disabled:p=!1}=e,{value:o}=e,i=new Set(t.map(r=>r[0])),m=[...t,["other","Other"]];s&&i.add("");function h(r){return i.has(r)?r:"other"}let C=h(o);function g(){n(0,o=C=="other"?"":C)}function D(r){C=r,n(5,C)}function w(r){o=r,n(0,o)}return l.$$set=r=>{"label"in r&&n(1,a=r.label),"hint"in r&&n(2,u=r.hint),"choices"in r&&n(8,t=r.choices),"emptyOption"in r&&n(3,s=r.emptyOption),"disabled"in r&&n(4,p=r.disabled),"value"in r&&n(0,o=r.value)},[o,a,u,s,p,C,m,g,t,D,w]}class We extends Y{constructor(e){super(),x(this,e,$e,be,Q,{label:1,hint:2,choices:8,emptyOption:3,disabled:4,value:0})}}function K(l){let e,n,a,u;return e=new _e({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),e.$on("click",l[3]),a=new ge({props:{$$slots:{default:[we]},$$scope:{ctx:l}}}),a.$on("click",l[7]),{c(){y(e.$$.fragment),n=M(),y(a.$$.fragment)},l(t){I(e.$$.fragment,t),n=O(t),I(a.$$.fragment,t)},m(t,s){j(e,t,s),F(t,n,s),j(a,t,s),u=!0},p(t,s){const p={};s&512&&(p.$$scope={dirty:s,ctx:t}),e.$set(p);const o={};s&512&&(o.$$scope={dirty:s,ctx:t}),a.$set(o)},i(t){u||(d(e.$$.fragment,t),d(a.$$.fragment,t),u=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),u=!1},d(t){t&&k(n),V(e,t),V(a,t)}}}function ve(l){let e;return{c(){e=U("Clear map")},l(n){e=X(n,"Clear map")},m(n,a){F(n,e,a)},d(n){n&&k(e)}}}function we(l){let e;return{c(){e=U("Zoom to fit")},l(n){e=X(n,"Zoom to fit")},m(n,a){F(n,e,a)},d(n){n&&k(e)}}}function Ce(l){let e,n;return e=new de({props:{gj:l[0],show:!0}}),{c(){y(e.$$.fragment)},l(a){I(e.$$.fragment,a)},m(a,u){j(e,a,u),n=!0},p(a,u){const t={};u&1&&(t.gj=a[0]),e.$set(t)},i(a){n||(d(e.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),n=!1},d(a){V(e,a)}}}function ke(l){let e,n="Network Map",a,u,t,s,p=`Please add a map showing the section of route being scored in this file.
      If the route is part of a longer route of multiple sections (covered in
      other files), please show this on the map for context too.`,o,i,m,h,C,g,D,w,r,q,T;i=new he({props:{label:"Import from GeoJSON file",onLoad:l[4]}}),h=new pe({props:{errorMessage:l[2]}});let c=l[0].features.length>0&&K(l);const z=l[6].default,b=le(z,l,l[9],null);function ne(f){l[8](f)}let R={$$slots:{default:[Ce]},$$scope:{ctx:l}};return l[1]!==void 0&&(R.map=l[1]),r=new me({props:R}),G.push(()=>P(r,"map",ne)),{c(){e=W("h2"),e.textContent=n,a=M(),u=W("div"),t=W("div"),s=W("p"),s.textContent=p,o=M(),y(i.$$.fragment),m=M(),y(h.$$.fragment),C=M(),c&&c.c(),g=M(),b&&b.c(),D=M(),w=W("div"),y(r.$$.fragment),this.h()},l(f){e=B(f,"H2",{"data-svelte-h":!0}),A(e)!=="svelte-1fkh1ci"&&(e.textContent=n),a=O(f),u=B(f,"DIV",{style:!0});var _=J(u);t=B(_,"DIV",{style:!0});var $=J(t);s=B($,"P",{"data-svelte-h":!0}),A(s)!=="svelte-1r7hkzo"&&(s.textContent=p),o=O($),I(i.$$.fragment,$),m=O($),I(h.$$.fragment,$),C=O($),c&&c.l($),g=O($),b&&b.l($),$.forEach(k),D=O(_),w=B(_,"DIV",{style:!0});var N=J(w);I(r.$$.fragment,N),N.forEach(k),_.forEach(k),this.h()},h(){E(t,"width","30%"),E(t,"overflow-y","scroll"),E(t,"padding","10px"),E(t,"border","1px solid black"),E(w,"position","relative"),E(w,"width","70%"),E(u,"display","flex"),E(u,"height","80vh")},m(f,_){F(f,e,_),F(f,a,_),F(f,u,_),S(u,t),S(t,s),S(t,o),j(i,t,null),S(t,m),j(h,t,null),S(t,C),c&&c.m(t,null),S(t,g),b&&b.m(t,null),S(u,D),S(u,w),j(r,w,null),T=!0},p(f,[_]){const $={};_&4&&($.errorMessage=f[2]),h.$set($),f[0].features.length>0?c?(c.p(f,_),_&1&&d(c,1)):(c=K(f),c.c(),d(c,1),c.m(t,g)):c&&(ee(),v(c,1,1,()=>{c=null}),te()),b&&b.p&&(!T||_&512)&&se(b,z,f,f[9],T?re(z,f[9],_,null):oe(f[9]),null);const N={};_&513&&(N.$$scope={dirty:_,ctx:f}),!q&&_&2&&(q=!0,N.map=f[1],L(()=>q=!1)),r.$set(N)},i(f){T||(d(i.$$.fragment,f),d(h.$$.fragment,f),d(c),d(b,f),d(r.$$.fragment,f),T=!0)},o(f){v(i.$$.fragment,f),v(h.$$.fragment,f),v(c),v(b,f),v(r.$$.fragment,f),T=!1},d(f){f&&(k(e),k(a),k(u)),V(i),V(h),c&&c.d(),b&&b.d(f),V(r)}}}function Se(l,e,n){let{$$slots:a={},$$scope:u}=e,{gj:t}=e,s,p="";ie(()=>{m(!1)});function o(){window.confirm("Do you really want to erase the map data?")&&n(0,t={type:"FeatureCollection",features:[]})}function i(g,D){var w;n(2,p="");try{let r=JSON.parse(D);if(r.type!="FeatureCollection")throw new Error("This doesn't look like a GeoJSON file");if(!((w=r.origin)!=null&&w.startsWith("atip-")))throw new Error("This file wasn't produced with the Scheme Sketcher");if(r.crs)throw new Error("This file has a Coordinate Reference System set; it's not suitable for a web map");n(0,t=r),m(!0)}catch(r){n(2,p=`Error importing ${g}: ${r}`)}}function m(g){t.features.length>0&&s.fitBounds(ce(t),{padding:20,animate:g})}const h=()=>m(!0);function C(g){s=g,n(1,s)}return l.$$set=g=>{"gj"in g&&n(0,t=g.gj),"$$scope"in g&&n(9,u=g.$$scope)},[t,s,p,o,i,m,a,h,C,u]}class Be extends Y{constructor(e){super(),x(this,e,Se,ke,Q,{gj:0})}}export{Be as C,We as S};
