var d=Object.defineProperty;var c=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var r=(o,t,e)=>c(o,typeof t!="symbol"?t+"":t,e);import{x as g}from"./scheduler.Bxdx0f0B.js";import"./index.itOPPQ0R.js";import"./paths.DZopcf9c.js";import"./index.KCGNpQzv.js";/* empty css                                                  */import"./entry.xWqMgutA.js";class F{constructor(t,e,i,a,n,h){r(this,"prefix");r(this,"emptyState");r(this,"validate");r(this,"describe");r(this,"state");r(this,"currentFile");this.prefix=t,this.emptyState=e,this.validate=i,this.describe=a,this.state=n,this.currentFile=h,this.initialLoad(),this.state.subscribe(s=>{let l=g(this.currentFile);l&&window.localStorage.setItem(this.key(l),JSON.stringify(s))}),this.currentFile.subscribe(s=>{s&&window.localStorage.setItem(this.key("last-opened-file"),s)})}key(t){return`${this.prefix}${t}`}loadFile(t){console.log(`Loading ${t}`);let e=window.localStorage.getItem(this.key(t));if(!e)throw new Error(`Key not in local storage: ${t}`);let i=JSON.parse(e);return this.validate(i),i}getFileList(){let t=[];for(let e=0;e<window.localStorage.length;e++){let i=window.localStorage.key(e);i.startsWith(this.prefix)&&i!=this.key("last-opened-file")&&t.push(i.slice(this.prefix.length))}return t.sort(),t}saveAndGetFileList(t,e){return window.localStorage.setItem(this.key(t),JSON.stringify(e)),this.getFileList()}describeFile(t){let e=window.localStorage.getItem(this.key(t));if(!e)return"Error: missing";try{let i=JSON.parse(e);return this.validate(i),JSON.stringify(i)==JSON.stringify(this.emptyState())?"Empty":this.describe(i)}catch{return"Error: invalid or broken file"}}initialLoad(){if(typeof window>"u"){console.log("Running outside of a browser, in test mode -- not loading from local storage");return}console.log("Initial load; trying to open last opened file");let t=window.localStorage.getItem(this.key("last-opened-file"));if(t)try{let e=this.loadFile(t);this.currentFile.set(t),this.state.set(e);return}catch(e){window.alert(`The last opened file ${t} has a problem: ${e}`)}console.log("Not starting with any file")}}export{F as L};
