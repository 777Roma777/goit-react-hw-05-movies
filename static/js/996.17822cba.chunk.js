"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[996],{904:function(e,n,t){t.d(n,{B:function(){return o}});var r,i=t(168),a=t(867).ZP.p(r||(r=(0,i.Z)(["\n  margin-top: 100px;\n  text-align: center;\n  color: red;\n  font-size: 26px;\n  font-weight: 500;\n\n  span{\ncolor: #010101;\nfont-size: 20px;\n  }\n"]))),s=t(184),o=function(e){var n=e.message;return(0,s.jsxs)(a,{children:["Oops! Something does wrong!",(0,s.jsxs)("span",{children:["(",n,")"]})]})}},996:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),i=t(439),a=t(757),s=t.n(a),o=t(689),c=t(791),u=t(390),v=t(904),l=t(779),m=t(87),d={image:"movieInfo_image__lvntl","main-info":"movieInfo_main-info__e7UM8",button:"movieInfo_button__B7hRD","movie-title":"movieInfo_movie-title__-G75G","movie-vote":"movieInfo_movie-vote__lI34m","movie-overview":"movieInfo_movie-overview__ElxlF","movie-details":"movieInfo_movie-details__at3DP","genres-genres":"movieInfo_genres-genres__40nJs","genre-item":"movieInfo_genre-item__8Ulrz","additional-info":"movieInfo_additional-info__3vjTD","cast-reviews-link":"movieInfo_cast-reviews-link__bWbAQ"},f=t(184),p=function(e){var n,t,r=e.movie,i=(0,o.TH)(),a=(0,c.useRef)(null!==(n=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,f.jsxs)("div",{children:[(0,f.jsx)(m.rU,{to:a.current,children:(0,f.jsx)("button",{className:d.button,children:"Go back"})}),(0,f.jsxs)("div",{className:d["main-info"],children:[(0,f.jsx)("img",{className:d.image,src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title}),(0,f.jsxs)("div",{className:d["movie-details"],children:[(0,f.jsx)("h2",{className:d["movie-title"],children:r.title}),(0,f.jsxs)("p",{className:d["movie-vote"],children:["Vote average: ",r.vote_average.toFixed(1)]}),(0,f.jsx)("p",{className:d["movie-overview"],children:"Overview: "}),(0,f.jsx)("span",{children:r.overview}),(0,f.jsxs)("ul",{className:d["genres-list"],children:[(0,f.jsx)("p",{className:d["genres-genres"],children:"Genres:"}),r.genres.map((function(e){return(0,f.jsx)("li",{className:d["genre-item"],children:e.name},e.id)}))]})]})]}),(0,f.jsxs)("div",{className:d["additional-info"],children:[(0,f.jsx)("h3",{children:"Additional information:"}),(0,f.jsxs)("ul",{className:d["additional-list"],children:[(0,f.jsx)("li",{children:(0,f.jsx)(m.rU,{to:"cast",className:d["cast-reviews-link"],children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(m.rU,{to:"reviews",className:d["cast-reviews-link"],children:"Reviews"})})]})]}),(0,f.jsx)(o.j3,{})]})},h=function(){var e=(0,o.UO)().movieId,n=(0,c.useState)(!1),t=(0,i.Z)(n,2),a=t[0],m=t[1],d=(0,c.useState)(null),h=(0,i.Z)(d,2),x=h[0],_=h[1],g=(0,c.useState)(null),w=(0,i.Z)(g,2),j=w[0],b=w[1];return(0,c.useEffect)((function(){if(e){var n=function(){var n=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,u.DD)(e);case 4:t=n.sent,b(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),_(n.t0.message);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[e]),(0,f.jsxs)("div",{children:[a&&(0,f.jsx)(l.Z,{}),x&&(0,f.jsx)(v.B,{}),j&&(0,f.jsx)(p,{movie:j})]})}},390:function(e,n,t){t.d(n,{Bt:function(){return l},DD:function(){return u},Ny:function(){return c},cu:function(){return o},y:function(){return v}});var r=t(861),i=t(757),a=t.n(i),s=t(243);s.Z.defaults.params={api_key:"0c1e89b9ded609b03f6b23eba7068d6d"};var o=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=996.17822cba.chunk.js.map