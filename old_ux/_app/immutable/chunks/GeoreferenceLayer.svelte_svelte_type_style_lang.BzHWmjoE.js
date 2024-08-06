import{s as K,l as ie,e as L,a as N,c as C,b as U,g as z,f as h,p as w,q as J,i as k,h as S,z as E,u as re,r as ue,v as fe,y as pe,D as Ze,a9 as He,k as G,w as $,E as V,m as ce,x as ge,n as he,G as Je,t as I,d as B,a7 as Ge,S as Oe,aa as ye,ab as oe,Z as Ye,T as A,ac as Qe,F as ve,j as Xe}from"./scheduler.ytQcc2rf.js";import{S as q,i as W,t as y,b as v,c as O,a as R,m as M,d as T,e as be,g as x,f as ee}from"./index.D9yYtTfk.js";import{e as we}from"./each.2RvRdhFj.js";import{C as $e}from"./CollapsibleCard.Bf0oqccF.js";import{S as Re}from"./SecondaryButton.Dq9MsXNi.js";import{S as xe}from"./Select.BzX3N09F.js";/* empty css                                            */import{n as Se,o as et,p as tt,q as nt,l as Me,j as lt,k as ot}from"./index.Cq3K9TAg.js";import{v as at}from"./v4.D8aEg3BZ.js";import{R as st}from"./Radio.BwqxTJTI.js";import{B as it}from"./ClickableCard.R7NkEgQq.js";import{D as rt}from"./DefaultButton.DeS4Ykkw.js";import{F as ut}from"./FormElement.CQDLUqPU.js";import{W as ft}from"./WarningButton.C6jnTAfb.js";import{w as Y}from"./index.DL7waCk_.js";const ct=l=>({}),Le=l=>({});function dt(l){let e,t,o,n,a,s,u,f,d;const i=l[5].default,c=ie(i,l,l[4],null),_=l[5].right,r=ie(_,l,l[4],Le);return{c(){e=L("div"),t=L("input"),o=N(),n=L("label"),c&&c.c(),a=N(),s=L("span"),r&&r.c(),this.h()},l(m){e=C(m,"DIV",{class:!0,style:!0});var p=U(e);t=C(p,"INPUT",{type:!0,class:!0,id:!0}),o=z(p),n=C(p,"LABEL",{class:!0,for:!0,title:!0});var b=U(n);c&&c.l(b),b.forEach(h),a=z(p),s=C(p,"SPAN",{style:!0});var P=U(s);r&&r.l(P),P.forEach(h),p.forEach(h),this.h()},h(){w(t,"type","checkbox"),w(t,"class","govuk-checkboxes__input"),w(t,"id",l[3]),w(n,"class","govuk-label govuk-checkboxes__label"),w(n,"for",l[3]),w(n,"title",l[1]),J(s,"float","right"),w(e,"class","govuk-checkboxes__item"),w(e,"style",l[2])},m(m,p){k(m,e,p),S(e,t),t.checked=l[0],S(e,o),S(e,n),c&&c.m(n,null),S(e,a),S(e,s),r&&r.m(s,null),u=!0,f||(d=[E(t,"change",l[7]),E(t,"change",l[6])],f=!0)},p(m,[p]){p&1&&(t.checked=m[0]),c&&c.p&&(!u||p&16)&&re(c,i,m,m[4],u?fe(i,m[4],p,null):ue(m[4]),null),(!u||p&2)&&w(n,"title",m[1]),r&&r.p&&(!u||p&16)&&re(r,_,m,m[4],u?fe(_,m[4],p,ct):ue(m[4]),Le)},i(m){u||(y(c,m),y(r,m),u=!0)},o(m){v(c,m),v(r,m),u=!1},d(m){m&&h(e),c&&c.d(m),r&&r.d(m),f=!1,pe(d)}}}function mt(l,e,t){let{$$slots:o={},$$scope:n}=e;const a=He(o);let{checked:s}=e,{hint:u=null}=e,d=a.right!==void 0?"float: none":"",i=at();function c(r){Ze.call(this,l,r)}function _(){s=this.checked,t(0,s)}return l.$$set=r=>{"checked"in r&&t(0,s=r.checked),"hint"in r&&t(1,u=r.hint),"$$scope"in r&&t(4,n=r.$$scope)},[s,u,d,i,n,o,c,_]}class _t extends q{constructor(e){super(),W(this,e,mt,dt,K,{checked:0,hint:1})}}function Ce(l,e,t){const o=l.slice();return o[6]=e[t][0],o[7]=e[t][1],o}function pt(l){let e;return{c(){e=I("disabled")},l(t){e=B(t,"disabled")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function gt(l){let e;return{c(){e=I("enabled")},l(t){e=B(t,"enabled")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function ht(l){let e,t=l[7]+"",o,n;return{c(){e=I("Set "),o=I(t),n=I(` API key
      `)},l(a){e=B(a,"Set "),o=B(a,t),n=B(a,` API key
      `)},m(a,s){k(a,e,s),k(a,o,s),k(a,n,s)},p:he,d(a){a&&(h(e),h(o),h(n))}}}function Ee(l){let e,t,o=l[7]+"",n,a,s,u,f;function d(r,m){return _e(r[6])?gt:pt}let c=d(l)(l);function _(){return l[5](l[6])}return u=new Re({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}}),u.$on("click",_),{c(){e=L("p"),t=L("u"),n=I(o),a=I(`
        : `),c.c(),s=N(),O(u.$$.fragment)},l(r){e=C(r,"P",{});var m=U(e);t=C(m,"U",{});var p=U(t);n=B(p,o),p.forEach(h),a=B(m,`
        : `),c.l(m),m.forEach(h),s=z(r),R(u.$$.fragment,r)},m(r,m){k(r,e,m),S(e,t),S(t,n),S(e,a),c.m(e,null),k(r,s,m),M(u,r,m),f=!0},p(r,m){l=r;const p={};m&1024&&(p.$$scope={dirty:m,ctx:l}),u.$set(p)},i(r){f||(y(u.$$.fragment,r),f=!0)},o(r){v(u.$$.fragment,r),f=!1},d(r){r&&(h(e),h(s)),c.d(),T(u,r)}}}function Ie(l){let e,t,o=we([[de,"Bluesky"],[me,"Ordnance Survey"]]),n=[];for(let s=0;s<2;s+=1)n[s]=Ee(Ce(l,o,s));const a=s=>v(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<2;s+=1)n[s].c();e=V()},l(s){for(let u=0;u<2;u+=1)n[u].l(s);e=V()},m(s,u){for(let f=0;f<2;f+=1)n[f]&&n[f].m(s,u);k(s,e,u),t=!0},p(s,u){if(u&8){o=we([[de,"Bluesky"],[me,"Ordnance Survey"]]);let f;for(f=0;f<2;f+=1){const d=Ce(s,o,f);n[f]?(n[f].p(d,u),y(n[f],1)):(n[f]=Ee(d),n[f].c(),y(n[f],1),n[f].m(e.parentNode,e))}for(x(),f=2;f<2;f+=1)a(f);ee()}},i(s){if(!t){for(let u=0;u<2;u+=1)y(n[u]);t=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<2;u+=1)v(n[u]);t=!1},d(s){s&&h(e),Je(n,s)}}}function bt(l){let e,t,o,n,a=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,s,u=l[0],f,d;function i(r){l[4](r)}let c={label:"Basemap",choices:l[1]};l[2]!==void 0&&(c.value=l[2]),e=new xe({props:c}),$.push(()=>be(e,"value",i));let _=Ie(l);return{c(){O(e.$$.fragment),o=N(),n=L("p"),n.textContent=a,s=N(),_.c(),f=V()},l(r){R(e.$$.fragment,r),o=z(r),n=C(r,"P",{"data-svelte-h":!0}),ce(n)!=="svelte-itr0ad"&&(n.textContent=a),s=z(r),_.l(r),f=V()},m(r,m){M(e,r,m),k(r,o,m),k(r,n,m),k(r,s,m),_.m(r,m),k(r,f,m),d=!0},p(r,m){const p={};m&2&&(p.choices=r[1]),!t&&m&4&&(t=!0,p.value=r[2],ge(()=>t=!1)),e.$set(p),m&1&&K(u,u=r[0])?(x(),v(_,1,1,he),ee(),_=Ie(r),_.c(),y(_,1),_.m(f.parentNode,f)):_.p(r,m)},i(r){d||(y(e.$$.fragment,r),y(_),d=!0)},o(r){v(e.$$.fragment,r),v(_),d=!1},d(r){r&&(h(o),h(n),h(s),h(f)),T(e,r),_.d(r)}}}function kt(l){let e,t;return e=new $e({props:{label:"Basemap",$$slots:{default:[bt]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment)},l(o){R(e.$$.fragment,o)},m(o,n){M(e,o,n),t=!0},p(o,[n]){const a={};n&1031&&(a.$$scope={dirty:n,ctx:o}),e.$set(a)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}let de="bluesky-api-key",me="os-api-key";function _e(l){let e=window.localStorage.getItem(l);return e!=null&&e.length>0}function Be(){let l=[];return _e(de)&&l.push(["bluesky","Bluesky Satellite (12.5cm)"]),_e(me)&&l.push(["os-road","OS Road"]),l.push(["maptiler-hybrid","MapTiler Satellite"]),l.push(["maptiler-streets","MapTiler Streets"]),l.push(["maptiler-dataviz","MapTiler Dataviz"]),l.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),l}function yt(l,e,t){let o;G(l,Se,d=>t(2,o=d));let n=0;function a(d){let i=window.prompt("Enter the API key provided to you",window.localStorage.getItem(d)||"");window.localStorage.setItem(d,i||""),t(1,s=Be()),t(0,n+=1)}let s=Be();function u(d){o=d,Se.set(o)}return[n,s,o,a,u,d=>a(d)]}class tn extends q{constructor(e){super(),W(this,e,yt,kt,K,{})}}function vt(l,e,t){let o;const n=Ge();let{layer:a=void 0}=e;const{map:s}=et();G(l,s,i=>t(2,o=i));function u(i){n(i.type,{...i,map:s})}const f=["click","dblclick","mousedown","mouseup","mousemove","mouseenter","mouseleave","contextmenu","mouseover","mouseout"],d=["click","dblclick","contextmenu","mousemove","movestart","moveend","zoomstart","zoom","zoomend"];return Oe(()=>{if(o)if(a)for(const i of f)o.off(i,a,u);else for(const i of d)o.off(i,u)}),l.$$set=i=>{"layer"in i&&t(1,a=i.layer)},l.$$.update=()=>{if(l.$$.dirty&6&&o)if(a)for(const i of f)o.on(i,a,u);else for(const i of d)o.on(i,u)},[s,a,o]}class nn extends q{constructor(e){super(),W(this,e,vt,null,K,{layer:1})}}const wt=l=>({marker:l&8}),Pe=l=>({marker:l[3]});function St(l){let e,t,o,n,a,s,u;const f=l[19].default,d=ie(f,l,l[18],Pe);return{c(){e=L("div"),d&&d.c(),this.h()},l(i){e=C(i,"DIV",{tabindex:!0,role:!0});var c=U(e);d&&d.l(c),c.forEach(h),this.h()},h(){w(e,"tabindex",t=l[1]?0:void 0),w(e,"role",o=l[1]?"button":void 0),J(e,"z-index",l[2])},m(i,c){k(i,e,c),d&&d.m(e,null),a=!0,s||(u=[ye(l[7].call(null,e)),ye(n=Lt.call(null,e,l[0])),E(e,"click",oe(l[20])),E(e,"dblclick",oe(l[21])),E(e,"contextmenu",oe(l[22])),E(e,"mouseenter",l[23]),E(e,"mouseleave",l[24]),E(e,"mousemove",l[25]),E(e,"keydown",l[8])],s=!0)},p(i,[c]){d&&d.p&&(!a||c&262152)&&re(d,f,i,i[18],a?fe(f,i[18],c,wt):ue(i[18]),Pe),(!a||c&2&&t!==(t=i[1]?0:void 0))&&w(e,"tabindex",t),(!a||c&2&&o!==(o=i[1]?"button":void 0))&&w(e,"role",o),n&&Ye(n.update)&&c&1&&n.update.call(null,i[0]),c&4&&J(e,"z-index",i[2])},i(i){a||(y(d,i),a=!0)},o(i){v(d,i),a=!1},d(i){i&&h(e),d&&d.d(i),s=!1,pe(u)}}}function Lt(l,e){const t=l.className;function o(n){n?l.className=`${t} ${n}`:l.className=t}return o(e),{update:o}}function Ct(l,e,t){let o,n,a,{$$slots:s={},$$scope:u}=e,{marker:f=void 0}=e,{lngLat:d}=e,{class:i=void 0}=e,{interactive:c=!0}=e,{asButton:_=!1}=e,{draggable:r=!1}=e,{feature:m=null}=e,{offset:p=void 0}=e,{zIndex:b=void 0}=e,{rotation:P=0}=e,{opacity:j=1}=e;const te=Ge(),{map:Q,layerEvent:ne,self:le}=tt();G(l,Q,g=>t(27,a=g)),G(l,ne,g=>t(26,o=g)),G(l,le,g=>t(3,n=g));function Te(g){A(le,n=new nt.Marker({element:g,rotation:P,draggable:r,offset:p,opacity:j.toString()}).setLngLat(d).addTo(a),n),t(11,f=n);const F=()=>D("dragstart"),Z=()=>{ke(),D("drag")},H=()=>{ke(),D("dragend")};return r&&(n.on("dragstart",F),n.on("drag",Z),n.on("dragend",H)),{destroy(){r&&(n==null||n.off("dragstart",F),n==null||n.off("drag",Z),n==null||n.off("dragend",H)),t(11,f=void 0),n==null||n.remove()}}}function ke(){let g=n==null?void 0:n.getLngLat();g&&(Array.isArray(d)?t(10,d=[g.lng,g.lat]):d&&"lon"in d?t(10,d={lon:g.lng,lat:g.lat}):t(10,d=g))}function Ue(g){g.key===" "&&(g.preventDefault(),g.stopPropagation(),D("click"))}function D(g){if(!c)return;let F=n==null?void 0:n.getLngLat();if(!F)return;const Z=[F.lng,F.lat];let H={map:a,marker:n,lngLat:Z,features:[{type:"Feature",properties:(m==null?void 0:m.properties)??{},geometry:{type:"Point",coordinates:Z}}]};A(ne,o={...H,layerType:"marker",type:g},o),te(g,H)}const Ve=()=>D("click"),Ke=()=>D("dblclick"),je=()=>D("contextmenu"),Fe=g=>{D("mouseenter")},qe=()=>{D("mouseleave")},We=()=>D("mousemove");return l.$$set=g=>{"marker"in g&&t(11,f=g.marker),"lngLat"in g&&t(10,d=g.lngLat),"class"in g&&t(0,i=g.class),"interactive"in g&&t(12,c=g.interactive),"asButton"in g&&t(1,_=g.asButton),"draggable"in g&&t(13,r=g.draggable),"feature"in g&&t(14,m=g.feature),"offset"in g&&t(15,p=g.offset),"zIndex"in g&&t(2,b=g.zIndex),"rotation"in g&&t(16,P=g.rotation),"opacity"in g&&t(17,j=g.opacity),"$$scope"in g&&t(18,u=g.$$scope)},l.$$.update=()=>{l.$$.dirty&1032&&(n==null||n.setLngLat(d)),l.$$.dirty&32776&&(n==null||n.setOffset(p??[0,0])),l.$$.dirty&65544&&(n==null||n.setRotation(P)),l.$$.dirty&131080&&(n==null||n.setOpacity(j.toString()))},[i,_,b,n,Q,ne,le,Te,Ue,D,d,f,c,r,m,p,P,j,u,s,Ve,Ke,je,Fe,qe,We]}class ln extends q{constructor(e){super(),W(this,e,Ct,St,K,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}const{window:Et}=Me;function It(l){let e;return{c(){e=I("StreetView")},l(t){e=B(t,"StreetView")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function De(l){let e,t,o;function n(s){l[5](s)}let a={legend:"Source",choices:[["google","Google StreetView"],["bing","Bing Streetside"]],inlineSmall:!0};return l[1]!==void 0&&(a.value=l[1]),e=new st({props:a}),$.push(()=>be(e,"value",n)),{c(){O(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,u){M(e,s,u),o=!0},p(s,u){const f={};!t&&u&2&&(t=!0,f.value=s[1],ge(()=>t=!1)),e.$set(f)},i(s){o||(y(e.$$.fragment,s),o=!0)},o(s){v(e.$$.fragment,s),o=!1},d(s){T(e,s)}}}function Bt(l){let e,t,o,n,a,s,u;function f(c){l[4](c)}let d={$$slots:{default:[It]},$$scope:{ctx:l}};l[0]!==void 0&&(d.checked=l[0]),e=new _t({props:d}),$.push(()=>be(e,"checked",f));let i=l[0]&&De(l);return{c(){O(e.$$.fragment),o=N(),i&&i.c(),n=V()},l(c){R(e.$$.fragment,c),o=z(c),i&&i.l(c),n=V()},m(c,_){M(e,c,_),k(c,o,_),i&&i.m(c,_),k(c,n,_),a=!0,s||(u=E(Et,"keydown",l[2]),s=!0)},p(c,[_]){const r={};_&512&&(r.$$scope={dirty:_,ctx:c}),!t&&_&1&&(t=!0,r.checked=c[0],ge(()=>t=!1)),e.$set(r),c[0]?i?(i.p(c,_),_&1&&y(i,1)):(i=De(c),i.c(),y(i,1),i.m(n.parentNode,n)):i&&(x(),v(i,1,1,()=>{i=null}),ee())},i(c){a||(y(e.$$.fragment,c),y(i),a=!0)},o(c){v(e.$$.fragment,c),v(i),a=!1},d(c){c&&(h(o),h(n)),T(e,c),i&&i.d(c),s=!1,u()}}}function Pt(l,e,t){let{map:o}=e,{enabled:n=!1}=e,a="google";function s(){o&&(o.on("click",f),o.getCanvas().style.cursor="zoom-in")}function u(){o&&(o.off("click",f),o.getCanvas().style.cursor="auto")}Oe(u);function f(_){window.open(a=="google"?lt(_.lngLat.toArray()):ot(_.lngLat.toArray()),"_blank"),t(0,n=!1)}function d(_){n&&_.key=="Escape"&&t(0,n=!1)}function i(_){n=_,t(0,n)}function c(_){a=_,t(1,a)}return l.$$set=_=>{"map"in _&&t(3,o=_.map),"enabled"in _&&t(0,n=_.enabled)},l.$$.update=()=>{l.$$.dirty&1&&(n?s():u())},[n,a,d,o,i,c]}class on extends q{constructor(e){super(),W(this,e,Pt,Bt,K,{map:3,enabled:0})}}const X=Y(!1),ae=Y(null),se=Y(100),Ne=Y({lng:0,lat:0}),ze=Y({lng:0,lat:0}),{window:Dt}=Me;function Nt(l){let e,t;return e=new Re({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),e.$on("click",l[10]),{c(){O(e.$$.fragment)},l(o){R(e.$$.fragment,o)},m(o,n){M(e,o,n),t=!0},p(o,n){const a={};n&8192&&(a.$$scope={dirty:n,ctx:o}),e.$set(a)},i(o){t||(y(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function zt(l){let e,t,o="Georeference an image",n,a,s,u,f,d,i,c=`Note this image isn't saved as part of this scheme. When you close this
      page, it'll be lost.`,_;a=new it({props:{$$slots:{default:[Rt]},$$scope:{ctx:l}}}),u=new ut({props:{label:"Load an image",id:"load-image",$$slots:{default:[Mt]},$$scope:{ctx:l}}});let r=l[3]&&Ae(l);return{c(){e=L("div"),t=L("h2"),t.textContent=o,n=N(),O(a.$$.fragment),s=N(),O(u.$$.fragment),f=N(),r&&r.c(),d=N(),i=L("p"),i.textContent=c,this.h()},l(m){e=C(m,"DIV",{style:!0});var p=U(e);t=C(p,"H2",{"data-svelte-h":!0}),ce(t)!=="svelte-fociiu"&&(t.textContent=o),n=z(p),R(a.$$.fragment,p),s=z(p),R(u.$$.fragment,p),f=z(p),r&&r.l(p),d=z(p),i=C(p,"P",{"data-svelte-h":!0}),ce(i)!=="svelte-d8uklv"&&(i.textContent=c),p.forEach(h),this.h()},h(){J(e,"border","1px solid black"),J(e,"padding","4px")},m(m,p){k(m,e,p),S(e,t),S(e,n),M(a,e,null),S(e,s),M(u,e,null),S(e,f),r&&r.m(e,null),S(e,d),S(e,i),_=!0},p(m,p){const b={};p&8202&&(b.$$scope={dirty:p,ctx:m}),a.$set(b);const P={};p&8193&&(P.$$scope={dirty:p,ctx:m}),u.$set(P),m[3]?r?r.p(m,p):(r=Ae(m),r.c(),r.m(e,d)):r&&(r.d(1),r=null)},i(m){_||(y(a.$$.fragment,m),y(u.$$.fragment,m),_=!0)},o(m){v(a.$$.fragment,m),v(u.$$.fragment,m),_=!1},d(m){m&&h(e),T(a),T(u),r&&r.d()}}}function At(l){let e;return{c(){e=I("Georeference an image")},l(t){e=B(t,"Georeference an image")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function Gt(l){let e;return{c(){e=I("Save")},l(t){e=B(t,"Save")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function Ot(l){let e;return{c(){e=I("Delete")},l(t){e=B(t,"Delete")},m(t,o){k(t,e,o)},d(t){t&&h(e)}}}function Rt(l){let e,t,o,n;return e=new rt({props:{$$slots:{default:[Gt]},$$scope:{ctx:l}}}),e.$on("click",l[7]),o=new ft({props:{disabled:!l[3],$$slots:{default:[Ot]},$$scope:{ctx:l}}}),o.$on("click",l[5]),{c(){O(e.$$.fragment),t=N(),O(o.$$.fragment)},l(a){R(e.$$.fragment,a),t=z(a),R(o.$$.fragment,a)},m(a,s){M(e,a,s),k(a,t,s),M(o,a,s),n=!0},p(a,s){const u={};s&8192&&(u.$$scope={dirty:s,ctx:a}),e.$set(u);const f={};s&8&&(f.disabled=!a[3]),s&8192&&(f.$$scope={dirty:s,ctx:a}),o.$set(f)},i(a){n||(y(e.$$.fragment,a),y(o.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),v(o.$$.fragment,a),n=!1},d(a){a&&h(t),T(e,a),T(o,a)}}}function Mt(l){let e,t,o;return{c(){e=L("input"),this.h()},l(n){e=C(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){w(e,"class","govuk-file-upload"),w(e,"id","load-image"),w(e,"type","file")},m(n,a){k(n,e,a),l[8](e),t||(o=E(e,"change",l[4]),t=!0)},p:he,d(n){n&&h(e),l[8](null),t=!1,o()}}}function Ae(l){let e,t,o,n,a,s,u,f;return{c(){e=L("div"),t=L("label"),o=L("input"),n=I(`
          Opacity: `),a=I(l[2]),s=I("%"),this.h()},l(d){e=C(d,"DIV",{});var i=U(e);t=C(i,"LABEL",{});var c=U(t);o=C(c,"INPUT",{type:!0,min:!0,max:!0}),n=B(c,`
          Opacity: `),a=B(c,l[2]),s=B(c,"%"),c.forEach(h),i.forEach(h),this.h()},h(){w(o,"type","range"),w(o,"min","0"),w(o,"max","100")},m(d,i){k(d,e,i),S(e,t),S(t,o),ve(o,l[2]),S(t,n),S(t,a),S(t,s),u||(f=[E(o,"change",l[9]),E(o,"input",l[9])],u=!0)},p(d,i){i&4&&ve(o,d[2]),i&4&&Xe(a,d[2])},d(d){d&&h(e),u=!1,pe(f)}}}function Tt(l){let e,t,o,n,a,s;const u=[zt,Nt],f=[];function d(i,c){return i[1]?0:1}return e=d(l),t=f[e]=u[e](l),{c(){t.c(),o=V()},l(i){t.l(i),o=V()},m(i,c){f[e].m(i,c),k(i,o,c),n=!0,a||(s=E(Dt,"keydown",l[6]),a=!0)},p(i,[c]){let _=e;e=d(i),e===_?f[e].p(i,c):(x(),v(f[_],1,1,()=>{f[_]=null}),ee(),t=f[e],t?t.p(i,c):(t=f[e]=u[e](i),t.c()),y(t,1),t.m(o.parentNode,o))},i(i){n||(y(t),n=!0)},o(i){v(t),n=!1},d(i){i&&h(o),f[e].d(i),a=!1,s()}}}function Ut(l,e,t){let o,n,a,s,u;G(l,X,b=>t(1,o=b)),G(l,se,b=>t(2,n=b)),G(l,ae,b=>t(3,a=b)),G(l,ze,b=>t(11,s=b)),G(l,Ne,b=>t(12,u=b));let f;async function d(b){i();let P=await f.files[0].arrayBuffer(),j=new Blob([new Uint8Array(P)]);A(ae,a=URL.createObjectURL(j),a),A(Ne,u={lng:0,lat:0},u),A(ze,s={lng:0,lat:0},s);let te=f.files[0].name.toLowerCase();[".gif",".jpg",".jpeg",".png"].some(Q=>te.endsWith(Q))||window.alert("You can only georeference image files (GIF, JPEG, PNG). If you don't see anything on the map, try a different file type.")}function i(){A(ae,a=null,a),A(se,n=100,n)}function c(b){o&&b.key=="Escape"&&(b.stopPropagation(),A(X,o=!1,o))}const _=()=>A(X,o=!1,o);function r(b){$[b?"unshift":"push"](()=>{f=b,t(0,f)})}function m(){n=Qe(this.value),se.set(n)}return[f,o,n,a,d,i,c,_,r,m,()=>A(X,o=!0,o)]}class an extends q{constructor(e){super(),W(this,e,Ut,Tt,K,{})}}export{tn as B,_t as C,an as G,ln as M,on as S,nn as a,ze as b,ae as i,se as o,X as s,Ne as t};
