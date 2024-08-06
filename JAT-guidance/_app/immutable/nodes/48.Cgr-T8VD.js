import{s as _,e as $,a as b,c as d,p as C,g as L,q as v,i as p,f as h,n as T}from"../chunks/scheduler.Bxdx0f0B.js";import{S as P,i as A,c as y,a as S,m as x,t as w,b as k,d as R}from"../chunks/index.itOPPQ0R.js";import{F as E}from"../chunks/FileManager.B_m5FasY.js";import{e as D,f as N,c as F,s as I}from"../chunks/data.D3c4Zee2.js";import{E as q}from"../chunks/exceljs.min.BuyXGIGS.js";import{d as M}from"../chunks/index.D0_r--1S.js";import{C as H}from"../chunks/ConvertToXlsx.DE_wu63k.js";function O(i){let t=i.getWorksheet("DALog"),r=t.getRow(1).values.map(a=>typeof a=="string"?a:a.result),n=t.getRow(2).values.map(a=>typeof a=="string"?a:a.result??null);r.shift(),r.shift(),n.shift(),n.shift();let l=r.map((a,o)=>[a,n[o]]);return Object.fromEntries(l)}function f(i){return(i+1).toString().padStart(2,"0")}function j(i){let t=D(),r=s=>{let e=i[s];if(typeof e=="string")return e;if(e==null)return"";throw new Error(`${s} isn't a string, it's ${e}`)},n=s=>{let e=i[s];return typeof e=="number"?e:(e==null||console.warn(`${s} isn't a number, it's ${e}. Defaulting to 0`),0)},l=s=>{let e=i[s];return typeof e=="object"&&e instanceof Date?M(e):""},a=s=>{let e=i[s];if(e==""||e=="Yes"||e=="No")return e;if(e==null)return"";throw new Error(`${s} isn't yesNoBlank, it's ${e}`)},o=s=>{let e=i[s];if(e==""||e=="C"||e=="N/A")return e;if(e==0||e==1||e==2)return e.toString();if(e==null)return"0";throw new Error(`${s} isn't score, it's ${e}`)},u=s=>{let e=r(s).split(", ").map(parseFloat);return[e[1],e[0]]},m=r("Sub-tool")=="Street Check"?"street":"path";t.summary={dateDesignReview:l("Date of Design Review"),schemeReference:r("Scheme Ref"),schemeName:r("Scheme Name"),schemeSummary:"",schemeInfoReviewed:"",authority:r("Authority"),transportOrCombinedAuthority:r("Transport/ Combined Authority"),region:r("Region"),fundingProgramme:r("Funding Programme"),designStage:r("Design Stage"),fundingConditions:r("Funding Conditions"),inspectorEmail:r("Inspector"),assessedRouteLengthKm:n("RouteLength"),totalRouteLengthKm:n("RouteFileLength"),notes:r("Notes"),checkType:m,networkMap:{type:"FeatureCollection",features:[]}},t.horseRiders=i["PA-LOS-HR-E"]=="N/A"?"No":"Yes";for(let[s,e]of t.policyCheck.entries())e.existing=a(`PC${f(s)}-E`),e.proposed=a(`PC${f(s)}-D`);for(let[s,e,g]of[[t.safetyCheck,"SA",0],[t.streetCheck,"ST",16],[t.streetPlacemakingCheck,"SP",0],[t.pathCheck,"PA",16],[t.pathPlacemakingCheck,"PP",0]])for(let c=0;c<s.existingScores.length;c++)s.existingScores[c]=o(`${e}${f(c+g)}-E`),s.proposedScores[c]=o(`${e}${f(c+g)}-D`);for(let s=0;s<35;s++){let e=`${f(s)}PC`;i[`${e}Ref`]!=null&&t.policyConflictLog.push({conflict:r(`${e}Typ`).substr(0,1),stage:r(`${e}Sta`),point:u(`${e}LaL`),locationName:r(`${e}Loc`),resolved:a(`${e}Res`),notes:r(`${e}Com`)})}for(let s=0;s<35;s++){let e=`${f(s)}SA`;i[`${e}Ref`]!=null&&t.criticalIssues.push({criticalIssue:r(`${e}Typ`).split(" - ")[0],stage:r(`${e}Sta`),point:u(`${e}LaL`),locationName:r(`${e}Loc`),resolved:a(`${e}Res`),notes:r(`${e}Com`)})}return t}function B(i){let t,r=`The Route Check Tool is used by ATE for assessing the design quality of
    linear schemes. However, it may also be used by local authorities and others
    wishing to assess the design quality of schemes against ATE's quality
    criteria.`;return{c(){t=$("p"),t.textContent=r,this.h()},l(n){t=d(n,"P",{slot:!0,"data-svelte-h":!0}),C(t)!=="svelte-5d82im"&&(t.textContent=r),this.h()},h(){v(t,"slot","description")},m(n,l){p(n,t,l)},p:T,d(n){n&&h(t)}}}function K(i){let t,r;return t=new H({}),{c(){y(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,l){x(t,n,l),r=!0},i(n){r||(w(t.$$.fragment,n),r=!0)},o(n){k(t.$$.fragment,n),r=!1},d(n){R(t,n)}}}function W(i){let t,r='<div class="govuk-caption-l">Route Check Tool</div> <div class="govuk-heading-l">Manage my schemes</div>',n,l,a;return l=new E({props:{files:N,currentFile:F,state:I,xlsxImporter:i[0],$$slots:{export:[K],description:[B]},$$scope:{ctx:i}}}),{c(){t=$("div"),t.innerHTML=r,n=b(),y(l.$$.fragment),this.h()},l(o){t=d(o,"DIV",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-11lruga"&&(t.innerHTML=r),n=L(o),S(l.$$.fragment,o),this.h()},h(){v(t,"class","govuk-width-container")},m(o,u){p(o,t,u),p(o,n,u),x(l,o,u),a=!0},p(o,[u]){const m={};u&2&&(m.$$scope={dirty:u,ctx:o}),l.$set(m)},i(o){a||(w(l.$$.fragment,o),a=!0)},o(o){k(l.$$.fragment,o),a=!1},d(o){o&&(h(t),h(n)),R(l,o)}}}function Y(i){async function t(r){let n=new q.Workbook;await n.xlsx.load(r);let l=O(n);return j(l)}return[t]}class U extends P{constructor(t){super(),A(this,t,Y,W,_,{})}}export{U as component};
