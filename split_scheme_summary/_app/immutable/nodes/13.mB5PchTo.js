import{s as Ce,w as ge,e as f,a as v,t as L,c as C,b as S,m as Q,g as _,d as q,f as m,p as ae,i as F,h as i,j as D,x as de,k as le}from"../chunks/scheduler.BwufR8Ly.js";import{S as pe,i as he,e as ve,c as re,a as oe,m as se,t as ne,b as ie,d as ue}from"../chunks/index.BYv68wXE.js";import{c as _e,s as ce}from"../chunks/data.CFLvbYYs.js";import{a as ke,s as me}from"../chunks/index.-YXtcLu6.js";import{S as ye}from"../chunks/SecondaryButton.Bcl2fE5V.js";/* empty css                                                    */import{T as xe}from"../chunks/TextArea.2C2Xc7bA.js";import{E as Se}from"../chunks/exceljs.min.BuyXGIGS.js";const be=""+new URL("../assets/blank_area_check.uvpRTcLS.xlsx",import.meta.url).href;async function we(e,l){console.log("Loading blank area check xlsx");let r=await(await fetch(be)).arrayBuffer(),o=new Se.Workbook;await o.xlsx.load(r),$e(e,o),Ee(e,o),Te(e,o),o.getWorksheet("Results & Commentary").getCell("F17").value=e.resultsNotes,console.log("Writing area check xlsx");let u=await o.xlsx.writeBuffer();ke(u,`area_check_${l}.xlsx`)}function $e(e,l){let t=l.getWorksheet("Summary of Scheme");t.getCell("C6").value=e.summary.dateDesignReview,t.getCell("C7").value=e.summary.schemeReference,t.getCell("C8").value=e.summary.schemeName,t.getCell("C9").value=e.summary.schemeSummary,t.getCell("C10").value=e.summary.schemeInfoReviewed,t.getCell("C11").value=e.summary.authority,t.getCell("C12").value=e.summary.transportOrCombinedAuthority,t.getCell("C13").value=e.summary.region,t.getCell("C14").value=e.summary.fundingProgramme,t.getCell("C15").value=e.summary.designStage,t.getCell("C16").value=e.summary.fundingConditions,t.getCell("C17").value=e.summary.inspectorEmail,t.getCell("C18").value=e.summary.schemeAreaSizeKm2,t.getCell("C19").value=e.summary.notes}function Ee(e,l){let t=l.getWorksheet("Traffic Mitigation Check"),r=e.trafficMitigationCheck;t.getCell("C6").value=r.q1,t.getCell("C11").value=r.q2,t.getCell("C16").value=r.q3,r.q3=="Major routes (e.g. scheme eliminates a rat run)"?(t.getCell("C21").value=r.majorQ1,t.getCell("C26").value=r.majorQ2,t.getCell("C31").value=r.majorQ3,t.getCell("C36").value=r.majorQ4):r.q3=="Minor streets (e.g. residential)"&&(t.getCell("C21").value=r.minorQ1,t.getCell("C26").value=r.minorQ2),t.getCell("E11").value=r.notes}function Te(e,l){let t=l.getWorksheet("Area Scorecard"),r=[10,15,21,26,32,37,43,48,54,60,66,72,78];for(let o=0;o<e.existingScores.length;o++){t.getCell("H"+r[o]).value=e.existingScoreNotes[o],t.getCell("L"+r[o]).value=e.proposedScoreNotes[o];for(let u=0;u<5;u++){let c=t.getCell("C"+(r[o]+u)).value;t.getCell("F"+(r[o]+u)).value=e.existingScores[o]==c||u==0&&e.existingScores[o]==""?"Yes":"No",t.getCell("J"+(r[o]+u)).value=e.proposedScores[o]==c||u==0&&e.proposedScores[o]==""?"Yes":"No"}}}function Me(e){let l;return{c(){l=L("Convert to .xlsx (takes a few seconds)")},l(t){l=q(t,"Convert to .xlsx (takes a few seconds)")},m(t,r){F(t,l,r)},d(t){t&&m(l)}}}function Ne(e){let l,t,r="Traffic Mitigation Check Results",o,u,c=e[0].trafficMitigationCheck.notes+"",b,E,s,y,K="Area Scorecard Results",I,w,V="<th>Existing Area Score</th> <th>Proposed Area Score</th> <th>Uplift</th>",O,g,T,P,U,M,W,J,N,A=e[1]-e[2]+"",j,Y,d,z,B,p,H,x,G=`<i>When you open the file, you need to force Excel to recalculate all formulas
    with Ctrl + Alt + F9</i>`,k;function fe(a){e[4](a)}let X={label:"Comments on Area Scorecard"};return e[0].resultsNotes!==void 0&&(X.value=e[0].resultsNotes),d=new xe({props:X}),ge.push(()=>ve(d,"value",fe)),p=new ye({props:{$$slots:{default:[Me]},$$scope:{ctx:e}}}),p.$on("click",e[3]),{c(){l=f("div"),t=f("h2"),t.textContent=r,o=v(),u=f("p"),b=L(c),E=v(),s=f("table"),y=f("caption"),y.textContent=K,I=v(),w=f("tr"),w.innerHTML=V,O=v(),g=f("tr"),T=f("td"),P=L(e[2]),U=v(),M=f("td"),W=L(e[1]),J=v(),N=f("td"),j=L(A),Y=v(),re(d.$$.fragment),B=v(),re(p.$$.fragment),H=v(),x=f("p"),x.innerHTML=G,this.h()},l(a){l=C(a,"DIV",{class:!0});var n=S(l);t=C(n,"H2",{"data-svelte-h":!0}),Q(t)!=="svelte-anx0ls"&&(t.textContent=r),o=_(n),u=C(n,"P",{});var R=S(u);b=q(R,c),R.forEach(m),E=_(n),s=C(n,"TABLE",{});var h=S(s);y=C(h,"CAPTION",{class:!0,"data-svelte-h":!0}),Q(y)!=="svelte-n1427n"&&(y.textContent=K),I=_(h),w=C(h,"TR",{"data-svelte-h":!0}),Q(w)!=="svelte-18seq6c"&&(w.innerHTML=V),O=_(h),g=C(h,"TR",{});var $=S(g);T=C($,"TD",{});var Z=S(T);P=q(Z,e[2]),Z.forEach(m),U=_($),M=C($,"TD",{});var ee=S(M);W=q(ee,e[1]),ee.forEach(m),J=_($),N=C($,"TD",{});var te=S(N);j=q(te,A),te.forEach(m),$.forEach(m),h.forEach(m),Y=_(n),oe(d.$$.fragment,n),n.forEach(m),B=_(a),oe(p.$$.fragment,a),H=_(a),x=C(a,"P",{"data-svelte-h":!0}),Q(x)!=="svelte-6hhtkc"&&(x.innerHTML=G),this.h()},h(){ae(y,"class","govuk-table__caption govuk-table__caption--m"),ae(l,"class","govuk-width-container")},m(a,n){F(a,l,n),i(l,t),i(l,o),i(l,u),i(u,b),i(l,E),i(l,s),i(s,y),i(s,I),i(s,w),i(s,O),i(s,g),i(g,T),i(T,P),i(g,U),i(g,M),i(M,W),i(g,J),i(g,N),i(N,j),i(l,Y),se(d,l,null),F(a,B,n),se(p,a,n),F(a,H,n),F(a,x,n),k=!0},p(a,[n]){(!k||n&1)&&c!==(c=a[0].trafficMitigationCheck.notes+"")&&D(b,c),(!k||n&4)&&D(P,a[2]),(!k||n&2)&&D(W,a[1]),(!k||n&6)&&A!==(A=a[1]-a[2]+"")&&D(j,A);const R={};!z&&n&1&&(z=!0,R.value=a[0].resultsNotes,de(()=>z=!1)),d.$set(R);const h={};n&64&&(h.$$scope={dirty:n,ctx:a}),p.$set(h)},i(a){k||(ne(d.$$.fragment,a),ne(p.$$.fragment,a),k=!0)},o(a){ie(d.$$.fragment,a),ie(p.$$.fragment,a),k=!1},d(a){a&&(m(l),m(B),m(H),m(x)),ue(d),ue(p,a)}}}function Ae(e,l,t){let r,o,u,c;le(e,_e,s=>t(5,u=s)),le(e,ce,s=>t(0,c=s));async function b(){try{await we(c,u)}catch(s){window.alert(`Conversion failed: ${s}`)}}function E(s){e.$$.not_equal(c.resultsNotes,s)&&(c.resultsNotes=s,ce.set(c))}return e.$$.update=()=>{e.$$.dirty&1&&t(2,r=me(c.existingScores.map(s=>parseInt(s||"0")))),e.$$.dirty&1&&t(1,o=me(c.proposedScores.map(s=>parseInt(s||"0"))))},[c,o,r,b,E]}class He extends pe{constructor(l){super(),he(this,l,Ae,Ne,Ce,{})}}export{He as component};
