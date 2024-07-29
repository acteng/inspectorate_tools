import{s as q,F as z,i as y,f as k,k as p,S as ae,T as S,n as A,l as K,u as Q,r as U,v as V,D as L,a as X,g as Y,w as G,x as M,e as Z,c as v,b as $,p as x,q as ee}from"./scheduler.D5JRtHaf.js";import{S as D,i as F,t as c,g as C,b as _,f as R,c as I,a as N,m as T,d as w,e as P}from"./index.Xm1AgzMF.js";import{a as te,u as se,c as ie,f as fe,h as ue,L as me}from"./index.CIvI-uRU.js";import{b as E,t as W,s as ce,i as _e,o as ge,M as j}from"./GeoreferenceLayer.svelte_svelte_type_style_lang.rglxmCM4.js";function B(l){let n=l[0],o,e,t=O(l);return{c(){t.c(),o=z()},l(r){t.l(r),o=z()},m(r,s){t.m(r,s),y(r,o,s),e=!0},p(r,s){s&1&&q(n,n=r[0])?(C(),_(t,1,1,A),R(),t=O(r),t.c(),c(t,1),t.m(o.parentNode,o)):t.p(r,s)},i(r){e||(c(t),e=!0)},o(r){_(t),e=!1},d(r){r&&k(o),t.d(r)}}}function O(l){let n;const o=l[10].default,e=K(o,l,l[9],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),n=!0},p(t,r){e&&e.p&&(!n||r&512)&&Q(e,o,t,t[9],n?V(o,t[9],r,null):U(t[9]),null)},i(t){n||(c(e,t),n=!0)},o(t){_(e,t),n=!1},d(t){e&&e.d(t)}}}function de(l){let n,o,e=l[0]&&B(l);return{c(){e&&e.c(),n=z()},l(t){e&&e.l(t),n=z()},m(t,r){e&&e.m(t,r),y(t,n,r),o=!0},p(t,[r]){t[0]?e?(e.p(t,r),r&1&&c(e,1)):(e=B(t),e.c(),c(e,1),e.m(n.parentNode,n)):e&&(C(),_(e,1,1,()=>{e=null}),R())},i(t){o||(c(e),o=!0)},o(t){_(e),o=!1},d(t){t&&k(n),e&&e.d(t)}}}function be(l,n,o){let e,t,{$$slots:r={},$$scope:s}=n,{id:f=te("image")}=n,{url:g}=n,{coordinates:d}=n;const{map:b,self:a}=se();p(l,b,m=>o(8,t=m)),p(l,a,m=>o(0,e=m));let u,h=!0;return ae(()=>{e&&t&&(ie(b,e,u),S(a,e=null,e),o(6,u=void 0))}),l.$$set=m=>{"id"in m&&o(3,f=m.id),"url"in m&&o(4,g=m.url),"coordinates"in m&&o(5,d=m.coordinates),"$$scope"in m&&o(9,s=m.$$scope)},l.$$.update=()=>{l.$$.dirty&313&&t&&e!==f&&(S(a,e=f,e),fe(t,e,ue({type:"image",url:g,coordinates:d}),m=>t&&m===e,()=>{e&&(o(6,u=t==null?void 0:t.getSource(e)),o(7,h=!0))})),l.$$.dirty&264&&(t==null||t.on("style.load",()=>{o(6,u=t==null?void 0:t.getSource(f))})),l.$$.dirty&224&&u&&(h?o(7,h=!1):u.setCoordinates(d))},[e,b,a,f,g,d,u,h,t,s,r]}class he extends D{constructor(n){super(),F(this,n,be,de,q,{id:3,url:4,coordinates:5})}}function ke(l){let n;const o=l[8].default,e=K(o,l,l[15],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),n=!0},p(t,r){e&&e.p&&(!n||r&32768)&&Q(e,o,t,t[15],n?V(o,t[15],r,null):U(t[15]),null)},i(t){n||(c(e,t),n=!0)},o(t){_(e,t),n=!1},d(t){e&&e.d(t)}}}function pe(l){let n,o;return n=new me({props:{id:l[0],type:"raster",source:l[1],beforeId:l[2],beforeLayerType:l[3],paint:l[4],layout:l[5],minzoom:l[6],maxzoom:l[7],$$slots:{default:[ke]},$$scope:{ctx:l}}}),n.$on("click",l[9]),n.$on("dblclick",l[10]),n.$on("contextmenu",l[11]),n.$on("mouseenter",l[12]),n.$on("mousemove",l[13]),n.$on("mouseleave",l[14]),{c(){I(n.$$.fragment)},l(e){N(n.$$.fragment,e)},m(e,t){T(n,e,t),o=!0},p(e,[t]){const r={};t&1&&(r.id=e[0]),t&2&&(r.source=e[1]),t&4&&(r.beforeId=e[2]),t&8&&(r.beforeLayerType=e[3]),t&16&&(r.paint=e[4]),t&32&&(r.layout=e[5]),t&64&&(r.minzoom=e[6]),t&128&&(r.maxzoom=e[7]),t&32768&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){o||(c(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){w(n,e)}}}function ye(l,n,o){let{$$slots:e={},$$scope:t}=n,{id:r=te("raster-layer")}=n,{source:s=void 0}=n,{beforeId:f=void 0}=n,{beforeLayerType:g=void 0}=n,{paint:d}=n,{layout:b=void 0}=n,{minzoom:a=void 0}=n,{maxzoom:u=void 0}=n;function h(i){L.call(this,l,i)}function m(i){L.call(this,l,i)}function ne(i){L.call(this,l,i)}function le(i){L.call(this,l,i)}function oe(i){L.call(this,l,i)}function re(i){L.call(this,l,i)}return l.$$set=i=>{"id"in i&&o(0,r=i.id),"source"in i&&o(1,s=i.source),"beforeId"in i&&o(2,f=i.beforeId),"beforeLayerType"in i&&o(3,g=i.beforeLayerType),"paint"in i&&o(4,d=i.paint),"layout"in i&&o(5,b=i.layout),"minzoom"in i&&o(6,a=i.minzoom),"maxzoom"in i&&o(7,u=i.maxzoom),"$$scope"in i&&o(15,t=i.$$scope)},[r,s,f,g,d,b,a,u,e,h,m,ne,le,oe,re,t]}class Le extends D{constructor(n){super(),F(this,n,ye,pe,q,{id:0,source:1,beforeId:2,beforeLayerType:3,paint:4,layout:5,minzoom:6,maxzoom:7})}}function H(l){let n,o;return n=new he({props:{url:l[2],coordinates:[[l[0].lng,l[0].lat],[l[3].lng,l[0].lat],[l[3].lng,l[3].lat],[l[0].lng,l[3].lat]],$$slots:{default:[Se]},$$scope:{ctx:l}}}),{c(){I(n.$$.fragment)},l(e){N(n.$$.fragment,e)},m(e,t){T(n,e,t),o=!0},p(e,t){const r={};t&4&&(r.url=e[2]),t&9&&(r.coordinates=[[e[0].lng,e[0].lat],[e[3].lng,e[0].lat],[e[3].lng,e[3].lat],[e[0].lng,e[3].lat]]),t&272&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){o||(c(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){w(n,e)}}}function Se(l){let n,o;return n=new Le({props:{paint:{"raster-fade-duration":0,"raster-opacity":l[4]/100}}}),{c(){I(n.$$.fragment)},l(e){N(n.$$.fragment,e)},m(e,t){T(n,e,t),o=!0},p(e,t){const r={};t&16&&(r.paint={"raster-fade-duration":0,"raster-opacity":e[4]/100}),n.$set(r)},i(e){o||(c(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){w(n,e)}}}function J(l){let n,o,e,t,r,s;function f(a){l[6](a)}let g={draggable:!0,$$slots:{default:[ze]},$$scope:{ctx:l}};l[0]!==void 0&&(g.lngLat=l[0]),n=new j({props:g}),G.push(()=>P(n,"lngLat",f));function d(a){l[7](a)}let b={draggable:!0,$$slots:{default:[Ie]},$$scope:{ctx:l}};return l[3]!==void 0&&(b.lngLat=l[3]),t=new j({props:b}),G.push(()=>P(t,"lngLat",d)),{c(){I(n.$$.fragment),e=X(),I(t.$$.fragment)},l(a){N(n.$$.fragment,a),e=Y(a),N(t.$$.fragment,a)},m(a,u){T(n,a,u),y(a,e,u),T(t,a,u),s=!0},p(a,u){const h={};u&256&&(h.$$scope={dirty:u,ctx:a}),!o&&u&1&&(o=!0,h.lngLat=a[0],M(()=>o=!1)),n.$set(h);const m={};u&256&&(m.$$scope={dirty:u,ctx:a}),!r&&u&8&&(r=!0,m.lngLat=a[3],M(()=>r=!1)),t.$set(m)},i(a){s||(c(n.$$.fragment,a),c(t.$$.fragment,a),s=!0)},o(a){_(n.$$.fragment,a),_(t.$$.fragment,a),s=!1},d(a){a&&k(e),w(n,a),w(t,a)}}}function ze(l){let n;return{c(){n=Z("span"),this.h()},l(o){n=v(o,"SPAN",{class:!0,style:!0}),$(n).forEach(k),this.h()},h(){x(n,"class","dot svelte-1tmbx1c"),ee(n,"background-color","red")},m(o,e){y(o,n,e)},p:A,d(o){o&&k(n)}}}function Ie(l){let n;return{c(){n=Z("span"),this.h()},l(o){n=v(o,"SPAN",{class:!0,style:!0}),$(n).forEach(k),this.h()},h(){x(n,"class","dot svelte-1tmbx1c"),ee(n,"background-color","blue")},m(o,e){y(o,n,e)},p:A,d(o){o&&k(n)}}}function Ne(l){let n,o,e,t=l[2]&&l[0].lng!=l[3].lng&&H(l),r=l[2]&&l[1]&&J(l);return{c(){t&&t.c(),n=X(),r&&r.c(),o=z()},l(s){t&&t.l(s),n=Y(s),r&&r.l(s),o=z()},m(s,f){t&&t.m(s,f),y(s,n,f),r&&r.m(s,f),y(s,o,f),e=!0},p(s,[f]){s[2]&&s[0].lng!=s[3].lng?t?(t.p(s,f),f&13&&c(t,1)):(t=H(s),t.c(),c(t,1),t.m(n.parentNode,n)):t&&(C(),_(t,1,1,()=>{t=null}),R()),s[2]&&s[1]?r?(r.p(s,f),f&6&&c(r,1)):(r=J(s),r.c(),c(r,1),r.m(o.parentNode,o)):r&&(C(),_(r,1,1,()=>{r=null}),R())},i(s){e||(c(t),c(r),e=!0)},o(s){_(t),_(r),e=!1},d(s){s&&(k(n),k(o)),t&&t.d(s),r&&r.d(s)}}}function Te(l,n,o){let e,t,r,s,f;p(l,E,a=>o(3,e=a)),p(l,W,a=>o(0,t=a)),p(l,ce,a=>o(1,r=a)),p(l,_e,a=>o(2,s=a)),p(l,ge,a=>o(4,f=a));let{map:g}=n;function d(a){t=a,W.set(t)}function b(a){e=a,E.set(e)}return l.$$set=a=>{"map"in a&&o(5,g=a.map)},l.$$.update=()=>{if(l.$$.dirty&39&&s&&r&&t.lng==0&&t.lat==0){let a=g.getBounds();S(W,t.lng=a.getWest()+.4*(a.getEast()-a.getWest()),t),S(E,e.lng=a.getWest()+.6*(a.getEast()-a.getWest()),e),S(W,t.lat=a.getNorth()+.4*(a.getSouth()-a.getNorth()),t),S(E,e.lat=a.getNorth()+.6*(a.getSouth()-a.getNorth()),e)}},[t,r,s,e,f,g,d,b]}class Re extends D{constructor(n){super(),F(this,n,Te,Ne,q,{map:5})}}export{Re as G};
