(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fc03156"],{"159d":function(t,e,c){"use strict";c.r(e);c("99af");var i=c("7a23"),a={class:"table mt-4"},l=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{width:"150"},"購買時間"),Object(i["i"])("th",{width:"200"},"Email"),Object(i["i"])("th",null,"購買款項"),Object(i["i"])("th",{width:"150"},"應付金額"),Object(i["i"])("th",{width:"150"},"是否付款"),Object(i["i"])("th",{width:"200"},"編輯")])],-1),o={class:"text-left"},r={class:"form-check form-switch"},s={class:"btn-group"},n=Object(i["i"])("button",{class:"btn btn-outline-danger btn-sm"},"刪除",-1);function d(t,e,c,d,b,O){var j=this,u=Object(i["B"])("Loading"),p=Object(i["B"])("order-modal"),m=Object(i["B"])("pagination");return Object(i["s"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(u,{active:b.isLoading,"is-full-page":Boolean("true")},null,8,["active","is-full-page"]),Object(i["i"])("table",a,[l,Object(i["i"])("tbody",null,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(b.orders,(function(t,e){return Object(i["s"])(),Object(i["e"])("tr",{key:"key"+e},[Object(i["i"])("td",null,Object(i["E"])(j.$filters.ToLocalDate(t.create_at)),1),Object(i["i"])("td",o,Object(i["E"])(t.user.email),1),Object(i["i"])("td",null,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(t.products,(function(t,e){return Object(i["s"])(),Object(i["e"])("span",{key:"key"+e},Object(i["E"])("".concat(t.product_id,"  數量：").concat(t.qty)),1)})),128))]),Object(i["i"])("td",null,Object(i["E"])(j.$filters.currency(t.total)),1),Object(i["i"])("td",null,[Object(i["i"])("div",r,[Object(i["L"])(Object(i["i"])("input",{class:"form-check-input",type:"checkbox",id:"checkBox"+e,"onUpdate:modelValue":function(e){return t.is_paid=e},readonly:""},null,8,["id","onUpdate:modelValue"]),[[i["G"],t.is_paid]]),Object(i["i"])("label",{class:"form-check-label",for:"checkBox"+e},Object(i["E"])(t.is_paid?"已付款":"未付款"),9,["for"])])]),Object(i["i"])("td",null,[Object(i["i"])("div",s,[Object(i["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return O.openModal(t)}},"檢視",8,["onClick"]),n])])])})),128))])]),Object(i["i"])(p,{ref:"OrderModal",order:b.tempOrders},null,8,["order"]),Object(i["i"])(m,{pages:b.pagination},null,8,["pages"])],64)}var b=c("5530"),O=(c("b0c0"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),j={class:"modal-dialog modal-xl",role:"document"},u={class:"modal-content border-0"},p=Object(i["i"])("div",{class:"modal-header bg-dark text-white"},[Object(i["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(i["i"])("span",null,"檢視訂單")]),Object(i["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),m={class:"modal-body"},h={class:"row"},f={class:"col-sm-4"},g={class:"table"},y=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{colspan:"4",class:"fs-2 text-left"},"用戶資料")])],-1),w=Object(i["i"])("th",{scope:"row"},"姓名",-1),_={colspan:"3"},v=Object(i["i"])("th",{scope:"row"},"Email",-1),E={colspan:"3"},k=Object(i["i"])("th",{scope:"row"},"電話",-1),L={colspan:"3"},x=Object(i["i"])("th",{scope:"row"},"地址",-1),B={colspan:"3"},q={class:"col-sm-8"},M={class:"mb-6"},D={class:"table"},R=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{colspan:"8",class:"fs-2 text-left"},"訂單細節")])],-1),$=Object(i["i"])("th",{scope:"row"},"訂單編號",-1),A={colspan:"7"},I=Object(i["i"])("th",{scope:"row"},"下單時間",-1),z={colspan:"7"},K=Object(i["i"])("th",{scope:"row"},"付款時間",-1),Q=Object(i["h"])("paid_date "),S={colspan:"3"},U=Object(i["i"])("th",{scope:"row"},"付款狀態",-1),Y={colspan:"3",class:"{'success':order.is_paid}"},Z=Object(i["i"])("th",{scope:"row"},"總金額",-1),C={colspan:"3"},P={class:"mb-6"},T={class:"table"},F=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{colspan:"8",class:"fs-2 text-left"},"選購商品")])],-1),G={scope:"row",colspan:"4"},J={colspan:"4"},V={colspan:"4"},N=Object(i["i"])("div",{class:"modal-footer"},[Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 "),Object(i["i"])("button",{type:"button",class:"btn btn-primary"},"確認")],-1);function W(t,e,c,a,l,o){return Object(i["s"])(),Object(i["e"])("div",O,[Object(i["i"])("div",j,[Object(i["i"])("div",u,[p,Object(i["i"])("div",m,[Object(i["i"])("div",h,[Object(i["i"])("div",f,[Object(i["i"])("table",g,[y,Object(i["i"])("tbody",null,[Object(i["i"])("tr",null,[w,Object(i["i"])("td",_,Object(i["E"])(l.tempOrder.user.name),1)]),Object(i["i"])("tr",null,[v,Object(i["i"])("td",E,Object(i["E"])(l.tempOrder.user.email),1)]),Object(i["i"])("tr",null,[k,Object(i["i"])("td",L,Object(i["E"])(l.tempOrder.user.tel),1)]),Object(i["i"])("tr",null,[x,Object(i["i"])("td",B,Object(i["E"])(l.tempOrder.user.address),1)])])])]),Object(i["i"])("div",q,[Object(i["i"])("div",M,[Object(i["i"])("table",D,[R,Object(i["i"])("tbody",null,[Object(i["i"])("tr",null,[$,Object(i["i"])("td",A,Object(i["E"])(l.tempOrder.id),1)]),Object(i["i"])("tr",null,[I,Object(i["i"])("td",z,Object(i["E"])(t.$filters.ToLocalDate(l.tempOrder.create_at)),1)]),Object(i["i"])("tr",null,[K,Q,Object(i["i"])("td",S,Object(i["E"])(l.tempOrder.paid_date?t.$filters.ToLocalDate(l.tempOrder.paid_date):""),1)]),Object(i["i"])("tr",null,[U,Object(i["i"])("td",Y,Object(i["E"])(l.tempOrder.is_paid?"已付款":"未付款"),1)]),Object(i["i"])("tr",null,[Z,Object(i["i"])("td",C,Object(i["E"])(l.tempOrder.total?t.$filters.currency(l.tempOrder.total):""),1)])])])]),Object(i["i"])("div",P,[Object(i["i"])("table",T,[F,Object(i["i"])("tbody",null,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(l.tempOrder.products,(function(t,e){return Object(i["s"])(),Object(i["e"])("tr",{key:"key"+e},[Object(i["i"])("th",G,Object(i["E"])(t.id),1),Object(i["i"])("td",J,Object(i["E"])(t.product_id),1),Object(i["i"])("td",V,Object(i["E"])(t.qty),1)])})),128))])])])])])]),N])])],512)}var H=c("7c2b"),X=c.n(H),tt={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{modal:{},tempOrder:{}}},mounted:function(){this.modal=new X.a(this.$refs.modal)},methods:{showModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},watch:{order:function(t,e){this.tempOrder=this.order}}};tt.render=W;var et=tt,ct=c("1799"),it={data:function(){return{orders:[],pagination:{},isLoading:!1,tempOrders:{}}},components:{OrderModal:et,Pagination:ct["a"]},methods:{getOrders:function(){var t={success:!0,orders:[{create_at:1523539834,id:"-L9u2EUkQSoEmW7QzGLF",is_paid:!0,message:"這是留言",paid_date:1523539924,payment_method:"credit_card",products:{L8nBrq8Ym4ARI1Kog4t:{id:"L8nBrq8Ym4ARI1Kog4t",product_id:"-L8moRfPlDZZ2e-1ritQ",qty:"3"}},total:100,user:{address:"kaohsiung",email:"test@gmail.com",name:"test",tel:"0912346768"},num:1},{create_at:1523539519,id:"-L9u11NAE0m0SpSBUDIq",is_paid:!1,message:"這是留言",payment_method:"credit_card",products:{L8nBrq8Ym4ARI1Kog4t:{id:"L8nBrq8Ym4ARI1Kog4t",product_id:"-L8moRfPlDZZ2e-1ritQ",qty:"3"}},user:{address:"kaohsiung",email:"test@gmail.com",name:"test",tel:"0912346768"},num:2}],pagination:{total_pages:1,current_page:1,has_pre:!1,has_next:!1,category:null},messages:[]};this.orders=t.orders,this.pagination=t.pagination},openModal:function(t){this.tempOrders=Object(b["a"])({},t),console.log(this)}},created:function(){this.getOrders()}};it.render=d;e["default"]=it},b0c0:function(t,e,c){var i=c("83ab"),a=c("9bf2").f,l=Function.prototype,o=l.toString,r=/^\s*function ([^ (]*)/,s="name";i&&!(s in l)&&a(l,s,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-0fc03156.b2da56be.js.map