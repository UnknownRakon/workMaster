(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(14)),o=n(3),l=n(9),j=n.n(l),b=n(11),u=n(12),d=n.n(u),O=n(5),h=(n(18),n(0));var m=function(e){var t=e.name,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){s(e.data)}))}),[]);var i,l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i=void 0===t?Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}):Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[r.map((function(e){return Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/login",className:"nav-link ml-6",onClick:l,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(h.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:[console.log(t),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(O.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsx)("div",{className:"collapse navbar-collapse",children:Object(h.jsx)("div",{className:"navbar-nav",children:i})})]})]})};var p=function(e){var t=e.match,n=e.SetTypeGlobal,c=Object(a.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];return n(t.params.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(h.jsx)("li",{class:"list-group-item",children:Object(h.jsx)(O.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},f=n(2),x=(n(62),function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],O=Object(a.useState)(!1),m=Object(o.a)(O,2),p=m[0],x=m[1];Object(a.useEffect)((function(){return t(void 0)}));var v=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:r,password:u})});case 3:x(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return p?Object(h.jsx)(f.a,{to:"/"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{onSubmit:v,children:[Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),v=function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t(a.name),s(a.name);case 8:case"end":return e.stop()}}),e)})))()})),Object(h.jsx)("div",{children:r?"Hi "+r:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})},g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),O=d[0],m=d[1],p=Object(a.useState)(!1),x=Object(o.a)(p,2),v=x[0],g=x[1],y=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:O})});case 3:setTimeout((function(){return g(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return v?Object(h.jsx)(f.a,{to:"login"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{onSubmit:y,children:[Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,c=Object(a.useState)({}),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)({}),j=Object(o.a)(l,2),b=j[0],u=j[1],m=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(m,"/")}).then((function(e){i(e.data)}))}),[m]),Object(h.jsxs)("div",{children:[u(s.owner),Object(h.jsx)(O.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(h.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(h.jsx)("strong",{children:s.title})]}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(h.jsx)("strong",{children:s.salary})]}),Object(h.jsxs)("p",{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c:",console.log(b)]}),Object(h.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(h.jsx)("p",{children:s.content}),Object(h.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var N=function(e){var t=e.match,n=e.type,c=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),u=b[0],m=b[1],p=t.params.id;return c(i.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(p,"/")}).then((function(e){l(e.data),m(e.data.posts)}))}),[p]),Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(h.jsxs)("p",{children:["Category: ",Object(h.jsx)("strong",{children:i.name})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==n?Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(h.jsx)(O.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var S=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(o.a)(r,2),l=s[0],j=s[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),d=u[0],S=u[1];return Object(h.jsxs)("div",{className:"App",children:[console.log(d),Object(h.jsxs)(O.a,{children:[Object(h.jsx)(m,{name:d}),Object(h.jsxs)(f.d,{children:[Object(h.jsx)(f.b,{path:"/",exact:!0,render:function(e){return Object(h.jsx)(v,Object(i.a)({setNameGlobal:S},e))}}),Object(h.jsx)(f.b,{path:"/login",exact:!0,render:function(e){return Object(h.jsx)(x,Object(i.a)({setNameGlobal:S},e))}}),Object(h.jsx)(f.b,{path:"/register",exact:!0,render:function(e){return Object(h.jsx)(g,Object(i.a)({},e))}}),Object(h.jsx)(f.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(h.jsx)(y,Object(i.a)({category:l},e))}}),Object(h.jsx)(f.b,{path:"/category/:id",exact:!0,render:function(e){return Object(h.jsx)(N,Object(i.a)({setCategoryGlobal:j,type:n},e))}}),Object(h.jsx)(f.b,{path:"/type/:id",exact:!0,render:function(e){return Object(h.jsx)(p,Object(i.a)({SetTypeGlobal:c},e))}})]})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.c7f85487.chunk.js.map