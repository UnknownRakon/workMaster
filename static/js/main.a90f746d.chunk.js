(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(13)),o=n(3),j=n(11),l=n.n(j),b=n(5),u=(n(18),n(0));var d=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/type/"}).then((function(e){c(e.data)}))}),[]),Object(u.jsx)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(b.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(u.jsx)("div",{className:"collapse navbar-collapse",children:Object(u.jsx)("div",{className:"navbar-nav",children:Object(u.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[n.map((function(e){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})})})]})})};var h=function(e){var t=e.match,n=e.SetTypeGlobal,c=Object(a.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];return n(t.params.id),Object(a.useEffect)((function(){l()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(u.jsx)("li",{class:"list-group-item",children:Object(u.jsx)(b.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},O=n(2),p=(n(61),n(10)),m=n.n(p),x=n(14),f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(a.useState)(!1),b=Object(o.a)(l,2),d=b[0],h=b[1],p=function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:n,password:i})});case 3:h(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return d?Object(u.jsx)(O.a,{to:"/"}):Object(u.jsx)("div",{children:Object(u.jsx)("main",{className:"form-signin",children:Object(u.jsxs)("form",{onSubmit:p,children:[Object(u.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(u.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})},g=function(){return Object(a.useEffect)((function(){Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worker.std-1378.ist.mospolytech.ru/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})))()})),Object(u.jsx)("div",{children:"Home"})},v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(a.useState)(""),b=Object(o.a)(l,2),d=b[0],h=b[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),g=f[0],v=f[1],y=function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:d})});case 3:v(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g?Object(u.jsx)(O.a,{to:"login"}):Object(u.jsx)("div",{children:Object(u.jsx)("main",{className:"form-signin",children:Object(u.jsxs)("form",{onSubmit:y,children:[Object(u.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,c=Object(a.useState)({}),r=Object(o.a)(c,2),s=r[0],i=r[1],j=t.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/blogpost/".concat(j,"/")}).then((function(e){i(e.data)}))}),[j]),Object(u.jsxs)("div",{children:[Object(u.jsx)(b.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(u.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(u.jsx)("strong",{children:s.title})]}),Object(u.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(u.jsx)("strong",{children:s.salary})]}),Object(u.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(u.jsx)("p",{children:s.content}),Object(u.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var N=function(e){var t=e.match,n=e.type,c=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],j=s[1],d=Object(a.useState)([]),h=Object(o.a)(d,2),O=h[0],p=h[1],m=t.params.id;return c(i.id),Object(a.useEffect)((function(){l()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/".concat(m,"/")}).then((function(e){j(e.data),p(e.data.posts)}))}),[m]),Object(u.jsxs)("div",{children:[Object(u.jsx)(b.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(u.jsxs)("p",{children:["Category: ",Object(u.jsx)("strong",{children:i.name})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"row",children:O.map((function(e,t){return console.log(e),e.blog_type==n?Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(u.jsx)(b.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var S=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(o.a)(r,2),j=s[0],l=s[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(d,{}),Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.b,{path:"/",exact:!0,render:function(e){return Object(u.jsx)(g,Object(i.a)({},e))}}),Object(u.jsx)(O.b,{path:"/login",exact:!0,render:function(e){return Object(u.jsx)(f,Object(i.a)({},e))}}),Object(u.jsx)(O.b,{path:"/register",exact:!0,render:function(e){return Object(u.jsx)(v,Object(i.a)({},e))}}),Object(u.jsx)(O.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(u.jsx)(y,Object(i.a)({category:j},e))}}),Object(u.jsx)(O.b,{path:"/category/:id",exact:!0,render:function(e){return Object(u.jsx)(N,Object(i.a)({setCategoryGlobal:l,type:n},e))}}),Object(u.jsx)(O.b,{path:"/type/:id",exact:!0,render:function(e){return Object(u.jsx)(h,Object(i.a)({SetTypeGlobal:c},e))}})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.a90f746d.chunk.js.map