exports.ids = [1];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPage; });
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
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

/***/ 51:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7e55cc45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7e55cc45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7e55cc45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7e55cc45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7e55cc45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_7e55cc45_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/_slug.vue?vue&type=template&id=7e55cc45&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section"},[_vm._ssrNode("<div class=\"content\" data-v-7e55cc45><div class=\"columns\" data-v-7e55cc45><div class=\"column\" data-v-7e55cc45></div> <div class=\"column is-two-thirds\" data-v-7e55cc45><h1 class=\"title is-2 is-spaced has-text-info has-text-centered\" data-v-7e55cc45>"+_vm._ssrEscape("\n          "+_vm._s(_vm.post.title)+"\n        ")+"</h1> <div data-v-7e55cc45>"+(_vm._s(_vm.post.html))+"</div></div> <div class=\"column\" data-v-7e55cc45></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/_slug.vue?vue&type=template&id=7e55cc45&scoped=true&

// EXTERNAL MODULE: ./src/api/posts.js
var posts = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/_slug.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    params
  }) {
    // eslint-disable-next-line no-return-await
    const post = await Object(posts["c" /* getSinglePost */])(params.slug);
    return {
      post
    };
  },

  head() {
    return {
      title: this.post.meta_title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.post.meta_description
      }]
    };
  }

});
// CONCATENATED MODULE: ./src/pages/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e55cc45",
  "2cb01be5"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map