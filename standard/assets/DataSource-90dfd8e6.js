import{b as f,a as e}from"./federation-shared-d266eb0c.js";import{u as b,__tla as $e}from"./Scoped-538c9dbb.js";let be,ge,ye,Ie=Promise.all([(()=>{try{return $e}catch{}})()]).then(async()=>{let g,U,s,a,r,h,S,R,V,F,H,x,w,E,q,k,P,T,B,A,C,K,O,_,z,L,M,j,D,G,W,Q,J,X,Y,Z,ee,ae,le,te,ue,ne,oe,re,l,I,v,se,y,$,de,N,ve,pe,me,ie,ce,fe;g=await f("@rdx/shared"),U=await f("@rdx/admin"),s=await f("@lowcode-fe/designer/designer"),a=await f("vue"),r=await f("naive-ui"),h="NInputNumber",S="NFormItem",R="NInputNumber",V="NFormItem",F="NInput",H="NFormItem",x="NInput",w="NFormItem",E="NInputGroupLabel",q="NInput",k="NInputGroup",P="NFormItem",T="NInput",B="NFormItem",A="NSwitch",C="NFormItem",K="NSwitch",O="NFormItem",_="NInput",z="NFormItem",L="NSelect",M="NFormItem",j="NInput",D="NFormItem",G="NButton",W="NSwitch",Q="NFormItem",J="NSwitch",X="NFormItem",Y="NInput",Z="NFormItem",ee="NSelect",ae="NFormItem",le="NInput",te="NFormItem",ue="NInput",ne="NFormItem",oe="NSelect",re="NFormItem",l="createVNode",I="createTextVNode",v="ExpressionInput",se="useDesginer",y="useRegisterVar",$="defineComponent",de="ref",N="watch",ve="onBeforeUnmount",pe="computed",me="preferDialog",ie="useRequestLogic",ce="request",fe="convertListToMap",ge=e(a,$)({props:{meta:{type:Object,required:!0}},setup(u){e(s,y)(t=>{const o=u.meta.scopeKey??"";t("loadingRef",`$s.${o}Http.loadingRef.value`,"\u52A0\u8F7D\u72B6\u6001"),u.meta.scene==="submit"?(t("dataRef",`$s.${o}Http.dataRef.value`,"\u6570\u636E\u7ED3\u679C"),t("handleSubmit",`$s.${o}Http.submit.handleSubmit`,"\u63D0\u4EA4"),t("handleReset",`$s.${o}Http.submit.handleReset`,"\u91CD\u7F6E\u8868\u5355\u5E76\u53D1\u8D77\u8BF7\u6C42"),t("resetFields",`$s.${o}Http.submit.resetFields`,"\u91CD\u7F6E\u8868\u5355\u4E0D\u53D1\u8D77\u8BF7\u6C42"),t("modelRef",`$s.${o}Http.submit.modelRef.value`,"\u8868\u5355\u6A21\u578B")):u.meta.scene==="page"?(t("handleSubmit",`$s.${o}Http.pagination.handleSubmit`,"\u63D0\u4EA4"),t("handleReset",`$s.${o}Http.pagination.handleReset`,"\u91CD\u7F6E"),t("modelRef",`$s.${o}Http.pagination.modelRef.value`,"\u8868\u5355\u6A21\u578B"),t("pageRef",`$s.${o}Http.pagination.pageRef.value`,"\u5F53\u524D\u9875"),t("pageSizeRef",`$s.${o}Http.pagination.pageSizeRef.value`,"\u5206\u9875\u5927\u5C0F"),t("recordsRef",`$s.${o}Http.pagination.recordsRef.value`,"\u6570\u636E"),t("totalRef",`$s.${o}Http.pagination.totalRef.value`,"\u603B\u6761\u6570"),t("updatePage",`$s.${o}Http.pagination.updatePage`,"\u66F4\u65B0\u5F53\u524D\u9875"),t("updatePageSize",`$s.${o}Http.pagination.updatePageSize`,"\u66F4\u65B0\u5206\u9875\u5927\u5C0F")):(t("dataRef",`$s.${o}Http.dataRef.value`,"\u6570\u636E\u7ED3\u679C"),t("run",`$s.${o}Http.run`,"\u6267\u884C\u8BF7\u6C42"),t("runAsync",`$s.${o}Http.runAsync`,"async\u6267\u884C\u8BF7\u6C42"),t("refresh",`$s.${o}Http.refresh`,"\u5237\u65B0"),t("refreshAsync",`$s.${o}Http.refreshAsync`,"async\u5237\u65B0"))});const n=e(a,de)({...u.meta});let i=!1,p=!0;e(a,N)(()=>u.meta,()=>{p=!1,n.value={...u.meta}}),e(a,N)(n,()=>{p?i=!0:p=!0},{deep:!0});const{getCurElement:m,updateMeta:c}=e(s,se)(),d=m();return e(a,ve)(()=>{i&&e(U,me).info({title:"\u63D0\u793A",content:"\u662F\u5426\u4FDD\u5B58HTTP\u914D\u7F6E\uFF1F",positiveText:"\u4FDD\u5B58",negativeText:"\u53D6\u6D88",autoFocus:!1,showIcon:!1,onPositiveClick(){c(d,n.value)}})}),()=>e(a,l)("div",{class:"un-p-12px"},[e(a,l)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,l)(e(r,re),{label:"\u5E94\u7528\u573A\u666F"},{default:()=>[e(a,l)(e(r,oe),{value:n.value.scene??"normal",onUpdateValue:t=>{t==="page"&&(n.value.method="post"),n.value.scene=t},options:[{label:"\u666E\u901A\u8BF7\u6C42",value:"normal"},{label:"\u8868\u5355\u63D0\u4EA4",value:"submit"},{label:"\u5206\u9875\u67E5\u8BE2",value:"page"}]},null)]}),e(a,l)(e(r,ne),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,l)(e(r,ue),{value:n.value.scopeKey,"onUpdate:value":t=>n.value.scopeKey=t},null)]})]),e(a,l)(e(r,te),{label:"\u63A5\u53E3\u5730\u5740"},{default:()=>[e(a,l)(e(r,le),{value:n.value.url,"onUpdate:value":t=>n.value.url=t},null)]}),e(a,l)(e(r,ae),{label:"\u8BF7\u6C42\u65B9\u6CD5"},{default:()=>[e(a,l)(e(r,ee),{value:n.value.method,"onUpdate:value":t=>n.value.method=t,options:[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}]},null)]}),n.value.scene!=="page"?e(a,l)(e(s,v),{label:"\u8BF7\u6C42\u914D\u7F6E",value:n.value.config,"onUpdate:value":t=>n.value.config=t,defaultValue:`(() => {
  return {
    // axios\u8BF7\u6C42\u914D\u7F6E
  }
})
`},null):e(a,l)(e(s,v),{label:"\u9ED8\u8BA4\u5206\u9875\u6761\u6570",value:n.value.defaultPageSize,"onUpdate:value":t=>n.value.defaultPageSize=t},null),e(a,l)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[n.value.scene!=="normal"?e(a,l)(e(s,v),{label:"\u8868\u5355\u6A21\u578B",value:n.value.model,"onUpdate:value":t=>n.value.model=t,defaultValue:`(() => ({
  // username: null,
}))`},null):null,n.value.scene==="page"?e(a,l)(e(s,v),{label:"\u53C2\u6570\u5904\u7406",value:n.value.query,"onUpdate:value":t=>n.value.query=t,defaultValue:`((query) => {
  return {
    // ...query
  }
})
`},null):null,n.value.scene==="submit"?e(a,l)(e(s,v),{label:"\u8868\u5355\u9A8C\u8BC1",value:n.value.validate,"onUpdate:value":t=>n.value.validate=t,defaultValue:`(() => $s.formInst.validate())
`},null):null,e(a,l)(e(s,v),{label:"ready\u6761\u4EF6",value:n.value.ready,"onUpdate:value":t=>n.value.ready=t,defaultValue:`(() => {
  // return
})
`},null),e(a,l)(e(s,v),{label:"\u524D\u7F6E\u4E8B\u4EF6",value:n.value.onBefore,"onUpdate:value":t=>n.value.onBefore=t,defaultValue:`(() => {
  //
})
`},null),e(a,l)(e(s,v),{label:"\u5B8C\u6210\u4E8B\u4EF6",value:n.value.onFinally,"onUpdate:value":t=>n.value.onFinally=t,defaultValue:`(() => {
  //
})
`},null),e(a,l)(e(s,v),{label:"\u9519\u8BEF\u4E8B\u4EF6",value:n.value.onError,"onUpdate:value":t=>n.value.onError=t,defaultValue:`(() => {
  //
})
`},null),e(a,l)(e(s,v),{label:"\u6210\u529F\u4E8B\u4EF6",value:n.value.onSuccess,"onUpdate:value":t=>n.value.onSuccess=t,defaultValue:`(() => {
  //
})
`},null),e(a,l)(e(r,Z),{label:"\u5B9A\u65F6\u6267\u884C"},{default:()=>[e(a,l)(e(r,Y),{value:n.value.pollingInterval,"onUpdate:value":t=>n.value.pollingInterval=t},{suffix:()=>"ms"})]})]),e(a,l)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,l)(e(r,X),{label:"\u624B\u52A8\u6267\u884C"},{default:()=>[e(a,l)(e(r,J),{value:n.value.manual??n.value.scene==="submit",onUpdateValue:t=>n.value.manual=t},null)]}),e(a,l)(e(r,Q),{label:"\u81EA\u52A8\u5237\u65B0"},{default:()=>[e(a,l)(e(r,W),{value:n.value.autoRefresh??!0,onUpdateValue:t=>n.value.autoRefresh=t},null)]})]),e(a,l)(e(r,G),{block:!0,type:"primary",size:"small",onClick:()=>{i=!1,Object.assign(u.meta,n.value)}},{default:()=>[e(a,I)("\u786E\u5B9A")]})])}}),be=e(a,$)({props:{meta:{type:Object,required:!0}},setup(u){const{dataRef:n}=e(g,ie)(async()=>(await e(g,ce)({url:"/api/report/dataSource/options",method:"get"})).data.content),i=e(a,pe)(()=>e(g,fe)(n.value,"id"));return e(s,y)(p=>{const m=u.meta.scopeKey??"";p("loadingRef",`$s.${m}Http.loadingRef.value`,"\u52A0\u8F7D\u72B6\u6001"),p("dataRef",`$s.${m}Http.dataRef.value`,"\u6570\u636E\u7ED3\u679C"),p("run",`$s.${m}Http.run`,"\u6267\u884C\u8BF7\u6C42"),p("runAsync",`$s.${m}Http.runAsync`,"async\u6267\u884C\u8BF7\u6C42"),p("refresh",`$s.${m}Http.refresh`,"\u5237\u65B0"),p("refreshAsync",`$s.${m}Http.refreshAsync`,"async\u5237\u65B0")}),()=>{var p,m,c,d,t;return e(a,l)("div",{class:"un-px-12px un-pt-12px"},[e(a,l)(e(r,D),{label:"\u4F5C\u7528\u57DF"},{default:()=>[e(a,l)(e(r,j),{value:u.meta.scopeKey,"onUpdate:value":o=>u.meta.scopeKey=o},null)]}),e(a,l)(e(r,M),{label:"\u6570\u636E\u6E90"},{default:()=>[e(a,l)(e(r,L),{value:u.meta.dataSourceId,"onUpdate:value":o=>u.meta.dataSourceId=o,options:n.value,labelField:"name",valueField:"id",filterable:!0},null)]}),((p=i.value[u.meta.dataSourceId])==null?void 0:p.type)===2?e(a,l)(e(r,z),{label:"\u6570\u636E\u5E93"},{default:()=>[e(a,l)(e(r,_),{value:u.meta.dbName,"onUpdate:value":o=>u.meta.dbName=o},null)]}):null,((m=i.value[u.meta.dataSourceId])==null?void 0:m.type)===1?e(a,l)(e(s,v),{label:"\u67E5\u8BE2SQL",value:u.meta.sql,"onUpdate:value":o=>u.meta.sql=o,defaultValue:`((...args) => {
  // return 'SELECT * FROM test'
})
`},null):((c=i.value[u.meta.dataSourceId])==null?void 0:c.type)===2?e(a,l)(e(s,v),{label:"\u67E5\u8BE2\u6761\u4EF6",value:u.meta.query,"onUpdate:value":o=>u.meta.query=o,defaultValue:`((...args) => {
  // return \`{ find: "test", filter: {}, skip: 0, limit: 10 }\`
})
`},null):((d=i.value[u.meta.dataSourceId])==null?void 0:d.type)===3?e(a,l)(e(s,v),{label:"\u67E5\u8BE2key",value:u.meta.keys,"onUpdate:value":o=>u.meta.keys=o,defaultValue:`((...args) => {
  // return ['key1', 'key2']
})
`},null):((t=i.value[u.meta.dataSourceId])==null?void 0:t.type)===4?e(a,l)(e(s,v),{label:"\u8BF7\u6C42\u914D\u7F6E",value:u.meta.http,"onUpdate:value":o=>u.meta.http=o,defaultValue:`((...args) => {
  // return {
  //   headers: {},
  //   params: {},
  //   body: {},
  // }
})
`},null):null,e(a,l)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,l)(e(s,v),{label:"ready\u6761\u4EF6",value:u.meta.ready,"onUpdate:value":o=>u.meta.ready=o,defaultValue:`(() => {
// return
})
`},null),e(a,l)(e(s,v),{label:"\u5B8C\u6210\u4E8B\u4EF6",value:u.meta.onFinally,"onUpdate:value":o=>u.meta.onFinally=o,defaultValue:`(() => {
//
})
`},null),e(a,l)(e(s,v),{label:"\u9519\u8BEF\u4E8B\u4EF6",value:u.meta.onError,"onUpdate:value":o=>u.meta.onError=o,defaultValue:`(() => {
//
})
`},null),e(a,l)(e(s,v),{label:"\u6210\u529F\u4E8B\u4EF6",value:u.meta.onSuccess,"onUpdate:value":o=>u.meta.onSuccess=o,defaultValue:`(() => {
//
})
`},null),e(a,l)(e(r,O),{label:"\u624B\u52A8\u6267\u884C"},{default:()=>[e(a,l)(e(r,K),{value:u.meta.manual,onUpdateValue:o=>u.meta.manual=o},null)]}),e(a,l)(e(r,C),{label:"\u81EA\u52A8\u5237\u65B0"},{default:()=>[e(a,l)(e(r,A),{value:u.meta.autoRefresh??!0,onUpdateValue:o=>u.meta.autoRefresh=o},null)]}),e(a,l)(e(r,B),{label:"\u5B9A\u65F6\u6267\u884C"},{default:()=>[e(a,l)(e(r,T),{value:u.meta.pollingInterval,"onUpdate:value":o=>u.meta.pollingInterval=o},{suffix:()=>"ms"})]})])])}}}),ye=e(a,$)({props:{meta:{type:Object,required:!0}},setup(u){e(s,y)(d=>{const t=u.meta.scopeKey??"";d("ws",`$s.${t}WS`,"websocket\u5B9E\u4F8B")});const n=b(()=>u.meta,"scopeKey"),i=b(()=>u.meta,"host"),p=b(()=>u.meta,"path"),m=b(()=>u.meta,"retryCount"),c=b(()=>u.meta,"retryInterval");return()=>e(a,l)("div",{class:"un-px-12px un-pt-12px"},[e(a,l)(e(r,P),{label:"\u7EC4\u4EF6\u6807\u8BC6"},{default:()=>[e(a,l)(e(r,k),null,{default:()=>[e(a,l)(e(r,q),{value:n.v,"onUpdate:value":d=>n.v=d,onBlur:n.on},null),e(a,l)(e(r,E),null,{default:()=>[e(a,I)("WS")]})]})]}),e(a,l)(e(r,w),{label:"\u4E3B\u673A"},{default:()=>[e(a,l)(e(r,x),{value:i.v,"onUpdate:value":d=>i.v=d,onBlur:i.on},null)]}),e(a,l)(e(r,H),{label:"\u8DEF\u5F84"},{default:()=>[e(a,l)(e(r,F),{value:p.v,"onUpdate:value":d=>p.v=d,onBlur:p.on},null)]}),e(a,l)(e(s,v),{label:"\u6D88\u606F\u4E8B\u4EF6",value:u.meta.onMessage,"onUpdate:value":d=>u.meta.onMessage=d,defaultValue:`((data, event) => {
  //
})
`},null),e(a,l)("div",{class:"un-grid un-grid-cols-2 un-gap-x-8px"},[e(a,l)(e(r,V),{label:"\u91CD\u8BD5\u95F4\u9694"},{default:()=>[e(a,l)(e(r,R),{value:c.v,"onUpdate:value":d=>c.v=d,onBlur:c.on,min:0},null)]}),e(a,l)(e(r,S),{label:"\u91CD\u8BD5\u6B21\u6570"},{default:()=>[e(a,l)(e(r,h),{value:m.v,"onUpdate:value":d=>m.v=d,onBlur:m.on,min:0},null)]}),e(a,l)(e(s,v),{label:"\u662F\u5426\u6FC0\u6D3B",value:u.meta.active,"onUpdate:value":d=>u.meta.active=d,defaultValue:`(() => {
  //
})
`},null),e(a,l)(e(s,v),{label:"\u6253\u5F00\u4E8B\u4EF6",value:u.meta.onOpen,"onUpdate:value":d=>u.meta.onOpen=d,defaultValue:`((event) => {
  //
})
`},null),e(a,l)(e(s,v),{label:"\u5173\u95ED\u4E8B\u4EF6",value:u.meta.onClose,"onUpdate:value":d=>u.meta.onClose=d,defaultValue:`((event) => {
  //
})
`},null),e(a,l)(e(s,v),{label:"\u9519\u8BEF\u4E8B\u4EF6",value:u.meta.onError,"onUpdate:value":d=>u.meta.onError=d,defaultValue:`((event) => {
  //
})
`},null)])])}})});export{be as DataSource,ge as Http,ye as WebSocket,Ie as __tla};
