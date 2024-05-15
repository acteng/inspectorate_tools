import{s as f}from"./index.C3fHlkvC.js";import{n as x}from"./data.rYOmc0xj.js";let S={Walking:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Wheeling:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],Cycling:[0,1,2,3,4,5,7,9,11,13,14,15,16,17,18,19,22,23,24,25,26,27,28],"Horse Riding":[0,1,3,4,5,8,9,12,13,14,15,16,17,18,19,22,24,25,26,29]},b={Walking:[0,1,2,3,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Wheeling:[0,1,2,3,4,5,6,8,11,14,15,16,17,18,19,21,22,24,25],Cycling:[0,1,2,3,5,6,7,9,10,12,13,16,19,20,21,22,23,24,25]},v={Walking:[0,1,3,5,6,7,8,9,10,14,15],Wheeling:[0,1,3,5,6,7,8,9,10,14,15],Cycling:[0,1,2,4,7,8,11,12,13,15]};function A(e){let t=e.summary.checkType,n=t=="street",i=t=="path",s=o("Safety",t,e.safetyCheck,null),l=[s];n?(l.push(o("Accessibility",t,e.streetCheck,[0,6])),l.push(o("Comfort",t,e.streetCheck,[7,9])),l.push(o("Directness",t,e.streetCheck,[10,15])),l.push(o("Attractiveness",t,e.streetCheck,[16,21])),l.push(o("Cohesion",t,e.streetCheck,[22,25]))):i&&(l.push(o("Accessibility",t,e.pathCheck,[0,4])),l.push(o("Comfort",t,e.pathCheck,[5,15])),l.push(o("Directness",t,e.pathCheck,[16,19])),l.push(o("Attractiveness",t,e.pathCheck,[20,24])),l.push(o("Cohesion",t,e.pathCheck,[25,29])));let c={category:"overall",existing:g(l.map(p=>p.existing)),proposed:g(l.map(p=>p.proposed))},r=[];n?(r.push(o("Social activity",t,e.streetPlacemakingCheck,[0,2])),r.push(o("Personal security",t,e.streetPlacemakingCheck,[3,5])),r.push(o("Character and legibility",t,e.streetPlacemakingCheck,[6,15])),r.push(o("Environment",t,e.streetPlacemakingCheck,[16,25]))):i&&r.push(o("Social activity",t,e.pathPlacemakingCheck,[0,2]),o("Personal security",t,e.pathPlacemakingCheck,[3,5]),o("Character and legibility",t,e.pathPlacemakingCheck,[6,9]),o("Environment",t,e.pathPlacemakingCheck,[10,18]));let h={category:"overall",existing:g(r.map(p=>p.existing)),proposed:g(r.map(p=>p.proposed))},a=[];n?a=P(e.safetyCheck,e.streetCheck,b,e.summary.checkType):i&&(a=P(e.safetyCheck,e.pathCheck,S,e.summary.checkType));let u=W(e);return{safetyCheck:s,streetCheck:n?d(s,o("",t,e.streetCheck,null)):null,streetPlacemaking:n?o("",t,e.streetPlacemakingCheck,null):null,pathCheck:i?d(s,o("",t,e.pathCheck,null)):null,pathPlacemaking:i?o("",t,e.pathPlacemakingCheck,null):null,levelOfService:l,overall:c,placemakingCategories:r,placemakingOverall:h,byMode:a,jat:u}}function o(e,t,n,i){return{category:e,existing:y(n.existingScores,e,t,i),proposed:y(n.proposedScores,e,t,i)}}function y(e,t,n,i){let s=i||[0,e.length-1],l=s[0],c=s[1]+1;return m(e.slice(l,c),t,n)}function m(e,t,n){let i=e.filter(h=>h!="N/A").length,s=1;t=="Safety"?s=3:n=="path"&&t=="Personal security"&&(s=2);let l=i*2*s,c=s*f(e.map(x)),r=c/l*100;return{numberMetrics:i,totalPossibleScore:l,score:c,scorePercent:r}}function g(e){let t=f(e.map(l=>l.numberMetrics)),n=f(e.map(l=>l.totalPossibleScore)),i=f(e.map(l=>l.score)),s=i/n*100;return{numberMetrics:t,totalPossibleScore:n,score:i,scorePercent:s}}function d(e,t){return{category:"",existing:g([e.existing,t.existing]),proposed:g([e.proposed,t.proposed])}}function I(e){return`${Math.round(e.proposed.scorePercent-e.existing.scorePercent)}%`}function P(e,t,n,i){let s=[];for(let[l,c]of Object.entries(n)){let r=v[l]||[],h={category:"Safety",existing:m(C(e.existingScores,r),"Safety",i),proposed:m(C(e.proposedScores,r),"Safety",i)},a={category:"",existing:m(C(t.existingScores,c),"",i),proposed:m(C(t.proposedScores,c),"",i)},u=d(h,a);u.category=l,s.push(u)}return s}function C(e,t){return t.map(n=>e[n])}function W(e){let t={0:0,1:1,2:2,X:0},n=[];for(let i of e.jat){let s={walkingWheeling:{existing:"",proposed:""},cycling:{existing:"",proposed:""},total:{existing:"",proposed:""}};for(let l of["existing","proposed"]){let c=0,r=0,h=0,a=0,u=0,p=0;for(let k of i[l].movements)k.kind=="walking & wheeling"?(c+=t[k.score],r+=2):(h+=t[k.score],a+=2),u+=t[k.score],p+=2;s.walkingWheeling[l]=r>0?`${c/r*100}%`:"Not Completed",s.cycling[l]=a>0?`${h/a*100}%`:"Not Comleted",s.total[l]=p>0?`${u/p*100}%`:"Not Completed"}n.push(s)}return n}export{A as g,I as n};
