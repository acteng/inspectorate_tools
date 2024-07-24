import{s as k}from"./index.DxVp6xUS.js";import{n as C}from"./data.DhFrTJlH.js";let x={Walking:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Wheeling:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Cycling:[0,1,2,3,4,5,7,9,11,13,14,15,16,17,18,19,22,23,24,25,26,27,28],"Horse Riding":[0,1,3,4,5,8,9,12,13,14,15,16,17,18,19,22,24,25,26,29]},P={Walking:[0,1,2,3,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Wheeling:[0,1,2,3,4,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Cycling:[0,1,2,3,5,6,7,9,10,12,13,16,19,20,21,22,23,24,25]},S={Walking:[0,1,3,5,6,7,8,9,10,14,15],Wheeling:[0,1,3,5,6,7,8,9,10,14,15],Cycling:[0,1,2,4,7,8,11,12,13,15]};function w(e){let t=e.summary.checkType,i=t=="street",n=t=="path",o=s("Safety",t,e.safetyCheck,[0,15]),l=[o];i?(l.push(s("Accessibility",t,e.streetCheck,[0,6])),l.push(s("Comfort",t,e.streetCheck,[7,9])),l.push(s("Directness",t,e.streetCheck,[10,15])),l.push(s("Attractiveness",t,e.streetCheck,[16,21])),l.push(s("Cohesion",t,e.streetCheck,[22,25]))):n&&(l.push(s("Accessibility",t,e.pathCheck,[0,4])),l.push(s("Comfort",t,e.pathCheck,[5,15])),l.push(s("Directness",t,e.pathCheck,[16,19])),l.push(s("Attractiveness",t,e.pathCheck,[20,24])),l.push(s("Cohesion",t,e.pathCheck,[25,29])));let c={category:"overall",existing:f(l.map(p=>p.existing)),proposed:f(l.map(p=>p.proposed))},r=[];i?(r.push(s("Social activity",t,e.streetPlacemakingCheck,[0,2])),r.push(s("Personal security",t,e.streetPlacemakingCheck,[3,5])),r.push(s("Character and legibility",t,e.streetPlacemakingCheck,[6,15])),r.push(s("Environment",t,e.streetPlacemakingCheck,[16,25]))):n&&r.push(s("Social activity",t,e.pathPlacemakingCheck,[0,2]),s("Personal security",t,e.pathPlacemakingCheck,[3,5]),s("Character and legibility",t,e.pathPlacemakingCheck,[6,9]),s("Environment",t,e.pathPlacemakingCheck,[10,18]));let u={category:"overall",existing:f(r.map(p=>p.existing)),proposed:f(r.map(p=>p.proposed))},a=[];i?a=y(e.safetyCheck,e.streetCheck,P,e.summary.checkType):n&&(a=y(e.safetyCheck,e.pathCheck,x,e.summary.checkType));let h=v(e);return{safetyCheck:o,levelOfService:l,overall:c,placemakingCategories:r,placemakingOverall:u,byMode:a,jat:h}}function s(e,t,i,n){return{category:e,existing:g(i.existingScores.slice(n[0],n[1]+1),e,t),proposed:g(i.proposedScores.slice(n[0],n[1]+1),e,t)}}function g(e,t,i){let n=e.filter(u=>u!="N/A").length,o=1;t=="Safety"?o=3:i=="path"&&t=="Personal security"&&(o=2);let l=n*2*o,c=o*k(e.map(C)),r=c/l*100;return{numberMetrics:n,totalPossibleScore:l,score:c,scorePercent:r}}function f(e){let t=k(e.map(l=>l.numberMetrics)),i=k(e.map(l=>l.totalPossibleScore)),n=k(e.map(l=>l.score)),o=n/i*100;return{numberMetrics:t,totalPossibleScore:i,score:n,scorePercent:o}}function b(e,t){return{category:"",existing:f([e.existing,t.existing]),proposed:f([e.proposed,t.proposed])}}function R(e){return`${Math.round(e.proposed.scorePercent-e.existing.scorePercent)}%`}function y(e,t,i,n){let o=[];for(let[l,c]of Object.entries(i)){let r=S[l]||[],u={category:"Safety",existing:g(d(e.existingScores,r),"Safety",n),proposed:g(d(e.proposedScores,r),"Safety",n)},a={category:"",existing:g(d(t.existingScores,c),"",n),proposed:g(d(t.proposedScores,c),"",n)},h=b(u,a);h.category=l,o.push(h)}return o}function d(e,t){return t.map(i=>e[i])}function v(e){let t={0:0,1:1,2:2,X:0},i=[];for(let n of e.jat){let o={name:n.name,walkingWheeling:{existing:null,proposed:null,netDifference:null},cycling:{existing:null,proposed:null,netDifference:null},total:{existing:null,proposed:null,netDifference:null}};for(let l of["existing","proposed"]){let c=0,r=0,u=0,a=0,h=0,p=0;for(let m of n[l].movements)m.kind=="walking & wheeling"?(c+=t[m.score],r+=2):(u+=t[m.score],a+=2),h+=t[m.score],p+=2;o.walkingWheeling[l]=r>0?Math.round(c/r*100):null,o.cycling[l]=a>0?Math.round(u/a*100):null,o.total[l]=p>0?Math.round(h/p*100):null}for(let l of["walkingWheeling","cycling","total"]){let c=o[l].existing,r=o[l].proposed;c!=null&&r!=null&&(o[l].netDifference=r-c)}i.push(o)}return i.push(W(i)),i}function W(e){let t={name:"Overall",walkingWheeling:{existing:null,proposed:null,netDifference:null},cycling:{existing:null,proposed:null,netDifference:null},total:{existing:null,proposed:null,netDifference:null}};for(let i of["walkingWheeling","cycling","total"])for(let n of["existing","proposed","netDifference"]){let o=0,l=0;for(let c of e){let r=c[i][n];r!=null&&(o+=r,l+=100)}l>0&&(t[i][n]=Math.round(o/l*100))}return t}export{w as g,R as n};
