import{s as h,e as g,c as $,p as d,q as y,i as S,n as C,f as R}from"../chunks/scheduler.DGwhun8C.js";import{S as w,i as x,c as k,a as b,m as _,t as v,b as P,d as L}from"../chunks/index.B2vZYn3d.js";import{f as T}from"../chunks/index.CKhATf4q.js";import"../chunks/SelectWithCustom.svelte_svelte_type_style_lang.5y0Uq1OU.js";import"../chunks/paths.CSncTsP_.js";import"../chunks/entry._dhYzK-_.js";import{F as A}from"../chunks/FileManager.D9po2oc6.js";import{E}from"../chunks/exceljs.min.CkhnFYqC.js";import{e as N,f as D,c as F,s as I}from"../chunks/data.CDqPsUsf.js";function q(o){let t=o.getWorksheet("DALog"),r=t.getRow(1).values.map(i=>typeof i=="string"?i:i.result),s=t.getRow(2).values.map(i=>typeof i=="string"?i:i.result??null);r.shift(),r.shift(),s.shift(),s.shift();let a=r.map((i,c)=>[i,s[c]]);return Object.fromEntries(a)}function u(o){return(o+1).toString().padStart(2,"0")}function O(o){let t=N(),r=n=>{let e=o[n];if(typeof e=="string")return e;if(e==null)return"";throw new Error(`${n} isn't a string, it's ${e}`)},s=n=>{let e=o[n];return typeof e=="number"?e:(e==null||console.warn(`${n} isn't a number, it's ${e}. Defaulting to 0`),0)},a=n=>{let e=o[n];return typeof e=="object"&&e instanceof Date?T(e):""},i=n=>{let e=o[n];if(e==""||e=="Yes"||e=="No")return e;if(e==null)return"";throw new Error(`${n} isn't yesNoBlank, it's ${e}`)},c=n=>{let e=o[n];if(e==""||e=="C"||e=="N/A")return e;if(e==0||e==1||e==2)return e.toString();if(e==null)return"0";throw new Error(`${n} isn't score, it's ${e}`)},f=n=>{let e=r(n).split(", ").map(parseFloat);return[e[1],e[0]]},p=r("Sub-tool")=="Street Check"?"street":"path";t.summary={dateDesignReview:a("Date of Design Review"),schemeReference:r("Scheme Ref"),schemeName:r("Scheme Name"),schemeSummary:"",schemeInfoReviewed:"",authority:r("Authority"),transportOrCombinedAuthority:r("Transport/ Combined Authority"),region:r("Region"),fundingProgramme:r("Funding Programme"),designStage:r("Design Stage"),fundingConditions:r("Funding Conditions"),inspectorEmail:r("Inspector"),assessedRouteLengthKm:s("RouteLength"),totalRouteLengthKm:s("RouteFileLength"),notes:r("Notes"),checkType:p,networkMap:{type:"FeatureCollection",features:[]}},t.horseRiders=o["PA-LOS-HR-E"]=="N/A"?"No":"Yes";for(let[n,e]of t.policyCheck.entries())e.existing=i(`PC${u(n)}-E`),e.proposed=i(`PC${u(n)}-D`);for(let[n,e,m]of[[t.safetyCheck,"SA",0],[t.streetCheck,"ST",16],[t.streetPlacemakingCheck,"SP",0],[t.pathCheck,"PA",16],[t.pathPlacemakingCheck,"PP",0]])for(let l=0;l<n.existingScores.length;l++)n.existingScores[l]=c(`${e}${u(l+m)}-E`),n.proposedScores[l]=c(`${e}${u(l+m)}-D`);for(let n=0;n<35;n++){let e=`${u(n)}PC`;o[`${e}Ref`]!=null&&t.policyConflictLog.push({conflict:r(`${e}Typ`).substr(0,1),stage:r(`${e}Sta`),point:f(`${e}LaL`),locationName:r(`${e}Loc`),resolved:i(`${e}Res`),notes:r(`${e}Com`)})}for(let n=0;n<35;n++){let e=`${u(n)}SA`;o[`${e}Ref`]!=null&&t.criticalIssues.push({criticalIssue:r(`${e}Typ`).split(" - ")[0],stage:r(`${e}Sta`),point:f(`${e}LaL`),locationName:r(`${e}Loc`),resolved:i(`${e}Res`),notes:r(`${e}Com`)})}return t}function j(o){let t,r=`The Route Check Tool is used by ATE for assessing the design quality of
    linear schemes. However, it may also be used by local authorities and others
    wishing to assess the design quality of schemes against ATE's quality
    criteria.`;return{c(){t=g("p"),t.textContent=r,this.h()},l(s){t=$(s,"P",{slot:!0,"data-svelte-h":!0}),d(t)!=="svelte-5d82im"&&(t.textContent=r),this.h()},h(){y(t,"slot","description")},m(s,a){S(s,t,a)},p:C,d(s){s&&R(t)}}}function B(o){let t,r;return t=new A({props:{files:D,currentFile:F,state:I,xlsxImporter:o[0],service:"Route Check Tool",fileObjectType:"scheme",$$slots:{description:[j]},$$scope:{ctx:o}}}),{c(){k(t.$$.fragment)},l(s){b(t.$$.fragment,s)},m(s,a){_(t,s,a),r=!0},p(s,[a]){const i={};a&2&&(i.$$scope={dirty:a,ctx:s}),t.$set(i)},i(s){r||(v(t.$$.fragment,s),r=!0)},o(s){P(t.$$.fragment,s),r=!1},d(s){L(t,s)}}}function H(o){async function t(r){let s=new E.Workbook;await s.xlsx.load(r);let a=q(s);return O(a)}return[t]}class U extends w{constructor(t){super(),x(this,t,H,B,h,{})}}export{U as component};
