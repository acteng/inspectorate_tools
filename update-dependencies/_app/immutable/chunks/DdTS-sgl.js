import{s as k}from"./D70NpXyK.js";import{n as y}from"./COOUCdlV.js";let x={Walking:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Wheeling:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Cycling:[0,1,2,3,4,5,7,9,11,13,14,15,16,17,18,19,22,23,24,25,26,27,28],"Horse Riding":[0,1,3,4,5,8,9,12,13,14,15,16,17,18,19,22,24,25,26,29]},P={Walking:[0,1,3,5,6,7,8,9,10,14,15],Wheeling:[0,1,3,5,6,7,8,9,10,14,15],Cycling:[0,1,2,4,7,8,11,12,13,15]},b={Walking:[0,1,2,3,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Wheeling:[0,1,2,3,4,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Cycling:[0,1,2,3,5,6,7,9,10,12,13,16,19,20,21,22,23,24,25]};function w(e){let l=e.summary.checkType,i=l=="street",n=l=="path",o=s("Safety",l,e.safetyCheck,[0,15]),t=[o];i?(t.push(s("Accessibility",l,e.streetCheck,[0,6])),t.push(s("Comfort",l,e.streetCheck,[7,9])),t.push(s("Directness",l,e.streetCheck,[10,15])),t.push(s("Attractiveness",l,e.streetCheck,[16,21])),t.push(s("Cohesion",l,e.streetCheck,[22,25]))):n&&(t.push(s("Accessibility",l,e.pathCheck,[0,4])),t.push(s("Comfort",l,e.pathCheck,[5,15])),t.push(s("Directness",l,e.pathCheck,[16,19])),t.push(s("Attractiveness",l,e.pathCheck,[20,24])),t.push(s("Cohesion",l,e.pathCheck,[25,29])));let c={category:"overall",existing:f(t.map(p=>p.existing)),proposed:f(t.map(p=>p.proposed))},r=[];i?(r.push(s("Social activity",l,e.streetPlacemakingCheck,[0,2])),r.push(s("Personal security",l,e.streetPlacemakingCheck,[3,5])),r.push(s("Character and legibility",l,e.streetPlacemakingCheck,[6,15])),r.push(s("Environment",l,e.streetPlacemakingCheck,[16,25]))):n&&r.push(s("Social activity",l,e.pathPlacemakingCheck,[0,2]),s("Personal security",l,e.pathPlacemakingCheck,[3,5]),s("Character and legibility",l,e.pathPlacemakingCheck,[6,9]),s("Environment",l,e.pathPlacemakingCheck,[10,18]));let a={category:"overall",existing:f(r.map(p=>p.existing)),proposed:f(r.map(p=>p.proposed))},u=[];i?u=C(e.safetyCheck,e.streetCheck,b,e.summary.checkType):n&&(u=C(e.safetyCheck,e.pathCheck,x,e.summary.checkType));let h=S(e);return{safetyCheck:o,levelOfService:t,overall:c,placemakingCategories:r,placemakingOverall:a,byMode:u,jat:h}}function s(e,l,i,n){return{category:e,existing:g(i.existingScores.slice(n[0],n[1]+1),e,l),proposed:g(i.proposedScores.slice(n[0],n[1]+1),e,l)}}function g(e,l,i){let n=e.filter(a=>a!="N/A").length,o=1;l=="Safety"?o=3:i=="path"&&l=="Personal security"&&(o=2);let t=n*2*o,c=o*k(e.map(y)),r=c/t*100;return{numberMetrics:n,totalPossibleScore:t,score:c,scorePercent:r}}function f(e){let l=k(e.map(t=>t.numberMetrics)),i=k(e.map(t=>t.totalPossibleScore)),n=k(e.map(t=>t.score)),o=n/i*100;return{numberMetrics:l,totalPossibleScore:i,score:n,scorePercent:o}}function v(e,l){return{category:"",existing:f([e.existing,l.existing]),proposed:f([e.proposed,l.proposed])}}function R(e){return`${Math.round(e.proposed.scorePercent-e.existing.scorePercent)}%`}function C(e,l,i,n){let o=[];for(let[t,c]of Object.entries(i)){let r=P[t]||[],a={existing:g(d(e.existingScores,r),"Safety",n),proposed:g(d(e.proposedScores,r),"Safety",n)},u={existing:g(d(l.existingScores,c),"",n),proposed:g(d(l.proposedScores,c),"",n)},h=v(a,u);h.category=t,o.push(h)}return o}function d(e,l){return l.map(i=>e[i])}function S(e){let l={0:0,1:1,2:2,X:0},i=[];for(let n of e.jat){let o={name:n.name,walkingWheeling:{existing:null,proposed:null,netDifference:null},cycling:{existing:null,proposed:null,netDifference:null},total:{existing:null,proposed:null,netDifference:null}};for(let t of["existing","proposed"]){let c=0,r=0,a=0,u=0,h=0,p=0;for(let m of n[t].movements)m.kind=="walking & wheeling"?(c+=l[m.score],r+=2):(a+=l[m.score],u+=2),h+=l[m.score],p+=2;o.walkingWheeling[t]=r>0?Math.round(c/r*100):null,o.cycling[t]=u>0?Math.round(a/u*100):null,o.total[t]=p>0?Math.round(h/p*100):null}for(let t of["walkingWheeling","cycling","total"]){let c=o[t].existing,r=o[t].proposed;c!=null&&r!=null&&(o[t].netDifference=r-c)}i.push(o)}return i.push(W(i)),i}function W(e){let l={name:"Overall",walkingWheeling:{existing:null,proposed:null,netDifference:null},cycling:{existing:null,proposed:null,netDifference:null},total:{existing:null,proposed:null,netDifference:null}};for(let i of["walkingWheeling","cycling","total"])for(let n of["existing","proposed","netDifference"]){let o=0,t=0;for(let c of e){let r=c[i][n];r!=null&&(o+=r,t+=100)}t>0&&(l[i][n]=Math.round(o/t*100))}return l}export{w as g,R as n};
