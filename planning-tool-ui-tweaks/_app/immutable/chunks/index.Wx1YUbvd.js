import"./index.B2vZYn3d.js";import"./index.CXY5C3NQ.js";import"./index.CsrOCBVQ.js";import"./paths.7UTNAqhH.js";import"./entry.DmcSTUmO.js";function c(e){return e.map(t=>[t,t])}function u(e){return e.split(" ").map(t=>t.length>0?t[0].toUpperCase()+t.substr(1):t).join(" ")}function d(e,t){let n=[];for(let r=0;r<e;r++)n.push(JSON.parse(JSON.stringify(t)));return n}function m(e){return e.reduce((t,n)=>t+n,0)}function f(e,t){return e.endsWith(t)?e.slice(0,-t.length):e}function b(e,t){let n=new Blob([e],{type:"application/octet-stream"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}function g(e){let t=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");return`${t}-${n}-${r}`}export{f as a,b,u as c,g as d,c as p,d as r,m as s};
