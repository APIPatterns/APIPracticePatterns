"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"/",sidebar_position:1,sidebar_label:"Welcome",sidebar_class_name:"green"},s="Patterns for creating an API Stewardship Practice",i={unversionedId:"intro",id:"intro",title:"Patterns for creating an API Stewardship Practice",description:"Thanks for taking a few moments of your time to stop by this repo where we'll be talking about everything it takes to build and deliver APIs at scale. Patterns have impacted many areas of software development and are a great way to express common ideas. In this repo, we are going to try and use this methodology to express what we've learned as we work to put the tools and processes in place to try and help other developers build and deliver better APIs.These patterns reflect our journey of working to build and deliver cloud APIs and SDKs at scale. They are a key ingredient to how we can scale to deliver thousands of APIs and hundreds of SDKs across the Azure surface area.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/APIPracticePatterns/",draft:!1,editUrl:"https://github.com/APIPatterns/APIPracticePatterns/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,sidebar_label:"Welcome",sidebar_class_name:"green"},sidebar:"tutorialSidebar",next:{title:"Design a Hammer",permalink:"/APIPracticePatterns/Design-a-Hammer"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"patterns-for-creating-an-api-stewardship-practice"},"Patterns for creating an API Stewardship Practice"),(0,n.kt)("p",null,"Thanks for taking a few moments of your time to stop by this repo where we'll be talking about everything it takes to build and deliver APIs at scale. Patterns have impacted many areas of software development and are a great way to express common ideas. In this repo, we are going to try and use this methodology to express what we've learned as we work to put the tools and processes in place to try and help other developers build and deliver better APIs.These patterns reflect our journey of working to build and deliver cloud APIs and SDKs at scale. They are a key ingredient to how we can scale to deliver thousands of APIs and hundreds of SDKs across the Azure surface area."),(0,n.kt)("p",null,"Many are based on working on Microsoft's Azure API Stewardship board. They try to capture our experiences and the essence of what we've learned from working with out Azure service teams, talking with customers and our field teams. More and more though, they are reflecting conversations we've had with friends and colleagues in the industry who are passionate about APIs--and passionate about helping people."),(0,n.kt)("p",null,"We hope these patterns are a starting point for a larger conversation with architects, developers, and managers who are building and delivering a large number of services and struggle with how to scale while still creating a great developer experience."),(0,n.kt)("p",null,"We have a long way to go and this is definitely a work in progress! In many ways, we are still at the outset of our journey. We are constantly learning, uncovering new requirements, and figuring out what to do with edge cases."),(0,n.kt)("p",null,"It's our hope that you will join us on this journey. Please share your experiences (and patterns) through pull requests, add comments through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/APIPatterns/APIPracticePatterns/issues"},"issues"),", or start a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/APIPatterns/APIPracticePatterns/discussions"},"discussion"),"."),(0,n.kt)("p",null,"Together, we can all ",(0,n.kt)("a",{parentName:"p",href:"/APIPracticePatterns/grow-an-orchard"},"grow an orchard"),"."))}p.isMDXComponent=!0}}]);