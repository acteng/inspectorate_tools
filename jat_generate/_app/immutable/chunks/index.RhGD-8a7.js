var d=Object.defineProperty;var c=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>c(s,typeof e!="symbol"?e+"":e,t);import{Q as f}from"./scheduler.D5JRtHaf.js";import"./index.Xm1AgzMF.js";import"./paths.DbVMMNXZ.js";import"./entry.BNKOCL5n.js";/* empty css                                            */class S{constructor(e,t,i,n,a,h){r(this,"prefix");r(this,"emptyState");r(this,"validate");r(this,"describe");r(this,"state");r(this,"currentFile");this.prefix=e,this.emptyState=t,this.validate=i,this.describe=n,this.state=a,this.currentFile=h,this.initialLoad(),this.state.subscribe(l=>{let o=f(this.currentFile);o&&window.localStorage.setItem(this.key(o),JSON.stringify(l))}),this.currentFile.subscribe(l=>{l&&window.localStorage.setItem(this.key("last-opened-file"),l)})}key(e){return`${this.prefix}${e}`}loadFile(e){console.log(`Loading ${e}`);let t=window.localStorage.getItem(this.key(e));if(!t)throw new Error(`Key not in local storage: ${e}`);let i=JSON.parse(t);return this.validate(i),i}newFilename(){let e=this.getFileList();for(let t=1;t<=e.length+1;t++){let i=`untitled${t}`;if(!e.includes(i))return i}throw new Error("Couldn't make a new filename; this shouldn't be possible")}getFileList(){let e=[];for(let t=0;t<window.localStorage.length;t++){let i=window.localStorage.key(t);i.startsWith(this.prefix)&&i!=this.key("last-opened-file")&&e.push(i.slice(this.prefix.length))}return e.sort(),e}saveAndGetFileList(e,t){return window.localStorage.setItem(this.key(e),JSON.stringify(t)),this.getFileList()}describeFile(e){let t=window.localStorage.getItem(this.key(e));if(!t)return"Error: missing";try{let i=JSON.parse(t);return this.validate(i),JSON.stringify(i)==JSON.stringify(this.emptyState())?"Empty":this.describe(i)}catch{return"Error: invalid or broken file"}}initialLoad(){if(typeof window>"u"){console.log("Running outside of a browser, in test mode -- not loading from local storage");return}console.log("Initial load; trying to open last opened file");let e=window.localStorage.getItem(this.key("last-opened-file"));if(e)try{let i=this.loadFile(e);this.currentFile.set(e),this.state.set(i);return}catch(i){window.alert(`The last opened file ${e} has a problem: ${i}`)}console.log("Starting with a new file");let t=this.newFilename();this.currentFile.set(t),this.state.set(this.emptyState())}}export{S as L};
