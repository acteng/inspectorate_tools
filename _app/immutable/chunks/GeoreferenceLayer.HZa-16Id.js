import{s as U,l as ne,e as E,a as D,c as I,b as T,g as P,f as p,A as v,q as J,i as w,h as S,C as z,u as le,m as oe,o as ae,E as _e,J as H,a8 as Qe,t as q,d as K,B as ue,j as ye,z as Xe,O as $e,F as me,x as re,y as O,k as B,a9 as Le,w as N,n as he,a7 as Ge,aa as Ee,D as ke,Z as xe,p as se,r as de,ab as et}from"./scheduler.XIVCFyi4.js";import{S as W,i as F,t as k,b as L,c as A,a as M,m as R,d as V,g as X,f as $,e as ge}from"./index.D7_e3ZBj.js";import{C as tt}from"./CollapsibleCard.BW4ZGuao.js";import{S as Ue,W as nt}from"./WarningButton.B4zD6syQ.js";import{a as qe,u as lt,r as ot,c as at,d as rt,m as st,f as it,b as ut,L as ft,g as ct}from"./MapLibreMap.CubewAHL.js";import{v as Ke,E as mt}from"./ErrorMessage.Bhf2VEMf.js";import{e as Ie}from"./each.BB0bmEp7.js";import{s as dt,a as gt}from"./index.DOQeibdl.js";import{B as _t}from"./ButtonGroup.DXb4qPEr.js";import{D as ht}from"./DefaultButton.2tqBuAC7.js";import{F as bt}from"./FormElement.BQeiyF3o.js";import{w as ie}from"./entry.7pgei_Uk.js";const pt=o=>({}),Ce=o=>({});function kt(o){let e,n,t,l,a,i,f,m,g;const s=o[5].default,r=ne(s,o,o[4],null),u=o[5].right,c=ne(u,o,o[4],Ce);return{c(){e=E("div"),n=E("input"),t=D(),l=E("label"),r&&r.c(),a=D(),i=E("span"),c&&c.c(),this.h()},l(d){e=I(d,"DIV",{class:!0,style:!0});var _=T(e);n=I(_,"INPUT",{type:!0,class:!0,id:!0}),t=P(_),l=I(_,"LABEL",{class:!0,for:!0,title:!0});var h=T(l);r&&r.l(h),h.forEach(p),a=P(_),i=I(_,"SPAN",{style:!0});var C=T(i);c&&c.l(C),C.forEach(p),_.forEach(p),this.h()},h(){v(n,"type","checkbox"),v(n,"class","govuk-checkboxes__input"),v(n,"id",o[3]),v(l,"class","govuk-label govuk-checkboxes__label"),v(l,"for",o[3]),v(l,"title",o[1]),J(i,"float","right"),v(e,"class","govuk-checkboxes__item"),v(e,"style",o[2])},m(d,_){w(d,e,_),S(e,n),n.checked=o[0],S(e,t),S(e,l),r&&r.m(l,null),S(e,a),S(e,i),c&&c.m(i,null),f=!0,m||(g=[z(n,"change",o[7]),z(n,"change",o[6])],m=!0)},p(d,[_]){_&1&&(n.checked=d[0]),r&&r.p&&(!f||_&16)&&le(r,s,d,d[4],f?ae(s,d[4],_,null):oe(d[4]),null),(!f||_&2)&&v(l,"title",d[1]),c&&c.p&&(!f||_&16)&&le(c,u,d,d[4],f?ae(u,d[4],_,pt):oe(d[4]),Ce)},i(d){f||(k(r,d),k(c,d),f=!0)},o(d){L(r,d),L(c,d),f=!1},d(d){d&&p(e),r&&r.d(d),c&&c.d(d),m=!1,_e(g)}}}function vt(o,e,n){let{$$slots:t={},$$scope:l}=e;const a=Qe(t);let{checked:i}=e,{hint:f=null}=e,g=a.right!==void 0?"float: none":"",s=Ke();function r(c){H.call(this,o,c)}function u(){i=this.checked,n(0,i)}return o.$$set=c=>{"checked"in c&&n(0,i=c.checked),"hint"in c&&n(1,f=c.hint),"$$scope"in c&&n(4,l=c.$$scope)},[i,f,g,s,l,t,r,u]}class yt extends W{constructor(e){super(),F(this,e,vt,kt,U,{checked:0,hint:1})}}function Ne(o,e,n){const t=o.slice();return t[10]=e[n][0],t[11]=e[n][1],t}function ze(o){let e,n,t,l,a=!1,i,f,m=o[11]+"",g,s,r,u,c,d;return u=$e(o[9][0]),{c(){e=E("div"),n=E("input"),i=D(),f=E("label"),g=q(m),r=D(),this.h()},l(_){e=I(_,"DIV",{class:!0});var h=T(e);n=I(h,"INPUT",{class:!0,id:!0,type:!0}),i=P(h),f=I(h,"LABEL",{class:!0,for:!0});var C=T(f);g=K(C,m),C.forEach(p),r=P(h),h.forEach(p),this.h()},h(){v(n,"class","govuk-radios__input"),v(n,"id",t=o[5]+o[10]),v(n,"type","radio"),n.__value=l=o[10],me(n,n.__value),v(f,"class","govuk-label govuk-radios__label"),v(f,"for",s=o[5]+o[10]),v(e,"class","govuk-radios__item"),u.p(n)},m(_,h){w(_,e,h),S(e,n),n.checked=n.__value===o[0],S(e,i),S(e,f),S(f,g),S(e,r),c||(d=[z(n,"change",o[8]),z(n,"change",o[7])],c=!0)},p(_,h){h&4&&t!==(t=_[5]+_[10])&&v(n,"id",t),h&4&&l!==(l=_[10])&&(n.__value=l,me(n,n.__value),a=!0),(a||h&5)&&(n.checked=n.__value===_[0]),h&4&&m!==(m=_[11]+"")&&ye(g,m),h&4&&s!==(s=_[5]+_[10])&&v(f,"for",s)},d(_){_&&p(e),u.r(),c=!1,_e(d)}}}function Lt(o){let e,n,t,l,a,i,f,m,g;i=new mt({props:{errorMessage:o[4]}});let s=Ie(o[2]),r=[];for(let u=0;u<s.length;u+=1)r[u]=ze(Ne(o,s,u));return{c(){e=E("div"),n=E("fieldset"),t=E("legend"),l=q(o[1]),a=D(),A(i.$$.fragment),f=D(),m=E("div");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=I(u,"DIV",{class:!0});var c=T(e);n=I(c,"FIELDSET",{class:!0});var d=T(n);t=I(d,"LEGEND",{class:!0});var _=T(t);l=K(_,o[1]),_.forEach(p),a=P(d),M(i.$$.fragment,d),f=P(d),m=I(d,"DIV",{class:!0,"data-module":!0});var h=T(m);for(let C=0;C<r.length;C+=1)r[C].l(h);h.forEach(p),d.forEach(p),c.forEach(p),this.h()},h(){v(t,"class","govuk-fieldset__legend govuk-label--s"),v(m,"class","govuk-radios"),v(m,"data-module","govuk-radios"),ue(m,"govuk-radios--inline",o[3]),ue(m,"govuk-radios--small",o[3]),v(n,"class","govuk-fieldset"),v(e,"class","govuk-form-group")},m(u,c){w(u,e,c),S(e,n),S(n,t),S(t,l),S(n,a),R(i,n,null),S(n,f),S(n,m);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(m,null);g=!0},p(u,[c]){(!g||c&2)&&ye(l,u[1]);const d={};if(c&16&&(d.errorMessage=u[4]),i.$set(d),c&37){s=Ie(u[2]);let _;for(_=0;_<s.length;_+=1){const h=Ne(u,s,_);r[_]?r[_].p(h,c):(r[_]=ze(h),r[_].c(),r[_].m(m,null))}for(;_<r.length;_+=1)r[_].d(1);r.length=s.length}(!g||c&8)&&ue(m,"govuk-radios--inline",u[3]),(!g||c&8)&&ue(m,"govuk-radios--small",u[3])},i(u){g||(k(i.$$.fragment,u),g=!0)},o(u){L(i.$$.fragment,u),g=!1},d(u){u&&p(e),V(i),Xe(r,u)}}}function wt(o,e,n){let t,{legend:l}=e,{choices:a}=e,{inlineSmall:i=!1}=e,{required:f=!1}=e,{value:m}=e,g=Ke();const s=[[]];function r(c){H.call(this,o,c)}function u(){m=this.__value,n(0,m)}return o.$$set=c=>{"legend"in c&&n(1,l=c.legend),"choices"in c&&n(2,a=c.choices),"inlineSmall"in c&&n(3,i=c.inlineSmall),"required"in c&&n(6,f=c.required),"value"in c&&n(0,m=c.value)},o.$$.update=()=>{o.$$.dirty&65&&n(4,t=f&&m==""?"Required":"")},[m,l,a,i,t,g,f,r,u,s]}class St extends W{constructor(e){super(),F(this,e,wt,Lt,U,{legend:1,choices:2,inlineSmall:3,required:6,value:0})}}function Et(o){let e,n="You can manually use high-quality Bluesky imagery if you have a valid key.";return{c(){e=E("p"),e.textContent=n},l(t){e=I(t,"P",{"data-svelte-h":!0}),re(e)!=="svelte-1e80rhw"&&(e.textContent=n)},m(t,l){w(t,e,l)},d(t){t&&p(e)}}}function It(o){let e,n="The map should be showing Bluesky imagery.";return{c(){e=E("p"),e.textContent=n},l(t){e=I(t,"P",{"data-svelte-h":!0}),re(e)!=="svelte-13v9ac9"&&(e.textContent=n)},m(t,l){w(t,e,l)},d(t){t&&p(e)}}}function Ct(o){let e;return{c(){e=q("Set Bluesky API key")},l(n){e=K(n,"Set Bluesky API key")},m(n,t){w(n,e,t)},d(n){n&&p(e)}}}function Nt(o){let e,n,t=`<i>Note this feature is temporary -- in the future, you will login and
      automatically have access to this imagery.</i>`,l,a,i;function f(s,r){return Bt()?It:Et}let g=f()(o);return a=new Ue({props:{$$slots:{default:[Ct]},$$scope:{ctx:o}}}),a.$on("click",Dt),{c(){g.c(),e=D(),n=E("p"),n.innerHTML=t,l=D(),A(a.$$.fragment)},l(s){g.l(s),e=P(s),n=I(s,"P",{"data-svelte-h":!0}),re(n)!=="svelte-jc29jc"&&(n.innerHTML=t),l=P(s),M(a.$$.fragment,s)},m(s,r){g.m(s,r),w(s,e,r),w(s,n,r),w(s,l,r),R(a,s,r),i=!0},p(s,r){const u={};r&1&&(u.$$scope={dirty:r,ctx:s}),a.$set(u)},i(s){i||(k(a.$$.fragment,s),i=!0)},o(s){L(a.$$.fragment,s),i=!1},d(s){s&&(p(e),p(n),p(l)),g.d(s),V(a,s)}}}function zt(o){let e,n;return e=new tt({props:{label:"Bluesky imagery",$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,[l]){const a={};l&1&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}let ve="bluesky-api-key";function Bt(){let o=window.localStorage.getItem(ve);return o!=null&&o.length>0}function Dt(){let o=window.prompt("Enter the API key provided to you",window.localStorage.getItem(ve)||"");window.localStorage.setItem(ve,o||""),window.location.reload()}class yn extends W{constructor(e){super(),F(this,e,null,zt,U,{})}}function Be(o){let e=o[0],n,t,l=De(o);return{c(){l.c(),n=O()},l(a){l.l(a),n=O()},m(a,i){l.m(a,i),w(a,n,i),t=!0},p(a,i){i&1&&U(e,e=a[0])?(X(),L(l,1,1,he),$(),l=De(a),l.c(),k(l,1),l.m(n.parentNode,n)):l.p(a,i)},i(a){t||(k(l),t=!0)},o(a){L(l),t=!1},d(a){a&&p(n),l.d(a)}}}function De(o){let e;const n=o[10].default,t=ne(n,o,o[9],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&512)&&le(t,n,l,l[9],e?ae(n,l[9],a,null):oe(l[9]),null)},i(l){e||(k(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function Pt(o){let e,n,t=o[0]&&Be(o);return{c(){t&&t.c(),e=O()},l(l){t&&t.l(l),e=O()},m(l,a){t&&t.m(l,a),w(l,e,a),n=!0},p(l,[a]){l[0]?t?(t.p(l,a),a&1&&k(t,1)):(t=Be(l),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(X(),L(t,1,1,()=>{t=null}),$())},i(l){n||(k(t),n=!0)},o(l){L(t),n=!1},d(l){l&&p(e),t&&t.d(l)}}}function Tt(o,e,n){let t,l,{$$slots:a={},$$scope:i}=e,{id:f=qe("image")}=e,{url:m}=e,{coordinates:g}=e;const{map:s,self:r}=lt();B(o,s,d=>n(8,l=d)),B(o,r,d=>n(0,t=d));let u,c=!0;return Le(()=>{t&&l&&(ot(s,t,u),N(r,t=null,t),n(6,u=void 0))}),o.$$set=d=>{"id"in d&&n(3,f=d.id),"url"in d&&n(4,m=d.url),"coordinates"in d&&n(5,g=d.coordinates),"$$scope"in d&&n(9,i=d.$$scope)},o.$$.update=()=>{o.$$.dirty&313&&l&&t!==f&&(N(r,t=f,t),at(l,t,rt({type:"image",url:m,coordinates:g}),d=>l&&d===t,()=>{t&&(n(6,u=l==null?void 0:l.getSource(t)),n(7,c=!0))})),o.$$.dirty&264&&(l==null||l.on("style.load",()=>{n(6,u=l==null?void 0:l.getSource(f))})),o.$$.dirty&224&&u&&(c?n(7,c=!1):u.setCoordinates(g))},[t,s,r,f,m,g,u,c,l,i,a]}class At extends W{constructor(e){super(),F(this,e,Tt,Pt,U,{id:3,url:4,coordinates:5})}}function Mt(o,e,n){let t;const l=Ge();let{layer:a=void 0}=e;const{map:i}=st();B(o,i,s=>n(2,t=s));function f(s){l(s.type,{...s,map:i})}const m=["click","dblclick","mousedown","mouseup","mousemove","mouseenter","mouseleave","contextmenu","mouseover","mouseout"],g=["click","dblclick","contextmenu","mousemove","movestart","moveend","zoomstart","zoom","zoomend"];return Le(()=>{if(t)if(a)for(const s of m)t.off(s,a,f);else for(const s of g)t.off(s,f)}),o.$$set=s=>{"layer"in s&&n(1,a=s.layer)},o.$$.update=()=>{if(o.$$.dirty&6&&t)if(a)for(const s of m)t.on(s,a,f);else for(const s of g)t.on(s,f)},[i,a,t]}class Ln extends W{constructor(e){super(),F(this,e,Mt,null,U,{layer:1})}}const Rt=o=>({marker:o&8}),Pe=o=>({marker:o[3]});function Vt(o){let e,n,t,l,a,i,f;const m=o[19].default,g=ne(m,o,o[18],Pe);return{c(){e=E("div"),g&&g.c(),this.h()},l(s){e=I(s,"DIV",{tabindex:!0,role:!0});var r=T(e);g&&g.l(r),r.forEach(p),this.h()},h(){v(e,"tabindex",n=o[1]?0:void 0),v(e,"role",t=o[1]?"button":void 0),J(e,"z-index",o[2])},m(s,r){w(s,e,r),g&&g.m(e,null),a=!0,i||(f=[Ee(o[7].call(null,e)),Ee(l=Gt.call(null,e,o[0])),z(e,"click",ke(o[20])),z(e,"dblclick",ke(o[21])),z(e,"contextmenu",ke(o[22])),z(e,"mouseenter",o[23]),z(e,"mouseleave",o[24]),z(e,"mousemove",o[25]),z(e,"keydown",o[8])],i=!0)},p(s,[r]){g&&g.p&&(!a||r&262152)&&le(g,m,s,s[18],a?ae(m,s[18],r,Rt):oe(s[18]),Pe),(!a||r&2&&n!==(n=s[1]?0:void 0))&&v(e,"tabindex",n),(!a||r&2&&t!==(t=s[1]?"button":void 0))&&v(e,"role",t),l&&xe(l.update)&&r&1&&l.update.call(null,s[0]),r&4&&J(e,"z-index",s[2])},i(s){a||(k(g,s),a=!0)},o(s){L(g,s),a=!1},d(s){s&&p(e),g&&g.d(s),i=!1,_e(f)}}}function Gt(o,e){const n=o.className;function t(l){l?o.className=`${n} ${l}`:o.className=n}return t(e),{update:t}}function Ut(o,e,n){let t,l,a,{$$slots:i={},$$scope:f}=e,{marker:m=void 0}=e,{lngLat:g}=e,{class:s=void 0}=e,{interactive:r=!0}=e,{asButton:u=!1}=e,{draggable:c=!1}=e,{feature:d=null}=e,{offset:_=void 0}=e,{zIndex:h=void 0}=e,{rotation:C=0}=e,{opacity:j=1}=e;const y=Ge(),{map:we,layerEvent:be,self:pe}=it();B(o,we,b=>n(27,a=b)),B(o,be,b=>n(26,t=b)),B(o,pe,b=>n(3,l=b));function Oe(b){N(pe,l=new ut.Marker({element:b,rotation:C,draggable:c,offset:_,opacity:j.toString()}).setLngLat(g).addTo(a),l),n(11,m=l);const Y=()=>G("dragstart"),x=()=>{Se(),G("drag")},ee=()=>{Se(),G("dragend")};return c&&(l.on("dragstart",Y),l.on("drag",x),l.on("dragend",ee)),{destroy(){c&&(l==null||l.off("dragstart",Y),l==null||l.off("drag",x),l==null||l.off("dragend",ee)),n(11,m=void 0),l==null||l.remove()}}}function Se(){let b=l==null?void 0:l.getLngLat();b&&(Array.isArray(g)?n(10,g=[b.lng,b.lat]):g&&"lon"in g?n(10,g={lon:b.lng,lat:b.lat}):n(10,g=b))}function We(b){b.key===" "&&(b.preventDefault(),b.stopPropagation(),G("click"))}function G(b){if(!r)return;let Y=l==null?void 0:l.getLngLat();if(!Y)return;const x=[Y.lng,Y.lat];let ee={map:a,marker:l,lngLat:x,features:[{type:"Feature",properties:(d==null?void 0:d.properties)??{},geometry:{type:"Point",coordinates:x}}]};N(be,t={...ee,layerType:"marker",type:b},t),y(b,ee)}const Fe=()=>G("click"),je=()=>G("dblclick"),He=()=>G("contextmenu"),Je=b=>{G("mouseenter")},Ye=()=>{G("mouseleave")},Ze=()=>G("mousemove");return o.$$set=b=>{"marker"in b&&n(11,m=b.marker),"lngLat"in b&&n(10,g=b.lngLat),"class"in b&&n(0,s=b.class),"interactive"in b&&n(12,r=b.interactive),"asButton"in b&&n(1,u=b.asButton),"draggable"in b&&n(13,c=b.draggable),"feature"in b&&n(14,d=b.feature),"offset"in b&&n(15,_=b.offset),"zIndex"in b&&n(2,h=b.zIndex),"rotation"in b&&n(16,C=b.rotation),"opacity"in b&&n(17,j=b.opacity),"$$scope"in b&&n(18,f=b.$$scope)},o.$$.update=()=>{o.$$.dirty&1032&&(l==null||l.setLngLat(g)),o.$$.dirty&32776&&(l==null||l.setOffset(_??[0,0])),o.$$.dirty&65544&&(l==null||l.setRotation(C)),o.$$.dirty&131080&&(l==null||l.setOpacity(j.toString()))},[s,u,h,l,we,be,pe,Oe,We,G,g,m,r,c,d,_,C,j,f,i,Fe,je,He,Je,Ye,Ze]}class Te extends W{constructor(e){super(),F(this,e,Ut,Vt,U,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}function qt(o){let e;const n=o[8].default,t=ne(n,o,o[15],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&32768)&&le(t,n,l,l[15],e?ae(n,l[15],a,null):oe(l[15]),null)},i(l){e||(k(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function Kt(o){let e,n;return e=new ft({props:{id:o[0],type:"raster",source:o[1],beforeId:o[2],beforeLayerType:o[3],paint:o[4],layout:o[5],minzoom:o[6],maxzoom:o[7],$$slots:{default:[qt]},$$scope:{ctx:o}}}),e.$on("click",o[9]),e.$on("dblclick",o[10]),e.$on("contextmenu",o[11]),e.$on("mouseenter",o[12]),e.$on("mousemove",o[13]),e.$on("mouseleave",o[14]),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,[l]){const a={};l&1&&(a.id=t[0]),l&2&&(a.source=t[1]),l&4&&(a.beforeId=t[2]),l&8&&(a.beforeLayerType=t[3]),l&16&&(a.paint=t[4]),l&32&&(a.layout=t[5]),l&64&&(a.minzoom=t[6]),l&128&&(a.maxzoom=t[7]),l&32768&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ot(o,e,n){let{$$slots:t={},$$scope:l}=e,{id:a=qe("raster-layer")}=e,{source:i=void 0}=e,{beforeId:f=void 0}=e,{beforeLayerType:m=void 0}=e,{paint:g}=e,{layout:s=void 0}=e,{minzoom:r=void 0}=e,{maxzoom:u=void 0}=e;function c(y){H.call(this,o,y)}function d(y){H.call(this,o,y)}function _(y){H.call(this,o,y)}function h(y){H.call(this,o,y)}function C(y){H.call(this,o,y)}function j(y){H.call(this,o,y)}return o.$$set=y=>{"id"in y&&n(0,a=y.id),"source"in y&&n(1,i=y.source),"beforeId"in y&&n(2,f=y.beforeId),"beforeLayerType"in y&&n(3,m=y.beforeLayerType),"paint"in y&&n(4,g=y.paint),"layout"in y&&n(5,s=y.layout),"minzoom"in y&&n(6,r=y.minzoom),"maxzoom"in y&&n(7,u=y.maxzoom),"$$scope"in y&&n(15,l=y.$$scope)},[a,i,f,m,g,s,r,u,t,c,d,_,h,C,j,l]}class Wt extends W{constructor(e){super(),F(this,e,Ot,Kt,U,{id:0,source:1,beforeId:2,beforeLayerType:3,paint:4,layout:5,minzoom:6,maxzoom:7})}}const{window:Ft}=ct;function jt(o){let e;return{c(){e=q("StreetView")},l(n){e=K(n,"StreetView")},m(n,t){w(n,e,t)},d(n){n&&p(e)}}}function Ae(o){let e,n,t;function l(i){o[5](i)}let a={legend:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return o[1]!==void 0&&(a.value=o[1]),e=new St({props:a}),se.push(()=>ge(e,"value",l)),{c(){A(e.$$.fragment)},l(i){M(e.$$.fragment,i)},m(i,f){R(e,i,f),t=!0},p(i,f){const m={};!n&&f&2&&(n=!0,m.value=i[1],de(()=>n=!1)),e.$set(m)},i(i){t||(k(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){V(e,i)}}}function Ht(o){let e,n,t,l,a,i,f;function m(r){o[4](r)}let g={$$slots:{default:[jt]},$$scope:{ctx:o}};o[0]!==void 0&&(g.checked=o[0]),e=new yt({props:g}),se.push(()=>ge(e,"checked",m));let s=o[0]&&Ae(o);return{c(){A(e.$$.fragment),t=D(),s&&s.c(),l=O()},l(r){M(e.$$.fragment,r),t=P(r),s&&s.l(r),l=O()},m(r,u){R(e,r,u),w(r,t,u),s&&s.m(r,u),w(r,l,u),a=!0,i||(f=z(Ft,"keydown",o[2]),i=!0)},p(r,[u]){const c={};u&512&&(c.$$scope={dirty:u,ctx:r}),!n&&u&1&&(n=!0,c.checked=r[0],de(()=>n=!1)),e.$set(c),r[0]?s?(s.p(r,u),u&1&&k(s,1)):(s=Ae(r),s.c(),k(s,1),s.m(l.parentNode,l)):s&&(X(),L(s,1,1,()=>{s=null}),$())},i(r){a||(k(e.$$.fragment,r),k(s),a=!0)},o(r){L(e.$$.fragment,r),L(s),a=!1},d(r){r&&(p(t),p(l)),V(e,r),s&&s.d(r),i=!1,f()}}}function Jt(o,e,n){let{map:t}=e,{enabled:l=!1}=e,a="google";function i(){t.on("click",m),t.getCanvas().style.cursor="zoom-in"}function f(){t.off("click",m),t.getCanvas().style.cursor="auto"}Le(f);function m(u){window.open(a=="google"?dt(u.lngLat.toArray()):gt(u.lngLat.toArray()),"_blank"),n(0,l=!1)}function g(u){l&&u.key=="Escape"&&n(0,l=!1)}function s(u){l=u,n(0,l)}function r(u){a=u,n(1,a)}return o.$$set=u=>{"map"in u&&n(3,t=u.map),"enabled"in u&&n(0,l=u.enabled)},o.$$.update=()=>{o.$$.dirty&1&&(l?i():f())},[l,a,g,t,s,r]}class wn extends W{constructor(e){super(),F(this,e,Jt,Ht,U,{map:3,enabled:0})}}const te=ie(!1),fe=ie(null),ce=ie(100),Z=ie({lng:0,lat:0}),Q=ie({lng:0,lat:0});function Yt(o){let e,n;return e=new Ue({props:{$$slots:{default:[Qt]},$$scope:{ctx:o}}}),e.$on("click",o[10]),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const a={};l&8192&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Zt(o){let e,n,t="Georeference an image",l,a,i,f,m,g,s,r=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,u;a=new _t({props:{$$slots:{default:[xt]},$$scope:{ctx:o}}}),f=new bt({props:{label:"Load an image",id:"load-image",$$slots:{default:[en]},$$scope:{ctx:o}}});let c=o[3]&&Me(o);return{c(){e=E("div"),n=E("h2"),n.textContent=t,l=D(),A(a.$$.fragment),i=D(),A(f.$$.fragment),m=D(),c&&c.c(),g=D(),s=E("p"),s.textContent=r,this.h()},l(d){e=I(d,"DIV",{style:!0});var _=T(e);n=I(_,"H2",{"data-svelte-h":!0}),re(n)!=="svelte-fociiu"&&(n.textContent=t),l=P(_),M(a.$$.fragment,_),i=P(_),M(f.$$.fragment,_),m=P(_),c&&c.l(_),g=P(_),s=I(_,"P",{"data-svelte-h":!0}),re(s)!=="svelte-d8uklv"&&(s.textContent=r),_.forEach(p),this.h()},h(){J(e,"border","1px solid black"),J(e,"padding","4px")},m(d,_){w(d,e,_),S(e,n),S(e,l),R(a,e,null),S(e,i),R(f,e,null),S(e,m),c&&c.m(e,null),S(e,g),S(e,s),u=!0},p(d,_){const h={};_&8202&&(h.$$scope={dirty:_,ctx:d}),a.$set(h);const C={};_&8193&&(C.$$scope={dirty:_,ctx:d}),f.$set(C),d[3]?c?c.p(d,_):(c=Me(d),c.c(),c.m(e,g)):c&&(c.d(1),c=null)},i(d){u||(k(a.$$.fragment,d),k(f.$$.fragment,d),u=!0)},o(d){L(a.$$.fragment,d),L(f.$$.fragment,d),u=!1},d(d){d&&p(e),V(a),V(f),c&&c.d()}}}function Qt(o){let e;return{c(){e=q("Georeference an image")},l(n){e=K(n,"Georeference an image")},m(n,t){w(n,e,t)},d(n){n&&p(e)}}}function Xt(o){let e;return{c(){e=q("Save")},l(n){e=K(n,"Save")},m(n,t){w(n,e,t)},d(n){n&&p(e)}}}function $t(o){let e;return{c(){e=q("Delete")},l(n){e=K(n,"Delete")},m(n,t){w(n,e,t)},d(n){n&&p(e)}}}function xt(o){let e,n,t,l;return e=new ht({props:{$$slots:{default:[Xt]},$$scope:{ctx:o}}}),e.$on("click",o[7]),t=new nt({props:{disabled:!o[3],$$slots:{default:[$t]},$$scope:{ctx:o}}}),t.$on("click",o[5]),{c(){A(e.$$.fragment),n=D(),A(t.$$.fragment)},l(a){M(e.$$.fragment,a),n=P(a),M(t.$$.fragment,a)},m(a,i){R(e,a,i),w(a,n,i),R(t,a,i),l=!0},p(a,i){const f={};i&8192&&(f.$$scope={dirty:i,ctx:a}),e.$set(f);const m={};i&8&&(m.disabled=!a[3]),i&8192&&(m.$$scope={dirty:i,ctx:a}),t.$set(m)},i(a){l||(k(e.$$.fragment,a),k(t.$$.fragment,a),l=!0)},o(a){L(e.$$.fragment,a),L(t.$$.fragment,a),l=!1},d(a){a&&p(n),V(e,a),V(t,a)}}}function en(o){let e,n,t;return{c(){e=E("input"),this.h()},l(l){e=I(l,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){v(e,"class","govuk-file-upload"),v(e,"id","load-image"),v(e,"type","file")},m(l,a){w(l,e,a),o[8](e),n||(t=z(e,"change",o[4]),n=!0)},p:he,d(l){l&&p(e),o[8](null),n=!1,t()}}}function Me(o){let e,n,t,l,a,i,f,m;return{c(){e=E("div"),n=E("label"),t=E("input"),l=q(`
          Opacity: `),a=q(o[2]),i=q("%"),this.h()},l(g){e=I(g,"DIV",{});var s=T(e);n=I(s,"LABEL",{});var r=T(n);t=I(r,"INPUT",{type:!0,min:!0,max:!0}),l=K(r,`
          Opacity: `),a=K(r,o[2]),i=K(r,"%"),r.forEach(p),s.forEach(p),this.h()},h(){v(t,"type","range"),v(t,"min","0"),v(t,"max","100")},m(g,s){w(g,e,s),S(e,n),S(n,t),me(t,o[2]),S(n,l),S(n,a),S(n,i),f||(m=[z(t,"change",o[9]),z(t,"input",o[9])],f=!0)},p(g,s){s&4&&me(t,g[2]),s&4&&ye(a,g[2])},d(g){g&&p(e),f=!1,_e(m)}}}function tn(o){let e,n,t,l,a,i;const f=[Zt,Yt],m=[];function g(s,r){return s[1]?0:1}return e=g(o),n=m[e]=f[e](o),{c(){n.c(),t=O()},l(s){n.l(s),t=O()},m(s,r){m[e].m(s,r),w(s,t,r),l=!0,a||(i=z(window,"keydown",o[6]),a=!0)},p(s,[r]){let u=e;e=g(s),e===u?m[e].p(s,r):(X(),L(m[u],1,1,()=>{m[u]=null}),$(),n=m[e],n?n.p(s,r):(n=m[e]=f[e](s),n.c()),k(n,1),n.m(t.parentNode,t))},i(s){l||(k(n),l=!0)},o(s){L(n),l=!1},d(s){s&&p(t),m[e].d(s),a=!1,i()}}}function nn(o,e,n){let t,l,a,i,f;B(o,te,h=>n(1,t=h)),B(o,ce,h=>n(2,l=h)),B(o,fe,h=>n(3,a=h)),B(o,Q,h=>n(11,i=h)),B(o,Z,h=>n(12,f=h));let m;async function g(h){let C=await m.files[0].arrayBuffer(),j=new Blob([new Uint8Array(C)]);N(fe,a=URL.createObjectURL(j),a),N(Z,f={lng:0,lat:0},f),N(Q,i={lng:0,lat:0},i)}function s(){N(fe,a=null,a),N(ce,l=100,l)}function r(h){t&&h.key=="Escape"&&(h.stopPropagation(),N(te,t=!1,t))}const u=()=>N(te,t=!1,t);function c(h){se[h?"unshift":"push"](()=>{m=h,n(0,m)})}function d(){l=et(this.value),ce.set(l)}return[m,t,l,a,g,s,r,u,c,d,()=>N(te,t=!0,t)]}class Sn extends W{constructor(e){super(),F(this,e,nn,tn,U,{})}}function Re(o){let e,n;return e=new At({props:{url:o[2],coordinates:[[o[0].lng,o[0].lat],[o[3].lng,o[0].lat],[o[3].lng,o[3].lat],[o[0].lng,o[3].lat]],$$slots:{default:[ln]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const a={};l&4&&(a.url=t[2]),l&9&&(a.coordinates=[[t[0].lng,t[0].lat],[t[3].lng,t[0].lat],[t[3].lng,t[3].lat],[t[0].lng,t[3].lat]]),l&272&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function ln(o){let e,n;return e=new Wt({props:{paint:{"raster-fade-duration":0,"raster-opacity":o[4]/100}}}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const a={};l&16&&(a.paint={"raster-fade-duration":0,"raster-opacity":t[4]/100}),e.$set(a)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ve(o){let e,n,t,l,a,i;function f(r){o[6](r)}let m={draggable:!0,$$slots:{default:[on]},$$scope:{ctx:o}};o[0]!==void 0&&(m.lngLat=o[0]),e=new Te({props:m}),se.push(()=>ge(e,"lngLat",f));function g(r){o[7](r)}let s={draggable:!0,$$slots:{default:[an]},$$scope:{ctx:o}};return o[3]!==void 0&&(s.lngLat=o[3]),l=new Te({props:s}),se.push(()=>ge(l,"lngLat",g)),{c(){A(e.$$.fragment),t=D(),A(l.$$.fragment)},l(r){M(e.$$.fragment,r),t=P(r),M(l.$$.fragment,r)},m(r,u){R(e,r,u),w(r,t,u),R(l,r,u),i=!0},p(r,u){const c={};u&256&&(c.$$scope={dirty:u,ctx:r}),!n&&u&1&&(n=!0,c.lngLat=r[0],de(()=>n=!1)),e.$set(c);const d={};u&256&&(d.$$scope={dirty:u,ctx:r}),!a&&u&8&&(a=!0,d.lngLat=r[3],de(()=>a=!1)),l.$set(d)},i(r){i||(k(e.$$.fragment,r),k(l.$$.fragment,r),i=!0)},o(r){L(e.$$.fragment,r),L(l.$$.fragment,r),i=!1},d(r){r&&p(t),V(e,r),V(l,r)}}}function on(o){let e;return{c(){e=E("span"),this.h()},l(n){e=I(n,"SPAN",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){v(e,"class","dot svelte-1tmbx1c"),J(e,"background-color","red")},m(n,t){w(n,e,t)},p:he,d(n){n&&p(e)}}}function an(o){let e;return{c(){e=E("span"),this.h()},l(n){e=I(n,"SPAN",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){v(e,"class","dot svelte-1tmbx1c"),J(e,"background-color","blue")},m(n,t){w(n,e,t)},p:he,d(n){n&&p(e)}}}function rn(o){let e,n,t,l=o[2]&&o[0].lng!=o[3].lng&&Re(o),a=o[2]&&o[1]&&Ve(o);return{c(){l&&l.c(),e=D(),a&&a.c(),n=O()},l(i){l&&l.l(i),e=P(i),a&&a.l(i),n=O()},m(i,f){l&&l.m(i,f),w(i,e,f),a&&a.m(i,f),w(i,n,f),t=!0},p(i,[f]){i[2]&&i[0].lng!=i[3].lng?l?(l.p(i,f),f&13&&k(l,1)):(l=Re(i),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(X(),L(l,1,1,()=>{l=null}),$()),i[2]&&i[1]?a?(a.p(i,f),f&6&&k(a,1)):(a=Ve(i),a.c(),k(a,1),a.m(n.parentNode,n)):a&&(X(),L(a,1,1,()=>{a=null}),$())},i(i){t||(k(l),k(a),t=!0)},o(i){L(l),L(a),t=!1},d(i){i&&(p(e),p(n)),l&&l.d(i),a&&a.d(i)}}}function sn(o,e,n){let t,l,a,i,f;B(o,Q,r=>n(3,t=r)),B(o,Z,r=>n(0,l=r)),B(o,te,r=>n(1,a=r)),B(o,fe,r=>n(2,i=r)),B(o,ce,r=>n(4,f=r));let{map:m}=e;function g(r){l=r,Z.set(l)}function s(r){t=r,Q.set(t)}return o.$$set=r=>{"map"in r&&n(5,m=r.map)},o.$$.update=()=>{if(o.$$.dirty&39&&i&&a&&l.lng==0&&l.lat==0){let r=m.getBounds();N(Z,l.lng=r.getWest()+.4*(r.getEast()-r.getWest()),l),N(Q,t.lng=r.getWest()+.6*(r.getEast()-r.getWest()),t),N(Z,l.lat=r.getNorth()+.4*(r.getSouth()-r.getNorth()),l),N(Q,t.lat=r.getNorth()+.6*(r.getSouth()-r.getNorth()),t)}},[l,a,i,t,f,m,g,s]}class En extends W{constructor(e){super(),F(this,e,sn,rn,U,{map:5})}}export{yn as B,yt as C,Sn as G,Ln as M,St as R,wn as S,En as a,Te as b};
