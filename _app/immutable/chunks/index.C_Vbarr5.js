var c=Object.defineProperty;var h=(o,t,e)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var r=(o,t,e)=>h(o,typeof t!="symbol"?t+"":t,e);import{ad as g}from"./scheduler.DGwhun8C.js";import"./index.B2vZYn3d.js";import"./entry.CslSSFa0.js";import"./paths.BU_f1Tqt.js";import"./SelectWithCustom.svelte_svelte_type_style_lang.CasW9hBV.js";class S{constructor(t,e,i,a,n,d){r(this,"prefix");r(this,"emptyState");r(this,"validate");r(this,"describe");r(this,"state");r(this,"currentFile");this.prefix=t,this.emptyState=e,this.validate=i,this.describe=a,this.state=n,this.currentFile=d,this.initialLoad(),this.state.subscribe(s=>{let l=g(this.currentFile);l&&window.localStorage.setItem(this.key(l),JSON.stringify(s))}),this.currentFile.subscribe(s=>{s&&window.localStorage.setItem(this.key("last-opened-file"),s)})}key(t){return`${this.prefix}${t}`}loadFile(t){console.log(`Loading ${t}`);let e=window.localStorage.getItem(this.key(t));if(!e)throw new Error(`Key not in local storage: ${t}`);let i=JSON.parse(e);return this.validate(i),i}getFileList(){let t=[];for(let e=0;e<window.localStorage.length;e++){let i=window.localStorage.key(e);i.startsWith(this.prefix)&&i!=this.key("last-opened-file")&&t.push(i.slice(this.prefix.length))}return t.sort(),t}saveAndGetFileList(t,e){return window.localStorage.setItem(this.key(t),JSON.stringify(e)),this.getFileList()}describeFile(t){let e=window.localStorage.getItem(this.key(t));if(!e)return"Error: missing";try{let i=JSON.parse(e);return this.validate(i),JSON.stringify(i)==JSON.stringify(this.emptyState())?"Empty":this.describe(i)}catch{return"Error: invalid or broken file"}}initialLoad(){if(typeof window>"u"){console.log("Running outside of a browser, in test mode -- not loading from local storage");return}console.log("Initial load; trying to open last opened file");let t=window.localStorage.getItem(this.key("last-opened-file"));if(t)try{let e=this.loadFile(t);this.currentFile.set(t),this.state.set(e);return}catch(e){window.alert(`The last opened file ${t} has a problem: ${e}`)}console.log("Not starting with any file")}}function b(o,t){let e=document.createElement("a");e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),e.setAttribute("download",o),document.body.appendChild(e),e.click(),document.body.removeChild(e)}export{S as L,b as d};
