import{s as De,r as He,a as L,g as S,i as C,w as Ye,f as h,U as Re,t as H,d as M,e as I,c as F,q as U,y as Me,n as ie,p as fe,l as Ve,b as j,v as je,h as _,j as ae,u as We,m as Ge,o as Pe,H as Ie,V as se,K as qe,W as Je}from"./scheduler.DGwhun8C.js";import{S as Xe,i as Oe,e as Ne,c as G,a as P,m as q,t as E,b as D,d as J,g as ve,f as we}from"./index.B2vZYn3d.js";import{e as Fe}from"./each.osbS1YKp.js";import{g as Le}from"./entry.DKAkkyvg.js";import{b as me}from"./paths.d1Cb6KdY.js";import{a as Be}from"./index.Bt9jYdJx.js";import{S as Ue,A as xe}from"./ServiceHeader.DXCdpx7Z.js";import{F as Ke}from"./FileInput.qteI6Xhm.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.CIptryzf.js";import{S as de}from"./SecondaryButton.zQkvdoBX.js";import{W as ze}from"./WarningButton.B3j9Frnm.js";import{F as Qe}from"./FormElement.Cd26lsYY.js";import{W as Ze}from"./WarningText.wRiJ9IQ1.js";import{L as et}from"./Loading.DMA2vonr.js";import{M as tt}from"./Modal.CJU5CcaT.js";import{d as lt}from"./index.OdFzg-sr.js";function nt(n){let e;return{c(){e=H("Import from XLSX file")},l(t){e=M(t,"Import from XLSX file")},m(t,l){C(t,e,l)},d(t){t&&h(e)}}}function rt(n){let e,t,l;return{c(){e=I("input"),this.h()},l(a){e=F(a,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){U(e,"class","govuk-file-upload"),U(e,"id","import-xlsx"),U(e,"type","file")},m(a,o){C(a,e,o),n[6](e),t||(l=Me(e,"change",n[3]),t=!0)},p:ie,d(a){a&&h(e),n[6](null),t=!1,l()}}}function ot(n){let e,t=`You can import from an existing route check .xlsx file, <b>only if there&#39;s an up-to-date DALOG sheet added</b>
      . After importing, there will still be some problems:`,l,a,o=`<li>You must fill out the Junction Assessment Tool (JAT); it won&#39;t be
        imported</li> <li>Some text fields on the Summary of Scheme page will be missing</li>`;return{c(){e=I("p"),e.innerHTML=t,l=L(),a=I("ul"),a.innerHTML=o},l(i){e=F(i,"P",{"data-svelte-h":!0}),fe(e)!=="svelte-1ykh4hv"&&(e.innerHTML=t),l=S(i),a=F(i,"UL",{"data-svelte-h":!0}),fe(a)!=="svelte-1tt4pqo"&&(a.innerHTML=o)},m(i,s){C(i,e,s),C(i,l,s),C(i,a,s)},p:ie,d(i){i&&(h(e),h(l),h(a))}}}function st(n){let e;return{c(){e=H("Close")},l(t){e=M(t,"Close")},m(t,l){C(t,e,l)},d(t){t&&h(e)}}}function at(n){let e,t,l,a,o,i;return e=new Qe({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[rt]},$$scope:{ctx:n}}}),l=new Ze({props:{$$slots:{default:[ot]},$$scope:{ctx:n}}}),o=new de({props:{$$slots:{default:[st]},$$scope:{ctx:n}}}),o.$on("click",n[7]),{c(){G(e.$$.fragment),t=L(),G(l.$$.fragment),a=L(),G(o.$$.fragment)},l(s){P(e.$$.fragment,s),t=S(s),P(l.$$.fragment,s),a=S(s),P(o.$$.fragment,s)},m(s,m){q(e,s,m),C(s,t,m),q(l,s,m),C(s,a,m),q(o,s,m),i=!0},p(s,m){const v={};m&1028&&(v.$$scope={dirty:m,ctx:s}),e.$set(v);const u={};m&1024&&(u.$$scope={dirty:m,ctx:s}),l.$set(u);const r={};m&1024&&(r.$$scope={dirty:m,ctx:s}),o.$set(r)},i(s){i||(E(e.$$.fragment,s),E(l.$$.fragment,s),E(o.$$.fragment,s),i=!0)},o(s){D(e.$$.fragment,s),D(l.$$.fragment,s),D(o.$$.fragment,s),i=!1},d(s){s&&(h(t),h(a)),J(e,s),J(l,s),J(o,s)}}}function it(n){let e,t,l,a,o,i,s;e=new de({props:{$$slots:{default:[nt]},$$scope:{ctx:n}}}),e.$on("click",n[5]),l=new et({props:{loading:n[0]}});function m(u){n[8](u)}let v={title:"Import from XLSX file",$$slots:{default:[at]},$$scope:{ctx:n}};return n[1]!==void 0&&(v.open=n[1]),o=new tt({props:v}),He.push(()=>Ne(o,"open",m)),{c(){G(e.$$.fragment),t=L(),G(l.$$.fragment),a=L(),G(o.$$.fragment)},l(u){P(e.$$.fragment,u),t=S(u),P(l.$$.fragment,u),a=S(u),P(o.$$.fragment,u)},m(u,r){q(e,u,r),C(u,t,r),q(l,u,r),C(u,a,r),q(o,u,r),s=!0},p(u,[r]){const g={};r&1024&&(g.$$scope={dirty:r,ctx:u}),e.$set(g);const f={};r&1&&(f.loading=u[0]),l.$set(f);const $={};r&1030&&($.$$scope={dirty:r,ctx:u}),!i&&r&2&&(i=!0,$.open=u[1],Ye(()=>i=!1)),o.$set($)},i(u){s||(E(e.$$.fragment,u),E(l.$$.fragment,u),E(o.$$.fragment,u),s=!0)},o(u){D(e.$$.fragment,u),D(l.$$.fragment,u),D(o.$$.fragment,u),s=!1},d(u){u&&(h(t),h(a)),J(e,u),J(l,u),J(o,u)}}}function ft(n,e,t){let l=Re(),{xlsxImporter:a}=e,o="",i=!1,s;async function m(f){let $=s.files[0].name;try{t(0,o=`Loading ${$}`);let p=await s.files[0].arrayBuffer(),T=await a(p);t(0,o=""),l("imported",{filename:Be($,".xlsx"),data:T})}catch(p){window.alert(`Couldn't import ${$}: ${p}`),t(0,o="")}}const v=()=>t(1,i=!0);function u(f){He[f?"unshift":"push"](()=>{s=f,t(2,s)})}const r=()=>t(1,i=!1);function g(f){i=f,t(1,i)}return n.$$set=f=>{"xlsxImporter"in f&&t(4,a=f.xlsxImporter)},[o,i,s,m,a,v,u,r,g]}class ut extends Xe{constructor(e){super(),Oe(this,e,ft,it,De,{xlsxImporter:4})}}function Se(n,e,t){const l=n.slice();return l[20]=e[t],l}const ct=n=>({}),Ce=n=>({});function Ee(n){let e,t,l="You are editing:",a,o,i,s;return{c(){e=I("p"),t=I("b"),t.textContent=l,a=L(),o=I("a"),i=H(n[7]),this.h()},l(m){e=F(m,"P",{});var v=j(e);t=F(v,"B",{"data-svelte-h":!0}),fe(t)!=="svelte-1kt2tqj"&&(t.textContent=l),a=S(v),o=F(v,"A",{href:!0});var u=j(o);i=M(u,n[7]),u.forEach(h),v.forEach(h),this.h()},h(){U(o,"href",s=`${me}/${n[0].prefix}overview`)},m(m,v){C(m,e,v),_(e,t),_(e,a),_(e,o),_(o,i)},p(m,v){v&128&&ae(i,m[7]),v&1&&s!==(s=`${me}/${m[0].prefix}overview`)&&U(o,"href",s)},d(m){m&&h(e)}}}function mt(n){let e,t="No saved files";return{c(){e=I("p"),e.textContent=t},l(l){e=F(l,"P",{"data-svelte-h":!0}),fe(e)!=="svelte-yojds1"&&(e.textContent=t)},m(l,a){C(l,e,a)},p:ie,i:ie,o:ie,d(l){l&&h(e)}}}function dt(n){let e,t="Manage existing files",l,a,o,i="<tr><th>File name</th> <th>Scheme name</th> <th>Action</th></tr>",s,m,v,u=Fe(n[6]),r=[];for(let f=0;f<u.length;f+=1)r[f]=Te(Se(n,u,f));const g=f=>D(r[f],1,1,()=>{r[f]=null});return{c(){e=I("h2"),e.textContent=t,l=L(),a=I("table"),o=I("thead"),o.innerHTML=i,s=L(),m=I("tbody");for(let f=0;f<r.length;f+=1)r[f].c()},l(f){e=F(f,"H2",{"data-svelte-h":!0}),fe(e)!=="svelte-1d50rjn"&&(e.textContent=t),l=S(f),a=F(f,"TABLE",{});var $=j(a);o=F($,"THEAD",{"data-svelte-h":!0}),fe(o)!=="svelte-gvkk9f"&&(o.innerHTML=i),s=S($),m=F($,"TBODY",{});var p=j(m);for(let T=0;T<r.length;T+=1)r[T].l(p);p.forEach(h),$.forEach(h)},m(f,$){C(f,e,$),C(f,l,$),C(f,a,$),_(a,o),_(a,s),_(a,m);for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(m,null);v=!0},p(f,$){if($&9025){u=Fe(f[6]);let p;for(p=0;p<u.length;p+=1){const T=Se(f,u,p);r[p]?(r[p].p(T,$),E(r[p],1)):(r[p]=Te(T),r[p].c(),E(r[p],1),r[p].m(m,null))}for(ve(),p=u.length;p<r.length;p+=1)g(p);we()}},i(f){if(!v){for(let $=0;$<u.length;$+=1)E(r[$]);v=!0}},o(f){r=r.filter(Boolean);for(let $=0;$<r.length;$+=1)D(r[$]);v=!1},d(f){f&&(h(e),h(l),h(a)),qe(r,f)}}}function _t(n){let e;return{c(){e=H("Rename")},l(t){e=M(t,"Rename")},m(t,l){C(t,e,l)},d(t){t&&h(e)}}}function pt(n){let e;return{c(){e=H("Delete")},l(t){e=M(t,"Delete")},m(t,l){C(t,e,l)},d(t){t&&h(e)}}}function Te(n){let e,t,l,a=n[20]+"",o,i,s,m=n[0].describeFile(n[20])+"",v,u,r,g,f,$,p,T,X,z,Q;function B(){return n[15](n[20])}function Y(){return n[16](n[20])}f=new de({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),f.$on("click",Y);function ne(){return n[17](n[20])}return p=new ze({props:{$$slots:{default:[pt]},$$scope:{ctx:n}}}),p.$on("click",ne),{c(){e=I("tr"),t=I("td"),l=I("a"),o=H(a),i=L(),s=I("td"),v=H(m),u=L(),r=I("td"),g=I("div"),G(f.$$.fragment),$=L(),G(p.$$.fragment),T=L(),this.h()},l(b){e=F(b,"TR",{});var k=j(e);t=F(k,"TD",{});var x=j(t);l=F(x,"A",{href:!0});var N=j(l);o=M(N,a),N.forEach(h),x.forEach(h),i=S(k),s=F(k,"TD",{});var c=j(s);v=M(c,m),c.forEach(h),u=S(k),r=F(k,"TD",{});var w=j(r);g=F(w,"DIV",{class:!0,style:!0});var O=j(g);P(f.$$.fragment,O),$=S(O),P(p.$$.fragment,O),O.forEach(h),w.forEach(h),T=S(k),k.forEach(h),this.h()},h(){U(l,"href","#"),U(g,"class","govuk-button-group"),je(g,"flex-wrap","nowrap")},m(b,k){C(b,e,k),_(e,t),_(t,l),_(l,o),_(e,i),_(e,s),_(s,v),_(e,u),_(e,r),_(r,g),q(f,g,null),_(g,$),q(p,g,null),_(e,T),X=!0,z||(Q=Me(l,"click",Je(B)),z=!0)},p(b,k){n=b,(!X||k&64)&&a!==(a=n[20]+"")&&ae(o,a),(!X||k&65)&&m!==(m=n[0].describeFile(n[20])+"")&&ae(v,m);const x={};k&262144&&(x.$$scope={dirty:k,ctx:n}),f.$set(x);const N={};k&262144&&(N.$$scope={dirty:k,ctx:n}),p.$set(N)},i(b){X||(E(f.$$.fragment,b),E(p.$$.fragment,b),X=!0)},o(b){D(f.$$.fragment,b),D(p.$$.fragment,b),X=!1},d(b){b&&h(e),J(f),J(p),z=!1,Q()}}}function $t(n){let e;return{c(){e=H("Create new file")},l(t){e=M(t,"Create new file")},m(t,l){C(t,e,l)},d(t){t&&h(e)}}}function Ae(n){let e,t,l,a;return l=new ut({props:{xlsxImporter:n[5]}}),l.$on("imported",n[12]),{c(){e=I("hr"),t=L(),G(l.$$.fragment)},l(o){e=F(o,"HR",{}),t=S(o),P(l.$$.fragment,o)},m(o,i){C(o,e,i),C(o,t,i),q(l,o,i),a=!0},p(o,i){const s={};i&32&&(s.xlsxImporter=o[5]),l.$set(s)},i(o){a||(E(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&(h(e),h(t)),J(l,o)}}}function ht(n){let e,t,l,a,o,i,s,m,v,u,r,g,f,$,p,T,X,z,Q,B,Y,ne,b,k,x,N,c,w,O,V,_e,ue,pe,re,$e,Z;e=new Ue({props:{service:n[3]}}),a=new xe({});const he=n[14].description,W=Ve(he,n,n[18],Ce);let R=n[7]&&Ee(n);const ke=[dt,mt],te=[];function ye(d,y){return d[6].length>0?0:1}B=ye(n),Y=te[B]=ke[B](n),w=new de({props:{$$slots:{default:[$t]},$$scope:{ctx:n}}}),w.$on("click",n[10]),re=new Ke({props:{label:"Select a .json file",onLoad:n[11]}});let A=n[5]!=null&&Ae(n);return{c(){G(e.$$.fragment),t=L(),l=I("div"),G(a.$$.fragment),o=L(),i=I("h1"),s=H("Manage my "),m=H(n[4]),v=H("s"),u=L(),r=I("div"),g=I("div"),W&&W.c(),f=L(),$=I("p"),p=H("On this page you can manage your "),T=H(n[4]),X=H(` files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.`),z=L(),R&&R.c(),Q=L(),Y.c(),ne=L(),b=I("div"),k=I("h2"),x=H("Create a new "),N=H(n[4]),c=L(),G(w.$$.fragment),O=L(),V=I("h2"),_e=H("Import a saved "),ue=H(n[4]),pe=L(),G(re.$$.fragment),$e=L(),A&&A.c(),this.h()},l(d){P(e.$$.fragment,d),t=S(d),l=F(d,"DIV",{class:!0});var y=j(l);P(a.$$.fragment,y),o=S(y),i=F(y,"H1",{style:!0});var oe=j(i);s=M(oe,"Manage my "),m=M(oe,n[4]),v=M(oe,"s"),oe.forEach(h),u=S(y),r=F(y,"DIV",{class:!0});var le=j(r);g=F(le,"DIV",{class:!0});var K=j(g);W&&W.l(K),f=S(K),$=F(K,"P",{});var ce=j($);p=M(ce,"On this page you can manage your "),T=M(ce,n[4]),X=M(ce,` files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.`),ce.forEach(h),z=S(K),R&&R.l(K),Q=S(K),Y.l(K),K.forEach(h),ne=S(le),b=F(le,"DIV",{class:!0});var ee=j(b);k=F(ee,"H2",{class:!0});var ge=j(k);x=M(ge,"Create a new "),N=M(ge,n[4]),ge.forEach(h),c=S(ee),P(w.$$.fragment,ee),O=S(ee),V=F(ee,"H2",{});var be=j(V);_e=M(be,"Import a saved "),ue=M(be,n[4]),be.forEach(h),pe=S(ee),P(re.$$.fragment,ee),$e=S(ee),A&&A.l(ee),ee.forEach(h),le.forEach(h),y.forEach(h),this.h()},h(){je(i,"margin-top","30px"),U(g,"class","govuk-grid-column-two-thirds"),U(k,"class","green-bar svelte-1z050ke"),U(b,"class","govuk-grid-column-one-third"),U(r,"class","govuk-grid-row"),U(l,"class","govuk-width-container")},m(d,y){q(e,d,y),C(d,t,y),C(d,l,y),q(a,l,null),_(l,o),_(l,i),_(i,s),_(i,m),_(i,v),_(l,u),_(l,r),_(r,g),W&&W.m(g,null),_(g,f),_(g,$),_($,p),_($,T),_($,X),_(g,z),R&&R.m(g,null),_(g,Q),te[B].m(g,null),_(r,ne),_(r,b),_(b,k),_(k,x),_(k,N),_(b,c),q(w,b,null),_(b,O),_(b,V),_(V,_e),_(V,ue),_(b,pe),q(re,b,null),_(b,$e),A&&A.m(b,null),Z=!0},p(d,[y]){const oe={};y&8&&(oe.service=d[3]),e.$set(oe),(!Z||y&16)&&ae(m,d[4]),W&&W.p&&(!Z||y&262144)&&We(W,he,d,d[18],Z?Pe(he,d[18],y,ct):Ge(d[18]),Ce),(!Z||y&16)&&ae(T,d[4]),d[7]?R?R.p(d,y):(R=Ee(d),R.c(),R.m(g,Q)):R&&(R.d(1),R=null);let le=B;B=ye(d),B===le?te[B].p(d,y):(ve(),D(te[le],1,1,()=>{te[le]=null}),we(),Y=te[B],Y?Y.p(d,y):(Y=te[B]=ke[B](d),Y.c()),E(Y,1),Y.m(g,null)),(!Z||y&16)&&ae(N,d[4]);const K={};y&262144&&(K.$$scope={dirty:y,ctx:d}),w.$set(K),(!Z||y&16)&&ae(ue,d[4]),d[5]!=null?A?(A.p(d,y),y&32&&E(A,1)):(A=Ae(d),A.c(),E(A,1),A.m(b,null)):A&&(ve(),D(A,1,1,()=>{A=null}),we())},i(d){Z||(E(e.$$.fragment,d),E(a.$$.fragment,d),E(W,d),E(Y),E(w.$$.fragment,d),E(re.$$.fragment,d),E(A),Z=!0)},o(d){D(e.$$.fragment,d),D(a.$$.fragment,d),D(W,d),D(Y),D(w.$$.fragment,d),D(re.$$.fragment,d),D(A),Z=!1},d(d){d&&(h(t),h(l)),J(e,d),J(a),W&&W.d(d),R&&R.d(),te[B].d(),J(w),J(re),A&&A.d()}}}function gt(n,e,t){let l,a=ie,o=()=>(a(),a=Ie(f,c=>t(19,l=c)),f),i,s=ie,m=()=>(s(),s=Ie(g,c=>t(7,i=c)),g);n.$$.on_destroy.push(()=>a()),n.$$.on_destroy.push(()=>s());let{$$slots:v={},$$scope:u}=e,{files:r}=e,{currentFile:g}=e;m();let{state:f}=e;o();let{service:$}=e,{fileObjectType:p}=e,{xlsxImporter:T=null}=e,X=r.getFileList();function z(c){let w=window.prompt(`Rename file ${c} to what?`,c);if(w){let O=r.key(c),V=window.localStorage.getItem(O);window.localStorage.setItem(r.key(w),V),window.localStorage.removeItem(O),t(6,X=r.getFileList()),i==c&&se(g,i=w,i)}}function Q(c){if(!window.confirm(`Really delete file ${c}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let w=r.key(c);lt(`${c}.json`,window.localStorage.getItem(w)),window.localStorage.removeItem(w),i==c&&(se(g,i="",i),se(f,l=r.emptyState(),l),window.localStorage.setItem(r.key("last-opened-file"),"")),t(6,X=r.getFileList())}function B(){let c=window.prompt("What do you want to name your new file?");c&&(se(g,i=c,i),se(f,l=r.emptyState(),l),t(6,X=r.saveAndGetFileList(i,l)),Le(`${me}/${r.prefix}overview`))}function Y(c,w){let O=Be(c,".json");try{let V=JSON.parse(w);r.validate(V),t(6,X=r.saveAndGetFileList(O,V)),b(O)}catch(V){window.alert(`Couldn't load ${O}: ${V}`)}}function ne(c){let{filename:w,data:O}=c.detail;t(6,X=r.saveAndGetFileList(w,O)),b(w)}function b(c){try{let w=r.loadFile(c);se(g,i=c,i),se(f,l=w,l),Le(`${me}/${r.prefix}overview`)}catch(w){window.alert(`Couldn't load ${c}: ${w}`)}return!1}const k=c=>b(c),x=c=>z(c),N=c=>Q(c);return n.$$set=c=>{"files"in c&&t(0,r=c.files),"currentFile"in c&&m(t(1,g=c.currentFile)),"state"in c&&o(t(2,f=c.state)),"service"in c&&t(3,$=c.service),"fileObjectType"in c&&t(4,p=c.fileObjectType),"xlsxImporter"in c&&t(5,T=c.xlsxImporter),"$$scope"in c&&t(18,u=c.$$scope)},[r,g,f,$,p,T,X,i,z,Q,B,Y,ne,b,v,k,x,N,u]}class jt extends Xe{constructor(e){super(),Oe(this,e,gt,ht,De,{files:0,currentFile:1,state:2,service:3,fileObjectType:4,xlsxImporter:5})}}export{jt as F};
