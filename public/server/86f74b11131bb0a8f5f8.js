exports.ids=[1],exports.modules={39:function(t,c,e){"use strict";e.d(c,"b",(function(){return o})),e.d(c,"c",(function(){return d})),e.d(c,"a",(function(){return l}));var n=e(38);const r=new(e.n(n).a)({version:"v3",url:"https://mcea.herokuapp.com",key:"f6cddefa0d7f4e99d6f470f535"});async function o(t){return await r.posts.browse({include:"tags,authors",limit:15,filter:"tag:"+t}).catch(t=>{console.error(t)})}async function d(t){return await r.posts.read({slug:t}).catch(t=>{console.error(t)})}async function l(t){return await r.pages.read({slug:t}).catch(t=>{console.error(t)})}},48:function(t,c){t.exports={}},57:function(t,c,e){"use strict";e.r(c);var n=e(48),r=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(c,t,(function(){return n[t]}))}(o);c.default=r.a},63:function(t,c,e){"use strict";e.r(c);var n=e(39),r={asyncData:async({params:t})=>({post:await Object(n.c)(t.slug)}),head(){return{title:this.post.meta_title,meta:[{hid:"description",name:"description",content:this.post.meta_description}]}}},o=e(1);var component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"section"},[this._ssrNode('<div class="content" data-v-7e55cc45><div class="columns" data-v-7e55cc45><div class="column" data-v-7e55cc45></div> <div class="column is-two-thirds" data-v-7e55cc45><h1 class="title is-2 is-spaced has-text-info has-text-centered" data-v-7e55cc45>'+this._ssrEscape("\n          "+this._s(this.post.title)+"\n        ")+"</h1> <div data-v-7e55cc45>"+this._s(this.post.html)+'</div></div> <div class="column" data-v-7e55cc45></div></div></div>')])}),[],!1,(function(t){var c=e(57);c.__inject__&&c.__inject__(t)}),"7e55cc45","2cb01be5");c.default=component.exports}};