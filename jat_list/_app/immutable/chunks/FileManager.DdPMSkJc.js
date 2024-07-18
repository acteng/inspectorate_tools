import{s as oe,D as H,i as h,n as z,f as p,e as y,a as L,t as M,c as I,b as A,g as x,d as G,r as T,h as F,j as Q,R as be,z as we,v as ge,x as ie,w as ke,S as ae,T as q,p as fe}from"./scheduler.BBS-fkhU.js";import{S as re,i as se,c as P,a as j,m as B,t as k,b as E,d as U,e as ve,g as le,f as ne}from"./index.B8H3ypVf.js";import{e as ue,u as ye,o as Ie}from"./each.D79A5KlB.js";import{g as ce}from"./entry.DumPIyM9.js";import{b as me}from"./paths.CF26Zfc0.js";import{B as Fe}from"./ButtonGroup.fhy-VJbf.js";import{F as Ee}from"./FileInput.D6bMLSI-.js";import{S as K,W as Se}from"./WarningButton.CaqyhU7y.js";import{a as he}from"./index.BkHoAOXo.js";import{F as Le}from"./FormElement.Cy4womqK.js";import"./index.DTSuEcuu.js";import{M as xe}from"./Modal.BeZKr1PV.js";function pe(o){let e,t,l,n,r,s,a;return{c(){e=y("div"),t=y("div"),l=y("progress"),n=L(),r=y("div"),s=y("h3"),a=M(o[0]),this.h()},l(u){e=I(u,"DIV",{class:!0});var f=A(e);t=I(f,"DIV",{class:!0});var c=A(t);l=I(c,"PROGRESS",{}),A(l).forEach(p),n=x(c),r=I(c,"DIV",{class:!0});var _=A(r);s=I(_,"H3",{});var w=A(s);a=G(w,o[0]),w.forEach(p),_.forEach(p),c.forEach(p),f.forEach(p),this.h()},h(){T(r,"class","govuk-prose"),T(t,"class","inner svelte-ho9d42"),T(e,"class","outer svelte-ho9d42")},m(u,f){h(u,e,f),F(e,t),F(t,l),F(t,n),F(t,r),F(r,s),F(s,a)},p(u,f){f&1&&Q(a,u[0])},d(u){u&&p(e)}}}function Ce(o){let e,t=o[0]&&pe(o);return{c(){t&&t.c(),e=H()},l(l){t&&t.l(l),e=H()},m(l,n){t&&t.m(l,n),h(l,e,n)},p(l,[n]){l[0]?t?t.p(l,n):(t=pe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:z,o:z,d(l){l&&p(e),t&&t.d(l)}}}function Ne(o,e,t){let{loading:l}=e;return o.$$set=n=>{"loading"in n&&t(0,l=n.loading)},[l]}class Re extends re{constructor(e){super(),se(this,e,Ne,Ce,oe,{loading:0})}}function De(o){let e,t,l;return{c(){e=y("input"),this.h()},l(n){e=I(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){T(e,"class","govuk-file-upload"),T(e,"id","import-xlsx"),T(e,"type","file")},m(n,r){h(n,e,r),o[4](e),t||(l=we(e,"change",o[2]),t=!0)},p:z,d(n){n&&p(e),o[4](null),t=!1,l()}}}function Ae(o){let e,t,l,n;return e=new Le({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[De]},$$scope:{ctx:o}}}),l=new Re({props:{loading:o[0]}}),{c(){P(e.$$.fragment),t=L(),P(l.$$.fragment)},l(r){j(e.$$.fragment,r),t=x(r),j(l.$$.fragment,r)},m(r,s){B(e,r,s),h(r,t,s),B(l,r,s),n=!0},p(r,[s]){const a={};s&66&&(a.$$scope={dirty:s,ctx:r}),e.$set(a);const u={};s&1&&(u.loading=r[0]),l.$set(u)},i(r){n||(k(e.$$.fragment,r),k(l.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),E(l.$$.fragment,r),n=!1},d(r){r&&p(t),U(e,r),U(l,r)}}}function Me(o,e,t){let l=be(),{xlsxImporter:n}=e,r="",s;async function a(f){let c=s.files[0].name;try{t(0,r=`Loading ${c}`);let _=await s.files[0].arrayBuffer(),w=await n(_);t(0,r=""),l("imported",{filename:he(c,".xlsx"),data:w})}catch(_){window.alert(`Couldn't import ${c}: ${_}`),t(0,r="")}}function u(f){ge[f?"unshift":"push"](()=>{s=f,t(1,s)})}return o.$$set=f=>{"xlsxImporter"in f&&t(3,n=f.xlsxImporter)},[r,s,a,n,u]}class Ge extends re{constructor(e){super(),se(this,e,Me,Ae,oe,{xlsxImporter:3})}}function $e(o,e,t){const l=o.slice();return l[18]=e[t],l}function Pe(o){let e;return{c(){e=M("Manage files")},l(t){e=G(t,"Manage files")},m(t,l){h(t,e,l)},d(t){t&&p(e)}}}function je(o){let e;return{c(){e=M("Rename")},l(t){e=G(t,"Rename")},m(t,l){h(t,e,l)},d(t){t&&p(e)}}}function Be(o){let e;return{c(){e=M("Export")},l(t){e=G(t,"Export")},m(t,l){h(t,e,l)},d(t){t&&p(e)}}}function Ue(o){let e;return{c(){e=M("Delete")},l(t){e=G(t,"Delete")},m(t,l){h(t,e,l)},d(t){t&&p(e)}}}function Ye(o){let e,t,l,n,r,s;return e=new K({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),e.$on("click",o[6]),l=new K({props:{$$slots:{default:[Be]},$$scope:{ctx:o}}}),l.$on("click",o[7]),r=new Se({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),r.$on("click",o[8]),{c(){P(e.$$.fragment),t=L(),P(l.$$.fragment),n=L(),P(r.$$.fragment)},l(a){j(e.$$.fragment,a),t=x(a),j(l.$$.fragment,a),n=x(a),j(r.$$.fragment,a)},m(a,u){B(e,a,u),h(a,t,u),B(l,a,u),h(a,n,u),B(r,a,u),s=!0},p(a,u){const f={};u&2097152&&(f.$$scope={dirty:u,ctx:a}),e.$set(f);const c={};u&2097152&&(c.$$scope={dirty:u,ctx:a}),l.$set(c);const _={};u&2097152&&(_.$$scope={dirty:u,ctx:a}),r.$set(_)},i(a){s||(k(e.$$.fragment,a),k(l.$$.fragment,a),k(r.$$.fragment,a),s=!0)},o(a){E(e.$$.fragment,a),E(l.$$.fragment,a),E(r.$$.fragment,a),s=!1},d(a){a&&(p(t),p(n)),U(e,a),U(l,a),U(r,a)}}}function Ve(o){let e;return{c(){e=M("New file")},l(t){e=G(t,"New file")},m(t,l){h(t,e,l)},d(t){t&&p(e)}}}function _e(o){let e,t;return e=new Ge({props:{xlsxImporter:o[2]}}),e.$on("imported",o[11]),{c(){P(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){B(e,l,n),t=!0},p(l,n){const r={};n&4&&(r.xlsxImporter=l[2]),e.$set(r)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){E(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function Xe(o){let e,t,l,n;function r(){return o[15](o[18])}return t=new K({props:{$$slots:{default:[Oe]},$$scope:{ctx:o}}}),t.$on("click",r),{c(){e=y("li"),P(t.$$.fragment),l=L()},l(s){e=I(s,"LI",{});var a=A(e);j(t.$$.fragment,a),l=x(a),a.forEach(p)},m(s,a){h(s,e,a),B(t,e,null),F(e,l),n=!0},p(s,a){o=s;const u={};a&2097160&&(u.$$scope={dirty:a,ctx:o}),t.$set(u)},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&p(e),U(t)}}}function Je(o){let e,t=o[18]+"",l;return{c(){e=y("li"),l=M(t)},l(n){e=I(n,"LI",{});var r=A(e);l=G(r,t),r.forEach(p)},m(n,r){h(n,e,r),F(e,l)},p(n,r){r&8&&t!==(t=n[18]+"")&&Q(l,t)},i:z,o:z,d(n){n&&p(e)}}}function Oe(o){let e=o[18]+"",t;return{c(){t=M(e)},l(l){t=G(l,e)},m(l,n){h(l,t,n)},p(l,n){n&8&&e!==(e=l[18]+"")&&Q(t,e)},d(l){l&&p(t)}}}function de(o,e){let t,l,n,r,s;const a=[Je,Xe],u=[];function f(c,_){return c[18]==c[5]?0:1}return l=f(e),n=u[l]=a[l](e),{key:o,first:null,c(){t=H(),n.c(),r=H(),this.h()},l(c){t=H(),n.l(c),r=H(),this.h()},h(){this.first=t},m(c,_){h(c,t,_),u[l].m(c,_),h(c,r,_),s=!0},p(c,_){e=c;let w=l;l=f(e),l===w?u[l].p(e,_):(le(),E(u[w],1,1,()=>{u[w]=null}),ne(),n=u[l],n?n.p(e,_):(n=u[l]=a[l](e),n.c()),k(n,1),n.m(r.parentNode,r))},i(c){s||(k(n),s=!0)},o(c){E(n),s=!1},d(c){c&&(p(t),p(r)),u[l].d(c)}}}function ze(o){let e,t=`All files are auto-saved in your browser's local storage. You can close your
    browser and resume later. You can export the file to your computer to share
    with someone else, and import from a file below.`,l,n,r,s,a,u,f,c,_,w,C,$,b,S,N,Y,V,Z="Load a saved file:",X,J,v=[],ee=new Map,d;c=new Fe({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),$=new K({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}}),$.$on("click",o[9]),S=new Ee({props:{label:"Import from a .json file",onLoad:o[10]}});let g=o[2]!=null&&_e(o),R=ue(o[3]);const O=i=>i[18];for(let i=0;i<R.length;i+=1){let m=$e(o,R,i),D=O(m);ee.set(D,v[i]=de(D,m))}return{c(){e=y("p"),e.textContent=t,l=L(),n=y("p"),r=M("You're currently editing "),s=y("u"),a=M(o[5]),u=M(`
    .`),f=L(),P(c.$$.fragment),_=L(),w=y("hr"),C=L(),P($.$$.fragment),b=L(),P(S.$$.fragment),N=L(),g&&g.c(),Y=L(),V=y("p"),V.textContent=Z,X=L(),J=y("ul");for(let i=0;i<v.length;i+=1)v[i].c()},l(i){e=I(i,"P",{"data-svelte-h":!0}),fe(e)!=="svelte-1yvzirp"&&(e.textContent=t),l=x(i),n=I(i,"P",{});var m=A(n);r=G(m,"You're currently editing "),s=I(m,"U",{});var D=A(s);a=G(D,o[5]),D.forEach(p),u=G(m,`
    .`),m.forEach(p),f=x(i),j(c.$$.fragment,i),_=x(i),w=I(i,"HR",{}),C=x(i),j($.$$.fragment,i),b=x(i),j(S.$$.fragment,i),N=x(i),g&&g.l(i),Y=x(i),V=I(i,"P",{"data-svelte-h":!0}),fe(V)!=="svelte-1xydj1w"&&(V.textContent=Z),X=x(i),J=I(i,"UL",{});var W=A(J);for(let te=0;te<v.length;te+=1)v[te].l(W);W.forEach(p)},m(i,m){h(i,e,m),h(i,l,m),h(i,n,m),F(n,r),F(n,s),F(s,a),F(n,u),h(i,f,m),B(c,i,m),h(i,_,m),h(i,w,m),h(i,C,m),B($,i,m),h(i,b,m),B(S,i,m),h(i,N,m),g&&g.m(i,m),h(i,Y,m),h(i,V,m),h(i,X,m),h(i,J,m);for(let D=0;D<v.length;D+=1)v[D]&&v[D].m(J,null);d=!0},p(i,m){(!d||m&32)&&Q(a,i[5]);const D={};m&2097152&&(D.$$scope={dirty:m,ctx:i}),c.$set(D);const W={};m&2097152&&(W.$$scope={dirty:m,ctx:i}),$.$set(W),i[2]!=null?g?(g.p(i,m),m&4&&k(g,1)):(g=_e(i),g.c(),k(g,1),g.m(Y.parentNode,Y)):g&&(le(),E(g,1,1,()=>{g=null}),ne()),m&4136&&(R=ue(i[3]),le(),v=ye(v,m,O,1,i,R,ee,J,Ie,de,null,$e),ne())},i(i){if(!d){k(c.$$.fragment,i),k($.$$.fragment,i),k(S.$$.fragment,i),k(g);for(let m=0;m<R.length;m+=1)k(v[m]);d=!0}},o(i){E(c.$$.fragment,i),E($.$$.fragment,i),E(S.$$.fragment,i),E(g);for(let m=0;m<v.length;m+=1)E(v[m]);d=!1},d(i){i&&(p(e),p(l),p(n),p(f),p(_),p(w),p(C),p(b),p(N),p(Y),p(V),p(X),p(J)),U(c,i),U($,i),U(S,i),g&&g.d(i);for(let m=0;m<v.length;m+=1)v[m].d()}}}function He(o){let e,t,l,n,r,s,a,u,f,c,_;t=new K({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}}}),t.$on("click",o[14]);function w($){o[16]($)}let C={title:"Manage files",$$slots:{default:[ze]},$$scope:{ctx:o}};return o[4]!==void 0&&(C.open=o[4]),f=new xe({props:C}),ge.push(()=>ve(f,"open",w)),{c(){e=y("div"),P(t.$$.fragment),l=L(),n=y("span"),r=M("Editing file "),s=y("u"),a=M(o[5]),u=L(),P(f.$$.fragment),this.h()},l($){e=I($,"DIV",{style:!0});var b=A(e);j(t.$$.fragment,b),l=x(b),n=I(b,"SPAN",{});var S=A(n);r=G(S,"Editing file "),s=I(S,"U",{});var N=A(s);a=G(N,o[5]),N.forEach(p),S.forEach(p),b.forEach(p),u=x($),j(f.$$.fragment,$),this.h()},h(){ie(e,"display","flex"),ie(e,"align-items","baseline")},m($,b){h($,e,b),B(t,e,null),F(e,l),F(e,n),F(n,r),F(n,s),F(s,a),h($,u,b),B(f,$,b),_=!0},p($,[b]){const S={};b&2097152&&(S.$$scope={dirty:b,ctx:$}),t.$set(S),(!_||b&32)&&Q(a,$[5]);const N={};b&2097196&&(N.$$scope={dirty:b,ctx:$}),!c&&b&16&&(c=!0,N.open=$[4],ke(()=>c=!1)),f.$set(N)},i($){_||(k(t.$$.fragment,$),k(f.$$.fragment,$),_=!0)},o($){E(t.$$.fragment,$),E(f.$$.fragment,$),_=!1},d($){$&&(p(e),p(u)),U(t),U(f,$)}}}function Te(o,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",o),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function We(o,e,t){let l,n=z,r=()=>(n(),n=ae(_,d=>t(17,l=d)),_),s,a=z,u=()=>(a(),a=ae(c,d=>t(5,s=d)),c);o.$$.on_destroy.push(()=>n()),o.$$.on_destroy.push(()=>a());let{files:f}=e,{currentFile:c}=e;u();let{state:_}=e;r();let{xlsxImporter:w}=e,C=f.getFileList(),$=!1;function b(){let d=window.prompt(`Rename file ${s} to what?`,s);if(d){let g=f.key(s),R=window.localStorage.getItem(g);window.localStorage.setItem(f.key(d),R),window.localStorage.removeItem(g),q(c,s=d,s),t(3,C=f.getFileList())}}function S(){Te(s+".json",JSON.stringify(l))}async function N(){window.confirm(`Really delete file ${s}? You can't undo this.`)&&(window.localStorage.removeItem(f.key(s)),await Y())}async function Y(){q(c,s=f.newFilename(),s),q(_,l=f.emptyState(),l),t(3,C=f.saveAndGetFileList(s,l)),await ce(`${me}/${f.prefix}`)}async function V(d,g){let R=he(d,".json");try{let O=JSON.parse(g);f.validate(O),t(3,C=f.saveAndGetFileList(R,O)),await X(R)}catch(O){window.alert(`Couldn't load ${R}: ${O}`)}}async function Z(d){let{filename:g,data:R}=d.detail;t(3,C=f.saveAndGetFileList(g,R)),await X(g)}async function X(d){try{let g=f.loadFile(d);q(c,s=d,s),q(_,l=g,l),await ce(`${me}/${f.prefix}`)}catch(g){window.alert(`Couldn't load ${d}: ${g}`)}}const J=()=>t(4,$=!0),v=d=>X(d);function ee(d){$=d,t(4,$)}return o.$$set=d=>{"files"in d&&t(13,f=d.files),"currentFile"in d&&u(t(0,c=d.currentFile)),"state"in d&&r(t(1,_=d.state)),"xlsxImporter"in d&&t(2,w=d.xlsxImporter)},[c,_,w,C,$,s,b,S,N,Y,V,Z,X,f,J,v,ee]}class at extends re{constructor(e){super(),se(this,e,We,He,oe,{files:13,currentFile:0,state:1,xlsxImporter:2})}}export{at as F};
