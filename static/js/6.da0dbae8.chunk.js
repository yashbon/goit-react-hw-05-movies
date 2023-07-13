"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{160:function(r,e,t){t.d(e,{Df:function(){return i},M1:function(){return l},Ph:function(){return p},TP:function(){return o},tx:function(){return h}});var n=t(165),a=t(861),c=t(243),s="https://api.themoviedb.org/3/",u={api_key:"9bd5849fe0df7e403f981c3192631e34",language:"en-US"},i=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var e,t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e="".concat(s,"trending/movie/day"),r.prev=1,r.next=4,c.Z.get(e,{params:u});case 4:return t=r.sent,r.abrupt("return",t.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(s,"movie/").concat(e),r.prev=1,r.next=4,c.Z.get(t,{params:u});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(s,"search/movie?&query='").concat(e,"'"),r.prev=1,r.next=4,c.Z.get(t,{params:u});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(s,"movie/").concat(e,"/credits"),r.prev=1,r.next=4,c.Z.get(t,{params:u});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(s,"movie/").concat(e,"/reviews"),r.prev=1,r.next=4,c.Z.get(t,{params:u});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()},6:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(683),a=t(439),c=t(87),s=t(184),u=function(r){var e=r.pathBack,t=r.children;return(0,s.jsx)(c.rU,{to:e,children:t})},i=t(160),o=t(791),p=t(689),l=function(){var r,e,t=(0,o.useState)([{}]),l=(0,a.Z)(t,2),h=l[0],v=l[1],d=(0,p.UO)().movieId;(0,o.useEffect)((function(){(0,i.TP)(d).then((function(r){r&&v((0,n.Z)({},r))}))}),[d]);var f=(0,p.TH)(),x=(0,o.useRef)(null!==(r=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/movies");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"MoviesDetails"}),(0,s.jsx)(u,{pathBack:x.current,children:"Back"}),(0,s.jsxs)("div",{style:{display:"flex",gap:"15px"},children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(h.poster_path),alt:h.title}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:h.title}),(0,s.jsxs)("p",{children:["User score: ",Math.round(10*h.vote_average),"%"]}),(0,s.jsx)("h4",{children:"Overview"}),(0,s.jsx)("p",{children:h.overview}),(0,s.jsx)("h4",{children:"Genres"}),(0,s.jsx)("p",{children:h.genres?h.genres.map((function(r){return r.name+" "})):""})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)(c.rU,{to:"cast",children:(0,s.jsx)("li",{children:"Cast"})}),(0,s.jsx)(c.rU,{to:"reviews",children:(0,s.jsx)("li",{children:"Reviews"})})]}),(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(p.j3,{})})]})]})}}}]);
//# sourceMappingURL=6.da0dbae8.chunk.js.map