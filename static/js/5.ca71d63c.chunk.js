(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{597:function(e,s,a){e.exports=a.p+"static/media/avatarDefault.6c93098b.jpg"},599:function(e,s,a){"use strict";a.d(s,"a",(function(){return u}));var t=a(78),n=a(79),r=a(80),l=a(81),i=a(82),o=a(0),c=a.n(o),g=a(70),m=a(24),d=function(e){return{isAuth:e.auth.isAuth}},u=function(e){var s=function(s){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,s),Object(n.a)(a,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(g.a,{to:"/login"})}}]),a}(c.a.Component);return Object(m.b)(d)(s)}},600:function(e,s,a){e.exports={dialogsPage:"Dialogs_dialogsPage__Vj-n5",cardDialogs:"Dialogs_cardDialogs__1uSuo",dialogUser:"Dialogs_dialogUser__3ZW-R",dialogUser_active:"Dialogs_dialogUser_active__Gv5WR",dialogUser_Item:"Dialogs_dialogUser_Item__3Msgq",activeName:"Dialogs_activeName__2eTHX",message:"Dialogs_message__2tLdL",message_card:"Dialogs_message_card__3_tVC",message_card_select:"Dialogs_message_card_select__3US-J",message_delete:"Dialogs_message_delete__347JM",message_left:"Dialogs_message_left__3qHEf",message_right:"Dialogs_message_right__2SbB4",message_data_right:"Dialogs_message_data_right__OoqIP",message_data_left:"Dialogs_message_data_left__1MamM",message_viewed:"Dialogs_message_viewed__275qw",input:"Dialogs_input__Ed3Pc"}},621:function(e,s,a){"use strict";a.r(s);var t=a(78),n=a(79),r=a(80),l=a(81),i=a(82),o=a(0),c=a.n(o),g=a(24),m=a(599),d=a(18),u=a(600),p=a.n(u),_=a(120),h=a(33),f=a(597),D=a.n(f),M=a(594),E=a(601),I=a(603),b=a.n(I),v=function(e){return c.a.createElement(M.a,{className:p.a.cardDialogs},c.a.createElement(E.Scrollbars,{style:{width:"100%",height:"100%"}},e.usersInfo.map((function(s){return c.a.createElement(M.a,{key:s.id,className:e.openUserDialogsId===s.id?"".concat(p.a.dialogUser," ").concat(p.a.dialogUser_active):p.a.dialogUser},c.a.createElement("div",{className:p.a.dialogUser_Item},c.a.createElement(h.b,{to:"/profile/".concat(s.id)},c.a.createElement("img",{alt:"user.id",src:s.photos.small?s.photos.small:D.a})),c.a.createElement(h.b,{to:"/dialogs/".concat(s.id),onClick:function(){return e.onUserMessages(s.id)}},c.a.createElement("div",null,s.userName),c.a.createElement("div",{style:{fontSize:"14px"}},"\u0411\u044b\u043b(a): ",c.a.createElement(b.a,{format:"DD-MM-YYYY HH:mm",style:{fontSize:"12px"}},s.lastUserActivityDate)),s.hasNewMessages&&c.a.createElement("span",{style:{fontSize:"14px",textAlign:"center",color:"red"}},"\u041d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439: ",s.newMessagesCount))))}))))},k=a(207),U=a(72),y=a(197),T=a(281),j=a(298),O=a(619),w=Object(T.a)({form:"newMessage"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit((function(s,a){e.sendMessageThunk(e.openUserDialogsId,s.newMessage),a(Object(U.a)("newMessage"))}))},c.a.createElement("div",{className:p.a.input},c.a.createElement(y.a,{name:"newMessage",component:"textarea",placeholder:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),c.a.createElement(j.a,{variant:"secondary",type:"submit"},"Ok")))})),N=function(e){var s=e.myId,a=Object(k.a)(e,["myId"]),t=a.userMessages.items||[];return c.a.createElement(M.a,{className:p.a.cardDialogs},c.a.createElement("div",{style:{height:"86vh"}},c.a.createElement(E.Scrollbars,{style:{width:"100%",height:"100%"}},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"".concat(p.a.message)},c.a.createElement(M.a,{className:"".concat(e.senderId===s?p.a.message_right:p.a.message_left," ").concat(e.isSelect?"".concat(p.a.message_card_select," ").concat(p.a.message_card):p.a.message_card),onClick:function(){return a.selectMessageThunk(e.id)}},c.a.createElement("div",null,e.body.replace("<br />",""),e.isSelect&&e.senderId===s&&c.a.createElement("span",null,c.a.createElement(O.a,{className:p.a.message_delete,onClick:function(){return a.deleteMessageThunk(e)}}))),c.a.createElement(b.a,{format:"DD-MM-YYYY HH:mm",className:e.senderId===s?p.a.message_data_right:p.a.message_data_left},e.addedAt),e.senderId===s&&!e.viewed&&c.a.createElement("div",{className:p.a.message_viewed},"\u043d\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e")))})))),-1!==a.openUserDialogsId&&c.a.createElement(w,{openUserDialogsId:a.openUserDialogsId,sendMessageThunk:a.sendMessageThunk}))},S=a(84),x=function(e){function s(){return Object(t.a)(this,s),Object(r.a)(this,Object(l.a)(s).apply(this,arguments))}return Object(i.a)(s,e),Object(n.a)(s,[{key:"componentDidMount",value:function(){this.props.getAllDialogsThunk(),-1!==this.props.openUserDialogsId&&this.props.getUserMessagesThunk(this.props.openUserDialogsId)}},{key:"componentWillUnmount",value:function(){this.props.getUserMessagesThunk(-1)}},{key:"render",value:function(){return null===this.props.usersInfo?c.a.createElement(S.a,null):0===this.props.usersInfo.length?c.a.createElement(M.a,{style:{textAlign:"center",fontSize:"20px",height:"100px"}},"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u043d\u0430\u0447\u0430\u0442\u044b\u0445 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432. \u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",c.a.createElement(h.b,{to:"/users"}," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")):c.a.createElement("div",{className:p.a.dialogsPage},c.a.createElement("div",null,c.a.createElement(v,{usersInfo:this.props.usersInfo,onUserMessages:this.props.getUserMessagesThunk,openUserDialogsId:this.props.openUserDialogsId})),c.a.createElement("div",null,c.a.createElement(N,{userMessages:this.props.userMessages,openUserDialogsId:this.props.openUserDialogsId,myId:this.props.myId,sendMessageThunk:this.props.sendMessageThunk,selectMessageThunk:this.props.selectMessageThunk,deleteMessageThunk:this.props.deleteMessageThunk})))}}]),s}(c.a.Component);s.default=Object(d.d)(Object(g.b)((function(e){return{usersInfo:e.messagesPage.usersInfo,userMessages:e.messagesPage.userMessages,openUserDialogsId:e.messagesPage.openUserDialogsId,myId:e.auth.userId}}),{getAllDialogsThunk:_.c,getUserMessagesThunk:_.d,sendMessageThunk:_.g,deleteMessageThunk:_.b,selectMessageThunk:_.f}),m.a)(x)}}]);
//# sourceMappingURL=5.ca71d63c.chunk.js.map