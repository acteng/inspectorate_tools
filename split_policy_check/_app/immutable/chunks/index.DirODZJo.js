import"./index.D9yYtTfk.js";/* empty css                                            */import"./paths.Du5iEgI0.js";function s(e){return e.map(t=>[t,t])}function p(e){return e.split(" ").map(t=>t.length>0?t[0].toUpperCase()+t.substr(1):t).join(" ")}function c(e,t){let n=[];for(let r=0;r<e;r++)n.push(JSON.parse(JSON.stringify(t)));return n}function u(e){return e.reduce((t,n)=>t+n,0)}function d(e,t){return e.endsWith(t)?e.slice(0,-t.length):e}function m(e,t){let n=new Blob([e],{type:"application/octet-stream"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}function f(e){let t=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");return`${t}-${n}-${r}`}export{m as a,d as b,p as c,f as d,s as p,c as r,u as s};
