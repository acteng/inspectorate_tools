import{s as K,l as ae,e as L,a as N,c as C,b as V,g as P,f as h,o as w,x as J,i as k,h as S,z as E,u as se,p as ie,q as re,y as me,D as qe,aa as He,k as O,v as Y,F as G,m as ue,w as _e,n as pe,r as Ze,t as B,d as I,S as Ae,W as Oe,ab as ke,H as ne,a0 as Je,U as A,ac as Qe,E as ye,j as Xe}from"./scheduler.ScMV3vmV.js";import{S as j,i as q,t as y,b as v,c as R,a as U,m as M,d as T,e as ge,g as $,f as x}from"./index.DbrWxxqn.js";import{e as ve}from"./each.DgxkLI6f.js";import{C as Ye}from"./CollapsibleCard.DOoboPEd.js";import{S as Re}from"./SecondaryButton.BknZbHJL.js";import{S as $e}from"./Select.CV0kGAxR.js";/* empty css                                                       */import{i as we,m as xe,j as et,k as tt,f as nt,s as lt,d as ot}from"./index.BOWia5Ug.js";import{v as at}from"./v4.D8aEg3BZ.js";import{R as st}from"./Radio.CFR2d39u.js";import{B as it}from"./ButtonGroup.B2LkAXM6.js";import{D as rt}from"./DefaultButton.DmNBc77J.js";import{F as ut}from"./FormElement.C7C6GEki.js";import{W as ct}from"./WarningButton.Dxk6Eh5H.js";import{w as Q}from"./index.7lq6HB3t.js";const ft=l=>({}),Se=l=>({});function dt(l){let e,t,o,n,a,s,u,f,d;const i=l[5].default,c=ae(i,l,l[4],null),_=l[5].right,r=ae(_,l,l[4],Se);return{c(){e=L("div"),t=L("input"),o=N(),n=L("label"),c&&c.c(),a=N(),s=L("span"),r&&r.c(),this.h()},l(m){e=C(m,"DIV",{class:!0,style:!0});var p=V(e);t=C(p,"INPUT",{type:!0,class:!0,id:!0}),o=P(p),n=C(p,"LABEL",{class:!0,for:!0,title:!0});var b=V(n);c&&c.l(b),b.forEach(h),a=P(p),s=C(p,"SPAN",{style:!0});var D=V(s);r&&r.l(D),D.forEach(h),p.forEach(h),this.h()},h(){w(t,"type","checkbox"),w(t,"class","govuk-checkboxes__input"),w(t,"id",l[3]),w(n,"class","govuk-label govuk-checkboxes__label"),w(n,"for",l[3]),w(n,"title",l[1]),J(s,"float","right"),w(e,"class","govuk-checkboxes__item"),w(e,"style",l[2])},m(m,p){k(m,e,p),S(e,t),t.checked=l[0],S(e,o),S(e,n),c&&c.m(n,null),S(e,a),S(e,s),r&&r.m(s,null),u=!0,f||(d=[E(t,"change",l[7]),E(t,"change",l[6])],f=!0)},p(m,[p]){p&1&&(t.checked=m[0]),c&&c.p&&(!u||p&16)&&se(c,i,m,m[4],u?re(i,m[4],p,null):ie(m[4]),null),(!u||p&2)&&w(n,"title",m[1]),r&&r.p&&(!u||p&16)&&se(r,_,m,m[4],u?re(_,m[4],p,ft):ie(m[4]),Se)},i(m){u||(y(c,m),y(r,m),u=!0)},o(m){v(c,m),v(r,m),u=!1},d(m){m&&h(e),c&&c.d(m),r&&r.d(m),f=!1,me(d)}}}function mt(l,e,t){let{$$slots:o={},$$scope:n}=e;const a=He(o);let{checked:s}=e,{hint:u=null}=e,d=a.right!==void 0?"float: none":"",i=at();function c(r){qe.call(this,l,r)}function _(){s=this.checked,t(0,s)}return l.$$set=r=>{"checked"in r&&t(0,s=r.checked),"hint"in r&&t(1,u=r.hint),"$$scope"in r&&t(4,n=r.$$scope)},[s,u,d,i,n,o,c,_]}class _t extends j{constructor(e){super(),q(this,e,mt,dt,K,{checked:0,hint:1})}}function Le(l,e,t){const o=l.slice();return o[6]=e[t][0],o[7]=e[t][1],o}function pt(l){let e;return{c(){e=B("disabled")},l(t){e=I(t,"disabled")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function gt(l){let e;return{c(){e=B("enabled")},l(t){e=I(t,"enabled")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function ht(l){let e,t=l[7]+"",o,n;return{c(){e=B("Set "),o=B(t),n=B(` API key
      `)},l(a){e=I(a,"Set "),o=I(a,t),n=I(a,` API key
      `)},m(a,s){k(a,e,s),k(a,o,s),k(a,n,s)},p:pe,d(a){a&&(h(e),h(o),h(n))}}}function Ce(l){let e,t,o=l[7]+"",n,a,s,u,f;function d(r,m){return de(r[6])?gt:pt}let c=d(l)(l);function _(){return l[5](l[6])}return u=new Re({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}}),u.$on("click",_),{c(){e=L("p"),t=L("u"),n=B(o),a=B(`
        : `),c.c(),s=N(),R(u.$$.fragment)},l(r){e=C(r,"P",{});var m=V(e);t=C(m,"U",{});var p=V(t);n=I(p,o),p.forEach(h),a=I(m,`
        : `),c.l(m),m.forEach(h),s=P(r),U(u.$$.fragment,r)},m(r,m){k(r,e,m),S(e,t),S(t,n),S(e,a),c.m(e,null),k(r,s,m),M(u,r,m),f=!0},p(r,m){l=r;const p={};m&1024&&(p.$$scope={dirty:m,ctx:l}),u.$set(p)},i(r){f||(y(u.$$.fragment,r),f=!0)},o(r){v(u.$$.fragment,r),f=!1},d(r){r&&(h(e),h(s)),c.d(),T(u,r)}}}function Ee(l){let e,t,o=ve([[ce,"Bluesky"],[fe,"Ordnance Survey"]]),n=[];for(let s=0;s<2;s+=1)n[s]=Ce(Le(l,o,s));const a=s=>v(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<2;s+=1)n[s].c();e=G()},l(s){for(let u=0;u<2;u+=1)n[u].l(s);e=G()},m(s,u){for(let f=0;f<2;f+=1)n[f]&&n[f].m(s,u);k(s,e,u),t=!0},p(s,u){if(u&8){o=ve([[ce,"Bluesky"],[fe,"Ordnance Survey"]]);let f;for(f=0;f<2;f+=1){const d=Le(s,o,f);n[f]?(n[f].p(d,u),y(n[f],1)):(n[f]=Ce(d),n[f].c(),y(n[f],1),n[f].m(e.parentNode,e))}for($(),f=2;f<2;f+=1)a(f);x()}},i(s){if(!t){for(let u=0;u<2;u+=1)y(n[u]);t=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<2;u+=1)v(n[u]);t=!1},d(s){s&&h(e),Ze(n,s)}}}function bt(l){let e,t,o,n,a=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,s,u=l[0],f,d;function i(r){l[4](r)}let c={label:"Basemap",choices:l[1]};l[2]!==void 0&&(c.value=l[2]),e=new $e({props:c}),Y.push(()=>ge(e,"value",i));let _=Ee(l);return{c(){R(e.$$.fragment),o=N(),n=L("p"),n.textContent=a,s=N(),_.c(),f=G()},l(r){U(e.$$.fragment,r),o=P(r),n=C(r,"P",{"data-svelte-h":!0}),ue(n)!=="svelte-itr0ad"&&(n.textContent=a),s=P(r),_.l(r),f=G()},m(r,m){M(e,r,m),k(r,o,m),k(r,n,m),k(r,s,m),_.m(r,m),k(r,f,m),d=!0},p(r,m){const p={};m&2&&(p.choices=r[1]),!t&&m&4&&(t=!0,p.value=r[2],_e(()=>t=!1)),e.$set(p),m&1&&K(u,u=r[0])?($(),v(_,1,1,pe),x(),_=Ee(r),_.c(),y(_,1),_.m(f.parentNode,f)):_.p(r,m)},i(r){d||(y(e.$$.fragment,r),y(_),d=!0)},o(r){v(e.$$.fragment,r),v(_),d=!1},d(r){r&&(h(o),h(n),h(s),h(f)),T(e,r),_.d(r)}}}function kt(l){let e,t;return e=new Ye({props:{label:"Basemap",$$slots:{default:[bt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,n){M(e,o,n),t=!0},p(o,[n]){const a={};n&1031&&(a.$$scope={dirty:n,ctx:o}),e.$set(a)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}let ce="bluesky-api-key",fe="os-api-key";function de(l){let e=window.localStorage.getItem(l);return e!=null&&e.length>0}function Be(){let l=[];return de(ce)&&l.push(["bluesky","Bluesky Satellite (12.5cm)"]),de(fe)&&l.push(["os-road","OS Road"]),l.push(["maptiler-hybrid","MapTiler Satellite"]),l.push(["maptiler-streets","MapTiler Streets"]),l.push(["maptiler-dataviz","MapTiler Dataviz"]),l.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),l}function yt(l,e,t){let o;O(l,we,d=>t(2,o=d));let n=0;function a(d){let i=window.prompt("Enter the API key provided to you",window.localStorage.getItem(d)||"");window.localStorage.setItem(d,i||""),t(1,s=Be()),t(0,n+=1)}let s=Be();function u(d){o=d,we.set(o)}return[n,s,o,a,u,d=>a(d)]}class en extends j{constructor(e){super(),q(this,e,yt,kt,K,{})}}function vt(l,e,t){let o;const n=Ae();let{layer:a=void 0}=e;const{map:s}=xe();O(l,s,i=>t(2,o=i));function u(i){n(i.type,{...i,map:s})}const f=["click","dblclick","mousedown","mouseup","mousemove","mouseenter","mouseleave","contextmenu","mouseover","mouseout"],d=["click","dblclick","contextmenu","mousemove","movestart","moveend","zoomstart","zoom","zoomend"];return Oe(()=>{if(o)if(a)for(const i of f)o.off(i,a,u);else for(const i of d)o.off(i,u)}),l.$$set=i=>{"layer"in i&&t(1,a=i.layer)},l.$$.update=()=>{if(l.$$.dirty&6&&o)if(a)for(const i of f)o.on(i,a,u);else for(const i of d)o.on(i,u)},[s,a,o]}class tn extends j{constructor(e){super(),q(this,e,vt,null,K,{layer:1})}}const wt=l=>({marker:l&8}),Ie=l=>({marker:l[3]});function St(l){let e,t,o,n,a,s,u;const f=l[19].default,d=ae(f,l,l[18],Ie);return{c(){e=L("div"),d&&d.c(),this.h()},l(i){e=C(i,"DIV",{tabindex:!0,role:!0});var c=V(e);d&&d.l(c),c.forEach(h),this.h()},h(){w(e,"tabindex",t=l[1]?0:void 0),w(e,"role",o=l[1]?"button":void 0),J(e,"z-index",l[2])},m(i,c){k(i,e,c),d&&d.m(e,null),a=!0,s||(u=[ke(l[7].call(null,e)),ke(n=Lt.call(null,e,l[0])),E(e,"click",ne(l[20])),E(e,"dblclick",ne(l[21])),E(e,"contextmenu",ne(l[22])),E(e,"mouseenter",l[23]),E(e,"mouseleave",l[24]),E(e,"mousemove",l[25]),E(e,"keydown",l[8])],s=!0)},p(i,[c]){d&&d.p&&(!a||c&262152)&&se(d,f,i,i[18],a?re(f,i[18],c,wt):ie(i[18]),Ie),(!a||c&2&&t!==(t=i[1]?0:void 0))&&w(e,"tabindex",t),(!a||c&2&&o!==(o=i[1]?"button":void 0))&&w(e,"role",o),n&&Je(n.update)&&c&1&&n.update.call(null,i[0]),c&4&&J(e,"z-index",i[2])},i(i){a||(y(d,i),a=!0)},o(i){v(d,i),a=!1},d(i){i&&h(e),d&&d.d(i),s=!1,me(u)}}}function Lt(l,e){const t=l.className;function o(n){n?l.className=`${t} ${n}`:l.className=t}return o(e),{update:o}}function Ct(l,e,t){let o,n,a,{$$slots:s={},$$scope:u}=e,{marker:f=void 0}=e,{lngLat:d}=e,{class:i=void 0}=e,{interactive:c=!0}=e,{asButton:_=!1}=e,{draggable:r=!1}=e,{feature:m=null}=e,{offset:p=void 0}=e,{zIndex:b=void 0}=e,{rotation:D=0}=e,{opacity:F=1}=e;const Ue=Ae(),{map:he,layerEvent:ee,self:te}=et();O(l,he,g=>t(27,a=g)),O(l,ee,g=>t(26,o=g)),O(l,te,g=>t(3,n=g));function Me(g){A(te,n=new tt.Marker({element:g,rotation:D,draggable:r,offset:p,opacity:F.toString()}).setLngLat(d).addTo(a),n),t(11,f=n);const W=()=>z("dragstart"),H=()=>{be(),z("drag")},Z=()=>{be(),z("dragend")};return r&&(n.on("dragstart",W),n.on("drag",H),n.on("dragend",Z)),{destroy(){r&&(n==null||n.off("dragstart",W),n==null||n.off("drag",H),n==null||n.off("dragend",Z)),t(11,f=void 0),n==null||n.remove()}}}function be(){let g=n==null?void 0:n.getLngLat();g&&(Array.isArray(d)?t(10,d=[g.lng,g.lat]):d&&"lon"in d?t(10,d={lon:g.lng,lat:g.lat}):t(10,d=g))}function Te(g){g.key===" "&&(g.preventDefault(),g.stopPropagation(),z("click"))}function z(g){if(!c)return;let W=n==null?void 0:n.getLngLat();if(!W)return;const H=[W.lng,W.lat];let Z={map:a,marker:n,lngLat:H,features:[{type:"Feature",properties:(m==null?void 0:m.properties)??{},geometry:{type:"Point",coordinates:H}}]};A(ee,o={...Z,layerType:"marker",type:g},o),Ue(g,Z)}const Ve=()=>z("click"),Ge=()=>z("dblclick"),Ke=()=>z("contextmenu"),Fe=g=>{z("mouseenter")},We=()=>{z("mouseleave")},je=()=>z("mousemove");return l.$$set=g=>{"marker"in g&&t(11,f=g.marker),"lngLat"in g&&t(10,d=g.lngLat),"class"in g&&t(0,i=g.class),"interactive"in g&&t(12,c=g.interactive),"asButton"in g&&t(1,_=g.asButton),"draggable"in g&&t(13,r=g.draggable),"feature"in g&&t(14,m=g.feature),"offset"in g&&t(15,p=g.offset),"zIndex"in g&&t(2,b=g.zIndex),"rotation"in g&&t(16,D=g.rotation),"opacity"in g&&t(17,F=g.opacity),"$$scope"in g&&t(18,u=g.$$scope)},l.$$.update=()=>{l.$$.dirty&1032&&(n==null||n.setLngLat(d)),l.$$.dirty&32776&&(n==null||n.setOffset(p??[0,0])),l.$$.dirty&65544&&(n==null||n.setRotation(D)),l.$$.dirty&131080&&(n==null||n.setOpacity(F.toString()))},[i,_,b,n,he,ee,te,Me,Te,z,d,f,c,r,m,p,D,F,u,s,Ve,Ge,Ke,Fe,We,je]}class nn extends j{constructor(e){super(),q(this,e,Ct,St,K,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}const{window:Et}=nt;function Bt(l){let e;return{c(){e=B("StreetView")},l(t){e=I(t,"StreetView")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function De(l){let e,t,o;function n(s){l[5](s)}let a={legend:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return l[1]!==void 0&&(a.value=l[1]),e=new st({props:a}),Y.push(()=>ge(e,"value",n)),{c(){R(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,u){M(e,s,u),o=!0},p(s,u){const f={};!t&&u&2&&(t=!0,f.value=s[1],_e(()=>t=!1)),e.$set(f)},i(s){o||(y(e.$$.fragment,s),o=!0)},o(s){v(e.$$.fragment,s),o=!1},d(s){T(e,s)}}}function It(l){let e,t,o,n,a,s,u;function f(c){l[4](c)}let d={$$slots:{default:[Bt]},$$scope:{ctx:l}};l[0]!==void 0&&(d.checked=l[0]),e=new _t({props:d}),Y.push(()=>ge(e,"checked",f));let i=l[0]&&De(l);return{c(){R(e.$$.fragment),o=N(),i&&i.c(),n=G()},l(c){U(e.$$.fragment,c),o=P(c),i&&i.l(c),n=G()},m(c,_){M(e,c,_),k(c,o,_),i&&i.m(c,_),k(c,n,_),a=!0,s||(u=E(Et,"keydown",l[2]),s=!0)},p(c,[_]){const r={};_&512&&(r.$$scope={dirty:_,ctx:c}),!t&&_&1&&(t=!0,r.checked=c[0],_e(()=>t=!1)),e.$set(r),c[0]?i?(i.p(c,_),_&1&&y(i,1)):(i=De(c),i.c(),y(i,1),i.m(n.parentNode,n)):i&&($(),v(i,1,1,()=>{i=null}),x())},i(c){a||(y(e.$$.fragment,c),y(i),a=!0)},o(c){v(e.$$.fragment,c),v(i),a=!1},d(c){c&&(h(o),h(n)),T(e,c),i&&i.d(c),s=!1,u()}}}function Dt(l,e,t){let{map:o}=e,{enabled:n=!1}=e,a="google";function s(){o&&(o.on("click",f),o.getCanvas().style.cursor="zoom-in")}function u(){o&&(o.off("click",f),o.getCanvas().style.cursor="auto")}Oe(u);function f(_){window.open(a=="google"?lt(_.lngLat.toArray()):ot(_.lngLat.toArray()),"_blank"),t(0,n=!1)}function d(_){n&&_.key=="Escape"&&t(0,n=!1)}function i(_){n=_,t(0,n)}function c(_){a=_,t(1,a)}return l.$$set=_=>{"map"in _&&t(3,o=_.map),"enabled"in _&&t(0,n=_.enabled)},l.$$.update=()=>{l.$$.dirty&1&&(n?s():u())},[n,a,d,o,i,c]}class ln extends j{constructor(e){super(),q(this,e,Dt,It,K,{map:3,enabled:0})}}const X=Q(!1),le=Q(null),oe=Q(100),ze=Q({lng:0,lat:0}),Ne=Q({lng:0,lat:0});function zt(l){let e,t;return e=new Re({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),e.$on("click",l[10]),{c(){R(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,n){M(e,o,n),t=!0},p(o,n){const a={};n&8192&&(a.$$scope={dirty:n,ctx:o}),e.$set(a)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function Nt(l){let e,t,o="Georeference an image",n,a,s,u,f,d,i,c=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,_;a=new it({props:{$$slots:{default:[Rt]},$$scope:{ctx:l}}}),u=new ut({props:{label:"Load an image",id:"load-image",$$slots:{default:[Ut]},$$scope:{ctx:l}}});let r=l[3]&&Pe(l);return{c(){e=L("div"),t=L("h2"),t.textContent=o,n=N(),R(a.$$.fragment),s=N(),R(u.$$.fragment),f=N(),r&&r.c(),d=N(),i=L("p"),i.textContent=c,this.h()},l(m){e=C(m,"DIV",{style:!0});var p=V(e);t=C(p,"H2",{"data-svelte-h":!0}),ue(t)!=="svelte-fociiu"&&(t.textContent=o),n=P(p),U(a.$$.fragment,p),s=P(p),U(u.$$.fragment,p),f=P(p),r&&r.l(p),d=P(p),i=C(p,"P",{"data-svelte-h":!0}),ue(i)!=="svelte-d8uklv"&&(i.textContent=c),p.forEach(h),this.h()},h(){J(e,"border","1px solid black"),J(e,"padding","4px")},m(m,p){k(m,e,p),S(e,t),S(e,n),M(a,e,null),S(e,s),M(u,e,null),S(e,f),r&&r.m(e,null),S(e,d),S(e,i),_=!0},p(m,p){const b={};p&8202&&(b.$$scope={dirty:p,ctx:m}),a.$set(b);const D={};p&8193&&(D.$$scope={dirty:p,ctx:m}),u.$set(D),m[3]?r?r.p(m,p):(r=Pe(m),r.c(),r.m(e,d)):r&&(r.d(1),r=null)},i(m){_||(y(a.$$.fragment,m),y(u.$$.fragment,m),_=!0)},o(m){v(a.$$.fragment,m),v(u.$$.fragment,m),_=!1},d(m){m&&h(e),T(a),T(u),r&&r.d()}}}function Pt(l){let e;return{c(){e=B("Georeference an image")},l(t){e=I(t,"Georeference an image")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function At(l){let e;return{c(){e=B("Save")},l(t){e=I(t,"Save")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function Ot(l){let e;return{c(){e=B("Delete")},l(t){e=I(t,"Delete")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function Rt(l){let e,t,o,n;return e=new rt({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),e.$on("click",l[7]),o=new ct({props:{disabled:!l[3],$$slots:{default:[Ot]},$$scope:{ctx:l}}}),o.$on("click",l[5]),{c(){R(e.$$.fragment),t=N(),R(o.$$.fragment)},l(a){U(e.$$.fragment,a),t=P(a),U(o.$$.fragment,a)},m(a,s){M(e,a,s),k(a,t,s),M(o,a,s),n=!0},p(a,s){const u={};s&8192&&(u.$$scope={dirty:s,ctx:a}),e.$set(u);const f={};s&8&&(f.disabled=!a[3]),s&8192&&(f.$$scope={dirty:s,ctx:a}),o.$set(f)},i(a){n||(y(e.$$.fragment,a),y(o.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),v(o.$$.fragment,a),n=!1},d(a){a&&h(t),T(e,a),T(o,a)}}}function Ut(l){let e,t,o;return{c(){e=L("input"),this.h()},l(n){e=C(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){w(e,"class","govuk-file-upload"),w(e,"id","load-image"),w(e,"type","file")},m(n,a){k(n,e,a),l[8](e),t||(o=E(e,"change",l[4]),t=!0)},p:pe,d(n){n&&h(e),l[8](null),t=!1,o()}}}function Pe(l){let e,t,o,n,a,s,u,f;return{c(){e=L("div"),t=L("label"),o=L("input"),n=B(`
          Opacity: `),a=B(l[2]),s=B("%"),this.h()},l(d){e=C(d,"DIV",{});var i=V(e);t=C(i,"LABEL",{});var c=V(t);o=C(c,"INPUT",{type:!0,min:!0,max:!0}),n=I(c,`
          Opacity: `),a=I(c,l[2]),s=I(c,"%"),c.forEach(h),i.forEach(h),this.h()},h(){w(o,"type","range"),w(o,"min","0"),w(o,"max","100")},m(d,i){k(d,e,i),S(e,t),S(t,o),ye(o,l[2]),S(t,n),S(t,a),S(t,s),u||(f=[E(o,"change",l[9]),E(o,"input",l[9])],u=!0)},p(d,i){i&4&&ye(o,d[2]),i&4&&Xe(a,d[2])},d(d){d&&h(e),u=!1,me(f)}}}function Mt(l){let e,t,o,n,a,s;const u=[Nt,zt],f=[];function d(i,c){return i[1]?0:1}return e=d(l),t=f[e]=u[e](l),{c(){t.c(),o=G()},l(i){t.l(i),o=G()},m(i,c){f[e].m(i,c),k(i,o,c),n=!0,a||(s=E(window,"keydown",l[6]),a=!0)},p(i,[c]){let _=e;e=d(i),e===_?f[e].p(i,c):($(),v(f[_],1,1,()=>{f[_]=null}),x(),t=f[e],t?t.p(i,c):(t=f[e]=u[e](i),t.c()),y(t,1),t.m(o.parentNode,o))},i(i){n||(y(t),n=!0)},o(i){v(t),n=!1},d(i){i&&h(o),f[e].d(i),a=!1,s()}}}function Tt(l,e,t){let o,n,a,s,u;O(l,X,b=>t(1,o=b)),O(l,oe,b=>t(2,n=b)),O(l,le,b=>t(3,a=b)),O(l,Ne,b=>t(11,s=b)),O(l,ze,b=>t(12,u=b));let f;async function d(b){let D=await f.files[0].arrayBuffer(),F=new Blob([new Uint8Array(D)]);A(le,a=URL.createObjectURL(F),a),A(ze,u={lng:0,lat:0},u),A(Ne,s={lng:0,lat:0},s)}function i(){A(le,a=null,a),A(oe,n=100,n)}function c(b){o&&b.key=="Escape"&&(b.stopPropagation(),A(X,o=!1,o))}const _=()=>A(X,o=!1,o);function r(b){Y[b?"unshift":"push"](()=>{f=b,t(0,f)})}function m(){n=Qe(this.value),oe.set(n)}return[f,o,n,a,d,i,c,_,r,m,()=>A(X,o=!0,o)]}class on extends j{constructor(e){super(),q(this,e,Tt,Mt,K,{})}}export{en as B,_t as C,on as G,nn as M,ln as S,tn as a,Ne as b,le as i,oe as o,X as s,ze as t};
