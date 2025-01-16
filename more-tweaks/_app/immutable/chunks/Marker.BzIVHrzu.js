import{s as F,l as j,e as w,a as T,c as I,b as O,g as A,f as p,q as k,v as J,i as b,h as E,y as S,u as Q,m as W,o as Y,x as he,C as ze,X as Be,k as G,r as Te,D as R,p as pe,w as Ae,n as be,V as U,K as De,t as M,d as z,Z as re,F as X,_ as Ne,U as Oe}from"./scheduler.DGwhun8C.js";import{S as ee,i as te,t as v,b as L,c as le,a as ne,m as ae,d as oe,e as Ke,g as ke,f as ye}from"./index.B2vZYn3d.js";import{v as qe}from"./v4.D8aEg3BZ.js";import{e as ce}from"./each.osbS1YKp.js";import{C as Ge}from"./CollapsibleCard.NCxe97a7.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.C4RDHUU3.js";import{S as Re}from"./SecondaryButton.zQkvdoBX.js";import{S as Ue}from"./Select.DmrU2tJW.js";import{k as q,u as Ve,d as Fe}from"./index.jjuT0sm4.js";const He=l=>({}),ue=l=>({});function Ze(l){let e,n,a,t,f,s,r,c,g;const d=l[5].default,_=j(d,l,l[4],null),h=l[5].right,i=j(h,l,l[4],ue);return{c(){e=w("div"),n=w("input"),a=T(),t=w("label"),_&&_.c(),f=T(),s=w("span"),i&&i.c(),this.h()},l(o){e=I(o,"DIV",{class:!0,style:!0});var m=O(e);n=I(m,"INPUT",{type:!0,class:!0,id:!0}),a=A(m),t=I(m,"LABEL",{class:!0,for:!0,title:!0});var C=O(t);_&&_.l(C),C.forEach(p),f=A(m),s=I(m,"SPAN",{style:!0});var P=O(s);i&&i.l(P),P.forEach(p),m.forEach(p),this.h()},h(){k(n,"type","checkbox"),k(n,"class","govuk-checkboxes__input"),k(n,"id",l[3]),k(t,"class","govuk-label govuk-checkboxes__label"),k(t,"for",l[3]),k(t,"title",l[1]),J(s,"float","right"),k(e,"class","govuk-checkboxes__item"),k(e,"style",l[2])},m(o,m){b(o,e,m),E(e,n),n.checked=l[0],E(e,a),E(e,t),_&&_.m(t,null),E(e,f),E(e,s),i&&i.m(s,null),r=!0,c||(g=[S(n,"change",l[7]),S(n,"change",l[6])],c=!0)},p(o,[m]){m&1&&(n.checked=o[0]),_&&_.p&&(!r||m&16)&&Q(_,d,o,o[4],r?Y(d,o[4],m,null):W(o[4]),null),(!r||m&2)&&k(t,"title",o[1]),i&&i.p&&(!r||m&16)&&Q(i,h,o,o[4],r?Y(h,o[4],m,He):W(o[4]),ue)},i(o){r||(v(_,o),v(i,o),r=!0)},o(o){L(_,o),L(i,o),r=!1},d(o){o&&p(e),_&&_.d(o),i&&i.d(o),c=!1,he(g)}}}function Xe(l,e,n){let{$$slots:a={},$$scope:t}=e;const f=Be(a);let{checked:s}=e,{hint:r=null}=e,g=f.right!==void 0?"float: none":"",d=qe();function _(i){ze.call(this,l,i)}function h(){s=this.checked,n(0,s)}return l.$$set=i=>{"checked"in i&&n(0,s=i.checked),"hint"in i&&n(1,r=i.hint),"$$scope"in i&&n(4,t=i.$$scope)},[s,r,g,d,t,a,_,h]}class dt extends ee{constructor(e){super(),te(this,e,Xe,Ze,F,{checked:0,hint:1})}}function fe(l,e,n){const a=l.slice();return a[7]=e[n][0],a[8]=e[n][1],a}function je(l){let e;return{c(){e=M("disabled")},l(n){e=z(n,"disabled")},m(n,a){b(n,e,a)},d(n){n&&p(e)}}}function Je(l){let e;return{c(){e=M("enabled")},l(n){e=z(n,"enabled")},m(n,a){b(n,e,a)},d(n){n&&p(e)}}}function Qe(l){let e,n=`Google <a href="https://cloud.google.com/maps-platform/terms/" target="_blank">Terms of Use</a>
          and
          <a href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a>`;return{c(){e=w("p"),e.innerHTML=n},l(a){e=I(a,"P",{"data-svelte-h":!0}),pe(e)!=="svelte-1uvm4kz"&&(e.innerHTML=n)},m(a,t){b(a,e,t)},d(a){a&&p(e)}}}function We(l){let e,n=l[8]+"",a,t;return{c(){e=M("Set "),a=M(n),t=M(` API key
      `)},l(f){e=z(f,"Set "),a=z(f,n),t=z(f,` API key
      `)},m(f,s){b(f,e,s),b(f,a,s),b(f,t,s)},p:be,d(f){f&&(p(e),p(a),p(t))}}}function _e(l){let e,n=l[8]+"",a,t,f,s,r,c;function g(o,m){return $(o[7])?Je:je}let _=g(l)(l),h=l[7]==V&&Qe();function i(){return l[6](l[7])}return r=new Re({props:{$$slots:{default:[We]},$$scope:{ctx:l}}}),r.$on("click",i),{c(){e=w("p"),a=M(n),t=M(`
        : `),_.c(),f=T(),h&&h.c(),s=T(),le(r.$$.fragment)},l(o){e=I(o,"P",{});var m=O(e);a=z(m,n),t=z(m,`
        : `),_.l(m),m.forEach(p),f=A(o),h&&h.l(o),s=A(o),ne(r.$$.fragment,o)},m(o,m){b(o,e,m),E(e,a),E(e,t),_.m(e,null),b(o,f,m),h&&h.m(o,m),b(o,s,m),ae(r,o,m),c=!0},p(o,m){l=o;const C={};m&2048&&(C.$$scope={dirty:m,ctx:l}),r.$set(C)},i(o){c||(v(r.$$.fragment,o),c=!0)},o(o){L(r.$$.fragment,o),c=!1},d(o){o&&(p(e),p(f),p(s)),_.d(),h&&h.d(o),oe(r,o)}}}function de(l){let e,n,a=ce(l[3]),t=[];for(let s=0;s<a.length;s+=1)t[s]=_e(fe(l,a,s));const f=s=>L(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=R()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=R()},m(s,r){for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(s,r);b(s,e,r),n=!0},p(s,r){if(r&24){a=ce(s[3]);let c;for(c=0;c<a.length;c+=1){const g=fe(s,a,c);t[c]?(t[c].p(g,r),v(t[c],1)):(t[c]=_e(g),t[c].c(),v(t[c],1),t[c].m(e.parentNode,e))}for(ke(),c=a.length;c<t.length;c+=1)f(c);ye()}},i(s){if(!n){for(let r=0;r<a.length;r+=1)v(t[r]);n=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)L(t[r]);n=!1},d(s){s&&p(e),De(t,s)}}}function Ye(l){let e,n,a,t,f=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,s,r=l[0],c,g;function d(i){l[5](i)}let _={label:"Basemap",choices:l[1]};l[2]!==void 0&&(_.value=l[2]),e=new Ue({props:_}),Te.push(()=>Ke(e,"value",d));let h=de(l);return{c(){le(e.$$.fragment),a=T(),t=w("p"),t.textContent=f,s=T(),h.c(),c=R()},l(i){ne(e.$$.fragment,i),a=A(i),t=I(i,"P",{"data-svelte-h":!0}),pe(t)!=="svelte-itr0ad"&&(t.textContent=f),s=A(i),h.l(i),c=R()},m(i,o){ae(e,i,o),b(i,a,o),b(i,t,o),b(i,s,o),h.m(i,o),b(i,c,o),g=!0},p(i,o){const m={};o&2&&(m.choices=i[1]),!n&&o&4&&(n=!0,m.value=i[2],Ae(()=>n=!1)),e.$set(m),o&1&&F(r,r=i[0])?(ke(),L(h,1,1,be),ye(),h=de(i),h.c(),v(h,1),h.m(c.parentNode,c)):h.p(i,o)},i(i){g||(v(e.$$.fragment,i),v(h),g=!0)},o(i){L(e.$$.fragment,i),L(h),g=!1},d(i){i&&(p(a),p(t),p(s),p(c)),oe(e,i),h.d(i)}}}function xe(l){let e,n;return e=new Ge({props:{label:"Basemap",$$slots:{default:[Ye]},$$scope:{ctx:l}}}),{c(){le(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,t){ae(e,a,t),n=!0},p(a,[t]){const f={};t&2055&&(f.$$scope={dirty:t,ctx:a}),e.$set(f)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){L(e.$$.fragment,a),n=!1},d(a){oe(e,a)}}}let x="os-api-key",V="google-api-key";function $(l){let e=window.localStorage.getItem(l);return e!=null&&e.length>0}function ge(){let l=[];return $(V)&&l.push(["google","Google satellite"]),$(x)&&l.push(["os-road","Ordnance Survey MasterMap"]),l.push(["maptiler-hybrid","MapTiler Satellite"]),l.push(["maptiler-streets","MapTiler Streets"]),l.push(["maptiler-dataviz","MapTiler Dataviz"]),l.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),l}function $e(l,e,n){let a;G(l,q,d=>n(2,a=d));let t=[[V,"Google satellite imagery"],[x,"Ordnance Survey"]],f=0;function s(d){let _=window.prompt("Enter the API key provided to you",window.localStorage.getItem(d)||"");window.localStorage.setItem(d,_||""),n(1,r=ge()),n(0,f+=1),_&&_.length>0&&(d==x?U(q,a="os-road",a):d==V&&U(q,a="google",a))}let r=ge();function c(d){a=d,q.set(a)}return[f,r,a,t,s,c,d=>s(d)]}class gt extends ee{constructor(e){super(),te(this,e,$e,xe,F,{})}}const et=l=>({marker:l&8}),me=l=>({marker:l[3]});function tt(l){let e,n,a,t,f,s,r;const c=l[19].default,g=j(c,l,l[18],me);return{c(){e=w("div"),g&&g.c(),this.h()},l(d){e=I(d,"DIV",{tabindex:!0,role:!0});var _=O(e);g&&g.l(_),_.forEach(p),this.h()},h(){k(e,"tabindex",n=l[1]?0:void 0),k(e,"role",a=l[1]?"button":void 0),J(e,"z-index",l[2])},m(d,_){b(d,e,_),g&&g.m(e,null),f=!0,s||(r=[re(l[7].call(null,e)),re(t=lt.call(null,e,l[0])),S(e,"click",X(l[20])),S(e,"dblclick",X(l[21])),S(e,"contextmenu",X(l[22])),S(e,"mouseenter",l[23]),S(e,"mouseleave",l[24]),S(e,"mousemove",l[25]),S(e,"keydown",l[8])],s=!0)},p(d,[_]){g&&g.p&&(!f||_&262152)&&Q(g,c,d,d[18],f?Y(c,d[18],_,et):W(d[18]),me),(!f||_&2&&n!==(n=d[1]?0:void 0))&&k(e,"tabindex",n),(!f||_&2&&a!==(a=d[1]?"button":void 0))&&k(e,"role",a),t&&Ne(t.update)&&_&1&&t.update.call(null,d[0]),_&4&&J(e,"z-index",d[2])},i(d){f||(v(g,d),f=!0)},o(d){L(g,d),f=!1},d(d){d&&p(e),g&&g.d(d),s=!1,he(r)}}}function lt(l,e){const n=l.className;function a(t){t?l.className=`${n} ${t}`:l.className=n}return a(e),{update:a}}function nt(l,e,n){let a,t,f,{$$slots:s={},$$scope:r}=e,{marker:c=void 0}=e,{lngLat:g}=e,{class:d=void 0}=e,{interactive:_=!0}=e,{asButton:h=!1}=e,{draggable:i=!1}=e,{feature:o=null}=e,{offset:m=void 0}=e,{zIndex:C=void 0}=e,{rotation:P=0}=e,{opacity:K=1}=e;const ve=Oe(),{map:se,layerEvent:H,self:Z}=Ve();G(l,se,u=>n(27,f=u)),G(l,H,u=>n(26,a=u)),G(l,Z,u=>n(3,t=u));function Le(u){U(Z,t=new Fe.Marker({element:u,rotation:P,draggable:i,offset:m,opacity:K.toString()}).setLngLat(g).addTo(f),t),n(11,c=t);const B=()=>y("dragstart"),D=()=>{ie(),y("drag")},N=()=>{ie(),y("dragend")};return i&&(t.on("dragstart",B),t.on("drag",D),t.on("dragend",N)),{destroy(){i&&(t==null||t.off("dragstart",B),t==null||t.off("drag",D),t==null||t.off("dragend",N)),n(11,c=void 0),t==null||t.remove()}}}function ie(){let u=t==null?void 0:t.getLngLat();u&&(Array.isArray(g)?n(10,g=[u.lng,u.lat]):g&&"lon"in g?n(10,g={lon:u.lng,lat:u.lat}):n(10,g=u))}function Se(u){u.key===" "&&(u.preventDefault(),u.stopPropagation(),y("click"))}function y(u){if(!_)return;let B=t==null?void 0:t.getLngLat();if(!B)return;const D=[B.lng,B.lat];let N={map:f,marker:t,lngLat:D,features:[{type:"Feature",properties:(o==null?void 0:o.properties)??{},geometry:{type:"Point",coordinates:D}}]};U(H,a={...N,layerType:"marker",type:u},a),ve(u,N)}const Ce=()=>y("click"),we=()=>y("dblclick"),Ie=()=>y("contextmenu"),Pe=u=>{y("mouseenter")},Ee=()=>{y("mouseleave")},Me=()=>y("mousemove");return l.$$set=u=>{"marker"in u&&n(11,c=u.marker),"lngLat"in u&&n(10,g=u.lngLat),"class"in u&&n(0,d=u.class),"interactive"in u&&n(12,_=u.interactive),"asButton"in u&&n(1,h=u.asButton),"draggable"in u&&n(13,i=u.draggable),"feature"in u&&n(14,o=u.feature),"offset"in u&&n(15,m=u.offset),"zIndex"in u&&n(2,C=u.zIndex),"rotation"in u&&n(16,P=u.rotation),"opacity"in u&&n(17,K=u.opacity),"$$scope"in u&&n(18,r=u.$$scope)},l.$$.update=()=>{l.$$.dirty&1032&&(t==null||t.setLngLat(g)),l.$$.dirty&32776&&(t==null||t.setOffset(m??[0,0])),l.$$.dirty&65544&&(t==null||t.setRotation(P)),l.$$.dirty&131080&&(t==null||t.setOpacity(K.toString()))},[d,h,C,t,se,H,Z,Le,Se,y,g,c,_,i,o,m,P,K,r,s,Ce,we,Ie,Pe,Ee,Me]}class mt extends ee{constructor(e){super(),te(this,e,nt,tt,F,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}export{gt as B,dt as C,mt as M};
