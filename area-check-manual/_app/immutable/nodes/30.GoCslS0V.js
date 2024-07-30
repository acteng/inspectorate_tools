import{s as P,l as ae,e as V,a as N,c as H,b as J,m as fe,g as R,f as k,o as L,i as b,h as E,u as se,p as le,q as ce,v as A,F as j,w as Y,k as K,t as S,d as T,n as ue}from"../chunks/scheduler.ScMV3vmV.js";import{S as F,i as z,t as m,b as $,e as I,c as M,a as C,m as w,g as G,f as U,d as y}from"../chunks/index.DbrWxxqn.js";import{S as X}from"../chunks/Select.CV0kGAxR.js";/* empty css                                                               */import{W as D}from"../chunks/WarningText.C7rrcnZX.js";import{p as ne}from"../chunks/index.B11_x62c.js";import{s as q}from"../chunks/data.-VMxbC3G.js";import{Y as O}from"../chunks/YesNo.DXFKW9AG.js";import"../chunks/ManualPage.svelte_svelte_type_style_lang.D_PO7ki1.js";import"../chunks/paths.DjoLVNmM.js";import{T as _e}from"../chunks/TextArea.DbkWbfhb.js";import{c as me}from"../chunks/content.DT5n7wbo.js";import{S as $e}from"../chunks/SectionModal.BkZv95RR.js";function pe(a){let e,n,t="Proceed with the scheme",r,o,f;const u=a[1].default,c=ae(u,a,a[0],null);return{c(){e=V("div"),n=V("h1"),n.textContent=t,r=N(),o=V("div"),c&&c.c(),this.h()},l(_){e=H(_,"DIV",{class:!0});var p=J(e);n=H(p,"H1",{class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-uxivms"&&(n.textContent=t),r=R(p),o=H(p,"DIV",{class:!0});var l=J(o);c&&c.l(l),l.forEach(k),p.forEach(k),this.h()},h(){L(n,"class","govuk-panel__title"),L(o,"class","govuk-panel__body"),L(e,"class","govuk-panel govuk-panel--confirmation")},m(_,p){b(_,e,p),E(e,n),E(e,r),E(e,o),c&&c.m(o,null),f=!0},p(_,[p]){c&&c.p&&(!f||p&1)&&se(c,u,_,_[0],f?ce(u,_[0],p,null):le(_[0]),null)},i(_){f||(m(c,_),f=!0)},o(_){$(c,_),f=!1},d(_){_&&k(e),c&&c.d(_)}}}function ge(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,t]}class Z extends F{constructor(e){super(),z(this,e,ge,pe,P,{})}}function de(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to any part of the road network?"};a[0].trafficMitigationCheck.majorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ2),e=new O({props:_}),A.push(()=>I(e,"value",c));const p=[be,ke],l=[];function d(i,s){return i[0].trafficMitigationCheck.majorQ2=="No"?0:i[0].trafficMitigationCheck.majorQ2=="Yes"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ2,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r===g?~r&&l[r].p(i,s):(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function he(a){let e,n;return e=new D({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ke(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Do the major road(s) exceed or approach the pollution limit values?"};a[0].trafficMitigationCheck.majorQ3!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ3),e=new O({props:_}),A.push(()=>I(e,"value",c));const p=[Me,ve],l=[];function d(i,s){return i[0].trafficMitigationCheck.majorQ3=="Yes"?0:i[0].trafficMitigationCheck.majorQ3=="No"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ3,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r===g?~r&&l[r].p(i,s):(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function be(a){let e,n;return e=new Z({props:{$$slots:{default:[Re]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ve(a){let e,n,t,r,o,f,u;function c(i){a[4](i)}let _={label:"Is the major route suitable for local solutions, does it need wider measues, or are both currently inadequate?",emptyOption:!0,choices:ne(["Local","Wider","Measures are inadequate"])};a[0].trafficMitigationCheck.majorQ4!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ4),e=new X({props:_}),A.push(()=>I(e,"value",c));const p=[ye,we,Ce],l=[];function d(i,s){return i[0].trafficMitigationCheck.majorQ4=="Local"?0:i[0].trafficMitigationCheck.majorQ4=="Wider"?1:i[0].trafficMitigationCheck.majorQ4=="Measures are inadequate"?2:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ4,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r!==g&&(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o||(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function Me(a){let e,n;return e=new D({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ce(a){let e,n;return e=new D({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function we(a){let e,n;return e=new D({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ye(a){let e,n;return e=new D({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Qe(a){let e;return{c(){e=S(`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},l(n){e=T(n,`If planned measures are inadequate to address pollution levels on the
          major route, and the scheme will cause 'moderate' or 'substantial'
          additional pollution, reconsider the scheme.`)},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function je(a){let e;return{c(){e=S(`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},l(n){e=T(n,`Address major route congestion and/or pollution through wider schemes.
          A range of examples are given in the User Guide.`)},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function qe(a){let e;return{c(){e=S(`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},l(n){e=T(n,`Consider local solutions, either as part of scheme or with a new
          scheme, where possible. A range of examples are given in the User
          Guide.`)},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Ne(a){let e;return{c(){e=S(`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},l(n){e=T(n,`Address major route congestion and/or pollution through wider schemes, a
        range of examples are given in the User Guide`)},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Re(a){let e;return{c(){e=S("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=T(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Ae(a){let e;return{c(){e=S(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=T(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Ye(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors, such as schools or hospitals there?"};a[0].trafficMitigationCheck.majorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.majorQ1),e=new O({props:_}),A.push(()=>I(e,"value",c));const p=[he,de],l=[];function d(i,s){return i[0].trafficMitigationCheck.majorQ1=="Yes"?0:i[0].trafficMitigationCheck.majorQ1=="No"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,[s]){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.majorQ1,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r===g?~r&&l[r].p(i,s):(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function Ie(a,e,n){let t;K(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ1,c)&&(t.trafficMitigationCheck.majorQ1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ2,c)&&(t.trafficMitigationCheck.majorQ2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ3,c)&&(t.trafficMitigationCheck.majorQ3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.majorQ4,c)&&(t.trafficMitigationCheck.majorQ4=c,q.set(t))}return[t,r,o,f,u]}class Se extends F{constructor(e){super(),z(this,e,Ie,Ye,P,{})}}function Te(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is the scheme expected to add significant levels of traffic or congestion to these streets?"};a[0].trafficMitigationCheck.minorQ2!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ2),e=new O({props:_}),A.push(()=>I(e,"value",c));const p=[We,Ue],l=[];function d(i,s){return i[0].trafficMitigationCheck.minorQ2=="Yes"?0:i[0].trafficMitigationCheck.minorQ2=="No"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.minorQ2,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r!==g&&(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o||(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function Ge(a){let e,n;return e=new D({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&8&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ue(a){let e,n;return e=new Z({props:{$$slots:{default:[De]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function We(a){let e,n;return e=new D({props:{$$slots:{default:[Ee]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function De(a){let e;return{c(){e=S("The scheme reduces traffic overall, and causes no wider issues")},l(n){e=T(n,"The scheme reduces traffic overall, and causes no wider issues")},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Ee(a){let e;return{c(){e=S("Redesign scheme with alternative diversionary routes or a wider focus")},l(n){e=T(n,"Redesign scheme with alternative diversionary routes or a wider focus")},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Oe(a){let e;return{c(){e=S(`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},l(n){e=T(n,`Redesign scheme with alternative diversionary routes, a wider focus, or
    mitigating measures to protect sensitive receptor(s)`)},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Ve(a){let e,n,t,r,o,f,u;function c(i){a[1](i)}let _={label:"Are there sensitive receptors on these streets or do the existing pollution levels exceed or approach limit values?"};a[0].trafficMitigationCheck.minorQ1!==void 0&&(_.value=a[0].trafficMitigationCheck.minorQ1),e=new O({props:_}),A.push(()=>I(e,"value",c));const p=[Ge,Te],l=[];function d(i,s){return i[0].trafficMitigationCheck.minorQ1=="Yes"?0:i[0].trafficMitigationCheck.minorQ1=="No"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,[s]){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.minorQ1,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r===g?~r&&l[r].p(i,s):(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function He(a,e,n){let t;K(a,q,f=>n(0,t=f));function r(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ1,f)&&(t.trafficMitigationCheck.minorQ1=f,q.set(t))}function o(f){a.$$.not_equal(t.trafficMitigationCheck.minorQ2,f)&&(t.trafficMitigationCheck.minorQ2=f,q.set(t))}return[t,r,o]}class Le extends F{constructor(e){super(),z(this,e,He,Ve,P,{})}}function Pe(a){let e,n,t,r,o,f,u;function c(i){a[2](i)}let _={label:"Is it expected to reduce traffic both within the scheme and elsewhere?",emptyOption:!0,choices:[["Yes","Yes, traffic is expected to reduce due to modal shift and trip reduction"],["No","No, some traffic is expected to be displaced to other roads"]]};a[0].trafficMitigationCheck.q2!==void 0&&(_.value=a[0].trafficMitigationCheck.q2),e=new X({props:_}),A.push(()=>I(e,"value",c));const p=[Be,ze],l=[];function d(i,s){return i[0].trafficMitigationCheck.q2=="Yes"?0:i[0].trafficMitigationCheck.q2=="No"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.q2,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r===g?~r&&l[r].p(i,s):(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o?o.p(i,s):(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function Fe(a){let e,n;return e=new D({props:{$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const o={};r&32&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ze(a){let e,n,t,r,o,f,u;function c(i){a[3](i)}let _={label:"Where will displaced traffic go?",emptyOption:!0,choices:ne(["Major routes (e.g. scheme eliminates a rat run)","Minor streets (e.g. residential)"])};a[0].trafficMitigationCheck.q3!==void 0&&(_.value=a[0].trafficMitigationCheck.q3),e=new X({props:_}),A.push(()=>I(e,"value",c));const p=[Ke,Je],l=[];function d(i,s){return i[0].trafficMitigationCheck.q3=="Major routes (e.g. scheme eliminates a rat run)"?0:i[0].trafficMitigationCheck.q3=="Minor streets (e.g. residential)"?1:-1}return~(r=d(a))&&(o=l[r]=p[r](a)),{c(){M(e.$$.fragment),t=N(),o&&o.c(),f=j()},l(i){C(e.$$.fragment,i),t=R(i),o&&o.l(i),f=j()},m(i,s){w(e,i,s),b(i,t,s),~r&&l[r].m(i,s),b(i,f,s),u=!0},p(i,s){const v={};!n&&s&1&&(n=!0,v.value=i[0].trafficMitigationCheck.q3,Y(()=>n=!1)),e.$set(v);let g=r;r=d(i),r!==g&&(o&&(G(),$(l[g],1,1,()=>{l[g]=null}),U()),~r?(o=l[r],o||(o=l[r]=p[r](i),o.c()),m(o,1),o.m(f.parentNode,f)):o=null)},i(i){u||(m(e.$$.fragment,i),m(o),u=!0)},o(i){$(e.$$.fragment,i),$(o),u=!1},d(i){i&&(k(t),k(f)),y(e,i),~r&&l[r].d(i)}}}function Be(a){let e,n;return e=new Z({}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p:ue,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Je(a){let e,n;return e=new Le({}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ke(a){let e,n;return e=new Se({}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Xe(a){let e;return{c(){e=S("Stop. Redesign scheme to reduce traffic.")},l(n){e=T(n,"Stop. Redesign scheme to reduce traffic.")},m(n,t){b(n,e,t)},d(n){n&&k(e)}}}function Ze(a){let e,n,t,r,o,f,u,c,_,p,l,d,i,s;e=new $e({props:{title:"Traffic Mitigation Manual",section:me[3],link:"/area_check/manual"}});function v(h){a[1](h)}let g={label:"Is the scheme expected to reduce traffic?"};a[0].trafficMitigationCheck.q1!==void 0&&(g.value=a[0].trafficMitigationCheck.q1),r=new O({props:g}),A.push(()=>I(r,"value",v));const x=[Fe,Pe],W=[];function ee(h,Q){return h[0].trafficMitigationCheck.q1=="No"?0:h[0].trafficMitigationCheck.q1=="Yes"?1:-1}~(u=ee(a))&&(c=W[u]=x[u](a));function oe(h){a[4](h)}let te={label:"Results & Commentary"};return a[0].trafficMitigationCheck.notes!==void 0&&(te.value=a[0].trafficMitigationCheck.notes),d=new _e({props:te}),A.push(()=>I(d,"value",oe)),{c(){M(e.$$.fragment),n=N(),t=V("div"),M(r.$$.fragment),f=N(),c&&c.c(),_=N(),p=V("hr"),l=N(),M(d.$$.fragment),this.h()},l(h){C(e.$$.fragment,h),n=R(h),t=H(h,"DIV",{class:!0});var Q=J(t);C(r.$$.fragment,Q),f=R(Q),c&&c.l(Q),_=R(Q),p=H(Q,"HR",{}),l=R(Q),C(d.$$.fragment,Q),Q.forEach(k),this.h()},h(){L(t,"class","govuk-width-container")},m(h,Q){w(e,h,Q),b(h,n,Q),b(h,t,Q),w(r,t,null),E(t,f),~u&&W[u].m(t,null),E(t,_),E(t,p),E(t,l),w(d,t,null),s=!0},p(h,[Q]){const ie={};!o&&Q&1&&(o=!0,ie.value=h[0].trafficMitigationCheck.q1,Y(()=>o=!1)),r.$set(ie);let B=u;u=ee(h),u===B?~u&&W[u].p(h,Q):(c&&(G(),$(W[B],1,1,()=>{W[B]=null}),U()),~u?(c=W[u],c?c.p(h,Q):(c=W[u]=x[u](h),c.c()),m(c,1),c.m(t,_)):c=null);const re={};!i&&Q&1&&(i=!0,re.value=h[0].trafficMitigationCheck.notes,Y(()=>i=!1)),d.$set(re)},i(h){s||(m(e.$$.fragment,h),m(r.$$.fragment,h),m(c),m(d.$$.fragment,h),s=!0)},o(h){$(e.$$.fragment,h),$(r.$$.fragment,h),$(c),$(d.$$.fragment,h),s=!1},d(h){h&&(k(n),k(t)),y(e,h),y(r),~u&&W[u].d(),y(d)}}}function xe(a,e,n){let t;K(a,q,c=>n(0,t=c));function r(c){a.$$.not_equal(t.trafficMitigationCheck.q1,c)&&(t.trafficMitigationCheck.q1=c,q.set(t))}function o(c){a.$$.not_equal(t.trafficMitigationCheck.q2,c)&&(t.trafficMitigationCheck.q2=c,q.set(t))}function f(c){a.$$.not_equal(t.trafficMitigationCheck.q3,c)&&(t.trafficMitigationCheck.q3=c,q.set(t))}function u(c){a.$$.not_equal(t.trafficMitigationCheck.notes,c)&&(t.trafficMitigationCheck.notes=c,q.set(t))}return[t,r,o,f,u]}class mt extends F{constructor(e){super(),z(this,e,xe,Ze,P,{})}}export{mt as component};
