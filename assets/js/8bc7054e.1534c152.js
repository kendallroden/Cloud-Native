"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[672],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9284:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const s={title:"Ask The Expert"},o="Ask The Expert",i={type:"mdx",permalink:"/Cloud-Native/serverless-september/AskTheExpert",source:"@site/src/pages/serverless-september/AskTheExpert.md",title:"Ask The Expert",description:"What is it?",frontMatter:{title:"Ask The Expert"}},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"How do I ask questions?",id:"how-do-i-ask-questions",level:2},{value:"ATE Calendar",id:"ate-calendar",level:2}],p={toc:l};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ask-the-expert"},"Ask The Expert"),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/shows/Ask-the-Expert/"},"Ask the Expert")," is a series of scheduled 30-minute ",(0,a.kt)("strong",{parentName:"p"},"LIVE")," broadcasts where you can connect with experts to get your questions answered! You an also visit the site later, to view sessions on demand - and view answers to questions you may have submitted ahead of time."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1805).Z,width:"3840",height:"2160"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-do-i-ask-questions"},"How do I ask questions?"),(0,a.kt)("p",null,"We want you to attend and engage with the experts ",(0,a.kt)("strong",{parentName:"p"},"LIVE")," - and ask questions on the chat there."),(0,a.kt)("p",null,"However, we ",(0,a.kt)("strong",{parentName:"p"},"encourage you to submit your questions ahead of time")," where possible, so we can the experts get through as many questions as possible during the segment. This also allows others to ",(0,a.kt)("em",{parentName:"p"},"upvote")," posted questions (to indicate priority) and gives us a chance to post responses to questions that did not make the live broadcast due to time constraints."),(0,a.kt)("admonition",{title:"TO SUBMIT YOUR QUESTION EARLY:",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Open a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure/Cloud-Native/issues/new/choose"},"New Issue")," on the repo."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++"},"Get Started")," - uses the ",(0,a.kt)("strong",{parentName:"li"},"\ud83c\udfa4 Ask the Expert!")," template."),(0,a.kt)("li",{parentName:"ul"},"Fill in the template details, and submit!"))),(0,a.kt)("p",null,"You can also look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/Cloud-Native/issues?q=+is%3Aissue+label%3A%22ask+the+expert%22+"},"already posted questions")," and \ud83d\udc4d\ud83c\udffd the question - or add a reply with more context or comments - to indicate your interest."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ate-calendar"},"ATE Calendar"),(0,a.kt)("p",null,"The table shows the currently scheduled sessions - click the ",(0,a.kt)("strong",{parentName:"p"},"REGISTER TO ATTEND")," link to save the date and get a reminder about the event. Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/ATEonLearn"},(0,a.kt)("strong",{parentName:"a"},"ATE : Serverless September"))," page to see the latest schedule and updated details for these sessions."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("img",{parentName:"td",src:"https://docs.microsoft.com/en-us/events/learn-events/Ask-the-expert/media/sept15-thumbnail.png",alt:null})," ",(0,a.kt)("strong",{parentName:"td"},"Sep 15, 2022")," : Functions-as-a-Service (FaaS)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"It is time to focus on the pieces of code that matter most to you while Azure Functions handles the rest. Discuss with the experts on how to execute event-driven serverless code functions with an end-to-end development experience using Azure Functions. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://reactor.microsoft.com/reactor/events/17000/"},(0,a.kt)("strong",{parentName:"a"},"REGISTER TO ATTEND")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("img",{parentName:"td",src:"https://docs.microsoft.com/en-us/events/learn-events/Ask-the-expert/media/sept29-thumbnail.png",alt:null}),(0,a.kt)("strong",{parentName:"td"},"Sep 29, 2022")," : Containers & Microservices"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("br",null),(0,a.kt)("br",null)," Azure Container Apps is an app-centric service, empowering developers to focus on the differentiating business logic of their apps rather than on cloud infrastructure management. Discuss with the experts on how to build and deploy modern apps and microservices using serverless containers with Azure Container Apps. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://reactor.microsoft.com/reactor/events/17004/"},(0,a.kt)("strong",{parentName:"a"},"REGISTER TO ATTEND")))))))}u.isMDXComponent=!0},1805:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/serverless-ate-29943f512f24e8ea02c833cbec940ff0.png"}}]);