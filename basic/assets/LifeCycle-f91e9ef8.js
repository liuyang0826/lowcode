import{b as p,a as e}from"./federation-shared-d266eb0c.js";let r,f=(async()=>{let n,l,u,o,d;n=await p("@lowcode-fe/designer/designer"),l=await p("vue"),u="createVNode",o="ExpressionInput",d="defineComponent",r=e(l,d)({props:{meta:{type:Object,required:!0}},setup(t){return()=>e(l,u)("div",{class:"un-p-12px"},[e(l,u)(e(n,o),{label:"onBeforeMount",value:t.meta.beforeMount,"onUpdate:value":a=>t.meta.beforeMount=a,defaultValue:`(() => {
  //
})
    `},null),e(l,u)(e(n,o),{label:"onMounted",value:t.meta.mounted,"onUpdate:value":a=>t.meta.mounted=a,defaultValue:`(() => {
  //
})
    `},null),e(l,u)(e(n,o),{label:"onBeforeUpdate",value:t.meta.beforeUpdate,"onUpdate:value":a=>t.meta.beforeUpdate=a,defaultValue:`(() => {
  //
})
    `},null),e(l,u)(e(n,o),{label:"onUpdated",value:t.meta.updated,"onUpdate:value":a=>t.meta.updated=a,defaultValue:`(() => {
  //
})
    `},null),e(l,u)(e(n,o),{label:"onBeforeUnMount",value:t.meta.beforeUnMount,"onUpdate:value":a=>t.meta.beforeUnMount=a,defaultValue:`(() => {
  //
})
    `},null),e(l,u)(e(n,o),{label:"onUnMounted",value:t.meta.unMounted,"onUpdate:value":a=>t.meta.unMounted=a,defaultValue:`(() => {
  //
})
    `},null)])}})})();export{r as LifeCycle,f as __tla};
