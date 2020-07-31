(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=function(){return r.a.createElement("h2",{style:{textAlign:"center",textTransform:"uppercase"}},"Expense Tracker")},u=(n(14),n(5)),s=n(8),m=n(1),i=function(e,t){switch(t.type){case"UPDATE_VALUES":return Object(m.a)(Object(m.a)({},e),t.payload);case"REMOVE_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transactions:[].concat(Object(s.a)(e.transactions),[t.payload])});default:return e}},E={transactions:[],balance:0,income:0,expense:0,removeTransaction:function(){},addTransaction:function(){}},p=Object(a.createContext)(E),d=function(e){var t=e.children,n=Object(a.useReducer)(i,E),c=Object(u.a)(n,2),l=c[0],o=c[1],s=l.transactions,m=l.balance,d=l.income,f=l.expense;return Object(a.useEffect)((function(){var e=s.reduce((function(e,t){return e+t.amount}),0).toFixed(2),t=s.filter((function(e){return e.amount<0})).reduce((function(e,t){return e+t.amount}),0),n=s.filter((function(e){return e.amount>0})).reduce((function(e,t){return e+t.amount}),0);o({type:"UPDATE_VALUES",payload:{balance:+e,expense:+t,income:+n}})}),[s]),r.a.createElement(p.Provider,{value:{transactions:s,balance:m,income:d,expense:f,removeTransaction:function(e){return o(function(e){return{type:"REMOVE_TRANSACTION",payload:e}}(e))},addTransaction:function(e){return o(function(e){return{type:"ADD_TRANSACTION",payload:e}}(e))}}},t)},f=function(){var e=Object(a.useContext)(p).balance,t=0===e?"":e>0?"+":"-";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{style:{textAlign:"center"}},"Your Balance"),r.a.createElement("h1",{style:{textAlign:"center"},className:e<0?"minus":"plus"},t,r.a.createElement("span",null,"\u20b9"),Math.abs(e)))},b=function(){var e=Object(a.useContext)(p),t=e.expense,n=e.income;return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"\u2191\xa0Income"),r.a.createElement("p",{className:"money plus"},r.a.createElement("span",null,"\u20b9"),n)),r.a.createElement("div",null,r.a.createElement("h4",null,"\u2193\xa0Expense"),r.a.createElement("p",{className:"money minus"},r.a.createElement("span",null,"\u20b9"),Math.abs(t))))},x=function(e){var t=e.transaction,n=t.amount,c=t.text,l=t.id,o=n<0?"-":"+",u=Object(a.useContext)(p).removeTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:n<0?"minus":"plus"},c," ",r.a.createElement("span",null,o,r.a.createElement("span",null,"\u20b9"),Math.abs(n)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return u(l)}},"x")))},v=function(){var e=Object(a.useContext)(p).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(x,{key:e.id,transaction:e})}))))},h=n(4),O=function(){var e=Object(a.useState)({amount:0,text:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],l=function(e){var t=e.target,a=t.name,r=t.value;c(Object(m.a)(Object(m.a)({},n),{},Object(h.a)({},a,r)))},o=Object(a.useContext)(p).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==n.text&&0!==n.amount){var t={id:Math.round((new Date).valueOf()*Math.random())+"",amount:parseFloat(n.amount),text:n.text};o(t),c({amount:0,text:""})}}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",placeholder:"Enter text...",required:!0,name:"text",value:n.text,onChange:l})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",placeholder:"Enter amount...",name:"amount",value:n.amount,onChange:l,step:"100"})),r.a.createElement("button",{className:"btn"},"Add transaction")))},j=function(){return r.a.createElement(d,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9e897b27.chunk.js.map