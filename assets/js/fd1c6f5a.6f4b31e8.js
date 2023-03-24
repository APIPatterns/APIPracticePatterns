"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},s="Roads, gates, & roundabouts",i={unversionedId:"roads-gates-roundabouts",id:"roads-gates-roundabouts",title:"Roads, gates, & roundabouts",description:"One of the things we strive for in Azure is a clean, consistent, and intuitive API across the entire set of services. In the early days of Azure, this was a much easier challenge. However, as Azure grew rapidly, it seemed that there was a new service team every day! And these teams built their APIs just differently enough to cause friction in the developer experience and additional challenges when building SDKs. Sound familiar?",source:"@site/docs/roads-gates-roundabouts.md",sourceDirName:".",slug:"/roads-gates-roundabouts",permalink:"/APIPracticePatterns/roads-gates-roundabouts",draft:!1,editUrl:"https://github.com/APIPatterns/APIPracticePatterns/docs/roads-gates-roundabouts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/APIPracticePatterns/references"},next:{title:"Tend the garden",permalink:"/APIPracticePatterns/tend-the-garden"}},c={},d=[{value:"Educate. Enable. Empower.",id:"educate-enable-empower",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roads-gates--roundabouts"},"Roads, gates, & roundabouts"),(0,a.kt)("p",null,"One of the things we strive for in Azure is a clean, consistent, and intuitive API across the entire set of services. In the early days of Azure, this was a much easier challenge. However, as Azure grew rapidly, it seemed that there was a new service team every day! And these teams built their APIs just differently enough to cause friction in the developer experience and additional challenges when building SDKs. Sound familiar?"),(0,a.kt)("p",null,"We addressed it by establishing a Review Board that would approve an API definition before it was allowed to be released. However, we encountered several challenges with this approach. First, Azure continued to grow. It wasn't just that we continued to add more and more services, but the capability--and the API surface area--of existing services expanded. Second, as this growth happened, service teams became larger and more geographically dispersed. Third, and this is the biggest challenge, service teams viewed this as a check box--a step in the process necessary for a release. This meant that when service teams came to a review, it was ",(0,a.kt)("em",{parentName:"p"},"at the end")," of their development cycle."),(0,a.kt)("p",null,"It was not uncommon for the architects and engineers that deeply understand APIs to find issues with the API. Sometimes these were minor, e.g. specifying a default value or range incorrectly. Often, they were the unaware of how constructs, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", manifested itself across different programming languages. However, there were also bigger issues, for example using ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," to create resources in a non-idempotent manner, that could lead to unexpected behavior and the dreaded support call."),(0,a.kt)("p",null,"Because service teams came to the Review Board ",(0,a.kt)("em",{parentName:"p"},"after")," their service was built and their API created, these challenges made it difficult for them to incorporate recommendations and changes that would significantly improve the API and overall developer experience. Creating an approval gate that teams had to pass through before they could release their service resulted in constantly creating exceptions, inconsistent APIs, and more importantly frustration for everyone involved."),(0,a.kt)("p",null,"We needed to find another way."),(0,a.kt)("h2",{id:"educate-enable-empower"},"Educate. Enable. Empower."))}p.isMDXComponent=!0}}]);