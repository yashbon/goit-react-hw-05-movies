"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[500],{174:function(r,t,n){n.d(t,{Z:function(){return h}});var e,a,u,c=n(689),o=n(168),s=n(87),i=n(867),p=i.ZP.ul(e||(e=(0,o.Z)(["\n\n"]))),f=i.ZP.li(a||(a=(0,o.Z)(["\n"]))),v=(0,i.ZP)(s.rU)(u||(u=(0,o.Z)(["\n    text-decoration: none;\n"]))),l=n(184);var h=function(r){var t=r.movies,n=(0,c.TH)();return(0,l.jsx)(p,{children:t.map((function(r){return(0,l.jsx)(f,{children:(0,l.jsx)(v,{to:"movies/".concat(r.id),state:{from:n},children:r.original_title})},r.id)}))})}},160:function(r,t,n){n.d(t,{Df:function(){return s},M1:function(){return f},Ph:function(){return p},TP:function(){return i},tx:function(){return v}});var e=n(165),a=n(861),u=n(243),c="https://api.themoviedb.org/3/",o={api_key:"9bd5849fe0df7e403f981c3192631e34",language:"en-US"},s=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){var t,n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(c,"trending/movie/day"),r.prev=1,r.next=4,u.Z.get(t,{params:o});case 4:return n=r.sent,r.abrupt("return",n.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(c,"movie/").concat(t),r.prev=1,r.next=4,u.Z.get(n,{params:o});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(c,"search/movie?&query='").concat(t,"'"),r.prev=1,r.next=4,u.Z.get(n,{params:o});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(c,"movie/").concat(t,"/credits"),r.prev=1,r.next=4,u.Z.get(n,{params:o});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){var n,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(c,"movie/").concat(t,"/reviews"),r.prev=1,r.next=4,u.Z.get(n,{params:o});case 4:return a=r.sent,r.abrupt("return",a.data);case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}()},500:function(r,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(433),a=n(439),u=n(174),c=n(184),o=function(r){var t=r.onChange,n=r.onSubmit;return(0,c.jsxs)("form",{onSubmit:n,children:[(0,c.jsx)("input",{type:"text",autoFocus:!0,onChange:t}),(0,c.jsx)("button",{type:"submit",children:(0,c.jsx)("span",{children:"Search"})})]})},s=n(160),i=n(791),p=n(87),f=n(689);var v=function(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),n=t[0],v=t[1],l=(0,i.useState)(""),h=(0,a.Z)(l,2),Z=h[0],d=h[1],m=(0,p.lr)(),x=(0,a.Z)(m,2),g=x[0],b=x[1];(0,i.useEffect)((function(){var r=g.get("query");r&&(0,s.Ph)(r).then((function(r){r&&v((0,e.Z)(r.results))}))}),[g]);var w=(0,f.TH)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Movies"}),(0,c.jsx)(o,{location:w,onChange:function(r){d(r.target.value)},onSubmit:function(r){r.preventDefault(),b({query:Z}),r.currentTarget.reset()}}),n.length>0&&(0,c.jsx)(u.Z,{movies:n})]})}}}]);
//# sourceMappingURL=500.00a8b369.chunk.js.map