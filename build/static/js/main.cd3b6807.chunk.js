(this.webpackJsonpfitness_tracker_frontend=this.webpackJsonpfitness_tracker_frontend||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(4),s=n(1),c=n(18),a=n.n(c),i=(n(25),n(5)),o=n(7),u=n(0),l=function(e){var t=e.loggedIn,n=e.setLoggedIn,r=Object(i.f)();return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:" FitTogether"}),Object(u.jsxs)("div",{id:"nav-bar",children:[Object(u.jsx)(o.b,{to:"/routines",className:"navItem",children:"Public Routines"}),Object(u.jsx)(o.b,{to:"/myroutines",className:"navItem",children:"My Routines"}),Object(u.jsx)(o.b,{to:"/activities",className:"navItem",children:"Activities"}),t?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.b,{className:"navItem",onClick:function(e){e.preventDefault(),localStorage.removeItem("Token"),n(null),r.push("/")},children:"Log Out"})}):Object(u.jsx)(o.b,{to:"/",className:"navItem",children:"Log In"})]})]})},j=n(16),p=n(2),h=n.n(p),b=n(3),d="https://fitnesstrac-kr.herokuapp.com/api";function O(e,t){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(h.a.mark((function e(t,n){var r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.next=4,fetch(d+"/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var v="https://fitnesstrac-kr.herokuapp.com/api";function f(e,t){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(h.a.mark((function e(t,n){var r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v+"/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var g=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/routines",{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),k=g,y=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("Username"),n=localStorage.getItem("Token"),e.next=5,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/"+"".concat(t)+"/routines",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),w=y,N="https://fitnesstrac-kr.herokuapp.com/api";function C(){return(C=Object(b.a)(h.a.mark((function e(t,n,r){var s,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=localStorage.getItem("Token"),console.log(t,n,r),e.next=5,fetch(N+"/routines",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({name:t,goal:n,isPublic:r})});case 5:return c=e.sent,e.next=8,c.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var I=function(e,t,n){return C.apply(this,arguments)},S=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/activities",{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),T=S,R="https://fitnesstrac-kr.herokuapp.com/api";function P(){return(P=Object(b.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("Token"),console.log(t),console.log(n),e.next=6,fetch("".concat(R,"/activities"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({name:t,description:n})}).then((function(e){return e.json()})).then((function(e){console.log(e)}));case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var U=function(e,t){return P.apply(this,arguments)};var A=function(e){var t,n=e.username,c=e.password,a=e.setUsername,o=e.setPassword,l=e.setRegisterToken,p=e.registerToken,d=e.setLoggedIn,x=Object(i.f)(),v=Object(s.useState)(""),f=Object(r.a)(v,2),m=f[0],g=f[1],k=function(){var e=Object(b.a)(h.a.mark((function e(t){var r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O(n,c);case 4:!1===(r=e.sent).success?(a(""),o(""),g("")):(s=r.token,localStorage.setItem("Token",s),l(s),a(n),d(!1),localStorage.setItem("Username",n),console.log(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p&&x.push("/"),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"loginMenu"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c!==m?x.push("/message"):k(e)},children:[Object(u.jsxs)("div",{className:"signInMenuContent",children:[Object(u.jsxs)("div",{className:"signInInputs",children:[Object(u.jsx)("label",{children:"username"}),Object(u.jsx)("input",{name:"userName",required:!0,onChange:function(e){return a(e.target.value)},value:n})]}),Object(u.jsxs)("div",{className:"signInInputs",children:[Object(u.jsx)("label",{children:"password"}),Object(u.jsx)("input",(t={required:!0,name:"password",onChange:function(e){return o(e.target.value)},value:c},Object(j.a)(t,"required",!0),Object(j.a)(t,"type","password"),t)),Object(u.jsxs)("div",{className:"signInInputs",children:[Object(u.jsx)("label",{children:"confirm password"}),Object(u.jsx)("input",{required:!0,type:"password",value:m,onChange:function(e){return g(e.target.value)}})]})]})]}),Object(u.jsx)("button",{className:"signInButton",type:"submit",children:"Sign Up"})]})]})},L=function(e){var t=e.username,n=e.password,r=e.setUsername,s=e.setPassword,c=e.setUserToken,a=e.setLoggedIn,l=Object(i.f)(),j=function(){var e=Object(b.a)(h.a.mark((function e(s){var i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,f(t,n);case 4:(i=e.sent).error?l.push("/message"):(o=i.token,localStorage.setItem("Token",o),c(o),a(!0),r(t),localStorage.setItem("Username",t),l.push("/")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:j,children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{required:!0,placeholder:"Username",onChange:function(e){return r(e.target.value)},value:t})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{required:!0,name:"password",placeholder:"Password",type:"password",onChange:function(e){return s(e.target.value)},value:n})}),Object(u.jsx)("button",{type:"submit",children:"Sign In"}),Object(u.jsx)(o.b,{to:"/register",children:"Register"})]})})};var D=function(){return console.log(localStorage),Object(u.jsxs)("div",{className:"messageUnderHeader",children:[Object(u.jsx)("h3",{children:"This is an incorrect username or password."}),Object(u.jsx)(o.b,{to:"/",onClick:void localStorage.removeItem("message"),children:"Please try again"})]})},E=function(e){var t=e.username,n=e.password,r=e.setUsername,s=e.setPassword,c=e.setUserToken,a=e.loggedIn,l=e.setLoggedIn,j=Object(i.f)(),p=function(){var e=Object(b.a)(h.a.mark((function e(s){var a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,f(t,n);case 4:(a=e.sent).error?j.push("/message"):(i=a.token,localStorage.setItem("Token",i),c(i),l(!0),r(t),localStorage.setItem("Username",t),j.push("/")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:a?Object(u.jsx)("div",{className:"messageUnderHeader",children:Object(u.jsxs)("h3",{children:["Logged in as ",localStorage.getItem("Username")]})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"loginMenu"}),Object(u.jsx)("div",{className:"loginMenuContent",children:Object(u.jsxs)("form",{onSubmit:p,children:[Object(u.jsxs)("div",{className:"loginInputs",children:[Object(u.jsx)("h2",{children:"username"}),Object(u.jsx)("input",{className:"inputareas",onChange:function(e){return r(e.target.value)},value:t,label:"Username",name:"username",type:"text"})]}),Object(u.jsxs)("div",{className:"loginInputs",children:[Object(u.jsx)("h2",{children:"password"}),Object(u.jsx)("input",{className:"inputareas",onChange:function(e){return s(e.target.value)},value:n,label:"Password",name:"password",type:"password"})]})]})}),Object(u.jsx)("div",{className:"buttonContainer",children:Object(u.jsx)("button",{className:"loginButton",onClick:p,children:"Log In"})}),Object(u.jsxs)("div",{className:"signUpSection",children:[Object(u.jsx)("p",{children:" Don't have an account? "}),Object(u.jsx)(o.b,{to:"/register",className:"signUpLink",children:"Sign Up"})]})]})})},B=function(e){var t=e.setCreateRoutine,n=Object(s.useState)(""),c=Object(r.a)(n,2),a=c[0],i=c[1],o=Object(s.useState)(""),l=Object(r.a)(o,2),j=l[0],p=l[1],d=Object(s.useState)(!0),O=Object(r.a)(d,2),x=O[0],v=O[1];function f(){return(f=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,I(a,j,x);case 3:t(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v(t.target.value);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"createRoutine",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("button",{className:"closeMenu",onClick:function(){return t(!1)},children:"x"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"createInputs",children:[Object(u.jsx)("h2",{children:"Routine Name"}),Object(u.jsx)("input",{value:a,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"createInputs",children:[Object(u.jsx)("h2",{children:"Goal"}),Object(u.jsx)("input",{value:j,onChange:function(e){return p(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{children:"Make Public? "}),Object(u.jsxs)("span",{className:"ispublic-radio",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{htmlFor:"Yes",children:"Yes"}),Object(u.jsx)("input",{type:"radio",name:"isPublic",checked:"true"==x,id:"Yes",value:!0,onChange:m})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{htmlFor:"No",children:"No"}),Object(u.jsx)("input",{type:"radio",name:"isPublic",checked:"false"==x,value:!1,id:"No",onChange:m})]})]})]})}),Object(u.jsx)("button",{className:"createRoutinePublishButton",onClick:function(e){return f.apply(this,arguments)},children:"Create Routine"})]})]})})},F=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){try{Promise.all([k()]).then((function(e){var t=Object(r.a)(e,1)[0];c(t),console.log(t)}))}catch(e){console.log("ERROR",e)}}),[o]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"pageContainer",children:[Object(u.jsx)("h1",{className:"pageTitle",children:"Current Routines:"}),Object(u.jsx)("button",{className:"createButton",onClick:function(e){e.preventDefault(),l(!0)},children:"Create Routine"}),o&&Object(u.jsx)(B,{setCreateRoutine:l}),Object(u.jsx)("div",{children:n.map((function(e,t){return Object(u.jsxs)("div",{className:"singleActivity",children:[Object(u.jsxs)("h1",{children:["ROUTINE: ",e.name]}),Object(u.jsxs)("h2",{children:["GOAL: ",e.goal]}),Object(u.jsxs)("h3",{children:["BY USER: ",e.creatorName]})]},t)}))})]})})},M=function(e){var t=e.setCreateRoutine,n=Object(s.useState)(""),c=Object(r.a)(n,2),a=c[0],i=c[1],o=Object(s.useState)(""),l=Object(r.a)(o,2),j=l[0],p=l[1],d=Object(s.useState)(!0),O=Object(r.a)(d,2),x=O[0],v=O[1];function f(e){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v(t.target.value);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,I(a,j,x);case 3:return e.t0=t,e.next=6,w();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"createRoutine",children:[Object(u.jsx)("span",{children:"Create A Routine"}),Object(u.jsx)("form",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{placeholder:"Routine Name",value:a,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("input",{placeholder:"Routine Goal",value:j,onChange:function(e){return p(e.target.value)}}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{children:"Is Public "}),Object(u.jsxs)("span",{className:"ispublic-radio",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{htmlFor:"Yes",children:"Yes"}),Object(u.jsx)("input",{type:"radio",name:"isPublic",checked:"true"==x,id:"Yes",value:!0,onChange:f})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{htmlFor:"No",children:"No"}),Object(u.jsx)("input",{type:"radio",name:"isPublic",checked:"false"==x,value:!1,id:"No",onChange:f})]})]})]}),Object(u.jsx)("span",{children:Object(u.jsx)("button",{onClick:function(e){return g.apply(this,arguments)},children:"Create Routine"})})]})]})})]})},Y=function(e){var t=e.createRoutine,n=e.setCreateRoutine;return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.length){e.next=6;break}return e.t0=n,e.next=4,w();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"pageContainer",children:[Object(u.jsx)("h1",{className:"pageTitle",children:"My Routines:"}),t?Object(u.jsx)("div",{className:"routine-list-holder ",children:null===t||void 0===t?void 0:t.map((function(e){var t=e.goal,n=e.name,r=e.isPublic,s=e.id;return Object(u.jsxs)("div",{className:"routines-list",children:[Object(u.jsxs)("h1",{children:["ROUTINE: ",n]}),Object(u.jsxs)("h2",{children:["GOAL: ",t]}),Object(u.jsx)("h4",{children:r?"Public":"Private"})]},s)}))}):Object(u.jsx)(u.Fragment,{})]})})},q=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),n=t[0],c=(t[1],Object(s.useState)([])),a=Object(r.a)(c,2),i=a[0],o=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,w();case 5:t=e.sent,o(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(u.jsxs)("div",{className:"content-container",children:[Object(u.jsx)("div",{className:"container-right",children:Object(u.jsx)(M,{setCreateRoutine:o})}),Object(u.jsx)("div",{className:"container-left",children:Object(u.jsx)(Y,{setCreateRoutine:o,createRoutine:i})})]})},J=function(e){var t=e.setCreateActivity,n=Object(s.useState)(""),c=Object(r.a)(n,2),a=c[0],i=c[1],o=Object(s.useState)(""),l=Object(r.a)(o,2),j=l[0],p=l[1];function d(){return(d=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,U(a,j);case 3:t(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"createActivity",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("button",{className:"closeMenu",onClick:function(){return t(!1)},children:"x"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"createInputs",children:[Object(u.jsx)("h2",{children:"name"}),Object(u.jsx)("input",{value:a,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"createInputs",children:[Object(u.jsx)("h2",{children:"goal"}),Object(u.jsx)("input",{value:j,onChange:function(e){return p(e.target.value)}})]}),Object(u.jsx)("button",{className:"createActivityPublishButton",onClick:function(e){return d.apply(this,arguments)},children:"Create Activity"})]})]})})},G=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){try{Promise.all([T()]).then((function(e){var t=Object(r.a)(e,1)[0];c(t),console.log(t)}))}catch(e){console.log("ERROR",e)}}),[o]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"pageContainer",children:[Object(u.jsx)("h1",{className:"pageTitle",children:"Current Activities:"}),Object(u.jsx)("button",{className:"createButton",onClick:function(e){e.preventDefault(),l(!0)},children:"Create Activity"}),o&&Object(u.jsx)(J,{setCreateActivity:l}),Object(u.jsx)("div",{children:n.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"singleActivity",children:[Object(u.jsxs)("h2",{children:["NAME: ",e.name]}),Object(u.jsxs)("p",{children:["GOAL: ",e.description]}),Object(u.jsx)("hr",{})]})})}))})]})})},_=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),o=Object(r.a)(a,2),j=o[0],p=o[1],h=Object(s.useState)(""),b=Object(r.a)(h,2),d=b[0],O=b[1],x=Object(s.useState)(""),v=Object(r.a)(x,2),f=v[0],m=v[1],g=Object(s.useState)(""),k=Object(r.a)(g,2),y=k[0],w=k[1];return Object(s.useEffect)((function(){localStorage.getItem("Token")?c(!0):c(!1)}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(l,{loggedIn:n,setLoggedIn:c}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(E,{loggedIn:n,setLoggedIn:c,username:d,password:j,setUsername:O,setPassword:p,setRegisterToken:m,userToken:y,setUserToken:w})}),Object(u.jsx)(i.a,{path:"/register",children:Object(u.jsx)(A,{loggedIn:n,setLoggedIn:c,username:d,password:j,setUsername:O,setPassword:p,registerToken:f,setRegisterToken:m})}),Object(u.jsx)(i.a,{path:"/login",children:Object(u.jsx)(L,{loggedIn:n,setLoggedIn:c,username:d,password:j,setUsername:O,setPassword:p,setRegisterToken:m,userToken:y,setUserToken:w})}),Object(u.jsx)(i.a,{path:"/routines",children:Object(u.jsx)(F,{})}),Object(u.jsx)(i.a,{path:"/myroutines",children:Object(u.jsx)(q,{})}),Object(u.jsx)(i.a,{path:"/activities",children:Object(u.jsx)(G,{})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(D,{})})]})]})})};a.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(_,{})}),document.getElementById("app"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cd3b6807.chunk.js.map