(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return h}));n(165);var r=n(166),c=new(n(168).a)({version:"v3",url:"https://www.easy-publish.online",key:"4c03bb64c9e551956c6526b2ad"});function o(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.browse({include:"tags,authors",limit:15,filter:"tag:"+e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.pages.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},172:function(t,e,n){},181:function(t,e,n){"use strict";var r=n(172);n.n(r).a},194:function(t,e,n){"use strict";n.r(e);n(165);var r=n(166),c=n(167),o={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("basis-of-faith");case 2:return e=t.sent,t.abrupt("return",{page:e});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.page.meta_title,meta:[{hid:"description",name:"description",content:this.page.meta_description}]}}},l=(n(181),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column is-two-thirds"},[n("h1",{staticClass:"title has-text-info"},[t._v(t._s(t.page.title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.page.html)}},[t._v(t._s(t.page.html))])]),t._v(" "),n("div",{staticClass:"column"})])])])}),[],!1,null,"619130d4",null);e.default=component.exports}}]);