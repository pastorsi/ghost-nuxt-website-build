exports.ids=[8],exports.modules={40:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));var c=n(39);const d=new(n.n(c).a)({version:"v3",url:"https://www.easy-publish.online",key:"4c03bb64c9e551956c6526b2ad"});async function o(t){return await d.posts.browse({include:"tags,authors",limit:15,filter:"tag:"+t}).catch(t=>{console.error(t)})}async function r(t){return await d.posts.read({slug:t}).catch(t=>{console.error(t)})}async function l(t){return await d.pages.read({slug:t}).catch(t=>{console.error(t)})}},48:function(t,e){t.exports={}},57:function(t,e,n){"use strict";n.r(e);var c=n(48),d=n.n(c);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);e.default=d.a},66:function(t,e,n){"use strict";n.r(e);var c=n(40),d={layout:"HeroPage",asyncData:async()=>({page:await Object(c.a)("introducing-mcea")}),head(){return{title:this.page.meta_title,meta:[{hid:"description",name:"description",content:this.page.meta_description}]}}},o=n(1);var component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._ssrNode('<section class="hero is-dark is-fullheight" data-v-54bb0df3>',"</section>",[t._ssrNode('<div class="hero-body" data-v-54bb0df3><div class="container has-text-left" data-v-54bb0df3><h1 class="title has-text-warning" data-v-54bb0df3>'+t._ssrEscape(t._s(t.page.title))+"</h1></div></div> "),t._ssrNode('<div class="hero-foot has-text-centered" data-v-54bb0df3>',"</div>",[t._ssrNode('<span class="icon is-large has-text-warning box" data-v-54bb0df3>',"</span>",[n("font-awesome-icon",{staticStyle:{"font-size":"3em"},attrs:{icon:["fas","angle-double-down"]}})],1)])],2),t._ssrNode(' <section class="section" data-v-54bb0df3><div class="content" data-v-54bb0df3><div class="columns" data-v-54bb0df3><div class="column" data-v-54bb0df3></div> <div class="column is-two-thirds" data-v-54bb0df3><h1 class="title has-text-info" data-v-54bb0df3>'+t._ssrEscape(t._s(t.page.title))+"</h1> <div data-v-54bb0df3>"+t._s(t.page.html)+'</div></div> <div class="column" data-v-54bb0df3></div></div></div></section>')],2)}),[],!1,(function(t){var e=n(57);e.__inject__&&e.__inject__(t)}),"54bb0df3","2e66bd2d");e.default=component.exports}};