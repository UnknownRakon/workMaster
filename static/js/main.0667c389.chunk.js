(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{34:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(28),s=c.n(r),i=(c(34),c(12)),j=c(8),l=c(10),b=c.n(l),o=c(4),d=(c(16),c(0));var h=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){n(e.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(o.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(d.jsx)("div",{className:"collapse navbar-collapse",children:Object(d.jsxs)("div",{className:"navbar-nav",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:c.map((function(e){return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})}))}),Object(d.jsxs)("ul",{className:"navbar-text",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/login",className:"nav-link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})]})})]})})};var O=function(e){var t=e.match,c=e.SetTypeGlobal,n=Object(a.useState)([]),r=Object(j.a)(n,2),s=r[0],i=r[1];return c(t.params.id),Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(d.jsx)("li",{class:"list-group-item",children:Object(d.jsx)(o.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},u=c(2),m=(c(59),function(){return Object(d.jsx)("div",{children:Object(d.jsx)("main",{className:"form-signin",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),x=function(){return Object(d.jsx)("div",{children:"Home"})},p=function(){return Object(d.jsx)("div",{children:"Register"})};var f=function(e){var t=e.match,c=e.category,n=Object(a.useState)({}),r=Object(j.a)(n,2),s=r[0],i=r[1],l=t.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:{pathname:"/category/".concat(c),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(d.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(d.jsx)("strong",{children:s.title})]}),Object(d.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(d.jsx)("strong",{children:s.salary})]}),Object(d.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(d.jsx)("p",{children:s.content}),Object(d.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var v=function(e){var t=e.match,c=e.type,n=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(j.a)(r,2),i=s[0],l=s[1],h=Object(a.useState)([]),O=Object(j.a)(h,2),u=O[0],m=O[1],x=t.params.id;return n(i.id),Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(x,"/")}).then((function(e){l(e.data),m(e.data.posts)}))}),[x]),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:{pathname:"/type/".concat(c),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(d.jsxs)("p",{children:["Category: ",Object(d.jsx)("strong",{children:i.name})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==c?Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(d.jsx)(o.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var g=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({}),s=Object(j.a)(r,2),l=s[0],b=s[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(d.jsx)(x,Object(i.a)({},e))}}),Object(d.jsx)(u.a,{path:"/login",exact:!0,render:function(e){return Object(d.jsx)(m,Object(i.a)({},e))}}),Object(d.jsx)(u.a,{path:"/register",exact:!0,render:function(e){return Object(d.jsx)(p,Object(i.a)({},e))}}),Object(d.jsx)(u.a,{path:"/posts/:id",exact:!0,render:function(e){return Object(d.jsx)(f,Object(i.a)({category:l},e))}}),Object(d.jsx)(u.a,{path:"/category/:id",exact:!0,render:function(e){return Object(d.jsx)(v,Object(i.a)({setCategoryGlobal:b,type:c},e))}}),Object(d.jsx)(u.a,{path:"/type/:id",exact:!0,render:function(e){return Object(d.jsx)(O,Object(i.a)({SetTypeGlobal:n},e))}})]})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),y()}},[[60,1,2]]]);
//# sourceMappingURL=main.0667c389.chunk.js.map