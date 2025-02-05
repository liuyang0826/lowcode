import{b as s,a as e}from"./federation-shared-d266eb0c.js";let k,w,i,U=(async()=>{let n,l,o,v,m,d,b,c,f,g,x,t,V,p,r;n=await s("@lowcode-fe/designer/designer"),l=await s("vue"),o=await s("naive-ui"),v="NSelect",m="NFormItem",d="NSwitch",b="NFormItem",c="NSelect",f="NFormItem",g="NSelect",x="NFormItem",t="createVNode",V="Fragment",p="ExpressionInput",r="defineComponent",w=e(l,r)({props:{meta:{type:Object,required:!0}},setup(a){return()=>e(l,t)("div",{class:"un-px-12px un-pt-12px"},[e(l,t)(e(n,p),{label:"\u786E\u5B9A\u4E8B\u4EF6",value:a.meta.positiveClick,"onUpdate:value":u=>a.meta.positiveClick=u,defaultValue:`(() => {
  //
})
`},null),e(l,t)(e(n,p),{label:"\u53D6\u6D88\u4E8B\u4EF6",class:"un-mt-12px",value:a.meta.negativeClick,"onUpdate:value":u=>a.meta.negativeClick=u,defaultValue:`(() => {
  //
})
`},null)])}}),i=e(l,r)({props:{meta:{type:Object,required:!0}},setup(a){return()=>e(l,t)("div",{class:"un-px-12px un-pt-12px un-grid un-grid-cols-2 un-gap-x-8px"},[e(l,t)(e(o,x),{label:"\u89E6\u53D1\u65B9\u5F0F"},{default:()=>[e(l,t)(e(o,g),{value:a.meta.trigger,"onUpdate:value":u=>a.meta.trigger=u,defaultValue:"hover",options:[{label:"\u60AC\u505C",value:"hover"},{label:"\u70B9\u51FB",value:"click"},{label:"\u805A\u7126",value:"focus"},{label:"\u4EE3\u7801",value:"manual"}]},null)]}),e(l,t)(e(o,f),{label:"\u5F39\u51FA\u4F4D\u7F6E"},{default:()=>[e(l,t)(e(o,c),{value:a.meta.placement,"onUpdate:value":u=>a.meta.placement=u,defaultValue:"top",options:[{label:"\u9876\u90E8\u5F00\u59CB",value:"top-start"},{label:"\u9876\u90E8",value:"top"},{label:"\u9876\u90E8\u672B\u5C3E",value:"top-end"},{label:"\u53F3\u4FA7\u5F00\u59CB",value:"right-start"},{label:"\u53F3\u4FA7",value:"right"},{label:"\u53F3\u4FA7\u672B\u5C3E",value:"right-end"},{label:"\u5E95\u90E8\u5F00\u59CB",value:"bottom-start"},{label:"\u5E95\u90E8",value:"bottom"},{label:"\u5E95\u90E8\u672B\u5C3E",value:"bottom-end"},{label:"\u5DE6\u4FA7\u5F00\u59CB",value:"left-start"},{label:"\u5DE6\u4FA7",value:"left"},{label:"\u5DE6\u4FA7\u672B\u5C3E",value:"left-end"}]},null)]}),e(l,t)(e(o,b),{label:"\u663E\u793A\u7BAD\u5934"},{default:()=>[e(l,t)(e(o,d),{value:a.meta.showArrow,"onUpdate:value":u=>a.meta.showArrow=u,defaultValue:!0},null)]}),e(l,t)(e(n,p),{label:"\u70B9\u51FB\u5916\u90E8\u4E8B\u4EF6",value:a.meta.onClickoutside,"onUpdate:value":u=>a.meta.onClickoutside=u,defaultValue:`(() => {
  //
})
`},null),e(l,t)(e(n,p),{class:"un-col-span-2",label:"\u81EA\u5B9A\u4E49\u5C5E\u6027",value:a.meta.props,"onUpdate:value":u=>a.meta.props=u,defaultValue:`({
  //
})
`},null)])}}),k=e(l,r)({props:{meta:{type:Object,required:!0}},setup(a){return()=>e(l,t)(e(l,V),null,[e(l,t)("div",{class:"un-px-12px un-pt-12px un-grid un-grid-cols-2 un-gap-x-8px un-mb--12px"},[e(l,t)(e(n,p),{class:"un-col-span-2",label:"\u9009\u9879",value:a.meta.options,"onUpdate:value":u=>a.meta.options=u,defaultValue:`[
  // { label: '\u9009\u9879\u4E00', key: 'key1' }
]
`},null),e(l,t)(e(n,p),{label:"\u9009\u62E9\u4E8B\u4EF6",value:a.meta.onSelect,"onUpdate:value":u=>a.meta.onSelect=u,defaultValue:`((key, option) => {
  // console.log(key, option)
})
`},null),e(l,t)(e(o,m),{label:"\u5C3A\u5BF8"},{default:()=>[e(l,t)(e(o,v),{defaultValue:"medium",value:a.meta.size,"onUpdate:value":u=>a.meta.size=u,options:[{label:"\u5C0F",value:"small"},{label:"\u4E2D",value:"medium"},{label:"\u5927",value:"large"},{label:"\u8D85\u5927",value:"huge"}]},null)]})]),e(l,t)(i,{meta:a.meta},null)])}})})();export{k as Dropdown,w as Popconfirm,i as Popover,U as __tla};
