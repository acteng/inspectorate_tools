import{s as f}from"./index.DlYiz8CY.js";import{n as x}from"./data.99PSdYqM.js";let S={walking:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],wheeling:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],cycling:[0,1,2,3,4,5,7,9,11,13,14,15,16,17,18,19,22,23,24,25,26,27,28],horse:[0,1,3,4,5,8,9,12,13,14,15,16,17,18,19,22,24,25,26,29]},b={walking:[0,1,2,3,5,6,8,11,14,15,16,17,18,19,21,22,24,25],wheeling:[0,1,2,3,4,5,6,8,11,14,15,16,17,18,19,21,22,24,25],cycling:[0,1,2,3,5,6,7,9,10,12,13,16,19,20,21,22,23,24,25]},v={walking:[0,1,3,5,6,7,8,9,10,14,15],wheeling:[0,1,3,5,6,7,8,9,10,14,15],cycling:[0,1,2,4,7,8,11,12,13,15]};function W(e){let l=e.summary.checkType=="street",i=e.summary.checkType=="path",n=o("Safety",e.safetyCheck,null),t=[n];l?(t.push(o("Accessibility",e.streetCheck,[0,6])),t.push(o("Comfort",e.streetCheck,[7,9])),t.push(o("Directness",e.streetCheck,[10,15])),t.push(o("Attractiveness",e.streetCheck,[16,21])),t.push(o("Cohesion",e.streetCheck,[22,25]))):i&&(t.push(o("Accessibility",e.pathCheck,[0,4])),t.push(o("Comfort",e.pathCheck,[5,15])),t.push(o("Directness",e.pathCheck,[16,19])),t.push(o("Attractiveness",e.pathCheck,[20,24])),t.push(o("Cohesion",e.pathCheck,[25,29])));let s={category:"overall",existing:u(t.map(c=>c.existing)),proposed:u(t.map(c=>c.proposed))},r=[];l?(r.push(o("Social activity",e.streetPlacemakingCheck,[0,2])),r.push(o("Personal security",e.streetPlacemakingCheck,[3,5])),r.push(o("Character and legibility",e.streetPlacemakingCheck,[6,15])),r.push(o("Environment",e.streetPlacemakingCheck,[16,25]))):i&&r.push(o("Social activity",e.pathPlacemakingCheck,[0,2]),o("Personal security",e.pathPlacemakingCheck,[3,5]),o("Character and legibility",e.pathPlacemakingCheck,[6,9]),o("Environment",e.pathPlacemakingCheck,[10,18]));let p={category:"overall",existing:u(r.map(c=>c.existing)),proposed:u(r.map(c=>c.proposed))},a=[];l?a=P(e.safetyCheck,e.streetCheck,b):i&&(a=P(e.safetyCheck,e.pathCheck,S));let h=M(e);return{safetyCheck:n,streetCheck:l?d(n,o("",e.streetCheck,null)):null,streetPlacemaking:l?o("",e.streetPlacemakingCheck,null):null,pathCheck:i?d(n,o("",e.pathCheck,null)):null,pathPlacemaking:i?o("",e.pathPlacemakingCheck,null):null,levelOfService:t,overall:s,placemakingCategories:r,placemakingOverall:p,byMode:a,jat:h}}function o(e,l,i){return{category:e,existing:y(l.existingScores,e,i),proposed:y(l.proposedScores,e,i)}}function y(e,l,i){let n=i||[0,e.length-1],t=n[0],s=n[1]+1;return g(e.slice(t,s),l)}function g(e,l){let i=e.filter(p=>p!="N/A").length,n=l=="Safety"?3:1,t=i*2*n,s=n*f(e.map(x)),r=s/t*100;return{numberMetrics:i,totalPossibleScore:t,score:s,scorePercent:r}}function u(e){let l=f(e.map(s=>s.numberMetrics)),i=f(e.map(s=>s.totalPossibleScore)),n=f(e.map(s=>s.score)),t=n/i*100;return{numberMetrics:l,totalPossibleScore:i,score:n,scorePercent:t}}function d(e,l){return{category:"",existing:u([e.existing,l.existing]),proposed:u([e.proposed,l.proposed])}}function A(e){return`${Math.round(e.proposed.scorePercent-e.existing.scorePercent)}%`}function P(e,l,i){let n=[];for(let[t,s]of Object.entries(i)){let r=v[t]||[],p={category:"Safety",existing:g(m(e.existingScores,r),"Safety"),proposed:g(m(e.proposedScores,r),"Safety")},a={category:"",existing:g(m(l.existingScores,s),""),proposed:g(m(l.proposedScores,s),"")},h=d(p,a);h.category=t,n.push(h)}return n}function m(e,l){return l.map(i=>e[i])}function M(e){let l={0:0,1:1,2:2,X:0},i=[];for(let n of e.jat){let t={walkingWheeling:{existing:"",proposed:""},cycling:{existing:"",proposed:""},total:{existing:"",proposed:""}};for(let s of["existing","proposed"]){let r=0,p=0,a=0,h=0,c=0,C=0;for(let k of n[s].movements)k.kind=="pedestrian"?(r+=l[k.score],p+=2):(a+=l[k.score],h+=2),c+=l[k.score],C+=2;t.walkingWheeling[s]=p>0?`${r/p*100}%`:"Not Completed",t.cycling[s]=h>0?`${a/h*100}%`:"Not Comleted",t.total[s]=C>0?`${c/C*100}%`:"Not Completed"}i.push(t)}return i}export{W as g,A as n};
