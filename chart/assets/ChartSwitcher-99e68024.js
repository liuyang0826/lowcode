import{b as r,a as e}from"./federation-shared-1482b2fe.js";let d,s=(async()=>{let n,t,u,o,p;n=await r("@lowcode-fe/designer/designer"),t=await r("vue"),u="createVNode",o="ExpressionInput",p="defineComponent",d=e(t,p)({props:{meta:{type:Object,required:!0}},setup(l){return()=>e(t,u)("div",{class:"un-px-12px un-pt-12px"},[e(t,u)(e(n,o),{label:"\u4E0A\u4E00\u9875\u4E8B\u4EF6",value:l.meta.onClickPrev,"onUpdate:value":a=>l.meta.onClickPrev=a,defaultValue:`(() =>  {
  // 
})
`},null),e(t,u)(e(n,o),{label:"\u4E0B\u4E00\u9875\u4E8B\u4EF6",value:l.meta.onClickNext,"onUpdate:value":a=>l.meta.onClickNext=a,defaultValue:`(() =>  {
  // 
})
`},null),e(t,u)(e(n,o),{label:"\u4E0A\u4E00\u9875\u6309\u94AE\u5C5E\u6027",value:l.meta.prevProps,"onUpdate:value":a=>l.meta.prevProps=a,defaultValue:`({
  //
})
`},null),e(t,u)(e(n,o),{label:"\u4E0B\u4E00\u9875\u6309\u94AE\u5C5E\u6027",value:l.meta.nextProps,"onUpdate:value":a=>l.meta.nextProps=a,defaultValue:`({
  //
})
`},null)])}})})();export{d as ChartSwitcher,s as __tla};
