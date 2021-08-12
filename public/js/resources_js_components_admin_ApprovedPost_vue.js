(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_ApprovedPost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ApprovedPost.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ApprovedPost.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      posts: [],
      color: "",
      notify: ""
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("http://localhost:8084/admin/post/show").then(function (res) {
      console.log(res.data);
      _this.posts = res.data;

      _this.posts.map(function (element) {
        if (element.isApproved == 0) {
          element.isApproved = "Chưa được duyệt";
          element.color = "blue";
        } else {
          element.isApproved = "Đã được duyệt";
          element.color = "yellow";
        }

        return element;
      });
    });
  },
  computed: {},
  methods: {
    approve: function approve(event, index, postID, userID) {
      var _this2 = this;

      var approveAPI = "http://localhost:8084/admin/post/approve";
      var notifyAPI = "http://localhost:8084/api/notifications/post";
      var approveRequest = axios.put(approveAPI, {
        postID: postID
      });
      var notifyRequest = axios.post(notifyAPI, {
        userID: userID
      });
      axios.all([approveRequest, notifyRequest]).then(axios.spread(function () {
        _this2.posts[index].isApproved = "Đã được duyệt";
        event.target.style.background = "yellow";
      }))["catch"](function (errors) {// react on errors.
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/ApprovedPost.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/ApprovedPost.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApprovedPost_vue_vue_type_template_id_d31e563c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApprovedPost.vue?vue&type=template&id=d31e563c& */ "./resources/js/components/admin/ApprovedPost.vue?vue&type=template&id=d31e563c&");
/* harmony import */ var _ApprovedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApprovedPost.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ApprovedPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ApprovedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ApprovedPost_vue_vue_type_template_id_d31e563c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApprovedPost_vue_vue_type_template_id_d31e563c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ApprovedPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ApprovedPost.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/ApprovedPost.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApprovedPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ApprovedPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/ApprovedPost.vue?vue&type=template&id=d31e563c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/ApprovedPost.vue?vue&type=template&id=d31e563c& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedPost_vue_vue_type_template_id_d31e563c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedPost_vue_vue_type_template_id_d31e563c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApprovedPost_vue_vue_type_template_id_d31e563c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApprovedPost.vue?vue&type=template&id=d31e563c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ApprovedPost.vue?vue&type=template&id=d31e563c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ApprovedPost.vue?vue&type=template&id=d31e563c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ApprovedPost.vue?vue&type=template&id=d31e563c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.posts, function(post, index) {
                return _c("tr", { key: index }, [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.userID))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.username))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.email))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.address))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.cost))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.area))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.type_room))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.live_with_host))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.isApproved))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        style: { background: post.color },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.approve(
                              $event,
                              index,
                              post.postID,
                              post.userID
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                    Approve\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n                                    Delete\n                                "
                        )
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("STT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("userID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Username")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cost")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Area")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Type room")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Live with host")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("isApproved")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);