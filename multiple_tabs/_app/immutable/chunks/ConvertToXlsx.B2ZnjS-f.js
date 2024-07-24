import{c as j,s as J}from"./data.C_WDPsCG.js";import{g as F}from"./results.fMIL_cDp.js";import{g as N,a as O}from"./lists.Dqlqv0er.js";import{s as H,a as k,e as L,g as S,c as D,m as K,i as C,f as h,k as x,t as B,d as G}from"./scheduler.DWeSXTth.js";import{S as U,i as X,c as R,a as W,m as w,t as E,b as A,d as I}from"./index.aurM6UBm.js";import{D as Y}from"./DefaultButton.DtH29Fyx.js";/* empty css                                            */import{E as q}from"./exceljs.min.BuyXGIGS.js";import{a as z}from"./index.DEzGHZne.js";import{L as Q}from"./Loading.9Le3UCvs.js";import"./paths.CKtCVsiC.js";function Ie(e){let o=F(e),t=e.summary.checkType=="street",l=e.summary.checkType=="path",n={Safety:"Sa",Accessibility:"Ac",Comfort:"Cf",Directness:"Di",Attractiveness:"At",Cohesion:"Co",overall:"To"},i={"Social activity":"SA","Personal security":"PS","Character and legibility":"CL",Environment:"En",overall:"To"};return[...V(e),...Z(e),...y("SA",0,e.safetyCheck),...y("ST",16,e.streetCheck),...y("SP",0,e.streetPlacemakingCheck),...y("PA",16,e.pathCheck),...y("PP",0,e.pathPlacemakingCheck),...ee(e),...te(e),...f("ST-LOS",[...o.levelOfService,o.overall],t,n),...f("ST-LOS",o.byMode,t,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy"}),...f("SP-LOS",[...o.placemakingCategories,o.placemakingOverall],t,i),...f("PA-LOS",[...o.levelOfService,o.overall],l,n),...f("PA-LOS",o.byMode,l,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy","Horse Riding":"HR"},e.horseRiders=="No"?"Horse Riding":null),...oe("PA-LOS",l),...f("PP-LOS",[...o.placemakingCategories,o.placemakingOverall],l,i),...le(e,o),...ie(e),...se(e),...ae()]}function V(e){let o=e.summary;return[["Scheme Ref",o.schemeReference],["Date of Design Review",o.dateDesignReview],["Scheme Name",o.schemeName],["Authority",o.authority],["Transport/ Combined Authority",o.transportOrCombinedAuthority],["Region",o.region],["Funding Programme",o.fundingProgramme],["Design Stage",o.designStage],["Funding Conditions",o.fundingConditions],["Inspector",o.inspectorEmail],["RouteLength",o.assessedRouteLengthKm],["RouteFileLength",o.totalRouteLengthKm],["Notes",o.notes],["Tool","Route Check online-alpha"],["Sub-tool",o.checkType=="street"?"Street Check":"Path Check"]]}function Z(e){let o=[];for(let[t,l]of e.policyCheck.entries())o.push([`PC${p(t)}-E`,l.existing]),o.push([`PC${p(t)}-D`,l.proposed]);return o}function y(e,o,t){let l=[];for(let n=0;n<t.existingScores.length;n++)l.push([`${e}${p(n+o)}-E`,t.existingScores[n]]),l.push([`${e}${p(n+o)}-D`,t.proposedScores[n]]);return l}function p(e){return(e+1).toString().padStart(2,"0")}function ee(e){let o={existing:e.policyConflictLog.filter(t=>t.stage=="Existing").length,designed:e.policyConflictLog.filter(t=>t.stage=="Design").length,removed:e.policyConflictLog.filter(t=>t.resolved=="Yes").length};return[["PC-E",o.existing],["PC-D",o.designed],["PC-Rem",o.removed],["PC-Int",o.designed],["PC-Tot",o.designed+o.existing-o.removed]]}function te(e){let o={existing:e.criticalIssues.filter(t=>t.stage=="Existing").length,designed:e.criticalIssues.filter(t=>t.stage=="Design").length,removed:e.criticalIssues.filter(t=>t.resolved=="Yes").length};return[["SA-E",o.existing],["SA-D",o.designed],["SA-Rem",o.removed],["SA-Int",o.designed],["SA-Tot",o.designed+o.existing-o.removed]]}function f(e,o,t,l,n=null){let i=[];for(let r of o){if(!(r.category in l)){if(r.category!="Horse Riding")throw new Error(`Unexpected unknown category ${r.category}`);continue}let s=l[r.category];r.category!=n?(i.push([`${e}-${s}-E`,t?r.existing.scorePercent/100:""]),i.push([`${e}-${s}-D`,t?r.proposed.scorePercent/100:""])):(i.push([`${e}-${s}-E`,"N/A"]),i.push([`${e}-${s}-D`,"N/A"]))}return i}function oe(e,o){return o?[]:[[`${e}-HR-E`,"N/A"],[`${e}-HR-D`,"N/A"]]}function le(e,o){let t=[],l=12,n=o.jat.length-1;for(let i=1;i<=l;i++)for(let[r,s]of[["walkingWheeling","WW"],["cycling","Cy"],["total","To"]])t.push([`J${i}-LOS-${s}-E`,i<=n?o.jat[i-1][r].existing:"Not Completed"]),t.push([`J${i}-LOS-${s}-D`,i<=n?o.jat[i-1][r].proposed:"Not Completed"]);for(let i=1;i<=l;i++)i<=n?t.push([`J${i}-Arms`,e.jat[i-1].proposed.arms.length]):t.push([`J${i}-Arms`,0]);return t}function ne(e,o){let t=e.policyConflictLog[o],l=0;for(let i=0;i<=o;i++)e.policyConflictLog[i].conflict==t.conflict&&l++;return[e.summary.schemeReference,`P${t.conflict.padStart(3,"0")}`,`${l.toString().padStart(2,"0")}P`].join("_")}function ie(e){let o=[],t=35;for(let l=0;l<t;l++){let n;if(l<e.policyConflictLog.length){let i=e.policyConflictLog[l];n={Ref:ne(e,l),Typ:N(i.conflict),Sta:i.stage,LaL:`${i.point[1]}, ${i.point[0]}`,Loc:i.locationName,Res:i.resolved,Com:i.notes}}else n={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[i,r]of Object.entries(n))o.push([`${p(l)}PC${i}`,r])}return o}function T(e){return/\D$/.test(e)?e.slice(0,-1):e}function re(e,o){let t=e.criticalIssues[o],l=T(t.criticalIssue),n=0;for(let r=0;r<=o;r++)T(e.criticalIssues[r].criticalIssue)==l&&n++;return[e.summary.schemeReference,`SA${l.padStart(2,"0")}`,`${n.toString().padStart(2,"0")}P`].join("_")}function se(e){let o=[],t=35;for(let l=0;l<t;l++){let n;if(l<e.criticalIssues.length){let i=e.criticalIssues[l];n={Ref:re(e,l),Typ:O(i.criticalIssue),Sta:i.stage,LaL:`${i.point[1]}, ${i.point[0]}`,Loc:i.locationName,Res:i.resolved,Com:i.notes}}else n={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[i,r]of Object.entries(n))o.push([`${p(l)}SA${i}`,r])}return o}function ae(){return["Area-E","Area-D","Po-WW-E","Po-WW-D","Po-Cy-E","Po-Cy-D","Cr-WW-E","Cr-WW-D","Cr-Cy-E","Cr-Cy-D","Pe-WW-D","Pe-WW-E","Pe-Cy-D","Pe-Cy-E","MD-WW-D","MD-WW-E","MD-Cy-D","MD-Cy-E","MT-E","MT-D","PT-E","PT-D","GI-E","GI-D","IT-E","IT-D","EP-E","EP-D","TM-Comments","AC-Comments"].map(o=>[o,""])}const ce=""+new URL("../assets/blank_route_check.CfWjwSGn.xlsx",import.meta.url).href;async function ue(e,o){console.log("Loading blank route check xlsx");let l=await(await fetch(ce)).arrayBuffer(),n=new q.Workbook;await n.xlsx.load(l),n.eachSheet((r,s)=>{r.conditionalFormattings=[]}),ge(e,n),me(e,n),fe(e,n),Ce(e,n),d(e.safetyCheck,n,"3.1 Safety Check",["J","K","L","M"],v([[13,28]])),d(e.streetCheck,n,"4.1 Street Check",["J","K","L","M"],v([[13,19],[23,25],[29,34],[38,43],[47,50]])),d(e.streetPlacemakingCheck,n,"4.2 Street Placemaking Check",["I","J","K","L"],v([[13,15],[19,21],[25,34],[38,47]])),d(e.pathCheck,n,"5.1 Path Check",["J","K","L","M"],v([[15,19],[23,33],[37,40],[44,48],[52,56]])),d(e.pathPlacemakingCheck,n,"5.2 Path Placemaking Check",["I","J","K","L"],v([[12,14],[20,22],[26,29],[33,41]])),he(e,n),n.getWorksheet("5.1 Path Check").getCell("D7").value=e.horseRiders,n.getWorksheet("7.1 Results Summary").getCell("G7").value=e.resultsReviewStatement,console.log("Writing route check xlsx");let i=await n.xlsx.writeBuffer();z(i,`route_check_${o}.xlsx`)}function ge(e,o){let t=o.getWorksheet("1. Summary of Scheme");t.getCell("C6").value=e.summary.dateDesignReview,t.getCell("C7").value=e.summary.schemeReference,t.getCell("C8").value=e.summary.schemeName,t.getCell("C9").value=e.summary.schemeSummary,t.getCell("C10").value=e.summary.schemeInfoReviewed,t.getCell("C11").value=e.summary.authority,t.getCell("C12").value=e.summary.transportOrCombinedAuthority,t.getCell("C13").value=e.summary.region,t.getCell("C14").value=e.summary.fundingProgramme,t.getCell("C15").value=e.summary.designStage,t.getCell("C16").value=e.summary.fundingConditions,t.getCell("C17").value=e.summary.inspectorEmail,t.getCell("C18").value=e.summary.assessedRouteLengthKm,t.getCell("C19").value=e.summary.totalRouteLengthKm,t.getCell("C20").value=e.summary.notes,e.summary.checkType=="path"&&(t.getCell("D22").value="Path Check");for(let l of e.summary.networkMap.features)if(l.geometry.type=="LineString"){t.getCell("C26").value=l.geometry.coordinates[0][1],t.getCell("D26").value=l.geometry.coordinates[0][0],t.getCell("C27").value=l.geometry.coordinates[0][1],t.getCell("D27").value=l.geometry.coordinates[0][0],t.getCell("C28").value=`https://www.openstreetmap.org/#map=18/${l.geometry.coordinates[0][1]}/${l.geometry.coordinates[0][0]}`;break}}function me(e,o){let t=o.getWorksheet("2.1 Policy Check");for(let l=0;l<6;l++)t.getCell("D"+(8+l)).value=e.policyCheck[l].existing,t.getCell("E"+(8+l)).value=e.policyCheck[l].proposed,t.getCell("F"+(8+l)).value=e.policyCheck[l].commentary}function fe(e,o){let t=o.getWorksheet("2.2 Policy Conflict Log");for(let[l,n]of e.policyConflictLog.entries())t.getCell("F"+(8+l)).value=N(n.conflict),t.getCell("H"+(8+l)).value=n.stage,t.getCell("I"+(8+l)).value=M(n.point),t.getCell("J"+(8+l)).value=n.locationName,t.getCell("K"+(8+l)).value=n.stage==="Design"?"No":n.resolved,t.getCell("L"+(8+l)).value=n.notes}function Ce(e,o){let t=o.getWorksheet("3.2 Critical Issues Log");for(let[l,n]of e.criticalIssues.entries())t.getCell("F"+(8+l)).value=O(n.criticalIssue),t.getCell("H"+(8+l)).value=n.stage,t.getCell("I"+(8+l)).value=M(n.point),t.getCell("J"+(8+l)).value=n.locationName,t.getCell("K"+(8+l)).value=n.stage==="Design"?"No":n.resolved,t.getCell("L"+(8+l)).value=n.notes}function d(e,o,t,l,n){let i=o.getWorksheet(t);if(n.length!=e.existingScores.length)throw new Error(`Wrong Excel ranges for ${t}`);for(let r=0;r<e.existingScores.length;r++){let s=n[r];i.getCell(l[0]+s).value=b(e.existingScores[r]),i.getCell(l[1]+s).value=e.existingScoreNotes[r],i.getCell(l[2]+s).value=b(e.proposedScores[r]),i.getCell(l[3]+s).value=e.proposedScoreNotes[r]}}function he(e,o){let t=o.getWorksheet("6. JAT Check"),l=0;for(let n of e.jat)for(let i of[n.existing,n.proposed]){let r=m("H",l*5);t.getCell(m(r,1)+"9").value=n.name,t.getCell(m(r,1)+"10").value=i.notes;for(let[s,c]of i.movements.filter(g=>g.kind=="walking & wheeling").entries())t.getCell(r+(13+s)).value=c.name,t.getCell(m(r,2)+(13+s)).value=_(c.score),t.getCell(m(r,3)+(13+s)).value=c.notes;for(let[s,c]of i.movements.filter(g=>g.kind=="cycling").entries())t.getCell(r+(26+s)).value=c.name,t.getCell(m(r,2)+(26+s)).value=_(c.score),t.getCell(m(r,3)+(26+s)).value=c.notes;l++}}function m(e,o){return ye(pe(e)+o)}function pe(e){let o=0;for(let t=0;t<e.length;t++)o*=26,o+=e.charCodeAt(t)-65+1;return o-1}function ye(e){let o="";for(e+=1;e>0;){let t=(e-1)%26;o=String.fromCharCode(t+65)+o,e=Math.floor((e-1)/26)}return o}function v(e){let o=[];for(let[t,l]of e)for(let n=t;n<=l;n++)o.push(n);return o}function b(e){return{"":e,C:e,0:0,1:1,2:2,"N/A":e}[e]}function _(e){return{0:0,1:1,2:2,X:e}[e]}function M(e){return`${e[1]}, ${e[0]}`}function de(e){let o;return{c(){o=B("Convert to .xlsx")},l(t){o=G(t,"Convert to .xlsx")},m(t,l){C(t,o,l)},d(t){t&&h(o)}}}function ve(e){let o,t,l,n=`<i>When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9. The route coordinates in the Summary of Scheme may not
    capture everything mapped when the route is split into multiple pieces. The
    map weblink only shows the route start point.</i>`,i,r,s,c,g;return o=new Y({props:{$$slots:{default:[de]},$$scope:{ctx:e}}}),o.$on("click",e[1]),r=new Q({props:{loading:e[0]}}),{c(){R(o.$$.fragment),t=k(),l=L("p"),l.innerHTML=n,i=k(),R(r.$$.fragment),s=k(),c=L("hr")},l(a){W(o.$$.fragment,a),t=S(a),l=D(a,"P",{"data-svelte-h":!0}),K(l)!=="svelte-1lahb25"&&(l.innerHTML=n),i=S(a),W(r.$$.fragment,a),s=S(a),c=D(a,"HR",{})},m(a,u){w(o,a,u),C(a,t,u),C(a,l,u),C(a,i,u),w(r,a,u),C(a,s,u),C(a,c,u),g=!0},p(a,[u]){const $={};u&16&&($.$$scope={dirty:u,ctx:a}),o.$set($);const P={};u&1&&(P.loading=a[0]),r.$set(P)},i(a){g||(E(o.$$.fragment,a),E(r.$$.fragment,a),g=!0)},o(a){A(o.$$.fragment,a),A(r.$$.fragment,a),g=!1},d(a){a&&(h(t),h(l),h(i),h(s),h(c)),I(o,a),I(r,a)}}}function ke(e,o,t){let l,n;x(e,j,s=>t(2,l=s)),x(e,J,s=>t(3,n=s));let i="";async function r(){t(0,i="Converting to .xlsx (takes about 20 seconds)");try{await ue(n,l)}catch(s){window.alert(`Conversion failed: ${s}`)}t(0,i="")}return[i,r]}class Te extends U{constructor(o){super(),X(this,o,ke,ve,H,{})}}export{Te as C,re as c,Ie as e,ne as p};
