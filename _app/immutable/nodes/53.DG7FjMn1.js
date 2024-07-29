import{s as y}from"../chunks/scheduler.D5JRtHaf.js";import{S as w,i as x,c as p,a as $,m as g,t as h,b as S,d}from"../chunks/index.Xm1AgzMF.js";import{F as R}from"../chunks/FileManager.DrbuNJho.js";import{e as k,f as L,c as P,s as b}from"../chunks/data.CnwOazTE.js";import{E as v}from"../chunks/exceljs.min.BuyXGIGS.js";import{d as _}from"../chunks/index.MyxFuS9I.js";import{C as N}from"../chunks/ConvertToXlsx.CRNyX6TY.js";function A(s){let r=s.getWorksheet("DALog"),t=r.getRow(1).values.map(i=>typeof i=="string"?i:i.result),n=r.getRow(2).values.map(i=>typeof i=="string"?i:i.result??null);t.shift(),t.shift(),n.shift(),n.shift();let a=t.map((i,f)=>[i,n[f]]);return Object.fromEntries(a)}function u(s){return(s+1).toString().padStart(2,"0")}function D(s){let r=k(),t=o=>{let e=s[o];if(typeof e=="string")return e;if(e==null)return"";throw new Error(`${o} isn't a string, it's ${e}`)},n=o=>{let e=s[o];return typeof e=="number"?e:(e==null||console.warn(`${o} isn't a number, it's ${e}. Defaulting to 0`),0)},a=o=>{let e=s[o];return typeof e=="object"&&e instanceof Date?_(e):""},i=o=>{let e=s[o];if(e==""||e=="Yes"||e=="No")return e;if(e==null)return"";throw new Error(`${o} isn't yesNoBlank, it's ${e}`)},f=o=>{let e=s[o];if(e==""||e=="C"||e=="N/A")return e;if(e==0||e==1||e==2)return e.toString();if(e==null)return"0";throw new Error(`${o} isn't score, it's ${e}`)},c=o=>{let e=t(o).split(", ").map(parseFloat);return[e[1],e[0]]},C=t("Sub-tool")=="Street Check"?"street":"path";r.summary={dateDesignReview:a("Date of Design Review"),schemeReference:t("Scheme Ref"),schemeName:t("Scheme Name"),schemeSummary:"",schemeInfoReviewed:"",authority:t("Authority"),transportOrCombinedAuthority:t("Transport/ Combined Authority"),region:t("Region"),fundingProgramme:t("Funding Programme"),designStage:t("Design Stage"),fundingConditions:t("Funding Conditions"),inspectorEmail:t("Inspector"),assessedRouteLengthKm:n("RouteLength"),totalRouteLengthKm:n("RouteFileLength"),notes:t("Notes"),checkType:C,networkMap:{type:"FeatureCollection",features:[]}},r.horseRiders=s["PA-LOS-HR-E"]=="N/A"?"No":"Yes";for(let[o,e]of r.policyCheck.entries())e.existing=i(`PC${u(o)}-E`),e.proposed=i(`PC${u(o)}-D`);for(let[o,e,m]of[[r.safetyCheck,"SA",0],[r.streetCheck,"ST",16],[r.streetPlacemakingCheck,"SP",0],[r.pathCheck,"PA",16],[r.pathPlacemakingCheck,"PP",0]])for(let l=0;l<o.existingScores.length;l++)o.existingScores[l]=f(`${e}${u(l+m)}-E`),o.proposedScores[l]=f(`${e}${u(l+m)}-D`);for(let o=0;o<35;o++){let e=`${u(o)}PC`;s[`${e}Ref`]!=null&&r.policyConflictLog.push({conflict:t(`${e}Typ`).substr(0,1),stage:t(`${e}Sta`),point:c(`${e}LaL`),locationName:t(`${e}Loc`),resolved:i(`${e}Res`),notes:t(`${e}Com`)})}for(let o=0;o<35;o++){let e=`${u(o)}SA`;s[`${e}Ref`]!=null&&r.criticalIssues.push({criticalIssue:t(`${e}Typ`).split(" - ")[0],stage:t(`${e}Sta`),point:c(`${e}LaL`),locationName:t(`${e}Loc`),resolved:i(`${e}Res`),notes:t(`${e}Com`)})}return r}function E(s){let r,t;return r=new N({}),{c(){p(r.$$.fragment)},l(n){$(r.$$.fragment,n)},m(n,a){g(r,n,a),t=!0},i(n){t||(h(r.$$.fragment,n),t=!0)},o(n){S(r.$$.fragment,n),t=!1},d(n){d(r,n)}}}function F(s){let r,t;return r=new R({props:{files:L,currentFile:P,state:b,xlsxImporter:s[0],$$slots:{default:[E]},$$scope:{ctx:s}}}),{c(){p(r.$$.fragment)},l(n){$(r.$$.fragment,n)},m(n,a){g(r,n,a),t=!0},p(n,[a]){const i={};a&2&&(i.$$scope={dirty:a,ctx:n}),r.$set(i)},i(n){t||(h(r.$$.fragment,n),t=!0)},o(n){S(r.$$.fragment,n),t=!1},d(n){d(r,n)}}}function T(s){async function r(t){let n=new v.Workbook;await n.xlsx.load(t);let a=A(n);return D(a)}return[r]}class Y extends w{constructor(r){super(),x(this,r,T,F,y,{})}}export{Y as component};
