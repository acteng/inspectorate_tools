import{s as C,e as f,a as d,c as $,b as w,g as _,p as S,f as h,q,i as V,h as p,k}from"../chunks/scheduler.DGwhun8C.js";import{S as D,i as E,c as g,a as v,m as x,t as b,b as T,d as y}from"../chunks/index.B2vZYn3d.js";import"../chunks/SelectWithCustom.svelte_svelte_type_style_lang.DtTunhhu.js";import{T as P}from"../chunks/TextArea.B6Krp2sm.js";import{s as j}from"../chunks/data.B98JGcGG.js";import{C as A}from"../chunks/ConvertToXlsx.-gCMgeyR.js";import{e as I}from"../chunks/da_log.C1Pqa2M-.js";function X(o){let t,a,i,n,l=`This page is for internal use only. The values below are TSV (tab-separated
    values), copyable into Excel.`,c,r,m;return a=new A({}),r=new P({props:{label:"TSV output",value:o[0]}}),{c(){t=f("div"),g(a.$$.fragment),i=d(),n=f("p"),n.textContent=l,c=d(),g(r.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var s=w(t);v(a.$$.fragment,s),i=_(s),n=$(s,"P",{"data-svelte-h":!0}),S(n)!=="svelte-9nq73f"&&(n.textContent=l),c=_(s),v(r.$$.fragment,s),s.forEach(h),this.h()},h(){q(t,"class","govuk-width-container")},m(e,s){V(e,t,s),x(a,t,null),p(t,i),p(t,n),p(t,c),x(r,t,null),m=!0},p(e,[s]){const u={};s&1&&(u.value=e[0]),r.$set(u)},i(e){m||(b(a.$$.fragment,e),b(r.$$.fragment,e),m=!0)},o(e){T(a.$$.fragment,e),T(r.$$.fragment,e),m=!1},d(e){e&&h(t),y(a),y(r)}}}function z(o,t,a){let i,n;return k(o,j,l=>a(1,n=l)),o.$$.update=()=>{o.$$.dirty&2&&a(0,i=I(n).map(l=>`"${l[1]}"`).join("	"))},[i,n]}class M extends D{constructor(t){super(),E(this,t,z,X,C,{})}}export{M as component};
