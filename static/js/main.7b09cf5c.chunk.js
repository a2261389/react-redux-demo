(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{61:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(24),i=a(15),s=a(13),d=a(31),u=a(59),m=a(23),p=a(40),f=a(19),v=a(46),E=a(32),b=a(52),h=a(60),g=a(14),O=a(54),y=a(41),j=a(9),x=function(){var e=localStorage.getItem("posts");return null===e?{posts:[]}:JSON.parse(e)}();var k={light:{color:"#000000",backgroundColor:"#eeeeee",borderColor:"#000000",borderTop:"1px solid #000000"},dark:{color:"#ffffff",backgroundColor:"#343A40",borderColor:"#eeeeee"}},w=Object(n.createContext)({theme:k.dark,changeTheme:function(){}}),I=a(30),T=a(29),S=a(26),C=a(25),D=a.n(C);a(50);D.a.locale("zh-tw");var A=function(e){var t=e.editIndex,a=e.callback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],d=c[1],u=Object(n.useState)({isValid:!1,isInvalid:!1}),m=Object(s.a)(u,2),p=m[0],f=m[1],v=Object(i.b)();return r.a.createElement(g.a,{onSubmit:function(e){(e.preventDefault(),o)?(v({type:"UPDATE_TODO",index:t,text:o}),d(""),f({isValid:!1,isInvalid:!1}),a()):f({isValid:!1,isInvalid:!0})}},r.a.createElement(g.a.Group,null,r.a.createElement(T.a,{className:"mb-3"},r.a.createElement(S.a,{placeholder:"Type any todo text..",type:"text",value:o,isValid:p.isValid,isInvalid:p.isInvalid,onChange:function(e){d(e.target.value);var t=""!==e.target.value;f({isValid:t,isInvalid:!t})}}),r.a.createElement(T.a.Append,null,r.a.createElement(I.a,{variant:"outline-secondary",type:"submit"},"\u5132\u5b58")),r.a.createElement(g.a.Control.Feedback,{type:"invalid"},r.a.createElement("h6",null,"\u8acb\u8f38\u5165\u6587\u5b57")))),r.a.createElement(I.a,{variant:"outline-secondary",type:"button",onClick:function(){a()}},"\u53d6\u6d88"))};function N(){var e=Object(b.a)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n"]);return N=function(){return e},e}var V=O.a.button(N()),_=function(e){var t=e.completed,a=e.text;return r.a.createElement("span",{style:{textDecoration:t?"line-through":""}},a)},P=function(){var e=Object(n.useContext)(w).theme,t=Object(n.useState)({isEditing:!1,editId:null}),a=Object(s.a)(t,2),l=a[0],c=a[1],o=Object(i.c)((function(e){return e.todos.posts})),d=Object(i.b)();return r.a.createElement(r.a.Fragment,null,o.length?o.map((function(t,a){return r.a.createElement(h.a.Item,{variant:"success",style:e,key:t.id,className:"mb-2"},l.editId===a&&l.isEditing?r.a.createElement(A,{editIndex:a,callback:function(){c({editId:a,isEditing:!1})}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",null,r.a.createElement(g.a.Check,{type:"checkbox",custom:!0,label:r.a.createElement(_,{completed:t.completed,text:t.text}),inline:!0,id:"todo-checkbox-".concat(t.id),checked:t.completed,onChange:function(){d({type:"UPDATE_TODO_COMPLETE",id:t.id})}})),r.a.createElement("h3",null,r.a.createElement(y.c,{onClick:function(){d({type:"DELETE_TODO",id:t.id})}}))),r.a.createElement("hr",{style:e}),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(V,{type:"button",onClick:function(){!function(e){c({editId:e,isEditing:!0})}(a)}},r.a.createElement("h6",null,r.a.createElement(y.a,null),"\u7de8\u8f2f"))),r.a.createElement("div",{className:"text-right"},r.a.createElement(y.b,null),r.a.createElement("small",{className:"ml-1"},t.createdAt)))))})):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h2",null,"No Todos")))};D.a.locale("zh-tw");var W=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({isValid:!1,isInvalid:!1}),o=Object(s.a)(c,2),d=o[0],u=o[1],m=Object(i.b)();return r.a.createElement(g.a,{onSubmit:function(e){var t;(e.preventDefault(),a)?(m((t=a,{type:"ADD_TODO",createdAt:D()().format("YYYY-MM-DD HH:mm:ss"),text:t})),l(""),u({isValid:!1,isInvalid:!1})):u({isValid:!1,isInvalid:!0})}},r.a.createElement(g.a.Group,null,r.a.createElement(T.a,{className:"mb-3"},r.a.createElement(S.a,{placeholder:"Type any todo text..",type:"text",value:a,isValid:d.isValid,isInvalid:d.isInvalid,onChange:function(e){l(e.target.value);var t=""!==e.target.value;u({isValid:t,isInvalid:!t})}}),r.a.createElement(T.a.Append,null,r.a.createElement(I.a,{variant:"outline-secondary",type:"submit"},"Add")),r.a.createElement(g.a.Control.Feedback,{type:"invalid"},r.a.createElement("h6",null,"\u8acb\u8f38\u5165\u6587\u5b57")))))},J={default:{textDecoration:"none",color:"grey",margin:"5px 10px 5px 10px"},active:{color:"white"},noSelect:{userSelect:"none"}};var L=function(){var e=r.a.useContext(w),t=e.theme,a=e.changeTheme;return r.a.createElement(p.a,null,r.a.createElement(v.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(v.a.Brand,{style:J.noSelect},"Todo List"),r.a.createElement(E.a,null,r.a.createElement(E.a.Item,null,r.a.createElement(p.b,{style:J.default,activeStyle:J.active,to:"/add"},"Add Todo")),r.a.createElement(E.a.Item,null,r.a.createElement(p.b,{style:J.default,activeStyle:J.active,to:"/post"},"Todos")),r.a.createElement(E.a.Item,{style:t,onClick:function(){a()}},"Color"))),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/add"},r.a.createElement(d.a,{className:"justify-content-center mt-5"},r.a.createElement(m.a,{md:{span:5}},r.a.createElement(W,null)))),r.a.createElement(f.a,{path:"/post"},r.a.createElement(d.a,{className:"justify-content-center mt-5"},r.a.createElement(m.a,{md:{span:5}},r.a.createElement(P,null))))))},U=function(){var e=Object(n.useContext)(w).theme,t=Object(n.useState)(e),a=Object(s.a)(t,2),l=a[0],c=a[1];return r.a.createElement(w.Provider,{value:{theme:l,changeTheme:function(){Object.is(l,k.dark)?c(k.light):c(k.dark)}}},r.a.createElement(u.a,{fluid:!0},r.a.createElement(d.a,null,r.a.createElement(m.a,null,r.a.createElement(L,null)))))},F=Object(o.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if("ADD_TODO"===t.type){var a=e.posts.map((function(e){return e})),n=1;void 0!==e.posts[e.posts.length-1]&&(n=e.posts[e.posts.length-1].id+1),a.push({text:t.text,id:n,completed:!1,createdAt:t.createdAt});var r=Object(j.a)(Object(j.a)({},e),{},{posts:a});return localStorage.setItem("posts",JSON.stringify(r)),r}if("DELETE_TODO"===t.type){var l=e.posts.filter((function(e){return t.id!==e.id})),c=Object(j.a)(Object(j.a)({},e),{},{posts:l});return localStorage.setItem("posts",JSON.stringify(c)),c}if("UPDATE_TODO_COMPLETE"===t.type){var o=Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e}))});return localStorage.setItem("posts",JSON.stringify(o)),o}if("UPDATE_TODO"===t.type){var i=Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e,a){return a!==t.index?e:Object(j.a)(Object(j.a)({},e),{},{text:t.text})}))});return localStorage.setItem("posts",JSON.stringify(i)),i}return e}}),M=(a(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=Object(o.c)(F);c.a.render(r.a.createElement(i.a,{store:B},r.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-redux-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-redux-demo","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.7b09cf5c.chunk.js.map