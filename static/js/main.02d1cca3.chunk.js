(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{32:function(a,t,e){},58:function(a,t,e){"use strict";e.r(t);var n=e(0),c=e.n(n),r=e(26),i=e.n(r),s=(e(32),e(12)),l=e(10),o=e.n(l),b=e(11),d=(e(51),e(1));var j=function(){var a=Object(n.useState)([]),t=Object(s.a)(a,2),e=t[0],c=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(a){c(a.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsx)("div",{className:"navbar-nav",children:e.map((function(a){return Object(d.jsx)(b.b,{to:{pathname:"/category/".concat(a.id,"/"),fromDashboard:!1},className:"nav-link",children:a.name},a.id)}))})})]})})};var u=function(a){var t=a.match,e=Object(n.useState)({}),c=Object(s.a)(e,2),r=c[0],i=c[1],l=t.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(l,"/")}).then((function(a){i(a.data)}))}),[l]),Object(d.jsxs)("div",{children:["Category with id ",r.id,Object(d.jsxs)("p",{children:["Category: ",Object(d.jsx)("strong",{children:r.name})]})]})},h=e(2);var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(h.c,{children:Object(d.jsx)(h.a,{path:"/category/:id",exact:!0,component:u})})]})})},v=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,59)).then((function(t){var e=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;e(a),n(a),c(a),r(a),i(a)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),v()}},[[58,1,2]]]);
//# sourceMappingURL=main.02d1cca3.chunk.js.map