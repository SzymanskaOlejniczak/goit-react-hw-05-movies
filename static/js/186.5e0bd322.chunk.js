"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{854:function(e,t,n){var r=n(643),a=n(184);t.Z=function(){return(0,a.jsx)(r.g4,{height:"100",width:"100",color:"grey",ariaLabel:"loading"})}},186:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(689),i=n(791),o=n(390),f=n(854),p=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],h=n[1],v=(0,i.useState)(!1),l=(0,a.Z)(v,2),d=l[0],g=l[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.prev=1,t.next=4,o.Z.fetchReviews(e);case 4:n=t.sent,h(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)(f.Z,{}),0!==c.length&&(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:c.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",e.author]}),(0,p.jsx)("p",{children:e.content})]},e.id)}))})}),0===c.length&&(0,p.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},390:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),u=n(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="0d78144943c3507b0c4f9f0eca5bf958",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={fetchPopular:i,fetchSearchByKeyword:o,fetchMovieById:f,fetchActors:p,fetchReviews:h};t.Z=v}}]);
//# sourceMappingURL=186.5e0bd322.chunk.js.map