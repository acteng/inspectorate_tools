import{s as O,l as me,e as w,t as L,a as I,c as y,b as B,d as D,f as h,g as G,p as $,o as de,i as C,h as b,w as N,j as le,u as pe,r as _e,v as ge,A as se,E as H,T as he,k as P,W as ae,y as Y,K as j,z as ie,x as E,ac as be,m as Q,q as Z,n as ve,I as x}from"./scheduler.CT9iOTEw.js";import{S as F,i as K,t as k,b as S,e as re,c as V,a as U,m as R,g as ce,f as fe,d as q}from"./index.CnK_PB-e.js";/* empty css                                            */import{m as $e,l as ke,n as we}from"./index.POSGM-mA.js";import{g as ue}from"./globals.D0QH3NT1.js";import{C as ye}from"./Marker.CnSFRzXe.js";import{R as Se}from"./Radio.X_Wkl5Zy.js";import{B as Ce}from"./ButtonGroup.CPR9Q03l.js";import{D as Ee}from"./DefaultButton.qd2_wY_n.js";import{F as Ie}from"./FormElement.22zQJVbE.js";import{S as Ge}from"./SecondaryButton.Bjah1jNo.js";import{W as Le}from"./WarningButton.B5FdEria.js";import{w as z}from"./entry.DAXh3liJ.js";const De="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cpath%20id='XMLID_222_'%20d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001%20c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213%20C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606%20C255,161.018,253.42,157.202,250.606,154.389z'/%3e%3c/svg%3e";function Ne(l){let e,t,n,a,s,i,f,c,p,o,r,u,_;const g=l[3].default,d=me(g,l,l[2],null);return{c(){e=w("button"),t=w("div"),n=w("span"),a=L(l[0]),s=I(),i=w("img"),p=I(),o=w("div"),d&&d.c(),this.h()},l(m){e=y(m,"BUTTON",{class:!0});var v=B(e);t=y(v,"DIV",{class:!0});var A=B(t);n=y(A,"SPAN",{});var M=B(n);a=D(M,l[0]),M.forEach(h),s=G(A),i=y(A,"IMG",{class:!0,src:!0,alt:!0}),A.forEach(h),p=G(v),o=y(v,"DIV",{class:!0});var T=B(o);d&&d.l(T),T.forEach(h),v.forEach(h),this.h()},h(){$(i,"class","arrow svelte-ovh7qa"),de(i.src,f=De)||$(i,"src",f),$(i,"alt",c="Select "+l[0]),$(t,"class","top-section section svelte-ovh7qa"),$(o,"class","section svelte-ovh7qa"),$(e,"class","clickable-card govuk-button govuk-button--secondary svelte-ovh7qa"),e.disabled=l[1]},m(m,v){C(m,e,v),b(e,t),b(t,n),b(n,a),b(t,s),b(t,i),b(e,p),b(e,o),d&&d.m(o,null),r=!0,u||(_=[N(e,"click",l[4]),N(e,"mouseenter",l[5]),N(e,"mouseleave",l[6])],u=!0)},p(m,[v]){(!r||v&1)&&le(a,m[0]),(!r||v&1&&c!==(c="Select "+m[0]))&&$(i,"alt",c),d&&d.p&&(!r||v&4)&&pe(d,g,m,m[2],r?ge(g,m[2],v,null):_e(m[2]),null),(!r||v&2)&&(e.disabled=m[1])},i(m){r||(k(d,m),r=!0)},o(m){S(d,m),r=!1},d(m){m&&h(e),d&&d.d(m),u=!1,se(_)}}}function Be(l,e,t){let{$$slots:n={},$$scope:a}=e,{name:s}=e,{disabled:i=!1}=e;function f(o){H.call(this,l,o)}function c(o){H.call(this,l,o)}function p(o){H.call(this,l,o)}return l.$$set=o=>{"name"in o&&t(0,s=o.name),"disabled"in o&&t(1,i=o.disabled),"$$scope"in o&&t(2,a=o.$$scope)},[s,i,a,n,f,c,p]}class it extends F{constructor(e){super(),K(this,e,Be,Ne,O,{name:0,disabled:1})}}function Ve(l,e,t){let n;const a=he();let{layer:s=void 0}=e;const{map:i}=$e();P(l,i,o=>t(2,n=o));function f(o){a(o.type,{...o,map:i})}const c=["click","dblclick","mousedown","mouseup","mousemove","mouseenter","mouseleave","contextmenu","mouseover","mouseout"],p=["click","dblclick","contextmenu","mousemove","movestart","moveend","zoomstart","zoom","zoomend"];return ae(()=>{if(n)if(s)for(const o of c)n.off(o,s,f);else for(const o of p)n.off(o,f)}),l.$$set=o=>{"layer"in o&&t(1,s=o.layer)},l.$$.update=()=>{if(l.$$.dirty&6&&n)if(s)for(const o of c)n.on(o,s,f);else for(const o of p)n.on(o,f)},[i,s,n]}class rt extends F{constructor(e){super(),K(this,e,Ve,null,O,{layer:1})}}const{window:Ue}=ue;function Re(l){let e;return{c(){e=L("StreetView")},l(t){e=D(t,"StreetView")},m(t,n){C(t,e,n)},d(t){t&&h(e)}}}function ee(l){let e,t,n;function a(i){l[5](i)}let s={label:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return l[1]!==void 0&&(s.value=l[1]),e=new Se({props:s}),Y.push(()=>re(e,"value",a)),{c(){V(e.$$.fragment)},l(i){U(e.$$.fragment,i)},m(i,f){R(e,i,f),n=!0},p(i,f){const c={};!t&&f&2&&(t=!0,c.value=i[1],ie(()=>t=!1)),e.$set(c)},i(i){n||(k(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){q(e,i)}}}function qe(l){let e,t,n,a,s,i,f;function c(r){l[4](r)}let p={$$slots:{default:[Re]},$$scope:{ctx:l}};l[0]!==void 0&&(p.checked=l[0]),e=new ye({props:p}),Y.push(()=>re(e,"checked",c));let o=l[0]&&ee(l);return{c(){V(e.$$.fragment),n=I(),o&&o.c(),a=j()},l(r){U(e.$$.fragment,r),n=G(r),o&&o.l(r),a=j()},m(r,u){R(e,r,u),C(r,n,u),o&&o.m(r,u),C(r,a,u),s=!0,i||(f=N(Ue,"keydown",l[2]),i=!0)},p(r,[u]){const _={};u&512&&(_.$$scope={dirty:u,ctx:r}),!t&&u&1&&(t=!0,_.checked=r[0],ie(()=>t=!1)),e.$set(_),r[0]?o?(o.p(r,u),u&1&&k(o,1)):(o=ee(r),o.c(),k(o,1),o.m(a.parentNode,a)):o&&(ce(),S(o,1,1,()=>{o=null}),fe())},i(r){s||(k(e.$$.fragment,r),k(o),s=!0)},o(r){S(e.$$.fragment,r),S(o),s=!1},d(r){r&&(h(n),h(a)),q(e,r),o&&o.d(r),i=!1,f()}}}function Ae(l,e,t){let{map:n}=e,{enabled:a=!1}=e,s="google";function i(){n&&(n.on("click",c),n.getCanvas().style.cursor="zoom-in")}function f(){n&&(n.off("click",c),n.getCanvas().style.cursor="auto")}ae(f);function c(u){window.open(s=="google"?ke(u.lngLat.toArray()):we(u.lngLat.toArray()),"_blank"),t(0,a=!1)}function p(u){a&&u.key=="Escape"&&t(0,a=!1)}function o(u){a=u,t(0,a)}function r(u){s=u,t(1,s)}return l.$$set=u=>{"map"in u&&t(3,n=u.map),"enabled"in u&&t(0,a=u.enabled)},l.$$.update=()=>{l.$$.dirty&1&&(a?i():f())},[a,s,p,n,o,r]}class ct extends F{constructor(e){super(),K(this,e,Ae,qe,O,{map:3,enabled:0})}}const W=z(!1),J=z(null),X=z(100),te=z({lng:0,lat:0}),ne=z({lng:0,lat:0}),{window:Pe}=ue;function ze(l){let e,t;return e=new Ge({props:{$$slots:{default:[Te]},$$scope:{ctx:l}}}),e.$on("click",l[10]),{c(){V(e.$$.fragment)},l(n){U(e.$$.fragment,n)},m(n,a){R(e,n,a),t=!0},p(n,a){const s={};a&8192&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function Me(l){let e,t,n="Georeference an image",a,s,i,f,c,p,o,r=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,u;s=new Ce({props:{$$slots:{default:[Oe]},$$scope:{ctx:l}}}),f=new Ie({props:{label:"Load an image",id:"load-image",$$slots:{default:[Fe]},$$scope:{ctx:l}}});let _=l[3]&&oe(l);return{c(){e=w("div"),t=w("h2"),t.textContent=n,a=I(),V(s.$$.fragment),i=I(),V(f.$$.fragment),c=I(),_&&_.c(),p=I(),o=w("p"),o.textContent=r,this.h()},l(g){e=y(g,"DIV",{style:!0});var d=B(e);t=y(d,"H2",{"data-svelte-h":!0}),Q(t)!=="svelte-fociiu"&&(t.textContent=n),a=G(d),U(s.$$.fragment,d),i=G(d),U(f.$$.fragment,d),c=G(d),_&&_.l(d),p=G(d),o=y(d,"P",{"data-svelte-h":!0}),Q(o)!=="svelte-d8uklv"&&(o.textContent=r),d.forEach(h),this.h()},h(){Z(e,"border","1px solid black"),Z(e,"padding","4px")},m(g,d){C(g,e,d),b(e,t),b(e,a),R(s,e,null),b(e,i),R(f,e,null),b(e,c),_&&_.m(e,null),b(e,p),b(e,o),u=!0},p(g,d){const m={};d&8202&&(m.$$scope={dirty:d,ctx:g}),s.$set(m);const v={};d&8193&&(v.$$scope={dirty:d,ctx:g}),f.$set(v),g[3]?_?_.p(g,d):(_=oe(g),_.c(),_.m(e,p)):_&&(_.d(1),_=null)},i(g){u||(k(s.$$.fragment,g),k(f.$$.fragment,g),u=!0)},o(g){S(s.$$.fragment,g),S(f.$$.fragment,g),u=!1},d(g){g&&h(e),q(s),q(f),_&&_.d()}}}function Te(l){let e;return{c(){e=L("Georeference an image")},l(t){e=D(t,"Georeference an image")},m(t,n){C(t,e,n)},d(t){t&&h(e)}}}function We(l){let e;return{c(){e=L("Save")},l(t){e=D(t,"Save")},m(t,n){C(t,e,n)},d(t){t&&h(e)}}}function je(l){let e;return{c(){e=L("Delete")},l(t){e=D(t,"Delete")},m(t,n){C(t,e,n)},d(t){t&&h(e)}}}function Oe(l){let e,t,n,a;return e=new Ee({props:{$$slots:{default:[We]},$$scope:{ctx:l}}}),e.$on("click",l[7]),n=new Le({props:{disabled:!l[3],$$slots:{default:[je]},$$scope:{ctx:l}}}),n.$on("click",l[5]),{c(){V(e.$$.fragment),t=I(),V(n.$$.fragment)},l(s){U(e.$$.fragment,s),t=G(s),U(n.$$.fragment,s)},m(s,i){R(e,s,i),C(s,t,i),R(n,s,i),a=!0},p(s,i){const f={};i&8192&&(f.$$scope={dirty:i,ctx:s}),e.$set(f);const c={};i&8&&(c.disabled=!s[3]),i&8192&&(c.$$scope={dirty:i,ctx:s}),n.$set(c)},i(s){a||(k(e.$$.fragment,s),k(n.$$.fragment,s),a=!0)},o(s){S(e.$$.fragment,s),S(n.$$.fragment,s),a=!1},d(s){s&&h(t),q(e,s),q(n,s)}}}function Fe(l){let e,t,n;return{c(){e=w("input"),this.h()},l(a){e=y(a,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){$(e,"class","govuk-file-upload"),$(e,"id","load-image"),$(e,"type","file")},m(a,s){C(a,e,s),l[8](e),t||(n=N(e,"change",l[4]),t=!0)},p:ve,d(a){a&&h(e),l[8](null),t=!1,n()}}}function oe(l){let e,t,n,a,s,i,f,c;return{c(){e=w("div"),t=w("label"),n=w("input"),a=L(`
          Opacity: `),s=L(l[2]),i=L("%"),this.h()},l(p){e=y(p,"DIV",{});var o=B(e);t=y(o,"LABEL",{});var r=B(t);n=y(r,"INPUT",{type:!0,min:!0,max:!0}),a=D(r,`
          Opacity: `),s=D(r,l[2]),i=D(r,"%"),r.forEach(h),o.forEach(h),this.h()},h(){$(n,"type","range"),$(n,"min","0"),$(n,"max","100")},m(p,o){C(p,e,o),b(e,t),b(t,n),x(n,l[2]),b(t,a),b(t,s),b(t,i),f||(c=[N(n,"change",l[9]),N(n,"input",l[9])],f=!0)},p(p,o){o&4&&x(n,p[2]),o&4&&le(s,p[2])},d(p){p&&h(e),f=!1,se(c)}}}function Ke(l){let e,t,n,a,s,i;const f=[Me,ze],c=[];function p(o,r){return o[1]?0:1}return e=p(l),t=c[e]=f[e](l),{c(){t.c(),n=j()},l(o){t.l(o),n=j()},m(o,r){c[e].m(o,r),C(o,n,r),a=!0,s||(i=N(Pe,"keydown",l[6]),s=!0)},p(o,[r]){let u=e;e=p(o),e===u?c[e].p(o,r):(ce(),S(c[u],1,1,()=>{c[u]=null}),fe(),t=c[e],t?t.p(o,r):(t=c[e]=f[e](o),t.c()),k(t,1),t.m(n.parentNode,n))},i(o){a||(k(t),a=!0)},o(o){S(t),a=!1},d(o){o&&h(n),c[e].d(o),s=!1,i()}}}function He(l,e,t){let n,a,s,i,f;P(l,W,m=>t(1,n=m)),P(l,X,m=>t(2,a=m)),P(l,J,m=>t(3,s=m)),P(l,ne,m=>t(11,i=m)),P(l,te,m=>t(12,f=m));let c;async function p(m){o();let v=await c.files[0].arrayBuffer(),A=new Blob([new Uint8Array(v)]);E(J,s=URL.createObjectURL(A),s),E(te,f={lng:0,lat:0},f),E(ne,i={lng:0,lat:0},i);let M=c.files[0].name.toLowerCase();[".gif",".jpg",".jpeg",".png"].some(T=>M.endsWith(T))||window.alert("You can only georeference image files (GIF, JPEG, PNG). If you don't see anything on the map, try a different file type.")}function o(){E(J,s=null,s),E(X,a=100,a)}function r(m){n&&m.key=="Escape"&&(m.stopPropagation(),E(W,n=!1,n))}const u=()=>E(W,n=!1,n);function _(m){Y[m?"unshift":"push"](()=>{c=m,t(0,c)})}function g(){a=be(this.value),X.set(a)}return[c,n,a,s,p,o,r,u,_,g,()=>E(W,n=!0,n)]}class ft extends F{constructor(e){super(),K(this,e,He,Ke,O,{})}}export{it as C,ft as G,rt as M,ct as S,ne as b,J as i,X as o,W as s,te as t};
