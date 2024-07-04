import{s as C}from"./index.B7HpL_A0.js";import{n as y}from"./data.BpqfIzg6.js";let P={Walking:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Wheeling:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Cycling:[0,1,2,3,4,5,7,9,11,13,14,15,16,17,18,19,22,23,24,25,26,27,28],"Horse Riding":[0,1,3,4,5,8,9,12,13,14,15,16,17,18,19,22,24,25,26,29]},S={Walking:[0,1,2,3,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Wheeling:[0,1,2,3,4,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Cycling:[0,1,2,3,5,6,7,9,10,12,13,16,19,20,21,22,23,24,25]},b={Walking:[0,1,3,5,6,7,8,9,10,14,15],Wheeling:[0,1,3,5,6,7,8,9,10,14,15],Cycling:[0,1,2,4,7,8,11,12,13,15]};function R(e){let t=e.summary.checkType,r=t=="street",o=t=="path",l=s("Safety",t,e.safetyCheck,[0,15]),i=[l];r?(i.push(s("Accessibility",t,e.streetCheck,[0,6])),i.push(s("Comfort",t,e.streetCheck,[7,9])),i.push(s("Directness",t,e.streetCheck,[10,15])),i.push(s("Attractiveness",t,e.streetCheck,[16,21])),i.push(s("Cohesion",t,e.streetCheck,[22,25]))):o&&(i.push(s("Accessibility",t,e.pathCheck,[0,4])),i.push(s("Comfort",t,e.pathCheck,[5,15])),i.push(s("Directness",t,e.pathCheck,[16,19])),i.push(s("Attractiveness",t,e.pathCheck,[20,24])),i.push(s("Cohesion",t,e.pathCheck,[25,29])));let p={category:"overall",existing:m(i.map(c=>c.existing)),proposed:m(i.map(c=>c.proposed))},n=[];r?(n.push(s("Social activity",t,e.streetPlacemakingCheck,[0,2])),n.push(s("Personal security",t,e.streetPlacemakingCheck,[3,5])),n.push(s("Character and legibility",t,e.streetPlacemakingCheck,[6,15])),n.push(s("Environment",t,e.streetPlacemakingCheck,[16,25]))):o&&n.push(s("Social activity",t,e.pathPlacemakingCheck,[0,2]),s("Personal security",t,e.pathPlacemakingCheck,[3,5]),s("Character and legibility",t,e.pathPlacemakingCheck,[6,9]),s("Environment",t,e.pathPlacemakingCheck,[10,18]));let h={category:"overall",existing:m(n.map(c=>c.existing)),proposed:m(n.map(c=>c.proposed))},a=[];r?a=d(e.safetyCheck,e.streetCheck,S,e.summary.checkType):o&&(a=d(e.safetyCheck,e.pathCheck,P,e.summary.checkType));let g=v(e);return{safetyCheck:l,levelOfService:i,overall:p,placemakingCategories:n,placemakingOverall:h,byMode:a,jat:g}}function s(e,t,r,o){return{category:e,existing:u(r.existingScores.slice(o[0],o[1]+1),e,t),proposed:u(r.proposedScores.slice(o[0],o[1]+1),e,t)}}function u(e,t,r){let o=e.filter(h=>h!="N/A").length,l=1;t=="Safety"?l=3:r=="path"&&t=="Personal security"&&(l=2);let i=o*2*l,p=l*C(e.map(y)),n=p/i*100;return{numberMetrics:o,totalPossibleScore:i,score:p,scorePercent:n}}function m(e){let t=C(e.map(i=>i.numberMetrics)),r=C(e.map(i=>i.totalPossibleScore)),o=C(e.map(i=>i.score)),l=o/r*100;return{numberMetrics:t,totalPossibleScore:r,score:o,scorePercent:l}}function x(e,t){return{category:"",existing:m([e.existing,t.existing]),proposed:m([e.proposed,t.proposed])}}function A(e){return`${Math.round(e.proposed.scorePercent-e.existing.scorePercent)}%`}function d(e,t,r,o){let l=[];for(let[i,p]of Object.entries(r)){let n=b[i]||[],h={category:"Safety",existing:u(k(e.existingScores,n),"Safety",o),proposed:u(k(e.proposedScores,n),"Safety",o)},a={category:"",existing:u(k(t.existingScores,p),"",o),proposed:u(k(t.proposedScores,p),"",o)},g=x(h,a);g.category=i,l.push(g)}return l}function k(e,t){return t.map(r=>e[r])}function v(e){let t={0:0,1:1,2:2,X:0},r=[];for(let o of e.jat){let l={walkingWheeling:{existing:"",proposed:""},cycling:{existing:"",proposed:""},total:{existing:"",proposed:""}};for(let i of["existing","proposed"]){let p=0,n=0,h=0,a=0,g=0,c=0;for(let f of o[i].movements)f.kind=="walking & wheeling"?(p+=t[f.score],n+=2):(h+=t[f.score],a+=2),g+=t[f.score],c+=2;l.walkingWheeling[i]=n>0?`${p/n*100}%`:"Not Completed",l.cycling[i]=a>0?`${h/a*100}%`:"Not Comleted",l.total[i]=c>0?`${g/c*100}%`:"Not Completed"}r.push(l)}return r}export{R as g,A as n};
