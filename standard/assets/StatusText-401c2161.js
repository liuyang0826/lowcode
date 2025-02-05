import{b as o,a as t}from"./federation-shared-d266eb0c.js";let u,i=(async()=>{let p,a,s,n,l;p=await o("@lowcode-fe/designer/designer"),a=await o("vue"),s="createVNode",n="ExpressionInput",l="defineComponent",u=t(a,l)({props:{meta:{type:Object,required:!0}},setup(e){return()=>t(a,s)("div",{class:"un-px-12px un-pt-12px"},[t(a,s)(t(p,n),{label:"\u6587\u5B57",value:e.meta.content,"onUpdate:value":r=>e.meta.content=r,isExpr:e.meta.isExpr,"onUpdate:isExpr":r=>e.meta.isExpr=r,switchable:!0},null),t(a,s)(t(p,n),{label:"\u81EA\u5B9A\u4E49\u5C5E\u6027",value:e.meta.props,"onUpdate:value":r=>e.meta.props=r,defaultValue:`({
  // type: "success" // 'primary' | 'info' | 'success' | 'warning' | 'error',
  // size: 8,
  // gap: 8,
  // color: "red",
  // textEffect: true,
})
`},null)])}})})();export{u as StatusText,i as __tla};
