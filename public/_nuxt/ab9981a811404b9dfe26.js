(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return v}));n(23);var r=n(3),o=new(n(178).a)({version:"v3",url:"http://mcea.herokuapp.com",key:"f6cddefa0d7f4e99d6f470f535"});function c(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({include:"tags,authors",limit:15,filter:"tag:"+e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.pages.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},181:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("6e251694",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";var r=n(181);n.n(r).a},193:function(t,e,n){(e=n(9)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates&display=swap);"]),e.push([t.i,".column[data-v-595bb8e8],.hero-body[data-v-595bb8e8],.sidenav header[data-v-595bb8e8]{font-family:Montserrat,Verdana,Tahoma,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hero[data-v-595bb8e8]{background-image:url(https://source.unsplash.com/dGxOgeXAXm8);background-repeat:no-repeat;background-position:50% 0;background-size:cover}",""]),t.exports=e},213:function(t,e,n){"use strict";n.r(e);n(23);var r=n(3),o=n(177),c={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"event",t.next=3,Object(o.b)("event");case 3:return e=t.sent,t.abrupt("return",{posts:e});case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Local events",meta:[{hid:"description",name:"description",content:"Events list"}]}}},l=(n(192),n(4)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column is-two-thirds"},[n("h1",{staticClass:"title has-text-info"},[t._v("\n        Local events\n      ")]),t._v(" "),n("p",{staticClass:"subtitle is-5"},[t._v("\n        The events in the list below are organised by churches or ministries\n        who send representatives to our gatherings.\n      ")]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-multiline"},t._l(t.posts,(function(e,r){return n("div",{key:r,staticClass:"column is-one-thirds"},[n("nuxt-link",{attrs:{to:{path:e.slug}}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-96x96"},[n("img",{attrs:{src:e.feature_image,alt:e.title}})])]),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[t._v("\n                        Author: "+t._s(e.authors[0].name)+"\n                      ")])])]),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"is-medium"},[t._v(t._s(e.excerpt))]),t._v(" "),n("button",{staticClass:"button is-info"},[t._v("Read more")])])])])])],1)})),0)])]),t._v(" "),n("div",{staticClass:"column"})])])}),[],!1,null,"595bb8e8",null);e.default=component.exports}}]);