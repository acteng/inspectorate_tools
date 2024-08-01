import{s as De,a as k,g as x,i as I,f as m,T as Ve,e as b,c as v,m as $e,p as g,w as Je,n as ce,y as Be,l as Pe,t as V,b as O,d as J,h as c,u as Ue,r as qe,v as Oe,j as Te,z as We,K as Fe,U as Ee,x as de,o as Ge}from"./scheduler.CT9iOTEw.js";import{S as je,i as Ne,c as B,a as G,m as j,t as h,b as y,d as N,e as ze,g as Xe,f as He}from"./index.CnK_PB-e.js";import{L as Ke,d as Me}from"./download.BHaGILUs.js";import{b as pe}from"./paths.B5l5PwSO.js";import"./entry.CFa4GA7Q.js";import{B as Le}from"./ButtonGroup.CPR9Q03l.js";import{D as Qe}from"./DefaultButton.qd2_wY_n.js";import{F as Ze}from"./FileInput.B-XXAmlJ.js";import{R as et}from"./Radio.X_Wkl5Zy.js";/* empty css                                            */import{S as _e}from"./SecondaryButton.Bjah1jNo.js";import{W as tt}from"./WarningButton.B5FdEria.js";import{a as Re,p as lt}from"./index.BQt1xz-t.js";import{F as nt}from"./FormElement.22zQJVbE.js";import"./index.CgOmxrb6.js";function st(r){let e,l,n,a=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
    . After importing, there will still be some problems:
    <ul><li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li></ul>`,t,o;return{c(){e=b("input"),l=k(),n=b("div"),n.innerHTML=a,this.h()},l(s){e=v(s,"INPUT",{class:!0,id:!0,type:!0}),l=x(s),n=v(s,"DIV",{class:!0,"data-svelte-h":!0}),$e(n)!=="svelte-1alapt1"&&(n.innerHTML=a),this.h()},h(){g(e,"class","govuk-file-upload"),g(e,"id","import-xlsx"),g(e,"type","file"),g(n,"class","govuk-hint")},m(s,u){I(s,e,u),r[4](e),I(s,l,u),I(s,n,u),t||(o=Je(e,"change",r[2]),t=!0)},p:ce,d(s){s&&(m(e),m(l),m(n)),r[4](null),t=!1,o()}}}function ot(r){let e,l,n,a;return e=new nt({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[st]},$$scope:{ctx:r}}}),n=new Ke({props:{loading:r[0]}}),{c(){B(e.$$.fragment),l=k(),B(n.$$.fragment)},l(t){G(e.$$.fragment,t),l=x(t),G(n.$$.fragment,t)},m(t,o){j(e,t,o),I(t,l,o),j(n,t,o),a=!0},p(t,[o]){const s={};o&66&&(s.$$scope={dirty:o,ctx:t}),e.$set(s);const u={};o&1&&(u.loading=t[0]),n.$set(u)},i(t){a||(h(e.$$.fragment,t),h(n.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),y(n.$$.fragment,t),a=!1},d(t){t&&m(l),N(e,t),N(n,t)}}}function rt(r,e,l){let n=Ve(),{xlsxImporter:a}=e,t="",o;async function s(E){let A=o.files[0].name;try{l(0,t=`Loading ${A}`);let F=await o.files[0].arrayBuffer(),p=await a(F);l(0,t=""),n("imported",{filename:Re(A,".xlsx"),data:p})}catch(F){window.alert(`Couldn't import ${A}: ${F}`),l(0,t="")}}function u(E){Be[E?"unshift":"push"](()=>{o=E,l(1,o)})}return r.$$set=E=>{"xlsxImporter"in E&&l(3,a=E.xlsxImporter)},[t,o,s,a,u]}class at extends je{constructor(e){super(),Ne(this,e,rt,ot,De,{xlsxImporter:3})}}function it(r){let e,l,n;return{c(){e=b("img"),n=V(`
          Export .json`),this.h()},l(a){e=v(a,"IMG",{src:!0,alt:!0,class:!0}),n=J(a,`
          Export .json`),this.h()},h(){Ge(e.src,l=Me)||g(e,"src",l),g(e,"alt","Export .json"),g(e,"class","svelte-1ysyede")},m(a,t){I(a,e,t),I(a,n,t)},p:ce,d(a){a&&(m(e),m(n))}}}function Ce(r){let e,l;return e=new _e({props:{$$slots:{default:[ft]},$$scope:{ctx:r}}}),e.$on("click",r[17]),{c(){B(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,a){j(e,n,a),l=!0},p(n,a){const t={};a&4194304&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){l||(h(e.$$.fragment,n),l=!0)},o(n){y(e.$$.fragment,n),l=!1},d(n){N(e,n)}}}function ft(r){let e,l,n;return{c(){e=b("img"),n=V(`
            Export .xlsx`),this.h()},l(a){e=v(a,"IMG",{src:!0,alt:!0,class:!0}),n=J(a,`
            Export .xlsx`),this.h()},h(){Ge(e.src,l=Me)||g(e,"src",l),g(e,"alt","Export .xlsx"),g(e,"class","svelte-1ysyede")},m(a,t){I(a,e,t),I(a,n,t)},p:ce,d(a){a&&(m(e),m(n))}}}function ut(r){let e,l,n,a;e=new _e({props:{$$slots:{default:[it]},$$scope:{ctx:r}}}),e.$on("click",r[9]);let t=r[3]&&Ce(r);return{c(){B(e.$$.fragment),l=k(),t&&t.c(),n=Fe()},l(o){G(e.$$.fragment,o),l=x(o),t&&t.l(o),n=Fe()},m(o,s){j(e,o,s),I(o,l,s),t&&t.m(o,s),I(o,n,s),a=!0},p(o,s){const u={};s&4194304&&(u.$$scope={dirty:s,ctx:o}),e.$set(u),o[3]?t?(t.p(o,s),s&8&&h(t,1)):(t=Ce(o),t.c(),h(t,1),t.m(n.parentNode,n)):t&&(Xe(),y(t,1,1,()=>{t=null}),He())},i(o){a||(h(e.$$.fragment,o),h(t),a=!0)},o(o){y(e.$$.fragment,o),y(t),a=!1},d(o){o&&(m(l),m(n)),N(e,o),t&&t.d(o)}}}function ct(r){let e;return{c(){e=V("New blank file")},l(l){e=J(l,"New blank file")},m(l,n){I(l,e,n)},d(l){l&&m(e)}}}function Se(r){let e,l,n,a;return n=new at({props:{xlsxImporter:r[4]}}),n.$on("imported",r[13]),{c(){e=b("hr"),l=k(),B(n.$$.fragment)},l(t){e=v(t,"HR",{}),l=x(t),G(n.$$.fragment,t)},m(t,o){I(t,e,o),I(t,l,o),j(n,t,o),a=!0},p(t,o){const s={};o&16&&(s.xlsxImporter=t[4]),n.$set(s)},i(t){a||(h(n.$$.fragment,t),a=!0)},o(t){y(n.$$.fragment,t),a=!1},d(t){t&&(m(e),m(l)),N(n,t)}}}function mt(r){let e;return{c(){e=V("Load selected file")},l(l){e=J(l,"Load selected file")},m(l,n){I(l,e,n)},d(l){l&&m(e)}}}function dt(r){let e;return{c(){e=V("Rename selected file")},l(l){e=J(l,"Rename selected file")},m(l,n){I(l,e,n)},d(l){l&&m(e)}}}function pt(r){let e;return{c(){e=V("Delete selected file")},l(l){e=J(l,"Delete selected file")},m(l,n){I(l,e,n)},d(l){l&&m(e)}}}function $t(r){let e,l,n,a,t,o;return e=new _e({props:{$$slots:{default:[mt]},$$scope:{ctx:r}}}),e.$on("click",r[18]),n=new _e({props:{$$slots:{default:[dt]},$$scope:{ctx:r}}}),n.$on("click",r[19]),t=new tt({props:{$$slots:{default:[pt]},$$scope:{ctx:r}}}),t.$on("click",r[20]),{c(){B(e.$$.fragment),l=k(),B(n.$$.fragment),a=k(),B(t.$$.fragment)},l(s){G(e.$$.fragment,s),l=x(s),G(n.$$.fragment,s),a=x(s),G(t.$$.fragment,s)},m(s,u){j(e,s,u),I(s,l,u),j(n,s,u),I(s,a,u),j(t,s,u),o=!0},p(s,u){const E={};u&4194304&&(E.$$scope={dirty:u,ctx:s}),e.$set(E);const A={};u&4194304&&(A.$$scope={dirty:u,ctx:s}),n.$set(A);const F={};u&4194304&&(F.$$scope={dirty:u,ctx:s}),t.$set(F)},i(s){o||(h(e.$$.fragment,s),h(n.$$.fragment,s),h(t.$$.fragment,s),o=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),y(t.$$.fragment,s),o=!1},d(s){s&&(m(l),m(a)),N(e,s),N(n,s),N(t,s)}}}function _t(r){let e,l,n,a,t,o,s,u=`All files are auto-saved in your browser's local storage. You can close
        your browser and resume later. You can export the file to your computer
        to share with someone else, and import from a file below.`,E,A,F,p,L,Y,T,ee,X,C,te,W,oe="Create or import a file",le,R,re,z,ae,P,ie,fe,H,i,$="Manage Existing Files",M,S,ge,ne,U,he,we,K,be,me,q;const ve=r[16].default,D=Pe(ve,r,r[22],null);C=new Le({props:{$$slots:{default:[ut]},$$scope:{ctx:r}}}),R=new Qe({props:{$$slots:{default:[ct]},$$scope:{ctx:r}}}),R.$on("click",r[11]),P=new Ze({props:{label:"Import from a .json file",onLoad:r[12]}});let _=r[4]!=null&&Se(r);S=new Le({props:{$$slots:{default:[$t]},$$scope:{ctx:r}}});function Ye(f){r[21](f)}let ke={label:"Selected file:",choices:r[6]};return r[5]!==void 0&&(ke.value=r[5]),U=new et({props:ke}),Be.push(()=>ze(U,"value",Ye)),{c(){e=b("div"),D&&D.c(),l=k(),n=b("hr"),a=k(),t=b("div"),o=b("div"),s=b("p"),s.textContent=u,E=k(),A=b("p"),F=b("b"),p=V("You are editing: "),L=b("a"),Y=V(r[7]),ee=V(`
          .`),X=k(),B(C.$$.fragment),te=k(),W=b("h2"),W.textContent=oe,le=k(),B(R.$$.fragment),re=k(),z=b("hr"),ae=k(),B(P.$$.fragment),ie=k(),_&&_.c(),fe=k(),H=b("div"),i=b("h2"),i.textContent=$,M=k(),B(S.$$.fragment),ge=k(),ne=b("div"),B(U.$$.fragment),we=k(),K=b("a"),be=V("Back to overview"),this.h()},l(f){e=v(f,"DIV",{class:!0});var d=O(e);D&&D.l(d),l=x(d),n=v(d,"HR",{}),a=x(d),t=v(d,"DIV",{class:!0});var Z=O(t);o=v(Z,"DIV",{class:!0});var w=O(o);s=v(w,"P",{"data-svelte-h":!0}),$e(s)!=="svelte-wkz669"&&(s.textContent=u),E=x(w),A=v(w,"P",{});var ue=O(A);F=v(ue,"B",{});var Q=O(F);p=J(Q,"You are editing: "),L=v(Q,"A",{href:!0});var xe=O(L);Y=J(xe,r[7]),xe.forEach(m),ee=J(Q,`
          .`),Q.forEach(m),ue.forEach(m),X=x(w),G(C.$$.fragment,w),te=x(w),W=v(w,"H2",{"data-svelte-h":!0}),$e(W)!=="svelte-1yqhw3l"&&(W.textContent=oe),le=x(w),G(R.$$.fragment,w),re=x(w),z=v(w,"HR",{}),ae=x(w),G(P.$$.fragment,w),ie=x(w),_&&_.l(w),w.forEach(m),fe=x(Z),H=v(Z,"DIV",{class:!0});var se=O(H);i=v(se,"H2",{"data-svelte-h":!0}),$e(i)!=="svelte-t00wtv"&&(i.textContent=$),M=x(se),G(S.$$.fragment,se),ge=x(se),ne=v(se,"DIV",{class:!0});var Ie=O(ne);G(U.$$.fragment,Ie),Ie.forEach(m),se.forEach(m),Z.forEach(m),we=x(d),K=v(d,"A",{href:!0,class:!0});var ye=O(K);be=J(ye,"Back to overview"),ye.forEach(m),d.forEach(m),this.h()},h(){g(L,"href",T=pe+"/"+r[0].prefix),g(o,"class","govuk-grid-column-two-thirds"),g(ne,"class","file-radio-container svelte-1ysyede"),g(H,"class","govuk-grid-column-one-third"),g(t,"class","govuk-grid-row"),g(K,"href",me=pe+"/"+r[0].prefix),g(K,"class","govuk-back-link"),g(e,"class","govuk-width-container")},m(f,d){I(f,e,d),D&&D.m(e,null),c(e,l),c(e,n),c(e,a),c(e,t),c(t,o),c(o,s),c(o,E),c(o,A),c(A,F),c(F,p),c(F,L),c(L,Y),c(F,ee),c(o,X),j(C,o,null),c(o,te),c(o,W),c(o,le),j(R,o,null),c(o,re),c(o,z),c(o,ae),j(P,o,null),c(o,ie),_&&_.m(o,null),c(t,fe),c(t,H),c(H,i),c(H,M),j(S,H,null),c(H,ge),c(H,ne),j(U,ne,null),c(e,we),c(e,K),c(K,be),q=!0},p(f,[d]){D&&D.p&&(!q||d&4194304)&&Ue(D,ve,f,f[22],q?Oe(ve,f[22],d,null):qe(f[22]),null),(!q||d&128)&&Te(Y,f[7]),(!q||d&1&&T!==(T=pe+"/"+f[0].prefix))&&g(L,"href",T);const Z={};d&4194312&&(Z.$$scope={dirty:d,ctx:f}),C.$set(Z);const w={};d&4194304&&(w.$$scope={dirty:d,ctx:f}),R.$set(w),f[4]!=null?_?(_.p(f,d),d&16&&h(_,1)):(_=Se(f),_.c(),h(_,1),_.m(o,null)):_&&(Xe(),y(_,1,1,()=>{_=null}),He());const ue={};d&4194336&&(ue.$$scope={dirty:d,ctx:f}),S.$set(ue);const Q={};d&64&&(Q.choices=f[6]),!he&&d&32&&(he=!0,Q.value=f[5],We(()=>he=!1)),U.$set(Q),(!q||d&1&&me!==(me=pe+"/"+f[0].prefix))&&g(K,"href",me)},i(f){q||(h(D,f),h(C.$$.fragment,f),h(R.$$.fragment,f),h(P.$$.fragment,f),h(_),h(S.$$.fragment,f),h(U.$$.fragment,f),q=!0)},o(f){y(D,f),y(C.$$.fragment,f),y(R.$$.fragment,f),y(P.$$.fragment,f),y(_),y(S.$$.fragment,f),y(U.$$.fragment,f),q=!1},d(f){f&&m(e),D&&D.d(f),N(C),N(R),N(P),_&&_.d(),N(S),N(U)}}}function Ae(r,e){let l=document.createElement("a");l.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),l.setAttribute("download",r),document.body.appendChild(l),l.click(),document.body.removeChild(l)}function gt(r,e,l){let n,a,t=ce,o=()=>(t(),t=Ee(Y,i=>l(23,a=i)),Y),s,u=ce,E=()=>(u(),u=Ee(L,i=>l(7,s=i)),L);r.$$.on_destroy.push(()=>t()),r.$$.on_destroy.push(()=>u());let{$$slots:A={},$$scope:F}=e,{files:p}=e,{currentFile:L}=e;E();let{state:Y}=e;o();let{downloadXlsx:T=void 0}=e,{xlsxImporter:ee=null}=e,X=p.getFileList(),C=X[0];function te(i){let $=window.prompt(`Rename file ${i} to what?`,i);if($){let M=p.key(i),S=window.localStorage.getItem(M);window.localStorage.setItem(p.key($),S),window.localStorage.removeItem(M),l(15,X=p.getFileList()),s===i&&de(L,s=$,s)}}function W(){Ae(s+".json",JSON.stringify(a))}async function oe(i){if(window.confirm(`Really delete file ${i}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`)){let $=p.key(i);Ae(`${i}.json`,window.localStorage.getItem($)),window.localStorage.removeItem($),i==s?await le():l(15,X=p.saveAndGetFileList(s,a))}}async function le(){let i=window.prompt("What should the file be called?","")||p.newFilename(),$=p.emptyState();l(15,X=p.saveAndGetFileList(i,$)),de(L,s=i,s)}async function R(i,$){let M=Re(i,".json");try{let S=JSON.parse($);p.validate(S),l(15,X=p.saveAndGetFileList(M,S)),await z(M)}catch(S){window.alert(`Couldn't load ${M}: ${S}`)}}async function re(i){let{filename:$,data:M}=i.detail;l(15,X=p.saveAndGetFileList($,M)),await z($)}async function z(i){try{let $=p.loadFile(i);de(L,s=i,s),de(Y,a=$,a)}catch($){window.alert(`Couldn't load ${i}: ${$}`)}}const ae=()=>{T()},P=()=>{z(C)},ie=()=>{te(C)},fe=()=>{oe(C)};function H(i){C=i,l(5,C)}return r.$$set=i=>{"files"in i&&l(0,p=i.files),"currentFile"in i&&E(l(1,L=i.currentFile)),"state"in i&&o(l(2,Y=i.state)),"downloadXlsx"in i&&l(3,T=i.downloadXlsx),"xlsxImporter"in i&&l(4,ee=i.xlsxImporter),"$$scope"in i&&l(22,F=i.$$scope)},r.$$.update=()=>{r.$$.dirty&32768&&l(6,n=lt(X))},[p,L,Y,T,ee,C,n,s,te,W,oe,le,R,re,z,X,A,ae,P,ie,fe,H,F]}class Bt extends je{constructor(e){super(),Ne(this,e,gt,_t,De,{files:0,currentFile:1,state:2,downloadXlsx:3,xlsxImporter:4})}}export{Bt as F};
