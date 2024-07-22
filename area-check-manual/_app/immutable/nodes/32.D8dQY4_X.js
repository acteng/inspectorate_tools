import{s as _e,F as te,i as $,n as Ue,f as _,r as qe,e as E,t as N,a as S,c as D,b as G,d as I,g as W,o as ue,h as M,j as ce,m as Z,v as le,w as oe,k as Ee,S as st,x as K,z as it,V as at,U as et,G as je}from"../chunks/scheduler.ScMV3vmV.js";import{S as ge,i as $e,e as se,c as q,a as A,m as L,t as k,g as me,b as T,f as he,d as F}from"../chunks/index.DbrWxxqn.js";import{e as ne,u as rt,o as ft}from"../chunks/each.DgxkLI6f.js";import{S as tt}from"../chunks/SecondaryButton.BknZbHJL.js";/* empty css                                                               */import{s as R}from"../chunks/data.BpO0J5fU.js";import{D as nt}from"../chunks/DecimalInput.CZdp-HRs.js";import{T as lt}from"../chunks/TextArea.DbkWbfhb.js";import{W as ot}from"../chunks/WarningButton.Dxk6Eh5H.js";import{C as ct}from"../chunks/ClickableCard.ofSK2zeq.js";import{B as ut,G as mt,C as ht,a as pt,S as dt,M as _t}from"../chunks/GeoreferenceLayer.svelte_svelte_type_style_lang.CVqq1GaY.js";import{C as gt}from"../chunks/CollapsibleCard.DOoboPEd.js";import{D as $t}from"../chunks/DefaultButton.DmNBc77J.js";import"../chunks/ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import"../chunks/paths.BwtKHrTf.js";import{M as bt,b as vt,C as kt}from"../chunks/index.DvJuIAz_.js";import{c as Ge}from"../chunks/logic.QIc_5A2T.js";function Oe(o,e,n){const t=o.slice();return t[5]=e[n][0],t[6]=e[n][1][0],t[7]=e[n][1][1],t}function wt(o){let e,n="Insufficient Space";return{c(){e=E("strong"),e.textContent=n,this.h()},l(t){e=D(t,"STRONG",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-9xvf61"&&(e.textContent=n),this.h()},h(){ue(e,"class","govuk-tag govuk-tag--red")},m(t,s){$(t,e,s)},d(t){t&&_(e)}}}function Tt(o){let e,n="Absolute Minimum";return{c(){e=E("strong"),e.textContent=n,this.h()},l(t){e=D(t,"STRONG",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-hmipw0"&&(e.textContent=n),this.h()},h(){ue(e,"class","govuk-tag govuk-tag--yellow")},m(t,s){$(t,e,s)},d(t){t&&_(e)}}}function Ct(o){let e,n="Desirable Minimum";return{c(){e=E("strong"),e.textContent=n,this.h()},l(t){e=D(t,"STRONG",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-11simwv"&&(e.textContent=n),this.h()},h(){ue(e,"class","govuk-tag govuk-tag--green")},m(t,s){$(t,e,s)},d(t){t&&_(e)}}}function Re(o){let e,n=o[5]+"",t,s=o[1]?"cross sections possible:":":",r,l,c;function i(a,u){return a[0]>=a[6]?Ct:a[0]>a[7]?Tt:wt}let m=i(o),f=m(o);return{c(){e=E("p"),t=N(n),r=N(s),l=S(),f.c(),c=S(),this.h()},l(a){e=D(a,"P",{class:!0});var u=G(e);t=I(u,n),r=I(u,s),l=W(u),f.l(u),c=W(u),u.forEach(_),this.h()},h(){ue(e,"class","svelte-1d0pd4t")},m(a,u){$(a,e,u),M(e,t),M(e,r),M(e,l),f.m(e,null),M(e,c)},p(a,u){u&2&&s!==(s=a[1]?"cross sections possible:":":")&&ce(r,s),m!==(m=i(a))&&(f.d(1),f=m(a),f&&(f.c(),f.m(e,c)))},d(a){a&&_(e),f.d()}}}function Pt(o){let e,n=ne(o[2]),t=[];for(let s=0;s<n.length;s+=1)t[s]=Re(Oe(o,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=te()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=te()},m(s,r){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(s,r);$(s,e,r)},p(s,[r]){if(r&7){n=ne(s[2]);let l;for(l=0;l<n.length;l+=1){const c=Oe(s,n,l);t[l]?t[l].p(c,r):(t[l]=Re(c),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i:Ue,o:Ue,d(s){s&&_(e),qe(t,s)}}}function St(o,e,n){let{available:t}=e,{preferredTotals:s}=e,{compromisedTotals:r}=e,{verbose:l=!0}=e,c=[["Preferred",s],["Compromised",r]];return o.$$set=i=>{"available"in i&&n(0,t=i.available),"preferredTotals"in i&&n(3,s=i.preferredTotals),"compromisedTotals"in i&&n(4,r=i.compromisedTotals),"verbose"in i&&n(1,l=i.verbose)},[t,l,c,s,r]}class Ae extends ge{constructor(e){super(),$e(this,e,St,Pt,_e,{available:0,preferredTotals:3,compromisedTotals:4,verbose:1})}}function ye(o){let e,n,t;function s(l){o[6](l)}let r={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return o[3].checks.homogeneousSections[o[0]].notes!==void 0&&(r.value=o[3].checks.homogeneousSections[o[0]].notes),e=new lt({props:r}),le.push(()=>se(e,"value",s)),{c(){q(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){L(e,l,c),t=!0},p(l,c){const i={};!n&&c&9&&(n=!0,i.value=l[3].checks.homogeneousSections[l[0]].notes,oe(()=>n=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Wt(o){let e;return{c(){e=N("Delete")},l(n){e=I(n,"Delete")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Mt(o){let e,n,t,s=o[0]+1+"",r,l,c,i,m,f,a,u,d,p;function P(v){o[5](v)}let H={label:"Available width (m)",width:4,min:0};o[3].checks.homogeneousSections[o[0]].availableWidth!==void 0&&(H.value=o[3].checks.homogeneousSections[o[0]].availableWidth),c=new nt({props:H}),le.push(()=>se(c,"value",P)),f=new Ae({props:{available:o[3].checks.homogeneousSections[o[0]].availableWidth,preferredTotals:o[1],compromisedTotals:o[2]}});let b=o[3].checks.homogeneousSections[o[0]].availableWidth<o[1][0]&&ye(o);return d=new ot({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),d.$on("click",o[7]),{c(){e=E("div"),n=E("u"),t=N("Cross-section #"),r=N(s),l=S(),q(c.$$.fragment),m=S(),q(f.$$.fragment),a=S(),b&&b.c(),u=S(),q(d.$$.fragment),this.h()},l(v){e=D(v,"DIV",{class:!0});var C=G(e);n=D(C,"U",{});var B=G(n);t=I(B,"Cross-section #"),r=I(B,s),B.forEach(_),l=W(C),A(c.$$.fragment,C),m=W(C),A(f.$$.fragment,C),a=W(C),b&&b.l(C),u=W(C),A(d.$$.fragment,C),C.forEach(_),this.h()},h(){ue(e,"class","svelte-d4ufy0")},m(v,C){$(v,e,C),M(e,n),M(n,t),M(n,r),M(e,l),L(c,e,null),M(e,m),L(f,e,null),M(e,a),b&&b.m(e,null),M(e,u),L(d,e,null),p=!0},p(v,[C]){(!p||C&1)&&s!==(s=v[0]+1+"")&&ce(r,s);const B={};!i&&C&9&&(i=!0,B.value=v[3].checks.homogeneousSections[v[0]].availableWidth,oe(()=>i=!1)),c.$set(B);const y={};C&9&&(y.available=v[3].checks.homogeneousSections[v[0]].availableWidth),C&2&&(y.preferredTotals=v[1]),C&4&&(y.compromisedTotals=v[2]),f.$set(y),v[3].checks.homogeneousSections[v[0]].availableWidth<v[1][0]?b?(b.p(v,C),C&11&&k(b,1)):(b=ye(v),b.c(),k(b,1),b.m(e,u)):b&&(me(),T(b,1,1,()=>{b=null}),he());const O={};C&256&&(O.$$scope={dirty:C,ctx:v}),d.$set(O)},i(v){p||(k(c.$$.fragment,v),k(f.$$.fragment,v),k(b),k(d.$$.fragment,v),p=!0)},o(v){T(c.$$.fragment,v),T(f.$$.fragment,v),T(b),T(d.$$.fragment,v),p=!1},d(v){v&&_(e),F(c),F(f),b&&b.d(),F(d)}}}function Et(o,e,n){let t;Ee(o,R,a=>n(3,t=a));let{i:s}=e,{preferredTotals:r}=e,{compromisedTotals:l}=e,c=st();function i(a){o.$$.not_equal(t.checks.homogeneousSections[s].availableWidth,a)&&(t.checks.homogeneousSections[s].availableWidth=a,R.set(t))}function m(a){o.$$.not_equal(t.checks.homogeneousSections[s].notes,a)&&(t.checks.homogeneousSections[s].notes=a,R.set(t))}const f=()=>c("delete");return o.$$set=a=>{"i"in a&&n(0,s=a.i),"preferredTotals"in a&&n(1,r=a.preferredTotals),"compromisedTotals"in a&&n(2,l=a.compromisedTotals)},[s,r,l,t,c,i,m,f]}class Dt extends ge{constructor(e){super(),$e(this,e,Et,Mt,_e,{i:0,preferredTotals:1,compromisedTotals:2})}}function ze(o){let e,n,t;function s(l){o[5](l)}let r={label:"Where only the absolute minimum cross-section is possible, what (if anything) could change to fit in the desirable minimum cross-section? Where there is insufficient space even for the absolute minimum cross-section, what (if anything) could change to allow this to be implemented? Otherwise, what else could be implemented as an alternative?"};return o[3].checks.pinchPoints[o[0]].notes!==void 0&&(r.value=o[3].checks.pinchPoints[o[0]].notes),e=new lt({props:r}),le.push(()=>se(e,"value",s)),{c(){q(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){L(e,l,c),t=!0},p(l,c){const i={};!n&&c&9&&(n=!0,i.value=l[3].checks.pinchPoints[l[0]].notes,oe(()=>n=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function qt(o){let e,n,t,s,r,l,c;function i(a){o[4](a)}let m={label:"Available width (m)",width:4,min:0};o[3].checks.pinchPoints[o[0]].availableWidth!==void 0&&(m.value=o[3].checks.pinchPoints[o[0]].availableWidth),n=new nt({props:m}),le.push(()=>se(n,"value",i)),r=new Ae({props:{available:o[3].checks.pinchPoints[o[0]].availableWidth,preferredTotals:o[1],compromisedTotals:o[2]}});let f=o[3].checks.pinchPoints[o[0]].availableWidth<o[1][0]&&ze(o);return{c(){e=E("div"),q(n.$$.fragment),s=S(),q(r.$$.fragment),l=S(),f&&f.c(),this.h()},l(a){e=D(a,"DIV",{class:!0});var u=G(e);A(n.$$.fragment,u),s=W(u),A(r.$$.fragment,u),l=W(u),f&&f.l(u),u.forEach(_),this.h()},h(){ue(e,"class","svelte-jig4ga")},m(a,u){$(a,e,u),L(n,e,null),M(e,s),L(r,e,null),M(e,l),f&&f.m(e,null),c=!0},p(a,[u]){const d={};!t&&u&9&&(t=!0,d.value=a[3].checks.pinchPoints[a[0]].availableWidth,oe(()=>t=!1)),n.$set(d);const p={};u&9&&(p.available=a[3].checks.pinchPoints[a[0]].availableWidth),u&2&&(p.preferredTotals=a[1]),u&4&&(p.compromisedTotals=a[2]),r.$set(p),a[3].checks.pinchPoints[a[0]].availableWidth<a[1][0]?f?(f.p(a,u),u&11&&k(f,1)):(f=ze(a),f.c(),k(f,1),f.m(e,null)):f&&(me(),T(f,1,1,()=>{f=null}),he())},i(a){c||(k(n.$$.fragment,a),k(r.$$.fragment,a),k(f),c=!0)},o(a){T(n.$$.fragment,a),T(r.$$.fragment,a),T(f),c=!1},d(a){a&&_(e),F(n),F(r),f&&f.d()}}}function At(o,e,n){let t;Ee(o,R,m=>n(3,t=m));let{i:s}=e,{preferredTotals:r}=e,{compromisedTotals:l}=e;function c(m){o.$$.not_equal(t.checks.pinchPoints[s].availableWidth,m)&&(t.checks.pinchPoints[s].availableWidth=m,R.set(t))}function i(m){o.$$.not_equal(t.checks.pinchPoints[s].notes,m)&&(t.checks.pinchPoints[s].notes=m,R.set(t))}return o.$$set=m=>{"i"in m&&n(0,s=m.i),"preferredTotals"in m&&n(1,r=m.preferredTotals),"compromisedTotals"in m&&n(2,l=m.compromisedTotals)},[s,r,l,t,c,i]}class Lt extends ge{constructor(e){super(),$e(this,e,At,qt,_e,{i:0,preferredTotals:1,compromisedTotals:2})}}function Ze(o,e,n){const t=o.slice();return t[24]=e[n],t[25]=e,t[26]=n,t}function Ke(o,e,n){const t=o.slice();return t[27]=e[n],t[26]=n,t}function Ft(o){let e,n,t=o[5]+1+"",s,r,l,c,i,m,f,a;return l=new $t({props:{$$slots:{default:[Nt]},$$scope:{ctx:o}}}),l.$on("click",o[19]),i=new ot({props:{$$slots:{default:[It]},$$scope:{ctx:o}}}),i.$on("click",o[20]),f=new Lt({props:{i:o[5],preferredTotals:o[0],compromisedTotals:o[1]}}),{c(){e=E("h2"),n=N("Pinch point "),s=N(t),r=S(),q(l.$$.fragment),c=S(),q(i.$$.fragment),m=S(),q(f.$$.fragment)},l(u){e=D(u,"H2",{});var d=G(e);n=I(d,"Pinch point "),s=I(d,t),d.forEach(_),r=W(u),A(l.$$.fragment,u),c=W(u),A(i.$$.fragment,u),m=W(u),A(f.$$.fragment,u)},m(u,d){$(u,e,d),M(e,n),M(e,s),$(u,r,d),L(l,u,d),$(u,c,d),L(i,u,d),$(u,m,d),L(f,u,d),a=!0},p(u,d){(!a||d&32)&&t!==(t=u[5]+1+"")&&ce(s,t);const p={};d&536870912&&(p.$$scope={dirty:d,ctx:u}),l.$set(p);const P={};d&536870912&&(P.$$scope={dirty:d,ctx:u}),i.$set(P);const H={};d&32&&(H.i=u[5]),d&1&&(H.preferredTotals=u[0]),d&2&&(H.compromisedTotals=u[1]),f.$set(H)},i(u){a||(k(l.$$.fragment,u),k(i.$$.fragment,u),k(f.$$.fragment,u),a=!0)},o(u){T(l.$$.fragment,u),T(i.$$.fragment,u),T(f.$$.fragment,u),a=!1},d(u){u&&(_(e),_(r),_(c),_(m)),F(l,u),F(i,u),F(f,u)}}}function Ht(o){let e,n,t,s;e=new gt({props:{label:"Tools",$$slots:{default:[Ut]},$$scope:{ctx:o}}});let r=ne(o[7].checks.pinchPoints),l=[];for(let i=0;i<r.length;i+=1)l[i]=Je(Ke(o,r,i));const c=i=>T(l[i],1,1,()=>{l[i]=null});return{c(){q(e.$$.fragment),n=S();for(let i=0;i<l.length;i+=1)l[i].c();t=te()},l(i){A(e.$$.fragment,i),n=W(i);for(let m=0;m<l.length;m+=1)l[m].l(i);t=te()},m(i,m){L(e,i,m),$(i,n,m);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(i,m);$(i,t,m),s=!0},p(i,m){const f={};if(m&536870940&&(f.$$scope={dirty:m,ctx:i}),e.$set(f),m&451){r=ne(i[7].checks.pinchPoints);let a;for(a=0;a<r.length;a+=1){const u=Ke(i,r,a);l[a]?(l[a].p(u,m),k(l[a],1)):(l[a]=Je(u),l[a].c(),k(l[a],1),l[a].m(t.parentNode,t))}for(me(),a=r.length;a<l.length;a+=1)c(a);he()}},i(i){if(!s){k(e.$$.fragment,i);for(let m=0;m<r.length;m+=1)k(l[m]);s=!0}},o(i){T(e.$$.fragment,i),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)T(l[m]);s=!1},d(i){i&&(_(n),_(t)),F(e,i),qe(l,i)}}}function Nt(o){let e;return{c(){e=N("Save")},l(n){e=I(n,"Save")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function It(o){let e;return{c(){e=N("Delete")},l(n){e=I(n,"Delete")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Bt(o){let e;return{c(){e=N("Zoom to fit")},l(n){e=I(n,"Zoom to fit")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Xe(o){let e,n,t;function s(l){o[14](l)}let r={map:o[2]};return o[3]!==void 0&&(r.enabled=o[3]),e=new dt({props:r}),le.push(()=>se(e,"enabled",s)),{c(){q(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,c){L(e,l,c),t=!0},p(l,c){const i={};c&4&&(i.map=l[2]),!n&&c&8&&(n=!0,i.enabled=l[3],oe(()=>n=!1)),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Vt(o){let e;return{c(){e=N("Show scheme context")},l(n){e=I(n,"Show scheme context")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Ut(o){let e,n,t,s,r,l,c,i,m,f;e=new tt({props:{$$slots:{default:[Bt]},$$scope:{ctx:o}}}),e.$on("click",o[13]),t=new ut({}),r=new mt({});let a=o[2]&&Xe(o);function u(p){o[15](p)}let d={$$slots:{default:[Vt]},$$scope:{ctx:o}};return o[4]!==void 0&&(d.checked=o[4]),i=new ht({props:d}),le.push(()=>se(i,"checked",u)),{c(){q(e.$$.fragment),n=S(),q(t.$$.fragment),s=S(),q(r.$$.fragment),l=S(),a&&a.c(),c=S(),q(i.$$.fragment)},l(p){A(e.$$.fragment,p),n=W(p),A(t.$$.fragment,p),s=W(p),A(r.$$.fragment,p),l=W(p),a&&a.l(p),c=W(p),A(i.$$.fragment,p)},m(p,P){L(e,p,P),$(p,n,P),L(t,p,P),$(p,s,P),L(r,p,P),$(p,l,P),a&&a.m(p,P),$(p,c,P),L(i,p,P),f=!0},p(p,P){const H={};P&536870912&&(H.$$scope={dirty:P,ctx:p}),e.$set(H),p[2]?a?(a.p(p,P),P&4&&k(a,1)):(a=Xe(p),a.c(),k(a,1),a.m(c.parentNode,c)):a&&(me(),T(a,1,1,()=>{a=null}),he());const b={};P&536870912&&(b.$$scope={dirty:P,ctx:p}),!m&&P&16&&(m=!0,b.checked=p[4],oe(()=>m=!1)),i.$set(b)},i(p){f||(k(e.$$.fragment,p),k(t.$$.fragment,p),k(r.$$.fragment,p),k(a),k(i.$$.fragment,p),f=!0)},o(p){T(e.$$.fragment,p),T(t.$$.fragment,p),T(r.$$.fragment,p),T(a),T(i.$$.fragment,p),f=!1},d(p){p&&(_(n),_(s),_(l),_(c)),F(e,p),F(t,p),F(r,p),a&&a.d(p),F(i,p)}}}function jt(o){let e,n,t;return e=new Ae({props:{available:o[27].availableWidth,preferredTotals:o[0],compromisedTotals:o[1],verbose:!1}}),{c(){q(e.$$.fragment),n=S()},l(s){A(e.$$.fragment,s),n=W(s)},m(s,r){L(e,s,r),$(s,n,r),t=!0},p(s,r){const l={};r&128&&(l.available=s[27].availableWidth),r&1&&(l.preferredTotals=s[0]),r&2&&(l.compromisedTotals=s[1]),e.$set(l)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){s&&_(n),F(e,s)}}}function Je(o){let e,n;function t(){return o[16](o[26])}function s(){return o[17](o[26])}return e=new ct({props:{name:`Pinch point ${o[26]+1}: ${o[27].availableWidth}m`,$$slots:{default:[jt]},$$scope:{ctx:o}}}),e.$on("click",t),e.$on("mouseenter",s),e.$on("mouseleave",o[18]),{c(){q(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,l){L(e,r,l),n=!0},p(r,l){o=r;const c={};l&128&&(c.name=`Pinch point ${o[26]+1}: ${o[27].availableWidth}m`),l&536871043&&(c.$$scope={dirty:l,ctx:o}),e.$set(c)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){F(e,r)}}}function Gt(o){let e,n=o[26]+1+"",t,s;return{c(){e=E("span"),t=N(n),s=S(),this.h()},l(r){e=D(r,"SPAN",{class:!0});var l=G(e);t=I(l,n),l.forEach(_),s=W(r),this.h()},h(){ue(e,"class","dot svelte-48lsk4"),je(e,"highlight",o[26]==o[5]||o[26]==o[6])},m(r,l){$(r,e,l),M(e,t),$(r,s,l)},p(r,l){l&96&&je(e,"highlight",r[26]==r[5]||r[26]==r[6])},d(r){r&&(_(e),_(s))}}}function Qe(o){let e,n,t;function s(c){o[21](c,o[24])}function r(){return o[22](o[26])}let l={draggable:!0,$$slots:{default:[Gt]},$$scope:{ctx:o}};return o[24].location!==void 0&&(l.lngLat=o[24].location),e=new _t({props:l}),le.push(()=>se(e,"lngLat",s)),e.$on("click",r),{c(){q(e.$$.fragment)},l(c){A(e.$$.fragment,c)},m(c,i){L(e,c,i),t=!0},p(c,i){o=c;const m={};i&536871008&&(m.$$scope={dirty:i,ctx:o}),!n&&i&128&&(n=!0,m.lngLat=o[24].location,oe(()=>n=!1)),e.$set(m)},i(c){t||(k(e.$$.fragment,c),t=!0)},o(c){T(e.$$.fragment,c),t=!1},d(c){F(e,c)}}}function Ot(o){let e,n,t,s,r,l;e=new pt({}),e.$on("click",o[10]),t=new kt({props:{gj:o[7].summary.networkMap,show:o[4]}});let c=ne(o[7].checks.pinchPoints),i=[];for(let f=0;f<c.length;f+=1)i[f]=Qe(Ze(o,c,f));const m=f=>T(i[f],1,1,()=>{i[f]=null});return{c(){q(e.$$.fragment),n=S(),q(t.$$.fragment),s=S();for(let f=0;f<i.length;f+=1)i[f].c();r=te()},l(f){A(e.$$.fragment,f),n=W(f),A(t.$$.fragment,f),s=W(f);for(let a=0;a<i.length;a+=1)i[a].l(f);r=te()},m(f,a){L(e,f,a),$(f,n,a),L(t,f,a),$(f,s,a);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(f,a);$(f,r,a),l=!0},p(f,a){const u={};if(a&128&&(u.gj=f[7].summary.networkMap),a&16&&(u.show=f[4]),t.$set(u),a&480){c=ne(f[7].checks.pinchPoints);let d;for(d=0;d<c.length;d+=1){const p=Ze(f,c,d);i[d]?(i[d].p(p,a),k(i[d],1)):(i[d]=Qe(p),i[d].c(),k(i[d],1),i[d].m(r.parentNode,r))}for(me(),d=c.length;d<i.length;d+=1)m(d);he()}},i(f){if(!l){k(e.$$.fragment,f),k(t.$$.fragment,f);for(let a=0;a<c.length;a+=1)k(i[a]);l=!0}},o(f){T(e.$$.fragment,f),T(t.$$.fragment,f),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)T(i[a]);l=!1},d(f){f&&(_(n),_(s),_(r)),F(e,f),F(t,f),qe(i,f)}}}function Rt(o){let e,n,t,s,r,l,c,i,m,f,a;const u=[Ht,Ft],d=[];function p(b,v){return b[5]==null?0:1}t=p(o),s=d[t]=u[t](o);function P(b){o[23](b)}let H={$$slots:{default:[Ot]},$$scope:{ctx:o}};return o[2]!==void 0&&(H.map=o[2]),c=new bt({props:H}),le.push(()=>se(c,"map",P)),{c(){e=E("div"),n=E("div"),s.c(),r=S(),l=E("div"),q(c.$$.fragment),this.h()},l(b){e=D(b,"DIV",{style:!0});var v=G(e);n=D(v,"DIV",{style:!0});var C=G(n);s.l(C),C.forEach(_),r=W(v),l=D(v,"DIV",{style:!0});var B=G(l);A(c.$$.fragment,B),B.forEach(_),v.forEach(_),this.h()},h(){K(n,"width","30%"),K(n,"overflow-y","scroll"),K(n,"padding","10px"),K(n,"border","1px solid black"),K(l,"position","relative"),K(l,"width","100%"),K(e,"display","flex"),K(e,"height","80vh")},m(b,v){$(b,e,v),M(e,n),d[t].m(n,null),M(e,r),M(e,l),L(c,l,null),m=!0,f||(a=it(window,"keydown",o[12]),f=!0)},p(b,[v]){let C=t;t=p(b),t===C?d[t].p(b,v):(me(),T(d[C],1,1,()=>{d[C]=null}),he(),s=d[t],s?s.p(b,v):(s=d[t]=u[t](b),s.c()),k(s,1),s.m(n,null));const B={};v&536871152&&(B.$$scope={dirty:v,ctx:b}),!i&&v&4&&(i=!0,B.map=b[2],oe(()=>i=!1)),c.$set(B)},i(b){m||(k(s),k(c.$$.fragment,b),m=!0)},o(b){T(s),T(c.$$.fragment,b),m=!1},d(b){b&&_(e),d[t].d(),F(c),f=!1,a()}}}function yt(o,e,n){let t;Ee(o,R,w=>n(7,t=w));let{preferredTotals:s}=e,{compromisedTotals:r}=e,l,c=!1,i=!0,m,f;at(()=>{u(!1)});function a(w){n(5,m=w),n(6,f=null)}function u(w){let j={type:"FeatureCollection",features:t.checks.pinchPoints.map(z=>({type:"Feature",properties:{},geometry:{type:"Point",coordinates:z.location}}))};for(let z of t.summary.networkMap.features)j.features.push(z);j.features.length>0&&l.fitBounds(vt(j),{padding:20,animate:w})}function d(w){if(!c){if(m!=null){n(5,m=null);return}et(R,t.checks.pinchPoints=[...t.checks.pinchPoints,{location:w.detail.lngLat.toArray(),availableWidth:0,notes:""}],t),a(t.checks.pinchPoints.length-1)}}function p(){t.checks.pinchPoints.splice(m,1),R.set(t),n(5,m=null)}function P(w){if(m!=null&&w.key=="Escape")w.stopPropagation(),n(5,m=null);else if(m!=null&&w.key=="Delete"){let j=w.target.tagName;if(j=="INPUT"||j=="TEXTAREA")return;w.stopPropagation(),p()}}const H=()=>u(!0);function b(w){c=w,n(3,c)}function v(w){i=w,n(4,i)}const C=w=>a(w),B=w=>n(6,f=w),y=()=>n(6,f=null),O=()=>n(5,m=null),Q=()=>p();function be(w,j){o.$$.not_equal(j.location,w)&&(j.location=w,R.set(t))}const pe=w=>a(w);function ie(w){l=w,n(2,l)}return o.$$set=w=>{"preferredTotals"in w&&n(0,s=w.preferredTotals),"compromisedTotals"in w&&n(1,r=w.compromisedTotals)},[s,r,l,c,i,m,f,t,a,u,d,p,P,H,b,v,C,B,y,O,Q,be,pe,ie]}class zt extends ge{constructor(e){super(),$e(this,e,yt,Rt,_e,{preferredTotals:0,compromisedTotals:1})}}function Ye(o,e,n){const t=o.slice();return t[6]=e[n],t[8]=n,t}function Zt(o){let e;return{c(){e=N("Add")},l(n){e=I(n,"Add")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function xe(o,e){let n,t,s;function r(){return e[5](e[8])}return t=new Dt({props:{i:e[8],preferredTotals:e[2],compromisedTotals:e[1]}}),t.$on("delete",r),{key:o,first:null,c(){n=te(),q(t.$$.fragment),this.h()},l(l){n=te(),A(t.$$.fragment,l),this.h()},h(){this.first=n},m(l,c){$(l,n,c),L(t,l,c),s=!0},p(l,c){e=l;const i={};c&1&&(i.i=e[8]),c&4&&(i.preferredTotals=e[2]),c&2&&(i.compromisedTotals=e[1]),t.$set(i)},i(l){s||(k(t.$$.fragment,l),s=!0)},o(l){T(t.$$.fragment,l),s=!1},d(l){l&&_(n),F(t,l)}}}function Kt(o){let e,n,t="Preferred",s,r=o[2][0].toFixed(2)+"",l,c,i,m,f="Preferred",a,u=o[2][1].toFixed(2)+"",d,p,P,H,b="Compromised",v,C=o[1][0].toFixed(2)+"",B,y,O,Q,be="Compromised",pe,ie=o[1][1].toFixed(2)+"",w,j,z,Le=`Checking possible cross-sections of <u>homogeneous sections</u>
  of route along the proposed corridor`,ve,ae,Fe=`At regular intervals along the corridor measure and enter the available width
  to see if your proposed cross-sections can be accommodated`,ke,J,we,X,V=[],He=new Map,Te,Ce,Pe,re,Ne=`Checking possible cross-sections of any <u>constrained or atypical locations</u>
  along the proposed corridor`,Se,fe,Ie=`At key constraints along the corridor, measure and enter the available width
  to see if your proposed cross-sections can be accommodated. Click the map to
  add a pinch point.`,We,Y,x;J=new tt({props:{$$slots:{default:[Zt]},$$scope:{ctx:o}}}),J.$on("click",o[3]);let de=ne(o[0].checks.homogeneousSections);const Be=h=>h[6];for(let h=0;h<de.length;h+=1){let g=Ye(o,de,h),U=Be(g);He.set(U,V[h]=xe(U,g))}return Y=new zt({props:{preferredTotals:o[2],compromisedTotals:o[1]}}),{c(){e=E("p"),n=E("u"),n.textContent=t,s=N(`
  cross-section requites a desirable minimum width (m): `),l=N(r),c=S(),i=E("p"),m=E("u"),m.textContent=f,a=N(`
  cross-section requites an absolute minimum width (m): `),d=N(u),p=S(),P=E("p"),H=E("u"),H.textContent=b,v=N(`
  cross-section requites a desirable minimum width (m): `),B=N(C),y=S(),O=E("p"),Q=E("u"),Q.textContent=be,pe=N(`
  cross-section requites an absolute minimum width (m): `),w=N(ie),j=S(),z=E("h2"),z.innerHTML=Le,ve=S(),ae=E("p"),ae.textContent=Fe,ke=S(),q(J.$$.fragment),we=S(),X=E("div");for(let h=0;h<V.length;h+=1)V[h].c();Te=S(),Ce=E("hr"),Pe=S(),re=E("h2"),re.innerHTML=Ne,Se=S(),fe=E("p"),fe.textContent=Ie,We=S(),q(Y.$$.fragment),this.h()},l(h){e=D(h,"P",{});var g=G(e);n=D(g,"U",{"data-svelte-h":!0}),Z(n)!=="svelte-1gb9n3v"&&(n.textContent=t),s=I(g,`
  cross-section requites a desirable minimum width (m): `),l=I(g,r),g.forEach(_),c=W(h),i=D(h,"P",{});var U=G(i);m=D(U,"U",{"data-svelte-h":!0}),Z(m)!=="svelte-1gb9n3v"&&(m.textContent=f),a=I(U,`
  cross-section requites an absolute minimum width (m): `),d=I(U,u),U.forEach(_),p=W(h),P=D(h,"P",{});var ee=G(P);H=D(ee,"U",{"data-svelte-h":!0}),Z(H)!=="svelte-svpwa8"&&(H.textContent=b),v=I(ee,`
  cross-section requites a desirable minimum width (m): `),B=I(ee,C),ee.forEach(_),y=W(h),O=D(h,"P",{});var Me=G(O);Q=D(Me,"U",{"data-svelte-h":!0}),Z(Q)!=="svelte-svpwa8"&&(Q.textContent=be),pe=I(Me,`
  cross-section requites an absolute minimum width (m): `),w=I(Me,ie),Me.forEach(_),j=W(h),z=D(h,"H2",{"data-svelte-h":!0}),Z(z)!=="svelte-1x2x8kb"&&(z.innerHTML=Le),ve=W(h),ae=D(h,"P",{"data-svelte-h":!0}),Z(ae)!=="svelte-x0c18j"&&(ae.textContent=Fe),ke=W(h),A(J.$$.fragment,h),we=W(h),X=D(h,"DIV",{style:!0});var Ve=G(X);for(let De=0;De<V.length;De+=1)V[De].l(Ve);Ve.forEach(_),Te=W(h),Ce=D(h,"HR",{}),Pe=W(h),re=D(h,"H2",{"data-svelte-h":!0}),Z(re)!=="svelte-1m1bgig"&&(re.innerHTML=Ne),Se=W(h),fe=D(h,"P",{"data-svelte-h":!0}),Z(fe)!=="svelte-x52uk0"&&(fe.textContent=Ie),We=W(h),A(Y.$$.fragment,h),this.h()},h(){K(X,"display","flex"),K(X,"flex-direction","row"),K(X,"overflow-x","scroll")},m(h,g){$(h,e,g),M(e,n),M(e,s),M(e,l),$(h,c,g),$(h,i,g),M(i,m),M(i,a),M(i,d),$(h,p,g),$(h,P,g),M(P,H),M(P,v),M(P,B),$(h,y,g),$(h,O,g),M(O,Q),M(O,pe),M(O,w),$(h,j,g),$(h,z,g),$(h,ve,g),$(h,ae,g),$(h,ke,g),L(J,h,g),$(h,we,g),$(h,X,g);for(let U=0;U<V.length;U+=1)V[U]&&V[U].m(X,null);$(h,Te,g),$(h,Ce,g),$(h,Pe,g),$(h,re,g),$(h,Se,g),$(h,fe,g),$(h,We,g),L(Y,h,g),x=!0},p(h,[g]){(!x||g&4)&&r!==(r=h[2][0].toFixed(2)+"")&&ce(l,r),(!x||g&4)&&u!==(u=h[2][1].toFixed(2)+"")&&ce(d,u),(!x||g&2)&&C!==(C=h[1][0].toFixed(2)+"")&&ce(B,C),(!x||g&2)&&ie!==(ie=h[1][1].toFixed(2)+"")&&ce(w,ie);const U={};g&512&&(U.$$scope={dirty:g,ctx:h}),J.$set(U),g&23&&(de=ne(h[0].checks.homogeneousSections),me(),V=rt(V,g,Be,1,h,de,He,X,ft,xe,null,Ye),he());const ee={};g&4&&(ee.preferredTotals=h[2]),g&2&&(ee.compromisedTotals=h[1]),Y.$set(ee)},i(h){if(!x){k(J.$$.fragment,h);for(let g=0;g<de.length;g+=1)k(V[g]);k(Y.$$.fragment,h),x=!0}},o(h){T(J.$$.fragment,h);for(let g=0;g<V.length;g+=1)T(V[g]);T(Y.$$.fragment,h),x=!1},d(h){h&&(_(e),_(c),_(i),_(p),_(P),_(y),_(O),_(j),_(z),_(ve),_(ae),_(ke),_(we),_(X),_(Te),_(Ce),_(Pe),_(re),_(Se),_(fe),_(We)),F(J,h);for(let g=0;g<V.length;g+=1)V[g].d();F(Y,h)}}}function Xt(o,e,n){let t,s,r;Ee(o,R,m=>n(0,r=m));function l(){et(R,r.checks.homogeneousSections=[...r.checks.homogeneousSections,{availableWidth:0,notes:""}],r)}function c(m){r.checks.homogeneousSections.splice(m,1),R.set(r)}const i=m=>c(m);return o.$$.update=()=>{o.$$.dirty&1&&n(2,t=Ge(r,"Preferred")),o.$$.dirty&1&&n(1,s=Ge(r,"Compromised"))},[r,s,t,l,c,i]}class pn extends ge{constructor(e){super(),$e(this,e,Xt,Kt,_e,{})}}export{pn as component};
