(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(30),s=n.n(r),i=(n(36),n(13)),o=n(2),l=n(4),j=n.n(l),b=n(8),u=n(11),d=n.n(u),O=n(6),h=(n(18),n(0));var p=function(e){var t=e.name,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],s=a[1];Object(c.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/type/"}).then((function(e){s(e.data)}))}),[]);var i,l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worker.std-1378.ist.mospolytech.ru/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i=void 0===t?Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}):Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[r.map((function(e){return Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/myposts",className:"nav-link ml-6",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/newpost",className:"nav-link ml-6",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/login",className:"nav-link ml-6",onClick:l,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(h.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:[console.log(t),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(O.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsx)("div",{className:"collapse navbar-collapse",children:Object(h.jsx)("div",{className:"navbar-nav",children:i})})]})]})};var m=function(e){var t=e.match,n=e.SetTypeGlobal,a=Object(c.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1];return n(t.params.id),Object(c.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(h.jsx)("li",{class:"list-group-item",children:Object(h.jsx)(O.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},f=n(3),x=(n(62),function(e){var t=e.setNameGlobal,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],O=Object(c.useState)(!1),p=Object(o.a)(O,2),m=p[0],x=p[1];Object(c.useEffect)((function(){return t(void 0)}));var v=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:r,password:u})});case 3:x(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?Object(h.jsx)(f.a,{to:"/"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{onSubmit:v,children:[Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),v=function(e){var t=e.setNameGlobal,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worker.std-1378.ist.mospolytech.ru/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t(c.name),s(c.name);case 8:case"end":return e.stop()}}),e)})))()})),Object(h.jsx)("div",{children:r?"Hi "+r:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})},g=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),O=d[0],p=d[1],m=Object(c.useState)(!1),x=Object(o.a)(m,2),v=x[0],g=x[1],y=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:O})});case 3:setTimeout((function(){return g(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return v?Object(h.jsx)(f.a,{to:"login"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{onSubmit:y,children:[Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,a=Object(c.useState)({}),r=Object(o.a)(a,2),s=r[0],i=r[1],l=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(h.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(h.jsx)("strong",{children:s.title})]}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(h.jsx)("strong",{children:s.salary})]}),void 0!==s.owner?Object(h.jsxs)("p",{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c:",s.owner.email]}):null,Object(h.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(h.jsx)("p",{children:s.content}),Object(h.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var N=function(e){var t=e.match,n=e.type,a=e.setCategoryGlobal,r=Object(c.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(c.useState)([]),b=Object(o.a)(j,2),u=b[0],p=b[1],m=t.params.id;return a(i.id),Object(c.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/".concat(m,"/")}).then((function(e){l(e.data),p(e.data.posts)}))}),[m]),Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(h.jsxs)("p",{children:["Category: ",Object(h.jsx)("strong",{children:i.name})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==n?Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(h.jsx)(O.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var S=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/blogpost"}).then((function(e){a(e.data)}))}),[]);var r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worker.std-1378.ist.mospolytech.ru/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.email);case 7:case"end":return e.stop()}}),e)})))()})),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"row",children:n.map((function(e,t){return void 0!==e.owner&&e.owner.email===i?Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(h.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.content]})]},t):null}))})})},w=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(""),O=Object(o.a)(u,2),p=O[0],m=O[1],x=Object(c.useState)(""),v=Object(o.a)(x,2),g=v[0],y=v[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),w=S[0],C=S[1],T=Object(c.useState)(""),k=Object(o.a)(T,2),E=k[0],G=k[1],P=Object(c.useState)(""),D=Object(o.a)(P,2),q=D[0],J=D[1],F=Object(c.useState)(""),I=Object(o.a)(F,2),_=I[0],B=I[1],L=Object(c.useState)(!1),A=Object(o.a)(L,2),H=A[0],M=A[1];Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://worker.std-1378.ist.mospolytech.ru/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,B(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(c.useEffect)((function(){d()({method:"GET",url:"http://worker.std-1378.ist.mospolytech.ru/api/category/"}).then((function(e){a(e.data)}))}),[]);var R=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://worker.std-1378.ist.mospolytech.ru/api/blogpost/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,salary:p,content:g,link:w,blog_category:E,blog_type:q,owner:_})});case 3:setTimeout((function(){return M(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return H?Object(h.jsx)(f.a,{to:"myposts"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsx)("form",{onSubmit:R,children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"\u0421\u043e\u0439\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(h.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{onChange:function(e){return m(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(h.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{onChange:function(e){return C(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(h.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(h.jsx)("div",{class:"form-floating mb-3",children:Object(h.jsxs)("select",{onChange:function(e){return J(e.target.value)},class:"form-select mb-3",children:[Object(h.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(h.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(h.jsx)("div",{class:"form-floating mb-3",children:Object(h.jsxs)("select",{onChange:function(e){return G(e.target.value)},class:"form-select mb-3",children:[Object(h.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u043f\u043e\u0441\u0442\u0430"}),n.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(h.jsxs)("div",{class:"form-floating",children:[Object(h.jsx)("textarea",{onChange:function(e){return y(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(h.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})})})};var C=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),s=Object(o.a)(r,2),l=s[0],j=s[1],b=Object(c.useState)(""),u=Object(o.a)(b,2),d=u[0],C=u[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(p,{name:d}),Object(h.jsxs)(f.d,{children:[Object(h.jsx)(f.b,{path:"/",exact:!0,render:function(e){return Object(h.jsx)(v,Object(i.a)({setNameGlobal:C},e))}}),Object(h.jsx)(f.b,{path:"/login",exact:!0,render:function(e){return Object(h.jsx)(x,Object(i.a)({setNameGlobal:C},e))}}),Object(h.jsx)(f.b,{path:"/register",exact:!0,render:function(e){return Object(h.jsx)(g,Object(i.a)({},e))}}),Object(h.jsx)(f.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(h.jsx)(y,Object(i.a)({category:l},e))}}),Object(h.jsx)(f.b,{path:"/category/:id",exact:!0,render:function(e){return Object(h.jsx)(N,Object(i.a)({setCategoryGlobal:j,type:n},e))}}),Object(h.jsx)(f.b,{path:"/type/:id",exact:!0,render:function(e){return Object(h.jsx)(m,Object(i.a)({SetTypeGlobal:a},e))}}),Object(h.jsx)(f.b,{path:"/myposts",exact:!0,render:function(e){return Object(h.jsx)(S,Object(i.a)({},e))}}),Object(h.jsx)(f.b,{path:"/newpost",exact:!0,render:function(e){return Object(h.jsx)(w,Object(i.a)({},e))}})]})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),T()}},[[63,1,2]]]);
//# sourceMappingURL=main.4d3c2352.chunk.js.map