(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),s=(n(13),n(7)),i=n(3),l=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r.trim()),s("")}},o.a.createElement("input",{value:r,className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(e){var t=e.target;return s(t.value)}}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),m=(n(15),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toogleTaskDone;return o.a.createElement("ul",{className:"tasks"},t.map((function(e){var t=e.id,r=e.content,s=e.done;return o.a.createElement("li",{key:t,className:"tasks__item ".concat(s&&n?"tasks__item--hidden":"")},o.a.createElement("button",{className:"tasks__button tasks__button--toogleDone",onClick:function(){return c(t)}},s?"\u2714":""),o.a.createElement("span",{className:"tasks__content ".concat(s?"tasks__content--done":"")},r),o.a.createElement("button",{className:"tasks__button tasks__button--remove",onClick:function(){return a(t)}},"\ud83d\uddd1"))})))}),d=(n(16),function(e){var t=e.tasks,n=e.hideDone,a=e.toogleHideDone,c=e.setAlldone;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:a,className:"buttons__button"},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{onClick:c,className:"buttons__button",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie")))}),f=(n(17),function(e){var t=e.title,n=e.body,a=e.extraHeaderContent;return o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"section__header"},o.a.createElement("h2",{className:"section__title"},t),a),o.a.createElement("div",{className:"section__body"},n))}),b=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))},k=(n(18),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)});var _=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),_=Object(l.a)(r,2),E=_[0],h=_[1];return o.a.createElement(k,null,o.a.createElement(b,{title:"Lista zada\u0144"}),o.a.createElement(f,{title:"Dodaj nowe zadanie",body:o.a.createElement(u,{addNewTask:function(e){h((function(t){return[].concat(Object(s.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])}))}})}),o.a.createElement(f,{title:"Lista zada\u0144",body:o.a.createElement(m,{tasks:E,hideDone:n,removeTask:function(e){h((function(t){return t.filter((function(t){return t.id!==e}))}))},toogleTaskDone:function(e){h((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t}))}))}}),extraHeaderContent:o.a.createElement(d,{tasks:E,hideDone:n,toogleHideDone:function(){c((function(e){return!e}))},setAlldone:function(){h((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!0})}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.23618be1.chunk.js.map