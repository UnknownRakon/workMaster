(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(13)),o=n(2),l=n(4),j=n.n(l),b=n(7),u=n(8),d=n.n(u),O=n(5),h=(n(18),n(0));var p=function(e){var t=e.name,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){s(e.data)}))}),[]);var i,l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i=void 0===t?Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}):Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[r.map((function(e){return Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/myposts",className:"nav-link ml-6",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/newpost",className:"nav-link ml-6",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(O.b,{to:"/login",className:"nav-link ml-6",onClick:l,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(h.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark mb-3",children:[console.log(t),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(O.b,{to:"/",className:"navbar-brand",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(h.jsx)("div",{className:"collapse navbar-collapse",children:Object(h.jsx)("div",{className:"navbar-nav",children:i})})]})]})};var f=function(e){var t=e.match,n=e.SetTypeGlobal,c=Object(a.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];return n(t.params.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(h.jsx)("li",{class:"list-group-item",children:Object(h.jsx)(O.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},m=n(3),x=(n(62),function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],O=Object(a.useState)(!1),p=Object(o.a)(O,2),f=p[0],x=p[1];Object(a.useEffect)((function(){return t(void 0)}));var g=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:r,password:u})});case 3:x(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f?Object(h.jsx)(m.a,{to:"/"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{onSubmit:g,children:[Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),g=function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t(a.name),s(a.name);case 8:case"end":return e.stop()}}),e)})))()})),Object(h.jsx)("div",{children:r?"Hi "+r:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})},v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),O=d[0],p=d[1],f=Object(a.useState)(!1),x=Object(o.a)(f,2),g=x[0],v=x[1],y=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:O})});case 3:setTimeout((function(){return v(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g?Object(h.jsx)(m.a,{to:"login"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsxs)("form",{onSubmit:y,children:[Object(h.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,c=Object(a.useState)({}),r=Object(o.a)(c,2),s=r[0],i=r[1],l=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(h.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(h.jsx)("strong",{children:s.title})]}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(h.jsx)("strong",{children:s.salary})]}),void 0!==s.owner?Object(h.jsxs)("p",{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c:",s.owner.email]}):null,Object(h.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(h.jsx)("p",{children:s.content}),Object(h.jsx)("a",{href:s.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]})};var S=function(e){var t=e.match,n=e.type,c=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),u=b[0],p=b[1],f=t.params.id;return c(i.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(f,"/")}).then((function(e){l(e.data),p(e.data.posts)}))}),[f]),Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(h.jsxs)("p",{children:["Category: ",Object(h.jsx)("strong",{children:i.name})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"row",children:u.map((function(e,t){return console.log(e),e.blog_type==n?Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(h.jsx)(O.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost"}).then((function(e){c(e.data)}))}),[]);var r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.email);case 7:case"end":return e.stop()}}),e)})))()})),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"row",children:n.map((function(e,t){return void 0!==e.owner&&e.owner.email===i?Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(h.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.content]}),Object(h.jsx)(O.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(h.jsx)(O.b,{to:{pathname:"/change/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})})},N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),O=Object(o.a)(u,2),p=O[0],f=O[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),v=g[0],y=g[1],S=Object(a.useState)(""),w=Object(o.a)(S,2),N=w[0],C=w[1],T=Object(a.useState)(""),k=Object(o.a)(T,2),E=k[0],P=k[1],G=Object(a.useState)(""),D=Object(o.a)(G,2),_=D[0],I=D[1],J=Object(a.useState)(""),q=Object(o.a)(J,2),F=q[0],B=q[1],L=Object(a.useState)(!1),A=Object(o.a)(L,2),H=A[0],M=A[1];Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,B(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){c(e.data)}))}),[]);var R=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,salary:p,content:v,link:N,blog_category:E,blog_type:_,owner:F})});case 3:setTimeout((function(){return M(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return H?Object(h.jsx)(m.a,{to:"myposts"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsx)("form",{onSubmit:R,children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"\u0421\u043e\u0439\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(h.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(h.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{onChange:function(e){return C(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(h.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(h.jsx)("div",{class:"form-floating mb-3",children:Object(h.jsxs)("select",{onChange:function(e){return I(e.target.value)},class:"form-select mb-3",children:[Object(h.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u0441\u0442\u0430"}),Object(h.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(h.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(h.jsx)("div",{class:"form-floating mb-3",children:Object(h.jsxs)("select",{onChange:function(e){return P(e.target.value)},class:"form-select mb-3",children:[Object(h.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u043f\u043e\u0441\u0442\u0430"}),n.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(h.jsxs)("div",{class:"form-floating",children:[Object(h.jsx)("textarea",{onChange:function(e){return y(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(h.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"\u0412\u044b\u043b\u043e\u0436\u0438\u0442\u044c"})]})})})})},C=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(o.a)(n,2),r=(c[0],c[1]),s=t.params.id,i=Object(a.useState)([]),l=Object(o.a)(i,2),u=l[0],O=l[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),x=f[0],g=f[1],v=Object(a.useState)(""),y=Object(o.a)(v,2),S=y[0],w=y[1],N=Object(a.useState)(""),C=Object(o.a)(N,2),T=C[0],k=C[1],E=Object(a.useState)(""),P=Object(o.a)(E,2),G=P[0],D=P[1],_=Object(a.useState)(""),I=Object(o.a)(_,2),J=I[0],q=I[1],F=Object(a.useState)(""),B=Object(o.a)(F,2),L=B[0],A=B[1],H=Object(a.useState)(""),M=Object(o.a)(H,2),R=M[0],U=M[1],z=Object(a.useState)(!1),K=Object(o.a)(z,2),Q=K[0],V=K[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(s,"/")}).then((function(e){r(e.data),g(e.data.title),w(e.data.salary),k(e.data.content),D(e.data.link),q(e.data.blog_category.id),A(e.data.blog_type.id)}))}),[s]),Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,U(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){O(e.data)}))}),[]);var W=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/".concat(s,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:x,salary:S,content:T,link:G,blog_category:J,blog_type:L,owner:R})});case 3:setTimeout((function(){return V(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Q?Object(h.jsx)(m.a,{to:"myposts"}):Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"form-signin",children:Object(h.jsx)("form",{onSubmit:W,children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"\u0421\u043e\u0439\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{value:x,onChange:function(e){return g(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(h.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{value:S,onChange:function(e){return w(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(h.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(h.jsxs)("div",{class:"form-floating mb-3",children:[Object(h.jsx)("input",{value:G,onChange:function(e){return D(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(h.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(h.jsx)("div",{class:"form-floating mb-3",children:Object(h.jsxs)("select",{value:L,onChange:function(e){return A(e.target.value)},class:"form-select mb-3",children:[Object(h.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(h.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(h.jsx)("div",{class:"form-floating mb-3",children:Object(h.jsx)("select",{value:J,onChange:function(e){return q(e.target.value)},class:"form-select mb-3",children:u.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(h.jsxs)("div",{class:"form-floating",children:[Object(h.jsx)("textarea",{onChange:function(e){return k(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100},children:T}),Object(h.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})})})};var T=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(o.a)(r,2),l=s[0],j=s[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),d=u[0],T=u[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(p,{name:d}),Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{path:"/",exact:!0,render:function(e){return Object(h.jsx)(g,Object(i.a)({setNameGlobal:T},e))}}),Object(h.jsx)(m.b,{path:"/login",exact:!0,render:function(e){return Object(h.jsx)(x,Object(i.a)({setNameGlobal:T},e))}}),Object(h.jsx)(m.b,{path:"/register",exact:!0,render:function(e){return Object(h.jsx)(v,Object(i.a)({},e))}}),Object(h.jsx)(m.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(h.jsx)(y,Object(i.a)({category:l},e))}}),Object(h.jsx)(m.b,{path:"/category/:id",exact:!0,render:function(e){return Object(h.jsx)(S,Object(i.a)({setCategoryGlobal:j,type:n},e))}}),Object(h.jsx)(m.b,{path:"/type/:id",exact:!0,render:function(e){return Object(h.jsx)(f,Object(i.a)({SetTypeGlobal:c},e))}}),Object(h.jsx)(m.b,{path:"/myposts",exact:!0,render:function(e){return Object(h.jsx)(w,Object(i.a)({},e))}}),Object(h.jsx)(m.b,{path:"/newpost",exact:!0,render:function(e){return Object(h.jsx)(N,Object(i.a)({},e))}}),Object(h.jsx)(m.b,{path:"/change/:id",exact:!0,render:function(e){return Object(h.jsx)(C,Object(i.a)({},e))}})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),k()}},[[63,1,2]]]);
//# sourceMappingURL=main.e5fe49be.chunk.js.map