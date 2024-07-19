import{s as q,l as oe,e as E,a as N,c as I,b as B,g as D,f as h,r as y,x as Q,i as L,h as S,z as T,u as ae,m as re,o as se,B as he,G as H,a8 as ot,t as A,d as R,y as ce,j as Se,q as je,J as at,C as de,k as z,v as x,D as U,p as ve,w as ie,n as ee,a9 as Ee,T as P,R as He,aa as ze,A as ke,_ as rt,ab as st}from"./scheduler.BBS-fkhU.js";import{S as K,i as F,t as k,b as v,c as M,a as O,m as V,d as G,e as ue,g as J,f as Z}from"./index.B8H3ypVf.js";import{e as ge}from"./each.D79A5KlB.js";import{C as it,D as ut}from"./DefaultButton.Pbp5mObw.js";import{S as Je,W as ft}from"./WarningButton.CaqyhU7y.js";import{S as ct}from"./Select.DqyoFzIJ.js";import{d as Ne,f as Ze,u as mt,r as _t,h as dt,i as gt,m as ht,j as pt,k as bt,L as kt,g as vt,s as yt,a as Lt}from"./index.Ds396ilA.js";import{v as Qe,F as wt}from"./FormElement.Cy4womqK.js";import{E as St}from"./ErrorMessage.BCIKj4J0.js";import{B as Et}from"./ButtonGroup.fhy-VJbf.js";import{w as fe}from"./entry.CZoukkpR.js";const It=o=>({}),Be=o=>({});function Ct(o){let e,n,l,t,a,s,f,c,d;const u=o[5].default,r=oe(u,o,o[4],null),m=o[5].right,i=oe(m,o,o[4],Be);return{c(){e=E("div"),n=E("input"),l=N(),t=E("label"),r&&r.c(),a=N(),s=E("span"),i&&i.c(),this.h()},l(_){e=I(_,"DIV",{class:!0,style:!0});var g=B(e);n=I(g,"INPUT",{type:!0,class:!0,id:!0}),l=D(g),t=I(g,"LABEL",{class:!0,for:!0,title:!0});var p=B(t);r&&r.l(p),p.forEach(h),a=D(g),s=I(g,"SPAN",{style:!0});var C=B(s);i&&i.l(C),C.forEach(h),g.forEach(h),this.h()},h(){y(n,"type","checkbox"),y(n,"class","govuk-checkboxes__input"),y(n,"id",o[3]),y(t,"class","govuk-label govuk-checkboxes__label"),y(t,"for",o[3]),y(t,"title",o[1]),Q(s,"float","right"),y(e,"class","govuk-checkboxes__item"),y(e,"style",o[2])},m(_,g){L(_,e,g),S(e,n),n.checked=o[0],S(e,l),S(e,t),r&&r.m(t,null),S(e,a),S(e,s),i&&i.m(s,null),f=!0,c||(d=[T(n,"change",o[7]),T(n,"change",o[6])],c=!0)},p(_,[g]){g&1&&(n.checked=_[0]),r&&r.p&&(!f||g&16)&&ae(r,u,_,_[4],f?se(u,_[4],g,null):re(_[4]),null),(!f||g&2)&&y(t,"title",_[1]),i&&i.p&&(!f||g&16)&&ae(i,m,_,_[4],f?se(m,_[4],g,It):re(_[4]),Be)},i(_){f||(k(r,_),k(i,_),f=!0)},o(_){v(r,_),v(i,_),f=!1},d(_){_&&h(e),r&&r.d(_),i&&i.d(_),c=!1,he(d)}}}function zt(o,e,n){let{$$slots:l={},$$scope:t}=e;const a=ot(l);let{checked:s}=e,{hint:f=null}=e,d=a.right!==void 0?"float: none":"",u=Qe();function r(i){H.call(this,o,i)}function m(){s=this.checked,n(0,s)}return o.$$set=i=>{"checked"in i&&n(0,s=i.checked),"hint"in i&&n(1,f=i.hint),"$$scope"in i&&n(4,t=i.$$scope)},[s,f,d,u,t,l,r,m]}class Nt extends K{constructor(e){super(),F(this,e,zt,Ct,q,{checked:0,hint:1})}}function De(o,e,n){const l=o.slice();return l[10]=e[n][0],l[11]=e[n][1],l}function Pe(o){let e,n,l,t,a=!1,s,f,c=o[11]+"",d,u,r,m,i,_;return m=at(o[9][0]),{c(){e=E("div"),n=E("input"),s=N(),f=E("label"),d=A(c),r=N(),this.h()},l(g){e=I(g,"DIV",{class:!0});var p=B(e);n=I(p,"INPUT",{class:!0,id:!0,type:!0}),s=D(p),f=I(p,"LABEL",{class:!0,for:!0});var C=B(f);d=R(C,c),C.forEach(h),r=D(p),p.forEach(h),this.h()},h(){y(n,"class","govuk-radios__input"),y(n,"id",l=o[5]+o[10]),y(n,"type","radio"),n.__value=t=o[10],de(n,n.__value),y(f,"class","govuk-label govuk-radios__label"),y(f,"for",u=o[5]+o[10]),y(e,"class","govuk-radios__item"),m.p(n)},m(g,p){L(g,e,p),S(e,n),n.checked=n.__value===o[0],S(e,s),S(e,f),S(f,d),S(e,r),i||(_=[T(n,"change",o[8]),T(n,"change",o[7])],i=!0)},p(g,p){p&4&&l!==(l=g[5]+g[10])&&y(n,"id",l),p&4&&t!==(t=g[10])&&(n.__value=t,de(n,n.__value),a=!0),(a||p&5)&&(n.checked=n.__value===g[0]),p&4&&c!==(c=g[11]+"")&&Se(d,c),p&4&&u!==(u=g[5]+g[10])&&y(f,"for",u)},d(g){g&&h(e),m.r(),i=!1,he(_)}}}function Bt(o){let e,n,l,t,a,s,f,c,d;s=new St({props:{errorMessage:o[4]}});let u=ge(o[2]),r=[];for(let m=0;m<u.length;m+=1)r[m]=Pe(De(o,u,m));return{c(){e=E("div"),n=E("fieldset"),l=E("legend"),t=A(o[1]),a=N(),M(s.$$.fragment),f=N(),c=E("div");for(let m=0;m<r.length;m+=1)r[m].c();this.h()},l(m){e=I(m,"DIV",{class:!0});var i=B(e);n=I(i,"FIELDSET",{class:!0});var _=B(n);l=I(_,"LEGEND",{class:!0});var g=B(l);t=R(g,o[1]),g.forEach(h),a=D(_),O(s.$$.fragment,_),f=D(_),c=I(_,"DIV",{class:!0,"data-module":!0});var p=B(c);for(let C=0;C<r.length;C+=1)r[C].l(p);p.forEach(h),_.forEach(h),i.forEach(h),this.h()},h(){y(l,"class","govuk-fieldset__legend govuk-label--s"),y(c,"class","govuk-radios"),y(c,"data-module","govuk-radios"),ce(c,"govuk-radios--inline",o[3]),ce(c,"govuk-radios--small",o[3]),y(n,"class","govuk-fieldset"),y(e,"class","govuk-form-group")},m(m,i){L(m,e,i),S(e,n),S(n,l),S(l,t),S(n,a),V(s,n,null),S(n,f),S(n,c);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(c,null);d=!0},p(m,[i]){(!d||i&2)&&Se(t,m[1]);const _={};if(i&16&&(_.errorMessage=m[4]),s.$set(_),i&37){u=ge(m[2]);let g;for(g=0;g<u.length;g+=1){const p=De(m,u,g);r[g]?r[g].p(p,i):(r[g]=Pe(p),r[g].c(),r[g].m(c,null))}for(;g<r.length;g+=1)r[g].d(1);r.length=u.length}(!d||i&8)&&ce(c,"govuk-radios--inline",m[3]),(!d||i&8)&&ce(c,"govuk-radios--small",m[3])},i(m){d||(k(s.$$.fragment,m),d=!0)},o(m){v(s.$$.fragment,m),d=!1},d(m){m&&h(e),G(s),je(r,m)}}}function Dt(o,e,n){let l,{legend:t}=e,{choices:a}=e,{inlineSmall:s=!1}=e,{required:f=!1}=e,{value:c}=e,d=Qe();const u=[[]];function r(i){H.call(this,o,i)}function m(){c=this.__value,n(0,c)}return o.$$set=i=>{"legend"in i&&n(1,t=i.legend),"choices"in i&&n(2,a=i.choices),"inlineSmall"in i&&n(3,s=i.inlineSmall),"required"in i&&n(6,f=i.required),"value"in i&&n(0,c=i.value)},o.$$.update=()=>{o.$$.dirty&65&&n(4,l=f&&c==""?"Required":"")},[c,t,a,s,l,d,f,r,m,u]}class Pt extends K{constructor(e){super(),F(this,e,Dt,Bt,q,{legend:1,choices:2,inlineSmall:3,required:6,value:0})}}function Te(o,e,n){const l=o.slice();return l[6]=e[n][0],l[7]=e[n][1],l}function Tt(o){let e;return{c(){e=A("disabled")},l(n){e=R(n,"disabled")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function At(o){let e;return{c(){e=A("enabled")},l(n){e=R(n,"enabled")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function Rt(o){let e,n=o[7]+"",l,t;return{c(){e=A("Set "),l=A(n),t=A(` API key
      `)},l(a){e=R(a,"Set "),l=R(a,n),t=R(a,` API key
      `)},m(a,s){L(a,e,s),L(a,l,s),L(a,t,s)},p:ee,d(a){a&&(h(e),h(l),h(t))}}}function Ae(o){let e,n,l=o[7]+"",t,a,s,f,c;function d(i,_){return we(i[6])?At:Tt}let r=d(o)(o);function m(){return o[5](o[6])}return f=new Je({props:{$$slots:{default:[Rt]},$$scope:{ctx:o}}}),f.$on("click",m),{c(){e=E("p"),n=E("u"),t=A(l),a=A(`
        : `),r.c(),s=N(),M(f.$$.fragment)},l(i){e=I(i,"P",{});var _=B(e);n=I(_,"U",{});var g=B(n);t=R(g,l),g.forEach(h),a=R(_,`
        : `),r.l(_),_.forEach(h),s=D(i),O(f.$$.fragment,i)},m(i,_){L(i,e,_),S(e,n),S(n,t),S(e,a),r.m(e,null),L(i,s,_),V(f,i,_),c=!0},p(i,_){o=i;const g={};_&1024&&(g.$$scope={dirty:_,ctx:o}),f.$set(g)},i(i){c||(k(f.$$.fragment,i),c=!0)},o(i){v(f.$$.fragment,i),c=!1},d(i){i&&(h(e),h(s)),r.d(),G(f,i)}}}function Re(o){let e,n,l=ge([[ye,"Bluesky"],[Le,"Ordnance Survey"]]),t=[];for(let s=0;s<2;s+=1)t[s]=Ae(Te(o,l,s));const a=s=>v(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<2;s+=1)t[s].c();e=U()},l(s){for(let f=0;f<2;f+=1)t[f].l(s);e=U()},m(s,f){for(let c=0;c<2;c+=1)t[c]&&t[c].m(s,f);L(s,e,f),n=!0},p(s,f){if(f&8){l=ge([[ye,"Bluesky"],[Le,"Ordnance Survey"]]);let c;for(c=0;c<2;c+=1){const d=Te(s,l,c);t[c]?(t[c].p(d,f),k(t[c],1)):(t[c]=Ae(d),t[c].c(),k(t[c],1),t[c].m(e.parentNode,e))}for(J(),c=2;c<2;c+=1)a(c);Z()}},i(s){if(!n){for(let f=0;f<2;f+=1)k(t[f]);n=!0}},o(s){t=t.filter(Boolean);for(let f=0;f<2;f+=1)v(t[f]);n=!1},d(s){s&&h(e),je(t,s)}}}function Mt(o){let e,n,l,t,a=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,s,f=o[0],c,d;function u(i){o[4](i)}let r={label:"Basemap",choices:o[1]};o[2]!==void 0&&(r.value=o[2]),e=new ct({props:r}),x.push(()=>ue(e,"value",u));let m=Re(o);return{c(){M(e.$$.fragment),l=N(),t=E("p"),t.textContent=a,s=N(),m.c(),c=U()},l(i){O(e.$$.fragment,i),l=D(i),t=I(i,"P",{"data-svelte-h":!0}),ve(t)!=="svelte-itr0ad"&&(t.textContent=a),s=D(i),m.l(i),c=U()},m(i,_){V(e,i,_),L(i,l,_),L(i,t,_),L(i,s,_),m.m(i,_),L(i,c,_),d=!0},p(i,_){const g={};_&2&&(g.choices=i[1]),!n&&_&4&&(n=!0,g.value=i[2],ie(()=>n=!1)),e.$set(g),_&1&&q(f,f=i[0])?(J(),v(m,1,1,ee),Z(),m=Re(i),m.c(),k(m,1),m.m(c.parentNode,c)):m.p(i,_)},i(i){d||(k(e.$$.fragment,i),k(m),d=!0)},o(i){v(e.$$.fragment,i),v(m),d=!1},d(i){i&&(h(l),h(t),h(s),h(c)),G(e,i),m.d(i)}}}function Ot(o){let e,n;return e=new it({props:{label:"Basemap",$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){V(e,l,t),n=!0},p(l,[t]){const a={};t&1031&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}let ye="bluesky-api-key",Le="os-api-key";function we(o){let e=window.localStorage.getItem(o);return e!=null&&e.length>0}function Me(){let o=[];return we(ye)&&o.push(["bluesky","Bluesky Satellite (12.5cm)"]),we(Le)&&o.push(["os-road","OS Road"]),o.push(["maptiler-hybrid","MapTiler Satellite"]),o.push(["maptiler-streets","MapTiler Streets"]),o.push(["maptiler-dataviz","MapTiler Dataviz"]),o.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),o}function Vt(o,e,n){let l;z(o,Ne,d=>n(2,l=d));let t=0;function a(d){let u=window.prompt("Enter the API key provided to you",window.localStorage.getItem(d)||"");window.localStorage.setItem(d,u||""),n(1,s=Me()),n(0,t+=1)}let s=Me();function f(d){l=d,Ne.set(l)}return[t,s,l,a,f,d=>a(d)]}class Il extends K{constructor(e){super(),F(this,e,Vt,Ot,q,{})}}function Oe(o){let e=o[0],n,l,t=Ve(o);return{c(){t.c(),n=U()},l(a){t.l(a),n=U()},m(a,s){t.m(a,s),L(a,n,s),l=!0},p(a,s){s&1&&q(e,e=a[0])?(J(),v(t,1,1,ee),Z(),t=Ve(a),t.c(),k(t,1),t.m(n.parentNode,n)):t.p(a,s)},i(a){l||(k(t),l=!0)},o(a){v(t),l=!1},d(a){a&&h(n),t.d(a)}}}function Ve(o){let e;const n=o[10].default,l=oe(n,o,o[9],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&512)&&ae(l,n,t,t[9],e?se(n,t[9],a,null):re(t[9]),null)},i(t){e||(k(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Gt(o){let e,n,l=o[0]&&Oe(o);return{c(){l&&l.c(),e=U()},l(t){l&&l.l(t),e=U()},m(t,a){l&&l.m(t,a),L(t,e,a),n=!0},p(t,[a]){t[0]?l?(l.p(t,a),a&1&&k(l,1)):(l=Oe(t),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(J(),v(l,1,1,()=>{l=null}),Z())},i(t){n||(k(l),n=!0)},o(t){v(l),n=!1},d(t){t&&h(e),l&&l.d(t)}}}function Ut(o,e,n){let l,t,{$$slots:a={},$$scope:s}=e,{id:f=Ze("image")}=e,{url:c}=e,{coordinates:d}=e;const{map:u,self:r}=mt();z(o,u,_=>n(8,t=_)),z(o,r,_=>n(0,l=_));let m,i=!0;return Ee(()=>{l&&t&&(_t(u,l,m),P(r,l=null,l),n(6,m=void 0))}),o.$$set=_=>{"id"in _&&n(3,f=_.id),"url"in _&&n(4,c=_.url),"coordinates"in _&&n(5,d=_.coordinates),"$$scope"in _&&n(9,s=_.$$scope)},o.$$.update=()=>{o.$$.dirty&313&&t&&l!==f&&(P(r,l=f,l),dt(t,l,gt({type:"image",url:c,coordinates:d}),_=>t&&_===l,()=>{l&&(n(6,m=t==null?void 0:t.getSource(l)),n(7,i=!0))})),o.$$.dirty&264&&(t==null||t.on("style.load",()=>{n(6,m=t==null?void 0:t.getSource(f))})),o.$$.dirty&224&&m&&(i?n(7,i=!1):m.setCoordinates(d))},[l,u,r,f,c,d,m,i,t,s,a]}class qt extends K{constructor(e){super(),F(this,e,Ut,Gt,q,{id:3,url:4,coordinates:5})}}function Wt(o,e,n){let l;const t=He();let{layer:a=void 0}=e;const{map:s}=ht();z(o,s,u=>n(2,l=u));function f(u){t(u.type,{...u,map:s})}const c=["click","dblclick","mousedown","mouseup","mousemove","mouseenter","mouseleave","contextmenu","mouseover","mouseout"],d=["click","dblclick","contextmenu","mousemove","movestart","moveend","zoomstart","zoom","zoomend"];return Ee(()=>{if(l)if(a)for(const u of c)l.off(u,a,f);else for(const u of d)l.off(u,f)}),o.$$set=u=>{"layer"in u&&n(1,a=u.layer)},o.$$.update=()=>{if(o.$$.dirty&6&&l)if(a)for(const u of c)l.on(u,a,f);else for(const u of d)l.on(u,f)},[s,a,l]}class Cl extends K{constructor(e){super(),F(this,e,Wt,null,q,{layer:1})}}const Kt=o=>({marker:o&8}),Ge=o=>({marker:o[3]});function Ft(o){let e,n,l,t,a,s,f;const c=o[19].default,d=oe(c,o,o[18],Ge);return{c(){e=E("div"),d&&d.c(),this.h()},l(u){e=I(u,"DIV",{tabindex:!0,role:!0});var r=B(e);d&&d.l(r),r.forEach(h),this.h()},h(){y(e,"tabindex",n=o[1]?0:void 0),y(e,"role",l=o[1]?"button":void 0),Q(e,"z-index",o[2])},m(u,r){L(u,e,r),d&&d.m(e,null),a=!0,s||(f=[ze(o[7].call(null,e)),ze(t=jt.call(null,e,o[0])),T(e,"click",ke(o[20])),T(e,"dblclick",ke(o[21])),T(e,"contextmenu",ke(o[22])),T(e,"mouseenter",o[23]),T(e,"mouseleave",o[24]),T(e,"mousemove",o[25]),T(e,"keydown",o[8])],s=!0)},p(u,[r]){d&&d.p&&(!a||r&262152)&&ae(d,c,u,u[18],a?se(c,u[18],r,Kt):re(u[18]),Ge),(!a||r&2&&n!==(n=u[1]?0:void 0))&&y(e,"tabindex",n),(!a||r&2&&l!==(l=u[1]?"button":void 0))&&y(e,"role",l),t&&rt(t.update)&&r&1&&t.update.call(null,u[0]),r&4&&Q(e,"z-index",u[2])},i(u){a||(k(d,u),a=!0)},o(u){v(d,u),a=!1},d(u){u&&h(e),d&&d.d(u),s=!1,he(f)}}}function jt(o,e){const n=o.className;function l(t){t?o.className=`${n} ${t}`:o.className=n}return l(e),{update:l}}function Ht(o,e,n){let l,t,a,{$$slots:s={},$$scope:f}=e,{marker:c=void 0}=e,{lngLat:d}=e,{class:u=void 0}=e,{interactive:r=!0}=e,{asButton:m=!1}=e,{draggable:i=!1}=e,{feature:_=null}=e,{offset:g=void 0}=e,{zIndex:p=void 0}=e,{rotation:C=0}=e,{opacity:j=1}=e;const w=He(),{map:Ie,layerEvent:pe,self:be}=pt();z(o,Ie,b=>n(27,a=b)),z(o,pe,b=>n(26,l=b)),z(o,be,b=>n(3,t=b));function Xe(b){P(be,t=new bt.Marker({element:b,rotation:C,draggable:i,offset:g,opacity:j.toString()}).setLngLat(d).addTo(a),t),n(11,c=t);const X=()=>W("dragstart"),te=()=>{Ce(),W("drag")},le=()=>{Ce(),W("dragend")};return i&&(t.on("dragstart",X),t.on("drag",te),t.on("dragend",le)),{destroy(){i&&(t==null||t.off("dragstart",X),t==null||t.off("drag",te),t==null||t.off("dragend",le)),n(11,c=void 0),t==null||t.remove()}}}function Ce(){let b=t==null?void 0:t.getLngLat();b&&(Array.isArray(d)?n(10,d=[b.lng,b.lat]):d&&"lon"in d?n(10,d={lon:b.lng,lat:b.lat}):n(10,d=b))}function Ye(b){b.key===" "&&(b.preventDefault(),b.stopPropagation(),W("click"))}function W(b){if(!r)return;let X=t==null?void 0:t.getLngLat();if(!X)return;const te=[X.lng,X.lat];let le={map:a,marker:t,lngLat:te,features:[{type:"Feature",properties:(_==null?void 0:_.properties)??{},geometry:{type:"Point",coordinates:te}}]};P(pe,l={...le,layerType:"marker",type:b},l),w(b,le)}const $e=()=>W("click"),xe=()=>W("dblclick"),et=()=>W("contextmenu"),tt=b=>{W("mouseenter")},lt=()=>{W("mouseleave")},nt=()=>W("mousemove");return o.$$set=b=>{"marker"in b&&n(11,c=b.marker),"lngLat"in b&&n(10,d=b.lngLat),"class"in b&&n(0,u=b.class),"interactive"in b&&n(12,r=b.interactive),"asButton"in b&&n(1,m=b.asButton),"draggable"in b&&n(13,i=b.draggable),"feature"in b&&n(14,_=b.feature),"offset"in b&&n(15,g=b.offset),"zIndex"in b&&n(2,p=b.zIndex),"rotation"in b&&n(16,C=b.rotation),"opacity"in b&&n(17,j=b.opacity),"$$scope"in b&&n(18,f=b.$$scope)},o.$$.update=()=>{o.$$.dirty&1032&&(t==null||t.setLngLat(d)),o.$$.dirty&32776&&(t==null||t.setOffset(g??[0,0])),o.$$.dirty&65544&&(t==null||t.setRotation(C)),o.$$.dirty&131080&&(t==null||t.setOpacity(j.toString()))},[u,m,p,t,Ie,pe,be,Xe,Ye,W,d,c,r,i,_,g,C,j,f,s,$e,xe,et,tt,lt,nt]}class Ue extends K{constructor(e){super(),F(this,e,Ht,Ft,q,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}function Jt(o){let e;const n=o[8].default,l=oe(n,o,o[15],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&32768)&&ae(l,n,t,t[15],e?se(n,t[15],a,null):re(t[15]),null)},i(t){e||(k(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Zt(o){let e,n;return e=new kt({props:{id:o[0],type:"raster",source:o[1],beforeId:o[2],beforeLayerType:o[3],paint:o[4],layout:o[5],minzoom:o[6],maxzoom:o[7],$$slots:{default:[Jt]},$$scope:{ctx:o}}}),e.$on("click",o[9]),e.$on("dblclick",o[10]),e.$on("contextmenu",o[11]),e.$on("mouseenter",o[12]),e.$on("mousemove",o[13]),e.$on("mouseleave",o[14]),{c(){M(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){V(e,l,t),n=!0},p(l,[t]){const a={};t&1&&(a.id=l[0]),t&2&&(a.source=l[1]),t&4&&(a.beforeId=l[2]),t&8&&(a.beforeLayerType=l[3]),t&16&&(a.paint=l[4]),t&32&&(a.layout=l[5]),t&64&&(a.minzoom=l[6]),t&128&&(a.maxzoom=l[7]),t&32768&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function Qt(o,e,n){let{$$slots:l={},$$scope:t}=e,{id:a=Ze("raster-layer")}=e,{source:s=void 0}=e,{beforeId:f=void 0}=e,{beforeLayerType:c=void 0}=e,{paint:d}=e,{layout:u=void 0}=e,{minzoom:r=void 0}=e,{maxzoom:m=void 0}=e;function i(w){H.call(this,o,w)}function _(w){H.call(this,o,w)}function g(w){H.call(this,o,w)}function p(w){H.call(this,o,w)}function C(w){H.call(this,o,w)}function j(w){H.call(this,o,w)}return o.$$set=w=>{"id"in w&&n(0,a=w.id),"source"in w&&n(1,s=w.source),"beforeId"in w&&n(2,f=w.beforeId),"beforeLayerType"in w&&n(3,c=w.beforeLayerType),"paint"in w&&n(4,d=w.paint),"layout"in w&&n(5,u=w.layout),"minzoom"in w&&n(6,r=w.minzoom),"maxzoom"in w&&n(7,m=w.maxzoom),"$$scope"in w&&n(15,t=w.$$scope)},[a,s,f,c,d,u,r,m,l,i,_,g,p,C,j,t]}class Xt extends K{constructor(e){super(),F(this,e,Qt,Zt,q,{id:0,source:1,beforeId:2,beforeLayerType:3,paint:4,layout:5,minzoom:6,maxzoom:7})}}const{window:Yt}=vt;function $t(o){let e;return{c(){e=A("StreetView")},l(n){e=R(n,"StreetView")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function qe(o){let e,n,l;function t(s){o[5](s)}let a={legend:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return o[1]!==void 0&&(a.value=o[1]),e=new Pt({props:a}),x.push(()=>ue(e,"value",t)),{c(){M(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,f){V(e,s,f),l=!0},p(s,f){const c={};!n&&f&2&&(n=!0,c.value=s[1],ie(()=>n=!1)),e.$set(c)},i(s){l||(k(e.$$.fragment,s),l=!0)},o(s){v(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function xt(o){let e,n,l,t,a,s,f;function c(r){o[4](r)}let d={$$slots:{default:[$t]},$$scope:{ctx:o}};o[0]!==void 0&&(d.checked=o[0]),e=new Nt({props:d}),x.push(()=>ue(e,"checked",c));let u=o[0]&&qe(o);return{c(){M(e.$$.fragment),l=N(),u&&u.c(),t=U()},l(r){O(e.$$.fragment,r),l=D(r),u&&u.l(r),t=U()},m(r,m){V(e,r,m),L(r,l,m),u&&u.m(r,m),L(r,t,m),a=!0,s||(f=T(Yt,"keydown",o[2]),s=!0)},p(r,[m]){const i={};m&512&&(i.$$scope={dirty:m,ctx:r}),!n&&m&1&&(n=!0,i.checked=r[0],ie(()=>n=!1)),e.$set(i),r[0]?u?(u.p(r,m),m&1&&k(u,1)):(u=qe(r),u.c(),k(u,1),u.m(t.parentNode,t)):u&&(J(),v(u,1,1,()=>{u=null}),Z())},i(r){a||(k(e.$$.fragment,r),k(u),a=!0)},o(r){v(e.$$.fragment,r),v(u),a=!1},d(r){r&&(h(l),h(t)),G(e,r),u&&u.d(r),s=!1,f()}}}function el(o,e,n){let{map:l}=e,{enabled:t=!1}=e,a="google";function s(){l.on("click",c),l.getCanvas().style.cursor="zoom-in"}function f(){l.off("click",c),l.getCanvas().style.cursor="auto"}Ee(f);function c(m){window.open(a=="google"?yt(m.lngLat.toArray()):Lt(m.lngLat.toArray()),"_blank"),n(0,t=!1)}function d(m){t&&m.key=="Escape"&&n(0,t=!1)}function u(m){t=m,n(0,t)}function r(m){a=m,n(1,a)}return o.$$set=m=>{"map"in m&&n(3,l=m.map),"enabled"in m&&n(0,t=m.enabled)},o.$$.update=()=>{o.$$.dirty&1&&(t?s():f())},[t,a,d,l,u,r]}class zl extends K{constructor(e){super(),F(this,e,el,xt,q,{map:3,enabled:0})}}const ne=fe(!1),me=fe(null),_e=fe(100),Y=fe({lng:0,lat:0}),$=fe({lng:0,lat:0});function tl(o){let e,n;return e=new Je({props:{$$slots:{default:[nl]},$$scope:{ctx:o}}}),e.$on("click",o[10]),{c(){M(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){V(e,l,t),n=!0},p(l,t){const a={};t&8192&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function ll(o){let e,n,l="Georeference an image",t,a,s,f,c,d,u,r=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,m;a=new Et({props:{$$slots:{default:[rl]},$$scope:{ctx:o}}}),f=new wt({props:{label:"Load an image",id:"load-image",$$slots:{default:[sl]},$$scope:{ctx:o}}});let i=o[3]&&We(o);return{c(){e=E("div"),n=E("h2"),n.textContent=l,t=N(),M(a.$$.fragment),s=N(),M(f.$$.fragment),c=N(),i&&i.c(),d=N(),u=E("p"),u.textContent=r,this.h()},l(_){e=I(_,"DIV",{style:!0});var g=B(e);n=I(g,"H2",{"data-svelte-h":!0}),ve(n)!=="svelte-fociiu"&&(n.textContent=l),t=D(g),O(a.$$.fragment,g),s=D(g),O(f.$$.fragment,g),c=D(g),i&&i.l(g),d=D(g),u=I(g,"P",{"data-svelte-h":!0}),ve(u)!=="svelte-d8uklv"&&(u.textContent=r),g.forEach(h),this.h()},h(){Q(e,"border","1px solid black"),Q(e,"padding","4px")},m(_,g){L(_,e,g),S(e,n),S(e,t),V(a,e,null),S(e,s),V(f,e,null),S(e,c),i&&i.m(e,null),S(e,d),S(e,u),m=!0},p(_,g){const p={};g&8202&&(p.$$scope={dirty:g,ctx:_}),a.$set(p);const C={};g&8193&&(C.$$scope={dirty:g,ctx:_}),f.$set(C),_[3]?i?i.p(_,g):(i=We(_),i.c(),i.m(e,d)):i&&(i.d(1),i=null)},i(_){m||(k(a.$$.fragment,_),k(f.$$.fragment,_),m=!0)},o(_){v(a.$$.fragment,_),v(f.$$.fragment,_),m=!1},d(_){_&&h(e),G(a),G(f),i&&i.d()}}}function nl(o){let e;return{c(){e=A("Georeference an image")},l(n){e=R(n,"Georeference an image")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function ol(o){let e;return{c(){e=A("Save")},l(n){e=R(n,"Save")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function al(o){let e;return{c(){e=A("Delete")},l(n){e=R(n,"Delete")},m(n,l){L(n,e,l)},d(n){n&&h(e)}}}function rl(o){let e,n,l,t;return e=new ut({props:{$$slots:{default:[ol]},$$scope:{ctx:o}}}),e.$on("click",o[7]),l=new ft({props:{disabled:!o[3],$$slots:{default:[al]},$$scope:{ctx:o}}}),l.$on("click",o[5]),{c(){M(e.$$.fragment),n=N(),M(l.$$.fragment)},l(a){O(e.$$.fragment,a),n=D(a),O(l.$$.fragment,a)},m(a,s){V(e,a,s),L(a,n,s),V(l,a,s),t=!0},p(a,s){const f={};s&8192&&(f.$$scope={dirty:s,ctx:a}),e.$set(f);const c={};s&8&&(c.disabled=!a[3]),s&8192&&(c.$$scope={dirty:s,ctx:a}),l.$set(c)},i(a){t||(k(e.$$.fragment,a),k(l.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),v(l.$$.fragment,a),t=!1},d(a){a&&h(n),G(e,a),G(l,a)}}}function sl(o){let e,n,l;return{c(){e=E("input"),this.h()},l(t){e=I(t,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){y(e,"class","govuk-file-upload"),y(e,"id","load-image"),y(e,"type","file")},m(t,a){L(t,e,a),o[8](e),n||(l=T(e,"change",o[4]),n=!0)},p:ee,d(t){t&&h(e),o[8](null),n=!1,l()}}}function We(o){let e,n,l,t,a,s,f,c;return{c(){e=E("div"),n=E("label"),l=E("input"),t=A(`
          Opacity: `),a=A(o[2]),s=A("%"),this.h()},l(d){e=I(d,"DIV",{});var u=B(e);n=I(u,"LABEL",{});var r=B(n);l=I(r,"INPUT",{type:!0,min:!0,max:!0}),t=R(r,`
          Opacity: `),a=R(r,o[2]),s=R(r,"%"),r.forEach(h),u.forEach(h),this.h()},h(){y(l,"type","range"),y(l,"min","0"),y(l,"max","100")},m(d,u){L(d,e,u),S(e,n),S(n,l),de(l,o[2]),S(n,t),S(n,a),S(n,s),f||(c=[T(l,"change",o[9]),T(l,"input",o[9])],f=!0)},p(d,u){u&4&&de(l,d[2]),u&4&&Se(a,d[2])},d(d){d&&h(e),f=!1,he(c)}}}function il(o){let e,n,l,t,a,s;const f=[ll,tl],c=[];function d(u,r){return u[1]?0:1}return e=d(o),n=c[e]=f[e](o),{c(){n.c(),l=U()},l(u){n.l(u),l=U()},m(u,r){c[e].m(u,r),L(u,l,r),t=!0,a||(s=T(window,"keydown",o[6]),a=!0)},p(u,[r]){let m=e;e=d(u),e===m?c[e].p(u,r):(J(),v(c[m],1,1,()=>{c[m]=null}),Z(),n=c[e],n?n.p(u,r):(n=c[e]=f[e](u),n.c()),k(n,1),n.m(l.parentNode,l))},i(u){t||(k(n),t=!0)},o(u){v(n),t=!1},d(u){u&&h(l),c[e].d(u),a=!1,s()}}}function ul(o,e,n){let l,t,a,s,f;z(o,ne,p=>n(1,l=p)),z(o,_e,p=>n(2,t=p)),z(o,me,p=>n(3,a=p)),z(o,$,p=>n(11,s=p)),z(o,Y,p=>n(12,f=p));let c;async function d(p){let C=await c.files[0].arrayBuffer(),j=new Blob([new Uint8Array(C)]);P(me,a=URL.createObjectURL(j),a),P(Y,f={lng:0,lat:0},f),P($,s={lng:0,lat:0},s)}function u(){P(me,a=null,a),P(_e,t=100,t)}function r(p){l&&p.key=="Escape"&&(p.stopPropagation(),P(ne,l=!1,l))}const m=()=>P(ne,l=!1,l);function i(p){x[p?"unshift":"push"](()=>{c=p,n(0,c)})}function _(){t=st(this.value),_e.set(t)}return[c,l,t,a,d,u,r,m,i,_,()=>P(ne,l=!0,l)]}class Nl extends K{constructor(e){super(),F(this,e,ul,il,q,{})}}function Ke(o){let e,n;return e=new qt({props:{url:o[2],coordinates:[[o[0].lng,o[0].lat],[o[3].lng,o[0].lat],[o[3].lng,o[3].lat],[o[0].lng,o[3].lat]],$$slots:{default:[fl]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){V(e,l,t),n=!0},p(l,t){const a={};t&4&&(a.url=l[2]),t&9&&(a.coordinates=[[l[0].lng,l[0].lat],[l[3].lng,l[0].lat],[l[3].lng,l[3].lat],[l[0].lng,l[3].lat]]),t&272&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function fl(o){let e,n;return e=new Xt({props:{paint:{"raster-fade-duration":0,"raster-opacity":o[4]/100}}}),{c(){M(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,t){V(e,l,t),n=!0},p(l,t){const a={};t&16&&(a.paint={"raster-fade-duration":0,"raster-opacity":l[4]/100}),e.$set(a)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function Fe(o){let e,n,l,t,a,s;function f(r){o[6](r)}let c={draggable:!0,$$slots:{default:[cl]},$$scope:{ctx:o}};o[0]!==void 0&&(c.lngLat=o[0]),e=new Ue({props:c}),x.push(()=>ue(e,"lngLat",f));function d(r){o[7](r)}let u={draggable:!0,$$slots:{default:[ml]},$$scope:{ctx:o}};return o[3]!==void 0&&(u.lngLat=o[3]),t=new Ue({props:u}),x.push(()=>ue(t,"lngLat",d)),{c(){M(e.$$.fragment),l=N(),M(t.$$.fragment)},l(r){O(e.$$.fragment,r),l=D(r),O(t.$$.fragment,r)},m(r,m){V(e,r,m),L(r,l,m),V(t,r,m),s=!0},p(r,m){const i={};m&256&&(i.$$scope={dirty:m,ctx:r}),!n&&m&1&&(n=!0,i.lngLat=r[0],ie(()=>n=!1)),e.$set(i);const _={};m&256&&(_.$$scope={dirty:m,ctx:r}),!a&&m&8&&(a=!0,_.lngLat=r[3],ie(()=>a=!1)),t.$set(_)},i(r){s||(k(e.$$.fragment,r),k(t.$$.fragment,r),s=!0)},o(r){v(e.$$.fragment,r),v(t.$$.fragment,r),s=!1},d(r){r&&h(l),G(e,r),G(t,r)}}}function cl(o){let e;return{c(){e=E("span"),this.h()},l(n){e=I(n,"SPAN",{class:!0,style:!0}),B(e).forEach(h),this.h()},h(){y(e,"class","dot svelte-1tmbx1c"),Q(e,"background-color","red")},m(n,l){L(n,e,l)},p:ee,d(n){n&&h(e)}}}function ml(o){let e;return{c(){e=E("span"),this.h()},l(n){e=I(n,"SPAN",{class:!0,style:!0}),B(e).forEach(h),this.h()},h(){y(e,"class","dot svelte-1tmbx1c"),Q(e,"background-color","blue")},m(n,l){L(n,e,l)},p:ee,d(n){n&&h(e)}}}function _l(o){let e,n,l,t=o[2]&&o[0].lng!=o[3].lng&&Ke(o),a=o[2]&&o[1]&&Fe(o);return{c(){t&&t.c(),e=N(),a&&a.c(),n=U()},l(s){t&&t.l(s),e=D(s),a&&a.l(s),n=U()},m(s,f){t&&t.m(s,f),L(s,e,f),a&&a.m(s,f),L(s,n,f),l=!0},p(s,[f]){s[2]&&s[0].lng!=s[3].lng?t?(t.p(s,f),f&13&&k(t,1)):(t=Ke(s),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(J(),v(t,1,1,()=>{t=null}),Z()),s[2]&&s[1]?a?(a.p(s,f),f&6&&k(a,1)):(a=Fe(s),a.c(),k(a,1),a.m(n.parentNode,n)):a&&(J(),v(a,1,1,()=>{a=null}),Z())},i(s){l||(k(t),k(a),l=!0)},o(s){v(t),v(a),l=!1},d(s){s&&(h(e),h(n)),t&&t.d(s),a&&a.d(s)}}}function dl(o,e,n){let l,t,a,s,f;z(o,$,r=>n(3,l=r)),z(o,Y,r=>n(0,t=r)),z(o,ne,r=>n(1,a=r)),z(o,me,r=>n(2,s=r)),z(o,_e,r=>n(4,f=r));let{map:c}=e;function d(r){t=r,Y.set(t)}function u(r){l=r,$.set(l)}return o.$$set=r=>{"map"in r&&n(5,c=r.map)},o.$$.update=()=>{if(o.$$.dirty&39&&s&&a&&t.lng==0&&t.lat==0){let r=c.getBounds();P(Y,t.lng=r.getWest()+.4*(r.getEast()-r.getWest()),t),P($,l.lng=r.getWest()+.6*(r.getEast()-r.getWest()),l),P(Y,t.lat=r.getNorth()+.4*(r.getSouth()-r.getNorth()),t),P($,l.lat=r.getNorth()+.6*(r.getSouth()-r.getNorth()),l)}},[t,a,s,l,f,c,d,u]}class Bl extends K{constructor(e){super(),F(this,e,dl,_l,q,{map:5})}}export{Il as B,Nt as C,Nl as G,Cl as M,Pt as R,zl as S,Bl as a,Ue as b};
