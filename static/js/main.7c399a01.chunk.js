(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(15)),o=n(10),j=n.n(o),l=n(13),b=n(3),u=n(11),d=n.n(u),h=n(5),p=(n(18),n(0));var O=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/type/"}).then((function(e){r(e.data)}))}),[]),Object(p.jsx)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(h.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(p.jsx)("div",{className:"collapse navbar-collapse",children:Object(p.jsx)("div",{className:"navbar-nav",children:Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[c.map((function(e){return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(h.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(h.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(h.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})})})]})})};var m=function(e){var t=e.match,n=e.SetTypeGlobal,c=Object(a.useState)([]),r=Object(b.a)(c,2),s=r[0],i=r[1];return n(t.params.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(p.jsx)("li",{class:"list-group-item",children:Object(p.jsx)(h.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},x=n(2),f=(n(62),function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(!1),d=Object(b.a)(u,2),h=d[0],O=d[1],m=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:n,password:i})});case 3:O(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return h?Object(p.jsx)(x.a,{to:"/"}):Object(p.jsx)("div",{children:Object(p.jsx)("main",{className:"form-signin",children:Object(p.jsxs)("form",{onSubmit:m,children:[Object(p.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(p.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),v=function(e){var t=e.name;return Object(p.jsx)("div",{children:t?"Hi "+t:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})},g=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(""),d=Object(b.a)(u,2),h=d[0],O=d[1],m=Object(a.useState)(!1),f=Object(b.a)(m,2),v=f[0],g=f[1],y=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:h})});case 3:g(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return v?Object(p.jsx)(x.a,{to:"login"}):Object(p.jsx)("div",{children:Object(p.jsx)("main",{className:"form-signin",children:Object(p.jsxs)("form",{onSubmit:y,children:[Object(p.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,c=Object(a.useState)({}),r=Object(b.a)(c,2),s=r[0],i=r[1],o=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/blogpost/".concat(o,"/")}).then((function(e){i(e.data)}))}),[o]),Object(p.jsxs)("div",{children:[Object(p.jsx)(h.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(p.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(p.jsx)("strong",{children:s.title})]}),Object(p.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(p.jsx)("strong",{children:s.salary})]}),Object(p.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(p.jsx)("p",{children:s.content}),Object(p.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var N=function(e){var t=e.match,n=e.type,c=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(b.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)([]),l=Object(b.a)(j,2),u=l[0],O=l[1],m=t.params.id;return c(i.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/".concat(m,"/")}).then((function(e){o(e.data),O(e.data.posts)}))}),[m]),Object(p.jsxs)("div",{children:[Object(p.jsx)(h.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(p.jsxs)("p",{children:["Category: ",Object(p.jsx)("strong",{children:i.name})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==n?Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("h4",{children:e.title}),Object(p.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(p.jsx)(h.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var S=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(b.a)(r,2),o=s[0],u=s[1],d=Object(a.useState)(""),S=Object(b.a)(d,2),w=S[0],C=S[1];return Object(a.useEffect)((function(){Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worker.std-1378.ist.mospolytech.ru/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),C(n.name);case 8:case"end":return e.stop()}}),e)})))()})),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(O,{name:w}),Object(p.jsx)(x.b,{path:"/",exact:!0,component:function(){return Object(p.jsx)(v,{name:w})}}),Object(p.jsx)(x.b,{path:"/login",component:function(){return Object(p.jsx)(f,{})}}),Object(p.jsx)(x.b,{path:"/register",component:function(){return Object(p.jsx)(g,{})}}),Object(p.jsxs)(x.d,{children:[Object(p.jsx)(x.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(p.jsx)(y,Object(i.a)({category:o},e))}}),Object(p.jsx)(x.b,{path:"/category/:id",exact:!0,render:function(e){return Object(p.jsx)(N,Object(i.a)({setCategoryGlobal:u,type:n},e))}}),Object(p.jsx)(x.b,{path:"/type/:id",exact:!0,render:function(e){return Object(p.jsx)(m,Object(i.a)({SetTypeGlobal:c},e))}})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.7c399a01.chunk.js.map