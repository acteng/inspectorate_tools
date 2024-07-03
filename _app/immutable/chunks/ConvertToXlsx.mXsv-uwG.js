import{c as J,s as M}from"./data.BazL1FQ8.js";import{g as F}from"./results.D7ZmUySo.js";import{g as N,a as O}from"./lists.BBs_zCmn.js";import{s as H,a as k,e as L,g as S,c as x,p as K,i as C,f as h,k as D,t as B,d as G}from"./scheduler.mGr_ZlpV.js";import{S as U,i as X,c as R,b as W,m as E,t as A,a as I,d as w}from"./index.rGMSHTnh.js";import{D as Y}from"./DefaultButton.Mx2gKMUF.js";/* empty css                                                       */import{E as q}from"./exceljs.min.BuyXGIGS.js";import{a as z}from"./index.BhPAdd39.js";/* empty css                                            */import{L as Q}from"./Loading.BcksfG_f.js";import"./paths.Cfo-255g.js";function Te(e){let t=F(e),l=e.summary.checkType=="street",o=e.summary.checkType=="path",n={Safety:"Sa",Accessibility:"Ac",Comfort:"Cf",Directness:"Di",Attractiveness:"At",Cohesion:"Co",overall:"To"},i={"Social activity":"SA","Personal security":"PS","Character and legibility":"CL",Environment:"En",overall:"To"};return[...V(e),...Z(e),...d("SA",0,e.safetyCheck),...d("ST",16,e.streetCheck),...d("SP",0,e.streetPlacemakingCheck),...d("PA",16,e.pathCheck),...d("PP",0,e.pathPlacemakingCheck),...ee(e),...te(e),...f("ST-LOS",[...t.levelOfService,t.overall],l,n),...f("ST-LOS",t.byMode,l,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy"}),...f("SP-LOS",[...t.placemakingCategories,t.placemakingOverall],l,i),...f("PA-LOS",[...t.levelOfService,t.overall],o,n),...f("PA-LOS",t.byMode,o,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy","Horse Riding":"HR"},e.horseRiders=="No"?"Horse Riding":null),...le("PA-LOS",o),...f("PP-LOS",[...t.placemakingCategories,t.placemakingOverall],o,i),...oe(e,t),...ie(e),...se(e),...ce()]}function V(e){let t=e.summary;return[["Scheme Ref",t.schemeReference],["Date of Design Review",t.dateDesignReview],["Scheme Name",t.schemeName],["Authority",t.authority],["Transport/ Combined Authority",t.transportOrCombinedAuthority],["Region",t.region],["Funding Programme",t.fundingProgramme],["Design Stage",t.designStage],["Funding Conditions",t.fundingConditions],["Inspector",t.inspectorEmail],["RouteLength",t.assessedRouteLengthKm],["RouteFileLength",t.totalRouteLengthKm],["Notes",t.notes],["Tool","Route Check online-alpha"],["Sub-tool",t.checkType=="street"?"Street Check":"Path Check"]]}function Z(e){let t=[];for(let[l,o]of e.policyCheck.entries())t.push([`PC${p(l)}-E`,o.existing]),t.push([`PC${p(l)}-D`,o.proposed]);return t}function d(e,t,l){let o=[];for(let n=0;n<l.existingScores.length;n++)o.push([`${e}${p(n+t)}-E`,l.existingScores[n]]),o.push([`${e}${p(n+t)}-D`,l.proposedScores[n]]);return o}function p(e){return(e+1).toString().padStart(2,"0")}function ee(e){let t={existing:e.policyConflictLog.filter(l=>l.stage=="Existing").length,designed:e.policyConflictLog.filter(l=>l.stage=="Design").length,removed:e.policyConflictLog.filter(l=>l.resolved=="Yes").length};return[["PC-E",t.existing],["PC-D",t.designed],["PC-Rem",t.removed],["PC-Int",t.designed],["PC-Tot",t.designed+t.existing-t.removed]]}function te(e){let t={existing:e.criticalIssues.filter(l=>l.stage=="Existing").length,designed:e.criticalIssues.filter(l=>l.stage=="Design").length,removed:e.criticalIssues.filter(l=>l.resolved=="Yes").length};return[["SA-E",t.existing],["SA-D",t.designed],["SA-Rem",t.removed],["SA-Int",t.designed],["SA-Tot",t.designed+t.existing-t.removed]]}function f(e,t,l,o,n=null){let i=[];for(let r of t){if(!(r.category in o)){if(r.category!="Horse Riding")throw new Error(`Unexpected unknown category ${r.category}`);continue}let s=o[r.category];r.category!=n?(i.push([`${e}-${s}-E`,l?r.existing.scorePercent/100:""]),i.push([`${e}-${s}-D`,l?r.proposed.scorePercent/100:""])):(i.push([`${e}-${s}-E`,"N/A"]),i.push([`${e}-${s}-D`,"N/A"]))}return i}function le(e,t){return t?[]:[[`${e}-HR-E`,"N/A"],[`${e}-HR-D`,"N/A"]]}function oe(e,t){let l=[],o=12,n=t.jat.length-1;for(let i=1;i<=o;i++)for(let[r,s]of[["walkingWheeling","WW"],["cycling","Cy"],["total","To"]])l.push([`J${i}-LOS-${s}-E`,i<=n?t.jat[i-1][r].existing:"Not Completed"]),l.push([`J${i}-LOS-${s}-D`,i<=n?t.jat[i-1][r].proposed:"Not Completed"]);for(let i=1;i<=o;i++)i<=n?l.push([`J${i}-Arms`,e.jat[i-1].proposed.arms.length]):l.push([`J${i}-Arms`,0]);return l}function ne(e,t){let l=e.policyConflictLog[t],o=0;for(let i=0;i<=t;i++)e.policyConflictLog[i].conflict==l.conflict&&o++;return[e.summary.schemeReference,`P${l.conflict.padStart(3,"0")}`,`${o.toString().padStart(2,"0")}P`].join("_")}function ie(e){let t=[],l=35;for(let o=0;o<l;o++){let n;if(o<e.policyConflictLog.length){let i=e.policyConflictLog[o];n={Ref:ne(e,o),Typ:N(i.conflict),Sta:i.stage,LaL:`${i.point[1]}, ${i.point[0]}`,Loc:i.locationName,Res:i.resolved,Com:i.notes}}else n={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[i,r]of Object.entries(n))t.push([`${p(o)}PC${i}`,r])}return t}function T(e){return/\D$/.test(e)?e.slice(0,-1):e}function re(e,t){let l=e.criticalIssues[t],o=T(l.criticalIssue),n=0;for(let r=0;r<=t;r++)T(e.criticalIssues[r].criticalIssue)==o&&n++;return[e.summary.schemeReference,`SA${o.padStart(2,"0")}`,`${n.toString().padStart(2,"0")}P`].join("_")}function se(e){let t=[],l=35;for(let o=0;o<l;o++){let n;if(o<e.criticalIssues.length){let i=e.criticalIssues[o];n={Ref:re(e,o),Typ:O(i.criticalIssue),Sta:i.stage,LaL:`${i.point[1]}, ${i.point[0]}`,Loc:i.locationName,Res:i.resolved,Com:i.notes}}else n={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[i,r]of Object.entries(n))t.push([`${p(o)}SA${i}`,r])}return t}function ce(){return["Area-E","Area-D","Po-WW-E","Po-WW-D","Po-Cy-E","Po-Cy-D","Cr-WW-E","Cr-WW-D","Cr-Cy-E","Cr-Cy-D","Pe-WW-D","Pe-WW-E","Pe-Cy-D","Pe-Cy-E","MD-WW-D","MD-WW-E","MD-Cy-D","MD-Cy-E","MT-E","MT-D","PT-E","PT-D","GI-E","GI-D","IT-E","IT-D","EP-E","EP-D","TM-Comments","AC-Comments"].map(t=>[t,""])}const ae=""+new URL("../assets/blank_route_check.CfWjwSGn.xlsx",import.meta.url).href;async function ue(e,t){console.log("Loading blank route check xlsx");let o=await(await fetch(ae)).arrayBuffer(),n=new q.Workbook;await n.xlsx.load(o),n.eachSheet((r,s)=>{r.conditionalFormattings=[]}),ge(e,n),me(e,n),fe(e,n),Ce(e,n),y(e.safetyCheck,n,"3.1 Safety Check",["J","K","L","M"],v([[13,28]])),y(e.streetCheck,n,"4.1 Street Check",["J","K","L","M"],v([[13,19],[23,25],[29,34],[38,43],[47,50]])),y(e.streetPlacemakingCheck,n,"4.2 Street Placemaking Check",["I","J","K","L"],v([[13,15],[19,21],[25,34],[38,47]])),y(e.pathCheck,n,"5.1 Path Check",["J","K","L","M"],v([[15,19],[23,33],[37,40],[44,48],[52,56]])),y(e.pathPlacemakingCheck,n,"5.2 Path Placemaking Check",["I","J","K","L"],v([[12,14],[20,22],[26,29],[33,41]])),he(e,n),n.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,n.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let i=await n.xlsx.writeBuffer();z(i,`route_check_${t}.xlsx`)}function ge(e,t){let l=t.getWorksheet("1. Summary of Scheme");l.getCell("C6").value=e.summary.dateDesignReview,l.getCell("C7").value=e.summary.schemeReference,l.getCell("C8").value=e.summary.schemeName,l.getCell("C9").value=e.summary.schemeSummary,l.getCell("C10").value=e.summary.schemeInfoReviewed,l.getCell("C11").value=e.summary.authority,l.getCell("C12").value=e.summary.transportOrCombinedAuthority,l.getCell("C13").value=e.summary.region,l.getCell("C14").value=e.summary.fundingProgramme,l.getCell("C15").value=e.summary.designStage,l.getCell("C16").value=e.summary.fundingConditions,l.getCell("C17").value=e.summary.inspectorEmail,l.getCell("C18").value=e.summary.assessedRouteLengthKm,l.getCell("C19").value=e.summary.totalRouteLengthKm,l.getCell("C20").value=e.summary.notes,e.summary.checkType=="path"&&(l.getCell("D22").value="Path Check")}function me(e,t){let l=t.getWorksheet("2.1 Policy Check");for(let o=0;o<6;o++)l.getCell("D"+(8+o)).value=e.policyCheck[o].existing,l.getCell("E"+(8+o)).value=e.policyCheck[o].proposed,l.getCell("F"+(8+o)).value=e.policyCheck[o].commentary}function fe(e,t){let l=t.getWorksheet("2.2 Policy Conflict Log");for(let[o,n]of e.policyConflictLog.entries())l.getCell("F"+(8+o)).value=N(n.conflict),l.getCell("H"+(8+o)).value=n.stage,l.getCell("I"+(8+o)).value=j(n.point),l.getCell("J"+(8+o)).value=n.locationName,l.getCell("K"+(8+o)).value=n.resolved,l.getCell("L"+(8+o)).value=n.notes}function Ce(e,t){let l=t.getWorksheet("3.2 Critical Issues Log");for(let[o,n]of e.criticalIssues.entries())l.getCell("F"+(8+o)).value=O(n.criticalIssue),l.getCell("H"+(8+o)).value=n.stage,l.getCell("I"+(8+o)).value=j(n.point),l.getCell("J"+(8+o)).value=n.locationName,l.getCell("K"+(8+o)).value=n.resolved,l.getCell("L"+(8+o)).value=n.notes}function y(e,t,l,o,n){let i=t.getWorksheet(l);if(n.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${l}`);for(let r=0;r<e.existingScores.length;r++){let s=n[r];i.getCell(o[0]+s).value=_(e.existingScores[r]),i.getCell(o[1]+s).value=e.existingScoreNotes[r],i.getCell(o[2]+s).value=_(e.proposedScores[r]),i.getCell(o[3]+s).value=e.proposedScoreNotes[r]}}function he(e,t){let l=t.getWorksheet("6. JAT Check"),o=0;for(let n of e.jat)for(let i of[n.existing,n.proposed]){let r=m("H",o*5);l.getCell(m(r,1)+"9").value=n.name,l.getCell(m(r,1)+"10").value=i.notes;for(let[s,a]of i.movements.filter(g=>g.kind=="walking & wheeling").entries())l.getCell(r+(13+s)).value=a.name,l.getCell(m(r,2)+(13+s)).value=b(a.score),l.getCell(m(r,3)+(13+s)).value=a.notes;for(let[s,a]of i.movements.filter(g=>g.kind=="cycling").entries())l.getCell(r+(26+s)).value=a.name,l.getCell(m(r,2)+(26+s)).value=b(a.score),l.getCell(m(r,3)+(26+s)).value=a.notes;o++}}function m(e,t){return de(pe(e)+t)}function pe(e){let t=0;for(let l=0;l<e.length;l++)t*=26,t+=e.charCodeAt(l)-65+1;return t-1}function de(e){let t="";for(e+=1;e>0;){let l=(e-1)%26;t=String.fromCharCode(l+65)+t,e=Math.floor((e-1)/26)}return t}function v(e){let t=[];for(let[l,o]of e)for(let n=l;n<=o;n++)t.push(n);return t}function _(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function b(e){return{0:0,1:1,2:2,X:e}[e]}function j(e){return`${e[1]}, ${e[0]}`}function ye(e){let t;return{c(){t=B("Convert to .xlsx")},l(l){t=G(l,"Convert to .xlsx")},m(l,o){C(l,t,o)},d(l){l&&h(t)}}}function ve(e){let t,l,o,n=`<i>When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9</i>`,i,r,s,a,g;return t=new Y({props:{$$slots:{default:[ye]},$$scope:{ctx:e}}}),t.$on("click",e[1]),r=new Q({props:{loading:e[0]}}),{c(){R(t.$$.fragment),l=k(),o=L("p"),o.innerHTML=n,i=k(),R(r.$$.fragment),s=k(),a=L("hr")},l(c){W(t.$$.fragment,c),l=S(c),o=x(c,"P",{"data-svelte-h":!0}),K(o)!=="svelte-6hhtkc"&&(o.innerHTML=n),i=S(c),W(r.$$.fragment,c),s=S(c),a=x(c,"HR",{})},m(c,u){E(t,c,u),C(c,l,u),C(c,o,u),C(c,i,u),E(r,c,u),C(c,s,u),C(c,a,u),g=!0},p(c,[u]){const $={};u&16&&($.$$scope={dirty:u,ctx:c}),t.$set($);const P={};u&1&&(P.loading=c[0]),r.$set(P)},i(c){g||(A(t.$$.fragment,c),A(r.$$.fragment,c),g=!0)},o(c){I(t.$$.fragment,c),I(r.$$.fragment,c),g=!1},d(c){c&&(h(l),h(o),h(i),h(s),h(a)),w(t,c),w(r,c)}}}function ke(e,t,l){let o,n;D(e,J,s=>l(2,o=s)),D(e,M,s=>l(3,n=s));let i="";async function r(){l(0,i="Converting to .xlsx (takes about 20 seconds)");try{await ue(n,o)}catch(s){window.alert(`Conversion failed: ${s}`)}l(0,i="")}return[i,r]}class _e extends U{constructor(t){super(),X(this,t,ke,ve,H,{})}}export{_e as C,re as c,Te as e,ne as p};
