(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(36),n(13)),o=n(2),l=n(3),j=n.n(l),b=n(6),u=n(8),d=n.n(u),h=n(5),O=(n(18),n(0));var p=function(e){var t=e.name,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){s(e.data)}))}),[]);var i,l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i=void 0===t?Object(O.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 justify-content-end",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/login",className:"nav-link ml-6",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/register",className:"nav-link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}):Object(O.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[r.map((function(e){return Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},className:"nav-link",children:e.name},e.id)})})),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/myposts",className:"nav-link ml-6",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(h.b,{to:"/newpost",className:"nav-link ml-6",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(O.jsx)("li",{className:"nav-item ms-auto",children:Object(O.jsx)(h.b,{to:"/login",className:"nav-link ml-6",onClick:l,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(O.jsxs)("nav",{className:"navbar navbar-dark navbar-expand-md bg-dark mb-3",children:[console.log(t),Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)(h.b,{to:"/",className:"navbar-brand",children:"WorkMaster"}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(O.jsx)("div",{className:"navbar-nav me-auto mb-2 mb-md-0",children:i})})]})]})};var m=function(e){var t=e.match,n=e.SetTypeGlobal,c=Object(a.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];return n(t.params.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(O.jsx)("li",{class:"list-group-item",children:Object(O.jsx)(h.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},f=n(4),x=(n(62),function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(!1),p=Object(o.a)(h,2),m=p[0],x=p[1];Object(a.useEffect)((function(){return t(void 0)}));var v=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:r,password:u})});case 3:x(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?Object(O.jsx)(f.a,{to:"/"}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsxs)("form",{onSubmit:v,children:[Object(O.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return s(e.target.value)}}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),v=function(e){var t=e.setNameGlobal,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(""),p=Object(o.a)(h,2),m=p[0],f=p[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),g=v[0],y=v[1];Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t(a.name),s(a.name),f(a.id);case 9:case"end":return e.stop()}}),e)})))()}));var N=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/reviews/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:m,value:g})});case 3:d(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("h1",{children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",r]}),Object(O.jsx)("form",{onSubmit:N,children:Object(O.jsxs)("fieldset",{disabled:u,children:[Object(O.jsx)("legend",{children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"}),Object(O.jsxs)("div",{className:"form-check form-check-inline",children:[Object(O.jsx)("input",{onChange:function(e){return y(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"1"}),Object(O.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"1"})]}),Object(O.jsxs)("div",{className:"form-check form-check-inline",children:[Object(O.jsx)("input",{onChange:function(e){return y(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"2"}),Object(O.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"2"})]}),Object(O.jsxs)("div",{className:"form-check form-check-inline",children:[Object(O.jsx)("input",{onChange:function(e){return y(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"3"}),Object(O.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"3"})]}),Object(O.jsxs)("div",{className:"form-check form-check-inline",children:[Object(O.jsx)("input",{onChange:function(e){return y(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"4"}),Object(O.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"4"})]}),Object(O.jsxs)("div",{className:"form-check form-check-inline",children:[Object(O.jsx)("input",{onChange:function(e){return y(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"5"}),Object(O.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"5"})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u044c"})]})})]}):Object(O.jsx)("h1",{children:"'\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443'"})},g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),h=d[0],p=d[1],m=Object(a.useState)(!1),x=Object(o.a)(m,2),v=x[0],g=x[1],y=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:h})});case 3:setTimeout((function(){return g(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return v?Object(O.jsx)(f.a,{to:"login"}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsxs)("form",{onSubmit:y,children:[Object(O.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return l(e.target.value)}}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return p(e.target.value)}}),Object(O.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var y=function(e){var t=e.match,n=e.category,c=e.setPostID,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=t.params.id;return c(j),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(e){l(e.data)}))}),[j]),Object(O.jsxs)("div",{children:[void 0!==n?Object(O.jsx)(h.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}):null,Object(O.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(O.jsx)("strong",{children:i.title})]}),Object(O.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(O.jsx)("strong",{children:i.salary})]}),void 0!==i.owner?Object(O.jsxs)("p",{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c:",i.owner.email]}):null,Object(O.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("p",{children:i.content}),Object(O.jsx)("a",{href:i.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"}),Object(O.jsx)("h2",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),console.log(i.comments),void 0!==i.comments?i.comments.map((function(e){return e.blog_post==j?Object(O.jsxs)("div",{children:[console.log(e.owner),void 0!==e.owner?Object(O.jsxs)("span",{children:["\u041d\u0430\u043f\u0438\u0441\u0430\u043b: ",e.owner.email]}):null,Object(O.jsx)("span",{children:e.comment})]},e.id):null})):null,Object(O.jsx)(h.b,{to:{pathname:"/comment",fromDashboard:!1},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var N=function(e){var t=e.match,n=e.type,c=e.setCategoryGlobal,r=Object(a.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),u=b[0],p=b[1],m=t.params.id;return c(i.id),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(m,"/")}).then((function(e){l(e.data),p(e.data.posts)}))}),[m]),Object(O.jsxs)("div",{children:[Object(O.jsx)(h.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(O.jsxs)("p",{children:["Category: ",Object(O.jsx)("strong",{children:i.name})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"row",children:u.map((function(e,t){return e.blog_type==n?Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h4",{children:e.title}),Object(O.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(O.jsx)(h.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var S=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost"}).then((function(e){c(e.data)}))}),[]);var u=Object(a.useState)(""),p=Object(o.a)(u,2),m=p[0],x=p[1];return Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,x(n.email);case 7:case"end":return e.stop()}}),e)})))()})),i?Object(O.jsx)(f.a,{to:"/"}):Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"row",children:n.map((function(e,t){return void 0!==e.owner&&e.owner.email===m?Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h4",{children:e.title}),Object(O.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(O.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.content]}),Object(O.jsx)(h.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(O.jsx)(h.b,{to:{pathname:"/change/".concat(e.id),fromDashboard:!1},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(O.jsx)("button",{to:"/myposts",onClick:function(){return t=e.id,d.a.delete("http://127.0.0.1:8000/api/blogpost/".concat(t,"/")),void l(!0);var t},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t):null}))})})},w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(a.useState)(""),h=Object(o.a)(u,2),p=h[0],m=h[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),g=v[0],y=v[1],N=Object(a.useState)(""),S=Object(o.a)(N,2),w=S[0],k=S[1],C=Object(a.useState)(""),T=Object(o.a)(C,2),E=T[0],P=T[1],D=Object(a.useState)(""),G=Object(o.a)(D,2),R=G[0],I=G[1],_=Object(a.useState)(""),J=Object(o.a)(_,2),q=J[0],F=J[1],B=Object(a.useState)(!1),L=Object(o.a)(B,2),M=L[0],A=L[1];Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,F(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){c(e.data)}))}),[]);var U=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,salary:p,content:g,link:w,blog_category:E,blog_type:R,owner:q})});case 3:setTimeout((function(){return A(!0)}),100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return M?Object(O.jsx)(f.a,{to:"/myposts"}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsx)("form",{onSubmit:U,children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{children:"\u0421\u043e\u0439\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(O.jsxs)("div",{class:"form-floating mb-3",children:[Object(O.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(O.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(O.jsxs)("div",{class:"form-floating mb-3",children:[Object(O.jsx)("input",{onChange:function(e){return m(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(O.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(O.jsxs)("div",{class:"form-floating mb-3",children:[Object(O.jsx)("input",{onChange:function(e){return k(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(O.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(O.jsx)("div",{class:"form-floating mb-3",children:Object(O.jsxs)("select",{onChange:function(e){return I(e.target.value)},class:"form-select mb-3",children:[Object(O.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u0441\u0442\u0430"}),Object(O.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(O.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(O.jsx)("div",{class:"form-floating mb-3",children:Object(O.jsxs)("select",{onChange:function(e){return P(e.target.value)},class:"form-select mb-3",children:[Object(O.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u043f\u043e\u0441\u0442\u0430"}),n.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(O.jsxs)("div",{class:"form-floating",children:[Object(O.jsx)("textarea",{onChange:function(e){return y(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(O.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(O.jsx)("button",{type:"submit",class:"btn btn-primary",children:"\u0412\u044b\u043b\u043e\u0436\u0438\u0442\u044c"})]})})})})},k=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(o.a)(n,2),r=(c[0],c[1]),s=t.params.id,i=Object(a.useState)([]),l=Object(o.a)(i,2),u=l[0],h=l[1],p=Object(a.useState)(""),m=Object(o.a)(p,2),x=m[0],v=m[1],g=Object(a.useState)(""),y=Object(o.a)(g,2),N=y[0],S=y[1],w=Object(a.useState)(""),k=Object(o.a)(w,2),C=k[0],T=k[1],E=Object(a.useState)(""),P=Object(o.a)(E,2),D=P[0],G=P[1],R=Object(a.useState)(""),I=Object(o.a)(R,2),_=I[0],J=I[1],q=Object(a.useState)(""),F=Object(o.a)(q,2),B=F[0],L=F[1],M=Object(a.useState)(""),A=Object(o.a)(M,2),U=A[0],W=A[1],z=Object(a.useState)(!1),H=Object(o.a)(z,2),K=H[0],Q=H[1];Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(s,"/")}).then((function(e){r(e.data),v(e.data.title),S(e.data.salary),T(e.data.content),G(e.data.link),J(e.data.blog_category.id),L(e.data.blog_type.id)}))}),[s]),Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,W(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){h(e.data)}))}),[]);var V=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/".concat(s,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:x,salary:N,content:C,link:D,blog_category:_,blog_type:B,owner:U})});case 3:setTimeout((function(){return Q(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return K?Object(O.jsx)(f.a,{to:"/myposts"}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsx)("form",{onSubmit:V,children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(O.jsxs)("div",{class:"form-floating mb-3",children:[Object(O.jsx)("input",{value:x,onChange:function(e){return v(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(O.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(O.jsxs)("div",{class:"form-floating mb-3",children:[Object(O.jsx)("input",{value:N,onChange:function(e){return S(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(O.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(O.jsxs)("div",{class:"form-floating mb-3",children:[Object(O.jsx)("input",{value:D,onChange:function(e){return G(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(O.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(O.jsx)("div",{class:"form-floating mb-3",children:Object(O.jsxs)("select",{value:B,onChange:function(e){return L(e.target.value)},class:"form-select mb-3",children:[Object(O.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(O.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(O.jsx)("div",{class:"form-floating mb-3",children:Object(O.jsx)("select",{value:_,onChange:function(e){return J(e.target.value)},class:"form-select mb-3",children:u.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(O.jsxs)("div",{class:"form-floating",children:[Object(O.jsx)("textarea",{value:C,onChange:function(e){return T(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100},children:C}),Object(O.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(O.jsx)("button",{type:"submit",class:"btn btn-primary",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})})})},C=function(e){var t=e.postID,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(!1),p=Object(o.a)(h,2),m=p[0],x=p[1],v=t;Object(a.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n.id);case 7:case"end":return e.stop()}}),e)})))()}));var g=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/comments/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:u,comment:r,blog_post:v})});case 3:setTimeout((function(){return x(!0)}),100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?Object(O.jsx)(f.a,{to:{pathname:"/posts/".concat(v)}}):Object(O.jsx)("div",{children:Object(O.jsx)("main",{className:"form-signin",children:Object(O.jsx)("form",{onSubmit:g,children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(O.jsxs)("div",{class:"mt-5 mb-5 form-floating",children:[Object(O.jsx)("textarea",{onChange:function(e){return s(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(O.jsx)("label",{for:"floatingTextarea2",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]}),Object(O.jsx)("button",{type:"submit",class:"btn btn-primary mx-auto",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})})};var T=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(o.a)(r,2),l=s[0],j=s[1],b=Object(a.useState)(""),u=Object(o.a)(b,2),d=u[0],T=u[1],E=Object(a.useState)({}),P=Object(o.a)(E,2),D=P[0],G=P[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(p,{name:d}),Object(O.jsxs)(f.d,{children:[Object(O.jsx)(f.b,{path:"/",exact:!0,render:function(e){return Object(O.jsx)(v,Object(i.a)({setNameGlobal:T},e))}}),Object(O.jsx)(f.b,{path:"/login",exact:!0,render:function(e){return Object(O.jsx)(x,Object(i.a)({setNameGlobal:T},e))}}),Object(O.jsx)(f.b,{path:"/register",exact:!0,render:function(e){return Object(O.jsx)(g,Object(i.a)({},e))}}),Object(O.jsx)(f.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(O.jsx)(y,Object(i.a)({setPostID:G,category:l},e))}}),Object(O.jsx)(f.b,{path:"/category/:id",exact:!0,render:function(e){return Object(O.jsx)(N,Object(i.a)({setCategoryGlobal:j,type:n},e))}}),Object(O.jsx)(f.b,{path:"/type/:id",exact:!0,render:function(e){return Object(O.jsx)(m,Object(i.a)({SetTypeGlobal:c},e))}}),Object(O.jsx)(f.b,{path:"/myposts",exact:!0,render:function(e){return Object(O.jsx)(S,Object(i.a)({},e))}}),Object(O.jsx)(f.b,{path:"/newpost",exact:!0,render:function(e){return Object(O.jsx)(w,Object(i.a)({},e))}}),Object(O.jsx)(f.b,{path:"/change/:id",exact:!0,render:function(e){return Object(O.jsx)(k,Object(i.a)({},e))}}),Object(O.jsx)(f.b,{path:"/comment",exact:!0,render:function(e){return Object(O.jsx)(C,Object(i.a)({postID:D},e))}})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),E()}},[[63,1,2]]]);
//# sourceMappingURL=main.feb8124a.chunk.js.map