import{a as T,j as f,y,J as L,b as _,k as e,w as t,u as C,e as i,f as g,F as k,aV as O,bJ as z,o as m,l as d,aX as $,g as h,_ as w,bK as U,C as P,bL as R,bM as W,r as G}from"./index-e1b4e266.js";import{v as M}from"./verify-fcd68c05.js";import{A}from"./index-443e836d.js";import{_ as J}from"./Avatar-7bb81999.js";import{_ as X,a as j}from"./FormItem-a002c1ab.js";import{_ as K}from"./Input-90f12dff.js";import{_ as q}from"./InputGroup-4e93787e.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./Tag-df9b9d21.js";import"./format-length-c9d165c6.js";import"./get-eef5e00b.js";import"./use-merged-state-0e90f292.js";const Q={class:"PageWrapper ManageEmail"},Y={className:"Personal__info"},Z={className:"Personal__NickName"},aa={className:"Personal__Email"},ea={class:"EmailWrapper"},oa={class:"Email"},la={key:0,class:"MainTxt"},sa={key:1,class:"Btn"},ta={class:"AddWrapper"},na=T({__name:"ManageEmail",setup(ia){const b=f(()=>w(()=>import("./PageTitle-0db350a3.js"),["assets/PageTitle-0db350a3.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/PageTitle-a68b02f4.css"])),N=f(()=>w(()=>import("./XIcon-d6c5d7b7.js"),["assets/XIcon-d6c5d7b7.js","assets/index-e1b4e266.js","assets/index-48691192.css","assets/XIcon-dcf3bf82.css"])),x=f(()=>w(()=>import("./SendCode-12b6c232.js"),["assets/SendCode-12b6c232.js","assets/verify-fcd68c05.js","assets/index-e1b4e266.js","assets/index-48691192.css"]));let n=y({});const r=()=>{z().then(l=>{l.Code>0&&(n.value=l.Data)}),a.value.Email="",a.value.EmailCode="",a.value.Password=""};let c=y(!1);var a=y({Email:"",EmailCode:"",Password:""});const V=async()=>{const l=M("Email",a.value.Email),o=M("Code",a.value.EmailCode);if(l||o){window.$message.warning(l||o);return}c.value=!0;const p=await U({...P(a.value)});c.value=!1,p.Code>0&&r()},B=l=>{A({Title:"邮件已发送至"+l,Email:l,EmailAction:"设置主要邮箱",IsPassword:!0,async OkBack(o){return a.value.Email=l,a.value.EmailCode=o.Code,a.value.Password=o.Password,R({...P(a.value)}).then(()=>{r()})}})},D=l=>{A({Title:"邮件已发送至主要邮箱",Email:n.value.Email,EmailAction:"删除邮箱"+l,IsPassword:!0,async OkBack(o){return a.value.Email=l,a.value.EmailCode=o.Code,a.value.Password=o.Password,W({...P(a.value)}).then(()=>{r()})}})};return L(()=>{r()}),(l,o)=>{const p=J,v=G,E=K,u=j,F=q,I=X;return m(),_(k,null,[e(C(b),null,{default:t(()=>[d("ManageEmail")]),_:1}),i("div",Q,[i("div",Y,[e(p,{round:"",size:70,src:n.value.Avatar},null,8,["src"]),i("div",Z,g(n.value.NickName),1),i("div",aa,g(n.value.Email),1)]),i("div",ea,[(m(!0),_(k,null,O(n.value.UserEmail,s=>(m(),_("div",{class:$(["Email_item",{Main:s==n.value.Email}])},[i("div",oa,g(s),1),s==n.value.Email?(m(),_("div",la,"主要")):h("",!0),s!=n.value.Email?(m(),_("div",sa,[e(v,{size:"tiny",type:"error",onClick:S=>D(s)},{default:t(()=>[d(" 删除 ")]),_:2},1032,["onClick"]),e(v,{size:"tiny",type:"primary",onClick:S=>B(s)},{default:t(()=>[d(" 设为主要 ")]),_:2},1032,["onClick"])])):h("",!0)],2))),256)),i("div",ta,[e(I,{ref:"loginForm",model:a.value,size:"small",class:"myForm"},{default:t(()=>[e(u,{class:"myForm__item"},{default:t(()=>[e(E,{name:"Email",value:a.value.Email,"onUpdate:value":o[0]||(o[0]=s=>a.value.Email=s),inputProps:{autocomplete:"password"},placeholder:"新增邮箱地址"},{prefix:t(()=>[e(C(N),{name:"MailOutlined"})]),_:1},8,["value"])]),_:1}),e(u,{class:"myForm__item"},{default:t(()=>[e(F,null,{default:t(()=>[e(E,{name:"EmailCode",value:a.value.EmailCode,"onUpdate:value":o[1]||(o[1]=s=>a.value.EmailCode=s),inputProps:{autocomplete:"password"},placeholder:"请输入6位验证码",maxlength:6},null,8,["value"]),e(C(x),{Email:a.value.Email,Action:"新增邮箱"},null,8,["Email"])]),_:1})]),_:1}),e(u,{class:"myForm__item"},{default:t(()=>[e(E,{value:a.value.Password,"onUpdate:value":o[2]||(o[2]=s=>a.value.Password=s),type:"password",name:"Password","show-password-on":"click",placeholder:"请输入密码",inputProps:{autocomplete:"password"}},null,8,["value"])]),_:1}),e(u,{class:"myForm__item"},{default:t(()=>[e(v,{class:"Submit",disabled:c.value,type:"primary",onClick:V},{default:t(()=>[d(" 新增邮箱 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"])])])])],64)}}});const ga=H(na,[["__scopeId","data-v-44863fce"]]);export{ga as default};