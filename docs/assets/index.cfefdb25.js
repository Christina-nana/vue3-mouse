import{r as u,o as a,a as f,d,c as m,t as l,u as c,b as p,e as y}from"./vendor.ade46287.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};g();function v(){let s=u(0),o=u(0);function r(n){s.value=n.pageX,o.value=n.pageY}return a(()=>{window.addEventListener("mousemove",r)}),f(()=>{window.removeEventListener("mousemove",()=>{})}),{x:s,y:o}}const h=d({setup(s){let{x:o,y:r}=v();return(n,e)=>(p(),m("h1",null,l(c(o))+":"+l(c(r)),1))}});y(h).mount("#app");