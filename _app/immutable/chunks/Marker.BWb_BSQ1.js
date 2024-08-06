import{s as U,l as Z,e as w,a as D,c as B,b as M,g as N,f as p,q as y,v as j,i as b,h as C,z as L,u as G,m as H,o as Q,y as ge,E as ze,S as Pe,k as K,r as Me,J as q,p as Ae,w as Oe,n as pe,V as Y,B as Te,t as I,d as z,W as re,R as W,X as De,T as Ne}from"./scheduler.Bxdx0f0B.js";import{S as ee,i as te,t as v,b as S,c as le,a as ne,m as ae,d as se,e as Re,g as be,f as ye}from"./index.itOPPQ0R.js";import{v as Ke}from"./ErrorMessage.CB8-YBZf.js";import{e as ce}from"./each.BdQ2bsat.js";import{C as qe}from"./DefaultButton.j5-p4xk5.js";import"./index.BI3lXSuk.js";import{S as Ve}from"./SecondaryButton.C3WEK5d3.js";import{S as Ue}from"./Select.lcPMYwk2.js";import{k as X,u as Fe,d as Je}from"./index.C0DX0990.js";const We=l=>({}),ue=l=>({});function Xe(l){let e,n,s,t,_,o,r,u,c;const m=l[5].default,d=Z(m,l,l[4],null),g=l[5].right,a=Z(g,l,l[4],ue);return{c(){e=w("div"),n=w("input"),s=D(),t=w("label"),d&&d.c(),_=D(),o=w("span"),a&&a.c(),this.h()},l(i){e=B(i,"DIV",{class:!0,style:!0});var h=M(e);n=B(h,"INPUT",{type:!0,class:!0,id:!0}),s=N(h),t=B(h,"LABEL",{class:!0,for:!0,title:!0});var A=M(t);d&&d.l(A),A.forEach(p),_=N(h),o=B(h,"SPAN",{style:!0});var E=M(o);a&&a.l(E),E.forEach(p),h.forEach(p),this.h()},h(){y(n,"type","checkbox"),y(n,"class","govuk-checkboxes__input"),y(n,"id",l[3]),y(t,"class","govuk-label govuk-checkboxes__label"),y(t,"for",l[3]),y(t,"title",l[1]),j(o,"float","right"),y(e,"class","govuk-checkboxes__item"),y(e,"style",l[2])},m(i,h){b(i,e,h),C(e,n),n.checked=l[0],C(e,s),C(e,t),d&&d.m(t,null),C(e,_),C(e,o),a&&a.m(o,null),r=!0,u||(c=[L(n,"change",l[7]),L(n,"change",l[6])],u=!0)},p(i,[h]){h&1&&(n.checked=i[0]),d&&d.p&&(!r||h&16)&&G(d,m,i,i[4],r?Q(m,i[4],h,null):H(i[4]),null),(!r||h&2)&&y(t,"title",i[1]),a&&a.p&&(!r||h&16)&&G(a,g,i,i[4],r?Q(g,i[4],h,We):H(i[4]),ue)},i(i){r||(v(d,i),v(a,i),r=!0)},o(i){S(d,i),S(a,i),r=!1},d(i){i&&p(e),d&&d.d(i),a&&a.d(i),u=!1,ge(c)}}}function Ze(l,e,n){let{$$slots:s={},$$scope:t}=e;const _=Pe(s);let{checked:o}=e,{hint:r=null}=e,c=_.right!==void 0?"float: none":"",m=Ke();function d(a){ze.call(this,l,a)}function g(){o=this.checked,n(0,o)}return l.$$set=a=>{"checked"in a&&n(0,o=a.checked),"hint"in a&&n(1,r=a.hint),"$$scope"in a&&n(4,t=a.$$scope)},[o,r,c,m,t,s,d,g]}class _t extends ee{constructor(e){super(),te(this,e,Ze,Xe,U,{checked:0,hint:1})}}function fe(l,e,n){const s=l.slice();return s[6]=e[n][0],s[7]=e[n][1],s}function je(l){let e;return{c(){e=I("disabled")},l(n){e=z(n,"disabled")},m(n,s){b(n,e,s)},d(n){n&&p(e)}}}function Ge(l){let e;return{c(){e=I("enabled")},l(n){e=z(n,"enabled")},m(n,s){b(n,e,s)},d(n){n&&p(e)}}}function He(l){let e,n=l[7]+"",s,t;return{c(){e=I("Set "),s=I(n),t=I(` API key
      `)},l(_){e=z(_,"Set "),s=z(_,n),t=z(_,` API key
      `)},m(_,o){b(_,e,o),b(_,s,o),b(_,t,o)},p:pe,d(_){_&&(p(e),p(s),p(t))}}}function _e(l){let e,n,s=l[7]+"",t,_,o,r,u;function c(a,i){return $(a[6])?Ge:je}let d=c(l)(l);function g(){return l[5](l[6])}return r=new Ve({props:{$$slots:{default:[He]},$$scope:{ctx:l}}}),r.$on("click",g),{c(){e=w("p"),n=w("u"),t=I(s),_=I(`
        : `),d.c(),o=D(),le(r.$$.fragment)},l(a){e=B(a,"P",{});var i=M(e);n=B(i,"U",{});var h=M(n);t=z(h,s),h.forEach(p),_=z(i,`
        : `),d.l(i),i.forEach(p),o=N(a),ne(r.$$.fragment,a)},m(a,i){b(a,e,i),C(e,n),C(n,t),C(e,_),d.m(e,null),b(a,o,i),ae(r,a,i),u=!0},p(a,i){l=a;const h={};i&1024&&(h.$$scope={dirty:i,ctx:l}),r.$set(h)},i(a){u||(v(r.$$.fragment,a),u=!0)},o(a){S(r.$$.fragment,a),u=!1},d(a){a&&(p(e),p(o)),d.d(),se(r,a)}}}function de(l){let e,n,s=ce([[V,"Bluesky satellite imagery"],[x,"Ordnance Survey"]]),t=[];for(let o=0;o<2;o+=1)t[o]=_e(fe(l,s,o));const _=o=>S(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<2;o+=1)t[o].c();e=q()},l(o){for(let r=0;r<2;r+=1)t[r].l(o);e=q()},m(o,r){for(let u=0;u<2;u+=1)t[u]&&t[u].m(o,r);b(o,e,r),n=!0},p(o,r){if(r&8){s=ce([[V,"Bluesky satellite imagery"],[x,"Ordnance Survey"]]);let u;for(u=0;u<2;u+=1){const c=fe(o,s,u);t[u]?(t[u].p(c,r),v(t[u],1)):(t[u]=_e(c),t[u].c(),v(t[u],1),t[u].m(e.parentNode,e))}for(be(),u=2;u<2;u+=1)_(u);ye()}},i(o){if(!n){for(let r=0;r<2;r+=1)v(t[r]);n=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<2;r+=1)S(t[r]);n=!1},d(o){o&&p(e),Te(t,o)}}}function Qe(l){let e,n,s,t,_=`If you have internal access, you can opt into higher-quality satellite
    imagery.`,o,r=l[0],u,c;function m(a){l[4](a)}let d={label:"Basemap",choices:l[1]};l[2]!==void 0&&(d.value=l[2]),e=new Ue({props:d}),Me.push(()=>Re(e,"value",m));let g=de(l);return{c(){le(e.$$.fragment),s=D(),t=w("p"),t.textContent=_,o=D(),g.c(),u=q()},l(a){ne(e.$$.fragment,a),s=N(a),t=B(a,"P",{"data-svelte-h":!0}),Ae(t)!=="svelte-itr0ad"&&(t.textContent=_),o=N(a),g.l(a),u=q()},m(a,i){ae(e,a,i),b(a,s,i),b(a,t,i),b(a,o,i),g.m(a,i),b(a,u,i),c=!0},p(a,i){const h={};i&2&&(h.choices=a[1]),!n&&i&4&&(n=!0,h.value=a[2],Oe(()=>n=!1)),e.$set(h),i&1&&U(r,r=a[0])?(be(),S(g,1,1,pe),ye(),g=de(a),g.c(),v(g,1),g.m(u.parentNode,u)):g.p(a,i)},i(a){c||(v(e.$$.fragment,a),v(g),c=!0)},o(a){S(e.$$.fragment,a),S(g),c=!1},d(a){a&&(p(s),p(t),p(o),p(u)),se(e,a),g.d(a)}}}function Ye(l){let e,n;return e=new qe({props:{label:"Basemap",$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){le(e.$$.fragment)},l(s){ne(e.$$.fragment,s)},m(s,t){ae(e,s,t),n=!0},p(s,[t]){const _={};t&1031&&(_.$$scope={dirty:t,ctx:s}),e.$set(_)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){se(e,s)}}}let V="bluesky-api-key",x="os-api-key";function $(l){let e=window.localStorage.getItem(l);return e!=null&&e.length>0}function me(){let l=[];return $(V)&&l.push(["bluesky","Bluesky Satellite (12.5cm)"]),$(x)&&l.push(["os-road","OS Road"]),l.push(["maptiler-hybrid","MapTiler Satellite"]),l.push(["maptiler-streets","MapTiler Streets"]),l.push(["maptiler-dataviz","MapTiler Dataviz"]),l.push(["maptiler-uk-openzoomstack-light","OS Open Zoomstack"]),l}function xe(l,e,n){let s;K(l,X,c=>n(2,s=c));let t=0;function _(c){let m=window.prompt("Enter the API key provided to you",window.localStorage.getItem(c)||"");window.localStorage.setItem(c,m||""),n(1,o=me()),n(0,t+=1),m&&m.length>0&&Y(X,s=c==V?"bluesky":"os-road",s)}let o=me();function r(c){s=c,X.set(s)}return[t,o,s,_,r,c=>_(c)]}class dt extends ee{constructor(e){super(),te(this,e,xe,Ye,U,{})}}const $e=l=>({marker:l&8}),he=l=>({marker:l[3]});function et(l){let e,n,s,t,_,o,r;const u=l[19].default,c=Z(u,l,l[18],he);return{c(){e=w("div"),c&&c.c(),this.h()},l(m){e=B(m,"DIV",{tabindex:!0,role:!0});var d=M(e);c&&c.l(d),d.forEach(p),this.h()},h(){y(e,"tabindex",n=l[1]?0:void 0),y(e,"role",s=l[1]?"button":void 0),j(e,"z-index",l[2])},m(m,d){b(m,e,d),c&&c.m(e,null),_=!0,o||(r=[re(l[7].call(null,e)),re(t=tt.call(null,e,l[0])),L(e,"click",W(l[20])),L(e,"dblclick",W(l[21])),L(e,"contextmenu",W(l[22])),L(e,"mouseenter",l[23]),L(e,"mouseleave",l[24]),L(e,"mousemove",l[25]),L(e,"keydown",l[8])],o=!0)},p(m,[d]){c&&c.p&&(!_||d&262152)&&G(c,u,m,m[18],_?Q(u,m[18],d,$e):H(m[18]),he),(!_||d&2&&n!==(n=m[1]?0:void 0))&&y(e,"tabindex",n),(!_||d&2&&s!==(s=m[1]?"button":void 0))&&y(e,"role",s),t&&De(t.update)&&d&1&&t.update.call(null,m[0]),d&4&&j(e,"z-index",m[2])},i(m){_||(v(c,m),_=!0)},o(m){S(c,m),_=!1},d(m){m&&p(e),c&&c.d(m),o=!1,ge(r)}}}function tt(l,e){const n=l.className;function s(t){t?l.className=`${n} ${t}`:l.className=n}return s(e),{update:s}}function lt(l,e,n){let s,t,_,{$$slots:o={},$$scope:r}=e,{marker:u=void 0}=e,{lngLat:c}=e,{class:m=void 0}=e,{interactive:d=!0}=e,{asButton:g=!1}=e,{draggable:a=!1}=e,{feature:i=null}=e,{offset:h=void 0}=e,{zIndex:A=void 0}=e,{rotation:E=0}=e,{opacity:R=1}=e;const ke=Ne(),{map:oe,layerEvent:F,self:J}=Fe();K(l,oe,f=>n(27,_=f)),K(l,F,f=>n(26,s=f)),K(l,J,f=>n(3,t=f));function ve(f){Y(J,t=new Je.Marker({element:f,rotation:E,draggable:a,offset:h,opacity:R.toString()}).setLngLat(c).addTo(_),t),n(11,u=t);const P=()=>k("dragstart"),O=()=>{ie(),k("drag")},T=()=>{ie(),k("dragend")};return a&&(t.on("dragstart",P),t.on("drag",O),t.on("dragend",T)),{destroy(){a&&(t==null||t.off("dragstart",P),t==null||t.off("drag",O),t==null||t.off("dragend",T)),n(11,u=void 0),t==null||t.remove()}}}function ie(){let f=t==null?void 0:t.getLngLat();f&&(Array.isArray(c)?n(10,c=[f.lng,f.lat]):c&&"lon"in c?n(10,c={lon:f.lng,lat:f.lat}):n(10,c=f))}function Se(f){f.key===" "&&(f.preventDefault(),f.stopPropagation(),k("click"))}function k(f){if(!d)return;let P=t==null?void 0:t.getLngLat();if(!P)return;const O=[P.lng,P.lat];let T={map:_,marker:t,lngLat:O,features:[{type:"Feature",properties:(i==null?void 0:i.properties)??{},geometry:{type:"Point",coordinates:O}}]};Y(F,s={...T,layerType:"marker",type:f},s),ke(f,T)}const Le=()=>k("click"),Ce=()=>k("dblclick"),we=()=>k("contextmenu"),Be=f=>{k("mouseenter")},Ee=()=>{k("mouseleave")},Ie=()=>k("mousemove");return l.$$set=f=>{"marker"in f&&n(11,u=f.marker),"lngLat"in f&&n(10,c=f.lngLat),"class"in f&&n(0,m=f.class),"interactive"in f&&n(12,d=f.interactive),"asButton"in f&&n(1,g=f.asButton),"draggable"in f&&n(13,a=f.draggable),"feature"in f&&n(14,i=f.feature),"offset"in f&&n(15,h=f.offset),"zIndex"in f&&n(2,A=f.zIndex),"rotation"in f&&n(16,E=f.rotation),"opacity"in f&&n(17,R=f.opacity),"$$scope"in f&&n(18,r=f.$$scope)},l.$$.update=()=>{l.$$.dirty&1032&&(t==null||t.setLngLat(c)),l.$$.dirty&32776&&(t==null||t.setOffset(h??[0,0])),l.$$.dirty&65544&&(t==null||t.setRotation(E)),l.$$.dirty&131080&&(t==null||t.setOpacity(R.toString()))},[m,g,A,t,oe,F,J,ve,Se,k,c,u,d,a,i,h,E,R,r,o,Le,Ce,we,Be,Ee,Ie]}class mt extends ee{constructor(e){super(),te(this,e,lt,et,U,{marker:11,lngLat:10,class:0,interactive:12,asButton:1,draggable:13,feature:14,offset:15,zIndex:2,rotation:16,opacity:17})}}export{dt as B,_t as C,mt as M};
