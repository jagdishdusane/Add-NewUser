(this.webpackJsonpadduser=this.webpackJsonpadduser||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__1dLhg",modal:"ErrorModal_modal__15X3t",header:"ErrorModal_header__3cpm5",content:"ErrorModal_content__39bcA",actions:"ErrorModal_actions__I6K1b"}},function(e,t,n){e.exports={backdrop:"PopUpModal_backdrop__2_VsH",modal:"PopUpModal_modal__2_8km",header:"PopUpModal_header__31-qG",content:"PopUpModal_content__1oQ_M",actions:"PopUpModal_actions__3WwXE"}},,,function(e,t,n){e.exports={input:"AddUser_input__34FGT",invalid:"AddUser_invalid__3KRef"}},,,function(e,t,n){e.exports={button:"Button_button__1a8hg"}},function(e,t,n){e.exports={card:"Card_card__Gqo0k"}},function(e,t,n){e.exports={usersList:"UserItem_usersList__3nf7g"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),s=n.n(r),o=(n(18),n(13)),i=n(2),l=(n(19),n(10)),d=n.n(l),j=n(0),u=function(e){return Object(j.jsx)("button",{className:d.a.button,onClick:e.onClick,children:e.children})},b=n(11),h=n.n(b),m=function(e){return Object(j.jsx)("div",{className:"".concat(h.a.card," ").concat(e.className),children:e.children})},O=n(7),_=n.n(O),x=n(3),f=n.n(x),p=function(e){return Object(j.jsx)("div",{className:f.a.backdrop,onClick:e.onConfirm,children:Object(j.jsxs)(m,{className:f.a.modal,children:[Object(j.jsx)("header",{className:f.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:f.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:f.a.actions,children:Object(j.jsx)(u,{onClick:e.onConfirm,children:"Okay"})})]})})},g=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],b=Object(c.useState)(),h=Object(i.a)(b,2),O=h[0],x=h[1];return Object(j.jsxs)("div",{children:[O&&Object(j.jsx)(p,{title:O.title,message:O.message,onConfirm:function(){x(null)}}),Object(j.jsx)(m,{className:"".concat(_.a.input," ").concat(O&&_.a.invalid),children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==a.trim().length&&0!==l.trim().length?+l<0?x({title:"Invalid Age",message:"Please Enter Valid Age ( > 0)"}):(e.userHandler(a,l),r(""),d("")):x({title:"Invalid Input",message:"Please Enter a Valid name and age (non-empty value)"})},children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",value:a,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"",children:"Age(Year)"}),Object(j.jsx)("input",{type:"number",value:l,onChange:function(e){d(e.target.value)}}),Object(j.jsx)(u,{children:"Add User"})]})})]})},v=n(4),C=n.n(v),k=function(e){return Object(j.jsx)("div",{className:C.a.backdrop,onClick:e.onCancel,children:Object(j.jsxs)(m,{className:C.a.modal,children:[Object(j.jsx)("header",{className:C.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:C.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsxs)("footer",{className:C.a.actions,children:[Object(j.jsx)(u,{onClick:e.ondelete,children:"Okay"}),Object(j.jsx)(u,{onClick:e.onCancel,children:"Cancel"})]})]})})},N=n(12),M=n.n(N),U=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(j.jsxs)(a.a.Fragment,{children:[r&&Object(j.jsx)(k,{title:"Delete Data",message:"Are you want sure to delete data?",ondelete:function(){e.onDeleteItem(e.id)},onCancel:function(){s(!1)}}),Object(j.jsx)(m,{className:"".concat(M.a.usersList," ").concat(e.className),children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{onClick:function(){s(!0)},children:e.children})})})]})},E=function(e){return Object(j.jsx)(a.a.Fragment,{children:e.users.map((function(t){return Object(j.jsxs)(U,{id:t.id,onDeleteItem:e.onDelete,children:[t.user," (",t.age," year old)"]},t.id)}))})},F=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(g,{userHandler:function(e,t){r((function(n){return[].concat(Object(o.a)(n),[{user:e,age:t,id:Math.random().toString()}])}))}}),Object(j.jsx)(E,{users:n,onDelete:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),I()}],[[21,1,2]]]);
//# sourceMappingURL=main.6385e09a.chunk.js.map