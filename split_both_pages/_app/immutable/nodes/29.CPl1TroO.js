import{s as P,l as ne,e as V,a as N,c as H,b as J,m as oe,g as R,f as g,p as L,i as k,h as E,u as ae,r as fe,v as se,w as A,E as j,x as Y,k as K,t as T,d as G,n as le}from"../chunks/scheduler.BwufR8Ly.js";import{S as z,i as B,t as $,b as d,e as I,c as C,a as M,m as w,g as U,f as W,d as y}from"../chunks/index.BYv68wXE.js";import{R as O}from"../chunks/Radio.xwGHvsDf.js";/* empty css                                                    */import{W as D}from"../chunks/WarningText.DeMLIEbM.js";import{p as ie}from"../chunks/index.BySd2fN8.js";import{s as q}from"../chunks/data.BDVT0ClH.js";import{Y as S}from"../chunks/YesNo.C-EKObBG.js";import"../chunks/paths.D5m7alyc.js";import{T as ce}from"../chunks/TextArea.2C2Xc7bA.js";function ue(a){let e,n,t="Proceed with the scheme",r,o,f;const u=a[1].default,c=ne(u,a,a[0],null);return{c(){e=V("div"),n=V("h1"),n.textContent=t,r=N(),o=V("div"),c&&c.c(),this.h()},l(_){e=H(_,"DIV",{class:!0});var m=J(e);n=H(m,"H1",{class:!0,"data-svelte-h":!0}),oe(n)!=="svelte-uxivms"&&(n.textContent=t),r=R(m),o=H(m,"DIV",{class:!0});var l=J(o);c&&c.l(l),l.forEach(g),m.forEach(g),this.h()},h(){L(n,"class","govuk-panel__title"),L(o,"class","govuk-panel__body"),L(e,"class","govuk-panel govuk-panel--confirmation")},m(_,m){k(_,e,m),E(e,n),E(e,r),E(e,o),c&&c.m(o,null),f=!0},p(_,[m]){c&&c.p&&(!f||m&1)&&ae(c,u,_,_[0],f?se(u,_[0],m,null):fe(_[0]),null)},i(_){f||($(c,_),f=!0)},o(_){d(c,_),f=!1},d(_){_&&g(e),c&&c.d(_)}}}function _e(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,t]}class X extends z{constructor(e){super(),B(this,e,_e,ue,P,{})}}function me(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"};a[0].trafficMitigationCheck.majorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ2),e=new S({props:_}),A.push(()=>I(e,"value",c));const m=[pe,de],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ2=="No"?0:i[0].trafficMitigationCheck.majorQ2=="Yes"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ2,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r===p?~r&&l[r].p(i,s):(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function $e(a){let e,n;return e=new D({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function de(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Do the major road(s) exceed or approach the pollution limit values?"};a[0].trafficMitigationCheck.majorQ3!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ3),e=new S({props:_}),A.push(()=>I(e,"value",c));const m=[he,ge],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ3=="Yes"?0:i[0].trafficMitigationCheck.majorQ3=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ3,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r===p?~r&&l[r].p(i,s):(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function pe(a){let e,n;return e=new X({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ge(a){let e,n,t,r,o,f,u;function c(i){a[4](i)}let _={legend:"Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?",choices:ie(["Local","Wider","Measures are inadequate"])};a[0].trafficMitigationCheck.majorQ4!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ4),e=new O({props:_}),A.push(()=>I(e,"value",c));const m=[be,ve,ke],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ4=="Local"?0:i[0].trafficMitigationCheck.majorQ4=="Wider"?1:i[0].trafficMitigationCheck.majorQ4=="Measures are inadequate"?2:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ4,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r!==p&&(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function he(a){let e,n;return e=new D({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ke(a){let e,n;return e=new D({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ve(a){let e,n;return e=new D({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function be(a){let e,n;return e=new D({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ce(a){let e;return{c(){e=T(`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},l(n){e=G(n,`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Me(a){let e;return{c(){e=T(`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},l(n){e=G(n,`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function we(a){let e;return{c(){e=T(`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},l(n){e=G(n,`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function ye(a){let e;return{c(){e=T(`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},l(n){e=G(n,`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Qe(a){let e;return{c(){e=T("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=G(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function je(a){let e;return{c(){e=T(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=G(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function qe(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors, such as schools or hospitals there?"};a[0].trafficMitigationCheck.majorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ1),e=new S({props:_}),A.push(()=>I(e,"value",c));const m=[$e,me],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ1=="Yes"?0:i[0].trafficMitigationCheck.majorQ1=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,[s]){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ1,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r===p?~r&&l[r].p(i,s):(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function Ne(a,e,n){let t;K(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ1,c)&&(t.trafficMitigationCheck.majorQ1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ2,c)&&(t.trafficMitigationCheck.majorQ2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ3,c)&&(t.trafficMitigationCheck.majorQ3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ4,c)&&(t.trafficMitigationCheck.majorQ4=c,q.set(t))}return[t,r,o,f,u]}class Re extends z{constructor(e){super(),B(this,e,Ne,qe,P,{})}}function Ae(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to these streets?"};a[0].trafficMitigationCheck.minorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ2),e=new S({props:_}),A.push(()=>I(e,"value",c));const m=[Te,Ie],l=[];function h(i,s){return i[0].trafficMitigationCheck.minorQ2=="Yes"?0:i[0].trafficMitigationCheck.minorQ2=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.minorQ2,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r!==p&&(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function Ye(a){let e,n;return e=new D({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&8&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ie(a){let e,n;return e=new X({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Te(a){let e,n;return e=new D({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ge(a){let e;return{c(){e=T("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=G(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Ue(a){let e;return{c(){e=T("Redesign scheme with alternative diversionary routes or a wider focus")},l(n){e=G(n,"Redesign scheme with alternative diversionary routes or a wider focus")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function We(a){let e;return{c(){e=T(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=G(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function De(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"};a[0].trafficMitigationCheck.minorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ1),e=new S({props:_}),A.push(()=>I(e,"value",c));const m=[Ye,Ae],l=[];function h(i,s){return i[0].trafficMitigationCheck.minorQ1=="Yes"?0:i[0].trafficMitigationCheck.minorQ1=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,[s]){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.minorQ1,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r===p?~r&&l[r].p(i,s):(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function Ee(a,e,n){let t;K(a,q,f=>n(0,t=f));function r(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ1,f)&&(t.trafficMitigationCheck.minorQ1=f,q.set(t))}function o(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ2,f)&&(t.trafficMitigationCheck.minorQ2=f,q.set(t))}return[t,r,o]}class Se extends z{constructor(e){super(),B(this,e,Ee,De,P,{})}}function Ve(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={legend:"Is it expected to reduce traffic both within the scheme and elsewhere?",choices:[["Yes","Yes, traffic is expected to reduce due to modal shift and trip reduction"],["No","No, some traffic is expected to be displaced to other roads"]]};a[0].trafficMitigationCheck.q2!==void 0&&(_.value=a[0].trafficMitigationCheck.q2),e=new O({props:_}),A.push(()=>I(e,"value",c));const m=[Pe,Le],l=[];function h(i,s){return i[0].trafficMitigationCheck.q2=="Yes"?0:i[0].trafficMitigationCheck.q2=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.q2,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r===p?~r&&l[r].p(i,s):(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function He(a){let e,n;return e=new D({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Le(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={legend:"Where will displaced traffic go?",choices:ie(["Major routes (e.g. scheme eliminates a rat run)","Minor streets (e.g. residential)"])};a[0].trafficMitigationCheck.q3!==void 0&&(_.value=a[0].trafficMitigationCheck.q3),e=new O({props:_}),A.push(()=>I(e,"value",c));const m=[Be,ze],l=[];function h(i,s){return i[0].trafficMitigationCheck.q3=="Major routes (e.g. scheme eliminates a rat run)"?0:i[0].trafficMitigationCheck.q3=="Minor streets (e.g. residential)"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.q3,Y(()=>n=!1)),e.$set(v);let p=r;r=h(i),r!==p&&(o&&(U(),d(l[p],1,1,()=>{l[p]=null}),W()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){d(e.$$.fragment,i),d(o),u=!1},d(i){i&&(g(t),g(f)),y(e,i),~r&&l[r].d(i)}}}function Pe(a){let e,n;return e=new X({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p:le,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ze(a){let e,n;return e=new Se({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Be(a){let e,n;return e=new Re({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Fe(a){let e;return{c(){e=T("Stop. Redesign scheme to reduce traffic.")},l(n){e=G(n,"Stop. Redesign scheme to reduce traffic.")},m(n,t){k(n,e,t)},d(n){n&&g(e)}}}function Je(a){let e,n,t,r,o,f,u,c,_,m,l,h;function i(b){a[1](b)}let s={label:"Is the scheme expected to reduce traffic?"};a[0].trafficMitigationCheck.q1!==void 0&&(s.value=a[0].trafficMitigationCheck.q1),n=new S({props:s}),A.push(()=>I(n,"value",i));const v=[He,Ve],p=[];function Z(b,Q){return b[0].trafficMitigationCheck.q1=="No"?0:b[0].trafficMitigationCheck.q1=="Yes"?1:-1}~(o=Z(a))&&(f=p[o]=v[o](a));function re(b){a[4](b)}let x={label:"Results & Commentary"};return a[0].trafficMitigationCheck.notes!==void 0&&(x.value=a[0].trafficMitigationCheck.notes),m=new ce({props:x}),A.push(()=>I(m,"value",re)),{c(){e=V("div"),C(n.$$.fragment),r=N(),f&&f.c(),u=N(),c=V("hr"),_=N(),C(m.$$.fragment),this.h()},l(b){e=H(b,"DIV",{class:!0});var Q=J(e);M(n.$$.fragment,Q),r=R(Q),f&&f.l(Q),u=R(Q),c=H(Q,"HR",{}),_=R(Q),M(m.$$.fragment,Q),Q.forEach(g),this.h()},h(){L(e,"class","govuk-width-container")},m(b,Q){k(b,e,Q),w(n,e,null),E(e,r),~o&&p[o].m(e,null),E(e,u),E(e,c),E(e,_),w(m,e,null),h=!0},p(b,[Q]){const ee={};!t&&Q&1&&(t=!0,ee.value=b[0].trafficMitigationCheck.q1,Y(()=>t=!1)),n.$set(ee);let F=o;o=Z(b),o===F?~o&&p[o].p(b,Q):(f&&(U(),d(p[F],1,1,()=>{p[F]=null}),W()),~o?(f=p[o],f?f.p(b,Q):(f=p[o]=v[o](b),f.c()),$(f,1),f.m(e,u)):f=null);const te={};!l&&Q&1&&(l=!0,te.value=b[0].trafficMitigationCheck.notes,Y(()=>l=!1)),m.$set(te)},i(b){h||($(n.$$.fragment,b),$(f),$(m.$$.fragment,b),h=!0)},o(b){d(n.$$.fragment,b),d(f),d(m.$$.fragment,b),h=!1},d(b){b&&g(e),y(n),~o&&p[o].d(),y(m)}}}function Ke(a,e,n){let t;K(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.q1,c)&&(t.trafficMitigationCheck.q1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.q2,c)&&(t.trafficMitigationCheck.q2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.q3,c)&&(t.trafficMitigationCheck.q3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.notes,c)&&(t.trafficMitigationCheck.notes=c,q.set(t))}return[t,r,o,f,u]}class at extends z{constructor(e){super(),B(this,e,Ke,Je,P,{})}}export{at as component};
