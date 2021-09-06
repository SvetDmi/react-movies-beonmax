(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),r=c.n(n),i=(c(9),c(0));function l(){return Object(i.jsx)("nav",{className:"blue darken-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"!#",className:"brand-logo",children:"Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Git"})})})]})})}var j=c(2);function o(e){var t=e.title,c=e.poster,a=e.year,s=e.type;return Object(i.jsxs)("li",{className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===c?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400?text=".concat(t),alt:t}):Object(i.jsx)("img",{className:"activator",src:c,alt:t})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title movie__title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:s})]})]})]})}function d(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("ul",{className:"cardList",children:c.length?c.map((function(e){return Object(i.jsx)(o,{title:e.Title,poster:e.Poster,type:e.Type,year:e.Year},e.imdbID)})):Object(i.jsx)("h4",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})}function h(){return Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})}function b(e){var t=e.onSearch,c=s.a.useState(""),a=Object(j.a)(c,2),n=a[0],r=a[1],l=s.a.useState("all"),o=Object(j.a)(l,2),d=o[0],h=o[1];function b(e){var c=e.target.dataset.type;h(c),t(n,c)}return console.log(d),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:n,onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(n,d)}}),Object(i.jsx)("button",{className:"btn search__btn",onClick:function(){return t(n,d)},children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(i.jsxs)("div",{className:"search__radios",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:b,checked:"all"===d}),Object(i.jsx)("span",{children:"\u0412\u0441\u0435"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:b,checked:"movie"===d}),Object(i.jsx)("span",{children:"\u0422\u043e\u043b\u044c\u043a\u043e \u0444\u0438\u043b\u044c\u043c\u044b"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:b,checked:"series"===d}),Object(i.jsx)("span",{children:"\u0422\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u0440\u0438\u0430\u043b\u044b"})]})]})]})}var O=Object({NODE_ENV:"production",PUBLIC_URL:"/react-movies-beonmax",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_MOVIES_KEY,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";return fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))};function x(){var e=s.a.useState([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=s.a.useState(!0),r=Object(j.a)(n,2),l=r[0],o=r[1];s.a.useEffect((function(){u("matrix","all").then((function(e){a(e.Search),o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]);return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(b,{onSearch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";o(!0),u(e,t).then((function(e){a(e.Search),o(!1)})).catch((function(e){console.log(e),o(!1)}))}}),l?Object(i.jsx)(h,{}):Object(i.jsx)(d,{movies:c})]})}function m(){return Object(i.jsx)("footer",{className:"page-footer blue darken-3",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Git"})]})})})}function p(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{}),Object(i.jsx)(m,{})]})}r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.27662ff2.chunk.js.map