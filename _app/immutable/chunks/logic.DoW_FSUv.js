function l(r,e,a,n,s){switch(r){case"Footway":return[2.6,2];case"Narrow Traffic / Bus Lane":return[3.25,3.25];case"Wide Traffic / Bus Lane":return[4.5,3.9];case"Traffic Lane (no buses): speed limit 20/30":return[3,2.75];case"On-highway advisory/mandatory cycle lane":return[2,1.5];case"1-way protected cycle track":if(!e.flowOneWay)throw new Error("missing input");return{"<200":[2.3,1.8],"200-800":[2.5,2.3],">800":[2.8,2.3]}[e.flowOneWay];case"2-way protected cycle track":if(!e.flowTwoWay)throw new Error("missing input");return{"<300":[3.3,2.3],"300-1,000":[3.3,2.8],">1,000":[4.3,3.3]}[e.flowTwoWay];case"Shared use cycle track":if(!e.flowSharedUse)throw new Error("missing input");return{"<300":[3,3],">300":[4.5,4.5]}[e.flowSharedUse];case"Parking Bay":return[2,1.8];case"Disabled Parking Bay":return[2.7,2.7];case"Loading Bay":return[2.7,1.8];case"Buffer / Verge":{if(!e.speedLimit)throw new Error("missing input");let i=[.5,.5],o=[1.5,1.5],f=0;if(n&&(f+=t(n)),s&&(f+=t(s)),f<=1||f==4||f==10)return i;let c=e.speedLimit=="<30"||e.speedLimit=="30"||e.speedLimit=="40";return n=="Footway"&&s&&t(s)==2||s=="Footway"&&n&&t(n)==2?c?i:o:{"<30":[.5,0],30:[.5,0],40:[1,.5],50:[2,1.5],60:[2.5,2],70:[3.5,3]}[e.speedLimit]}default:{let i=a[r.custom].width;return[i,i]}}}function t(r){return typeof r=="object"?0:{Footway:0,"1-way protected cycle track":0,"2-way protected cycle track":0,"Shared use cycle track":0,"Buffer / Verge":1,"Narrow Traffic / Bus Lane":2,"Wide Traffic / Bus Lane":2,"Traffic Lane (no buses): speed limit 20/30":2,"On-highway advisory/mandatory cycle lane":2,"Parking Bay":10,"Disabled Parking Bay":10,"Loading Bay":10}[r]}function d(r,e,a){if(t(r)!=0)return"";let n=e&&(t(e)==2||t(e)==10),s=a&&(t(a)==2||t(a)==10);return n&&s?"both":n?"left":s?"right":""}function w(r,e){if(!r||!e)return null;let a=r=="<30"?20:parseInt(r);return e>a*1.1?a+10:a}function y(r,e){let a=e=="Preferred"?r.proposed.desirableMinimumCrossSection:r.proposed.absoluteMinimumCrossSection,n=0,s=0;for(let i=0;i<a.length;i++){let o=a[i];if(!o)continue;let f=i==0?"":a[i-1],c=i==a.length-1?"":a[i+1],u=l(o,r.proposed.trafficData,r.proposed.customFeatures,f,c);n+=u[0],s+=u[1]}return[n,s]}export{w as a,y as c,l as g,d as n};
