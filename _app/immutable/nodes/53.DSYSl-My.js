import{s as g,n as $}from"../chunks/scheduler.ytQcc2rf.js";import{S as h,i as S,c as d,a as y,m as C,t as R,b as w,d as k}from"../chunks/index.D9yYtTfk.js";import{F as x}from"../chunks/FileManager.BuHekU7a.js";import{e as L,f as P,c as b,s as N}from"../chunks/data.DcMmWSrA.js";import{E as v}from"../chunks/exceljs.min.BuyXGIGS.js";import{d as A}from"../chunks/index.eS38-gZ9.js";function D(s){let n=s.getWorksheet("DALog"),t=n.getRow(1).values.map(i=>typeof i=="string"?i:i.result),o=n.getRow(2).values.map(i=>typeof i=="string"?i:i.result??null);t.shift(),t.shift(),o.shift(),o.shift();let a=t.map((i,f)=>[i,o[f]]);return Object.fromEntries(a)}function u(s){return(s+1).toString().padStart(2,"0")}function E(s){let n=L(),t=r=>{let e=s[r];if(typeof e=="string")return e;if(e==null)return"";throw new Error(`${r} isn't a string, it's ${e}`)},o=r=>{let e=s[r];return typeof e=="number"?e:(e==null||console.warn(`${r} isn't a number, it's ${e}. Defaulting to 0`),0)},a=r=>{let e=s[r];return typeof e=="object"&&e instanceof Date?A(e):""},i=r=>{let e=s[r];if(e==""||e=="Yes"||e=="No")return e;if(e==null)return"";throw new Error(`${r} isn't yesNoBlank, it's ${e}`)},f=r=>{let e=s[r];if(e==""||e=="C"||e=="N/A")return e;if(e==0||e==1||e==2)return e.toString();if(e==null)return"0";throw new Error(`${r} isn't score, it's ${e}`)},c=r=>{let e=t(r).split(", ").map(parseFloat);return[e[1],e[0]]},p=t("Sub-tool")=="Street Check"?"street":"path";n.summary={dateDesignReview:a("Date of Design Review"),schemeReference:t("Scheme Ref"),schemeName:t("Scheme Name"),schemeSummary:"",schemeInfoReviewed:"",authority:t("Authority"),transportOrCombinedAuthority:t("Transport/ Combined Authority"),region:t("Region"),fundingProgramme:t("Funding Programme"),designStage:t("Design Stage"),fundingConditions:t("Funding Conditions"),inspectorEmail:t("Inspector"),assessedRouteLengthKm:o("RouteLength"),totalRouteLengthKm:o("RouteFileLength"),notes:t("Notes"),checkType:p,networkMap:{type:"FeatureCollection",features:[]}},n.horseRiders=s["PA-LOS-HR-E"]=="N/A"?"No":"Yes";for(let[r,e]of n.policyCheck.entries())e.existing=i(`PC${u(r)}-E`),e.proposed=i(`PC${u(r)}-D`);for(let[r,e,m]of[[n.safetyCheck,"SA",0],[n.streetCheck,"ST",16],[n.streetPlacemakingCheck,"SP",0],[n.pathCheck,"PA",16],[n.pathPlacemakingCheck,"PP",0]])for(let l=0;l<r.existingScores.length;l++)r.existingScores[l]=f(`${e}${u(l+m)}-E`),r.proposedScores[l]=f(`${e}${u(l+m)}-D`);for(let r=0;r<35;r++){let e=`${u(r)}PC`;s[`${e}Ref`]!=null&&n.policyConflictLog.push({conflict:t(`${e}Typ`).substr(0,1),stage:t(`${e}Sta`),point:c(`${e}LaL`),locationName:t(`${e}Loc`),resolved:i(`${e}Res`),notes:t(`${e}Com`)})}for(let r=0;r<35;r++){let e=`${u(r)}SA`;s[`${e}Ref`]!=null&&n.criticalIssues.push({criticalIssue:t(`${e}Typ`).split(" - ")[0],stage:t(`${e}Sta`),point:c(`${e}LaL`),locationName:t(`${e}Loc`),resolved:i(`${e}Res`),notes:t(`${e}Com`)})}return n}function _(s){let n,t;return n=new x({props:{files:P,currentFile:b,state:N,xlsxImporter:s[0]}}),{c(){d(n.$$.fragment)},l(o){y(n.$$.fragment,o)},m(o,a){C(n,o,a),t=!0},p:$,i(o){t||(R(n.$$.fragment,o),t=!0)},o(o){w(n.$$.fragment,o),t=!1},d(o){k(n,o)}}}function F(s){async function n(t){let o=new v.Workbook;await o.xlsx.load(t);let a=D(o);return E(a)}return[n]}class M extends h{constructor(n){super(),S(this,n,F,_,g,{})}}export{M as component};
