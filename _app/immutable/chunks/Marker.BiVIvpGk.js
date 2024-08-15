import{s as V,l as G,e as w,a as N,c as B,b as M,g as T,f as p,q as y,v as H,i as b,h as C,y as L,u as J,m as Q,o as W,x as ge,C as Pe,X as ze,k as q,r as Me,D as R,p as Ae,w as De,n as pe,V as Y,K as Oe,t as E,d as P,Z as re,F as X,_ as Ne,U as Te}from"./scheduler.4ZNDCSWA.js";import{S as ee,i as te,t as v,b as S,c as le,a as ne,m as ae,d as se,e as Ke,g as be,f as ye}from"./index.xRKM1n3P.js";import{v as qe}from"./v4.D8aEg3BZ.js";import{e as ce}from"./each.DpHudclE.js";import{C as Re}from"./DefaultButton.CEkMkJr5.js";import"./index.CskSOX6V.js";import{S as Ue}from"./SecondaryButton.yCPBUDia.js";import{S as Ve}from"./Select.C7tWcODn.js";import{k as j,u as Fe,d as Ze}from"./index.Uk0DTelh.js";const Xe=l=>({}),ue=l=>({});function je(l){let e,n,s,t,_,o,r,u,c;const m=l[5].default,d=G(m,l,l[4],null),g=l[5].right,a=G(g,l,l[4],ue);return{c(){e=w("div"),n=w("input"),s=N(),t=w("label"),d&&d.c(),_=N(),o=w("span"),a&&a.c(),this.h()},l(i){e=B(i,"DIV",{class:!0,style:!0});var h=M(e);n=B(h,"INPUT",{type:!0,class:!0,id:!0}),s=T(h),t=B(h,"LABEL",{class:!0,for:!0,title:!0});var A=M(t);d&&d.l(A),A.forEach(p),_=T(h),o=B(h,"SPAN",{style:!0});var I=M(o);a&&a.l(I),I.forEach(p),h.forEach(p),this.h()},h(){y(n,"type","checkbox"),y(n,"class","govuk-checkboxes__input"),y(n,"id",l[3]),y(t,"class","govuk-label govuk-checkboxes__label"),y(t,"for",l[3]),y(t,"title",l[1]),H(o,"float","right"),y(e,"class","govuk-checkboxes__item"),y(e,"style",l[2])},m(i,h){b(i,e,h),C(e,n),n.checked=l[0],C(e,s),C(e,t),d&&d.m(t,null),C(e,_),C(e,o),a&&a.m(o,null),r=!0,u||(c=[L(n,"change",l[7]),L(n,"change",l[6])],u=!0)},p(i,[h]){h&1&&(n.checked=i[0]),d&&d.p&&(!r||h&16)&&J(d,m,i,i[4],r?W(m,i[4],h,null):Q(i[4]),null),(!r||h&2)&&y(t,"title",i[1]),a&&a.p&&(!r||h&16)&&J(a,g,i,i[4],r?W(g,i[4],h,Xe):Q(i[4]),ue)},i(i){r||(v(d,i),v(a,i),r=!0)},o(i){S(d,i),S(a,i),r=!1},d(i){i&&p(e),d&&d.d(i),a&&a.d(i),u=!1,ge(c)}}}function Ge(l,e,n){let{$$slots:s={},$$scope:t}=e;const _=ze(s);let{checked:o}=e,{hint:r=null}=e,c=_.right!==void 0?"float: none":"",m=qe();function d(a){Pe.call(this,l,a)}function g(){o=this.checked,n(0,o)}return l.$$set=a=>{"checked"in a&&n(0,o=a.checked),"hint"in a&&n(1,r=a.hint),"$$scope"in a&&n(4,t=a.$$scope)},[o,r,c,m,t,s,d,g]}class _t extends ee{constructor(e){super(),te(this,e,Ge,je,V,{checked:0,hint:1})}}function fe(l,e,n){const s=l.slice();return s[6]=e[n][0],s[7]=e[n][1],s}function He(l){let e;return{c(){e=E("disabled")},l(n){e=P(n,"disabled")},m(n,s){b(n,e,s)},d(n){n&&p(e)}}}function Je(l){let e;return{c(){e=E("enabled")},l(n){e=P(n,"enabled")},m(n,s){b(n,e,s)},d(n){n&&p(e)}}}function Qe(l){let e,n=l[7]+"",s,t;return{c(){e=E("Set "),s=E(n),t=E(` API key
      `)},l(_){e=P(_,"Set "),s=P(_,n),t=P(_,` API key
      `)},m(_,o){b(_,e,o),b(_,s,o),b(_,t,o)},p:pe,d(_){_&&(p(e),p(s),p(t))}}}function _e(l){let e,n,s=l[7]+"",t,_,o,r,u;function c(a,i){return $(a[6])?Je:He}let d=c(l)(l);function g(){return l[5](l[6])}return r=new Ue({props:{$$slots:{default:[Qe]},$$scope:{ctx:l}}}),r.$on("click",g),{c(){e=w("p"),n=w("u"),t=E(s),_=E(`
        : `),d.c(),o=N(),le(r.$$.fragment)},l(a){e=B(a,"P",{});var i=M(e);n=B(i,"U",{});var h=M(n);t=P(h,s),h.forEach(p),_=P(i,`
        : `),d.l(i),i.forEach(p),o=T(a),ne(r.$$.fragment,a)},m(a,i){b(a,e,i),C(e,n),C(n,t),C(e,_),d.m(e,null),b(a,o,i),ae(r,a,i),u=!0},p(a,i){l=a;const h={};i&1024&&(h.$$scope={dirty:i,ctx:l}),r.$set(h)},i(a){u||(v(r.$$.fragment,a),u=!0)},o(a){S(r.$$.fragment,a),u=!1},d(a){a&&(p(e),p(o)),d.d(),se(r,a)}}}function de(l){let e,n,s=ce([[U,"Bluesky satellite imagery"],[x,"Ordnance Survey"]]),t=[];for(let o=0;o<2;o+=1)t[o]=_e(fe(l,s,o));const _=o=>S(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<2;o+=1)t[o].c();e=R()},l(o){for(let r=0;r<2;r+=1)t[r].l(o);e=R()},m(o,r){for(let u=0;u<2;u+=1)t[u]&&t[u].m(o,r);b(o,e,r),n=!0},p(o,r){if(r&8){s=ce([[U,"Bluesky satellite imagery"],[x,"Ordnance Survey"]]);let u;for(u=0;u<2;u+=1){const c=fe(o,s,u);t[u]?(t[u].p(c,r),v(t[u],1)):(t[u]=_e(c),t[u].c(),v(t[u],1),t[u].m(e.parentNode,e))}for(be(),u=2;u<2;u+=1)_(u);ye()}},i(o){if(!n){for(let r=0;r<2;r+=1)v(t[r]);n=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<2;r+=1)S(t[r]);n=!1},d(o){o&&p(e),Oe(t,o)}}}function We(l){let e,n,s,t,_=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,o,r=l[0],u,c;function m(a){l[4](a)}let d={label:"Basemap",choices:l[1]};l[2]!==void 0&&(d.value=l[2]),e=new Ve({props:d}),Me.push(()=>Ke(e,"value",m));let g=de(l);return{c(){le(e.$$.fragment),s=N(),t=w("p"),t.textContent=_,o=N(),g.c(),u=R()},l(a){ne(e.$$.fragment,a),s=T(a),t=B(a,"P",{"data-svelte-h":!0}),Ae(t)!=="svelte-itr0ad"&&(t.textContent=_),o=T(a),g.l(a),u=R()},m(a,i){ae(e,a,i),b(a,s,i),b(a,t,i),b(a,o,i),g.m(a,i),b(a,u,i),c=!0},p(a,i){const h={};i&2&&(h.choices=a[1]),!n&&i&4&&(n=!0,h.value=a[2],De(()=>n=!1)),e.$set(h),i&1&&V(r,r=a[0])?(be(),S(g,1,1,pe),ye(),g=de(a),g.c(),v(g,1),g.m(u.parentNode,u)):g.p(a,i)},i(a){c||(v(e.$$.fragment,a),v(g),c=!0)},o(a){S(e.$$.fragment,a),S(g),c=!1},d(a){a&&(p(s),p(t),p(o),p(u)),se(e,a),g.d(a)}}}function Ye(l){let e,n;return e=new Re({props:{label:"Basemap",$$slots:{default:[We]},$$scope:{ctx:l}}}),{c(){le(e.$$.fragment)},l(s){ne(e.$$.fragment,s)},m(s,t){ae(e,s,t),n=!0},p(s,[t]){const _={};t&1031&&(_.$$scope={dirty:t,ctx:s}),e.$set(_)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}let U="bluesky-api-key",x="os-api-key";function $(l){let e=window.localStorage.getItem(l);return e!=null&&e.length>0}function me(){let l=[];return $(U)&&l.push(["bluesky","Bluesky Satellite (12.5cm)"]),$(x)&&l.push(["os-road","Ordnance Survey MasterMap"]),l.push(["maptiler-hybrid","MapTiler Satellite"]),l.push(["maptiler-streets","MapTiler Streets"]),l.push(["maptiler-dataviz","MapTiler Dataviz"]),l.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),l}function xe(l,e,n){let s;q(l,j,c=>n(2,s=c));let t=0;function _(c){let m=window.prompt("Enter the API key provided to you",window.localStorage.getItem(c)||"");window.localStorage.setItem(c,m||""),n(1,o=me()),n(0,t+=1),m&&m.length>0&&Y(j,s=c==U?"bluesky":"os-road",s)}let o=me();function r(c){s=c,j.set(s)}return[t,o,s,_,r,c=>_(c)]}class dt extends ee{constructor(e){super(),te(this,e,xe,Ye,V,{})}}const $e=l=>({marker:l&8}),he=l=>({marker:l[3]});function et(l){let e,n,s,t,_,o,r;const u=l[19].default,c=G(u,l,l[18],he);return{c(){e=w("div"),c&&c.c(),this.h()},l(m){e=B(m,"DIV",{tabindex:!0,role:!0});var d=M(e);c&&c.l(d),d.forEach(p),this.h()},h(){y(e,"tabindex",n=l[1]?0:void 0),y(e,"role",s=l[1]?"button":void 0),H(e,"z-index",l[2])},m(m,d){b(m,e,d),c&&c.m(e,null),_=!0,o||(r=[re(l[7].call(null,e)),re(t=tt.call(null,e,l[0])),L(e,"click",X(l[20])),L(e,"dblclick",X(l[21])),L(e,"contextmenu",X(l[22])),L(e,"mouseenter",l[23]),L(e,"mouseleave",l[24]),L(e,"mousemove",l[25]),L(e,"keydown",l[8])],o=!0)},p(m,[d]){c&&c.p&&(!_||d&262152)&&J(c,u,m,m[18],_?W(u,m[18],d,$e):Q(m[18]),he),(!_||d&2&&n!==(n=m[1]?0:void 0))&&y(e,"tabindex",n),(!_||d&2&&s!==(s=m[1]?"button":void 0))&&y(e,"role",s),t&&Ne(t.update)&&d&1&&t.update.call(null,m[0]),d&4&&H(e,"z-index",m[2])},i(m){_||(v(c,m),_=!0)},o(m){S(c,m),_=!1},d(m){m&&p(e),c&&c.d(m),o=!1,ge(r)}}}function tt(l,e){const n=l.className;function s(t){t?l.className=`${n} ${t}`:l.className=n}return s(e),{update:s}}function lt(l,e,n){let s,t,_,{$$slots:o={},$$scope:r}=e,{marker:u=void 0}=e,{lngLat:c}=e,{class:m=void 0}=e,{interactive:d=!0}=e,{asButton:g=!1}=e,{draggable:a=!1}=e,{feature:i=null}=e,{offset:h=void 0}=e,{zIndex:A=void 0}=e,{rotation:I=0}=e,{opacity:K=1}=e;const ke=Te(),{map:oe,layerEvent:F,self:Z}=Fe();q(l,oe,f=>n(27,_=f)),q(l,F,f=>n(26,s=f)),q(l,Z,f=>n(3,t=f));function ve(f){Y(Z,t=new Ze.Marker({element:f,rotation:I,draggable:a,offset:h,opacity:K.toString()}).setLngLat(c).addTo(_),t),n(11,u=t);const z=()=>k("dragstart"),D=()=>{ie(),k("drag")},O=()=>{ie(),k("dragend")};return a&&(t.on("dragstart",z),t.on("drag",D),t.on("dragend",O)),{destroy(){a&&(t==null||t.off("dragstart",z),t==null||t.off("drag",D),t==null||t.off("dragend",O)),n(11,u=void 0),t==null||t.remove()}}}function ie(){let f=t==null?void 0:t.getLngLat();f&&(Array.isArray(c)?n(10,c=[f.lng,f.lat]):c&&"lon"in c?n(10,c={lon:f.lng,lat:f.lat}):n(10,c=f))}function Se(f){f.key===" "&&(f.preventDefault(),f.stopPropagation(),k("click"))}function k(f){if(!d)return;let z=t==null?void 0:t.getLngLat();if(!z)return;const D=[z.lng,z.lat];let O={map:_,marker:t,lngLat:D,features:[{type:"Feature",properties:(i==null?void 0:i.properties)??{},geometry:{type:"Point",coordinates:D}}]};Y(F,s={...O,layerType:"marker",type:f},s),ke(f,O)}const Le=()=>k("click"),Ce=()=>k("dblclick"),we=()=>k("contextmenu"),Be=f=>{k("mouseenter")},Ie=()=>{k("mouseleave")},Ee=()=>k("mousemove");return l.$$set=f=>{"marker"in f&&n(11,u=f.marker),"lngLat"in f&&n(10,c=f.lngLat),"class"in f&&n(0,m=f.class),"interactive"in f&&n(12,d=f.interactive),"asButton"in f&&n(1,g=f.asButton),"draggable"in f&&n(13,a=f.draggable),"feature"in f&&n(14,i=f.feature),"offset"in f&&n(15,h=f.offset),"zIndex"in f&&n(2,A=f.zIndex),"rotation"in f&&n(16,I=f.rotation),"opacity"in f&&n(17,K=f.opacity),"$$scope"in f&&n(18,r=f.$$scope)},l.$$.update=()=>{l.$$.dirty&1032&&(t==null||t.setLngLat(c)),l.$$.dirty&32776&&(t==null||t.setOffset(h??[0,0])),l.$$.dirty&65544&&(t==null||t.setRotation(I)),l.$$.dirty&131080&&(t==null||t.setOpacity(K.toString()))},[m,g,A,t,oe,F,Z,ve,Se,k,c,u,d,a,i,h,I,K,r,o,Le,Ce,we,Be,Ie,Ee]}class mt extends ee{constructor(e){super(),te(this,e,lt,et,V,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}export{dt as B,_t as C,mt as M};
