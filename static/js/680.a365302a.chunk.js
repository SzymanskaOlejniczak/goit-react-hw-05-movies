"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{639:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(643),a="Loader_grid__69Pix",c=r(184);var u=function(){return(0,c.jsx)(n.rj,{height:"80",width:"80",color:"rgb(255,165,0)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:a,visible:!0})}},25:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(87),a=r(689),c="EditorList_moviesList__2tPqN",u="EditorList_moviesList__item__IEAje",s=r(184),i=function(e){var t=e.films,r=(0,a.TH)();return(0,s.jsx)("ul",{className:c,children:t&&t.map((function(e){return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})}},680:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(25),o=r(390),f=r(639),p=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),d=v[0],h=v[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,o.Z.fetchPopular();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{className:"s.h1",children:"Trending today"}),r&&(0,p.jsx)(i.Z,{films:r}),d&&(0,p.jsx)(f.Z,{})]})}},390:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="0d78144943c3507b0c4f9f0eca5bf958",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={fetchPopular:i,fetchSearchByKeyword:o,fetchMovieById:f,fetchActors:p,fetchReviews:l};t.Z=v}}]);
//# sourceMappingURL=680.a365302a.chunk.js.map