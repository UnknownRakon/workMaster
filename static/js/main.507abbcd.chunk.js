(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{34:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),r=a(28),s=a.n(r),i=(a(34),a(17)),j=a(8),l=a(10),o=a.n(l),b=a(9),d=(a(26),a(1));var h=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/type/"}).then((function(t){n(t.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(d.jsx)(b.b,{to:{pathname:"/type/".concat(t.id,"/"),fromDashboard:!1},className:"nav-link",children:t.name},t.id)}))})})]})})};var u=function(t){var e=t.match,a=t.type,n=Object(c.useState)({}),r=Object(j.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)([]),h=Object(j.a)(l,2),u=h[0],p=h[1],O=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/".concat(O,"/")}).then((function(t){i(t.data),p(t.data.posts)}))}),[O]),Object(d.jsxs)("div",{children:["Category with id ",s.id,Object(d.jsxs)("p",{children:["Category: ",Object(d.jsx)("strong",{children:s.name})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:u.map((function(t,e){return console.log(t),t.blog_type==a?Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.content}),Object(d.jsx)("p",{children:t.id}),Object(d.jsx)(b.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},e):null}))})]})};var p=function(t){var e=t.match,a=t.SetTypeGlobal,n=Object(c.useState)([]),r=Object(j.a)(n,2),s=r[0],i=r[1];return a(e.params.id),Object(c.useEffect)((function(){o()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/"}).then((function(t){i(t.data)}))}),[]),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("ul",{class:"list-group",children:s.map((function(t){return Object(d.jsx)("li",{class:"list-group-item",children:Object(d.jsx)(b.b,{to:{pathname:"/category/".concat(t.id),fromDashboard:!1},children:t.name})},t.id)}))})})})},O=a(2);var m=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(j.a)(a,2),r=n[0],s=n[1],i=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/blogpost/".concat(i,"/")}).then((function(t){s(t.data)}))}),[i]),Object(d.jsxs)("div",{children:["Post with id ",r.id,Object(d.jsxs)("p",{children:["Title ",Object(d.jsx)("strong",{children:r.title})]})]})};var x=function(){var t=Object(c.useState)({}),e=Object(j.a)(t,2),a=e[0],n=e[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/posts/:id",exact:!0,component:m}),Object(d.jsx)(O.a,{path:"/category/:id",exact:!0,render:function(t){return Object(d.jsx)(u,Object(i.a)({type:a},t))}}),Object(d.jsx)(O.a,{path:"/type/:id",exact:!0,render:function(t){return Object(d.jsx)(p,Object(i.a)({SetTypeGlobal:n},t))}})]})]})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),c(t),n(t),r(t),s(t)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()}},[[59,1,2]]]);
//# sourceMappingURL=main.507abbcd.chunk.js.map