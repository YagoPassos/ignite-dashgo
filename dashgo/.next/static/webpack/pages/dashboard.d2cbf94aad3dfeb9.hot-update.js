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

/***/ "./src/components/Header/NotificationsNav.tsx":
/*!****************************************************!*\
  !*** ./src/components/Header/NotificationsNav.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotificationsNav\": function() { return /* binding */ NotificationsNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n\n\n\nfunction NotificationsNav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n        spacing: [\n            \"6\",\n            \"8\"\n        ],\n        mx: [\n            \"6\",\n            \"8\"\n        ],\n        pr: [\n            \"6\",\n            \"8\"\n        ],\n        py: [\n            \"6\",\n            \"8\"\n        ],\n        color: \"gray.300\",\n        borderRightWidth: 1,\n        borderColor: \"gray.700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                as: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiNotificationLine,\n                fontSize: \"20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\NotificationsNav.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                as: react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiUserAddLine,\n                fontSize: \"20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\NotificationsNav.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yago\\\\Desktop\\\\Coisas\\\\RocketSeat - Ignite\\\\Chapter Four\\\\dashgo\\\\src\\\\components\\\\Header\\\\NotificationsNav.tsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = NotificationsNav;\nvar _c;\n$RefreshReg$(_c, \"NotificationsNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvTm90aWZpY2F0aW9uc05hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF5RTtBQUNOO0FBRTVELFNBQVNJLGdCQUFnQixHQUFHO0lBQy9CLHFCQUNJLDhEQUFDSixvREFBTTtRQUNISyxPQUFPLEVBQUU7WUFBQyxHQUFHO1lBQUUsR0FBRztTQUFDO1FBQ25CQyxFQUFFLEVBQUU7WUFBQyxHQUFHO1lBQUUsR0FBRztTQUFDO1FBQ2RDLEVBQUUsRUFBRTtZQUFDLEdBQUc7WUFBRSxHQUFHO1NBQUM7UUFDZEMsRUFBRSxFQUFFO1lBQUMsR0FBRztZQUFFLEdBQUc7U0FBQztRQUNkQyxLQUFLLEVBQUMsVUFBVTtRQUNoQkMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQkMsV0FBVyxFQUFDLFVBQVU7OzBCQUV0Qiw4REFBQ1Ysa0RBQUk7Z0JBQUNXLEVBQUUsRUFBRVYsOERBQWtCO2dCQUFFVyxRQUFRLEVBQUMsSUFBSTs7Ozs7b0JBQUc7MEJBQzlDLDhEQUFDWixrREFBSTtnQkFBQ1csRUFBRSxFQUFFVCx5REFBYTtnQkFBRVUsUUFBUSxFQUFDLElBQUk7Ozs7O29CQUFHOzs7Ozs7WUFDcEMsQ0FFWjtDQUNKO0FBaEJlVCxLQUFBQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL05vdGlmaWNhdGlvbnNOYXYudHN4PzNkNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0LCBBdmF0YXIsIEhTdGFjaywgSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFJpTm90aWZpY2F0aW9uTGluZSwgUmlVc2VyQWRkTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbnNOYXYoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIU3RhY2tcclxuICAgICAgICAgICAgc3BhY2luZz17Wyc2JywgJzgnXX1cclxuICAgICAgICAgICAgbXg9e1snNicsICc4J119XHJcbiAgICAgICAgICAgIHByPXtbJzYnLCAnOCddfVxyXG4gICAgICAgICAgICBweT17Wyc2JywgJzgnXX1cclxuICAgICAgICAgICAgY29sb3I9J2dyYXkuMzAwJ1xyXG4gICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPXsxfVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcj1cImdyYXkuNzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uIGFzPXtSaU5vdGlmaWNhdGlvbkxpbmV9IGZvbnRTaXplPScyMCcgLz5cclxuICAgICAgICAgICAgPEljb24gYXM9e1JpVXNlckFkZExpbmV9IGZvbnRTaXplPScyMCcgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiSFN0YWNrIiwiSWNvbiIsIlJpTm90aWZpY2F0aW9uTGluZSIsIlJpVXNlckFkZExpbmUiLCJOb3RpZmljYXRpb25zTmF2Iiwic3BhY2luZyIsIm14IiwicHIiLCJweSIsImNvbG9yIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckNvbG9yIiwiYXMiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/NotificationsNav.tsx\n"));

/***/ })

});