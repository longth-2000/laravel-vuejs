(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_post_CreatePost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CreatePost.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CreatePost.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: {},
      file: []
    };
  },
  methods: {
    updateImage: function updateImage(e) {
      this.file = e.target.files;
      console.log(this.file);
    },
    createPost: function createPost(event) {
      var _this = this;

      event.preventDefault();
      var formData = new FormData();

      for (var i = 0; i < this.file.length; i++) {
        formData.append("file[]", this.file[i]);
      }

      this.axios.post("http://localhost:8084/api/post/create", this.user).then(function (response) {
        return response.data;
      }).then(function (postID) {
        formData.append("postID", postID);

        _this.axios.post("http://localhost:8084/api/post/image", formData).then(function (res) {
          console.log(res.data);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/post/CreatePost.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/post/CreatePost.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreatePost_vue_vue_type_template_id_96c190a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePost.vue?vue&type=template&id=96c190a0& */ "./resources/js/components/post/CreatePost.vue?vue&type=template&id=96c190a0&");
/* harmony import */ var _CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatePost.vue?vue&type=script&lang=js& */ "./resources/js/components/post/CreatePost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreatePost_vue_vue_type_template_id_96c190a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreatePost_vue_vue_type_template_id_96c190a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/post/CreatePost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/post/CreatePost.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/post/CreatePost.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CreatePost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/post/CreatePost.vue?vue&type=template&id=96c190a0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/post/CreatePost.vue?vue&type=template&id=96c190a0& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_template_id_96c190a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_template_id_96c190a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePost_vue_vue_type_template_id_96c190a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePost.vue?vue&type=template&id=96c190a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CreatePost.vue?vue&type=template&id=96c190a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CreatePost.vue?vue&type=template&id=96c190a0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CreatePost.vue?vue&type=template&id=96c190a0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "b-form",
        {
          attrs: { action: "", method: "post" },
          on: { submit: _vm.createPost }
        },
        [
          _c("b-form-file", {
            attrs: {
              placeholder: "Choose a file or drop it here...",
              "drop-placeholder": "Drop file here...",
              id: "file",
              accept: "image/*",
              multiple: ""
            },
            on: { change: _vm.updateImage }
          }),
          _vm._v(" "),
          _c("b-form-input", {
            attrs: { placeholder: "Enter your phone" },
            model: {
              value: _vm.user.phone,
              callback: function($$v) {
                _vm.$set(_vm.user, "phone", $$v)
              },
              expression: "user.phone"
            }
          }),
          _vm._v(" "),
          _c("b-form-input", {
            attrs: { placeholder: "Enter your address" },
            model: {
              value: _vm.user.address,
              callback: function($$v) {
                _vm.$set(_vm.user, "address", $$v)
              },
              expression: "user.address"
            }
          }),
          _vm._v(" "),
          _c(
            "b-form-select",
            {
              attrs: { placeholder: "Enter your type of room" },
              model: {
                value: _vm.user.type,
                callback: function($$v) {
                  _vm.$set(_vm.user, "type", $$v)
                },
                expression: "user.type"
              }
            },
            [
              _vm._v(">\n            "),
              _c("b-form-select-option", { attrs: { value: "Chung cư" } }, [
                _vm._v("Chung cư")
              ]),
              _vm._v(" "),
              _c(
                "b-form-select-option",
                { attrs: { value: "Phòng trọ mini" } },
                [_vm._v("Phòng trọ mini")]
              ),
              _vm._v(" "),
              _c(
                "b-form-select-option",
                { attrs: { value: "Nhà nguyên căn" } },
                [_vm._v("Nhà nguyên căn")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("b-form-input", {
            attrs: { placeholder: "Enter your cost per month" },
            model: {
              value: _vm.user.costs,
              callback: function($$v) {
                _vm.$set(_vm.user, "costs", $$v)
              },
              expression: "user.costs"
            }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("b-form-input", {
            attrs: { placeholder: "Enter your area" },
            model: {
              value: _vm.user.area,
              callback: function($$v) {
                _vm.$set(_vm.user, "area", $$v)
              },
              expression: "user.area"
            }
          }),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Có sống với chủ nhà không" } },
            [
              _c(
                "b-form-radio",
                {
                  attrs: { name: "some-radios", value: "true" },
                  model: {
                    value: _vm.user.host,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "host", $$v)
                    },
                    expression: "user.host"
                  }
                },
                [_vm._v("Có")]
              ),
              _vm._v(" "),
              _c(
                "b-form-radio",
                {
                  attrs: { name: "some-radios", value: "false" },
                  model: {
                    value: _vm.user.host,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "host", $$v)
                    },
                    expression: "user.host"
                  }
                },
                [_vm._v("Không")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
            _vm._v("Create")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);