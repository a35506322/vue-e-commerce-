(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fc03156"],{"159d":function(t,e,c){"use strict";c.r(e);c("99af");var a=c("7a23"),i={class:"table mt-4"},l=Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[Object(a["i"])("th",{width:"150"},"購買時間"),Object(a["i"])("th",{width:"200"},"Email"),Object(a["i"])("th",null,"購買款項"),Object(a["i"])("th",{width:"150"},"應付金額"),Object(a["i"])("th",{width:"150"},"是否付款"),Object(a["i"])("th",{width:"200"},"編輯")])],-1),s={class:"text-left"},o={class:"form-check form-switch"},n={class:"btn-group"};function b(t,e,c,b,d,r){var O=this,j=Object(a["B"])("Loading"),u=Object(a["B"])("order-view-modal"),p=Object(a["B"])("del-order-modal"),m=Object(a["B"])("pagination");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(j,{active:d.isLoading,"is-full-page":Boolean("true")},null,8,["active","is-full-page"]),Object(a["i"])("table",i,[l,Object(a["i"])("tbody",null,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(d.orders,(function(t,e){return Object(a["s"])(),Object(a["e"])("tr",{key:"key"+e},[Object(a["i"])("td",null,Object(a["E"])(O.$filters.ToLocalDate(t.create_at)),1),Object(a["i"])("td",s,Object(a["E"])(t.user.email),1),Object(a["i"])("td",null,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(t.products,(function(t,e){return Object(a["s"])(),Object(a["e"])("span",{key:"key"+e},Object(a["E"])("".concat(t.product_id,"  數量：").concat(t.qty)),1)})),128))]),Object(a["i"])("td",null,Object(a["E"])(O.$filters.currency(t.total)),1),Object(a["i"])("td",null,[Object(a["i"])("div",o,[Object(a["L"])(Object(a["i"])("input",{class:"form-check-input",type:"checkbox",id:"checkBox"+e,"onUpdate:modelValue":function(e){return t.is_paid=e},readonly:""},null,8,["id","onUpdate:modelValue"]),[[a["G"],t.is_paid]]),Object(a["i"])("label",{class:"form-check-label",for:"checkBox"+e},Object(a["E"])(t.is_paid?"已付款":"未付款"),9,["for"])])]),Object(a["i"])("td",null,[Object(a["i"])("div",n,[Object(a["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return r.openModal(t)}},"檢視",8,["onClick"]),Object(a["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return r.openDelModal(t)}},"刪除",8,["onClick"])])])])})),128))])]),Object(a["i"])(u,{ref:"OrderViewModal",data:d.tempOrders},null,8,["data"]),Object(a["i"])(p,{ref:"DelOrderModal",data:d.tempOrders},null,8,["data"]),Object(a["i"])(m,{pages:d.pagination},null,8,["pages"])],64)}var d=c("5530"),r=(c("b0c0"),{class:"modal fade",tabindex:"-1","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},u=Object(a["i"])("div",{class:"modal-header bg-dark text-white"},[Object(a["i"])("h5",{class:"modal-title"},[Object(a["i"])("span",null,"檢視訂單")]),Object(a["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),p={class:"modal-body"},m={class:"row"},h={class:"col-sm-4"},f={class:"table"},g=Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[Object(a["i"])("th",{colspan:"4",class:"fs-2 text-left"},"用戶資料")])],-1),y={key:0},v=Object(a["i"])("th",{scope:"row"},"姓名",-1),w={colspan:"3"},k=Object(a["i"])("th",{scope:"row"},"Email",-1),D={colspan:"3"},_=Object(a["i"])("th",{scope:"row"},"電話",-1),E={colspan:"3"},x=Object(a["i"])("th",{scope:"row"},"地址",-1),L={colspan:"3"},M={class:"col-sm-8"},B={class:"mb-6"},q={class:"table"},C=Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[Object(a["i"])("th",{colspan:"8",class:"fs-2 text-left"},"訂單細節")])],-1),$=Object(a["i"])("th",{scope:"row"},"訂單編號",-1),R={colspan:"7"},A=Object(a["i"])("th",{scope:"row"},"下單時間",-1),I={colspan:"7"},V=Object(a["i"])("th",{scope:"row"},"付款時間",-1),z={key:0,colspan:"3"},K={key:1,colspan:"3"},Q=Object(a["i"])("th",{scope:"row"},"付款狀態",-1),S={colspan:"3"},U=Object(a["i"])("th",{scope:"row"},"總金額",-1),Y={colspan:"3"},Z={class:"mb-6"},P={class:"table"},T=Object(a["i"])("thead",null,[Object(a["i"])("tr",null,[Object(a["i"])("th",{colspan:"8",class:"fs-2 text-left"},"選購商品")])],-1),F={scope:"row"},G={colspan:"4"},J={colspan:"4"},N={class:"modal-footer"},W=Object(a["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function H(t,e,c,i,l,s){return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["i"])("div",O,[Object(a["i"])("div",j,[u,Object(a["i"])("div",p,[Object(a["i"])("div",m,[Object(a["i"])("div",h,[Object(a["i"])("table",f,[g,t.tempData.user?(Object(a["s"])(),Object(a["e"])("tbody",y,[Object(a["i"])("tr",null,[v,Object(a["i"])("td",w,Object(a["E"])(t.tempData.user.name),1)]),Object(a["i"])("tr",null,[k,Object(a["i"])("td",D,Object(a["E"])(t.tempData.user.email),1)]),Object(a["i"])("tr",null,[_,Object(a["i"])("td",E,Object(a["E"])(t.tempData.user.tel),1)]),Object(a["i"])("tr",null,[x,Object(a["i"])("td",L,Object(a["E"])(t.tempData.user.address),1)])])):Object(a["f"])("",!0)])]),Object(a["i"])("div",M,[Object(a["i"])("div",B,[Object(a["i"])("table",q,[C,Object(a["i"])("tbody",null,[Object(a["i"])("tr",null,[$,Object(a["i"])("td",R,Object(a["E"])(t.tempData.id),1)]),Object(a["i"])("tr",null,[A,Object(a["i"])("td",I,Object(a["E"])(t.$filters.ToLocalDate(t.tempData.create_at)),1)]),Object(a["i"])("tr",null,[V,t.tempData.paid_date?(Object(a["s"])(),Object(a["e"])("td",z,Object(a["E"])(t.$filters.ToLocalDate(t.tempData.paid_date)),1)):(Object(a["s"])(),Object(a["e"])("td",K," 時間不正確 "))]),Object(a["i"])("tr",null,[Q,Object(a["i"])("td",S,Object(a["E"])(t.tempData.is_paid?"已付款":"未付款"),1)]),Object(a["i"])("tr",null,[U,Object(a["i"])("td",Y,Object(a["E"])(t.tempData.total?t.$filters.currency(t.tempData.total):""),1)])])])]),Object(a["i"])("div",Z,[Object(a["i"])("table",P,[T,Object(a["i"])("tbody",null,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(t.tempData.products,(function(t,e){return Object(a["s"])(),Object(a["e"])("tr",{key:"key"+e},[Object(a["i"])("th",F,Object(a["E"])(t.id),1),Object(a["i"])("td",G,Object(a["E"])(t.product_id),1),Object(a["i"])("td",J,Object(a["E"])(t.qty),1)])})),128))])])])])])]),Object(a["i"])("div",N,[W,Object(a["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(e){return t.hideModal()})},"確認")])])])],512)}var X=c("85f5"),tt={mixins:[X["a"]]};tt.render=H;var et=tt,ct={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},at={class:"modal-dialog",role:"document"},it={class:"modal-content border-0"},lt={class:"modal-header bg-danger text-white"},st={class:"modal-title"},ot=Object(a["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),nt={class:"modal-body"},bt=Object(a["h"])(" 是否刪除 "),dt={class:"text-danger"},rt=Object(a["h"])(" (刪除後將無法恢復)。 "),Ot={class:"modal-footer"},jt=Object(a["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ut(t,e,c,i,l,s){return Object(a["s"])(),Object(a["e"])("div",ct,[Object(a["i"])("div",at,[Object(a["i"])("div",it,[Object(a["i"])("div",lt,[Object(a["i"])("h5",st,[Object(a["i"])("span",null,"刪除訂單編號： "+Object(a["E"])(t.tempData.id),1)]),ot]),Object(a["i"])("div",nt,[bt,Object(a["i"])("strong",dt,Object(a["E"])(t.tempData.id),1),rt]),Object(a["i"])("div",Ot,[jt,Object(a["i"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(t){return s.sureDel()})},"確認刪除 ")])])])],512)}var pt={mixins:[X["a"]],methods:{sureDel:function(){this.hideModal()}}};pt.render=ut;var mt=pt,ht=c("1799"),ft={data:function(){return{orders:[],pagination:{},isLoading:!1,tempOrders:{}}},components:{OrderViewModal:et,Pagination:ht["a"],DelOrderModal:mt},methods:{getOrders:function(){var t={success:!0,orders:[{create_at:1523539834,id:"-L9u2EUkQSoEmW7QzGLF",is_paid:!0,message:"這是留言",paid_date:1523539924,payment_method:"credit_card",products:{L8nBrq8Ym4ARI1Kog4t:{id:"L8nBrq8Ym4ARI1Kog4t",product_id:"-L8moRfPlDZZ2e-1ritQ",qty:"3"}},total:100,user:{address:"kaohsiung",email:"test@gmail.com",name:"test",tel:"0912346768"},num:1},{create_at:1523539519,id:"-L9u11NAE0m0SpSBUDIq",is_paid:!1,message:"這是留言",payment_method:"credit_card",products:{L8nBrq8Ym4ARI1Kog4t:{id:"L8nBrq8Ym4ARI1Kog4t",product_id:"-L8moRfPlDZZ2e-1ritQ",qty:"3"}},user:{address:"kaohsiung",email:"test@gmail.com",name:"test",tel:"0912346768"},num:2}],pagination:{total_pages:1,current_page:1,has_pre:!1,has_next:!1,category:null},messages:[]};this.orders=t.orders,this.pagination=t.pagination},openModal:function(t){this.tempOrders=Object(d["a"])({},t);var e=this.$refs.OrderViewModal;e.showModal()},openDelModal:function(t){this.tempOrders=Object(d["a"])({},t);var e=this.$refs.DelOrderModal;e.showModal()}},created:function(){this.getOrders()}};ft.render=b;e["default"]=ft},b0c0:function(t,e,c){var a=c("83ab"),i=c("9bf2").f,l=Function.prototype,s=l.toString,o=/^\s*function ([^ (]*)/,n="name";a&&!(n in l)&&i(l,n,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-0fc03156.be4bddad.js.map