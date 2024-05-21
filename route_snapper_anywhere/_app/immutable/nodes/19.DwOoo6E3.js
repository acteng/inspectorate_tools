import{s as H,m as oe,e as B,a as N,b as E,f as ie,g as ae,c as A,d as h,o as z,i as k,j as F,u as fe,p as se,q as le,r as R,w as Q,v as Y,k as J,t as T,h as G,n as ce}from"../chunks/scheduler.Cns_Y-fU.js";import{S as L,i as P,t as $,b as p,e as I,c as C,a as M,m as w,g as S,f as U,d as y}from"../chunks/index.B1sdSzhI.js";import{S as K}from"../chunks/Select.D65_JAfX.js";import{W as D}from"../chunks/WarningText.iVF0F6jS.js";import{p as re}from"../chunks/index.BfJJf34w.js";import{s as q}from"../chunks/data.CUS-6sO-.js";import{Y as O}from"../chunks/YesNo.BrKJYwwo.js";import"../chunks/paths.Dsxu-9k2.js";import"../chunks/Geocoder.svelte_svelte_type_style_lang.MMiTdOl1.js";import{T as ue}from"../chunks/TextArea.DODp0uDl.js";import{B as _e}from"../chunks/Breadcrumbs.b3EuQ5N-.js";function me(a){let e,n,t="Proceed with the scheme",r,o,f;const c=a[1].default,u=oe(c,a,a[0],null);return{c(){e=B("div"),n=B("h1"),n.textContent=t,r=N(),o=B("div"),u&&u.c(),this.h()},l(m){e=E(m,"DIV",{class:!0});var g=ie(e);n=E(g,"H1",{class:!0,"data-svelte-h":!0}),ae(n)!=="svelte-uxivms"&&(n.textContent=t),r=A(g),o=E(g,"DIV",{class:!0});var s=ie(o);u&&u.l(s),s.forEach(h),g.forEach(h),this.h()},h(){z(n,"class","govuk-panel__title"),z(o,"class","govuk-panel__body"),z(e,"class","govuk-panel govuk-panel--confirmation")},m(m,g){k(m,e,g),F(e,n),F(e,r),F(e,o),u&&u.m(o,null),f=!0},p(m,[g]){u&&u.p&&(!f||g&1)&&fe(u,c,m,m[0],f?le(c,m[0],g,null):se(m[0]),null)},i(m){f||($(u,m),f=!0)},o(m){p(u,m),f=!1},d(m){m&&h(e),u&&u.d(m)}}}function $e(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,t]}class X extends L{constructor(e){super(),P(this,e,$e,me,H,{})}}function pe(a){let e,n,t,r,o,f,c;function u(i){a[2](i)}let m={label:"Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"};a[0].trafficMitigationCheck.majorQ2!==void 0&&(m.value=a[0].trafficMitigationCheck.majorQ2),e=new O({props:m}),R.push(()=>I(e,"value",u));const g=[he,de],s=[];function b(i,l){return i[0].trafficMitigationCheck.majorQ2=="No"?0:i[0].trafficMitigationCheck.majorQ2=="Yes"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,l){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ2,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r===d?~r&&s[r].p(i,l):(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o?o.p(i,l):(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function ge(a){let e,n;return e=new D({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function de(a){let e,n,t,r,o,f,c;function u(i){a[3](i)}let m={label:"Do the major road(s) exceed or approach the pollution limit values?"};a[0].trafficMitigationCheck.majorQ3!==void 0&&(m.value=a[0].trafficMitigationCheck.majorQ3),e=new O({props:m}),R.push(()=>I(e,"value",u));const g=[be,ke],s=[];function b(i,l){return i[0].trafficMitigationCheck.majorQ3=="Yes"?0:i[0].trafficMitigationCheck.majorQ3=="No"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,l){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ3,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r===d?~r&&s[r].p(i,l):(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o?o.p(i,l):(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function he(a){let e,n;return e=new X({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ke(a){let e,n,t,r,o,f,c;function u(i){a[4](i)}let m={label:"Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?",emptyOption:!0,choices:re(["Local","Wider","Measures are inadequate"])};a[0].trafficMitigationCheck.majorQ4!==void 0&&(m.value=a[0].trafficMitigationCheck.majorQ4),e=new K({props:m}),R.push(()=>I(e,"value",u));const g=[Me,Ce,ve],s=[];function b(i,l){return i[0].trafficMitigationCheck.majorQ4=="Local"?0:i[0].trafficMitigationCheck.majorQ4=="Wider"?1:i[0].trafficMitigationCheck.majorQ4=="Measures are inadequate"?2:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,l){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ4,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r!==d&&(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o||(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function be(a){let e,n;return e=new D({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ve(a){let e,n;return e=new D({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ce(a){let e,n;return e=new D({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Me(a){let e,n;return e=new D({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function we(a){let e;return{c(){e=T(`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},l(n){e=G(n,`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function ye(a){let e;return{c(){e=T(`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},l(n){e=G(n,`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function Qe(a){let e;return{c(){e=T(`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},l(n){e=G(n,`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function je(a){let e;return{c(){e=T(`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},l(n){e=G(n,`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function qe(a){let e;return{c(){e=T("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=G(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function Ne(a){let e;return{c(){e=T(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=G(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function Ae(a){let e,n,t,r,o,f,c;function u(i){a[1](i)}let m={label:"Are there sensitive receptors, such as schools or hospitals there?"};a[0].trafficMitigationCheck.majorQ1!==void 0&&(m.value=a[0].trafficMitigationCheck.majorQ1),e=new O({props:m}),R.push(()=>I(e,"value",u));const g=[ge,pe],s=[];function b(i,l){return i[0].trafficMitigationCheck.majorQ1=="Yes"?0:i[0].trafficMitigationCheck.majorQ1=="No"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,[l]){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ1,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r===d?~r&&s[r].p(i,l):(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o?o.p(i,l):(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function Re(a,e,n){let t;J(a,q,u=>n(0,t=u));function r(u){a.$$.not_equal(t.trafficMitigationCheck.majorQ1,u)&&(t.trafficMitigationCheck.majorQ1=u,q.set(t))}function o(u){a.$$.not_equal(t.trafficMitigationCheck.majorQ2,u)&&(t.trafficMitigationCheck.majorQ2=u,q.set(t))}function f(u){a.$$.not_equal(t.trafficMitigationCheck.majorQ3,u)&&(t.trafficMitigationCheck.majorQ3=u,q.set(t))}function c(u){a.$$.not_equal(t.trafficMitigationCheck.majorQ4,u)&&(t.trafficMitigationCheck.majorQ4=u,q.set(t))}return[t,r,o,f,c]}class Ye extends L{constructor(e){super(),P(this,e,Re,Ae,H,{})}}function Ie(a){let e,n,t,r,o,f,c;function u(i){a[2](i)}let m={label:"Is the scheme expected to add significant levels of traffic or congestion to these streets?"};a[0].trafficMitigationCheck.minorQ2!==void 0&&(m.value=a[0].trafficMitigationCheck.minorQ2),e=new O({props:m}),R.push(()=>I(e,"value",u));const g=[Se,Ge],s=[];function b(i,l){return i[0].trafficMitigationCheck.minorQ2=="Yes"?0:i[0].trafficMitigationCheck.minorQ2=="No"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,l){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.minorQ2,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r!==d&&(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o||(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function Te(a){let e,n;return e=new D({props:{$$slots:{default:[De]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&8&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ge(a){let e,n;return e=new X({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Se(a){let e,n;return e=new D({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ue(a){let e;return{c(){e=T("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=G(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function We(a){let e;return{c(){e=T("Redesign scheme with alternative diversionary routes or a wider focus")},l(n){e=G(n,"Redesign scheme with alternative diversionary routes or a wider focus")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function De(a){let e;return{c(){e=T(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=G(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function Oe(a){let e,n,t,r,o,f,c;function u(i){a[1](i)}let m={label:"Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"};a[0].trafficMitigationCheck.minorQ1!==void 0&&(m.value=a[0].trafficMitigationCheck.minorQ1),e=new O({props:m}),R.push(()=>I(e,"value",u));const g=[Te,Ie],s=[];function b(i,l){return i[0].trafficMitigationCheck.minorQ1=="Yes"?0:i[0].trafficMitigationCheck.minorQ1=="No"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,[l]){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.minorQ1,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r===d?~r&&s[r].p(i,l):(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o?o.p(i,l):(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function Be(a,e,n){let t;J(a,q,f=>n(0,t=f));function r(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ1,f)&&(t.trafficMitigationCheck.minorQ1=f,q.set(t))}function o(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ2,f)&&(t.trafficMitigationCheck.minorQ2=f,q.set(t))}return[t,r,o]}class Ee extends L{constructor(e){super(),P(this,e,Be,Oe,H,{})}}function He(a){let e,n,t,r,o,f,c;function u(i){a[2](i)}let m={label:"Is it expected to reduce traffic both within the scheme and elsewhere?",emptyOption:!0,choices:[["Yes","Yes, traffic is expected to reduce due to modal shift and trip reduction"],["No","No, some traffic is expected to be displaced to other roads"]]};a[0].trafficMitigationCheck.q2!==void 0&&(m.value=a[0].trafficMitigationCheck.q2),e=new K({props:m}),R.push(()=>I(e,"value",u));const g=[Ve,Pe],s=[];function b(i,l){return i[0].trafficMitigationCheck.q2=="Yes"?0:i[0].trafficMitigationCheck.q2=="No"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,l){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.q2,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r===d?~r&&s[r].p(i,l):(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o?o.p(i,l):(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function Le(a){let e,n;return e=new D({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Pe(a){let e,n,t,r,o,f,c;function u(i){a[3](i)}let m={label:"Where will displaced traffic go?",emptyOption:!0,choices:re(["Major routes (e.g. scheme eliminates a rat run)","Minor streets (e.g. residential)"])};a[0].trafficMitigationCheck.q3!==void 0&&(m.value=a[0].trafficMitigationCheck.q3),e=new K({props:m}),R.push(()=>I(e,"value",u));const g=[Fe,ze],s=[];function b(i,l){return i[0].trafficMitigationCheck.q3=="Major routes (e.g. scheme eliminates a rat run)"?0:i[0].trafficMitigationCheck.q3=="Minor streets (e.g. residential)"?1:-1}return~(r=b(a))&&(o=s[r]=g[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=Q()},l(i){M(e.$$.fragment,i),t=A(i),o&&o.l(i),f=Q()},m(i,l){w(e,i,l),k(i,t,l),~r&&s[r].m(i,l),k(i,f,l),c=!0},p(i,l){const v={};!n&&l&1&&(n=!0,v.value=i[0].trafficMitigationCheck.q3,Y(()=>n=!1)),e.$set(v);let d=r;r=b(i),r!==d&&(o&&(S(),p(s[d],1,1,()=>{s[d]=null}),U()),~r?(o=s[r],o||(o=s[r]=g[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){c||($(e.$$.fragment,i),$(o),c=!0)},o(i){p(e.$$.fragment,i),p(o),c=!1},d(i){i&&(h(t),h(f)),y(e,i),~r&&s[r].d(i)}}}function Ve(a){let e,n;return e=new X({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p:ce,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ze(a){let e,n;return e=new Ee({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Fe(a){let e,n;return e=new Ye({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Je(a){let e;return{c(){e=T("Stop. Redesign scheme to reduce traffic.")},l(n){e=G(n,"Stop. Redesign scheme to reduce traffic.")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function Ke(a){let e,n,t,r,o,f,c,u,m,g,s,b,i;e=new _e({props:{links:[["Tools","/"],["Area check tool","/area_check"]],current:"Traffic Mitigation Check"}});function l(_){a[1](_)}let v={label:"Is the scheme expected to reduce traffic?"};a[0].trafficMitigationCheck.q1!==void 0&&(v.value=a[0].trafficMitigationCheck.q1),t=new O({props:v}),R.push(()=>I(t,"value",l));const d=[Le,He],W=[];function Z(_,j){return _[0].trafficMitigationCheck.q1=="No"?0:_[0].trafficMitigationCheck.q1=="Yes"?1:-1}~(f=Z(a))&&(c=W[f]=d[f](a));function ne(_){a[4](_)}let x={label:"Results & Commentary"};return a[0].trafficMitigationCheck.notes!==void 0&&(x.value=a[0].trafficMitigationCheck.notes),s=new ue({props:x}),R.push(()=>I(s,"value",ne)),{c(){C(e.$$.fragment),n=N(),C(t.$$.fragment),o=N(),c&&c.c(),u=N(),m=B("hr"),g=N(),C(s.$$.fragment)},l(_){M(e.$$.fragment,_),n=A(_),M(t.$$.fragment,_),o=A(_),c&&c.l(_),u=A(_),m=E(_,"HR",{}),g=A(_),M(s.$$.fragment,_)},m(_,j){w(e,_,j),k(_,n,j),w(t,_,j),k(_,o,j),~f&&W[f].m(_,j),k(_,u,j),k(_,m,j),k(_,g,j),w(s,_,j),i=!0},p(_,[j]){const ee={};!r&&j&1&&(r=!0,ee.value=_[0].trafficMitigationCheck.q1,Y(()=>r=!1)),t.$set(ee);let V=f;f=Z(_),f===V?~f&&W[f].p(_,j):(c&&(S(),p(W[V],1,1,()=>{W[V]=null}),U()),~f?(c=W[f],c?c.p(_,j):(c=W[f]=d[f](_),c.c()),$(c,1),c.m(u.parentNode,u)):c=null);const te={};!b&&j&1&&(b=!0,te.value=_[0].trafficMitigationCheck.notes,Y(()=>b=!1)),s.$set(te)},i(_){i||($(e.$$.fragment,_),$(t.$$.fragment,_),$(c),$(s.$$.fragment,_),i=!0)},o(_){p(e.$$.fragment,_),p(t.$$.fragment,_),p(c),p(s.$$.fragment,_),i=!1},d(_){_&&(h(n),h(o),h(u),h(m),h(g)),y(e,_),y(t,_),~f&&W[f].d(_),y(s,_)}}}function Xe(a,e,n){let t;J(a,q,u=>n(0,t=u));function r(u){a.$$.not_equal(t.trafficMitigationCheck.q1,u)&&(t.trafficMitigationCheck.q1=u,q.set(t))}function o(u){a.$$.not_equal(t.trafficMitigationCheck.q2,u)&&(t.trafficMitigationCheck.q2=u,q.set(t))}function f(u){a.$$.not_equal(t.trafficMitigationCheck.q3,u)&&(t.trafficMitigationCheck.q3=u,q.set(t))}function c(u){a.$$.not_equal(t.trafficMitigationCheck.notes,u)&&(t.trafficMitigationCheck.notes=u,q.set(t))}return[t,r,o,f,c]}class lt extends L{constructor(e){super(),P(this,e,Xe,Ke,H,{})}}export{lt as component};
