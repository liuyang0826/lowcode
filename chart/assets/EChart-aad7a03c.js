import{b as s,a as e}from"./federation-shared-1482b2fe.js";import{u as f,__tla as y}from"./Scoped-ea62a969.js";let v,b=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{let o,a,p,i,m,n,u,c,d;o=await s("@lowcode-fe/designer/designer"),a=await s("vue"),p=await s("naive-ui"),i="NInput",m="NFormItem",n="createVNode",u="ExpressionInput",c="useRegisterVar",d="defineComponent",v=e(a,d)({props:{meta:{type:Object,required:!0}},setup(l){const r=f(()=>l.meta,"scopeKey","chart");return e(o,c)(t=>{const _=l.meta.scopeKey||"chart";t("inst",`$s.${_}Inst`,"echart\u5B9E\u4F8B")}),()=>e(a,n)("div",{class:"un-px-12px un-pt-12px"},[e(a,n)(e(p,m),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,n)(e(p,i),{value:r.v,"onUpdate:value":t=>r.v=t,onBlur:r.on},null)]}),e(a,n)(e(o,u),{label:"\u914D\u7F6E\u9879",value:l.meta.option,"onUpdate:value":t=>l.meta.option=t,defaultValue:`({
  // \u56FE\u8868\u914D\u7F6E
})
`},null),e(a,n)(e(o,u),{label:"\u6570\u636E\u4E3A\u7A7A",value:l.meta.isEmpty,"onUpdate:value":t=>l.meta.isEmpty=t},null),e(a,n)(e(o,u),{label:"\u81EA\u5B9A\u4E49\u5C5E\u6027",value:l.meta.props,"onUpdate:value":t=>l.meta.props=t,defaultValue:`({
  //
})
`},null)])}})});export{v as EChart,b as __tla};
