"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[713],{7713:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var r,a,i,c,s,u=e(5861),o=e(9439),p=e(7757),f=e.n(p),d=e(4635),l=e(2019),h=e(168),v=e(6444),m=v.ZP.h1(r||(r=(0,h.Z)(['\n\tfont-weight: 600;\n\tfont-size: 26px;\n\twhite-space: nowrap;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row-reverse;\n\tcolumn-gap: 20px;\n\tmargin-bottom: 25px;\n\t&::before {\n\t\tcontent: "";\n\t\tdisplay: inline-block;\n\t\twidth: 100%;\n\t\theight: 1px;\n\t\tbackground-color: var(--accent);\n\t\ttransform: translateY(2px);\n\t}\n']))),x=e(7214),w=e(1087),g=e(7689),Z=v.ZP.ul(a||(a=(0,h.Z)(["\n\tdisplay: block;\n"]))),k=v.ZP.li(i||(i=(0,h.Z)(["\n\twidth: 232px;\n\tflex-basis: calc((100% - 20px * (5 - 1)) / 5);\n"]))),b=(v.ZP.div(c||(c=(0,h.Z)(["\n\theight: 350px;\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 10px;\n\t}"]))),v.ZP.h2(s||(s=(0,h.Z)(["\n\tfont-weight: 600;\n\tmargin-top: 8px;\n\tline-height: 1.5;\n\tpadding-right: 10px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n"])))),y=e(184),_=function(t){var n=t.movies,e=(0,g.TH)();return(0,y.jsx)(Z,{children:n.map((function(t){var n=t.id,r=t.title;return(0,y.jsx)(k,{children:(0,y.jsx)(w.rU,{to:"movies/".concat(n),state:{from:e},children:(0,y.jsx)(b,{children:r})})},n)}))})},j=e(2791),P=function(){var t=(0,j.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],a=(0,j.useState)(l.Z.idle),i=(0,o.Z)(a,2),c=i[0],s=i[1];(0,j.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(l.Z.pending),t.prev=1,t.next=4,(0,d.wr)();case 4:n=t.sent,p(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),s(l.Z.error);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var p=function(t){var n=t.map((function(t){return{id:t.id,img:t.poster_path,title:t.original_title}}));r(n),s(l.Z.success)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{children:"Trending today"}),c===l.Z.pending&&(0,y.jsx)(x.Z,{}),c===l.Z.success&&(0,y.jsx)(_,{movies:e})]})}},4635:function(t,n,e){e.d(n,{IV:function(){return d},Sg:function(){return f},bI:function(){return p},wH:function(){return l},wr:function(){return o}});var r=e(5861),a=e(7757),i=e.n(a),c=e(1243),s="b52f4a97df843a5ead1cf8ccfba387fd",u=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var t=(0,r.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("trending/movie/day",{params:{api_key:s}});case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("search/movie",{params:{api_key:s,query:n}});case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(n),{params:{api_key:s}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(n,"/credits"),{params:{api_key:s}});case 2:return e=t.sent,r=e.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(n,"/reviews"),{params:{api_key:s}});case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},2019:function(t,n){n.Z={idle:"idle",pending:"pending",success:"success",error:"error"}}}]);
//# sourceMappingURL=713.b92c4d13.chunk.js.map