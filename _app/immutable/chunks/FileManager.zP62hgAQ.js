import{s as ne,B as W,i as d,n as V,f as p,e as y,a as I,t as A,c as v,b as R,g as x,d as B,o as q,h as E,j as Z,P as $e,z as de,v as ge,m as ie,Q as ae,R as Q}from"./scheduler.DYUcsWQI.js";import{S as re,i as oe,c as D,b as G,m as P,t as w,a as k,d as j,g as te,f as le}from"./index.ADnkt-Ju.js";import{e as fe,u as he,o as be}from"./each.DIuDx0dE.js";import{B as we}from"./ButtonGroup.DV53gUOL.js";import{F as ke}from"./FileInput.BzByjbgP.js";import{S as T,W as ye}from"./WarningButton.BqcOaKQN.js";import{a as _e}from"./index.GD0Zv1B5.js";import{F as ve}from"./FormElement.FS_prNBs.js";import"./index.zanE4qv0.js";function ue(s){let e,t,l,n,r,i,a;return{c(){e=y("div"),t=y("div"),l=y("progress"),n=I(),r=y("div"),i=y("h3"),a=A(s[0]),this.h()},l(u){e=v(u,"DIV",{class:!0});var m=R(e);t=v(m,"DIV",{class:!0});var c=R(t);l=v(c,"PROGRESS",{}),R(l).forEach(p),n=x(c),r=v(c,"DIV",{class:!0});var $=R(r);i=v($,"H3",{});var b=R(i);a=B(b,s[0]),b.forEach(p),$.forEach(p),c.forEach(p),m.forEach(p),this.h()},h(){q(r,"class","govuk-prose"),q(t,"class","inner svelte-ho9d42"),q(e,"class","outer svelte-ho9d42")},m(u,m){d(u,e,m),E(e,t),E(t,l),E(t,n),E(t,r),E(r,i),E(i,a)},p(u,m){m&1&&Z(a,u[0])},d(u){u&&p(e)}}}function Fe(s){let e,t=s[0]&&ue(s);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,n){t&&t.m(l,n),d(l,e,n)},p(l,[n]){l[0]?t?t.p(l,n):(t=ue(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:V,o:V,d(l){l&&p(e),t&&t.d(l)}}}function Ie(s,e,t){let{loading:l}=e;return s.$$set=n=>{"loading"in n&&t(0,l=n.loading)},[l]}class xe extends re{constructor(e){super(),oe(this,e,Ie,Fe,ne,{loading:0})}}function Ee(s){let e,t,l;return{c(){e=y("input"),this.h()},l(n){e=v(n,"INPUT",{class:!0,id:!0,type:!0}),this.h()},h(){q(e,"class","govuk-file-upload"),q(e,"id","import-xlsx"),q(e,"type","file")},m(n,r){d(n,e,r),s[4](e),t||(l=de(e,"change",s[2]),t=!0)},p:V,d(n){n&&p(e),s[4](null),t=!1,l()}}}function Le(s){let e,t,l,n;return e=new ve({props:{label:"Import from XLSX file",id:"import-xlsx",$$slots:{default:[Ee]},$$scope:{ctx:s}}}),l=new xe({props:{loading:s[0]}}),{c(){D(e.$$.fragment),t=I(),D(l.$$.fragment)},l(r){G(e.$$.fragment,r),t=x(r),G(l.$$.fragment,r)},m(r,i){P(e,r,i),d(r,t,i),P(l,r,i),n=!0},p(r,[i]){const a={};i&66&&(a.$$scope={dirty:i,ctx:r}),e.$set(a);const u={};i&1&&(u.loading=r[0]),l.$set(u)},i(r){n||(w(e.$$.fragment,r),w(l.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),k(l.$$.fragment,r),n=!1},d(r){r&&p(t),j(e,r),j(l,r)}}}function Se(s,e,t){let l=$e(),{xlsxImporter:n}=e,r="",i;async function a(m){let c=i.files[0].name;try{t(0,r=`Loading ${c}`);let $=await i.files[0].arrayBuffer(),b=await n($);t(0,r=""),l("imported",{filename:_e(c,".xlsx"),data:b})}catch($){window.alert(`Couldn't import ${c}: ${$}`),t(0,r="")}}function u(m){ge[m?"unshift":"push"](()=>{i=m,t(1,i)})}return s.$$set=m=>{"xlsxImporter"in m&&t(3,n=m.xlsxImporter)},[r,i,a,n,u]}class Ce extends re{constructor(e){super(),oe(this,e,Se,Le,ne,{xlsxImporter:3})}}function ce(s,e,t){const l=s.slice();return l[15]=e[t],l}function Ne(s){let e;return{c(){e=A("Rename")},l(t){e=B(t,"Rename")},m(t,l){d(t,e,l)},d(t){t&&p(e)}}}function Re(s){let e;return{c(){e=A("Export")},l(t){e=B(t,"Export")},m(t,l){d(t,e,l)},d(t){t&&p(e)}}}function Ae(s){let e;return{c(){e=A("Delete")},l(t){e=B(t,"Delete")},m(t,l){d(t,e,l)},d(t){t&&p(e)}}}function Be(s){let e,t,l,n,r,i;return e=new T({props:{$$slots:{default:[Ne]},$$scope:{ctx:s}}}),e.$on("click",s[5]),l=new T({props:{$$slots:{default:[Re]},$$scope:{ctx:s}}}),l.$on("click",s[6]),r=new ye({props:{$$slots:{default:[Ae]},$$scope:{ctx:s}}}),r.$on("click",s[7]),{c(){D(e.$$.fragment),t=I(),D(l.$$.fragment),n=I(),D(r.$$.fragment)},l(a){G(e.$$.fragment,a),t=x(a),G(l.$$.fragment,a),n=x(a),G(r.$$.fragment,a)},m(a,u){P(e,a,u),d(a,t,u),P(l,a,u),d(a,n,u),P(r,a,u),i=!0},p(a,u){const m={};u&262144&&(m.$$scope={dirty:u,ctx:a}),e.$set(m);const c={};u&262144&&(c.$$scope={dirty:u,ctx:a}),l.$set(c);const $={};u&262144&&($.$$scope={dirty:u,ctx:a}),r.$set($)},i(a){i||(w(e.$$.fragment,a),w(l.$$.fragment,a),w(r.$$.fragment,a),i=!0)},o(a){k(e.$$.fragment,a),k(l.$$.fragment,a),k(r.$$.fragment,a),i=!1},d(a){a&&(p(t),p(n)),j(e,a),j(l,a),j(r,a)}}}function De(s){let e;return{c(){e=A("New file")},l(t){e=B(t,"New file")},m(t,l){d(t,e,l)},d(t){t&&p(e)}}}function me(s){let e,t;return e=new Ce({props:{xlsxImporter:s[2]}}),e.$on("imported",s[10]),{c(){D(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,n){P(e,l,n),t=!0},p(l,n){const r={};n&4&&(r.xlsxImporter=l[2]),e.$set(r)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function Ge(s){let e,t,l,n;function r(){return s[13](s[15])}return t=new T({props:{$$slots:{default:[je]},$$scope:{ctx:s}}}),t.$on("click",r),{c(){e=y("li"),D(t.$$.fragment),l=I()},l(i){e=v(i,"LI",{});var a=R(e);G(t.$$.fragment,a),l=x(a),a.forEach(p)},m(i,a){d(i,e,a),P(t,e,null),E(e,l),n=!0},p(i,a){s=i;const u={};a&262152&&(u.$$scope={dirty:a,ctx:s}),t.$set(u)},i(i){n||(w(t.$$.fragment,i),n=!0)},o(i){k(t.$$.fragment,i),n=!1},d(i){i&&p(e),j(t)}}}function Pe(s){let e,t=s[15]+"",l;return{c(){e=y("li"),l=A(t)},l(n){e=v(n,"LI",{});var r=R(e);l=B(r,t),r.forEach(p)},m(n,r){d(n,e,r),E(e,l)},p(n,r){r&8&&t!==(t=n[15]+"")&&Z(l,t)},i:V,o:V,d(n){n&&p(e)}}}function je(s){let e=s[15]+"",t;return{c(){t=A(e)},l(l){t=B(l,e)},m(l,n){d(l,t,n)},p(l,n){n&8&&e!==(e=l[15]+"")&&Z(t,e)},d(l){l&&p(t)}}}function pe(s,e){let t,l,n,r,i;const a=[Pe,Ge],u=[];function m(c,$){return c[15]==c[4]?0:1}return l=m(e),n=u[l]=a[l](e),{key:s,first:null,c(){t=W(),n.c(),r=W(),this.h()},l(c){t=W(),n.l(c),r=W(),this.h()},h(){this.first=t},m(c,$){d(c,t,$),u[l].m(c,$),d(c,r,$),i=!0},p(c,$){e=c;let b=l;l=m(e),l===b?u[l].p(e,$):(te(),k(u[b],1,1,()=>{u[b]=null}),le(),n=u[l],n?n.p(e,$):(n=u[l]=a[l](e),n.c()),w(n,1),n.m(r.parentNode,r))},i(c){i||(w(n),i=!0)},o(c){k(n),i=!1},d(c){c&&(p(t),p(r)),u[l].d(c)}}}function Ye(s){let e,t=`All files are auto-saved in your browser's local storage. You can close your
  browser and resume later. You can export the file to your computer to share
  with someone else, and import from a file below.`,l,n,r,i,a,u,m,c,$,b,S,L,H,Y,J,X,U,O="Load a saved file:",M,_,g=[],C=new Map,N;c=new we({props:{$$slots:{default:[Be]},$$scope:{ctx:s}}}),L=new T({props:{$$slots:{default:[De]},$$scope:{ctx:s}}}),L.$on("click",s[8]),Y=new ke({props:{label:"Import from a .json file",onLoad:s[9]}});let h=s[2]!=null&&me(s),z=fe(s[3]);const se=o=>o[15];for(let o=0;o<z.length;o+=1){let f=ce(s,z,o),F=se(f);C.set(F,g[o]=pe(F,f))}return{c(){e=y("p"),e.textContent=t,l=I(),n=y("p"),r=A("You're currently editing "),i=y("u"),a=A(s[4]),u=A(`
  .`),m=I(),D(c.$$.fragment),$=I(),b=y("hr"),S=I(),D(L.$$.fragment),H=I(),D(Y.$$.fragment),J=I(),h&&h.c(),X=I(),U=y("p"),U.textContent=O,M=I(),_=y("ul");for(let o=0;o<g.length;o+=1)g[o].c()},l(o){e=v(o,"P",{"data-svelte-h":!0}),ie(e)!=="svelte-eph3gl"&&(e.textContent=t),l=x(o),n=v(o,"P",{});var f=R(n);r=B(f,"You're currently editing "),i=v(f,"U",{});var F=R(i);a=B(F,s[4]),F.forEach(p),u=B(f,`
  .`),f.forEach(p),m=x(o),G(c.$$.fragment,o),$=x(o),b=v(o,"HR",{}),S=x(o),G(L.$$.fragment,o),H=x(o),G(Y.$$.fragment,o),J=x(o),h&&h.l(o),X=x(o),U=v(o,"P",{"data-svelte-h":!0}),ie(U)!=="svelte-1xydj1w"&&(U.textContent=O),M=x(o),_=v(o,"UL",{});var K=R(_);for(let ee=0;ee<g.length;ee+=1)g[ee].l(K);K.forEach(p)},m(o,f){d(o,e,f),d(o,l,f),d(o,n,f),E(n,r),E(n,i),E(i,a),E(n,u),d(o,m,f),P(c,o,f),d(o,$,f),d(o,b,f),d(o,S,f),P(L,o,f),d(o,H,f),P(Y,o,f),d(o,J,f),h&&h.m(o,f),d(o,X,f),d(o,U,f),d(o,M,f),d(o,_,f);for(let F=0;F<g.length;F+=1)g[F]&&g[F].m(_,null);N=!0},p(o,[f]){(!N||f&16)&&Z(a,o[4]);const F={};f&262144&&(F.$$scope={dirty:f,ctx:o}),c.$set(F);const K={};f&262144&&(K.$$scope={dirty:f,ctx:o}),L.$set(K),o[2]!=null?h?(h.p(o,f),f&4&&w(h,1)):(h=me(o),h.c(),w(h,1),h.m(X.parentNode,X)):h&&(te(),k(h,1,1,()=>{h=null}),le()),f&2072&&(z=fe(o[3]),te(),g=he(g,f,se,1,o,z,C,_,be,pe,null,ce),le())},i(o){if(!N){w(c.$$.fragment,o),w(L.$$.fragment,o),w(Y.$$.fragment,o),w(h);for(let f=0;f<z.length;f+=1)w(g[f]);N=!0}},o(o){k(c.$$.fragment,o),k(L.$$.fragment,o),k(Y.$$.fragment,o),k(h);for(let f=0;f<g.length;f+=1)k(g[f]);N=!1},d(o){o&&(p(e),p(l),p(n),p(m),p($),p(b),p(S),p(H),p(J),p(X),p(U),p(M),p(_)),j(c,o),j(L,o),j(Y,o),h&&h.d(o);for(let f=0;f<g.length;f+=1)g[f].d()}}}function Ue(s,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",s),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Xe(s,e,t){let l,n=V,r=()=>(n(),n=ae($,_=>t(14,l=_)),$),i,a=V,u=()=>(a(),a=ae(c,_=>t(4,i=_)),c);s.$$.on_destroy.push(()=>n()),s.$$.on_destroy.push(()=>a());let{files:m}=e,{currentFile:c}=e;u();let{state:$}=e;r();let{xlsxImporter:b=null}=e,S=m.getFileList();function L(){let _=window.prompt(`Rename file ${i} to what?`,i);if(_){let g=m.key(i),C=window.localStorage.getItem(g);window.localStorage.setItem(m.key(_),C),window.localStorage.removeItem(g),Q(c,i=_,i),t(3,S=m.getFileList())}}function H(){Ue(i+".json",JSON.stringify(l))}async function Y(){window.confirm(`Really delete file ${i}? You can't undo this.`)&&(window.localStorage.removeItem(m.key(i)),await J())}async function J(){Q(c,i=m.newFilename(),i),Q($,l=m.emptyState(),l),t(3,S=m.saveAndGetFileList(i,l))}async function X(_,g){let C=_e(_,".json");try{let N=JSON.parse(g);m.validate(N),t(3,S=m.saveAndGetFileList(C,N)),await O(C)}catch(N){window.alert(`Couldn't load ${C}: ${N}`)}}async function U(_){let{filename:g,data:C}=_.detail;t(3,S=m.saveAndGetFileList(g,C)),await O(g)}async function O(_){try{let g=m.loadFile(_);Q(c,i=_,i),Q($,l=g,l)}catch(g){window.alert(`Couldn't load ${_}: ${g}`)}}const M=_=>O(_);return s.$$set=_=>{"files"in _&&t(12,m=_.files),"currentFile"in _&&u(t(0,c=_.currentFile)),"state"in _&&r(t(1,$=_.state)),"xlsxImporter"in _&&t(2,b=_.xlsxImporter)},[c,$,b,S,i,L,H,Y,J,X,U,O,m,M]}class Qe extends re{constructor(e){super(),oe(this,e,Xe,Ye,ne,{files:12,currentFile:0,state:1,xlsxImporter:2})}}export{Qe as F};
