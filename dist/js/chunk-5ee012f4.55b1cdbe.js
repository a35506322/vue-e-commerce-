(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ee012f4"],{e01a:function(t,e,a){"use strict";var i=a("23e7"),c=a("83ab"),o=a("da84"),l=a("5135"),n=a("861d"),s=a("9bf2").f,r=a("e893"),d=o.Symbol;if(c&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};r(b,d);var p=b.prototype=d.prototype;p.constructor=b;var m=p.toString,j="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=m.call(t);if(l(u,t))return"";var a=j?e.slice(7,-1):e.replace(O,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:b})}},e6dc:function(t,e,a){"use strict";a.r(e);var i=a("7a23"),c={class:"text-end"},o={class:"table mt-4"},l=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{width:"120"},"分類"),Object(i["i"])("th",null,"產品名稱"),Object(i["i"])("th",{width:"120"},"原價"),Object(i["i"])("th",{width:"120"},"售價"),Object(i["i"])("th",{width:"100"},"是否啟用"),Object(i["i"])("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},s={class:"text-right"},r={key:0,class:"text-success"},d={key:1,class:"text-muted"},u={class:"btn-group"};function b(t,e,a,b,p,m){var j=Object(i["B"])("Loading"),O=Object(i["B"])("pagination"),f=Object(i["B"])("product-modal"),h=Object(i["B"])("del-product-modal");return Object(i["s"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(j,{active:p.isLoading,"is-full-page":Boolean("true")},null,8,["active","is-full-page"]),Object(i["i"])("div",c,[Object(i["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return m.openModal(!0)})},"新增產品")]),Object(i["i"])("table",o,[l,Object(i["i"])("tbody",null,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(p.products,(function(e,a){return Object(i["s"])(),Object(i["e"])("tr",{key:"key"+a},[Object(i["i"])("td",null,Object(i["E"])(e.category),1),Object(i["i"])("td",null,Object(i["E"])(e.title),1),Object(i["i"])("td",n,Object(i["E"])(t.$filters.currency(e.origin_price)),1),Object(i["i"])("td",s,Object(i["E"])(t.$filters.currency(e.price)),1),Object(i["i"])("td",null,[e.is_enabled?(Object(i["s"])(),Object(i["e"])("span",r,"啟用")):(Object(i["s"])(),Object(i["e"])("span",d,"未啟用"))]),Object(i["i"])("td",null,[Object(i["i"])("div",u,[Object(i["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return m.openModal(!1,e)}},"編輯",8,["onClick"]),Object(i["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return m.openDelModal(e)}},"刪除",8,["onClick"])])])])})),128))])]),Object(i["i"])(O,{pages:p.pagination,onEmitPage:m.updatePages},null,8,["pages","onEmitPage"]),Object(i["i"])(f,{ref:"ProductModal",data:p.tempProduct,onUpdateProduct:m.updateProduct},null,8,["data","onUpdateProduct"]),Object(i["i"])(h,{ref:"DelProductModal",data:p.tempProduct,onDelProduct:m.delProduct},null,8,["data","onDelProduct"])],64)}var p=a("5530"),m=(a("99af"),a("a4d3"),a("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),j={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},f=Object(i["i"])("div",{class:"modal-header bg-dark text-white"},[Object(i["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(i["i"])("span",null,"新增產品")]),Object(i["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},g={class:"row"},v={class:"col-sm-4"},y={class:"mb-3"},x=Object(i["i"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},P=Object(i["i"])("label",{for:"customFile",class:"form-label"},[Object(i["h"])("或 上傳圖片 "),Object(i["i"])("i",{class:"fas fa-spinner fa-spin"})],-1),w=Object(i["g"])('<img class="img-fluid" alt=""><div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',2),M={class:"col-sm-8"},L={class:"mb-3"},k=Object(i["i"])("label",{for:"title",class:"form-label"},"標題",-1),U={class:"row gx-2"},$={class:"mb-3 col-md-6"},_=Object(i["i"])("label",{for:"category",class:"form-label"},"分類",-1),C={class:"mb-3 col-md-6"},S=Object(i["i"])("label",{for:"price",class:"form-label"},"單位",-1),V={class:"row gx-2"},E={class:"mb-3 col-md-6"},F=Object(i["i"])("label",{for:"origin_price",class:"form-label"},"原價",-1),H={class:"mb-3 col-md-6"},B=Object(i["i"])("label",{for:"price",class:"form-label"},"售價",-1),N=Object(i["i"])("hr",null,null,-1),J={class:"mb-3"},z=Object(i["i"])("label",{for:"description",class:"form-label"},"產品描述",-1),G={class:"mb-3"},q=Object(i["i"])("label",{for:"content",class:"form-label"},"說明內容",-1),A={class:"mb-3"},I={class:"form-check"},K=Object(i["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Q={class:"modal-footer"},R=Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function T(t,e,a,c,o,l){return Object(i["s"])(),Object(i["e"])("div",m,[Object(i["i"])("div",j,[Object(i["i"])("div",O,[f,Object(i["i"])("div",h,[Object(i["i"])("div",g,[Object(i["i"])("div",v,[Object(i["i"])("div",y,[x,Object(i["L"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.tempData.imageUrl=e})},null,512),[[i["H"],t.tempData.imageUrl]])]),Object(i["i"])("div",D,[P,Object(i["i"])("input",{type:"file",id:"customFile",class:"form-control",name:"file-to-upload",ref:"customFile",onChange:e[2]||(e[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),w]),Object(i["i"])("div",M,[Object(i["i"])("div",L,[k,Object(i["L"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.tempData.title=e})},null,512),[[i["H"],t.tempData.title]])]),Object(i["i"])("div",U,[Object(i["i"])("div",$,[_,Object(i["L"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.tempData.category=e})},null,512),[[i["H"],t.tempData.category]])]),Object(i["i"])("div",C,[S,Object(i["L"])(Object(i["i"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.tempData.unit=e})},null,512),[[i["H"],t.tempData.unit]])])]),Object(i["i"])("div",V,[Object(i["i"])("div",E,[F,Object(i["L"])(Object(i["i"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.tempData.origin_price=e})},null,512),[[i["H"],t.tempData.origin_price,void 0,{number:!0}]])]),Object(i["i"])("div",H,[B,Object(i["L"])(Object(i["i"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.tempData.price=e})},null,512),[[i["H"],t.tempData.price,void 0,{number:!0}]])])]),N,Object(i["i"])("div",J,[z,Object(i["L"])(Object(i["i"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.tempData.description=e})},null,512),[[i["H"],t.tempData.description]])]),Object(i["i"])("div",G,[q,Object(i["L"])(Object(i["i"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=function(e){return t.tempData.content=e})},null,512),[[i["H"],t.tempData.content]])]),Object(i["i"])("div",A,[Object(i["i"])("div",I,[Object(i["L"])(Object(i["i"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=function(e){return t.tempData.is_enabled=e})},null,512),[[i["G"],t.tempData.is_enabled]]),K])])])])]),Object(i["i"])("div",Q,[R,Object(i["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(t){return l.sure()})},"確認")])])])],512)}var W=a("85f5"),X={mixins:[W["a"]],methods:{sure:function(){this.$emit("update-product",this.tempData)},uploadFile:function(){var t=this,e=this.$refs.customFile.files[0],a=new FormData;a.append("file-to-upload",e);var i="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eason-api","/admin/upload");this.axios.post(i,a).then((function(e){e.data.success&&(t.tempData.imageUrl=e.data.imageUrl)})).catch((function(t){console.log(t)}))}}};X.render=T;var Y=X,Z={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},tt={class:"modal-dialog",role:"document"},et={class:"modal-content border-0"},at={class:"modal-header bg-danger text-white"},it={class:"modal-title"},ct=Object(i["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ot={class:"modal-body"},lt=Object(i["h"])(" 是否刪除 "),nt={class:"text-danger"},st=Object(i["h"])(" (刪除後將無法恢復)。 "),rt={class:"modal-footer"},dt=Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ut(t,e,a,c,o,l){return Object(i["s"])(),Object(i["e"])("div",Z,[Object(i["i"])("div",tt,[Object(i["i"])("div",et,[Object(i["i"])("div",at,[Object(i["i"])("h5",it,[Object(i["i"])("span",null,"刪除 "+Object(i["E"])(t.tempData.title),1)]),ct]),Object(i["i"])("div",ot,[lt,Object(i["i"])("strong",nt,Object(i["E"])(t.tempData.title),1),st]),Object(i["i"])("div",rt,[dt,Object(i["i"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(t){return l.sureDel()})},"確認刪除 ")])])])],512)}var bt={mixins:[W["a"]],methods:{sureDel:function(){this.$emit("del-product",this.tempData.id)}}};bt.render=ut;var pt=bt,mt=a("1799"),jt={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!0,isLoading:!1}},components:{ProductModal:Y,DelProductModal:pt,Pagination:mt["a"]},inject:["emitter","$httpMessageState"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eason-api","/admin/products?page=").concat(e);this.isLoading=!0,this.axios.get(a).then((function(e){e.data.success&&(console.log(e),t.products=e.data.products,t.pagination=e.data.pagination,t.isLoading=!1)}))},openModal:function(t,e){this.tempProduct=t?{}:Object(p["a"])({},e),this.isNew=t;var a=this.$refs.ProductModal;a.showModal()},openDelModal:function(t){this.tempProduct=Object(p["a"])({},t);var e=this.$refs.DelProductModal;e.showModal()},updateProduct:function(t){var e=this;this.isLoading=!0,this.tempProduct=Object(p["a"])({},t);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eason-api","/admin/product"),i="post";this.isNew||(a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eason-api","/admin/product/").concat(t.id),i="put"),this.axios[i](a,{data:this.tempProduct}).then((function(t){var a=e.isNew?"新增":"更新",i=e.isNew?1:e.pagination.current_page;e.$refs.ProductModal.hideModal(),e.$httpMessageState(t,a),e.getProducts(i),e.isLoading=!1})).catch((function(t){console.log(t)}))},delProduct:function(t){var e=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eason-api","/admin/product/").concat(t);this.axios.delete(a).then((function(t){e.$refs.DelProductModal.hideModal(),e.$httpMessageState(t,"刪除"),e.getProducts(e.pagination.current_page),e.isLoading=!1})).catch((function(t){console.log(t)}))},updatePages:function(t){this.getProducts(t)}},created:function(){this.getProducts()}};jt.render=b;e["default"]=jt}}]);
//# sourceMappingURL=chunk-5ee012f4.55b1cdbe.js.map