import{b as c,a as e}from"./federation-shared-d266eb0c.js";import{u as v,__tla as O}from"./Scoped-79548090.js";let E,W=Promise.all([(()=>{try{return O}catch{}})()]).then(async()=>{let o,a,u,b,f,N,I,U,g,x,V,y,_,w,B,t,F,C,r,h;o=await c("@lowcode-fe/designer/designer"),a=await c("vue"),u=await c("naive-ui"),b="NInputNumber",f="NFormItem",N="NInputNumber",I="NFormItem",U="NInput",g="NFormItem",x="NInput",V="NFormItem",y="NInputGroupLabel",_="NInput",w="NInputGroup",B="NFormItem",t="createVNode",F="createTextVNode",C="useRegisterVar",r="ExpressionInput",h="defineComponent",E=e(a,h)({props:{meta:{type:Object,required:!0}},setup(n){e(o,C)(l=>{const S=n.meta.scopeKey??"";l("ws",`$s['${S}WS']`,"websocket\u5B9E\u4F8B")});const p=v(()=>n.meta,"scopeKey"),m=v(()=>n.meta,"host"),s=v(()=>n.meta,"path"),d=v(()=>n.meta,"retryCount"),i=v(()=>n.meta,"retryInterval");return()=>e(a,t)("div",{class:"un-px-12px un-pt-12px"},[e(a,t)(e(u,B),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,t)(e(u,w),null,{default:()=>[e(a,t)(e(u,_),{value:p.v,"onUpdate:value":l=>p.v=l,onBlur:p.on},null),e(a,t)(e(u,y),{size:"small"},{default:()=>[e(a,F)("WS")]})]})]}),e(a,t)(e(u,V),{label:"\u4E3B\u673A"},{default:()=>[e(a,t)(e(u,x),{value:m.v,"onUpdate:value":l=>m.v=l,onBlur:m.on},null)]}),e(a,t)(e(u,g),{label:"\u8DEF\u5F84"},{default:()=>[e(a,t)(e(u,U),{value:s.v,"onUpdate:value":l=>s.v=l,onBlur:s.on},null)]}),e(a,t)(e(o,r),{label:"\u6D88\u606F\u4E8B\u4EF6",value:n.meta.onMessage,"onUpdate:value":l=>n.meta.onMessage=l,defaultValue:`((data, event) => {
  //
})
`},null),e(a,t)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,t)(e(u,I),{label:"\u91CD\u8BD5\u95F4\u9694"},{default:()=>[e(a,t)(e(u,N),{value:i.v,"onUpdate:value":l=>i.v=l,onBlur:i.on,min:0},null)]}),e(a,t)(e(u,f),{label:"\u91CD\u8BD5\u6B21\u6570"},{default:()=>[e(a,t)(e(u,b),{value:d.v,"onUpdate:value":l=>d.v=l,onBlur:d.on,min:0},null)]}),e(a,t)(e(o,r),{label:"\u662F\u5426\u6FC0\u6D3B",value:n.meta.active,"onUpdate:value":l=>n.meta.active=l,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(o,r),{label:"\u6253\u5F00\u4E8B\u4EF6",value:n.meta.onOpen,"onUpdate:value":l=>n.meta.onOpen=l,defaultValue:`((event) => {
  //
})
`},null),e(a,t)(e(o,r),{label:"\u5173\u95ED\u4E8B\u4EF6",value:n.meta.onClose,"onUpdate:value":l=>n.meta.onClose=l,defaultValue:`((event) => {
  //
})
`},null),e(a,t)(e(o,r),{label:"\u9519\u8BEF\u4E8B\u4EF6",value:n.meta.onError,"onUpdate:value":l=>n.meta.onError=l,defaultValue:`((event) => {
  //
})
`},null)])])}})});export{E as WebSocket,W as __tla};
