import{b as i,a as e}from"./federation-shared-1482b2fe.js";let p,s=(async()=>{let n,a,l,u,r;n=await i("@lowcode-fe/designer/designer"),a=await i("vue"),l="createVNode",u="ExpressionInput",r="defineComponent",p=e(a,r)({props:{meta:{type:Object,required:!0}},setup(t){return()=>e(a,l)("div",{class:"un-px-12px un-pt-12px"},[e(a,l)(e(n,u),{label:"\u4E0A\u4E00\u9875\u4E8B\u4EF6",value:t.meta.onClickPrev,"onUpdate:value":o=>t.meta.onClickPrev=o,defaultValue:`(() =>  {
  // 
})
`},null),e(a,l)(e(n,u),{label:"\u4E0B\u4E00\u9875\u4E8B\u4EF6",value:t.meta.onClickNext,"onUpdate:value":o=>t.meta.onClickNext=o,defaultValue:`(() =>  {
  // 
})
`},null)])}})})();export{p as ChartSwitcher,s as __tla};
