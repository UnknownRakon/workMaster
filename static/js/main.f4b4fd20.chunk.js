(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{59:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),s=n.n(r),i=(n(59),n(21)),o=n(3),l=n(5),j=n.n(l),b=n(10),u=n(14),d=n.n(u),h=n(8),O=(n(37),n(111)),f=n(117),p=n(113),m=n(115),x=n(116),g=n(114),v=n(38),y=n.n(v),S=n(1),w=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function N(e){var t=e.name,n=w(),a=Object(c.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1];Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){i(e.data)}))}),[]);var l,u=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l=void 0===t?Object(S.jsxs)(p.a,{children:[Object(S.jsx)(g.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",children:Object(S.jsx)(y.a,{})}),Object(S.jsx)(m.a,{variant:"h6",className:n.title,children:Object(S.jsx)(h.b,{to:"/",children:"WorkMaster"})}),Object(S.jsx)(x.a,{color:"inherit",children:Object(S.jsx)(h.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(S.jsx)(x.a,{color:"inherit",children:Object(S.jsx)(h.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}):Object(S.jsxs)(p.a,{children:[Object(S.jsx)(g.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",children:Object(S.jsx)(y.a,{})}),Object(S.jsx)(m.a,{variant:"h6",className:n.title,children:Object(S.jsx)(h.b,{to:"/",className:"navbar-brand",children:"WorkMaster"})}),s.map((function(e){return Object(S.jsx)(m.a,{variant:"h6",className:n.title,children:Object(S.jsx)(h.b,{to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},children:e.name},e.id)})})),Object(S.jsx)(m.a,{variant:"h6",className:n.title,children:Object(S.jsx)(h.b,{to:"/myposts",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"})}),Object(S.jsx)(m.a,{variant:"h6",className:n.title,children:Object(S.jsx)(h.b,{to:"/newpost",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(S.jsx)(x.a,{color:"inherit",children:Object(S.jsx)(h.b,{to:"/login",onClick:u,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(S.jsx)(f.a,{position:"static",children:l})}var C=function(e){var t=e.match,n=e.SetTypeGlobal,a=Object(c.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1];return n(t.params.id),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){i(e.data)}))}),[]),Object(S.jsx)("div",{className:"row",children:Object(S.jsx)("div",{className:"col-md-3",children:Object(S.jsx)("ul",{class:"list-group",children:s.map((function(e){return Object(S.jsx)("li",{class:"list-group-item",children:Object(S.jsx)(h.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.name})},e.id)}))})})})},k=n(6),T=(n(89),function(e){var t=e.setNameGlobal,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),f=O[0],p=O[1];Object(c.useEffect)((function(){return t(void 0)}));var m=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:r,password:u})});case 3:p(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f?Object(S.jsx)(k.a,{to:"/"}):Object(S.jsx)("div",{children:Object(S.jsx)("main",{className:"form-signin",children:Object(S.jsxs)("form",{onSubmit:m,children:[Object(S.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(S.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return s(e.target.value)}}),Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return d(e.target.value)}}),Object(S.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})})}),E=function(e){var t=e.setNameGlobal,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),f=O[0],p=O[1],m=Object(c.useState)(""),x=Object(o.a)(m,2),g=x[0],v=x[1];Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t(c.name),s(c.name),p(c.id);case 9:case"end":return e.stop()}}),e)})))()}));var y=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/reviews/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:f,value:g})});case 3:d(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("h1",{children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",r]}),Object(S.jsx)("form",{onSubmit:y,c:!0,children:Object(S.jsxs)("fieldset",{disabled:u,children:[Object(S.jsx)("legend",{children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"}),Object(S.jsxs)("div",{className:"form-check form-check-inline",children:[Object(S.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"1"}),Object(S.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"1"})]}),Object(S.jsxs)("div",{className:"form-check form-check-inline",children:[Object(S.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"2"}),Object(S.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"2"})]}),Object(S.jsxs)("div",{className:"form-check form-check-inline",children:[Object(S.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"3"}),Object(S.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"3"})]}),Object(S.jsxs)("div",{className:"form-check form-check-inline",children:[Object(S.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"4"}),Object(S.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"4"})]}),Object(S.jsxs)("div",{className:"form-check form-check-inline",children:[Object(S.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"5"}),Object(S.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"5"})]}),Object(S.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u044c"})]})})]}):Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsx)("h1",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})})},P=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),h=d[0],O=d[1],f=Object(c.useState)(!1),p=Object(o.a)(f,2),m=p[0],x=p[1],g=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:h})});case 3:setTimeout((function(){return x(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?Object(S.jsx)(k.a,{to:"login"}):Object(S.jsx)("div",{children:Object(S.jsx)("main",{className:"form-signin",children:Object(S.jsxs)("form",{onSubmit:g,children:[Object(S.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Register"}),Object(S.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return l(e.target.value)}}),Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return O(e.target.value)}}),Object(S.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})})};var D=function(e){var t=e.match,n=e.category,a=e.setPostID,r=Object(c.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=t.params.id;return a(j),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(j,"/")}).then((function(e){l(e.data)}))}),[j]),Object(S.jsxs)("div",{children:[void 0!==n?Object(S.jsx)(h.b,{to:{pathname:"/category/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}):null,Object(S.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",Object(S.jsx)("strong",{children:i.title})]}),Object(S.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(S.jsx)("strong",{children:i.salary})]}),void 0!==i.owner?Object(S.jsxs)("p",{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c:",i.owner.email]}):null,Object(S.jsx)("p",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(S.jsx)("p",{children:i.content}),Object(S.jsx)("a",{href:i.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"}),Object(S.jsx)("h2",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),console.log(i.comments),void 0!==i.comments?i.comments.map((function(e){return e.blog_post==j?Object(S.jsxs)("div",{children:[console.log(e.owner),void 0!==e.owner?Object(S.jsxs)("span",{children:["\u041d\u0430\u043f\u0438\u0441\u0430\u043b: ",e.owner.email]}):null,Object(S.jsx)("span",{children:e.comment})]},e.id):null})):null,Object(S.jsx)(h.b,{to:{pathname:"/comment",fromDashboard:!1},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var G=function(e){var t=e.match,n=e.type,a=e.setCategoryGlobal,r=Object(c.useState)({}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(c.useState)([]),b=Object(o.a)(j,2),u=b[0],O=b[1],f=t.params.id;return a(i.id),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(f,"/")}).then((function(e){l(e.data),O(e.data.posts)}))}),[f]),Object(S.jsxs)("div",{children:[Object(S.jsx)(h.b,{to:{pathname:"/type/".concat(n),fromDashboard:!1},children:"\u041d\u0430\u0437\u0430\u0434"}),"Category with id ",i.id,Object(S.jsxs)("p",{children:["Category: ",Object(S.jsx)("strong",{children:i.name})]}),Object(S.jsx)("hr",{}),Object(S.jsx)("div",{className:"row",children:u.map((function(e,t){return e.blog_type==n?Object(S.jsxs)("div",{className:"col-md-4",children:[Object(S.jsx)("h4",{children:e.title}),Object(S.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(S.jsx)(h.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},t):null}))})]})};var R=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost"}).then((function(e){a(e.data)}))}),[]);var u=Object(c.useState)(""),O=Object(o.a)(u,2),f=O[0],p=O[1];return Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,p(n.email);case 7:case"end":return e.stop()}}),e)})))()})),i?Object(S.jsx)(k.a,{to:"/"}):Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"row",children:n.map((function(e,t){return void 0!==e.owner&&e.owner.email===f?Object(S.jsxs)("div",{className:"col-md-4",children:[Object(S.jsx)("h4",{children:e.title}),Object(S.jsxs)("p",{children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary,"\u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(S.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.content]}),Object(S.jsx)(h.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(S.jsx)(h.b,{to:{pathname:"/change/".concat(e.id),fromDashboard:!1},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(S.jsx)("button",{to:"/myposts",onClick:function(){return t=e.id,d.a.delete("http://127.0.0.1:8000/api/blogpost/".concat(t,"/")),void l(!0);var t},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t):null}))})})},I=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(""),h=Object(o.a)(u,2),O=h[0],f=h[1],p=Object(c.useState)(""),m=Object(o.a)(p,2),x=m[0],g=m[1],v=Object(c.useState)(""),y=Object(o.a)(v,2),w=y[0],N=y[1],C=Object(c.useState)(""),T=Object(o.a)(C,2),E=T[0],P=T[1],D=Object(c.useState)(""),G=Object(o.a)(D,2),R=G[0],I=G[1],_=Object(c.useState)(""),J=Object(o.a)(_,2),q=J[0],B=J[1],F=Object(c.useState)(!1),M=Object(o.a)(F,2),L=M[0],W=M[1];Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,B(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){a(e.data)}))}),[]);var A=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,salary:O,content:x,link:w,blog_category:E,blog_type:R,owner:q})});case 3:setTimeout((function(){return W(!0)}),100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return L?Object(S.jsx)(k.a,{to:"/myposts"}):Object(S.jsx)("div",{children:Object(S.jsx)("form",{className:"col-10 mx-auto",onSubmit:A,children:Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("legend",{className:"text-center",children:"\u0421\u043e\u0439\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(S.jsxs)("div",{class:"form-floating mb-3",children:[Object(S.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(S.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(S.jsxs)("div",{class:"form-floating mb-3",children:[Object(S.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(S.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(S.jsxs)("div",{class:"form-floating mb-3",children:[Object(S.jsx)("input",{onChange:function(e){return N(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(S.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(S.jsx)("div",{class:"form-floating mb-3",children:Object(S.jsxs)("select",{onChange:function(e){return I(e.target.value)},class:"form-select mb-3",children:[Object(S.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u0441\u0442\u0430"}),Object(S.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(S.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(S.jsx)("div",{class:"form-floating mb-3",children:Object(S.jsxs)("select",{onChange:function(e){return P(e.target.value)},class:"form-select mb-3",children:[Object(S.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u043f\u043e\u0441\u0442\u0430"}),n.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(S.jsxs)("div",{class:"form-floating",children:[Object(S.jsx)("textarea",{onChange:function(e){return g(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(S.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(S.jsx)("button",{type:"submit",class:"mt-3 btn btn-primary col-12",children:"\u0412\u044b\u043b\u043e\u0436\u0438\u0442\u044c"})]})})})},_=function(e){var t=e.match,n=Object(c.useState)({}),a=Object(o.a)(n,2),r=(a[0],a[1]),s=t.params.id,i=Object(c.useState)([]),l=Object(o.a)(i,2),u=l[0],h=l[1],O=Object(c.useState)(""),f=Object(o.a)(O,2),p=f[0],m=f[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),v=g[0],y=g[1],w=Object(c.useState)(""),N=Object(o.a)(w,2),C=N[0],T=N[1],E=Object(c.useState)(""),P=Object(o.a)(E,2),D=P[0],G=P[1],R=Object(c.useState)(""),I=Object(o.a)(R,2),_=I[0],J=I[1],q=Object(c.useState)(""),B=Object(o.a)(q,2),F=B[0],M=B[1],L=Object(c.useState)(""),W=Object(o.a)(L,2),A=W[0],U=W[1],z=Object(c.useState)(!1),H=Object(o.a)(z,2),K=H[0],Q=H[1];Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(s,"/")}).then((function(e){r(e.data),m(e.data.title),y(e.data.salary),T(e.data.content),G(e.data.link),J(e.data.blog_category.id),M(e.data.blog_type.id)}))}),[s]),Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,U(n.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){h(e.data)}))}),[]);var V=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/".concat(s,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:p,salary:v,content:C,link:D,blog_category:_,blog_type:F,owner:A})});case 3:setTimeout((function(){return Q(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return K?Object(S.jsx)(k.a,{to:"/myposts"}):Object(S.jsx)("div",{children:Object(S.jsx)("main",{className:"form-signin",children:Object(S.jsx)("form",{onSubmit:V,children:Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("legend",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(S.jsxs)("div",{class:"form-floating mb-3",children:[Object(S.jsx)("input",{value:p,onChange:function(e){return m(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(S.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(S.jsxs)("div",{class:"form-floating mb-3",children:[Object(S.jsx)("input",{value:v,onChange:function(e){return y(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(S.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(S.jsxs)("div",{class:"form-floating mb-3",children:[Object(S.jsx)("input",{value:D,onChange:function(e){return G(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(S.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(S.jsx)("div",{class:"form-floating mb-3",children:Object(S.jsxs)("select",{value:F,onChange:function(e){return M(e.target.value)},class:"form-select mb-3",children:[Object(S.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(S.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(S.jsx)("div",{class:"form-floating mb-3",children:Object(S.jsx)("select",{value:_,onChange:function(e){return J(e.target.value)},class:"form-select mb-3",children:u.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(S.jsxs)("div",{class:"form-floating",children:[Object(S.jsx)("textarea",{value:C,onChange:function(e){return T(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100},children:C}),Object(S.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(S.jsx)("button",{type:"submit",class:"btn btn-primary",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})})})},J=function(e){var t=e.postID,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),f=O[0],p=O[1],m=t;Object(c.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n.id);case 7:case"end":return e.stop()}}),e)})))()}));var x=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/comments/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:u,comment:r,blog_post:m})});case 3:setTimeout((function(){return p(!0)}),100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f?Object(S.jsx)(k.a,{to:{pathname:"/posts/".concat(m)}}):Object(S.jsx)("div",{children:Object(S.jsx)("main",{className:"form-signin",children:Object(S.jsx)("form",{onSubmit:x,children:Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("legend",{children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(S.jsxs)("div",{class:"mt-5 mb-5 form-floating",children:[Object(S.jsx)("textarea",{onChange:function(e){return s(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(S.jsx)("label",{for:"floatingTextarea2",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]}),Object(S.jsx)("button",{type:"submit",class:"btn btn-primary mx-auto",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})})};var q=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),s=Object(o.a)(r,2),l=s[0],j=s[1],b=Object(c.useState)(""),u=Object(o.a)(b,2),d=u[0],O=u[1],f=Object(c.useState)({}),p=Object(o.a)(f,2),m=p[0],x=p[1];return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(N,{name:d}),Object(S.jsxs)(k.d,{children:[Object(S.jsx)(k.b,{path:"/",exact:!0,render:function(e){return Object(S.jsx)(E,Object(i.a)({setNameGlobal:O},e))}}),Object(S.jsx)(k.b,{path:"/login",exact:!0,render:function(e){return Object(S.jsx)(T,Object(i.a)({setNameGlobal:O},e))}}),Object(S.jsx)(k.b,{path:"/register",exact:!0,render:function(e){return Object(S.jsx)(P,Object(i.a)({},e))}}),Object(S.jsx)(k.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(S.jsx)(D,Object(i.a)({setPostID:x,category:l},e))}}),Object(S.jsx)(k.b,{path:"/category/:id",exact:!0,render:function(e){return Object(S.jsx)(G,Object(i.a)({setCategoryGlobal:j,type:n},e))}}),Object(S.jsx)(k.b,{path:"/type/:id",exact:!0,render:function(e){return Object(S.jsx)(C,Object(i.a)({SetTypeGlobal:a},e))}}),Object(S.jsx)(k.b,{path:"/myposts",exact:!0,render:function(e){return Object(S.jsx)(R,Object(i.a)({},e))}}),Object(S.jsx)(k.b,{path:"/newpost",exact:!0,render:function(e){return Object(S.jsx)(I,Object(i.a)({},e))}}),Object(S.jsx)(k.b,{path:"/change/:id",exact:!0,render:function(e){return Object(S.jsx)(_,Object(i.a)({},e))}}),Object(S.jsx)(k.b,{path:"/comment",exact:!0,render:function(e){return Object(S.jsx)(J,Object(i.a)({postID:m},e))}})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(q,{})}),document.getElementById("root")),B()}},[[90,1,2]]]);
//# sourceMappingURL=main.f4b4fd20.chunk.js.map