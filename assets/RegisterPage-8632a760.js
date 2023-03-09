import{a as k,j as v,y as E,b as L,k as e,w as o,u,e as t,F,o as I,l as n,x as S,p as V,h as A,_ as f,A as N,E as T,C as D,v as O,r as $}from"./index-e1b4e266.js";import{v as C}from"./verify-fcd68c05.js";import{_ as B}from"./InputGroup-4e93787e.js";import{_ as U,a as M}from"./FormItem-a002c1ab.js";import{_ as j}from"./Input-90f12dff.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./format-length-c9d165c6.js";import"./get-eef5e00b.js";import"./use-merged-state-0e90f292.js";const _=r=>(V("data-v-2d6404aa"),r=r(),A(),r),W={class:"PageWrapper"},X={className:"logo-box"},q=["src"],G=_(()=>t("h2",{className:"title"},[t("div",null,"注册")],-1)),H={class:"input_hint_wrapper"},J={class:"input_hint"},K=_(()=>t("span",null," 提示",-1)),Q=_(()=>t("br",null,null,-1)),Y={class:"input_hint_wrapper"},Z={class:"input_hint"},ee=_(()=>t("span",null,"注意：",-1)),te=_(()=>t("span",null,"任何",-1)),oe=_(()=>t("br",null,null,-1)),ne=_(()=>t("span",null,"钓鱼邮件",-1)),se={class:"input_hint_wrapper"},ae={class:"input_hint"},le=k({__name:"RegisterPage",setup(r){const g=v(()=>f(()=>import("./XIcon-d6c5d7b7.js"),["assets/XIcon-d6c5d7b7.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/XIcon-dcf3bf82.css"])),w=v(()=>f(()=>import("./SendCode-12b6c232.js"),["assets/SendCode-12b6c232.js","assets/verify-fcd68c05.js","assets/index-e1b4e266.js","assets/index-48691192.css"])),P=v(()=>f(()=>import("./PageTitle-0db350a3.js"),["assets/PageTitle-0db350a3.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/PageTitle-a68b02f4.css"])),h=N();let m=E(!1);const s=E({Email:"",Code:"",EntrapmentCode:""}),y=async()=>{const d=C("Email",s.value.Email),a=C("Code",s.value.Code);if(d||a){window.$message.warning(d||a);return}m.value=!0;const l=await T({...D(s.value)});m.value=!1,l.Code>0?window.$notification.success({meta:l.Data,content:l.Msg,onClose(){h.replace("/Login")}}):l.Code==-13&&setTimeout(()=>{h.replace("/Login")},1e3)};return(d,a)=>{const l=j,c=O("RouterLink"),p=M,b=B,x=$,R=U;return I(),L(F,null,[e(u(P),null,{default:o(()=>[n("Register")]),_:1}),t("div",W,[t("div",X,[t("img",{className:"logo",src:u(S),alt:""},null,8,q)]),G,e(R,{ref:"loginForm",model:s.value,size:"small",class:"myForm"},{default:o(()=>[e(p,{class:"myForm__item"},{default:o(()=>[t("div",H,[e(l,{name:"Email",value:s.value.Email,"onUpdate:value":a[0]||(a[0]=i=>s.value.Email=i),inputProps:{autocomplete:"password"},placeholder:"请输入邮箱地址"},{prefix:o(()=>[e(u(g),{name:"MailOutlined"})]),_:1},8,["value"]),t("div",J,[K,n("：邮箱是您的身份凭证，请注意邮箱安全。 "),Q,n(" 可以在 "),e(c,{class:"link",to:"/Personal"},{default:o(()=>[n("个人中心")]),_:1}),n(" 进行管理。 ")])])]),_:1}),e(p,{class:"myForm__item"},{default:o(()=>[t("div",Y,[e(l,{name:"EntrapmentCode",value:s.value.EntrapmentCode,"onUpdate:value":a[1]||(a[1]=i=>s.value.EntrapmentCode=i),inputProps:{autocomplete:"password"},placeholder:"请输入防钓鱼码"},{prefix:o(()=>[e(u(g),{name:"VerifiedOutlined"})]),_:1},8,["value"]),t("div",Z,[ee,n("您收到的"),te,n("来自系统的邮件都会携带此防钓鱼码。 "),oe,n(" 否则可视为"),ne,n("。可在"),e(c,{class:"link",to:"/Personal"},{default:o(()=>[n("个人中心")]),_:1}),n("定期更换。 ")])])]),_:1}),e(p,{class:"myForm__item"},{default:o(()=>[t("div",se,[e(b,null,{default:o(()=>[e(l,{name:"Code",value:s.value.Code,"onUpdate:value":a[2]||(a[2]=i=>s.value.Code=i),inputProps:{autocomplete:"password"},placeholder:"请输入6位验证码",maxlength:6},null,8,["value"]),e(u(w),{Email:s.value.Email,Action:"注册",EntrapmentCode:s.value.EntrapmentCode},null,8,["Email","EntrapmentCode"])]),_:1}),t("div",ae,[e(c,{class:"link",to:"/About/EmailList"},{default:o(()=>[n("查看当前系统邮箱地址")]),_:1})])])]),_:1}),e(p,{class:"myForm__item"},{default:o(()=>[e(x,{class:"Submit",disabled:m.value,type:"primary",onClick:y},{default:o(()=>[n(" 注册 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"])])],64)}}});const fe=z(le,[["__scopeId","data-v-2d6404aa"]]);export{fe as default};
