(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{33:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(8)),o=a(10),j=a.n(o),l=a(9),d=(a(25),a(1));var b=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(t){n(t.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsx)("div",{className:"navbar-nav",children:a.map((function(t){return Object(d.jsx)(l.b,{to:{pathname:"/type/".concat(t.id,"/"),fromDashboard:!1},className:"nav-link",children:t.name},t.id)}))})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)([]),b=Object(r.a)(o,2),h=b[0],u=b[1],p=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(p,"/")}).then((function(t){i(t.data),u(t.data.posts)}))}),[p]),Object(d.jsxs)("div",{children:["Category with id ",s.id,Object(d.jsxs)("p",{children:["Category: ",Object(d.jsx)("strong",{children:s.name})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:h.map((function(t){return Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.content}),Object(d.jsx)("p",{children:t.id}),Object(d.jsx)(l.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]},t.id)}))})]})};var u=function(t){var e=t.match,a=Object(c.useState)([]),n=Object(r.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)([]),l=Object(r.a)(o,2),b=l[0];return l[1],e.params.id,Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){i(t.data)}))}),[]),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-3",children:[Object(d.jsx)("ul",{class:"list-group",children:s.map((function(t){return Object(d.jsx)("li",{class:"list-group-item",children:t.name},t.id)}))}),console.log(b)]})})},p=a(2);var O=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],o=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(o,"/")}).then((function(t){i(t.data)}))}),[o]),Object(d.jsxs)("div",{children:["Post with id ",s.id,Object(d.jsxs)("p",{children:["Title ",Object(d.jsx)("strong",{children:s.title})]})]})};var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/posts/:id",exact:!0,component:O}),Object(d.jsx)(p.a,{path:"/category/:id",exact:!0,component:h}),Object(d.jsx)(p.a,{path:"/type/:id",exact:!0,component:u})]})]})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),v()}},[[58,1,2]]]);
//# sourceMappingURL=main.c5e7bc17.chunk.js.map