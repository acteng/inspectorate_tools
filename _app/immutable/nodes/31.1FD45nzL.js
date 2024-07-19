import{s as _e,D as te,i as $,n as Ve,f as _,F as qe,e as D,t as N,a as S,c as E,b as R,d as I,g as W,q as ue,h as M,j as ce,p as z,r as le,w as se,k as De,a7 as ot,v as K,y as it,R as at,T as et,O as je}from"../chunks/scheduler.mGr_ZlpV.js";import{S as ge,i as $e,e as oe,c as q,b as A,m as L,t as k,g as me,a as T,f as he,d as F}from"../chunks/index.rGMSHTnh.js";import{e as ne,u as rt,o as ft}from"../chunks/each.K9grjjo2.js";import{S as tt}from"../chunks/SecondaryButton.BZ-CsghR.js";/* empty css                                                    */import{s as G}from"../chunks/data.DMU69MYo.js";import{D as nt}from"../chunks/DecimalInput.DZ6zdq9k.js";import{T as lt}from"../chunks/TextArea.CQ2iB7w6.js";import{W as st}from"../chunks/WarningButton.DoTAjTRB.js";import{C as ct}from"../chunks/ClickableCard.xMY1De4-.js";import{B as ut,G as mt,C as ht,a as pt,S as dt,M as _t}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.BsQRwGne.js";import{C as gt}from"../chunks/CollapsibleCard.Djd8DNlx.js";import{D as $t}from"../chunks/DefaultButton.Mx2gKMUF.js";import"../chunks/paths.Bp8Heuzq.js";import{M as bt,b as vt,C as kt}from"../chunks/index.DxWdSAxj.js";import{c as Re}from"../chunks/logic.QIc_5A2T.js";function Ue(s,e,n){const t=s.slice();return t[5]=e[n][0],t[6]=e[n][1][0],t[7]=e[n][1][1],t}function wt(s){let e,n="Insufficient Space";return{c(){e=D("strong"),e.textContent=n,this.h()},l(t){e=E(t,"STRONG",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-9xvf61"&&(e.textContent=n),this.h()},h(){ue(e,"class","govuk-tag govuk-tag--red")},m(t,o){$(t,e,o)},d(t){t&&_(e)}}}function Tt(s){let e,n="Absolute Minimum";return{c(){e=D("strong"),e.textContent=n,this.h()},l(t){e=E(t,"STRONG",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-hmipw0"&&(e.textContent=n),this.h()},h(){ue(e,"class","govuk-tag govuk-tag--yellow")},m(t,o){$(t,e,o)},d(t){t&&_(e)}}}function Ct(s){let e,n="Desirable Minimum";return{c(){e=D("strong"),e.textContent=n,this.h()},l(t){e=E(t,"STRONG",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-11simwv"&&(e.textContent=n),this.h()},h(){ue(e,"class","govuk-tag govuk-tag--green")},m(t,o){$(t,e,o)},d(t){t&&_(e)}}}function Ge(s){let e,n=s[5]+"",t,o=s[1]?"cross sections possible:":":",r,l,c;function i(a,u){return a[0]>=a[6]?Ct:a[0]>a[7]?Tt:wt}let m=i(s),f=m(s);return{c(){e=D("p"),t=N(n),r=N(o),l=S(),f.c(),c=S(),this.h()},l(a){e=E(a,"P",{class:!0});var u=R(e);t=I(u,n),r=I(u,o),l=W(u),f.l(u),c=W(u),u.forEach(_),this.h()},h(){ue(e,"class","svelte-1d0pd4t")},m(a,u){$(a,e,u),M(e,t),M(e,r),M(e,l),f.m(e,null),M(e,c)},p(a,u){u&2&&o!==(o=a[1]?"cross sections possible:":":")&&ce(r,o),m!==(m=i(a))&&(f.d(1),f=m(a),f&&(f.c(),f.m(e,c)))},d(a){a&&_(e),f.d()}}}function Pt(s){let e,n=ne(s[2]),t=[];for(let o=0;o<n.length;o+=1)t[o]=Ge(Ue(s,n,o));return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=te()},l(o){for(let r=0;r<t.length;r+=1)t[r].l(o);e=te()},m(o,r){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(o,r);$(o,e,r)},p(o,[r]){if(r&7){n=ne(o[2]);let l;for(l=0;l<n.length;l+=1){const c=Ue(o,n,l);t[l]?t[l].p(c,r):(t[l]=Ge(c),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i:Ve,o:Ve,d(o){o&&_(e),qe(t,o)}}}function St(s,e,n){let{available:t}=e,{preferredTotals:o}=e,{compromisedTotals:r}=e,{verbose:l=!0}=e,c=[["Preferred",o],["Compromised",r]];return s.$$set=i=>{"available"in i&&n(0,t=i.available),"preferredTotals"in i&&n(3,o=i.preferredTotals),"compromisedTotals"in i&&n(4,r=i.compromisedTotals),"verbose"in i&&n(1,l=i.verbose)},[t,l,c,o,r]}class Ae extends ge{constructor(e){super(),$e(this,e,St,Pt,_e,{available:0,preferredTotals:3,compromisedTotals:4,verbose:1})}}function ye(s){let e,n,t;function o(l){s[6](l)}let r={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return s[3].checks.homogeneousSections[s[0]].notes!==void 0&&(r.value=s[3].checks.homogeneousSections[s[0]].notes),e=new lt({props:r}),le.push(()=>oe(e,"value",o)),{c(){q(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){L(e,l,c),t=!0},p(l,c){const i={};!n&&c&9&&(n=!0,i.value=l[3].checks.homogeneousSections[l[0]].notes,se(()=>n=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Wt(s){let e;return{c(){e=N("Delete")},l(n){e=I(n,"Delete")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Mt(s){let e,n,t,o=s[0]+1+"",r,l,c,i,m,f,a,u,d,p;function P(v){s[5](v)}let H={label:"Available width (m)",width:4,min:0};s[3].checks.homogeneousSections[s[0]].availableWidth!==void 0&&(H.value=s[3].checks.homogeneousSections[s[0]].availableWidth),c=new nt({props:H}),le.push(()=>oe(c,"value",P)),f=new Ae({props:{available:s[3].checks.homogeneousSections[s[0]].availableWidth,preferredTotals:s[1],compromisedTotals:s[2]}});let b=s[3].checks.homogeneousSections[s[0]].availableWidth<s[1][0]&&ye(s);return d=new st({props:{$$slots:{default:[Wt]},$$scope:{ctx:s}}}),d.$on("click",s[7]),{c(){e=D("div"),n=D("u"),t=N("Cross-section #"),r=N(o),l=S(),q(c.$$.fragment),m=S(),q(f.$$.fragment),a=S(),b&&b.c(),u=S(),q(d.$$.fragment),this.h()},l(v){e=E(v,"DIV",{class:!0});var C=R(e);n=E(C,"U",{});var B=R(n);t=I(B,"Cross-section #"),r=I(B,o),B.forEach(_),l=W(C),A(c.$$.fragment,C),m=W(C),A(f.$$.fragment,C),a=W(C),b&&b.l(C),u=W(C),A(d.$$.fragment,C),C.forEach(_),this.h()},h(){ue(e,"class","svelte-d4ufy0")},m(v,C){$(v,e,C),M(e,n),M(n,t),M(n,r),M(e,l),L(c,e,null),M(e,m),L(f,e,null),M(e,a),b&&b.m(e,null),M(e,u),L(d,e,null),p=!0},p(v,[C]){(!p||C&1)&&o!==(o=v[0]+1+"")&&ce(r,o);const B={};!i&&C&9&&(i=!0,B.value=v[3].checks.homogeneousSections[v[0]].availableWidth,se(()=>i=!1)),c.$set(B);const y={};C&9&&(y.available=v[3].checks.homogeneousSections[v[0]].availableWidth),C&2&&(y.preferredTotals=v[1]),C&4&&(y.compromisedTotals=v[2]),f.$set(y),v[3].checks.homogeneousSections[v[0]].availableWidth<v[1][0]?b?(b.p(v,C),C&11&&k(b,1)):(b=ye(v),b.c(),k(b,1),b.m(e,u)):b&&(me(),T(b,1,1,()=>{b=null}),he());const U={};C&256&&(U.$$scope={dirty:C,ctx:v}),d.$set(U)},i(v){p||(k(c.$$.fragment,v),k(f.$$.fragment,v),k(b),k(d.$$.fragment,v),p=!0)},o(v){T(c.$$.fragment,v),T(f.$$.fragment,v),T(b),T(d.$$.fragment,v),p=!1},d(v){v&&_(e),F(c),F(f),b&&b.d(),F(d)}}}function Dt(s,e,n){let t;De(s,G,a=>n(3,t=a));let{i:o}=e,{preferredTotals:r}=e,{compromisedTotals:l}=e,c=ot();function i(a){s.$$.not_equal(t.checks.homogeneousSections[o].availableWidth,a)&&(t.checks.homogeneousSections[o].availableWidth=a,G.set(t))}function m(a){s.$$.not_equal(t.checks.homogeneousSections[o].notes,a)&&(t.checks.homogeneousSections[o].notes=a,G.set(t))}const f=()=>c("delete");return s.$$set=a=>{"i"in a&&n(0,o=a.i),"preferredTotals"in a&&n(1,r=a.preferredTotals),"compromisedTotals"in a&&n(2,l=a.compromisedTotals)},[o,r,l,t,c,i,m,f]}class Et extends ge{constructor(e){super(),$e(this,e,Dt,Mt,_e,{i:0,preferredTotals:1,compromisedTotals:2})}}function Ze(s){let e,n,t;function o(l){s[5](l)}let r={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return s[3].checks.pinchPoints[s[0]].notes!==void 0&&(r.value=s[3].checks.pinchPoints[s[0]].notes),e=new lt({props:r}),le.push(()=>oe(e,"value",o)),{c(){q(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){L(e,l,c),t=!0},p(l,c){const i={};!n&&c&9&&(n=!0,i.value=l[3].checks.pinchPoints[l[0]].notes,se(()=>n=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function qt(s){let e,n,t,o,r,l,c;function i(a){s[4](a)}let m={label:"Available width (m)",width:4,min:0};s[3].checks.pinchPoints[s[0]].availableWidth!==void 0&&(m.value=s[3].checks.pinchPoints[s[0]].availableWidth),n=new nt({props:m}),le.push(()=>oe(n,"value",i)),r=new Ae({props:{available:s[3].checks.pinchPoints[s[0]].availableWidth,preferredTotals:s[1],compromisedTotals:s[2]}});let f=s[3].checks.pinchPoints[s[0]].availableWidth<s[1][0]&&Ze(s);return{c(){e=D("div"),q(n.$$.fragment),o=S(),q(r.$$.fragment),l=S(),f&&f.c(),this.h()},l(a){e=E(a,"DIV",{class:!0});var u=R(e);A(n.$$.fragment,u),o=W(u),A(r.$$.fragment,u),l=W(u),f&&f.l(u),u.forEach(_),this.h()},h(){ue(e,"class","svelte-jig4ga")},m(a,u){$(a,e,u),L(n,e,null),M(e,o),L(r,e,null),M(e,l),f&&f.m(e,null),c=!0},p(a,[u]){const d={};!t&&u&9&&(t=!0,d.value=a[3].checks.pinchPoints[a[0]].availableWidth,se(()=>t=!1)),n.$set(d);const p={};u&9&&(p.available=a[3].checks.pinchPoints[a[0]].availableWidth),u&2&&(p.preferredTotals=a[1]),u&4&&(p.compromisedTotals=a[2]),r.$set(p),a[3].checks.pinchPoints[a[0]].availableWidth<a[1][0]?f?(f.p(a,u),u&11&&k(f,1)):(f=Ze(a),f.c(),k(f,1),f.m(e,null)):f&&(me(),T(f,1,1,()=>{f=null}),he())},i(a){c||(k(n.$$.fragment,a),k(r.$$.fragment,a),k(f),c=!0)},o(a){T(n.$$.fragment,a),T(r.$$.fragment,a),T(f),c=!1},d(a){a&&_(e),F(n),F(r),f&&f.d()}}}function At(s,e,n){let t;De(s,G,m=>n(3,t=m));let{i:o}=e,{preferredTotals:r}=e,{compromisedTotals:l}=e;function c(m){s.$$.not_equal(t.checks.pinchPoints[o].availableWidth,m)&&(t.checks.pinchPoints[o].availableWidth=m,G.set(t))}function i(m){s.$$.not_equal(t.checks.pinchPoints[o].notes,m)&&(t.checks.pinchPoints[o].notes=m,G.set(t))}return s.$$set=m=>{"i"in m&&n(0,o=m.i),"preferredTotals"in m&&n(1,r=m.preferredTotals),"compromisedTotals"in m&&n(2,l=m.compromisedTotals)},[o,r,l,t,c,i]}class Lt extends ge{constructor(e){super(),$e(this,e,At,qt,_e,{i:0,preferredTotals:1,compromisedTotals:2})}}function ze(s,e,n){const t=s.slice();return t[24]=e[n],t[25]=e,t[26]=n,t}function Ke(s,e,n){const t=s.slice();return t[27]=e[n],t[26]=n,t}function Ft(s){let e,n,t=s[5]+1+"",o,r,l,c,i,m,f,a;return l=new $t({props:{$$slots:{default:[Nt]},$$scope:{ctx:s}}}),l.$on("click",s[19]),i=new st({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),i.$on("click",s[20]),f=new Lt({props:{i:s[5],preferredTotals:s[0],compromisedTotals:s[1]}}),{c(){e=D("h2"),n=N("Pinch point "),o=N(t),r=S(),q(l.$$.fragment),c=S(),q(i.$$.fragment),m=S(),q(f.$$.fragment)},l(u){e=E(u,"H2",{});var d=R(e);n=I(d,"Pinch point "),o=I(d,t),d.forEach(_),r=W(u),A(l.$$.fragment,u),c=W(u),A(i.$$.fragment,u),m=W(u),A(f.$$.fragment,u)},m(u,d){$(u,e,d),M(e,n),M(e,o),$(u,r,d),L(l,u,d),$(u,c,d),L(i,u,d),$(u,m,d),L(f,u,d),a=!0},p(u,d){(!a||d&32)&&t!==(t=u[5]+1+"")&&ce(o,t);const p={};d&536870912&&(p.$$scope={dirty:d,ctx:u}),l.$set(p);const P={};d&536870912&&(P.$$scope={dirty:d,ctx:u}),i.$set(P);const H={};d&32&&(H.i=u[5]),d&1&&(H.preferredTotals=u[0]),d&2&&(H.compromisedTotals=u[1]),f.$set(H)},i(u){a||(k(l.$$.fragment,u),k(i.$$.fragment,u),k(f.$$.fragment,u),a=!0)},o(u){T(l.$$.fragment,u),T(i.$$.fragment,u),T(f.$$.fragment,u),a=!1},d(u){u&&(_(e),_(r),_(c),_(m)),F(l,u),F(i,u),F(f,u)}}}function Ht(s){let e,n,t,o;e=new gt({props:{label:"Tools",$$slots:{default:[Vt]},$$scope:{ctx:s}}});let r=ne(s[7].checks.pinchPoints),l=[];for(let i=0;i<r.length;i+=1)l[i]=Je(Ke(s,r,i));const c=i=>T(l[i],1,1,()=>{l[i]=null});return{c(){q(e.$$.fragment),n=S();for(let i=0;i<l.length;i+=1)l[i].c();t=te()},l(i){A(e.$$.fragment,i),n=W(i);for(let m=0;m<l.length;m+=1)l[m].l(i);t=te()},m(i,m){L(e,i,m),$(i,n,m);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(i,m);$(i,t,m),o=!0},p(i,m){const f={};if(m&536870940&&(f.$$scope={dirty:m,ctx:i}),e.$set(f),m&451){r=ne(i[7].checks.pinchPoints);let a;for(a=0;a<r.length;a+=1){const u=Ke(i,r,a);l[a]?(l[a].p(u,m),k(l[a],1)):(l[a]=Je(u),l[a].c(),k(l[a],1),l[a].m(t.parentNode,t))}for(me(),a=r.length;a<l.length;a+=1)c(a);he()}},i(i){if(!o){k(e.$$.fragment,i);for(let m=0;m<r.length;m+=1)k(l[m]);o=!0}},o(i){T(e.$$.fragment,i),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)T(l[m]);o=!1},d(i){i&&(_(n),_(t)),F(e,i),qe(l,i)}}}function Nt(s){let e;return{c(){e=N("Save")},l(n){e=I(n,"Save")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function It(s){let e;return{c(){e=N("Delete")},l(n){e=I(n,"Delete")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Bt(s){let e;return{c(){e=N("Zoom to fit")},l(n){e=I(n,"Zoom to fit")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Xe(s){let e,n,t;function o(l){s[14](l)}let r={map:s[2]};return s[3]!==void 0&&(r.enabled=s[3]),e=new dt({props:r}),le.push(()=>oe(e,"enabled",o)),{c(){q(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){L(e,l,c),t=!0},p(l,c){const i={};c&4&&(i.map=l[2]),!n&&c&8&&(n=!0,i.enabled=l[3],se(()=>n=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Ot(s){let e;return{c(){e=N("Show scheme context")},l(n){e=I(n,"Show scheme context")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Vt(s){let e,n,t,o,r,l,c,i,m,f;e=new tt({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}}),e.$on("click",s[13]),t=new ut({}),r=new mt({});let a=s[2]&&Xe(s);function u(p){s[15](p)}let d={$$slots:{default:[Ot]},$$scope:{ctx:s}};return s[4]!==void 0&&(d.checked=s[4]),i=new ht({props:d}),le.push(()=>oe(i,"checked",u)),{c(){q(e.$$.fragment),n=S(),q(t.$$.fragment),o=S(),q(r.$$.fragment),l=S(),a&&a.c(),c=S(),q(i.$$.fragment)},l(p){A(e.$$.fragment,p),n=W(p),A(t.$$.fragment,p),o=W(p),A(r.$$.fragment,p),l=W(p),a&&a.l(p),c=W(p),A(i.$$.fragment,p)},m(p,P){L(e,p,P),$(p,n,P),L(t,p,P),$(p,o,P),L(r,p,P),$(p,l,P),a&&a.m(p,P),$(p,c,P),L(i,p,P),f=!0},p(p,P){const H={};P&536870912&&(H.$$scope={dirty:P,ctx:p}),e.$set(H),p[2]?a?(a.p(p,P),P&4&&k(a,1)):(a=Xe(p),a.c(),k(a,1),a.m(c.parentNode,c)):a&&(me(),T(a,1,1,()=>{a=null}),he());const b={};P&536870912&&(b.$$scope={dirty:P,ctx:p}),!m&&P&16&&(m=!0,b.checked=p[4],se(()=>m=!1)),i.$set(b)},i(p){f||(k(e.$$.fragment,p),k(t.$$.fragment,p),k(r.$$.fragment,p),k(a),k(i.$$.fragment,p),f=!0)},o(p){T(e.$$.fragment,p),T(t.$$.fragment,p),T(r.$$.fragment,p),T(a),T(i.$$.fragment,p),f=!1},d(p){p&&(_(n),_(o),_(l),_(c)),F(e,p),F(t,p),F(r,p),a&&a.d(p),F(i,p)}}}function jt(s){let e,n,t;return e=new Ae({props:{available:s[27].availableWidth,preferredTotals:s[0],compromisedTotals:s[1],verbose:!1}}),{c(){q(e.$$.fragment),n=S()},l(o){A(e.$$.fragment,o),n=W(o)},m(o,r){L(e,o,r),$(o,n,r),t=!0},p(o,r){const l={};r&128&&(l.available=o[27].availableWidth),r&1&&(l.preferredTotals=o[0]),r&2&&(l.compromisedTotals=o[1]),e.$set(l)},i(o){t||(k(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){o&&_(n),F(e,o)}}}function Je(s){let e,n;function t(){return s[16](s[26])}function o(){return s[17](s[26])}return e=new ct({props:{name:`Pinch point ${s[26]+1}: ${s[27].availableWidth}m`,$$slots:{default:[jt]},$$scope:{ctx:s}}}),e.$on("click",t),e.$on("mouseenter",o),e.$on("mouseleave",s[18]),{c(){q(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,l){L(e,r,l),n=!0},p(r,l){s=r;const c={};l&128&&(c.name=`Pinch point ${s[26]+1}: ${s[27].availableWidth}m`),l&536871043&&(c.$$scope={dirty:l,ctx:s}),e.$set(c)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){F(e,r)}}}function Rt(s){let e,n=s[26]+1+"",t,o;return{c(){e=D("span"),t=N(n),o=S(),this.h()},l(r){e=E(r,"SPAN",{class:!0});var l=R(e);t=I(l,n),l.forEach(_),o=W(r),this.h()},h(){ue(e,"class","dot svelte-48lsk4"),je(e,"highlight",s[26]==s[5]||s[26]==s[6])},m(r,l){$(r,e,l),M(e,t),$(r,o,l)},p(r,l){l&96&&je(e,"highlight",r[26]==r[5]||r[26]==r[6])},d(r){r&&(_(e),_(o))}}}function Qe(s){let e,n,t;function o(c){s[21](c,s[24])}function r(){return s[22](s[26])}let l={draggable:!0,$$slots:{default:[Rt]},$$scope:{ctx:s}};return s[24].location!==void 0&&(l.lngLat=s[24].location),e=new _t({props:l}),le.push(()=>oe(e,"lngLat",o)),e.$on("click",r),{c(){q(e.$$.fragment)},l(c){A(e.$$.fragment,c)},m(c,i){L(e,c,i),t=!0},p(c,i){s=c;const m={};i&536871008&&(m.$$scope={dirty:i,ctx:s}),!n&&i&128&&(n=!0,m.lngLat=s[24].location,se(()=>n=!1)),e.$set(m)},i(c){t||(k(e.$$.fragment,c),t=!0)},o(c){T(e.$$.fragment,c),t=!1},d(c){F(e,c)}}}function Ut(s){let e,n,t,o,r,l;e=new pt({}),e.$on("click",s[10]),t=new kt({props:{gj:s[7].summary.networkMap,show:s[4]}});let c=ne(s[7].checks.pinchPoints),i=[];for(let f=0;f<c.length;f+=1)i[f]=Qe(ze(s,c,f));const m=f=>T(i[f],1,1,()=>{i[f]=null});return{c(){q(e.$$.fragment),n=S(),q(t.$$.fragment),o=S();for(let f=0;f<i.length;f+=1)i[f].c();r=te()},l(f){A(e.$$.fragment,f),n=W(f),A(t.$$.fragment,f),o=W(f);for(let a=0;a<i.length;a+=1)i[a].l(f);r=te()},m(f,a){L(e,f,a),$(f,n,a),L(t,f,a),$(f,o,a);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(f,a);$(f,r,a),l=!0},p(f,a){const u={};if(a&128&&(u.gj=f[7].summary.networkMap),a&16&&(u.show=f[4]),t.$set(u),a&480){c=ne(f[7].checks.pinchPoints);let d;for(d=0;d<c.length;d+=1){const p=ze(f,c,d);i[d]?(i[d].p(p,a),k(i[d],1)):(i[d]=Qe(p),i[d].c(),k(i[d],1),i[d].m(r.parentNode,r))}for(me(),d=c.length;d<i.length;d+=1)m(d);he()}},i(f){if(!l){k(e.$$.fragment,f),k(t.$$.fragment,f);for(let a=0;a<c.length;a+=1)k(i[a]);l=!0}},o(f){T(e.$$.fragment,f),T(t.$$.fragment,f),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)T(i[a]);l=!1},d(f){f&&(_(n),_(o),_(r)),F(e,f),F(t,f),qe(i,f)}}}function Gt(s){let e,n,t,o,r,l,c,i,m,f,a;const u=[Ht,Ft],d=[];function p(b,v){return b[5]==null?0:1}t=p(s),o=d[t]=u[t](s);function P(b){s[23](b)}let H={$$slots:{default:[Ut]},$$scope:{ctx:s}};return s[2]!==void 0&&(H.map=s[2]),c=new bt({props:H}),le.push(()=>oe(c,"map",P)),{c(){e=D("div"),n=D("div"),o.c(),r=S(),l=D("div"),q(c.$$.fragment),this.h()},l(b){e=E(b,"DIV",{style:!0});var v=R(e);n=E(v,"DIV",{style:!0});var C=R(n);o.l(C),C.forEach(_),r=W(v),l=E(v,"DIV",{style:!0});var B=R(l);A(c.$$.fragment,B),B.forEach(_),v.forEach(_),this.h()},h(){K(n,"width","30%"),K(n,"overflow-y","scroll"),K(n,"padding","10px"),K(n,"border","1px solid black"),K(l,"position","relative"),K(l,"width","100%"),K(e,"display","flex"),K(e,"height","80vh")},m(b,v){$(b,e,v),M(e,n),d[t].m(n,null),M(e,r),M(e,l),L(c,l,null),m=!0,f||(a=it(window,"keydown",s[12]),f=!0)},p(b,[v]){let C=t;t=p(b),t===C?d[t].p(b,v):(me(),T(d[C],1,1,()=>{d[C]=null}),he(),o=d[t],o?o.p(b,v):(o=d[t]=u[t](b),o.c()),k(o,1),o.m(n,null));const B={};v&536871152&&(B.$$scope={dirty:v,ctx:b}),!i&&v&4&&(i=!0,B.map=b[2],se(()=>i=!1)),c.$set(B)},i(b){m||(k(o),k(c.$$.fragment,b),m=!0)},o(b){T(o),T(c.$$.fragment,b),m=!1},d(b){b&&_(e),d[t].d(),F(c),f=!1,a()}}}function yt(s,e,n){let t;De(s,G,w=>n(7,t=w));let{preferredTotals:o}=e,{compromisedTotals:r}=e,l,c=!1,i=!0,m,f;at(()=>{u(!1)});function a(w){n(5,m=w),n(6,f=null)}function u(w){let j={type:"FeatureCollection",features:t.checks.pinchPoints.map(Z=>({type:"Feature",properties:{},geometry:{type:"Point",coordinates:Z.location}}))};for(let Z of t.summary.networkMap.features)j.features.push(Z);j.features.length>0&&l.fitBounds(vt(j),{padding:20,animate:w})}function d(w){if(!c){if(m!=null){n(5,m=null);return}et(G,t.checks.pinchPoints=[...t.checks.pinchPoints,{location:w.detail.lngLat.toArray(),availableWidth:0,notes:""}],t),a(t.checks.pinchPoints.length-1)}}function p(){t.checks.pinchPoints.splice(m,1),G.set(t),n(5,m=null)}function P(w){if(m!=null&&w.key=="Escape")w.stopPropagation(),n(5,m=null);else if(m!=null&&w.key=="Delete"){let j=w.target.tagName;if(j=="INPUT"||j=="TEXTAREA")return;w.stopPropagation(),p()}}const H=()=>u(!0);function b(w){c=w,n(3,c)}function v(w){i=w,n(4,i)}const C=w=>a(w),B=w=>n(6,f=w),y=()=>n(6,f=null),U=()=>n(5,m=null),Q=()=>p();function be(w,j){s.$$.not_equal(j.location,w)&&(j.location=w,G.set(t))}const pe=w=>a(w);function ie(w){l=w,n(2,l)}return s.$$set=w=>{"preferredTotals"in w&&n(0,o=w.preferredTotals),"compromisedTotals"in w&&n(1,r=w.compromisedTotals)},[o,r,l,c,i,m,f,t,a,u,d,p,P,H,b,v,C,B,y,U,Q,be,pe,ie]}class Zt extends ge{constructor(e){super(),$e(this,e,yt,Gt,_e,{preferredTotals:0,compromisedTotals:1})}}function Ye(s,e,n){const t=s.slice();return t[6]=e[n],t[8]=n,t}function zt(s){let e;return{c(){e=N("Add")},l(n){e=I(n,"Add")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function xe(s,e){let n,t,o;function r(){return e[5](e[8])}return t=new Et({props:{i:e[8],preferredTotals:e[2],compromisedTotals:e[1]}}),t.$on("delete",r),{key:s,first:null,c(){n=te(),q(t.$$.fragment),this.h()},l(l){n=te(),A(t.$$.fragment,l),this.h()},h(){this.first=n},m(l,c){$(l,n,c),L(t,l,c),o=!0},p(l,c){e=l;const i={};c&1&&(i.i=e[8]),c&4&&(i.preferredTotals=e[2]),c&2&&(i.compromisedTotals=e[1]),t.$set(i)},i(l){o||(k(t.$$.fragment,l),o=!0)},o(l){T(t.$$.fragment,l),o=!1},d(l){l&&_(n),F(t,l)}}}function Kt(s){let e,n,t="Preferred",o,r=s[2][0].toFixed(2)+"",l,c,i,m,f="Preferred",a,u=s[2][1].toFixed(2)+"",d,p,P,H,b="Compromised",v,C=s[1][0].toFixed(2)+"",B,y,U,Q,be="Compromised",pe,ie=s[1][1].toFixed(2)+"",w,j,Z,Le=`Checking possible cross-sections of <u>homogeneous sections</u>
  of route along the proposed corridor`,ve,ae,Fe=`At regular intervals along the corridor measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,ke,J,we,X,O=[],He=new Map,Te,Ce,Pe,re,Ne=`Checking possible cross-sections of any <u>constrained or atypical locations</u>
  along the proposed corridor`,Se,fe,Ie=`At key constraints along the corridor, measure and enter the available width
  to see if your proposed cross-sections can be accommodated. Click the map to
  add a pinch point.`,We,Y,x;J=new tt({props:{$$slots:{default:[zt]},$$scope:{ctx:s}}}),J.$on("click",s[3]);let de=ne(s[0].checks.homogeneousSections);const Be=h=>h[6];for(let h=0;h<de.length;h+=1){let g=Ye(s,de,h),V=Be(g);He.set(V,O[h]=xe(V,g))}return Y=new Zt({props:{preferredTotals:s[2],compromisedTotals:s[1]}}),{c(){e=D("p"),n=D("u"),n.textContent=t,o=N(`
  cross-section requites a desirable minimum width (m): `),l=N(r),c=S(),i=D("p"),m=D("u"),m.textContent=f,a=N(`
  cross-section requites an absolute minimum width (m): `),d=N(u),p=S(),P=D("p"),H=D("u"),H.textContent=b,v=N(`
  cross-section requites a desirable minimum width (m): `),B=N(C),y=S(),U=D("p"),Q=D("u"),Q.textContent=be,pe=N(`
  cross-section requites an absolute minimum width (m): `),w=N(ie),j=S(),Z=D("h2"),Z.innerHTML=Le,ve=S(),ae=D("p"),ae.textContent=Fe,ke=S(),q(J.$$.fragment),we=S(),X=D("div");for(let h=0;h<O.length;h+=1)O[h].c();Te=S(),Ce=D("hr"),Pe=S(),re=D("h2"),re.innerHTML=Ne,Se=S(),fe=D("p"),fe.textContent=Ie,We=S(),q(Y.$$.fragment),this.h()},l(h){e=E(h,"P",{});var g=R(e);n=E(g,"U",{"data-svelte-h":!0}),z(n)!=="svelte-1gb9n3v"&&(n.textContent=t),o=I(g,`
  cross-section requites a desirable minimum width (m): `),l=I(g,r),g.forEach(_),c=W(h),i=E(h,"P",{});var V=R(i);m=E(V,"U",{"data-svelte-h":!0}),z(m)!=="svelte-1gb9n3v"&&(m.textContent=f),a=I(V,`
  cross-section requites an absolute minimum width (m): `),d=I(V,u),V.forEach(_),p=W(h),P=E(h,"P",{});var ee=R(P);H=E(ee,"U",{"data-svelte-h":!0}),z(H)!=="svelte-svpwa8"&&(H.textContent=b),v=I(ee,`
  cross-section requites a desirable minimum width (m): `),B=I(ee,C),ee.forEach(_),y=W(h),U=E(h,"P",{});var Me=R(U);Q=E(Me,"U",{"data-svelte-h":!0}),z(Q)!=="svelte-svpwa8"&&(Q.textContent=be),pe=I(Me,`
  cross-section requites an absolute minimum width (m): `),w=I(Me,ie),Me.forEach(_),j=W(h),Z=E(h,"H2",{"data-svelte-h":!0}),z(Z)!=="svelte-1x2x8kb"&&(Z.innerHTML=Le),ve=W(h),ae=E(h,"P",{"data-svelte-h":!0}),z(ae)!=="svelte-x0c18j"&&(ae.textContent=Fe),ke=W(h),A(J.$$.fragment,h),we=W(h),X=E(h,"DIV",{style:!0});var Oe=R(X);for(let Ee=0;Ee<O.length;Ee+=1)O[Ee].l(Oe);Oe.forEach(_),Te=W(h),Ce=E(h,"HR",{}),Pe=W(h),re=E(h,"H2",{"data-svelte-h":!0}),z(re)!=="svelte-1m1bgig"&&(re.innerHTML=Ne),Se=W(h),fe=E(h,"P",{"data-svelte-h":!0}),z(fe)!=="svelte-x52uk0"&&(fe.textContent=Ie),We=W(h),A(Y.$$.fragment,h),this.h()},h(){K(X,"display","flex"),K(X,"flex-direction","row"),K(X,"overflow-x","scroll")},m(h,g){$(h,e,g),M(e,n),M(e,o),M(e,l),$(h,c,g),$(h,i,g),M(i,m),M(i,a),M(i,d),$(h,p,g),$(h,P,g),M(P,H),M(P,v),M(P,B),$(h,y,g),$(h,U,g),M(U,Q),M(U,pe),M(U,w),$(h,j,g),$(h,Z,g),$(h,ve,g),$(h,ae,g),$(h,ke,g),L(J,h,g),$(h,we,g),$(h,X,g);for(let V=0;V<O.length;V+=1)O[V]&&O[V].m(X,null);$(h,Te,g),$(h,Ce,g),$(h,Pe,g),$(h,re,g),$(h,Se,g),$(h,fe,g),$(h,We,g),L(Y,h,g),x=!0},p(h,[g]){(!x||g&4)&&r!==(r=h[2][0].toFixed(2)+"")&&ce(l,r),(!x||g&4)&&u!==(u=h[2][1].toFixed(2)+"")&&ce(d,u),(!x||g&2)&&C!==(C=h[1][0].toFixed(2)+"")&&ce(B,C),(!x||g&2)&&ie!==(ie=h[1][1].toFixed(2)+"")&&ce(w,ie);const V={};g&512&&(V.$$scope={dirty:g,ctx:h}),J.$set(V),g&23&&(de=ne(h[0].checks.homogeneousSections),me(),O=rt(O,g,Be,1,h,de,He,X,ft,xe,null,Ye),he());const ee={};g&4&&(ee.preferredTotals=h[2]),g&2&&(ee.compromisedTotals=h[1]),Y.$set(ee)},i(h){if(!x){k(J.$$.fragment,h);for(let g=0;g<de.length;g+=1)k(O[g]);k(Y.$$.fragment,h),x=!0}},o(h){T(J.$$.fragment,h);for(let g=0;g<O.length;g+=1)T(O[g]);T(Y.$$.fragment,h),x=!1},d(h){h&&(_(e),_(c),_(i),_(p),_(P),_(y),_(U),_(j),_(Z),_(ve),_(ae),_(ke),_(we),_(X),_(Te),_(Ce),_(Pe),_(re),_(Se),_(fe),_(We)),F(J,h);for(let g=0;g<O.length;g+=1)O[g].d();F(Y,h)}}}function Xt(s,e,n){let t,o,r;De(s,G,m=>n(0,r=m));function l(){et(G,r.checks.homogeneousSections=[...r.checks.homogeneousSections,{availableWidth:0,notes:""}],r)}function c(m){r.checks.homogeneousSections.splice(m,1),G.set(r)}const i=m=>c(m);return s.$$.update=()=>{s.$$.dirty&1&&n(2,t=Re(r,"Preferred")),s.$$.dirty&1&&n(1,o=Re(r,"Compromised"))},[r,o,t,l,c,i]}class hn extends ge{constructor(e){super(),$e(this,e,Xt,Kt,_e,{})}}export{hn as component};
