(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{33:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(8)),l=a(10),j=a.n(l),d=a(9),b=(a(25),a(0));var h=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsx)("div",{className:"navbar-nav",children:a.map((function(e){return Object(b.jsx)(d.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)}))})})]})})};var o=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)([]),h=Object(r.a)(l,2),o=h[0],x=h[1],O=t.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(O,"/")}).then((function(e){i(e.data),x(e.data.posts)}))}),[O]),Object(b.jsxs)("div",{children:["Category with id ",s.id,Object(b.jsxs)("p",{children:["Category: ",Object(b.jsx)("strong",{children:s.name})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:o.map((function(e){return Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("p",{children:e.content}),Object(b.jsx)("p",{children:e.id}),Object(b.jsx)(d.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},e.id)}))})]})};var x=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)([]),h=Object(r.a)(l,2),o=h[0],x=h[1],O=t.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/type/".concat(O,"/")}).then((function(e){i(e.data),x(e.data.posts)}))}),[O]),Object(b.jsxs)("div",{children:["Type with id ",s.id,Object(b.jsxs)("p",{children:["Type: ",Object(b.jsx)("strong",{children:s.name})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:o.map((function(e){return Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("p",{children:e.content}),Object(b.jsx)("p",{children:e.id}),Object(b.jsx)(d.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},e.id)}))}),Object(b.jsxs)("div",{className:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark",style:"width: 280px;",children:[Object(b.jsx)("a",{href:"/",className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",children:Object(b.jsx)("span",{className:"fs-4",children:"Sidebar"})}),Object(b.jsx)("hr",{}),Object(b.jsxs)("ul",{className:"nav nav-pills flex-column mb-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",className:"nav-link active",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",className:"nav-link text-white",children:"Dashboard"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",className:"nav-link text-white",children:"Orders"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",className:"nav-link text-white",children:"Products"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",className:"nav-link text-white",children:"Customers"})})]})]})]})},O=a(2);var p=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=t.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})};var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/posts/:id",exact:!0,component:p}),Object(b.jsx)(O.a,{path:"/category/:id",exact:!0,component:o}),Object(b.jsx)(O.a,{path:"/type/:id",exact:!0,component:x})]})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),u()}},[[58,1,2]]]);
//# sourceMappingURL=main.aa8c19ea.chunk.js.map