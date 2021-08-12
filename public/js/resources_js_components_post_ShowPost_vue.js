(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_post_ShowPost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowPost.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowPost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      post: {},
      form: {},
      display: false,
      comments: []
    };
  },
  created: function created() {
    var _this = this;

    var showApi = "http://localhost:8084/api/post/show/".concat(this.$route.params.id);
    var commentApi = "http://localhost:8084/api/comment/show/".concat(this.$route.params.id);
    var showRequest = axios.get(showApi);
    var commentRequest = axios.get(commentApi);
    axios.all([showRequest, commentRequest]).then(axios.spread(function () {
      for (var _len = arguments.length, responses = new Array(_len), _key = 0; _key < _len; _key++) {
        responses[_key] = arguments[_key];
      }

      _this.post = responses[0].data;
      _this.comments = responses[1].data;
    }))["catch"](function (errors) {});
  },
  methods: {
    updatePost: function updatePost() {
      var _this2 = this;

      this.axios.get("http://localhost:8084/api/post/update").then(function (res) {
        _this2.display = res.data;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    handleComment: function handleComment(event) {
      var _this3 = this;

      event.preventDefault();
      this.form.postID = this.$route.params.id;
      this.axios.post("http://localhost:8084/api/comment/store", this.form).then(function (res) {
        console.log(res.data);

        _this3.comments.push(res.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/post/ShowPost.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/post/ShowPost.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowPost_vue_vue_type_template_id_ba91f09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=template&id=ba91f09e& */ "./resources/js/components/post/ShowPost.vue?vue&type=template&id=ba91f09e&");
/* harmony import */ var _ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=script&lang=js& */ "./resources/js/components/post/ShowPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ShowPost_vue_vue_type_template_id_ba91f09e___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowPost_vue_vue_type_template_id_ba91f09e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/post/ShowPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/post/ShowPost.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/post/ShowPost.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/post/ShowPost.vue?vue&type=template&id=ba91f09e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/post/ShowPost.vue?vue&type=template&id=ba91f09e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_ba91f09e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_ba91f09e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_ba91f09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=template&id=ba91f09e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowPost.vue?vue&type=template&id=ba91f09e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowPost.vue?vue&type=template&id=ba91f09e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowPost.vue?vue&type=template&id=ba91f09e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [_vm._v("Address:" + _vm._s(_vm.post.address))]),
    _vm._v(" "),
    _c("div", [_vm._v("Cost:" + _vm._s(_vm.post.cost))]),
    _vm._v(" "),
    _c("div", [_vm._v("Area:" + _vm._s(_vm.post.area))]),
    _vm._v(" "),
    _c("div", [_vm._v("Type:" + _vm._s(_vm.post.type_room))]),
    _vm._v(" "),
    _c("div", [_vm._v("Host:" + _vm._s(_vm.post.live_with_host))]),
    _vm._v(" "),
    _c("div", [
      _c("button", { on: { click: _vm.updatePost } }, [_vm._v("update")])
    ]),
    _vm._v(" "),
    _vm.display
      ? _c(
          "div",
          [
            _c(
              "b-form",
              { attrs: { action: "", method: "post" } },
              [_c("b-form-input", { attrs: { placeholder: "Update Post" } })],
              1
            )
          ],
          1
        )
      : _c("div", [
          _c("p", { staticStyle: { color: "red" } }, [
            _vm._v("Bạn không có quyền update bài này")
          ])
        ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "b-form",
          {
            attrs: { action: "", method: "post" },
            on: { submit: _vm.handleComment }
          },
          [
            _c("b-form-input", {
              attrs: { placeholder: "Comment" },
              model: {
                value: _vm.form.content,
                callback: function($$v) {
                  _vm.$set(_vm.form, "content", $$v)
                },
                expression: "form.content"
              }
            }),
            _vm._v(" "),
            _c("button", { attrs: { type: "submit" } }, [_vm._v("Gửi")])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      _vm._l(_vm.comments, function(comment, index) {
        return _c("div", { key: index }, [
          _c("p", [_vm._v(_vm._s(comment.username))]),
          _vm._v(" "),
          _c("h4", [_vm._v(_vm._s(comment.comment))])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);