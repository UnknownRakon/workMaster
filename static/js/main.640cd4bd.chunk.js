(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{34:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(28),s=a.n(r),i=(a(34),a(12)),j=a(8),l=a(10),b=a.n(l),o=a(4),d=(a(16),a(0));var h=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){b()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/type/"}).then((function(e){n(e.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(o.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsxs)("div",{className:"navbar-nav",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[a.map((function(e){return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/login",className:"nav-link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(d.jsx)("span",{class:"navbar-text"})]})})]})})};var O=function(e){var t=e.match,a=e.SetTypeGlobal,n=Object(c.useState)([]),r=Object(j.a)(n,2),s=r[0],i=r[1];return a(t.params.id),Object(c.useEffect)((function(){b()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(d.jsx)("li",{class:"list-group-item",children:Object(d.jsx)(o.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},u=a(2),p=(a(59),function(){return Object(d.jsx)("div",{children:Object(d.jsx)("main",{className:"form-signin",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),m=function(){return Object(d.jsx)("div",{children:"Home"})},x=function(){return Object(d.jsx)("div",{children:"Register"})};var f=function(e){var t=e.match,a=e.category,n=Object(c.useState)({}),r=Object(j.a)(n,2),s=r[0],i=r[1],l=t.params.id;return Object(c.useEffect)((function(){b()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:{pathname:"/category/".concat(a),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(d.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(d.jsx)("strong",{children:s.title})]}),Object(d.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(d.jsx)("strong",{children:s.salary})]}),Object(d.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(d.jsx)("p",{children:s.content}),Object(d.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var v=function(e){var t=e.match,a=e.type,n=e.setCategoryGlobal,r=Object(c.useState)({}),s=Object(j.a)(r,2),i=s[0],l=s[1],h=Object(c.useState)([]),O=Object(j.a)(h,2),u=O[0],p=O[1],m=t.params.id;return n(i.id),Object(c.useEffect)((function(){b()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/".concat(m,"/")}).then((function(e){l(e.data),p(e.data.posts)}))}),[m]),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:{pathname:"/type/".concat(a),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(d.jsxs)("p",{children:["Category: ",Object(d.jsx)("strong",{children:i.name})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==a?Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(d.jsx)(o.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var g=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),s=Object(j.a)(r,2),l=s[0],b=s[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(d.jsx)(m,Object(i.a)({},e))}}),Object(d.jsx)(u.a,{path:"/login",exact:!0,render:function(e){return Object(d.jsx)(p,Object(i.a)({},e))}}),Object(d.jsx)(u.a,{path:"/register",exact:!0,render:function(e){return Object(d.jsx)(x,Object(i.a)({},e))}}),Object(d.jsx)(u.a,{path:"/posts/:id",exact:!0,render:function(e){return Object(d.jsx)(f,Object(i.a)({category:l},e))}}),Object(d.jsx)(u.a,{path:"/category/:id",exact:!0,render:function(e){return Object(d.jsx)(v,Object(i.a)({setCategoryGlobal:b,type:a},e))}}),Object(d.jsx)(u.a,{path:"/type/:id",exact:!0,render:function(e){return Object(d.jsx)(O,Object(i.a)({SetTypeGlobal:n},e))}})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),y()}},[[60,1,2]]]);
//# sourceMappingURL=main.640cd4bd.chunk.js.map