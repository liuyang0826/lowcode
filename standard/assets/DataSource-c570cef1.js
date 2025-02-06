import{b,a as e}from"./federation-shared-d266eb0c.js";import{u as c,__tla as ae}from"./Scoped-538c9dbb.js";let Z,ee,le=Promise.all([(()=>{try{return ae}catch{}})()]).then(async()=>{let y,p,a,n,I,h,R,H,x,S,V,F,w,P,E,B,T,z,C,_,q,O,k,K,A,j,D,G,M,W,L,t,g,r,J,$,N,Q,U,X,Y;y=await b("@rdx/admin"),p=await b("@lowcode-fe/designer/designer"),a=await b("vue"),n=await b("naive-ui"),I="NInputNumber",h="NFormItem",R="NInputNumber",H="NFormItem",x="NInput",S="NFormItem",V="NInput",F="NFormItem",w="NInputGroupLabel",P="NInput",E="NInputGroup",B="NFormItem",T="NButton",z="NSwitch",C="NFormItem",_="NSwitch",q="NFormItem",O="NInput",k="NFormItem",K="NSelect",A="NFormItem",j="NInput",D="NFormItem",G="NInput",M="NFormItem",W="NSelect",L="NFormItem",t="createVNode",g="createTextVNode",r="ExpressionInput",J="useDesginer",$="useRegisterVar",N="defineComponent",Q="ref",U="watch",X="onBeforeUnmount",Y="preferDialog",Z=e(a,N)({props:{meta:{type:Object,required:!0}},setup(o){e(p,$)(l=>{const s=o.meta.scopeKey??"";l("loadingRef",`$s.${s}Http.loadingRef.value`,"\u52A0\u8F7D\u72B6\u6001"),o.meta.scene==="submit"?(l("dataRef",`$s.${s}Http.dataRef.value`,"\u6570\u636E\u7ED3\u679C"),l("handleSubmit",`$s.${s}Http.submit.handleSubmit`,"\u63D0\u4EA4"),l("handleReset",`$s.${s}Http.submit.handleReset`,"\u91CD\u7F6E\u8868\u5355\u5E76\u53D1\u8D77\u8BF7\u6C42"),l("resetFields",`$s.${s}Http.submit.resetFields`,"\u91CD\u7F6E\u8868\u5355\u4E0D\u53D1\u8D77\u8BF7\u6C42"),l("modelRef",`$s.${s}Http.submit.modelRef.value`,"\u8868\u5355\u6A21\u578B")):o.meta.scene==="page"?(l("handleSubmit",`$s.${s}Http.pagination.handleSubmit`,"\u63D0\u4EA4"),l("handleReset",`$s.${s}Http.pagination.handleReset`,"\u91CD\u7F6E"),l("modelRef",`$s.${s}Http.pagination.modelRef.value`,"\u8868\u5355\u6A21\u578B"),l("pageRef",`$s.${s}Http.pagination.pageRef.value`,"\u5F53\u524D\u9875"),l("pageSizeRef",`$s.${s}Http.pagination.pageSizeRef.value`,"\u5206\u9875\u5927\u5C0F"),l("recordsRef",`$s.${s}Http.pagination.recordsRef.value`,"\u6570\u636E"),l("totalRef",`$s.${s}Http.pagination.totalRef.value`,"\u603B\u6761\u6570"),l("updatePage",`$s.${s}Http.pagination.updatePage`,"\u66F4\u65B0\u5F53\u524D\u9875"),l("updatePageSize",`$s.${s}Http.pagination.updatePageSize`,"\u66F4\u65B0\u5206\u9875\u5927\u5C0F")):(l("dataRef",`$s.${s}Http.dataRef.value`,"\u6570\u636E\u7ED3\u679C"),l("run",`$s.${s}Http.run`,"\u6267\u884C\u8BF7\u6C42"),l("runAsync",`$s.${s}Http.runAsync`,"async\u6267\u884C\u8BF7\u6C42"),l("refresh",`$s.${s}Http.refresh`,"\u5237\u65B0"),l("refreshAsync",`$s.${s}Http.refreshAsync`,"async\u5237\u65B0"))});const u=e(a,Q)({...o.meta});let d=!1,i=!0;e(a,U)(()=>o.meta,()=>{i=!1,u.value={...o.meta}}),e(a,U)(u,()=>{i?d=!0:i=!0},{deep:!0});const{getCurElement:m,updateMeta:f}=e(p,J)(),v=m();return e(a,X)(()=>{d&&e(y,Y).info({title:"\u63D0\u793A",content:"\u662F\u5426\u4FDD\u5B58HTTP\u914D\u7F6E\uFF1F",positiveText:"\u4FDD\u5B58",negativeText:"\u53D6\u6D88",autoFocus:!1,showIcon:!1,onPositiveClick(){f(v,u.value)}})}),()=>e(a,t)("div",{class:"un-p-12px"},[e(a,t)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,t)(e(n,L),{label:"\u5E94\u7528\u573A\u666F"},{default:()=>[e(a,t)(e(n,W),{value:u.value.scene??"normal",onUpdateValue:l=>{l==="page"&&(u.value.method="post"),u.value.scene=l},options:[{label:"\u666E\u901A\u8BF7\u6C42",value:"normal"},{label:"\u8868\u5355\u63D0\u4EA4",value:"submit"},{label:"\u5206\u9875\u67E5\u8BE2",value:"page"}]},null)]}),e(a,t)(e(n,M),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,t)(e(n,G),{value:u.value.scopeKey,"onUpdate:value":l=>u.value.scopeKey=l},null)]})]),e(a,t)(e(n,D),{label:"\u63A5\u53E3\u5730\u5740"},{default:()=>[e(a,t)(e(n,j),{value:u.value.url,"onUpdate:value":l=>u.value.url=l},null)]}),e(a,t)(e(n,A),{label:"\u8BF7\u6C42\u65B9\u6CD5"},{default:()=>[e(a,t)(e(n,K),{value:u.value.method,"onUpdate:value":l=>u.value.method=l,options:[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}]},null)]}),u.value.scene!=="page"?e(a,t)(e(p,r),{label:"\u8BF7\u6C42\u914D\u7F6E",value:u.value.config,"onUpdate:value":l=>u.value.config=l,defaultValue:`(() => {
  return {
    // axios\u8BF7\u6C42\u914D\u7F6E
  }
})
`},null):e(a,t)(e(p,r),{label:"\u9ED8\u8BA4\u5206\u9875\u6761\u6570",value:u.value.defaultPageSize,"onUpdate:value":l=>u.value.defaultPageSize=l},null),e(a,t)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[u.value.scene!=="normal"?e(a,t)(e(p,r),{label:"\u8868\u5355\u6A21\u578B",value:u.value.model,"onUpdate:value":l=>u.value.model=l,defaultValue:`(() => ({
  // username: null,
}))`},null):null,u.value.scene==="page"?e(a,t)(e(p,r),{label:"\u53C2\u6570\u5904\u7406",value:u.value.query,"onUpdate:value":l=>u.value.query=l,defaultValue:`((query) => {
  return {
    // ...query
  }
})
`},null):null,u.value.scene==="submit"?e(a,t)(e(p,r),{label:"\u8868\u5355\u9A8C\u8BC1",value:u.value.validate,"onUpdate:value":l=>u.value.validate=l,defaultValue:`(() => $s.formInst.validate())
`},null):null,e(a,t)(e(p,r),{label:"ready\u6761\u4EF6",value:u.value.ready,"onUpdate:value":l=>u.value.ready=l,defaultValue:`(() => {
  // return
})
`},null),e(a,t)(e(p,r),{label:"\u524D\u7F6E\u4E8B\u4EF6",value:u.value.onBefore,"onUpdate:value":l=>u.value.onBefore=l,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(p,r),{label:"\u5B8C\u6210\u4E8B\u4EF6",value:u.value.onFinally,"onUpdate:value":l=>u.value.onFinally=l,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(p,r),{label:"\u9519\u8BEF\u4E8B\u4EF6",value:u.value.onError,"onUpdate:value":l=>u.value.onError=l,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(p,r),{label:"\u6210\u529F\u4E8B\u4EF6",value:u.value.onSuccess,"onUpdate:value":l=>u.value.onSuccess=l,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(n,k),{label:"\u5B9A\u65F6\u6267\u884C"},{default:()=>[e(a,t)(e(n,O),{value:u.value.pollingInterval,"onUpdate:value":l=>u.value.pollingInterval=l},{suffix:()=>"ms"})]})]),e(a,t)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,t)(e(n,q),{label:"\u624B\u52A8\u6267\u884C"},{default:()=>[e(a,t)(e(n,_),{value:u.value.manual??u.value.scene==="submit",onUpdateValue:l=>u.value.manual=l},null)]}),e(a,t)(e(n,C),{label:"\u81EA\u52A8\u5237\u65B0"},{default:()=>[e(a,t)(e(n,z),{value:u.value.autoRefresh??!0,onUpdateValue:l=>u.value.autoRefresh=l},null)]})]),e(a,t)(e(n,T),{block:!0,type:"primary",size:"small",onClick:()=>{d=!1,Object.assign(o.meta,u.value)}},{default:()=>[e(a,g)("\u786E\u5B9A")]})])}}),ee=e(a,N)({props:{meta:{type:Object,required:!0}},setup(o){e(p,$)(v=>{const l=o.meta.scopeKey??"";v("ws",`$s.${l}WS`,"websocket\u5B9E\u4F8B")});const u=c(()=>o.meta,"scopeKey"),d=c(()=>o.meta,"host"),i=c(()=>o.meta,"path"),m=c(()=>o.meta,"retryCount"),f=c(()=>o.meta,"retryInterval");return()=>e(a,t)("div",{class:"un-px-12px un-pt-12px"},[e(a,t)(e(n,B),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,t)(e(n,E),null,{default:()=>[e(a,t)(e(n,P),{value:u.v,"onUpdate:value":v=>u.v=v,onBlur:u.on},null),e(a,t)(e(n,w),null,{default:()=>[e(a,g)("WS")]})]})]}),e(a,t)(e(n,F),{label:"\u4E3B\u673A"},{default:()=>[e(a,t)(e(n,V),{value:d.v,"onUpdate:value":v=>d.v=v,onBlur:d.on},null)]}),e(a,t)(e(n,S),{label:"\u8DEF\u5F84"},{default:()=>[e(a,t)(e(n,x),{value:i.v,"onUpdate:value":v=>i.v=v,onBlur:i.on},null)]}),e(a,t)(e(p,r),{label:"\u6D88\u606F\u4E8B\u4EF6",value:o.meta.onMessage,"onUpdate:value":v=>o.meta.onMessage=v,defaultValue:`((data, event) => {
  //
})
`},null),e(a,t)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,t)(e(n,H),{label:"\u91CD\u8BD5\u95F4\u9694"},{default:()=>[e(a,t)(e(n,R),{value:f.v,"onUpdate:value":v=>f.v=v,onBlur:f.on,min:0},null)]}),e(a,t)(e(n,h),{label:"\u91CD\u8BD5\u6B21\u6570"},{default:()=>[e(a,t)(e(n,I),{value:m.v,"onUpdate:value":v=>m.v=v,onBlur:m.on,min:0},null)]}),e(a,t)(e(p,r),{label:"\u662F\u5426\u6FC0\u6D3B",value:o.meta.active,"onUpdate:value":v=>o.meta.active=v,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(p,r),{label:"\u6253\u5F00\u4E8B\u4EF6",value:o.meta.onOpen,"onUpdate:value":v=>o.meta.onOpen=v,defaultValue:`((event) => {
  //
})
`},null),e(a,t)(e(p,r),{label:"\u5173\u95ED\u4E8B\u4EF6",value:o.meta.onClose,"onUpdate:value":v=>o.meta.onClose=v,defaultValue:`((event) => {
  //
})
`},null),e(a,t)(e(p,r),{label:"\u9519\u8BEF\u4E8B\u4EF6",value:o.meta.onError,"onUpdate:value":v=>o.meta.onError=v,defaultValue:`((event) => {
  //
})
`},null)])])}})});export{Z as Http,ee as WebSocket,le as __tla};
