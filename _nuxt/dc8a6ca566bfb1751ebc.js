(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return m}));n(23);var r=n(3),o=new(n(178).a)({version:"v3",url:"http://mcea.herokuapp.com",key:"f6cddefa0d7f4e99d6f470f535"});function c(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({include:"tags,authors",limit:15,filter:"tag:"+e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.pages.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},179:function(t,e,n){var content=n(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("781c0cfe",content,!0,{sourceMap:!1})},188:function(t,e,n){"use strict";var r=n(179);n.n(r).a},189:function(t,e,n){(e=n(9)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates&display=swap);"]),e.push([t.i,".column[data-v-12b54ffa],.hero-body[data-v-12b54ffa],.sidenav header[data-v-12b54ffa]{font-family:Montserrat,Verdana,Tahoma,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hero[data-v-12b54ffa]{background-image:url(https://source.unsplash.com/dGxOgeXAXm8);background-repeat:no-repeat;background-position:50% 0;background-size:cover}",""]),t.exports=e},216:function(t,e,n){"use strict";n.r(e);n(23);var r=n(3),o=n(177),c={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("about-us");case 2:return e=t.sent,t.abrupt("return",{page:e});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.page.meta_title,meta:[{hid:"description",name:"description",content:this.page.meta_description}]}}},f=(n(188),n(4)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column is-two-thirds"},[n("h1",{staticClass:"title has-text-info"},[t._v(t._s(t.page.title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.page.html)}},[t._v(t._s(t.page.html))])]),t._v(" "),n("div",{staticClass:"column"})])])])}),[],!1,null,"12b54ffa",null);e.default=component.exports}}]);