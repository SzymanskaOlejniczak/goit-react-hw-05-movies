"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(689),i=r(791),o=r(390),p=r(854),f="Cast_castList__ARoWn",l="Cast_castItem__-Jcfe",h="Cast_itemDescr__SMxqQ",v="Cast_personName__y5ayY",d="Cast_character__tKDlA",m=r(184),_=function(){var e=(0,u.UO)().movieId,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],_=r[1],g=(0,i.useState)(!1),x=(0,a.Z)(g,2),w=x[0],y=x[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.prev=1,t.next=4,o.Z.fetchActors(e);case 4:r=t.sent,_(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,y(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,m.jsxs)("div",{children:[w&&(0,m.jsx)(p.Z,{}),(0,m.jsx)("ul",{className:f,children:c.map((function(e){return(0,m.jsxs)("li",{className:l,children:[(0,m.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:e.original_name}),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("p",{className:v,children:e.name}),(0,m.jsxs)("p",{className:d,children:["Character: ",e.character]})]})]},e.id)}))})]})}},854:function(e,t,r){var n=r(643),a=r(184);t.Z=function(){return(0,a.jsx)(n.g4,{height:"100",width:"100",color:"grey",ariaLabel:"loading"})}},390:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(263);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="0d78144943c3507b0c4f9f0eca5bf958",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fetchPopular:i,fetchSearchByKeyword:o,fetchMovieById:p,fetchActors:f,fetchReviews:l};t.Z=h}}]);
//# sourceMappingURL=76.562f3d9f.chunk.js.map