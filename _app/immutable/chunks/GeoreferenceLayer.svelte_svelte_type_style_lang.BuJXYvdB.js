import{s as q,U as fe,k as N,V as ee,y as K,a as B,G as j,g as U,i as v,w as P,z as te,f as $,t as y,d as S,x as w,ac as ce,e as C,c as E,b as O,m as H,q as J,h,p as V,n as ue,F as Y,j as me,A as pe}from"./scheduler.V-ByFQ7u.js";import{S as M,i as T,e as ne,c as G,a as L,m as D,t as b,g as oe,b as k,f as ae,d as I}from"./index.Zcf2TLuh.js";import{m as de,l as _e,n as ge}from"./index.CAHb1vJJ.js";import{g as se}from"./globals.D0QH3NT1.js";import{C as $e}from"./Marker.CS3ef6BL.js";import{R as be}from"./Radio.BmdG06yd.js";/* empty css                                            */import{B as he}from"./ButtonGroup.DzOmczhL.js";import{D as ke}from"./DefaultButton.CzxH7UXd.js";import{F as ve}from"./FormElement.CMFdi_7n.js";import{S as we}from"./SecondaryButton.BQqRVY7L.js";import{W as ye}from"./WarningButton.BdQPQy4u.js";import{w as R}from"./entry.D6K4V8Jr.js";function Se(s,e,t){let n;const l=fe();let{layer:a=void 0}=e;const{map:r}=de();N(s,r,o=>t(2,n=o));function f(o){l(o.type,{...o,map:r})}const c=["click","dblclick","mousedown","mouseup","mousemove","mouseenter","mouseleave","contextmenu","mouseover","mouseout"],m=["click","dblclick","contextmenu","mousemove","movestart","moveend","zoomstart","zoom","zoomend"];return ee(()=>{if(n)if(a)for(const o of c)n.off(o,a,f);else for(const o of m)n.off(o,f)}),s.$$set=o=>{"layer"in o&&t(1,a=o.layer)},s.$$.update=()=>{if(s.$$.dirty&6&&n)if(a)for(const o of c)n.on(o,a,f);else for(const o of m)n.on(o,f)},[r,a,n]}class Ze extends M{constructor(e){super(),T(this,e,Se,null,q,{layer:1})}}const{window:Ce}=se;function Ee(s){let e;return{c(){e=y("StreetView")},l(t){e=S(t,"StreetView")},m(t,n){v(t,e,n)},d(t){t&&$(e)}}}function Q(s){let e,t,n;function l(r){s[5](r)}let a={label:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return s[1]!==void 0&&(a.value=s[1]),e=new be({props:a}),K.push(()=>ne(e,"value",l)),{c(){G(e.$$.fragment)},l(r){L(e.$$.fragment,r)},m(r,f){D(e,r,f),n=!0},p(r,f){const c={};!t&&f&2&&(t=!0,c.value=r[1],te(()=>t=!1)),e.$set(c)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function Ge(s){let e,t,n,l,a,r,f;function c(i){s[4](i)}let m={$$slots:{default:[Ee]},$$scope:{ctx:s}};s[0]!==void 0&&(m.checked=s[0]),e=new $e({props:m}),K.push(()=>ne(e,"checked",c));let o=s[0]&&Q(s);return{c(){G(e.$$.fragment),n=B(),o&&o.c(),l=j()},l(i){L(e.$$.fragment,i),n=U(i),o&&o.l(i),l=j()},m(i,u){D(e,i,u),v(i,n,u),o&&o.m(i,u),v(i,l,u),a=!0,r||(f=P(Ce,"keydown",s[2]),r=!0)},p(i,[u]){const p={};u&512&&(p.$$scope={dirty:u,ctx:i}),!t&&u&1&&(t=!0,p.checked=i[0],te(()=>t=!1)),e.$set(p),i[0]?o?(o.p(i,u),u&1&&b(o,1)):(o=Q(i),o.c(),b(o,1),o.m(l.parentNode,l)):o&&(oe(),k(o,1,1,()=>{o=null}),ae())},i(i){a||(b(e.$$.fragment,i),b(o),a=!0)},o(i){k(e.$$.fragment,i),k(o),a=!1},d(i){i&&($(n),$(l)),I(e,i),o&&o.d(i),r=!1,f()}}}function Le(s,e,t){let{map:n}=e,{enabled:l=!1}=e,a="google";function r(){n&&(n.on("click",c),n.getCanvas().style.cursor="zoom-in")}function f(){n&&(n.off("click",c),n.getCanvas().style.cursor="auto")}ee(f);function c(u){window.open(a=="google"?_e(u.lngLat.toArray()):ge(u.lngLat.toArray()),"_blank"),t(0,l=!1)}function m(u){l&&u.key=="Escape"&&t(0,l=!1)}function o(u){l=u,t(0,l)}function i(u){a=u,t(1,a)}return s.$$set=u=>{"map"in u&&t(3,n=u.map),"enabled"in u&&t(0,l=u.enabled)},s.$$.update=()=>{s.$$.dirty&1&&(l?r():f())},[l,a,m,n,o,i]}class xe extends M{constructor(e){super(),T(this,e,Le,Ge,q,{map:3,enabled:0})}}const A=R(!1),F=R(null),W=R(100),X=R({lng:0,lat:0}),Z=R({lng:0,lat:0}),{window:De}=se;function Ie(s){let e,t;return e=new we({props:{$$slots:{default:[Be]},$$scope:{ctx:s}}}),e.$on("click",s[10]),{c(){G(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,l){D(e,n,l),t=!0},p(n,l){const a={};l&8192&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Ne(s){let e,t,n="Georeference an image",l,a,r,f,c,m,o,i=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,u;a=new he({props:{$$slots:{default:[Pe]},$$scope:{ctx:s}}}),f=new ve({props:{label:"Load an image",id:"load-image",$$slots:{default:[Re]},$$scope:{ctx:s}}});let p=s[3]&&x(s);return{c(){e=C("div"),t=C("h2"),t.textContent=n,l=B(),G(a.$$.fragment),r=B(),G(f.$$.fragment),c=B(),p&&p.c(),m=B(),o=C("p"),o.textContent=i,this.h()},l(d){e=E(d,"DIV",{style:!0});var _=O(e);t=E(_,"H2",{"data-svelte-h":!0}),H(t)!=="svelte-fociiu"&&(t.textContent=n),l=U(_),L(a.$$.fragment,_),r=U(_),L(f.$$.fragment,_),c=U(_),p&&p.l(_),m=U(_),o=E(_,"P",{"data-svelte-h":!0}),H(o)!=="svelte-d8uklv"&&(o.textContent=i),_.forEach($),this.h()},h(){J(e,"border","1px solid black"),J(e,"padding","4px")},m(d,_){v(d,e,_),h(e,t),h(e,l),D(a,e,null),h(e,r),D(f,e,null),h(e,c),p&&p.m(e,null),h(e,m),h(e,o),u=!0},p(d,_){const g={};_&8202&&(g.$$scope={dirty:_,ctx:d}),a.$set(g);const z={};_&8193&&(z.$$scope={dirty:_,ctx:d}),f.$set(z),d[3]?p?p.p(d,_):(p=x(d),p.c(),p.m(e,m)):p&&(p.d(1),p=null)},i(d){u||(b(a.$$.fragment,d),b(f.$$.fragment,d),u=!0)},o(d){k(a.$$.fragment,d),k(f.$$.fragment,d),u=!1},d(d){d&&$(e),I(a),I(f),p&&p.d()}}}function Be(s){let e;return{c(){e=y("Georeference an image")},l(t){e=S(t,"Georeference an image")},m(t,n){v(t,e,n)},d(t){t&&$(e)}}}function Ue(s){let e;return{c(){e=y("Save")},l(t){e=S(t,"Save")},m(t,n){v(t,e,n)},d(t){t&&$(e)}}}function Ve(s){let e;return{c(){e=y("Delete")},l(t){e=S(t,"Delete")},m(t,n){v(t,e,n)},d(t){t&&$(e)}}}function Pe(s){let e,t,n,l;return e=new ke({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),e.$on("click",s[7]),n=new ye({props:{disabled:!s[3],$$slots:{default:[Ve]},$$scope:{ctx:s}}}),n.$on("click",s[5]),{c(){G(e.$$.fragment),t=B(),G(n.$$.fragment)},l(a){L(e.$$.fragment,a),t=U(a),L(n.$$.fragment,a)},m(a,r){D(e,a,r),v(a,t,r),D(n,a,r),l=!0},p(a,r){const f={};r&8192&&(f.$$scope={dirty:r,ctx:a}),e.$set(f);const c={};r&8&&(c.disabled=!a[3]),r&8192&&(c.$$scope={dirty:r,ctx:a}),n.$set(c)},i(a){l||(b(e.$$.fragment,a),b(n.$$.fragment,a),l=!0)},o(a){k(e.$$.fragment,a),k(n.$$.fragment,a),l=!1},d(a){a&&$(t),I(e,a),I(n,a)}}}function Re(s){let e,t,n;return{c(){e=C("input"),this.h()},l(l){e=E(l,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){V(e,"class","govuk-file-upload"),V(e,"id","load-image"),V(e,"type","file")},m(l,a){v(l,e,a),s[8](e),t||(n=P(e,"change",s[4]),t=!0)},p:ue,d(l){l&&$(e),s[8](null),t=!1,n()}}}function x(s){let e,t,n,l,a,r,f,c;return{c(){e=C("div"),t=C("label"),n=C("input"),l=y(`
          Opacity: `),a=y(s[2]),r=y("%"),this.h()},l(m){e=E(m,"DIV",{});var o=O(e);t=E(o,"LABEL",{});var i=O(t);n=E(i,"INPUT",{type:!0,min:!0,max:!0}),l=S(i,`
          Opacity: `),a=S(i,s[2]),r=S(i,"%"),i.forEach($),o.forEach($),this.h()},h(){V(n,"type","range"),V(n,"min","0"),V(n,"max","100")},m(m,o){v(m,e,o),h(e,t),h(t,n),Y(n,s[2]),h(t,l),h(t,a),h(t,r),f||(c=[P(n,"change",s[9]),P(n,"input",s[9])],f=!0)},p(m,o){o&4&&Y(n,m[2]),o&4&&me(a,m[2])},d(m){m&&$(e),f=!1,pe(c)}}}function ze(s){let e,t,n,l,a,r;const f=[Ne,Ie],c=[];function m(o,i){return o[1]?0:1}return e=m(s),t=c[e]=f[e](s),{c(){t.c(),n=j()},l(o){t.l(o),n=j()},m(o,i){c[e].m(o,i),v(o,n,i),l=!0,a||(r=P(De,"keydown",s[6]),a=!0)},p(o,[i]){let u=e;e=m(o),e===u?c[e].p(o,i):(oe(),k(c[u],1,1,()=>{c[u]=null}),ae(),t=c[e],t?t.p(o,i):(t=c[e]=f[e](o),t.c()),b(t,1),t.m(n.parentNode,n))},i(o){l||(b(t),l=!0)},o(o){k(t),l=!1},d(o){o&&$(n),c[e].d(o),a=!1,r()}}}function Ae(s,e,t){let n,l,a,r,f;N(s,A,g=>t(1,n=g)),N(s,W,g=>t(2,l=g)),N(s,F,g=>t(3,a=g)),N(s,Z,g=>t(11,r=g)),N(s,X,g=>t(12,f=g));let c;async function m(g){o();let z=await c.files[0].arrayBuffer(),le=new Blob([new Uint8Array(z)]);w(F,a=URL.createObjectURL(le),a),w(X,f={lng:0,lat:0},f),w(Z,r={lng:0,lat:0},r);let re=c.files[0].name.toLowerCase();[".gif",".jpg",".jpeg",".png"].some(ie=>re.endsWith(ie))||window.alert("You can only georeference image files (GIF, JPEG, PNG). If you don't see anything on the map, try a different file type.")}function o(){w(F,a=null,a),w(W,l=100,l)}function i(g){n&&g.key=="Escape"&&(g.stopPropagation(),w(A,n=!1,n))}const u=()=>w(A,n=!1,n);function p(g){K[g?"unshift":"push"](()=>{c=g,t(0,c)})}function d(){l=ce(this.value),W.set(l)}return[c,n,l,a,m,o,i,u,p,d,()=>w(A,n=!0,n)]}class et extends M{constructor(e){super(),T(this,e,Ae,ze,q,{})}}export{et as G,Ze as M,xe as S,Z as b,F as i,W as o,A as s,X as t};
