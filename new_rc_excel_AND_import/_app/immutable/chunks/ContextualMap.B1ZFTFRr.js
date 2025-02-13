import{s as G,a as E,g as q,i as d,f as u,e as p,c,b as v,q as z,h as r,t as m,p as w,d as $,j as P}from"./scheduler.DGwhun8C.js";import{S as J,i as O,c as h,a as g,m as b,t as C,b as y,d as k}from"./index.B2vZYn3d.js";import{G as A,h as L,L as B,C as K}from"./index.B0kzjxTg.js";import{F as Q}from"./FillLayer.CY97QPfY.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.DW5N37UV.js";import{P as D}from"./Popup.D3i4T7-1.js";function I(f){let e,s,t="Name",n,l=f[2].name+"",a;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l)},l(i){e=c(i,"P",{});var o=v(e);s=c(o,"U",{"data-svelte-h":!0}),w(s)!=="svelte-5enbch"&&(s.textContent=t),n=$(o,`
            : `),a=$(o,l),o.forEach(u)},m(i,o){d(i,e,o),r(e,s),r(e,n),r(e,a)},p(i,o){o&4&&l!==(l=i[2].name+"")&&P(a,l)},d(i){i&&u(e)}}}function F(f){let e,s,t="Description",n,l=f[2].description+"",a;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l)},l(i){e=c(i,"P",{});var o=v(e);s=c(o,"U",{"data-svelte-h":!0}),w(s)!=="svelte-1q5z7l4"&&(s.textContent=t),n=$(o,`
            : `),a=$(o,l),o.forEach(u)},m(i,o){d(i,e,o),r(e,s),r(e,n),r(e,a)},p(i,o){o&4&&l!==(l=i[2].description+"")&&P(a,l)},d(i){i&&u(e)}}}function R(f){let e,s,t=f[2].name&&I(f),n=f[2].description&&F(f);return{c(){e=p("div"),t&&t.c(),s=E(),n&&n.c(),this.h()},l(l){e=c(l,"DIV",{class:!0});var a=v(e);t&&t.l(a),s=q(a),n&&n.l(a),a.forEach(u),this.h()},h(){z(e,"class","svelte-1qw0hzn")},m(l,a){d(l,e,a),t&&t.m(e,null),r(e,s),n&&n.m(e,null)},p(l,a){l[2].name?t?t.p(l,a):(t=I(l),t.c(),t.m(e,s)):t&&(t.d(1),t=null),l[2].description?n?n.p(l,a):(n=F(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&u(e),t&&t.d(),n&&n.d()}}}function W(f){let e,s;return e=new D({props:{$$slots:{default:[R,({props:t})=>({2:t}),({props:t})=>t?4:0]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),s=!0},p(t,n){const l={};n&12&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function M(f){let e,s,t="Name",n,l=f[2].name+"",a;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l)},l(i){e=c(i,"P",{});var o=v(e);s=c(o,"U",{"data-svelte-h":!0}),w(s)!=="svelte-5enbch"&&(s.textContent=t),n=$(o,`
            : `),a=$(o,l),o.forEach(u)},m(i,o){d(i,e,o),r(e,s),r(e,n),r(e,a)},p(i,o){o&4&&l!==(l=i[2].name+"")&&P(a,l)},d(i){i&&u(e)}}}function N(f){let e,s,t="Description",n,l=f[2].description+"",a;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l)},l(i){e=c(i,"P",{});var o=v(e);s=c(o,"U",{"data-svelte-h":!0}),w(s)!=="svelte-1q5z7l4"&&(s.textContent=t),n=$(o,`
            : `),a=$(o,l),o.forEach(u)},m(i,o){d(i,e,o),r(e,s),r(e,n),r(e,a)},p(i,o){o&4&&l!==(l=i[2].description+"")&&P(a,l)},d(i){i&&u(e)}}}function H(f){let e,s,t="Length",n,l=(f[2].length_meters/1e3).toFixed(2)+"",a,i;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l),i=m(" kilometers")},l(o){e=c(o,"P",{});var _=v(e);s=c(_,"U",{"data-svelte-h":!0}),w(s)!=="svelte-73bpxc"&&(s.textContent=t),n=$(_,`
            : `),a=$(_,l),i=$(_," kilometers"),_.forEach(u)},m(o,_){d(o,e,_),r(e,s),r(e,n),r(e,a),r(e,i)},p(o,_){_&4&&l!==(l=(o[2].length_meters/1e3).toFixed(2)+"")&&P(a,l)},d(o){o&&u(e)}}}function X(f){let e,s,t,n=f[2].name&&M(f),l=f[2].description&&N(f),a=f[2].length_meters&&H(f);return{c(){e=p("div"),n&&n.c(),s=E(),l&&l.c(),t=E(),a&&a.c(),this.h()},l(i){e=c(i,"DIV",{class:!0});var o=v(e);n&&n.l(o),s=q(o),l&&l.l(o),t=q(o),a&&a.l(o),o.forEach(u),this.h()},h(){z(e,"class","svelte-1qw0hzn")},m(i,o){d(i,e,o),n&&n.m(e,null),r(e,s),l&&l.m(e,null),r(e,t),a&&a.m(e,null)},p(i,o){i[2].name?n?n.p(i,o):(n=M(i),n.c(),n.m(e,s)):n&&(n.d(1),n=null),i[2].description?l?l.p(i,o):(l=N(i),l.c(),l.m(e,t)):l&&(l.d(1),l=null),i[2].length_meters?a?a.p(i,o):(a=H(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&u(e),n&&n.d(),l&&l.d(),a&&a.d()}}}function Y(f){let e,s;return e=new D({props:{$$slots:{default:[X,({props:t})=>({2:t}),({props:t})=>t?4:0]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),s=!0},p(t,n){const l={};n&12&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function T(f){let e,s,t="Name",n,l=f[2].name+"",a;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l)},l(i){e=c(i,"P",{});var o=v(e);s=c(o,"U",{"data-svelte-h":!0}),w(s)!=="svelte-5enbch"&&(s.textContent=t),n=$(o,`
            : `),a=$(o,l),o.forEach(u)},m(i,o){d(i,e,o),r(e,s),r(e,n),r(e,a)},p(i,o){o&4&&l!==(l=i[2].name+"")&&P(a,l)},d(i){i&&u(e)}}}function V(f){let e,s,t="Description",n,l=f[2].description+"",a;return{c(){e=p("p"),s=p("u"),s.textContent=t,n=m(`
            : `),a=m(l)},l(i){e=c(i,"P",{});var o=v(e);s=c(o,"U",{"data-svelte-h":!0}),w(s)!=="svelte-1q5z7l4"&&(s.textContent=t),n=$(o,`
            : `),a=$(o,l),o.forEach(u)},m(i,o){d(i,e,o),r(e,s),r(e,n),r(e,a)},p(i,o){o&4&&l!==(l=i[2].description+"")&&P(a,l)},d(i){i&&u(e)}}}function Z(f){let e,s,t=f[2].name&&T(f),n=f[2].description&&V(f);return{c(){e=p("div"),t&&t.c(),s=E(),n&&n.c(),this.h()},l(l){e=c(l,"DIV",{class:!0});var a=v(e);t&&t.l(a),s=q(a),n&&n.l(a),a.forEach(u),this.h()},h(){z(e,"class","svelte-1qw0hzn")},m(l,a){d(l,e,a),t&&t.m(e,null),r(e,s),n&&n.m(e,null)},p(l,a){l[2].name?t?t.p(l,a):(t=T(l),t.c(),t.m(e,s)):t&&(t.d(1),t=null),l[2].description?n?n.p(l,a):(n=V(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&u(e),t&&t.d(),n&&n.d()}}}function x(f){let e,s;return e=new D({props:{$$slots:{default:[Z,({props:t})=>({2:t}),({props:t})=>t?4:0]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),s=!0},p(t,n){const l={};n&12&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function ee(f){let e,s,t,n,l,a;return e=new Q({props:{filter:["==",["geometry-type"],"Polygon"],manageHoverState:!0,eventsIfTopMost:!0,paint:{"fill-color":U,"fill-opacity":L(.5,1)},layout:{visibility:f[1]?"visible":"none"},$$slots:{default:[W]},$$scope:{ctx:f}}}),t=new B({props:{filter:["==",["geometry-type"],"LineString"],manageHoverState:!0,eventsIfTopMost:!0,paint:{"line-width":8,"line-color":U,"line-opacity":L(.5,1)},layout:{visibility:f[1]?"visible":"none"},$$slots:{default:[Y]},$$scope:{ctx:f}}}),l=new K({props:{filter:["==",["geometry-type"],"Point"],manageHoverState:!0,eventsIfTopMost:!0,paint:{"circle-radius":10,"circle-color":U,"circle-opacity":L(.5,1)},layout:{visibility:f[1]?"visible":"none"},$$slots:{default:[x]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment),s=E(),h(t.$$.fragment),n=E(),h(l.$$.fragment)},l(i){g(e.$$.fragment,i),s=q(i),g(t.$$.fragment,i),n=q(i),g(l.$$.fragment,i)},m(i,o){b(e,i,o),d(i,s,o),b(t,i,o),d(i,n,o),b(l,i,o),a=!0},p(i,o){const _={};o&2&&(_.layout={visibility:i[1]?"visible":"none"}),o&8&&(_.$$scope={dirty:o,ctx:i}),e.$set(_);const S={};o&2&&(S.layout={visibility:i[1]?"visible":"none"}),o&8&&(S.$$scope={dirty:o,ctx:i}),t.$set(S);const j={};o&2&&(j.layout={visibility:i[1]?"visible":"none"}),o&8&&(j.$$scope={dirty:o,ctx:i}),l.$set(j)},i(i){a||(C(e.$$.fragment,i),C(t.$$.fragment,i),C(l.$$.fragment,i),a=!0)},o(i){y(e.$$.fragment,i),y(t.$$.fragment,i),y(l.$$.fragment,i),a=!1},d(i){i&&(u(s),u(n)),k(e,i),k(t,i),k(l,i)}}}function te(f){let e,s;return e=new A({props:{data:f[0],$$slots:{default:[ee]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){b(e,t,n),s=!0},p(t,[n]){const l={};n&1&&(l.data=t[0]),n&10&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}let U="cyan";function le(f,e,s){let{gj:t}=e,{show:n}=e;return f.$$set=l=>{"gj"in l&&s(0,t=l.gj),"show"in l&&s(1,n=l.show)},[t,n]}class re extends J{constructor(e){super(),O(this,e,le,te,G,{gj:0,show:1})}}export{re as C};
