import{g as A,e as u}from"./index.BpwBTfIz.js";var M=Object.defineProperty,a=(t,e)=>M(t,"name",{value:e,configurable:!0});function c(t){return A(t,(e,n)=>e+s(n),0)}a(c,"area");function s(t){let e=0,n;switch(t.type){case"Polygon":return l(t.coordinates);case"MultiPolygon":for(n=0;n<t.coordinates.length;n++)e+=l(t.coordinates[n]);return e;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}a(s,"calculateArea");function l(t){let e=0;if(t&&t.length>0){e+=Math.abs(o(t[0]));for(let n=1;n<t.length;n++)e-=Math.abs(o(t[n]))}return e}a(l,"polygonArea");var d=u*u/2,i=Math.PI/180;function o(t){const e=t.length;if(e<=2)return 0;let n=0,r=0;for(;r<e;){const f=t[r],g=t[r+1===e?0:r+1],h=t[r+2>=e?(r+2)%e:r+2],p=f[0]*i,P=g[1]*i,_=h[0]*i;n+=(_-p)*Math.sin(P),r++}return n*d}a(o,"ringArea");var v=c;export{v as t};
