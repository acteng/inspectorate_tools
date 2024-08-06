import{s as y,e as x,c as w,p as R,q as _,i as k,n as v,f as b}from"../chunks/scheduler.Bxdx0f0B.js";import{S as P,i as L,c as p,a as h,m as g,t as $,b as d,d as C}from"../chunks/index.itOPPQ0R.js";import{F as T}from"../chunks/FileManager.DDYrwZQz.js";import{e as A,f as E,c as N,s as D}from"../chunks/data.DFutKdLj.js";import{E as F}from"../chunks/exceljs.min.BuyXGIGS.js";import{d as I}from"../chunks/index.DC4EoXNV.js";import{C as q}from"../chunks/ConvertToXlsx.DRXfrKDk.js";function O(s){let t=s.getWorksheet("DALog"),r=t.getRow(1).values.map(i=>typeof i=="string"?i:i.result),n=t.getRow(2).values.map(i=>typeof i=="string"?i:i.result??null);r.shift(),r.shift(),n.shift(),n.shift();let a=r.map((i,c)=>[i,n[c]]);return Object.fromEntries(a)}function u(s){return(s+1).toString().padStart(2,"0")}function j(s){let t=A(),r=o=>{let e=s[o];if(typeof e=="string")return e;if(e==null)return"";throw new Error(`${o} isn't a string, it's ${e}`)},n=o=>{let e=s[o];return typeof e=="number"?e:(e==null||console.warn(`${o} isn't a number, it's ${e}. Defaulting to 0`),0)},a=o=>{let e=s[o];return typeof e=="object"&&e instanceof Date?I(e):""},i=o=>{let e=s[o];if(e==""||e=="Yes"||e=="No")return e;if(e==null)return"";throw new Error(`${o} isn't yesNoBlank, it's ${e}`)},c=o=>{let e=s[o];if(e==""||e=="C"||e=="N/A")return e;if(e==0||e==1||e==2)return e.toString();if(e==null)return"0";throw new Error(`${o} isn't score, it's ${e}`)},f=o=>{let e=r(o).split(", ").map(parseFloat);return[e[1],e[0]]},S=r("Sub-tool")=="Street Check"?"street":"path";t.summary={dateDesignReview:a("Date of Design Review"),schemeReference:r("Scheme Ref"),schemeName:r("Scheme Name"),schemeSummary:"",schemeInfoReviewed:"",authority:r("Authority"),transportOrCombinedAuthority:r("Transport/ Combined Authority"),region:r("Region"),fundingProgramme:r("Funding Programme"),designStage:r("Design Stage"),fundingConditions:r("Funding Conditions"),inspectorEmail:r("Inspector"),assessedRouteLengthKm:n("RouteLength"),totalRouteLengthKm:n("RouteFileLength"),notes:r("Notes"),checkType:S,networkMap:{type:"FeatureCollection",features:[]}},t.horseRiders=s["PA-LOS-HR-E"]=="N/A"?"No":"Yes";for(let[o,e]of t.policyCheck.entries())e.existing=i(`PC${u(o)}-E`),e.proposed=i(`PC${u(o)}-D`);for(let[o,e,m]of[[t.safetyCheck,"SA",0],[t.streetCheck,"ST",16],[t.streetPlacemakingCheck,"SP",0],[t.pathCheck,"PA",16],[t.pathPlacemakingCheck,"PP",0]])for(let l=0;l<o.existingScores.length;l++)o.existingScores[l]=c(`${e}${u(l+m)}-E`),o.proposedScores[l]=c(`${e}${u(l+m)}-D`);for(let o=0;o<35;o++){let e=`${u(o)}PC`;s[`${e}Ref`]!=null&&t.policyConflictLog.push({conflict:r(`${e}Typ`).substr(0,1),stage:r(`${e}Sta`),point:f(`${e}LaL`),locationName:r(`${e}Loc`),resolved:i(`${e}Res`),notes:r(`${e}Com`)})}for(let o=0;o<35;o++){let e=`${u(o)}SA`;s[`${e}Ref`]!=null&&t.criticalIssues.push({criticalIssue:r(`${e}Typ`).split(" - ")[0],stage:r(`${e}Sta`),point:f(`${e}LaL`),locationName:r(`${e}Loc`),resolved:i(`${e}Res`),notes:r(`${e}Com`)})}return t}function B(s){let t,r=`The Route Check Tool is used by ATE for assessing the design quality of
    linear schemes. However, it may also be used by local authorities and others
    wishing to assess the design quality of schemes against ATE's quality
    criteria.`;return{c(){t=x("p"),t.textContent=r,this.h()},l(n){t=w(n,"P",{slot:!0,"data-svelte-h":!0}),R(t)!=="svelte-5d82im"&&(t.textContent=r),this.h()},h(){_(t,"slot","description")},m(n,a){k(n,t,a)},p:v,d(n){n&&b(t)}}}function H(s){let t,r;return t=new q({}),{c(){p(t.$$.fragment)},l(n){h(t.$$.fragment,n)},m(n,a){g(t,n,a),r=!0},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){C(t,n)}}}function K(s){let t,r;return t=new T({props:{files:E,currentFile:N,state:D,xlsxImporter:s[0],service:"Route Check Tool",$$slots:{export:[H],description:[B]},$$scope:{ctx:s}}}),{c(){p(t.$$.fragment)},l(n){h(t.$$.fragment,n)},m(n,a){g(t,n,a),r=!0},p(n,[a]){const i={};a&2&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){C(t,n)}}}function M(s){async function t(r){let n=new F.Workbook;await n.xlsx.load(r);let a=O(n);return j(a)}return[t]}class Q extends P{constructor(t){super(),L(this,t,M,K,y,{})}}export{Q as component};
