(function(e){function t(t){for(var n,u,l=t[0],c=t[1],i=t[2],s=0,d=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,u=1;u<a.length;u++){var c=a[u];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c8bd4625","chunk-10f39a85":"4b82397c","chunk-1367a06b":"851af571","chunk-5bcf6f37":"a19d6bac"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-e-commerce-/dist/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var v=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2095:function(e,t,a){"use strict";a("da86")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=a("bc3a"),o=a.n(r),u=a("2106"),l=a.n(u),c=a("8a14");a("fe26");function i(e,t){var a=Object(n["B"])("router-view");return Object(n["s"])(),Object(n["e"])(a)}a("2095");const s={};s.render=i;var v=s,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),p=a("cf05"),h=a.n(p),f={class:"home"},b=Object(n["i"])("img",{alt:"Vue logo",src:h.a},null,-1);function g(e,t,a,r,o,u){var l=Object(n["B"])("HelloWorld");return Object(n["s"])(),Object(n["e"])("div",f,[b,Object(n["i"])(l,{msg:"Welcome to Your Vue.js App"})])}var m=Object(n["N"])("data-v-5141a303");Object(n["v"])("data-v-5141a303");var j={class:"hello"},k=Object(n["g"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);Object(n["t"])();var O=m((function(e,t,a,r,o,u){return Object(n["s"])(),Object(n["e"])("div",j,[Object(n["i"])("h1",null,Object(n["E"])(a.msg),1),k])})),y={name:"HelloWorld",props:{msg:String}};a("65e4");y.render=O,y.__scopeId="data-v-5141a303";var _=y,w={name:"Home",data:function(){return{}},components:{HelloWorld:_}};w.render=g;var P=w,x=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return a.e("chunk-10f39a85").then(a.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return a.e("chunk-1367a06b").then(a.bind(null,"7277"))},children:[{path:"products",name:"產品列表",component:function(){return a.e("chunk-5bcf6f37").then(a.bind(null,"e6dc"))}}]}],C=Object(d["a"])({history:Object(d["b"])(),routes:x,linkActiveClass:"active"}),E=C,L=Object(n["d"])(v);L.use(l.a,o.a),L.use(E),L.component("Loading",c["a"]),L.mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},da86:function(e,t,a){}});
//# sourceMappingURL=app.a216d009.js.map