import{s as Q,a as y,e as k,J as I,g as P,c as p,b as E,f as m,q as O,N as R,i as b,h as S,O as T,z as q,B as U,y as W,E as X,P as Y,t as z,d as B,j as J,D as M}from"./scheduler.B5FfXhnD.js";import{S as Z,i as x,c as L,a as V,m as A,t as G,b as H,d as K}from"./index.VeCIHQiF.js";import{e as w}from"./each.XauKQHIb.js";import{v as $,E as ee}from"./ErrorMessage.DVpXqM0G.js";import{F as le}from"./FormElement.iPte9iIl.js";import"./index.CFYJUDsU.js";function C(i,e,s){const t=i.slice();return t[10]=e[s][0],t[11]=e[s][1],t}function D(i){let e,s;return{c(){e=k("div"),s=z(i[2]),this.h()},l(t){e=p(t,"DIV",{class:!0});var a=E(e);s=B(a,i[2]),a.forEach(m),this.h()},h(){O(e,"class","govuk-hint")},m(t,a){b(t,e,a),S(e,s)},p(t,a){a&4&&J(s,t[2])},d(t){t&&m(e)}}}function F(i){let e;return{c(){e=k("option"),this.h()},l(s){e=p(s,"OPTION",{}),E(e).forEach(m),this.h()},h(){e.__value="",M(e,e.__value)},m(s,t){b(s,e,t)},d(s){s&&m(e)}}}function j(i){let e,s=i[11]+"",t,a;return{c(){e=k("option"),t=z(s),this.h()},l(n){e=p(n,"OPTION",{});var c=E(e);t=B(c,s),c.forEach(m),this.h()},h(){e.__value=a=i[10],M(e,e.__value)},m(n,c){b(n,e,c),S(e,t)},p(n,c){c&8&&s!==(s=n[11]+"")&&J(t,s),c&8&&a!==(a=n[10])&&(e.__value=a,M(e,e.__value))},d(n){n&&m(e)}}}function te(i){let e,s,t,a,n,c,g,v;e=new ee({props:{errorMessage:i[6]}});let r=i[2]&&D(i),f=i[4]&&F(),d=w(i[3]),o=[];for(let l=0;l<d.length;l+=1)o[l]=j(C(i,d,l));return{c(){L(e.$$.fragment),s=y(),r&&r.c(),t=y(),a=k("select"),f&&f.c(),n=I();for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){V(e.$$.fragment,l),s=P(l),r&&r.l(l),t=P(l),a=p(l,"SELECT",{class:!0,id:!0});var _=E(a);f&&f.l(_),n=I();for(let h=0;h<o.length;h+=1)o[h].l(_);_.forEach(m),this.h()},h(){O(a,"class","govuk-select"),O(a,"id",i[7]),a.disabled=i[5],i[0]===void 0&&R(()=>i[9].call(a))},m(l,_){A(e,l,_),b(l,s,_),r&&r.m(l,_),b(l,t,_),b(l,a,_),f&&f.m(a,null),S(a,n);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(a,null);T(a,i[0],!0),c=!0,g||(v=[q(a,"change",i[9]),q(a,"change",i[8])],g=!0)},p(l,_){const h={};if(_&64&&(h.errorMessage=l[6]),e.$set(h),l[2]?r?r.p(l,_):(r=D(l),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),l[4]?f||(f=F(),f.c(),f.m(a,n)):f&&(f.d(1),f=null),_&8){d=w(l[3]);let u;for(u=0;u<d.length;u+=1){const N=C(l,d,u);o[u]?o[u].p(N,_):(o[u]=j(N),o[u].c(),o[u].m(a,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=d.length}(!c||_&32)&&(a.disabled=l[5]),_&9&&T(a,l[0])},i(l){c||(G(e.$$.fragment,l),c=!0)},o(l){H(e.$$.fragment,l),c=!1},d(l){l&&(m(s),m(t),m(a)),K(e,l),r&&r.d(l),f&&f.d(),U(o,l),g=!1,W(v)}}}function ae(i){let e,s;return e=new le({props:{label:i[1],id:i[7],$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){A(e,t,a),s=!0},p(t,[a]){const n={};a&2&&(n.label=t[1]),a&16509&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){K(e,t)}}}function se(i,e,s){let{label:t}=e,{hint:a=""}=e,{choices:n}=e,{emptyOption:c=!1}=e,{disabled:g=!1}=e,{errorMessage:v=""}=e,{value:r}=e,f=$();function d(l){X.call(this,i,l)}function o(){r=Y(this),s(0,r),s(3,n)}return i.$$set=l=>{"label"in l&&s(1,t=l.label),"hint"in l&&s(2,a=l.hint),"choices"in l&&s(3,n=l.choices),"emptyOption"in l&&s(4,c=l.emptyOption),"disabled"in l&&s(5,g=l.disabled),"errorMessage"in l&&s(6,v=l.errorMessage),"value"in l&&s(0,r=l.value)},[r,t,a,n,c,g,v,f,d,o]}class _e extends Z{constructor(e){super(),x(this,e,se,ae,Q,{label:1,hint:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}export{_e as S};
