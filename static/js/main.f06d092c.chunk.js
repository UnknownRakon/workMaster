(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{33:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(8)),j=a(10),d=a.n(j),o=a(9),b=(a(25),a(1));var l=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(b.jsx)(o.b,{to:{pathname:"/type/".concat(t.id,"/"),fromDashboard:!1},className:"nav-link",children:t.name},t.id)}))})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=Object(c.useState)([]),l=Object(r.a)(j,2),h=l[0],p=l[1],O=e.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(O,"/")}).then((function(t){i(t.data),p(t.data.posts)}))}),[O]),Object(b.jsxs)("div",{children:["Category with id ",s.id,Object(b.jsxs)("p",{children:["Category: ",Object(b.jsx)("strong",{children:s.name})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:h.map((function(t){return Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("p",{children:t.id}),Object(b.jsx)(o.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var p=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=Object(c.useState)([]),l=Object(r.a)(j,2),h=l[0],p=l[1],O=e.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/".concat(O,"/")}).then((function(t){i(t.data),p(t.data.posts)}))}),[O]),Object(b.jsxs)("div",{children:["Type with id ",s.id,Object(b.jsxs)("p",{children:["Type: ",Object(b.jsx)("strong",{children:s.name})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:h.map((function(t){return Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("p",{children:t.id}),Object(b.jsx)(o.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})},O=a(2);var u=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=e.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(t){i(t.data)}))}),[j]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})};var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(l,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/posts/:id",exact:!0,component:u}),Object(b.jsx)(O.a,{path:"/category/:id",exact:!0,component:h}),Object(b.jsx)(O.a,{path:"/type/:id",exact:!0,component:p})]})]})})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),m()}},[[58,1,2]]]);
//# sourceMappingURL=main.f06d092c.chunk.js.map