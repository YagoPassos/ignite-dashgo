"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Header/Profile.tsx":
/*!*******************************************!*\
  !*** ./src/components/Header/Profile.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Profile\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction Profile(param) {\n    var _showProfileData = param.showProfileData, showProfileData = _showProfileData === void 0 ? true : _showProfileData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        align: \"center\",\n        children: [\n            showProfileData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                mr: \"4\",\n                textAlign: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        children: \"Yago Passos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\Profile.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"gray.300\",\n                        fontSize: \"small\",\n                        children: \"yp.anjos@hotmail.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\Profile.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\Profile.tsx\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                size: \"md\",\n                name: \"Yago Passos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\Profile.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\Profile.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvUHJvZmlsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTJEO0FBTXBELFNBQVNJLE9BQU8sQ0FBQyxLQUF5QyxFQUFFOzJCQUEzQyxLQUF5QyxDQUF2Q0MsZUFBZSxFQUFmQSxlQUFlLGlDQUFHLElBQUk7SUFDNUMscUJBQ0ksOERBQUNMLGtEQUFJO1FBQUNNLEtBQUssRUFBQyxRQUFROztZQUNmRCxlQUFlLGtCQUNaLDhEQUFDSixpREFBRztnQkFBQ00sRUFBRSxFQUFDLEdBQUc7Z0JBQUNDLFNBQVMsRUFBQyxPQUFPOztrQ0FDekIsOERBQUNOLGtEQUFJO2tDQUFDLGFBQVc7Ozs7OzRCQUFPO2tDQUN4Qiw4REFBQ0Esa0RBQUk7d0JBQUNPLEtBQUssRUFBQyxVQUFVO3dCQUFDQyxRQUFRLEVBQUMsT0FBTztrQ0FBQyxzQkFFeEM7Ozs7OzRCQUFPOzs7Ozs7b0JBQ0w7MEJBR1YsOERBQUNQLG9EQUFNO2dCQUFDUSxJQUFJLEVBQUMsSUFBSTtnQkFBQ0MsSUFBSSxFQUFDLGFBQWE7Ozs7O29CQUFHOzs7Ozs7WUFDcEMsQ0FDVjtDQUNKO0FBZmVSLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1Byb2ZpbGUudHN4P2NmMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0LCBBdmF0YXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2ZpaWxlUHJvcHMge1xyXG4gICAgc2hvd1Byb2ZpbGVEYXRhPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2ZpbGUoeyBzaG93UHJvZmlsZURhdGEgPSB0cnVlIH06IFByb2ZpaWxlUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXggYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgIHtzaG93UHJvZmlsZURhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJveCBtcj0nNCcgdGV4dEFsaWduPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+WWFnbyBQYXNzb3M8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9J2dyYXkuMzAwJyBmb250U2l6ZT0nc21hbGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5cC5hbmpvc0Bob3RtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEF2YXRhciBzaXplPSdtZCcgbmFtZT1cIllhZ28gUGFzc29zXCIgLz5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiRmxleCIsIkJveCIsIlRleHQiLCJBdmF0YXIiLCJQcm9maWxlIiwic2hvd1Byb2ZpbGVEYXRhIiwiYWxpZ24iLCJtciIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFNpemUiLCJzaXplIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Profile.tsx\n"));

/***/ })

});