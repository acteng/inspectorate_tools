import{s as se,D as $,i as U,f as L,X as Le,U as Ce,k as j,T as Me,Y as Ee,V as Te,e as fe,c as le,b as ue,l as ce,u as re,m as ie,o as ae,r as Pe,q as Ie}from"./scheduler.DGwhun8C.js";import{S as me,i as _e,t as p,g as he,b as k,f as pe,c as je,a as De,m as Be,d as Se}from"./index.B2vZYn3d.js";import{m as Ae,d as y,i as He}from"./index.BrqEEF4c.js";const We=l=>({features:l[0]&16,data:l[0]&16,map:l[0]&4,close:l[0]&1}),ee=l=>{var f;return{features:l[4],data:(f=l[4])==null?void 0:f[0],map:l[2],close:l[31]}};function te(l){let f,e,t=(l[4]||l[3]instanceof y.Marker)&&ne(l);return{c(){f=fe("div"),t&&t.c()},l(o){f=le(o,"DIV",{});var s=ue(f);t&&t.l(s),s.forEach(L)},m(o,s){U(o,f,s),t&&t.m(f,null),l[32](f),e=!0},p(o,s){o[4]||o[3]instanceof y.Marker?t?(t.p(o,s),s[0]&24&&p(t,1)):(t=ne(o),t.c(),p(t,1),t.m(f,null)):t&&(he(),k(t,1,1,()=>{t=null}),pe())},i(o){e||(p(t),e=!0)},o(o){k(t),e=!1},d(o){o&&L(f),t&&t.d(),l[32](null)}}}function ne(l){let f;const e=l[30].default,t=ce(e,l,l[29],ee);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),f=!0},p(o,s){t&&t.p&&(!f||s[0]&536870933)&&re(t,e,o,o[29],f?ae(e,o[29],s,We):ie(o[29]),ee)},i(o){f||(p(t,o),f=!0)},o(o){k(t,o),f=!1},d(o){t&&t.d(o)}}}function Ve(l){let f,e,t=l[9].default&&te(l);return{c(){t&&t.c(),f=$()},l(o){t&&t.l(o),f=$()},m(o,s){t&&t.m(o,s),U(o,f,s),e=!0},p(o,s){o[9].default?t?(t.p(o,s),s[0]&512&&p(t,1)):(t=te(o),t.c(),p(t,1),t.m(f.parentNode,f)):t&&(he(),k(t,1,1,()=>{t=null}),pe())},i(o){e||(p(t),e=!0)},o(o){k(t),e=!1},d(o){o&&L(f),t&&t.d(o)}}}function qe(l,f,e){let t,o,s,u,r,X,{$$slots:Y={},$$scope:z}=f;const de=Le(Y);let{closeButton:D=void 0}=f,{closeOnClickOutside:C=!0}=f,{closeOnClickInside:M=!1}=f,{closeOnMove:B=!1}=f,{openOn:a="click"}=f,{openIfTopMost:S=!0}=f,{focusAfterOpen:A=!0}=f,{anchor:H=void 0}=f,{offset:W=void 0}=f,{popupClass:V=void 0}=f,{maxWidth:q=void 0}=f,{lngLat:m=void 0}=f,{html:E=void 0}=f,{open:i=!1}=f;const w=Ce(),{map:F,popupTarget:J,layerEvent:T,layer:K,eventTopMost:ge}=Ae();j(l,F,n=>e(2,s=n)),j(l,J,n=>e(3,r=n)),j(l,T,n=>e(28,u=n)),j(l,K,n=>e(35,X=n));const ke=["click","dblclick","contextmenu"];let c,P=!1,d;function Oe(){if(!c)return;let n=c.getElement();!n||n===d||(d=n,a==="hover"&&(d.style.pointerEvents="none"),d.addEventListener("mouseenter",()=>{e(24,P=!0)},{passive:!0}),d.addEventListener("mouseleave",()=>{e(24,P=!1)},{passive:!0}),d.addEventListener("click",()=>{M&&e(0,i=!1)},{passive:!0}))}Me(()=>{if(s)return s.on("click",I),s.on("contextmenu",I),typeof r=="string"&&(s.on("click",r,g),s.on("dblclick",r,g),s.on("contextmenu",r,g),s.on("mousemove",r,x),s.on("mouseleave",r,v),s.on("touchstart",r,R),s.on("touchend",r,Z)),()=>{s!=null&&s.loaded()&&(c==null||c.remove(),s.off("click",I),s.off("contextmenu",I),r instanceof y.Marker?r.getPopup()===c&&r.setPopup(void 0):typeof r=="string"&&(s.off("click",r,g),s.off("dblclick",r,g),s.off("contextmenu",r,g),s.off("mousemove",r,x),s.off("mouseleave",r,v),s.off("touchstart",r,R),s.off("touchend",r,Z)))}});function Q(n){return S?!("marker"in n)&&!He(n)&&ge(n)!==X:!1}let _=null,h="normal";function g(n){n.type===a&&(Q(n)||("layerType"in n?n.layerType==="deckgl"?(e(10,m=n.coordinate),e(4,_=n.object?[n.object]:null)):(e(10,m=n.lngLat),e(4,_=n.features??[])):(e(10,m=n.lngLat),e(4,_=n.features??[])),setTimeout(()=>e(0,i=!0))))}let O=null;function R(n){O=n.point}function Z(n){if(!O||a!=="hover")return;let N=O.dist(n.point);O=null,N<3&&(e(10,m=n.lngLat),e(4,_=n.features??[]),c.isOpen()?e(25,h="justOpened"):(e(25,h="opening"),e(0,i=!0)))}function v(n){a!=="hover"||O||h!=="normal"||(e(0,i=!1),e(4,_=null))}function x(n){if(!(a!=="hover"||O||h!=="normal")){if(Q(n)){e(0,i=!1),e(4,_=null);return}e(0,i=!0),e(4,_=n.features??[]),e(10,m=n.lngLat)}}function I(n){if(h==="justOpened"){e(25,h="normal");return}if(!C)return;let N=[d,r instanceof y.Marker?r==null?void 0:r.getElement():null];i&&c.isOpen()&&!N.some(G=>G==null?void 0:G.contains(n.originalEvent.target))&&(n.type==="contextmenu"&&a==="contextmenu"||n.type!=="contextmenu")&&e(0,i=!1)}Ee(()=>{s&&(c!=null&&c.isOpen())&&c.remove()});let b;const ye=()=>e(0,i=!1);function be(n){Pe[n?"unshift":"push"](()=>{b=n,e(1,b)})}return l.$$set=n=>{"closeButton"in n&&e(11,D=n.closeButton),"closeOnClickOutside"in n&&e(12,C=n.closeOnClickOutside),"closeOnClickInside"in n&&e(13,M=n.closeOnClickInside),"closeOnMove"in n&&e(14,B=n.closeOnMove),"openOn"in n&&e(15,a=n.openOn),"openIfTopMost"in n&&e(16,S=n.openIfTopMost),"focusAfterOpen"in n&&e(17,A=n.focusAfterOpen),"anchor"in n&&e(18,H=n.anchor),"offset"in n&&e(19,W=n.offset),"popupClass"in n&&e(20,V=n.popupClass),"maxWidth"in n&&e(21,q=n.maxWidth),"lngLat"in n&&e(10,m=n.lngLat),"html"in n&&e(22,E=n.html),"open"in n&&e(0,i=n.open),"$$scope"in n&&e(29,z=n.$$scope)},l.$$.update=()=>{if(l.$$.dirty[0]&14336&&e(27,t=D??(!C&&!M)),l.$$.dirty[0]&146685952&&(c||(e(23,c=new y.Popup({closeButton:t,closeOnClick:!1,closeOnMove:B,focusAfterOpen:A,maxWidth:q,className:V,anchor:H,offset:W})),d=c.getElement(),c.on("open",()=>{e(0,i=!0),Oe(),w("open",c)}),c.on("close",()=>{e(0,i=!1),w("close",c)}),c.on("hover",()=>{w("hover",c)}))),l.$$.dirty[0]&8421384&&c&&r instanceof y.Marker&&(a==="click"?r.setPopup(c):r.getPopup()===c&&r.setPopup(void 0)),l.$$.dirty[0]&268468224&&ke.includes(a)&&(u==null?void 0:u.type)===a&&(g(u),Te(T,u=null,u)),l.$$.dirty[0]&268468224&&e(26,o=a==="hover"&&((u==null?void 0:u.type)==="mousemove"||(u==null?void 0:u.type)==="mouseenter")),l.$$.dirty[0]&352354304&&a==="hover"&&T&&(o&&u&&(u.layerType==="deckgl"?(e(10,m=u.coordinate),e(4,_=u.object?[u.object]:null)):(e(10,m=u.lngLat),e(4,_=u.features??[]))),e(0,i=(o||P)??!1)),l.$$.dirty[0]&12582914&&(b?c.setDOMContent(b):E&&c.setHTML(E)),l.$$.dirty[0]&8389632&&m&&c.setLngLat(m),l.$$.dirty[0]&41943045&&s){let n=c.isOpen();i&&!n?(c.addTo(s),h==="opening"&&e(25,h="justOpened")):!i&&n&&c.remove()}},[i,b,s,r,_,F,J,T,K,de,m,D,C,M,B,a,S,A,H,W,V,q,E,c,P,h,o,t,u,z,Y,ye,be]}class we extends me{constructor(f){super(),_e(this,f,qe,Ve,se,{closeButton:11,closeOnClickOutside:12,closeOnClickInside:13,closeOnMove:14,openOn:15,openIfTopMost:16,focusAfterOpen:17,anchor:18,offset:19,popupClass:20,maxWidth:21,lngLat:10,html:22,open:0},null,[-1,-1])}}const Ne=l=>({props:l&8}),oe=l=>({props:Xe(l[3])});function Ge(l){let f,e;const t=l[1].default,o=ce(t,l,l[2],oe);return{c(){f=fe("div"),o&&o.c(),this.h()},l(s){f=le(s,"DIV",{class:!0});var u=ue(f);o&&o.l(u),u.forEach(L),this.h()},h(){Ie(f,"class","govuk-prose")},m(s,u){U(s,f,u),o&&o.m(f,null),e=!0},p(s,u){o&&o.p&&(!e||u&12)&&re(o,t,s,s[2],e?ae(t,s[2],u,Ne):ie(s[2]),oe)},i(s){e||(p(o,s),e=!0)},o(s){k(o,s),e=!1},d(s){s&&L(f),o&&o.d(s)}}}function Ue(l){let f,e;return f=new we({props:{openOn:l[0],$$slots:{default:[Ge,({features:t})=>({3:t}),({features:t})=>t?8:0]},$$scope:{ctx:l}}}),{c(){je(f.$$.fragment)},l(t){De(f.$$.fragment,t)},m(t,o){Be(f,t,o),e=!0},p(t,[o]){const s={};o&1&&(s.openOn=t[0]),o&12&&(s.$$scope={dirty:o,ctx:t}),f.$set(s)},i(t){e||(p(f.$$.fragment,t),e=!0)},o(t){k(f.$$.fragment,t),e=!1},d(t){Se(f,t)}}}function Xe(l){return l?l[0].properties??{}:{}}function Ye(l,f,e){let{$$slots:t={},$$scope:o}=f,{openOn:s="hover"}=f;return l.$$set=u=>{"openOn"in u&&e(0,s=u.openOn),"$$scope"in u&&e(2,o=u.$$scope)},[s,t,o]}class Ke extends me{constructor(f){super(),_e(this,f,Ye,Ue,se,{openOn:0})}}export{Ke as P};
