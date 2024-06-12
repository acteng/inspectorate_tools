import{s as m,n as p}from"../chunks/scheduler.D-L5_EKR.js";import{S as g,i as h,c as $,a as S,m as d,t as y,b as C,d as R}from"../chunks/index.DlIJmOlE.js";import{F as k}from"../chunks/FileManager.D-XSHgtK.js";import{e as w,f as x,c as L,s as P}from"../chunks/data.DUJgmdGz.js";import{E as N}from"../chunks/exceljs.min.BuyXGIGS.js";function b(s){let r=s.getWorksheet("DALog"),t=r.getRow(1).values.map(i=>typeof i=="string"?i:i.result),o=r.getRow(2).values.map(i=>typeof i=="string"?i:i.result??null);t.shift(),t.shift(),o.shift(),o.shift();let a=t.map((i,c)=>[i,o[c]]);return Object.fromEntries(a)}function u(s){return(s+1).toString().padStart(2,"0")}function A(s){let r=w(),t=n=>{let e=s[n];if(typeof e=="string")return e;if(typeof e=="object"&&e instanceof Date||typeof e=="number")return e.toString();if(e==null)return"";throw new Error(`${n} isn't a string, it's ${e}`)},o=n=>{let e=s[n];if(e==""||e=="Yes"||e=="No")return e;if(e==null)return"";throw new Error(`${n} isn't yesNoBlank, it's ${e}`)},a=n=>{let e=s[n];if(e==""||e=="C"||e=="N/A")return e;if(e==0||e==1||e==2)return e.toString();if(e==null)return"0";throw new Error(`${n} isn't score, it's ${e}`)},i=n=>{let e=t(n).split(", ").map(parseFloat);return[e[1],e[0]]},c=t("Sub-tool")=="Street Check"?"street":"path";r.summary={dateDesignReview:t("Date of Design Review"),schemeReference:t("Scheme Ref"),schemeName:t("Scheme Name"),schemeSummary:"",schemeInfoReviewed:"",authority:t("Authority"),transportOrCombinedAuthority:t("Transport/ Combined Authority"),region:t("Region"),fundingProgramme:t("Funding Programme"),designStage:t("Design Stage"),fundingConditions:t("Funding Conditions"),inspectorEmail:t("Inspector"),assessedRouteLengthKm:t("RouteFileLength"),totalRouteLengthKm:t("RouteLength"),notes:t("Notes"),checkType:c,networkMap:{type:"FeatureCollection",features:[]}},r.horseRiders=s["PA-LOS-HR-E"]=="N/A"?"No":"Yes";for(let[n,e]of r.policyCheck.entries())e.existing=o(`PC${u(n)}-E`),e.proposed=o(`PC${u(n)}-D`);for(let[n,e,f]of[[r.safetyCheck,"SA",0],[r.streetCheck,"ST",16],[r.streetPlacemakingCheck,"SP",0],[r.pathCheck,"PA",16],[r.pathPlacemakingCheck,"PP",0]])for(let l=0;l<n.existingScores.length;l++)n.existingScores[l]=a(`${e}${u(l+f)}-E`),n.proposedScores[l]=a(`${e}${u(l+f)}-D`);for(let n=0;n<35;n++){let e=`${u(n)}PC`;s[`${e}Ref`]!=null&&r.policyConflictLog.push({conflict:t(`${e}Typ`).substr(0,1),stage:t(`${e}Sta`),point:i(`${e}LaL`),locationName:t(`${e}Loc`),resolved:o(`${e}Res`),notes:t(`${e}Com`)})}for(let n=0;n<35;n++){let e=`${u(n)}SA`;s[`${e}Ref`]!=null&&r.criticalIssues.push({criticalIssue:t(`${e}Typ`).split(" - ")[0],stage:t(`${e}Sta`),point:i(`${e}LaL`),locationName:t(`${e}Loc`),resolved:o(`${e}Res`),notes:t(`${e}Com`)})}return r}function E(s){let r,t;return r=new k({props:{files:x,currentFile:L,state:P,xlsxImporter:s[0]}}),{c(){$(r.$$.fragment)},l(o){S(r.$$.fragment,o)},m(o,a){d(r,o,a),t=!0},p,i(o){t||(y(r.$$.fragment,o),t=!0)},o(o){C(r.$$.fragment,o),t=!1},d(o){R(r,o)}}}function D(s){async function r(t){let o=new N.Workbook;await o.xlsx.load(t);let a=b(o);return A(a)}return[r]}class O extends g{constructor(r){super(),h(this,r,D,E,m,{})}}export{O as component};
