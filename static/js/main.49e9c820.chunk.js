(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{114:function(e,t,a){},135:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),i=(a(114),a(26)),s=a(7),l=a(9),j=a.n(l),u=a(16),b=a(19),d=a.n(b),p=a(14),m=(a(134),a(176)),h=a(181),O=a(178),f=a(62),x=a(180),g=a(94),v=a.n(g),y=a(92),w=a.n(y),S=a(93),k=a.n(S),N=(a(135),a(1)),C=Object(m.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"}}}));function T(e){var t=e.name,a=C(),c=Object(n.useState)([]),r=Object(s.a)(c,2),o=r[0],i=r[1];Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/type/"}).then((function(e){i(e.data)}))}),[]);var l,b,m=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return void 0===t?(b=Object(N.jsxs)(O.a,{className:a.toolbar,style:{flexWrap:"wrap"},children:[Object(N.jsx)(f.a,{component:"h2",variant:"h5",color:"inherit",noWrap:!0,className:a.toolbarTitle,children:Object(N.jsx)(p.b,{className:"nav",to:"/",children:"Worker"})}),Object(N.jsx)(p.b,{className:"nav",to:"/login",children:Object(N.jsx)(x.a,{variant:"outlined",size:"small",style:{marginRight:5},children:Object(N.jsx)(w.a,{})})}),Object(N.jsx)(p.b,{className:"nav",to:"/register",children:Object(N.jsx)(x.a,{variant:"outlined",size:"small",children:Object(N.jsx)(k.a,{})})})]}),l=null):(b=Object(N.jsxs)(O.a,{className:a.toolbar,children:[Object(N.jsx)(f.a,{component:"h2",variant:"h5",color:"inherit",noWrap:!0,className:a.toolbarTitle,children:Object(N.jsx)(p.b,{className:"nav",to:"/",children:"Worker"})}),Object(N.jsx)(p.b,{to:"/login",className:"nav",onClick:m,children:Object(N.jsx)(x.a,{variant:"outlined",size:"small",children:Object(N.jsx)(v.a,{})})})]}),l=Object(N.jsxs)(O.a,{component:"nav",style:{background:"black"},variant:"dense",className:a.toolbarSecondary,children:[o.map((function(e){return Object(N.jsx)(p.b,{className:"link",to:{pathname:"/type/".concat(e.id,"/"),fromDashboard:!1},children:e.name},e.id)})),Object(N.jsx)(p.b,{className:"link",to:"/myposts",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(N.jsx)(p.b,{className:"link",to:"/newpost",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})),Object(N.jsxs)(h.a,{color:"default",position:"static",elevation:0,className:a.appBar,children:[b,l]})}var B=a(184),E=a(185),D=a(187),W=a(183),P=a(182),G=a(95),R=a.n(G),I=a(186),z=a(197),_=Object(m.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},container:{width:"100%",backgroundColor:e.palette.background.paper,paddingBottom:20,paddingTop:15}}}));function J(e){var t=e.match,a=e.SetTypeGlobal,c=_(),r=Object(n.useState)([]),o=Object(s.a)(r,2),i=o[0],l=o[1],j=t.params.id;return a(j),Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){l(e.data)}))}),[]),Object(N.jsxs)(P.a,{component:"main",maxWidth:"xl",className:c.container,children:[Object(N.jsx)(W.a,{}),Object(N.jsx)(f.a,{variant:"h2",gutterBottom:!0,align:"center",children:1==j?"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438":"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b"}),Object(N.jsx)(B.a,{component:"nav",className:c.root,"aria-label":"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:i.map((function(e){return Object(N.jsx)(p.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},style:{color:"black",textDecoration:"none"},children:Object(N.jsxs)(E.a,{button:!0,divider:!0,children:[Object(N.jsx)(I.a,{children:Object(N.jsx)(z.a,{children:Object(N.jsx)(R.a,{})})}),Object(N.jsx)(D.a,{primary:e.name})]})})}))})]})}var F=a(11),q=(a(143),a(194)),A=a(188),L=a(96),M=a.n(L),U=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{backgroundColor:e.palette.background.paper,paddingBottom:20}}}));function X(e){var t=e.setNameGlobal,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),b=l[0],d=l[1],m=Object(n.useState)(!1),h=Object(s.a)(m,2),O=h[0],g=h[1],v=U();Object(n.useEffect)((function(){return t(void 0)}));var y=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:r,password:b})});case 3:g(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return O?Object(N.jsx)(F.a,{to:"/"}):Object(N.jsxs)(P.a,{component:"main",maxWidth:"xs",className:v.container,children:[Object(N.jsx)(W.a,{}),Object(N.jsxs)("div",{className:v.paper,children:[Object(N.jsx)(z.a,{className:v.avatar,children:Object(N.jsx)(M.a,{})}),Object(N.jsx)(f.a,{component:"h1",variant:"h5",children:"\u0412\u0445\u043e\u0434"}),Object(N.jsxs)("form",{className:v.form,onSubmit:y,children:[Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return d(e.target.value)}}),Object(N.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:v.submit,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(N.jsx)(A.a,{container:!0,children:Object(N.jsx)(A.a,{item:!0,children:Object(N.jsx)(p.b,{to:"/register",children:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c!"})})})]})]})]})}var H=a(196),K=function(e){var t=e.setNameGlobal,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(!1),l=Object(s.a)(i,2),b=l[0],d=l[1],p=Object(n.useState)(""),m=Object(s.a)(p,2),h=m[0],O=m[1],f=Object(n.useState)(""),x=Object(s.a)(f,2),g=x[0],v=x[1];Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t(n.name),o(n.name),O(n.id);case 9:case"end":return e.stop()}}),e)})))()}));var y=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/reviews/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:h,value:g})});case 3:d(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(N.jsxs)(P.a,{maxWidth:"sm",style:{marginTop:20},children:[Object(N.jsx)(W.a,{}),Object(N.jsxs)("h1",{children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",r]}),Object(N.jsx)("form",{onSubmit:y,children:Object(N.jsxs)("fieldset",{disabled:b,children:[Object(N.jsx)("legend",{children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"}),Object(N.jsxs)("div",{className:"form-check form-check-inline",children:[Object(N.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"1"}),Object(N.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"1"})]}),Object(N.jsxs)("div",{className:"form-check form-check-inline",children:[Object(N.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"2"}),Object(N.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"2"})]}),Object(N.jsxs)("div",{className:"form-check form-check-inline",children:[Object(N.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"3"}),Object(N.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"3"})]}),Object(N.jsxs)("div",{className:"form-check form-check-inline",children:[Object(N.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"4"}),Object(N.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"4"})]}),Object(N.jsxs)("div",{className:"form-check form-check-inline",children:[Object(N.jsx)("input",{onChange:function(e){return v(e.target.value)},className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"5"}),Object(N.jsx)("label",{className:"form-check-label",for:"inlineRadio1",children:"5"})]}),Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u044c"})]})})]}):Object(N.jsx)(H.a,{severity:"error",children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442"})},Q=a(97),V=a.n(Q),Y=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{backgroundColor:e.palette.background.paper,paddingBottom:20}}}));function Z(){var e=Y(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),l=i[0],b=i[1],d=Object(n.useState)(""),m=Object(s.a)(d,2),h=m[0],O=m[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),y=v[0],w=v[1],S=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:l,password:h})});case 3:setTimeout((function(){return w(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?Object(N.jsx)(F.a,{to:"login"}):Object(N.jsxs)(P.a,{component:"main",maxWidth:"xs",className:e.container,children:[Object(N.jsx)(W.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(z.a,{className:e.avatar,children:Object(N.jsx)(V.a,{})}),Object(N.jsx)(f.a,{component:"h1",variant:"h5",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(N.jsxs)("form",{className:e.form,onSubmit:S,children:[Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",placeholder:"\u0418\u043c\u044f",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return r(e.target.value)}}),Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return b(e.target.value)}}),Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return O(e.target.value)}}),Object(N.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(N.jsx)(A.a,{container:!0,children:Object(N.jsx)(A.a,{item:!0,children:Object(N.jsx)(p.b,{to:"/login",children:"\u0415\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0412\u043e\u0439\u0434\u0438!"})})})]})]})]})}var $=a(61),ee=a.n($),te=a(189),ae=a(198),ne=a(190),ce=Object(m.a)((function(e){return{container:{width:"100%",backgroundColor:e.palette.background.paper,paddingTop:15,paddingBottom:20},title:{fontSize:14}}}));function re(e){var t=e.match,a=e.category,c=e.setPostID,r=ce(),o=Object(n.useState)(0),i=Object(s.a)(o,2),l=i[0],j=i[1],u=Object(n.useState)({}),b=Object(s.a)(u,2),m=b[0],h=b[1],O=t.params.id;c(O),Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(O,"/")}).then((function(e){h(e.data)})),g()}),[O]);var g=function(){void 0!==m.comments&&m.comments.forEach((function(e){e.blog_post==O&&(console.log("blog_post"+e),console.log("id"+O),j(l+1),console.log(l))}))};return Object(N.jsxs)(P.a,{component:"main",maxWidth:"xl",className:r.container,children:[Object(N.jsx)(W.a,{}),void 0!==a?Object(N.jsx)(p.b,{style:{marginTop:15},to:{pathname:"/category/".concat(a),fromDashboard:!1},children:Object(N.jsx)(ee.a,{fontSize:"large"})}):null,Object(N.jsx)(f.a,{variant:"h3",gutterBottom:!0,align:"center",children:m.title}),Object(N.jsx)(te.a,{style:{marginBottom:15}}),Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},children:[void 0!==m.owner?Object(N.jsx)(ae.a,{avatar:Object(N.jsx)(z.a,{children:m.owner.email.slice(0,1)}),label:m.owner.email,variant:"outlined"}):null,Object(N.jsxs)(f.a,{style:{textTransform:"uppercase",wordWrap:"normal"},variant:"subtitle1",display:"block",gutterBottom:!0,children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",m.salary," \u0440\u0443\u0431"]})]}),Object(N.jsx)(f.a,{style:{textAlign:"center",wordWrap:"normal"},variant:"h4",gutterBottom:!0,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(N.jsx)(f.a,{style:{marginBottom:15},variant:"body1",gutterBottom:!0,children:m.content}),Object(N.jsx)("div",{style:{display:"flex",alignItems:"flex-end",marginBottom:15},children:Object(N.jsx)(x.a,{variant:"contained",color:"primary",href:m.link,rel:"noreferrer",target:"_blank",children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f"})}),Object(N.jsx)(ne.a,{color:"secondary",badgeContent:l,max:999,children:Object(N.jsx)(f.a,{variant:"h4",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})}),void 0!==m.comments?m.comments.map((function(e){return e.blog_post==O?Object(N.jsxs)("div",{children:[void 0!==e.owner?Object(N.jsxs)("span",{children:["\u041d\u0430\u043f\u0438\u0441\u0430\u043b: ",e.owner.email]}):null,Object(N.jsx)("span",{children:e.comment})]},e.id):null})):null,Object(N.jsx)(p.b,{to:{pathname:"/comment",fromDashboard:!1},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})}var oe=a(191),ie=a(193),se=a(192),le=a(195),je=Object(m.a)((function(e){return{container:{width:"100%",backgroundColor:e.palette.background.paper,paddingTop:15,paddingBottom:20},title:{fontSize:14}}}));function ue(e){var t=e.match,a=e.type,c=e.setCategoryGlobal,r=je(),o=Object(n.useState)({}),i=Object(s.a)(o,2),l=i[0],j=i[1],u=Object(n.useState)([]),b=Object(s.a)(u,2),m=b[0],h=b[1],O=t.params.id;return c(l.id),Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(O,"/")}).then((function(e){j(e.data),h(e.data.posts)}))}),[O]),Object(N.jsxs)(P.a,{component:"main",maxWidth:"xl",className:r.container,children:[Object(N.jsx)(W.a,{}),Object(N.jsx)(p.b,{style:{marginTop:15},to:{pathname:"/type/".concat(a),fromDashboard:!1},children:Object(N.jsx)(ee.a,{fontSize:"large"})}),Object(N.jsxs)(f.a,{variant:"h2",gutterBottom:!0,align:"center",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",l.name]}),Object(N.jsx)(te.a,{}),Object(N.jsx)(le.a,{children:m.map((function(e,t){return e.blog_type==a?Object(N.jsxs)(oe.a,{children:[Object(N.jsxs)(se.a,{style:{marginBottom:0,paddingBottom:0},children:[Object(N.jsxs)(f.a,{className:r.title,color:"textSecondary",gutterBottom:!0,children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",e.salary," \u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(N.jsx)(f.a,{variant:"h5",component:"h2",children:e.title})]}),Object(N.jsx)(ie.a,{children:Object(N.jsx)(p.b,{style:{textDecoration:"none"},to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(N.jsx)(x.a,{size:"small",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})})]},t):null}))})]})}var be=Object(m.a)((function(e){return{container:{width:"100%",backgroundColor:e.palette.background.paper,paddingTop:15,paddingBottom:20},title:{fontSize:14}}}));function de(){var e=be(),t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost"}).then((function(e){r(e.data)}))}),[]);var o=Object(n.useState)(""),i=Object(s.a)(o,2),l=i[0],b=i[1];Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,b(a.email);case 7:case"end":return e.stop()}}),e)})))()}));var m=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://127.0.0.1:8000/api/blogpost/".concat(t,"/"));case 2:d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost"}).then((function(e){r(e.data)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(P.a,{component:"main",maxWidth:"xl",className:e.container,children:[Object(N.jsx)(W.a,{}),Object(N.jsx)(f.a,{variant:"h2",gutterBottom:!0,align:"center",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(N.jsx)(te.a,{}),Object(N.jsx)(le.a,{children:c.map((function(t,a){return void 0!==t.owner&&t.owner.email===l?Object(N.jsxs)(oe.a,{children:[Object(N.jsxs)(se.a,{style:{marginBottom:0,paddingBottom:0},children:[Object(N.jsxs)(f.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430: ",t.salary," \u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(N.jsx)(f.a,{variant:"h5",component:"h2",children:t.title})]}),Object(N.jsxs)(ie.a,{children:[Object(N.jsx)(p.b,{style:{textDecoration:"none"},to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:Object(N.jsx)(x.a,{size:"small",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})}),Object(N.jsx)(p.b,{style:{textDecoration:"none"},to:{pathname:"/change/".concat(t.id),fromDashboard:!1},children:Object(N.jsx)(x.a,{size:"small",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(N.jsx)(x.a,{to:"/myposts",onClick:function(){return m(t.id)},size:"small",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},a):null}))})]})}var pe=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],l=o[1],b=Object(n.useState)(""),p=Object(s.a)(b,2),m=p[0],h=p[1],O=Object(n.useState)(""),f=Object(s.a)(O,2),x=f[0],g=f[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),w=y[0],S=y[1],k=Object(n.useState)(""),C=Object(s.a)(k,2),T=C[0],B=C[1],E=Object(n.useState)(""),D=Object(s.a)(E,2),W=D[0],P=D[1],G=Object(n.useState)(""),R=Object(s.a)(G,2),I=R[0],z=R[1],_=Object(n.useState)(!1),J=Object(s.a)(_,2),q=J[0],A=J[1];Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,z(a.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){c(e.data)}))}),[]);var L=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,salary:m,content:x,link:w,blog_category:T,blog_type:W,owner:I})});case 3:setTimeout((function(){return A(!0)}),100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return q?Object(N.jsx)(F.a,{to:"/myposts"}):Object(N.jsx)("div",{children:Object(N.jsx)("form",{className:"col-10 mx-auto",onSubmit:L,children:Object(N.jsxs)("fieldset",{children:[Object(N.jsx)("legend",{className:"text-center",children:"\u0421\u043e\u0439\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(N.jsxs)("div",{class:"form-floating mb-3",children:[Object(N.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(N.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(N.jsxs)("div",{class:"form-floating mb-3",children:[Object(N.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(N.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(N.jsxs)("div",{class:"form-floating mb-3",children:[Object(N.jsx)("input",{onChange:function(e){return S(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(N.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(N.jsx)("div",{class:"form-floating mb-3",children:Object(N.jsxs)("select",{onChange:function(e){return P(e.target.value)},class:"form-select mb-3",children:[Object(N.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u0441\u0442\u0430"}),Object(N.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(N.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(N.jsx)("div",{class:"form-floating mb-3",children:Object(N.jsxs)("select",{onChange:function(e){return B(e.target.value)},class:"form-select mb-3",children:[Object(N.jsx)("option",{selected:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u043f\u043e\u0441\u0442\u0430"}),a.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(N.jsxs)("div",{class:"form-floating",children:[Object(N.jsx)("textarea",{onChange:function(e){return g(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100}}),Object(N.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(N.jsx)("button",{type:"submit",class:"mt-3 btn btn-primary col-12",children:"\u0412\u044b\u043b\u043e\u0436\u0438\u0442\u044c"})]})})})},me=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(s.a)(a,2),r=(c[0],c[1]),o=t.params.id,i=Object(n.useState)([]),l=Object(s.a)(i,2),b=l[0],p=l[1],m=Object(n.useState)(""),h=Object(s.a)(m,2),O=h[0],f=h[1],x=Object(n.useState)(""),g=Object(s.a)(x,2),v=g[0],y=g[1],w=Object(n.useState)(""),S=Object(s.a)(w,2),k=S[0],C=S[1],T=Object(n.useState)(""),B=Object(s.a)(T,2),E=B[0],D=B[1],W=Object(n.useState)(""),P=Object(s.a)(W,2),G=P[0],R=P[1],I=Object(n.useState)(""),z=Object(s.a)(I,2),_=z[0],J=z[1],q=Object(n.useState)(""),A=Object(s.a)(q,2),L=A[0],M=A[1],U=Object(n.useState)(!1),X=Object(s.a)(U,2),H=X[0],K=X[1];Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/".concat(o,"/")}).then((function(e){r(e.data),f(e.data.title),y(e.data.salary),C(e.data.content),D(e.data.link),R(e.data.blog_category.id),J(e.data.blog_type.id)}))}),[o]),Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,M(a.id);case 7:case"end":return e.stop()}}),e)})))()})),Object(n.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){p(e.data)}))}),[]);var Q=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/blogpost/".concat(o,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:O,salary:v,content:k,link:E,blog_category:G,blog_type:_,owner:L})});case 3:setTimeout((function(){return K(!0)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return H?Object(N.jsx)(F.a,{to:"/myposts"}):Object(N.jsx)("div",{children:Object(N.jsx)("main",{className:"form-signin",children:Object(N.jsx)("form",{onSubmit:Q,children:Object(N.jsxs)("fieldset",{children:[Object(N.jsx)("legend",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(N.jsxs)("div",{class:"form-floating mb-3",children:[Object(N.jsx)("input",{value:O,onChange:function(e){return f(e.target.value)},type:"text",class:"form-control",id:"floatingInput",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(N.jsx)("label",{for:"floatingInput",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})]}),Object(N.jsxs)("div",{class:"form-floating mb-3",children:[Object(N.jsx)("input",{value:v,onChange:function(e){return y(e.target.value)},type:"number",class:"form-control",id:"floatingPassword",placeholder:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(N.jsx)("label",{for:"floatingPassword",children:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f\u0445"})]}),Object(N.jsxs)("div",{class:"form-floating mb-3",children:[Object(N.jsx)("input",{value:E,onChange:function(e){return D(e.target.value)},type:"text",class:"form-control",id:"floatingPassword",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430"}),Object(N.jsx)("label",{for:"floatingPassword",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"})]}),Object(N.jsx)("div",{class:"form-floating mb-3",children:Object(N.jsxs)("select",{value:_,onChange:function(e){return J(e.target.value)},class:"form-select mb-3",children:[Object(N.jsx)("option",{value:"1",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f"}),Object(N.jsx)("option",{value:"2",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"})]})}),Object(N.jsx)("div",{class:"form-floating mb-3",children:Object(N.jsx)("select",{value:G,onChange:function(e){return R(e.target.value)},class:"form-select mb-3",children:b.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(N.jsxs)("div",{class:"form-floating",children:[Object(N.jsx)("textarea",{value:k,onChange:function(e){return C(e.target.value)},class:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"floatingTextarea2",style:{height:100},children:k}),Object(N.jsx)("label",{for:"floatingTextarea2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),Object(N.jsx)("button",{type:"submit",class:"btn btn-primary",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})})})},he=Object(m.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},container:{width:"100%",backgroundColor:e.palette.background.paper,paddingBottom:20,paddingTop:15},textarea:{width:"80%",marginBottom:15}}})),Oe=function(e){var t=e.postID,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),b=l[0],d=l[1],p=Object(n.useState)(!1),m=Object(s.a)(p,2),h=m[0],O=m[1],g=t,v=he();Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,d(a.id);case 7:case"end":return e.stop()}}),e)})))()}));var y=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/comments/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:b,comment:r,blog_post:g})});case 3:setTimeout((function(){return O(!0)}),100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return h?Object(N.jsx)(F.a,{to:{pathname:"/posts/".concat(g)}}):Object(N.jsxs)(P.a,{component:"main",maxWidth:"xl",className:v.container,children:[Object(N.jsx)(W.a,{}),Object(N.jsx)("form",{onSubmit:y,className:v.form,children:Object(N.jsxs)("fieldset",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)("legend",{children:Object(N.jsx)(f.a,{component:"h1",variant:"h5",style:{textAlign:"center"},children:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})}),Object(N.jsx)(q.a,{id:"outlined-multiline-static",multiline:!0,rows:4,placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",variant:"outlined",onChange:function(e){return o(e.target.value)},className:v.textarea}),Object(N.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})]})};var fe=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),o=Object(s.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(""),b=Object(s.a)(u,2),d=b[0],m=b[1],h=Object(n.useState)({}),O=Object(s.a)(h,2),f=O[0],x=O[1];return Object(N.jsx)(P.a,{maxWidth:"xl",className:"App",children:Object(N.jsxs)(p.a,{children:[Object(N.jsx)(W.a,{}),Object(N.jsx)(T,{name:d}),Object(N.jsxs)(F.d,{children:[Object(N.jsx)(F.b,{path:"/",exact:!0,render:function(e){return Object(N.jsx)(K,Object(i.a)({setNameGlobal:m},e))}}),Object(N.jsx)(F.b,{path:"/posts/:id",exact:!0,render:function(e){return Object(N.jsx)(re,Object(i.a)({setPostID:x,category:l},e))}}),Object(N.jsx)(F.b,{path:"/category/:id",exact:!0,render:function(e){return Object(N.jsx)(ue,Object(i.a)({setCategoryGlobal:j,type:a},e))}}),Object(N.jsx)(F.b,{path:"/type/:id",exact:!0,render:function(e){return Object(N.jsx)(J,Object(i.a)({SetTypeGlobal:c},e))}}),Object(N.jsx)(F.b,{path:"/myposts",exact:!0,render:function(e){return Object(N.jsx)(de,Object(i.a)({},e))}}),Object(N.jsx)(F.b,{path:"/newpost",exact:!0,render:function(e){return Object(N.jsx)(pe,Object(i.a)({},e))}}),Object(N.jsx)(F.b,{path:"/change/:id",exact:!0,render:function(e){return Object(N.jsx)(me,Object(i.a)({},e))}}),Object(N.jsx)(F.b,{path:"/comment",exact:!0,render:function(e){return Object(N.jsx)(Oe,Object(i.a)({postID:f},e))}}),Object(N.jsx)(F.b,{path:"/login",exact:!0,render:function(e){return Object(N.jsx)(X,Object(i.a)({setNameGlobal:m},e))}}),Object(N.jsx)(F.b,{path:"/register",exact:!0,render:function(e){return Object(N.jsx)(Z,Object(i.a)({},e))}})]})]})})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,201)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(fe,{})}),document.getElementById("root")),xe()}},[[144,1,2]]]);
//# sourceMappingURL=main.49e9c820.chunk.js.map