(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{33:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(8)),j=a(10),o=a.n(j),d=a(9),l=(a(25),a(1));var b=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(t){n(t.data)}))}),[]),Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(l.jsx)(d.b,{to:{pathname:"/type/".concat(t.id,"/"),fromDashboard:!1},className:"nav-link",children:t.name},t.id)}))})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=Object(c.useState)([]),b=Object(r.a)(j,2),h=b[0],p=b[1],u=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){i(t.data),p(t.data.posts)}))}),[u]),Object(l.jsxs)("div",{children:["Category with id ",s.id,Object(l.jsxs)("p",{children:["Category: ",Object(l.jsx)("strong",{children:s.name})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"row",children:h.map((function(t){return Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("h4",{children:t.title}),Object(l.jsx)("p",{children:t.content}),Object(l.jsx)("p",{children:t.id}),Object(l.jsx)(d.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var p=function(t){var e=t.match,a=Object(c.useState)([]),n=Object(r.a)(a,2),s=n[0],i=n[1],j=Object(c.useState)({}),b=Object(r.a)(j,2),h=b[0],p=b[1],u=Object(c.useState)([]),O=Object(r.a)(u,2),m=O[0],x=O[1],v=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){i(t.data)}))}),[]),Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(h,"/")}).then((function(t){x(t.data.posts)}))}),[h]),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("ul",{class:"list-group",children:s.map((function(t){return Object(l.jsx)("li",{class:"list-group-item",onClick:p(t.id),children:t.name},t.id)}))}),console.log(m)]}),Object(l.jsxs)("div",{children:["Category with id ",s.id,Object(l.jsxs)("p",{children:["Category: ",Object(l.jsx)("strong",{children:s.name})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"row",children:m.map((function(t){return t.blog_type.id===v?Object(l.jsxs)("div",{className:"col-md-4",children:[Object(l.jsx)("h4",{children:t.title}),Object(l.jsx)("p",{children:t.content}),Object(l.jsx)("p",{children:t.id}),Object(l.jsx)(d.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id):null}))})]})]})},u=a(2);var O=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(t){i(t.data)}))}),[j]),Object(l.jsxs)("div",{children:["Post with id ",s.id,Object(l.jsxs)("p",{children:["Title ",Object(l.jsx)("strong",{children:s.title})]})]})};var m=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/posts/:id",exact:!0,component:O}),Object(l.jsx)(u.a,{path:"/category/:id",exact:!0,component:h}),Object(l.jsx)(u.a,{path:"/type/:id",exact:!0,component:p})]})]})})},x=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),x()}},[[58,1,2]]]);
//# sourceMappingURL=main.c9605966.chunk.js.map