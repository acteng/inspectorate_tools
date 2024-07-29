import{s as L,l as ne,e as O,a as N,c as V,b as F,m as oe,g as R,f as d,o as H,i as k,h as D,u as ae,p as fe,q as se,v as A,B as j,w as Y,k as J,t as T,d as G,n as le}from"../chunks/scheduler.BJ06nkRu.js";import{S as P,i as B,t as $,b as p,e as I,c as C,a as M,m as w,g as S,f as U,d as y}from"../chunks/index.Dmc4uC9p.js";import{S as K}from"../chunks/Select.Ceop3bia.js";/* empty css                                                               */import{W}from"../chunks/WarningText.RtMMgJZV.js";import{p as ie}from"../chunks/index.zoGuuoug.js";import{s as q}from"../chunks/data.BwaUnmcY.js";import{Y as E}from"../chunks/YesNo.DJDpWvMZ.js";/* empty css                                                    */import"../chunks/paths.Cxt0WUqa.js";import{T as ce}from"../chunks/TextArea.dqrL6eGj.js";function ue(a){let e,n,t="Proceed with the scheme",r,o,f;const u=a[1].default,c=ne(u,a,a[0],null);return{c(){e=O("div"),n=O("h1"),n.textContent=t,r=N(),o=O("div"),c&&c.c(),this.h()},l(_){e=V(_,"DIV",{class:!0});var m=F(e);n=V(m,"H1",{class:!0,"data-svelte-h":!0}),oe(n)!=="svelte-uxivms"&&(n.textContent=t),r=R(m),o=V(m,"DIV",{class:!0});var l=F(o);c&&c.l(l),l.forEach(d),m.forEach(d),this.h()},h(){H(n,"class","govuk-panel__title"),H(o,"class","govuk-panel__body"),H(e,"class","govuk-panel govuk-panel--confirmation")},m(_,m){k(_,e,m),D(e,n),D(e,r),D(e,o),c&&c.m(o,null),f=!0},p(_,[m]){c&&c.p&&(!f||m&1)&&ae(c,u,_,_[0],f?se(u,_[0],m,null):fe(_[0]),null)},i(_){f||($(c,_),f=!0)},o(_){p(c,_),f=!1},d(_){_&&d(e),c&&c.d(_)}}}function _e(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,t]}class X extends P{constructor(e){super(),B(this,e,_e,ue,L,{})}}function me(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"};a[0].trafficMitigationCheck.majorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ2),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[ge,pe],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ2=="No"?0:i[0].trafficMitigationCheck.majorQ2=="Yes"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ2,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r===g?~r&&l[r].p(i,s):(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function $e(a){let e,n;return e=new W({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function pe(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Do the major road(s) exceed or approach the pollution limit values?"};a[0].trafficMitigationCheck.majorQ3!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ3),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[he,de],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ3=="Yes"?0:i[0].trafficMitigationCheck.majorQ3=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ3,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r===g?~r&&l[r].p(i,s):(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function ge(a){let e,n;return e=new X({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function de(a){let e,n,t,r,o,f,u;function c(i){a[4](i)}let _={label:"Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?",emptyOption:!0,choices:ie(["Local","Wider","Measures are inadequate"])};a[0].trafficMitigationCheck.majorQ4!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ4),e=new K({props:_}),A.push(()=>I(e,"value",c));const m=[ve,be,ke],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ4=="Local"?0:i[0].trafficMitigationCheck.majorQ4=="Wider"?1:i[0].trafficMitigationCheck.majorQ4=="Measures are inadequate"?2:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ4,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r!==g&&(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function he(a){let e,n;return e=new W({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ke(a){let e,n;return e=new W({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function be(a){let e,n;return e=new W({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ve(a){let e,n;return e=new W({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ce(a){let e;return{c(){e=T(`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},l(n){e=G(n,`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function Me(a){let e;return{c(){e=T(`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},l(n){e=G(n,`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function we(a){let e;return{c(){e=T(`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},l(n){e=G(n,`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function ye(a){let e;return{c(){e=T(`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},l(n){e=G(n,`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function Qe(a){let e;return{c(){e=T("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=G(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function je(a){let e;return{c(){e=T(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=G(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function qe(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors, such as schools or hospitals there?"};a[0].trafficMitigationCheck.majorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ1),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[$e,me],l=[];function h(i,s){return i[0].trafficMitigationCheck.majorQ1=="Yes"?0:i[0].trafficMitigationCheck.majorQ1=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,[s]){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.majorQ1,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r===g?~r&&l[r].p(i,s):(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function Ne(a,e,n){let t;J(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ1,c)&&(t.trafficMitigationCheck.majorQ1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ2,c)&&(t.trafficMitigationCheck.majorQ2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ3,c)&&(t.trafficMitigationCheck.majorQ3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ4,c)&&(t.trafficMitigationCheck.majorQ4=c,q.set(t))}return[t,r,o,f,u]}class Re extends P{constructor(e){super(),B(this,e,Ne,qe,L,{})}}function Ae(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to these streets?"};a[0].trafficMitigationCheck.minorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ2),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[Te,Ie],l=[];function h(i,s){return i[0].trafficMitigationCheck.minorQ2=="Yes"?0:i[0].trafficMitigationCheck.minorQ2=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.minorQ2,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r!==g&&(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function Ye(a){let e,n;return e=new W({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&8&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ie(a){let e,n;return e=new X({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Te(a){let e,n;return e=new W({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ge(a){let e;return{c(){e=T("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=G(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function Se(a){let e;return{c(){e=T("Redesign scheme with alternative diversionary routes or a wider focus")},l(n){e=G(n,"Redesign scheme with alternative diversionary routes or a wider focus")},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function Ue(a){let e;return{c(){e=T(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=G(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function We(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"};a[0].trafficMitigationCheck.minorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ1),e=new E({props:_}),A.push(()=>I(e,"value",c));const m=[Ye,Ae],l=[];function h(i,s){return i[0].trafficMitigationCheck.minorQ1=="Yes"?0:i[0].trafficMitigationCheck.minorQ1=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,[s]){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.minorQ1,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r===g?~r&&l[r].p(i,s):(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function De(a,e,n){let t;J(a,q,f=>n(0,t=f));function r(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ1,f)&&(t.trafficMitigationCheck.minorQ1=f,q.set(t))}function o(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ2,f)&&(t.trafficMitigationCheck.minorQ2=f,q.set(t))}return[t,r,o]}class Ee extends P{constructor(e){super(),B(this,e,De,We,L,{})}}function Oe(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is it expected to reduce traffic both within the scheme and elsewhere?",emptyOption:!0,choices:[["Yes","Yes, traffic is expected to reduce due to modal shift and trip reduction"],["No","No, some traffic is expected to be displaced to other roads"]]};a[0].trafficMitigationCheck.q2!==void 0&&(_.value=a[0].trafficMitigationCheck.q2),e=new K({props:_}),A.push(()=>I(e,"value",c));const m=[Le,He],l=[];function h(i,s){return i[0].trafficMitigationCheck.q2=="Yes"?0:i[0].trafficMitigationCheck.q2=="No"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.q2,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r===g?~r&&l[r].p(i,s):(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function Ve(a){let e,n;return e=new W({props:{$$slots:{default:[ze]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function He(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Where will displaced traffic go?",emptyOption:!0,choices:ie(["Major routes (e.g. scheme eliminates a rat run)","Minor streets (e.g. residential)"])};a[0].trafficMitigationCheck.q3!==void 0&&(_.value=a[0].trafficMitigationCheck.q3),e=new K({props:_}),A.push(()=>I(e,"value",c));const m=[Be,Pe],l=[];function h(i,s){return i[0].trafficMitigationCheck.q3=="Major routes (e.g. scheme eliminates a rat run)"?0:i[0].trafficMitigationCheck.q3=="Minor streets (e.g. residential)"?1:-1}return~(r=h(a))&&(o=l[r]=m[r](a)),{c(){C(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){M(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),k(i,t,s),~r&&l[r].m(i,s),k(i,f,s),u=!0},p(i,s){const b={};!n&&s&1&&(n=!0,b.value=i[0].trafficMitigationCheck.q3,Y(()=>n=!1)),e.$set(b);let g=r;r=h(i),r!==g&&(o&&(S(),p(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o||(o=l[r]=m[r](i),o.c()),$(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||($(e.$$.fragment,i),$(o),u=!0)},o(i){p(e.$$.fragment,i),p(o),u=!1},d(i){i&&(d(t),d(f)),y(e,i),~r&&l[r].d(i)}}}function Le(a){let e,n;return e=new X({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p:le,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Pe(a){let e,n;return e=new Ee({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Be(a){let e,n;return e=new Re({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ze(a){let e;return{c(){e=T("Stop. Redesign scheme to reduce traffic.")},l(n){e=G(n,"Stop. Redesign scheme to reduce traffic.")},m(n,t){k(n,e,t)},d(n){n&&d(e)}}}function Fe(a){let e,n,t,r,o,f,u,c,_,m,l,h;function i(v){a[1](v)}let s={label:"Is the scheme expected to reduce traffic?"};a[0].trafficMitigationCheck.q1!==void 0&&(s.value=a[0].trafficMitigationCheck.q1),n=new E({props:s}),A.push(()=>I(n,"value",i));const b=[Ve,Oe],g=[];function Z(v,Q){return v[0].trafficMitigationCheck.q1=="No"?0:v[0].trafficMitigationCheck.q1=="Yes"?1:-1}~(o=Z(a))&&(f=g[o]=b[o](a));function re(v){a[4](v)}let x={label:"Results & Commentary"};return a[0].trafficMitigationCheck.notes!==void 0&&(x.value=a[0].trafficMitigationCheck.notes),m=new ce({props:x}),A.push(()=>I(m,"value",re)),{c(){e=O("div"),C(n.$$.fragment),r=N(),f&&f.c(),u=N(),c=O("hr"),_=N(),C(m.$$.fragment),this.h()},l(v){e=V(v,"DIV",{class:!0});var Q=F(e);M(n.$$.fragment,Q),r=R(Q),f&&f.l(Q),u=R(Q),c=V(Q,"HR",{}),_=R(Q),M(m.$$.fragment,Q),Q.forEach(d),this.h()},h(){H(e,"class","govuk-width-container")},m(v,Q){k(v,e,Q),w(n,e,null),D(e,r),~o&&g[o].m(e,null),D(e,u),D(e,c),D(e,_),w(m,e,null),h=!0},p(v,[Q]){const ee={};!t&&Q&1&&(t=!0,ee.value=v[0].trafficMitigationCheck.q1,Y(()=>t=!1)),n.$set(ee);let z=o;o=Z(v),o===z?~o&&g[o].p(v,Q):(f&&(S(),p(g[z],1,1,()=>{g[z]=null}),U()),~o?(f=g[o],f?f.p(v,Q):(f=g[o]=b[o](v),f.c()),$(f,1),f.m(e,u)):f=null);const te={};!l&&Q&1&&(l=!0,te.value=v[0].trafficMitigationCheck.notes,Y(()=>l=!1)),m.$set(te)},i(v){h||($(n.$$.fragment,v),$(f),$(m.$$.fragment,v),h=!0)},o(v){p(n.$$.fragment,v),p(f),p(m.$$.fragment,v),h=!1},d(v){v&&d(e),y(n),~o&&g[o].d(),y(m)}}}function Je(a,e,n){let t;J(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.q1,c)&&(t.trafficMitigationCheck.q1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.q2,c)&&(t.trafficMitigationCheck.q2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.q3,c)&&(t.trafficMitigationCheck.q3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.notes,c)&&(t.trafficMitigationCheck.notes=c,q.set(t))}return[t,r,o,f,u]}class ft extends P{constructor(e){super(),B(this,e,Je,Fe,L,{})}}export{ft as component};
