import{s as N,l as Z,u as C,r as G,v as R,E as k,G as q,i as L,f as p,k as y,V as re,x as T,n as A,a as K,g as Q,y as P,z as j,e as X,c as Y,b as $,p as x,q as ee}from"./scheduler.V-ByFQ7u.js";import{S as M,i as W,c as S,a as z,m as w,t as m,b as g,d as I,g as E,f as B,e as D}from"./index.Zcf2TLuh.js";import{S as se}from"./SecondaryButton.BQqRVY7L.js";/* empty css                                            */import{c as te,o as ie,p as fe,q as ue,t as ce,a as me}from"./index.Dzexnv-D.js";import{M as H}from"./Marker.D0zf5-A0.js";import{b as v,t as F,s as ge,i as _e,o as de}from"./GeoreferenceLayer.svelte_svelte_type_style_lang.g2q0gswZ.js";function be(l){let n;const o=l[1].default,e=Z(o,l,l[3],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),n=!0},p(t,a){e&&e.p&&(!n||a&8)&&C(e,o,t,t[3],n?R(o,t[3],a,null):G(t[3]),null)},i(t){n||(m(e,t),n=!0)},o(t){g(e,t),n=!1},d(t){e&&e.d(t)}}}function he(l){let n,o;return n=new se({props:{style:"margin-bottom: 0px",disabled:l[0],$$slots:{default:[be]},$$scope:{ctx:l}}}),n.$on("click",l[2]),{c(){S(n.$$.fragment)},l(e){z(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,[t]){const a={};t&1&&(a.disabled=e[0]),t&8&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){o||(m(n.$$.fragment,e),o=!0)},o(e){g(n.$$.fragment,e),o=!1},d(e){I(n,e)}}}function pe(l,n,o){let{$$slots:e={},$$scope:t}=n,{disabled:a=!1}=n;function s(i){k.call(this,l,i)}return l.$$set=i=>{"disabled"in i&&o(0,a=i.disabled),"$$scope"in i&&o(3,t=i.$$scope)},[a,e,s,t]}class Re extends M{constructor(n){super(),W(this,n,pe,he,N,{disabled:0})}}function O(l){let n=l[0],o,e,t=U(l);return{c(){t.c(),o=q()},l(a){t.l(a),o=q()},m(a,s){t.m(a,s),L(a,o,s),e=!0},p(a,s){s&1&&N(n,n=a[0])?(E(),g(t,1,1,A),B(),t=U(a),t.c(),m(t,1),t.m(o.parentNode,o)):t.p(a,s)},i(a){e||(m(t),e=!0)},o(a){g(t),e=!1},d(a){a&&p(o),t.d(a)}}}function U(l){let n;const o=l[10].default,e=Z(o,l,l[9],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),n=!0},p(t,a){e&&e.p&&(!n||a&512)&&C(e,o,t,t[9],n?R(o,t[9],a,null):G(t[9]),null)},i(t){n||(m(e,t),n=!0)},o(t){g(e,t),n=!1},d(t){e&&e.d(t)}}}function ke(l){let n,o,e=l[0]&&O(l);return{c(){e&&e.c(),n=q()},l(t){e&&e.l(t),n=q()},m(t,a){e&&e.m(t,a),L(t,n,a),o=!0},p(t,[a]){t[0]?e?(e.p(t,a),a&1&&m(e,1)):(e=O(t),e.c(),m(e,1),e.m(n.parentNode,n)):e&&(E(),g(e,1,1,()=>{e=null}),B())},i(t){o||(m(e),o=!0)},o(t){g(e),o=!1},d(t){t&&p(n),e&&e.d(t)}}}function ye(l,n,o){let e,t,{$$slots:a={},$$scope:s}=n,{id:i=te("image")}=n,{url:_}=n,{coordinates:d}=n;const{map:b,self:r}=ie();y(l,b,c=>o(8,t=c)),y(l,r,c=>o(0,e=c));let u,h=!0;return re(()=>{e&&t&&(fe(b,e,u),T(r,e=null,e),o(6,u=void 0))}),l.$$set=c=>{"id"in c&&o(3,i=c.id),"url"in c&&o(4,_=c.url),"coordinates"in c&&o(5,d=c.coordinates),"$$scope"in c&&o(9,s=c.$$scope)},l.$$.update=()=>{l.$$.dirty&313&&t&&e!==i&&(T(r,e=i,e),ue(t,e,ce({type:"image",url:_,coordinates:d}),c=>t&&c===e,()=>{e&&(o(6,u=t==null?void 0:t.getSource(e)),o(7,h=!0))})),l.$$.dirty&264&&(t==null||t.on("style.load",()=>{o(6,u=t==null?void 0:t.getSource(i))})),l.$$.dirty&224&&u&&(h?o(7,h=!1):u.setCoordinates(d))},[e,b,r,i,_,d,u,h,t,s,a]}class Le extends M{constructor(n){super(),W(this,n,ye,ke,N,{id:3,url:4,coordinates:5})}}function Te(l){let n;const o=l[8].default,e=Z(o,l,l[15],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),n=!0},p(t,a){e&&e.p&&(!n||a&32768)&&C(e,o,t,t[15],n?R(o,t[15],a,null):G(t[15]),null)},i(t){n||(m(e,t),n=!0)},o(t){g(e,t),n=!1},d(t){e&&e.d(t)}}}function qe(l){let n,o;return n=new me({props:{id:l[0],type:"raster",source:l[1],beforeId:l[2],beforeLayerType:l[3],paint:l[4],layout:l[5],minzoom:l[6],maxzoom:l[7],$$slots:{default:[Te]},$$scope:{ctx:l}}}),n.$on("click",l[9]),n.$on("dblclick",l[10]),n.$on("contextmenu",l[11]),n.$on("mouseenter",l[12]),n.$on("mousemove",l[13]),n.$on("mouseleave",l[14]),{c(){S(n.$$.fragment)},l(e){z(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,[t]){const a={};t&1&&(a.id=e[0]),t&2&&(a.source=e[1]),t&4&&(a.beforeId=e[2]),t&8&&(a.beforeLayerType=e[3]),t&16&&(a.paint=e[4]),t&32&&(a.layout=e[5]),t&64&&(a.minzoom=e[6]),t&128&&(a.maxzoom=e[7]),t&32768&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){o||(m(n.$$.fragment,e),o=!0)},o(e){g(n.$$.fragment,e),o=!1},d(e){I(n,e)}}}function Se(l,n,o){let{$$slots:e={},$$scope:t}=n,{id:a=te("raster-layer")}=n,{source:s=void 0}=n,{beforeId:i=void 0}=n,{beforeLayerType:_=void 0}=n,{paint:d}=n,{layout:b=void 0}=n,{minzoom:r=void 0}=n,{maxzoom:u=void 0}=n;function h(f){k.call(this,l,f)}function c(f){k.call(this,l,f)}function ne(f){k.call(this,l,f)}function le(f){k.call(this,l,f)}function oe(f){k.call(this,l,f)}function ae(f){k.call(this,l,f)}return l.$$set=f=>{"id"in f&&o(0,a=f.id),"source"in f&&o(1,s=f.source),"beforeId"in f&&o(2,i=f.beforeId),"beforeLayerType"in f&&o(3,_=f.beforeLayerType),"paint"in f&&o(4,d=f.paint),"layout"in f&&o(5,b=f.layout),"minzoom"in f&&o(6,r=f.minzoom),"maxzoom"in f&&o(7,u=f.maxzoom),"$$scope"in f&&o(15,t=f.$$scope)},[a,s,i,_,d,b,r,u,e,h,c,ne,le,oe,ae,t]}class ze extends M{constructor(n){super(),W(this,n,Se,qe,N,{id:0,source:1,beforeId:2,beforeLayerType:3,paint:4,layout:5,minzoom:6,maxzoom:7})}}function V(l){let n,o;return n=new Le({props:{url:l[2],coordinates:[[l[0].lng,l[0].lat],[l[3].lng,l[0].lat],[l[3].lng,l[3].lat],[l[0].lng,l[3].lat]],$$slots:{default:[we]},$$scope:{ctx:l}}}),{c(){S(n.$$.fragment)},l(e){z(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,t){const a={};t&4&&(a.url=e[2]),t&9&&(a.coordinates=[[e[0].lng,e[0].lat],[e[3].lng,e[0].lat],[e[3].lng,e[3].lat],[e[0].lng,e[3].lat]]),t&272&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){o||(m(n.$$.fragment,e),o=!0)},o(e){g(n.$$.fragment,e),o=!1},d(e){I(n,e)}}}function we(l){let n,o;return n=new ze({props:{paint:{"raster-fade-duration":0,"raster-opacity":l[4]/100}}}),{c(){S(n.$$.fragment)},l(e){z(n.$$.fragment,e)},m(e,t){w(n,e,t),o=!0},p(e,t){const a={};t&16&&(a.paint={"raster-fade-duration":0,"raster-opacity":e[4]/100}),n.$set(a)},i(e){o||(m(n.$$.fragment,e),o=!0)},o(e){g(n.$$.fragment,e),o=!1},d(e){I(n,e)}}}function J(l){let n,o,e,t,a,s;function i(r){l[6](r)}let _={draggable:!0,$$slots:{default:[Ie]},$$scope:{ctx:l}};l[0]!==void 0&&(_.lngLat=l[0]),n=new H({props:_}),P.push(()=>D(n,"lngLat",i));function d(r){l[7](r)}let b={draggable:!0,$$slots:{default:[Ne]},$$scope:{ctx:l}};return l[3]!==void 0&&(b.lngLat=l[3]),t=new H({props:b}),P.push(()=>D(t,"lngLat",d)),{c(){S(n.$$.fragment),e=K(),S(t.$$.fragment)},l(r){z(n.$$.fragment,r),e=Q(r),z(t.$$.fragment,r)},m(r,u){w(n,r,u),L(r,e,u),w(t,r,u),s=!0},p(r,u){const h={};u&256&&(h.$$scope={dirty:u,ctx:r}),!o&&u&1&&(o=!0,h.lngLat=r[0],j(()=>o=!1)),n.$set(h);const c={};u&256&&(c.$$scope={dirty:u,ctx:r}),!a&&u&8&&(a=!0,c.lngLat=r[3],j(()=>a=!1)),t.$set(c)},i(r){s||(m(n.$$.fragment,r),m(t.$$.fragment,r),s=!0)},o(r){g(n.$$.fragment,r),g(t.$$.fragment,r),s=!1},d(r){r&&p(e),I(n,r),I(t,r)}}}function Ie(l){let n;return{c(){n=X("span"),this.h()},l(o){n=Y(o,"SPAN",{class:!0,style:!0}),$(n).forEach(p),this.h()},h(){x(n,"class","dot svelte-1tmbx1c"),ee(n,"background-color","red")},m(o,e){L(o,n,e)},p:A,d(o){o&&p(n)}}}function Ne(l){let n;return{c(){n=X("span"),this.h()},l(o){n=Y(o,"SPAN",{class:!0,style:!0}),$(n).forEach(p),this.h()},h(){x(n,"class","dot svelte-1tmbx1c"),ee(n,"background-color","blue")},m(o,e){L(o,n,e)},p:A,d(o){o&&p(n)}}}function ve(l){let n,o,e,t=l[2]&&l[0].lng!=l[3].lng&&V(l),a=l[2]&&l[1]&&J(l);return{c(){t&&t.c(),n=K(),a&&a.c(),o=q()},l(s){t&&t.l(s),n=Q(s),a&&a.l(s),o=q()},m(s,i){t&&t.m(s,i),L(s,n,i),a&&a.m(s,i),L(s,o,i),e=!0},p(s,[i]){s[2]&&s[0].lng!=s[3].lng?t?(t.p(s,i),i&13&&m(t,1)):(t=V(s),t.c(),m(t,1),t.m(n.parentNode,n)):t&&(E(),g(t,1,1,()=>{t=null}),B()),s[2]&&s[1]?a?(a.p(s,i),i&6&&m(a,1)):(a=J(s),a.c(),m(a,1),a.m(o.parentNode,o)):a&&(E(),g(a,1,1,()=>{a=null}),B())},i(s){e||(m(t),m(a),e=!0)},o(s){g(t),g(a),e=!1},d(s){s&&(p(n),p(o)),t&&t.d(s),a&&a.d(s)}}}function Fe(l,n,o){let e,t,a,s,i;y(l,v,r=>o(3,e=r)),y(l,F,r=>o(0,t=r)),y(l,ge,r=>o(1,a=r)),y(l,_e,r=>o(2,s=r)),y(l,de,r=>o(4,i=r));let{map:_}=n;function d(r){t=r,F.set(t)}function b(r){e=r,v.set(e)}return l.$$set=r=>{"map"in r&&o(5,_=r.map)},l.$$.update=()=>{if(l.$$.dirty&39&&s&&a&&t.lng==0&&t.lat==0){let r=_.getBounds();T(F,t.lng=r.getWest()+.4*(r.getEast()-r.getWest()),t),T(v,e.lng=r.getWest()+.6*(r.getEast()-r.getWest()),e),T(F,t.lat=r.getNorth()+.4*(r.getSouth()-r.getNorth()),t),T(v,e.lat=r.getNorth()+.6*(r.getSouth()-r.getNorth()),e)}},[t,a,s,e,i,_,d,b]}class Ae extends M{constructor(n){super(),W(this,n,Fe,ve,N,{map:5})}}const Pe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23FFFFFF'%3e%3cpath%20d='M402-40q-30%200-56-13.5T303-92L48-465l24-23q19-19%2045-22t47%2012l116%2081v-383q0-17%2011.5-28.5T320-840q17%200%2028.5%2011.5T360-800v537L212-367l157%20229q5%208%2014%2013t19%205h278q33%200%2056.5-23.5T760-200v-560q0-17%2011.5-28.5T800-800q17%200%2028.5%2011.5T840-760v560q0%2066-47%20113T680-40H402Zm38-440v-400q0-17%2011.5-28.5T480-920q17%200%2028.5%2011.5T520-880v400h-80Zm160%200v-360q0-17%2011.5-28.5T640-880q17%200%2028.5%2011.5T680-840v360h-80ZM486-300Z'%20fill='black'/%3e%3c/svg%3e";export{Ae as G,Re as I,Pe as p};
