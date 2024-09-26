import{s as H,l as J,e as w,a as T,c as I,b as K,g as A,f as p,q as k,v as Q,i as b,h as B,y as S,u as W,m as Y,o as x,x as pe,C as ze,X as Te,k as R,r as Ae,D as V,p as be,w as De,n as ke,V as q,K as Ne,t as E,d as M,Z as ce,F as j,_ as Oe,U as Ke}from"./scheduler.DGwhun8C.js";import{S as te,i as le,t as v,b as L,c as ne,a as ae,m as se,d as oe,e as qe,g as ye,f as ve}from"./index.B2vZYn3d.js";import{v as Ge}from"./v4.D8aEg3BZ.js";import{e as ue}from"./each.osbS1YKp.js";import{C as Re}from"./DefaultButton.C7m8wISe.js";import"./index.Dk0lFuhC.js";import{S as Ue}from"./SecondaryButton.zQkvdoBX.js";import{S as Ve}from"./Select.pAo3fEKw.js";import{k as O,u as Fe,d as He}from"./index.BMiN9FC0.js";const Ze=l=>({}),fe=l=>({});function Xe(l){let e,n,a,t,f,o,r,c,g;const _=l[5].default,d=J(_,l,l[4],null),h=l[5].right,i=J(h,l,l[4],fe);return{c(){e=w("div"),n=w("input"),a=T(),t=w("label"),d&&d.c(),f=T(),o=w("span"),i&&i.c(),this.h()},l(s){e=I(s,"DIV",{class:!0,style:!0});var m=K(e);n=I(m,"INPUT",{type:!0,class:!0,id:!0}),a=A(m),t=I(m,"LABEL",{class:!0,for:!0,title:!0});var C=K(t);d&&d.l(C),C.forEach(p),f=A(m),o=I(m,"SPAN",{style:!0});var P=K(o);i&&i.l(P),P.forEach(p),m.forEach(p),this.h()},h(){k(n,"type","checkbox"),k(n,"class","govuk-checkboxes__input"),k(n,"id",l[3]),k(t,"class","govuk-label govuk-checkboxes__label"),k(t,"for",l[3]),k(t,"title",l[1]),Q(o,"float","right"),k(e,"class","govuk-checkboxes__item"),k(e,"style",l[2])},m(s,m){b(s,e,m),B(e,n),n.checked=l[0],B(e,a),B(e,t),d&&d.m(t,null),B(e,f),B(e,o),i&&i.m(o,null),r=!0,c||(g=[S(n,"change",l[7]),S(n,"change",l[6])],c=!0)},p(s,[m]){m&1&&(n.checked=s[0]),d&&d.p&&(!r||m&16)&&W(d,_,s,s[4],r?x(_,s[4],m,null):Y(s[4]),null),(!r||m&2)&&k(t,"title",s[1]),i&&i.p&&(!r||m&16)&&W(i,h,s,s[4],r?x(h,s[4],m,Ze):Y(s[4]),fe)},i(s){r||(v(d,s),v(i,s),r=!0)},o(s){L(d,s),L(i,s),r=!1},d(s){s&&p(e),d&&d.d(s),i&&i.d(s),c=!1,pe(g)}}}function je(l,e,n){let{$$slots:a={},$$scope:t}=e;const f=Te(a);let{checked:o}=e,{hint:r=null}=e,g=f.right!==void 0?"float: none":"",_=Ge();function d(i){ze.call(this,l,i)}function h(){o=this.checked,n(0,o)}return l.$$set=i=>{"checked"in i&&n(0,o=i.checked),"hint"in i&&n(1,r=i.hint),"$$scope"in i&&n(4,t=i.$$scope)},[o,r,g,_,t,a,d,h]}class gt extends te{constructor(e){super(),le(this,e,je,Xe,H,{checked:0,hint:1})}}function _e(l,e,n){const a=l.slice();return a[7]=e[n][0],a[8]=e[n][1],a}function Je(l){let e;return{c(){e=E("disabled")},l(n){e=M(n,"disabled")},m(n,a){b(n,e,a)},d(n){n&&p(e)}}}function Qe(l){let e;return{c(){e=E("enabled")},l(n){e=M(n,"enabled")},m(n,a){b(n,e,a)},d(n){n&&p(e)}}}function We(l){let e,n=`Google <a href="https://cloud.google.com/maps-platform/terms/" target="_blank">Terms of Use</a>
          and
          <a href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a>`;return{c(){e=w("p"),e.innerHTML=n},l(a){e=I(a,"P",{"data-svelte-h":!0}),be(e)!=="svelte-1uvm4kz"&&(e.innerHTML=n)},m(a,t){b(a,e,t)},d(a){a&&p(e)}}}function Ye(l){let e,n=l[8]+"",a,t;return{c(){e=E("Set "),a=E(n),t=E(` API key
      `)},l(f){e=M(f,"Set "),a=M(f,n),t=M(f,` API key
      `)},m(f,o){b(f,e,o),b(f,a,o),b(f,t,o)},p:ke,d(f){f&&(p(e),p(a),p(t))}}}function de(l){let e,n=l[8]+"",a,t,f,o,r,c;function g(s,m){return U(s[7])?Qe:Je}let d=g(l)(l),h=l[7]==F&&We();function i(){return l[6](l[7])}return r=new Ue({props:{$$slots:{default:[Ye]},$$scope:{ctx:l}}}),r.$on("click",i),{c(){e=w("p"),a=E(n),t=E(`
        : `),d.c(),f=T(),h&&h.c(),o=T(),ne(r.$$.fragment)},l(s){e=I(s,"P",{});var m=K(e);a=M(m,n),t=M(m,`
        : `),d.l(m),m.forEach(p),f=A(s),h&&h.l(s),o=A(s),ae(r.$$.fragment,s)},m(s,m){b(s,e,m),B(e,a),B(e,t),d.m(e,null),b(s,f,m),h&&h.m(s,m),b(s,o,m),se(r,s,m),c=!0},p(s,m){l=s;const C={};m&2048&&(C.$$scope={dirty:m,ctx:l}),r.$set(C)},i(s){c||(v(r.$$.fragment,s),c=!0)},o(s){L(r.$$.fragment,s),c=!1},d(s){s&&(p(e),p(f),p(o)),d.d(),h&&h.d(s),oe(r,s)}}}function ge(l){let e,n,a=ue(l[3]),t=[];for(let o=0;o<a.length;o+=1)t[o]=de(_e(l,a,o));const f=o=>L(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=V()},l(o){for(let r=0;r<t.length;r+=1)t[r].l(o);e=V()},m(o,r){for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(o,r);b(o,e,r),n=!0},p(o,r){if(r&24){a=ue(o[3]);let c;for(c=0;c<a.length;c+=1){const g=_e(o,a,c);t[c]?(t[c].p(g,r),v(t[c],1)):(t[c]=de(g),t[c].c(),v(t[c],1),t[c].m(e.parentNode,e))}for(ye(),c=a.length;c<t.length;c+=1)f(c);ve()}},i(o){if(!n){for(let r=0;r<a.length;r+=1)v(t[r]);n=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)L(t[r]);n=!1},d(o){o&&p(e),Ne(t,o)}}}function xe(l){let e,n,a,t,f=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,o,r=l[0],c,g;function _(i){l[5](i)}let d={label:"Basemap",choices:l[1]};l[2]!==void 0&&(d.value=l[2]),e=new Ve({props:d}),Ae.push(()=>qe(e,"value",_));let h=ge(l);return{c(){ne(e.$$.fragment),a=T(),t=w("p"),t.textContent=f,o=T(),h.c(),c=V()},l(i){ae(e.$$.fragment,i),a=A(i),t=I(i,"P",{"data-svelte-h":!0}),be(t)!=="svelte-itr0ad"&&(t.textContent=f),o=A(i),h.l(i),c=V()},m(i,s){se(e,i,s),b(i,a,s),b(i,t,s),b(i,o,s),h.m(i,s),b(i,c,s),g=!0},p(i,s){const m={};s&2&&(m.choices=i[1]),!n&&s&4&&(n=!0,m.value=i[2],De(()=>n=!1)),e.$set(m),s&1&&H(r,r=i[0])?(ye(),L(h,1,1,ke),ve(),h=ge(i),h.c(),v(h,1),h.m(c.parentNode,c)):h.p(i,s)},i(i){g||(v(e.$$.fragment,i),v(h),g=!0)},o(i){L(e.$$.fragment,i),L(h),g=!1},d(i){i&&(p(a),p(t),p(o),p(c)),oe(e,i),h.d(i)}}}function $e(l){let e,n;return e=new Re({props:{label:"Basemap",$$slots:{default:[xe]},$$scope:{ctx:l}}}),{c(){ne(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,t){se(e,a,t),n=!0},p(a,[t]){const f={};t&2055&&(f.$$scope={dirty:t,ctx:a}),e.$set(f)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){L(e.$$.fragment,a),n=!1},d(a){oe(e,a)}}}let $="bluesky-api-key",ee="os-api-key",F="google-api-key";function U(l){let e=window.localStorage.getItem(l);return e!=null&&e.length>0}function me(){let l=[];return U(F)&&l.push(["google","Google satellite"]),U($)&&l.push(["bluesky","Bluesky Satellite (12.5cm)"]),U(ee)&&l.push(["os-road","Ordnance Survey MasterMap"]),l.push(["maptiler-hybrid","MapTiler Satellite"]),l.push(["maptiler-streets","MapTiler Streets"]),l.push(["maptiler-dataviz","MapTiler Dataviz"]),l.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),l}function et(l,e,n){let a;R(l,O,_=>n(2,a=_));let t=[[F,"Google satellite imagery"],[$,"Bluesky satellite imagery"],[ee,"Ordnance Survey"]],f=0;function o(_){let d=window.prompt("Enter the API key provided to you",window.localStorage.getItem(_)||"");window.localStorage.setItem(_,d||""),n(1,r=me()),n(0,f+=1),d&&d.length>0&&(_==$?q(O,a="bluesky",a):_==ee?q(O,a="os-road",a):_==F&&q(O,a="google",a))}let r=me();function c(_){a=_,O.set(a)}return[f,r,a,t,o,c,_=>o(_)]}class mt extends te{constructor(e){super(),le(this,e,et,$e,H,{})}}const tt=l=>({marker:l&8}),he=l=>({marker:l[3]});function lt(l){let e,n,a,t,f,o,r;const c=l[19].default,g=J(c,l,l[18],he);return{c(){e=w("div"),g&&g.c(),this.h()},l(_){e=I(_,"DIV",{tabindex:!0,role:!0});var d=K(e);g&&g.l(d),d.forEach(p),this.h()},h(){k(e,"tabindex",n=l[1]?0:void 0),k(e,"role",a=l[1]?"button":void 0),Q(e,"z-index",l[2])},m(_,d){b(_,e,d),g&&g.m(e,null),f=!0,o||(r=[ce(l[7].call(null,e)),ce(t=nt.call(null,e,l[0])),S(e,"click",j(l[20])),S(e,"dblclick",j(l[21])),S(e,"contextmenu",j(l[22])),S(e,"mouseenter",l[23]),S(e,"mouseleave",l[24]),S(e,"mousemove",l[25]),S(e,"keydown",l[8])],o=!0)},p(_,[d]){g&&g.p&&(!f||d&262152)&&W(g,c,_,_[18],f?x(c,_[18],d,tt):Y(_[18]),he),(!f||d&2&&n!==(n=_[1]?0:void 0))&&k(e,"tabindex",n),(!f||d&2&&a!==(a=_[1]?"button":void 0))&&k(e,"role",a),t&&Oe(t.update)&&d&1&&t.update.call(null,_[0]),d&4&&Q(e,"z-index",_[2])},i(_){f||(v(g,_),f=!0)},o(_){L(g,_),f=!1},d(_){_&&p(e),g&&g.d(_),o=!1,pe(r)}}}function nt(l,e){const n=l.className;function a(t){t?l.className=`${n} ${t}`:l.className=n}return a(e),{update:a}}function at(l,e,n){let a,t,f,{$$slots:o={},$$scope:r}=e,{marker:c=void 0}=e,{lngLat:g}=e,{class:_=void 0}=e,{interactive:d=!0}=e,{asButton:h=!1}=e,{draggable:i=!1}=e,{feature:s=null}=e,{offset:m=void 0}=e,{zIndex:C=void 0}=e,{rotation:P=0}=e,{opacity:G=1}=e;const Le=Ke(),{map:ie,layerEvent:Z,self:X}=Fe();R(l,ie,u=>n(27,f=u)),R(l,Z,u=>n(26,a=u)),R(l,X,u=>n(3,t=u));function Se(u){q(X,t=new He.Marker({element:u,rotation:P,draggable:i,offset:m,opacity:G.toString()}).setLngLat(g).addTo(f),t),n(11,c=t);const z=()=>y("dragstart"),D=()=>{re(),y("drag")},N=()=>{re(),y("dragend")};return i&&(t.on("dragstart",z),t.on("drag",D),t.on("dragend",N)),{destroy(){i&&(t==null||t.off("dragstart",z),t==null||t.off("drag",D),t==null||t.off("dragend",N)),n(11,c=void 0),t==null||t.remove()}}}function re(){let u=t==null?void 0:t.getLngLat();u&&(Array.isArray(g)?n(10,g=[u.lng,u.lat]):g&&"lon"in g?n(10,g={lon:u.lng,lat:u.lat}):n(10,g=u))}function Ce(u){u.key===" "&&(u.preventDefault(),u.stopPropagation(),y("click"))}function y(u){if(!d)return;let z=t==null?void 0:t.getLngLat();if(!z)return;const D=[z.lng,z.lat];let N={map:f,marker:t,lngLat:D,features:[{type:"Feature",properties:(s==null?void 0:s.properties)??{},geometry:{type:"Point",coordinates:D}}]};q(Z,a={...N,layerType:"marker",type:u},a),Le(u,N)}const we=()=>y("click"),Ie=()=>y("dblclick"),Pe=()=>y("contextmenu"),Be=u=>{y("mouseenter")},Ee=()=>{y("mouseleave")},Me=()=>y("mousemove");return l.$$set=u=>{"marker"in u&&n(11,c=u.marker),"lngLat"in u&&n(10,g=u.lngLat),"class"in u&&n(0,_=u.class),"interactive"in u&&n(12,d=u.interactive),"asButton"in u&&n(1,h=u.asButton),"draggable"in u&&n(13,i=u.draggable),"feature"in u&&n(14,s=u.feature),"offset"in u&&n(15,m=u.offset),"zIndex"in u&&n(2,C=u.zIndex),"rotation"in u&&n(16,P=u.rotation),"opacity"in u&&n(17,G=u.opacity),"$$scope"in u&&n(18,r=u.$$scope)},l.$$.update=()=>{l.$$.dirty&1032&&(t==null||t.setLngLat(g)),l.$$.dirty&32776&&(t==null||t.setOffset(m??[0,0])),l.$$.dirty&65544&&(t==null||t.setRotation(P)),l.$$.dirty&131080&&(t==null||t.setOpacity(G.toString()))},[_,h,C,t,ie,Z,X,Se,Ce,y,g,c,d,i,s,m,P,G,r,o,we,Ie,Pe,Be,Ee,Me]}class ht extends te{constructor(e){super(),le(this,e,at,lt,H,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}export{mt as B,gt as C,ht as M};
