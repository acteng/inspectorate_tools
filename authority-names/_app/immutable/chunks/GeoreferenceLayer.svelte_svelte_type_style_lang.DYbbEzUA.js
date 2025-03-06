import{s as W,e as S,t as L,a as I,c as y,b as V,d as D,f as h,g as G,q as w,I as de,E as X,i as v,h as b,y as E,j as se,x as ae,l as _e,u as pe,m as ge,o as he,C as j,r as F,D as T,w as ie,Y as be,k as P,V as C,ac as $e,p as Q,v as Z,n as ke,J as x}from"./scheduler.DGwhun8C.js";import{S as J,i as K,t as $,g as Y,b as k,f as H,e as re,c as U,a as N,m as R,d as q}from"./index.B2vZYn3d.js";import"./authority_names.B0FTNcX9.js";import{g as fe}from"./globals.D0QH3NT1.js";import{C as we}from"./Marker.DxG2vOXN.js";import{R as ve}from"./Radio.D53ZE24i.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.7G0KOewJ.js";import{l as Se,n as ye}from"./index.C2fwSM9o.js";import{B as Ce}from"./ButtonGroup.kCbKs-s-.js";import{D as Ie}from"./DefaultButton.Dnb4gInE.js";import{F as Ge}from"./FormElement.Cd26lsYY.js";import{S as Le}from"./SecondaryButton.zQkvdoBX.js";import{W as De}from"./WarningButton.B3j9Frnm.js";import{w as z}from"./entry.DJQQCKDv.js";const Ee="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cpath%20id='XMLID_222_'%20d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001%20c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213%20C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606%20C255,161.018,253.42,157.202,250.606,154.389z'/%3e%3c/svg%3e";function ee(o){let e,t;const n=o[4].default,s=_e(n,o,o[3],null);return{c(){e=S("div"),s&&s.c(),this.h()},l(l){e=y(l,"DIV",{class:!0});var i=V(e);s&&s.l(i),i.forEach(h),this.h()},h(){w(e,"class","section svelte-zax3q3")},m(l,i){v(l,e,i),s&&s.m(e,null),t=!0},p(l,i){s&&s.p&&(!t||i&8)&&pe(s,n,l,l[3],t?he(n,l[3],i,null):ge(l[3]),null)},i(l){t||($(s,l),t=!0)},o(l){k(s,l),t=!1},d(l){l&&h(e),s&&s.d(l)}}}function Be(o){let e,t,n,s,l,i,u,c,p,a,r,m,f=o[2]&&ee(o);return{c(){e=S("button"),t=S("div"),n=S("span"),s=L(o[0]),l=I(),i=S("img"),p=I(),f&&f.c(),this.h()},l(d){e=y(d,"BUTTON",{class:!0});var _=V(e);t=y(_,"DIV",{class:!0});var g=V(t);n=y(g,"SPAN",{});var B=V(n);s=D(B,o[0]),B.forEach(h),l=G(g),i=y(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(h),p=G(_),f&&f.l(_),_.forEach(h),this.h()},h(){w(i,"class","arrow svelte-zax3q3"),de(i.src,u=Ee)||w(i,"src",u),w(i,"alt",c="Select "+o[0]),w(t,"class","top-section section svelte-zax3q3"),X(t,"bordered",o[2]),w(e,"class","clickable-card govuk-button govuk-button--secondary svelte-zax3q3"),e.disabled=o[1]},m(d,_){v(d,e,_),b(e,t),b(t,n),b(n,s),b(t,l),b(t,i),b(e,p),f&&f.m(e,null),a=!0,r||(m=[E(e,"click",o[5]),E(e,"mouseenter",o[6]),E(e,"mouseleave",o[7])],r=!0)},p(d,[_]){(!a||_&1)&&se(s,d[0]),(!a||_&1&&c!==(c="Select "+d[0]))&&w(i,"alt",c),(!a||_&4)&&X(t,"bordered",d[2]),d[2]?f?(f.p(d,_),_&4&&$(f,1)):(f=ee(d),f.c(),$(f,1),f.m(e,null)):f&&(Y(),k(f,1,1,()=>{f=null}),H()),(!a||_&2)&&(e.disabled=d[1])},i(d){a||($(f),a=!0)},o(d){k(f),a=!1},d(d){d&&h(e),f&&f.d(),r=!1,ae(m)}}}function Ve(o,e,t){let{$$slots:n={},$$scope:s}=e,{name:l}=e,{disabled:i=!1}=e,{hasSlot:u=!0}=e;function c(r){j.call(this,o,r)}function p(r){j.call(this,o,r)}function a(r){j.call(this,o,r)}return o.$$set=r=>{"name"in r&&t(0,l=r.name),"disabled"in r&&t(1,i=r.disabled),"hasSlot"in r&&t(2,u=r.hasSlot),"$$scope"in r&&t(3,s=r.$$scope)},[l,i,u,s,n,c,p,a]}class it extends J{constructor(e){super(),K(this,e,Ve,Be,W,{name:0,disabled:1,hasSlot:2})}}const{window:Ue}=fe;function Ne(o){let e;return{c(){e=L("StreetView")},l(t){e=D(t,"StreetView")},m(t,n){v(t,e,n)},d(t){t&&h(e)}}}function te(o){let e,t,n;function s(i){o[5](i)}let l={label:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return o[1]!==void 0&&(l.value=o[1]),e=new ve({props:l}),F.push(()=>re(e,"value",s)),{c(){U(e.$$.fragment)},l(i){N(e.$$.fragment,i)},m(i,u){R(e,i,u),n=!0},p(i,u){const c={};!t&&u&2&&(t=!0,c.value=i[1],ie(()=>t=!1)),e.$set(c)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){q(e,i)}}}function Re(o){let e,t,n,s,l,i,u;function c(r){o[4](r)}let p={$$slots:{default:[Ne]},$$scope:{ctx:o}};o[0]!==void 0&&(p.checked=o[0]),e=new we({props:p}),F.push(()=>re(e,"checked",c));let a=o[0]&&te(o);return{c(){U(e.$$.fragment),n=I(),a&&a.c(),s=T()},l(r){N(e.$$.fragment,r),n=G(r),a&&a.l(r),s=T()},m(r,m){R(e,r,m),v(r,n,m),a&&a.m(r,m),v(r,s,m),l=!0,i||(u=E(Ue,"keydown",o[2]),i=!0)},p(r,[m]){const f={};m&512&&(f.$$scope={dirty:m,ctx:r}),!t&&m&1&&(t=!0,f.checked=r[0],ie(()=>t=!1)),e.$set(f),r[0]?a?(a.p(r,m),m&1&&$(a,1)):(a=te(r),a.c(),$(a,1),a.m(s.parentNode,s)):a&&(Y(),k(a,1,1,()=>{a=null}),H())},i(r){l||($(e.$$.fragment,r),$(a),l=!0)},o(r){k(e.$$.fragment,r),k(a),l=!1},d(r){r&&(h(n),h(s)),q(e,r),a&&a.d(r),i=!1,u()}}}function qe(o,e,t){let{map:n}=e,{enabled:s=!1}=e,l="google";function i(){n&&(n.on("click",c),n.getCanvas().style.cursor="zoom-in")}function u(){n&&(n.off("click",c),n.getCanvas().style.cursor="auto")}be(u);function c(m){window.open(l=="google"?Se(m.lngLat.toArray()):ye(m.lngLat.toArray()),"_blank"),t(0,s=!1)}function p(m){s&&m.key=="Escape"&&t(0,s=!1)}function a(m){s=m,t(0,s)}function r(m){l=m,t(1,l)}return o.$$set=m=>{"map"in m&&t(3,n=m.map),"enabled"in m&&t(0,s=m.enabled)},o.$$.update=()=>{o.$$.dirty&1&&(s?i():u())},[s,l,p,n,a,r]}class rt extends J{constructor(e){super(),K(this,e,qe,Re,W,{map:3,enabled:0})}}const A=z(!1),M=z(null),O=z(100),ne=z({lng:0,lat:0}),le=z({lng:0,lat:0}),{window:Pe}=fe;function ze(o){let e,t;return e=new Le({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),e.$on("click",o[10]),{c(){U(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,s){R(e,n,s),t=!0},p(n,s){const l={};s&8192&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Ae(o){let e,t,n="Georeference an image",s,l,i,u,c,p,a,r=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,m;l=new Ce({props:{$$slots:{default:[Oe]},$$scope:{ctx:o}}}),u=new Ge({props:{label:"Load an image",id:"load-image",$$slots:{default:[We]},$$scope:{ctx:o}}});let f=o[3]&&oe(o);return{c(){e=S("div"),t=S("h2"),t.textContent=n,s=I(),U(l.$$.fragment),i=I(),U(u.$$.fragment),c=I(),f&&f.c(),p=I(),a=S("p"),a.textContent=r,this.h()},l(d){e=y(d,"DIV",{style:!0});var _=V(e);t=y(_,"H2",{"data-svelte-h":!0}),Q(t)!=="svelte-fociiu"&&(t.textContent=n),s=G(_),N(l.$$.fragment,_),i=G(_),N(u.$$.fragment,_),c=G(_),f&&f.l(_),p=G(_),a=y(_,"P",{"data-svelte-h":!0}),Q(a)!=="svelte-d8uklv"&&(a.textContent=r),_.forEach(h),this.h()},h(){Z(e,"border","1px solid black"),Z(e,"padding","4px")},m(d,_){v(d,e,_),b(e,t),b(e,s),R(l,e,null),b(e,i),R(u,e,null),b(e,c),f&&f.m(e,null),b(e,p),b(e,a),m=!0},p(d,_){const g={};_&8202&&(g.$$scope={dirty:_,ctx:d}),l.$set(g);const B={};_&8193&&(B.$$scope={dirty:_,ctx:d}),u.$set(B),d[3]?f?f.p(d,_):(f=oe(d),f.c(),f.m(e,p)):f&&(f.d(1),f=null)},i(d){m||($(l.$$.fragment,d),$(u.$$.fragment,d),m=!0)},o(d){k(l.$$.fragment,d),k(u.$$.fragment,d),m=!1},d(d){d&&h(e),q(l),q(u),f&&f.d()}}}function Te(o){let e;return{c(){e=L("Georeference an image")},l(t){e=D(t,"Georeference an image")},m(t,n){v(t,e,n)},d(t){t&&h(e)}}}function je(o){let e;return{c(){e=L("Save")},l(t){e=D(t,"Save")},m(t,n){v(t,e,n)},d(t){t&&h(e)}}}function Me(o){let e;return{c(){e=L("Delete")},l(t){e=D(t,"Delete")},m(t,n){v(t,e,n)},d(t){t&&h(e)}}}function Oe(o){let e,t,n,s;return e=new Ie({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),e.$on("click",o[7]),n=new De({props:{disabled:!o[3],$$slots:{default:[Me]},$$scope:{ctx:o}}}),n.$on("click",o[5]),{c(){U(e.$$.fragment),t=I(),U(n.$$.fragment)},l(l){N(e.$$.fragment,l),t=G(l),N(n.$$.fragment,l)},m(l,i){R(e,l,i),v(l,t,i),R(n,l,i),s=!0},p(l,i){const u={};i&8192&&(u.$$scope={dirty:i,ctx:l}),e.$set(u);const c={};i&8&&(c.disabled=!l[3]),i&8192&&(c.$$scope={dirty:i,ctx:l}),n.$set(c)},i(l){s||($(e.$$.fragment,l),$(n.$$.fragment,l),s=!0)},o(l){k(e.$$.fragment,l),k(n.$$.fragment,l),s=!1},d(l){l&&h(t),q(e,l),q(n,l)}}}function We(o){let e,t,n;return{c(){e=S("input"),this.h()},l(s){e=y(s,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){w(e,"class","govuk-file-upload"),w(e,"id","load-image"),w(e,"type","file")},m(s,l){v(s,e,l),o[8](e),t||(n=E(e,"change",o[4]),t=!0)},p:ke,d(s){s&&h(e),o[8](null),t=!1,n()}}}function oe(o){let e,t,n,s,l,i,u,c;return{c(){e=S("div"),t=S("label"),n=S("input"),s=L(`
          Opacity: `),l=L(o[2]),i=L("%"),this.h()},l(p){e=y(p,"DIV",{});var a=V(e);t=y(a,"LABEL",{});var r=V(t);n=y(r,"INPUT",{type:!0,min:!0,max:!0}),s=D(r,`
          Opacity: `),l=D(r,o[2]),i=D(r,"%"),r.forEach(h),a.forEach(h),this.h()},h(){w(n,"type","range"),w(n,"min","0"),w(n,"max","100")},m(p,a){v(p,e,a),b(e,t),b(t,n),x(n,o[2]),b(t,s),b(t,l),b(t,i),u||(c=[E(n,"change",o[9]),E(n,"input",o[9])],u=!0)},p(p,a){a&4&&x(n,p[2]),a&4&&se(l,p[2])},d(p){p&&h(e),u=!1,ae(c)}}}function Fe(o){let e,t,n,s,l,i;const u=[Ae,ze],c=[];function p(a,r){return a[1]?0:1}return e=p(o),t=c[e]=u[e](o),{c(){t.c(),n=T()},l(a){t.l(a),n=T()},m(a,r){c[e].m(a,r),v(a,n,r),s=!0,l||(i=E(Pe,"keydown",o[6]),l=!0)},p(a,[r]){let m=e;e=p(a),e===m?c[e].p(a,r):(Y(),k(c[m],1,1,()=>{c[m]=null}),H(),t=c[e],t?t.p(a,r):(t=c[e]=u[e](a),t.c()),$(t,1),t.m(n.parentNode,n))},i(a){s||($(t),s=!0)},o(a){k(t),s=!1},d(a){a&&h(n),c[e].d(a),l=!1,i()}}}function Je(o,e,t){let n,s,l,i,u;P(o,A,g=>t(1,n=g)),P(o,O,g=>t(2,s=g)),P(o,M,g=>t(3,l=g)),P(o,le,g=>t(11,i=g)),P(o,ne,g=>t(12,u=g));let c;async function p(g){a();let B=await c.files[0].arrayBuffer(),ce=new Blob([new Uint8Array(B)]);C(M,l=URL.createObjectURL(ce),l),C(ne,u={lng:0,lat:0},u),C(le,i={lng:0,lat:0},i);let ue=c.files[0].name.toLowerCase();[".gif",".jpg",".jpeg",".png"].some(me=>ue.endsWith(me))||window.alert("You can only georeference image files (GIF, JPEG, PNG). If you don't see anything on the map, try a different file type.")}function a(){C(M,l=null,l),C(O,s=100,s)}function r(g){n&&g.key=="Escape"&&(g.stopPropagation(),C(A,n=!1,n))}const m=()=>C(A,n=!1,n);function f(g){F[g?"unshift":"push"](()=>{c=g,t(0,c)})}function d(){s=$e(this.value),O.set(s)}return[c,n,s,l,p,a,r,m,f,d,()=>C(A,n=!0,n)]}class ft extends J{constructor(e){super(),K(this,e,Je,Fe,W,{})}}export{it as C,ft as G,rt as S,le as b,M as i,O as o,A as s,ne as t};
