"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{904:function(t,n,e){e.d(n,{B:function(){return s}});var r,a=e(168),u=e(867).ZP.p(r||(r=(0,a.Z)(["\n  margin-top: 100px;\n  text-align: center;\n  color: red;\n  font-size: 26px;\n  font-weight: 500;\n\n  span{\ncolor: #010101;\nfont-size: 20px;\n  }\n"]))),c=e(184),s=function(t){var n=t.message;return(0,c.jsxs)(u,{children:["Oops! Something does wrong!",(0,c.jsxs)("span",{children:["(",n,")"]})]})}},713:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(689),a=e(87),u=e(184),c=function(t){var n=t.movies,e=Array.isArray(n)&&n.length,c=(0,r.TH)();return(0,u.jsx)("ul",{children:e&&n.map((function(t){var n=t.id,e=t.title;t.poster_path;return(0,u.jsx)("li",{className:"movie-item",children:(0,u.jsx)(a.rU,{className:"movie-link",state:{from:c},to:"/movies/".concat(n),children:(0,u.jsx)("p",{className:"title",children:e})})},n)}))})}},931:function(t,n,e){e.r(n);var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(779),i=e(791),o=e(904),p=e(390),f=e(713),v=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),l=d[0],m=d[1],x=(0,i.useState)(null),g=(0,a.Z)(x,2),w=g[0],Z=g[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,p.cu)();case 4:n=t.sent,e=n.results,u(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(t.t0.message);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)("div",{children:[l&&(0,v.jsx)(s.Z,{}),w&&(0,v.jsx)(o.B,{}),(0,v.jsx)("h1",{children:"Trending today"}),e&&(0,v.jsx)(f.O,{movies:e})]})}},390:function(t,n,e){e.d(n,{Bt:function(){return f},DD:function(){return o},Ny:function(){return i},cu:function(){return s},y:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.params={api_key:"0c1e89b9ded609b03f6b23eba7068d6d"};var s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=931.9bf7994e.chunk.js.map