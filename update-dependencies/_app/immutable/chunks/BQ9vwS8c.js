import{s as J,d as k,K,a as R,E as M,i as C,b as v,p as m,c as p,e as q,f as N,g as I,h as S,t as T,j as L,L as P,x as U,J as j,y as w,C as z}from"./hklQk-fT.js";import{S as H,i as O,d as Q,t as W,a as X,m as Y,c as Z,b as y}from"./4RGf_tlt.js";import{e as A}from"./BrDnhTDH.js";import{E as x}from"./Cbq5WR3j.js";import"./DNOoCnSc.js";import{v as $}from"./CtRu48qb.js";function B(i,a,e){const s=i.slice();return s[11]=a[e][0],s[12]=a[e][1],s}function F(i){let a,e;return{c(){a=S("div"),e=T(i[2]),this.h()},l(s){a=p(s,"DIV",{class:!0});var _=q(a);e=N(_,i[2]),_.forEach(k),this.h()},h(){m(a,"class","govuk-hint")},m(s,_){C(s,a,_),v(a,e)},p(s,_){_&4&&R(e,s[2])},d(s){s&&k(a)}}}function G(i){let a,e,s,_,E=!1,d,c,h=i[12]+"",r,g,u,b,o,l;return b=P(i[10][0]),{c(){a=S("div"),e=S("input"),d=L(),c=S("label"),r=T(h),u=L(),this.h()},l(n){a=p(n,"DIV",{class:!0});var t=q(a);e=p(t,"INPUT",{class:!0,id:!0,type:!0}),d=I(t),c=p(t,"LABEL",{class:!0,for:!0});var f=q(c);r=N(f,h),f.forEach(k),u=I(t),t.forEach(k),this.h()},h(){m(e,"class","govuk-radios__input"),m(e,"id",s=i[6]+i[11]),m(e,"type","radio"),e.__value=_=i[11],j(e,e.__value),m(c,"class","govuk-label govuk-radios__label"),m(c,"for",g=i[6]+i[11]),m(a,"class","govuk-radios__item"),b.p(e)},m(n,t){C(n,a,t),v(a,e),e.checked=e.__value===i[0],v(a,d),v(a,c),v(c,r),v(a,u),o||(l=[w(e,"change",i[9]),w(e,"change",i[8])],o=!0)},p(n,t){t&8&&s!==(s=n[6]+n[11])&&m(e,"id",s),t&8&&_!==(_=n[11])&&(e.__value=_,j(e,e.__value),E=!0),(E||t&9)&&(e.checked=e.__value===n[0]),t&8&&h!==(h=n[12]+"")&&R(r,h),t&8&&g!==(g=n[6]+n[11])&&m(c,"for",g)},d(n){n&&k(a),b.r(),o=!1,U(l)}}}function ee(i){let a,e,s,_,E,d,c,h,r,g;d=new x({props:{errorMessage:i[5]}});let u=i[2]&&F(i),b=A(i[3]),o=[];for(let l=0;l<b.length;l+=1)o[l]=G(B(i,b,l));return{c(){a=S("div"),e=S("fieldset"),s=S("legend"),_=T(i[1]),E=L(),y(d.$$.fragment),c=L(),u&&u.c(),h=L(),r=S("div");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){a=p(l,"DIV",{class:!0});var n=q(a);e=p(n,"FIELDSET",{class:!0});var t=q(e);s=p(t,"LEGEND",{class:!0});var f=q(s);_=N(f,i[1]),f.forEach(k),E=I(t),Z(d.$$.fragment,t),c=I(t),u&&u.l(t),h=I(t),r=p(t,"DIV",{class:!0,"data-module":!0});var D=q(r);for(let V=0;V<o.length;V+=1)o[V].l(D);D.forEach(k),t.forEach(k),n.forEach(k),this.h()},h(){m(s,"class","govuk-fieldset__legend govuk-fieldset__legend--s"),m(r,"class","govuk-radios"),m(r,"data-module","govuk-radios"),M(r,"govuk-radios--inline",i[4]),M(r,"govuk-radios--small",i[4]),m(e,"class","govuk-fieldset"),m(a,"class","govuk-form-group")},m(l,n){C(l,a,n),v(a,e),v(e,s),v(s,_),v(e,E),Y(d,e,null),v(e,c),u&&u.m(e,null),v(e,h),v(e,r);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(r,null);g=!0},p(l,[n]){(!g||n&2)&&R(_,l[1]);const t={};if(n&32&&(t.errorMessage=l[5]),d.$set(t),l[2]?u?u.p(l,n):(u=F(l),u.c(),u.m(e,h)):u&&(u.d(1),u=null),n&73){b=A(l[3]);let f;for(f=0;f<b.length;f+=1){const D=B(l,b,f);o[f]?o[f].p(D,n):(o[f]=G(D),o[f].c(),o[f].m(r,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=b.length}(!g||n&16)&&M(r,"govuk-radios--inline",l[4]),(!g||n&16)&&M(r,"govuk-radios--small",l[4])},i(l){g||(X(d.$$.fragment,l),g=!0)},o(l){W(d.$$.fragment,l),g=!1},d(l){l&&k(a),Q(d),u&&u.d(),K(o,l)}}}function le(i,a,e){let s,{label:_}=a,{hint:E=""}=a,{choices:d}=a,{inlineSmall:c=!1}=a,{required:h=!1}=a,{value:r}=a,g=$();const u=[[]];function b(l){z.call(this,i,l)}function o(){r=this.__value,e(0,r)}return i.$$set=l=>{"label"in l&&e(1,_=l.label),"hint"in l&&e(2,E=l.hint),"choices"in l&&e(3,d=l.choices),"inlineSmall"in l&&e(4,c=l.inlineSmall),"required"in l&&e(7,h=l.required),"value"in l&&e(0,r=l.value)},i.$$.update=()=>{i.$$.dirty&129&&e(5,s=h&&r==""?"Required":"")},[r,_,E,d,c,s,g,h,b,o,u]}class oe extends H{constructor(a){super(),O(this,a,le,ee,J,{label:1,hint:2,choices:3,inlineSmall:4,required:7,value:0})}}export{oe as R};
