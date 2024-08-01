import{c as x,s as I}from"./data.D-rHgzm_.js";import{g as b}from"./results.DPwn5qpc.js";import{g as w,a as O}from"./lists.BvURpO7c.js";import{s as M,a as C,e as S,g as y,c as $,m as N,i as u,f as m,k,t as j,d as H,o as F,p as D,n as J}from"./scheduler.CT9iOTEw.js";import{S as G,i as q,c as E,a as v,m as R,t as T,b as A,d as W}from"./index.CnK_PB-e.js";/* empty css                                            */import{S as B}from"./SecondaryButton.Bjah1jNo.js";import{d as K}from"./export.DniCae14.js";import{L as U,d as Y}from"./download.BHaGILUs.js";import"./paths.B5l5PwSO.js";function Se(t){let e=b(t),n=t.summary.checkType=="street",i=t.summary.checkType=="path",r={Safety:"Sa",Accessibility:"Ac",Comfort:"Cf",Directness:"Di",Attractiveness:"At",Cohesion:"Co",overall:"To"},o={"Social activity":"SA","Personal security":"PS","Character and legibility":"CL",Environment:"En",overall:"To"};return[...X(t),...z(t),...f("SA",0,t.safetyCheck),...f("ST",16,t.streetCheck),...f("SP",0,t.streetPlacemakingCheck),...f("PA",16,t.pathCheck),...f("PP",0,t.pathPlacemakingCheck),...Q(t),...V(t),...p("ST-LOS",[...e.levelOfService,e.overall],n,r),...p("ST-LOS",e.byMode,n,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy"}),...p("SP-LOS",[...e.placemakingCategories,e.placemakingOverall],n,o),...p("PA-LOS",[...e.levelOfService,e.overall],i,r),...p("PA-LOS",e.byMode,i,{Walking:"Wa",Wheeling:"Wh",Cycling:"Cy","Horse Riding":"HR"},t.horseRiders=="No"?"Horse Riding":null),...Z("PA-LOS",i),...p("PP-LOS",[...e.placemakingCategories,e.placemakingOverall],i,o),...ee(t,e),...oe(t),...ie(t),...re()]}function X(t){let e=t.summary;return[["Scheme Ref",e.schemeReference],["Date of Design Review",e.dateDesignReview],["Scheme Name",e.schemeName],["Authority",e.authority],["Transport/ Combined Authority",e.transportOrCombinedAuthority],["Region",e.region],["Funding Programme",e.fundingProgramme],["Design Stage",e.designStage],["Funding Conditions",e.fundingConditions],["Inspector",e.inspectorEmail],["RouteLength",e.assessedRouteLengthKm],["RouteFileLength",e.totalRouteLengthKm],["Notes",e.notes],["Tool","Route Check online-alpha"],["Sub-tool",e.checkType=="street"?"Street Check":"Path Check"]]}function z(t){let e=[];for(let[n,i]of t.policyCheck.entries())e.push([`PC${g(n)}-E`,i.existing]),e.push([`PC${g(n)}-D`,i.proposed]);return e}function f(t,e,n){let i=[];for(let r=0;r<n.existingScores.length;r++)i.push([`${t}${g(r+e)}-E`,n.existingScores[r]]),i.push([`${t}${g(r+e)}-D`,n.proposedScores[r]]);return i}function g(t){return(t+1).toString().padStart(2,"0")}function Q(t){let e={existing:t.policyConflictLog.filter(n=>n.stage=="Existing").length,designed:t.policyConflictLog.filter(n=>n.stage=="Design").length,removed:t.policyConflictLog.filter(n=>n.resolved=="Yes").length};return[["PC-E",e.existing],["PC-D",e.designed],["PC-Rem",e.removed],["PC-Int",e.designed],["PC-Tot",e.designed+e.existing-e.removed]]}function V(t){let e={existing:t.criticalIssues.filter(n=>n.stage=="Existing").length,designed:t.criticalIssues.filter(n=>n.stage=="Design").length,removed:t.criticalIssues.filter(n=>n.resolved=="Yes").length};return[["SA-E",e.existing],["SA-D",e.designed],["SA-Rem",e.removed],["SA-Int",e.designed],["SA-Tot",e.designed+e.existing-e.removed]]}function p(t,e,n,i,r=null){let o=[];for(let l of e){if(!(l.category in i)){if(l.category!="Horse Riding")throw new Error(`Unexpected unknown category ${l.category}`);continue}let c=i[l.category];l.category!=r?(o.push([`${t}-${c}-E`,n?l.existing.scorePercent/100:""]),o.push([`${t}-${c}-D`,n?l.proposed.scorePercent/100:""])):(o.push([`${t}-${c}-E`,"N/A"]),o.push([`${t}-${c}-D`,"N/A"]))}return o}function Z(t,e){return e?[]:[[`${t}-HR-E`,"N/A"],[`${t}-HR-D`,"N/A"]]}function ee(t,e){let n=[],i=12,r=e.jat.length-1;for(let o=1;o<=i;o++)for(let[l,c]of[["walkingWheeling","WW"],["cycling","Cy"],["total","To"]])n.push([`J${o}-LOS-${c}-E`,o<=r?e.jat[o-1][l].existing:"Not Completed"]),n.push([`J${o}-LOS-${c}-D`,o<=r?e.jat[o-1][l].proposed:"Not Completed"]);for(let o=1;o<=i;o++)o<=r?n.push([`J${o}-Arms`,t.jat[o-1].proposed.arms.length]):n.push([`J${o}-Arms`,0]);return n}function te(t,e){let n=t.policyConflictLog[e],i=0;for(let o=0;o<=e;o++)t.policyConflictLog[o].conflict==n.conflict&&i++;return[t.summary.schemeReference,`P${n.conflict.padStart(3,"0")}`,`${i.toString().padStart(2,"0")}P`].join("_")}function oe(t){let e=[],n=35;for(let i=0;i<n;i++){let r;if(i<t.policyConflictLog.length){let o=t.policyConflictLog[i];r={Ref:te(t,i),Typ:w(o.conflict),Sta:o.stage,LaL:`${o.point[1]}, ${o.point[0]}`,Loc:o.locationName,Res:o.resolved,Com:o.notes}}else r={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[o,l]of Object.entries(r))e.push([`${g(i)}PC${o}`,l])}return e}function _(t){return/\D$/.test(t)?t.slice(0,-1):t}function ne(t,e){let n=t.criticalIssues[e],i=_(n.criticalIssue),r=0;for(let l=0;l<=e;l++)_(t.criticalIssues[l].criticalIssue)==i&&r++;return[t.summary.schemeReference,`SA${i.padStart(2,"0")}`,`${r.toString().padStart(2,"0")}P`].join("_")}function ie(t){let e=[],n=35;for(let i=0;i<n;i++){let r;if(i<t.criticalIssues.length){let o=t.criticalIssues[i];r={Ref:ne(t,i),Typ:O(o.criticalIssue),Sta:o.stage,LaL:`${o.point[1]}, ${o.point[0]}`,Loc:o.locationName,Res:o.resolved,Com:o.notes}}else r={Ref:"",Typ:"",Sta:"",LaL:"",Loc:"",Res:"",Com:""};for(let[o,l]of Object.entries(r))e.push([`${g(i)}SA${o}`,l])}return e}function re(){return["Area-E","Area-D","Po-WW-E","Po-WW-D","Po-Cy-E","Po-Cy-D","Cr-WW-E","Cr-WW-D","Cr-Cy-E","Cr-Cy-D","Pe-WW-D","Pe-WW-E","Pe-Cy-D","Pe-Cy-E","MD-WW-D","MD-WW-E","MD-Cy-D","MD-Cy-E","MT-E","MT-D","PT-E","PT-D","GI-E","GI-D","IT-E","IT-D","EP-E","EP-D","TM-Comments","AC-Comments"].map(e=>[e,""])}function le(t){let e,n,i;return{c(){e=S("img"),i=j(`
  Export .xlsx`),this.h()},l(r){e=$(r,"IMG",{src:!0,alt:!0}),i=H(r,`
  Export .xlsx`),this.h()},h(){F(e.src,n=Y)||D(e,"src",n),D(e,"alt","Export .xlsx")},m(r,o){u(r,e,o),u(r,i,o)},p:J,d(r){r&&(m(e),m(i))}}}function se(t){let e,n,i,r=`<i>When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9. The route coordinates in the Summary of Scheme may not
    capture everything mapped when the route is split into multiple pieces. The
    map weblink only shows the route start point.</i>`,o,l,c,h,d;return e=new B({props:{$$slots:{default:[le]},$$scope:{ctx:t}}}),e.$on("click",t[1]),l=new U({props:{loading:t[0]}}),{c(){E(e.$$.fragment),n=C(),i=S("p"),i.innerHTML=r,o=C(),E(l.$$.fragment),c=C(),h=S("hr")},l(s){v(e.$$.fragment,s),n=y(s),i=$(s,"P",{"data-svelte-h":!0}),N(i)!=="svelte-1lahb25"&&(i.innerHTML=r),o=y(s),v(l.$$.fragment,s),c=y(s),h=$(s,"HR",{})},m(s,a){R(e,s,a),u(s,n,a),u(s,i,a),u(s,o,a),R(l,s,a),u(s,c,a),u(s,h,a),d=!0},p(s,[a]){const P={};a&16&&(P.$$scope={dirty:a,ctx:s}),e.$set(P);const L={};a&1&&(L.loading=s[0]),l.$set(L)},i(s){d||(T(e.$$.fragment,s),T(l.$$.fragment,s),d=!0)},o(s){A(e.$$.fragment,s),A(l.$$.fragment,s),d=!1},d(s){s&&(m(n),m(i),m(o),m(c),m(h)),W(e,s),W(l,s)}}}function ce(t,e,n){let i,r;k(t,x,c=>n(2,i=c)),k(t,I,c=>n(3,r=c));let o="";async function l(){n(0,o="Converting to .xlsx (takes about 20 seconds)");try{await K(r,i)}catch(c){window.alert(`Conversion failed: ${c}`)}n(0,o="")}return[o,l]}class $e extends G{constructor(e){super(),q(this,e,ce,se,M,{})}}export{$e as C,ne as c,Se as e,te as p};
