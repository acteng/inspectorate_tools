import{g as d}from"./index.DDHB0kVu.js";import{j as n,r as g,s as m}from"./index.YJBCjSZt.js";var _=Object.defineProperty,p=(a,t)=>_(a,"name",{value:t,configurable:!0});function i(a,t,o={}){var e=d(a),r=d(t),h=n(r[1]-e[1]),u=n(r[0]-e[0]),f=n(e[1]),v=n(r[1]),s=Math.pow(Math.sin(h/2),2)+Math.pow(Math.sin(u/2),2)*Math.cos(f)*Math.cos(v);return g(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)),o.units)}p(i,"distance");var M=Object.defineProperty,l=(a,t)=>M(a,"name",{value:t,configurable:!0});function c(a,t={}){return m(a,(o,e)=>{const r=e.geometry.coordinates;return o+i(r[0],r[1],t)},0)}l(c,"length");var j=c;export{j as t};
