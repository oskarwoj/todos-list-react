(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),s=n.n(c),r=(n(8),n(9),function(){return o.a.createElement("form",{className:"form"},o.a.createElement("input",{className:"form__input",placeholder:"Co jest do zrobienia?"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),l=(n(10),function(e){var t=e.tasks,n=e.hideDoneTasks;return o.a.createElement("ul",{className:"tasks"},t.map((function(e){return o.a.createElement("li",{className:"tasks__item ".concat(e.done&&n?"task__item--hide":"")},o.a.createElement("button",{className:"tasks__button tasks__button--toogleDone"},e.done?"\u2714":""),o.a.createElement("span",{className:"tasks__content {\n\t\t\t\t\t\t".concat(e.done?"tasks__content--done":"")},e.content),o.a.createElement("button",{className:"tasks__button tasks__button--remove"},"\ud83d\uddd1"))})))}),i=(n(11),function(e){var t=e.tasks,n=e.hideDoneTasks;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"buttons__button"},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{className:"buttons__button",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie")))}),m=(n(12),function(e){var t=e.title,n=e.body,a=e.extraHeaderContent;return o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"section__header"},o.a.createElement("h2",{className:"section__title"},t),a),o.a.createElement("div",{className:"section__body"},n))}),u=(n(13),function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))}),d=(n(14),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)}),_=[{id:1,content:"prej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}];var E=function(){return o.a.createElement(d,null,o.a.createElement(u,{title:"Lista zada\u0144"}),o.a.createElement(m,{title:"Dodaj nowe zadanie",body:o.a.createElement(r,null)}),o.a.createElement(m,{title:"Lista zada\u0144",body:o.a.createElement(l,{tasks:_,hideDoneTasks:!1}),extraHeaderContent:o.a.createElement(i,{tasks:_,hideDoneTasks:!1})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.22c9d878.chunk.js.map