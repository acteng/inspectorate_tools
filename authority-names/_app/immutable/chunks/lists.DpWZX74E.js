import{s as W,r as p,e as H,a as N,c as O,b as T,g as F,f as b,q as R,E as _,i as M,h as I,w as L}from"./scheduler.DGwhun8C.js";import{S as P,i as V,e as y,c as C,a as v,m as S,t as m,g as D,b as c,f as Y,d as k}from"./index.B2vZYn3d.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.DOcm7Z9j.js";import{S as q}from"./Select.B-xUDFWN.js";import{T as G}from"./TextInput.i6YAM8qK.js";import{f as K}from"./authority_names.BrfP5Gn6.js";function B(i){let o,n,u;function d(s){i[10](s)}let l={label:"Enter a custom value"};return i[0]!==void 0&&(l.value=i[0]),o=new G({props:l}),p.push(()=>y(o,"value",d)),{c(){C(o.$$.fragment)},l(s){v(o.$$.fragment,s)},m(s,h){S(o,s,h),u=!0},p(s,h){const e={};!n&&h&1&&(n=!0,e.value=s[0],L(()=>n=!1)),o.$set(e)},i(s){u||(m(o.$$.fragment,s),u=!0)},o(s){c(o.$$.fragment,s),u=!1},d(s){k(o,s)}}}function j(i){let o,n,u,d,l;function s(t){i[9](t)}let h={label:i[1],hint:i[2],choices:i[6],emptyOption:i[3],disabled:i[4]};i[5]!==void 0&&(h.value=i[5]),n=new q({props:h}),p.push(()=>y(n,"value",s)),n.$on("change",i[7]);let e=i[5]=="other"&&B(i);return{c(){o=H("div"),C(n.$$.fragment),d=N(),e&&e.c(),this.h()},l(t){o=O(t,"DIV",{class:!0});var r=T(o);v(n.$$.fragment,r),d=F(r),e&&e.l(r),r.forEach(b),this.h()},h(){R(o,"class","svelte-gtlbk6"),_(o,"grouped",i[5]=="other")},m(t,r){M(t,o,r),S(n,o,null),I(o,d),e&&e.m(o,null),l=!0},p(t,[r]){const f={};r&2&&(f.label=t[1]),r&4&&(f.hint=t[2]),r&8&&(f.emptyOption=t[3]),r&16&&(f.disabled=t[4]),!u&&r&32&&(u=!0,f.value=t[5],L(()=>u=!1)),n.$set(f),t[5]=="other"?e?(e.p(t,r),r&32&&m(e,1)):(e=B(t),e.c(),m(e,1),e.m(o,null)):e&&(D(),c(e,1,1,()=>{e=null}),Y()),(!l||r&32)&&_(o,"grouped",t[5]=="other")},i(t){l||(m(n.$$.fragment,t),m(e),l=!0)},o(t){c(n.$$.fragment,t),c(e),l=!1},d(t){t&&b(o),k(n),e&&e.d()}}}function J(i,o,n){let{label:u}=o,{hint:d=""}=o,{choices:l}=o,{emptyOption:s=!1}=o,{disabled:h=!1}=o,{value:e}=o,t=new Set(l.map(a=>a[0])),r=[...l,["other","Other"]];s&&t.add("");function f(a){return t.has(a)?a:"other"}let g=f(e);function w(){n(0,e=g=="other"?"":g)}function A(a){g=a,n(5,g)}function E(a){e=a,n(0,e)}return i.$$set=a=>{"label"in a&&n(1,u=a.label),"hint"in a&&n(2,d=a.hint),"choices"in a&&n(8,l=a.choices),"emptyOption"in a&&n(3,s=a.emptyOption),"disabled"in a&&n(4,h=a.disabled),"value"in a&&n(0,e=a.value)},[e,u,d,s,h,g,r,w,l,A,E]}class oo extends P{constructor(o){super(),V(this,o,J,j,W,{label:1,hint:2,choices:8,emptyOption:3,disabled:4,value:0})}}const U=["Scotland","Wales","London Borough of Barking and Dagenham","London Borough of Barnet","London Borough of Bexley","London Borough of Brent","London Borough of Bromley","London Borough of Camden","London Borough of Croydon","London Borough of Ealing","London Borough of Enfield","London Borough of Hackney","London Borough of Hammersmith and Fulham","London Borough of Haringey","London Borough of Harrow","London Borough of Havering","London Borough of Hillingdon","London Borough of Hounslow","London Borough of Islington","Royal Borough of Kingston upon Thames","Royal Borough of Greenwich","Royal Borough of Kensington and Chelsea","London Borough of Lambeth","London Borough of Lewisham","London Borough of Merton","London Borough of Newham","London Borough of Redbridge","London Borough of Richmond upon Thames","London Borough of Southwark","London Borough of Sutton","London Borough of Tower Hamlets","London Borough of Waltham Forest","London Borough of Wandsworth","Westminster City Council"];let eo=["N/A",...K,...U],no=["Not applicable","Cambridgeshire & Peterborough Combined Authority","Greater Manchester Combined Authority","Liverpool City Region Combined Authority","North East Joint Transport Committee","South Yorkshire Mayoral Combined Authority","Tees Valley Combined Authority","West Midlands Combined Authority","West of England Combined Authority","West Yorkshire Combined Authority"],to=["East of England","East Midlands","North East","North West","South East","South West","West Midlands","Yorkshire and the Humber"],ao=["Active Travel Fund","Capability Fund","City Region Sustainable Transport Settlements","Levelling Up Fund","Major Road Network","Transforming Cities Fund","Road Investment Strategy ","Housing Infrastructure Fund","National Cycle Network"],io=["Feasibility","Preliminary","Outline design","Detailed design","Strategic business case","Pre-outline business case","Outline business case","Final business case"];export{oo as S,eo as a,io as d,ao as f,to as r,no as t};
