exports.ids = [8];
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

/***/ 50:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54bb0df3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54bb0df3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54bb0df3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54bb0df3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54bb0df3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_54bb0df3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=54bb0df3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero is-dark is-fullheight\" data-v-54bb0df3>","</section>",[_vm._ssrNode("<div class=\"hero-body\" data-v-54bb0df3><div class=\"container has-text-left\" data-v-54bb0df3><h1 class=\"title has-text-warning\" data-v-54bb0df3>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h1></div></div> "),_vm._ssrNode("<div class=\"hero-foot has-text-centered\" data-v-54bb0df3>","</div>",[_vm._ssrNode("<span class=\"icon is-large has-text-warning box\" data-v-54bb0df3>","</span>",[_c('font-awesome-icon',{staticStyle:{"font-size":"3em"},attrs:{"icon":['fas', 'angle-double-down']}})],1)])],2),_vm._ssrNode(" <section class=\"section\" data-v-54bb0df3><div class=\"content\" data-v-54bb0df3><div class=\"columns\" data-v-54bb0df3><div class=\"column\" data-v-54bb0df3></div> <div class=\"column is-two-thirds\" data-v-54bb0df3><h1 class=\"title has-text-info\" data-v-54bb0df3>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h1> <div data-v-54bb0df3>"+(_vm._s(_vm.page.html))+"</div></div> <div class=\"column\" data-v-54bb0df3></div></div></div></section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=54bb0df3&scoped=true&

// EXTERNAL MODULE: ./src/api/posts.js
var posts = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  layout: 'HeroPage',

  async asyncData() {
    const page = await Object(posts["a" /* getPage */])('introducing-mcea');
    return {
      page
    };
  },

  head() {
    return {
      title: this.page.meta_title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.page.meta_description
      }]
    };
  }

});
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "54bb0df3",
  "2e66bd2d"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map