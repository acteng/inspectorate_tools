import"./index.BYv68wXE.js";/* empty css                                            */import"./paths.DZwF-42O.js";function s(t){return t.map(e=>[e,e])}function u(t){return t.split(" ").map(e=>e.length>0?e[0].toUpperCase()+e.substr(1):e).join(" ")}function p(t,e){let n=[];for(let r=0;r<t;r++)n.push(JSON.parse(JSON.stringify(e)));return n}function c(t){return t.reduce((e,n)=>e+n,0)}function d(t,e){return t.endsWith(e)?t.slice(0,-e.length):t}function m(t,e){let n=new Blob([t],{type:"application/octet-stream"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=e,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}function f(t){let e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0");return`${e}-${n}-${r}`}function g(t){if(t==null||t==null)throw new Error("Oops, notNull given something null");return t}export{m as a,g as b,u as c,f as d,d as e,s as p,p as r,c as s};
