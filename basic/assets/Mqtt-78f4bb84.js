import{b as m,a as e}from"./federation-shared-d266eb0c.js";import{u as y,__tla as w}from"./Scoped-79548090.js";let _,U=Promise.all([(()=>{try{return w}catch{}})()]).then(async()=>{let s,a,n,d,i,v,c,f,b,t,g,o,x,N;s=await m("@lowcode-fe/designer/designer"),a=await m("vue"),n=await m("naive-ui"),d="NInput",i="NFormItem",v="NInputGroupLabel",c="NInput",f="NInputGroup",b="NFormItem",t="createVNode",g="createTextVNode",o="ExpressionInput",x="useRegisterVar",N="defineComponent",_=e(a,N)({props:{meta:{type:Object,required:!0}},setup(u){e(s,x)(l=>{const I=u.meta.scopeKey??"";l("mqtt",`$s['${I}MQTT']`,"mqtt\u5B9E\u4F8B")});const r=y(()=>u.meta,"scopeKey"),p=y(()=>u.meta,"broker");return()=>e(a,t)("div",{class:"un-px-12px un-pt-12px"},[e(a,t)(e(n,b),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,t)(e(n,f),null,{default:()=>[e(a,t)(e(n,c),{value:r.v,"onUpdate:value":l=>r.v=l,onBlur:r.on},null),e(a,t)(e(n,v),{size:"small"},{default:()=>[e(a,g)("MQTT")]})]})]}),e(a,t)(e(n,i),{label:"broker"},{default:()=>[e(a,t)(e(n,d),{value:p.v,"onUpdate:value":l=>p.v=l,onBlur:p.on},null)]}),e(a,t)(e(s,o),{label:"\u8FDE\u63A5\u53C2\u6570",value:u.meta.options,"onUpdate:value":l=>u.meta.options=l,defaultValue:`({
  // username: "yourUsername", // \u53EF\u9009
  // password: "yourPassword", // \u53EF\u9009
})
`},null),e(a,t)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,t)(e(s,o),{label:"\u8FDE\u63A5\u4E8B\u4EF6",value:u.meta.onConnect,"onUpdate:value":l=>u.meta.onConnect=l,defaultValue:`(() => {
  //
})
`},null),e(a,t)(e(s,o),{label:"\u6D88\u606F\u4E8B\u4EF6",value:u.meta.onMessage,"onUpdate:value":l=>u.meta.onMessage=l,defaultValue:`((topic, message) => {
  //
})
`},null)])])}})});export{_ as Mqtt,U as __tla};
