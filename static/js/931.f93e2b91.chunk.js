"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{904:function(e,n,t){t.d(n,{B:function(){return c}});var r,a=t(168),s=t(867).ZP.p(r||(r=(0,a.Z)(["\n  margin-top: 100px;\n  text-align: center;\n  color: red;\n  font-size: 26px;\n  font-weight: 500;\n\n  span{\ncolor: #010101;\nfont-size: 20px;\n  }\n"]))),u=t(184),c=function(e){var n=e.message;return(0,u.jsxs)(s,{children:["Oops! Something does wrong!",(0,u.jsxs)("span",{children:["(",n,")"]})]})}},713:function(e,n,t){t.d(n,{O:function(){return u}});var r=t(689),a=t(87),s=t(184),u=function(e){var n=e.movies,t=Array.isArray(n)&&n.length,u=(0,r.TH)();return(0,s.jsx)("ul",{children:t&&n.map((function(e){var n=e.id,t=e.title;e.poster_path;return(0,s.jsx)("li",{className:"movie-item",children:(0,s.jsx)(a.rU,{className:"movie-link",state:{from:u},to:"/movies/".concat(n),children:(0,s.jsx)("p",{className:"title",children:t})})},n)}))})}},931:function(e,n,t){t.r(n);var r=t(861),a=t(439),s=t(757),u=t.n(s),c=t(779),i=t(791),o=t(904),p=t(390),f=t(713),v=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1],d=(0,i.useState)(!1),h=(0,a.Z)(d,2),l=h[0],m=h[1],x=(0,i.useState)(null),g=(0,a.Z)(x,2),w=g[0],Z=g[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,p.cu)();case 4:n=e.sent,t=n.results,s(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("div",{children:[l&&(0,v.jsx)(c.Z,{}),w&&(0,v.jsx)(o.B,{}),(0,v.jsx)("h1",{children:"Trending today"}),t&&(0,v.jsx)(f.O,{movies:t})]})}},390:function(e,n,t){t.d(n,{DD:function(){return o},Ny:function(){return i},cu:function(){return c}});var r=t(861),a=t(757),s=t.n(a),u=t(243);u.Z.defaults.params={api_key:"0c1e89b9ded609b03f6b23eba7068d6d"};var c=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=931.f93e2b91.chunk.js.map