import{s as P,l as ne,d as g,u as oe,m as ae,o as fe,i as k,b as S,p as L,c as V,e as J,q as se,g as N,h as H,j as R,r as A,v as Y,D as j,k as K,f as T,t as G,n as le}from"../chunks/hklQk-fT.js";import{S as z,i as B,t as $,a as p,e as I,d as C,g as U,f as D,m as M,c as w,b as y}from"../chunks/4RGf_tlt.js";import{p as ie}from"../chunks/_g1Uj-bx.js";import{R as O}from"../chunks/BQ9vwS8c.js";import"../chunks/DNOoCnSc.js";import{T as ce}from"../chunks/owQiCPJI.js";import{W}from"../chunks/CwsiILBB.js";import{s as q}from"../chunks/Dbq8FgNE.js";import{Y as E}from"../chunks/C0-_JFa5.js";import"../chunks/BMpGT0HD.js";import"../chunks/CpqXYj30.js";function ue(a){let e,n,t="Proceed with the scheme",r,o,f;const u=a[1].default,c=ne(u,a,a[0],null);return{c(){e=H("div"),n=H("h1"),n.textContent=t,r=R(),o=H("div"),c&&c.c(),this.h()},l(_){e=V(_,"DIV",{class:!0});var m=J(e);n=V(m,"H1",{class:!0,"data-svelte-h":!0}),se(n)!=="svelte-uxivms"&&(n.textContent=t),r=N(m),o=V(m,"DIV",{class:!0});var l=J(o);c&&c.l(l),l.forEach(g),m.forEach(g),this.h()},h(){L(n,"class","govuk-panel__title"),L(o,"class","govuk-panel__body"),L(e,"class","govuk-panel govuk-panel--confirmation")},m(_,m){k(_,e,m),S(e,n),S(e,r),S(e,o),c&&c.m(o,null),f=!0},p(_,[m]){c&&c.p&&(!f||m&1)&&oe(c,u,_,_[0],f?fe(u,_[0],m,null):ae(_[0]),null)},i(_){f||(p(c,_),f=!0)},o(_){$(c,_),f=!1},d(_){_&&g(e),c&&c.d(_)}}}function _e(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,t]}class X extends z{constructor(e){super(),B(this,e,_e,ue,P,{})}}function me(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"};a[0].trafficMitigationCheck.majorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ2),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[de,pe],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ2=="No"?0:i[0].trafficMitigationCheck.majorQ2=="Yes"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ2,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r===d?~r&&l[r].p(i,s):(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function $e(a){let e,n;return e=new W({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function pe(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Do the major road(s) exceed or approach the pollution limit values?"};a[0].trafficMitigationCheck.majorQ3!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ3),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[he,ge],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ3=="Yes"?0:i[0].trafficMitigationCheck.majorQ3=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ3,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r===d?~r&&l[r].p(i,s):(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function de(a){let e,n;return e=new X({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ge(a){let e,n,t,r,o,f,u;function c(i){a[4](i)}let _={label:"Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?",choices:ie(["Local","Wider","Measures are inadequate"])};a[0].trafficMitigationCheck.majorQ4!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ4),e=new O({props:_}),A.push(()=>I(e,"value",c));const m=[ve,be,ke],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ4=="Local"?0:i[0].trafficMitigationCheck.majorQ4=="Wider"?1:i[0].trafficMitigationCheck.majorQ4=="Measures are inadequate"?2:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ4,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r!==d&&(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function he(a){let e,n;return e=new W({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ke(a){let e,n;return e=new W({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function be(a){let e,n;return e=new W({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ve(a){let e,n;return e=new W({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Ce(a){let e;return{c(){e=G(`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},l(n){e=T(n,`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Me(a){let e;return{c(){e=G(`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},l(n){e=T(n,`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function we(a){let e;return{c(){e=G(`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},l(n){e=T(n,`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function ye(a){let e;return{c(){e=G(`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},l(n){e=T(n,`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Qe(a){let e;return{c(){e=G("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=T(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function je(a){let e;return{c(){e=G(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=T(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function qe(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors, such as schools or hospitals there?"};a[0].trafficMitigationCheck.majorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ1),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[$e,me],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ1=="Yes"?0:i[0].trafficMitigationCheck.majorQ1=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,[s]){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ1,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r===d?~r&&l[r].p(i,s):(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function Ne(a,e,n){let t;K(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ1,c)&&(t.trafficMitigationCheck.majorQ1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ2,c)&&(t.trafficMitigationCheck.majorQ2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ3,c)&&(t.trafficMitigationCheck.majorQ3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ4,c)&&(t.trafficMitigationCheck.majorQ4=c,q.set(t))}return[t,r,o,f,u]}class Re extends z{constructor(e){super(),B(this,e,Ne,qe,P,{})}}function Ae(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to these streets?"};a[0].trafficMitigationCheck.minorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ2),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[Te,Ie],l=[];function h(i,s){return i[0].trafficMitigationCheck.minorQ2=="Yes"?0:i[0].trafficMitigationCheck.minorQ2=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.minorQ2,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r!==d&&(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function Ye(a){let e,n;return e=new W({props:{$$slots:{default:[De]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p(t,r){const o={};r&8&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Ie(a){let e,n;return e=new X({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Te(a){let e,n;return e=new W({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Ge(a){let e;return{c(){e=G("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=T(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Ue(a){let e;return{c(){e=G("Redesign scheme with alternative diversionary routes or a wider focus")},l(n){e=T(n,"Redesign scheme with alternative diversionary routes or a wider focus")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function De(a){let e;return{c(){e=G(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=T(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function We(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"};a[0].trafficMitigationCheck.minorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ1),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[Ye,Ae],l=[];function h(i,s){return i[0].trafficMitigationCheck.minorQ1=="Yes"?0:i[0].trafficMitigationCheck.minorQ1=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,[s]){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.minorQ1,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r===d?~r&&l[r].p(i,s):(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function Se(a,e,n){let t;K(a,q,f=>n(0,t=f));function r(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ1,f)&&(t.trafficMitigationCheck.minorQ1=f,q.set(t))}function o(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ2,f)&&(t.trafficMitigationCheck.minorQ2=f,q.set(t))}return[t,r,o]}class Ee extends z{constructor(e){super(),B(this,e,Se,We,P,{})}}function Ve(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is it expected to reduce traffic both within the scheme and elsewhere?",choices:[["Yes","Yes, traffic is expected to reduce due to modal shift and trip reduction"],["No","No, some traffic is expected to be displaced to other roads"]]};a[0].trafficMitigationCheck.q2!==void 0&&(_.value=a[0].trafficMitigationCheck.q2),e=new O({props:_}),A.push(()=>I(e,"value",c));const m=[Pe,Le],l=[];function h(i,s){return i[0].trafficMitigationCheck.q2=="Yes"?0:i[0].trafficMitigationCheck.q2=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.q2,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r===d?~r&&l[r].p(i,s):(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function He(a){let e,n;return e=new W({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Le(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Where will displaced traffic go?",choices:ie(["Major routes (e.g. scheme eliminates a rat run)","Minor streets (e.g. residential)"])};a[0].trafficMitigationCheck.q3!==void 0&&(_.value=a[0].trafficMitigationCheck.q3),e=new O({props:_}),A.push(()=>I(e,"value",c));const m=[Be,ze],l=[];function h(i,s){return i[0].trafficMitigationCheck.q3=="Major routes (e.g. scheme eliminates a rat run)"?0:i[0].trafficMitigationCheck.q3=="Minor streets (e.g. residential)"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){y(e.$$.fragment),t=R(),o&&o.c(),f=j()},l(i){w(e.$$.fragment,i),t=N(i),o&&o.l(i),f=j()},m(i,s){M(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.q3,Y(()=>n=!1)),e.$set(b);let d=r;r=h(i),r!==d&&(o&&(U(),$(l[d],1,1,()=>{l[d]=null}),D()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),p(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(p(e.$$.fragment,i),p(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(g(t),g(f)),C(e,i),~r&&l[r].d(i)}}}function Pe(a){let e,n;return e=new X({}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p:le,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ze(a){let e,n;return e=new Ee({}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Be(a){let e,n;return e=new Re({}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Fe(a){let e;return{c(){e=G("Stop. Redesign scheme to reduce traffic.")},l(n){e=T(n,"Stop. Redesign scheme to reduce traffic.")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Je(a){let e,n,t,r,o,f,u,c,_,m,l,h;function i(v){a[1](v)}let s={label:"Is the scheme expected to reduce traffic?"};a[0].trafficMitigationCheck.q1!==void 0&&(s.value=a[0].trafficMitigationCheck.q1),n=new E({props:s}),A.push(()=>I(n,"value",i));const b=[He,Ve],d=[];function Z(v,Q){return v[0].trafficMitigationCheck.q1=="No"?0:v[0].trafficMitigationCheck.q1=="Yes"?1:-1}~(o=Z(a))&&(f=d[o]=b[o](a));function re(v){a[4](v)}let x={label:"Results & Commentary"};return a[0].trafficMitigationCheck.notes!==void 0&&(x.value=a[0].trafficMitigationCheck.notes),m=new ce({props:x}),A.push(()=>I(m,"value",re)),{c(){e=H("div"),y(n.$$.fragment),r=R(),f&&f.c(),u=R(),c=H("hr"),_=R(),y(m.$$.fragment),this.h()},l(v){e=V(v,"DIV",{class:!0});var Q=J(e);w(n.$$.fragment,Q),r=N(Q),f&&f.l(Q),u=N(Q),c=V(Q,"HR",{}),_=N(Q),w(m.$$.fragment,Q),Q.forEach(g),this.h()},h(){L(e,"class","govuk-width-container")},m(v,Q){k(v,e,Q),M(n,e,null),S(e,r),~o&&d[o].m(e,null),S(e,u),S(e,c),S(e,_),M(m,e,null),h=!0},p(v,[Q]){const ee={};!t&&Q&1&&(t=!0,ee.value=v[0].trafficMitigationCheck.q1,Y(()=>t=!1)),n.$set(ee);let F=o;o=Z(v),o===F?~o&&d[o].p(v,Q):(f&&(U(),$(d[F],1,1,()=>{d[F]=null}),D()),~o?(f=d[o],f?f.p(v,Q):(f=d[o]=b[o](v),f.c()),p(f,1),f.m(e,u)):f=null);const te={};!l&&Q&1&&(l=!0,te.value=v[0].trafficMitigationCheck.notes,Y(()=>l=!1)),m.$set(te)},i(v){h||(p(n.$$.fragment,v),p(f),p(m.$$.fragment,v),h=!0)},o(v){$(n.$$.fragment,v),$(f),$(m.$$.fragment,v),h=!1},d(v){v&&g(e),C(n),~o&&d[o].d(),C(m)}}}function Ke(a,e,n){let t;K(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.q1,c)&&(t.trafficMitigationCheck.q1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.q2,c)&&(t.trafficMitigationCheck.q2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.q3,c)&&(t.trafficMitigationCheck.q3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.notes,c)&&(t.trafficMitigationCheck.notes=c,q.set(t))}return[t,r,o,f,u]}class ft extends z{constructor(e){super(),B(this,e,Ke,Je,P,{})}}export{ft as component};
