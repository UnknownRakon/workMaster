(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(14)),o=n(3),j=n(9),l=n.n(j),b=n(11),u=n(12),d=n.n(u),h=n(5),O=(n(18),n(0));var m=function(e){var t=e.name,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){console.log(t),d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){s(e.data)}))}),[]);var i,j=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i=""===t?Object(O.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}):Object(O.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[r.map((function(e){return Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/login",className:"nav-link ml-6",onClick:j,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(O.jsx)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)(h.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(O.jsx)("div",{className:"collapse navbar-collapse",children:Object(O.jsx)("div",{className:"navbar-nav",children:i})})]})})};var p=function(e){var t=e.match,n=e.SetTypeGlobal,c=Object(a.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];return n(t.params.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(O.jsx)("li",{class:"list-group-item",children:Object(O.jsx)(h.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},x=n(2),f=(n(62),function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(a.useState)(!1),d=Object(o.a)(u,2),h=d[0],m=d[1],p=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:n,password:i})});case 3:m(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return h?Object(O.jsx)(x.a,{to:"/"}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsxs)("form",{onSubmit:p,children:[Object(O.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),v=function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){Object(b.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t(a.name),s(a.name);case 8:case"end":return e.stop()}}),e)})))()})),Object(O.jsx)("div",{children:r?"Hi "+r:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})},g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),h=d[0],m=d[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),v=f[0],g=f[1],y=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:h})});case 3:setTimeout((function(){return g(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return v?Object(O.jsx)(x.a,{to:"login"}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsxs)("form",{onSubmit:y,children:[Object(O.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return m(e.target.value)}}),Object(O.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,c=Object(a.useState)({}),r=Object(o.a)(c,2),s=r[0],i=r[1],j=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(e){i(e.data)}))}),[j]),Object(O.jsxs)("div",{children:[Object(O.jsx)(h.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(O.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(O.jsx)("strong",{children:s.title})]}),Object(O.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(O.jsx)("strong",{children:s.salary})]}),Object(O.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("p",{children:s.content}),Object(O.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var N=function(e){var t=e.match,n=e.type,c=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(a.useState)([]),b=Object(o.a)(l,2),u=b[0],m=b[1],p=t.params.id;return c(i.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(p,"/")}).then((function(e){j(e.data),m(e.data.posts)}))}),[p]),Object(O.jsxs)("div",{children:[Object(O.jsx)(h.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(O.jsxs)("p",{children:["Category: ",Object(O.jsx)("strong",{children:i.name})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==n?Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h4",{children:e.title}),Object(O.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(O.jsx)(h.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var S=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(o.a)(r,2),j=s[0],l=s[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),d=u[0],S=u[1];return Object(O.jsxs)("div",{className:"App",children:[console.log(d),Object(O.jsxs)(h.a,{children:[Object(O.jsx)(m,{name:d}),Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{path:"/",exact:!0,render:function(e){return Object(O.jsx)(v,Object(i.a)({setNameGlobal:S},e))}}),Object(O.jsx)(x.b,{path:"/login",exact:!0,render:function(e){return Object(O.jsx)(f,Object(i.a)({},e))}}),Object(O.jsx)(x.b,{path:"/register",exact:!0,render:function(e){return Object(O.jsx)(g,Object(i.a)({},e))}}),Object(O.jsx)(x.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(O.jsx)(y,Object(i.a)({category:j},e))}}),Object(O.jsx)(x.b,{path:"/category/:id",exact:!0,render:function(e){return Object(O.jsx)(N,Object(i.a)({setCategoryGlobal:l,type:n},e))}}),Object(O.jsx)(x.b,{path:"/type/:id",exact:!0,render:function(e){return Object(O.jsx)(p,Object(i.a)({SetTypeGlobal:c},e))}})]})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.b1d4dab2.chunk.js.map