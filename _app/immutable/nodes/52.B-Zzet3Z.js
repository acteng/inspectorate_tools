import{s as O,a as $,e as F,g as k,c as A,m as N,i as f,f as g,k as D,t as V,d as G}from"../chunks/scheduler.DNnUYlgZ.js";import{S as U,i as q,c as d,a as x,m as w,t as S,b as _,d as b}from"../chunks/index.tVBxdTp3.js";import{e as X}from"../chunks/da_log.9XBAyumg.js";import{c as z,s as Q}from"../chunks/data.BpKMtiS3.js";import{D as Y}from"../chunks/DefaultButton.B_sEEUsJ.js";/* empty css                                                               */import{T as E}from"../chunks/TextArea.NwvsZ3J4.js";import{E as Z}from"../chunks/exceljs.min.BuyXGIGS.js";import{g as ee,a as te}from"../chunks/lists.djxH55N_.js";import{d as le}from"../chunks/index.B7xTXe2E.js";/* empty css                                                    */import{L as oe}from"../chunks/Loading.DXym9ja7.js";import"../chunks/paths.D0jihDZH.js";const re=""+new URL("../assets/blank_route_check.CfWjwSGn.xlsx",import.meta.url).href;async function ne(e,n){console.log("Loading blank route check xlsx");let o=await(await fetch(re)).arrayBuffer(),r=new Z.Workbook;await r.xlsx.load(o),r.eachSheet((a,i)=>{a.conditionalFormattings=[]}),ae(e,r),ie(e,r),se(e,r),ue(e,r),L(e.safetyCheck,r,"3.1 Safety Check",["J","K","L","M"],P([[13,28]])),L(e.streetCheck,r,"4.1 Street Check",["J","K","L","M"],P([[13,19],[23,25],[29,34],[38,43],[47,50]])),L(e.streetPlacemakingCheck,r,"4.2 Street Placemaking Check",["I","J","K","L"],P([[13,15],[19,21],[25,34],[38,47]])),L(e.pathCheck,r,"5.1 Path Check",["J","K","L","M"],P([[15,19],[23,33],[37,40],[44,48],[52,56]])),L(e.pathPlacemakingCheck,r,"5.2 Path Placemaking Check",["I","J","K","L"],P([[12,14],[20,22],[26,29],[33,41]])),me(e,r),r.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,r.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let s=await r.xlsx.writeBuffer();le(s,`route_check_${n}.xlsx`)}function ae(e,n){let t=n.getWorksheet("1. Summary of Scheme");t.getCell("C6").value=e.summary.dateDesignReview,t.getCell("C7").value=e.summary.schemeReference,t.getCell("C8").value=e.summary.schemeName,t.getCell("C9").value=e.summary.schemeSummary,t.getCell("C10").value=e.summary.schemeInfoReviewed,t.getCell("C11").value=e.summary.authority,t.getCell("C12").value=e.summary.transportOrCombinedAuthority,t.getCell("C13").value=e.summary.region,t.getCell("C14").value=e.summary.fundingProgramme,t.getCell("C15").value=e.summary.designStage,t.getCell("C16").value=e.summary.fundingConditions,t.getCell("C17").value=e.summary.inspectorEmail,t.getCell("C18").value=e.summary.assessedRouteLengthKm,t.getCell("C19").value=e.summary.totalRouteLengthKm,t.getCell("C20").value=e.summary.notes,e.summary.checkType=="path"&&(t.getCell("D22").value="Path Check")}function ie(e,n){let t=n.getWorksheet("2.1 Policy Check");for(let o=0;o<6;o++)t.getCell("D"+(8+o)).value=e.policyCheck[o].existing,t.getCell("E"+(8+o)).value=e.policyCheck[o].proposed,t.getCell("F"+(8+o)).value=e.policyCheck[o].commentary}function se(e,n){let t=n.getWorksheet("2.2 Policy Conflict Log");for(let[o,r]of e.policyConflictLog.entries())t.getCell("F"+(8+o)).value=ee(r.conflict),t.getCell("H"+(8+o)).value=r.stage,t.getCell("I"+(8+o)).value=B(r.point),t.getCell("J"+(8+o)).value=r.locationName,t.getCell("K"+(8+o)).value=r.resolved,t.getCell("L"+(8+o)).value=r.notes}function ue(e,n){let t=n.getWorksheet("3.2 Critical Issues Log");for(let[o,r]of e.criticalIssues.entries())t.getCell("F"+(8+o)).value=te(r.criticalIssue),t.getCell("H"+(8+o)).value=r.stage,t.getCell("I"+(8+o)).value=B(r.point),t.getCell("J"+(8+o)).value=r.locationName,t.getCell("K"+(8+o)).value=r.resolved,t.getCell("L"+(8+o)).value=r.notes}function L(e,n,t,o,r){let s=n.getWorksheet(t);if(r.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${t}`);for(let a=0;a<e.existingScores.length;a++){let i=r[a];s.getCell(o[0]+i).value=H(e.existingScores[a]),s.getCell(o[1]+i).value=e.existingScoreNotes[a],s.getCell(o[2]+i).value=H(e.proposedScores[a]),s.getCell(o[3]+i).value=e.proposedScoreNotes[a]}}function me(e,n){let t=n.getWorksheet("6. JAT Check"),o=0;for(let r of e.jat)for(let s of[r.existing,r.proposed]){let a=y("H",o*5);t.getCell(y(a,1)+"9").value=r.name,t.getCell(y(a,1)+"10").value=s.notes;for(let[i,c]of s.movements.filter(C=>C.kind=="walking & wheeling").entries())t.getCell(a+(13+i)).value=c.name,t.getCell(y(a,2)+(13+i)).value=M(c.score),t.getCell(y(a,3)+(13+i)).value=c.notes;for(let[i,c]of s.movements.filter(C=>C.kind=="cycling").entries())t.getCell(a+(26+i)).value=c.name,t.getCell(y(a,2)+(26+i)).value=M(c.score),t.getCell(y(a,3)+(26+i)).value=c.notes;o++}}function y(e,n){return fe(ce(e)+n)}function ce(e){let n=0;for(let t=0;t<e.length;t++)n*=26,n+=e.charCodeAt(t)-65+1;return n-1}function fe(e){let n="";for(e+=1;e>0;){let t=(e-1)%26;n=String.fromCharCode(t+65)+n,e=Math.floor((e-1)/26)}return n}function P(e){let n=[];for(let[t,o]of e)for(let r=t;r<=o;r++)n.push(r);return n}function H(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function M(e){return{0:0,1:1,2:2,X:e}[e]}function B(e){return`${e[1]}, ${e[0]}`}function ge(e){let n;return{c(){n=V("Convert to .xlsx")},l(t){n=G(t,"Convert to .xlsx")},m(t,o){f(t,n,o)},d(t){t&&g(n)}}}function Ce(e){let n,t,o,r=`<i>When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9</i>`,s,a,i,c,C,m,R=`This page is for internal use only. The values below are TSV (tab-separated
  values), copyable into Excel.`,I,p,T,h,W,v,J;return n=new Y({props:{$$slots:{default:[ge]},$$scope:{ctx:e}}}),n.$on("click",e[4]),a=new oe({props:{loading:e[0]}}),p=new E({props:{label:"TSV output, just the one row of values",value:e[3]}}),h=new E({props:{label:"TSV output with header",value:`${e[2]}
${e[3]}
`}}),v=new E({props:{label:"JSON mapping",value:JSON.stringify(Object.fromEntries(e[1]),null,"  ")}}),{c(){d(n.$$.fragment),t=$(),o=F("p"),o.innerHTML=r,s=$(),d(a.$$.fragment),i=$(),c=F("hr"),C=$(),m=F("p"),m.textContent=R,I=$(),d(p.$$.fragment),T=$(),d(h.$$.fragment),W=$(),d(v.$$.fragment)},l(l){x(n.$$.fragment,l),t=k(l),o=A(l,"P",{"data-svelte-h":!0}),N(o)!=="svelte-6hhtkc"&&(o.innerHTML=r),s=k(l),x(a.$$.fragment,l),i=k(l),c=A(l,"HR",{}),C=k(l),m=A(l,"P",{"data-svelte-h":!0}),N(m)!=="svelte-5ssfe3"&&(m.textContent=R),I=k(l),x(p.$$.fragment,l),T=k(l),x(h.$$.fragment,l),W=k(l),x(v.$$.fragment,l)},m(l,u){w(n,l,u),f(l,t,u),f(l,o,u),f(l,s,u),w(a,l,u),f(l,i,u),f(l,c,u),f(l,C,u),f(l,m,u),f(l,I,u),w(p,l,u),f(l,T,u),w(h,l,u),f(l,W,u),w(v,l,u),J=!0},p(l,[u]){const j={};u&128&&(j.$$scope={dirty:u,ctx:l}),n.$set(j);const K={};u&1&&(K.loading=l[0]),a.$set(K)},i(l){J||(S(n.$$.fragment,l),S(a.$$.fragment,l),S(p.$$.fragment,l),S(h.$$.fragment,l),S(v.$$.fragment,l),J=!0)},o(l){_(n.$$.fragment,l),_(a.$$.fragment,l),_(p.$$.fragment,l),_(h.$$.fragment,l),_(v.$$.fragment,l),J=!1},d(l){l&&(g(t),g(o),g(s),g(i),g(c),g(C),g(m),g(I),g(T),g(W)),b(n,l),b(a,l),b(p,l),b(h,l),b(v,l)}}}function pe(e,n,t){let o,r;D(e,z,m=>t(5,o=m)),D(e,Q,m=>t(6,r=m));let s=X(r),a=s.map(m=>m[0]).join("	"),i=s.map(m=>`"${m[1]}"`).join("	"),c="";async function C(){t(0,c="Converting to .xlsx (takes about 20 seconds)");try{await ne(r,o)}catch(m){window.alert(`Conversion failed: ${m}`)}t(0,c="")}return[c,s,a,i,C]}class Ie extends U{constructor(n){super(),q(this,n,pe,Ce,O,{})}}export{Ie as component};
