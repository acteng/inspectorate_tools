import{s as m,e as u,c as f,q as c,i as p,D as o,z as _,f as d}from"./scheduler.B5FfXhnD.js";import{S as h,i as b,c as v,a as g,m as $,t as D,b as q,d as y}from"./index.VeCIHQiF.js";import{F}from"./FormElement.iPte9iIl.js";import"./index.B-vk3dUq.js";import{v as I}from"./v4.b0td5MfA.js";function S(s){let e,a,t;return{c(){e=u("input"),this.h()},l(n){e=f(n,"INPUT",{type:!0}),this.h()},h(){c(e,"type","date")},m(n,l){p(n,e,l),o(e,s[0]),a||(t=_(e,"input",s[3]),a=!0)},p(n,l){l&1&&o(e,n[0])},d(n){n&&d(e),a=!1,t()}}}function w(s){let e,a;return e=new F({props:{label:s[1],id:s[2],$$slots:{default:[S]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){$(e,t,n),a=!0},p(t,[n]){const l={};n&2&&(l.label=t[1]),n&17&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){q(e.$$.fragment,t),a=!1},d(t){y(e,t)}}}function z(s,e,a){let{label:t}=e,{value:n}=e,l=I();function r(){n=this.value,a(0,n)}return s.$$set=i=>{"label"in i&&a(1,t=i.label),"value"in i&&a(0,n=i.value)},[n,t,l,r]}class U extends h{constructor(e){super(),b(this,e,z,w,m,{label:1,value:0})}}export{U as D};
