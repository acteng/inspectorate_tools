import"./index.rGMSHTnh.js";/* empty css                                            *//* empty css                                                       */import"./paths.BstT5Nop.js";function c(t){return t.map(e=>[e,e])}function d(t,e){let n=[];for(let r=0;r<t;r++)n.push(JSON.parse(JSON.stringify(e)));return n}function s(t){return t.reduce((e,n)=>e+n,0)}function u(t,e){return t.endsWith(e)?t.slice(0,-e.length):t}function m(t,e){let n=new Blob([t],{type:"application/octet-stream"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=e,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}function f(t){let e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0");return`${e}-${n}-${r}`}export{m as a,u as b,f as d,c as p,d as r,s};
