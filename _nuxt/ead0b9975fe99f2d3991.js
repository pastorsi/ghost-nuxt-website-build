(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return m}));n(23);var r=n(3),o=new(n(178).a)({version:"v3",url:"http://mcea.herokuapp.com",key:"f6cddefa0d7f4e99d6f470f535"});function c(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({include:"tags,authors",limit:15,filter:"tag:"+e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.pages.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},187:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("722a9c66",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";var r=n(187);n.n(r).a},205:function(t,e,n){(e=n(9)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates&display=swap);"]),e.push([t.i,".column[data-v-1a665fba],.hero-body[data-v-1a665fba],.sidenav header[data-v-1a665fba]{font-family:Montserrat,Verdana,Tahoma,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hero[data-v-1a665fba]{background-image:url(https://source.unsplash.com/dGxOgeXAXm8);background-repeat:no-repeat;background-position:50% 0;background-size:cover}",""]),t.exports=e},212:function(t,e,n){"use strict";n.r(e);n(23);var r=n(3),o=n(177),c={asyncData:function(t){var e=t.params;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.c)(e.slug);case 2:return n=t.sent,t.abrupt("return",{post:n});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.post.meta_title,meta:[{hid:"description",name:"description",content:this.post.meta_description}]}}},f=(n(204),n(4)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column is-two-thirds"},[n("h1",{staticClass:"title is-2 is-spaced has-text-info has-text-centered"},[t._v("\n          "+t._s(t.post.title)+"\n        ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.html)}})]),t._v(" "),n("div",{staticClass:"column"})])])])}),[],!1,null,"1a665fba",null);e.default=component.exports}}]);