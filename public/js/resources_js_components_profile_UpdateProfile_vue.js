(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profile_UpdateProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/UpdateProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/UpdateProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: {
        name: "",
        age: "",
        sex: ""
      }
    };
  },
  methods: {
    onUpdate: function onUpdate(event) {
      event.preventDefault();
      this.axios.post("http://localhost:8084/api/profile/update", this.user).then(function (res) {
        return console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/profile/UpdateProfile.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/profile/UpdateProfile.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateProfile_vue_vue_type_template_id_727a6f42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=template&id=727a6f42& */ "./resources/js/components/profile/UpdateProfile.vue?vue&type=template&id=727a6f42&");
/* harmony import */ var _UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/UpdateProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UpdateProfile_vue_vue_type_template_id_727a6f42___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateProfile_vue_vue_type_template_id_727a6f42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/UpdateProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/UpdateProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/profile/UpdateProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/UpdateProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/profile/UpdateProfile.vue?vue&type=template&id=727a6f42&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/profile/UpdateProfile.vue?vue&type=template&id=727a6f42& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_727a6f42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_727a6f42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateProfile_vue_vue_type_template_id_727a6f42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateProfile.vue?vue&type=template&id=727a6f42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/UpdateProfile.vue?vue&type=template&id=727a6f42&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/UpdateProfile.vue?vue&type=template&id=727a6f42&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/UpdateProfile.vue?vue&type=template&id=727a6f42& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      [
        _c(
          "b-form",
          {
            attrs: { action: "", method: "post" },
            on: { submit: _vm.onUpdate }
          },
          [
            _c("b-form-file", {
              attrs: {
                placeholder: "Choose a file or drop it here...",
                "drop-placeholder": "Drop file here...",
                id: "file",
                accept: "image/*"
              }
            }),
            _vm._v(" "),
            _c("b-form-input", {
              attrs: { placeholder: "Enter your name" },
              model: {
                value: _vm.user.name,
                callback: function($$v) {
                  _vm.$set(_vm.user, "name", $$v)
                },
                expression: "user.name"
              }
            }),
            _vm._v(" "),
            _c("b-form-input", {
              attrs: { placeholder: "Enter your sex" },
              model: {
                value: _vm.user.sex,
                callback: function($$v) {
                  _vm.$set(_vm.user, "sex", $$v)
                },
                expression: "user.sex"
              }
            }),
            _vm._v(" "),
            _c("b-form-input", {
              attrs: { placeholder: "Enter your age" },
              model: {
                value: _vm.user.age,
                callback: function($$v) {
                  _vm.$set(_vm.user, "age", $$v)
                },
                expression: "user.age"
              }
            }),
            _vm._v(" "),
            _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
              _vm._v("Update")
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);