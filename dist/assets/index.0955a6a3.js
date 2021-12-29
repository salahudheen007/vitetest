import{o as d,c as i,a as t,r as l,b as p,p as u,d as v,e as f,f as C,K as b,F as w,g as h,h as x}from"./vendor.3b3f5ac8.js";const I=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};I();var _=(e,o)=>{const s=e.__vccOpts||e;for(const[n,a]of o)s[n]=a;return s};const S={name:"CardText"},F={class:"card-text"},k=t("h4",{class:"card-title"}," Shift the overall look and feel by adding these wonderful touches to furniture in your home ",-1),A=t("p",{class:"card-txt"}," Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I\u2019ve got some simple tips to help you make any room feel complete. ",-1),B=[k,A];function T(e,o,s,n,a,r){return d(),i("div",F,B)}var N=_(S,[["render",T]]);const L={name:"CardBody",components:{CardText:N}},O={class:"card-body"};function E(e,o,s,n,a,r){const c=l("card-text"),m=l("card-share");return d(),i("div",O,[p(c),p(m)])}var j=_(L,[["render",E],["__scopeId","data-v-efca9112"]]),K="/deploying-article=preview-component/assets/drawers.d23eb7a8.jpg";const M={name:"CardImage"},P=e=>(u("data-v-9c598808"),e=e(),v(),e),V=P(()=>t("img",{src:K,alt:""},null,-1)),q=[V];function D(e,o,s,n,a,r){return d(),i("div",null,q)}var H=_(M,[["render",D],["__scopeId","data-v-9c598808"]]),J="/deploying-article=preview-component/assets/avatar-michelle.96badac3.jpg",g="/deploying-article=preview-component/assets/icon-share.a511b0ce.svg";const R={name:"CardFooter"},$=e=>(u("data-v-52dcd8e0"),e=e(),v(),e),z={class:"avatar"},G=$(()=>t("div",{class:"avatar-image"},[t("img",{src:J,class:"avatar-img",alt:"avatar"})],-1)),Q=$(()=>t("div",{class:"avatar-name"},[t("h5",null,"Michelle Appleton"),t("p",null,"28 Jun 2020")],-1)),U={class:"avatar-share"};function W(e,o,s,n,a,r){return d(),i("div",z,[G,Q,t("div",U,[t("button",null,[t("img",{src:g,alt:"share",onClick:o[0]||(o[0]=c=>e.$emit("CardShare"))})])])])}var X=_(R,[["render",W],["__scopeId","data-v-52dcd8e0"]]),Y="/deploying-article=preview-component/assets/icon-facebook.59a06be6.svg",Z="/deploying-article=preview-component/assets/icon-twitter.f5744368.svg",ee="/deploying-article=preview-component/assets/icon-pinterest.b07d28d7.svg";const te={name:"CardShare"},ae=e=>(u("data-v-ef05e1fc"),e=e(),v(),e),oe={class:"card-share"},re=ae(()=>t("div",{class:"share-icons"},[t("p",null,"S H A R E"),t("ul",null,[t("li",null,[t("img",{src:Y,alt:"fb"})]),t("li",null,[t("img",{src:Z,alt:"twitter"})]),t("li",null,[t("img",{src:ee,alt:"pinterest"})])])],-1)),se={class:"share-logo"};function ne(e,o,s,n,a,r){return d(),i("div",oe,[re,t("div",se,[t("button",null,[t("img",{src:g,alt:"share",onClick:o[0]||(o[0]=c=>e.$emit("CardFooter"))})])])])}var ce=_(te,[["render",ne],["__scopeId","data-v-ef05e1fc"]]);const de={name:"App",components:{CardImage:H,CardBody:j,CardFooter:X,CardShare:ce},data:function(){return{alive:"CardFooter"}},methods:{changeTab(){this.alive==="CardFooter"?this.alive="CardShare":this.alive="CardFooter"}}},ie=e=>(u("data-v-cd82d52a"),e=e(),v(),e),_e={class:"container"},le={class:"body"},pe=ie(()=>t("div",{class:"attribution"},[h(" Challenge by "),t("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),h(". Coded by "),t("a",{href:"#"},"Salahudheen"),h(". ")],-1));function ue(e,o,s,n,a,r){const c=l("CardImage"),m=l("card-body");return d(),i(w,null,[t("div",_e,[p(c),t("div",le,[p(m),(d(),f(b,null,[(d(),f(C(e.alive),{onCardShare:o[0]||(o[0]=y=>r.changeTab()),onCardFooter:o[1]||(o[1]=y=>r.changeTab())}))],1024))])]),pe],64)}var ve=_(de,[["render",ue],["__scopeId","data-v-cd82d52a"]]);x(ve).mount("#app");
