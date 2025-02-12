import{s as D,r as N,a as x,g as S,i as f,w as j,f as p,k as I,e as F,t as K,c as J,d as M,I as B,q as W,v as H,n as R,p as O}from"./scheduler.4ZNDCSWA.js";import{S as U,i as q,e as G,c as d,a as $,m as v,t as y,b as k,d as _}from"./index.xRKM1n3P.js";import{c as X,s as z}from"./data.DgUqFDAc.js";import"./index.B4rHHoX7.js";import{S as T}from"./SecondaryButton.yCPBUDia.js";import{W as Q}from"./WarningText.BAnqnX4i.js";import{E as V}from"./exceljs.min.BuyXGIGS.js";import{g as Y,a as Z}from"./lists.Bn2sGx3F.js";import{b as ee}from"./index.DGRx7NsH.js";import"./index.B8qs9HuP.js";import{L as te}from"./Loading.B3lUrDCY.js";import{M as le}from"./Modal.DXEzOgfZ.js";import"./paths.CcXYa_Uh.js";import"./entry.Doim8BV3.js";import{d as oe}from"./download.C6h074W8.js";const re=""+new URL("../assets/blank_route_check.CfWjwSGn.xlsx",import.meta.url).href;async function ne(e,o){console.log("Loading blank route check xlsx");let l=await(await fetch(re)).arrayBuffer(),r=new V.Workbook;await r.xlsx.load(l),r.eachSheet((s,i)=>{s.conditionalFormattings=[]}),ae(e,r),se(e,r),ie(e,r),ue(e,r),C(e.safetyCheck,r,"3.1 Safety Check",["J","K","L","M"],h([[13,28]])),C(e.streetCheck,r,"4.1 Street Check",["J","K","L","M"],h([[13,19],[23,25],[29,34],[38,43],[47,50]])),C(e.streetPlacemakingCheck,r,"4.2 Street Placemaking Check",["I","J","K","L"],h([[13,15],[19,21],[25,34],[38,47]])),C(e.pathCheck,r,"5.1 Path Check",["J","K","L","M"],h([[15,19],[23,33],[37,40],[44,48],[52,56]])),C(e.pathPlacemakingCheck,r,"5.2 Path Placemaking Check",["I","J","K","L"],h([[12,14],[20,22],[26,29],[33,41]])),ce(e,r),r.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,r.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let n=await r.xlsx.writeBuffer();ee(n,`route_check_${o}.xlsx`)}function ae(e,o){let t=o.getWorksheet("1. Summary of Scheme");t.getCell("C6").value=e.summary.dateDesignReview,t.getCell("C7").value=e.summary.schemeReference,t.getCell("C8").value=e.summary.schemeName,t.getCell("C9").value=e.summary.schemeSummary,t.getCell("C10").value=e.summary.schemeInfoReviewed,t.getCell("C11").value=e.summary.authority,t.getCell("C12").value=e.summary.transportOrCombinedAuthority,t.getCell("C13").value=e.summary.region,t.getCell("C14").value=e.summary.fundingProgramme,t.getCell("C15").value=e.summary.designStage,t.getCell("C16").value=e.summary.fundingConditions,t.getCell("C17").value=e.summary.inspectorEmail,t.getCell("C18").value=e.summary.assessedRouteLengthKm,t.getCell("C19").value=e.summary.totalRouteLengthKm,t.getCell("C20").value=e.summary.notes,e.summary.checkType=="path"&&(t.getCell("D22").value="Path Check");for(let l of e.summary.networkMap.features)if(l.geometry.type=="LineString"){t.getCell("C26").value=l.geometry.coordinates[0][1],t.getCell("D26").value=l.geometry.coordinates[0][0],t.getCell("C27").value=l.geometry.coordinates[0][1],t.getCell("D27").value=l.geometry.coordinates[0][0],t.getCell("C28").value=`https://www.openstreetmap.org/#map=18/${l.geometry.coordinates[0][1]}/${l.geometry.coordinates[0][0]}`;break}}function se(e,o){let t=o.getWorksheet("2.1 Policy Check");for(let l=0;l<6;l++)t.getCell("D"+(8+l)).value=e.policyCheck[l].existing,t.getCell("E"+(8+l)).value=e.policyCheck[l].proposed,t.getCell("F"+(8+l)).value=e.policyCheck[l].commentary}function ie(e,o){let t=o.getWorksheet("2.2 Policy Conflict Log");for(let[l,r]of e.policyConflictLog.entries())t.getCell("F"+(8+l)).value=Y(r.conflict),t.getCell("H"+(8+l)).value=r.stage,t.getCell("I"+(8+l)).value=A(r.point),t.getCell("J"+(8+l)).value=r.locationName,t.getCell("K"+(8+l)).value=r.stage==="Design"?"No":r.resolved,t.getCell("L"+(8+l)).value=r.notes}function ue(e,o){let t=o.getWorksheet("3.2 Critical Issues Log");for(let[l,r]of e.criticalIssues.entries())t.getCell("F"+(8+l)).value=Z(r.criticalIssue),t.getCell("H"+(8+l)).value=r.stage,t.getCell("I"+(8+l)).value=A(r.point),t.getCell("J"+(8+l)).value=r.locationName,t.getCell("K"+(8+l)).value=r.stage==="Design"?"No":r.resolved,t.getCell("L"+(8+l)).value=r.notes}function C(e,o,t,l,r){let n=o.getWorksheet(t);if(r.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${t}`);for(let s=0;s<e.existingScores.length;s++){let i=r[s];n.getCell(l[0]+i).value=E(e.existingScores[s]),n.getCell(l[1]+i).value=e.existingScoreNotes[s],n.getCell(l[2]+i).value=E(e.proposedScores[s]),n.getCell(l[3]+i).value=e.proposedScoreNotes[s]}}function ce(e,o){let t=o.getWorksheet("6. JAT Check"),l=0;for(let r of e.jat)for(let n of[r.existing,r.proposed]){let s=g("H",l*5);t.getCell(g(s,1)+"9").value=r.name,t.getCell(g(s,1)+"10").value=n.notes;for(let[i,u]of n.movements.filter(m=>m.kind=="walking & wheeling").entries())t.getCell(s+(13+i)).value=u.name,t.getCell(g(s,2)+(13+i)).value=P(u.score),t.getCell(g(s,3)+(13+i)).value=u.notes;for(let[i,u]of n.movements.filter(m=>m.kind=="cycling").entries())t.getCell(s+(26+i)).value=u.name,t.getCell(g(s,2)+(26+i)).value=P(u.score),t.getCell(g(s,3)+(26+i)).value=u.notes;l++}}function g(e,o){return ge(me(e)+o)}function me(e){let o=0;for(let t=0;t<e.length;t++)o*=26,o+=e.charCodeAt(t)-65+1;return o-1}function ge(e){let o="";for(e+=1;e>0;){let t=(e-1)%26;o=String.fromCharCode(t+65)+o,e=Math.floor((e-1)/26)}return o}function h(e){let o=[];for(let[t,l]of e)for(let r=t;r<=l;r++)o.push(r);return o}function E(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function P(e){return{0:0,1:1,2:2,X:e}[e]}function A(e){return`${e[1]}, ${e[0]}`}function fe(e){let o,t,l;return{c(){o=F("img"),l=K(`
  Export .xlsx`),this.h()},l(r){o=J(r,"IMG",{src:!0,alt:!0,style:!0}),l=M(r,`
  Export .xlsx`),this.h()},h(){B(o.src,t=oe)||W(o,"src",t),W(o,"alt","Export .xlsx"),H(o,"vertical-align","middle")},m(r,n){f(r,o,n),f(r,l,n)},p:R,d(r){r&&(p(o),p(l))}}}function pe(e){let o,t=`<li>When you open the file, you need to force Excel to recalculate all
        formulas with Ctrl + Alt + F9.</li> <li>The route coordinates in the Summary of Scheme may not capture
        everything mapped when the route is split into multiple pieces.</li> <li>The map weblink only shows the route start point.</li>`;return{c(){o=F("ul"),o.innerHTML=t},l(l){o=J(l,"UL",{"data-svelte-h":!0}),O(o)!=="svelte-jjr0kp"&&(o.innerHTML=t)},m(l,r){f(l,o,r)},p:R,d(l){l&&p(o)}}}function Ce(e){let o;return{c(){o=K("OK")},l(t){o=M(t,"OK")},m(t,l){f(t,o,l)},d(t){t&&p(o)}}}function he(e){let o,t,l,r;return o=new Q({props:{$$slots:{default:[pe]},$$scope:{ctx:e}}}),l=new T({props:{$$slots:{default:[Ce]},$$scope:{ctx:e}}}),l.$on("click",e[3]),{c(){d(o.$$.fragment),t=x(),d(l.$$.fragment)},l(n){$(o.$$.fragment,n),t=S(n),$(l.$$.fragment,n)},m(n,s){v(o,n,s),f(n,t,s),v(l,n,s),r=!0},p(n,s){const i={};s&128&&(i.$$scope={dirty:s,ctx:n}),o.$set(i);const u={};s&128&&(u.$$scope={dirty:s,ctx:n}),l.$set(u)},i(n){r||(y(o.$$.fragment,n),y(l.$$.fragment,n),r=!0)},o(n){k(o.$$.fragment,n),k(l.$$.fragment,n),r=!1},d(n){n&&p(t),_(o,n),_(l,n)}}}function de(e){let o,t,l,r,n,s,i;o=new T({props:{$$slots:{default:[fe]},$$scope:{ctx:e}}}),o.$on("click",e[2]),l=new te({props:{loading:e[0]}});function u(a){e[4](a)}let m={title:"Route check exported to Excel",$$slots:{default:[he]},$$scope:{ctx:e}};return e[1]!==void 0&&(m.open=e[1]),n=new le({props:m}),N.push(()=>G(n,"open",u)),{c(){d(o.$$.fragment),t=x(),d(l.$$.fragment),r=x(),d(n.$$.fragment)},l(a){$(o.$$.fragment,a),t=S(a),$(l.$$.fragment,a),r=S(a),$(n.$$.fragment,a)},m(a,c){v(o,a,c),f(a,t,c),v(l,a,c),f(a,r,c),v(n,a,c),i=!0},p(a,[c]){const b={};c&128&&(b.$$scope={dirty:c,ctx:a}),o.$set(b);const L={};c&1&&(L.loading=a[0]),l.$set(L);const w={};c&130&&(w.$$scope={dirty:c,ctx:a}),!s&&c&2&&(s=!0,w.open=a[1],j(()=>s=!1)),n.$set(w)},i(a){i||(y(o.$$.fragment,a),y(l.$$.fragment,a),y(n.$$.fragment,a),i=!0)},o(a){k(o.$$.fragment,a),k(l.$$.fragment,a),k(n.$$.fragment,a),i=!1},d(a){a&&(p(t),p(r)),_(o,a),_(l,a),_(n,a)}}}function $e(e,o,t){let l,r;I(e,X,a=>t(5,l=a)),I(e,z,a=>t(6,r=a));let n="",s=!1;async function i(){t(0,n="Converting to .xlsx (takes about 20 seconds)");try{await ne(r,l),t(1,s=!0)}catch(a){window.alert(`Conversion failed: ${a}`)}t(0,n="")}const u=()=>t(1,s=!1);function m(a){s=a,t(1,s)}return[n,s,i,u,m]}class Je extends U{constructor(o){super(),q(this,o,$e,de,D,{})}}export{Je as C};
