import"./index.rGMSHTnh.js";/* empty css                                            */import"./paths.OEziOyEy.js";function d(t){return t.map(r=>[r,r])}function c(t){let e=t.split(" ").reduce((i,o)=>i+" "+o[0].toUpperCase()+o.substring(1),"");e[0]===" "&&(e=e.substring(1));const n=e.length;return e[n-1]===" "&&(e=e.substring(0,n-1)),e}function p(t,r){let e=[];for(let n=0;n<t;n++)e.push(JSON.parse(JSON.stringify(r)));return e}function u(t){return t.reduce((r,e)=>r+e,0)}function g(t,r){return t.endsWith(r)?t.slice(0,-r.length):t}function f(t,r){let e=new Blob([t],{type:"application/octet-stream"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=r,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}function m(t){let r=t.getFullYear(),e=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return`${r}-${e}-${n}`}export{f as a,g as b,c,m as d,d as p,p as r,u as s};
