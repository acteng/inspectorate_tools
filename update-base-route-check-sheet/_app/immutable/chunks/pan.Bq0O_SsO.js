import{s as v,l as W,u as Z,m as R,o as A,C as k,D as T,i as L,f as p,k as y,Y as ae,V as I,n as D,a as J,g as K,r as G,w as P,e as Q,c as X,b as $,q as x,v as ee}from"./scheduler.DGwhun8C.js";import{S as E,i as M,c as q,a as S,m as w,t as g,b as _,d as z,g as B,f as C,e as j}from"./index.B2vZYn3d.js";import"./index.D77ZbykK.js";import{S as se}from"./SecondaryButton.zQkvdoBX.js";import{c as te,p as ie,q as fe,t as ue,v as ce,a as me}from"./index.V0F4ih-Y.js";import{M as H}from"./Marker.DD8eK5Lz.js";import{b as N,t as F,s as ge,i as _e,o as de}from"./GeoreferenceLayer.svelte_svelte_type_style_lang.D6V64bRI.js";function be(l){let n;const o=l[1].default,e=W(o,l,l[3],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),n=!0},p(t,r){e&&e.p&&(!n||r&8)&&Z(e,o,t,t[3],n?A(o,t[3],r,null):R(t[3]),null)},i(t){n||(g(e,t),n=!0)},o(t){_(e,t),n=!1},d(t){e&&e.d(t)}}}function he(l){let n,o;return n=new se({props:{style:"margin-bottom: 0px",disabled:l[0],$$slots:{default:[be]},$$scope:{ctx:l}}}),n.$on("click",l[2]),{c(){q(n.$$.fragment)},l(e){S(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,[t]){const r={};t&1&&(r.disabled=e[0]),t&8&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){o||(g(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){z(n,e)}}}function pe(l,n,o){let{$$slots:e={},$$scope:t}=n,{disabled:r=!1}=n;function a(f){k.call(this,l,f)}return l.$$set=f=>{"disabled"in f&&o(0,r=f.disabled),"$$scope"in f&&o(3,t=f.$$scope)},[r,e,a,t]}class Ae extends E{constructor(n){super(),M(this,n,pe,he,v,{disabled:0})}}function O(l){let n=l[0],o,e,t=U(l);return{c(){t.c(),o=T()},l(r){t.l(r),o=T()},m(r,a){t.m(r,a),L(r,o,a),e=!0},p(r,a){a&1&&v(n,n=r[0])?(B(),_(t,1,1,D),C(),t=U(r),t.c(),g(t,1),t.m(o.parentNode,o)):t.p(r,a)},i(r){e||(g(t),e=!0)},o(r){_(t),e=!1},d(r){r&&p(o),t.d(r)}}}function U(l){let n;const o=l[10].default,e=W(o,l,l[9],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),n=!0},p(t,r){e&&e.p&&(!n||r&512)&&Z(e,o,t,t[9],n?A(o,t[9],r,null):R(t[9]),null)},i(t){n||(g(e,t),n=!0)},o(t){_(e,t),n=!1},d(t){e&&e.d(t)}}}function ke(l){let n,o,e=l[0]&&O(l);return{c(){e&&e.c(),n=T()},l(t){e&&e.l(t),n=T()},m(t,r){e&&e.m(t,r),L(t,n,r),o=!0},p(t,[r]){t[0]?e?(e.p(t,r),r&1&&g(e,1)):(e=O(t),e.c(),g(e,1),e.m(n.parentNode,n)):e&&(B(),_(e,1,1,()=>{e=null}),C())},i(t){o||(g(e),o=!0)},o(t){_(e),o=!1},d(t){t&&p(n),e&&e.d(t)}}}function ye(l,n,o){let e,t,{$$slots:r={},$$scope:a}=n,{id:f=te("image")}=n,{url:d}=n,{coordinates:b}=n;const{map:h,self:i}=ie();y(l,h,m=>o(8,t=m)),y(l,i,m=>o(0,e=m));let c,s=!0;return ae(()=>{e&&t&&(fe(h,e,c),I(i,e=null,e),o(6,c=void 0))}),l.$$set=m=>{"id"in m&&o(3,f=m.id),"url"in m&&o(4,d=m.url),"coordinates"in m&&o(5,b=m.coordinates),"$$scope"in m&&o(9,a=m.$$scope)},l.$$.update=()=>{l.$$.dirty&313&&t&&e!==f&&(I(i,e=f,e),ue(t,e,ce({type:"image",url:d,coordinates:b}),m=>t&&m===e,()=>{e&&(o(6,c=t==null?void 0:t.getSource(e)),o(7,s=!0))})),l.$$.dirty&264&&(t==null||t.on("style.load",()=>{o(6,c=t==null?void 0:t.getSource(f))})),l.$$.dirty&224&&c&&(s?o(7,s=!1):c.setCoordinates(b))},[e,h,i,f,d,b,c,s,t,a,r]}class Le extends E{constructor(n){super(),M(this,n,ye,ke,v,{id:3,url:4,coordinates:5})}}function Ie(l){let n;const o=l[8].default,e=W(o,l,l[15],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,r){e&&e.m(t,r),n=!0},p(t,r){e&&e.p&&(!n||r&32768)&&Z(e,o,t,t[15],n?A(o,t[15],r,null):R(t[15]),null)},i(t){n||(g(e,t),n=!0)},o(t){_(e,t),n=!1},d(t){e&&e.d(t)}}}function Te(l){let n,o;return n=new me({props:{id:l[0],type:"raster",source:l[1],beforeId:l[2],beforeLayerType:l[3],paint:l[4],layout:l[5],minzoom:l[6],maxzoom:l[7],$$slots:{default:[Ie]},$$scope:{ctx:l}}}),n.$on("click",l[9]),n.$on("dblclick",l[10]),n.$on("contextmenu",l[11]),n.$on("mouseenter",l[12]),n.$on("mousemove",l[13]),n.$on("mouseleave",l[14]),{c(){q(n.$$.fragment)},l(e){S(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,[t]){const r={};t&1&&(r.id=e[0]),t&2&&(r.source=e[1]),t&4&&(r.beforeId=e[2]),t&8&&(r.beforeLayerType=e[3]),t&16&&(r.paint=e[4]),t&32&&(r.layout=e[5]),t&64&&(r.minzoom=e[6]),t&128&&(r.maxzoom=e[7]),t&32768&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){o||(g(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){z(n,e)}}}function qe(l,n,o){let{$$slots:e={},$$scope:t}=n,{id:r=te("raster-layer")}=n,{source:a=void 0}=n,{beforeId:f=void 0}=n,{beforeLayerType:d=void 0}=n,{paint:b}=n,{layout:h=void 0}=n,{minzoom:i=void 0}=n,{maxzoom:c=void 0}=n;function s(u){k.call(this,l,u)}function m(u){k.call(this,l,u)}function ne(u){k.call(this,l,u)}function le(u){k.call(this,l,u)}function oe(u){k.call(this,l,u)}function re(u){k.call(this,l,u)}return l.$$set=u=>{"id"in u&&o(0,r=u.id),"source"in u&&o(1,a=u.source),"beforeId"in u&&o(2,f=u.beforeId),"beforeLayerType"in u&&o(3,d=u.beforeLayerType),"paint"in u&&o(4,b=u.paint),"layout"in u&&o(5,h=u.layout),"minzoom"in u&&o(6,i=u.minzoom),"maxzoom"in u&&o(7,c=u.maxzoom),"$$scope"in u&&o(15,t=u.$$scope)},[r,a,f,d,b,h,i,c,e,s,m,ne,le,oe,re,t]}class Se extends E{constructor(n){super(),M(this,n,qe,Te,v,{id:0,source:1,beforeId:2,beforeLayerType:3,paint:4,layout:5,minzoom:6,maxzoom:7})}}function V(l){let n,o;return n=new Le({props:{url:l[2],coordinates:[[l[0].lng,l[0].lat],[l[3].lng,l[0].lat],[l[3].lng,l[3].lat],[l[0].lng,l[3].lat]],$$slots:{default:[we]},$$scope:{ctx:l}}}),{c(){q(n.$$.fragment)},l(e){S(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,t){const r={};t&4&&(r.url=e[2]),t&9&&(r.coordinates=[[e[0].lng,e[0].lat],[e[3].lng,e[0].lat],[e[3].lng,e[3].lat],[e[0].lng,e[3].lat]]),t&1040&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){o||(g(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){z(n,e)}}}function we(l){let n,o;return n=new Se({props:{beforeId:l[5](),paint:{"raster-fade-duration":0,"raster-opacity":l[4]/100}}}),{c(){q(n.$$.fragment)},l(e){S(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,t){const r={};t&16&&(r.paint={"raster-fade-duration":0,"raster-opacity":e[4]/100}),n.$set(r)},i(e){o||(g(n.$$.fragment,e),o=!0)},o(e){_(n.$$.fragment,e),o=!1},d(e){z(n,e)}}}function Y(l){let n,o,e,t,r,a;function f(i){l[8](i)}let d={draggable:!0,$$slots:{default:[ze]},$$scope:{ctx:l}};l[0]!==void 0&&(d.lngLat=l[0]),n=new H({props:d}),G.push(()=>j(n,"lngLat",f));function b(i){l[9](i)}let h={draggable:!0,$$slots:{default:[ve]},$$scope:{ctx:l}};return l[3]!==void 0&&(h.lngLat=l[3]),t=new H({props:h}),G.push(()=>j(t,"lngLat",b)),{c(){q(n.$$.fragment),e=J(),q(t.$$.fragment)},l(i){S(n.$$.fragment,i),e=K(i),S(t.$$.fragment,i)},m(i,c){w(n,i,c),L(i,e,c),w(t,i,c),a=!0},p(i,c){const s={};c&1024&&(s.$$scope={dirty:c,ctx:i}),!o&&c&1&&(o=!0,s.lngLat=i[0],P(()=>o=!1)),n.$set(s);const m={};c&1024&&(m.$$scope={dirty:c,ctx:i}),!r&&c&8&&(r=!0,m.lngLat=i[3],P(()=>r=!1)),t.$set(m)},i(i){a||(g(n.$$.fragment,i),g(t.$$.fragment,i),a=!0)},o(i){_(n.$$.fragment,i),_(t.$$.fragment,i),a=!1},d(i){i&&p(e),z(n,i),z(t,i)}}}function ze(l){let n;return{c(){n=Q("span"),this.h()},l(o){n=X(o,"SPAN",{class:!0,style:!0}),$(n).forEach(p),this.h()},h(){x(n,"class","dot svelte-1tmbx1c"),ee(n,"background-color","red")},m(o,e){L(o,n,e)},p:D,d(o){o&&p(n)}}}function ve(l){let n;return{c(){n=Q("span"),this.h()},l(o){n=X(o,"SPAN",{class:!0,style:!0}),$(n).forEach(p),this.h()},h(){x(n,"class","dot svelte-1tmbx1c"),ee(n,"background-color","blue")},m(o,e){L(o,n,e)},p:D,d(o){o&&p(n)}}}function Ne(l){let n,o,e,t=l[2]&&l[0].lng!=l[3].lng&&V(l),r=l[2]&&l[1]&&Y(l);return{c(){t&&t.c(),n=J(),r&&r.c(),o=T()},l(a){t&&t.l(a),n=K(a),r&&r.l(a),o=T()},m(a,f){t&&t.m(a,f),L(a,n,f),r&&r.m(a,f),L(a,o,f),e=!0},p(a,[f]){a[2]&&a[0].lng!=a[3].lng?t?(t.p(a,f),f&13&&g(t,1)):(t=V(a),t.c(),g(t,1),t.m(n.parentNode,n)):t&&(B(),_(t,1,1,()=>{t=null}),C()),a[2]&&a[1]?r?(r.p(a,f),f&6&&g(r,1)):(r=Y(a),r.c(),g(r,1),r.m(o.parentNode,o)):r&&(B(),_(r,1,1,()=>{r=null}),C())},i(a){e||(g(t),g(r),e=!0)},o(a){_(t),_(r),e=!1},d(a){a&&(p(n),p(o)),t&&t.d(a),r&&r.d(a)}}}function Fe(l,n,o){let e,t,r,a,f;y(l,N,s=>o(3,e=s)),y(l,F,s=>o(0,t=s)),y(l,ge,s=>o(1,r=s)),y(l,_e,s=>o(2,a=s)),y(l,de,s=>o(4,f=s));let{map:d}=n,{beforeId:b}=n;function h(){if(d&&b&&d.getLayer(b))return b}function i(s){t=s,F.set(t)}function c(s){e=s,N.set(e)}return l.$$set=s=>{"map"in s&&o(6,d=s.map),"beforeId"in s&&o(7,b=s.beforeId)},l.$$.update=()=>{if(l.$$.dirty&71&&a&&r&&t.lng==0&&t.lat==0){let s=d.getBounds();I(F,t.lng=s.getWest()+.4*(s.getEast()-s.getWest()),t),I(N,e.lng=s.getWest()+.6*(s.getEast()-s.getWest()),e),I(F,t.lat=s.getNorth()+.4*(s.getSouth()-s.getNorth()),t),I(N,e.lat=s.getNorth()+.6*(s.getSouth()-s.getNorth()),e)}},[t,r,a,e,f,h,d,b,i,c]}class De extends E{constructor(n){super(),M(this,n,Fe,Ne,v,{map:6,beforeId:7})}}const Ge="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M402-40q-30%200-56-13.5T303-92L48-465l24-23q19-19%2045-22t47%2012l116%2081v-383q0-17%2011.5-28.5T320-840q17%200%2028.5%2011.5T360-800v537L212-367l157%20229q5%208%2014%2013t19%205h278q33%200%2056.5-23.5T760-200v-560q0-17%2011.5-28.5T800-800q17%200%2028.5%2011.5T840-760v560q0%2066-47%20113T680-40H402Zm38-440v-400q0-17%2011.5-28.5T480-920q17%200%2028.5%2011.5T520-880v400h-80Zm160%200v-360q0-17%2011.5-28.5T640-880q17%200%2028.5%2011.5T680-840v360h-80ZM486-300Z'%20fill='black'/%3e%3c/svg%3e";export{De as G,Ae as I,Ge as p};
