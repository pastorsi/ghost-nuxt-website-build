exports.ids = [5];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPage; });
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tryghost_content_api__WEBPACK_IMPORTED_MODULE_0__);

const api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_0___default.a({
  version: 'v3',
  url: 'https://www.easy-publish.online',
  key: "4c03bb64c9e551956c6526b2ad"
});
async function getPosts(tagName) {
  // eslint-disable-next-line no-return-await
  return await api.posts.browse({
    include: 'tags,authors',
    limit: 15,
    filter: 'tag:' + tagName
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
async function getSinglePost(postSlug) {
  // eslint-disable-next-line no-return-await
  return await api.posts.read({
    slug: postSlug
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
async function getPage(pageSlug) {
  // eslint-disable-next-line no-return-await
  return await api.pages.read({
    slug: pageSlug
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44f8b6d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44f8b6d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44f8b6d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44f8b6d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44f8b6d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44f8b6d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/events/index.vue?vue&type=template&id=44f8b6d3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section"},[_vm._ssrNode("<div class=\"columns\" data-v-44f8b6d3>","</div>",[_vm._ssrNode("<div class=\"column\" data-v-44f8b6d3></div> "),_vm._ssrNode("<div class=\"column is-two-thirds\" data-v-44f8b6d3>","</div>",[_vm._ssrNode("<h1 class=\"title has-text-info\" data-v-44f8b6d3>\n        Local events\n      </h1> <p class=\"subtitle is-5\" data-v-44f8b6d3>\n        The events in the list below are organised by churches or ministries\n        who send representatives to our gatherings.\n      </p> "),_vm._ssrNode("<div class=\"container\" data-v-44f8b6d3>","</div>",[_vm._ssrNode("<div class=\"columns is-multiline\" data-v-44f8b6d3>","</div>",_vm._l((_vm.posts),function(post,index){return _vm._ssrNode("<div class=\"column is-one-thirds\" data-v-44f8b6d3>","</div>",[_c('nuxt-link',{attrs:{"to":{ path: post.slug }}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('figure',{staticClass:"image is-96x96"},[_c('img',{attrs:{"src":post.feature_image,"alt":post.title}})])]),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('p',{staticClass:"title is-4"},[_vm._v(_vm._s(post.title))]),_vm._v(" "),_c('p',{staticClass:"subtitle is-6"},[_vm._v("\n                        Author: "+_vm._s(post.authors[0].name)+"\n                      ")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{staticClass:"is-medium"},[_vm._v(_vm._s(post.custom_excerpt))]),_vm._v(" "),_c('button',{staticClass:"button is-info"},[_vm._v("Read more")])])])])])],1)}),0)])],2),_vm._ssrNode(" <div class=\"column\" data-v-44f8b6d3></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/events/index.vue?vue&type=template&id=44f8b6d3&scoped=true&

// EXTERNAL MODULE: ./src/api/posts.js
var api_posts = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/events/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var eventsvue_type_script_lang_js_ = ({
  async asyncData() {
    const tag = 'event';
    const posts = await Object(api_posts["b" /* getPosts */])(tag);
    return {
      posts
    };
  },

  head() {
    return {
      title: 'Local events',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Events list'
      }]
    };
  }

});
// CONCATENATED MODULE: ./src/pages/events/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_eventsvue_type_script_lang_js_ = (eventsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/events/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_eventsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "44f8b6d3",
  "53cb50d1"
  
)

/* harmony default export */ var events = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map